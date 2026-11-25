/* The story scene (BL/BY/DB): DIS's own account of pinless registration (distechnology.com > About Us and Why DIS?),
   drawn as ONE machine in elevation, kept on screen for all four steps:
   1 Load: core and prepreg are laid on the stack together (no pre-stacking, no templates).
   2 Align: the two cameras, locked after set-up, find the targets; each camera view pulls its target onto the cross.
   3 Clamp: alignment and clamping in the same location; the view confirms position after clamping.
   4 Weld: two independent inductive weld heads bond the edges with a programmed profile (ramp up, hold, cool down). Schematic. */
var SCW=760,SCH=520,BX=[120,290,470,650],CX=[200,560],TOPY=286;
function dsScene(o){
  var g='',mob=o.mob,i,k;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<radialGradient id="dsGl"><stop offset="0" stop-color="#ffd2a0" stop-opacity=".95"/><stop offset=".45" stop-color="#ff5a3a" stop-opacity=".55"/><stop offset="1" stop-color="#ff2a2a" stop-opacity="0"/></radialGradient>'+
    '<linearGradient id="dsCn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff2a2a" stop-opacity=".55"/><stop offset="1" stop-color="#ff2a2a" stop-opacity=".04"/></linearGradient>'+
    CX.map(function(x,j){return '<clipPath id="dsV'+j+'"><circle cx="'+x+'" cy="86" r="29"/></clipPath>'}).join("")+'</defs>';
  /* floor, machine bed and the process line */
  g+='<path class="bn sD" d="M24 400H736"/><path class="ln sD" d="M70 352H690"/><path class="ln sD" d="M96 352V398M664 352V398"/>';
  g+='<path class="pl sD" d="M60 452H700"/>';
  BX.forEach(function(x,k){g+='<circle class="dt" id="dsD'+k+'" cx="'+x+'" cy="452" r="5"/>'});
  /* 1 Load: six layers, core and prepreg alternating */
  g+='<g id="dsS0">';
  for(k=0;k<6;k++)g+='<rect class="ly '+(k%2?"pp":"co")+'" id="dsL'+k+'" x="150" y="'+(344-k*12)+'" width="460" height="8"/>';
  g+='</g>';
  /* 2 Align: gantry, two cameras with their light, two camera views with target and cross */
  g+='<g id="dsS1"><path class="ln sD" d="M130 150H630"/>';
  CX.forEach(function(x,j){
    g+='<path class="cn" id="dsCn'+j+'" d="M'+(x-6)+' 212L'+(x+6)+' 212L'+(x+26)+' '+TOPY+'L'+(x-26)+' '+TOPY+'Z"/>'+
       '<rect class="ln sD" x="'+(x-16)+'" y="160" width="32" height="44"/><path class="ln sD" d="M'+x+' 150V160M'+(x-7)+' 204V212H'+(x+7)+'V204"/>'+
       '<circle class="ln sD" cx="'+x+'" cy="86" r="30"/><path class="pl sD" d="M'+x+' 116V150"/>'+
       '<g clip-path="url(#dsV'+j+')"><g class="tg" id="dsTg'+j+'"><circle cx="'+x+'" cy="86" r="10"/><circle cx="'+x+'" cy="86" r="3.2"/></g></g>'+
       '<path class="xh" d="M'+(x-22)+' 86H'+(x+22)+'M'+x+' 64V108"/>'+
       '<path class="ok" id="dsOk'+j+'" d="M'+(x+12)+' 104l5 5l10-12"/>';
  });
  g+='</g>';
  /* 3 Clamp: two clamp pads come down on the stack */
  g+='<g id="dsS2">';
  [250,510].forEach(function(x,j){g+='<path class="cl" id="dsCr'+j+'" d="M'+x+' 150V240"/><rect class="cp" id="dsCp'+j+'" x="'+(x-20)+'" y="240" width="40" height="12"/>'});
  g+='</g>';
  /* 4 Weld: two inductive heads at the panel edges, the glow of the bond, and the weld profile */
  g+='<g id="dsS3">';
  [165,595].forEach(function(x,j){g+='<ellipse class="gl" id="dsG'+j+'" cx="'+x+'" cy="318" rx="34" ry="40"/><path class="cl" id="dsWr'+j+'" d="M'+x+' 150V232"/><rect class="wh" id="dsW'+j+'" x="'+(x-15)+'" y="232" width="30" height="22"/>'});
  g+='<path class="ax" id="dsAx" d="M300 100H460M300 100V44"/><path class="pf" id="dsPf" d="M304 98L344 52H404L456 98"/>'+
     '<text class="t" id="dsT3" x="380" y="128" text-anchor="middle">RAMP · HOLD · COOL</text></g>';
  var CAP=["1 · LOAD","2 · ALIGN","3 · CLAMP","4 · WELD"];
  CAP.forEach(function(c,k){g+='<text class="a" id="dsC'+k+'" x="'+BX[k]+'" y="494" text-anchor="middle">'+c+'</text>'});
  return g+'</svg>';
}
function scene(){return dsScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var mob=svg.classList.contains("mob");
  var E={base:dl(".sD"),S:[0,1,2,3].map(function(k){return $("#dsS"+k,svg)}),D:[0,1,2,3].map(function(k){return $("#dsD"+k,svg)}),C:[0,1,2,3].map(function(k){return $("#dsC"+k,svg)}),
    L:[0,1,2,3,4,5].map(function(k){return $("#dsL"+k,svg)}),cn:[$("#dsCn0",svg),$("#dsCn1",svg)],tg:[$("#dsTg0",svg),$("#dsTg1",svg)],ok:[$("#dsOk0",svg),$("#dsOk1",svg)],
    cr:[$("#dsCr0",svg),$("#dsCr1",svg)],cp:[$("#dsCp0",svg),$("#dsCp1",svg)],wr:[$("#dsWr0",svg),$("#dsWr1",svg)],wh:[$("#dsW0",svg),$("#dsW1",svg)],gl:[$("#dsG0",svg),$("#dsG1",svg)],
    pf:$("#dsPf",svg),ax:$("#dsAx",svg),t3:$("#dsT3",svg)};
  var pfL=E.pf.getTotalLength?E.pf.getTotalLength():200;E.pf.style.strokeDasharray=pfL+" "+pfL;
  var okL=E.ok.map(function(o){var L=o.getTotalLength?o.getTotalLength():24;o.style.strokeDasharray=L+" "+L;return L});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=(+v).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var w=[1-seg(p,.23,.27),seg(p,.23,.27)*(1-seg(p,.48,.52)),seg(p,.48,.52)*(1-seg(p,.73,.77)),seg(p,.73,.77)];
    var cur=w.indexOf(Math.max.apply(null,w));
    E.S.forEach(function(s,k){op(s,b*(k===0?1:(.45+.55*Math.max(w[k],k<cur?.6:0))))});
    E.D.forEach(function(d,k){d.classList.toggle("on",k<=cur);op(d,b)});
    E.C.forEach(function(c,k){op(c,b*(mob?(k===cur?1:0):(k===cur?1:.5)));c.classList.toggle("on",k===cur)});
    /* 1: the layers come down one by one (the first two are already on the bed) */
    E.L.forEach(function(r,k){var a=k<2?1:seg(p,.0+(k-2)*.045,.05+(k-2)*.045);r.setAttribute("transform","translate(0,"+(-(1-a)*46).toFixed(1)+")");op(r,b*a)});
    /* 2: the camera light comes up; each view pulls its target onto the cross */
    var s2=seg(p,.26,.46),on2=seg(p,.24,.3)*(1-.55*seg(p,.74,.8));
    E.cn.forEach(function(c){op(c,b*on2*(.8+.2*Math.sin(p*70)))});
    E.tg.forEach(function(t,j){var dx=(j?-11:9)*(1-s2),dy=(j?7:-8)*(1-s2);t.setAttribute("transform","translate("+dx.toFixed(1)+","+dy.toFixed(1)+")");op(t,b*seg(p,.24,.28))});
    /* 3: the clamps come down; the views confirm position after clamping */
    var s3=seg(p,.52,.64);
    E.cp.forEach(function(c,j){c.setAttribute("y",(240+34*s3).toFixed(1));op(c,b*seg(p,.5,.53))});
    E.cr.forEach(function(c){c.setAttribute("d",c.getAttribute("d").replace(/V[\d.]+$/,"V"+(240+34*s3).toFixed(1)));op(c,b*seg(p,.5,.53))});
    var s3b=seg(p,.64,.72);E.ok.forEach(function(o,j){o.style.strokeDashoffset=(okL[j]*(1-s3b)).toFixed(1);op(o,b*seg(p,.64,.66))});
    /* 4: the weld heads come down, the edges glow through ramp, hold and cool, the profile draws */
    var s4=seg(p,.77,.83),pf=seg(p,.82,.96);
    E.wh.forEach(function(h){h.setAttribute("y",(232+22*s4).toFixed(1));op(h,b*seg(p,.75,.78))});
    E.wr.forEach(function(c){c.setAttribute("d",c.getAttribute("d").replace(/V[\d.]+$/,"V"+(232+22*s4).toFixed(1)));op(c,b*seg(p,.75,.78))});
    var heat=pf<.3?pf/.3:pf<.62?1:Math.max(0,1-(pf-.62)/.38);
    E.gl.forEach(function(g){op(g,b*heat*.95)});
    E.pf.style.strokeDashoffset=(pfL*(1-pf)).toFixed(1);op(E.pf,b*seg(p,.8,.83));
    op(E.t3,b*seg(p,.84,.9));op(E.ax,b*seg(p,.78,.82));
  };
}
