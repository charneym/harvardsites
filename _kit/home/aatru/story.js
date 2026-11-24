/* The story scene (DB/BL): npSIMS's own mechanism (aatru.com npSIMS and Product Value pages): the pre-assembled dressing
   self-seals with its silicone gasket; a patented easy activation starts the solid-state oxygen scavenger in the pump
   unit, which consumes the oxygen in the sealed space so the pressure falls (the Ideal Gas Law, no moving parts); the
   system then holds -80 mmHg +/-20 for up to 7 days while the super-absorbent pad locks in fluid.
   ONE fine-line drawing of the product (never a wound, DT) that fills the frame: the dressing upright at left (gasket ring,
   pad, port), the tubing, the pump unit with its activation tab at lower right, a pressure dial at upper right, seven day
   marks under the pump. Oxygen molecules (paired dots) sit in the sealed space.
   Frame 0 is complete: everything drawn, the molecules present, the dial at 0.
   Step 1 (seal): the gasket ring draws round in the npSIMS cyan.
   Step 2 (activate): the tab pulls out, the pump core lights, the molecules are scavenged one by one, the dial falls to -80.
   Step 3 (hold): the day marks fill 1 to 7, the pad takes a faint fill (fluid locked in), the dial holds in its band.
   Driven by scrubbed progress. No dash draws on non-scaling strokes (DR4; nssfix.js is inlined too). */
var GC={x:600,y:250,r:86};
var O2=(function(){var o=[],s=7;function r(){s=(s*16807)%2147483647;return s/2147483647}
  var n=0;while(o.length<16&&n<5000){n++;var x=104+r()*162,y=150+r()*290,a=r()*Math.PI;
    if(o.every(function(q){return Math.hypot(q[0]-x,q[1]-y)>34}))o.push([x,y,a])}return o})();
function gpt(v,rr){var t=Math.PI*(1-v/120);return [GC.x+Math.cos(t)*rr,GC.y-Math.sin(t)*rr]}
function storyScene(o){
  var g='',mob=o.mob,f=function(n){return n.toFixed(1)};
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'40 40 700 520':'30 40 720 512')+'" aria-hidden="true">';
  /* the dressing: outer film, gasket ring, absorbent pad, port */
  g+='<rect class="wl sD" x="70" y="60" width="230" height="410" rx="22"/>';
  g+='<rect class="gk" id="scG" x="86" y="76" width="198" height="378" rx="14"/>';
  g+='<rect class="pd" id="scF" x="132" y="160" width="106" height="250" rx="6"/>';
  g+='<rect class="wo sD" x="132" y="160" width="106" height="250" rx="6"/>';
  g+='<rect class="wl sD" x="164" y="92" width="42" height="40" rx="8"/><circle class="wl" cx="185" cy="112" r="6"/>';
  /* the tubing, from the port down to the pump */
  g+='<path class="wl sD" d="M191 108C360 96 450 230 470 380"/><path class="wo sD" d="M196 116C352 106 438 236 458 380"/>';
  /* the pump unit and its activation tab */
  g+='<g id="scK"><rect class="wl" x="392" y="398" width="52" height="44" rx="2"/><path class="wo" d="M410 406v28"/></g>';
  g+='<rect class="wl sD pu" x="430" y="380" width="270" height="80" rx="40"/>';
  g+='<rect class="core" id="scR" x="520" y="400" width="140" height="40" rx="20"/>';
  g+='<path class="wo sD" d="M470 384v72M486 384v72"/>';
  /* oxygen in the sealed space */
  g+='<g id="scO">';O2.forEach(function(q){var dx=Math.cos(q[2])*4.6,dy=Math.sin(q[2])*4.6;g+='<g class="o2" transform="translate('+f(q[0])+' '+f(q[1])+')"><g class="o2i"><circle cx="'+f(-dx)+'" cy="'+f(-dy)+'" r="4.4"/><circle cx="'+f(dx)+'" cy="'+f(dy)+'" r="4.4"/></g></g>'});g+='</g>';
  /* the pressure dial, 0 to -120 mmHg, the -60 to -100 band (-80 +/-20) in cyan */
  g+='<path class="wl sD" d="M'+(GC.x-GC.r)+' '+GC.y+'A'+GC.r+' '+GC.r+' 0 0 1 '+(GC.x+GC.r)+' '+GC.y+'"/>';
  var b0=gpt(60,GC.r),b1=gpt(100,GC.r);g+='<path class="gb" id="scB" d="M'+f(b0[0])+' '+f(b0[1])+'A'+GC.r+' '+GC.r+' 0 0 1 '+f(b1[0])+' '+f(b1[1])+'"/>';
  for(var v=0;v<=120;v+=20){var p1=gpt(v,GC.r-2),p2=gpt(v,GC.r-12);g+='<path class="wo" d="M'+f(p1[0])+' '+f(p1[1])+'L'+f(p2[0])+' '+f(p2[1])+'"/>'}
  g+='<path class="wo" d="M'+(GC.x-GC.r-14)+' '+GC.y+'H'+(GC.x+GC.r+14)+'"/>';
  g+='<g id="scN"><path class="nd" d="M'+GC.x+' '+GC.y+'H'+(GC.x-68)+'"/><circle class="ndc" cx="'+GC.x+'" cy="'+GC.y+'" r="5"/></g>';
  g+='<text class="val" id="scV" x="'+GC.x+'" y="'+(GC.y+48)+'" text-anchor="middle">0 mmHg</text>';
  /* seven day marks under the pump */
  g+='<g id="scD">';for(var d=0;d<7;d++)g+='<rect class="dy" x="'+(436+d*38)+'" y="484" width="28" height="12"/>';g+='</g>';
  if(!mob)g+='<text class="t" x="436" y="522">DAY 1</text><text class="t" x="698" y="522" text-anchor="end">DAY 7</text>';
  var ly=mob?546:540,lx=mob?50:40;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'GASKET SEALS':'SILICONE GASKET SELF-SEALS')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'OXYGEN SCAVENGED':'OXYGEN SCAVENGED, PRESSURE FALLS')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'HELD FOR 7 DAYS':'−80 MMHG HELD FOR UP TO 7 DAYS')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),gk:dl("#scG"),band:$("#scB",svg),o2:$$("#scO .o2i",svg),tab:$("#scK",svg),core:$("#scR",svg),pad:$("#scF",svg),
    nd:$("#scN",svg),val:$("#scV",svg),dy:$$("#scD .dy",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,lastV="";
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.base.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-b)).toFixed(1)})}
    /* step 1: the gasket ring draws round */
    var gs=.25+.75*sm(seg(p,0,.24));E.gk.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-gs)).toFixed(1);op(a[0],b)});
    /* step 2: the tab pulls out, the core lights, oxygen is scavenged, the dial falls */
    var pull=sm(seg(p,.36,.44));if(E.tab){E.tab.setAttribute("transform","translate("+(-34*pull).toFixed(1)+" 0)");op(E.tab,b*(1-.75*pull))}
    var on=sm(seg(p,.4,.5));op(E.core,b*(.15+.85*on));
    var N=E.o2.length;E.o2.forEach(function(el,i){var k=sm(seg(p,.44+.2*i/N,.52+.2*i/N));op(el,b*(1-k));el.setAttribute("transform","scale("+(1-.6*k).toFixed(3)+")")});
    var pv=80*sm(seg(p,.44,.72)),hold=sm(seg(p,.74,.98));pv+=Math.sin(hold*Math.PI*3)*3*hold*(1-hold);
    if(E.nd)E.nd.setAttribute("transform","rotate("+(pv*1.5).toFixed(2)+" "+GC.x+" "+GC.y+")");
    var vt=(pv<.5?"0":"−"+Math.round(pv))+" mmHg";if(vt!==lastV&&E.val){lastV=vt;E.val.textContent=vt}op(E.val,b);op(E.nd,b);
    op(E.band,b*(.35+.65*sm(seg(p,.6,.72))));
    /* step 3: seven days, the pad takes up fluid */
    E.dy.forEach(function(el,i){el.classList.toggle("on",p>=.74+i*.033)});
    op(E.pad,b*.9*sm(seg(p,.74,.98)));
    op(E.l1,b*seg(p,.02,.1)*(1-seg(p,.28,.34)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.76,.84));
  };
}
