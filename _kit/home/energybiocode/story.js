/* the story scene (BL/BY/DB): ONE engraved schematic kept on screen for all three steps: a metered-dose inhaler firing into
   ModiFlow, and a 3D-printed-style model of a bronchial bifurcation beyond its outlet. Step 1 the aerosol leaves as a turbulent
   cloud and much of it settles on the walls. Step 2 ModiFlow's internal septa of different lengths draw in and divide the flow
   into smaller sub-flows; the swirls straighten into lanes. Step 3 the laminated aerosol carries through the trachea and past
   the bifurcation into both daughter branches. Sources: NIH RePORTER abstract of 1R43HL184661-01 (pre-laminating the
   aerosol flow with ModiFlow reduces turbulence; Phase I compares pre-laminated vs non-laminated flow through 3D bronchial
   bifurcation models) and the authors' 2025 abstract (internal septa of different lengths sequentially subdivide the flow).
   Everything is driven by the scrubbed story progress. */
var MF={y:270,x0:130,x1:478,hh:50,ox:512,bx:632,th:21,dh:16,ex:784,up:-118,dn:118,N:40};
function mfLane(i){return ((i*0.61803)%1)*2-1}
function scene(){
  var mob=MOBILE(),M=MF,f=function(n){return (+n).toFixed(1)},g='',i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 '+(mob?'40 800 500':'56 800 420')+'" aria-hidden="true">';
  g+='<defs><linearGradient id="mfg" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8fd3e0" stop-opacity=".02"/><stop offset="1" stop-color="#8fd3e0" stop-opacity=".16"/></linearGradient>'+
     '<radialGradient id="mfc" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#bfe8f0" stop-opacity=".5"/><stop offset="1" stop-color="#bfe8f0" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  /* the inhaler: canister in its boot, mouthpiece into the spacer */
  g+='<path class="body sD" d="M52 112H92V236H52Z"/><path class="hl sD" d="M58 120V228"/>';
  g+='<path class="boot sD" d="M40 228H104V'+(M.y-26)+'H'+M.x0+'V'+(M.y+26)+'H104V318H40Z"/>';
  g+='<path class="hl sD" d="M72 236V'+(M.y-6)+'L'+(M.x0-14)+' '+M.y+'"/>';
  /* ModiFlow: a spacer body with a tapered outlet */
  var top=M.y-M.hh,bot=M.y+M.hh;
  g+='<path class="tube" d="M'+M.x0+' '+top+'H'+M.x1+'L'+M.ox+' '+(M.y-M.th)+'V'+(M.y+M.th)+'L'+M.x1+' '+bot+'H'+M.x0+'Z"/>';
  g+='<path class="wall sD" d="M'+M.x0+' '+top+'H'+M.x1+'L'+M.ox+' '+(M.y-M.th)+'"/><path class="wall sD" d="M'+M.x0+' '+bot+'H'+M.x1+'L'+M.ox+' '+(M.y+M.th)+'"/>';
  g+='<path class="wall2 sD" d="M'+M.x0+' '+(top+5)+'H'+(M.x1-2)+'M'+M.x0+' '+(bot-5)+'H'+(M.x1-2)+'"/>';
  g+='<path class="wall sD" d="M'+M.x0+' '+top+'V'+bot+'"/>';
  /* hatching on the tube wall (engraving tone) */
  var hz='';for(i=0;i<44;i++){var x=M.x0+6+i*(M.x1-M.x0-12)/43;hz+='M'+f(x)+' '+(top-7)+'l5 7M'+f(x)+' '+(bot)+'l5 7'}
  g+='<path class="ht sD" d="'+hz+'"/>';
  /* the airway model: trachea, then two daughter branches */
  var bx=M.bx,ex=M.ex,uy=M.y+M.up,dy=M.y+M.dn,a1=Math.atan2(M.up,ex-bx),a2=Math.atan2(M.dn,ex-bx);
  function off(x,y,a,d){return [x-Math.sin(a)*d,y+Math.cos(a)*d]}
  var u0=off(bx,M.y,a1,-M.dh),u1=off(ex,uy,a1,-M.dh),u2=off(ex,uy,a1,M.dh),d0=off(bx,M.y,a2,M.dh),d1=off(ex,dy,a2,M.dh),d2=off(ex,dy,a2,-M.dh);
  /* the carina: where the inner walls of the two daughters meet */
  var cx=bx+M.dh/Math.sin(Math.abs(a1))*0.9+14;
  var aw='M'+M.ox+' '+(M.y-M.th)+'H'+f(bx-8)+'L'+f(u1[0])+' '+f(u1[1])+'M'+f(u2[0])+' '+f(u2[1])+'L'+f(cx)+' '+M.y+'L'+f(d2[0])+' '+f(d2[1])+'M'+f(d1[0])+' '+f(d1[1])+'L'+f(bx-8)+' '+(M.y+M.th)+'H'+M.ox;
  g+='<path class="air" d="'+aw+'"/>';
  g+='<path class="wall sD" d="'+aw+'"/>';
  var rg='';for(i=0;i<5;i++){var x=M.ox+10+i*22;rg+='M'+x+' '+(M.y-M.th+2)+'q4 '+M.th+' 0 '+(2*M.th-4)}
  g+='<path class="ht sD" d="'+rg+'"/>';
  g+='<path class="cap sD" d="M'+f(u1[0])+' '+f(u1[1])+'L'+f(u2[0])+' '+f(u2[1])+'M'+f(d1[0])+' '+f(d1[1])+'L'+f(d2[0])+' '+f(d2[1])+'"/>';
  g+='<text class="t" x="784" y="'+(mob?532:466)+'" text-anchor="end">'+(mob?'SCHEMATIC':'MODIFLOW AND A BRONCHIAL BIFURCATION · SCHEMATIC')+'</text>';
  g+='</g>';
  /* moving parts */
  g+='<g id="scMove">';
  /* swirls (turbulence) inside the tube */
  var sw='';for(i=0;i<7;i++){var sx=M.x0+40+i*46,sy=M.y+((i%3)-1)*22,r=10+(i%2)*6;sw+='M'+(sx+r)+' '+sy+'a'+r+' '+r+' 0 1 0 '+(-r*.6)+' '+(r*.8)+'a'+(r*.6)+' '+(r*.6)+' 0 1 1 '+(r*.5)+' '+(-r*.6)}
  g+='<path id="swirl" class="swl" d="'+sw+'"/>';
  /* septa: one long, two medium, four short (sequential subdivision), all ending at the outlet end of the body */
  var S=[[0,200]],k;for(k=-1;k<=1;k+=2)S.push([k*25,300]);for(k=-3;k<=3;k+=2)S.push([k*12.5,392]);
  g+='<g id="septa">'+S.map(function(s){return '<path class="sep" d="M'+s[1]+' '+(M.y+s[0])+'H'+(M.x1-4)+'"/>'}).join('')+'</g>';
  /* lanes (laminar streamlines) */
  var ln='';for(k=0;k<8;k++){var y=M.y-43.75+k*12.5;ln+='M'+(M.x0+8)+' '+y+'C'+(M.x0+60)+' '+y+' '+(M.x0+60)+' '+y+' '+(M.x1-6)+' '+y}
  g+='<path id="lanes" class="lns" d="'+ln+'"/>';
  g+='<circle id="glow" cx="'+(bx+70)+'" cy="'+M.y+'" r="0" fill="url(#mfc)"/>';
  for(i=0;i<M.N;i++)g+='<circle class="ptk" r="'+(i%3?2.6:3.4)+'"/>';
  g+='</g>';
  /* labels, one set per step (leader lines end at the thing they name) */
  g+='<g id="lb1"><text class="a" x="'+(mob?20:118)+'" y="'+(mob?70:96)+'">'+(mob?'TURBULENT SPRAY':'TURBULENT SPRAY')+'</text>'+(mob?'':'<text class="t" x="118" y="116">METERED-DOSE INHALER</text>')+'<path class="ldr" d="M'+(mob?120:180)+' '+(mob?84:126)+'L'+(mob?190:214)+' '+(M.y-30)+'"/>'+
     '<text class="a" x="'+(mob?20:160)+'" y="'+(mob?420:386)+'">'+(mob?'WALL DEPOSITS':'AEROSOL LOST TO THE WALLS')+'</text><path class="ldr" d="M'+(mob?150:300)+' '+(mob?400:370)+'L'+(mob?260:330)+' '+(bot+2)+'"/></g>';
  g+='<g id="lb2"><text class="a" x="'+(mob?20:250)+'" y="'+(mob?70:150)+'">'+(mob?'INTERNAL SEPTA':'INTERNAL SEPTA OF DIFFERENT LENGTHS')+'</text><path class="ldr" d="M'+(mob?150:320)+' '+(mob?84:162)+'L'+(mob?396:400)+' '+(M.y-37.5)+'"/>'+
     '<text class="a" x="'+(mob?20:160)+'" y="'+(mob?420:386)+'">'+(mob?'LAMINATED SUB-FLOWS':'LAMINATED SUB-FLOWS, LESS TURBULENCE')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+(mob?420:560)+'" y="'+(mob?520:70)+'"'+(mob?' text-anchor="middle"':'')+'>'+(mob?'BIFURCATION MODEL':'BRONCHIAL BIFURCATION')+'</text>'+(mob?'':'<text class="t" x="560" y="90">3D MODEL, PHASE I</text>')+'<path class="ldr" d="M'+(mob?640:600)+' '+(mob?492:100)+'L'+(mob?cx+8:cx-2)+' '+(mob?M.y+18:M.y-12)+'"/></g>';
  return g+'</svg>';
}
/* a particle's position: x along the flow; y from its lane, with turbulence T (0 laminar, 1 turbulent) */
function mfPos(i,u,T){
  var M=MF,l=mfLane(i),x=M.x0+6+u*(M.ex-10-M.x0),y,hh,wob=Math.sin(u*22+i*1.7)*Math.cos(u*13+i)*T;
  /* in turbulent flow two particles in three settle on a wall: stop at their own point and sit on the wall */
  var stop=(i%3)?(M.x0+60+((i*37)%320)):9e9,dep=T>.02&&(i%3)&&x>stop;
  if(dep){x=stop;u=(stop-M.x0-6)/(M.ex-10-M.x0)}
  if(x<=M.x1){hh=M.hh-6;y=M.y+l*hh*(1-T*.35)+wob*hh*.7;if(dep)y=M.y+(l<0?-1:1)*(M.hh-4)}
  else if(x<=M.ox){var q=(x-M.x1)/(M.ox-M.x1);hh=(M.hh-6)*(1-q)+(M.th-5)*q;y=M.y+l*hh+wob*hh*.5}
  else if(x<=M.bx){hh=M.th-5;y=M.y+l*hh+wob*hh*.5}
  else{var q2=(x-M.bx)/(M.ex-M.bx),up=l<0,ll=up?(l+.5)*2:(l-.5)*2;y=M.y+(up?M.up:M.dn)*q2+ll*(M.dh-5)*(.35+.65*Math.min(1,q2*3))+wob*4}
  return [x,Math.max(M.y-M.hh+3,Math.min(M.y+M.hh-3,y)),dep];
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .tube, #scBase .air",svg),mv:$("#scMove",svg),sw:$("#swirl",svg),
    sep:dl("#septa .sep"),ln:$("#lanes",svg),gl:$("#glow",svg),pt:$$(".ptk",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=seg(p,0,.14),s2=seg(p,.34,.52),s3=seg(p,.66,.84),T=1-s2;
    /* step 1: swirls; they straighten into lanes as the septa draw in */
    op(E.sw,b*(.3+.7*s1)*T);
    draw(E.sep,s2);op(E.ln,b*s2*(1-.4*s3));
    /* the particles stream continuously with the scroll */
    E.pt.forEach(function(el,i){var u=((p*2.2)+i/MF.N)%1,q=mfPos(i,u,T);
      el.setAttribute("cx",q[0].toFixed(1));el.setAttribute("cy",q[1].toFixed(1));
      var a=q[2]?.55:Math.min(1,Math.sin(u*Math.PI)*2.4);op(el,b*a*(.35+.65*Math.max(s1,s2,s3)))});
    /* step 3: the daughter branches light as the laminated flow arrives */
    E.gl.setAttribute("r",(95*s3).toFixed(1));op(E.gl,b*s3*.9);
    op(E.l1,b*(1-seg(p,.26,.34)));op(E.l2,b*s2*(1-seg(p,.6,.68)));op(E.l3,b*seg(p,.7,.8));
  };
}
