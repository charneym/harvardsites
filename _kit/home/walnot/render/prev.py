import sys
from PIL import Image
im=Image.open(sys.argv[1]).convert('RGBA');bg=Image.new('RGBA',im.size,(14,17,12,255));bg.alpha_composite(im);bg.convert('RGB').save(sys.argv[2],quality=85)
