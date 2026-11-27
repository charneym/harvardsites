/* The story scene (BL/BY/DB): how Meduloc works (meduloc.com implant diagram), ONE fine-line schematic of a small long bone
   kept on screen for all four steps.
   Step 1 (Insert): the nitinol rod goes in through a sheath at the proximal end and runs down the canal across the fracture.
   Step 2 (Anchor): the expanding prongs deploy and anchor against the distal bone in two places (rotation resistance).
   Step 3 (Lock): the bone screw gives a proximal anchor; the titanium locking screw locks the rod to it (reduction, compression).
   Step 4 (Heal): the rod is cut to size and stays in; the fracture heals (the line fades). */
var SCW=760,SCH=520;
function mdScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">SMALL LONG BONE, SCHEMATIC</text>';
  /* the bone: two rounded ends and a waisted shaft; the canal inside; the fracture */
  g+='<g id="mdB"><path class="edge sB" d="M150 214C110 214 84 236 84 262C84 288 110 310 150 310C200 310 230 292 300 288H480C550 292 580 310 628 310C668 310 694 288 694 262C694 236 668 214 628 214C580 214 550 232 480 236H300C230 232 200 214 150 214Z"/>'+
     '<path class="can sB" d="M170 250C220 250 250 246 300 246H480C530 246 560 250 610 250M170 274C220 274 250 278 300 278H480C530 278 560 274 610 274"/></g>';
  g+='<g id="mdX"><path class="frac" d="M386 230L398 248L384 262L400 278L388 294"/></g>';
  /* step 1: the sheath at the proximal (right) end and the rod */
  g+='<g id="mdS"><path class="sheath sS" d="M720 258H760M720 266H760"/></g>';
  g+='<g id="mdR"><path class="rod sR" id="mdRo" d="M744 262H690"/><path class="rod sR" d="M690 262H190"/></g>';
  /* step 2: the prongs */
  g+='<g id="mdP"><path class="rod sP" d="M190 262C172 262 160 254 150 238"/><path class="rod sP" d="M190 262C172 262 160 270 150 286"/></g>';
  /* step 3: bone screw and locking screw at the proximal end */
  g+='<g id="mdL"><path class="scr sL" d="M640 248V276M648 246V278M656 248V276M664 250V274"/><path class="lock sL" d="M630 252H672V272H630Z"/></g>';
  /* step 4: the cut */
  g+='<g id="mdC"><path class="cut sC" d="M690 248V276"/></g>';
  /* labels (>= 8px clear of every stroke, DR3) */
  g+='<g id="mdL1"><text class="t s2" x="'+(mob?420:440)+'" y="'+(mob?190:196)+'">'+(mob?'NITINOL ROD':'NITINOL ROD · THROUGH A SHEATH')+'</text></g>';
  g+='<g id="mdL2"><text class="t s2" x="84" y="'+(mob?350:340)+'">'+(mob?'PRONGS · 2 POINTS':'PRONGS · ANCHORED IN TWO PLACES')+'</text></g>';
  g+='<g id="mdL3"><text class="t s2" x="'+(mob?440:470)+'" y="'+(mob?350:340)+'">'+(mob?'LOCKING SCREW':'TITANIUM LOCKING SCREW')+'</text></g>';
  g+='<g id="mdL4"><text class="t s2" x="'+(mob?440:470)+'" y="'+(mob?190:196)+'">'+(mob?'CUT TO SIZE':'CUT TO SIZE · STAYS IN')+'</text></g>';
  g+='<g id="mdL0"><text class="t" x="352" y="'+(mob?350:340)+'">FRACTURE</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · INSERT</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · ANCHOR</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · LOCK</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · HEAL</text></g>';
  return g+'</svg>';
}
function scene(){return mdScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={B:$("#mdB",svg),bE:dl(".sB"),X:$("#mdX",svg),S:$("#mdS",svg),sE:dl(".sS"),R:$("#mdR",svg),rE:dl(".sR"),P:$("#mdP",svg),pE:dl(".sP"),
    L:$("#mdL",svg),lE:dl(".sL"),C:$("#mdC",svg),Ro:$("#mdRo",svg),cE:dl(".sC"),
    T:[$("#mdL1",svg),$("#mdL2",svg),$("#mdL3",svg),$("#mdL4",svg)],T0:$("#mdL0",svg),l:[$("#lb1",svg),$("#lb2",svg),$("#lb3",svg),$("#lb4",svg)],t0:svg.querySelector("text.t")};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.t0,b);op(E.B,b);draw(E.bE,b*seg(p,0,.08));
    op(E.X,b*seg(p,.04,.1)*(1-.8*seg(p,.84,.96)));op(E.T0,b*seg(p,.06,.12)*(1-seg(p,.22,.25)));
    op(E.S,b*(1-seg(p,.78,.84)));draw(E.sE,b*seg(p,.08,.12));
    op(E.R,b);draw(E.rE,b*seg(p,.1,.22));op(E.Ro,b*(1-seg(p,.84,.92)));
    op(E.P,b);draw(E.pE,b*seg(p,.3,.44));
    op(E.L,b);draw(E.lE,b*seg(p,.54,.68));
    op(E.C,b*(1-seg(p,.93,.99)));draw(E.cE,b*seg(p,.78,.84));
    for(var i=0;i<4;i++){var s0=i*.25;op(E.T[i],b*seg(p,s0+.05,s0+.11)*(i<3?(1-seg(p,s0+.22,s0+.25)):1));op(E.l[i],b*seg(p,s0+(i?.02:0),s0+.07)*(i<3?(1-seg(p,s0+.22,s0+.25)):1))}
  };
}
