/* the story scene: one Traqbeat device, two applications, told in four stills from Traqbeat's own product film
   (traqbeat.com/images/tb_mia.mp4 at 16.5, 19.5, 25 and 28 s). Step 1 the wrist bracelet; step 2 the sensor core lifts out of the
   bracelet housing; step 3 the core meets the chest patch; step 4 the patch worn on the chest for continuous monitoring. The stills
   cross-fade under long linear edge feathers (horizontal and vertical, no oval vignette) into the page ink (no frame edge), with a slow push-in and one fine-line caption per step. */
function scene(){
  var mob=MOBILE(),cs=mob?30:17;
  var caps=["WRIST BRACELET · IN AND OUT OF THE CLINIC","ONE CORE · LIFTS OUT OF THE HOUSING","CHEST PATCH · THE SAME CORE","CONTINUOUS · 3–7 DAYS ON A CHARGE"];
  var s='<svg viewBox="0 0 1280 760" preserveAspectRatio="xMidYMid meet" role="img" aria-label="The Traqbeat wearable worn as a wrist bracelet, its sensor core lifting out, and the same core worn as a chest patch">';
  s+='<defs><linearGradient id="tqG" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#000"/><stop offset=".07" stop-color="#1a1a1a"/><stop offset=".3" stop-color="#fff"/><stop offset=".72" stop-color="#fff"/><stop offset=".93" stop-color="#1a1a1a"/><stop offset="1" stop-color="#000"/></linearGradient>'+
     '<linearGradient id="tqV" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000"/><stop offset=".06" stop-color="#1a1a1a"/><stop offset=".3" stop-color="#fff"/><stop offset=".7" stop-color="#fff"/><stop offset=".94" stop-color="#1a1a1a"/><stop offset="1" stop-color="#000"/></linearGradient>'+
     '<mask id="tqM" maskUnits="userSpaceOnUse" x="0" y="0" width="1280" height="720"><rect width="1280" height="720" fill="url(#tqG)"/></mask>'+
     '<mask id="tqM2" maskUnits="userSpaceOnUse" x="0" y="0" width="1280" height="720"><rect width="1280" height="720" fill="url(#tqV)"/></mask></defs>';
  s+='<g mask="url(#tqM2)"><g mask="url(#tqM)">';
  for(var i=1;i<=4;i++)s+='<image class="tqi" id="tqI'+i+'" href="st'+i+'.webp" x="0" y="0" width="1280" height="720" preserveAspectRatio="xMidYMid slice" style="opacity:'+(i===1?1:0)+'"/>';
  s+='</g></g>';
  caps.forEach(function(t,i){s+='<text class="cap" id="tqC'+i+'" x="640" y="'+(mob?752:748)+'" text-anchor="middle" style="font-size:'+cs+'px">'+t+'</text>'});
  return s+'</svg>';
}
function storyDraw(svg){
  var I=[1,2,3,4].map(function(i){return $("#tqI"+i,svg)}),C=[0,1,2,3].map(function(i){return $("#tqC"+i,svg)});
  var W=[[0,0,.21,.27],[.21,.27,.46,.52],[.46,.52,.71,.77],[.71,.77,2,2]];
  return function(p,b){
    if(!I[0].isConnected)return;
    svg.style.opacity=(.35+.65*b).toFixed(3);
    I.forEach(function(el,k){var a=k===0?1:seg(p,W[k][0],W[k][1]),o=k===3?0:seg(p,W[k][2],W[k][3]),v=a*(1-o);
      el.style.opacity=v.toFixed(3);
      var lp=Math.max(0,Math.min(1,(p-W[k][0])/((k===3?1:W[k][3])-W[k][0]))),z=1+.05*lp;
      el.setAttribute("transform","translate("+(640*(1-z)).toFixed(1)+" "+(360*(1-z)).toFixed(1)+") scale("+z.toFixed(4)+")")});
    C.forEach(function(el,k){var a=k===0?1:seg(p,W[k][0]+.02,W[k][1]+.02),o=k===3?0:seg(p,W[k][2],W[k][3]-.02);el.style.opacity=(b*a*(1-o)).toFixed(3)});
  };
}
