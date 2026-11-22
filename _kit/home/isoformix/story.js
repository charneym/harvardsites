/* The story scene (BL/BY/DB): how an Isoformix assay works (NIH SBIR abstracts 1R43GM143964, 1R43AG069552, 1R43GM128459:
   plate-based immunoaffinity capture in antibody-coated 96-well plates, rinses, elution onto MALDI targets, MALDI-TOF mass
   spectrometry of the intact protein; the spectrum shows the E2/E3/E4 isoforms and the glycosylated forms of each, and their
   ratios are reported as relative abundance). ONE continuous engraved scene:
   top left, a well of the immunoplate in section with antibodies on its walls; top right, the MALDI target and the
   time-of-flight tube; across the bottom, the mass spectrum. Step 1 (capture): sample proteins drift into the well, apoE binds
   the antibodies, the rest is rinsed out. Step 2 (weigh): the captured apoE moves to the target, a laser pulse fires and the
   ions fly down the tube, lighter forms first. Step 3 (read out): as the ions land, the peaks rise: E3 and E4 (an E3/E4
   carrier), each followed by its glycoforms. Schematic, not to scale. Every element is driven by the scrubbed progress. */
var SCW=760,SCH=520;
var WL={x0:56,x1:224,top:64,bot:226};          /* the well */
var TG={x:300,y0:58,y1:236,sy:148};             /* MALDI target, spot height */
var TF={x0:316,x1:716,y0:104,y1:192};           /* flight tube */
var SP={x0:84,x1:736,base:472,top:300};         /* spectrum */
/* peaks: [x, height 0..1, label, kind] kind 0 = E3 family, 1 = E4 family; glycoforms carry a smaller signal */
var PK=[[300,1,"E3",0],[352,.82,"E4",1],[470,.38,"GLYCOFORMS",0],[522,.31,"",1],[640,.12,"",0],[692,.1,"",1]];
var ABS=(function(){var a=[],i;
  for(i=0;i<5;i++)a.push({x:WL.x0+8,y:WL.top+26+i*26,ang:90});
  for(i=0;i<5;i++)a.push({x:WL.x1-8,y:WL.top+26+i*26,ang:-90});
  for(i=0;i<5;i++)a.push({x:WL.x0+40+i*22,y:WL.bot+2,ang:180});
  return a})();
var MOLS=(function(){var s=37,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],i;
  for(i=0;i<ABS.length;i++){var b=ABS[i],r=b.ang*Math.PI/180,tx=b.x+Math.sin(r)*20,ty=b.y-Math.cos(r)*20;
    a.push({apo:1,e4:i%3===1?1:0,fx:WL.x0+20+R()*130,fy:6+R()*30,tx:tx,ty:ty,d:R()*.4})}
  for(i=0;i<12;i++){var fx=WL.x0+20+R()*130;a.push({apo:0,fx:fx,fy:6+R()*30,tx:WL.x0+40+R()*90,ty:WL.top+40+R()*120,ox:fx+(R()-.5)*60,d:R()*.4})}
  return a})();
var IONS=(function(){var a=[],i;for(i=0;i<PK.length;i++){var n=i<2?4:2;for(var j=0;j<n;j++)a.push({p:i,dy:(j-(n-1)/2)*9,lag:j*.035})}return a})();
function peakPath(k,h){var x=PK[k][0],H=(SP.base-SP.top-24)*PK[k][1]*h,w=10,d="M"+(x-46)+" "+SP.base;
  for(var t=-46;t<=46;t+=2){var y=SP.base-H*Math.exp(-(t*t)/(2*w*w));d+="L"+(x+t)+" "+y.toFixed(1)}return d}
function ab(b){var r=b.ang,s='<g transform="translate('+b.x+' '+b.y+') rotate('+r+')">';
  return s+'<path class="ab sD" d="M0 0V-10M0 -10L-6 -17M0 -10L6 -17"/></g>'}
function msScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  /* the well, in section */
  g+='<path class="sk sD" d="M'+(WL.x0-18)+' '+WL.top+'H'+WL.x0+'V'+(WL.bot-18)+'Q'+WL.x0+' '+WL.bot+' '+(WL.x0+18)+' '+WL.bot+'H'+(WL.x1-18)+'Q'+WL.x1+' '+WL.bot+' '+WL.x1+' '+(WL.bot-18)+'V'+WL.top+'H'+(WL.x1+18)+'"/>';
  g+='<path class="bm sD" d="M'+(WL.x0-10)+' '+WL.top+'V'+(WL.bot-14)+'Q'+(WL.x0-10)+' '+(WL.bot+10)+' '+(WL.x0+14)+' '+(WL.bot+10)+'H'+(WL.x1-14)+'Q'+(WL.x1+10)+' '+(WL.bot+10)+' '+(WL.x1+10)+' '+(WL.bot-14)+'V'+WL.top+'"/>';
  ABS.forEach(function(b){g+=ab(b)});
  /* the MALDI target and the flight tube */
  g+='<path class="sk sD" d="M'+TG.x+' '+TG.y0+'V'+TG.y1+'M'+(TG.x-10)+' '+TG.y0+'V'+TG.y1+'"/>';
  g+='<path class="bm sD" d="M'+TF.x0+' '+TF.y0+'H'+TF.x1+'M'+TF.x0+' '+TF.y1+'H'+TF.x1+'"/>';
  for(i=0;i<5;i++){var gx=TF.x0+22+i*7;g+='<path class="cg sD" d="M'+gx+' '+(TF.y0+10)+'V'+(TF.y1-10)+'"/>'}
  g+='<path class="sk sD" d="M'+(TF.x1+10)+' '+(TF.y0-6)+'V'+(TF.y1+6)+'M'+(TF.x1+18)+' '+(TF.y0-6)+'V'+(TF.y1+6)+'"/>';
  /* the spectrum axes */
  g+='<path class="sk sD" d="M'+SP.x0+' '+(SP.top-6)+'V'+SP.base+'H'+SP.x1+'"/>';
  for(i=0;i<=12;i++){var ax=SP.x0+(SP.x1-SP.x0)*i/12;g+='<path class="cg sD" d="M'+ax.toFixed(1)+' '+SP.base+'V'+(SP.base+6)+'"/>'}
  g+='<text class="t" x="'+(WL.x0-18)+'" y="'+(WL.bot+38)+'">'+(o.mob?'WELL':'ANTIBODY-COATED WELL')+'</text>';
  g+='<text class="t" x="'+(TG.x-14)+'" y="'+(TG.y1+22)+'">'+(o.mob?'TARGET':'MALDI TARGET')+'</text>';
  g+='<text class="t" x="'+(TF.x0+80)+'" y="'+(TF.y0-14)+'">'+(o.mob?'FLIGHT TUBE':'TIME-OF-FLIGHT TUBE')+'</text>';
  g+='<text class="t" x="'+(TF.x1+18)+'" y="'+(TF.y1+26)+'" text-anchor="end">DETECTOR</text>';
  g+='<text class="t" x="'+SP.x1+'" y="'+(SP.base+30)+'" text-anchor="end">MASS (m/z) →</text>';
  g+='<text class="t" x="'+(SP.x0+10)+'" y="'+(SP.top+2)+'">SIGNAL</text>';
  g+='</g>';
  /* the laser and the transfer arrow */
  g+='<path id="scLas" class="las" d="M'+(TG.x-120)+' 24L'+(TG.x-12)+' '+TG.sy+'"/>';
  g+='<path id="scXf" class="xf" d="M'+(WL.x1+20)+' '+(WL.bot-30)+'C'+(WL.x1+50)+' '+(WL.bot-30)+' '+(TG.x-50)+' '+(TG.sy+40)+' '+(TG.x-18)+' '+(TG.sy+12)+'"/>';
  g+='<circle id="scSpot" class="spot" cx="'+(TG.x-12)+'" cy="'+TG.sy+'" r="7"/>';
  /* sample molecules */
  g+='<g id="scMol">';
  MOLS.forEach(function(m,k){g+=m.apo?'<circle class="'+(m.e4?"m4":"m3")+'" data-k="'+k+'" r="5.2" cx="0" cy="0"/>':'<rect class="mx" data-k="'+k+'" width="7" height="7" x="0" y="0"/>'});
  g+='</g>';
  /* ions in flight */
  g+='<g id="scIon">';
  IONS.forEach(function(n,k){g+='<circle class="'+(PK[n.p][3]?"i4":"i3")+'" data-k="'+k+'" r="3.6" cx="0" cy="0"/>'});
  g+='</g>';
  /* peaks */
  g+='<g id="scPk">';
  PK.forEach(function(p,k){g+='<path class="pk '+(p[3]?"p4":"p3")+'" data-k="'+k+'" d="'+peakPath(k,0)+'"/>'});
  PK.forEach(function(p,k){if(p[2])g+='<text class="'+(k<2?"a":"t")+' pl" data-k="'+k+'" x="'+(k===2?496:p[0])+'" y="'+(SP.base-(SP.base-SP.top-24)*p[1]-12)+'" text-anchor="middle">'+p[2]+'</text>'});
  g+='</g>';
  /* step labels, top left */
  g+='<g id="lb1"><text class="a" x="'+(WL.x0-18)+'" y="'+(SP.base+30)+'">'+(o.mob?'APOE CAPTURED · REST RINSED':'APOE CAPTURED · EVERYTHING ELSE RINSED AWAY')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+(WL.x0-18)+'" y="'+(SP.base+30)+'">'+(o.mob?'LIGHTER FORMS ARRIVE FIRST':'INTACT PROTEIN · LIGHTER FORMS ARRIVE FIRST')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+(WL.x0-18)+'" y="'+(SP.base+30)+'">'+(o.mob?'E3/E4 CARRIER · RATIOS':'AN E3/E4 CARRIER · ISOFORM AND GLYCOFORM RATIOS')+'</text></g>';
  return g+'</svg>';
}
function scene(){return msScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),las:$("#scLas",svg),xf:$("#scXf",svg),spot:$("#scSpot",svg),
    mol:$$("#scMol [data-k]",svg).map(function(el){return {el:el,m:MOLS[+el.getAttribute("data-k")],c:el.tagName==="circle"}}),
    ion:$$("#scIon circle",svg).map(function(el){return {el:el,n:IONS[+el.getAttribute("data-k")]}}),
    pk:$$("#scPk .pk",svg),pl:$$("#scPk .pl",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var xfL=E.xf.getTotalLength();E.xf.style.strokeDasharray=xfL+" "+xfL;
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function pos(el,c,x,y){if(c){el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1))}else{el.setAttribute("x",(x-3.5).toFixed(1));el.setAttribute("y",(y-3.5).toFixed(1))}}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var fall=seg(p,.02,.2),rinse=seg(p,.2,.3),xfer=seg(p,.34,.44),las=seg(p,.44,.48)*(1-seg(p,.5,.56)),fly=seg(p,.46,.74),land=seg(p,.6,.88);
    /* capture: everything drifts in, apoE binds, the rest leaves with the rinse; then the captured apoE moves to the target */
    E.mol.forEach(function(M){var m=M.m,d=Math.min(1,Math.max(0,(fall-m.d*.5)/(1-m.d*.5))),q=d*d*(3-2*d),x,y,a;
      if(m.apo){x=m.fx+(m.tx-m.fx)*q;y=m.fy+(m.ty-m.fy)*q;a=b*Math.min(1,fall*3)*(1-xfer)}
      else{x=m.fx+(m.tx-m.fx)*q+(m.ox-m.tx)*rinse;y=m.fy+(m.ty-m.fy)*q-(m.ty+20)*rinse;a=b*Math.min(1,fall*3)*(1-rinse)*.9}
      pos(M.el,M.c,x,y);op(M.el,a)});
    E.xf.style.strokeDashoffset=(xfL*(1-xfer)).toFixed(1);op(E.xf,b*.9*(1-seg(p,.5,.6)));
    op(E.spot,b*seg(p,.38,.44));
    op(E.las,b*las);
    /* flight: each form at its own speed (heavier = later); ions vanish into the detector as their peak rises */
    E.ion.forEach(function(I){var n=I.n,sp=1-n.p*.11,t=Math.min(1,Math.max(0,(fly-n.lag)*1.25/sp)),x=TG.x-6+(TF.x1+6-TG.x)*t,y=TG.sy+n.dy*(.3+.7*t);
      pos(I.el,true,x,y);op(I.el,b*(fly>n.lag?1:0)*(t<1?1:0)*seg(p,.45,.48))});
    E.pk.forEach(function(el,k){var h=seg(land,k*.08,k*.08+.38);el.setAttribute("d",peakPath(k,h));op(el,b*(h>0?1:0))});
    E.pl.forEach(function(el){var k=+el.getAttribute("data-k");op(el,b*seg(land,k*.08+.3,k*.08+.45))});
    op(E.l1,b*seg(p,.18,.24)*(1-seg(p,.3,.34)));op(E.l2,b*seg(p,.5,.56)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.84,.9));
  };
}
