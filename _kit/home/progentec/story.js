/* The story scene (BL/BY/DB): how the aiSLE DX tests work (progentec.com Technology, About our Laboratory, Mayo Clinic
   Laboratories releases), as ONE continuous left-to-right scene drawn in fine line: a blood collection tube, Progentec's
   multi-analyte microfluidic cartridge, and a 12-week look-ahead. Frame 0 is already complete: the tube (plasma over packed
   cells, small immune-mediator proteins floating in the plasma), the cartridge with four capture channels, and an empty
   12-week axis. Step 1 (sample): the mediators in the tube light. Step 2 (measure): they travel along the inlet into the four
   channels and each channel lights where its mediator is captured. Step 3 (act): the flare-risk curve draws across the
   12 weeks, rising toward the flare band, and a marker at week 0 shows where care can change course.
   Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=496;
var TX=58,TW=64,TT=110,TB=420,TPL=270;            /* tube: x, width, top, bottom, plasma/cells boundary */
var CX=214,CY=150,CWD=270,CHT=226;               /* cartridge */
var CHY=[196,240,284,328];                        /* the four channels */
var GX=548,GW=192,GY=170,GH=190;                  /* 12-week chart: left, width, top, height */
var MED=(function(){var s=7,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],i;
  for(i=0;i<12;i++)a.push({x:TX+12+R()*(TW-24),y:TT+52+R()*(TPL-TT-70),c:i%4,r:R()*360});return a})();
function medP(c){ /* four small protein glyphs, one per analyte */
  if(c===0)return '<circle r="5"/>';
  if(c===1)return '<path d="M0 -6L5.2 3H-5.2Z"/>';
  if(c===2)return '<rect x="-4.5" y="-4.5" width="9" height="9"/>';
  return '<path d="M0 -6L6 0L0 6L-6 0Z"/>';
}
function vesScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  /* ---- the tube: cap, glass, plasma line, packed cells hatched ---- */
  g+='<path class="wl sD" d="M'+(TX-6)+' '+(TT-34)+'H'+(TX+TW+6)+'V'+TT+'H'+(TX-6)+'Z"/>';
  g+='<path class="wl sD" d="M'+TX+' '+TT+'V'+(TB-TW/2)+'A'+(TW/2)+' '+(TW/2)+' 0 0 0 '+(TX+TW)+' '+(TB-TW/2)+'V'+TT+'"/>';
  g+='<path class="wo sD" d="M'+(TX+1)+' '+TPL+'H'+(TX+TW-1)+'"/>';
  for(i=0;i<9;i++){var yy=TPL+14+i*15;if(yy>TB-10)break;g+='<path class="rbc sD" d="M'+(TX+8)+' '+yy+'H'+(TX+TW-8)+'"/>'}
  g+='<text class="t" x="'+(TX-6)+'" y="'+(TT-50)+'">BLOOD SAMPLE</text>';
  g+='<text class="t" x="'+(TX-6)+'" y="'+(TB+30)+'">PLASMA · CELLS</text>';
  /* ---- the inlet from the tube to the cartridge ---- */
  g+='<path class="wo sD" id="inl" d="M'+(TX+TW)+' 210H'+(CX+34)+'"/>';
  /* ---- the cartridge: body, inlet well, four channels with a capture spot each ---- */
  g+='<path class="wl sD" d="M'+CX+' '+CY+'H'+(CX+CWD)+'V'+(CY+CHT)+'H'+CX+'Z"/>';
  g+='<circle class="wl sD" cx="'+(CX+40)+'" cy="'+(CY+CHT/2)+'" r="16"/>';
  CHY.forEach(function(y){g+='<path class="en sD" d="M'+(CX+56)+' '+(CY+CHT/2)+'C'+(CX+86)+' '+(CY+CHT/2)+' '+(CX+80)+' '+y+' '+(CX+110)+' '+y+'H'+(CX+CWD-24)+'"/>'});
  g+='<text class="t" x="'+CX+'" y="'+(CY-16)+'">MULTI-ANALYTE CARTRIDGE</text>';
  g+='<text class="t" x="'+CX+'" y="'+(CY+CHT+30)+'">IMMUNE MEDIATOR PANEL</text>';
  /* ---- the 12-week chart: axis, ticks, flare band ---- */
  g+='<path class="wl sD" d="M'+GX+' '+GY+'V'+(GY+GH)+'H'+(GX+GW)+'"/>';
  g+='<rect class="band" x="'+GX+'" y="'+GY+'" width="'+GW+'" height="38"/>';
  for(i=0;i<=12;i++){var tx=GX+GW*i/12;g+='<path class="wo sD" d="M'+tx.toFixed(1)+' '+(GY+GH)+'v'+(i%4?4:8)+'"/>'}
  [0,4,8,12].forEach(function(w){g+='<text class="t" text-anchor="middle" x="'+(GX+GW*w/12).toFixed(1)+'" y="'+(GY+GH+26)+'">'+w+'</text>'});
  g+='<text class="t" x="'+GX+'" y="'+(GY-16)+'">THE NEXT 12 WEEKS</text>';
  g+='<text class="t" x="'+(GX+GW)+'" y="'+(GY+24)+'" text-anchor="end">FLARE</text>';
  g+='<text class="t" x="'+(GX+GW)+'" y="'+(GY+GH+52)+'" text-anchor="end">WEEKS</text>';
  g+='</g>';
  /* ---- capture spots: light when their mediator arrives ---- */
  g+='<g id="scCap">';
  CHY.forEach(function(y,k){g+='<g class="cp" data-k="'+k+'" transform="translate('+(CX+CWD-60)+' '+y+')"><rect x="-16" y="-7" width="32" height="14"/><g class="md">'+medP(k)+'</g></g>'});
  g+='</g>';
  /* ---- mediators: float in the plasma, then travel into their channel ---- */
  g+='<g id="scMed">';
  MED.forEach(function(m,k){g+='<g class="md mv" data-k="'+k+'">'+medP(m.c)+'</g>'});
  g+='</g>';
  /* ---- the flare-risk curve and the act-now marker ---- */
  var pts=[];for(i=0;i<=24;i++){var u=i/24,yv=GY+GH-18-(GH-60)*Math.pow(u,1.7);pts.push((GX+GW*u).toFixed(1)+' '+yv.toFixed(1))}
  g+='<path class="rk" id="rk" d="M'+pts.join('L')+'"/>';
  g+='<g id="act"><path class="am" d="M'+(GX+10)+' '+(GY+GH-26)+'V'+(GY+72)+'"/><circle class="ad" cx="'+GX+'" cy="'+(GY+GH-18)+'" r="6"/><text class="a" x="'+(GX+10)+'" y="'+(GY+64)+'">ADJUST CARE</text></g>';
  /* ---- step labels, in the clear band under the scene ---- */
  var ly=SCH-6;
  g+='<g id="lb1"><text class="a" x="20" y="'+ly+'">ONE TUBE · IMMUNE MEDIATORS IN THE PLASMA</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+ly+'">EACH MEDIATOR CAPTURED AND MEASURED</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+ly+'">FLARE RISK WITHIN 12 WEEKS · ACT EARLY</text></g>';
  return g+'</svg>';
}
function scene(){return vesScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .band",svg),cp:$$(".cp",svg),
    md:$$("#scMed .mv",svg).map(function(el){return {el:el,m:MED[+el.getAttribute("data-k")]}}),
    rk:dl("#rk"),act:$("#act",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var lit=seg(p,.06,.26),go=seg(p,.36,.62),risk=seg(p,.7,.92);
    E.md.forEach(function(D,i){var m=D.m,k=m.c;
      /* path: the plasma -> up to the inlet -> along it -> into the well -> along its channel to the capture spot */
      var t=Math.min(1,Math.max(0,go*1.5-(i%3)*.18)),x,y;
      var p0=[m.x,m.y],p1=[TX+TW-8,210],p2=[CX+40,CY+CHT/2],p3=[CX+110,CHY[k]],p4=[CX+CWD-60,CHY[k]];
      var L=[p0,p1,p2,p3,p4],segT=t*4,si=Math.min(3,Math.floor(segT)),f=segT-si;
      x=L[si][0]+(L[si+1][0]-L[si][0])*f;y=L[si][1]+(L[si+1][1]-L[si][1])*f;
      var bob=Math.sin(i*1.7+p*9)*3*(1-t);
      D.el.setAttribute("transform","translate("+x.toFixed(1)+" "+(y+bob).toFixed(1)+") rotate("+(m.r*(1-t)).toFixed(0)+") scale("+(1.5-.5*t).toFixed(2)+")");
      op(D.el,b*(t>=.999?0:1));
      D.el.classList.toggle("on",lit>.5);
    });
    E.cp.forEach(function(el,k){var a=Math.min(1,Math.max(0,go*1.6-.45-k*.08));el.style.setProperty("--g",a.toFixed(3));op(el,b);el.classList.toggle("hit",a>.5)});
    draw(E.rk,risk);
    op(E.act,b*seg(p,.84,.94));
    op(E.l1,b*seg(p,.1,.2)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.44,.52)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.8,.88));
  };
}
