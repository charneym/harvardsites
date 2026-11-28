/* The story scene (BL/BY/DB): what HAWC does, drawn as ONE cross-section through a cell membrane kept on screen for all
   three steps (xaphe.co.uk/technology: the peptide "condense[s] nucleic acids into nanoparticles" of "~100 nm"; the
   consensus sequence has "a 8-aa clathrin-mediated domain and a 7-aa clathrin-independent domain" and "both methods of
   cellular entry were still functional"; Innovate UK 10181467: XapHe's particles enable "full escape of the RNA to the
   cytoplasm of the cell"). Calm line drawing, illustrative.
   Step 1: loose strands outside the cell are condensed by the peptide into one particle.
   Step 2: the particle enters by two routes at once — a clathrin-coated pit and a direct, uncoated invagination.
   Step 3: the vesicle opens and the cargo is released into the cytoplasm, free. */
var SCW=760,SCH=520;
function xpScene(o){
  var g='',mob=o.mob,i;
  var MY=250;   /* the membrane line */
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 40 760 452" aria-hidden="true">';
  g+='<text class="t" x="30" y="64">'+(mob?"CELL MEMBRANE":"CELL MEMBRANE, CROSS-SECTION")+'</text>';
  /* the membrane: two hairlines with the two entry routes drawn into it */
  g+='<path class="mem sD" d="M30 '+MY+'H250C250 '+(MY+70)+' 330 '+(MY+70)+' 330 '+MY+'H470C470 '+(MY+62)+' 550 '+(MY+62)+' 550 '+MY+'H730"/>';
  g+='<path class="mem2 sD" d="M30 '+(MY+14)+'H243C243 '+(MY+86)+' 337 '+(MY+86)+' 337 '+(MY+14)+'H463C463 '+(MY+78)+' 557 '+(MY+78)+' 557 '+(MY+14)+'H730"/>';
  g+='<g class="lt"><text class="t" x="'+(mob?560:620)+'" y="'+(MY-24)+'">OUTSIDE</text><text class="t" x="'+(mob?560:620)+'" y="'+(MY+56)+'">CYTOPLASM</text></g>';
  /* the clathrin coat on the left pit only (the right route is uncoated) */
  var cl='M243 '+(MY+6)+'C243 '+(MY+84)+' 337 '+(MY+84)+' 337 '+(MY+6);
  g+='<path id="xpC" class="cl" d="'+cl+'"/>';
  /* step 1: loose strands, then the condensed particle above the membrane */
  var st='';
  [[90,120,1],[150,96,-1],[120,168,1],[196,150,-1],[64,170,1]].forEach(function(p){
    var d='M'+p[0]+' '+p[1];for(i=1;i<=6;i++){d+='q'+(9*p[2])+' '+(i%2?-12:12)+' '+(18*p[2])+' 0'}st+='<path d="'+d+'"/>'});
  g+='<g id="xpS" class="st">'+st+'</g>';
  function particle(cx,cy,r,id){
    var p='<g id="'+id+'" class="np"><circle class="sh" cx="'+cx+'" cy="'+cy+'" r="'+r+'"/>';
    for(var k=0;k<3;k++){var a=k*2.1,rr=r*.66,st=r*.30,d2='M'+(cx-rr*Math.cos(a)).toFixed(1)+' '+(cy-rr*Math.sin(a)*.62).toFixed(1);
      for(i=1;i<=4;i++){d2+='q'+(st*.5*Math.cos(a)-st*.55*Math.sin(a)*(i%2?1:-1)).toFixed(1)+' '+(st*.5*Math.sin(a)*.62+st*.55*Math.cos(a)*(i%2?1:-1)).toFixed(1)+' '+(st*Math.cos(a)).toFixed(1)+' '+(st*Math.sin(a)*.62).toFixed(1)}
      p+='<path class="cg" d="'+d2+'"/>'}
    return p+'</g>'}
  g+=particle(150,148,42,"xpP");
  /* step 2: the two particles entering, one in each route */
  g+=particle(290,MY+44,26,"xpE1");
  g+=particle(510,MY+40,26,"xpE2");
  /* step 3: the vesicle inside, opened, and the cargo free in the cytoplasm */
  g+='<g id="xpV"><circle class="ves" cx="400" cy="'+(MY+150)+'" r="40"/></g>';
  var fr='';
  [[330,MY+206,1],[430,MY+216,-1],[380,MY+252,1],[480,MY+180,-1],[280,MY+170,1]].forEach(function(p){
    var d='M'+p[0]+' '+p[1];for(i=1;i<=6;i++){d+='q'+(9*p[2])+' '+(i%2?-12:12)+' '+(18*p[2])+' 0'}fr+='<path d="'+d+'"/>'});
  g+='<g id="xpF" class="st">'+fr+'</g>';
  /* labels, each clear of every stroke (DR3) */
  g+='<g id="xpL1"><text class="t s1" x="30" y="432">'+(mob?"CARGO CONDENSED":"ANY NUCLEIC ACID, CONDENSED")+'</text><text class="t" x="30" y="456">'+(mob?"~100 nm PARTICLE":"ONE ~100 nm PARTICLE, PDI < 0.06")+'</text></g>';
  g+='<g id="xpL2"><text class="t s1" x="30" y="432">'+(mob?"TWO ENTRY ROUTES":"CLATHRIN-MEDIATED AND CLATHRIN-INDEPENDENT")+'</text><text class="t" x="30" y="456">'+(mob?"NOT SEEN AS FOREIGN":"THE CELL DOES NOT READ IT AS FOREIGN")+'</text></g>';
  g+='<g id="xpL3"><text class="t s1" x="30" y="432">'+(mob?"RELEASED":"FULL ESCAPE TO THE CYTOPLASM")+'</text><text class="t" x="30" y="456">'+(mob?"REPEATABLE":"REPEAT TRANSFECTION, NO TOXICITY")+'</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="484">'+(mob?"1 · CONDENSE":"1 · CONDENSED INTO A PARTICLE")+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="484">'+(mob?"2 · ENTER":"2 · TAKEN IN BY TWO ROUTES")+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="484">'+(mob?"3 · RELEASE":"3 · RELEASED TO THE CYTOPLASM")+'</text></g>';
  return g+'</svg>';
}
function scene(){return xpScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),cl:dl("#xpC"),S:$("#xpS",svg),P:$("#xpP",svg),E1:$("#xpE1",svg),E2:$("#xpE2",svg),V:$("#xpV",svg),F:$("#xpF",svg),lt:$(".lt",svg),
    L1:$("#xpL1",svg),L2:$("#xpL2",svg),L3:$("#xpL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b);op(E.lt,b)}
    /* step 1: loose strands, condensed into one particle */
    op(E.S,b*seg(p,.04,.12)*(1-ease(seg(p,.15,.24))));
    op(E.P,b*seg(p,.18,.26)*(1-seg(p,.4,.46)));
    op(E.L1,b*seg(p,.14,.22)*(1-seg(p,.31,.36)));
    /* step 2: the coat on the left route, both particles entering */
    draw(E.cl,b*ease(seg(p,.42,.54))*(1-seg(p,.72,.78)));
    op(E.E1,b*seg(p,.46,.56)*(1-seg(p,.7,.76)));op(E.E2,b*seg(p,.5,.6)*(1-seg(p,.7,.76)));
    op(E.L2,b*seg(p,.48,.54)*(1-seg(p,.64,.68)));
    /* step 3: the vesicle inside, then the cargo free */
    op(E.V,b*seg(p,.72,.8)*(1-seg(p,.88,.94)));op(E.F,b*seg(p,.82,.92));
    op(E.L3,b*seg(p,.78,.86));
    op(E.l1,b*seg(p,.02,.1)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
