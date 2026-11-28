/* the story scene (BL/BY/DB): ONE square, the firm's name, built from WILsquare's automotive paint distribution platform as
   the 1 July 2026 release tells it: Automotive Color & Supply (2023), Paint Works (2024), Smetzer Paint & Supply (2025) and
   Ohio Paint Supply (2026), "WILsquare Capital's fourth acquisition within its automotive paint distribution platform".
   Each step slides one quarter into place on a faint grid; at the end an orange outline draws round the finished square.
   The quarters stand for the companies, not their size. */
var WS={x:160,y:96,s:300};
var WSQ=[["ACS","2023","INDIANA · ILLINOIS",0,0,-1,0],["PAINT WORKS","2024","TYLER, TEXAS",0,1,0,1],["SMETZER","2025","MILAN, OHIO",1,0,0,-1],["OHIO PAINT SUPPLY","2026","COLUMBUS, OHIO",1,1,1,0]];
function scene(){
  var mob=MOBILE(),g='<svg class="'+(mob?"mob":"")+'" viewBox="0 56 610 450" aria-hidden="true">',i,h=WS.s/2;
  var grid='';for(i=0;i<=16;i++){grid+='M'+(WS.x-90+i*30)+' 70V496M'+(WS.x-90)+' '+(70+i*30)+'H'+(WS.x+390)}
  g+='<path class="gr" d="'+grid+'"/>';
  g+='<rect class="ghost" x="'+WS.x+'" y="'+WS.y+'" width="'+WS.s+'" height="'+WS.s+'"/>';
  WSQ.forEach(function(q,k){var x=WS.x+q[3]*h,y=WS.y+q[4]*h,long=q[0].length>12;
    g+='<g class="qd" id="wsQ'+k+'"><rect x="'+(x+3)+'" y="'+(y+3)+'" width="'+(h-6)+'" height="'+(h-6)+'"/>'+
      '<text class="yr" x="'+(x+16)+'" y="'+(y+34)+'">'+q[1]+'</text>'+
      (long?'<text class="nm" x="'+(x+16)+'" y="'+(y+h-44)+'">OHIO PAINT</text><text class="nm" x="'+(x+16)+'" y="'+(y+h-26)+'">SUPPLY</text>'
           :'<text class="nm" x="'+(x+16)+'" y="'+(y+h-26)+'">'+q[0]+'</text>')+
      (mob?'':'<text class="lc" x="'+(x+16)+'" y="'+(y+h-12)+'">'+q[2]+'</text>')+'</g>'});
  g+='<rect id="wsO" class="ol" x="'+(WS.x-8)+'" y="'+(WS.y-8)+'" width="'+(WS.s+16)+'" height="'+(WS.s+16)+'"/>';
  g+='<text class="cap" id="wsC" x="'+(WS.x+WS.s/2)+'" y="'+(WS.y+WS.s+44)+'" text-anchor="middle">'+(mob?"IL · IN · OH · AR · TX · LA":"NOW SERVING IL · IN · OH · AR · TX · LA")+'</text>';
  return g+'</svg>';
}
function storyDraw(svg){
  var Q=[0,1,2,3].map(function(k){return $("#wsQ"+k,svg)}),O=$("#wsO",svg),C=$("#wsC",svg),base=$$(".gr,.ghost",svg);
  var OL=4*(WS.s+16);O.style.strokeDasharray=OL+" "+OL;
  return function(p,b){
    if(!svg.isConnected)return;
    base.forEach(function(e){e.style.opacity=b.toFixed(3)});
    Q.forEach(function(q,k){var a=WSQ[k],v=seg(p,k*.25+.02,k*.25+.16),d=(1-v)*70;
      q.setAttribute("transform","translate("+(a[5]*d).toFixed(1)+" "+(a[6]*d).toFixed(1)+")");q.style.opacity=(b*v).toFixed(3);
      q.classList.toggle("on",p>=k*.25+.02&&p<(k+1)*.25)});
    var o=seg(p,.86,.98);O.style.strokeDashoffset=(OL*(1-o)).toFixed(1);O.style.opacity=(b*(o>0?1:0)).toFixed(3);C.style.opacity=(b*o).toFixed(3);
  };
}
