/* The story scene (BL/BY/DB): how a NeuroVEP test works (neurofieldz.com Technology; Versek et al., Eye and Brain 2021),
   as ONE continuous fine-line scene: a head in profile wearing the headset, with the visual pathway inside (eye, optic
   nerve, chiasm, thalamus, optic radiation, visual cortex at the back of the head), the NeuroDot sensor over the visual
   cortex, the stimulus screen and the evoked-potential readout.
   Step 1 (stimulus): the screen shows a reversing checkerboard to the eye.
   Step 2 (response): the signal runs along the visual pathway to the visual cortex, where the NeuroDot records it.
   Step 3 (analysis): the sensor streams wirelessly; the evoked waveform (N75, P100, N135) draws for each eye.
   Schematic. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=468;
var HEAD="M386 452C394 404 440 376 452 322C470 244 454 132 382 84C322 44 222 40 162 78C114 108 94 150 98 192L72 246C68 254 72 260 82 261L96 263L91 283L100 289L94 300C92 328 108 342 140 338L182 334C198 360 202 404 198 452";
var BRAIN="M168 128C200 86 300 72 372 104C430 130 452 196 440 252C432 290 404 300 372 296C340 318 290 312 262 296C232 308 196 300 178 276C150 250 142 206 150 172C152 156 158 140 168 128Z";
var GYRI=["M200 120C214 150 206 176 224 196","M252 96C262 132 250 160 268 190","M306 92C312 128 300 156 318 184","M356 108C350 140 372 160 362 196","M404 140C392 168 414 196 402 228","M190 210C214 226 240 222 262 240","M300 214C322 230 352 226 376 246","M188 254C214 262 236 260 254 274"];
var PATH="M132 204C150 210 176 218 204 226C236 236 262 238 292 236C330 232 360 238 388 246C408 252 424 256 438 258";
var VEP=function(x0,y0,w,a){var pts=[[0,0],[.14,0],[.2,-.06],[.29,-.5],[.4,1],[.53,-.62],[.64,.14],[.76,-.05],[.86,0],[1,0]];
  var d="M"+x0+" "+y0;for(var i=1;i<pts.length;i++){var p0=pts[i-1],p1=pts[i],xm=(p0[0]+p1[0])/2;
    d+="C"+(x0+xm*w).toFixed(1)+" "+(y0-p0[1]*a).toFixed(1)+" "+(x0+xm*w).toFixed(1)+" "+(y0-p1[1]*a).toFixed(1)+" "+(x0+p1[0]*w).toFixed(1)+" "+(y0-p1[1]*a).toFixed(1)}return d};
function vepScene(o){
  var g='',i,j,m=o.mob;
  g+='<svg class="'+(m?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<path class="sk sD" d="'+HEAD+'"/>';
  g+='<path class="bm sD" d="'+BRAIN+'"/>';
  GYRI.forEach(function(d){g+='<path class="cg sD" d="'+d+'"/>'});
  /* the eye, in profile */
  g+='<path class="sk sD" d="M106 202C114 192 126 190 136 198C128 210 116 212 106 202Z"/><circle class="cn" cx="122" cy="201" r="3.2"/>';
  /* headset: visor over the eyes, strap round to the sensor pod over the visual cortex */
  g+='<path class="hs sD" d="M60 158H176V244H60Z"/><path class="hs2 sD" d="M66 166V236"/>';
  g+='<path class="hs3 sD" d="M176 176C268 166 384 196 448 246"/>';
  g+='<path class="pod sD" d="M448 236H470V286H448Z"/>';
  for(j=0;j<5;j++)g+='<path class="cg2" d="M448 '+(244+j*9)+'h-6"/>';
  /* the stimulus screen inside the visor (reversing checkerboard) */
  g+='<g id="scChk">';for(i=0;i<4;i++)for(j=0;j<5;j++)g+='<rect class="ck'+((i+j)%2)+'" x="'+(70+i*4.5)+'" y="'+(176+j*10.4)+'" width="4.5" height="10.4"/>';g+='</g>';
  g+='<text class="t" x="'+(m?14:20)+'" y="'+(m?140:144)+'">HEADSET</text>';
  g+='<text class="t" x="'+(m?318:300)+'" y="'+(m?338:334)+'">'+(m?'CORTEX':'VISUAL CORTEX')+'</text>';
  g+='<text class="t" x="222" y="'+(m?272:264)+'">'+(m?'OPTIC NERVE':'OPTIC PATHWAY')+'</text>';
  g+='<text class="t" x="'+(m?458:466)+'" y="'+(m?352:344)+'">NEURODOT</text>';
  /* readout panel */
  g+='<path class="cg sD" d="M520 96H744V318H520Z"/>';
  g+='<path class="bm sD" d="M536 186H732M536 280H732"/>';
  g+='<text class="t" x="536" y="'+(m?118:120)+'">LEFT EYE</text><text class="t" x="536" y="'+(m?226:222)+'">RIGHT EYE</text>';
  g+='<text class="t" x="'+(m?638:672)+'" y="'+(m?310:306)+'">0–300 MS</text>';
  g+='</g>';
  /* light from the screen into the eye */
  g+='<g id="scRay">';for(i=0;i<3;i++)g+='<path class="ry" d="M88 '+(186+i*14)+'L106 '+(196+i*4)+'"/>';g+='</g>';
  /* the signal along the visual pathway */
  g+='<path id="scPath" class="pw" d="'+PATH+'"/>';
  g+='<circle id="scPulse" class="pl" r="5" cx="132" cy="204"/>';
  g+='<ellipse id="scCtx" class="cx" cx="428" cy="256" rx="26" ry="34"/>';
  g+='<circle id="scLed" class="led" cx="459" cy="244" r="3"/>';
  /* wireless stream to the readout */
  g+='<g id="scWf">';for(i=0;i<3;i++)g+='<path class="wf" d="M'+(478+i*10)+' '+(242-i*8)+'a'+(14+i*10)+' '+(14+i*10)+' 0 0 1 0 '+(40+i*16)+'"/>';g+='</g>';
  /* the evoked waveforms */
  var A1=m?28:34,B1=170,A2=m?26:30,B2=268;
  g+='<path id="scT1" class="tr" d="'+VEP(536,B1,196,A1)+'"/><path id="scT2" class="tr" d="'+VEP(536,B2,196,A2)+'"/>';
  g+='<g id="scPk"><text class="a pk" x="'+(536+.29*196-(m?40:30))+'" y="'+(B1+.5*A1+(m?16:13))+'">N75</text><text class="a pk" x="'+(536+.4*196+8)+'" y="'+(B1-A1+(m?4:6))+'">P100</text>'+
     '<text class="a pk" x="'+(536+.53*196+8)+'" y="'+(B1+.62*A1+(m?12:10))+'">N135</text></g>';
  var ly=SCH-10;
  g+='<g id="lb1"><text class="a" x="20" y="'+ly+'">'+(m?'STIMULUS · ONE EYE AT A TIME':'STIMULUS · A REVERSING CHECKERBOARD, ONE EYE AT A TIME')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+ly+'">'+(m?'RESPONSE · RECORDED AT THE CORTEX':'RESPONSE · THE VISUAL CORTEX ANSWERS, THE NEURODOT RECORDS')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+ly+'">'+(m?'ANALYSIS · THE EVOKED WAVEFORM':'ANALYSIS · THE EVOKED WAVEFORM, EYE BY EYE')+'</text></g>';
  return g+'</svg>';
}
function scene(){return vepScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text,#scBase .cn,#scBase .cg2,#scChk",svg),
    ck:$$("#scChk rect",svg),ray:$$("#scRay .ry",svg),path:dl("#scPath")[0],pulse:$("#scPulse",svg),ctx:$("#scCtx",svg),led:$("#scLed",svg),
    wf:$$("#scWf .wf",svg),t1:dl("#scT1")[0],t2:dl("#scT2")[0],pk:$("#scPk",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var st=seg(p,.02,.12),flip=Math.floor(p*48)%2,sig=seg(p,.34,.58),rec=seg(p,.5,.64),wl=seg(p,.66,.74),tr=seg(p,.7,.9);
    E.ck.forEach(function(r,k){var c=(k%5+Math.floor(k/5))%2;r.setAttribute("class","ck"+(st>.5&&p<.95?(c^flip):c))});
    E.ray.forEach(function(el,i){op(el,b*st*(1-seg(p,.36,.46))*(.6+.4*((i+flip)%2)))});
    var P=E.path[0],L=E.path[1];P.style.strokeDashoffset=(L*(1-sig)).toFixed(1);op(P,b*(sig>0?1:0));
    var pt=P.getPointAtLength(L*sig);E.pulse.setAttribute("cx",pt.x.toFixed(1));E.pulse.setAttribute("cy",pt.y.toFixed(1));
    op(E.pulse,b*sm(sig*6)*(1-seg(p,.58,.64)));
    op(E.ctx,b*rec*(.55+.25*Math.sin(p*40)));
    op(E.led,b*(rec>.5?1:.25));
    E.wf.forEach(function(el,i){op(el,b*wl*(.4+.6*((Math.floor(p*30)+i)%3===0?1:.5)))});
    E.t1[0].style.strokeDashoffset=(E.t1[1]*(1-tr)).toFixed(1);E.t2[0].style.strokeDashoffset=(E.t2[1]*(1-seg(p,.74,.94))).toFixed(1);
    op(E.t1[0],b*(tr>0?1:0));op(E.t2[0],b*(tr>0?1:0));
    op(E.pk,b*seg(p,.84,.92));
    op(E.l1,b*seg(p,.04,.12)*(1-seg(p,.28,.34)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.6,.66)));op(E.l3,b*seg(p,.72,.8));
  };
}
