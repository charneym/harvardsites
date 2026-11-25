/* the story scene (BL/BY/DB): ONE fine-line section through a cell surface, kept on screen for all three steps (serpinpharma.com/the-science).
   Step 1 inflammatory triggers sit on the membrane, NF-kB glows and cytokines stream out. Step 2 SP16 chains (logo blue with the
   green binding stretch) settle into the LRP1 receptors. Step 3 the triggers are drawn inside in vesicles and fade, the signal runs
   down to ERK and AKT, which light, NF-kB dims and the cytokine stream thins. Driven by the scrubbed story progress. */
function memY(x){var t=x/800;return 262-96*t*(1-t)}
var REC=[210,400,590],TRG=[118,298,330,500,688,720],VES=[[292,352],[330,372],[498,350],[700,358]];
var CYT=(function(){var a=[],i,r=16;function rnd(){r=(r*9301+49297)%233280;return r/233280}for(i=0;i<20;i++)a.push([320+rnd()*440,0,rnd(),2.2+rnd()*1.8]);return a})();
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,x;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="glA" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#f0a860" stop-opacity=".6"/><stop offset="1" stop-color="#f0a860" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="cyG" cx="400" cy="420" r="420" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2bb8ef" stop-opacity=".09"/><stop offset=".7" stop-color="#2bb8ef" stop-opacity=".03"/><stop offset="1" stop-color="#2bb8ef" stop-opacity="0"/></radialGradient>'+
     '<linearGradient id="mfG" x1="0" x2="800" y1="0" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".08" stop-color="#fff"/><stop offset=".92" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><mask id="mf" maskUnits="userSpaceOnUse" x="0" y="0" width="800" height="560"><rect width="800" height="560" fill="url(#mfG)"/></mask>'+
     '<radialGradient id="glG" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#69e269" stop-opacity=".55"/><stop offset="1" stop-color="#69e269" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  /* cytoplasm fill and the nucleus */
  var mo='M0 '+f(memY(0)+14),mi='';for(x=0;x<=800;x+=20)mo+='L'+x+' '+f(memY(x)+14);
  g+='<path class="cyto" d="'+mo+'L800 560L0 560Z"/>';
  g+='<path class="nuc sD" d="M120 560C150 440 300 410 400 410S650 440 680 560"/>';
  g+='<path class="nuc2 sD" d="M150 560C178 458 310 432 400 432S622 458 650 560"/>';
  /* the membrane: two leaflets with fine hatching between */
  var m1='',m2='',hz='';for(x=0;x<=800;x+=10){m1+=(x?'L':'M')+x+' '+f(memY(x));m2+=(x?'L':'M')+x+' '+f(memY(x)+14)}
  for(x=4;x<800;x+=8)hz+='M'+x+' '+f(memY(x)+3)+'L'+x+' '+f(memY(x)+11);
  g+='<g mask="url(#mf)"><path class="mem sD" d="'+m1+'"/><path class="mem sD" d="'+m2+'"/><path class="memh sD" d="'+hz+'"/></g>';
  /* LRP1 receptors: a stem through the membrane and a two-lobed cup outside */
  REC.forEach(function(rx){var y=memY(rx);
    g+='<path class="rec sD" d="M'+(rx-3)+' '+f(y+40)+'V'+f(y-30)+'M'+(rx+3)+' '+f(y+40)+'V'+f(y-30)+'"/>';
    g+='<path class="rec sD" d="M'+(rx-3)+' '+f(y-30)+'C'+(rx-30)+' '+f(y-40)+' '+(rx-34)+' '+f(y-74)+' '+(rx-16)+' '+f(y-84)+'C'+(rx-8)+' '+f(y-74)+' '+(rx-6)+' '+f(y-50)+' '+rx+' '+f(y-44)+
       'C'+(rx+6)+' '+f(y-50)+' '+(rx+8)+' '+f(y-74)+' '+(rx+16)+' '+f(y-84)+'C'+(rx+34)+' '+f(y-74)+' '+(rx+30)+' '+f(y-40)+' '+(rx+3)+' '+f(y-30)+'"/>'});
  /* signalling nodes inside the cell */
  g+='<circle id="gNF" cx="190" cy="372" r="62" fill="url(#glA)" opacity="0"/><circle id="gERK" cx="470" cy="378" r="58" fill="url(#glG)" opacity="0"/><circle id="gAKT" cx="610" cy="372" r="58" fill="url(#glG)" opacity="0"/>';
  g+='<rect class="nd sD" x="150" y="356" width="80" height="32"/><text class="nt" x="190" y="377" text-anchor="middle">NF-κB</text>';
  g+='<rect class="nd sD" x="436" y="362" width="68" height="32"/><text class="nt" x="470" y="383" text-anchor="middle">ERK</text>';
  g+='<rect class="nd sD" x="576" y="356" width="68" height="32"/><text class="nt" x="610" y="377" text-anchor="middle">AKT</text>';
  g+='<text class="t" x="784" y="546" text-anchor="end">CELL SURFACE · SCHEMATIC</text>';
  g+='</g>';
  /* moving parts */
  g+='<g id="scMove">';
  /* signal paths: trigger to NF-kB (step 1), receptor to ERK and AKT (step 3) */
  g+='<path id="sgNF" class="sg" d="M210 '+f(memY(210)+40)+'C210 320 196 330 192 352"/>';
  g+='<path id="sgE" class="sg sg2" d="M400 '+f(memY(400)+40)+'C400 330 470 320 470 358"/><path id="sgA" class="sg sg2" d="M590 '+f(memY(590)+40)+'C590 320 610 330 610 352"/>';
  for(i=0;i<CYT.length;i++)g+='<circle class="cyt" r="'+f(CYT[i][3])+'"/>';
  VES.forEach(function(v,k){g+='<circle class="ves" id="ves'+k+'" cx="'+v[0]+'" cy="'+v[1]+'" r="15"/>'});
  TRG.forEach(function(tx,k){g+='<path class="trg" id="trg'+k+'" d="M0 -8L7 0L0 8L-7 0Z"/>'});
  /* SP16: five beads, the middle three in the logo's green, settling into each receptor cup */
  REC.forEach(function(rx,k){g+='<g class="sp" id="sp'+k+'"><path class="spb" d="M-22 -10L-11 -2L0 -8L11 -2L22 -10"/>'+
    [[-22,-10,0],[-11,-2,1],[0,-8,1],[11,-2,1],[22,-10,0]].map(function(b){return '<circle cx="'+b[0]+'" cy="'+b[1]+'" r="5.2" class="'+(b[2]?'bg':'bb')+'"/>'}).join('')+'</g>'});
  g+='</g>';
  /* labels, one set per step (leaders end at the thing they name; 8px clear of every stroke) */
  var ty=memY(118)-12;
  g+='<g id="lb1">'+(mob?'<text class="a" x="24" y="60">TRIGGERS</text><path class="ldr" d="M70 78L112 '+f(ty-14)+'"/>':'<text class="a" x="24" y="96">INFLAMMATORY TRIGGERS</text><path class="ldr" d="M70 110L112 '+f(ty-14)+'"/>')+
     '<text class="a" x="'+(mob?776:640)+'" y="'+(mob?60:52)+'"'+(mob?' text-anchor="end"':'')+'>CYTOKINES</text></g>';
  g+='<g id="lb2"><text class="a" x="'+(mob?24:24)+'" y="'+(mob?60:96)+'">SP16</text><path class="ldr" d="M'+(mob?110:76)+' '+(mob?56:92)+'L'+(REC[0]-34)+' '+f(memY(REC[0])-110)+'"/>'+
     '<text class="a" x="24" y="'+(mob?352:330)+'">'+(mob?'LRP1':'LRP1 RECEPTOR')+'</text><path class="ldr" d="M'+(mob?100:150)+' '+(mob?336:316)+'L'+(REC[0]-12)+' '+f(memY(REC[0])+30)+'"/></g>';
  g+='<g id="lb3"><text class="a" x="24" y="'+(mob?60:96)+'">'+(mob?'CLEARED':'TRIGGERS CLEARED')+'</text><path class="ldr" d="M'+(mob?120:150)+' '+(mob?76:108)+'L280 338"/>'+
     '<text class="a" x="'+(mob?776:640)+'" y="'+(mob?60:52)+'"'+(mob?' text-anchor="end"':'')+'>'+(mob?'BALANCED':'BALANCED OUTPUT')+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .cyto",svg),mv:$("#scMove",svg),
    nf:$("#gNF",svg),erk:$("#gERK",svg),akt:$("#gAKT",svg),sNF:dl("#sgNF"),sEA:dl("#sgE,#sgA"),
    cyt:$$(".cyt",svg),ves:$$(".ves",svg),trg:$$(".trg",svg),sp:$$(".sp",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=seg(p,0,.14),s2=seg(p,.34,.52),s3=seg(p,.66,.86);
    /* step 1: NF-kB glows, the signal runs to it, cytokines stream out */
    op(E.nf,b*(.35+.65*s1)*(1-.85*s3));draw(E.sNF,b*s1*(1-s3));
    var flow=1-.75*s3;
    E.cyt.forEach(function(el,i){var c=CYT[i],u=((p*1.6)+c[2])%1,x0=c[0],y0=memY(x0)-14,y=y0-u*(y0-84),x=x0+Math.sin(u*5+i)*10;
      el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1));op(el,b*(.35+.65*s1)*Math.sin(u*Math.PI)*(i<CYT.length*flow?1:0))});
    /* step 2: SP16 settles into each receptor cup */
    E.sp.forEach(function(el,k){var rx=REC[k],y=memY(rx)-62,d=(1-seg(p,.3+k*.04,.5+k*.03))*150;
      el.setAttribute("transform","translate("+rx+" "+(y-d).toFixed(1)+")");op(el,b*seg(p,.26+k*.04,.36+k*.04))});
    /* step 3: triggers drawn inside in vesicles, fading; ERK and AKT light */
    E.trg.forEach(function(el,k){var tx=TRG[k],ty=memY(tx)-12,v=VES[Math.min(VES.length-1,[0,0,1,2,3,3][k])],q=seg(p,.66,.8);
      var x=tx+(v[0]+(k%2?6:-6)-tx)*q,y=ty+(v[1]-ty)*q;el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");op(el,b*(1-seg(p,.8,.9)))});
    E.ves.forEach(function(el){op(el,b*seg(p,.68,.76))});
    draw(E.sEA,b*seg(p,.7,.84));op(E.erk,b*seg(p,.76,.9));op(E.akt,b*seg(p,.78,.92));
    op(E.l1,b*(1-seg(p,.26,.34)));op(E.l2,b*s2*(1-seg(p,.6,.66)));op(E.l3,b*seg(p,.74,.84));
  };
}
