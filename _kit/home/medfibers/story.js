/* The story scene (BL/BY/DB): how a MED-Fibers surgical laser fiber carries and delivers laser energy, drawn as ONE
   magnified side view of the fiber's distal end, kept on screen for all three steps (med-fibers.com: technical
   information "Low OH Silica", hard clad / Tefzel blue jacket, 532-2200 nm; dome-tip-surgical-fibers.html: the DOME TIP
   atraumatic tip has the same collimated beam as a flat tip fiber, energy transmitted to the stone with almost no losses,
   200 times greater tip strength by eliminating micro cracks through melting of the edges (fire polishing); home page and
   100-micron page: stone dusting at 100 Hz and 120 Hz).
   Step 1: the fiber's layers; laser light zigzags down the core by total internal reflection (it echoes the zigzag "MED"
           in their logo).
   Step 2: the flat cleaved end with micro cracks is fire polished into a dome.
   Step 3: a collimated beam leaves the dome and dusts a stone. */
var SCW=760,SCH=520,MF_Y=262;
function mfScene(o){
  var g='',mob=o.mob,y=MF_Y,K=2.1,i,zz='M30 '+(y-K*17);
  for(i=1;i<=11;i++)zz+='L'+(30+i*40)+' '+(i%2?y+K*17:y-K*17);
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 40 760 452" aria-hidden="true"><defs>'+
    '<linearGradient id="mfCo" x1="0" x2="1"><stop offset="0" stop-color="#ff9a4f" stop-opacity=".06"/><stop offset="1" stop-color="#ff9a4f" stop-opacity=".28"/></linearGradient>'+
    '<radialGradient id="mfTg"><stop offset="0" stop-color="#ffe2c4"/><stop offset=".45" stop-color="#ff9a4f" stop-opacity=".6"/><stop offset="1" stop-color="#ff9a4f" stop-opacity="0"/></radialGradient></defs>';
  g+='<text class="t" x="20" y="64">'+(mob?"FIBER TIP, SIDE VIEW":"SURGICAL LASER FIBER, DISTAL END (MAGNIFIED)")+'</text>';
  /* the fiber: jacket, hard clad, core */
  g+='<path class="jk sD" d="M30 '+(y-K*46)+'H300V'+(y+K*46)+'H30"/>'+
     '<path class="cl sD" d="M30 '+(y-K*30)+'H470M30 '+(y+K*30)+'H470"/>'+
     '<rect class="co" x="30" y="'+(y-K*20)+'" width="440" height="40"/>'+
     '<path class="cb sD" d="M30 '+(y-K*20)+'H470M30 '+(y+K*20)+'H470"/>';
  /* step 1: light down the core */
  g+='<path id="mfZz" class="zz" d="'+zz+'L470 '+y+'"/>';
  /* the flat end and its micro cracks (step 1), the fire-polished dome (step 2) */
  g+='<g id="mfFlat"><path class="fl" d="M470 '+(y-K*30)+'V'+(y+K*30)+'"/><path class="ck" d="M470 '+(y-K*19)+'l-10 4M470 '+(y-K*4)+'l-13-3M470 '+(y+K*9)+'l-9 5M470 '+(y+K*22)+'l-11-2"/></g>';
  g+='<path id="mfDome" class="dm" d="M470 '+(y-K*30)+'C488 '+(y-K*30)+' 502 '+(y-K*16)+' 502 '+y+'C502 '+(y+K*16)+' 488 '+(y+K*30)+' 470 '+(y+K*30)+'"/>';
  /* step 3: the beam, the stone and its dust */
  g+='<circle id="mfTg" cx="502" cy="'+y+'" r="30" fill="url(#mfTg)"/>';
  g+='<path id="mfBm" class="bm" d="M506 '+(y-K*12)+'H582M506 '+y+'H578M506 '+(y+K*12)+'H582"/>';
  g+='<path id="mfSt" class="stn" d="M594 '+(y-53)+'L650 '+(y-81)+'L717 '+(y-70)+'L756 '+(y-20)+'L745 '+(y+48)+'L689 '+(y+78)+'L624 '+(y+67)+'L588 '+(y+20)+'Z"/>';
  var D=[[592,-62,2.6],[612,-78,1.8],[650,-84,2.2],[694,-74,1.6],[724,-44,2.4],[738,-6,1.8],[734,30,2.2],[712,64,1.6],[676,80,2.4],[636,76,1.8],[604,64,2.2],[582,40,1.6],[662,-100,1.4],[742,52,1.4],[620,98,1.4],[700,96,1.8],[748,-60,1.4],[580,-40,1.6]],dd='';
  D.forEach(function(d){dd+='<circle cx="'+Math.round(672+(d[0]-656)*1.2)+'" cy="'+Math.round(y+d[1]*1.6)+'" r="'+d[2]+'"/>'});
  g+='<g id="mfDust" class="dust">'+dd+'</g>';
  /* labels, each clear of every stroke (DR3) */
  g+='<g id="mfL1"><text class="t" x="30" y="'+(y-K*62)+'">'+(mob?"BLUE TEFZEL JACKET":"BLUE TEFZEL JACKET")+'</text>'+
     '<text class="t" x="30" y="'+(y+K*76)+'">'+(mob?"HARD CLAD · SILICA CORE":"HARD CLAD · LOW-OH SILICA CORE")+'</text>'+
     '<text class="t s1" x="'+(mob?318:318)+'" y="'+(y-K*46)+'">'+(mob?"REFLECTION":"TOTAL INTERNAL REFLECTION")+'</text>'+(mob?'<text class="t s1" x="318" y="'+(y-K*46-24)+'">TOTAL INTERNAL</text>':'')+'</g>';
  g+='<g id="mfL2"><text class="t s1" x="'+(mob?470:518)+'" y="'+(mob?y-58:y-26)+'">'+(mob?"DOME TIP":"FIRE-POLISHED DOME")+'</text>'+
     '<text class="t" x="'+(mob?470:518)+'" y="'+(mob?y+80:y+36)+'">'+(mob?"200× STRONGER":"NO MICRO CRACKS · 200× STRONGER")+'</text></g>';
  g+='<g id="mfL3"><text class="t s1" x="30" y="'+(y+K*76)+'">'+(mob?"COLLIMATED BEAM":"COLLIMATED BEAM, ALMOST NO LOSSES")+'</text>'+
     '<text class="t" x="'+(mob?440:470)+'" y="'+(y+196)+'">'+(mob?"DUSTING, 100–120 Hz":"STONE DUSTING AT 100–120 Hz")+'</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="484">'+(mob?"1 · CARRY":"1 · LIGHT DOWN THE CORE")+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="484">'+(mob?"2 · POLISH":"2 · THE TIP, FIRE POLISHED")+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="484">'+(mob?"3 · DELIVER":"3 · ENERGY TO THE STONE")+'</text></g>';
  return g+'</svg>';
}
function scene(){return mfScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),zz:dl("#mfZz"),dome:dl("#mfDome"),bm:dl("#mfBm"),co:$(".co",svg),flat:$("#mfFlat",svg),ck:$("#mfFlat .ck",svg),tg:$("#mfTg",svg),st:$("#mfSt",svg),dust:$("#mfDust",svg),
    L1:$("#mfL1",svg),L2:$("#mfL2",svg),L3:$("#mfL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var dots=$$("#mfDust circle",svg),home=dots.map(function(c){return [+c.getAttribute("cx"),+c.getAttribute("cy")]}),SX=672,SY=MF_Y;
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b);op(E.co,b)}
    /* step 1: the light runs down the core; it stays lit after */
    draw(E.zz,b*ease(seg(p,.03,.26)));
    op(E.L1,b*seg(p,.04,.12)*(1-seg(p,.31,.36)));
    /* step 2: cracks fade, the flat end melts into a dome */
    op(E.ck,b*(1-seg(p,.4,.5)));
    op(E.flat,b*(1-seg(p,.5,.6)));
    draw(E.dome,b*ease(seg(p,.46,.6)));
    op(E.L2,b*seg(p,.54,.6)*(1-seg(p,.64,.68)));
    /* step 3: the beam, then the stone turns to dust */
    op(E.tg,b*seg(p,.68,.74));
    draw(E.bm,b*ease(seg(p,.7,.78)));
    var du=ease(seg(p,.78,.92));
    op(E.st,b*seg(p,.66,.72)*(1-.75*du));
    op(E.dust,b*seg(p,.77,.82));
    dots.forEach(function(c,i){var h=home[i];c.setAttribute("cx",(SX+(h[0]-SX)*(.35+.65*du)).toFixed(1));c.setAttribute("cy",(SY+(h[1]-SY)*(.35+.65*du)).toFixed(1))});
    op(E.L3,b*seg(p,.74,.8));
    op(E.l1,b*seg(p,.02,.1)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
