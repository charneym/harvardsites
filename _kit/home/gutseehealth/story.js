/* The story scene (BL/BY/DB): what targeted phage therapy does, drawn as ONE field of gut bacteria kept on screen for all
   three steps (gutseehealth.com: a "disrupted gut ecosystem (e.g. dysbiotic microbiome)"; "ADD missing and therapeutic
   bacteria / REMOVE harmful bacteria using targeted phages"; Innovate UK 10187674: phages "kill harmful bacteria but do
   not harm human cells or the body's healthy bacteria", the platform "predict[s] which phages will work against a
   specific bacterial infection"). Calm line drawing. Illustrative, not data.
   Step 1: healthy bacteria (open ovals) crowded by a harmful strain (rods, drawn in the accent).
   Step 2: a match line from the model; small phages dock on the harmful rods only.
   Step 3: the harmful rods are gone; healthy bacteria stay and therapeutic bacteria are added (filled ovals). */
var SCW=760,SCH=520;
function gsScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 40 760 452" aria-hidden="true">';
  g+='<text class="t" x="30" y="64">'+(mob?"GUT MICROBIOME":"GUT MICROBIOME, SCHEMATIC")+'</text>';
  /* the field: a soft frame for the gut lumen */
  g+='<path class="ws sD" d="M30 96H730M30 396H730"/>';
  /* healthy bacteria: open ovals */
  var Hh=[[90,150,20],[170,250,-30],[110,330,60],[260,170,10],[330,320,-50],[430,140,35],[520,260,-15],[600,180,70],[660,330,20],[400,360,-25],[220,120,-60]],hh='';
  Hh.forEach(function(b){hh+='<ellipse cx="'+b[0]+'" cy="'+b[1]+'" rx="22" ry="11" transform="rotate('+b[2]+' '+b[0]+' '+b[1]+')"/>'});
  g+='<g id="gsH" class="hb">'+hh+'</g>';
  /* the harmful strain: rods in the accent */
  var Hr=[[180,180,40],[300,240,-20],[240,330,15],[380,220,65],[470,320,-40],[560,140,-10],[620,250,30],[150,280,-70],[500,200,80]],hr='',dk='';
  Hr.forEach(function(b,k){hr+='<rect x="'+(b[0]-20)+'" y="'+(b[1]-6)+'" width="40" height="12" rx="6" transform="rotate('+b[2]+' '+b[0]+' '+b[1]+')"/>';
    /* a phage docked on each rod: a small hexagonal head on a short tail, standing off the rod's top side */
    var a=(b[2]-90)*Math.PI/180,tx=b[0]+Math.cos(a)*6,ty=b[1]+Math.sin(a)*6,hx=b[0]+Math.cos(a)*24,hy=b[1]+Math.sin(a)*24,p='';
    for(i=0;i<6;i++){var t=i*Math.PI/3+a;p+=(i?'L':'M')+(hx+Math.cos(t)*6).toFixed(1)+' '+(hy+Math.sin(t)*6).toFixed(1)}
    dk+='<path d="'+p+'Z M'+(hx-Math.cos(a)*6).toFixed(1)+' '+(hy-Math.sin(a)*6).toFixed(1)+'L'+tx.toFixed(1)+' '+ty.toFixed(1)+'"/>'});
  g+='<g id="gsR" class="rb">'+hr+'</g>';
  g+='<g id="gsP" class="ph">'+dk+'</g>';
  /* therapeutic bacteria added back: filled ovals */
  var Ad=[[200,210,30],[350,190,-20],[480,250,50],[300,370,-10],[570,330,15],[640,130,-35]],ad='';
  Ad.forEach(function(b){ad+='<ellipse cx="'+b[0]+'" cy="'+b[1]+'" rx="20" ry="10" transform="rotate('+b[2]+' '+b[0]+' '+b[1]+')"/>'});
  g+='<g id="gsA" class="ab">'+ad+'</g>';
  /* the match: a model box and a line to the strain */
  g+='<g id="gsM"><rect class="mb" x="560" y="'+(mob?412:416)+'" width="170" height="40"/><text class="t s1" x="574" y="'+(mob?439:441)+'">'+(mob?"AI MATCH":"AI MATCH · MINUTES")+'</text></g>';
  g+='<path id="gsL" class="ml" d="M645 412V352C645 330 630 312 620 276"/>';
  /* labels, each clear of every stroke (DR3) */
  g+='<g id="gsL1"><text class="t s1" x="30" y="432">'+(mob?"HARMFUL STRAIN":"HARMFUL STRAIN CROWDS THE HEALTHY")+'</text><text class="t" x="30" y="456">'+(mob?"DYSBIOSIS":"A DYSBIOTIC MICROBIOME")+'</text></g>';
  g+='<g id="gsL2"><text class="t s1" x="30" y="432">'+(mob?"PHAGES DOCK":"PHAGES DOCK ON THE HARMFUL RODS")+'</text><text class="t" x="30" y="456">'+(mob?"HEALTHY UNTOUCHED":"HEALTHY BACTERIA UNTOUCHED")+'</text></g>';
  g+='<g id="gsL3"><text class="t s1" x="30" y="432">'+(mob?"HARMFUL REMOVED":"HARMFUL BACTERIA REMOVED")+'</text><text class="t" x="30" y="456">'+(mob?"THERAPEUTIC ADDED":"THERAPEUTIC BACTERIA ADDED")+'</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="484">'+(mob?"1 · DISRUPTED":"1 · A DISRUPTED ECOSYSTEM")+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="484">'+(mob?"2 · MATCH":"2 · THE RIGHT PHAGE")+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="484">'+(mob?"3 · RESTORE":"3 · ECOSYSTEM RESTORED")+'</text></g>';
  return g+'</svg>';
}
function scene(){return gsScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),ml:dl("#gsL"),H:$("#gsH",svg),R:$("#gsR",svg),P:$("#gsP",svg),A:$("#gsA",svg),M:$("#gsM",svg),
    L1:$("#gsL1",svg),L2:$("#gsL2",svg),L3:$("#gsL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b)}
    var gone=ease(seg(p,.7,.8));
    /* step 1: healthy, then the harmful strain */
    op(E.H,b*seg(p,.04,.14));op(E.R,b*seg(p,.12,.24)*(1-gone));
    op(E.L1,b*seg(p,.14,.22)*(1-seg(p,.31,.36)));
    /* step 2: the match line from the model, then the phages dock */
    op(E.M,b*seg(p,.38,.44)*(1-seg(p,.66,.72)));draw(E.ml,b*ease(seg(p,.4,.5))*(1-seg(p,.66,.72)));
    op(E.P,b*seg(p,.46,.56)*(1-gone));
    op(E.L2,b*seg(p,.48,.54)*(1-seg(p,.64,.68)));
    /* step 3: rods and phages go; therapeutic bacteria are added */
    op(E.A,b*seg(p,.76,.86));op(E.L3,b*seg(p,.78,.86));
    op(E.l1,b*seg(p,.02,.1)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
