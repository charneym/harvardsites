"""Prime Machine hero render (Blender/Cycles via bpy): a large four-throw industrial-engine crankshaft of the kind Prime
machines on its Mori Seiki NTX mill/turn centre (primemachine.com > Five Axis Machining: "Mori Seiki NTX mill/turn lathe
machining of crankshafts"; Industrial Engine Machining: heavy diesel and natural-gas engines), resting on two ground
V-blocks for inspection. Ground and polished main journals and crank pins with fillets and oil holes, forged webs with
machined counterweights, a keyed snout with a threaded end, a rear flywheel flange with a bolt circle and dowel.
Studio lighting, transparent film, shadow-catcher floor. Units: 1 = 1 cm. Usage: python render_crank.py out W H S"""
import bpy, sys, math, bmesh
from mathutils import Vector
out, W, H, S = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), int(sys.argv[4])
bpy.ops.wm.read_factory_settings(use_empty=True)
sc = bpy.context.scene
sc.render.engine = 'CYCLES'; sc.cycles.device = 'CPU'; sc.cycles.samples = S; sc.cycles.use_denoising = True
sc.cycles.max_bounces = 14; sc.cycles.glossy_bounces = 10; sc.cycles.caustics_reflective = False; sc.cycles.caustics_refractive = False
sc.render.film_transparent = True; sc.render.resolution_x, sc.render.resolution_y = W, H
sc.view_settings.view_transform = 'AgX'; sc.view_settings.look = 'AgX - Base Contrast'
w = bpy.data.worlds.new('w'); sc.world = w; w.use_nodes = True
w.node_tree.nodes['Background'].inputs[0].default_value = (0.05, 0.052, 0.056, 1); w.node_tree.nodes['Background'].inputs[1].default_value = 1

def mat(name, base, metal=0.0, rough=0.4, bump=0.0, bscale=900.0):
    m = bpy.data.materials.new(name); m.use_nodes = True; nt = m.node_tree; p = nt.nodes['Principled BSDF']
    p.inputs['Base Color'].default_value = (*base, 1); p.inputs['Metallic'].default_value = metal; p.inputs['Roughness'].default_value = rough
    if bump:
        tc = nt.nodes.new('ShaderNodeTexCoord'); nz = nt.nodes.new('ShaderNodeTexNoise'); nz.inputs['Scale'].default_value = bscale; nz.inputs['Detail'].default_value = 8
        bp = nt.nodes.new('ShaderNodeBump'); bp.inputs['Strength'].default_value = bump; bp.inputs['Distance'].default_value = 0.003
        nt.links.new(tc.outputs['Object'], nz.inputs['Vector']); nt.links.new(nz.outputs['Fac'], bp.inputs['Height']); nt.links.new(bp.outputs['Normal'], p.inputs['Normal'])
    return m
def ground(m, scale=(220.0, 1.0, 1.0), strength=0.06):
    nt = m.node_tree; p = nt.nodes['Principled BSDF']
    tc = nt.nodes.new('ShaderNodeTexCoord'); mp = nt.nodes.new('ShaderNodeMapping'); mp.inputs['Scale'].default_value = scale
    nz = nt.nodes.new('ShaderNodeTexNoise'); nz.inputs['Scale'].default_value = 3.0; nz.inputs['Detail'].default_value = 10
    bp = nt.nodes.new('ShaderNodeBump'); bp.inputs['Strength'].default_value = strength; bp.inputs['Distance'].default_value = 0.002
    rr = nt.nodes.new('ShaderNodeMapRange'); r0 = p.inputs['Roughness'].default_value; rr.inputs['To Min'].default_value = r0 * .7; rr.inputs['To Max'].default_value = r0 * 1.35
    nt.links.new(tc.outputs['Object'], mp.inputs['Vector']); nt.links.new(mp.outputs['Vector'], nz.inputs['Vector'])
    nt.links.new(nz.outputs['Fac'], bp.inputs['Height']); nt.links.new(bp.outputs['Normal'], p.inputs['Normal'])
    nt.links.new(nz.outputs['Fac'], rr.inputs['Value']); nt.links.new(rr.outputs['Result'], p.inputs['Roughness'])
POL = mat('pol', (0.86, 0.865, 0.87), 1.0, 0.09); ground(POL)                 # ground + polished journals
TURN = mat('turn', (0.7, 0.705, 0.71), 1.0, 0.22); ground(TURN, (160.0, 1.0, 1.0), 0.09)   # turned surfaces
FORGE = mat('forge', (0.05, 0.048, 0.046), 0.55, 0.72, 0.6, 40)                 # forged web scale
MACH = mat('mach', (0.6, 0.6, 0.61), 1.0, 0.3)
FACE = mat('face', (0.58, 0.58, 0.59), 1.0, 0.52)                            # faced flange, matt                    # milled web faces
VBK = mat('vbk', (0.5, 0.505, 0.51), 1.0, 0.32); ground(VBK, (1.0, 1.0, 220.0))
HOLE = mat('hole', (0.01, 0.01, 0.01), 0.3, 0.6)
OXIDE = mat('oxide', (0.03, 0.03, 0.032), 0.8, 0.35)

def bevel(o, wdt, seg=3, ang=40):
    md = o.modifiers.new('bv', 'BEVEL'); md.width = wdt; md.segments = seg; md.limit_method = 'ANGLE'; md.angle_limit = math.radians(ang)
def cyl(r, d, loc, m, v=96, bv=0.0, rot=(0, math.radians(90), 0)):
    bpy.ops.mesh.primitive_cylinder_add(vertices=v, radius=r, depth=d, location=loc, rotation=rot); o = bpy.context.object; o.data.materials.append(m)
    if bv: bevel(o, bv)
    bpy.ops.object.shade_smooth_by_angle(angle=math.radians(35))
    return o
def box(sx, sy, sz, loc, m, bv=0.0, rot=(0, 0, 0)):
    bpy.ops.mesh.primitive_cube_add(size=1, location=loc, rotation=rot); o = bpy.context.object; o.scale = (sx, sy, sz)
    bpy.ops.object.transform_apply(scale=True); o.data.materials.append(m)
    if bv: bevel(o, bv)
    return o
def cut(o, c):
    md = o.modifiers.new('b', 'BOOLEAN'); md.operation = 'DIFFERENCE'; md.object = c; md.solver = 'EXACT'
    c.hide_render = True; c.display_type = 'WIRE'
def autosmooth(o, deg=35):
    try:
        bpy.context.view_layer.objects.active = o; bpy.ops.object.shade_smooth_by_angle(angle=math.radians(deg))
    except Exception:
        try: o.data.use_auto_smooth = True; o.data.auto_smooth_angle = math.radians(deg)
        except Exception: pass

AX = 14.0                                        # crank axis height
RM, RP, THR = 4.0, 3.6, 5.6                      # main / pin radius, throw
def hull(pts):
    pts = sorted(set(pts))
    def cr(o, a, b): return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0])
    lo, up = [], []
    for p in pts:
        while len(lo) >= 2 and cr(lo[-2], lo[-1], p) <= 0: lo.pop()
        lo.append(p)
    for p in reversed(pts):
        while len(up) >= 2 and cr(up[-2], up[-1], p) <= 0: up.pop()
        up.append(p)
    return lo[:-1] + up[:-1]
def ray_poly(poly, ux, uy):
    best = 0.0
    for i in range(len(poly)):
        ax, ay = poly[i]; bx, by = poly[(i + 1) % len(poly)]
        ex, ey = bx - ax, by - ay; den = ux * ey - uy * ex
        if abs(den) < 1e-9: continue
        t = (ax * ey - ay * ex) / den; s = (ax * uy - ay * ux) / den
        if t > 0 and -1e-6 <= s <= 1 + 1e-6: best = max(best, t)
    return best
def web(x0, th, phi):
    """a crank web in the y-z plane: hull of the main boss and the pin boss, plus a counterweight opposite the pin"""
    py, pz = THR * math.cos(phi), THR * math.sin(phi)
    pts = [(5.1 * math.cos(a), 5.1 * math.sin(a)) for a in [i * math.pi / 60 for i in range(120)]] + \
          [(py + 4.7 * math.cos(a), pz + 4.7 * math.sin(a)) for a in [i * math.pi / 60 for i in range(120)]]
    hp = hull(pts); N = 360; prof = []
    for i in range(N):
        a = 2 * math.pi * i / N; ux, uy = math.cos(a), math.sin(a)
        r = ray_poly(hp, ux, uy)
        d = abs((a - (phi + math.pi) + math.pi) % (2 * math.pi) - math.pi)          # angle from the counterweight centre
        if d < math.radians(58): rc = 9.6
        elif d < math.radians(74): rc = 9.6 - (9.6 - 5.4) * (1 - math.cos(math.pi * (d - math.radians(58)) / math.radians(32))) / 1.0
        else: rc = 0
        prof.append((max(r, rc) * ux, max(r, rc) * uy))
    bm = bmesh.new()
    f = [bm.verts.new((x0, y, AX + z)) for y, z in prof]; b = [bm.verts.new((x0 + th, y, AX + z)) for y, z in prof]
    cf = bm.verts.new((x0, 0, AX)); cb = bm.verts.new((x0 + th, 0, AX))
    for i in range(N):
        j = (i + 1) % N
        bm.faces.new((cf, f[j], f[i])); bm.faces.new((cb, b[i], b[j])); bm.faces.new((f[i], f[j], b[j], b[i]))
    me = bpy.data.meshes.new('web'); bm.to_mesh(me); bm.free()
    o = bpy.data.objects.new('web', me); sc.collection.objects.link(o); o.data.materials.append(FORGE); o.data.materials.append(MACH)
    for pg in o.data.polygons:                    # the flat cheek faces are milled, the rim stays forged
        pg.material_index = 1 if abs(pg.normal.x) > 0.9 else 0
    bpy.context.view_layer.objects.active = o; o.select_set(True)
    bevel(o, 0.35, 3, 50); autosmooth(o, 30)
    return o

x = 0.0
# snout: threaded nose, keyed seat, seal diameter
cyl(1.9, 3.0, (x + 1.5, 0, AX), TURN, 96, .08)
for k in range(12):                                                        # thread crests
    bpy.ops.mesh.primitive_torus_add(major_radius=1.9, minor_radius=0.12, location=(x + 0.25 + k * 0.22, 0, AX), rotation=(0, math.radians(90), 0))
    bpy.context.object.data.materials.append(TURN); bpy.ops.object.shade_smooth()
x += 3.0
seat = cyl(2.7, 5.0, (x + 2.5, 0, AX), POL, 128, .1)
kc = box(4.0, 1.1, 1.4, (x + 2.6, 0, AX + 2.7), TURN); cut(seat, kc)
key = box(3.6, 1.06, 1.2, (x + 2.6, 0, AX + 2.65), OXIDE, .08)
x += 5.0
cyl(3.3, 2.0, (x + 1.0, 0, AX), TURN, 128, .12)                          # seal land
x += 2.0
phis = [math.radians(a) for a in (24, 204, 204, 24)]
mains = []
def journal(x0, ln, r, cy, cz, m=POL):
    o = cyl(r, ln, (x0 + ln / 2, cy, AX + cz), m, 128, .12)
    for s in (x0 + 0.18, x0 + ln - 0.18):                                  # fillet rolls
        bpy.ops.mesh.primitive_torus_add(major_radius=r - 0.05, minor_radius=0.2, location=(s, cy, AX + cz), rotation=(0, math.radians(90), 0), major_segments=128)
        bpy.context.object.data.materials.append(TURN); bpy.ops.object.shade_smooth()
    return o
mains.append((x, 5.0)); journal(x, 5.0, RM, 0, 0); x += 5.0
for t, phi in enumerate(phis):
    web(x, 2.4, phi); x += 2.4
    py, pz = THR * math.cos(phi), THR * math.sin(phi)
    pin = journal(x, 4.2, RP, py, pz)
    oh = cyl(0.34, 0.12, (x + 2.1, py + (RP - 0.04) * math.cos(phi + 1.0), AX + pz + (RP - 0.04) * math.sin(phi + 1.0)), HOLE, 32, rot=(phi + 1.0 - math.pi / 2, 0, 0))
    x += 4.2
    web(x, 2.4, phi); x += 2.4
    ln = 5.0 if t == 3 else 4.2
    mains.append((x, ln)); journal(x, ln, RM, 0, 0)
    if t < 3:
        oh = cyl(0.34, 0.12, (x + ln / 2, 0, AX + RM - 0.04), HOLE, 32, rot=(0, 0, 0))
    x += ln
# rear: seal land, flywheel flange with bolt circle and dowel, pilot
cyl(4.6, 2.2, (x + 1.1, 0, AX), FACE, 128, .12); x += 2.2
fl = cyl(8.2, 2.6, (x + 1.3, 0, AX), FACE, 160, .18)
for k in range(8):
    a = 2 * math.pi * k / 8 + math.pi / 8
    h = cyl(0.55, 4.0, (x + 1.3, 6.3 * math.cos(a), AX + 6.3 * math.sin(a)), HOLE, 32); cut(fl, h)
bpy.context.view_layer.objects.active = fl
for md in list(fl.modifiers): bpy.ops.object.modifier_apply(modifier=md.name)
for pg in fl.data.polygons:
    if abs(pg.normal.z) > 0.95: pg.use_smooth = False           # flat faces stay flat (no smeared ngon shading)
cyl(0.35, 0.8, (x - 0.2, 4.8, AX - 2.2), POL, 32, .04)                    # dowel on the front face of the flange
x += 2.6
cyl(3.0, 1.2, (x + 0.6, 0, AX), POL, 128, .1); x += 1.2
XC = x / 2
# two ground V-blocks under the end main journals
for (mx, ln) in (mains[0], mains[-1]):
    cx = mx + ln / 2
    vb = box(3.2, 12.0, AX - 1.5, (cx, 0, (AX - 1.5) / 2), VBK, .12)
    apex = AX - RM * math.sqrt(2); s = 14.0
    vc = box(4.0, s, s, (cx, 0, apex + s / math.sqrt(2)), VBK, 0, (math.radians(45), 0, 0)); cut(vb, vc)
    sl = box(4.0, 1.2, 1.4, (cx, 0, apex - 0.4), VBK); cut(vb, sl)              # relief slot at the V apex
    for yy in (-4.5, 4.5):
        cyl(0.5, 0.3, (cx - 1.62, yy, 3.0), HOLE, 32)
# floor and lights
bpy.ops.mesh.primitive_plane_add(size=900, location=(XC, 0, 0)); flr = bpy.context.object; flr.is_shadow_catcher = True
fm = bpy.data.materials.new('floor'); fm.use_nodes = True; fm.node_tree.nodes['Principled BSDF'].inputs['Base Color'].default_value = (0.02, 0.02, 0.022, 1); flr.data.materials.append(fm)
def softbox(name, loc, size, power, shape=(1, 1)):
    bpy.ops.object.light_add(type='AREA', location=loc); Lt = bpy.context.object; Lt.name = name
    Lt.data.shape = 'RECTANGLE'; Lt.data.size, Lt.data.size_y = size * shape[0], size * shape[1]; Lt.data.energy = power; Lt.data.color = (1.0, 0.985, 0.965); return Lt
def aim(Lt, t):
    d = Vector(t) - Lt.location; Lt.rotation_euler = d.to_track_quat('-Z', 'Y').to_euler()
T0 = (XC, 0, AX)
k = softbox('key', (XC - 70, -70, 95), 70, 330000, (1, .5)); aim(k, T0)
t = softbox('top', (XC, 4, 100), 90, 90000, (1, .35)); aim(t, T0); t.visible_camera = False
f = softbox('fill', (XC + 80, -60, 25), 50, 30000, (1, .5)); aim(f, T0)
r = softbox('rim', (XC + 30, 80, 45), 30, 90000, (2, 1)); aim(r, T0)
cdd = softbox('card', (XC, -120, 14), 120, 40000, (1, .25)); aim(cdd, T0); cdd.visible_camera = False; cdd.visible_diffuse = False
camd = bpy.data.cameras.new('cam'); cam = bpy.data.objects.new('cam', camd); sc.collection.objects.link(cam); sc.camera = cam
camd.lens = 82; cam.location = (XC - 92, -150, 70)
d = Vector((XC + 2.0, 0, AX - 1.0)) - cam.location; cam.rotation_euler = d.to_track_quat('-Z', 'Y').to_euler()
camd.dof.use_dof = True; camd.dof.focus_distance = (Vector((XC - 6, -2, AX)) - cam.location).length; camd.dof.aperture_fstop = 13
sc.render.filepath = out; bpy.ops.render.render(write_still=True); print('done', out, 'len', x)
