/* The story scene (DB/BL): how Spectrogon's two technologies sort light, drawn as ONE fine-line side elevation that fills the
   frame. Frame 0 is complete: the incoming beam path, the grating blank with its groove profile, the thin film filter (a stack of
   layers) and the detector. Step 1: white light runs in and strikes the grating. Step 2: diffraction fans it into a first-order
   spectrum, each wavelength at its own angle (red is deviated most). Step 3: the bandpass filter passes one band to the detector;
   the rest is blocked and dims. Driven by scrubbed progress. No stroke uses vector-effect:non-scaling-stroke (DR4). */
var SCW=760,SCH=560;
var GX=300,GY=420,FX=600,DX=700;
var RAYS=[["#9b7bff",150],["#5a86ff",180],["#33b8ff",210],["#3fdc8a",240],["#d2ea3c",270],["#ffb23a",300],["#ff5240",330]];
var PASS=3;
function grooves(){var d='M200 '+GY;for(var x=200;x<400;x+=8){d+='L'+(x+6)+' '+(GY-5)+'L'+(x+8)+' '+GY}return d}
function storyScene(o){
  var g='',mob=o.mob,yP=RAYS[PASS][1];
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'20 64 730 456':'0 40 760 520')+'" aria-hidden="true">';
  g+='<g id="scBase">'+
     /* the beam path (unlit), the grating blank and its groove profile */
     '<path class="wo sD" d="M40 90L'+GX+' '+GY+'"/>'+
     '<rect class="wl sD" x="200" y="'+GY+'" width="200" height="48"/>'+
     '<path class="wg sD" d="'+grooves()+'"/>'+
     /* the filter: a substrate carrying a stack of thin layers */
     '<rect class="wl sD" x="'+FX+'" y="110" width="18" height="260"/>'+
     [3,6,9].map(function(i){return '<path class="wg sD" d="M'+(FX+i)+' 110V370"/>'}).join("")+
     /* the detector and its leads */
     '<rect class="wl sD" x="'+DX+'" y="'+(yP-24)+'" width="26" height="48"/>'+
     '<path class="wo sD" d="M'+(DX+26)+' '+(yP-10)+'H752M'+(DX+26)+' '+(yP+10)+'H752"/>'+
     /* the fan's unlit guides */
     RAYS.map(function(r){return '<path class="wo sD" d="M'+GX+' '+GY+'L'+FX+' '+r[1]+'"/>'}).join("")+
     '</g>';
  g+='<g id="scLit"><path id="lIn" class="lw" d="M40 90L'+GX+' '+GY+'"/>'+
     '<path id="grG" class="gg" d="'+grooves()+'"/>'+
     RAYS.map(function(r,i){return '<path id="ry'+i+'" class="ry" style="stroke:'+r[0]+'" d="M'+GX+' '+GY+'L'+FX+' '+r[1]+'"/>'}).join("")+
     '<rect id="fx" class="fx" x="'+FX+'" y="110" width="18" height="260"/>'+
     '<path id="lP" class="ry" style="stroke:'+RAYS[PASS][0]+'" d="M'+(FX+18)+' '+yP+'H'+DX+'"/>'+
     '<rect id="dx" class="dx" x="'+DX+'" y="'+(yP-24)+'" width="26" height="48"/></g>';
  if(!mob){
    /* labels sit clear of every stroke, each with >=8px space */
    g+='<g id="lWl"><text class="t" x="40" y="74">WHITE LIGHT</text></g>';
    g+='<g id="lGr"><text class="t" x="300" y="500" text-anchor="middle">HOLOGRAPHIC GRATING</text></g>';
    g+='<g id="lFi"><text class="t" x="'+(FX+9)+'" y="92" text-anchor="middle">BANDPASS FILTER</text></g>';
    g+='<g id="lDe"><text class="t" x="'+(DX+13)+'" y="'+(yP+48)+'" text-anchor="middle">DETECTOR</text></g>';
  }else{g+='<g id="lWl"></g><g id="lGr"></g><g id="lFi"></g><g id="lDe"></g>'}
  var ly=mob?508:548,lx=mob?30:14;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'LIGHT STRIKES THE GRATING':'WHITE LIGHT STRIKES THE GROOVES')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'A SPECTRUM FANS OUT':'EACH WAVELENGTH LEAVES AT ITS OWN ANGLE')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'ONE BAND PASSES':'THE FILTER PASSES ONE BAND AND BLOCKS THE REST')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),lIn:dl("#lIn")[0],grG:$("#grG",svg),ry:RAYS.map(function(r,i){return dl("#ry"+i)[0]}),lP:dl("#lP")[0],fx:$("#fx",svg),dx:$("#dx",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),lab:[$("#lWl",svg),$("#lGr",svg),$("#lFi",svg),$("#lDe",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function dr(a,v){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1);a[0].style.opacity=v>0?"1":"0"}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    E.lab.forEach(function(l){op(l,b)});
    /* step 1: the white beam runs in and the grooves catch it */
    var a1=sm(seg(p,.05,.24));dr(E.lIn,a1*b);op(E.grG,b*sm(seg(p,.2,.3)));
    /* step 2: the spectrum fans out, violet first */
    E.ry.forEach(function(a,i){var v=sm(seg(p,.38+i*.025,.52+i*.025));dr(a,v*b)});
    /* step 3: the filter lights; one band passes to the detector, the rest dims */
    var h=sm(seg(p,.72,.84));op(E.fx,b*h);
    E.ry.forEach(function(a,i){if(i!==PASS&&h>0)a[0].style.opacity=(1-.75*h).toFixed(3)});
    dr(E.lP,sm(seg(p,.76,.86))*b);op(E.dx,b*sm(seg(p,.82,.9)));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.76,.84));
  };
}
