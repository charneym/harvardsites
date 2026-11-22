/* The story scene (BL/BY/DB): how a NanoPak bead is made, after Millennial's own process figure (home page: syringe
   pump, material slurry, microfluidic chip/nozzle, water or oil based phase, UV or thermal illumination, reaction
   chamber, microbeads with tunable properties), as ONE continuous fine-line scene. A syringe pump feeds the slurry into a
   flow-focusing junction on a chip; the side phase pinches it into droplets that travel along the channel. Step 1
   (droplet): liquid droplets form and flow. Step 2 (cure): the lamp over the reaction chamber switches on and every
   droplet that passes under it sets into a solid graphite bead. Step 3 (pack): the beads run down into a column and
   build a packed bed. Driven by the scrubbed progress. */
var SCW=760,SCH=520,CY=260,JX=200,LX=420,EX=590,COLX=640,COLT=322,COLB=500;
var MSL=(function(){return {h:EX-(JX+14),arc:Math.PI*50/2,v:14}})();
MSL.tot=MSL.h+MSL.arc+MSL.v;
function msAt(s){ /* droplet centre along the channel: straight run, quarter bend, short drop into the column cap */
  if(s<=MSL.h)return [JX+14+s,CY];
  s-=MSL.h;if(s<=MSL.arc){var a=s/50;return [EX+Math.sin(a)*50,CY+50-Math.cos(a)*50]}
  s-=MSL.arc;return [COLX,CY+50+s]}
var MSN=13,MSP=MSL.tot/MSN;
var MSB=(function(){var a=[],r,c;for(r=0;r<13;r++){var off=r%2?8:0;for(c=0;c<3;c++){var x=COLX-19+off+c*16;if(x>COLX+22)continue;a.push([x,COLB-9-r*13.4,r])}}return a})();
function msScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 64 700 456" aria-hidden="true"><defs>'+
     '<linearGradient id="msCone" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9fe6f5" stop-opacity=".55"/><stop offset="1" stop-color="#5ccbe2" stop-opacity=".08"/></linearGradient>'+
     '<radialGradient id="msBd" cx=".36" cy=".32" r=".75"><stop offset="0" stop-color="#8b979e"/><stop offset=".35" stop-color="#3a444b"/><stop offset="1" stop-color="#14191d"/></radialGradient></defs>';
  g+='<g id="scBase">';
  /* chip outline */
  g+='<path class="lo2 sD" d="M150 150H612M150 150V370H582"/>';
  /* syringe pump */
  g+='<path class="mem sD" d="M34 244H128V276H34ZM128 254H150M128 266H150M10 260H34M34 236V284"/>';
  g+='<path class="lo sD" d="M52 244V276M70 244V276M88 244V276M106 244V276"/>';
  /* channel walls: slurry inlet, side-phase inlets, the run, the bend, the column */
  g+='<path class="mem sD" d="M150 254H'+(JX-10)+'V170M'+(JX+10)+' 170V250H'+EX+'A60 60 0 0 1 '+(EX+60)+' 310"/>';
  g+='<path class="mem sD" d="M150 266H'+(JX-10)+'V350M'+(JX+10)+' 350V270H'+EX+'A40 40 0 0 1 '+(EX+40)+' 310"/>';
  g+='<path class="mem sD" d="M600 310H680V'+COLT+'H600ZM'+(COLX-30)+' '+COLT+'V'+COLB+'M'+(COLX+30)+' '+COLT+'V'+COLB+'M600 '+COLB+'H680V'+(COLB+12)+'H600Z"/>';
  /* side-phase arrows toward the junction */
  g+='<path class="mem2 sD" d="M'+JX+' 182V214M'+(JX-5)+' 207L'+JX+' 214L'+(JX+5)+' 207M'+JX+' 338V306M'+(JX-5)+' 313L'+JX+' 306L'+(JX+5)+' 313"/>';
  /* lamp over the reaction chamber */
  g+='<path class="mem sD" d="M'+(LX-42)+' 92H'+(LX+42)+'L'+(LX+30)+' 124H'+(LX-30)+'ZM'+(LX-14)+' 92V76H'+(LX+14)+'V92"/>';
  g+='<path class="lo2 sD" d="M'+(LX-70)+' 240V250M'+(LX+70)+' 240V250"/>';
  g+='<text class="t" x="34" y="226">SYRINGE PUMP</text>';
  g+='<text class="t" x="160" y="392">MICROFLUIDIC CHIP</text>';
  g+='<text class="t" x="596" y="'+(COLT+90)+'" text-anchor="end">COLUMN</text>';
  g+='<text class="t" x="'+(LX-54)+'" y="88" text-anchor="end">REACTION CHAMBER</text>';
  g+='</g>';
  g+='<g id="scMem"></g>';
  g+='<polygon id="msLight" points="'+(LX-26)+',126 '+(LX+26)+',126 '+(LX+70)+',250 '+(LX-70)+',250" fill="url(#msCone)"/>';
  g+='<path id="msSlug" class="slug" d="M150 260H'+(JX+4)+'"/>';
  g+='<g id="msDrops">';for(i=0;i<MSN;i++)g+='<g class="dp"><ellipse class="liq" rx="9" ry="7.4"/><circle class="sol" r="8.2" fill="url(#msBd)"/><circle class="gl" cx="-2.6" cy="-2.8" r="1.5"/></g>';g+='</g>';
  g+='<g id="msBed">';MSB.forEach(function(b){g+='<g class="bb" data-r="'+b[2]+'" transform="translate('+b[0]+' '+b[1].toFixed(1)+')"><circle class="sol" r="7.6" fill="url(#msBd)"/><circle class="gl" cx="-2.4" cy="-2.6" r="1.3"/></g>'});g+='</g>';
  g+='<g id="lb1"><text class="a" x="34" y="304">MATERIAL</text><text class="a" x="34" y="326">SLURRY</text><text class="a" x="'+(JX+22)+'" y="336">OIL OR WATER PHASE</text></g>';
  g+='<g id="lb2"><text class="a" x="'+(LX-54)+'" y="122" text-anchor="end">UV OR THERMAL CURE</text><text class="a" x="'+(LX-60)+'" y="304">DROPLETS SET</text><text class="a" x="'+(LX-60)+'" y="326">INTO BEADS</text></g>';
  g+='<g id="lb3"><text class="a" x="596" y="'+(COLT+118)+'" text-anchor="end">PACKED BED,</text><text class="a" x="596" y="'+(COLT+140)+'" text-anchor="end">READY TO SEPARATE</text></g>';
  return g+'</svg>';
}
function scene(){return msScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),light:$("#msLight",svg),slug:$("#msSlug",svg),dp:$$("#msDrops .dp",svg),bb:$$("#msBed .bb",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  E.dp.forEach(function(d){d._l=d.querySelector(".liq");d._s=d.querySelector(".sol");d._g=d.querySelector(".gl")});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.slug,b)}
    var lamp=sm2(seg(p,.3,.4)),pack=seg(p,.64,.95),T=p*MSL.tot*2.2;
    op(E.light,b*lamp*(.85+.15*Math.sin(p*60)));
    E.dp.forEach(function(d,i){
      var s=((T+i*MSP)%MSL.tot+MSL.tot)%MSL.tot,q=msAt(s),x=q[0],y=q[1];
      /* a droplet sets once it has passed under the lamp while the lamp is on; before step 3 the beads fade at the column cap */
      var cure=s>MSL.h?lamp:lamp*Math.max(0,Math.min(1,(x-(LX-30))/60));
      var a=b*Math.min(1,s/10)*(1-seg(s,MSL.tot-14,MSL.tot));
      d.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");
      op(d,a);op(d._l,1-cure);op(d._s,cure);op(d._g,cure);
    });
    var rows=pack*13;
    E.bb.forEach(function(el){var r=+el.getAttribute("data-r");op(el,b*Math.max(0,Math.min(1,rows-r)))});
    op(E.l1,b*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.36,.42)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.72,.8));
  };
}
function sm2(x){return x*x*(3-2*x)}
