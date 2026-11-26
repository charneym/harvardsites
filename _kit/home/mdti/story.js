/* The story scene (BL/BY/DB): MDTi's route from idea to patient (mdti.co.uk > About and the Ortho-Glide page), told on ONE
   drawing of the Ortho-Glide lower limb exerciser kept on screen for all three steps:
   Step 1 (Idea): the base and its insert pad appear as a sketch, the way a patient's idea starts.
   Step 2 (Make): it becomes an engineering drawing: centre line, the moulded section with its wall hatched, called-out parts.
   Step 3 (Market): the device takes its real colours and three routes carry it out: NHS Supply Chain, distributors, home.
   Drawing, not to scale; no dimensions are given because none are published. */
var SCW=760,SCH=520;
function elp(cx,cy,rx,ry,half){return half?"M"+(cx-rx)+" "+cy+"A"+rx+" "+ry+" 0 0 0 "+(cx+rx)+" "+cy:"M"+(cx-rx)+" "+cy+"A"+rx+" "+ry+" 0 1 0 "+(cx+rx)+" "+cy+"A"+rx+" "+ry+" 0 1 0 "+(cx-rx)+" "+cy}
function padD(cx,cy,w,k){var P=[[-.92,-.55],[-.6,-.92],[.25,-.98],[.78,-.78],[1,-.2],[.95,.35],[.62,.78],[.05,.95],[-.2,.93],[-.24,.83],[-.32,.82],[-.38,.92],[-.7,.75],[-.95,.25]],s="",n=P.length;
  function X(p){return (cx+p[0]*w/2).toFixed(1)}function Y(p){return (cy+p[1]*w/2*k).toFixed(1)}
  for(var i=0;i<=n;i++){var p=P[i%n],q=P[(i+1)%n],m=[(p[0]+q[0])/2,(p[1]+q[1])/2];s+=i===0?"M"+X(m)+" "+Y(m):"Q"+X(p)+" "+Y(p)+" "+X(m)+" "+Y(m)}
  return s+"Z"}
function ogScene(o){
  var g='',mob=o.mob,i,cx=320,cy=236,R=262,ry=.36,H=50,Ri=234,Rf=182,Rb=242;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* step 3 colour, under every line: the moulded yellow base and the foam pad */
  g+='<g id="fills" opacity="0">';
  g+='<path class="fw" d="M'+(cx-R)+' '+cy+'A'+R+' '+(R*ry)+' 0 0 0 '+(cx+R)+' '+cy+'L'+(cx+Rb)+' '+(cy+H)+'A'+Rb+' '+(Rb*ry)+' 0 0 1 '+(cx-Rb)+' '+(cy+H)+'Z"/>';
  g+='<path class="fr" d="'+elp(cx,cy,R,R*ry)+'"/><path class="fi" d="'+elp(cx,cy,Ri,Ri*ry)+'"/><path class="ff" d="'+elp(cx,cy+26,Rf,Rf*ry)+'"/>';
  g+='<path class="fp" d="'+padD(cx+8,cy+20,310,ry)+'"/>';
  g+='<clipPath id="padc"><path d="'+padD(cx+8,cy+20,306,ry)+'"/></clipPath><g class="fh" clip-path="url(#padc)">';for(var yy=-6;yy<=6;yy++)for(var xx=-14;xx<=14;xx++){var hx=cx+8+xx*11.5+(yy%2?5.7:0),hy=cy+20+yy*11.5*ry*1.6;g+='<circle cx="'+hx.toFixed(1)+'" cy="'+hy.toFixed(1)+'" r="1.5"/>'}g+='</g>';
  g+='</g>';
  /* step 1: the sketch (each outline drawn twice, slightly off, like a pencil) */
  g+='<path class="sk" d="'+elp(cx,cy,R,R*ry)+'"/><path class="sk s2" d="'+elp(cx+3,cy-2,R-2,R*ry+3)+'"/>';
  g+='<path class="sk" d="'+elp(cx,cy,Ri,Ri*ry)+'"/>';
  g+='<path class="sk" d="'+elp(cx,cy+H,Rb,Rb*ry,1)+'"/><path class="sk s2" d="'+elp(cx-2,cy+H+3,Rb+3,Rb*ry,1)+'"/>';
  g+='<path class="sk" d="M'+(cx-R)+' '+cy+'L'+(cx-Rb)+' '+(cy+H)+'M'+(cx+R)+' '+cy+'L'+(cx+Rb)+' '+(cy+H)+'"/>';
  g+='<path class="sk" d="'+padD(cx+8,cy+20,310,ry)+'"/><path class="sk s2" d="'+padD(cx+11,cy+18,315,ry)+'"/>';
  /* step 2: the engineering drawing: centre line, the section below with its hatched wall, called-out parts */
  var sy=440,sw=14;
  g+='<path class="tc" d="M'+cx+' 110V478"/>';
  g+='<path class="pf" d="M'+(cx-R)+' '+(sy-30)+'L'+(cx-Rb)+' '+(sy+10)+'H'+(cx+Rb)+'L'+(cx+R)+' '+(sy-30)+'"/>';
  g+='<path class="pf" d="M'+(cx-R+sw)+' '+(sy-30)+'L'+(cx-Rb+sw+4)+' '+(sy+10-sw)+'H'+(cx+Rb-sw-4)+'L'+(cx+R-sw)+' '+(sy-30)+'"/>';
  g+='<path class="pf" d="M'+(cx-R)+' '+(sy-30)+'H'+(cx-R+sw)+'M'+(cx+R-sw)+' '+(sy-30)+'H'+(cx+R)+'"/>';
  var ht='';for(i=0;i<Math.floor((2*Rb-40)/11);i++){var x0=cx-Rb+14+i*11;ht+='M'+x0+' '+(sy+10)+'L'+(x0+sw-2)+' '+(sy-2)}
  g+='<path class="ht" d="'+ht+'"/>';
  g+='<path class="pf pd" d="M'+(cx-150)+' '+(sy-2)+'H'+(cx+162)+'"/>';
  if(!mob){
    g+='<path class="ld" d="M'+(cx+R-8)+' '+(cy-14)+'L606 170H620"/><text class="t c2" x="628" y="174">BASE</text>';
    g+='<path class="ld" d="M'+(cx+120)+' '+(cy+30)+'L606 330H620"/><text class="t c2" x="628" y="334">INSERT PAD</text>';
    g+='<path class="ld" d="M'+(cx+Rb-30)+' '+(sy+4)+'L606 456H620"/><text class="t c2" x="628" y="460">SECTION</text>';
  }
  /* step 3: three routes to market */
  var RT=[[40,"NHS SUPPLY CHAIN"],[78,"DISTRIBUTORS"],[116,"PATIENTS AT HOME"]];
  RT.forEach(function(r,j){var y=r[0],x0=cx+150-j*50,y0=cy-R*ry+22;
    g+='<path class="rt" d="M'+x0+' '+y0+'C'+x0+' '+(y+10)+' '+(x0+60)+' '+y+' '+(mob?720:604)+' '+y+'"/>';
    g+='<g class="rtl"><circle class="rd" cx="'+(mob?726:610)+'" cy="'+y+'" r="5"/>'+(mob?'':'<text class="t c3" x="622" y="'+(y+4)+'">'+r[1]+'</text>')+'</g>'});
  /* step captions */
  var lx=mob?24:40;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="505">1 · A PATIENT’S IDEA</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="505">2 · DEVELOPED AND MADE</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="505">3 · TO HOSPITALS AND HOMES</text></g>';
  return g+'</svg>';
}
function scene(){return ogScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=(L+1)+" "+(L+1);return [p,L+1]})};
  var q=function(s){return svg.querySelector(s)};
  var E={sk:dl(".sk"),tc:dl(".tc"),pf:dl(".pf"),ht:dl(".ht"),ld:dl(".ld"),rt:dl(".rt"),
    c2:$$("text.c2",svg),rtl:$$(".rtl",svg),fills:q("#fills"),l1:q("#lb1"),l2:q("#lb2"),l3:q("#lb3")};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    /* step 1: the sketch draws itself */
    draw(E.sk,b*seg(p,.02,.24));
    /* step 2: centre line, section and hatch, then the call-outs (which give way to the routes in step 3) */
    draw(E.tc,b*seg(p,.36,.46));draw(E.pf,b*seg(p,.38,.52));draw(E.ht,b*seg(p,.46,.58));
    var co=b*seg(p,.5,.6)*(1-seg(p,.68,.74));draw(E.ld,co);E.c2.forEach(function(t){op(t,co)});
    /* step 3: colour, then the routes out */
    op(E.fills,b*seg(p,.68,.8));draw(E.rt,b*seg(p,.76,.9));E.rtl.forEach(function(t){op(t,b*seg(p,.86,.93))});
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.3,.35)));op(E.l2,b*seg(p,.36,.42)*(1-seg(p,.64,.69)));op(E.l3,b*seg(p,.7,.76));
  };
}
