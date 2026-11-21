/* the story scene (BL/BY/DB): how SIGHT-AI works, drawn in fine engraved line. ONE eye stays at the centre-left for all three steps.
   Step 1 capture: a narrow slit of light sweeps across the cornea and lens while an Android handset on the compact slit lamp frames it.
   Step 2 analyse: the image is checked for quality (focus brackets, a tick) and an area is flagged for review.
   Step 3 review: the image leaves the handset compressed and encrypted, reaches the cloud for real-time analysis, and arrives on a
   clinician's screen. Source: UKRI Gateway to Research, project 10150077 (SIGHT-AI). Schematic; not a real patient image or result. */
var EY={c:[290,290],R:170,ir:92,pu:36},PHX=671;
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,C=EY.c;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="bglow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#e85d26" stop-opacity=".16"/><stop offset="1" stop-color="#e85d26" stop-opacity="0"/></radialGradient>'+
     '<linearGradient id="beam" x1="0" x2="1"><stop offset="0" stop-color="#f2a274" stop-opacity="0"/><stop offset=".5" stop-color="#ffe2cc" stop-opacity=".95"/><stop offset="1" stop-color="#f2a274" stop-opacity="0"/></linearGradient>'+
     '<clipPath id="eyeclip"><path d="M'+(C[0]-EY.R)+' '+C[1]+'C'+(C[0]-90)+' '+(C[1]-128)+' '+(C[0]+90)+' '+(C[1]-128)+' '+(C[0]+EY.R)+' '+C[1]+'C'+(C[0]+90)+' '+(C[1]+128)+' '+(C[0]-90)+' '+(C[1]+128)+' '+(C[0]-EY.R)+' '+C[1]+'Z"/></clipPath></defs>';
  /* the eye: lids, lashes, iris with engraved radial fibres, pupil, a catch light */
  g+='<g id="scBase"><circle cx="'+C[0]+'" cy="'+C[1]+'" r="230" fill="url(#bglow)" class="pg"/>';
  g+='<path class="lid sD" d="M'+(C[0]-EY.R)+' '+C[1]+'C'+(C[0]-90)+' '+(C[1]-128)+' '+(C[0]+90)+' '+(C[1]-128)+' '+(C[0]+EY.R)+' '+C[1]+'"/><path class="lid sD" d="M'+(C[0]-EY.R)+' '+C[1]+'C'+(C[0]-90)+' '+(C[1]+128)+' '+(C[0]+90)+' '+(C[1]+128)+' '+(C[0]+EY.R)+' '+C[1]+'"/>';
  g+='<path class="crease sD" d="M'+(C[0]-150)+' '+(C[1]-40)+'C'+(C[0]-80)+' '+(C[1]-150)+' '+(C[0]+80)+' '+(C[1]-150)+' '+(C[0]+150)+' '+(C[1]-40)+'"/>';
  for(i=0;i<9;i++){var u=.18+i*.08,lx=C[0]-EY.R+u*2*EY.R,ly=C[1]-96*Math.sin(Math.PI*u)-((u-.5)*(u-.5))*20;g+='<path class="lash sD" d="M'+f(lx)+' '+f(ly)+'l'+f((u-.5)*22)+' -16"/>'}
  g+='<g clip-path="url(#eyeclip)"><circle class="iris sD" cx="'+C[0]+'" cy="'+C[1]+'" r="'+EY.ir+'"/><circle class="iris2 sD" cx="'+C[0]+'" cy="'+C[1]+'" r="'+(EY.ir-14)+'"/>';
  for(i=0;i<48;i++){var a=i*7.5*Math.PI/180,r0=EY.pu+6+(i%3)*3,r1=EY.ir-4-(i%4)*5;g+='<path class="fib sD" d="M'+f(C[0]+r0*Math.cos(a))+' '+f(C[1]+r0*Math.sin(a))+'L'+f(C[0]+r1*Math.cos(a+.05))+' '+f(C[1]+r1*Math.sin(a+.05))+'"/>'}
  g+='<circle class="pupil" cx="'+C[0]+'" cy="'+C[1]+'" r="'+EY.pu+'"/><circle class="catch" cx="'+(C[0]-14)+'" cy="'+(C[1]-14)+'" r="6"/>';
  /* the slit beam (step 1) lives inside the eye */
  g+='<g id="slit"><rect class="bm" x="-9" y="'+(C[1]-150)+'" width="18" height="300" fill="url(#beam)"/><path class="bmc" d="M0 '+(C[1]-110)+'C10 '+(C[1]-40)+' 10 '+(C[1]+40)+' 0 '+(C[1]+110)+'"/></g></g>';
  g+='<text class="t" x="'+C[0]+'" y="'+(C[1]+EY.R+18)+'" text-anchor="middle">'+(mob?'THE EYE':'ANTERIOR EYE, IN SLIT-LAMP VIEW')+'</text></g>';

  /* step 1: the handset on the compact slit lamp, framing the eye */
  var PH=[596,160,150,290];
  g+='<g id="cp"><rect class="ph" x="'+PH[0]+'" y="'+PH[1]+'" width="'+PH[2]+'" height="'+PH[3]+'"/><rect class="ph2" x="'+(PH[0]+10)+'" y="'+(PH[1]+22)+'" width="'+(PH[2]-20)+'" height="'+(PH[3]-50)+'"/>'+
     '<path class="ph2" d="M'+(PH[0]+60)+' '+(PH[1]+PH[3]-14)+'h30"/>';
  var vc=[PH[0]+PH[2]/2,PH[1]+22+(PH[3]-50)/2];
  g+='<path class="mini" d="M'+(vc[0]-56)+' '+vc[1]+'C'+(vc[0]-30)+' '+(vc[1]-42)+' '+(vc[0]+30)+' '+(vc[1]-42)+' '+(vc[0]+56)+' '+vc[1]+'C'+(vc[0]+30)+' '+(vc[1]+42)+' '+(vc[0]-30)+' '+(vc[1]+42)+' '+(vc[0]-56)+' '+vc[1]+'Z"/><circle class="mini" cx="'+vc[0]+'" cy="'+vc[1]+'" r="30"/><circle class="pupil" cx="'+vc[0]+'" cy="'+vc[1]+'" r="12"/><rect class="mbm" id="mbm" x="'+(vc[0]-3)+'" y="'+(vc[1]-44)+'" width="6" height="88"/>';
  /* the lamp body under the handset: column, arm and base in line */
  g+='<path class="lmp" d="M'+(PH[0]+PH[2]/2)+' '+(PH[1]+PH[3])+'V'+(PH[1]+PH[3]+46)+'M'+(PH[0]+30)+' '+(PH[1]+PH[3]+46)+'H'+(PH[0]+PH[2]-30)+'M'+(PH[0]+42)+' '+(PH[1]+PH[3]+46)+'V'+(PH[1]+PH[3]+70)+'H'+(PH[0]+PH[2]-42)+'V'+(PH[1]+PH[3]+46)+'"/>';
  g+='<path class="ldr" d="M'+(C[0]+EY.R+14)+' '+C[1]+'H'+(PH[0]-16)+'"/><text class="a" x="'+(PH[0]+PH[2]/2)+'" y="'+(PH[1]+PH[3]+98)+'" text-anchor="middle">'+(mob?'ANDROID':'3D-PRINTED · ANDROID')+'</text></g>';

  /* step 2: quality check and a flagged area */
  g+='<g id="qa">';
  var B=[C[0]-116,C[1]-100,232,200],q=22;
  [[B[0],B[1],1,1],[B[0]+B[2],B[1],-1,1],[B[0],B[1]+B[3],1,-1],[B[0]+B[2],B[1]+B[3],-1,-1]].forEach(function(k){g+='<path class="brk" d="M'+(k[0]+k[2]*q)+' '+k[1]+'H'+k[0]+'V'+(k[1]+k[3]*q)+'"/>'});
  g+='<circle class="flag" id="flg" cx="'+(C[0]+34)+'" cy="'+(C[1]+30)+'" r="26"/><path class="ldr" d="M'+(C[0]+56)+' '+(C[1]+46)+'L'+(C[0]+118)+' '+(C[1]+150)+'H'+(C[0]+200)+'"/>'+
     '<text class="a" x="'+(C[0]+70)+'" y="'+(C[1]+156)+'">'+(mob?'FLAGGED':'FLAGGED FOR REVIEW')+'</text>';
  g+='<path class="ok" d="M'+(B[0]+B[2]+14)+' '+(B[1]+8)+'l9 9 16-20"/><text class="a" x="'+(B[0]+B[2]+50)+'" y="'+(B[1]+16)+'">'+(mob?'SHARP':'QUALITY OK')+'</text></g>';

  /* step 3: compressed, encrypted, to the cloud, to the clinician */
  g+='<g id="tx">';
  var P0=[PH[0]+PH[2]/2,PH[1]],CL=[470,60],SC=[110,58];
  g+='<path class="cld" d="M'+(CL[0]-52)+' '+(CL[1]+22)+'a22 22 0 0 1 8-40a30 30 0 0 1 56-6a24 24 0 0 1 40 22a20 20 0 0 1-6 24Z"/>';
  g+='<path class="lnk" id="l1" d="M'+P0[0]+' '+(P0[1]-8)+'C'+P0[0]+' '+(CL[1]+10)+' '+(CL[0]+120)+' '+(CL[1]+2)+' '+(CL[0]+58)+' '+(CL[1]+2)+'"/>';
  g+='<path class="lnk" id="l2" d="M'+(CL[0]-60)+' '+(CL[1]+2)+'C'+(CL[0]-140)+' '+(CL[1]+2)+' '+(SC[0]+140)+' '+SC[1]+' '+(SC[0]+80)+' '+SC[1]+'"/>';
  g+='<circle class="pk" id="pk1" r="5"/><circle class="pk" id="pk2" r="5"/>';
  g+='<rect class="scr" x="'+(SC[0]-70)+'" y="'+(SC[1]-40)+'" width="140" height="80"/><path class="scr" d="M'+(SC[0]-24)+' '+(SC[1]+52)+'H'+(SC[0]+24)+'M'+SC[0]+' '+(SC[1]+40)+'V'+(SC[1]+52)+'"/>'+
     '<path class="mini" d="M'+(SC[0]-34)+' '+SC[1]+'C'+(SC[0]-16)+' '+(SC[1]-24)+' '+(SC[0]+16)+' '+(SC[1]-24)+' '+(SC[0]+34)+' '+SC[1]+'C'+(SC[0]+16)+' '+(SC[1]+24)+' '+(SC[0]-16)+' '+(SC[1]+24)+' '+(SC[0]-34)+' '+SC[1]+'Z"/><circle class="mini" cx="'+SC[0]+'" cy="'+SC[1]+'" r="15"/>';
  g+='<text class="a" x="'+CL[0]+'" y="'+(CL[1]+50)+'" text-anchor="middle">'+(mob?'CLOUD':'ENCRYPTED · CLOUD AI')+'</text>';
  g+='<text class="a" x="'+SC[0]+'" y="'+(SC[1]+78)+'" text-anchor="middle">'+(mob?'CLINICIAN':'CLINICIAN REVIEW')+'</text></g>';
  g+='</svg>';
  return g;
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .pg, #scBase .pupil, #scBase .catch",svg),slit:$("#slit",svg),cp:$("#cp",svg),mbm:$("#mbm",svg),
    qa:$("#qa",svg),brk:dl("#qa .brk"),ok:dl("#qa .ok"),flg:$("#flg",svg),tx:$("#tx",svg),l1:$("#l1",svg),l2:$("#l2",svg),ln:dl("#tx .lnk"),pk1:$("#pk1",svg),pk2:$("#pk2",svg)};
  var lastB=-1,C=EY.c,L1=E.l1.getTotalLength(),L2=E.l2.getTotalLength();
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* step 1: the slit sweeps across the eye; the handset frames it */
    var sw=seg(p,.02,.3),sx=C[0]-80+160*sw;E.slit.setAttribute("transform","translate("+sx.toFixed(1)+" 0)");op(E.slit,b*(1-.75*seg(p,.34,.42)));
    var o1=seg(b,.5,1)*(1-.6*seg(p,.62,.7));op(E.cp,o1);E.mbm.setAttribute("x",(PHX-29+52*sw).toFixed(1));
    /* step 2 */
    op(E.qa,b*seg(p,.34,.4)*(1-seg(p,.66,.72)));draw(E.brk,seg(p,.36,.46));draw(E.ok,seg(p,.46,.54));
    E.flg.setAttribute("r",(26*(1+.12*Math.sin(p*60))*Math.max(seg(p,.5,.58),.001)).toFixed(1));
    /* step 3 */
    op(E.tx,b*seg(p,.68,.74));E.ln.forEach(function(a,k){a[0].style.strokeDashoffset=(a[1]*(1-seg(p,.7+k*.06,.84+k*.06))).toFixed(1)});
    var u1=seg(p,.74,.9),u2=seg(p,.8,.96),q1=E.l1.getPointAtLength(L1*u1),q2=E.l2.getPointAtLength(L2*u2);
    E.pk1.setAttribute("cx",q1.x.toFixed(1));E.pk1.setAttribute("cy",q1.y.toFixed(1));op(E.pk1,u1>0&&u1<1?1:0);
    E.pk2.setAttribute("cx",q2.x.toFixed(1));E.pk2.setAttribute("cy",q2.y.toFixed(1));op(E.pk2,u2>0&&u2<1?1:0);
  };
}
