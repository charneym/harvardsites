L=open('letters.d').read()
BLUE='#2386AF';DK='#48484a'
def mark(cls=True):
    w=lambda c,s:('class="%s"'%c) if cls else s
    g=''
    g+='<path %s fill="none" stroke-width="1.3" d="M6 21H160.5V31M139 63H6M184 61H292M206 21H292"/>'%w('jw','stroke="%s"'%DK)
    g+='<path %s d="M3.6 21a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0-4.8 0M3.6 63a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0-4.8 0M289.6 21a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0-4.8 0M289.6 61a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0-4.8 0"/>'%w('jd','fill="%s"'%DK)
    N='M139 63V31.5L160.5 54V31M184 61V31.5L206 54V21'
    g+='<path %s fill="none" stroke-width="6" stroke-linejoin="round" stroke-linecap="round" d="%s"/>'%(w('jo','stroke="%s"'%DK),N)
    g+='<path %s fill="none" stroke-width="4.1" stroke-linejoin="round" stroke-linecap="round" d="%s"/>'%(w('jn','stroke="#fff"'),N)
    g+='<path %s fill="none" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" d="%s"/>'%(w('jl','stroke="%s"'%BLUE),N)
    g+='<path %s d="M167.8 3H171.8V77.6H167.8ZM173.6 3H177.6V77.6H173.6Z"/>'%w('jc','fill="%s"'%DK)
    g+='<path %s d="%s"/>'%(w('jb','fill="%s"'%BLUE),L)
    return g
open('mark.svgin','w').write(mark(True))
open('test.svg','w').write('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="1200"><rect width="300" height="100" fill="#fff"/>'+mark(False)+'</svg>')
