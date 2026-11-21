/* The story scene (BL/BY/DB): the vicious cycle that MTI Biotech's 2-HOBA is designed to break in pulmonary hypertension
   (NHLBI STTR R42HL158393 abstract; West et al., J Transl Med 2026), as ONE continuous scene: a mitochondrion drawn once and
   kept on screen, with six SIRT3 enzymes in its matrix between the cristae.
   Step 1: reactive oxygen species flare at the membranes and oxidise lipids into reactive dicarbonyls.
   Step 2: the reactive lipids drift onto SIRT3 and form adducts; the enzymes go dark, metabolism falters and more reactive
   oxygen flares: the cycle feeds itself.
   Step 3: 2-HOBA molecules arrive, each catching a reactive lipid before it can bind; the lipids are carried off as inert
   pairs, SIRT3 lights up again and the flares subside. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
var MX=380,MY=228,MRX=310,MRY=136;
var ENZ=[[198,212],[284,250],[368,206],[452,252],[536,210],[612,240]];
var ROSP=[[150,120],[330,96],[520,104],[640,170],[230,356],[430,364],[600,330]];
/* each lipid: born at a flare, ends next to its enzyme */
var LIP=ENZ.map(function(e,i){var r=ROSP[i%ROSP.length];return {s:[r[0]+(i%2?14:-10),r[1]+(r[1]<200?26:-26)],e:[e[0]-2,e[1]-28]}});
/* each 2-HOBA enters from the left edge of the frame and meets its lipid */
var HOB=ENZ.map(function(e,i){return {s:[18,130+i*38],e:[e[0]+30,e[1]-34]}});
function lipG(){return '<path class="lp" d="M-17 4L-9 -4L-1 4L7 -4L15 4"/><circle class="lo" cx="-21" cy="6" r="3.4"/><circle class="lo" cx="19" cy="6" r="3.4"/>'}
function hobG(){var p=[],k;for(k=0;k<6;k++){var a=Math.PI/3*k+Math.PI/6;p.push((11*Math.cos(a)).toFixed(1)+' '+(11*Math.sin(a)).toFixed(1))}
  return '<path class="hx" d="M'+p.join('L')+'Z"/><path class="hb" d="M0 -11V-19M9.5 5.5L16 10L16 18"/><circle class="hd" cx="0" cy="-21" r="2.6"/><circle class="hd" cx="16" cy="20" r="2.6"/>'}
function enzG(){return '<circle cx="-6" cy="2" r="9"/><circle cx="6" cy="-3" r="8"/><circle cx="5" cy="8" r="6.5"/>'}
function crist(){
  /* cristae: folds of the inner membrane reaching into the matrix, alternately from the top and the bottom */
  var d='',xs=[156,240,326,410,494,578,650],i;
  for(i=0;i<xs.length;i++){var x=xs[i],top=i%2===0,hh=MRY*Math.sqrt(Math.max(0,1-Math.pow((x-MX)/(MRX-18),2)))-16;
    if(hh<20)continue;var y0=top?MY-hh:MY+hh,y1=top?MY+hh*.18:MY-hh*.18;
    d+='M'+(x-9)+' '+y0.toFixed(1)+'C'+(x-9)+' '+((y0+y1)/2).toFixed(1)+' '+(x-12)+' '+y1.toFixed(1)+' '+x+' '+y1.toFixed(1)+'C'+(x+12)+' '+y1.toFixed(1)+' '+(x+9)+' '+((y0+y1)/2).toFixed(1)+' '+(x+9)+' '+y0.toFixed(1)}
  return d}
function mitoScene(o){
  var f=function(n){return (+n).toFixed(1)},g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<ellipse class="mo sD" cx="'+MX+'" cy="'+MY+'" rx="'+MRX+'" ry="'+MRY+'"/>';
  g+='<ellipse class="mi sD" cx="'+MX+'" cy="'+MY+'" rx="'+(MRX-14)+'" ry="'+(MRY-14)+'"/>';
  g+='<path class="cr sD" d="'+crist()+'"/>';
  g+='<text class="t" x="70" y="62">MITOCHONDRION · PULMONARY VASCULAR CELL</text>';
  g+='</g>';
  /* SIRT3: an active (filled) and an inactivated (hollow) state, cross-faded per enzyme */
  g+='<g id="scEnz">';
  ENZ.forEach(function(e,k){g+='<g class="ez" transform="translate('+e[0]+' '+e[1]+')"><g class="on">'+enzG()+'</g><g class="off">'+enzG()+'</g></g>'});
  g+='<text class="t a2" x="'+(ENZ[0][0]-18)+'" y="'+(ENZ[0][1]+34)+'">SIRT3</text>';
  g+='<text class="t a2" x="'+(ENZ[3][0]-18)+'" y="'+(ENZ[3][1]+34)+'">SIRT3</text>';
  g+='</g>';
  g+='<g id="scRos">';
  ROSP.forEach(function(r,k){g+='<path class="ro" data-k="'+k+'" transform="translate('+r[0]+' '+r[1]+')" d="M0 -10L2.6 -2.6L10 0L2.6 2.6L0 10L-2.6 2.6L-10 0L-2.6 -2.6Z"/>'});
  g+='</g>';
  g+='<g id="scLip">';LIP.forEach(function(l,k){g+='<g class="li" transform="translate('+f(l.s[0])+' '+f(l.s[1])+')">'+lipG()+'</g>'});g+='</g>';
  g+='<g id="scHob">';HOB.forEach(function(h,k){g+='<g class="ho" transform="translate('+f(h.s[0])+' '+f(h.s[1])+')">'+hobG()+'</g>'});g+='</g>';
  /* step labels, in the clear band under the organelle */
  g+='<g id="lb1"><text class="a" x="70" y="430">REACTIVE OXYGEN → REACTIVE LIPIDS</text></g>';
  g+='<g id="lb2"><text class="a" x="70" y="430">LIPID ADDUCTS SWITCH OFF SIRT3</text></g>';
  g+='<g id="lb3"><text class="a" x="70" y="430">2-HOBA CATCHES THE REACTIVE LIPIDS</text></g>';
  /* a small key */
  g+='<g id="scKey"><path class="ro" transform="translate(78 476) scale(.7)" d="M0 -10L2.6 -2.6L10 0L2.6 2.6L0 10L-2.6 2.6L-10 0L-2.6 -2.6Z"/><text class="t" x="94" y="480">REACTIVE OXYGEN</text>'+
     '<g class="li" transform="translate(286 476) scale(.75)">'+lipG()+'</g><text class="t" x="308" y="480">REACTIVE LIPID</text>'+
     '<g class="ho" transform="translate(484 474) scale(.62)">'+hobG()+'</g><text class="t" x="502" y="480">2-HOBA</text></g>';
  return g+'</svg>';
}
function scene(){return mitoScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scEnz text, #scKey",svg),
    ez:$$(".ez",svg).map(function(el){return {on:$(".on",el),off:$(".off",el)}}),
    ro:$$("#scRos .ro",svg),li:$$("#scLip .li",svg),ho:$$("#scHob .ho",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function mv(el,x,y,s){el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")"+(s&&s!==1?" scale("+s.toFixed(3)+")":""))}
  function lerp(a,b,t){return a+(b-a)*t}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* SIRT3: active at first, switched off one by one in step 2, back on in step 3 */
    E.ez.forEach(function(z,i){var off=seg(p,.4+i*.025,.5+i*.025)*(1-seg(p,.74+i*.02,.82+i*.02));op(z.on,b*(1-off));op(z.off,b*off)});
    /* reactive oxygen: flares in step 1, more of them in step 2, fading away in step 3 */
    E.ro.forEach(function(r,i){var on=seg(p,.06+i*.018,.14+i*.018),more=seg(p,.46,.58),sub=seg(p,.78,.9);
      var fl=.55+.45*Math.sin(p*60+i*1.7);var a=on*(i<4?1:more)*(1-sub)*fl;op(r,b*a)});
    /* reactive lipids: born at the flares (step 1), drift onto SIRT3 (step 2), carried off with 2-HOBA (step 3) */
    E.li.forEach(function(el,i){var L=LIP[i],H=HOB[i],born=seg(p,.12+i*.02,.2+i*.02),go=seg(p,.36+i*.025,.48+i*.025),cap=seg(p,.66+i*.02,.76+i*.02),off=seg(p,.8,.94);
      var x=lerp(L.s[0],L.e[0],go),y=lerp(L.s[1],L.e[1],go);
      /* when caught, the lipid joins its 2-HOBA and the pair drifts out of the matrix */
      var px=H.e[0]-28,py=H.e[1]+6;x=lerp(x,px,cap);y=lerp(y,py,cap);y-=off*34;
      mv(el,x,y,1);op(el,b*born*(1-off))});
    E.ho.forEach(function(el,i){var H=HOB[i],in1=seg(p,.58+i*.02,.7+i*.02),off=seg(p,.8,.94);
      var x=lerp(H.s[0],H.e[0],in1),y=lerp(H.s[1],H.e[1],in1)-off*34;mv(el,x,y,1);op(el,b*seg(p,.56+i*.02,.62+i*.02)*(1-off))});
    op(E.l1,b*seg(p,.14,.22)*(1-seg(p,.34,.4)));op(E.l2,b*seg(p,.44,.52)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.74,.82));
  };
}
