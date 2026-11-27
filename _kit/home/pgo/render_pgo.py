"""PG&O hero render (Blender/Cycles via bpy): three of Precision Glass & Optics' own product types from pgo.com
(Precision Optics page: beamsplitter cubes, right-angle prisms, windows; Thin Film Coatings page: AR / dielectric coatings),
photographed-in-the-studio look, TOP-FIX variant B lighting: one large soft key from upper left (page side of the headline),
a low neutral fill, a dim rim from behind, no coloured light. N-BK7 glass (IOR 1.517), 0.25 mm edge bevels, the cube's
cemented hypotenuse as a partially reflecting dielectric layer, the window with an AR thin-film coating. Transparent film,
shadow catcher floor. Usage: python render_pgo.py out.png W H samples"""
import bpy, sys, math
from mathutils import Vector
out, W, H, S = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), int(sys.argv[4])
bpy.ops.wm.read_factory_settings(use_empty=True)
sc = bpy.context.scene
sc.render.engine = 'CYCLES'; sc.cycles.device = 'CPU'; sc.cycles.samples = S
sc.cycles.use_denoising = True
sc.cycles.max_bounces = 32; sc.cycles.transmission_bounces = 32; sc.cycles.glossy_bounces = 16; sc.cycles.transparent_max_bounces = 32
sc.cycles.caustics_reflective = False; sc.cycles.caustics_refractive = False; sc.cycles.blur_glossy = 0.5
sc.render.film_transparent = True
sc.render.resolution_x, sc.render.resolution_y = W, H
sc.view_settings.view_transform = 'AgX'; sc.view_settings.look = 'AgX - Base Contrast'
w = bpy.data.worlds.new('w'); sc.world = w; w.use_nodes = True
w.node_tree.nodes['Background'].inputs[0].default_value = (0.012, 0.012, 0.013, 1); w.node_tree.nodes['Background'].inputs[1].default_value = 1

def glass_mat(name, tf=0.0):
    m = bpy.data.materials.new(name); m.use_nodes = True; nt = m.node_tree; n = nt.nodes
    p = n['Principled BSDF']
    p.inputs['Base Color'].default_value = (0.955, 0.99, 0.975, 1)
    p.inputs['Transmission Weight'].default_value = 1.0
    p.inputs['IOR'].default_value = 1.517
    p.inputs['Roughness'].default_value = 0.0
    if tf:
        p.inputs['Thin Film Thickness'].default_value = tf; p.inputs['Thin Film IOR'].default_value = 1.38
    # lighter shadows (glass passes light): shadow rays see a mostly transparent surface
    lp = n.new('ShaderNodeLightPath'); tr = n.new('ShaderNodeBsdfTransparent'); mx = n.new('ShaderNodeMixShader')
    mx.inputs[0].default_value = 0.0
    mul = n.new('ShaderNodeMath'); mul.operation = 'MULTIPLY'; mul.inputs[1].default_value = 0.78
    nt.links.new(lp.outputs['Is Shadow Ray'], mul.inputs[0]); nt.links.new(mul.outputs[0], mx.inputs[0])
    o = n['Material Output']
    nt.links.new(p.outputs[0], mx.inputs[1]); nt.links.new(tr.outputs[0], mx.inputs[2]); nt.links.new(mx.outputs[0], o.inputs[0])
    return m

def coat_mat():
    m = bpy.data.materials.new('coat'); m.use_nodes = True; n = m.node_tree.nodes; p = n['Principled BSDF']
    p.inputs['Base Color'].default_value = (0.92, 0.95, 1.0, 1); p.inputs['Transmission Weight'].default_value = 1.0
    p.inputs['IOR'].default_value = 2.1; p.inputs['Roughness'].default_value = 0.0
    p.inputs['Thin Film Thickness'].default_value = 420; p.inputs['Thin Film IOR'].default_value = 2.0
    return m

def bevel(o, wdt):
    md = o.modifiers.new('bv', 'BEVEL'); md.width = wdt; md.segments = 3; md.limit_method = 'ANGLE'
    bpy.context.view_layer.objects.active = o

G = glass_mat('bk7'); GW = glass_mat('bk7ar', tf=110); C = coat_mat()
# 1) beamsplitter cube, 25 mm (units: cm) -> two cemented right-angle prisms
bpy.ops.mesh.primitive_cube_add(size=2.5, location=(0.2, 0, 1.25)); cube = bpy.context.object; cube.data.materials.append(G)
cube.rotation_euler = (0, 0, math.radians(-28)); bevel(cube, 0.03)
bpy.ops.mesh.primitive_plane_add(size=3.48, location=(0.2, 0, 1.25)); hyp = bpy.context.object
hyp.scale = (1, 0.715, 1); hyp.rotation_euler = (math.radians(0), math.radians(45), math.radians(-28)); hyp.data.materials.append(C)
# 2) right-angle prism, 30 mm legs, 25 mm thick, lying on one face
import bmesh
me = bpy.data.meshes.new('prism'); bm = bmesh.new()
a, t = 3.0, 2.5
vs = [bm.verts.new(v) for v in [(0, 0, 0), (a, 0, 0), (0, 0, a), (0, t, 0), (a, t, 0), (0, t, a)]]
for f in [(0, 1, 2), (3, 5, 4), (0, 3, 4, 1), (0, 2, 5, 3), (1, 4, 5, 2)]: bm.faces.new([vs[i] for i in f])
bmesh.ops.recalc_face_normals(bm, faces=bm.faces); bm.to_mesh(me); bm.free()
pr = bpy.data.objects.new('prism', me); sc.collection.objects.link(pr); pr.data.materials.append(G)
pr.location = (3.0, 1.2, 0); pr.rotation_euler = (0, 0, math.radians(-118)); bevel(pr, 0.03)
# 3) AR-coated window, 50 mm diameter, 5 mm thick, standing on a small post at an angle
bpy.ops.mesh.primitive_cylinder_add(vertices=160, radius=2.0, depth=0.45, location=(-3.2, 2.2, 2.22)); win = bpy.context.object
win.rotation_euler = (math.radians(90), 0, math.radians(32)); win.data.materials.append(GW); bevel(win, 0.025)
for o in (cube, pr, win):
    bpy.context.view_layer.objects.active = o; o.select_set(True); bpy.ops.object.shade_smooth_by_angle(angle=math.radians(30)); o.select_set(False)
# a black anodised V-block holding the window (a real mount, so it doesn't float)
mm = bpy.data.materials.new('anod'); mm.use_nodes = True; p = mm.node_tree.nodes['Principled BSDF']
p.inputs['Base Color'].default_value = (0.02, 0.02, 0.022, 1); p.inputs['Roughness'].default_value = 0.42; p.inputs['Metallic'].default_value = 0.6
bpy.ops.mesh.primitive_cube_add(size=1, location=(-3.2, 2.2, 0.18)); vb = bpy.context.object; vb.scale = (2.0, 1.1, 0.36)
vb.rotation_euler = (0, 0, math.radians(32)); vb.data.materials.append(mm); bevel(vb, 0.03)
# floor: shadow catcher
bpy.ops.mesh.primitive_plane_add(size=80, location=(0, 0, 0)); fl = bpy.context.object; fl.is_shadow_catcher = True
fm = bpy.data.materials.new('floor'); fm.use_nodes = True; fp = fm.node_tree.nodes['Principled BSDF']
fp.inputs['Base Color'].default_value = (0.012, 0.013, 0.016, 1); fp.inputs['Roughness'].default_value = 0.35; fl.data.materials.append(fm)
# lights: emissive soft boxes so glass shows real studio reflections
def softbox(name, loc, rot, size, power, shape=(1, 1)):
    bpy.ops.object.light_add(type='AREA', location=loc); L = bpy.context.object; L.name = name
    L.data.shape = 'RECTANGLE'; L.data.size, L.data.size_y = size * shape[0], size * shape[1]; L.data.energy = power
    L.data.color = (1.0, 0.985, 0.965)
    L.rotation_euler = rot; L.visible_glossy = True; L.visible_transmission = True
    return L
def aim(L, tgt=(0, 0, 1.2)):
    d = Vector(tgt) - L.location; L.rotation_euler = d.to_track_quat('-Z', 'Y').to_euler()
k = softbox('key', (-10, -4, 11), (0, 0, 0), 7, 2600, (1, .6)); aim(k)
f = softbox('fill', (8, -10, 2.5), (0, 0, 0), 9, 260, (1, .5)); aim(f)
r = softbox('rim', (4, 12, 6), (0, 0, 0), 3, 1100, (1, 2.2)); aim(r)
s = softbox('strip', (-12, 2, 4), (0, 0, 0), 2, 700, (0.25, 3)); aim(s)
bk = softbox('back', (1, 18, 3.5), (0, 0, 0), 30, 900, (1, .3)); aim(bk, (1, -20, 2.5)); bk.visible_camera = False; bk.visible_diffuse = False
# camera
cd = bpy.data.cameras.new('cam'); cam = bpy.data.objects.new('cam', cd); sc.collection.objects.link(cam); sc.camera = cam
cd.lens = 85; cam.location = (2.0, -31, 10.5)
d = Vector((-0.1, 1.0, 1.55)) - cam.location; cam.rotation_euler = d.to_track_quat('-Z', 'Y').to_euler()
cd.dof.use_dof = True; cd.dof.focus_distance = (Vector((0, 0.5, 1.3)) - cam.location).length; cd.dof.aperture_fstop = 11
sc.render.filepath = out; bpy.ops.render.render(write_still=True)
print('done', out)
