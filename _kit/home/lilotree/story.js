/* The story scene (BL/BY/DB): ONE magnified cross-section of a PCB pad, kept on screen for all three steps, showing how
   LiloTree's finishes change the stack (lilotree.com home and about pages; product sheets; I-Connect007 interviews):
   Step 1: conventional ENIG: copper pad, electroless nickel (Ni-P), immersion gold in the cyanide-based matte yellow; the
           "black pad" corrosion at the nickel surface.
   Step 2: ENIG-Premium: the proprietary barrier layer, corrosion resistance improved by a factor of 10, no black pads,
           a cyanide-free rose-gold finish.
   Step 3: Ni-less ENIG-Premium: the nickel is removed; gold on copper, for HDI, 5G and high-frequency boards (low insertion
           loss), shown as a high-frequency signal along the surface. Not to scale. */
var SCW=760,SCH=520,LT_X0=30,LT_X1=620,LT_PX0=120,LT_PX1=560,LT_CU=290,LT_NI=90,LT_AU=30,LT_BL=8;
function ltScene(o){
  var g='',mob=o.mob,X0=LT_X0,X1=LT_X1,A=LT_PX0,B=LT_PX1,cu=LT_CU,ni=LT_NI,auT=cu-ni-LT_BL-LT_AU,lx=640;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<pattern id="ltFr" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V10" stroke="rgba(167,176,200,.22)" stroke-width="1"/></pattern>'+
    '<linearGradient id="ltCu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d08a5c"/><stop offset="1" stop-color="#8f5434"/></linearGradient>'+
    '<linearGradient id="ltNiG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7d8798"/><stop offset="1" stop-color="#525b6c"/></linearGradient>'+
    '<linearGradient id="ltAuYG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e2c25a"/><stop offset="1" stop-color="#a98a2e"/></linearGradient>'+
    '<linearGradient id="ltAuRG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6c3aa"/><stop offset="1" stop-color="#c7856a"/></linearGradient>'+
    '<clipPath id="ltSigC"><rect x="'+X0+'" y="140" width="'+(X1-X0)+'" height="160"/></clipPath></defs>';
  g+='<text class="t" x="'+X0+'" y="30">'+(mob?"PAD CROSS-SECTION":"PAD CROSS-SECTION, NOT TO SCALE")+'</text>';
  /* substrate, solder mask, copper pad: drawn in once */
  g+='<rect class="fr sD" x="'+X0+'" y="380" width="'+(X1-X0)+'" height="90"/>';
  g+='<rect class="sm sD" x="'+X0+'" y="270" width="'+(A-8-X0)+'" height="110"/><rect class="sm sD" x="'+(B+8)+'" y="270" width="'+(X1-B-8)+'" height="110"/>';
  g+='<rect class="cu sD" x="'+A+'" y="'+cu+'" width="'+(B-A)+'" height="'+(380-cu)+'"/>';
  /* nickel (scaled to nothing in step 3) */
  g+='<g id="ltNi"><rect class="ni" x="'+A+'" y="'+(cu-ni)+'" width="'+(B-A)+'" height="'+ni+'"/></g>';
  /* black pad: corrosion spikes into the nickel surface */
  var sp='',xs=[150,196,238,300,352,398,452,510],dp=[22,30,18,34,24,28,20,26];
  xs.forEach(function(x,i){sp+='M'+(x-8)+' '+(cu-ni)+'L'+(x-2)+' '+(cu-ni+dp[i])+'L'+(x+1)+' '+(cu-ni+dp[i]*.55)+'L'+(x+4)+' '+(cu-ni+dp[i]*.8)+'L'+(x+9)+' '+(cu-ni)+'Z'});
  g+='<g id="ltBP"><path class="bp" d="'+sp+'"/></g>';
  /* the gold and the barrier layer: one group that drops onto the copper in step 3 */
  g+='<g id="ltTop"><rect id="ltBar" class="bl" x="'+A+'" y="'+(cu-ni-LT_BL)+'" width="'+(B-A)+'" height="'+LT_BL+'"/>'+
     '<rect id="ltAuR" class="aur" x="'+A+'" y="'+auT+'" width="'+(B-A)+'" height="'+LT_AU+'"/>'+
     '<rect id="ltAuY" class="auy" x="'+A+'" y="'+auT+'" width="'+(B-A)+'" height="'+LT_AU+'"/></g>';
  /* the high-frequency signal along the surface (step 3) */
  var w='M'+(X0-120)+' 0',n=0;for(var x=X0-120;x<=X1+120;x+=15){w+='Q'+(x+7.5)+' '+((n++%2)?-11:11)+' '+(x+15)+' 0'}
  g+='<g id="ltSig" clip-path="url(#ltSigC)"><path id="ltSigP" class="sig" d="'+w+'"/></g>';
  /* the layer labels, in their own column right of the stack */
  g+='<text id="ltLAu" class="t ly" x="'+lx+'" y="'+(auT+LT_AU/2+4)+'">Au</text>'+
     '<text id="ltLNi" class="t ly" x="'+lx+'" y="'+(cu-ni/2+4)+'">Ni-P</text>'+
     '<text class="t ly" x="'+lx+'" y="'+(cu+45+4)+'">Cu</text>'+
     '<text class="t ly" x="'+lx+'" y="'+(425+4)+'">FR-4</text>';
  /* step notes, above the stack */
  g+='<g id="ltN1"><text class="t w" x="'+X0+'" y="'+(mob?106:118)+'">'+(mob?"BLACK PAD:":"BLACK PAD: CORROSION AT THE NICKEL SURFACE")+'</text>'+(mob?'<text class="t w" x="'+X0+'" y="130">NICKEL CORROSION</text>':'')+'</g>';
  g+='<g id="ltN2"><text class="t s1" x="'+X0+'" y="'+(mob?106:118)+'">'+(mob?"BARRIER LAYER:":"BARRIER LAYER: 10× CORROSION RESISTANCE")+'</text>'+(mob?'<text class="t s1" x="'+X0+'" y="130">10× CORROSION RESISTANCE</text>':'')+'</g>';
  g+='<g id="ltN3"><text class="t s1" x="'+X0+'" y="'+(mob?106:118)+'">'+(mob?"NO NICKEL: GOLD ON COPPER":"NO NICKEL: GOLD ON COPPER")+'</text><text class="t s2" x="'+X0+'" y="'+(mob?130:142)+'">'+(mob?"LOW INSERTION LOSS":"LOW INSERTION LOSS AT HIGH FREQUENCIES")+'</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="'+X0+'" y="508">'+(mob?"1 · ENIG":"1 · CONVENTIONAL ENIG")+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+X0+'" y="508">2 · ENIG-PREMIUM</text></g>';
  g+='<g id="lb3"><text class="a" x="'+X0+'" y="508">'+(mob?"3 · NI-LESS":"3 · NI-LESS ENIG-PREMIUM")+'</text></g>';
  return g+'</svg>';
}
function scene(){return ltScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),fills:$$(".sD",svg),ni:$("#ltNi",svg),bp:$("#ltBP",svg),top:$("#ltTop",svg),bar:$("#ltBar",svg),auy:$("#ltAuY",svg),
    sig:$("#ltSig",svg),sigp:$("#ltSigP",svg),lAu:$("#ltLAu",svg),lNi:$("#ltLNi",svg),ly:$$("text.ly",svg),
    n1:$("#ltN1",svg),n2:$("#ltN2",svg),n3:$("#ltN3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var lastB=-1,AU0=LT_CU-LT_NI-LT_BL-LT_AU;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b);E.fills.forEach(function(r){r.style.fillOpacity=b.toFixed(3)});E.ly.forEach(function(t){if(t!==E.lNi&&t!==E.lAu)op(t,b)})}
    /* step 1: yellow gold over nickel, black pad */
    op(E.bp,b*seg(p,.04,.12)*(1-seg(p,.36,.44)));
    op(E.n1,b*seg(p,.04,.12)*(1-seg(p,.33,.38)));
    /* step 2: the barrier layer appears, the gold turns rose */
    op(E.bar,b*seg(p,.4,.48)*(1-seg(p,.64,.69)));
    op(E.auy,b*(1-seg(p,.44,.54)));
    op(E.top,b);
    op(E.n2,b*seg(p,.42,.5)*(1-seg(p,.64,.68)));
    /* step 3: the nickel goes; the gold drops onto the copper; a signal runs along the surface */
    var k=ease(seg(p,.7,.82)),dy=(LT_NI+LT_BL)*k;
    E.ni.setAttribute("transform","translate(0 "+LT_CU+") scale(1 "+Math.max(1-k,.0001).toFixed(4)+") translate(0 "+(-LT_CU)+")");
    E.top.setAttribute("transform","translate(0 "+dy.toFixed(2)+")");
    op(E.ni,b*(1-seg(p,.8,.83)));
    op(E.lNi,b*(1-seg(p,.66,.7)));
    op(E.lAu,b);E.lAu.setAttribute("y",(AU0+LT_AU/2+4+dy).toFixed(1));
    op(E.sig,b*seg(p,.84,.9));E.sigp.setAttribute("transform","translate("+((p*900)%30).toFixed(1)+" "+(AU0+dy-18).toFixed(1)+")");
    op(E.n3,b*seg(p,.8,.88));
    op(E.l1,b*seg(p,.02,.1)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
