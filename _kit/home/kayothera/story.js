/* The story scene (BL/BY/DB): how Kayothera blocks the retinoid nuclear receptor pathway (kayothera.com Science; the
   2025-10-14 iScience release and the 2026-01-05 Ludwig release), as ONE continuous cell drawn in fine line. Frame 0: the
   cell membrane, the nucleus with its DNA and the retinoid receptor pair (RAR · RXR) bound to it, and the ALDH1A3 enzyme
   in the cytoplasm. Step 1 (source): retinol (vitamin A) enters and ALDH1A3 turns it into retinoic acid, the receptor's
   ligand. Step 2 (receptor): retinoic acid crosses into the nucleus, the receptors switch on and genes are transcribed.
   Step 3 (block): a Kayothera inhibitor sits in ALDH1A3; no ligand is made, the receptors fall quiet and transcription
   stops (analogous to aromatase inhibitors in the estrogen receptor pathway). Schematic, not to scale. */
var SCW=760,SCH=520;
var ENZ={x:214,y:262},PORE={x:384,y:236},REC={x:528,y:300},NUC={x:540,y:272,r:150};
var MOLS=(function(){var s=37,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],i;
  for(i=0;i<16;i++){var ang=-1.1+R()*2.2;a.push({sx:44,sy:150+R()*240,mx:120+R()*30,my:ENZ.y+(R()-.5)*120,
    ex:REC.x-34+R()*68,ey:REC.y-30+(R()-.5)*18,ox:(R()-.5)*30,oy:(R()-.5)*26,d:i/16*.62,ang:ang,
    px:ENZ.x+Math.cos(ang+Math.PI)*82,py:ENZ.y+Math.sin(ang+Math.PI)*62})}return a})();
/* a retinoid glyph: the trimethylcyclohexene ring and its polyene tail (the shape of retinol and retinoic acid) */
function retinoid(cls,acid){var g='<g class="'+cls+'"><path d="M-14 -4l5 -6h7l4 6l-4 6h-7z"/><path d="M-2 0l5 -4l5 4l5 -4l5 4l5 -4"/>';
  if(acid)g+='<circle cx="25" cy="-4" r="2.6"/>';return g+'</g>'}
function lobe(cx,cy,rx,ry,k){var p='',n=28,i;for(i=0;i<=n;i++){var t=i/n*Math.PI*2,r=1+.09*Math.sin(t*3+k)+.05*Math.sin(t*5+k*2);
  p+=(i?'L':'M')+(cx+Math.cos(t)*rx*r).toFixed(1)+' '+(cy+Math.sin(t)*ry*r).toFixed(1)}return p+'Z'}
function cellScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  /* membrane: a lipid bilayer, two lines */
  g+='<path class="mb sD" d="M150 40H610Q740 40 740 170V350Q740 480 610 480H150Q20 480 20 350V170Q20 40 150 40Z"/>';
  g+='<path class="mb2 sD" d="M150 50H610Q730 50 730 170V350Q730 470 610 470H150Q30 470 30 350V170Q30 50 150 50Z"/>';
  /* nucleus: a double envelope with pores */
  g+='<circle class="nu sD" cx="'+NUC.x+'" cy="'+NUC.y+'" r="'+NUC.r+'"/><circle class="nu2 sD" cx="'+NUC.x+'" cy="'+NUC.y+'" r="'+(NUC.r-7)+'"/>';
  /* DNA: two strands and their rungs across the nucleus */
  var dx0=430,dx1=650,dy=332,s1='',s2='';
  for(i=0;i<=44;i++){var x=dx0+(dx1-dx0)*i/44,ph=i/44*Math.PI*4.4;s1+=(i?'L':'M')+x.toFixed(1)+' '+(dy+Math.sin(ph)*11).toFixed(1);s2+=(i?'L':'M')+x.toFixed(1)+' '+(dy-Math.sin(ph)*11).toFixed(1)}
  g+='<path class="dn sD" d="'+s1+'"/><path class="dn sD" d="'+s2+'"/>';
  for(i=1;i<22;i++){var xr=dx0+(dx1-dx0)*i/22,a=Math.sin(i/22*Math.PI*4.4)*11;if(Math.abs(a)>3)g+='<path class="rg sD" d="M'+xr.toFixed(1)+' '+(dy-a).toFixed(1)+'V'+(dy+a).toFixed(1)+'"/>'}
  /* the receptor pair on the DNA */
  g+='<path class="rc sD" d="'+lobe(REC.x-19,REC.y,22,19,1)+'"/><path class="rc sD" d="'+lobe(REC.x+21,REC.y,22,19,2.4)+'"/>';
  /* the enzyme ALDH1A3 */
  g+='<path class="ez sD" d="'+lobe(ENZ.x,ENZ.y,64,48,.6)+'"/><path class="ez2 sD" d="M'+(ENZ.x+18)+' '+(ENZ.y-8)+'q14 6 2 18"/>';
  g+='<text class="t" x="'+(ENZ.x-34)+'" y="'+(ENZ.y+78)+'">ALDH1A3</text>';
  g+='<text class="t" x="'+(NUC.x-30)+'" y="'+(NUC.y-112)+'">NUCLEUS</text>';
  g+='<text class="t" x="'+(REC.x-30)+'" y="'+(REC.y-36)+'">RAR · RXR</text>';
  g+='<text class="t" x="'+(dx0+8)+'" y="'+(dy+40)+'">DNA</text>';
  g+='<text class="t" x="44" y="76">'+(o.mob?'CELL':'A CELL · SCHEMATIC')+'</text>';
  g+='</g>';
  /* the receptor switched on: a glow, and transcripts leaving the gene */
  g+='<g id="scOn"><circle class="gl" cx="'+REC.x+'" cy="'+REC.y+'" r="46"/>';
  for(i=0;i<3;i++){var tx=REC.x+46+i*26;g+='<path class="tr" d="M'+tx+' '+(dy-14)+'c6 -14 -6 -24 0 -38s-6 -24 0 -38"/>'}
  g+='</g>';
  /* the molecules: retinol in, retinoic acid out */
  g+='<g id="scMol">';
  MOLS.forEach(function(m,k){g+='<g class="mo" data-k="'+k+'">'+retinoid("rl",0)+retinoid("ra",1)+'</g>'});
  g+='</g>';
  /* the inhibitor, docked in the enzyme */
  g+='<g id="scInh"><circle class="ihg" cx="'+(ENZ.x+10)+'" cy="'+(ENZ.y+2)+'" r="30"/><path class="ih" d="M'+(ENZ.x+10)+' '+(ENZ.y-12)+'l12 7v14l-12 7l-12 -7v-14z"/><path class="ih" d="M'+(ENZ.x+22)+' '+(ENZ.y-5)+'l12 -6"/></g>';
  /* labels that belong to a step */
  g+='<g id="la1"><text class="a" x="44" y="'+(o.mob?126:118)+'">RETINOL · VITAMIN A</text></g>';
  g+='<g id="la2"><text class="a" x="'+(PORE.x-118)+'" y="'+(PORE.y-46)+'">RETINOIC ACID</text></g>';
  g+='<g id="la3"><text class="a" x="'+(ENZ.x-78)+'" y="'+(ENZ.y-66)+'">KAYOTHERA INHIBITOR</text></g>';
  var ly=SCH-6;
  g+='<g id="lb1"><text class="a" x="20" y="'+ly+'">'+(o.mob?'ALDH1A3 MAKES THE LIGAND':'ALDH1A3 · RETINOL TO RETINOIC ACID')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+ly+'">'+(o.mob?'RECEPTORS ON · GENES READ':'NUCLEAR RECEPTORS ON · GENES TRANSCRIBED')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+ly+'">'+(o.mob?'NO LIGAND · RECEPTORS QUIET':'NO LIGAND MADE · RECEPTORS QUIET')+'</text></g>';
  return g+'</svg>';
}
function scene(){return cellScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),on:$("#scOn",svg),tr:$$("#scOn .tr",svg),inh:$("#scInh",svg),
    mo:$$(".mo",svg).map(function(el){return {el:el,k:el.getAttribute("data-k"),m:MOLS[+el.getAttribute("data-k")],rl:$(".rl",el),ra:$(".ra",el)}}),
    a1:$("#la1",svg),a2:$("#la2",svg),a3:$("#la3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function q(a,b,c,u){var v=1-u;return [v*v*a[0]+2*v*u*b[0]+u*u*c[0],v*v*a[1]+2*v*u*b[1]+u*u*c[1]]}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var flow=seg(p,0,.52),on=seg(p,.4,.54),blk=seg(p,.68,.82);
    var live=on*(1-blk);
    op(E.on,b*live);E.tr.forEach(function(el,i){el.style.strokeDasharray="90 90";el.style.strokeDashoffset=(90*(1-seg(p,.44+i*.03,.6+i*.03))).toFixed(1)});
    op(E.inh,b*blk);
    E.mo.forEach(function(M){var m=M.m,u=Math.min(1,Math.max(0,(flow-m.d)/.38)),x,y,r=0,ra=0,rl=0;
      if(u<.5){var w=u/.5,pt=q([m.sx,m.sy],[m.mx,m.my],[ENZ.x-8,ENZ.y],w);x=pt[0];y=pt[1];rl=w<.05?w/.05:1;if(w>.9)rl*=1-(w-.9)/.1}
      else{var w2=(u-.5)/.5,pt2=w2<.5?q([ENZ.x+20,ENZ.y],[300,ENZ.y-30],[PORE.x,PORE.y],w2/.5):q([PORE.x,PORE.y],[REC.x-60,REC.y-70],[m.ex,m.ey],(w2-.5)/.5);
        x=pt2[0];y=pt2[1];ra=1-.85*seg(w2,.8,1);r=-12+w2*24}
      /* blocked: no new acid; retinol waits at the enzyme */
      if(blk>0&&u>=.5&&(+M.k)%2===0){var px=m.px+m.ox*.3,py=m.py+m.oy*.3;x=x+(px-x)*blk;y=y+(py-y)*blk;rl=Math.max(rl,blk*.9)}
      if(blk>0&&u>=.5)ra*=1-blk;
      M.el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+r.toFixed(1)+")");
      op(M.rl,b*rl*(u>0?1:0));op(M.ra,b*ra*(1-(blk>0&&u>=.5?blk:0)));});
    op(E.a1,b*seg(p,.04,.1)*(1-seg(p,.22,.27)));op(E.a2,b*seg(p,.28,.34)*(1-seg(p,.6,.66)));op(E.a3,b*seg(p,.74,.82));
    op(E.l1,b*seg(p,.1,.18)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.44,.52)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.78,.86));
  };
}
