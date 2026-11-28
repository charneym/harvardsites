/* the story scene (BL/BY/DB): ONE organisation chart of B12's long-term vertical holding companies, as
   b12capitalpartners.com > Portfolio Companies lists them, drawn in the order of the firm's transaction types:
   1 change of ownership: one company, its owner and management, and B12 above it;
   2 recapitalization: the owner stays on as a minority partner (a second line to the company);
   3 growth through acquisition: add-ons join the company under its first holding company;
   4 long-term holding companies: the other five holding companies and their companies draw in (21 companies in all).
   Node sizes and positions are schematic. Labels fade in with their step. */
var B12S={top:96,hy:200,cy:300,x0:40,x1:570};
function scene(){
  var mob=MOBILE(),g='<svg class="'+(mob?"mob":"")+'" viewBox="0 56 610 450" aria-hidden="true">',S=B12S,n=HOLD.length,i,k;
  var hx=function(i){return S.x0+(S.x1-S.x0)*(i+.5)/n};
  g+='<g id="bT"><rect class="nd top" x="'+(305-46)+'" y="'+(S.top-18)+'" width="92" height="36"/><text class="tt" x="305" y="'+(S.top+6)+'" text-anchor="middle">B12</text></g>';
  for(i=0;i<n;i++){var x=hx(i),c=HOLD[i][1];
    g+='<g class="hg" id="bH'+i+'"><path class="ln" d="M305 '+(S.top+18)+'V'+(S.top+52)+'H'+x.toFixed(1)+'V'+(S.hy-14)+'"/>'+
      '<rect class="nd" x="'+(x-39)+'" y="'+(S.hy-14)+'" width="78" height="28"/>'+
      '<text class="hl" x="'+x.toFixed(1)+'" y="'+(S.hy+5)+'" text-anchor="middle">'+(mob?String(i+1):["ATTACHMENT","ELECTRICAL","FILTRATION","MATERIAL","TRANSPORT","FIRE"][i])+'</text>';
    for(k=0;k<c.length;k++){var y=S.cy+k*30;g+='<g class="co" id="bC'+i+'_'+k+'"><path class="ln" d="M'+x.toFixed(1)+' '+(S.hy+14+(k?(k*30-16):0))+'V'+(y-8)+'"/><rect class="cn" x="'+(x-28)+'" y="'+(y-8)+'" width="56" height="16"/></g>'}
    g+='</g>'}
  /* step labels, one at a time under the chart */
  var L=mob?["OWNER → MANAGEMENT + B12","OWNER STAYS AS A MINORITY","ADD-ONS JOIN THE PLATFORM","6 HOLDING COMPANIES · 21 COMPANIES"]:["CHANGE OF OWNERSHIP · MANAGEMENT AND B12 BUY THE COMPANY","RECAPITALIZATION · THE OWNER STAYS AS A MINORITY INVESTOR","GROWTH THROUGH ACQUISITION · ATTACHMENT & WORK TOOL HOLDINGS","LONG-TERM HOLDING COMPANIES · SIX VERTICALS, 21 COMPANIES"];
  for(k=0;k<4;k++)g+='<text class="cap" id="bL'+k+'" x="305" y="496" text-anchor="middle">'+L[k]+'</text>';
  g+='<path id="bO" class="own" d="M'+(hx(0)-62)+' '+(S.cy)+'H'+(hx(0)-30)+'"/><text class="ow" id="bOt" x="'+(hx(0)-64)+'" y="'+(S.cy-16)+'" text-anchor="start">OWNER</text>';
  return g+'</svg>';
}
function storyDraw(svg){
  var n=HOLD.length,T=$("#bT",svg),H=[],C=[],i,k;
  for(i=0;i<n;i++){H.push($("#bH"+i,svg));var r=[];for(k=0;k<HOLD[i][1].length;k++)r.push($("#bC"+i+"_"+k,svg));C.push(r)}
  var Ls=[0,1,2,3].map(function(k){return $("#bL"+k,svg)}),O=$("#bO",svg),Ot=$("#bOt",svg);
  return function(p,b){
    if(!svg.isConnected)return;
    var s1=seg(p,.02,.16),s2=seg(p,.27,.4),s3=seg(p,.52,.7),s4=seg(p,.77,.95);
    T.style.opacity=(b*s1).toFixed(3);
    /* holding company 0 and its first company in step 1; its add-ons in step 3 */
    H[0].style.opacity=(b*s1).toFixed(3);
    C[0].forEach(function(c,k){var v=k===0?s1:seg(s3,(k-1)/(C[0].length-1)*.8,(k-1)/(C[0].length-1)*.8+.2);c.style.opacity=v.toFixed(3)});
    /* the owner: leaves in step 1 (sale), returns as a minority in step 2 */
    var ow=s2;O.style.opacity=(b*ow).toFixed(3);Ot.style.opacity=(b*ow).toFixed(3);
    /* the other holding companies in step 4, one after another */
    for(i=1;i<n;i++){var v=seg(s4,(i-1)/(n-1)*.8,(i-1)/(n-1)*.8+.2);H[i].style.opacity=(b*v).toFixed(3);C[i].forEach(function(c){c.style.opacity=v.toFixed(3)})}
    var W=[[0,.25],[.25,.5],[.5,.75],[.75,1.01]];
    Ls.forEach(function(t,k){t.style.opacity=(b*(k===0?1:seg(p,W[k][0],W[k][0]+.03))*(k===3?1:(1-seg(p,W[k][1]-.03,W[k][1])))).toFixed(3)});
  };
}
