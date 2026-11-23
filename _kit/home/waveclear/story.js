/* The story scene (BL/BY/DB): how RESOLUTION clears a vessel, as ONE continuous drawing of a peripheral artery seen in
   section, occluded by thrombus, with the 6 French catheter riding a guidewire. Step 1, micro-cavitation: acoustic
   micro-events at the ultrasonic tip erode the clot face. Step 2, micro-streaming: recirculation loops beside the tip
   carry the infused thrombolytic (blue) into the clot matrix while fragments shrink. Step 3, macro-motion: the catheter
   sweeps wall to wall as it advances, the clot clears across the full lumen and blood flows again.
   Source: waveclear.com (Home "How it Works", Technology). Driven by the scrubbed progress. */
var SCW=760,SCH=520,CY=270,LH=104,WT=26,CR0=380,CR1=640;
function wcR(y){return CR1+9*Math.sin(y*.13)+5*Math.sin(y*.051)}
function wcFront(L,C,y){var u=(y-CY)/LH;return L+C*(1-u*u)+4*Math.sin(y*.23+1.3)}
function wcClot(L,C){var pts=[],y,x,r,top=CY-LH,bot=CY+LH;
  for(y=top;y<=bot;y+=7){x=wcFront(L,C,y);r=wcR(y);pts.push([Math.min(x,r),y])}
  for(y=bot;y>=top;y-=7){pts.push([wcR(y),y])}
  return "M"+pts.map(function(p){return p[0].toFixed(1)+" "+p[1].toFixed(1)}).join("L")+"Z"}
var WCF=(function(){var s=11,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],i;for(i=0;i<40;i++){var x=CR0-20+R()*290,y=CY-LH+R()*LH*2,an=(R()-.5)*1.4,l=30+R()*60;a.push([x,y,x+Math.cos(an)*l,y+Math.sin(an)*l])}return a})();
var WCE=(function(){var s=5,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],i;for(i=0;i<60;i++)a.push([CR0+R()*270,CY-LH+6+R()*(LH*2-12)]);return a})();
function wcScene(o){
  var g='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">',i,top=CY-LH,bot=CY+LH;
  g+='<defs><linearGradient id="wcFd" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".07" stop-color="#fff"/><stop offset=".93" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>'+
     '<mask id="wcMk" maskUnits="userSpaceOnUse" x="0" y="0" width="'+SCW+'" height="'+SCH+'"><rect width="'+SCW+'" height="'+SCH+'" fill="url(#wcFd)"/></mask>'+
     '<clipPath id="wcCp"><path id="scCp" d="'+wcClot(CR0,0)+'"/></clipPath>'+
     '<linearGradient id="wcLg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e2cfd3"/><stop offset=".5" stop-color="#f7f0f2"/><stop offset="1" stop-color="#ddc8cc"/></linearGradient><linearGradient id="wcCg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6a1317"/><stop offset=".45" stop-color="#a1262b"/><stop offset="1" stop-color="#5e1014"/></linearGradient>'+'<clipPath id="wcLm"><rect x="0" y="'+top+'" width="'+SCW+'" height="'+(LH*2)+'"/></clipPath></defs>';
  g+='<g mask="url(#wcMk)">';
  /* vessel: wall bands with engraved hatching, lumen */
  g+='<rect class="lm" x="0" y="'+top+'" width="'+SCW+'" height="'+(LH*2)+'"/>';
  g+='<rect class="wb" x="0" y="'+(top-WT)+'" width="'+SCW+'" height="'+WT+'"/><rect class="wb" x="0" y="'+bot+'" width="'+SCW+'" height="'+WT+'"/>';
  g+='<path class="ht" d="';for(i=0;i<56;i++){var hx=i*14;g+='M'+hx+' '+(top-3)+'l8 -'+(WT-6)+'M'+(hx+4)+' '+(bot+3)+'l8 '+(WT-6)}g+='"/>';
  g+='<path class="wo sD" d="M0 '+(top-WT)+'H'+SCW+'M0 '+(bot+WT)+'H'+SCW+'"/><path class="wi sD" d="M0 '+top+'H'+SCW+'M0 '+bot+'H'+SCW+'"/>';
  /* restored flow: red cells (behind everything in the lumen) */
  g+='<g id="scRbc" clip-path="url(#wcLm)">';for(i=0;i<14;i++)g+='<ellipse class="rbc" rx="7" ry="3.4" cx="0" cy="0"/>';g+='</g>';
  /* the guidewire, across the occlusion, ending in its J-tip */
  g+='<path class="gw" id="scGw" d=""/>';
  /* thrombus with fibrin strands and trapped cells */
  g+='<g id="scCg"><path class="cl" id="scCl" d="'+wcClot(CR0,0)+'"/><g clip-path="url(#wcCp)"><path class="fb" d="'+WCF.map(function(f){return 'M'+f[0].toFixed(1)+' '+f[1].toFixed(1)+'L'+f[2].toFixed(1)+' '+f[3].toFixed(1)}).join("")+'"/>';
  WCE.forEach(function(e){g+='<circle class="ce" cx="'+e[0].toFixed(1)+'" cy="'+e[1].toFixed(1)+'" r="3"/>'});g+='</g></g>';
  /* fragments shed from the face, micro-bubbles, streaming loops and the lytic */
  g+='<g id="scFr">';for(i=0;i<12;i++)g+='<circle class="fr" r="2"/>';g+='</g>';
  g+='<g id="scSt"><path class="sl" id="scL1" d=""/><path class="sl" id="scL2" d=""/></g>';
  g+='<g id="scDr">';for(i=0;i<10;i++)g+='<circle class="dr" r="2.6"/>';g+='</g>';
  g+='<g id="scBb">';for(i=0;i<14;i++)g+='<circle class="bb" r="2"/>';g+='</g>';
  /* the catheter and its ultrasonic tip */
  g+='<path class="co" id="scCo" d=""/><path class="ci" id="scCi" d=""/><path class="cs" id="scCs" d=""/>';
  g+='<path class="to" id="scTo" d=""/><path class="ti" id="scTi" d=""/>';
  g+='<g id="scPu"><path class="pu" d=""/><path class="pu" d=""/><path class="pu" d=""/></g>';
  g+='</g>';
  /* labels, in the clear bands above and below the vessel */
  var m=o.mob,ty1=top-WT-56,ty2=bot+WT+48;
  function lab(id,lx,up,a,t){var y0=up?top-WT-8:bot+WT+8,y1=up?ty1-4:ty2-14,ya=up?ty1:ty2;
    return '<g id="'+id+'"><path class="ld" d="M'+lx+' '+(up?top+10:bot-10)+'V'+y1+'"/><text class="a" x="'+(lx+12)+'" y="'+ya+'">'+a+'</text>'+(m||!t?'':'<text class="t" x="'+(lx+12)+'" y="'+(ya+20)+'">'+t+'</text>')+'</g>'}
  g+=lab("lb1",m?300:420,1,"MICRO-CAVITATION","OVER ONE MILLION PULSES A MINUTE");
  g+=lab("lb2",m?300:440,0,"MICRO-STREAMING","LYTIC DRAWN INTO THE CLOT");
  g+=lab("lb3",m?330:540,1,"MACRO-MOTION","WALL-TO-WALL SWEEP");
  g+=lab("lb4",m?120:220,0,"FLOW RESTORED","");
  return g+'</svg>';
}
function scene(){return wcScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var q=function(s){return $(s,svg)},qa=function(s){return $$(s,svg)};
  var E={base:dl(".sD"),cl:q("#scCl"),cg:q("#scCg"),cp:q("#scCp"),gw:q("#scGw"),co:q("#scCo"),ci:q("#scCi"),cs:q("#scCs"),to:q("#scTo"),ti:q("#scTi"),
    pu:qa("#scPu .pu"),bb:qa("#scBb .bb"),fr:qa("#scFr .fr"),dr:qa("#scDr .dr"),rbc:qa("#scRbc .rbc"),l1:q("#scL1"),l2:q("#scL2"),st:q("#scSt"),
    lb1:q("#lb1"),lb2:q("#lb2"),lb3:q("#lb3"),lb4:q("#lb4")};
  var lastB=-1,top=CY-LH,bot=CY+LH;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function fr(x){return x-Math.floor(x)}
  function loop(cx,cy,rx,ry){return "M"+(cx-rx)+" "+cy+"A"+rx+" "+ry+" 0 1 1 "+(cx+rx)+" "+cy+"A"+rx+" "+ry+" 0 1 1 "+(cx-rx)+" "+cy}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=sm2(seg(p,.02,.3)),s2=sm2(seg(p,.36,.62)),s3=sm2(seg(p,.68,.93));
    var tipX=300+92*s1+78*s2+120*s3, L=CR0+40*s1+80*s2+170*s3, C=20*s1+22*s2-42*sm2(seg(p,.7,.86));
    var A=72*Math.sin(Math.PI*seg(p,.68,.94)), off=A*Math.sin(p*Math.PI*2*9), ty=CY+off, tf=tipX+22;
    /* thrombus */
    var cd=wcClot(L,Math.max(0,C));E.cl.setAttribute("d",cd);E.cp.setAttribute("d",cd);op(E.cg,1-seg(L,CR1-14,CR1+12));
    /* catheter body bends toward the sweeping tip */
    var body="M-30 "+CY+"C"+(tipX-170)+" "+CY+" "+(tipX-80)+" "+ty.toFixed(1)+" "+tipX.toFixed(1)+" "+ty.toFixed(1);
    E.co.setAttribute("d",body);E.ci.setAttribute("d",body);E.cs.setAttribute("d",body);
    var tp="M"+tipX.toFixed(1)+" "+ty.toFixed(1)+"H"+tf.toFixed(1);E.to.setAttribute("d",tp);E.ti.setAttribute("d",tp);
    E.gw.setAttribute("d","M"+tf.toFixed(1)+" "+ty.toFixed(1)+"C"+(tf+40).toFixed(1)+" "+ty.toFixed(1)+" "+(tf+70).toFixed(1)+" "+CY+" "+(tf+110).toFixed(1)+" "+CY+"L700 "+CY+"Q722 "+CY+" 722 "+(CY-12)+"Q722 "+(CY-24)+" 710 "+(CY-22));
    /* cavitation: pulses and bubbles at the tip, strongest in step 1, continuing through the procedure */
    var cav=b*Math.max(seg(p,.03,.08)*(1-.55*seg(p,.33,.4)),.0);
    E.pu.forEach(function(el,i){var k=fr(p*26+i/3),r=7+k*46,pc=tf+12,a0=-0.85,a1=0.85;
      el.setAttribute("d","M"+(pc+r*Math.cos(a0)).toFixed(1)+" "+(ty+r*Math.sin(a0)).toFixed(1)+"A"+r.toFixed(1)+" "+r.toFixed(1)+" 0 0 1 "+(pc+r*Math.cos(a1)).toFixed(1)+" "+(ty+r*Math.sin(a1)).toFixed(1));op(el,cav*(1-k)*.9)});
    E.bb.forEach(function(el,i){var k=fr(i*.37+p*9),x=tf+6+k*Math.max(10,(L+C)-tf),y=ty+(((i*37)%80)-40)*(.4+.6*k);
      el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",Math.max(top+4,Math.min(bot-4,y)).toFixed(1));el.setAttribute("r",(1.2+2.2*Math.sin(Math.PI*k)).toFixed(2));op(el,cav*Math.sin(Math.PI*k))});
    /* fragments shed from the clot face drift back and shrink (steps 1 to 2) */
    var fv=b*seg(p,.06,.12)*(1-seg(p,.62,.7));
    E.fr.forEach(function(el,i){var k=fr(p*6+i/12),y0=top+10+((i*53)%(LH*2-20)),fx=wcFront(L,Math.max(0,C),y0);
      var x=fx-4-k*70,y=y0+(s2>0?18*Math.sin(k*Math.PI*2+i)*s2:0);el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",Math.max(top+3,Math.min(bot-3,y)).toFixed(1));el.setAttribute("r",(2.6*(1-k)+.4).toFixed(2));op(el,fv*(1-k))});
    /* micro-streaming: recirculation loops above and below the tip, the lytic carried along them into the clot */
    var sv=b*seg(p,.38,.44)*(1-seg(p,.64,.69));op(E.st,sv);
    var lx=tf-30,l1=loop(lx,CY-52,56,28),l2=loop(lx,CY+52,56,28);E.l1.setAttribute("d",l1);E.l2.setAttribute("d",l2);
    E.l1.style.strokeDashoffset=(-p*900).toFixed(1);E.l2.style.strokeDashoffset=(p*900).toFixed(1);
    E.dr.forEach(function(el,i){var k=fr(p*7+i/10),up=i%2===0,an=(up?-1:1)*k*Math.PI*2,x=lx-56*Math.cos(an),y=(up?CY-52:CY+52)-28*Math.sin(an)*(up?1:-1);
      if(k>.75){var j=(k-.75)/.25;x=lx+56+j*44;y=(up?CY-52:CY+52)+(up?1:-1)*j*8}
      el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1));op(el,sv*(k>.75?1-(k-.75)/.25*.6:1))});
    /* flow restored: red cells stream through the cleared lumen */
    var rv=b*seg(p,.86,.95);
    E.rbc.forEach(function(el,i){var k=fr(i/14+p*3),x=-20+k*(SCW+40),y=(i%2?CY+58:CY-58)+((i*13)%30)-15;
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+((i*29)%40-20)+")");op(el,rv*.95)});
    op(E.lb1,b*seg(p,.06,.12)*(1-seg(p,.32,.36)));op(E.lb2,b*seg(p,.42,.48)*(1-seg(p,.64,.68)));op(E.lb3,b*seg(p,.72,.78));op(E.lb4,b*seg(p,.9,.95));
  };
}
function sm2(x){return x*x*(3-2*x)}
