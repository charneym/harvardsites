"""NeuroFieldz hero: a Cycles render of the NeuroVEP headset as shown on neurofieldz.com (blue visor that carries the
smartphone stimulus display, white head strap, the wireless NeuroDot sensor pod at the back of the strap over the visual
cortex, with its dry nanostructured electrode pins facing the scalp). Studio light, real alpha.
Run: <venv with bpy>/bin/python render_hero.py out.png [W H samples]"""
import bpy, bmesh, math, sys, os
from mathutils import Vector
OUT = sys.argv[1] if len(sys.argv) > 1 else 'hero.png'
W = int(sys.argv[2]) if len(sys.argv) > 2 else 1600
H = int(sys.argv[3]) if len(sys.argv) > 3 else 1100
SAMP = int(sys.argv[4]) if len(sys.argv) > 4 else 96
bpy.ops.wm.read_factory_settings(use_empty=True)
S = bpy.context.scene

def mat(name, col, rough=.35, metal=0., coat=0., bump=0., bscale=600., spec=.5, sss=0.):
    m = bpy.data.materials.new(name); m.use_nodes = True
    nt = m.node_tree; b = nt.nodes['Principled BSDF']
    b.inputs['Base Color'].default_value = (*col, 1); b.inputs['Roughness'].default_value = rough
    b.inputs['Metallic'].default_value = metal
    b.inputs['Coat Weight'].default_value = coat; b.inputs['Coat Roughness'].default_value = .08
    if bump:
        n = nt.nodes.new('ShaderNodeTexNoise'); n.inputs['Scale'].default_value = bscale; n.inputs['Detail'].default_value = 8
        bp = nt.nodes.new('ShaderNodeBump'); bp.inputs['Strength'].default_value = bump; bp.inputs['Distance'].default_value = .0004
        nt.links.new(n.outputs['Fac'], bp.inputs['Height']); nt.links.new(bp.outputs['Normal'], b.inputs['Normal'])
    return m

def srgb(h):
    h = h.lstrip('#'); c = [int(h[i:i+2], 16) / 255 for i in (0, 2, 4)]
    return tuple((x / 12.92) if x <= .04045 else ((x + .055) / 1.055) ** 2.4 for x in c)

BLUE = mat('visor', srgb('#03306a'), rough=.5, coat=.35, bump=.12, bscale=2400)
BLUED = mat('visorD', srgb('#03142c'), rough=.14, coat=1.)
SEAM = mat('seam', srgb('#15191f'), rough=.6)
GREY = mat('grey', srgb('#5b6470'), rough=.5, bump=.05)
WHITE = mat('shell', srgb('#d6dce3'), rough=.45, coat=.3, bump=.05, bscale=1600)
GLASS = mat('glass', srgb('#05080d'), rough=.05, coat=1.)
FOAM = mat('foam', srgb('#1b1e23'), rough=.92, bump=.35, bscale=1400)
STRAP = mat('strap', srgb('#c9d0d8'), rough=.88, bump=.6, bscale=5200)
POD = mat('pod', srgb('#20252c'), rough=.3, coat=.7, bump=.02)
PIN = mat('pin', srgb('#d9c9a0'), rough=.22, metal=1.)
STEEL = mat('steel', srgb('#b9c1c9'), rough=.25, metal=1.)
LED = bpy.data.materials.new('led'); LED.use_nodes = True
e = LED.node_tree.nodes.new('ShaderNodeEmission'); e.inputs['Color'].default_value = (*srgb('#4cade6'), 1); e.inputs['Strength'].default_value = 25
LED.node_tree.links.new(e.outputs[0], LED.node_tree.nodes['Material Output'].inputs[0])

def put(o, m):
    o.data.materials.append(m); return o

def rbox(name, size, loc, bev, seg=10, m=None, sub=0):
    bpy.ops.mesh.primitive_cube_add(size=1, location=loc); o = bpy.context.object; o.name = name
    o.scale = size; bpy.ops.object.transform_apply(scale=True)
    md = o.modifiers.new('b', 'BEVEL'); md.width = bev; md.segments = seg; md.limit_method = 'NONE'
    if sub: s = o.modifiers.new('s', 'SUBSURF'); s.levels = sub; s.render_levels = sub
    bpy.ops.object.shade_smooth()
    if m: put(o, m)
    return o

# ---- visor (x = width, y = depth: +y toward the face, z = up). Origin at the visor centre.
VW, VD, VH = .192, .092, .108
vis = rbox('visor', (VW, VD, VH), (0, 0, 0), .022, 12, BLUE)
for v in vis.data.vertices:
    t = (v.co.y + VD / 2) / VD
    v.co.x *= 1 - .07 * t; v.co.z *= 1 - .1 * t
    v.co.y -= .012 * (1 - (2 * v.co.x / VW) ** 2)
# front cover: a slightly proud panel with a soft crease, the phone bay
sm_ = rbox('seam', (VW - .024, .006, VH - .024), (0, -VD / 2 - .007, 0), .014, 8, SEAM)
fr = rbox('front', (VW - .03, .008, VH - .03), (0, -VD / 2 - .009, 0), .012, 10, BLUED)
# the strap hinge screws
for sx in (-1, 1):
    bpy.ops.mesh.primitive_cylinder_add(radius=.0045, depth=.003, location=(sx * (VW / 2 + .011), VD / 2 + .03, -.004), rotation=(0, math.pi / 2, 0))
    bpy.ops.object.shade_smooth(); put(bpy.context.object, STEEL)
# a thin white trim band running around the visor's top, as on their product photo
trim = rbox('trim', (VW * .86, .003, .0025), (0, -.02, VH / 2 - .006), .001, 3, SEAM)
# little camera/IR window on the front (the onboard smartphone), and a status LED
win = rbox('win', (.022, .004, .01), (.05, -VD / 2 - .0125, .026), .004, 6, SEAM)
bpy.ops.mesh.primitive_cylinder_add(radius=.0026, depth=.004, location=(-.066, -VD / 2 - .0125, .032), rotation=(math.pi / 2, 0, 0))
put(bpy.context.object, LED)
# face gasket: a foam ring on the back face, with a nose notch
gk = rbox('gasket', (VW - .012, .026, VH - .01), (0, VD / 2 + .011, -.002), .02, 10, FOAM)
cut = rbox('gcut', (VW - .052, .06, VH - .05), (0, VD / 2 + .02, .004), .016, 8)
nose = rbox('nose', (.05, .06, .05), (0, VD / 2 + .02, -.045), .02, 8)
for c in (cut, nose):
    bo = gk.modifiers.new('cut', 'BOOLEAN'); bo.object = c; bo.operation = 'DIFFERENCE'; c.hide_render = True; c.hide_viewport = True
# two lenses visible inside the opening (dark glass)
for sx in (-1, 1):
    bpy.ops.mesh.primitive_cylinder_add(radius=.019, depth=.004, location=(sx * .032, VD / 2 - .002, .006), rotation=(math.pi / 2, 0, 0))
    bpy.ops.object.shade_smooth(); put(bpy.context.object, GLASS)

# the product mark on the visor's left flank, printed in pale grey
bpy.ops.object.text_add(location=(-VW / 2 * (1 - .07 * .3) - .0004, -.02, .02), rotation=(math.pi / 2, 0, -math.pi / 2))
tx = bpy.context.object; tx.data.body = 'NeuroVEP'; tx.data.size = .011; tx.data.extrude = .0004
tx.data.align_x = 'CENTER'; tx.data.align_y = 'CENTER'; put(tx, mat('ink', srgb('#c3ccd6'), rough=.5))
# a horizontal parting line round the shell
pl = rbox('part', (VW + .0012, VD * .62, .0016), (0, .008, -.03), .0006, 2, SEAM)
# ---- head strap: an elliptical ribbon from the visor's sides round the back of the head
HR_X, HR_Y = .088, .112          # half-width and half-depth of the head loop
CY = VD / 2 + .02 + HR_Y - .018  # loop centre behind the visor
def ribbon(name, rx, ry, cy, zc, hgt, th, a0, a1, m, n=160):
    bm = bmesh.new(); vs = []
    for i in range(n + 1):
        a = a0 + (a1 - a0) * i / n
        x, y = rx * math.sin(a), cy - ry * math.cos(a)
        nx, ny = math.sin(a) / rx, -math.cos(a) / ry; L = math.hypot(nx, ny); nx /= L; ny /= L
        ring = []
        for (dz, dr) in ((-hgt / 2, 0), (hgt / 2, 0), (hgt / 2, th), (-hgt / 2, th)):
            ring.append(bm.verts.new((x + nx * dr, y + ny * dr, zc + dz)))
        vs.append(ring)
    for i in range(n):
        for k in range(4):
            bm.faces.new((vs[i][k], vs[i][(k + 1) % 4], vs[i + 1][(k + 1) % 4], vs[i + 1][k]))
    me = bpy.data.meshes.new(name); bm.to_mesh(me); o = bpy.data.objects.new(name, me); S.collection.objects.link(o)
    for p in me.polygons: p.use_smooth = True
    md = o.modifiers.new('b', 'BEVEL'); md.width = .0018; md.segments = 3
    return put(o, m)
# side straps start at the visor flanks (a = +-~1.18 rad keeps them clear of the visor body)
ribbon('strap', HR_X + .012, HR_Y + .006, CY, -.004, .036, .0035, -2.9, 2.9, STRAP)
for dz in (-.0172, .0172):
    ribbon('edge', HR_X + .012, HR_Y + .006, CY, -.004 + dz, .0018, .0039, -2.9, 2.9, GREY)
# adjustment buckle on the left side
bk = rbox('buckle', (.005, .022, .04), (-(HR_X + .0165), CY - .03, -.004), .003, 6, GREY)
# hinged side arms: the white shell pieces that join the strap to the visor
for sx in (-1, 1):
    arm = rbox('arm', (.007, .05, .02), (sx * (VW / 2 + .002), VD / 2 + .012, -.004), .003, 5, GREY)
# top strap over the crown
bm = bmesh.new()
def top_strap():
    n = 90; vs = []
    for i in range(n + 1):
        t = i / n; a = math.pi * t
        y = VD / 2 - .005 + (2 * HR_Y + .01) * t; z = (VH / 2 - .012) * (1 - t) + .014 * t + math.sin(a) * .085
        ring = [bm.verts.new((x, y, z + dz)) for (x, dz) in ((-.017, 0), (.017, 0), (.017, -.0035), (-.017, -.0035))]
        vs.append(ring)
    for i in range(n):
        for k in range(4): bm.faces.new((vs[i][k], vs[i][(k + 1) % 4], vs[i + 1][(k + 1) % 4], vs[i + 1][k]))
top_strap(); me = bpy.data.meshes.new('top'); bm.to_mesh(me); to = bpy.data.objects.new('top', me); S.collection.objects.link(to)
for p in me.polygons: p.use_smooth = True
put(to, STRAP)

# ---- NeuroDot sensor pod at the back of the loop (occipital), electrode pins facing the scalp
PY = CY + HR_Y + .012
pod = rbox('pod', (.064, .022, .046), (0, PY + .006, -.006), .011, 10, POD)
cap = rbox('podcap', (.052, .006, .034), (0, PY + .019, -.006), .008, 8, BLUED)
bpy.ops.mesh.primitive_cylinder_add(radius=.0022, depth=.003, location=(.019, PY + .0225, .006), rotation=(math.pi / 2, 0, 0))
put(bpy.context.object, LED)
# dry comb electrodes: a grid of short gold-plated pins on two steel discs, pointing forward (into the head)
for cx in (-.017, .017):
    bpy.ops.mesh.primitive_cylinder_add(radius=.0115, depth=.004, location=(cx, PY - .007, -.006), rotation=(math.pi / 2, 0, 0))
    bpy.ops.object.shade_smooth(); put(bpy.context.object, STEEL)
    for r_, k_ in ((0, 1), (.0058, 6), (.0098, 10)):
        for j in range(k_):
            a = 2 * math.pi * j / k_ + (.3 if k_ == 10 else 0)
            x, z = cx + r_ * math.cos(a), -.006 + r_ * math.sin(a)
            bpy.ops.mesh.primitive_cylinder_add(radius=.00085, depth=.011, vertices=12, location=(x, PY - .0145, z), rotation=(math.pi / 2, 0, 0))
            p = bpy.context.object; put(p, PIN)
            bpy.ops.mesh.primitive_uv_sphere_add(radius=.00095, segments=12, ring_count=8, location=(x, PY - .02, z))
            bpy.ops.object.shade_smooth(); put(bpy.context.object, PIN)

# ---- light and camera
S.render.engine = 'CYCLES'; S.cycles.device = 'CPU'; S.cycles.samples = SAMP; S.cycles.use_denoising = True
S.render.film_transparent = True; S.render.resolution_x = W; S.render.resolution_y = H
S.view_settings.view_transform = 'AgX'; S.view_settings.look = 'AgX - Punchy'; S.view_settings.exposure = -.35
wd = bpy.data.worlds.new('w'); S.world = wd; wd.use_nodes = True
env = wd.node_tree.nodes.new('ShaderNodeTexEnvironment')
env.image = bpy.data.images.load(os.path.join(bpy.utils.system_resource('DATAFILES'), 'studiolights/world/studio.exr'))
bg = wd.node_tree.nodes['Background']; bg.inputs['Strength'].default_value = .22
wd.node_tree.links.new(env.outputs[0], bg.inputs[0])
def area(name, loc, size, power, col=(1, 1, 1)):
    l = bpy.data.lights.new(name, 'AREA'); l.size = size; l.energy = power; l.color = col
    o = bpy.data.objects.new(name, l); S.collection.objects.link(o); o.location = loc
    d = Vector((0, .1, 0)) - o.location; o.rotation_euler = d.to_track_quat('-Z', 'Y').to_euler()
area('key', (-.55, -.5, .55), .6, 34)
area('fill', (.6, -.25, .1), .8, 14, (.85, .92, 1))
area('rimL', (-.45, .7, .25), .3, 60, srgb('#4cade6'))
area('rimR', (.5, .65, .3), .3, 32, srgb('#2ea3f2'))
area('top', (0, .1, .8), .7, 12)
cam = bpy.data.objects.new('cam', bpy.data.cameras.new('cam')); S.collection.objects.link(cam); S.camera = cam
cam.data.lens = 72
cam.location = (-.8, -.52, .46)
tgt = Vector((0.015, .15, -.012)); cam.rotation_euler = (tgt - cam.location).to_track_quat('-Z', 'Y').to_euler()
cam.data.dof.use_dof = True; cam.data.dof.focus_distance = (tgt - cam.location).length - .06; cam.data.dof.aperture_fstop = 5.6
S.render.filepath = OUT; S.render.image_settings.file_format = 'PNG'; S.render.image_settings.color_mode = 'RGBA'
bpy.ops.render.render(write_still=True)
print('wrote', OUT)
