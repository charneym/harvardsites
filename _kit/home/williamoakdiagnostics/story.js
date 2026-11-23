/* The story scene (BL/BY/DB): how William Oak's test runs, as ONE continuous fine-line elevation of their own device, drawn from
   their product render on williamoakdiagnostics.com (a white cassette with a moulded arrow, a result window of three strip rows,
   and a right-hand module with a collection cup, cap B, button C and slider A). Step 1: a fingertip gives a drop of capillary
   blood into the integrated collector. Step 2: one push of button C; the sample runs to the result window and wets the strips.
   Step 3: the deficiency-marker lines develop and the result goes to the patient's healthcare record. Driven by the scrubbed
   progress. Sources: williamoakdiagnostics.com home page (integrated blood collection, push of a button, low-volume capillary
   sample, automatic upload to patient healthcare records). Which internal part does what is not published, so nothing is labelled
   beyond what they say. */
var SCW=760,SCH=520,CPX=478,CPY=200,RW=[238,268,298],WX0=225,WX1=315;
function woRR(x,y,w,h,r){return 'M'+(x+r)+' '+y+'H'+(x+w-r)+'Q'+(x+w)+' '+y+' '+(x+w)+' '+(y+r)+'V'+(y+h-r)+'Q'+(x+w)+' '+(y+h)+' '+(x+w-r)+' '+(y+h)+'H'+(x+r)+'Q'+x+' '+(y+h)+' '+x+' '+(y+h-r)+'V'+(y+r)+'Q'+x+' '+y+' '+(x+r)+' '+y+'Z'}
function woScene(o){
  var g='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">',i;
  /* the cassette */
  g+='<g id="scDev"><path class="ct sD" d="M100 130H660Q700 130 700 170V400Q700 440 660 440H200C120 440 60 380 60 300V170Q60 130 100 130Z"/>';
  g+='<path class="ct2 sD" d="M108 142H652Q688 142 688 176V394Q688 428 652 428H204C130 428 72 372 72 300V176Q72 142 108 142Z"/>';
  g+='<path class="ar sD" d="M190 174H124M138 165L124 174L138 183"/>';
  g+='<path class="wn sD" d="'+woRR(195,205,150,150,16)+'"/><path class="st sD" d="M'+WX0+' 235H'+WX1+'V325H'+WX0+'Z"/>';
  for(i=0;i<3;i++)g+='<path class="wt" id="scW'+i+'" d="M'+WX1+' '+(RW[i]+1)+'H'+WX1+'V'+(RW[i]+25)+'H'+WX1+'Z"/>';
  g+='<path class="rs sD" d="M'+WX0+' 266H'+WX1+'M'+WX0+' 296H'+WX1+'"/>';
  g+='<g id="scCL">';for(i=0;i<3;i++)g+='<path class="tl" d="M252 '+(RW[i]+4)+'V'+(RW[i]+22)+'"/>';g+='</g>';
  for(i=0;i<3;i++)g+='<path class="tl" id="scT'+i+'" d="M290 '+(RW[i]+4)+'V'+(RW[i]+22)+'"/>';
  /* the module: collection cup, cap B, slider A, button C */
  g+='<path class="md sD" d="'+woRR(420,150,252,272,10)+'"/>';
  g+='<path class="ch" id="scCh" d="M'+CPX+' 232V281H318"/>';
  g+='<path class="md2 sD" d="'+woRR(446,244,74,160,4)+'"/><path class="md2 sD" d="M446 352H520"/>';
  g+='<circle class="wl sD" cx="'+CPX+'" cy="'+CPY+'" r="32"/><circle class="wl2 sD" cx="'+CPX+'" cy="'+CPY+'" r="20"/>';
  g+='<circle class="bl" id="scBl" cx="'+CPX+'" cy="'+CPY+'" r="0"/>';
  g+='<circle class="md2 sD" cx="592" cy="198" r="34"/>';
  g+='<path class="md2 sD" d="'+woRR(548,250,100,152,6)+'"/>';
  g+='<g id="scBtn"><ellipse class="bt sD" cx="598" cy="312" rx="34" ry="50"/><ellipse class="bt2" id="scBtnF" cx="598" cy="312" rx="27" ry="42"/></g>';
  g+='<text class="dv" x="592" y="208" text-anchor="middle">B</text><text class="dv" x="598" y="322" text-anchor="middle">C</text><text class="dv" x="483" y="388" text-anchor="middle">A</text>';
  g+='</g>';
  /* the patient record, top right, and the upload arc */
  g+='<g id="scRec"><path class="rc" d="M622 2H662L680 20V72H622Z"/><path class="rc2" d="M662 2V20H680M632 32H670M632 44H670M632 56H656"/></g>';
  g+='<path class="up" id="scUp" d="M300 128C330 44 520 22 612 40"/>';
  /* the fingertip and the drop */
  g+='<g id="scFg"><path class="fg" d="M'+(CPX-34)+' -60V96C'+(CPX-34)+' 150 '+(CPX+34)+' 150 '+(CPX+34)+' 96V-60"/><path class="fg2" d="M'+(CPX-16)+' 70C'+(CPX-6)+' 78 '+(CPX+6)+' 78 '+(CPX+16)+' 70M'+(CPX-34)+' 20H'+(CPX-24)+'M'+(CPX+24)+' 20H'+(CPX+34)+'"/></g>';
  g+='<path class="dp" id="scDp" d="M0 -12C4 -4 8 2 8 6A8 8 0 0 1 -8 6C-8 2 -4 -4 0 -12Z"/>';
  /* labels, each clear of every stroke */
  g+='<g id="lb1"><text x="408" y="64" class="a" text-anchor="end">CAPILLARY BLOOD</text><text class="t" x="408" y="90" text-anchor="end">INTEGRATED COLLECTION</text></g>';
  g+='<g id="lb2"><path class="ld" d="M598 366V458"/><text x="598" y="486" class="a" text-anchor="middle">ONE PUSH OF A BUTTON</text></g>';
  g+='<g id="lb3"><path class="ld" d="M270 360V458"/><text x="270" y="486" class="a" text-anchor="middle">DEFICIENCY MARKERS</text><text class="t" x="651" y="104" text-anchor="middle">PATIENT RECORD</text></g>';
  return g+'</svg>';
}
function scene(){return woScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scDev .sD"),fg:$("#scFg",svg),dp:$("#scDp",svg),bl:$("#scBl",svg),ch:$("#scCh",svg),up:$("#scUp",svg),rec:$("#scRec",svg),
    cl:$("#scCL",svg),bf:$("#scBtnF",svg),btn:$("#scBtn",svg),w:[0,1,2].map(function(i){return $("#scW"+i,svg)}),t:[0,1,2].map(function(i){return $("#scT"+i,svg)}),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var cL=E.ch.getTotalLength(),uL=E.up.getTotalLength();E.ch.style.strokeDasharray=cL+" "+cL;E.up.style.strokeDasharray=uL+" "+uL;
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    /* step 1: the finger is over the cup from the first frame; a drop forms, falls in, the cup fills; the finger lifts away */
    var form=sm2(seg(p,.04,.12)),fall=seg(p,.12,.2),fill=sm2(seg(p,.19,.27)),lift=sm2(seg(p,.29,.38));
    E.fg.setAttribute("transform","translate(0 "+(4-200*lift).toFixed(1)+")");op(E.fg,b*(1-lift));
    var dy=158+(CPY-158)*fall*fall;
    E.dp.setAttribute("transform","translate("+CPX+" "+dy.toFixed(1)+") scale("+(.3+.7*form).toFixed(3)+")");op(E.dp,b*form*(fall<1?1:0));
    E.bl.setAttribute("r",(20*fill).toFixed(1));
    /* step 2: button C goes in; the sample runs to the window and wets the three rows from the right; the control lines show */
    var push=sm2(seg(p,.4,.47))*(1-.35*sm2(seg(p,.5,.56))),run=sm2(seg(p,.46,.56)),wet=sm2(seg(p,.54,.66));
    E.btn.setAttribute("transform","translate(598 312) scale("+(1-.05*push).toFixed(4)+") translate(-598 -312)");op(E.bf,b*push);
    E.ch.style.strokeDashoffset=(cL*(1-run)).toFixed(1);op(E.ch,b*(1-.55*seg(p,.62,.7)));
    E.w.forEach(function(el,i){var x=WX1-(WX1-WX0)*Math.max(0,Math.min(1,wet*1.12-i*.06));el.setAttribute("d","M"+WX1+" "+(RW[i]+1)+"H"+x.toFixed(1)+"V"+(RW[i]+25)+"H"+WX1+"Z")});
    op(E.cl,b*seg(p,.6,.66));
    /* step 3: the marker lines develop row by row, then the result travels to the patient record (the arc always reaches it) */
    E.t.forEach(function(el,i){op(el,b*sm2(seg(p,.7+i*.03,.76+i*.03)))});
    var up=sm2(seg(p,.8,.9));E.up.style.strokeDashoffset=(uL*(1-up)).toFixed(1);op(E.up,b*(up>0?1:0));op(E.rec,b*seg(p,.76,.82));
    op(E.l1,b*seg(p,.08,.14)*(1-seg(p,.32,.37)));op(E.l2,b*seg(p,.44,.5)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.82,.88));
  };
}
function sm2(x){return x*x*(3-2*x)}
