/* the story scene (BL/BY/DB, DR): ONE engraved section through the airway of a ventilated patient, kept on screen throughout:
   the trachea, the endotracheal tube with its cuff and pilot line, and secretion above (subglottic) and below the cuff. Each
   step adds one part, as AW Technologies describes TrachFlush: the inflated cuff traps secretion; Cuff Control holds the set
   pressure breath by breath; on Flush, the cuff deflates during the inspiratory cycle; the airflow from the lungs and the
   ventilator pushes the secretion up into the mouth, and the cuff re-inflates before expiration. Proportions are schematic (drawn 1.8x wide). */
var S0=[[281.4,316,5.9],[295.8,311,5.0],[286.8,306,4.5],[375.0,315,5.9],[366.0,309,4.8],[382.2,305,4.2],[279.6,428,5.3],[292.2,441,4.5],[281.4,455,3.9],[378.6,430,5.3],[367.8,446,4.5],[380.4,458,3.9]];
function scene(){
  var mob=MOBILE(),LX=600,RX=176,AX=mob?136:40,AY=mob?40:60;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"110 0 440 540":"0 0 800 560")+'" aria-hidden="true">';
  var wl='M182.4 64C207.6 108 261.6 140 276 172C283.2 186 258 196 258 212V530',wr='M477.6 64C452.4 108 398.4 140 384 172C376.8 186 402 196 402 212V530';
  var rings='';for(var y=226;y<=516;y+=26)rings+='M244 '+y+'H258M402 '+y+'H416';
  var tube='M308.4 14V470M351.6 14V456M308.4 470L351.6 456';
  var pilot='M358.8 322V44C358.8 30 369.6 26 391.2 26H549.6';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="air" d="M276 172C283.2 186 258 196 258 212V530H402V212C402 196 376.8 186 384 172C398.4 140 452.4 108 477.6 64H182.4C207.6 108 261.6 140 276 172Z"/>';
  g+='<path class="wl sD" d="'+wl+'"/><path class="wl sD" d="'+wr+'"/><path class="wi sD" d="'+rings+'"/>';
  g+='<path class="tbf" d="M308.4 14H351.6V456L308.4 470Z"/><path class="wl sD" d="'+tube+'"/><path class="pl sD" d="'+pilot+'"/>';
  g+='<path class="cuf" id="cuff" d=""/></g>';
  /* secretion: a pool resting on the cuff (above) and droplets on the wall below it; each moves up to the mouth on Flush */
  var sec='';S0.forEach(function(d){sec+='<circle class="se" cx="'+d[0]+'" cy="'+d[1]+'" r="'+d[2]+'"/>'});
  /* 1 the cuff traps secretion */
  g+='<g id="sc1">'+sec+
     '<path class="ld2 dr" d="M351.6 250H'+(LX-8)+'"/><text x="'+LX+'" y="254" class="t c">ENDOTRACHEAL TUBE</text>'+
     '<path class="ld2 dr sxl" d="M394.8 309H'+(LX-8)+'"/><text x="'+LX+'" y="313" class="t c sx">SUBGLOTTIC SECRETION</text>'+
     '<path class="ld2 dr" d="M405.6 365H'+(LX-8)+'"/><text x="'+LX+'" y="369" class="t c">CUFF</text>'+
     '<path class="ld2 dr sxl" d="M391.2 444H'+(LX-8)+'"/><text x="'+LX+'" y="448" class="t c sx">SECRETION BELOW THE CUFF</text>'+
     '<path class="ld2 dr" d="M549.6 26H'+(LX-8)+'"/><text x="'+LX+'" y="30" class="t c">TO TRACHFLUSH</text>'+
     '<text x="'+AX+'" y="'+AY+'" class="a">THE CUFF</text></g>';
  /* 2 Cuff Control: the set pressure, held breath by breath */
  g+='<g id="sc2"><path class="pr dr" d="M276 352V378M272 356L276 350L280 356M272 374L276 380L280 374M384 352V378M380 356L384 350L388 356M380 374L384 380L388 374"/>'+
     '<path class="ld2 dr" d="M258 365H'+(RX+8)+'"/><text x="'+RX+'" y="369" class="t c" text-anchor="end">SET PRESSURE</text>'+
     '<text x="'+AX+'" y="'+AY+'" class="a">PRESSURE</text></g>';
  /* 3 deflated as the breath goes in: ventilator air down the tube */
  var dn='';[90,150,210,270].forEach(function(y){dn+='M324 '+y+'L330 '+(y+8)+'L336 '+y});dn+='M330 476V510M324 502L330 510L336 502';
  g+='<g id="sc3"><path class="ar dr" d="'+dn+'"/>'+
     '<path class="ld2 dr" d="M308.4 150H'+(RX+8)+'"/><text x="'+RX+'" y="154" class="t c" text-anchor="end">BREATH IN</text>'+
     '<path class="ld2 dr" d="M286.8 395H'+(RX+8)+'"/><text x="'+RX+'" y="399" class="t c" text-anchor="end">CUFF DEFLATED</text>'+
     '<text x="'+AX+'" y="'+AY+'" class="a">DEFLATE</text></g>';
  /* 4 flushed up: airflow past the deflated cuff carries the secretion into the mouth */
  var up='';[[283.2,250],[376.8,250],[283.2,200],[376.8,200],[283.2,420],[376.8,420]].forEach(function(a){up+='M'+(a[0]-5)+' '+(a[1]+7)+'L'+a[0]+' '+a[1]+'L'+(a[0]+5)+' '+(a[1]+7)});
  g+='<g id="sc4"><path class="ar2 dr" d="'+up+'"/>'+
     '<path class="ld2 dr" d="M452.4 92H'+(LX-8)+'"/><text x="'+LX+'" y="96" class="t c">INTO THE MOUTH</text>'+
     '<text x="'+AX+'" y="'+AY+'" class="a">FLUSH</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .air, #scBase .tbf, #scBase .cuf",svg),
    g:[$("#sc1",svg),$("#sc2",svg),$("#sc3",svg),$("#sc4",svg)],
    d:[dl("#sc1 .dr"),dl("#sc2 .dr"),dl("#sc3 .dr"),dl("#sc4 .dr")],
    c:[$$("#sc1 text.t",svg),$$("#sc2 text.t",svg),$$("#sc3 text.t",svg),$$("#sc4 text.t",svg)],
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)]};
  var cuff=$("#cuff",svg),se=$$("#sc1 .se",svg),sx=$$("#sc1 .sx",svg),sxl=$$("#sc1 .sxl",svg);
  /* each droplet's way out: up its own side of the gap, through the glottis, into the mouth */
  var TG=[[268.8,104],[290.4,96],[276.0,86],[391.2,104],[369.6,96],[384.0,86],[250.8,118],[297.6,112],[261.6,128],[409.2,118],[362.4,112],[398.4,128]];
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function cuffD(f){var a=308.4-48.6*f,b=308.4-32.4*f,c=351.6+48.6*f,d=351.6+32.4*f;
    return 'M308.4 322C'+b+' 330 '+a+' 345 '+a+' 365C'+a+' 385 '+b+' 400 308.4 408ZM351.6 322C'+d+' 330 '+c+' 345 '+c+' 365C'+c+' 385 '+d+' 400 351.6 408Z'}
  function ease(x){x=Math.max(0,Math.min(1,x));return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s=[Math.max(seg(p,0,.16),.55),seg(p,.25,.44),seg(p,.5,.69),seg(p,.75,.94)];
    for(var i=0;i<4;i++){
      var on=i===0?b:b*(s[i]>0?1:0),nx=i<3?s[i+1]:0;
      E.g[i].style.opacity=on.toFixed(3);draw(E.d[i],i===0?b*s[0]:s[i]);
      var lv=(i===0?b:Math.max(0,Math.min(1,s[i]*2-1)))*(1-.5*nx);
      E.c[i].forEach(function(el){el.style.opacity=lv.toFixed(3)});
    }
    /* step 2's pressure marks and step 3's labels hand over cleanly (they share the left side) */
    E.g[1].style.opacity=(b*(s[1]>0?1:0)*(1-s[2])).toFixed(3);
    E.g[2].style.opacity=(b*(s[2]>0?1:0)*(1-s[3])).toFixed(3);
    /* the cuff: inflated, deflates on Flush, re-inflates once the secretion is through */
    var f=1-ease(s[2]*1.4)+ease((s[3]-.8)*5);
    cuff.setAttribute("d",cuffD(Math.max(.1,Math.min(1,f))));
    /* the secretion labels leave with the secretion */
    var gone=1-ease(s[3]*1.6);
    sx.forEach(function(el){el.style.opacity=(parseFloat(el.style.opacity)*gone).toFixed(3)});
    sxl.forEach(function(el){el.style.opacity=gone.toFixed(3)});
    var m=ease((s[3]-.05)/.75);
    se.forEach(function(el,k){var o=S0[k],t=TG[k],q=ease(m*1.25-(k%6)*.04);
      el.setAttribute("transform","translate("+((t[0]-o[0])*q).toFixed(1)+" "+((t[1]-o[1])*q).toFixed(1)+")")});
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s[1]).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}
