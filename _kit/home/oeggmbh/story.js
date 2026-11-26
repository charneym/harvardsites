/* The story scene (BL/BY/DB): OEG's SURFTENS contact-angle measurement after the sessile-drop method (oeggmbh.com >
   Messgeräte für Kontaktwinkel und Oberflächenspannung), drawn as ONE drop on ONE wafer kept on screen for all three steps:
   Step 1 (Dosieren): the dosing needle sets a drop (from 0.2 µl) on the sample.
   Step 2 (Erfassen): backlight, the camera's frame, and the image processing tracing the drop's contour.
   Step 3 (Auswerten): baseline, the tangent at each contact point, and the contact angle θ. Schematic, no measured values. */
var SCW=760,SCH=520;
var OD={L:270,R:490,Y:380,RS:112.46,TH:78};
function oegScene(o){
  var g='',mob=o.mob,cap="M"+OD.L+" "+OD.Y+"A"+OD.RS+" "+OD.RS+" 0 0 1 "+OD.R+" "+OD.Y+"Z",arc="M"+OD.L+" "+OD.Y+"A"+OD.RS+" "+OD.RS+" 0 0 1 "+OD.R+" "+OD.Y;
  var t=OD.TH*Math.PI/180,dx=Math.cos(t),dy=Math.sin(t),TL=150;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<linearGradient id="odW" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dfe6f0" stop-opacity=".30"/><stop offset=".6" stop-color="#9fb0c6" stop-opacity=".12"/><stop offset="1" stop-color="#dfe6f0" stop-opacity=".22"/></linearGradient>'+
    '<radialGradient id="odG" cx=".5" cy=".55" r=".5"><stop offset="0" stop-color="#f5f4f2" stop-opacity=".34"/><stop offset=".6" stop-color="#f5f4f2" stop-opacity=".12"/><stop offset="1" stop-color="#f5f4f2" stop-opacity="0"/></radialGradient>'+
    '<linearGradient id="odS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a3a44"/><stop offset="1" stop-color="#25252d"/></linearGradient></defs>';
  g+='<text class="t" x="20" y="30">'+(mob?"SESSILE DROP":"SESSILE DROP, SCHEMATISCH")+'</text>';
  /* backlight (step 2) */
  g+='<ellipse id="odGl" cx="380" cy="320" rx="300" ry="150" fill="url(#odG)"/>';
  /* the wafer */
  g+='<path class="slab" d="M90 380H670V396H90Z"/><path class="edge sD" d="M90 380H670"/>';
  g+='<text class="t" x="96" y="426">'+(mob?"WAFER":"PROBE, Z. B. WAFER")+'</text>';
  /* dosing needle and pendant drop (step 1) */
  g+='<g id="odN"><path class="syr" d="M364 -20H396V70H364Z"/><path class="ndl" d="M376 70H384V148H376Z"/></g>';
  g+='<g id="odP"><circle class="pd" cx="380" cy="165" r="16"/></g>';
  /* the sessile drop: water, then its backlit silhouette */
  g+='<g id="odC"><path class="cap" d="'+cap+'"/><path class="sil" id="odSil" d="'+cap+'"/></g>';
  /* camera frame and contour (step 2) */
  var B=[[226,258],[534,258],[226,404],[534,404]],k='';
  B.forEach(function(q,i){var sx=i%2?-1:1,sy=i<2?1:-1;k+='<path class="brk" d="M'+q[0]+' '+(q[1]+sy*22)+'V'+q[1]+'H'+(q[0]+sx*22)+'"/>'});
  g+='<g id="odF">'+k+'</g>';
  g+='<path id="odK" class="ctr" d="'+arc+'"/>';
  /* baseline, tangents and angle (step 3) */
  g+='<path id="odB" class="base" d="M200 '+OD.Y+'H560"/>';
  g+='<path id="odT1" class="tan" d="M'+OD.R+' '+OD.Y+'L'+(OD.R-dx*TL).toFixed(1)+' '+(OD.Y-dy*TL).toFixed(1)+'"/>';
  g+='<path id="odT2" class="tan" d="M'+OD.L+' '+OD.Y+'L'+(OD.L+dx*TL).toFixed(1)+' '+(OD.Y-dy*TL).toFixed(1)+'"/>';
  g+='<path id="odA" class="ang" d="M'+(OD.R-42)+' '+OD.Y+'A42 42 0 0 1 '+(OD.R-dx*42).toFixed(1)+' '+(OD.Y-dy*42).toFixed(1)+'"/>';
  /* labels, per step */
  g+='<g id="odL1"><text class="t s1" x="412" y="58">'+(mob?"DOSIERER":"DOSIERSYSTEM")+'</text><text class="t" x="412" y="178">AB 0,2 µl</text></g>';
  g+='<g id="odL2"><text class="t s1" x="226" y="242">'+(mob?"KAMERA":"KAMERABILD IM GEGENLICHT")+'</text><text class="t" x="552" y="300">KONTUR</text></g>';
  g+='<g id="odL3"><text class="t s1" x="'+(OD.R-dx*TL+14).toFixed(0)+'" y="'+(OD.Y-dy*TL+8).toFixed(0)+'">TANGENTE</text><text class="t s1" x="514" y="356">'+(mob?"θ":"KONTAKTWINKEL θ")+'</text><text class="t" x="578" y="426">BASISLINIE</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · DOSIEREN</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · ERFASSEN</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · AUSWERTEN</text></g>';
  return g+'</svg>';
}
function scene(){return oegScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),slab:$(".slab",svg),gl:$("#odGl",svg),N:$("#odN",svg),P:$("#odP",svg),C:$("#odC",svg),sil:$("#odSil",svg),F:$("#odF",svg),
    K:dl("#odK"),B:dl("#odB"),T:dl("#odT1,#odT2"),A:dl("#odA"),L1:$("#odL1",svg),L2:$("#odL2",svg),L3:$("#odL3",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t"),tw:svg.querySelectorAll("text.t")[1]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b);op(E.tw,b);op(E.slab,b)}
    /* step 1: the needle sets the drop */
    var gr=ease(seg(p,.03,.12)),dn=ease(seg(p,.12,.24)),cg=ease(seg(p,.23,.31)),up=ease(seg(p,.26,.34));
    op(E.N,b*seg(p,0,.05)*(1-seg(p,.32,.38)));E.N.setAttribute("transform","translate(0 "+(-90*up).toFixed(1)+")");
    var ps=.4+.6*gr;E.P.setAttribute("transform","translate(0 "+(190*dn).toFixed(1)+") translate(380 149) scale("+ps.toFixed(3)+") translate(-380 -149)");
    op(E.P,b*seg(p,.02,.05)*(1-seg(p,.24,.27)));
    var cs=.35+.65*cg;E.C.setAttribute("transform","translate(380 380) scale("+cs.toFixed(3)+") translate(-380 -380)");
    op(E.C,b*seg(p,.23,.26));
    op(E.L1,b*seg(p,.02,.1)*(1-seg(p,.3,.35)));
    /* step 2: backlight, silhouette, frame, contour */
    op(E.gl,b*seg(p,.37,.46));op(E.sil,b*seg(p,.4,.48));op(E.F,b*seg(p,.4,.46));
    draw(E.K,b*seg(p,.46,.6));
    op(E.L2,b*seg(p,.44,.52)*(1-seg(p,.64,.68)));
    /* step 3: baseline, tangents, angle */
    draw(E.B,b*seg(p,.7,.78));draw(E.T,b*seg(p,.76,.86));draw(E.A,b*seg(p,.84,.9));
    op(E.L3,b*seg(p,.82,.9));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
