/* The story scene (BL/BY/DB): how the PDPatch works, drawn as ONE cross-section through skin with an open chronic wound,
   kept on screen for all three steps (khottbiotech.com: "dual-action Photodynamic Therapy", "PhotOxy Gel(TM), integrated
   into the PDPatch contains photosensitive compounds that when activated by light, eliminate infection, including
   drug-resistant strain, while accelerating healthy tissue regeneration", "AI-driven remote monitoring"). Calm line
   drawing, no blood: the wound is an open gap in the skin layers, the infection a scatter of small rod shapes.
   Step 1: the open wound with bacteria in its bed.
   Step 2: the patch lies over it: the gel layer, then light from its bands reaching into the bed; the bacteria fade.
   Step 3: new tissue closes the gap; a monitoring trace goes out to the clinician. Illustrative. */
var SCW=760,SCH=520;
function khScene(o){
  var g='',mob=o.mob,i;
  var S0=250,S1=300,S2=380,G0=280,G1=480;   /* skin surface, dermis line, base; wound gap x range */
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 40 760 452" aria-hidden="true">';
  g+='<text class="t" x="30" y="64">'+(mob?"WOUND, CROSS-SECTION":"CHRONIC WOUND, CROSS-SECTION")+'</text>';
  /* skin layers with the open wound */
  g+='<path class="sk sD" d="M30 '+S0+'H'+G0+'C'+(G0+20)+' '+S0+' '+(G0+24)+' '+(S1+20)+' '+(G0+50)+' '+(S1+34)+'H'+(G1-50)+'C'+(G1-24)+' '+(S1+20)+' '+(G1-20)+' '+S0+' '+G1+' '+S0+'H730"/>';
  g+='<path class="sk2 sD" d="M30 '+S1+'H'+(G0+16)+'M'+(G1-16)+' '+S1+'H730M30 '+S2+'H730"/>';
  g+='<g class="lt"><text class="t" x="'+(mob?560:600)+'" y="'+(S0+30)+'">SKIN</text><text class="t" x="'+(mob?560:600)+'" y="'+(S2+30)+'">TISSUE</text></g>';
  /* bacteria in the wound bed */
  var B=[[316,318,20],[342,326,-30],[368,312,60],[392,328,10],[418,316,-50],[444,326,30],[330,302,80],[404,304,-20],[432,302,40],[356,330,-10],[382,300,70]],bb='';
  B.forEach(function(b){bb+='<rect x="'+(b[0]-7)+'" y="'+(b[1]-3)+'" width="14" height="6" rx="3" transform="rotate('+b[2]+' '+b[0]+' '+b[1]+')"/>'});
  g+='<g id="khB" class="bc">'+bb+'</g>';
  /* the patch over the wound: pad, gel layer, light bands; then light lines into the bed */
  g+='<g id="khP"><rect class="pd" x="210" y="'+(S0-58)+'" width="340" height="40" rx="10"/><path class="gl" d="M222 '+(S0-14)+'H538"/>'+
     '<path class="bd" d="M246 '+(S0-38)+'H514"/></g>';
  var ly='';for(i=0;i<7;i++){var x=300+i*27;ly+='M'+x+' '+(S0-10)+'V'+(S1+18)}
  g+='<path id="khL" class="ly" d="'+ly+'"/>';
  /* new tissue closing the gap */
  g+='<path id="khN" class="nt" d="M'+(G0+10)+' '+(S0+6)+'C'+(G0+60)+' '+(S0+20)+' '+(G1-60)+' '+(S0+20)+' '+(G1-10)+' '+(S0+6)+'M'+(G0+30)+' '+(S0+30)+'C'+(G0+70)+' '+(S0+42)+' '+(G1-70)+' '+(S0+42)+' '+(G1-30)+' '+(S0+30)+'"/>';
  /* monitoring trace to the clinician */
  var tr='M560 '+(S0-38);for(i=0;i<5;i++){var x2=560+i*30;tr+='L'+(x2+10)+' '+(S0-38)+'L'+(x2+15)+' '+(S0-52)+'L'+(x2+20)+' '+(S0-38)+'L'+(x2+30)+' '+(S0-38)}
  g+='<path id="khT" class="tr" d="'+tr+'"/>';
  /* labels, each clear of every stroke (DR3) */
  g+='<g id="khL1"><text class="t s1" x="30" y="'+(S2+54)+'">'+(mob?"INFECTED WOUND BED":"OPEN WOUND · INFECTION IN THE BED")+'</text><text class="t" x="30" y="'+(S2+76)+'">'+(mob?"INCL. RESISTANT STRAINS":"INCLUDING DRUG-RESISTANT STRAINS")+'</text></g>';
  g+='<g id="khL2"><text class="t s1" x="30" y="'+(S2+54)+'">'+(mob?"PHOTOXY GEL + LIGHT":"PHOTOXY GEL, ACTIVATED BY THE PATCH’S LIGHT")+'</text><text class="t" x="30" y="'+(S2+76)+'">'+(mob?"INFECTION ELIMINATED":"INFECTION ELIMINATED, NO ANTIBIOTICS")+'</text></g>';
  g+='<g id="khL3"><text class="t s1" x="30" y="'+(S2+54)+'">'+(mob?"TISSUE REGENERATES":"HEALTHY TISSUE REGENERATES")+'</text><text class="t" x="560" y="'+(S0-66)+'">'+(mob?"REMOTE":"REMOTE MONITORING")+'</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="484">'+(mob?"1 · WOUND":"1 · A CHRONIC, INFECTED WOUND")+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="484">'+(mob?"2 · ACTIVATE":"2 · LIGHT ACTIVATES THE GEL")+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="484">'+(mob?"3 · HEAL":"3 · HEALING, MONITORED")+'</text></g>';
  return g+'</svg>';
}
function scene(){return khScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),ly:dl("#khL"),nt:dl("#khN"),tr:dl("#khT"),B:$("#khB",svg),P:$("#khP",svg),lt:$(".lt",svg),
    L1:$("#khL1",svg),L2:$("#khL2",svg),L3:$("#khL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b);op(E.lt,b)}
    /* step 1: the bacteria appear in the bed */
    op(E.B,b*seg(p,.08,.2)*(1-.9*ease(seg(p,.5,.62))));
    op(E.L1,b*seg(p,.1,.18)*(1-seg(p,.31,.36)));
    /* step 2: the patch, then the light into the bed */
    op(E.P,b*seg(p,.38,.46));draw(E.ly,b*ease(seg(p,.44,.56))*(1-seg(p,.7,.76)));
    op(E.L2,b*seg(p,.46,.52)*(1-seg(p,.64,.68)));
    /* step 3: new tissue closes the gap; the monitoring trace */
    draw(E.nt,b*ease(seg(p,.7,.84)));draw(E.tr,b*ease(seg(p,.76,.9)));
    op(E.L3,b*seg(p,.76,.84));
    op(E.l1,b*seg(p,.02,.1)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
