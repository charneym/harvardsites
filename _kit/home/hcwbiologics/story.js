/* The story scene (DB/BL): HCW9302's own mechanism, as hcwbiologics.com states it ("Regulatory T (Treg) cells play a
   pivotal role in downregulating the cytotoxicity of activated immune cells. Persistence of activated immune cells leads
   to autoimmune diseases"; HCW9302 binds "IL-2 alpha-beta-gamma receptors predominantly expressed on regulatory T cells,
   thereby activating and expanding Treg cells, but not effector T cells. The HCW9302-activated Tregs can then suppress
   unwanted immune and inflammatory responses"), drawn as ONE fine-line scene that fills the frame: a regulatory T cell
   with its IL-2 receptors, and three activated effector T cells. Frame 0 is already complete.
   Step 1 (imbalance): the effector cells are activated (warm glow and spikes).
   Step 2 (bind): HCW9302 molecules (tissue-factor scaffold in teal, IL-2 head in logo green) arrive and dock on the
   Treg's receptors, which light up.
   Step 3 (rebalance): new Treg cells draw in around the first; the effector cells calm.
   Everything is driven by the scrubbed progress. */
var SCW=760,SCH=560;
var TR={x:300,y:300,r:118};
var EFF=[[575,165,44],[652,300,46],[575,438,44]];
var EXP=[[128,142,54],[150,452,50],[452,92,34]];
var RANG=[100,135,165,195,225,255,60,20,340,300];
var BIND=[0,1,2,3,4,5];
function rp(a,r){var t=a*Math.PI/180;return [TR.x+Math.cos(t)*r,TR.y-Math.sin(t)*r]}
function cell(x,y,r,cl){var n=r*.42,o='';
  o+='<circle class="wl '+cl+'" cx="'+x+'" cy="'+y+'" r="'+r+'"/>';
  o+='<circle class="wo '+cl+'" cx="'+x+'" cy="'+y+'" r="'+(r-5)+'"/>';
  o+='<circle class="wmd '+cl+'" cx="'+(x-r*.08).toFixed(1)+'" cy="'+(y+r*.05).toFixed(1)+'" r="'+n.toFixed(1)+'"/>';
  return o}
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="14 34 732 526" aria-hidden="true">';
  g+='<defs><radialGradient id="gAct"><stop offset="0" stop-color="#f0a888" stop-opacity=".42"/><stop offset="1" stop-color="#f0a888" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="gCalm"><stop offset="0" stop-color="#6ec8ce" stop-opacity=".3"/><stop offset="1" stop-color="#6ec8ce" stop-opacity="0"/></radialGradient></defs>';
  /* glows sit behind the line work */
  g+='<g id="hAct">';EFF.forEach(function(e){g+='<circle cx="'+e[0]+'" cy="'+e[1]+'" r="'+(e[2]*2.1)+'" fill="url(#gAct)"/>'});g+='</g>';
  g+='<circle id="hCalm" cx="'+TR.x+'" cy="'+TR.y+'" r="250" fill="url(#gCalm)"/>';
  g+='<g id="scBase">';
  g+=cell(TR.x,TR.y,TR.r,"sD");
  g+='<path class="wo sD" d="M272 296c10-12 26-12 34 0M280 318c12 6 24 4 32-6"/>';
  EFF.forEach(function(e){g+=cell(e[0],e[1],e[2],"sD")});
  g+='</g>';
  /* IL-2 receptors on the Treg surface: gamma-c, beta and the longer alpha stalk */
  g+='<g id="scRec">';RANG.forEach(function(a,k){var s='';[[-5,16],[0,18],[5,24]].forEach(function(q){var p0=rp(a+q[0],TR.r+1),p1=rp(a+q[0],TR.r+q[1]);s+='M'+p0[0].toFixed(1)+' '+p0[1].toFixed(1)+'L'+p1[0].toFixed(1)+' '+p1[1].toFixed(1)});
    g+='<path class="rc" d="'+s+'"/>'});g+='</g>';
  /* activation spikes on the effector cells */
  g+='<g id="scSpk">';EFF.forEach(function(e){var s='';for(var j=0;j<14;j++){var t=j/14*Math.PI*2+.2;s+='M'+(e[0]+Math.cos(t)*(e[2]+6)).toFixed(1)+' '+(e[1]+Math.sin(t)*(e[2]+6)).toFixed(1)+'L'+(e[0]+Math.cos(t)*(e[2]+13)).toFixed(1)+' '+(e[1]+Math.sin(t)*(e[2]+13)).toFixed(1)}g+='<path class="spk" d="'+s+'"/>'});g+='</g>';
  /* new Treg cells (step 3) */
  g+='<g id="scExp">';EXP.forEach(function(e){g+='<g class="ex">'+cell(e[0],e[1],e[2],"xD")+'</g>'});g+='</g>';
  /* HCW9302 molecules: scaffold rod + IL-2 head (logo green) */
  g+='<g id="scMol">';BIND.forEach(function(){g+='<g class="mol"><path class="mt" d="M-11 0H2"/><circle class="mg" cx="6.5" cy="0" r="4.6"/></g>'});g+='</g>';
  if(!mob){
    g+='<g id="lEff"><text class="t" x="575" y="86" text-anchor="middle">EFFECTOR T CELLS</text></g>';
    g+='<g id="lTr"><text class="t" x="300" y="130" text-anchor="middle">REGULATORY T CELL</text></g>';
  }else{g+='<g id="lEff"></g><g id="lTr"></g>'}
  var ly=SCH-10,lx=mob?24:36;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'EFFECTOR CELLS PERSIST':'ACTIVATED IMMUNE CELLS PERSIST, DRIVING DISEASE')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'HCW9302 BINDS IL-2 RECEPTORS':'HCW9302 BINDS IL-2 RECEPTORS ON THE TREG CELL')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'TREG CELLS EXPAND':'TREG CELLS EXPAND AND SUPPRESS INFLAMMATION')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(root,sel){return $$(sel,root).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(svg,"#scBase .sD"),exp:$$("#scExp .ex",svg).map(function(gx){return dl(gx,".xD")}),
    rec:$$("#scRec .rc",svg),spk:$$("#scSpk .spk",svg),mol:$$("#scMol .mol",svg),hA:$("#hAct",svg),hC:$("#hCalm",svg),
    lEff:$("#lEff",svg),lTr:$("#lTr",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,NB=BIND.length;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function arr(s2,i){return sm((s2-i*.06)/(1-(NB-1)*.06))}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.rec.forEach(function(r){op(r,b)})}
    var s2=seg(p,.36,.64),s3=seg(p,.68,.94);
    /* 1. activated effector cells */
    op(E.hA,b*(.35+.65*seg(p,.04,.2))*(1-.85*s3));
    E.spk.forEach(function(el){op(el,b*seg(p,.06,.22)*(1-s3))});
    op(E.lEff,b*seg(p,.08,.18));op(E.lTr,b*seg(p,.12,.22));
    /* 2. HCW9302 arrives from the left and docks on the Treg receptors, which light up */
    E.mol.forEach(function(el,i){var a=RANG[BIND[i]],f=arr(s2,i),tg=rp(a,TR.r+32);
      var x0=-20,y0=tg[1]+(i%2?-34:34),x=x0+(tg[0]-x0)*f,y=y0+(tg[1]-y0)*f;
      var a0=Math.atan2(tg[1]-y0,tg[0]-x0)*180/Math.PI,a1=180-a;while(a1-a0>180)a1-=360;while(a0-a1>180)a1+=360;
      var ang=a0+(a1-a0)*sm(f*1.4-.4);
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+ang.toFixed(1)+")");op(el,b*Math.min(1,f*5))});
    E.rec.forEach(function(el,k){var i=BIND.indexOf(k),on=i<0?seg(p,.7,.8):arr(s2,i);el.classList.toggle("on",on>.97)});
    /* 3. new Treg cells draw in; the effector cells calm */
    E.exp.forEach(function(l,i){draw(l,b*seg(p,.7+i*.05,.84+i*.05))});
    op(E.hC,b*s3);
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
