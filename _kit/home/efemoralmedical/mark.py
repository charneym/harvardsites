#!/usr/bin/env python3
"""Redraw Efemoral's mark (efemoralmedical.com logo: a ring of short, thick cyan-blue blocks with lighter, thinner arcs set
just inside them, offset between the blocks: a segmented scaffold seen end-on) as clean filled SVG paths in a 100x100 box."""
import math
def arc(r0, r1, a0, a1):
    p = lambda r, a: (50 + r*math.cos(math.radians(a)), 50 + r*math.sin(math.radians(a)))
    x0, y0 = p(r1, a0); x1, y1 = p(r1, a1); x2, y2 = p(r0, a1); x3, y3 = p(r0, a0)
    return 'M%.2f %.2fA%g %g 0 0 1 %.2f %.2fL%.2f %.2fA%g %g 0 0 0 %.2f %.2fZ' % (x0, y0, r1, r1, x1, y1, x2, y2, r0, r0, x3, y3)
lt = ''.join(arc(33, 40, -40 + 45*i + 14, -40 + 45*i + 46) for i in range(8))
dk = ''.join(arc(37.5, 49, -40 + 45*i - 12, -40 + 45*i + 12) for i in range(8))
print('<path class="l" d="%s"/><path class="d" d="%s"/>' % (lt, dk))
