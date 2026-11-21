/* The story scene (BL/BY/DB/CX): Gryphon's idea, drawn as ONE continuous engraved scene that stays on screen for all three
   steps. Top left: a brain in side view, cerebrum, cerebellum and stem, with an injury site. Below it a blood vessel runs
   to a blood collection tube on the right. Along the bottom, the biomarker time course: GFAP rising and falling early, NfL
   later and longer, over hours, days and months. Step 1 the brain engraves in and proteins shed from the injury. Step 2
   they travel down into the vessel and along it into the tube. Step 3 the tube fills and the two waves are read out.
   Sources: gryphonbio.com ("waves of 1000s of brain molecules in the blood"), NIH RePORTER 1R44NS117221-01A1 (GFAP,
   UCH-L1, NF, Tau released by injured cells) and the 2026 medRxiv pilot (GFAP and NfL). */
var SCW=760,SCH=520,VY=300,TBX=630;
var MOLS=(function(){var a=[],i,n=16;for(i=0;i<n;i++){var ang=i*2.399;a.push({k:i%3,sx:150+Math.cos(ang)*(14+(i*7)%30),sy:104+Math.sin(ang)*(10+(i*5)%22),d:(i%6)*.045,lane:((i%3)-1)*5,tx:TBX-13+((i*37)%26),ty:240+((i*53)%74)})}return a})();
function molD(k){if(k===0)return 'M0 -4.6A4.6 4.6 0 1 1 0 4.6A4.6 4.6 0 1 1 0 -4.6Z';if(k===1){var g='',i;for(i=0;i<6;i++){var a=-Math.PI/2+i*Math.PI/3;g+=(i?'L':'M')+(5*Math.cos(a)).toFixed(1)+' '+(5*Math.sin(a)).toFixed(1)}return g+'Z'}return 'M0 -5.4L5 0L0 5.4L-5 0Z'}
function bloodScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase"><path class="frm sD" d="M18 24H120M740 24H638M18 496H120M740 496H638"/>';
  g+='<text class="t" x="18" y="14">BRAIN · BLOOD · SAMPLE</text><text class="t" x="742" y="14" text-anchor="end">GRYPHON BIO</text></g>';
  /* the brain, side view */
  g+='<g id="scBrain">';
  g+='<path class="br sD" d="M64 168C58 112 98 62 162 50C218 40 284 52 318 92C342 120 340 160 320 182C302 200 272 204 252 200C236 214 206 220 186 212C160 222 122 220 102 206C78 200 66 188 64 168Z"/>';
  g+='<path class="br sD" d="M252 200C272 206 302 202 314 188C320 210 302 230 276 232C258 232 248 220 252 200Z"/>';
  g+='<path class="br sD" d="M228 210C232 230 235 256 236 290"/><path class="br sD" d="M248 208C249 232 250 258 250 290"/>';
  g+='<path class="sul sD" d="M96 124C114 104 146 106 158 128M168 66C176 92 164 114 180 138M210 58C220 88 242 100 272 94M118 172C148 160 180 176 212 164M228 128C250 140 276 134 298 146M84 150C96 140 112 144 124 152M190 152C200 140 214 138 226 146M286 74C292 96 304 108 324 116M134 74C130 90 138 100 150 104M262 168C276 160 292 164 304 172M268 212C280 216 296 214 306 206M264 222C276 226 290 224 300 216"/>';
  g+='</g>';
  /* injury site */
  g+='<g id="scInj"><circle class="inj" cx="150" cy="104" r="20"/><circle class="injc" cx="150" cy="104" r="4.5"/></g>';
  /* the vessel */
  g+='<g id="scVes"><path class="vw sD" d="M236 290C236 '+(VY-4)+' 240 '+(VY-9)+' 256 '+(VY-9)+'H604"/><path class="vw sD" d="M250 290C250 '+(VY+2)+' 254 '+(VY+9)+' 268 '+(VY+9)+'H604"/>';
  [[330,VY,0],[430,VY+1,8],[530,VY-1,-6]].forEach(function(r){g+='<ellipse class="rbc sD" cx="'+r[0]+'" cy="'+r[1]+'" rx="9" ry="4.4" transform="rotate('+r[2]+' '+r[0]+' '+r[1]+')"/>'});
  g+='</g>';
  /* the blood collection tube */
  g+='<g id="scTube"><clipPath id="tclip"><path d="M'+(TBX-21)+' 112V318A21 21 0 0 0 '+(TBX+21)+' 318V112Z"/></clipPath>';
  g+='<rect id="tfill" class="tf" clip-path="url(#tclip)" x="'+(TBX-22)+'" y="340" width="44" height="240"/>';
  g+='<path class="tb sD" d="M'+(TBX-22)+' 112V318A22 22 0 0 0 '+(TBX+22)+' 318V112"/>';
  g+='<path class="cap sD" d="M'+(TBX-28)+' 72H'+(TBX+28)+'V112H'+(TBX-28)+'Z"/>';
  var rid='';for(i=1;i<8;i++){rid+='M'+(TBX-28+i*7).toFixed(1)+' 78V106'}g+='<path class="capr sD" d="'+rid+'"/>';
  g+='<path class="lbl sD" d="M'+(TBX-22)+' 136H'+(TBX+22)+'M'+(TBX-22)+' 196H'+(TBX+22)+'"/>';
  g+='</g>';
  /* the time course */
  g+='<g id="scChart"><path class="ax sD" d="M40 470H740"/><path class="ax sD" d="M40 470V352"/>';
  g+='<path class="tk sD" d="M200 466V474M440 466V474M680 466V474"/>';
  g+='<text class="t" x="200" y="490" text-anchor="middle">HOURS</text><text class="t" x="440" y="490" text-anchor="middle">DAYS</text><text class="t" x="680" y="490" text-anchor="middle">MONTHS</text></g>';
  g+='<path class="wv1" id="wv1" d="M42 468C120 468 140 368 196 368C252 368 270 452 380 462C500 470 620 468 738 468"/>';
  g+='<path class="wv2" id="wv2" d="M42 469C220 469 290 404 410 398C520 392 580 446 738 456"/>';
  g+='<g id="wlab"><text class="a" x="210" y="360">GFAP</text><text class="t2" x="424" y="388">NfL</text></g>';
  /* molecules */
  g+='<g id="scMol">';MOLS.forEach(function(m,k){g+='<path class="ml m'+m.k+'" data-k="'+k+'" d="'+molD(m.k)+'"/>'});g+='</g>';
  g+='<g id="lb1"><text class="a" x="18" y="514">INJURED BRAIN CELLS SHED PROTEINS</text></g>';
  g+='<g id="lb2"><text class="a" x="18" y="514">BRAIN MOLECULES ENTER THE BLOOD</text></g>';
  g+='<g id="lb3"><text class="a" x="18" y="514">A BLOOD TEST READS THE WAVES</text></g>';
  return g+'</svg>';
}
function scene(){return bloodScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),brain:dl("#scBrain .sD"),ves:dl("#scVes .sD"),tube:dl("#scTube .sD"),chart:dl("#scChart .sD"),
    ctext:$$("#scChart text",svg),inj:$("#scInj",svg),fill:$("#tfill",svg),w1:dl("#wv1"),w2:dl("#wv2"),wl:$("#wlab",svg),
    mol:$$(".ml",svg).map(function(el){return {el:el,m:MOLS[+el.getAttribute("data-k")]}}),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    draw(E.base,b);
    var grow=seg(p,0,.18),shed=seg(p,.08,.3),flow=seg(p,.34,.66),fill=seg(p,.5,.78),read=seg(p,.66,.9);
    var g0=Math.min(1,Math.max(b*b,grow*1.15));
    draw(E.brain,g0);draw(E.ves,g0);draw(E.tube,g0);draw(E.chart,g0);
    E.ctext.forEach(function(el){op(el,b*g0)});
    op(E.inj,b*g0*(.5+.5*shed));
    E.fill.setAttribute("y",(340-150*sm(fill)).toFixed(1));op(E.fill,b);
    draw(E.w1,read);draw(E.w2,seg(p,.72,.95));op(E.wl,b*seg(p,.8,.92));
    E.mol.forEach(function(M,i){
      var m=M.m,s=sm(Math.min(1,Math.max(0,(shed-m.d)*1.4))),t=Math.min(1,Math.max(0,(flow-m.d)*1.3)),x,y,a;
      /* shed: drift out from the injury; flow: down the stem, along the vessel, into the tube */
      x=150+(m.sx-150)*s*1.6;y=104+(m.sy-104)*s*1.6;
      if(t>0){
        var d1=sm(Math.min(1,t/.3)),d2=sm(Math.min(1,Math.max(0,(t-.3)/.5))),d3=sm(Math.max(0,(t-.8)/.2));
        var sx=x,sy=y;x=sx+(243-sx)*d1;y=sy+(VY+m.lane-sy)*d1;
        if(d2>0){x=243+(TBX-6-243)*d2}
        if(d3>0){x=x+(m.tx-x)*d3;y=VY+m.lane+(m.ty-(VY+m.lane))*d3}
      }
      a=b*s*(1-.35*read);
      M.el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+(i*23+p*80).toFixed(1)+")");
      op(M.el,a);
    });
    op(E.l1,b*seg(p,.06,.16)*(1-seg(p,.28,.34)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.6,.66)));op(E.l3,b*seg(p,.74,.86));
  };
}
