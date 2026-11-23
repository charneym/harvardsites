/* The story scene (DB/BL): Vogenx's own mechanism (vogenx.com, Post Bariatric Hypoglycemia and Pipeline pages:
   bariatric surgery patients overexpress SGLT1 in the intestinal lumen, which increases the quantity and rate of glucose
   absorption; glucose absorption stimulates GIP and insulin, and the hyperinsulinemia drives hypoglycemia; mizagliflozin
   inhibits SGLT1 with a site of action in the intestinal lumen, reducing and delaying glucose uptake), drawn as ONE
   continuous fine-line scene that fills the frame: the small-intestinal lining as a row of villi with SGLT1 transporters
   at their tips, the capillary loops inside them and the bloodstream below, and under it the blood-glucose curve after a
   meal against the 54 mg/dL hypoglycemia line. Frame 0 is already complete.
   Step 1 (absorb): glucose streams from the lumen through the transporters into the blood; the curve spikes.
   Step 2 (overshoot): insulin rises in the blood; the curve crashes below the line, which glows.
   Step 3 (inhibit): mizagliflozin caps each transporter (logo green); glucose waits in the lumen; a gentler green curve
   stays above the line. Everything is driven by the scrubbed progress. Labels keep >= 8px clear of every stroke (DR3). */
var SCW=760,SCH=560;
var VX=[150,240,330,420,510,600];
var MUC=(function(){var d="M100 300H"+(VX[0]-28);VX.forEach(function(x,i){d+="C"+(x-28)+" 210 "+(x-26)+" 166 "+x+" 166C"+(x+26)+" 166 "+(x+28)+" 210 "+(x+28)+" 300";d+="H"+(i<VX.length-1?VX[i+1]-28:660)});return d})();
var CAPS=VX.map(function(x){return "M"+(x-9)+" 318V228C"+(x-9)+" 206 "+(x+9)+" 206 "+(x+9)+" 228V318"});
var TR=[];VX.forEach(function(x){TR.push([x-21,184],[x,167],[x+21,184])});
var C1="M120 470C180 470 210 400 260 400C320 400 360 518 420 518C480 518 540 476 640 476";
var C2="M120 470C200 470 240 446 300 446C370 446 420 486 480 486C540 486 580 476 640 476";
var NA=18,NB=14,NI=8;
function gpos(i){return [136+((i*.618034)%1)*494,76+((i*.7548777)%1)*58]}
function storyScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'104 12 556 500':'90 10 680 556')+'" aria-hidden="true">';
  g+='<defs><radialGradient id="ghyp"><stop offset="0" stop-color="#f2a38e" stop-opacity=".5"/><stop offset="1" stop-color="#f2a38e" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="gcalm"><stop offset="0" stop-color="#7fcb57" stop-opacity=".3"/><stop offset="1" stop-color="#7fcb57" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  CAPS.forEach(function(d){g+='<path class="wo sD" d="'+d+'"/>'});
  g+='<path class="wl sD" d="'+MUC+'"/>';
  g+='<path class="wl sD" d="M100 318H660"/><path class="wl sD" d="M100 342H660"/>';
  g+='</g>';
  g+='<path class="thr" id="thr" d="M120 500H660"/>';
  g+='<circle class="halo" id="hHyp" cx="420" cy="512" r="40" fill="url(#ghyp)"/><circle class="halo" id="hCalm" cx="375" cy="190" r="150" fill="url(#gcalm)"/>';
  g+='<g id="scTr">';TR.forEach(function(p){g+='<rect class="tr" x="'+(p[0]-3.5)+'" y="'+(p[1]-3.5)+'" width="7" height="7"/>'});g+='</g>';
  g+='<g id="scA">';for(i=0;i<NA;i++)g+='<circle class="gl" r="3.2" cx="0" cy="0"/>';g+='</g>';
  g+='<g id="scB">';for(i=0;i<NB;i++)g+='<circle class="gl" r="3.2" cx="0" cy="0"/>';g+='</g>';
  g+='<g id="scI">';for(i=0;i<NI;i++)g+='<path class="ins" d="M0 -4.5L4.5 0L0 4.5L-4.5 0Z"/>';g+='</g>';
  g+='<g id="scInh">';TR.forEach(function(p){g+='<circle class="ih" r="7" cx="'+p[0]+'" cy="'+p[1]+'"/>'});g+='</g>';
  g+='<path class="cv1" id="cv1" d="'+C1+'"/><path class="cv2" id="cv2" d="'+C2+'"/>';
  if(!mob){
    g+='<g id="lLum"><text class="t" x="672" y="112">LUMEN</text></g>';
    g+='<g id="lTr"><path class="ld" d="M632 184H664"/><text class="t" x="672" y="188">SGLT1</text></g>';
    g+='<g id="lBlk"><text class="t a" x="672" y="206">BLOCKED</text></g>';
    g+='<g id="lBld"><text class="t" x="672" y="334">BLOOD</text></g>';
    g+='<g id="lThr"><text class="t" x="672" y="504">54 mg/dL</text></g>';
    g+='<g id="lGlu"><text class="t" x="120" y="384">BLOOD GLUCOSE AFTER A MEAL</text></g>';
  }else{
    g+='<g id="lLum"></g><g id="lTr"></g><g id="lBlk"></g><g id="lBld"></g><g id="lThr"></g>';
    g+='<g id="lGlu"><text class="t" x="120" y="384">BLOOD GLUCOSE</text></g>';
  }
  var ly=mob?34:38,lx=mob?110:120;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'GLUCOSE FLOODS IN':'GLUCOSE FLOODS IN THROUGH SGLT1')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'INSULIN OVERSHOOTS':'INSULIN OVERSHOOTS, GLUCOSE CRASHES')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'SGLT1 INHIBITED IN THE GUT':'MIZAGLIFLOZIN INHIBITS SGLT1 IN THE GUT')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),c1:dl("#cv1")[0],c2:dl("#cv2")[0],A:$$("#scA .gl",svg),B:$$("#scB .gl",svg),I:$$("#scI .ins",svg),
    tr:$$("#scTr .tr",svg),inh:$$("#scInh .ih",svg),thr:$("#thr",svg),hH:$("#hHyp",svg),hC:$("#hCalm",svg),
    lLum:$("#lLum",svg),lTr:$("#lTr",svg),lBlk:$("#lBlk",svg),lBld:$("#lBld",svg),lThr:$("#lThr",svg),lGlu:$("#lGlu",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function at(el,x,y){el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1))}
  /* each glucose molecule heads for a transporter on its nearest villus tip */
  function tgt(i){var s=gpos(i),k=0;VX.forEach(function(x,j){if(Math.abs(x-s[0])<Math.abs(VX[k]-s[0]))k=j});return [k,TR[k*3+(i%3)]]}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.32),s2=seg(p,.36,.64),s3=seg(p,.68,.94);
    /* 1. glucose: lumen > transporter > capillary loop > bloodstream, staggered */
    E.A.forEach(function(el,i){var s=gpos(i),t=tgt(i),xc=VX[t[0]],tp=t[1],cx=xc+(i%2?9:-9),f=sm((seg(p,.04,.5)-i*.022)/(1-(NA-1)*.022)),x,y;
      if(f<.4){var k=sm(f/.4);x=s[0]+(tp[0]-s[0])*k;y=s[1]+(tp[1]-s[1])*k}
      else if(f<.75){var k2=sm((f-.4)/.35);x=tp[0]+(cx-tp[0])*Math.min(1,k2*3);y=tp[1]+(330-tp[1])*k2}
      else{var k3=(f-.75)/.25;x=cx+60*k3;y=330}
      at(el,x,y);op(el,b*(1-sm((f-.86)/.14))*(1-s3))});
    E.tr.forEach(function(el){el.classList.toggle("on",s1>.05&&s3<.5)});
    draw([E.c1],sm(s1)*.42+sm(s2)*.58);
    op(E.c1[0],b*(1-.72*s3));
    op(E.lLum,b);op(E.lTr,b);op(E.lBld,b);op(E.lThr,b);op(E.lGlu,b);op(E.thr,b);
    /* 2. insulin rises in the blood; the crash below the line glows */
    E.I.forEach(function(el,i){var f=seg(p,.36+i*.02,.5+i*.02),x=140+i*64+34*f;el.setAttribute("transform","translate("+x.toFixed(1)+" 330)");op(el,b*f*(1-s3))});
    op(E.hH,b*seg(p,.5,.62)*(1-s3));
    /* 3. mizagliflozin caps each transporter; glucose waits above the tips; a gentler curve */
    E.inh.forEach(function(el,i){var f=seg(p,.68+i*.006,.78+i*.006);op(el,b*f);el.setAttribute("r",(13-6*f).toFixed(2))});
    E.B.forEach(function(el,i){var s=gpos(i+3),tp=TR[(i*5+1)%18],f=sm(seg(p,.7+i*.008,.86+i*.008)),x=s[0]+(tp[0]-s[0])*f,y=s[1]+(tp[1]-17-s[1])*f;
      at(el,x,y);op(el,b*seg(p,.68,.74))});
    draw([E.c2],sm(seg(p,.74,.94)));op(E.c2[0],b*seg(p,.72,.76));
    op(E.hC,b*s3);op(E.lBlk,b*seg(p,.8,.88));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
