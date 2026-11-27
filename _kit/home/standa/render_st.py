"""Standa hero render (Blender/Cycles via bpy): a black-anodised motorised linear translation stage of the kind Standa
makes and shows in its catalogue (standa.lt > Motorised Positioners > motorized linear stages, 8MT175 photo): a long
base with stainless guide rails, a carriage with a grid of tapped holes, the exposed lead screw and its brass nut, an end
bracket and a stepper motor with machined end caps. Studio look, TOP-FIX variant B lighting: one large soft key from
upper left, low neutral fill, a dim rim, a white card in front out of shot. Transparent film, shadow-catcher floor.
Units: 1 = 10 mm. Usage: python render_st.py out.png W H samples"""
import bpy, sys, math
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
w.node_tree.nodes['Background'].inputs[0].default_value = (0.05, 0.052, 0.056, 1); w.node_tree.nodes['Background'].inputs[1].default_value = 1

def mat(name, base, metal=0.0, rough=0.4, bump=0.0, bscale=900.0):
    m = bpy.data.materials.new(name); m.use_nodes = True; nt = m.node_tree; p = nt.nodes['Principled BSDF']
    p.inputs['Base Color'].default_value = (*base, 1); p.inputs['Metallic'].default_value = metal; p.inputs['Roughness'].default_value = rough
    if bump:
        tc = nt.nodes.new('ShaderNodeTexCoord'); nz = nt.nodes.new('ShaderNodeTexNoise'); nz.inputs['Scale'].default_value = bscale
        nz.inputs['Detail'].default_value = 8
        bp = nt.nodes.new('ShaderNodeBump'); bp.inputs['Strength'].default_value = bump; bp.inputs['Distance'].default_value = 0.002
        nt.links.new(tc.outputs['Object'], nz.inputs['Vector']); nt.links.new(nz.outputs['Fac'], bp.inputs['Height']); nt.links.new(bp.outputs['Normal'], p.inputs['Normal'])
    return m
ANOD = mat('anod', (0.74, 0.75, 0.76), 1.0, 0.36, 0.22, 1500)       # clear-anodised aluminium (as on their silver stage)
SS = mat('ss', (0.8, 0.8, 0.81), 1.0, 0.18, 0.05, 700)                # stainless rails and screw
ALU = mat('alu', (0.82, 0.83, 0.84), 1.0, 0.28, 0.15, 1200)           # machined aluminium motor caps
BLK = mat('blk', (0.03, 0.03, 0.033), 0.5, 0.36, 0.2, 1500)        # black stepper body
SCRW = mat('scrw', (0.02, 0.02, 0.022), 0.9, 0.3)                   # black-oxide socket screws
BRASS = mat('brass', (0.95, 0.72, 0.36), 1.0, 0.2)                    # lead nut
HOLE = mat('hole', (0.005, 0.005, 0.006), 0.2, 0.6)
LAB = mat('lab', (0.85, 0.86, 0.86), 0.0, 0.5)                        # motor label

def bevel(o, wdt, seg=3):
    md = o.modifiers.new('bv', 'BEVEL'); md.width = wdt; md.segments = seg; md.limit_method = 'ANGLE'
def box(name, sx, sy, sz, loc, m, bv=0.06):
    bpy.ops.mesh.primitive_cube_add(size=1, location=loc); o = bpy.context.object; o.name = name; o.scale = (sx, sy, sz)
    bpy.ops.object.transform_apply(scale=True); o.data.materials.append(m)
    if bv: bevel(o, bv)
    return o
def cyl(name, r, depth, loc, rot, m, v=64):
    bpy.ops.mesh.primitive_cylinder_add(vertices=v, radius=r, depth=depth, location=loc, rotation=rot); o = bpy.context.object; o.name = name
    o.data.materials.append(m); return o
def cut(o, c):
    md = o.modifiers.new('b', 'BOOLEAN'); md.operation = 'DIFFERENCE'; md.object = c; c.hide_render = True; c.hide_viewport = True

L, Wd = 30.0, 9.0
# base with a central channel for the lead screw
base = box('base', L, Wd, 2.0, (0, 0, 1.0), ANOD, 0)
ch = box('ch', L - 3, 2.6, 1.4, (-0.6, 0, 1.9), ANOD, 0); cut(base, ch)
for sx in (-1, 1):
    g = box('gr', L + 1, 0.5, 0.35, (0, sx * 3.4, 2.0), ANOD, 0); cut(base, g)
bevel(base, 0.06)
# stainless guide rails in the grooves
for sx in (-1, 1): box('rail', L - 0.6, 0.46, 0.34, (0, sx * 3.4, 2.0), SS, 0.02)
# lead screw and its brass nut
scr = cyl('screw', 0.42, L - 3.4, (-0.6, 0, 1.85), (0, math.radians(90), 0), SS, 48)
nt = SS.node_tree
# carriage, offset toward the far end, with a grid of tapped holes
CX = -6.0
car = box('car', 10.0, Wd, 1.5, (CX, 0, 2.95), ANOD, 0)
for i in range(4):
    for j in range(3):
        h = cyl('th', 0.28, 1.0, (CX - 3.75 + 2.5 * i, -2.5 + 2.5 * j, 3.5), (0, 0, 0), ANOD, 32); cut(car, h)
        cyl('thb', 0.28, 0.02, (CX - 3.75 + 2.5 * i, -2.5 + 2.5 * j, 3.2), (0, 0, 0), HOLE, 32)
bevel(car, 0.05)
nut = box('nut', 1.6, 1.6, 0.9, (CX + 5.4, 0, 2.05), BRASS, 0.04)
# end bracket and stepper motor
endb = box('endb', 1.6, Wd, 3.6, (L / 2 + 0.8, 0, 1.8), ANOD, 0.06)
endb2 = box('endb2', 1.0, Wd * 0.9, 2.6, (-L / 2 - 0.5, 0, 1.3), ANOD, 0.06)
MX = L / 2 + 1.6 + 2.1
mot = box('motor', 4.2, 4.2, 4.2, (MX, 0, 2.3), BLK, 0.3)
for dx in (-2.35, 2.35):
    cap = box('cap', 0.5, 4.3, 4.3, (MX + dx, 0, 2.3), ALU, 0.25)
lab = box('label', 2.4, 0.02, 1.6, (MX, -2.11, 2.5), LAB, 0)

# socket-head screws: carriage corners, end brackets, along the rails; motor flange screws
def screw(x, y, z, r=0.32, axis='z'):
    rot = (0, 0, 0) if axis == 'z' else ((0, math.radians(90), 0) if axis == 'x' else (math.radians(90), 0, 0))
    hd = cyl('sh', r, 0.3, (x, y, z), rot, SCRW, 40); bevel(hd, 0.04)
    off = {'z': (0, 0, 0.16), 'x': (0.16, 0, 0), 'y': (0, -0.16, 0)}[axis]
    cyl('hx', r * 0.45, 0.06, (x + off[0], y + off[1], z + off[2]), rot, HOLE, 6)
for (x, y) in [(CX - 4.4, -3.9), (CX - 4.4, 3.9), (CX + 4.4, -3.9), (CX + 4.4, 3.9)]:
    screw(x, y, 3.82, 0.3)
for y in (-3.0, 0, 3.0):
    screw(L / 2 + 0.8, y, 3.72, 0.3)
for x in range(-13, 14, 4):
    for sx in (-1, 1): screw(x, sx * 3.4, 2.2, 0.16)
for (y, z) in [(-1.55, 0.75), (1.55, 0.75), (-1.55, 3.85), (1.55, 3.85)]:
    screw(MX + 2.62, y, z, 0.22, 'x')
# limit switch block and its cable along the near side, a connector on the motor cable
lim = box('lim', 2.2, 0.9, 1.0, (8.0, -4.95, 1.2), BLK, 0.06)
cyl('limc', 0.12, 9.0, (12.6, -5.15, 0.4), (0, math.radians(90), 0), HOLE, 16)
con = cyl('conn', 0.5, 1.4, (MX + 2.6 + 3.2, 1.2, 0.9), (0, math.radians(90), 0), ALU, 40); bevel(con, 0.05)
cab = cyl('cable', 0.22, 3.0, (MX + 2.6 + 1.4, 1.2, 0.9), (0, math.radians(90), 0), HOLE, 24)
for o in list(sc.objects):
    if o.type == 'MESH' and o.name.split('.')[0] in ('screw', 'cable'):
        o.select_set(True); bpy.context.view_layer.objects.active = o
bpy.ops.object.shade_smooth()
for o in sc.objects: o.select_set(False)
# floor: shadow catcher
bpy.ops.mesh.primitive_plane_add(size=200, location=(0, 0, 0)); flr = bpy.context.object; flr.is_shadow_catcher = True
fm = bpy.data.materials.new('floor'); fm.use_nodes = True; fp = fm.node_tree.nodes['Principled BSDF']
fp.inputs['Base Color'].default_value = (0.012, 0.013, 0.016, 1); fp.inputs['Roughness'].default_value = 0.35; flr.data.materials.append(fm)
def softbox(name, loc, size, power, shape=(1, 1)):
    bpy.ops.object.light_add(type='AREA', location=loc); Lt = bpy.context.object; Lt.name = name
    Lt.data.shape = 'RECTANGLE'; Lt.data.size, Lt.data.size_y = size * shape[0], size * shape[1]; Lt.data.energy = power
    Lt.data.color = (1.0, 0.985, 0.965); return Lt
def aim(Lt, tgt=(2, 0, 2)):
    d = Vector(tgt) - Lt.location; Lt.rotation_euler = d.to_track_quat('-Z', 'Y').to_euler()
k = softbox("key", (-22, -14, 28), 18, 14000, (1, .6)); aim(k)
top = softbox('top', (2, 3, 26), 24, 3600, (1, .5)); aim(top); top.visible_camera = False
f = softbox('fill', (24, -24, 7), 16, 900, (1, .5)); aim(f)
r = softbox('rim', (10, 26, 12), 8, 3200, (1, 2.2)); aim(r)
card = softbox('card', (0, -34, 4), 30, 1500, (1, .3)); aim(card); card.visible_camera = False; card.visible_diffuse = False
cd = bpy.data.cameras.new('cam'); cam = bpy.data.objects.new('cam', cd); sc.collection.objects.link(cam); sc.camera = cam
cd.lens = 85; cam.location = (-39, -74, 49)
d = Vector((1.5, 0.5, 1.6)) - cam.location; cam.rotation_euler = d.to_track_quat('-Z', 'Y').to_euler()
cd.dof.use_dof = True; cd.dof.focus_distance = (Vector((-3, -2, 3)) - cam.location).length; cd.dof.aperture_fstop = 11
sc.render.filepath = out; bpy.ops.render.render(write_still=True)
print('done', out)
