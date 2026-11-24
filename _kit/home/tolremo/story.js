/* The story scene (BL/BY/DB): TOLREMO's mode of action (tolremo.com/ourapproach, "Mode of Action": "Cancer cells leverage
   transcriptional reprogramming to evade targeted therapy" / "TT125-802 blocks transcriptional reprogramming and stops
   early cancer drug resistance"), as ONE continuous scene kept on screen for all three steps: a cancer cell with an oncogene
   receptor in its membrane, the signal running to the nucleus, and in the nucleus a strand of DNA with the oncogene and
   three escape genes, CBP/p300 sitting on them. Step 1: a targeted drug docks on the receptor; the oncogene signal and its
   transcripts fade. Step 2: CBP/p300 lights up and switches on the escape genes; their transcripts stream out
   (transcriptional reprogramming, non-genetic resistance). Step 3: TT125-802 (lime) docks in the bromodomain pocket of
   CBP/p300; the escape genes go quiet. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
function wig(x,y0,y1,a,ph){var d="M"+x+" "+y0,n=Math.round(Math.abs(y1-y0)/3),i;for(i=1;i<=n;i++){var y=y0+(y1-y0)*i/n;d+="L"+(x+a*Math.sin(i*.9+ph)).toFixed(1)+" "+y.toFixed(1)}return d}
function tolScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* ---- base: the cell membrane, the nucleus and the DNA, engraved in with the section ---- */
  g+='<g id="scBase">';
  g+='<path class="mem sD" d="M70 240A330 205 0 1 1 730 240A330 205 0 1 1 70 240Z"/>';
  g+='<path class="mem2 sD" d="M80 240A320 195 0 1 1 720 240A320 195 0 1 1 80 240Z"/>';
  g+='<path class="nuc sD" d="M330 250A150 150 0 1 1 630 250A150 150 0 1 1 330 250Z"/>';
  var s1="M350 300",s2="M350 300";for(i=1;i<=52;i++){var x=350+i*5;s1+="L"+x+" "+(300+6*Math.sin(i*.5)).toFixed(1);s2+="L"+x+" "+(300-6*Math.sin(i*.5)).toFixed(1)}
  g+='<path class="dna sD" d="'+s1+'"/><path class="dna sD" d="'+s2+'"/>';
  g+='<text class="t" x="24" y="16">CANCER CELL · TRANSCRIPTION</text>';
  if(!mob){g+='<text class="t" x="364" y="336">ONCOGENE</text>';g+='<text class="t" x="476" y="214">CBP/p300</text>'}
  g+='</g>';
  /* ---- the oncogene receptor in the membrane, and its signal to the nucleus ---- */
  g+='<g id="scRc"><path class="rc" d="M114 240H58M58 240L40 224M58 240L40 256"/><circle class="rcd" cx="114" cy="240" r="3.5"/></g>';
  g+='<path id="scSig" class="sig" d="M118 240C210 240 250 286 330 286C352 286 366 286 382 290"/>';
  /* ---- genes on the DNA: the oncogene and three escape genes ---- */
  g+='<rect id="gOn" class="gn" x="372" y="293" width="40" height="14"/>';
  [470,515,560].forEach(function(x,k){g+='<rect class="ge" data-k="'+k+'" x="'+x+'" y="293" width="30" height="14"/>'});
  /* ---- transcripts: oncogene mRNA rises, escape mRNA streams down out of the escape genes ---- */
  g+='<g id="mOn">'+[384,400].map(function(x,k){return '<path class="mr" d="'+wig(x,288,206,2.6,k*1.7)+'"/>'}).join("")+'</g>';
  g+='<g id="mEs">'+[485,530,575].map(function(x,k){return '<path class="mr e" d="'+wig(x,312,(k==2?352:360),2.6,k*1.3)+'"/>'}).join("")+'</g>';
  /* ---- CBP/p300 with its bromodomain pocket (the notch at upper right) ---- */
  g+='<path id="cbp" class="cbp" d="M486 230H548V236Q548 244 556 244H568Q576 244 576 236V230H578Q588 230 588 240V266Q588 276 578 276H486Q476 276 476 266V240Q476 230 486 230Z"/>';
  /* ---- the targeted drug (enters from outside the cell to the receptor) and TT125-802 (to the pocket) ---- */
  g+='<g id="dTg"><path class="dt" d="M0 -9L9 0L0 9L-9 0Z"/></g>';
  g+='<g id="dTT"><path class="tt" d="M0 -8L7 -4V4L0 8L-7 4V-4Z"/><path class="ttb" d="M7 -4L15 -9"/></g>';
  /* ---- step captions, in the clear band under the cell ---- */
  g+='<g id="lb1"><text class="a" x="24" y="500">TARGETED THERAPY BLOCKS THE ONCOGENE</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="500">CBP/p300 SWITCHES ON ESCAPE GENES</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="500">TT125-802 BLOCKS THE BROMODOMAIN</text></g>';
  return g+'</svg>';
}
function scene(){return tolScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),rc:$("#scRc",svg),sig:$("#scSig",svg),gOn:$("#gOn",svg),ge:$$(".ge",svg),
    mOn:$("#mOn",svg),mEs:$$("#mEs .mr",svg),cbp:$("#cbp",svg),dTg:$("#dTg",svg),dTT:$("#dTT",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var mE=E.mEs.map(function(p){var L=p.getTotalLength();p.style.strokeDasharray=L+" "+L;return [p,L]});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function mv(el,x,y){el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")")}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var inn=seg(p,0,.12);
    /* step 1: the targeted drug comes in from outside the cell and docks on the receptor; the signal and oncogene transcripts fade */
    var d1=seg(p,.06,.22);
    mv(E.dTg,30,120+120*d1);op(E.dTg,b*seg(p,.05,.1));
    op(E.rc,b*inn*(1-.45*d1));
    var sigOn=inn*(1-.82*d1);op(E.sig,b*sigOn);E.sig.style.strokeDashoffset=(-p*260).toFixed(1);
    op(E.gOn,b*inn*(1-.6*d1));op(E.mOn,b*inn*(1-d1));
    /* step 2: CBP/p300 lights, escape genes switch on, escape transcripts stream out; step 3 TT125-802 docks and they go quiet */
    var es=seg(p,.34,.47),blk=seg(p,.69,.84);
    op(E.cbp,b*inn);E.cbp.classList.toggle("on",es>.5&&blk<.5);
    E.ge.forEach(function(r,k){var gi=Math.min(1,Math.max(0,es*1.6-k*.2));r.style.fillOpacity=(.08+.82*gi*(1-blk*.9)).toFixed(3);op(r,b*inn)});
    mE.forEach(function(a,k){var gi=Math.min(1,Math.max(0,es*1.6-k*.2));a[0].style.strokeDashoffset=(a[1]*(1-gi)).toFixed(1);op(a[0],b*(gi>0?1:0)*(1-blk))});
    mv(E.dTT,700+(562-700)*blk,60+(234-60)*blk);op(E.dTT,b*seg(p,.66,.71));
    op(E.l1,b*seg(p,.08,.16)*(1-seg(p,.3,.34)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.62,.66)));op(E.l3,b*seg(p,.74,.82));
  };
}
