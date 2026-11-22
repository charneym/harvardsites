/* The story scene (BL/BY/DB): selective brain cooling in a large vessel occlusion, after King et al., Interv Neuroradiol
   2026 (45-minute middle cerebral artery occlusion; chilled saline through the internal carotid artery from 5 minutes
   before flow restoration, continued 20 minutes) as ONE continuous engraved scene: a lateral view of the brain with the
   internal carotid and middle cerebral artery tree. Step 1: a clot lodges in the MCA trunk and its territory warms as an
   ischemic core. Step 2: the insulated catheter climbs the carotid and chilled saline cools the territory. Step 3: the
   clot clears, flow returns through the branches under cooling, and the timeline completes. Schematic, not to scale. */
var SCW=760,SCH=520;
function crPath(P,closed){var n=P.length,d="M"+P[0][0].toFixed(1)+" "+P[0][1].toFixed(1),i;
  for(i=0;i<(closed?n:n-1);i++){var p0=P[(i-1+n)%n],p1=P[i],p2=P[(i+1)%n],p3=P[(i+2)%n];
    if(!closed){p0=P[Math.max(0,i-1)];p3=P[Math.min(n-1,i+2)]}
    var c1=[p1[0]+(p2[0]-p0[0])/6,p1[1]+(p2[1]-p0[1])/6],c2=[p2[0]-(p3[0]-p1[0])/6,p2[1]-(p3[1]-p1[1])/6];
    d+="C"+c1[0].toFixed(1)+" "+c1[1].toFixed(1)+" "+c2[0].toFixed(1)+" "+c2[1].toFixed(1)+" "+p2[0].toFixed(1)+" "+p2[1].toFixed(1)}
  return d+(closed?"Z":"")}
var BRAIN={
  out:crPath([[112,252],[120,194],[160,138],[226,100],[308,82],[392,86],[464,110],[520,156],[552,212],[556,264],[538,306],[500,330],[446,338],[396,330],[346,346],[288,360],[232,356],[186,332],[152,302],[124,284]],true),
  cb:crPath([[440,342],[478,330],[530,334],[566,352],[562,382],[526,398],[478,396],[446,380]],true),
  stem:"M418 338C424 368 420 398 410 440M450 344C452 372 446 404 436 440",
  sulci:[crPath([[200,302],[250,286],[300,262],[352,246],[404,240],[452,252]]),crPath([[364,90],[356,130],[346,172],[338,214],[330,246]]),
    crPath([[392,94],[386,136],[378,180],[370,226]]),crPath([[150,210],[196,180],[246,166],[300,170]]),crPath([[168,150],[218,128],[270,124]]),
    crPath([[430,136],[470,172],[492,214],[500,262]]),crPath([[250,326],[300,310],[350,300],[400,296]]),crPath([[476,288],[512,272],[536,246]])]};
var ICA="M296 520C300 470 286 430 300 392C310 362 296 340 306 304";
var MCA=[crPath([[306,304],[338,284],[372,262],[412,246],[456,244]]),
  crPath([[338,284],[322,236],[318,186],[330,140]]),crPath([[372,262],[368,210],[384,160],[408,128]]),
  crPath([[412,246],[438,206],[468,176],[490,160]]),crPath([[456,244],[492,232],[520,214]]),
  crPath([[412,246],[452,276],[488,296]]),crPath([[372,262],[396,300],[420,318]])];
var CLOT={x:330,y:289};
var TL={x0:490,x1:736,y:470};
function tx(m){return TL.x0+(TL.x1-TL.x0)*m/65}
function memScene(o){
  var g='',lab=function(x,y,t,c,a){return '<text class="'+(c||"t")+'" x="'+x+'" y="'+y+'"'+(a?' text-anchor="'+a+'"':'')+'>'+t+'</text>'};
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<radialGradient id="fcHot" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#ff6b5e" stop-opacity=".55"/><stop offset=".55" stop-color="#ff6b5e" stop-opacity=".18"/><stop offset="1" stop-color="#ff6b5e" stop-opacity="0"/></radialGradient>'+
    '<radialGradient id="fcCold" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#8fd4ff" stop-opacity=".6"/><stop offset=".55" stop-color="#8fd4ff" stop-opacity=".2"/><stop offset="1" stop-color="#8fd4ff" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase"><path class="frm sD" d="M24 20H736M24 500H736"/>'+lab(24,10,"BRAIN, LATERAL VIEW · SCHEMATIC")+'</g>';
  g+='<ellipse id="scHot" cx="400" cy="214" rx="150" ry="120" fill="url(#fcHot)"/><ellipse id="scCold" cx="392" cy="222" rx="190" ry="150" fill="url(#fcCold)"/>';
  g+='<g id="scBr"><path class="bo sD" d="'+BRAIN.out+'"/><path class="b2 sD" d="'+BRAIN.cb+'"/><path class="b2 sD" d="'+BRAIN.stem+'"/>'+BRAIN.sulci.map(function(d){return '<path class="su sD" d="'+d+'"/>'}).join("")+'</g>';
  g+='<g id="scV"><path class="ica sD" d="'+ICA+'"/>'+MCA.map(function(d,i){return '<path class="mca sD'+(i?' br':'')+'" d="'+d+'"/>'}).join("")+'</g>';
  g+='<g id="scFlow">'+MCA.map(function(d){return '<path class="flow" d="'+d+'"/>'}).join("")+'</g>';
  g+='<g id="scClot"><circle class="clot" cx="'+CLOT.x+'" cy="'+CLOT.y+'" r="7"/>'+lab(CLOT.x-26,CLOT.y+30,"CLOT","k2","end")+'</g>';
  g+='<g id="scCath"><path class="cath sD" d="M300 520C304 470 290 430 302 392C308 370 300 356 304 340"/><path class="sal" d="M300 520C304 470 290 430 302 392C308 370 300 356 304 340"/>'+lab(284,470,"KHIONE CATHETER","k1","end")+lab(284,490,"INTERNAL CAROTID","t","end")+'</g>';
  g+=lab(456,232,"MCA","t");
  /* the timeline */
  g+='<g id="scTl"><path class="ax sD" d="M'+TL.x0+' '+TL.y+'H'+TL.x1+'"/>'+
     '<path class="occ" id="tlO" d="M'+tx(0)+' '+(TL.y-12)+'H'+tx(45)+'"/><path class="col" id="tlC" d="M'+tx(40)+' '+(TL.y-22)+'H'+tx(65)+'"/>'+
     (o.mob?[0,65]:[0,40,45,65]).map(function(m){return '<path class="tk" d="M'+tx(m).toFixed(1)+' '+(TL.y-4)+'v8"/>'+lab(tx(m).toFixed(1),TL.y+20,m?m+"":"START",'t',m===40?"end":m===45?"start":"middle")}).join("")+
     lab(TL.x0,TL.y-(o.mob?70:50),"OCCLUSION 45 MIN","k2")+lab(TL.x1,TL.y-34,"COOLING 25 MIN","k1","end")+lab(TL.x1,TL.y+20+16,"MIN","t","end")+'</g>';
  g+='<g id="lb1">'+lab(736,52,"ISCHEMIC CORE FORMS","a","end")+'</g>';
  g+='<g id="lb2">'+lab(736,52,"CHILLED SALINE, DIRECT TO THE BRAIN","a","end")+'</g>';
  g+='<g id="lb3">'+lab(736,52,"FLOW RESTORED UNDER COOLING","a","end")+'</g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;p.style.strokeDashoffset=L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),br:dl("#scBr .sD"),v:dl("#scV .sD"),cath:dl("#scCath .cath"),
    sal:$("#scCath .sal",svg),cathT:$$("#scCath text",svg),clot:$("#scClot",svg),hot:$("#scHot",svg),cold:$("#scCold",svg),flow:$("#scFlow",svg),
    tl:dl("#scTl .ax"),tlT:$$("#scTl text, #scTl .tk",svg),tlO:$("#tlO",svg),tlC:$("#tlC",svg),mcaT:$$("svg > text",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var grow=seg(p,0,.18),occ=seg(p,.12,.32),cool=seg(p,.38,.62),rep=seg(p,.68,.92);
    draw(E.br,b*grow);draw(E.v,b*seg(p,.06,.22));E.mcaT.forEach(function(el){op(el,b*seg(p,.14,.22))});
    op(E.clot,b*occ*(1-rep));
    op(E.hot,b*occ*(1-.75*cool));
    draw(E.cath,b*seg(cool,0,.5));E.cathT.forEach(function(el){op(el,b*seg(cool,.3,.6))});
    op(E.sal,b*seg(cool,.4,.7));op(E.cold,b*seg(cool,.4,1)*(1-.3*rep));
    op(E.flow,b*rep);
    draw(E.tl,b*seg(p,.1,.25));E.tlT.forEach(function(el){op(el,b*seg(p,.15,.28))});
    if(E.tlO){E.tlO.style.transformOrigin=tx(0)+"px 0";E.tlO.style.transform="scaleX("+(occ*(1-0)*(0.88+0.12*rep)).toFixed(3)+")";op(E.tlO,b*occ)}
    if(E.tlC){E.tlC.style.transformOrigin=tx(40)+"px 0";E.tlC.style.transform="scaleX("+(.2*cool+.8*rep).toFixed(3)+")";op(E.tlC,b*cool)}
    op(E.l1,b*seg(p,.14,.22)*(1-seg(p,.32,.38)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.74,.82));
  };
}
