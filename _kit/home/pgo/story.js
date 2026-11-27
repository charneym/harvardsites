/* The story scene (BL/BY/DB): how PG&O makes a cube beamsplitter (pgo.com > Precision Optics: "made by cementing two
   precision right angle prisms together and covering their hypotenuse surface with an interference coating ... nearly 50%
   transmitted"; Thin Film Coatings; press: advanced coating monitoring system, 1000:1 extinction ratio), ONE schematic:
   Step 1 (Glass): a blank from the in-house glass stock.
   Step 2 (Polish): two matched right-angle prisms.
   Step 3 (Coat): the interference coating builds up on one hypotenuse.
   Step 4 (Split): the prisms are cemented into a cube; a beam divides into transmitted and reflected halves. */
var SCW=760,SCH=520;
function bsScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">CUBE BEAMSPLITTER, SCHEMATIC</text>';
  /* step 1: the glass blank */
  g+='<g id="bsG"><path class="edge sBl" d="M240 130H520V390H240Z"/></g>';
  /* step 2: two right-angle prisms (they start apart, step 4 brings them together) */
  g+='<g id="bsA"><path class="edge sPa" d="M280 160V360H480Z"/></g>';
  g+='<g id="bsB"><path class="edge sPb" d="M280 160H480V360Z"/></g>';
  /* step 3: the coating stack on the hypotenuse of prism A */
  g+='<g id="bsC">';for(i=0;i<5;i++)g+='<path class="lay sLy" style="stroke:'+(i%2?'#8cc6ff':'#ff6676')+'" d="M'+(282+i*2.2)+' '+(356-i*2.2)+'L'+(476+i*2.2)+' '+(162-i*2.2)+'"/>';g+='</g>';
  /* step 4: the beam, transmitted and reflected */
  g+='<g id="bsL"><path class="beam sIn" d="M60 260H380"/><path class="beam sTr" d="M380 260H700"/><path class="beam2 sRe" d="M380 260V70"/></g>';
  /* labels, per step, >= 8px clear of every stroke (DR3) */
  g+='<g id="bsL1"><text class="t s2" x="240" y="'+(mob?116:118)+'">'+(mob?'GLASS BLANK':'GLASS BLANK · BK7 OR FUSED SILICA')+'</text></g>';
  g+='<g id="bsL2"><text class="t s2" x="240" y="'+(mob?420:416)+'">'+(mob?'TWO PRISMS':'TWO RIGHT-ANGLE PRISMS')+'</text></g>';
  g+='<g id="bsL3"><text class="t s2" x="524" y="'+(mob?168:170)+'">'+(mob?'COATING':'INTERFERENCE COATING')+'</text></g>';
  g+='<g id="bsL4"><text class="t s2" x="520" y="'+(mob?244:248)+'">'+(mob?'~50% OUT':'~50% TRANSMITTED')+'</text><text class="t s2" x="396" y="'+(mob?84:86)+'">'+(mob?'~50% UP':'~50% REFLECTED')+'</text><text class="t" x="60" y="'+(mob?244:248)+'">IN</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · GLASS</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · POLISH</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · COAT</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · SPLIT</text></g>';
  return g+'</svg>';
}
function scene(){return bsScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={G:$("#bsG",svg),bl:dl(".sBl"),A:$("#bsA",svg),pa:dl(".sPa"),B:$("#bsB",svg),pb:dl(".sPb"),C:$("#bsC",svg),ly:dl(".sLy"),
    L:$("#bsL",svg),bin:dl(".sIn"),tr:dl(".sTr"),re:dl(".sRe"),
    L1:$("#bsL1",svg),L2:$("#bsL2",svg),L3:$("#bsL3",svg),L4:$("#bsL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),t0:svg.querySelector("text.t")};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function stag(list,v){var n=list.length;list.forEach(function(a,i){var w=Math.max(0,Math.min(1,v*n-i));a[0].style.strokeDashoffset=(a[1]*(1-w)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.t0,b);
    /* step 1: the blank draws, then gives way to the prisms */
    op(E.G,b*(1-seg(p,.3,.4)));draw(E.bl,b*seg(p,0,.12));
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    /* step 2: the two prisms, apart */
    var gap=24*(1-seg(p,.78,.88));
    if(E.A)E.A.setAttribute("transform","translate("+(-gap).toFixed(1)+" "+gap.toFixed(1)+")");
    if(E.B)E.B.setAttribute("transform","translate("+gap.toFixed(1)+" "+(-gap).toFixed(1)+")");
    if(E.C)E.C.setAttribute("transform","translate("+(-gap).toFixed(1)+" "+gap.toFixed(1)+")");
    op(E.A,b);op(E.B,b);draw(E.pa,b*seg(p,.26,.36));draw(E.pb,b*seg(p,.3,.4));
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3: the coating layers */
    op(E.C,b);stag(E.ly,b*seg(p,.52,.7));
    op(E.L3,b*seg(p,.55,.61)*(1-seg(p,.72,.75)));
    /* step 4: cemented; the beam enters and splits */
    op(E.L,b);draw(E.bin,b*seg(p,.86,.9));draw(E.tr,b*seg(p,.9,.96));draw(E.re,b*seg(p,.9,.96));
    op(E.L4,b*seg(p,.9,.95));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}
