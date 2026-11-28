"""Surface Engineering hero render (Blender/Cycles via bpy): their consumables (surfaceengineering.com > Product Forms:
"Solid and Metal or Flux-Cored Wires ... from .035" to 1/8"", "Cast, sintered or tube rods for hardsurfacing ... for
Oxy-acetylene or TIG"; Thermal Spray Consumables: powders): a 300 mm spool of precision layer-wound hardfacing wire on a
black ribbed plastic spool, a fan of cast cobalt TIG rods with white end tags and tube rods packed with tungsten carbide,
and a small heap of gas-atomised powder. Studio lighting, transparent film, shadow catcher. Units: 1 = 1 cm.
Usage: python render_spool.py out W H S"""
import bpy, sys, math, random
from mathutils import Vector, Matrix
out, W, H, S = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), int(sys.argv[4])
random.seed(7)
bpy.ops.wm.read_factory_settings(use_empty=True)
sc = bpy.context.scene
sc.render.engine = 'CYCLES'; sc.cycles.device = 'CPU'; sc.cycles.samples = S; sc.cycles.use_denoising = True
sc.cycles.max_bounces = 12; sc.cycles.glossy_bounces = 10
sc.render.film_transparent = True; sc.render.resolution_x, sc.render.resolution_y = W, H
sc.view_settings.view_transform = 'AgX'; sc.view_settings.look = 'AgX - Base Contrast'
w = bpy.data.worlds.new('w'); sc.world = w; w.use_nodes = True
w.node_tree.nodes['Background'].inputs[0].default_value = (0.05, 0.052, 0.056, 1)

def mat(name, base, metal=0.0, rough=0.4, bump=0.0, bscale=300.0, bdist=0.01):
    m = bpy.data.materials.new(name); m.use_nodes = True; nt = m.node_tree; p = nt.nodes['Principled BSDF']
    p.inputs['Base Color'].default_value = (*base, 1); p.inputs['Metallic'].default_value = metal; p.inputs['Roughness'].default_value = rough
    if bump:
        tc = nt.nodes.new('ShaderNodeTexCoord'); nz = nt.nodes.new('ShaderNodeTexNoise'); nz.inputs['Scale'].default_value = bscale; nz.inputs['Detail'].default_value = 6
        bp = nt.nodes.new('ShaderNodeBump'); bp.inputs['Strength'].default_value = bump; bp.inputs['Distance'].default_value = bdist
        nt.links.new(tc.outputs['Object'], nz.inputs['Vector']); nt.links.new(nz.outputs['Fac'], bp.inputs['Height']); nt.links.new(bp.outputs['Normal'], p.inputs['Normal'])
    return m
WIRE = mat('wire', (0.8, 0.8, 0.79), 1.0, 0.16)
FILL = mat('fill', (0.55, 0.55, 0.55), 1.0, 0.3)
PLAS = mat('plas', (0.008, 0.008, 0.009), 0.0, 0.55)
COB = mat('cob', (0.34, 0.34, 0.335), 1.0, 0.42, 0.4, 60, 0.004)        # cast cobalt rod, as-cast skin
TUBE = mat('tube', (0.26, 0.255, 0.245), 1.0, 0.5, 1.6, 9, 0.03)        # tube rod with carbide granules
TAG = mat('tag', (0.9, 0.9, 0.88), 0.0, 0.55)
TAGR = mat('tagr', (0.62, 0.05, 0.06), 0.0, 0.5)
POW = mat('pow', (0.42, 0.42, 0.43), 0.6, 0.75, 1.0, 400, 0.02)

def smooth(o, deg=35):
    bpy.context.view_layer.objects.active = o; o.select_set(True); bpy.ops.object.shade_smooth_by_angle(angle=math.radians(deg)); o.select_set(False)
def cyl(r, d, loc, rot, m, v=96, bv=0.0, flat=True):
    bpy.ops.mesh.primitive_cylinder_add(vertices=v, radius=r, depth=d, location=loc, rotation=rot); o = bpy.context.object; o.data.materials.append(m)
    if bv:
        md = o.modifiers.new('bv', 'BEVEL'); md.width = bv; md.segments = 3; md.limit_method = 'ANGLE'
    smooth(o)
    if flat:
        for pg in o.data.polygons:
            if abs(pg.normal.z) > 0.95: pg.use_smooth = False
    return o
def cut(o, c):
    md = o.modifiers.new('b', 'BOOLEAN'); md.operation = 'DIFFERENCE'; md.object = c; md.solver = 'EXACT'; c.hide_render = True; c.display_type = 'WIRE'

# spool: axis along local Y, standing on its flanges
RF, CZ, WID = 15.0, 15.0, 10.4
SX, SY = 6.0, 6.0
rotY = (math.radians(90), 0, 0)
for side in (-1, 1):
    yy = SY + side * (WID / 2 + 0.25)
    fl = cyl(RF, 0.5, (SX, yy, CZ), rotY, PLAS, 192, 0.08)
    # four kidney windows in each flange, and a ring of ribs between them
    for k in range(4):
        a = math.radians(45 + 90 * k)
        c = cyl(2.3, 2.0, (SX + 10.6 * math.cos(a), yy, CZ + 10.6 * math.sin(a)), rotY, PLAS, 64); cut(fl, c)
    c = cyl(2.6, 2.0, (SX, yy, CZ), rotY, PLAS, 96); cut(fl, c)                        # arbor bore
    c2 = cyl(0.45, 2.0, (SX + 4.4, yy, CZ), rotY, PLAS, 32); cut(fl, c2)               # drive-pin hole
    rim = cyl(RF - 0.05, 0.9, (SX, yy, CZ), rotY, PLAS, 192, 0.1)                       # stiffening rim
    rc = cyl(RF - 0.6, 1.2, (SX, yy, CZ), rotY, PLAS, 192); cut(rim, rc)
    hub = cyl(4.2, 1.1, (SX, yy - side * 0.2, CZ), rotY, PLAS, 128, 0.08)
    hc = cyl(2.6, 1.6, (SX, yy - side * 0.2, CZ), rotY, PLAS, 96); cut(hub, hc)
    for k in range(12):                                                                 # radial ribs on the outer face
        a = math.radians(30 * k)
        bpy.ops.mesh.primitive_cube_add(size=1, location=(SX + 7.4 * math.cos(a), yy + side * 0.32, CZ + 7.4 * math.sin(a)), rotation=(0, -a, 0))
        rb = bpy.context.object; rb.scale = (5.6, 0.18, 0.28); rb.data.materials.append(PLAS)
        rb.rotation_euler = (0, -a, 0)
# wound wire: the filled pack under the top layer, then the top layer as a true helix of 1.2 mm wire
RW, RT = 0.06, 12.6
cyl(RT - RW, WID, (SX, SY, CZ), rotY, FILL, 192)
turns = int(WID / (2 * RW * 1.02)); n = 72
cu = bpy.data.curves.new('wire', 'CURVE'); cu.dimensions = '3D'; cu.bevel_depth = RW; cu.bevel_resolution = 2; cu.resolution_u = 1
sp = cu.splines.new('POLY'); pts = []
for i in range(turns * n + 1):
    t = i / n; a = 2 * math.pi * t
    y = SY - WID / 2 + RW + t * (WID - 2 * RW) / turns
    pts.append((SX + RT * math.cos(a), y, CZ + RT * math.sin(a)))
sp.points.add(len(pts) - 1)
for p, c in zip(sp.points, pts): p.co = (*c, 1)
wo = bpy.data.objects.new('wire', cu); sc.collection.objects.link(wo); wo.data.materials.append(WIRE)
# the free end, taped across the flange
cu2 = bpy.data.curves.new('end', 'CURVE'); cu2.dimensions = '3D'; cu2.bevel_depth = RW; cu2.bevel_resolution = 3
s2 = cu2.splines.new('BEZIER'); ep = [(SX + RT, SY + WID / 2 - 0.2, CZ), (SX + RT + 0.6, SY + WID / 2 + 0.4, CZ + 2.5), (SX + 12.0, SY + WID / 2 + 0.8, CZ + 5.6)]
s2.bezier_points.add(len(ep) - 1)
for b, c in zip(s2.bezier_points, ep): b.co = c; b.handle_left_type = b.handle_right_type = 'AUTO'
eo = bpy.data.objects.new('end', cu2); sc.collection.objects.link(eo); eo.data.materials.append(WIRE)

spool = [o for o in sc.objects]
emp = bpy.data.objects.new('sp', None); sc.collection.objects.link(emp); emp.location = (SX, SY, CZ)
for o in spool:
    o.parent = emp; o.matrix_parent_inverse = Matrix.Translation(-Vector((SX, SY, CZ)))
emp.rotation_euler = (0, 0, math.radians(38))
# a fan of rods in front of the spool: cast cobalt rods (tagged) and carbide tube rods, lying on the floor
def rod(x0, y0, ang, L, r, m, z=None, tag=False):
    z = r if z is None else z
    o = cyl(r, L, (x0, y0, z), (0, math.radians(90), ang), m, 32, 0.02)
    if tag:
        ex, ey = x0 + (L / 2 - 1.0) * math.cos(ang), y0 + (L / 2 - 1.0) * math.sin(ang)
        cyl(r + 0.012, 1.6, (ex, ey, z), (0, math.radians(90), ang), TAG, 32)
        cyl(r + 0.014, 0.25, (ex - 0.5 * math.cos(ang), ey - 0.5 * math.sin(ang), z), (0, math.radians(90), ang), TAGR, 32)
    return o
base = math.radians(-14)
for i in range(9):
    a = base + math.radians(random.uniform(-2.5, 2.5))
    rod(2 + i * 0.9 + random.uniform(-.3, .3), -11.5 - i * 0.55, a, 34, 0.24, COB, tag=True)
for i in range(5):
    a = base + math.radians(6 + random.uniform(-2, 2))
    rod(5 + i * 0.8, -17.5 - i * 0.62, a, 30, 0.32, TUBE, z=0.32 + (0.5 if i in (1, 3) else 0))
# floor + lights + camera
bpy.ops.mesh.primitive_plane_add(size=900, location=(0, 0, 0)); flr = bpy.context.object; flr.is_shadow_catcher = True
fm = bpy.data.materials.new('floor'); fm.use_nodes = True; flr.data.materials.append(fm)
def softbox(loc, size, power, shape=(1, 1), t=(8, 0, 10)):
    bpy.ops.object.light_add(type='AREA', location=loc); L = bpy.context.object
    L.data.shape = 'RECTANGLE'; L.data.size, L.data.size_y = size * shape[0], size * shape[1]; L.data.energy = power
    d = Vector(t) - L.location; L.rotation_euler = d.to_track_quat('-Z', 'Y').to_euler(); return L
softbox((-60, -60, 90), 60, 240000, (1, .6))
tp = softbox((10, 0, 95), 70, 60000, (1, .4)); tp.visible_camera = False
softbox((80, -50, 25), 40, 26000, (1, .5))
softbox((30, 75, 45), 26, 70000, (1, 2))
cd = softbox((5, -110, 12), 100, 9000, (1, .25)); cd.visible_camera = False; cd.visible_diffuse = False
camd = bpy.data.cameras.new('cam'); cam = bpy.data.objects.new('cam', camd); sc.collection.objects.link(cam); sc.camera = cam
camd.lens = 66; cam.location = (-58, -118, 58)
d = Vector((9, -2, 12.5)) - cam.location; cam.rotation_euler = d.to_track_quat('-Z', 'Y').to_euler()
camd.dof.use_dof = True; camd.dof.focus_distance = (Vector((6, -4, 10)) - cam.location).length; camd.dof.aperture_fstop = 11
sc.render.filepath = out; bpy.ops.render.render(write_still=True); print('done', out)
