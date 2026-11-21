/* the story scene (BL/BY/DB): ONE engraved stretch of a sensory neuron, kept on screen for all three steps. The membrane runs
   across the frame with a Cav3.2 T-type calcium channel in it; below, in the cell, soluble epoxide hydrolase (a two-lobed dimer);
   along the foot, the neuron's firing. Step 1 calcium ions pour through the overactive channel and the trace fires fast. Step 2
   epoxy-fatty acids (EpFAs, with their epoxide ring) are drawn into sEH and leave as inflammatory diols. Step 3 AFA-281 (gold)
   settles into both: the ions stop at the channel, the EpFAs stay whole and the firing calms. Sources: NIH RePORTER abstracts of
   5R44NS132642 and 1R43DA059524 and afasci.com. Schematic; geometry is illustrative. Driven by the scrubbed story progress. */
var AF={ch:[236,180],mem:[142,218],enz:[[536,376,80],[640,360,70]],site:[556,308],trY:500};
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,C=AF.ch,M=AF.mem;
  function hex(x,y,r,rot){var s='';for(var j=0;j<6;j++){var a=(rot||0)+j*Math.PI/3;s+=(j?'L':'M')+f(x+r*Math.cos(a))+' '+f(y+r*Math.sin(a))}return s+'Z'}
  function blob(cx,cy,r,k,ph){var s='';for(var j=0;j<=48;j++){var a=j/48*Math.PI*2,rr=r*(1+.07*Math.sin(3*a+ph)+.05*Math.sin(5*a+ph*1.7)+(k||0)*Math.sin(a*2));s+=(j?'L':'M')+f(cx+rr*Math.cos(a))+' '+f(cy+rr*.86*Math.sin(a))}return s+'Z'}
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="aug" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#e8b54a" stop-opacity=".55"/><stop offset="1" stop-color="#e8b54a" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="ing" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#e07a5f" stop-opacity=".38"/><stop offset="1" stop-color="#e07a5f" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="cag" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#a8d1e7" stop-opacity=".42"/><stop offset="1" stop-color="#a8d1e7" stop-opacity="0"/></radialGradient>'+
     '<linearGradient id="fadeH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".08" stop-color="#fff"/><stop offset=".92" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>'+
     '<mask id="memm" maskUnits="userSpaceOnUse" x="0" y="0" width="800" height="560"><rect width="800" height="560" fill="url(#fadeH)"/></mask></defs>';
  g+='<g id="scBase">';
  /* the membrane: two rows of lipid heads with paired tails, faded at both ends */
  g+='<g mask="url(#memm)">';
  var hd='',tl='';
  for(i=0;i<58;i++){var x=6+i*14;if(Math.abs(x-C[0])<78)continue;
    hd+='<circle class="lh" cx="'+x+'" cy="'+M[0]+'" r="4.3"/><circle class="lh" cx="'+x+'" cy="'+M[1]+'" r="4.3"/>';
    tl+='M'+(x-1.6)+' '+(M[0]+5)+'q-2 15 0 30M'+(x+1.6)+' '+(M[0]+5)+'q2 15 0 30M'+(x-1.6)+' '+(M[1]-5)+'q-2 -14 0 -30M'+(x+1.6)+' '+(M[1]-5)+'q2 -14 0 -30'}
  g+='<path class="tl sD" d="'+tl+'"/>'+hd+'</g>';
  /* the channel: four repeat domains around the pore, two rear (fine) and two front (strong), each engraved with its helices */
  function sub(x,w,cls){var t=C[1]-92,b=C[1]+90,r=9,p='M'+(x-w/2+r)+' '+t+'H'+(x+w/2-r)+'Q'+(x+w/2)+' '+t+' '+(x+w/2)+' '+(t+r)+'V'+(b-r)+'Q'+(x+w/2)+' '+b+' '+(x+w/2-r)+' '+b+'H'+(x-w/2+r)+'Q'+(x-w/2)+' '+b+' '+(x-w/2)+' '+(b-r)+'V'+(t+r)+'Q'+(x-w/2)+' '+t+' '+(x-w/2+r)+' '+t+'Z';
    var h='';for(var j=0;j<6;j++){var yy=t+18+j*28;h+='M'+(x-w/2+6)+' '+(yy+10)+'C'+(x-w/4)+' '+(yy-4)+' '+(x+w/4)+' '+(yy+14)+' '+(x+w/2-6)+' '+yy}
    return '<path class="'+cls+' sD" d="'+p+'"/><path class="hx sD" d="'+h+'"/>'}
  g+=sub(C[0]-24,36,'mb2')+sub(C[0]+24,36,'mb2')+sub(C[0]-58,44,'mb')+sub(C[0]+58,44,'mb');
  g+='<path class="pl sD" d="M'+(C[0]-14)+' '+(C[1]-74)+'q14 10 28 0"/>';
  /* sEH: a two-lobed dimer with contour engraving and the active-site pocket on top */
  AF.enz.forEach(function(e,k){g+='<path class="mb sD" d="'+blob(e[0],e[1],e[2],0,k*2.1)+'"/>';
    for(var j=1;j<4;j++)g+='<path class="ct sD" d="'+blob(e[0]+j*3,e[1]+j*2,e[2]-j*13,0,k*2.1+j*.7)+'"/>'});
  g+='<path class="mb sD" d="M'+(AF.site[0]-20)+' '+(AF.site[1]+4)+'q20 22 40 0"/>';
  /* the firing trace (baseline) */
  g+='<path class="bl sD" d="M30 '+AF.trY+'H770"/>';
  g+='<text class="t" x="16" y="548">SENSORY NEURON · SCHEMATIC</text>';
  g+='<text class="t" x="16" y="'+(M[0]-26)+'">OUTSIDE</text><text class="t" x="16" y="'+(M[1]+36)+'">INSIDE THE CELL</text>';
  g+='</g>';
  /* moving parts */
  g+='<g id="scMove">';
  g+='<circle cx="'+C[0]+'" cy="'+(C[1]+50)+'" r="140" fill="url(#cag)" id="caglow"/>';
  g+='<circle cx="'+(AF.enz[0][0]+70)+'" cy="'+(AF.enz[0][1]+40)+'" r="150" fill="url(#ing)" id="inglow"/>';
  for(i=0;i<9;i++)g+='<g class="ion"><circle r="7.4"/><path d="M-2.8 0h5.6M0 -2.8v5.6"/></g>';
  for(i=0;i<3;i++){var zz='M-30 6';for(var j=1;j<=8;j++)zz+='L'+(-30+j*7.5)+' '+(j%2?-2:6);
    g+='<g class="fa"><path class="fz" d="'+zz+'"/><path class="ep" d="M-4 -2L4 -2L0 -11Z"/><path class="oh" d="M-4 -2v-9M4 -2v-9"/></g>'}
  /* the two traces: fast firing, then calm */
  var hy='M30 '+AF.trY,cm='M30 '+AF.trY;
  for(var x=46;x<760;x+=30){hy+='H'+x+'l5 -46l5 56l5 -10'}
  [200,520].forEach(function(x){cm+='H'+x+'l5 -46l5 56l5 -10'});cm+='H770';
  g+='<path class="tr" id="trH" d="'+hy+'H770"/><path class="tr cm" id="trC" d="'+cm+'"/>';
  /* AFA-281: two fused rings in gold, one into the channel, one into sEH */
  [0,1].forEach(function(k){g+='<g class="drug" id="dr'+k+'"><circle r="34" fill="url(#aug)"/><path d="'+hex(-9,0,10.4,Math.PI/6)+hex(9,0,10.4,Math.PI/6)+'"/></g>'});
  g+='</g>';
  /* labels, one set per step (leaders end at the thing they name) */
  var lx=mob?16:322;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+(mob?60:96)+'">'+(mob?'CAV3.2 CHANNEL':'CAV3.2 T-TYPE CALCIUM CHANNEL')+'</text><path class="ldr" d="M'+(lx-6)+' '+(mob?72:92)+'L'+(C[0]+84)+' '+(C[1]-76)+'"/>'+
     (mob?'':'<text class="t" x="322" y="116">OVERACTIVE IN INJURED SENSORY NERVES</text>')+'<text class="a" x="'+(C[0]+20)+'" y="328">CA²⁺</text>'+
     '<text class="a" x="784" y="'+(AF.trY+34)+'" text-anchor="end">'+(mob?'FAST FIRING':'HYPEREXCITABLE FIRING')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+(mob?16:330)+'" y="'+(mob?60:96)+'">'+(mob?'sEH ENZYME':'SOLUBLE EPOXIDE HYDROLASE (sEH)')+'</text>'+
     (mob?'':'<path class="ldr" d="M520 104L'+(AF.enz[0][0]+10)+' '+(AF.enz[0][1]-90)+'"/>')+
     '<text class="a" x="'+(mob?300:316)+'" y="'+(mob?352:346)+'">EpFA</text>'+(mob?'':'<text class="t" x="316" y="364">ANTI-INFLAMMATORY</text>')+
     '<text class="a fdl" x="784" y="'+(mob?300:398)+'" text-anchor="end">DIOL</text>'+(mob?'':'<text class="t" x="784" y="416" text-anchor="end">INFLAMMATORY</text>')+'</g>';
  g+='<g id="lb3"><text class="a gd" x="'+(mob?16:322)+'" y="'+(mob?60:96)+'">'+(mob?'AFA-281, BOTH TARGETS':'AFA-281 · ONE MOLECULE, BOTH TARGETS')+'</text>'+
     (mob?'':'<text class="t" x="322" y="116">CHANNEL INHIBITED · sEH INHIBITED</text>')+
     '<text class="a" x="'+(mob?300:316)+'" y="'+(mob?352:346)+'">'+(mob?'EpFA KEPT':'EpFAs PRESERVED')+'</text>'+
     '<text class="a" x="784" y="'+(AF.trY+34)+'" text-anchor="end">CALMER FIRING</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .lh",svg),mv:$("#scMove",svg),ion:$$(".ion",svg),fa:$$(".fa",svg),
    trH:dl("#trH"),trC:$("#trC",svg),trHe:$("#trH",svg),d0:$("#dr0",svg),d1:$("#dr1",svg),cag:$("#caglow",svg),ing:$("#inglow",svg),
    b1:$("#lb1",svg),b2:$("#lb2",svg),b3:$("#lb3",svg)};
  var lastB=-1,C=AF.ch,S=AF.site;
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function tf(el,x,y,s){el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")"+(s!=null?" scale("+s.toFixed(3)+")":""))}
  function lerp(a,b,t){return a+(b-a)*t}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=seg(p,0,.1),s2=seg(p,.34,.44),s3=seg(p,.68,.8),blk=seg(p,.74,.86);
    /* ions: a stream through the pore while open; once AFA-281 sits in the pore they pile up above it */
    var t=p*14;
    E.ion.forEach(function(el,k){var ph=(t*.9+k/9)%1,y=lerp(40,350,ph),x=C[0]+Math.sin(ph*9+k)*(y<C[1]-92||y>C[1]+90?16:3);
      var hx=C[0]+((k%5)-2)*18+Math.sin(t+k)*3,hy=56+(k%3)*16+Math.cos(t*.8+k)*3;
      x=lerp(x,hx,blk);y=lerp(y,hy,blk);tf(el,x,y);op(el,b*s1*(blk>0?1:(ph>.9?(1-ph)*10:ph<.06?ph/.06:1)))});
    op(E.cag,b*s1*(1-blk)*.9);
    /* EpFAs: drawn into the sEH pocket and released as diols (step 2); in step 3 they wait whole beside the blocked enzyme */
    E.fa.forEach(function(el,k){var ph=((p-.34)*3.2+k/3)%1;if(ph<0)ph+=1;var x,y,dio;
      if(ph<.45){var q=ph/.45;x=lerp(330,S[0],q);y=lerp(300,S[1]-6,q)+Math.sin(q*Math.PI)*-14;dio=0}
      else{var q2=(ph-.45)/.55;x=lerp(S[0]+24,724,q2);y=lerp(S[1]+6,336,q2)-Math.sin(q2*Math.PI)*30;dio=1}
      var wx=350+k*62,wy=296+(k%2)*16+Math.sin(t+k)*2;x=lerp(x,wx,s3);y=lerp(y,wy,s3);
      el.classList.toggle("dio",dio&&s3<.5);tf(el,x,y,1.3);op(el,b*s2*(ph>.94&&s3<.5?(1-ph)*16:1))});
    op(E.ing,b*s2*(1-s3)*.9);
    /* firing: the fast trace draws in step 1 and gives way to the calm one in step 3 */
    draw(E.trH,s1+(1-s1)*0);op(E.trHe,b*(1-blk));op(E.trC,b*blk);
    /* AFA-281 arrives in step 3, one copy into the pore, one into the sEH pocket */
    var a=s3;tf(E.d0,lerp(C[0]+150,C[0],a),lerp(30,C[1]-72,a),lerp(.6,1,a));tf(E.d1,lerp(S[0]+150,S[0],a),lerp(230,S[1]+4,a),lerp(.6,1,a));
    op(E.d0,b*a);op(E.d1,b*seg(p,.7,.82));
    op(E.b1,b*s1*(1-seg(p,.28,.34)));op(E.b2,b*seg(p,.38,.46)*(1-seg(p,.64,.7)));op(E.b3,b*seg(p,.76,.86));
  };
}
