/* The story scene (BL/BY/DB): how ELP-004 works, as ONE continuous scene, drawn in fine engraved line.
   Below: a band of trabecular bone with its lamellae and osteocyte lacunae, kept on screen for all three steps.
   Step 1 (Erosion): inflammatory signals (TNFα) drive five myeloid precursor cells to drift together and fuse into one
   multinucleated osteoclast on the bone surface; under its ruffled border a resorption pit opens in the bone.
   Step 2 (Signal): the osteoclast's membrane carries ion channels (TRPC); calcium ions stream in through them.
   Step 3 (Block): ELP-004 molecules dock on the channels, the calcium stops, the osteoclast quietens (its ruffled
   border retracts) and the pit fills back toward the bone line.
   Sources: exesalibero.com (Product & Technology), Ray et al., Science Advances 2025 (TRPC channels, TNFα/LTB4-driven
   maturation), McCall et al., Pharmacol Res Perspect 2024. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=620;
var BY=448;                 /* the bone surface */
var OCX=380,OCY=372;        /* the osteoclast's centre once fused */
/* five precursors: start (scattered above the bone) and their nucleus slot inside the fused cell */
var PRE=[[92,232,318,368],[206,110,356,338],[392,176,392,376],[574,104,428,340],[680,250,466,370]];
var CHX=[296,380,464];      /* channel x positions on the osteoclast's upper membrane */
function ocTop(x){var dx=(x-OCX)/150;return OCY-86*Math.sqrt(Math.max(0,1-dx*dx))}
function boneLines(){
  var s=4417,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},g='',i,k;
  /* lamellae: long, gently waving lines that follow the bone surface */
  for(i=0;i<7;i++){var y=BY+18+i*21,d='M0 '+y.toFixed(1);
    for(k=1;k<=16;k++){var x=k*760/16;d+='L'+x.toFixed(1)+' '+(y+Math.sin(k*.9+i*1.7)*3.2+(R()-.5)*1.6).toFixed(1)}
    g+='<path class="lm sD" d="'+d+'"/>'}
  /* osteocyte lacunae */
  for(i=0;i<20;i++){var x=24+R()*712,y=BY+34+R()*120;if(Math.abs(x-OCX)<130&&y<BY+56)continue;
    g+='<ellipse class="lc" cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" rx="8" ry="3" transform="rotate('+((R()-.5)*16).toFixed(1)+' '+x.toFixed(1)+' '+y.toFixed(1)+')"/>'}
  return g}
var BONEL=boneLines();
/* the calcium ions: three streams of dots, one per channel */
var CA=(function(){var a=[],i,j;for(i=0;i<3;i++)for(j=0;j<5;j++)a.push({c:i,o:j/5});return a})();
function exScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="xbclip"><rect x="0" y="'+BY+'" width="760" height="'+(SCH-BY)+'"/></clipPath>'+
     '<linearGradient id="xbfade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8e3d7" stop-opacity=".16"/><stop offset="1" stop-color="#e8e3d7" stop-opacity="0"/></linearGradient></defs>';
  /* ---- the bone: a pale band, its surface (with the pit cut into it), lamellae, lacunae ---- */
  g+='<g id="xBone">';
  g+='<path id="xBoneFill" class="bf" d=""/>';
  g+='<g clip-path="url(#xbclip)">'+BONEL+'</g>';
  g+='<path id="xSurf" class="bs" d=""/>';
  g+='<text class="t" x="0" y="'+(SCH-8)+'">TRABECULAR BONE</text>';
  g+='</g>';
  /* ---- the fused osteoclast: body, ruffled border, membrane channels ---- */
  g+='<g id="xOc"><path class="ocb" d="M'+(OCX-150)+' '+OCY+'A150 86 0 0 1 '+(OCX+150)+' '+OCY+'C'+(OCX+136)+' '+(OCY+24)+' '+(OCX+96)+' '+(OCY+50)+' '+OCX+' '+(OCY+54)+'C'+(OCX-96)+' '+(OCY+50)+' '+(OCX-136)+' '+(OCY+24)+' '+(OCX-150)+' '+OCY+'Z"/>';
  var rf='M'+(OCX-102)+' '+(OCY+47);for(i=0;i<=34;i++){var x=OCX-102+i*6;rf+='L'+x+' '+(OCY+49+(i%2?8:0))}
  g+='<path class="rf" d="'+rf+'"/></g>';
  g+='<g id="xCh">';
  CHX.forEach(function(x,k){var y=ocTop(x);
    g+='<g class="ch" transform="translate('+x+' '+y.toFixed(1)+')"><rect class="chp" x="-12" y="-17" width="8" height="34"/><rect class="chp" x="4" y="-17" width="8" height="34"/></g>'});
  g+='</g>';
  /* ---- calcium ions ---- */
  g+='<g id="xCa">';CA.forEach(function(c,k){g+='<circle class="ca" data-k="'+k+'" r="4.6" cx="0" cy="0"/>'});g+='</g>';
  /* ---- ELP-004: a small ring with its chlorines, one per channel ---- */
  g+='<g id="xDrug">';
  CHX.forEach(function(x,k){g+='<g class="dg" data-k="'+k+'"><g transform="scale(1.4)"><path class="dgp" d="M0 -11L9.5 -5.5V5.5L0 11L-9.5 5.5V-5.5Z"/><path class="dgb" d="M9.5 -5.5L17 -10M-9.5 5.5L-17 10"/><circle class="dgc" cx="17" cy="-10" r="2.6"/><circle class="dgc" cx="-17" cy="10" r="2.6"/></g></g>'});
  g+='</g>';
  /* ---- the precursors (each with its nucleus); their nuclei become the osteoclast's ---- */
  g+='<g id="xPre">';
  PRE.forEach(function(p,k){g+='<g class="pr" data-k="'+k+'"><circle class="prb" r="38"/></g>'});
  g+='</g><g id="xNu">';
  PRE.forEach(function(p,k){g+='<ellipse class="nu" data-k="'+k+'" rx="13" ry="9"/>'});
  g+='</g>';
  /* ---- TNFα signals in step 1: short dashes falling toward the precursors ---- */
  g+='<g id="xSig">';for(i=0;i<9;i++){g+='<path class="sg" d="M'+(70+i*78)+' 0v16"/>'}g+='</g>';
  /* ---- step labels, along the top, clear of every cell ---- */
  g+='<g id="xl1"><text class="a" x="0" y="22">TNFα · PRECURSORS FUSE · BONE RESORBED</text></g>';
  g+='<g id="xl2"><text class="a" x="0" y="22">TRPC CHANNELS · CALCIUM IN</text></g>';
  g+='<g id="xl3"><text class="a" x="0" y="22">ELP-004 · CHANNELS BLOCKED · BONE SPARED</text></g>';
  return g+'</svg>';
}
function scene(){return exScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var E={lm:$$(".lm",svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]}),
    lc:$$(".lc",svg),t:$$("#xBone text",svg),bf:$("#xBoneFill",svg),bs:$("#xSurf",svg),
    oc:$("#xOc",svg),rf:$("#xOc .rf",svg),ch:$$(".ch",svg),ca:$$(".ca",svg),dg:$$(".dg",svg),pr:$$(".pr",svg),nu:$$(".nu",svg),sg:$$(".sg",svg),
    l1:$("#xl1",svg),l2:$("#xl2",svg),l3:$("#xl3",svg)};
  /* the lamellae draw with non-scaling strokes off: lengths are in viewBox units (BO) */
  var lastB=-1;
  function op(el,v){if(el)el.style.opacity=(+v).toFixed(3)}
  function lerp(a,b,t){return a+(b-a)*t}
  function surf(depth){
    /* the bone line with a smooth pit of the given depth under the osteoclast */
    var d='M0 '+BY,k,x,y;
    for(k=1;k<=76;k++){x=k*10;var u=(x-OCX)/120;y=BY+(Math.abs(u)<1?depth*Math.pow(Math.cos(u*Math.PI/2),2):0);d+='L'+x+' '+y.toFixed(1)}
    return d}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.lm.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-b)).toFixed(1)});E.lc.forEach(function(el){op(el,b)});E.t.forEach(function(el){op(el,b)})}
    var fuse=seg(p,.06,.3),pit=seg(p,.14,.34),chI=seg(p,.38,.48),caI=seg(p,.4,.5),dock=seg(p,.68,.8),undo=seg(p,.78,.94);
    var depth=38*pit*(1-.85*undo);
    var sd=surf(depth);E.bs.setAttribute("d",sd);E.bf.setAttribute("d",sd+'L760 '+SCH+'L0 '+SCH+'Z');op(E.bs,b);op(E.bf,b);
    /* precursors: drift in and fuse (their outlines fade as the osteoclast body appears), then come apart again */
    var m=fuse;
    E.pr.forEach(function(el,k){var P=PRE[k],x=lerp(P[0],P[2],m),y=lerp(P[1],P[3],m);
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");op(el,b*(1-seg(m,.72,.96)))});
    E.nu.forEach(function(el,k){var P=PRE[k],x=lerp(P[0],P[2],m),y=lerp(P[1],P[3],m)+ (1-m)*2;
      el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1));op(el,b)});
    op(E.oc,b*seg(m,.7,.98)*(1-.5*undo));E.rf.style.opacity=(1-undo).toFixed(3);
    /* TNFα dashes fall in step 1 only */
    var sgv=seg(p,.02,.1)*(1-seg(p,.3,.38));
    E.sg.forEach(function(el,i){var ph=((p*6+i*.37)%1);el.setAttribute("transform","translate(0 "+(44+ph*120).toFixed(1)+")");op(el,b*sgv*(1-ph)*.9)});
    /* channels appear on the membrane with step 2; calcium streams in until ELP-004 docks */
    E.ch.forEach(function(el){op(el,b*chI*seg(m,.7,.98))});
    var flow=caI*(1-dock);
    E.ca.forEach(function(el,k){var c=CA[k],x=CHX[c.c],top=ocTop(x),ph=(c.o+p*5)%1,y=top-90+ph*150;
      el.setAttribute("cx",(x+Math.sin(ph*6+k)*2).toFixed(1));el.setAttribute("cy",y.toFixed(1));
      var vis=y<top-18?1:y<top+50?.9:Math.max(0,1-(y-top-50)/16);op(el,b*flow*vis*seg(m,.7,.98))});
    /* ELP-004 docks on each channel's mouth, and stays */
    E.dg.forEach(function(el,k){var x=CHX[k],top=ocTop(x),dk=seg(dock,k*.15,.7+k*.15),y=lerp(top-140,top-34,dk);
      el.setAttribute("transform","translate("+x+" "+y.toFixed(1)+") rotate("+(lerp(-50,0,dk)).toFixed(1)+")");op(el,b*seg(p,.64,.72))});
    op(E.l1,b*seg(p,.08,.16)*(1-seg(p,.32,.38)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.74,.82));
  };
}
