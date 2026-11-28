import numpy as np
from PIL import Image,ImageDraw
OX,OY=150,150
def mask(W,H):
    yy,xx=np.mgrid[0:H,0:W].astype(float)
    def ell(cx,cy,a,b,ang):
        t=np.radians(ang);x=xx-(cx+OX);y=yy-(cy+OY);u=x*np.cos(t)+y*np.sin(t);v=-x*np.sin(t)+y*np.cos(t);return (u/b)**2+(v/a)**2<=1
    m=ell(215,392,212,149,-12.2)|ell(236,398,206,145,-12.2)|ell(132,442,96,64,-8)
    im=Image.new('L',(W,H),0);ImageDraw.Draw(im).polygon([(x+OX,y+OY) for x,y in [(288,130),(301,117),(545,195),(578,252),(582,270),(560,455),(545,467),(515,462),(455,445),(400,450),(360,430),(300,300),(268,200)]],fill=1)
    return m|(np.asarray(im)>0)
