/* the story scene (BL/BY/DB): ONE engraved scene kept on screen for all three steps. Right: the edge of a tumor cell (engraved
   membrane, cytoplasm contours, nucleus) studded with Fas ligand trimers. Left: an activated T cell with Fas receptors on its
   leading face. Step 1 the T cell meets FasL and blebs into apoptosis. Step 2 M3T01 antibodies (engraved Ys) cap every FasL
   trimer and the T cell is whole again. Step 3 T cells survive and move into the tumor. Sources: gammabiotherapeutics.com
   (Science, Pipeline), NIH RePORTER abstract of 1R44CA310416-01. Schematic; not to scale. Driven by the scrubbed story progress. */
var GS={TC:[200,280],TR:92,TU:[900,280],UR:420};
GS.FL=[168,192,156,204,144,216].map(function(d){var a=d*Math.PI/180,c=Math.cos(a),s=Math.sin(a),R=GS.UR;
  return {a:a,m:[GS.TU[0]+R*c,GS.TU[1]+R*s],t:[GS.TU[0]+(R+30)*c,GS.TU[1]+(R+30)*s],u:[c,s]}});
function gsRuff(cx,cy,r,k,ph){var s='',i,n=96;for(i=0;i<=n;i++){var t=i/n*Math.PI*2,rr=r*(1+k*Math.sin(14*t+ph)+k*.5*Math.sin(9*t+ph*2));
  s+=(i?'L':'M')+(cx+rr*Math.cos(t)).toFixed(1)+' '+(cy+rr*Math.sin(t)).toFixed(1)}return s+'Z'}
function gsArc(r,a0,a1){var c=GS.TU,p0=[c[0]+r*Math.cos(a0),c[1]+r*Math.sin(a0)],p1=[c[0]+r*Math.cos(a1),c[1]+r*Math.sin(a1)];
  return 'M'+p0[0].toFixed(1)+' '+p0[1].toFixed(1)+'A'+r+' '+r+' 0 0 0 '+p1[0].toFixed(1)+' '+p1[1].toFixed(1)}
/* a T cell drawn around its own origin: ruffled membrane, inner contour, nucleus, Fas receptors on the right */
function gsTcell(id,r,cls){var g='<g class="tc '+(cls||'')+'" id="'+id+'"><circle r="'+(r*1.45)+'" fill="url(#tcg)"/>'+
  '<path class="tm1" d="'+gsRuff(0,0,r,.03,0)+'"/><path class="tm2" d="'+gsRuff(0,0,r*.9,.015,1)+'"/>'+
  '<circle class="nu" cx="'+(-r*.12)+'" cy="'+(r*.04)+'" r="'+(r*.56)+'"/><circle class="nu2" cx="'+(-r*.14)+'" cy="'+(r*.06)+'" r="'+(r*.4)+'"/><circle class="nu3" cx="'+(-r*.16)+'" cy="'+(r*.08)+'" r="'+(r*.22)+'"/>',i;
  for(i=0;i<6;i++){var a=(-50+i*20)*Math.PI/180,c=Math.cos(a),s=Math.sin(a);
    g+='<path class="fr" d="M'+(r*c).toFixed(1)+' '+(r*s).toFixed(1)+'L'+((r+15)*c).toFixed(1)+' '+((r+15)*s).toFixed(1)+'"/><circle class="frb" cx="'+((r+18)*c).toFixed(1)+'" cy="'+((r+18)*s).toFixed(1)+'" r="3.6"/>'}
  /* apoptotic blebs (step 1) */
  for(i=0;i<9;i++){var b=i/9*Math.PI*2+.3,br=r*(1.02+.06*(i%3));g+='<circle class="bl" cx="'+(br*Math.cos(b)).toFixed(1)+'" cy="'+(br*Math.sin(b)).toFixed(1)+'" r="'+(7+4*(i%3))+'"/>'}
  return g+'</g>'}
/* an IgG antibody as an engraved Y, pointing along +x from its origin (arms reach forward) */
function gsY(){return '<path class="yb" d="M-34 0L-6 0M-6 0L14 -14M-6 0L14 14"/><path class="ya" d="M-34 -4L-6 -4L13 -17.5M-34 4L-6 4L13 17.5"/><circle class="yt" cx="16" cy="-16" r="3.2"/><circle class="yt" cx="16" cy="16" r="3.2"/>'}
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,U=GS.TU,R=GS.UR;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="tcg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#5ccded" stop-opacity=".14"/><stop offset="1" stop-color="#5ccded" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="flg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#e58bbd" stop-opacity=".55"/><stop offset="1" stop-color="#e58bbd" stop-opacity="0"/></radialGradient>'+
     '<linearGradient id="ufd" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="560"><stop offset="0" stop-color="#eef3fa" stop-opacity="0"/><stop offset=".22" stop-color="#eef3fa"/><stop offset=".78" stop-color="#eef3fa"/><stop offset="1" stop-color="#eef3fa" stop-opacity="0"/></linearGradient>'+
     '<linearGradient id="vfd" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="560"><stop offset="0" stop-color="#bf9bfb" stop-opacity="0"/><stop offset=".25" stop-color="#bf9bfb"/><stop offset=".75" stop-color="#bf9bfb"/><stop offset="1" stop-color="#bf9bfb" stop-opacity="0"/></linearGradient>'+
     '<radialGradient id="tug" cx=".5" cy=".5" r=".5"><stop offset=".72" stop-color="#a45cfa" stop-opacity="0"/><stop offset=".86" stop-color="#a45cfa" stop-opacity=".10"/><stop offset="1" stop-color="#a45cfa" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  g+='<circle cx="'+U[0]+'" cy="'+U[1]+'" r="'+(R+60)+'" fill="url(#tug)"/>';
  /* tumor cell: membrane (double line), cytoplasm contours, organelles, nucleus */
  g+='<path class="um sD" d="'+gsArc(R,Math.PI*1.23,Math.PI*0.77)+'"/><path class="um2 sD" d="'+gsArc(R-8,Math.PI*1.23,Math.PI*0.77)+'"/>';
  [R-46,R-92].forEach(function(r,k){g+='<path class="uc sD" d="'+gsArc(r,Math.PI*1.24,Math.PI*0.76)+'"/>'});
  g+='<g transform="translate(-110 0)"><ellipse class="un sD" cx="832" cy="262" rx="64" ry="138"/><ellipse class="un2 sD" cx="838" cy="266" rx="40" ry="104"/>';
  [[684,132,10],[662,214,7],[676,404,9],[650,340,6],[720,470,8],[740,70,7]].forEach(function(o){g+='<circle class="uo" cx="'+o[0]+'" cy="'+o[1]+'" r="'+o[2]+'"/>'});g+='</g>';
  /* Fas ligand trimers on stalks */
  GS.FL.forEach(function(q){var px=-q.u[1],py=q.u[0];
    g+='<path class="fl sD" d="M'+f(q.m[0])+' '+f(q.m[1])+'L'+f(q.t[0]+q.u[0]*-6)+' '+f(q.t[1]+q.u[1]*-6)+'"/>';
    g+='<g class="flt"><circle class="flc" cx="'+f(q.t[0]-q.u[0]*4+px*5)+'" cy="'+f(q.t[1]-q.u[1]*4+py*5)+'" r="5.4"/><circle class="flc" cx="'+f(q.t[0]-q.u[0]*4-px*5)+'" cy="'+f(q.t[1]-q.u[1]*4-py*5)+'" r="5.4"/><circle class="flc" cx="'+f(q.t[0]-q.u[0]*11)+'" cy="'+f(q.t[1]-q.u[1]*11)+'" r="5.4"/></g>'});
  g+='</g>';
  g+='<g id="scMove">';
  GS.FL.forEach(function(q,j){g+='<circle class="flglow" cx="'+f(q.t[0]-q.u[0]*6)+'" cy="'+f(q.t[1]-q.u[1]*6)+'" r="22" fill="url(#flg)"/>'});
  /* antibodies, one per FasL trimer, rotated to face it */
  GS.FL.forEach(function(q,j){var ang=Math.atan2(-q.u[1],-q.u[0])*180/Math.PI;
    g+='<g class="ab" id="ab'+j+'" data-a="'+f(ang)+'">'+gsY()+'</g>'});
  g+=gsTcell("tc0",GS.TR,"main")+gsTcell("tc1",58,"sm")+gsTcell("tc2",50,"sm");
  g+='</g>';
  /* labels, one set per step */
  g+='<g id="lb1"><text class="a" x="'+(mob?24:40)+'" y="'+(mob?40:38)+'">'+(mob?'FAS LIGAND':'FAS LIGAND (FasL) ON THE TUMOR')+'</text><path class="ldr" d="M'+(mob?280:350)+' '+(mob?30:34)+'L'+f(GS.FL[5].t[0]-14)+' '+f(GS.FL[5].t[1])+'"/>'+
     '<text class="a rs" x="'+(mob?24:40)+'" y="'+(mob?520:508)+'">'+(mob?'T CELL · APOPTOSIS':'ACTIVATED T CELL · APOPTOSIS')+'</text>'+(mob?'':'<text class="t" x="40" y="528">A SELF-DESTRUCT PROGRAM ON CONTACT</text>')+'</g>';
  g+='<g id="lb2"><text class="a" x="'+(mob?24:40)+'" y="'+(mob?40:40)+'">'+(mob?'M3T01':'M3T01 · ANTI-FasL ANTIBODY')+'</text>'+(mob?'':'<text class="t" x="40" y="60">FULLY HUMAN IgG4 · PICOMOLAR AFFINITY</text>')+
     '<path class="ldr" d="M'+(mob?110:150)+' '+(mob?54:70)+'L'+f(GS.FL[3].t[0]+GS.FL[3].u[0]*44)+' '+f(GS.FL[3].t[1]+GS.FL[3].u[1]*44-8)+'"/></g>';
  g+='<g id="lb3"><text class="a" x="'+(mob?24:40)+'" y="'+(mob?520:508)+'">'+(mob?'T CELLS GET IN':'T CELLS SURVIVE AND INFILTRATE')+'</text>'+(mob?'':'<text class="t" x="40" y="528">FasL BLOCKED BY M3T01</text>')+'</g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .uo, #scBase .flt",svg),mv:$("#scMove",svg),fg:$$(".flglow",svg),
    ab:$$(".ab",svg),t0:$("#tc0",svg),t1:$("#tc1",svg),t2:$("#tc2",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var bl0=$$(".bl",E.t0),lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function at(el,x,y,s){el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")"+(s&&s!==1?" scale("+s.toFixed(3)+")":""))}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=seg(p,0,.16),die=seg(p,.18,.3),s2=seg(p,.36,.54),s3=seg(p,.66,.88);
    /* main T cell: approaches (s1), dies (die), is whole again and waits (s2), moves into the tumor (s3) */
    var x=GS.TC[0]-60*(1-s1)+140*s1*(1-s2)+40*s2*(1-s3)+250*s3,y=GS.TC[1]+(1-s1)*10;
    at(E.t0,x,y,(1-.06*die*(1-s2))*(1-.14*s3));
    var dead=die*(1-s2);E.t0.classList.toggle("dying",dead>.5);
    op($(".tm1",E.t0),b*(1-.62*dead));op($(".tm2",E.t0),b*(1-.8*dead));
    $$(".nu,.nu2,.nu3",E.t0).forEach(function(el){op(el,b*(1-.75*dead))});
    bl0.forEach(function(el,i){op(el,b*dead*(.55+.45*Math.sin(i*1.7)))});
    op(E.t0,b);
    /* FasL glows while it is free, goes quiet once capped */
    E.fg.forEach(function(el,i){op(el,b*(.25+.75*Math.max(s1*(1-s2),0))*(.7+.3*Math.sin(p*30+i)))});
    /* antibodies drift in from the left and cap each trimer */
    E.ab.forEach(function(el,j){var q=GS.FL[j],k=Math.max(0,Math.min(1,(s2*1.25)-j*.035)),d=24+180*(1-k),
      ax=q.t[0]+q.u[0]*d+(1-k)*(-40),ay=q.t[1]+q.u[1]*d;
      el.setAttribute("transform","translate("+ax.toFixed(1)+" "+ay.toFixed(1)+") rotate("+(+el.getAttribute("data-a")).toFixed(1)+")");op(el,b*k)});
    /* more T cells follow in step 3 */
    at(E.t1,90+320*s3,104+12*s3);op(E.t1,b*seg(p,.62,.76));
    at(E.t2,80+330*s3,456-10*s3);op(E.t2,b*seg(p,.68,.82));
    op(E.l1,b*s1*(1-seg(p,.3,.36)));op(E.l2,b*s2*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.74,.84));
  };
}
