"""aXenic hero render (Blender/Cycles via bpy): their aXMD2150 GaAs broadband Mach-Zehnder modulator, built to the
mechanical drawing on its datasheet (axenic.co.uk aXMD-2150-Data-Sheet.pdf: 45 x 20 mm body, 31 mm across the four
mounting ears, two 14 mm fibre boots In/Out at one end, the SMPM RF connector P1 at the other, 14 DC pins DC1-DC14 on one
long side), gold-plated as on aXenic's own product images, with the printed lid label they show. Studio look, TOP-FIX
variant B lighting: one large soft key from upper left, low neutral fill, a dim rim from behind, no coloured light.
Transparent film with a shadow-catcher floor. Units: 1 = 10 mm. Usage: python render_axenic.py out.png W H samples"""
import bpy, sys, math, bmesh
from mathutils import Vector
out, W, H, S = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), int(sys.argv[4])
LABEL = sys.argv[5] if len(sys.argv) > 5 else 'label.png'
bpy.ops.wm.read_factory_settings(use_empty=True)
sc = bpy.context.scene
sc.render.engine = 'CYCLES'; sc.cycles.device = 'CPU'; sc.cycles.samples = S; sc.cycles.use_denoising = True
sc.cycles.max_bounces = 16; sc.cycles.glossy_bounces = 12
sc.cycles.caustics_reflective = False; sc.cycles.caustics_refractive = False; sc.cycles.blur_glossy = 0.6
sc.render.film_transparent = True
sc.render.resolution_x, sc.render.resolution_y = W, H
sc.view_settings.view_transform = 'AgX'; sc.view_settings.look = 'AgX - Base Contrast'
w = bpy.data.worlds.new('w'); sc.world = w; w.use_nodes = True
w.node_tree.nodes['Background'].inputs[0].default_value = (0.02, 0.02, 0.022, 1); w.node_tree.nodes['Background'].inputs[1].default_value = 1

def mat(name, base, metal=0.0, rough=0.4, bump=0.0, bscale=900.0):
    m = bpy.data.materials.new(name); m.use_nodes = True; nt = m.node_tree; p = nt.nodes['Principled BSDF']
    p.inputs['Base Color'].default_value = (*base, 1); p.inputs['Metallic'].default_value = metal; p.inputs['Roughness'].default_value = rough
    if bump:
        tc = nt.nodes.new('ShaderNodeTexCoord'); nz = nt.nodes.new('ShaderNodeTexNoise'); nz.inputs['Scale'].default_value = bscale
        nz.inputs['Detail'].default_value = 6
        bp = nt.nodes.new('ShaderNodeBump'); bp.inputs['Strength'].default_value = bump; bp.inputs['Distance'].default_value = 0.002
        nt.links.new(tc.outputs['Object'], nz.inputs['Vector']); nt.links.new(nz.outputs['Fac'], bp.inputs['Height']); nt.links.new(bp.outputs['Normal'], p.inputs['Normal'])
    return m
GOLD = mat('gold', (1.0, 0.77, 0.40), 1.0, 0.2, 0.12)
GOLDL = mat('goldlid', (1.0, 0.78, 0.42), 1.0, 0.27, 0.18, 1400)
PINM = mat('pin', (1.0, 0.8, 0.45), 1.0, 0.12)
GLASS = mat('bead', (0.05, 0.08, 0.07), 0.0, 0.08)
RUB = mat('boot', (0.035, 0.035, 0.038), 0.0, 0.55)
FIB = mat('fibre', (0.03, 0.12, 0.55), 0.0, 0.35)
PTFE = mat('ptfe', (0.9, 0.9, 0.88), 0.0, 0.5)

def bevel(o, wdt, seg=3):
    md = o.modifiers.new('bv', 'BEVEL'); md.width = wdt; md.segments = seg; md.limit_method = 'ANGLE'
def box(name, sx, sy, sz, loc, m, bv=0.02):
    bpy.ops.mesh.primitive_cube_add(size=1, location=loc); o = bpy.context.object; o.name = name; o.scale = (sx, sy, sz)
    bpy.ops.object.transform_apply(scale=True); o.data.materials.append(m)
    if bv: bevel(o, bv)
    return o
def cyl(name, r, depth, loc, rot, m, v=64):
    bpy.ops.mesh.primitive_cylinder_add(vertices=v, radius=r, depth=depth, location=loc, rotation=rot); o = bpy.context.object; o.name = name
    o.data.materials.append(m); return o

# flange plate with four eared corners and mounting holes (31 mm across the ears)
fl = box('flange', 4.5, 3.1, 0.1, (0, 0, 0.05), GOLD, 0.012)
for sx in (-1, 1):
    # cut the plate back between the ears (ears 6 mm long at each end)
    cut = box('cut', 3.3, 0.6, 0.3, (0, sx * 1.33, 0.05), GOLD, 0)
    md = fl.modifiers.new('c', 'BOOLEAN'); md.operation = 'DIFFERENCE'; md.object = cut; cut.hide_render = True; cut.hide_viewport = True
    for ex in (-1, 1):
        h = cyl('hole', 0.13, 0.4, (ex * 1.92, sx * 1.27, 0.05), (0, 0, 0), GOLD, 48)
        md = fl.modifiers.new('h', 'BOOLEAN'); md.operation = 'DIFFERENCE'; md.object = h; h.hide_render = True; h.hide_viewport = True
fl.modifiers.move(0, len(fl.modifiers) - 1)  # bevel last
# body and seam-welded lid
body = box('body', 4.5, 2.0, 0.78, (0, 0, 0.1 + 0.39), GOLD, 0.02)
lid = box('lid', 4.36, 1.86, 0.06, (0, 0, 0.88 + 0.03), GOLDL, 0.018)
# printed label on the lid
bpy.ops.mesh.primitive_plane_add(size=1, location=(0.35, 0, 0.9405)); lab = bpy.context.object; lab.scale = (2.9, 1.26, 1)
lm = bpy.data.materials.new('label'); lm.use_nodes = True; nt = lm.node_tree; p = nt.nodes['Principled BSDF']
tx = nt.nodes.new('ShaderNodeTexImage'); tx.image = bpy.data.images.load(LABEL); nt.links.new(tx.outputs['Color'], p.inputs['Base Color'])
p.inputs['Roughness'].default_value = 0.55; lab.data.materials.append(lm)
bpy.ops.object.transform_apply(scale=True)
# 14 DC pins on the long side facing the camera, in glass feedthrough beads
for i in range(14):
    x = -0.65 + i * 0.1
    cyl('bead', 0.045, 0.03, (x, -1.012, 0.3), (math.radians(90), 0, 0), GLASS, 24)
    cyl('pin', 0.019, 0.95, (x, -1.0 - 0.475, 0.3), (math.radians(90), 0, 0), PINM, 16)
# optical end: two collars and strain-relief boots, In and Out, with fibres
for yy in (-0.27, 0.27):
    cyl('collar', 0.13, 0.22, (-2.25 - 0.11, yy, 0.48), (0, math.radians(90), 0), GOLD, 48)
    bpy.ops.mesh.primitive_cone_add(vertices=48, radius1=0.12, radius2=0.055, depth=1.18, location=(-2.47 - 0.59, yy, 0.48), rotation=(0, math.radians(-90), 0))
    bt = bpy.context.object; bt.data.materials.append(RUB)
    # fibre: leaves the boot, bends down to the floor and runs out of shot to the left
    cu = bpy.data.curves.new('f', 'CURVE'); cu.dimensions = '3D'; cu.bevel_depth = 0.045; cu.bevel_resolution = 6
    sp = cu.splines.new('BEZIER'); sp.bezier_points.add(3)
    pts = [(-3.65, yy, 0.48), (-4.5, yy * 1.25, 0.11), (-5.9, yy * 1.6 - 0.45, 0.045), (-9.5, yy * 2.0 - 1.4, 0.045)]
    for bp, co in zip(sp.bezier_points, pts):
        bp.co = co; bp.handle_left_type = bp.handle_right_type = 'AUTO'
    fo = bpy.data.objects.new('fibre', cu); sc.collection.objects.link(fo); fo.data.materials.append(FIB)
# RF end: SMPM connector P1
cyl('smpm', 0.16, 0.3, (2.25 + 0.15, 0, 0.48), (0, math.radians(90), 0), GOLD, 64)
cyl('ptfe', 0.1, 0.02, (2.25 + 0.305, 0, 0.48), (0, math.radians(90), 0), PTFE, 48)
cyl('ctr', 0.02, 0.06, (2.25 + 0.32, 0, 0.48), (0, math.radians(90), 0), PINM, 16)
for o in list(sc.objects):
    if o.type == 'MESH' and o.name.startswith(('smpm', 'collar', 'pin', 'bead', 'ptfe', 'ctr', 'Cone')):
        o.select_set(True); bpy.context.view_layer.objects.active = o
bpy.ops.object.shade_smooth()
for o in sc.objects: o.select_set(False)
# floor: shadow catcher
bpy.ops.mesh.primitive_plane_add(size=80, location=(0, 0, 0)); flr = bpy.context.object; flr.is_shadow_catcher = True
fm = bpy.data.materials.new('floor'); fm.use_nodes = True; fp = fm.node_tree.nodes['Principled BSDF']
fp.inputs['Base Color'].default_value = (0.012, 0.013, 0.016, 1); fp.inputs['Roughness'].default_value = 0.35; flr.data.materials.append(fm)
# lights: emissive soft boxes so the gold shows real studio reflections
def softbox(name, loc, size, power, shape=(1, 1)):
    bpy.ops.object.light_add(type='AREA', location=loc); L = bpy.context.object; L.name = name
    L.data.shape = 'RECTANGLE'; L.data.size, L.data.size_y = size * shape[0], size * shape[1]; L.data.energy = power
    L.data.color = (1.0, 0.985, 0.965); return L
def aim(L, tgt=(0, 0, 0.4)):
    d = Vector(tgt) - L.location; L.rotation_euler = d.to_track_quat('-Z', 'Y').to_euler()
k = softbox('key', (-8, -5, 10), 7, 1500, (1, .6)); aim(k)
top = softbox('top', (0.5, 1.5, 9), 9, 650, (1, .7)); aim(top); top.visible_camera = False
f = softbox('fill', (8, -9, 2.5), 8, 150, (1, .5)); aim(f)
r = softbox('rim', (4, 10, 5), 3, 650, (1, 2.2)); aim(r)
s = softbox('strip', (-10, 1, 3), 2, 380, (0.25, 3)); aim(s)
# a white card in front, out of shot, so the front wall reflects light instead of the dark room
card = softbox('card', (1.5, -13, 2.2), 12, 420, (1, .35)); aim(card, (0, 0, 0.45)); card.visible_camera = False; card.visible_diffuse = False
# camera: 3/4 from the pin side, above
cd = bpy.data.cameras.new('cam'); cam = bpy.data.objects.new('cam', cd); sc.collection.objects.link(cam); sc.camera = cam
cd.lens = 100; cam.location = (4.6, -23.5, 13.6)
d = Vector((-1.15, 0.25, 0.3)) - cam.location; cam.rotation_euler = d.to_track_quat('-Z', 'Y').to_euler()
cd.dof.use_dof = True; cd.dof.focus_distance = (Vector((0, -0.6, 0.5)) - cam.location).length; cd.dof.aperture_fstop = 9
sc.render.filepath = out; bpy.ops.render.render(write_still=True)
print('done', out)
