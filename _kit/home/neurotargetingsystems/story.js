/* The story scene (BL/BY/DB): the needle-electrode procedure (neurotargetingsystems.com/documentation, product pages
   "Needle Implant Configuration 1", and Zou, Xie & Gerashchenko, MethodsX 2026) as ONE continuous engraved scene. Left: a
   mouse skull seen from above, with its sutures, bregma and lambda. Step 1: the needle sites appear at Configuration 1's
   coordinates (EEG at AP 0, lateral ±2.5 mm; reference and ground at AP -5.0 mm, lateral 2.5 mm from bregma). Step 2: the
   hook-shaped needles grip the sides of the skull, the 2x3 connector sits on the midline and the leads join it, EMG leads
   run back to the neck. Step 3: EEG and EMG traces write out on the right. Every element is driven by the scrubbed
   story progress. Schematic, not to scale. */
var SCW=760,SCH=520,SKX=232,BRY=214,MM=30;
function crPath(P,closed){var n=P.length,d="M"+P[0][0].toFixed(1)+" "+P[0][1].toFixed(1),i;
  for(i=0;i<(closed?n:n-1);i++){var p0=P[(i-1+n)%n],p1=P[i],p2=P[(i+1)%n],p3=P[(i+2)%n];
    if(!closed){p0=P[Math.max(0,i-1)];p3=P[Math.min(n-1,i+2)]}
    var c1=[p1[0]+(p2[0]-p0[0])/6,p1[1]+(p2[1]-p0[1])/6],c2=[p2[0]-(p3[0]-p1[0])/6,p2[1]-(p3[1]-p1[1])/6];
    d+="C"+c1[0].toFixed(1)+" "+c1[1].toFixed(1)+" "+c2[0].toFixed(1)+" "+c2[1].toFixed(1)+" "+p2[0].toFixed(1)+" "+p2[1].toFixed(1)}
  return d+(closed?"Z":"")}
var SKULL=(function(){
  var R=[[0,32],[12,36],[19,62],[23,98],[28,124],[58,132],[92,148],[112,180],[110,214],[96,238],[90,256],[97,292],[100,332],[94,374],[79,412],[56,442],[28,460]];
  var L=R.slice().reverse().map(function(p){return [-p[0],p[1]]}).filter(function(p){return p[0]!==0});
  var all=R.concat([[0,464]],L).map(function(p){return [SKX+p[0],p[1]]});
  function orb(s){return [[32,140],[68,152],[94,184],[90,218],[62,228],[38,200]].map(function(p){return [SKX+s*p[0],p[1]]})}
  function inner(k){return R.concat([[0,464]],L).map(function(p){return [SKX+p[0]*k,BRY+(p[1]-BRY)*k]})}
  return {out:crPath(all,true),in1:crPath(inner(.93),true),oL:crPath(orb(-1),true),oR:crPath(orb(1),true)};
})();
var SITES=[{x:SKX-2.5*MM,y:BRY,l:"EEG 1"},{x:SKX+2.5*MM,y:BRY,l:"EEG 2"},{x:SKX+2.5*MM,y:BRY+5*MM,l:"REF"},{x:SKX-2.5*MM,y:BRY+5*MM,l:"GND"}];
var CON={x:SKX,y:BRY+76};
function trace(seed,y0,amp,kind){var s=seed,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},pts=[],x,v=0,i=0;
  for(x=470;x<=736;x+=2){i++;
    if(kind==="emg"){v=(R()-.5)*amp*(x>600&&x<640?2.6:.7)}
    else{v=v*.6+(R()-.5)*amp*.9+Math.sin(x*.11+seed)*amp*.35+Math.sin(x*.031+seed*2)*amp*.5}
    pts.push(x+" "+(y0+v).toFixed(1))}
  return "M"+pts.join("L")}
function memScene(o){
  var g='',lab=function(x,y,t,c,a){return '<text class="'+(c||"t")+'" x="'+x+'" y="'+y+'"'+(a?' text-anchor="'+a+'"':'')+'>'+t+'</text>'};
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase"><path class="frm sD" d="M24 20H736M24 500H736"/>'+lab(24,10,"MOUSE SKULL, DORSAL VIEW · SCHEMATIC")+'</g>';
  /* the skull: outline, an inner engraved contour, orbits, sutures */
  g+='<g id="scSk"><path class="sk sD" d="'+SKULL.out+'"/><path class="sk2 sD" d="'+SKULL.in1+'"/><path class="sk2 sD" d="'+SKULL.oL+'"/><path class="sk2 sD" d="'+SKULL.oR+'"/>'+
     '<path class="su sD" d="M'+SKX+' 120V448"/><path class="su sD" d="M'+(SKX-94)+' '+(BRY+14)+'Q'+SKX+' '+(BRY-16)+' '+(SKX+94)+' '+(BRY+14)+'"/>'+
     '<path class="su sD" d="M'+(SKX-86)+' '+(BRY+176)+'Q'+SKX+' '+(BRY+138)+' '+(SKX+86)+' '+(BRY+176)+'"/></g>';
  g+='<g id="scBr"><circle class="bm" cx="'+SKX+'" cy="'+BRY+'" r="3.2"/>'+lab(SKX+8,BRY-8,"BREGMA","t")+'<circle class="bm" cx="'+SKX+'" cy="'+(BRY+157)+'" r="3.2"/>'+lab(SKX+8,BRY+150,"LAMBDA","t")+'</g>';
  /* step 1: needle sites */
  g+='<g id="scSites">';SITES.forEach(function(s,k){var lx=s.x<SKX?s.x-14:s.x+14,an=s.x<SKX?"end":"start";
    g+='<g class="st" data-k="'+k+'"><circle class="ring" cx="'+s.x+'" cy="'+s.y+'" r="11"/><circle class="nd" cx="'+s.x+'" cy="'+s.y+'" r="4.2"/>'+lab(lx,s.y+(k<2?-14:22),s.l,"k1",an)+'</g>'});g+='</g>';
  /* step 2: hooks, connector, leads */
  g+='<g id="scFix"><path class="hk sD" d="M'+(SKX-150)+' 300C'+(SKX-128)+' 286 '+(SKX-112)+' 296 '+(SKX-114)+' 316C'+(SKX-116)+' 330 '+(SKX-130)+' 330 '+(SKX-128)+' 318"/>'+
     '<path class="hk sD" d="M'+(SKX+150)+' 300C'+(SKX+128)+' 286 '+(SKX+112)+' 296 '+(SKX+114)+' 316C'+(SKX+116)+' 330 '+(SKX+130)+' 330 '+(SKX+128)+' 318"/>';
  SITES.forEach(function(s){g+='<path class="ld sD" d="M'+s.x+' '+s.y+'Q'+((s.x+CON.x)/2)+' '+((s.y+CON.y)/2+(s.y<CON.y?-10:10))+' '+(CON.x+(s.x<SKX?-14:14))+' '+CON.y+'"/>'});
  g+='<path class="ld sD" d="M'+(SKX-10)+' '+(CON.y+18)+'C'+(SKX-26)+' 400 '+(SKX-40)+' 460 '+(SKX-58)+' 500"/><path class="ld sD" d="M'+(SKX+10)+' '+(CON.y+18)+'C'+(SKX+26)+' 400 '+(SKX+40)+' 460 '+(SKX+58)+' 500"/>';
  g+='<g id="scCon"><rect class="cb" x="'+(CON.x-30)+'" y="'+(CON.y-20)+'" width="60" height="40"/>';
  for(var r=0;r<2;r++)for(var c=0;c<3;c++)g+='<circle class="pin" cx="'+(CON.x-18+c*18)+'" cy="'+(CON.y-9+r*18)+'" r="4.2"/>';
  g+='</g>'+lab(SKX-150,350,"HOOK","k2","start")+lab(SKX+150,350,"HOOK","k2","end")+lab(SKX+66,494,"EMG LEADS","t")+'</g>';
  /* step 3: traces */
  g+='<g id="scTr">';
  [["EEG 1",150,16,"eeg",11],["EEG 2",250,16,"eeg",29],["EMG",350,10,"emg",47]].forEach(function(t,k){
    g+='<path class="ax sD" d="M470 '+t[1]+'H736"/><path class="tr sD tr'+k+'" d="'+trace(t[4],t[1],t[2],t[3])+'"/>'+lab(470,t[1]-30,t[0],"k1")});
  g+='<path class="ax sD" d="M470 420H736"/>'+lab(470,440,"0 S","t")+lab(736,440,"10 S","t","end")+'</g>';
  g+='<g id="lb1">'+lab(24,48,"NEEDLES AT PRESET COORDINATES","a")+'</g>';
  g+='<g id="lb2">'+lab(24,48,"HOOKED, WIRED, FIXED IN COMPOSITE","a")+'</g>';
  g+='<g id="lb3">'+lab(24,48,"FREELY MOVING EEG / EMG","a")+'</g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;p.style.strokeDashoffset=L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),sk:dl("#scSk .sD"),skf:$("#scSk .sk",svg),br:$("#scBr",svg),sites:$$(".st",svg),
    fix:dl("#scFix .sD"),con:$("#scCon",svg),fixT:$$("#scFix text",svg),tr:dl("#scTr .tr"),ax:dl("#scTr .ax"),trT:$$("#scTr text",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var grow=seg(p,0,.16),pl=seg(p,.1,.32),fx=seg(p,.38,.6),rec=seg(p,.66,.94);
    draw(E.sk,b*grow);if(E.skf)E.skf.style.fillOpacity=(seg(p,.1,.2)).toFixed(3);op(E.br,b*seg(p,.08,.18));
    E.sites.forEach(function(el,i){var v=seg(pl,i*.18,i*.18+.4);op(el,b*v);el.style.transform="scale("+(1.6-.6*v).toFixed(3)+")";el.style.transformOrigin=SITES[i].x+"px "+SITES[i].y+"px"});
    draw(E.fix,b*fx);op(E.con,b*seg(fx,.3,.7));E.fixT.forEach(function(el){op(el,b*seg(fx,.5,.9))});
    draw(E.ax,b*seg(rec,0,.3));draw(E.tr,b*seg(rec,.1,1));E.trT.forEach(function(el){op(el,b*seg(rec,0,.3))});
    op(E.l1,b*seg(p,.12,.2)*(1-seg(p,.32,.38)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.74,.82));
  };
}
