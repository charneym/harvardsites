/* the story scene (BL/BY/DB): ONE engraved plan view of a culture well, kept on screen throughout; each step shows the stage of
   NeuCyte's patient-to-screening pipeline as their Technology and Services pages describe it: patient fibroblasts or PBMCs; reprogrammed
   into an iPS cell colony; differentiated with SynFire methods into neurons co-cultured with astrocytes; their activity read out on a
   microelectrode array (electrophysiology). Cells, spacing and the trace are schematic, not to scale. */
function scene(){
  var mob=MOBILE(),LX=mob?536:604,CX=290,CY=282,RO=212,RI=200;
  var seed=7;function rnd(){seed=(seed*16807)%2147483647;return (seed-1)/2147483646}
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><pattern id="ncHt" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V7" stroke="rgba(242,245,248,.2)" stroke-width="1"/></pattern></defs>';
  /* the well: an outer and inner rim, the wall between them hatched */
  function circ(r){return 'M'+(CX-r)+' '+CY+'A'+r+' '+r+' 0 1 1 '+(CX+r)+' '+CY+'A'+r+' '+r+' 0 1 1 '+(CX-r)+' '+CY+'Z'}
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="hatch" fill-rule="evenodd" d="'+circ(RO)+circ(RI)+'"/><path class="wl sD" d="'+circ(RO)+'"/><path class="wi sD" d="'+circ(RI)+'"/>';
  g+='<g class="tb"><path class="tbl" d="M548 494h228v52h-228Z M548 520h228"/><text x="558" y="512" class="t">PLAN · CULTURE WELL</text><text x="558" y="538" class="t s">SYNFIRE · NEUCYTE</text></g>';
  g+='</g>';
  function inside(x,y,lim){return Math.hypot(x-CX,y-CY)<lim}
  function lead(x1,y1,ty){return '<path class="ld2 dr" d="M'+x1+' '+y1+'L'+Math.min(RO+CX+22,LX-16)+' '+ty+'H'+(LX-8)+'"/>'}
  /* 1 patient fibroblasts: long spindle cells, each with an oval nucleus */
  var fib='',fn='',FB=[[170,190,.5],[250,150,-.3],[340,180,.9],[200,290,1.4],[300,250,.1],[390,280,-.8],[160,370,.3],[260,350,-1.1],[350,370,.6],[230,430,.05],[410,360,1.2],[290,110,1.5],[120,250,-.6],[440,210,.4]];
  FB.forEach(function(f){var L=30+rnd()*10,W=5.5+rnd()*2,a=f[2],ca=Math.cos(a),sa=Math.sin(a);
    function p(u,v){return (f[0]+u*ca-v*sa).toFixed(1)+' '+(f[1]+u*sa+v*ca).toFixed(1)}
    fib+='M'+p(-L,0)+'Q'+p(-L*.35,-W*1.6)+' '+p(0,-W)+'Q'+p(L*.4,-W*.6)+' '+p(L,0)+'Q'+p(L*.4,W*.7)+' '+p(0,W)+'Q'+p(-L*.35,W*1.5)+' '+p(-L,0)+'Z';
    fn+='<ellipse class="nuc" cx="'+f[0]+'" cy="'+f[1]+'" rx="6" ry="3.2" transform="rotate('+(a*57.3).toFixed(1)+' '+f[0]+' '+f[1]+')"/>'});
  g+='<g id="sc1"><path class="fib dr" d="'+fib+'"/>'+fn+lead(437,212,150)+
     '<text x="'+LX+'" y="154" class="t c">PATIENT FIBROBLASTS</text><text x="'+LX+'" y="174" class="t c c2">'+(mob?'OR PBMCS':'OR BLOOD CELLS (PBMCS)')+'</text>'+
     '<text x="40" y="60" class="a">THE PATIENT</text></g>';
  /* 2 the iPS cell colony: a compact, rounded colony of small, tightly packed cells */
  var col='',cn='',RC=118;
  for(var yy=CY-RC;yy<=CY+RC;yy+=19){for(var xx=CX-RC;xx<=CX+RC;xx+=21){var ox=((yy-CY)/19)%2?10.5:0,x=xx+ox+(rnd()-.5)*4,y=yy+(rnd()-.5)*4;
    if(Math.hypot((x-CX)/1.1,y-CY)<RC-8){col+='M'+(x+9)+' '+y+'A9 9 0 1 1 '+(x-9)+' '+y+'A9 9 0 1 1 '+(x+9)+' '+y;cn+='<circle class="nuc2" cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="4.6"/>'}}}
  var edge='';for(var i=0;i<=48;i++){var an=i/48*Math.PI*2,rr=RC+6+Math.sin(an*5)*5+Math.cos(an*3)*4;edge+=(i?'L':'M')+(CX+Math.cos(an)*rr*1.1).toFixed(1)+' '+(CY+Math.sin(an)*rr).toFixed(1)}
  g+='<g id="sc2"><path class="cole dr" d="'+edge+'Z"/><path class="col dr" d="'+col+'"/>'+cn+lead(CX+Math.round(RC*1.1+8),CY-50,230)+
     '<text x="'+LX+'" y="234" class="t c">iPS CELL COLONY</text><text x="'+LX+'" y="254" class="t c c2">REPROGRAMMED</text>'+
     '<text x="40" y="60" class="a">THE STEM CELLS</text></g>';
  /* 3 the network: SynFire neurons (soma, dendrites, a long axon) with star-shaped astrocytes among them */
  var NR=[[180,200],[300,160],[400,240],[220,330],[330,300],[380,390],[170,420],[270,420]],den='',axo='',som='';
  NR.forEach(function(n,k){som+='<circle class="som" cx="'+n[0]+'" cy="'+n[1]+'" r="7"/>';
    for(var j=0;j<5;j++){var a=j/5*Math.PI*2+k,l=20+rnd()*16,x1=n[0]+Math.cos(a)*l,y1=n[1]+Math.sin(a)*l;
      den+='M'+(n[0]+Math.cos(a)*7).toFixed(1)+' '+(n[1]+Math.sin(a)*7).toFixed(1)+'Q'+(n[0]+Math.cos(a+.25)*l*.6).toFixed(1)+' '+(n[1]+Math.sin(a+.25)*l*.6).toFixed(1)+' '+x1.toFixed(1)+' '+y1.toFixed(1);
      den+='M'+(n[0]+Math.cos(a)*l*.6).toFixed(1)+' '+(n[1]+Math.sin(a)*l*.6).toFixed(1)+'L'+(n[0]+Math.cos(a-.5)*l*.95).toFixed(1)+' '+(n[1]+Math.sin(a-.5)*l*.95).toFixed(1)}});
  [[0,4],[1,2],[2,5],[3,6],[4,7],[5,7],[6,0],[1,3]].forEach(function(p){var A=NR[p[0]],B=NR[p[1]],mx=(A[0]+B[0])/2+(A[1]-B[1])*.3,my=(A[1]+B[1])/2+(B[0]-A[0])*.3;
    axo+='M'+A[0]+' '+A[1]+'Q'+mx.toFixed(1)+' '+my.toFixed(1)+' '+B[0]+' '+B[1]});
  var AS=[[245,245],[350,205],[120,310],[300,370],[420,320],[225,385],[330,455]],ast='',asc='';
  AS.forEach(function(s){asc+='<circle class="asc" cx="'+s[0]+'" cy="'+s[1]+'" r="4"/>';for(var j=0;j<9;j++){var a=j/9*Math.PI*2+rnd()*.4,l=12+rnd()*9;
    ast+='M'+(s[0]+Math.cos(a)*4).toFixed(1)+' '+(s[1]+Math.sin(a)*4).toFixed(1)+'Q'+(s[0]+Math.cos(a+.3)*l*.6).toFixed(1)+' '+(s[1]+Math.sin(a+.3)*l*.6).toFixed(1)+' '+(s[0]+Math.cos(a)*l).toFixed(1)+' '+(s[1]+Math.sin(a)*l).toFixed(1)}});
  g+='<g id="sc3"><path class="axo dr" d="'+axo+'"/><path class="den dr" d="'+den+'"/><path class="ast dr" d="'+ast+'"/>'+som+asc+
     lead(420,240,304)+'<text x="'+LX+'" y="308" class="t c">SYNFIRE NEURONS</text>'+
     lead(436,320,344)+'<text x="'+LX+'" y="348" class="t c c3">ASTROCYTES</text>'+
     '<text x="40" y="60" class="a">THE NEURONS</text></g>';
  /* 4 the screen: the electrode grid under the network, a few electrodes picking up spikes, and one recorded trace */
  var el='',hot='';for(var ey=CY-162;ey<=CY+162;ey+=36){for(var ex=CX-162;ex<=CX+162;ex+=36){if(inside(ex,ey,RI-16)){el+='<rect class="ele" x="'+(ex-2.5)+'" y="'+(ey-2.5)+'" width="5" height="5"/>'}}}
  [[182,192],[398,246],[326,300],[218,336],[380,390]].forEach(function(q){hot+='<circle class="hot dr" cx="'+q[0]+'" cy="'+q[1]+'" r="12"/>'});
  var TY=440,tr='M'+LX+' '+TY,x=LX,S=[10,18,8,22,12];S.forEach(function(d,i){x+=d;tr+='H'+x+'l3 -32l3 42l3 -14l2 4';x+=11+6;tr+='H'+x});tr+='H776';
  g+='<g id="sc4">'+el+hot+lead(410,246,384)+'<text x="'+LX+'" y="388" class="t c c4">ELECTRODE ARRAY</text>'+
     '<path class="trc dr" d="'+tr+'"/><text x="'+LX+'" y="480" class="t c c4">'+(mob?'ONE ELECTRODE':'SPIKES · ONE ELECTRODE')+'</text>'+
     '<text x="40" y="60" class="a">THE SCREEN</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase .hatch",svg),
    g:[$("#sc1",svg),$("#sc2",svg),$("#sc3",svg),$("#sc4",svg)],
    d:[dl("#sc1 .dr"),dl("#sc2 .dr"),dl("#sc3 .dr"),dl("#sc4 .dr")],
    f:[$$("#sc1 .nuc",svg),$$("#sc2 .nuc2",svg),$$("#sc3 .som, #sc3 .asc",svg),$$("#sc4 .ele",svg)],
    c:[$$("#sc1 text.t",svg),$$("#sc2 text.t",svg),$$("#sc3 text.t",svg),$$("#sc4 text.t",svg)],
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)]};
  var lastB=-1,cl=function(v){return v<0?0:v>1?1:v};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s=[Math.max(seg(p,0,.16),.55),seg(p,.25,.44),seg(p,.5,.69),seg(p,.75,.94)];
    /* the well stays; the cells in it change: fibroblasts give way to the colony, the colony to the network; the array joins the network */
    var op=[b*(1-cl(s[1]*1.6)),cl(s[1]*1.6)*(1-cl(s[2]*1.6)),cl(s[2]*1.6),cl(s[3]*1.6)];
    for(var i=0;i<4;i++){
      E.g[i].style.opacity=op[i].toFixed(3);E.g[i].style.visibility=op[i]>.001?"visible":"hidden";
      var dv=i===0?b*s[0]:s[i];draw(E.d[i],dv);
      E.f[i].forEach(function(el){el.style.opacity=cl(dv*1.4-.3).toFixed(3)});
      var lv=i===0?1:cl(s[i]*2-1);if(i===2)lv*=1-.45*s[3];
      E.c[i].forEach(function(el){el.style.opacity=lv.toFixed(3)});
    }
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s[1]).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}
