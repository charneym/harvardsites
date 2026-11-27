# Relighting a hero render: the Tekno-Medical recipe (TOP-FIX variant B, live 2026-11-27)

The client chose B for /teknomedical/. Goal: the hero object should read as **photographed in a studio**, not as a pasted cut-out with a glow. Reference files:

- `_kit/home/teknomedical/render_b.py`: the offline renderer. It has the same geometry as `render.py`; only the environment, glass, ring and post-process differ.
- `_kit/home/teknomedical/field.js`: the canvas hero.
- `_kit/reports/topfix/teknomedical-before-after.jpg`: the sent version vs variant A.
- `_kit/reports/topfix/teknomedical-A-vs-B.jpg`: variant A vs variant B.

## 0. What was wrong (sent version)

The field painted three things around a cut-out render on a teal-black ground (#071b20):

1. **Ambient glow:** a full-canvas radial gradient in deep teal (`rgba(8,58,66,.6)`) centred on the object.
2. **Halo:** a teal radial gradient (`rgba(0,150,170,.09–.13)`) directly behind the object, breathing every 9s.
3. **Beam:** an additive (`globalCompositeOperation="lighter"`) glow and light beam at the scope tip.

The render's own environment was also tinted teal. It had a teal strip light, a teal base and a teal floor, which left teal reflections in the grooves.

## 1. Variant A (the base for B)

- **Removed:** all three glows. Delete those blocks completely; making them fainter is not enough.
- **Colours:** the ground became a neutral graphite (#131415 / #18191b / #202225 / #0b0c0d), and the scrim gradients use the same neutrals.
- **Mirror:** the canvas draws the render mirrored so the tip points toward the headline:

  ```js
  c.save();c.translate(x+dw,y);c.scale(-1,1);c.drawImage(img,0,0,dw,dh);c.restore();
  ```

  **Remember the mirror when placing lights.** The page's left is the render's right.

## 2. Variant B: relight the render itself (offline image)

Use **one key light, a fill and a rim, all neutral**. A metal object is lit almost entirely by what it reflects, so the "lights" are bright areas in the environment function `env(d)` (d is the reflected direction; x right, y up, z toward the camera). The render is orthographic and looks along -z.

| Term | `render_b.py` | Effect |
|---|---|---|
| base | `0.008` grey | near-black surroundings |
| overhead box | `sm(.45,.9,y)*sm(-.9,.2,z)` × 1.05 | soft top sheen |
| **key strip** | `exp(-((x-.74)/.10)²)*sm(-.5,.25,y)` × (2.30, 2.26, 2.18), very slightly warm | the long specular line down the shaft and the bright side of the eyepiece cone. Render right = **page upper left** after the mirror |
| rim | `exp(-((x+.80)/.07)²)*sm(-.6,.2,y)*sm(.3,-.4,z)` × 0.60 | a thin edge light on the far side, reflected only from behind (z<0), so it shows at grazing edges |
| fill | `exp(-((y-.05)/.22)²)*sm(.4,.95,z)` × 0.22 | lifts the shadow side so it isn't black |
| floor | `sm(-.2,-.9,y)` × 0.02 | a dark floor |

- **Brushed metal and contrast:** keep the original material code: 10 jittered reflection samples, Fresnel `F=.62+.38(1-cos)^5`, sdf ambient occlusion, and the tone map `x/(1+.35x)*1.3` with gamma 2.2.
- **Glass:** neutral dark, `0.018 + env(refl)*(…)*(0.9,0.94,1.0)`. The old blue/teal offset is gone.
- **Coloured part:** the red product ring is lit by the key direction, `KEY = n3((0.62,0.55,0.56))`.

**Lesson learned:** a key light only produces a highlight on a cylinder if its direction reflects into the camera off that cylinder. In other words, the half-vector between the light and the view must be roughly perpendicular to the cylinder's axis. My first attempt used a "physically" placed point lobe that failed this test and gave a flat grey object. A broad strip (a Gaussian falloff in one coordinate) works for any axis angle, which is why it is used here.

Render command: `python3 render_b.py 1500 1136 out.png 2 120`. The arguments are width, height, supersampling (2×) and padding (120px). It takes about 20 seconds, and the result is saved as webp at quality 92 (45 KB).

## 3. The cast shadow (baked into the image)

The camera faces the object head-on, so a real ground plane would be seen edge-on. The shadow is therefore faked in 2D from the object's own alpha:

1. Pad the RGBA output with **PAD = 120px of transparency on every side**, so the blur never hits the edge of the image (no seam).
2. Take the silhouette (the alpha), **squash it to 55% of its height**, and paste it **shifted 40% of the height down and 3.5% of the width away from the key**. Squashing toward the bottom is what makes it read as lying on a surface below; a plain offset reads as a drop shadow.
3. Apply a **Gaussian blur with radius 2.2% of the image width** (about 33px at 1500px).
4. Set its opacity to **0.34 × the blurred alpha**, in black, and composite the object over it. On #131415 the shadow is barely visible on purpose. It works together with the falloff in section 4.
5. No hard core and no reflection.

## 4. The canvas side (field.js)

- **Draw the padded image so the object lands exactly where the unpadded one did:**

  ```js
  var PX=120/1500,PY=120/1136;   // pad / original size
  c.save();c.translate(x+dw*(1+PX),y-dh*PY);c.scale(-1,1);
  c.drawImage(img,0,0,dw*(1+2*PX),dh*(1+2*PY));c.restore();
  ```

  Without the mirror, use `c.drawImage(img,x-dw*PX,y-dh*PY,dw*(1+2*PX),dh*(1+2*PY))`. Keep AR (the aspect ratio used for layout) at the unpadded size so the layout doesn't change.

- **Ground falloff, painted before the image.** It is neutral white at a few percent, wide, and centred up and toward the key side rather than on the object:

  ```js
  var fx=G.mob?w*.5:x+dw*.42,fy=G.mob?G.bh*.42:y+dh*.38,fr=Math.max(w,h)*.62;
  var fo=c.createRadialGradient(fx,fy,0,fx,fy,fr);
  fo.addColorStop(0,"rgba(255,255,255,"+(.032*e)+")");fo.addColorStop(.55,"rgba(255,255,255,"+(.012*e)+")");fo.addColorStop(1,"rgba(255,255,255,0)");
  ```

  Measured in a screenshot, it peaks at 30,30,31 against a ground of 24,25,26, about 2%. **Check this by sampling pixels.** If the brightest point is more than about 4% above the ground, or the gradient hugs the object's outline, it reads as a glow.

## 5. Applying it to other heroes

- **Pre-rendered image (webp/png with alpha):**
  - Re-render with the same light layout. If you can't re-render, at least apply the shadow from section 3 and the falloff from section 4, and remove any glow, halo or beam code.
  - If the image was graded with a coloured tint, re-grade it to neutral.
- **Live canvas / WebGL subject (shader-drawn object):**
  - **Key:** in the shading, use the same key direction (upper left on the page; flip x if the draw is mirrored). Give it a narrow specular lobe for the highlight line plus a wide, weak lobe (≈0.2) for the soft side.
  - **Fill and rim:** a fill of about 0.2 from the opposite low front, and a rim from behind (z<0) at about 0.6, visible only at grazing angles (multiply by `(1-n·v)^3`).
  - **Shadow:** render the object mask to an offscreen buffer at quarter resolution, squash it vertically (×0.55), offset it (+0.40h, −0.035w), blur it (a separable Gaussian, or a few downsample/upsample passes), and draw it in black at 0.3–0.35 before the object.
  - Don't use `ctx.filter="blur()"`; Safari doesn't support it. Blur offscreen or bake the blur.
  - **Ground falloff:** the same neutral radial as in section 4.
- **Never:**
  - additive (`lighter`) blending around the object
  - coloured light (brand accent included)
  - a gradient centred on the object's bounding box
  - a breathing pulse on any light
  - a beam
- **Check by eye** at 1440, 1920 and 390, side by side with the version without lighting. The lit version should look like a product shot; if your first word for it is "glow", turn it down.
