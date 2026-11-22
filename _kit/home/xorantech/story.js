/* The story scene (BL/BY/DB): how Xoran's cone beam CT works (xorantech.com: low-dose cone beam CT at the point of care,
   VetCAT scans in under a minute; the Next Generation vTRON's open bore, flat-panel detector and 3D reconstruction), as ONE
   continuous engraved scene. Centre: the scanner's gantry ring around a head in axial section. Step 1: the x-ray source
   and the curved flat-panel detector make one rotation, a cone-shaped beam passing through the head. Step 2: a projection
   is recorded at every angle, building a ring of readings around the gantry. Step 3: the projections are reconstructed into
   a 3D volume: the bone, sinuses and airway resolve inside the section. Every element is driven by the story progress. */
var SCW=760,SCH=520,CX=420,CY=262,RO=222,RI=190,RM2=206;
var STO=(function(){
  var ticks=[],i,n=96;
  for(i=0;i<n;i++){var a=i/n*Math.PI*2,wd=2*Math.sqrt(Math.pow(68*Math.cos(a),2)+Math.pow(82*Math.sin(a),2));
    ticks.push({a:a,l:5+16*((wd-136)/(164-136))})}
  return {ticks:ticks};
})();
function xp(r,a){return [(CX+Math.cos(a)*r).toFixed(1),(CY+Math.sin(a)*r).toFixed(1)]}
function memScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="skc"><ellipse cx="'+CX+'" cy="'+CY+'" rx="60" ry="74"/></clipPath></defs>';
  g+='<g id="scBase"><path class="frm sD" d="M24 20H736M24 500H736"/>';
  g+='<circle class="rg sD" cx="'+CX+'" cy="'+CY+'" r="'+RO+'"/><circle class="rg sD" cx="'+CX+'" cy="'+CY+'" r="'+RI+'"/>';
  if(!o.mob)g+='<text class="t" x="24" y="10">CONE BEAM CT · SCHEMATIC</text>';g+='</g>';var ly=o.mob?12:48;
  /* the head in axial section: soft tissue, then the skull */
  g+='<g id="scHead"><ellipse class="hd sD" cx="'+CX+'" cy="'+CY+'" rx="78" ry="92"/>';
  g+='<path class="hd sD" d="M'+(CX-14)+' '+(CY-90)+'Q'+CX+' '+(CY-122)+' '+(CX+14)+' '+(CY-90)+'"/>';
  g+='<ellipse class="bn sD" cx="'+CX+'" cy="'+CY+'" rx="68" ry="82"/><ellipse class="bn sD" cx="'+CX+'" cy="'+CY+'" rx="60" ry="74"/></g>';
  /* what the reconstruction resolves inside */
  g+='<g id="scIn"><g clip-path="url(#skc)">';
  for(i=0;i<30;i++){var yy=CY-74+i*5.1;g+='<path class="ht" d="M'+(CX-62)+' '+yy.toFixed(1)+'H'+(CX+62)+'"/>'}
  g+='</g>';
  g+='<path class="in sD" d="M'+(CX-7)+' '+(CY-72)+'C'+(CX-12)+' '+(CY-40)+' '+(CX-10)+' '+(CY-14)+' '+(CX-4)+' '+(CY+4)+'L'+(CX+4)+' '+(CY+4)+'C'+(CX+10)+' '+(CY-14)+' '+(CX+12)+' '+(CY-40)+' '+(CX+7)+' '+(CY-72)+'Z"/>';
  g+='<path class="in sD" d="M'+CX+' '+(CY-70)+'V'+(CY+2)+'"/>';
  g+='<ellipse class="in sD" cx="'+(CX-30)+'" cy="'+(CY-30)+'" rx="17" ry="24" transform="rotate(-12 '+(CX-30)+' '+(CY-30)+')"/>';
  g+='<ellipse class="in sD" cx="'+(CX+30)+'" cy="'+(CY-30)+'" rx="17" ry="24" transform="rotate(12 '+(CX+30)+' '+(CY-30)+')"/>';
  g+='<circle class="in sD" cx="'+(CX-46)+'" cy="'+(CY+30)+'" r="9"/><circle class="in sD" cx="'+(CX+46)+'" cy="'+(CY+30)+'" r="9"/>';
  g+='<circle class="in sD" cx="'+CX+'" cy="'+(CY+44)+'" r="15"/>';
  g+='<path id="scSl" class="sl" d="M'+(CX-70)+' '+CY+'H'+(CX+70)+'"/></g>';
  /* the ring of projections recorded around the gantry */
  g+='<g id="scTk">';
  STO.ticks.forEach(function(T,k){var p0=xp(RO+6,T.a),p1=xp(RO+6+T.l,T.a);g+='<path class="tk" data-k="'+k+'" d="M'+p0[0]+' '+p0[1]+'L'+p1[0]+' '+p1[1]+'"/>'});
  g+='</g>';
  /* the rotating gantry: source at top, curved flat-panel detector opposite, the cone-shaped beam between */
  var da=40*Math.PI/180,dL=xp(RM2,Math.PI/2+da),dR=xp(RM2,Math.PI/2-da),s0=[CX,CY-RI+4];
  g+='<g id="scGt">';
  g+='<path class="cone" d="M'+s0[0]+' '+s0[1]+'L'+dL[0]+' '+dL[1]+'A'+RM2+' '+RM2+' 0 0 0 '+dR[0]+' '+dR[1]+'Z"/>';
  g+='<path class="ce" d="M'+s0[0]+' '+s0[1]+'L'+dL[0]+' '+dL[1]+'M'+s0[0]+' '+s0[1]+'L'+dR[0]+' '+dR[1]+'"/>';
  g+='<rect class="src" x="'+(CX-17)+'" y="'+(CY-RO+1)+'" width="34" height="30"/>';
  g+='<path class="det" d="M'+dL[0]+' '+dL[1]+'A'+RM2+' '+RM2+' 0 0 0 '+dR[0]+' '+dR[1]+'"/>';
  g+='</g>';
  g+='<g id="lb1"><text class="a" x="24" y="'+ly+'">ONE ROTATION · A CONE-SHAPED BEAM</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="'+ly+'">A PROJECTION AT EVERY ANGLE</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="'+ly+'">RECONSTRUCTED IN 3D</text></g>';
  g+='<text class="t k1" x="24" y="'+(o.mob?452:462)+'">■ X-RAY SOURCE</text><text class="t k2" x="24" y="486">◡ FLAT-PANEL DETECTOR</text>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),head:dl("#scHead .sD"),inn:dl("#scIn .sD"),fade:$$("#scBase text, .k1, .k2",svg),
    ht:$$("#scIn .ht",svg),sl:$("#scSl",svg),gt:$("#scGt",svg),cone:$("#scGt .cone",svg),ce:$("#scGt .ce",svg),
    tk:$$(".tk",svg).map(function(el){return {el:el,T:STO.ticks[+el.getAttribute("data-k")]}}),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var grow=seg(p,0,.14),rot=seg(p,.08,.66),rec=seg(p,.68,.92);
    draw(E.head,b*grow);
    /* the gantry turns once; the beam is on while it turns */
    var deg=rot*360;
    E.gt.setAttribute("transform","rotate("+deg.toFixed(2)+" "+CX+" "+CY+")");
    op(E.gt,b*Math.min(1,grow*1.6)*(1-.55*rec));
    var beam=Math.min(1,seg(p,.06,.12))*(1-seg(p,.64,.7));op(E.cone,b*beam);op(E.ce,b*(.35+.65*beam));
    /* a projection is recorded for every angle the source has passed */
    var pass=rot*Math.PI*2;
    E.tk.forEach(function(x){var rel=(x.T.a+Math.PI*.5+Math.PI*4)%(Math.PI*2);op(x.el,b*(rel<=pass?1:0)*(.55+.45*seg(p,.3,.4)))});
    /* reconstruction: the inner anatomy resolves, a slice plane sweeps the section */
    draw(E.inn,b*rec);E.ht.forEach(function(el,i){op(el,b*seg(rec,i/40,i/40+.3)*.5)});
    var sw=seg(p,.7,.95);E.sl.setAttribute("transform","translate(0 "+((sw-.5)*150).toFixed(1)+")");op(E.sl,b*rec*(1-seg(p,.95,1)*.6));
    op(E.l1,b*seg(p,.1,.18)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.74,.82));
  };
}
