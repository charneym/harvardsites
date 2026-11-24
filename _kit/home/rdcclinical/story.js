/* The story scene (DB): how an RDC Clinical trial runs, from rdcclinical.com.au (About, FAQ, Trials): volunteers register
   and are screened for eligibility and consent; most trials are randomised, double-blind and placebo-controlled
   (allocation by validated software, neither the participant nor the trial co-ordinators know the group); assessments
   at baseline, during and at the end of the study; then the study is unblinded and the results published in journals
   and presented to regulators. Drawn as ONE fine-line scene that fills the frame:
   Frame 0 is complete: volunteers wait at the left, the screening gate, the randomisation node, two study arms with
   their visit axis (baseline, week 4, 8, 12), and the journal page they lead to.
   Step 1 (screen): volunteers pass the gate; two who are not eligible stop there and fade.
   Step 2 (randomise): each participant is sent by chance to group A or B and receives an identical capsule.
   Step 3 (measure): the study runs along both arms; a measurement marker lights at every visit.
   Step 4 (publish): the study is unblinded (group A's capsules turn amber: the active product, B is the placebo),
   the arms join and the journal page draws in. Driven by scrubbed progress. */
var SCW=760,SCH=560;
var LA=165,LB=435,NX=290,NY=300,GX=185,TK=[490,555,620,685];
var VOL=(function(){var out=[],seed=11;function rnd(){seed=(seed*16807)%2147483647;return seed/2147483647}
  var bad={4:1,13:1},ca=0,cb=0;
  for(var i=0;i<18;i++){var c=i%3,r=(i/3)|0;
    var q={sx:70+c*30+(rnd()-.5)*6,sy:225+r*30+(rnd()-.5)*6,bad:!!bad[i],d:rnd()};
    if(!q.bad){var k=out.filter(function(o){return !o.bad}).length;
      q.hx=210+(k%3)*22;q.hy=225+((k/3)|0)*30;
      var toA=(rnd()<.5&&ca<8)||cb>=8;var n=toA?ca++:cb++;q.g=toA?0:1;
      q.lx=346+(n%4)*36;q.ly=(toA?LA:LB)+((n/4)|0?16:-16)}
    out.push(q)}
  return out})();
function f1(v){return v.toFixed(1)}
function brP(g){var y=g?LB:LA;return [NX,NY,NX+26,NY,NX+30,y,340,y]}
function bz(P,t){var u=1-t;return [u*u*u*P[0]+3*u*u*t*P[2]+3*u*t*t*P[4]+t*t*t*P[6],u*u*u*P[1]+3*u*u*t*P[3]+3*u*t*t*P[5]+t*t*t*P[7]]}
function storyScene(o){
  var g='',mob=o.mob,cp=function(P){return 'M'+P[0]+' '+P[1]+'C'+P[2]+' '+P[3]+' '+P[4]+' '+P[5]+' '+P[6]+' '+P[7]};
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="36 100 724 460" aria-hidden="true">';
  /* frame: the gate, the node, the branches, both arms and their visit ticks */
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="M'+GX+' 219V285M'+GX+' 315V381"/>';
  g+='<path class="wl sD" d="M'+(NX-7)+' '+NY+'L'+NX+' '+(NY-7)+'L'+(NX+7)+' '+NY+'L'+NX+' '+(NY+7)+'Z"/>';
  g+='<path class="wo sD" d="'+cp(brP(0))+'"/><path class="wo sD" d="'+cp(brP(1))+'"/>';
  TK.forEach(function(x){g+='<path class="tk sD" d="M'+x+' 140V456"/>'});
  g+='<path class="wl sD" d="M480 '+LA+'H685"/><path class="wl sD" d="M480 '+LB+'H685"/>';
  g+='</g>';
  /* the two arms join and lead to the journal page */
  g+='<g id="scPub"><path class="pj" d="M685 '+LA+'C706 '+LA+' 700 292 716 292"/><path class="pj" d="M685 '+LB+'C706 '+LB+' 700 308 716 308"/>'+
    '<path class="pj" d="M716 281H738L746 289V321H716Z"/><path class="pj" d="M738 281V289H746"/>'+
    '<path class="pj" d="M722 296H740"/><path class="pj" d="M722 302H740"/><path class="pj" d="M722 308H736"/><path class="pj" d="M722 314H740"/></g>';
  /* progress along both arms, and a marker at each visit */
  g+='<g id="scMeas"><path class="mp" d="M480 '+LA+'H685"/><path class="mp" d="M480 '+LB+'H685"/>';
  TK.forEach(function(x,i){g+='<circle class="vm" data-i="'+i+'" cx="'+x+'" cy="'+LA+'" r="5"/><circle class="vm" data-i="'+i+'" cx="'+x+'" cy="'+LB+'" r="5"/>'});
  g+='</g>';
  /* volunteers, each with the capsule they will receive */
  g+='<g id="scVol">';VOL.forEach(function(q){g+='<g class="vp" transform="translate('+f1(q.sx)+' '+f1(q.sy)+')"><circle class="pd" r="7.5"/>'+
    (q.bad?'':'<path class="cp'+(q.g?'':' ac')+'" d="M13.5 -3h5a3 3 0 0 1 0 6h-5a3 3 0 0 1 0-6z"/>')+'</g>'});g+='</g>';
  if(!mob){
    g+='<g id="lVol"><text class="t" x="100" y="206" text-anchor="middle">VOLUNTEERS</text></g>';
    g+='<g id="lScr"><text class="t" x="'+GX+'" y="402" text-anchor="middle">SCREENING</text></g>';
    g+='<g id="lRnd"><text class="t" x="330" y="'+(NY+4)+'">RANDOMISED</text></g>';
    g+='<g id="lWk">'+["BASELINE","WEEK 4","WEEK 8","WEEK 12"].map(function(s,i){return '<text class="t" x="'+TK[i]+'" y="474" text-anchor="middle">'+s+'</text>'}).join("")+'</g>';
  }else{g+='<g id="lVol"></g><g id="lScr"></g><g id="lRnd"></g><g id="lWk"></g>'}
  g+='<g id="lGa"><text class="t g" x="350" y="130">GROUP A</text></g><g id="lGb"><text class="t g" x="350" y="'+(mob?494:484)+'">GROUP B</text></g>';
  g+='<g id="lAc"><text class="t o" x="350" y="130">ACTIVE</text></g><g id="lPl"><text class="t o p" x="350" y="'+(mob?494:484)+'">PLACEBO</text></g>';
  var ly=SCH-14,lx=mob?44:56;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'SCREENED FOR ELIGIBILITY':'VOLUNTEERS ARE SCREENED FOR ELIGIBILITY')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'RANDOMISED, DOUBLE-BLIND':'ALLOCATED BY CHANCE; NO ONE KNOWS THE GROUP')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'MEASURED AT EVERY VISIT':'MEASURED AT BASELINE, DURING AND AT THE END')+'</text></g>';
  g+='<g id="lb4"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'UNBLINDED AND PUBLISHED':'UNBLINDED, ANALYSED AND PUBLISHED')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={pub:$("#scPub",svg),base:dl(".sD"),pj:dl("#scPub .pj"),mp:dl("#scMeas .mp"),vm:$$("#scMeas .vm",svg),vp:$$("#scVol .vp",svg),
    cp:$$("#scVol .cp",svg),lVol:$("#lVol",svg),lScr:$("#lScr",svg),lRnd:$("#lRnd",svg),lWk:$("#lWk",svg),
    lGa:$("#lGa",svg),lGb:$("#lGb",svg),lAc:$("#lAc",svg),lPl:$("#lPl",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function lerp(a,b,t){return a+(b-a)*t}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.03,.22),s2=seg(p,.28,.47),s3=seg(p,.53,.72),s4=seg(p,.78,.95);
    /* volunteers: through the gate (1), along a branch to their group (2) */
    var ci=0;
    E.vp.forEach(function(el,i){var q=VOL[i],x,y,a=1;
      var f=sm((s1-q.d*.4)/.6);
      if(q.bad){var gx=GX-16,gy=300;x=lerp(q.sx,gx,f);y=lerp(q.sy,gy+(i===4?-12:12),f);a=1-sm((s1-.75)/.25)}
      else{
        if(f<.5){var t=f*2;x=lerp(q.sx,GX,t);y=lerp(q.sy,300,t)}else{var t2=(f-.5)*2;x=lerp(GX,q.hx,t2);y=lerp(300,q.hy,t2)}
        var r=sm((s2-q.d*.4)/.6);
        if(r>0){if(r<.25){var u=r/.25;x=lerp(q.hx,NX,u);y=lerp(q.hy,NY,u)}
          else if(r<.8){var P=bz(brP(q.g),(r-.25)/.55);x=P[0];y=P[1]}
          else{var w=(r-.8)/.2;x=lerp(340,q.lx,w);y=lerp(q.g?LB:LA,q.ly,w)}}
        var c=E.cp[ci++];if(c){op(c,b*sm((r-.82)/.18));
          var am=q.g?0:sm(s4/.5);c.style.fill=am>0?"rgba(232,163,58,"+(.95*am).toFixed(3)+")":"";c.style.stroke=am>.5?"#f0b450":""}}
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");op(el,b*a)});
    /* measurement along both arms; a marker lights at each visit */
    draw(E.mp,b*s3);
    E.vm.forEach(function(el){var k=+el.dataset.i;op(el,b*sm((s3-k/3*.96)/.06+1))});
    /* the arms join and the journal page draws in */
    draw(E.pj,b*s4);op(E.pub,s4>0?1:0);
    op(E.lVol,b*(1-seg(p,.1,.2)));op(E.lScr,b*(1-seg(p,.3,.38)));
    op(E.lRnd,b*seg(p,.26,.32)*(1-seg(p,.5,.56)));op(E.lWk,b*seg(p,.5,.56));
    op(E.lGa,b*seg(p,.36,.44)*(1-seg(p,.8,.86)));op(E.lGb,b*seg(p,.36,.44)*(1-seg(p,.8,.86)));
    op(E.lAc,b*seg(p,.86,.92));op(E.lPl,b*seg(p,.86,.92));
    op(E.l1,b*seg(p,.04,.1)*(1-seg(p,.22,.27)));op(E.l2,b*seg(p,.29,.35)*(1-seg(p,.47,.52)));
    op(E.l3,b*seg(p,.54,.6)*(1-seg(p,.72,.77)));op(E.l4,b*seg(p,.8,.86));
  };
}
