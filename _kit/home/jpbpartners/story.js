/* the story scene (BL/BY/DB): ONE engraved street elevation of a multi-location business, the kind JPB backs (hardware
   stores, HVAC and plumbing shops, franchises). The first store stands alone; each step of the firm's own value-creation
   method (strategy, structure, systems, people) inks one more layer of the same drawing until three lit locations stand
   on the street. Lines draw on scroll; labels fade in with their step. */
function shop(o){
  /* returns the parts of one storefront building: x,w = left and width, h = height, gy = ground line, fl = floors */
  var x=o.x,w=o.w,h=o.h,gy=o.gy,top=gy-h,f=function(n){return n.toFixed(1)},P={};
  var cor=Math.max(5,h*.05),par=Math.max(6,h*.06);
  P.out='M'+f(x)+' '+f(gy)+'V'+f(top+par)+'H'+f(x+w)+'V'+f(gy)+'M'+f(x-4)+' '+f(top+par)+'H'+f(x+w+4)+'V'+f(top+par-cor)+'H'+f(x-4)+'Z'+
        'M'+f(x+w*.3)+' '+f(top+par-cor)+'V'+f(top)+'H'+f(x+w*.7)+'V'+f(top+par-cor);
  var fy=gy-h*.46;P.fy=fy;
  /* storefront band: piers, transom, display windows, door */
  var dw=Math.min(w*.18,30),dx=x+w/2-dw/2,dh=h*.34;
  P.front='M'+f(x)+' '+f(fy)+'H'+f(x+w)+'M'+f(x+6)+' '+f(gy)+'V'+f(fy+6)+'H'+f(x+w-6)+'V'+f(gy)+
          'M'+f(x+12)+' '+f(gy-4)+'V'+f(gy-dh)+'H'+f(dx-6)+'V'+f(gy-4)+'Z M'+f(dx+dw+6)+' '+f(gy-4)+'V'+f(gy-dh)+'H'+f(x+w-12)+'V'+f(gy-4)+'Z'+
          'M'+f(dx)+' '+f(gy)+'V'+f(gy-dh-4)+'H'+f(dx+dw)+'V'+f(gy)+'M'+f(dx+dw/2)+' '+f(gy)+'V'+f(gy-dh-4);
  P.win=[];var nw=o.nw,ww=(w-24)/nw,uh=(fy-(top+par))-16;
  for(var k=0;k<nw;k++){var wx=x+12+k*ww+ww*.18,wwid=ww*.64;P.win.push([wx,top+par+10,wwid,uh-6])}
  P.disp=[[x+12,gy-dh,dx-6-(x+12),dh-4],[dx+dw+6,gy-dh,x+w-12-(dx+dw+6),dh-4]];
  P.door=[dx,gy-dh-4,dw,dh+4];P.sign=[x+w*.16,fy-h*.08,w*.68,h*.065];
  /* structure: columns, floor beams, X-bracing per bay */
  var cols=o.bays+1,bw=w/o.bays,s='';
  for(var c=0;c<cols;c++){var cx=x+c*bw;s+='M'+f(cx)+' '+f(gy)+'V'+f(top+par)}
  s+='M'+f(x)+' '+f(fy)+'H'+f(x+w)+'M'+f(x)+' '+f(top+par)+'H'+f(x+w);
  for(c=0;c<o.bays;c++){var a=x+c*bw;s+='M'+f(a)+' '+f(fy)+'L'+f(a+bw)+' '+f(top+par)+'M'+f(a+bw)+' '+f(fy)+'L'+f(a)+' '+f(top+par)}
  P.frame=s;P.top=top;P.par=par;P.cor=cor;
  /* footings below grade */
  var ft='';for(c=0;c<cols;c++){var fx=x+c*bw;ft+='M'+f(fx-7)+' '+f(gy+16)+'H'+f(fx+7)+'V'+f(gy+9)+'H'+f(fx-7)+'Z'}P.foot=ft;
  return P;
}
function rtu(x,y,s){var f=function(n){return n.toFixed(1)};
  return 'M'+f(x)+' '+f(y)+'V'+f(y-16*s)+'H'+f(x+40*s)+'V'+f(y)+'M'+f(x+3*s)+' '+f(y-16*s)+'V'+f(y-19*s)+'H'+f(x+37*s)+'V'+f(y-16*s)+
    'M'+f(x+6*s)+' '+f(y-4*s)+'H'+f(x+20*s)+'M'+f(x+6*s)+' '+f(y-8*s)+'H'+f(x+20*s)+'M'+f(x+6*s)+' '+f(y-12*s)+'H'+f(x+20*s)+
    'M'+f(x+31*s)+' '+f(y-8*s)+'m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0'}
function figureP(x,gy,s,v){var f=function(n){return n.toFixed(1)};var hh=gy-34*s;
  return 'M'+f(x)+' '+f(hh-6*s)+'m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0'+
   'M'+f(x-6*s)+' '+f(gy-16*s)+'L'+f(x-5*s)+' '+f(hh+1*s)+'Q'+f(x)+' '+f(hh-1*s)+' '+f(x+5*s)+' '+f(hh+1*s)+'L'+f(x+6*s)+' '+f(gy-16*s)+
   'M'+f(x-3*s)+' '+f(gy-16*s)+'L'+f(x-3.4*s+v)+' '+f(gy)+'M'+f(x+3*s)+' '+f(gy-16*s)+'L'+f(x+3.4*s-v)+' '+f(gy)}
function street(o){
  var W=o.W,H=o.H,gy=o.gy,f=function(n){return n.toFixed(1)},i,k;
  var B=o.b.map(shop);
  var g='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+W+' '+H+'" aria-hidden="true">';
  /* base: neatline, grade line and pavement, the first store's outline, a title block */
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="'+(W-1)+'" height="'+(H-1)+'"/>';
  g+='<path class="sD gr" d="M14 '+f(gy)+'H'+(W-14)+'"/><path class="sD kb" d="M14 '+f(gy+o.kb)+'H'+(W-14)+'M14 '+f(gy+o.kb+5)+'H'+(W-14)+'"/>';
  var hz='';for(i=0;i<(o.mob?34:66);i++){var hx=18+i*((W-36)/(o.mob?34:66));hz+='M'+f(hx)+' '+f(gy+o.kb+5)+'l-9 9'}g+='<path class="sD ht" d="'+hz+'"/>';
  g+='<path class="sD bl" d="'+B[0].out+'"/><path class="sD bl" d="'+B[0].front+'"/>';
  B[0].win.forEach(function(r){g+='<rect class="dot wn0" x="'+f(r[0])+'" y="'+f(r[1])+'" width="'+f(r[2])+'" height="'+f(r[3])+'"/>'});
  g+='<g class="tb"><path class="tbl" d="M'+(W-o.tb[0]-14)+' '+(H-14-o.tb[1])+'h'+o.tb[0]+'v'+o.tb[1]+'h-'+o.tb[0]+'Z M'+(W-o.tb[0]-14)+' '+(H-14-o.tb[1]/2)+'h'+o.tb[0]+'"/>'+
     '<text x="'+(W-o.tb[0]-6)+'" y="'+(H-14-o.tb[1]*.62)+'" class="t">'+o.tbT[0]+'</text><text x="'+(W-o.tb[0]-6)+'" y="'+(H-14-o.tb[1]*.13)+'" class="t s">'+o.tbT[1]+'</text></g>';
  g+='</g>';
  /* 1 strategy: the planned locations in dashed line and a dimension run across all three */
  g+='<g id="sc1">';for(k=1;k<B.length;k++)g+='<path class="plan" d="'+B[k].out+'"/>';
  var dy=o.dimY,x0=o.b[0].x,x1=o.b[B.length-1].x+o.b[B.length-1].w;
  g+='<path class="dim" d="M'+f(x0)+' '+f(dy)+'H'+f(x1)+'M'+f(x0)+' '+f(dy-7)+'V'+f(dy+7)+'M'+f(x1)+' '+f(dy-7)+'V'+f(dy+7);
  for(k=1;k<B.length;k++)g+='M'+f(o.b[k].x)+' '+f(dy-5)+'V'+f(dy+5);
  g+='"/><text x="'+f(o.l1[0])+'" y="'+f(o.l1[1])+'" text-anchor="'+o.l1[2]+'" class="a">'+o.l1[3]+'</text></g>';
  /* 2 structure: frames, footings and the remaining facades */
  g+='<g id="sc2">';B.forEach(function(P,n){g+='<path class="frm dr" d="'+P.frame+'"/><path class="frm dr" d="'+P.foot+'"/>';if(n)g+='<path class="bl dr" d="'+P.out+'"/><path class="bl dr" d="'+P.front+'"/>'});
  g+='<text x="'+f(o.l2[0])+'" y="'+f(o.l2[1])+'" text-anchor="'+o.l2[2]+'" class="a">'+o.l2[3]+'</text></g>';
  /* 3 systems: rooftop units on every store, one supply line tying them together */
  g+='<g id="sc3">';var dl='';B.forEach(function(P,n){var bx=o.b[n],s=o.mob?.8:1,ux=bx.x+bx.w*.62,uy=P.top+P.par-P.cor;g+='<path class="sys dr" d="'+rtu(ux,uy,s)+'"/>';
    dl+=(n?'L':'M')+f(bx.x+bx.w*.2)+' '+f(gy+o.ut)+'M'+f(bx.x+bx.w*.2)+' '+f(gy+o.ut)+'V'+f(P.fy+6)+'M'+f(bx.x+bx.w*.2)+' '+f(gy+o.ut)});
  dl='M'+f(o.b[0].x+o.b[0].w*.2)+' '+f(gy+o.ut)+'H'+f(o.b[B.length-1].x+o.b[B.length-1].w*.2);
  B.forEach(function(P,n){var bx=o.b[n],px=bx.x+bx.w*.2;dl+='M'+f(px)+' '+f(gy+o.ut)+'V'+f(gy)+'M'+f(px)+' '+f(gy-3)+'V'+f(P.fy+4)+'M'+f(px-4)+' '+f(P.fy+4)+'h8';
    var ux=bx.x+bx.w*.62,s=o.mob?.8:1;dl+='M'+f(ux+10*s)+' '+f(P.top+P.par-P.cor)+'V'+f(P.fy-2)});
  g+='<path class="pipe dr" d="'+dl+'"/>';
  g+='<text x="'+f(o.l3[0])+'" y="'+f(o.l3[1])+'" text-anchor="'+o.l3[2]+'" class="a">'+o.l3[3]+'</text></g>';
  /* 4 people: lit windows, awnings, signs, people at the doors, a service van at the kerb */
  g+='<g id="sc4">';B.forEach(function(P,n){P.win.forEach(function(r){g+='<rect class="lit" x="'+f(r[0])+'" y="'+f(r[1])+'" width="'+f(r[2])+'" height="'+f(r[3])+'"/>'});
    P.disp.forEach(function(r){g+='<rect class="lit2" x="'+f(r[0])+'" y="'+f(r[1])+'" width="'+f(r[2])+'" height="'+f(r[3])+'"/>'});
    var sg=P.sign;g+='<rect class="sgn" x="'+f(sg[0])+'" y="'+f(sg[1])+'" width="'+f(sg[2])+'" height="'+f(sg[3])+'"/>';
    var bx=o.b[n],ay=P.fy+3,aw='M'+f(bx.x+4)+' '+f(ay)+'H'+f(bx.x+bx.w-4)+'L'+f(bx.x+bx.w+6)+' '+f(ay+o.aw)+'H'+f(bx.x-6)+'Z';for(var q=1;q<9;q++){var ax=bx.x+4+(bx.w-8)*q/9,ax2=bx.x-6+(bx.w+12)*q/9;aw+='M'+f(ax)+' '+f(ay)+'L'+f(ax2)+' '+f(ay+o.aw)}
    g+='<path class="awn" d="'+aw+'"/>';
    o.fig[n].forEach(function(fx,j){g+='<path class="fig" d="'+figureP(bx.x+bx.w*fx,gy,o.mob?.78:1,j%2?1.5:-1.5)+'"/>'})});
  var vx=o.van[0],vy=gy+o.kb-2,vs=o.van[1],fv=function(a,b){return f(vx+a*vs)+' '+f(vy-b*vs)};
  g+='<path class="van" d="M'+fv(0,6)+'V'+f(vy-30*vs)+'H'+f(vx+52*vs)+'L'+fv(66,20)+'V'+f(vy-6*vs)+'Z M'+fv(54,28)+'L'+fv(64,20)+'H'+fv(54,20)+'Z M'+fv(6,24)+'H'+fv(46,24)+'M'+fv(6,14)+'H'+fv(46,14)+'"/>'+
     '<path class="van" d="M'+fv(10,6)+'m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0M'+fv(56,6)+'m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"/>';
  g+='<text x="'+f(o.l4[0])+'" y="'+f(o.l4[1])+'" text-anchor="'+o.l4[2]+'" class="a">'+o.l4[3]+'</text></g>';
  return g+'</svg>';
}
function scene(){
  if(MOBILE())return street({mob:1,W:400,H:440,gy:330,kb:20,ut:12,tb:[178,34],tbT:["ELEVATION","MID-ATLANTIC · SOUTHEAST"],dimY:58,aw:12,
    b:[{x:18,w:128,h:212,gy:330,nw:3,bays:2},{x:156,w:108,h:176,gy:330,nw:2,bays:2},{x:274,w:108,h:196,gy:330,nw:2,bays:2}],
    l1:[200,44,"middle","ROOM TO GROW"],l2:[22,100,"start","STRUCTURE"],l3:[200,372,"middle","SHARED SYSTEMS"],l4:[22,92,"start","PEOPLE"],
    fig:[[.32],[.7],[.3,.74]],van:[300,.62]});
  return street({W:800,H:520,gy:396,kb:24,ut:14,tb:[230,40],tbT:["STREET ELEVATION · THREE LOCATIONS","MID-ATLANTIC AND SOUTHEAST"],dimY:56,aw:16,
    b:[{x:40,w:236,h:300,gy:396,nw:4,bays:3},{x:300,w:200,h:250,gy:396,nw:3,bays:2},{x:524,w:236,h:276,gy:396,nw:4,bays:3}],
    l1:[400,40,"middle","ROOM TO GROW: ADD-ON LOCATIONS"],l2:[44,446,"start","STRUCTURE AND CAPITAL"],l3:[44,446,"start","SHARED SYSTEMS"],l4:[44,446,"start","PEOPLE"],
    fig:[[.3,.78],[.7],[.25,.66]],van:[566,.9]});
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .dot, #scBase .neat, #scBase .tb",svg),g1:$("#sc1",svg),g2:$("#sc2",svg),g3:$("#sc3",svg),g4:$("#sc4",svg),
    d2:dl("#sc2 .dr"),d3:dl("#sc3 .dr"),t:[$("#sc1 text",svg),$("#sc2 text",svg),$("#sc3 text",svg),$("#sc4 text",svg)]};
  var mob=svg.classList.contains("mob"),lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.16),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    E.g1.style.opacity=(b*Math.max(s1,.0)).toFixed(3);
    E.g2.style.opacity=(b*(s2>0?1:0)*(1-.45*s4)).toFixed(3);draw(E.d2,s2);
    E.g3.style.opacity=(b*(s3>0?1:0)).toFixed(3);draw(E.d3,s3);
    E.g4.style.opacity=(b*s4).toFixed(3);
    /* one label at a time where labels share a spot */
    E.t[0].style.opacity=String(1);
    E.t[1].style.opacity=(s2*(1-s3)).toFixed(3);E.t[2].style.opacity=(s3*(1-s4)).toFixed(3);E.t[3].style.opacity=s4.toFixed(3);
  };
}
