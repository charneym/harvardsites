/* The story scene (BL/BY/DB): the knee in a front (coronal) section, after OrthoPreserve's own "Right Knee: Front View"
   figure, drawn as ONE continuous fine-line scene: the femur with its two condyles above, the tibia below, and the two
   wedge-shaped menisci between them. Step 1 (tear): a tear opens in the medial meniscus. Step 2 (trim): a meniscectomy
   cuts the torn inner part away, the condyle settles onto the plateau and a contact-stress hot spot appears on the
   cartilage. Step 3 (restore): the Defender implant slides into the compartment, the condyle is lifted back and the load
   spreads evenly again. Driven by the scrubbed progress. */
var SCW=760,SCH=520;
/* bones (scene units); the medial compartment is on the right of the figure */
var KF='M296 -10L298 150C298 186 236 196 222 246C210 290 246 322 296 324C336 325 356 306 380 292C404 306 424 325 464 324C514 322 550 290 538 246C524 196 462 186 462 150L464 -10';
var KT='M286 530L290 452C244 432 194 404 194 366C194 352 204 344 226 344L352 346C364 336 372 328 380 326C388 328 396 336 408 346L534 344C556 344 566 352 566 366C566 404 516 432 470 452L474 530';
var KC1='M214 300C232 318 262 328 296 330C328 331 350 316 372 304';
var KC2='M388 304C410 316 432 331 464 330C498 328 528 318 546 300';
var KP='M228 350L350 352M410 352L532 350';
function opWedge(o,ti,tt){/* wedge meniscus: outer edge x o (thick), inner tip x ti, top height tt over the plateau */
  var dir=o<380?1:-1,y0=344;
  return 'M'+o+' '+y0+'L'+o+' '+(y0-tt)+'C'+(o+dir*16)+' '+(y0-tt-2)+' '+(ti-dir*26)+' '+(y0-8)+' '+ti+' '+(y0-1)+'L'+ti+' '+y0+'Z'}
function scene(){var mob=MOBILE()?1:0,g='',i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="100 96 620 424" aria-hidden="true">';   /* framed on the joint so the knee fills the frame (DB) */
  g+='<g id="scBase">';
  g+='<path class="tib sD" d="'+KT+'"/><path class="cart sD" d="'+KP+'"/>';
  /* trabecular texture in the tibia, fine strokes */
  var s=9,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},tx='';
  for(i=0;i<34;i++){var x=240+R()*280,y=380+R()*90;if(Math.abs(x-380)>150-(y-380)*.9)continue;var a=R()*3.14,l=6+R()*10;tx+='M'+(x-Math.cos(a)*l).toFixed(1)+' '+(y-Math.sin(a)*l).toFixed(1)+'Q'+x.toFixed(1)+' '+(y+4).toFixed(1)+' '+(x+Math.cos(a)*l).toFixed(1)+' '+(y+Math.sin(a)*l).toFixed(1)}
  g+='<path class="trab sD" d="'+tx+'"/>';
  g+='<path class="men sD" d="'+opWedge(206,272,30)+'"/>';
  g+='<text class="t" x="112" y="470">TIBIA</text>';
  g+='<text class="t" x="112" y="290">LATERAL</text>';
  g+='<text class="t" x="708" y="290" text-anchor="end">MEDIAL</text>';
  g+='</g>';
  g+='<g id="scFem"><path class="fem" d="'+KF+'"/><path class="cart2" d="'+KC1+'"/><path class="cart2" d="'+KC2+'"/>';
  var ft='';s=31;for(i=0;i<30;i++){var x2=310+R()*140,y2=40+R()*170,a2=R()*3.14,l2=6+R()*10;ft+='M'+(x2-Math.cos(a2)*l2).toFixed(1)+' '+(y2-Math.sin(a2)*l2).toFixed(1)+'Q'+x2.toFixed(1)+' '+(y2+4).toFixed(1)+' '+(x2+Math.cos(a2)*l2).toFixed(1)+' '+(y2+Math.sin(a2)*l2).toFixed(1)}
  g+='<path class="trab" d="'+ft+'"/><text class="t" x="476" y="140">FEMUR</text></g>';
  g+='<path class="men" id="scMed" d="'+opWedge(554,488,30)+'"/>';
  g+='<path class="tear" id="scTear" d="M520 344L514 334L522 328L516 318"/>';
  g+='<g id="scHot"><ellipse class="hot" cx="470" cy="347" rx="40" ry="9"/><ellipse class="hot2" cx="470" cy="347" rx="20" ry="5"/></g>';
  g+='<g id="scImp"><path class="imp" d="'+opWedge(556,476,32)+'"/>';
  for(i=0;i<5;i++)g+='<path class="fib" d="M'+(552-i*14)+' '+(342-i*0)+'L'+(552-i*14)+' '+(318+i*4.5)+'"/>';
  g+='</g>';
  g+='<g id="scLoad">';for(i=0;i<5;i++){var lx=448+i*20;g+='<path class="ld" d="M'+lx+' 236V'+(276+Math.abs(i-2)*2)+'M'+(lx-4)+' '+(271+Math.abs(i-2)*2)+'l4 5 4-5"/>'}g+='</g>';
  g+='<g id="scSpike"><path class="sp" d="M470 226V280M462 272l8 9 8-9"/><path class="sp" d="M482 236V280M474 272l8 9 8-9" opacity=".0"/></g>';
  g+='<g id="lb1"><path class="ll" d="M524 322L590 236H708"/><text class="a" x="708" y="226" text-anchor="end">TEAR</text></g>';
  g+='<g id="lb2"><path class="ll" d="M470 356L560 420H708"/><text class="a" x="708" y="410" text-anchor="end">CONTACT STRESS</text></g>';
  g+='<g id="lb3"><path class="ll" d="M540 330L590 236H708"/><text class="a" x="708" y="226" text-anchor="end">DEFENDER IMPLANT</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),fem:$("#scFem",svg),med:$("#scMed",svg),tear:$("#scTear",svg),hot:$("#scHot",svg),
    imp:$("#scImp",svg),load:$("#scLoad",svg),spike:$("#scSpike",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var tl=dl("#scTear"),lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var tear=sm2(seg(p,.08,.26)),trim=sm2(seg(p,.38,.54)),sink=sm2(seg(p,.46,.6)),ins=sm2(seg(p,.7,.86)),lift=sm2(seg(p,.78,.9));
    op(E.fem,b);
    /* trimming: the inner part of the medial meniscus is cut away; it shrinks to a thin rim at the periphery */
    var ti=488+(536-488)*trim,tt=30-12*trim;E.med.setAttribute("d",opWedge(554,ti,tt));op(E.med,b*(1-ins));
    draw(tl,tear);op(E.tear,b*(1-trim));
    /* the femur settles toward the plateau after the meniscectomy and is lifted back by the implant */
    var dy=7*sink*(1-lift),rot=-1.6*sink*(1-lift);E.fem.setAttribute("transform","translate(0 "+dy.toFixed(2)+") rotate("+rot.toFixed(2)+" 380 300)");
    op(E.hot,b*sink*(1-lift));op(E.spike,b*seg(p,.5,.58)*(1-seg(p,.74,.8)));
    E.imp.setAttribute("transform","translate("+(60*(1-ins)).toFixed(1)+" 0)");op(E.imp,b*ins);
    op(E.load,b*seg(p,.86,.94));
    op(E.l1,b*seg(p,.16,.22)*(1-seg(p,.32,.38)));op(E.l2,b*seg(p,.52,.58)*(1-seg(p,.66,.72)));op(E.l3,b*seg(p,.82,.9));
  };
}
function sm2(x){return x*x*(3-2*x)}
