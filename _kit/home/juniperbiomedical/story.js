/* The story scene (BL/BY/DB): precision neuromodulation, after Juniper's own tree analogy (Technology page: "Imagine
   that a tree represents peripheral nerves"). ONE continuous fine-line scene: a peripheral nerve tree rises from its trunk.
   Step 1 (today): a conventional lead sits beside the trunk and pushes energy through the surrounding tissue (volume
   conduction); halos spread and many branches light, most of them off target. Step 2 (Juniper): the halos and lead fade;
   the micro-implant clips onto one distal branch and only that branch and its twigs light. Step 3: automatic daily
   therapy; pulses run out along the target branch from the long-term, battery-powered implant, and a week of daily
   sessions ticks along the base. Driven by the scrubbed progress. */
var SCW=760,SCH=520;
var JBT=(function(){var s=11,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},out=[];
  function grow(x,y,ang,len,w,dep,sub,par){
    var ex=x+Math.cos(ang)*len,ey=y+Math.sin(ang)*len,bend=(R()-.5)*len*.35,mx=(x+ex)/2+Math.cos(ang+Math.PI/2)*bend,my=(y+ey)/2+Math.sin(ang+Math.PI/2)*bend;
    var id=out.length;out.push({d:"M"+x.toFixed(1)+" "+y.toFixed(1)+"Q"+mx.toFixed(1)+" "+my.toFixed(1)+" "+ex.toFixed(1)+" "+ey.toFixed(1),w:w,dep:dep,sub:sub,x0:x,y0:y,x1:ex,y1:ey,mx:mx,my:my,par:par});
    if(dep>=5)return;
    var n=dep<2?3:2;
    for(var i=0;i<n;i++){
      var sp=n===3?(i-1)*.8:(i?1:-1)*(.36+R()*.2),a2=ang+sp+(R()-.5)*.14;
      var isT=sub||(dep===1&&id===TGT.parentId&&i===1);
      grow(ex,ey,a2,len*(.76+R()*.08),Math.max(.9,w*.68),dep+1,isT,id);
    }
  }
  var TGT={parentId:-1};
  /* trunk: two segments, then the crown */
  out.push({d:"M372 540Q364 480 376 430",w:7,dep:0,sub:false,x0:372,y0:540,x1:376,y1:430,mx:364,my:480,par:-1});
  TGT.parentId=-2;
  /* branch 1 (index 1..): the right-hand limb is the target (decided after the fact below) */
  grow(376,430,-Math.PI/2,100,5.4,1,false,0);
  /* choose the target: the depth-2 branch whose end lies furthest right and high */
  var best=-1,bv=-1e9;out.forEach(function(b,i){if(b.dep===2){var v=b.x1-b.y1*.4;if(v>bv){bv=v;best=i}}});
  function mark(i){out[i].sub=true;out.forEach(function(b,j){if(b.par===i)mark(j)})}
  if(best>=0)mark(best);
  out.tgt=best;return out})();
function jbPt(b,t){var u=1-t;return [u*u*b.x0+2*u*t*b.mx+t*t*b.x1,u*u*b.y0+2*u*t*b.my+t*t*b.y1]}
function jbAng(b,t){var dx=2*(1-t)*(b.mx-b.x0)+2*t*(b.x1-b.mx),dy=2*(1-t)*(b.my-b.y0)+2*t*(b.y1-b.my);return Math.atan2(dy,dx)}
function jbScene(o){
  var g='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">',T=JBT[JBT.tgt];
  /* tissue: faint muscle striation lines behind everything */
  g+='<g id="scBase">';
  for(var i=0;i<16;i++){var y=40+i*31;g+='<path class="tis sD" d="M20 '+(y+8)+'C200 '+(y-14)+' 480 '+(y+22)+' 740 '+(y-4)+'"/>'}
  JBT.forEach(function(b){g+='<path class="nv sD" style="stroke-width:'+b.w.toFixed(2)+'px" d="'+b.d+'"/>'});
  /* inner fascicle line on the thicker limbs */
  JBT.forEach(function(b){if(b.w>2.5)g+='<path class="fas sD" d="'+b.d+'"/>'});
  g+='<text class="t" x="390" y="512">NERVE TRUNK</text>';
  g+='</g>';
  /* step 1: volume conduction from a lead beside the trunk */
  g+='<g id="sc1"><g id="halo">';for(i=0;i<5;i++)g+='<ellipse class="halo" cx="352" cy="478" rx="10" ry="8"/>';g+='</g>';
  g+='<path class="lead" d="M190 560C250 545 320 525 346 484"/>';
  for(i=0;i<4;i++){var tt=.55+i*.13,lx=(1-tt)*(1-tt)*190+2*(1-tt)*tt*300+tt*tt*346,ly=(1-tt)*(1-tt)*560+2*(1-tt)*tt*532+tt*tt*484;g+='<circle class="ctc" cx="'+lx.toFixed(1)+'" cy="'+ly.toFixed(1)+'" r="3.4"/>'}
  g+='</g>';
  g+='<g id="lit1">';JBT.forEach(function(b){if(b.dep<=4)g+='<path class="l1" style="stroke-width:'+(b.w+.6).toFixed(2)+'px" d="'+b.d+'"/>'});g+='</g>';
  /* step 2: the micro-implant on the distal target branch */
  g+='<g id="lit2">';JBT.forEach(function(b){if(b.sub)g+='<path class="l2" style="stroke-width:'+(b.w+.8).toFixed(2)+'px" d="'+b.d+'"/>'});g+='</g>';
  var ip=jbPt(T,.32),ia=jbAng(T,.32)*180/Math.PI;
  g+='<g id="imp" transform="translate('+ip[0].toFixed(1)+' '+ip[1].toFixed(1)+') rotate('+ia.toFixed(1)+')"><g class="impg">'+
     '<rect class="ib" x="-17" y="2" width="34" height="25" rx="6"/><path class="iband" d="M-17 12H17M-17 15.5H17"/>'+
     '<rect class="ic" x="-8" y="-7" width="16" height="12" rx="3"/><g id="bat"><rect class="bt" x="-9" y="19" width="16" height="5"/><rect class="btf" id="btf" x="-8.2" y="19.8" width="14.4" height="3.4"/><path class="bt" d="M7.6 20.6v1.8"/></g></g></g>';
  /* step 3: pulses running out along the target subtree */
  g+='<g id="pul">';for(i=0;i<14;i++)g+='<circle class="pu" r="2.6"/>';g+='</g>';
  /* a week of daily therapy along the base */
  g+='<g id="wk">';var D=["M","T","W","T","F","S","S"];for(i=0;i<7;i++){var x=500+i*34;g+='<path class="wt" d="M'+x+' 486V470"/><circle class="wd" cx="'+x+'" cy="462" r="4"/><text class="t" x="'+x+'" y="506" text-anchor="middle">'+D[i]+'</text>'}
  g+='<text class="t a" x="698" y="440" text-anchor="end">AUTOMATIC DAILY THERAPY</text></g>';
  g+='<g id="lb1"><text class="t a o" x="24" y="400">VOLUME CONDUCTION</text><text class="t" x="24" y="420">ENERGY THROUGH TISSUE,</text><text class="t" x="24" y="438">MANY BRANCHES HIT</text></g>';
  var lx2=ip[0]+44,ly2=ip[1]+58;
  g+='<g id="lb2"><path class="ldr" d="M'+(ip[0]+16).toFixed(1)+' '+(ip[1]+26).toFixed(1)+'L'+(lx2-6).toFixed(1)+' '+(ly2-14).toFixed(1)+'"/><text class="t a" x="'+lx2.toFixed(1)+'" y="'+ly2.toFixed(1)+'">MICRO-IMPLANT ON THE</text><text class="t a" x="'+lx2.toFixed(1)+'" y="'+(ly2+18).toFixed(1)+'">DISTAL TARGET NERVE</text></g>';
  return g+'</svg>';
}
function scene(){return jbScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;p.style.strokeDashoffset=L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),l1:dl("#lit1 .l1"),l2:dl("#lit2 .l2"),sc1:$("#sc1",svg),halo:$$("#halo ellipse",svg),
    imp:$("#imp .impg",svg),btf:$("#btf",svg),pu:$$("#pul .pu",svg),wk:$("#wk",svg),wd:$$("#wk .wd",svg),b1:$("#lb1",svg),b2:$("#lb2",svg)};
  var tg=$$("#lit2 .l2",svg);
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* step 1: the lead appears, halos spread through tissue, the whole crown lights (off target) */
    var s1=seg(p,.02,.12),spread=seg(p,.06,.28),off=seg(p,.34,.44);
    op(E.sc1,b*s1*(1-off));
    E.halo.forEach(function(el,i){var k=(spread*1.4-i*.12);k=k<0?0:k>1?1:k;el.setAttribute("rx",(10+k*(120+i*40)).toFixed(1));el.setAttribute("ry",(8+k*(80+i*26)).toFixed(1));op(el,(1-k*.7)*(k>0?1:0))});
    draw(E.l1,spread);E.l1.forEach(function(a){a[0].style.opacity=(b*(1-off)).toFixed(3)});
    op(E.b1,b*seg(p,.1,.16)*(1-seg(p,.3,.36)));
    /* step 2: the implant clips on; only the target branch lights */
    var s2=seg(p,.4,.5),lit=seg(p,.46,.62);
    op(E.imp,b*s2);if(E.imp)E.imp.setAttribute("transform","translate(0 "+(-14*(1-s2)).toFixed(1)+")");
    draw(E.l2,lit);E.l2.forEach(function(a){a[0].style.opacity=b.toFixed(3)});
    op(E.b2,b*seg(p,.5,.56)*(1-seg(p,.66,.7)));
    /* step 3: daily pulses travel out along the target subtree; the week ticks by */
    var s3=seg(p,.7,.76);op(E.wk,b*s3);
    var day=Math.max(0,Math.min(7,(p-.72)/.24*7));
    E.wd.forEach(function(el,i){el.classList.toggle("on",day>i+.15)});
    var ph=(day%1);
    E.pu.forEach(function(el,i){var path=tg[i%tg.length];if(!path){op(el,0);return}var L=path.getTotalLength(),q=(ph+(i>=tg.length?.5:0))%1,pt=path.getPointAtLength(L*q);
      el.setAttribute("cx",pt.x.toFixed(1));el.setAttribute("cy",pt.y.toFixed(1));op(el,b*s3*(q<.08?q/.08:q>.85?(1-q)/.15:1))});
    if(E.btf)E.btf.setAttribute("width",(14.4*(1-.1*s3)).toFixed(2));
  };
}
function sm2(x){return x*x*(3-2*x)}
