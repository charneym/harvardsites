/* the story scene: how sustained acoustic medicine is worn, told in four of ZetrOZ's own sam® 3.0 launch photographs
   (zetroz.com/wp-content/uploads/2026/07/Untitled-design-4, -2, -5, -3). Step 1 the applicator on the shoulder; step 2 the controller
   at the waistband, worn through the day; step 3 two applicators over the lower back; step 4 the sam® 3.0 kit in its case.
   The stills cross-fade under long linear edge feathers (horizontal and vertical, no oval vignette) into the page ink (no frame edge),
   with a slow push-in and one caption per step set below the picture (never over it). */
function scene(){
  var mob=MOBILE(),cs=mob?28:17,VW=mob?900:1280,HX=VW/2;
  var caps=["APPLICATOR · OVER THE INJURY","CONTROLLER · UP TO 8 HOURS OF THERAPY","LOW INTENSITY · LONG DURATION","SAM® 3.0 · FDA CLEARED 2026"];
  var s='<svg viewBox="0 0 '+VW+' 760" preserveAspectRatio="xMidYMid meet" role="img" aria-label="The sam® 3.0 applicator worn on a shoulder, the controller worn at the waist, two applicators over the lower back, and the sam® 3.0 kit in its case">';
  s+='<defs><linearGradient id="zsG" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#000"/><stop offset=".08" stop-color="#222"/><stop offset=".3" stop-color="#fff"/><stop offset=".72" stop-color="#fff"/><stop offset=".92" stop-color="#222"/><stop offset="1" stop-color="#000"/></linearGradient>'+
     '<linearGradient id="zsV" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000"/><stop offset=".07" stop-color="#222"/><stop offset=".3" stop-color="#fff"/><stop offset=".7" stop-color="#fff"/><stop offset=".93" stop-color="#222"/><stop offset="1" stop-color="#000"/></linearGradient>'+
     '<mask id="zsM" maskUnits="userSpaceOnUse" x="0" y="0" width="'+VW+'" height="720"><rect width="'+VW+'" height="720" fill="url(#zsG)"/></mask>'+
     '<mask id="zsM2" maskUnits="userSpaceOnUse" x="0" y="0" width="'+VW+'" height="720"><rect width="'+VW+'" height="720" fill="url(#zsV)"/></mask></defs>';
  s+='<g mask="url(#zsM2)"><g mask="url(#zsM)">';
  for(var i=1;i<=4;i++)s+='<image class="zsi" id="zsI'+i+'" href="st'+i+'.webp" x="0" y="0" width="'+VW+'" height="720" preserveAspectRatio="xMidYMid slice" style="opacity:'+(i===1?1:0)+'"/>';
  s+='</g></g>';
  caps.forEach(function(t,i){s+='<text class="zcap" id="zsC'+i+'" x="'+HX+'" y="'+(mob?754:750)+'" text-anchor="middle" style="font-size:'+cs+'px">'+t+'</text>'});
  return s+'</svg>';
}
function storyDraw(svg){
  var I=[1,2,3,4].map(function(i){return $("#zsI"+i,svg)}),C=[0,1,2,3].map(function(i){return $("#zsC"+i,svg)});
  var HX=+svg.getAttribute("viewBox").split(" ")[2]/2;
  var W=[[0,0,.21,.27],[.21,.27,.46,.52],[.46,.52,.71,.77],[.71,.77,2,2]];
  return function(p,b){
    if(!I[0].isConnected)return;
    svg.style.opacity=(.35+.65*b).toFixed(3);
    I.forEach(function(el,k){var a=k===0?1:seg(p,W[k][0],W[k][1]),o=k===3?0:seg(p,W[k][2],W[k][3]),v=a*(1-o);
      el.style.opacity=v.toFixed(3);
      var lp=Math.max(0,Math.min(1,(p-W[k][0])/((k===3?1:W[k][3])-W[k][0]))),z=1+.05*lp;
      el.setAttribute("transform","translate("+(HX*(1-z)).toFixed(1)+" "+(360*(1-z)).toFixed(1)+") scale("+z.toFixed(4)+")")});
    C.forEach(function(el,k){var a=k===0?1:seg(p,W[k][0]+.02,W[k][1]+.02),o=k===3?0:seg(p,W[k][2],W[k][3]-.02);el.style.opacity=(b*a*(1-o)).toFixed(3)});
  };
}
