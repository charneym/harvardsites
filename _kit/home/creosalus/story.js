/* the story scene (BL/BY/DB): ONE engraved bench drawing, kept on screen throughout; each step adds one stage of the path that
   creosalus.com (home, cGMP Contract Manufacturing) describes as "sequence to needle": a peptide sequence; automated synthesis on the
   in-house synthesizers; prep-LC/MS purification with mass-precision auto-collection; lyophilized powder or an aseptic fill into
   cryovials in an ISO 5 chamber. Earlier stages stay, quieter, as the next one draws on. Proportions are schematic. */
function scene(){
  var mob=MOBILE();
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><pattern id="csHt" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V7" stroke="rgba(246,240,228,.2)" stroke-width="1"/></pattern>'+
     '<pattern id="csCk" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="1" fill="rgba(232,207,159,.55)"/></pattern></defs>';
  /* base: frame, bench line, title block */
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="wi sD" d="M24 500H776"/><path class="hatch" d="M24 503H776V514H24Z"/>';
  g+='<g class="tb"><path class="tbl" d="M640 522h136v32h-136Z"/><text x="652" y="544" class="t">CREOSALUS</text></g>';
  g+='</g>';
  /* the chain: 12 residues on a gentle wave, anchored at the left to the resin bead (drawn in step 2) */
  var B=[],RX=112,RY=176;for(var k=0;k<12;k++){var x=RX+64+k*31,y=RY+Math.sin(k*.9)*20;B.push([x,y])}
  function beads(cls,n){return B.slice(0,n).map(function(p){return '<circle class="'+cls+'" cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="12.5"/>'}).join("")}
  function bond(n){var d='M'+B[0][0].toFixed(1)+' '+B[0][1].toFixed(1);for(var k=1;k<n;k++)d+='L'+B[k][0].toFixed(1)+' '+B[k][1].toFixed(1);return d}
  /* 1 the sequence: the residues as an outline, N to C */
  g+='<g id="sc1"><path class="ghost" d="'+bond(12)+'"/>'+beads("bd0",12)+
     '<text x="'+(B[0][0]-5)+'" y="'+(RY-30)+'" class="t c">N</text><text x="'+(B[11][0]-4)+'" y="'+(B[11][1]-24).toFixed(0)+'" class="t c">C</text>'+
     '<text x="'+(B[2][0]-10)+'" y="'+(RY+62)+'" class="t c">ONE SEQUENCE, ONE ORDER</text>'+
     '<text x="40" y="44" class="a">THE SEQUENCE</text></g>';
  /* 2 the synthesis: the resin bead, the chain drawn solid residue by residue, the next residue coming in */
  var NX=B[11][0]+54,NY=B[11][1]-44;
  g+='<g id="sc2"><circle class="hatch" cx="'+RX+'" cy="'+RY+'" r="50"/><circle class="wl dr" cx="'+RX+'" cy="'+RY+'" r="50"/>'+
     '<path class="wl dr" d="M'+(RX+50)+' '+RY+'L'+B[0][0].toFixed(1)+' '+B[0][1].toFixed(1)+'"/><path class="wl dr" d="'+bond(12)+'"/>'+beads("bd1",12)+
     '<circle class="bd2" cx="'+NX.toFixed(1)+'" cy="'+NY.toFixed(1)+'" r="12.5"/><path class="ld2 dr" d="M'+(NX-11).toFixed(1)+' '+(NY+9).toFixed(1)+'L'+(B[11][0]+13).toFixed(1)+' '+(B[11][1]-7).toFixed(1)+'"/>'+
     '<text x="'+(RX-22)+'" y="'+(RY+76)+'" class="t c c2">RESIN</text>'+
     '<text x="'+(NX-64).toFixed(0)+'" y="'+(NY-26).toFixed(0)+'" class="t c c2">NEXT RESIDUE</text>'+
     '<text x="40" y="44" class="a">THE SYNTHESIS</text></g>';
  /* 3 the purification: a chromatogram; the product peak, collected by mass */
  var X0=60,X1=500,Y0=470,pk='M'+X0+' '+Y0;
  for(var x=X0;x<=X1;x+=2){var t=(x-X0)/(X1-X0);var v=150*Math.exp(-Math.pow((t-.56)/.022,2))+22*Math.exp(-Math.pow((t-.3)/.018,2))+34*Math.exp(-Math.pow((t-.46)/.016,2))+16*Math.exp(-Math.pow((t-.74)/.02,2))+12*Math.exp(-Math.pow((t-.14)/.02,2));pk+='L'+x+' '+(Y0-v).toFixed(1)}
  var cx0=X0+(X1-X0)*.53,cx1=X0+(X1-X0)*.59;
  g+='<g id="sc3"><path class="hatch" d="M'+cx0.toFixed(1)+' 310H'+cx1.toFixed(1)+'V'+Y0+'H'+cx0.toFixed(1)+'Z"/>'+
     '<path class="wi dr" d="M'+X0+' '+Y0+'H'+X1+'M'+X0+' '+Y0+'V300"/><path class="trace dr" d="'+pk+'"/>'+
     '<path class="ld2 dr" d="M'+cx0.toFixed(1)+' 338L'+(cx0-30).toFixed(1)+' 326"/><text x="'+(cx0-36).toFixed(0)+'" y="330" text-anchor="end" class="t c c3">COLLECTED BY MASS</text>'+
     '<text x="'+X0+'" y="'+(Y0+24)+'" class="t s">PREP-LC/MS</text>'+
     '<text x="40" y="44" class="a">THE PURIFICATION</text></g>';
  /* 4 the fill: a vial with a lyophilized cake, stopper and crimp; the needle above it; a line from the peak to the vial */
  var VX=650,VT=238,VB=470,VW=92;
  var vial='M'+(VX-VW/2)+' '+(VT+56)+'Q'+(VX-VW/2)+' '+(VT+40)+' '+(VX-26)+' '+(VT+34)+'V'+(VT+22)+'H'+(VX+26)+'V'+(VT+34)+'Q'+(VX+VW/2)+' '+(VT+40)+' '+(VX+VW/2)+' '+(VT+56)+'V'+(VB-8)+'Q'+(VX+VW/2)+' '+VB+' '+(VX+VW/2-8)+' '+VB+'H'+(VX-VW/2+8)+'Q'+(VX-VW/2)+' '+VB+' '+(VX-VW/2)+' '+(VB-8)+'Z';
  g+='<g id="sc4"><path class="ck" d="M'+(VX-VW/2+3)+' '+(VB-62)+'Q'+VX+' '+(VB-70)+' '+(VX+VW/2-3)+' '+(VB-62)+'V'+(VB-9)+'Q'+(VX+VW/2-3)+' '+(VB-3)+' '+(VX+VW/2-10)+' '+(VB-3)+'H'+(VX-VW/2+10)+'Q'+(VX-VW/2+3)+' '+(VB-3)+' '+(VX-VW/2+3)+' '+(VB-9)+'Z"/>'+
     '<path class="wl dr" d="'+vial+'"/><path class="cap dr" d="M'+(VX-32)+' '+(VT+2)+'H'+(VX+32)+'V'+(VT+22)+'H'+(VX-32)+'Z"/><path class="wi dr" d="M'+(VX-14)+' '+(VT+2)+'V'+(VT+22)+'M'+(VX+14)+' '+(VT+2)+'V'+(VT+22)+'"/>'+
     '<path class="shaft dr" d="M'+VX+' 160V'+(VT-8)+'"/><path class="hub dr" d="M'+(VX-9)+' 136H'+(VX+9)+'V160H'+(VX-9)+'Z"/>'+
     '<path class="flow dr" d="M'+((cx0+cx1)/2).toFixed(1)+' 306C'+((cx0+cx1)/2).toFixed(1)+' 236 520 226 '+(VX-VW/2-14)+' 300"/>'+
     '<text x="'+VX+'" y="'+(VB+24)+'" text-anchor="middle" class="t c c4">ISO 5 ASEPTIC FILL</text>'+
     '<text x="40" y="44" class="a">THE FILL</text></g>';
  /* a faint ghost of the whole bench under every step, so the frame is never empty (DB); each step inks its own part */
  var body=g.split('<g id="sc1">')[1];body='<g>'+body.replace(/<text[^>]*>[^<]*<\/text>/g,'').replace(/ id="[^"]*"/g,'');
  g=g.replace('<g id="sc1">','<g class="ghL" id="scG">'+body+'</g><g id="sc1">');
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase .hatch, #scG",svg),
    g:[$("#sc1",svg),$("#sc2",svg),$("#sc3",svg),$("#sc4",svg)],
    d:[[],dl("#sc2 .dr"),dl("#sc3 .dr"),dl("#sc4 .dr")],
    c:[$$("#sc1 text.t",svg),$$("#sc2 text.t",svg),$$("#sc3 text.t",svg),$$("#sc4 text.t",svg)],
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)],
    b1:$$("#sc2 .bd1",svg),b2:$("#sc2 .bd2",svg),s1:$$("#sc1 .bd0, #sc1 .ghost",svg),ck:$("#sc4 .ck",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s=[1,seg(p,.25,.44),seg(p,.5,.69),seg(p,.75,.94)];
    for(var i=0;i<4;i++){
      var on=i===0?b:b*(s[i]>0?1:0),nx=i<3?s[i+1]:0;
      /* an earlier stage stays on the bench, quieter, once the next one draws on (the chain stays bright: it is the product) */
      E.g[i].style.opacity=(on*(1-(i===1?.2:.45)*nx)).toFixed(3);if(i)draw(E.d[i],s[i]);
      var lv=i===0?b:Math.max(0,Math.min(1,s[i]*2-1));
      E.c[i].forEach(function(el){el.style.opacity=lv.toFixed(3)});
    }
    /* the synthesis fills the outline residue by residue, then the next residue arrives */
    E.b1.forEach(function(el,k){el.style.opacity=Math.max(0,Math.min(1,s[1]*14-k-1)).toFixed(3)});
    if(E.b2)E.b2.style.opacity=Math.max(0,s[1]*3-2).toFixed(3);
    E.s1.forEach(function(el){el.style.opacity=(1-s[1]).toFixed(3)});
    if(E.ck)E.ck.style.opacity=Math.max(0,s[3]*2-1).toFixed(3);
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s[1]).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}
