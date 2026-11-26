/* The story scene (BL/BY/DB, DR): ONE fine-line cutaway of multi-layer catheter tubing, the application Compounding Solutions
   draws on its own Products page (inner layer, ReZilok Rx tie layer, outer layer), in side elevation, kept for all four steps:
   1 the inner layer of base resin, with its lumen;
   2 the ReZilok Rx tie layer wraps it;
   3 the outer jacket, filled with radiopaque particles (PEBA RO, PU RO, COPE RO);
   4 the surface: PurTone Rx color, MasterMark Rx laser marks, Mobilize Rx low friction (glide arrows).
   Captions sit in clear space above the tube on desktop; on phones one caption under the drawing. */
var CY=300,KE=.32;
function csCyl(x0,x1,r,cls){var k=(KE*r).toFixed(1);return '<path class="'+cls+'" d="M'+x0+' '+(CY-r)+'H'+x1+'A'+k+' '+r+' 0 0 1 '+x1+' '+(CY+r)+'H'+x0+'A'+k+' '+r+' 0 0 1 '+x0+' '+(CY-r)+'Z"/>'}
function csEl(x,r){var k=(KE*r).toFixed(1);return 'M'+x+' '+(CY-r)+'A'+k+' '+r+' 0 1 1 '+x+' '+(CY+r)+'A'+k+' '+r+' 0 1 1 '+x+' '+(CY-r)}
function csRing(x,ro,ri,cls){return '<path class="'+cls+'" fill-rule="evenodd" d="'+csEl(x,ro)+'Z'+csEl(x,ri)+'Z"/>'}
function csScene(mob){
  var g='',X0=120,XI=640,XT=566,XO=488,RL=38,RI=60,RT=72,RO=112;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'70 150 640 340':'60 74 640 400')+'" aria-hidden="true">';
  /* 1: inner layer and lumen */
  g+='<g id="csIn">'+csCyl(X0,XI,RI,"fi")+csRing(XI,RI,RL,"fi")+'<path class="lu" d="'+csEl(XI,RL)+'Z"/></g>';
  g+='<g id="csInL"><path class="ln sD" d="M'+X0+' '+(CY-RI)+'H'+XI+'M'+X0+' '+(CY+RI)+'H'+XI+'"/><path class="ln sD" d="'+csEl(XI,RI)+'"/><path class="ln sD" d="'+csEl(XI,RL)+'"/><path class="ln sD" d="'+csEl(X0,RI)+'"/></g>';
  /* 2: tie layer */
  g+='<g id="csTie">'+csCyl(X0,XT,RT,"ft")+csRing(XT,RT,RI,"ft")+'</g>';
  g+='<g id="csTieL"><path class="lt sD" d="M'+X0+' '+(CY-RT)+'H'+XT+'M'+X0+' '+(CY+RT)+'H'+XT+'"/><path class="lt sD" d="'+csEl(XT,RT)+'"/><path class="lt sD" d="'+csEl(X0,RT)+'"/></g>';
  /* 3: outer jacket with radiopaque particles; 4: its color */
  g+='<g id="csOut">'+csCyl(X0,XO,RO,"fo")+csRing(XO,RO,RT,"fo")+'</g>';
  g+='<g id="csCol">'+csCyl(X0,XO,RO,"fc")+csRing(XO,RO,RT,"fc")+'</g>';
  var dots='',s=7;function rnd(){s=(s*9301+49297)%233280;return s/233280}
  for(var i=0;i<120;i++){var x=X0+18+rnd()*(XO-X0-30),y=CY-RO+8+rnd()*(2*RO-16);dots+='<circle class="dt" cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="'+(1.3+rnd()*1.3).toFixed(1)+'"/>'}
  for(var j=0;j<26;j++){var a=rnd()*Math.PI*2,rr=RT+6+rnd()*(RO-RT-12);dots+='<circle class="dt" cx="'+(XO+Math.cos(a)*rr*KE).toFixed(1)+'" cy="'+(CY+Math.sin(a)*rr).toFixed(1)+'" r="'+(1.3+rnd()*1.1).toFixed(1)+'"/>'}
  g+='<g id="csDots">'+dots+'</g>';
  g+='<g id="csOutL"><path class="lo sD" d="M'+X0+' '+(CY-RO)+'H'+XO+'M'+X0+' '+(CY+RO)+'H'+XO+'"/><path class="lo sD" d="'+csEl(XO,RO)+'"/><path class="lo sD" d="'+csEl(X0,RO)+'"/></g>';
  /* 4: laser marks on the jacket and glide arrows along its surface */
  var mk='';for(var m=0;m<10;m++){var mx=X0+46+m*32,L=m%5===0?36:20;mk+='<path class="mk sD" d="M'+mx+' '+(CY-L/2)+'V'+(CY+L/2)+'"/>'}
  g+='<g id="csMark">'+mk+'</g>';
  var ar='';[0,1,2].forEach(function(k){var ax=X0+60+k*125,ay=CY-RO-24;ar+='<path class="gl2 sD" d="M'+(ax+70)+' '+ay+'H'+ax+'"/><path class="ah" d="M'+(ax+8)+' '+(ay-5)+'L'+ax+' '+ay+'L'+(ax+8)+' '+(ay+5)+'"/>'});
  g+='<g id="csGlide">'+ar+'</g>';
  if(mob){
    var CM=["1 · INNER LAYER OF BASE RESIN","2 · REZILOK RX TIE LAYER","3 · RADIOPAQUE OUTER LAYER","4 · COLOR, MARK, LOW FRICTION"];
    CM.forEach(function(c,k){g+='<text class="a gl" id="csG'+k+'" x="390" y="'+(CY+RO+62)+'" text-anchor="middle">'+c+'</text>'});
  }else{
    var CAP=[["INNER LAYER","BASE RESIN, COMPOUNDED IN THE WHITE ROOM"],["REZILOK RX TIE LAYER","BONDS THE INNER LAYER TO THE OUTER"],["RADIOPAQUE OUTER LAYER","BARIUM SULFATE, BISMUTH OR TUNGSTEN"],["COLOR · MARK · GLIDE","PURTONE RX · MASTERMARK RX · MOBILIZE RX"]];
    CAP.forEach(function(c,k){g+='<g class="gl" id="csG'+k+'"><text class="a" x="92" y="100">'+c[0]+'</text><text class="t" x="92" y="124">'+c[1]+'</text></g>'});
  }
  return g+'</svg>';
}
function scene(){return csScene(MOBILE()?1:0)}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={inL:dl("#csInL .sD"),tieL:dl("#csTieL .sD"),outL:dl("#csOutL .sD"),mk:dl("#csMark .sD"),gl:dl("#csGlide .sD"),
    inF:$("#csIn",svg),tieF:$("#csTie",svg),outF:$("#csOut",svg),col:$("#csCol",svg),dots:$("#csDots",svg),mkG:$("#csMark",svg),glG:$("#csGlide",svg),
    heads:$$("#csGlide .ah",svg),tieLG:$("#csTieL",svg),outLG:$("#csOutL",svg),cap:[0,1,2,3].map(function(j){return $("#csG"+j,svg)})};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.inL,b)}
    var g=seg(b,.35,1);
    op(E.inF,g);
    /* 2: tie layer */
    op(E.tieLG,seg(p,.26,.27));op(E.tieF,g*seg(p,.26,.34));draw(E.tieL,seg(p,.26,.42));
    /* 3: outer layer and particles */
    op(E.outLG,seg(p,.5,.51));op(E.outF,g*seg(p,.5,.58));draw(E.outL,seg(p,.5,.66));op(E.dots,g*seg(p,.58,.68));
    /* 4: color, marks, glide */
    op(E.col,g*seg(p,.76,.84));op(E.mkG,g*seg(p,.78,.8));draw(E.mk,seg(p,.78,.9));
    op(E.glG,g*seg(p,.84,.86));draw(E.gl,seg(p,.84,.94));E.heads.forEach(function(h){op(h,seg(p,.9,.94))});
    var W=[[0,0,.25],[1,.25,.5],[2,.5,.75],[3,.75,1.01]];
    W.forEach(function(w){var i=w[0],a=w[1],z=w[2],v=(i?seg(p,a,a+.05):1)*(i<3?1-seg(p,z-.03,z+.02):1);op(E.cap[i],g*v)});
  };
}
