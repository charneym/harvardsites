"""Vacuum Innovations hero render (Blender/Cycles via bpy): their four-position rotary crystal head, modelled on the
product design they publish (vacuuminnovations.com > Components > Crystal Heads: a machined body with a rounded end, a
rotating four-position crystal carousel with gold quartz crystals behind round apertures and spring slots, and two
cooling tubes). Stainless and bead-blasted aluminium, gold crystals. Studio look, TOP-FIX variant B lighting: one large
soft key from upper left, low neutral fill, a dim rim, a white card in front out of shot. Transparent film, shadow-catcher
floor. Units: 1 = 10 mm. Usage: python render_vi.py out.png W H samples"""
import bpy, sys, math, bmesh
from mathutils import Vector
out, W, H, S = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), int(sys.argv[4])
bpy.ops.wm.read_factory_settings(use_empty=True)
sc = bpy.context.scene
sc.render.engine = 'CYCLES'; sc.cycles.device = 'CPU'; sc.cycles.samples = S; sc.cycles.use_denoising = True
sc.cycles.max_bounces = 16; sc.cycles.glossy_bounces = 12
sc.cycles.caustics_reflective = False; sc.cycles.caustics_refractive = False; sc.cycles.blur_glossy = 0.6
sc.render.film_transparent = True
sc.render.resolution_x, sc.render.resolution_y = W, H
sc.view_settings.view_transform = 'AgX'; sc.view_settings.look = 'AgX - Base Contrast'
w = bpy.data.worlds.new('w'); sc.world = w; w.use_nodes = True
w.node_tree.nodes['Background'].inputs[0].default_value = (0.03, 0.032, 0.035, 1); w.node_tree.nodes['Background'].inputs[1].default_value = 1

def mat(name, base, metal=0.0, rough=0.4, bump=0.0, bscale=900.0):
    m = bpy.data.materials.new(name); m.use_nodes = True; nt = m.node_tree; p = nt.nodes['Principled BSDF']
    p.inputs['Base Color'].default_value = (*base, 1); p.inputs['Metallic'].default_value = metal; p.inputs['Roughness'].default_value = rough
    if bump:
        tc = nt.nodes.new('ShaderNodeTexCoord'); nz = nt.nodes.new('ShaderNodeTexNoise'); nz.inputs['Scale'].default_value = bscale
        nz.inputs['Detail'].default_value = 8
        bp = nt.nodes.new('ShaderNodeBump'); bp.inputs['Strength'].default_value = bump; bp.inputs['Distance'].default_value = 0.002
        nt.links.new(tc.outputs['Object'], nz.inputs['Vector']); nt.links.new(nz.outputs['Fac'], bp.inputs['Height']); nt.links.new(bp.outputs['Normal'], p.inputs['Normal'])
    return m
BLAST = mat('blasted', (0.80, 0.81, 0.82), 1.0, 0.38, 0.25, 1600)     # bead-blasted aluminium body
STEEL = mat('steel', (0.78, 0.78, 0.79), 1.0, 0.16, 0.06, 700)        # machined stainless carousel
TUBE = mat('tube', (0.84, 0.84, 0.85), 1.0, 0.24, 0.05, 400)                      # polished stainless tubes
GOLD = mat('gold', (1.0, 0.76, 0.42), 1.0, 0.14)                      # gold electrodes of the quartz crystals
DARK = mat('dark', (0.03, 0.03, 0.035), 0.3, 0.5)                     # recesses, socket heads
# turned (concentric) finish on the carousel face
nt = STEEL.node_tree; wv = nt.nodes.new('ShaderNodeTexWave'); wv.wave_type = 'RINGS'; wv.inputs['Scale'].default_value = 60; wv.inputs['Distortion'].default_value = 0.4
tc2 = nt.nodes.new('ShaderNodeTexCoord'); bp2 = nt.nodes.new('ShaderNodeBump'); bp2.inputs['Strength'].default_value = 0.12; bp2.inputs['Distance'].default_value = 0.001
nt.links.new(tc2.outputs['Object'], wv.inputs['Vector']); nt.links.new(wv.outputs['Fac'], bp2.inputs['Height']); nt.links.new(bp2.outputs['Normal'], nt.nodes['Principled BSDF'].inputs['Normal'])

def bevel(o, wdt, seg=3):
    md = o.modifiers.new('bv', 'BEVEL'); md.width = wdt; md.segments = seg; md.limit_method = 'ANGLE'
def cyl(name, r, depth, loc, rot, m, v=96):
    bpy.ops.mesh.primitive_cylinder_add(vertices=v, radius=r, depth=depth, location=loc, rotation=rot); o = bpy.context.object; o.name = name
    o.data.materials.append(m); return o
def boolean(o, cutter, op='DIFFERENCE'):
    md = o.modifiers.new('b', 'BOOLEAN'); md.operation = op; md.object = cutter; cutter.hide_render = True; cutter.hide_viewport = True

# body: a block with a rounded end (block + cylinder, unioned), lying on the floor; the carousel is on the rounded end's face
bpy.ops.mesh.primitive_cube_add(size=1, location=(1.6, 0, 1.2)); body = bpy.context.object; body.scale = (3.6, 3.0, 2.4)
bpy.ops.object.transform_apply(scale=True); body.data.materials.append(BLAST)
rnd = cyl('rnd', 1.5, 2.4, (-0.2, 0, 1.2), (0, 0, 0), BLAST)
boolean(body, rnd, 'UNION'); rnd.hide_render = True
# a machined groove all round the body
g = cyl('groove', 3.2, 0.06, (0.8, 0, 1.55), (0, 0, 0), BLAST, 128); g.scale = (1.5, 1.0, 1)
gb = bpy.data.objects.new('gb', None)
bpy.ops.mesh.primitive_cube_add(size=1, location=(1.6, 0, 1.55)); gcut = bpy.context.object; gcut.scale = (3.7, 3.1, 0.06)
bpy.ops.object.transform_apply(scale=True)
rcut = cyl('rcut', 1.56, 0.06, (-0.2, 0, 1.55), (0, 0, 0), BLAST)
g.hide_render = True; g.hide_viewport = True
inner = cyl('inner', 1.47, 0.2, (-0.2, 0, 1.55), (0, 0, 0), BLAST)
bpy.ops.mesh.primitive_cube_add(size=1, location=(1.6, 0, 1.55)); inner2 = bpy.context.object; inner2.scale = (3.5, 2.94, 0.2); bpy.ops.object.transform_apply(scale=True)
for c in (gcut, rcut):
    boolean(body, c, 'DIFFERENCE')
inner.data.materials.append(BLAST); inner2.data.materials.append(BLAST)
# a machined step across the top of the square end, as on their head
bpy.ops.mesh.primitive_cube_add(size=1, location=(3.1, 0, 2.3)); step = bpy.context.object; step.scale = (1.0, 3.2, 0.5); bpy.ops.object.transform_apply(scale=True)
boolean(body, step)
# tapped mounting holes on the side facing the camera
for (x, z) in [(0.9, 0.7), (2.4, 0.7)]:
    th = cyl('tap', 0.13, 0.4, (x, -1.5, z), (math.radians(90), 0, 0), BLAST, 48); boolean(body, th)
    cyl('tapd', 0.13, 0.02, (x, -1.36, z), (math.radians(90), 0, 0), DARK, 48)
bevel(body, 0.08)
# microdot feedthrough for the crystal signal, on the stepped end
md_ = cyl('mdot', 0.16, 0.5, (3.1, -0.0, 2.05), (0, 0, 0), STEEL, 48); bevel(md_, 0.02)
cyl('mdotg', 0.11, 0.1, (3.1, 0.0, 2.33), (0, 0, 0), GOLD, 48)
cyl('mhex', 0.24, 0.12, (3.1, 0.0, 1.86), (0, 0, 0), STEEL, 6)
# the carousel: a turned disc on the rounded end's top face, carrying four crystals
CX, CY, CZ = -0.2, 0, 2.4
car = cyl('carousel', 1.42, 0.34, (CX, CY, CZ + 0.17), (0, 0, 0), STEEL, 160); bevel(car, 0.03)
hub = cyl('hub', 0.32, 0.12, (CX, CY, CZ + 0.4), (0, 0, 0), STEEL, 64); bevel(hub, 0.02)
sock = cyl('sock', 0.11, 0.1, (CX, CY, CZ + 0.44), (0, 0, 0), DARK, 6)
for k in range(4):
    a = math.radians(45 + 90 * k); x, y = CX + 0.82 * math.cos(a), CY + 0.82 * math.sin(a)
    hole = cyl('ap', 0.4, 0.6, (x, y, CZ + 0.34), (0, 0, 0), STEEL, 96); boolean(car, hole)
    cyl('cr', 0.37, 0.04, (x, y, CZ + 0.12), (0, 0, 0), GOLD, 96)
    cyl('crd', 0.4, 0.02, (x, y, CZ + 0.09), (0, 0, 0), DARK, 96)
    # spring slots between the apertures
    b = math.radians(90 * k); sx, sy = CX + 0.92 * math.cos(b), CY + 0.92 * math.sin(b)
    bpy.ops.mesh.primitive_cube_add(size=1, location=(sx, sy, CZ + 0.34)); sl = bpy.context.object; sl.scale = (0.5, 0.07, 0.2)
    sl.rotation_euler = (0, 0, b); bpy.ops.object.transform_apply(scale=True, rotation=True); boolean(car, sl)
# two cooling tubes leaving the square end, angled up and away
for yy in (-0.75, 0.75):
    t = cyl('tube', 0.2, 7.0, (6.6, yy, 1.75), (0, math.radians(90), 0), TUBE, 64)
    t.rotation_euler = (0, math.radians(84), 0)
    bore = cyl('bore', 0.14, 7.4, (6.6, yy, 1.75), (0, math.radians(90), 0), TUBE, 48); bore.rotation_euler = (0, math.radians(84), 0); boolean(t, bore)
    fit = cyl('fit', 0.32, 0.5, (3.6, yy, 1.5), (0, math.radians(90), 0), STEEL, 6); bevel(fit, 0.02)
# socket-head screws on top of the body
for (x, y) in [(1.0, -1.1), (1.0, 1.1), (2.9, -1.1), (2.9, 1.1)]:
    s_ = cyl('scr', 0.17, 0.16, (x, y, 2.45), (0, 0, 0), STEEL, 48); bevel(s_, 0.02)
    cyl('hex', 0.08, 0.1, (x, y, 2.5), (0, 0, 0), DARK, 6)
for o in list(sc.objects):
    if o.type == 'MESH' and o.name.split('.')[0] in ('carousel', 'hub', 'cr', 'tube', 'fit', 'scr', 'ap'):
        o.select_set(True); bpy.context.view_layer.objects.active = o
bpy.ops.object.shade_smooth()
for o in sc.objects: o.select_set(False)
# floor: shadow catcher
bpy.ops.mesh.primitive_plane_add(size=120, location=(0, 0, 0)); flr = bpy.context.object; flr.is_shadow_catcher = True
fm = bpy.data.materials.new('floor'); fm.use_nodes = True; fp = fm.node_tree.nodes['Principled BSDF']
fp.inputs['Base Color'].default_value = (0.012, 0.013, 0.016, 1); fp.inputs['Roughness'].default_value = 0.35; flr.data.materials.append(fm)
def softbox(name, loc, size, power, shape=(1, 1)):
    bpy.ops.object.light_add(type='AREA', location=loc); L = bpy.context.object; L.name = name
    L.data.shape = 'RECTANGLE'; L.data.size, L.data.size_y = size * shape[0], size * shape[1]; L.data.energy = power
    L.data.color = (1.0, 0.985, 0.965); return L
def aim(L, tgt=(1.5, 0, 1.4)):
    d = Vector(tgt) - L.location; L.rotation_euler = d.to_track_quat('-Z', 'Y').to_euler()
k = softbox('key', (-12, -8, 16), 10, 3800, (1, .6)); aim(k)
top = softbox('top', (1.5, 2, 15), 12, 1300, (1, .7)); aim(top); top.visible_camera = False
f = softbox('fill', (12, -14, 4), 10, 320, (1, .5)); aim(f)
r = softbox('rim', (6, 16, 8), 4, 1500, (1, 2.2)); aim(r)
card = softbox('card', (0, -20, 3), 16, 700, (1, .35)); aim(card); card.visible_camera = False; card.visible_diffuse = False
cd = bpy.data.cameras.new('cam'); cam = bpy.data.objects.new('cam', cd); sc.collection.objects.link(cam); sc.camera = cam
cd.lens = 90; cam.location = (-12, -24, 16)
d = Vector((2.2, 0.3, 1.4)) - cam.location; cam.rotation_euler = d.to_track_quat('-Z', 'Y').to_euler()
cd.dof.use_dof = True; cd.dof.focus_distance = (Vector((0.4, -0.5, 1.8)) - cam.location).length; cd.dof.aperture_fstop = 11
sc.render.filepath = out; bpy.ops.render.render(write_still=True)
print('done', out)
