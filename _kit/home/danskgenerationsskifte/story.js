/* the story scene (DB: fills its frame; DG: the firm's own photography): four of Dansk Generationsskifte's own photographs,
   each filling the whole frame and crossfading as the four principles of its strategy advance: Flintholm, the two partners,
   and the rooms at Flintholm where owners and managers meet. A thin accent rule and a counter frame the picture. */
var SCN=[["img/domicil.jpg","Flintholm, Vester Skerninge","xMidYMid"],["img/partnere.jpg","Lars Bladt og Jens Heimburger","xMinYMid"],["img/salen.jpg","Flintholm","xMidYMid"],["img/skulptur.jpg","Flintholm","xMidYMid"]];
function scene(){
  var g='<svg class="ph" aria-hidden="true" width="100%" height="100%" preserveAspectRatio="none"><defs><linearGradient id="scg" x1="0" y1="0" x2="0" y2="1"><stop offset=".55" stop-color="#0b161c" stop-opacity="0"/><stop offset="1" stop-color="#0b161c" stop-opacity=".72"/></linearGradient></defs>';
  SCN.forEach(function(s,i){g+='<image class="si" id="si'+i+'" href="'+s[0]+'" x="0" y="0" width="100%" height="100%" preserveAspectRatio="'+s[2]+' slice" style="opacity:'+(i?0:1)+'"/>'});
  g+='<rect class="tint" x="0" y="0" width="100%" height="100%"/><rect x="0" y="0" width="100%" height="100%" fill="url(#scg)"/><rect class="neat" x=".5" y=".5" width="99.8%" height="99.8%" fill="none"/>';
  g+='<line class="acc" id="scAcc" x1="0" y1="100%" x2="100%" y2="100%"/>';
  SCN.forEach(function(s,i){g+='<text class="cap" id="sc'+i+'" x="24" y="94%" style="opacity:'+(i?0:1)+'">'+esc(s[1]).toUpperCase()+'</text>'});
  g+='<text class="cnt" id="scN" x="97%" y="94%" text-anchor="end">01 / 04</text>';
  return g+'</svg>';
}
function storyDraw(svg){
  var I=$$(".si",svg),T=$$(".cap",svg),N=$("#scN",svg),A=$("#scAcc",svg),last=-1;
  return function(p,b){
    if(!svg.isConnected)return;
    svg.style.opacity=(.25+.75*b).toFixed(3);
    var f=Math.min(3,p*4),k=Math.floor(f),u=f-k,x=u<.72?0:(u-.72)/.28;x=x*x*(3-2*x);if(k>=3){k=3;x=0}
    I.forEach(function(im,i){var o=i===k?1:(i===k+1?x:0);im.style.opacity=o.toFixed(3);im.style.transform="scale("+(1.04-.04*(i===k?u:0)).toFixed(4)+")";im.style.transformOrigin="50% 50%"});
    T.forEach(function(t,i){t.style.opacity=(i===k?1-x:(i===k+1?x:0)).toFixed(3)});
    var n=Math.min(4,Math.floor(p*4*.9999)+1);if(n!==last){last=n;N.textContent="0"+n+" / 04"}
    A.style.strokeDasharray="1000 1000";A.setAttribute("pathLength","1000");A.style.strokeDashoffset=(1000*(1-p)).toFixed(1);
  };
}
