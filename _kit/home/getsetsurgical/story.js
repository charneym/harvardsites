/* The story scene (DB/BL): GetSet's own Good to Go! workflow (getsetsurgical.com, Good to Go! and product pages: sets arrive
   sterile packed and ready for use, transparent packs for a visual check and a no-touch transfer into the sterile field,
   brand-new instruments for every surgery, never cleaned or reprocessed), drawn as ONE fine-line procedure kit seen from
   above that fills the frame. Frame 0 is complete: the closed kit with its label panel and the Good to Go! tick.
   Step 1 (arrive): the kit is sterile packed and complete.
   Step 2 (open): the lid lifts away; the transparent cover peels back; the tray shows its instruments and implants laid out
   in order: T-handle driver, ratchet screwdriver, rod, five screws and two cages.
   Step 3 (new): each item lights in the accent, ticked: brand new, used once, nothing goes back to be reprocessed. */
var SCW=760,SCH=560;
var SCR=[214,262,310,358,406];
var ROWS=[178,226,274];
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'128 96 494 372':'124 100 636 380')+'" aria-hidden="true">';
  /* the kit's base and the tray inside it */
  g+='<g id="scBase"><path class="wl sD" d="M150 120H600V420H150Z"/><path class="wo sD" d="M172 142H578V398H172Z"/></g>';
  /* the instruments and implants, each in its moulded slot */
  g+='<g id="scIns">';
  g+='<g class="it"><path class="slot" d="M190 166H520V190H190Z"/><path class="in" d="M196 178H500M500 160V196M494 160H506M494 196H506"/></g>';
  g+='<g class="it"><path class="slot" d="M190 210H550V242H190Z"/><path class="in" d="M196 226H430M430 214H530C538 214 542 220 542 226C542 232 538 238 530 238H430Z"/></g>';
  g+='<g class="it"><path class="slot" d="M190 258H520V290H190Z"/><path class="in" d="M200 280C300 268 400 268 500 280"/></g>';
  g+='<g class="it">';SCR.forEach(function(x){var th='';for(var y=348;y<=380;y+=6)th+='M'+(x-5)+' '+y+'l10 3';
    g+='<path class="slot" d="M'+(x-17)+' 312H'+(x+17)+'V392H'+(x-17)+'Z"/><circle class="in" cx="'+x+'" cy="328" r="9"/><path class="in" d="M'+x+' 337V386'+th+'"/>'});g+='</g>';
  g+='<g class="it">';[460,522].forEach(function(x){
    g+='<path class="slot" d="M'+(x-6)+' 312H'+(x+50)+'V392H'+(x-6)+'Z"/><path class="in" d="M'+(x+6)+' 326H'+(x+38)+'C'+(x+42)+' 326 '+(x+44)+' 330 '+(x+44)+' 334V370C'+(x+44)+' 374 '+(x+42)+' 378 '+(x+38)+' 378H'+(x+6)+'C'+(x+2)+' 378 '+x+' 374 '+x+' 370V334C'+x+' 330 '+(x+2)+' 326 '+(x+6)+' 326Z"/><path class="in" d="M'+(x+12)+' 340H'+(x+32)+'V364H'+(x+12)+'Z"/>'});g+='</g>';
  g+='</g>';
  /* ticks for step 3, right of the three long instruments */
  g+='<g id="scTk">';ROWS.forEach(function(y){g+='<path class="tk" d="M556 '+y+'l5 5 10-11"/>'});g+='</g>';
  /* the transparent sterile cover */
  g+='<g id="scCov"><path class="cov" d="M162 132H588V408H162Z"/></g>';
  /* the lid: label panel and the Good to Go! tick */
  g+='<g id="scLid"><path class="lid" d="M150 120H600V420H150Z"/><path class="wo" d="M160 130H590V410H160Z"/>'+
    '<path class="wo" d="M172 142H254V398H172Z"/><path class="wo" d="M186 170H240M186 186H230M186 202H236M186 360H240M186 376H222"/>'+
    '<path class="tick" d="M374 268L408 302L476 228"/></g>';
  if(!mob){
    g+='<g id="lPack"><path class="ld" d="M604 160L624 160"/><text class="t" x="632" y="156">STERILE</text><text class="t q" x="632" y="172">PACKED</text></g>';
    g+='<g id="lCov"><path class="ld" d="M592 138L624 138"/><text class="t" x="632" y="134">TRANSPARENT</text><text class="t q" x="632" y="150">COVER</text></g>';
    g+='<g id="lNew"><path class="ld" d="M604 226L624 226"/><text class="t o" x="632" y="222">BRAND NEW</text><text class="t q" x="632" y="238">EVERY SURGERY</text></g>';
  }else{g+='<g id="lPack"></g><g id="lCov"></g><g id="lNew"></g>'}
  var ly=mob?458:466,lx=150;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'STERILE AND COMPLETE':'ARRIVES STERILE, READY FOR USE')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'NO-TOUCH TRANSFER':'A VISUAL CHECK, A NO-TOUCH TRANSFER')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'NOTHING TO REPROCESS':'BRAND NEW, NOTHING TO REPROCESS')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),lid:$("#scLid",svg),cov:$("#scCov",svg),ins:$("#scIns",svg),it:$$("#scIns .it",svg),
    tk:dl("#scTk .tk"),lPack:$("#lPack",svg),lCov:$("#lCov",svg),lNew:$("#lNew",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s2=seg(p,.36,.64),s3=seg(p,.68,.94);
    /* 2: the lid lifts away, the cover peels back, the tray shows */
    var lf=sm(s2/.45);
    E.lid.setAttribute("transform","translate(0 "+(-34*lf).toFixed(1)+")");op(E.lid,b*(1-lf));
    var cf=sm((s2-.35)/.5);op(E.cov,b*Math.min(1,lf*3)*(1-cf));E.cov.setAttribute("transform","translate("+(-30*cf).toFixed(1)+" "+(-24*cf).toFixed(1)+")");
    op(E.ins,b*sm((s2-.15)/.45));
    /* 3: each item lights, ticked */
    E.it.forEach(function(el,i){el.classList.toggle("on",s3>.1+i*.14)});
    E.tk.forEach(function(a,i){a[0].style.strokeDashoffset=(a[1]*(1-sm((s3-.1-i*.14)/.3))).toFixed(1)});
    op(E.lPack,b*seg(p,.08,.16)*(1-seg(p,.34,.4)));
    op(E.lCov,b*seg(p,.44,.5)*(1-seg(p,.6,.66)));
    op(E.lNew,b*seg(p,.74,.8));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
