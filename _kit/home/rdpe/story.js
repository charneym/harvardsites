/* The story scene (BL/BY/DB): RDP's own account of how an LVDT works (rdpe.com home page and "How it works > LVDT"),
   drawn as ONE transducer in longitudinal section, kept on screen for all four steps, with its excitation and an RDP-style
   panel meter (red LED digits, like the E-series displays):
   1 Excite: the primary coil in the centre is excited with an ac signal.
   2 Centre: the armature couples primary to both secondaries equally; connected in opposition they cancel, output zero.
   3 Move: the armature moves off centre; one secondary rises, the other falls, and the output grows with position.
   4 Output: signal conditioning gives voltage, current or serial data proportional to position. Schematic, illustrative numbers. */
var SCW=760,SCH=520,BX=[120,290,470,640],CO=[[92,232],[250,390],[408,548]];
function rdScene(o){
  var g='',mob=o.mob,k;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="36 104 732 400" aria-hidden="true"><defs>'+
    '<linearGradient id="rdCore" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8a95a6"/><stop offset=".45" stop-color="#e6ebf2"/><stop offset="1" stop-color="#5d6778"/></linearGradient></defs>';
  /* the stainless body */
  g+='<rect class="bd" x="70" y="150" width="500" height="100"/>';
  /* coils: a glow fill, the winding texture, the outline (upper and lower half of each) */
  CO.forEach(function(c,j){
    [[158,184],[216,242]].forEach(function(y){
      g+='<rect class="cg rdG'+j+'" x="'+c[0]+'" y="'+y[0]+'" width="'+(c[1]-c[0])+'" height="'+(y[1]-y[0])+'"/>';
      var d='';for(var x=c[0]+7;x<c[1];x+=7)d+='M'+x+' '+y[0]+'V'+y[1];g+='<path class="wd" d="'+d+'"/>';
      g+='<rect class="ln sD" x="'+c[0]+'" y="'+y[0]+'" width="'+(c[1]-c[0])+'" height="'+(y[1]-y[0])+'"/>';
    });
  });
  g+='<path class="ln sD" d="M70 150H570V250H70Z"/><path class="pl sD" d="M70 188H570M70 212H570"/>';
  var LB=mob?["SEC. 1","PRIMARY","SEC. 2"]:["SECONDARY 1","PRIMARY","SECONDARY 2"];
  CO.forEach(function(c,j){g+='<text class="cl" id="rdL'+j+'" x="'+((c[0]+c[1])/2)+'" y="134" text-anchor="middle">'+LB[j]+'</text>'});
  /* the armature (core) and its push rod with a rod-end eye, moving as one */
  g+='<g id="rdArm"><path class="rod" d="M405 200H646"/><circle class="eye" cx="660" cy="200" r="13"/><rect class="core" x="235" y="192" width="170" height="16"/></g>';
  /* excitation: an ac source wired to the primary */
  g+='<path class="ln sD" d="M300 250V300M340 250V300"/><rect class="ln sD" x="276" y="300" width="88" height="44"/>'+
     '<path class="sn" id="rdSn" d="M286 322C293 306 300 306 306 322S319 338 326 322S339 306 346 322S352 330 354 326"/>'+
     '<text class="cl" id="rdEx" x="320" y="374" text-anchor="middle">'+(mob?"AC IN":"AC EXCITATION")+'</text>';
  /* the panel meter, cabled to the transducer */
  g+='<path class="ln sD" d="M548 250V292"/><rect class="dsp" x="470" y="292" width="232" height="66"/>'+
     '<text class="dg" id="rdV" x="586" y="337" text-anchor="middle">0.000 V</text>'+
     '<text id="rdO" x="586" y="382" text-anchor="middle">OUTPUT</text>'+
     '<text class="o2" id="rdO2" x="586" y="408" text-anchor="middle">'+(mob?"V · mA · DATA":"VOLTAGE · CURRENT · DATA")+'</text>';
  g+='<path class="pl sD" d="M60 440H700"/>';
  BX.forEach(function(x,k){g+='<circle class="dt" id="rdD'+k+'" cx="'+x+'" cy="440" r="5"/>'});
  var CAP=["1 · EXCITE","2 · CENTRE","3 · MOVE","4 · OUTPUT"];
  CAP.forEach(function(c,k){g+='<text class="a" id="rdC'+k+'" x="'+BX[k]+'" y="482" text-anchor="middle">'+c+'</text>'});
  return g+'</svg>';
}
function scene(){return rdScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var mob=svg.classList.contains("mob");
  var E={base:dl(".sD"),D:[0,1,2,3].map(function(k){return $("#rdD"+k,svg)}),C:[0,1,2,3].map(function(k){return $("#rdC"+k,svg)}),
    G:[0,1,2].map(function(j){return $$(".rdG"+j,svg)}),L:[0,1,2].map(function(j){return $("#rdL"+j,svg)}),
    arm:$("#rdArm",svg),sn:$("#rdSn",svg),ex:$("#rdEx",svg),v:$("#rdV",svg),o2:$("#rdO2",svg)};
  var lastB=-1,lastV="";
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=(+v).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var w=[1-seg(p,.23,.27),seg(p,.23,.27)*(1-seg(p,.48,.52)),seg(p,.48,.52)*(1-seg(p,.73,.77)),seg(p,.73,.77)];
    var cur=w.indexOf(Math.max.apply(null,w));
    E.D.forEach(function(d,k){d.classList.toggle("on",k<=cur);op(d,b)});
    E.C.forEach(function(c,k){op(c,b*(mob?(k===cur?1:0):(k===cur?1:.5)));c.classList.toggle("on",k===cur)});
    /* 1: the primary lights with the ac excitation (the coil keeps a slow pulse) */
    var ex=.35+.65*seg(p,.0,.12),pul=.85+.15*Math.sin(p*60);
    op(E.sn,b*ex);
    /* 2: the secondaries take the signal equally; 3: the armature moves right, secondary 2 rises, secondary 1 falls */
    var cpl=seg(p,.27,.4),mv=seg(p,.53,.7),dx=78*mv;
    E.arm.setAttribute("transform","translate("+dx.toFixed(1)+",0)");
    var s1=cpl*(.5-.36*mv),s2=cpl*(.5+.4*mv);
    E.G[1].forEach(function(r){op(r,b*.62*ex*pul)});
    E.G[0].forEach(function(r){op(r,b*s1*.9)});E.G[2].forEach(function(r){op(r,b*s2*.9)});
    E.L.forEach(function(l,j){l.classList.toggle("on",j===1?cur===0:(cur===1||(cur>=2&&j===2)))});
    E.ex.classList.toggle("on",cur===0);
    /* the meter: zero at centre, then proportional to position (illustrative) */
    var val=(5*mv).toFixed(3);val=(mv>0.001?"+":"")+val+" V";if(val!==lastV){lastV=val;E.v.textContent=val}
    op(E.v,b*(.55+.45*Math.max(cpl,seg(p,.75,.8))));
    /* 4: voltage, current or serial data */
    op(E.o2,b*seg(p,.78,.86));
  };
}
