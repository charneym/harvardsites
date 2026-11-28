/* The story scene (BL/BY/DB): how ABS-2103 is meant to work (abstherapeutics.com > Science), ONE fine-line schematic kept
   on screen for all four steps: a T cell at left with its membrane IL-7 receptors, the blood at right.
   Step 1 (Genotype): the CC variant at rs6897932 shifts IL7R splicing toward the soluble receptor.
   Step 2 (Excess): CC carriers have about three times more sIL7R in the blood, prolonging IL-7 signalling.
   Step 3 (Bind): ABS-2103 binds only the soluble receptor; the receptor on the T cell is spared.
   Step 4 (Respond): sIL7R back toward healthy levels, so standard treatment has the chance to work. */
var SCW=760,SCH=520;
var AB_S=[[372,214],[418,262],[452,206],[496,250],[540,212],[580,262],[618,220],[664,256],[400,320],[446,350],[492,314],[538,348],[584,318],[630,352],[676,312],[700,214],[470,402],[560,396],[650,404],[420,184]];
var AB_KEEP={0:1,5:1,9:1,13:1};
function abY(x,y,s){return 'M'+x+' '+(y+10*s)+'V'+y+'M'+x+' '+y+'L'+(x-8*s)+' '+(y-9*s)+'M'+x+' '+y+'L'+(x+8*s)+' '+(y-9*s)}
function absScene(o){
  var g='',mob=o.mob,i,a,cx=170,cy=272,r=78;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">T CELL AND BLOOD, SCHEMATIC</text>';
  /* the T cell, its nucleus, its membrane receptors */
  var rec='';for(i=0;i<10;i++){a=-1.25+i*0.28;var x0=cx+r*Math.cos(a),y0=cy+r*Math.sin(a),x1=cx+(r+16)*Math.cos(a),y1=cy+(r+16)*Math.sin(a);rec+='M'+x0.toFixed(1)+' '+y0.toFixed(1)+'L'+x1.toFixed(1)+' '+y1.toFixed(1)}
  g+='<g id="abT"><circle class="edge sT" cx="'+cx+'" cy="'+cy+'" r="'+r+'"/><circle class="nuc sT" cx="'+(cx-8)+'" cy="'+(cy+4)+'" r="34"/><path class="rec sT" d="'+rec+'"/></g>';
  /* step 1: the gene, two splice products */
  g+='<g id="abG"><path class="gene sG" d="M128 276H200"/><path class="gene sG" d="M140 270V282M156 270V282M172 270V282M188 270V282"/></g>';
  /* the blood: a field to the right */
  g+='<g id="abB"><path class="ves sB" d="M330 150H730M330 430H730"/></g>';
  /* step 2: soluble receptors in the blood */
  g+='<g id="abS">';AB_S.forEach(function(s,i){g+='<rect class="sol" x="'+(s[0]-6)+'" y="'+(s[1]-4)+'" width="12" height="8" rx="4"/>'});g+='</g>';
  /* step 3: antibodies bound to the soluble receptors */
  g+='<g id="abA">';AB_S.forEach(function(s,i){if(!AB_KEEP[i])g+='<path class="ab" d="'+abY(s[0],s[1]-14,1)+'"/>'});g+='</g>';
  /* labels (>= 8px clear of every stroke, DR3) */
  g+='<g id="abL1"><text class="t s2" x="'+(mob?40:60)+'" y="'+(mob?150:156)+'">'+(mob?'CC VARIANT · IL7R':'CC VARIANT · rs6897932')+'</text></g>';
  g+='<g id="abL2"><text class="t s2" x="'+(mob?340:340)+'" y="'+(mob?130:134)+'">'+(mob?'3× MORE sIL7R':'ABOUT 3× MORE sIL7R IN BLOOD')+'</text></g>';
  g+='<g id="abL3"><text class="t s2" x="'+(mob?340:340)+'" y="'+(mob?130:134)+'">'+(mob?'ABS-2103 BINDS sIL7R':'ABS-2103 BINDS ONLY sIL7R')+'</text></g>';
  g+='<g id="abL4"><text class="t s2" x="'+(mob?340:340)+'" y="'+(mob?130:134)+'">'+(mob?'TOWARD HEALTHY LEVELS':'sIL7R TOWARD HEALTHY LEVELS')+'</text></g>';
  g+='<g id="abL0"><text class="t" x="'+(mob?80:104)+'" y="'+(mob?400:392)+'">'+(mob?'T CELL':'T CELL · RECEPTOR SPARED')+'</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · GENOTYPE</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · EXCESS</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · BIND</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · RESPOND</text></g>';
  return g+'</svg>';
}
function scene(){return absScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={T:$("#abT",svg),tE:dl(".sT"),G:$("#abG",svg),gE:dl(".sG"),B:$("#abB",svg),bE:dl(".sB"),S:$$("#abS rect",svg),A:$$("#abA path",svg),
    L:[$("#abL1",svg),$("#abL2",svg),$("#abL3",svg),$("#abL4",svg)],L0:$("#abL0",svg),l:[$("#lb1",svg),$("#lb2",svg),$("#lb3",svg),$("#lb4",svg)],t0:svg.querySelector("text.t")};
  var keep=AB_S.map(function(s,i){return !!AB_KEEP[i]});
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.t0,b);op(E.T,b);draw(E.tE,b*seg(p,0,.1));op(E.B,b);draw(E.bE,b*seg(p,.02,.12));
    op(E.G,b*(1-seg(p,.3,.36)));draw(E.gE,b*seg(p,.06,.16));
    E.S.forEach(function(s,i){op(s,b*seg(p,.28+i*.008,.33+i*.008)*(keep[i]?1:(1-seg(p,.8+i*.004,.86+i*.004))))});
    var ai=0;E.A.forEach(function(a){op(a,b*seg(p,.52+ai*.01,.57+ai*.01)*(1-seg(p,.8+ai*.004,.86+ai*.004)));ai++});
    op(E.L0,b*seg(p,.56,.62));
    for(var i=0;i<4;i++){var s0=i*.25;op(E.L[i],b*seg(p,s0+.05,s0+.11)*(i<3?(1-seg(p,s0+.22,s0+.25)):1));op(E.l[i],b*seg(p,s0+(i?.02:0),s0+.07)*(i<3?(1-seg(p,s0+.22,s0+.25)):1))}
  };
}
