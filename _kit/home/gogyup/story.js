/* The story scene (DB/BL): how GogyUp works, in gogyup.com's own three steps ("Quick Conversion: send your existing print
   or digital documents to your GogyUp account"; "Instantly Accessible: converts your content into interactive information
   ... available to mobile devices and the Web"; "Deeper Understanding: an in-pocket tutor ... GogyUp then provides progress
   data to validate comprehension"), drawn as ONE continuous fine-line scene that fills the frame: a printed work
   instruction on the left, the GogyUp Reader on a phone on the right. Frame 0 is already complete.
   Step 1 (convert): lines of the document travel along an arc into the phone.
   Step 2 (access): the phone fills with the text in phrase-by-phrase formatting; a word is tapped and its card opens
   (speaker, definition, translation).
   Step 3 (understand): a no-fail comprehension check is answered, and the document gives way to the progress report.
   Labels sit outside every stroke with >=8px clear space, and never cross-fade over each other (DR). */
var SCW=760,SCH=560;
function rrect(x,y,w,h,r){return "M"+(x+r)+" "+y+"H"+(x+w-r)+"Q"+(x+w)+" "+y+" "+(x+w)+" "+(y+r)+"V"+(y+h-r)+"Q"+(x+w)+" "+(y+h)+" "+(x+w-r)+" "+(y+h)+"H"+(x+r)+"Q"+x+" "+(y+h)+" "+x+" "+(y+h-r)+"V"+(y+r)+"Q"+x+" "+y+" "+(x+r)+" "+y+"Z"}
var DOC="M40 70H246L270 94V400H40Z",FOLD="M246 70V94H270";
var DLN=[150,178,132,170,184,120,162,176,140,168,110,174,150];
var PH=rrect(392,40,196,448,30),SCR=rrect(404,52,172,424,20),HDR="M404 94H576";
var ARC="M284 232C318 196 350 196 380 226",ARH="M370 220L381 227L369 233";
/* reader lines on the phone screen, as phrase chunks [x1,x2,y] */
var RL=[[456,548,118],[420,520,136],[420,546,248],[420,500,266],[420,532,292],[420,488,310]];
var BARS=[[80,58],[116,86],[152,112],[188,138],[224,164]];
function storyScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'28 30 572 510':'20 24 740 530')+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="'+DOC+'"/><path class="wo sD" d="'+FOLD+'"/>';
  g+='<path class="wl sD" d="'+PH+'"/><path class="wo sD" d="'+SCR+'"/><path class="wo sD" d="'+HDR+'"/>';
  g+='</g>';
  g+='<g id="scDoc"><path class="tx h" d="M64 104H190"/>';
  DLN.forEach(function(L,k){g+='<path class="tx" d="M64 '+(136+k*20)+'H'+(64+L)+'"/>'});g+='</g>';
  g+='<circle class="wo" cx="490" cy="70" r="4"/>';
  g+='<g id="scArc" class="op0"><path class="am" d="'+ARC+'"/><path class="ar" d="'+ARH+'"/></g>';
  g+='<g id="scFly">';for(i=0;i<6;i++)g+='<path class="tx h dr" d="M0 0H22"/>';g+='</g>';
  /* the reader: phrase lines, the tapped word, its card */
  g+='<g id="scRead">';RL.forEach(function(l){g+='<path class="sl rl op0" d="M'+l[0]+' '+l[2]+'H'+l[1]+'"/>'});g+='</g>';
  g+='<g id="scHl" class="op0"><rect class="hl" x="416" y="110" width="34" height="16"/></g>';
  g+='<g id="scCard" class="op0"><path class="card" d="M418 158H428L434 150L440 158H562V232H418Z"/><circle class="spk" cx="436" cy="176" r="8"/><path class="sl" d="M452 176H512"/>'+
     '<path class="tx" d="M430 196H546"/><path class="tx" d="M430 208H512"/><path class="wo" d="M430 220H448"/><path class="tx" d="M456 222H500"/></g>';
  /* the comprehension check */
  g+='<g id="scQ" class="op0"><path class="wo" d="M404 360H576"/><path class="sl" d="M420 382H548"/><path class="tx" d="M420 398H520"/>'+
     '<rect id="bOk" class="bno" x="420" y="416" width="70" height="30"/><rect class="bno" x="498" y="416" width="62" height="30"/>'+
     '<path id="cMk" class="ck" d="M444 431L452 438L466 424"/></g>';
  /* the progress report, in place of the document */
  g+='<g id="scRep" class="op0"><path class="ax" d="M66 340H250M66 340V140"/>';
  BARS.forEach(function(b){g+='<rect class="br" x="'+b[0]+'" y="'+(340-b[1])+'" width="22" height="'+b[1]+'"/>'});
  g+='<path class="tr" d="M91 268L127 240L163 214L199 188L235 162"/></g>';
  if(!mob){
    g+='<g id="lDoc"><text class="t" x="155" y="432" text-anchor="middle">YOUR DOCUMENT</text></g>';
    g+='<g id="lRep" class="op0"><text class="t" x="155" y="432" text-anchor="middle">PROGRESS DATA</text></g>';
    g+='<g id="lTap" class="op0"><path class="ld" d="M592 118H600"/><text class="t" x="606" y="122">TAP ANY WORD</text></g>';
    g+='<g id="lCard" class="op0"><path class="ld" d="M592 180H600"/><text class="t" x="606" y="184">HEAR IT</text><text class="t" x="606" y="200">DEFINE IT</text><text class="t" x="606" y="216">TRANSLATE IT</text></g>';
    g+='<g id="lChk" class="op0"><path class="ld" d="M592 431H600"/><text class="t" x="606" y="435">NO-FAIL CHECK</text></g>';
  }else{
    g+='<g id="lDoc"><text class="t" x="155" y="436" text-anchor="middle">YOUR DOCUMENT</text></g>';
    g+='<g id="lRep" class="op0"><text class="t" x="155" y="436" text-anchor="middle">PROGRESS DATA</text></g>';
    g+='<g id="lTap"></g><g id="lCard"></g><g id="lChk"></g>';
  }
  var ly=mob?528:540,lx=40;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'SEND YOUR DOCUMENTS':'SEND YOUR EXISTING DOCUMENTS TO YOUR GOGYUP ACCOUNT')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'TAP ANY WORD FOR HELP':'INTERACTIVE ON MOBILE DEVICES AND THE WEB')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'COMPREHENSION, VERIFIED':'PROGRESS DATA VALIDATES COMPREHENSION')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),doc:$("#scDoc",svg),arc:$("#scArc",svg),fly:$$("#scFly .dr",svg),rl:$$("#scRead .rl",svg),
    hl:$("#scHl",svg),card:$("#scCard",svg),q:$("#scQ",svg),ok:$("#bOk",svg),ck:$("#cMk",svg),rep:$("#scRep",svg),
    bars:$$("#scRep .br",svg),lDoc:$("#lDoc",svg),lRep:$("#lRep",svg),lTap:$("#lTap",svg),lCard:$("#lCard",svg),lChk:$("#lChk",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var CKL=E.ck.getTotalLength();E.ck.style.strokeDasharray=CKL+" "+CKL;
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  /* a point on the arc (cubic) */
  function arc(t){var u=1-t;return [u*u*u*284+3*u*u*t*318+3*u*t*t*350+t*t*t*380,u*u*u*232+3*u*u*t*196+3*u*t*t*196+t*t*t*226]}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.32);
    /* 1. lines of the document travel along the arc into the phone */
    op(E.arc,b*seg(p,.04,.12)*(1-seg(p,.34,.42)));
    E.fly.forEach(function(el,i){var f=sm((s1-i*.1)/.5),q=arc(f);el.setAttribute("transform","translate("+(q[0]-11).toFixed(1)+" "+q[1].toFixed(1)+")");
      op(el,b*(f>0&&f<1?Math.min(1,f*5,(1-f)*5):0))});
    /* 2. the reader fills, a word is tapped, its card opens */
    E.rl.forEach(function(el,i){op(el,b*seg(p,.2+i*.025,.3+i*.025))});
    op(E.hl,b*seg(p,.4,.46));op(E.card,b*seg(p,.46,.54));
    op(E.lTap,b*seg(p,.42,.5));op(E.lCard,b*seg(p,.5,.58));
    /* 3. the check is answered; the document gives way to the progress report (labels swap, never overlap) */
    op(E.q,b*seg(p,.66,.74));
    var a=seg(p,.76,.82);E.ok.setAttribute("class",a>.5?"bok":"bno");E.ck.style.strokeDashoffset=(CKL*(1-a)).toFixed(1);
    op(E.lChk,b*seg(p,.74,.8));
    op(E.doc,b*(1-seg(p,.7,.78)));op(E.lDoc,b*(1-seg(p,.68,.73)));
    op(E.rep,b*seg(p,.78,.84));op(E.lRep,b*seg(p,.8,.86));
    E.bars.forEach(function(el,i){var f=seg(p,.8+i*.02,.88+i*.02);el.style.transformBox="fill-box";el.style.transformOrigin="50% 100%";el.style.transform="scaleY("+f.toFixed(3)+")"});
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
