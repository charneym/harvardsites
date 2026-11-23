/* the story scene (BL/BY/DB): ONE drawn figure kept on screen throughout, a rib seen along its length in the chest wall (outside
   at the top, the pleura and lung below). Each step adds one part as Chest Wall Innovations and the PC Fix 510(k) summary describe
   it: a fractured rib; the choice of an extrathoracic or intrathoracic plate; the plate across the fracture, held by locking posts
   and locking caps; the rib held in line. Proportions and the post/cap layout are schematic. */
function scene(){
  var mob=MOBILE();
  function yU(x){return 222+0.000309*(x-400)*(x-400)}
  function f(n){return n.toFixed(1)}
  function curve(x0,x1,dy){var d="";for(var x=x0;x<=x1+.01;x+=8){d+=(d?"L":"M")+f(x)+" "+f(yU(x)+dy)}return d}
  function band(x0,x1,d0,d1){var a=[],b=[];for(var x=x0;x<=x1+.01;x+=6){a.push(f(x)+" "+f(yU(x)+d0));b.unshift(f(x)+" "+f(yU(x)+d1))}return "M"+a.join("L")+"L"+b.join("L")+"Z"}
  var T=44;
  /* the crack: a jagged line through the rib at x~400 */
  var ck=[[398,0],[405,9],[396,18],[404,27],[397,36],[402,44]];
  function ckd(list){return list.map(function(p){return "L"+p[0]+" "+f(yU(p[0])+p[1])}).join("")}
  function crack(){return "M"+ckd(ck).slice(1)}
  function piece(left){var top=[],bot=[],x;
    if(left){for(x=24;x<=396;x+=6)top.push(f(x)+" "+f(yU(x)));for(x=396;x>=24;x-=6)bot.push(f(x)+" "+f(yU(x)+T));
      return "M"+top.join("L")+ckd(ck)+"L"+bot.join("L")+"Z"}
    for(x=404;x<=776;x+=6)top.push(f(x)+" "+f(yU(x)));for(x=776;x>=404;x-=6)bot.push(f(x)+" "+f(yU(x)+T));
    return "M"+top.join("L")+"L"+bot.join("L")+ckd(ck.slice().reverse())+"Z"}
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"20 96 760 300":"0 0 800 560")+'" aria-hidden="true">';
  g+='<defs><linearGradient id="cwRibF" gradientUnits="userSpaceOnUse" x1="24" x2="776" y1="0" y2="0"><stop offset="0" stop-color="#f4f6f8" stop-opacity="0"/><stop offset=".16" stop-color="#f4f6f8" stop-opacity=".13"/><stop offset=".84" stop-color="#f4f6f8" stop-opacity=".13"/><stop offset="1" stop-color="#f4f6f8" stop-opacity="0"/></linearGradient>'+
     '<linearGradient id="cwRibS" gradientUnits="userSpaceOnUse" x1="24" x2="776" y1="0" y2="0"><stop offset="0" stop-color="#f4f6f8" stop-opacity="0"/><stop offset=".16" stop-color="#f4f6f8" stop-opacity=".8"/><stop offset=".84" stop-color="#f4f6f8" stop-opacity=".8"/><stop offset="1" stop-color="#f4f6f8" stop-opacity="0"/></linearGradient></defs>';
  var SK="M20 150C260 112 540 112 780 150",PL="M20 352C260 300 540 300 780 352";
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="sk2 sD" d="'+SK+'"/><path class="ple" d="'+PL+'"/>';
  g+='<text x="40" y="104" class="t">OUTSIDE · SOFT TISSUE</text><text x="400" y="410" class="t" text-anchor="middle">LUNG</text><text x="40" y="410" class="t">INSIDE · PLEURA</text>';
  g+='<path class="rbf" id="cwL" d="'+piece(true)+'"/><g id="cwR"><path class="rbf" d="'+piece(false)+'"/><path class="rbs sD" d="'+curve(404,776,0)+'"/><path class="rbs sD" d="'+curve(404,776,T)+'"/></g>';
  g+='<path class="rbs sD" d="'+curve(24,396,0)+'"/><path class="rbs sD" d="'+curve(24,396,T)+'"/>';
  g+='<path class="ckl" id="cwCk" d="'+crack()+'"/>';
  g+='<g class="tb"><path class="tbl" d="M548 494h228v52h-228Z M548 520h228"/><text x="558" y="512" class="t">RIB · ALONG ITS LENGTH</text><text x="558" y="538" class="t s">CHEST WALL INNOVATIONS</text></g>';
  g+='</g>';
  var holes=function(dy){var h="";[262,302,342,382,418,458,498,538].forEach(function(x){h+='<circle class="hl" cx="'+x+'" cy="'+f(yU(x)+dy)+'" r="2.6"/>'});return h};
  /* 1 fracture */
  g+='<g id="sc1"><path class="ld2 dr" d="M408 212V172H418"/><text x="426" y="176" class="t c">FRACTURE</text><text x="40" y="60" class="a">FRACTURE</text></g>';
  /* 2 approach: two candidate plate positions */
  g+='<g id="sc2"><path class="gp" d="'+band(250,550,-12,-3)+'"/><path class="gp" d="'+band(250,550,T+3,T+12)+'"/>'+
     '<path class="ld2 dr" d="M250 '+f(yU(250)-14)+'L242 196"/><text x="234" y="196" class="t c" text-anchor="end">EXTRATHORACIC</text>'+
     '<path class="ld2 dr" d="M250 '+f(yU(250)+T+14)+'L242 300"/><text x="234" y="304" class="t c" text-anchor="end">INTRATHORACIC</text>'+
     '<text x="40" y="60" class="a">APPROACH</text></g>';
  /* 3 fixation: the plate on the inner face, locking posts through the rib, locking caps on the outer face */
  var posts="",caps="";[302,342,458,498].forEach(function(x){posts+="M"+x+" "+f(yU(x)+T+3)+"V"+f(yU(x)-2);caps+='<rect class="cap" x="'+(x-9)+'" y="'+f(yU(x)-9)+'" width="18" height="7"/>'});
  g+='<g id="sc3"><path class="plt" d="'+band(250,550,T+3,T+12)+'"/>'+holes(T+7.5)+'<path class="pst" d="'+posts+'"/>'+caps+
     '<path class="ld2 dr" d="M498 '+f(yU(498)-12)+'V170H506"/><text x="514" y="174" class="t c">LOCKING CAP</text>'+
     '<path class="ld2 dr" d="M302 '+f(yU(302)+T+15)+'L262 300H252"/><text x="244" y="304" class="t c" text-anchor="end">LOCKING POST</text>'+
     '<text x="40" y="60" class="a">FIXATION</text></g>';
  /* 4 stable */
  g+='<g id="sc4"><path class="ld2 dr" d="M554 '+f(yU(554)+T+8)+'L594 306"/><text x="602" y="310" class="t c c4">PEEK OR TITANIUM</text>'+
     '<path class="ld2 dr" d="M408 212V172H418"/><text x="426" y="176" class="t c c4">HELD IN LINE</text>'+
     '<text x="40" y="60" class="a">STABLE</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase .ple, #scBase .rbf, #scBase > text, #cwCk",svg),
    g:[$("#sc1",svg),$("#sc2",svg),$("#sc3",svg),$("#sc4",svg)],
    d:[dl("#sc1 .dr"),dl("#sc2 .dr"),dl("#sc3 .dr"),dl("#sc4 .dr")],
    c:[$$("#sc1 text.t",svg),$$("#sc2 text.t",svg),$$("#sc3 text.t",svg),$$("#sc4 text.t",svg)],
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)]};
  var R=$("#cwR",svg),ck=$("#cwCk",svg),gp=$$("#sc2 .gp",svg),fx=$$("#sc3 .plt, #sc3 .hl, #sc3 .pst, #sc3 .cap",svg);
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s=[Math.max(seg(p,0,.16),.55),seg(p,.25,.44),seg(p,.5,.69),seg(p,.75,.94)];
    for(var i=0;i<4;i++){
      var on=i===0?b:b*(s[i]>0?1:0),nx=i<3?s[i+1]:0;
      E.g[i].style.opacity=on.toFixed(3);draw(E.d[i],i===0?b*s[0]:s[i]);
      /* each step's labels leave as the next step's arrive, so no two sets ever share the frame (DR 3) */
      var lv=(i===0?b:Math.max(0,Math.min(1,s[i]*2-1)))*Math.max(0,1-nx*2);
      E.c[i].forEach(function(el){el.style.opacity=lv.toFixed(3)});
      $$(".ld2",E.g[i]).forEach(function(el){el.style.opacity=lv.toFixed(3)});
    }
    /* the broken end sits displaced until the plate draws it back into line */
    var al=seg(p,.52,.68),dy=(1-al)*7,rot=(1-al)*2;
    R.setAttribute("transform","translate(0 "+dy.toFixed(2)+") rotate("+rot.toFixed(2)+" 400 244)");
    ck.style.opacity=(b*(1-.6*seg(p,.75,.94))).toFixed(3);
    /* step 2's two candidate positions give way to the chosen inner plate */
    gp.forEach(function(el){el.style.opacity=(s[1]*(1-s[2])).toFixed(3)});
    fx.forEach(function(el){el.style.opacity=Math.min(1,s[2]*1.5).toFixed(3)});
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s[1]).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}
