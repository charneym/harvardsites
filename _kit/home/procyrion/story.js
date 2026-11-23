/* The story scene (DB/BL/BY): Aortix's mechanism of action as ONE continuous fine-line drawing that fills the frame
   (procyrion.com, Home "Mechanism of Action" A-D and Overview): the heart and aortic root, the aortic arch, the
   descending thoracic aorta with the Aortix pump in place, the renal arteries and both kidneys. Frame 0 is complete.
   Step 1 (inlet): a portion of the native flow enters the pump at the inlet.
   Step 2 (jets): the flow is accelerated and exits in high-velocity jets directed downstream.
   Step 3 (entrain): the jets entrain the native flow, transferring momentum; net aortic flow increases.
   Step 4 (perfuse): pressure falls at the aortic root and rises in the lower aorta; the kidneys are perfused.
   Labels sit in open space with leaders that stop 8px short of the text (DR3). Driven by the scrubbed progress. */
var SCW=760,SCH=560;
var AO_O="M168 184C160 84 240 30 340 30C440 30 490 72 490 142L490 540";
var AO_I="M232 186C230 122 272 90 340 90C402 90 430 112 430 152L430 540";
var HEART="M168 186C130 184 108 210 112 248C116 286 142 314 178 340C212 314 244 284 252 248C258 216 248 194 232 188";
var KL="M330 392C296 392 284 424 286 444C288 470 302 492 330 490C350 488 360 474 356 460C352 450 352 438 356 428C362 412 356 392 330 392Z";
var KR="M590 392C624 392 636 424 634 444C632 470 618 492 590 490C570 488 560 474 564 460C568 450 568 438 564 428C558 412 564 392 590 392Z";
var RA="M430 424L357 424M430 436L357 436M490 424L563 424M490 436L563 436";
var BR="M290 37L286 8M304 33L302 8M336 30L336 6M350 30L350 6M378 32L382 8M392 35L398 10";
/* the pump: inlet struts, body, outlet, catheter */
var PS="M460 196C452 184 440 176 434 160M460 196C468 184 480 176 486 160";
var PB="M454 196L454 336Q454 346 460 350Q466 346 466 336L466 196Q466 184 460 182Q454 184 454 196Z";
var POUT="M454 246L466 246M454 256L466 256";
var PIN="M456 204L456 220M464 204L464 220";
var CATH="M460 350L460 540";
/* guide paths for the moving flow */
var GA="M200 186C196 112 262 60 340 60C420 60 460 92 460 150";
var GS=[[438,.42],[446,.8],[474,.8],[482,.42]];
var GJ=["M454 252C446 262 440 284 440 330L440 540","M466 252C474 262 480 284 480 330L480 540","M455 258C450 280 449 310 449 540","M465 258C470 280 471 310 471 540"];
var GR=["M430 430L360 430","M490 430L560 430"];
var NA=9,NN=9,NJ=8,NR=6;
function storyScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><linearGradient id="aoFade" gradientUnits="userSpaceOnUse" x1="0" y1="470" x2="0" y2="548"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>'+
     '<mask id="aoMask" maskUnits="userSpaceOnUse" x="0" y="0" width="760" height="560"><rect x="0" y="0" width="760" height="470" fill="#fff"/><rect x="0" y="470" width="760" height="90" fill="url(#aoFade)"/></mask>'+
     '<radialGradient id="kglow"><stop offset="0" stop-color="#ee6073" stop-opacity=".42"/><stop offset="1" stop-color="#ee6073" stop-opacity="0"/></radialGradient></defs>';
  g+='<path class="kf" id="kfl" d="'+KL+'"/><path class="kf" id="kfr" d="'+KR+'"/>';
  g+='<circle class="halo" id="kh1" cx="324" cy="440" r="90" fill="url(#kglow)"/><circle class="halo" id="kh2" cx="596" cy="440" r="90" fill="url(#kglow)"/>';
  g+='<path class="hf" id="hf" d="'+HEART+'Z"/>';
  g+='<g id="scBase">';
  g+='<g mask="url(#aoMask)"><path class="wl sD" d="'+AO_O+'"/><path class="wl sD" d="'+AO_I+'"/><path class="wo sD" d="'+CATH+'"/></g>';
  g+='<path class="wo sD" d="'+BR+'"/>';
  g+='<path class="wmd sD" d="'+HEART+'"/>';
  g+='<path class="wmd sD" d="'+KL+'"/><path class="wmd sD" d="'+KR+'"/><path class="wo sD" d="'+RA+'"/>';
  g+='<path class="pm sD" d="'+PS+'"/><path class="pm sD" d="'+PB+'"/><path class="wo sD" d="'+POUT+'"/><path class="wo sD" d="'+PIN+'"/>';
  g+='</g>';
  g+='<path class="pin" id="pinl" d="M454 202L466 202L466 222L454 222Z"/><path class="pout" id="poutl" d="M454 246L466 246L466 256L454 256Z"/>';
  /* guides (invisible) */
  g+='<path id="gA" class="gd" d="'+GA+'"/>';
  GS.forEach(function(s,k){g+='<path id="gS'+k+'" class="gd" d="M'+s[0]+' 150L'+s[0]+' 540"/>'});
  g+='<path id="gC" class="gd" d="M460 150L460 204"/>';
  GJ.forEach(function(d,k){g+='<path id="gJ'+k+'" class="gd" d="'+d+'"/>'});
  GR.forEach(function(d,k){g+='<path id="gR'+k+'" class="gd" d="'+d+'"/>'});
  g+='<g id="fa">';for(i=0;i<NA;i++)g+='<circle class="nf" r="2.4"/>';g+='</g>';
  g+='<g id="fs">';for(var k=0;k<GS.length;k++)for(i=0;i<NN;i++)g+='<circle class="nf" r="2.2" data-s="'+k+'"/>';g+='</g>';
  g+='<g id="fc">';for(i=0;i<5;i++)g+='<circle class="jf" r="2.4"/>';g+='</g>';
  g+='<g id="fj">';for(var j=0;j<GJ.length;j++)for(i=0;i<NJ;i++)g+='<circle class="jf" r="2" data-s="'+j+'"/>';g+='</g>';
  g+='<g id="fr">';for(var r=0;r<GR.length;r++)for(i=0;i<NR;i++)g+='<circle class="jf" r="2.4" data-s="'+r+'"/>';g+='</g>';
  /* labels */
  if(!mob){
    g+='<g id="lHe"><path class="ld" d="M114 270L80 292"/><text class="t" x="30" y="308">HEART</text></g>';
    g+='<g id="lRo"><text class="t" x="248" y="164">AORTIC ROOT</text></g>';
    g+='<g id="lAo"><text class="t" x="512" y="132">DESCENDING AORTA</text></g>';
    g+='<g id="lPu"><path class="ld" d="M470 300L504 300"/><text class="t" x="512" y="304">AORTIX PUMP</text></g>';
    g+='<g id="lKi"><text class="t" x="290" y="516">KIDNEY</text><text class="t" x="566" y="516">KIDNEY</text></g>';
    g+='<g id="lIn"><path class="ld" d="M448 206L420 206"/><text class="t a2" x="412" y="210" text-anchor="end">INLET</text></g>';
    g+='<g id="lJe"><path class="ld" d="M450 252L420 252"/><text class="t a2" x="412" y="256" text-anchor="end">JETS</text></g>';
    g+='<g id="lEn"><path class="ld" d="M486 360L504 360"/><text class="t a2" x="512" y="364">ENTRAINED FLOW</text></g>';
    g+='<g id="lRp"><text class="t a2" x="248" y="182">PRESSURE ↓</text></g>';
    g+='<g id="lKp"><text class="t a2" x="560" y="374">PERFUSION ↑</text></g>';
  }else{
    g+='<g id="lHe"><text class="t" x="118" y="380">HEART</text></g>';
    g+='<g id="lRo"></g><g id="lAo"></g>';
    g+='<g id="lPu"><path class="ld" d="M470 300L500 300"/><text class="t" x="508" y="305">AORTIX</text></g>';
    g+='<g id="lKi"></g>';
    g+='<g id="lIn"><path class="ld" d="M448 206L420 206"/><text class="t a2" x="412" y="211" text-anchor="end">INLET</text></g>';
    g+='<g id="lJe"><path class="ld" d="M450 252L420 252"/><text class="t a2" x="412" y="257" text-anchor="end">JETS</text></g>';
    g+='<g id="lEn"></g>';
    g+='<g id="lRp"></g>';
    g+='<g id="lKp"><text class="t a2" x="572" y="364">KIDNEYS</text></g>';
  }
  var ly=SCH-6,lx=mob?24:20;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'FLOW ENTERS THE INLET':'A PORTION OF THE NATIVE FLOW ENTERS THE INLET')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'HIGH-VELOCITY JETS':'ACCELERATED · HIGH-VELOCITY JETS DOWNSTREAM')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'NATIVE FLOW ENTRAINED':'JETS ENTRAIN THE NATIVE FLOW · AORTIC FLOW UP')+'</text></g>';
  g+='<g id="lb4"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'KIDNEYS PERFUSED':'ROOT PRESSURE DOWN · RENAL PERFUSION UP')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  function guide(id){var p=$("#"+id,svg);return {p:p,L:p.getTotalLength()}}
  var gA=guide("gA"),gC=guide("gC"),gS=GS.map(function(s,k){return guide("gS"+k)}),gJ=GJ.map(function(d,k){return guide("gJ"+k)}),gR=GR.map(function(d,k){return guide("gR"+k)});
  var E={base:dl("#scBase .sD"),fa:$$("#fa circle",svg),fs:$$("#fs circle",svg),fc:$$("#fc circle",svg),fj:$$("#fj circle",svg),fr:$$("#fr circle",svg),
    kfl:$("#kfl",svg),kfr:$("#kfr",svg),kh1:$("#kh1",svg),kh2:$("#kh2",svg),hf:$("#hf",svg),pin:$("#pinl",svg),pout:$("#poutl",svg),
    lHe:$("#lHe",svg),lRo:$("#lRo",svg),lAo:$("#lAo",svg),lPu:$("#lPu",svg),lKi:$("#lKi",svg),lIn:$("#lIn",svg),lJe:$("#lJe",svg),lEn:$("#lEn",svg),lRp:$("#lRp",svg),lKp:$("#lKp",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function put(el,G,f){var q=G.p.getPointAtLength(G.L*f);el.setAttribute("cx",q.x.toFixed(1));el.setAttribute("cy",q.y.toFixed(1));return q}
  function yfade(y){return Math.max(0,Math.min(1,(540-y)/70))}
  function mix(a,b2,t){return "rgb("+a.map(function(v,i){return Math.round(v+(b2[i]-v)*t)}).join(",")+")"}
  var BONE=[214,216,216],RED=[238,96,115];
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.02,.2),s2=seg(p,.27,.45),s3=seg(p,.52,.72),s4=seg(p,.77,.95);
    /* the native flow: steady from the start, faster below the outlet once entrained (continuous in p) */
    var ph=p*3,phE=p*3+7*Math.max(0,p-.5);
    E.fa.forEach(function(el,i){var f=((i/NA)+ph*.8)%1;put(el,gA,f);op(el,b*.75*Math.min(1,f*6)*Math.min(1,(1-f)*5))});
    E.fs.forEach(function(el,n){var k=+el.getAttribute("data-s"),i=n%NN,f=((i/NN)+(k%2?.5/NN:0)+ph*.55)%1;
      var q=gS[k].p.getPointAtLength(gS[k].L*f);var below=q.y>262?1:0,ent=below*s3;
      if(below&&s3>0){f=((i/NN)+(k%2?.5/NN:0)+phE*.55)%1;q=put(el,gS[k],f)}else put(el,gS[k],f);
      var st=Math.min(1,f*8);el.style.fill=mix(BONE,RED,ent*(q.y>262?1:0));
      op(el,b*(.7+.3*ent)*st*yfade(q.y))});
    /* 1. a share of the flow enters the inlet */
    var on1=seg(p,.03,.12);
    E.fc.forEach(function(el,i){var f=((i/5)+p*6)%1;put(el,gC,f);op(el,b*on1*Math.min(1,f*5)*Math.min(1,(1-f)*5))});
    op(E.pin,b*on1*.9);op(E.lIn,b*seg(p,.05,.14)*(1-seg(p,.46,.52)));
    /* 2. accelerated, out as high-velocity jets */
    var on2=seg(p,.27,.36);
    E.fj.forEach(function(el,n){var k=+el.getAttribute("data-s"),i=n%NJ,f=((i/NJ)+p*11)%1;var q=put(el,gJ[k],f*.62);op(el,b*on2*Math.min(1,f*6)*Math.min(1,(1-f)*3)*yfade(q.y))});
    op(E.pout,b*on2);op(E.lJe,b*seg(p,.29,.38)*(1-seg(p,.72,.77)));
    /* 3. entrainment */
    op(E.lEn,b*seg(p,.55,.63)*(1-seg(p,.73,.77)));
    /* 4. root pressure down, kidneys perfused */
    var on4=seg(p,.78,.88);
    E.fr.forEach(function(el,n){var k=+el.getAttribute("data-s"),i=n%NR,f=((i/NR)+p*8)%1;put(el,gR[k],f);op(el,b*on4*Math.min(1,f*5)*Math.min(1,(1-f)*4))});
    op(E.kfl,b*s4);op(E.kfr,b*s4);op(E.kh1,b*s4);op(E.kh2,b*s4);op(E.hf,b*s4*.6);
    op(E.lRp,b*seg(p,.8,.88));op(E.lKp,b*seg(p,.82,.9));
    op(E.lHe,b);op(E.lRo,b);op(E.lAo,b);op(E.lPu,b);op(E.lKi,b);
    op(E.l1,b*seg(p,.03,.1)*(1-seg(p,.22,.27)));op(E.l2,b*seg(p,.29,.36)*(1-seg(p,.47,.52)));op(E.l3,b*seg(p,.54,.6)*(1-seg(p,.72,.77)));op(E.l4,b*seg(p,.8,.87));
  };
}
