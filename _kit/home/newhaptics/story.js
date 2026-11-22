/* The story scene (BL/BY/DB): NewHaptics' display as ONE continuous scene, drawn in fine line: a plan view of a tactile
   pin array. Step 1: four batch-fabricated components tile the screen with thousands of tightly packed dots ("fabricated
   together in a single component", newhaptics.com/about). Step 2: a few electronic valves feed pneumatic signals through a
   layered board "analogous to a PCB" into the microfluidic chips (NIH 2R44EY030385 summary). Step 3: the pins rise to
   render braille ("newhaptics" / "braille", Grade 1) and a tactile graph on the same surface (newhaptics.com/about,
   /mission). Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
var GC=36,GR=14,GX=76,GY=64,GP=17;
var BRL={a:[1],b:[1,2],c:[1,4],d:[1,4,5],e:[1,5],f:[1,2,4],g:[1,2,4,5],h:[1,2,5],i:[2,4],j:[2,4,5],k:[1,3],l:[1,2,3],m:[1,3,4],n:[1,3,4,5],o:[1,3,5],p:[1,2,3,4],q:[1,2,3,4,5],r:[1,2,3,5],s:[2,3,4],t:[2,3,4,5],u:[1,3,6],v:[1,2,3,6],w:[2,4,5,6],x:[1,3,4,6],y:[1,3,4,5,6],z:[1,3,5,6]};
function raisedSet(){
  var S={};
  function cell(ch,c0,r0){(BRL[ch]||[]).forEach(function(d){var cc=c0+(d>3?1:0),rr=r0+((d-1)%3);S[cc+","+rr]=1})}
  "newhaptics".split("").forEach(function(ch,i){cell(ch,1+i*3,0)});
  "braille".split("").forEach(function(ch,i){cell(ch,1+i*3,4)});
  /* a tactile graph in the lower half: axes and a rising curve */
  for(var r=8;r<=13;r++)S["1,"+r]=1;
  for(var c=1;c<GC-1;c++)S[c+",13"]=1;
  for(c=3;c<GC-1;c++){var t=(c-3)/(GC-5),y=12-Math.round(4*(t*t*(3-2*t))+0.6*Math.sin(t*Math.PI*3));S[c+","+Math.max(8,Math.min(12,y))]=1}
  return S;
}
var SCN=0;
function memScene(o){
  var u='n'+(++SCN),g='',c,r;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* ---- the four components (chips), each outlined with corner ticks ---- */
  g+='<g id="scChip">';
  [[0,0],[1,0],[0,1],[1,1]].forEach(function(t,k){
    var x=GX+t[0]*18*GP-10,y=GY+t[1]*7*GP-10,w=17*GP+20,h=6*GP+20;
    g+='<path class="ch sD" data-k="'+k+'" d="M'+x+' '+y+'H'+(x+w)+'V'+(y+h)+'H'+x+'Z"/>';
  });
  g+='<text class="t" x="'+(GX-10)+'" y="'+(GY-24)+'">FOUR COMPONENTS · ONE TACTILE SCREEN</text>';
  g+='</g>';
  /* ---- the dots: every position, then the raised pins of step 3 ---- */
  var S=raisedSet(),dots='',ups='';
  for(r=0;r<GR;r++)for(c=0;c<GC;c++){
    var x=GX+c*GP,y=GY+r*GP,k=(c>=18?1:0)+(r>=7?2:0);
    dots+='<circle class="pd" data-k="'+k+'" data-c="'+c+'" cx="'+x+'" cy="'+y+'" r="2.5"/>';
    if(S[c+","+r])ups+='<circle class="pu" data-c="'+c+'" cx="'+x+'" cy="'+y+'" r="5"/>';
  }
  g+='<g id="scDots">'+dots+'</g><g id="scUp">'+ups+'</g>';
  /* ---- the layered board under the array, and a few valves feeding it ---- */
  var BY=338;
  g+='<g id="scBoard"><path class="bd sD2" d="M'+(GX-10)+' '+BY+'H'+(GX+35*GP+10)+'M'+(GX-10)+' '+(BY+8)+'H'+(GX+35*GP+10)+'M'+(GX-10)+' '+(BY+16)+'H'+(GX+35*GP+10)+'"/>'+
     '<text class="t" id="bdT" x="'+(GX+35*GP+10)+'" y="'+(BY-12)+'" text-anchor="end">LAYERED BOARD</text></g>';
  var VX=[150,270,390,510,630],VY=430;
  g+='<g id="scAir">';
  VX.forEach(function(vx,i){
    /* each channel climbs from its valve through the board, then fans into a column band of the array */
    var tx=GX+Math.round((i+.5)*(35*GP)/VX.length),top=GY+13*GP+8;
    var d='M'+vx+' '+(VY-14)+'V'+(BY+24)+'L'+tx+' '+(BY-4)+'V'+top;
    g+='<path class="cn sD2" d="'+d+'"/><path class="fl" d="'+d+'"/>';
    [-2,-1,1,2].forEach(function(s){g+='<path class="br sD2" d="M'+tx+' '+top+'L'+(tx+s*GP)+' '+(top-10)+'"/>'});
    g+='<g class="vv"><rect class="vb" x="'+(vx-13)+'" y="'+(VY-14)+'" width="26" height="22"/><path class="vs" d="M'+(vx-7)+' '+(VY+8)+'V'+(VY+20)+'M'+(vx+7)+' '+(VY+8)+'V'+(VY+20)+'"/></g>';
  });
  g+='</g>';
  /* ---- step labels (fade with their step), in the clear band under the valves ---- */
  g+='<g id="lb1"><text class="a" x="40" y="508">THOUSANDS OF DOTS, FABRICATED TOGETHER</text></g>';
  g+='<g id="lb2"><text class="a" x="40" y="508">A FEW VALVES · PNEUMATIC SIGNALS TO EVERY PIN</text></g>';
  g+='<g id="lb3"><text class="a" x="40" y="508">BRAILLE AND TACTILE GRAPHICS, ON ONE SURFACE</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;p.style.strokeDashoffset=L;return [p,L]})};
  var E={chip:dl("#scChip .sD"),chipT:$("#scChip text",svg),
    pd:$$(".pd",svg).map(function(el){return {el:el,k:+el.getAttribute("data-k"),c:+el.getAttribute("data-c")}}),
    pu:$$(".pu",svg).map(function(el){return {el:el,c:+el.getAttribute("data-c")}}),
    board:dl("#scBoard .sD2"),bdT:$("#bdT",svg),cn:dl("#scAir .cn"),br:dl("#scAir .br"),fl:$$("#scAir .fl",svg),vv:$$("#scAir .vv",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  E.fl.forEach(function(p){p.__L=p.getTotalLength?p.getTotalLength():300});
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function cl(x){return x<0?0:x>1?1:x}
  return function(p,b){
    if(!svg.isConnected)return;
    /* step 1: the four components draw in and their dots fill, tile by tile */
    var fab=seg(p,0,.2),air=seg(p,.34,.58),ren=seg(p,.68,.9);
    E.chip.forEach(function(a,k){var v=cl(fab*1.8-k*.2);a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1);op(a[0],b*(1-.55*air))});
    op(E.chipT,b*cl(fab*2));
    E.pd.forEach(function(P){op(P.el,b*cl(fab*2.2-P.k*.25-P.c*.008)*(1-.35*ren))});
    /* step 2: the board, the valves and the channels, with air pulsing up them */
    var base=.32*cl(fab*1.6);draw(E.board,Math.max(cl(fab*1.4),air));E.board.forEach(function(a){op(a[0],b*(base+(1-base)*air)*(1-.4*ren))});op(E.bdT,b*(base+(1-base)*cl(air*2-.4))*(1-.6*ren));
    E.vv.forEach(function(el,i){op(el,b*Math.max(base,cl(air*2.4-i*.18))*(1-.5*ren))});
    E.cn.forEach(function(a,i){var v=Math.max(cl(fab*1.4),cl(air*1.8-i*.12));a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1);op(a[0],b*(base+(1-base)*cl(air*1.8-i*.12))*(1-.6*ren))});
    E.br.forEach(function(a,i){var w=cl(air*2.2-.9-Math.floor(i/4)*.1),v=Math.max(cl(fab*1.4),w);a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1);op(a[0],b*(base+(1-base)*w)*(1-.6*ren))});
    E.fl.forEach(function(el,i){var L=el.__L,v=cl(air*1.8-i*.12);el.style.strokeDasharray="14 "+L;el.style.strokeDashoffset=(14-(L+14)*((p*3+i*.15)%1)).toFixed(1);op(el,b*v*(1-ren))});
    /* step 3: the pins rise, sweeping left to right, as braille and a tactile graph */
    E.pu.forEach(function(P){var v=cl(ren*1.6-P.c/GC*.6);op(P.el,b*v);P.el.style.transform="scale("+(.4+.6*v).toFixed(3)+")"});
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.44,.52)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.82,.9));
  };
}
