/* The story scene (BL/BY/DB): how CYT-1010 works (cytogelpharma.com Novel Mechanism of Action and CYT-1010 pages; the
   April 2026 release), as ONE continuous scene: a nerve-cell membrane (lipid bilayer) holding two forms of the mu receptor,
   the full-length seven-helix receptor (Exon 1) on the left and the truncated six-transmembrane EM receptor (Exon 11) on
   the right, with a pain signal running along the nerve below.
   Step 1 (pain): pulses run along the nerve; both receptors idle.
   Step 2 (opioids): morphine-like molecules dock on the full-length receptors only; they light, the pulses ease, and the
   side effects the site associates with that receptor appear (reward, withdrawal, respiratory depression, GI transit).
   Step 3 (CYT-1010): the opioid leaves; CYT-1010, a four-residue endomorphin analog, docks on the EM receptors; they light
   in the brand teal, the pulses fade and the side-effect tags clear. Schematic. Driven by the scrubbed story progress. */
var SCW=760,SCH=468;
var MT=140,MB=262,AX=418;
var RL=[232,356],RR=[536,660];
function bundle(cx,n){var g='',i,x0=cx-(n-1)*7.5;for(i=0;i<n;i++){var x=x0+i*15,dy=(i%2?8:-6);
  g+='<rect class="hx" x="'+(x-6)+'" y="'+(MT-14+dy)+'" width="12" height="'+(MB-MT+24)+'" rx="6"/><path class="hl" d="M'+(x-2.5)+' '+(MT-8+dy)+'v'+(MB-MT+12)+'"/>'}
  return g}
function heads(y){var g='',x;for(x=146;x<=736;x+=12)g+='<circle class="lh" cx="'+x+'" cy="'+y+'" r="5.2"/>';return g}
function tails(){var g='',x;for(x=146;x<=736;x+=12){g+='<path class="lt" d="M'+(x-1.2)+' '+(MT+5)+'v'+(MB-MT)/2.6+'M'+(x+1.2)+' '+(MT+5)+'v'+(MB-MT)/2.9+'M'+(x-1.2)+' '+(MB-5)+'v-'+(MB-MT)/2.6+'M'+(x+1.2)+' '+(MB-5)+'v-'+(MB-MT)/2.9+'"/>'}return g}
function opioid(){return '<g transform="scale(1.7)"><path class="op" d="M0 -9l7.8 4.5v9L0 9l-7.8-4.5v-9z"/><path class="op" d="M7.8 -4.5l9 -3.5v-8M-7.8 4.5l-8 5"/><circle class="opd" cx="17" cy="-16" r="2.6"/></g>'}
function peptide(){var g='<path class="pb" d="M-36 -3L-12 4L12 -4L36 3"/>',P=[[-36,-3],[-12,4],[12,-4],[36,3]],k;
  for(k=0;k<4;k++)g+='<circle class="pp" cx="'+P[k][0]+'" cy="'+P[k][1]+'" r="'+(k==2?11:9.5)+'"/>';return g}
function painScene(o){
  var g='',i;
  var LX=o.mob?140:20;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="'+(o.mob?'128 0 620 ':'0 0 '+SCW+' ')+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<path class="mb sD" d="M140 '+(MT)+'H740"/><path class="mb sD" d="M140 '+(MB)+'H740"/>';
  g+='<path class="axf" d="M140 '+(AX-14)+'C320 '+(AX-20)+' 560 '+(AX-8)+' 740 '+(AX-14)+'V'+(AX+14)+'C560 '+(AX+20)+' 320 '+(AX+8)+' 140 '+(AX+14)+'Z"/><path class="ax sD" d="M140 '+(AX-14)+'C320 '+(AX-20)+' 560 '+(AX-8)+' 740 '+(AX-14)+'"/><path class="ax sD" d="M140 '+(AX+14)+'C320 '+(AX+8)+' 560 '+(AX+20)+' 740 '+(AX+14)+'"/>';
  if(!o.mob){
  g+='<text class="t" x="20" y="'+(MT-44)+'">OUTSIDE</text><text class="t" x="20" y="'+(MT-28)+'">THE CELL</text>';
  g+='<text class="t" x="20" y="'+((MT+MB)/2+4)+'">MEMBRANE</text>';
  g+='<text class="t" x="20" y="'+(AX+4)+'">NERVE</text>';
  }
  g+='<text class="t" x="'+((RL[0]+RL[1])/2)+'" y="'+(MB+(o.mob?32:40))+'" text-anchor="middle">'+(o.mob?'MU · EXON 1':'MU RECEPTOR · EXON 1')+'</text>';
  g+='<text class="t" x="'+((RR[0]+RR[1])/2)+'" y="'+(MB+(o.mob?32:40))+'" text-anchor="middle">'+(o.mob?'EM · EXON 11':'EM RECEPTOR · EXON 11')+'</text>';
  g+='</g>';
  g+='<g id="scLip">'+tails()+heads(MT)+heads(MB)+'</g>';
  /* activation glows behind the receptors */
  g+='<g id="scGl">';RL.forEach(function(x){g+='<ellipse class="gl gw" cx="'+x+'" cy="'+((MT+MB)/2)+'" rx="72" ry="88"/>'});
  RR.forEach(function(x){g+='<ellipse class="gl gt" cx="'+x+'" cy="'+((MT+MB)/2)+'" rx="66" ry="88"/>'});g+='</g>';
  g+='<g id="scRec">';RL.forEach(function(x){g+='<g class="rcp rl">'+bundle(x,7)+'</g>'});RR.forEach(function(x){g+='<g class="rcp rr">'+bundle(x,6)+'</g>'});g+='</g>';
  /* pain-signal pulses along the nerve */
  g+='<g id="scPul">';for(i=0;i<6;i++)g+='<ellipse class="pu" data-k="'+i+'" cx="0" cy="'+AX+'" rx="18" ry="8"/>';g+='</g>';
  /* side effects of the full-length receptor */
  var SE=o.mob?['REWARD','RESPIRATORY DEPRESSION','GI TRANSIT']:['REWARD · WITHDRAWAL','RESPIRATORY DEPRESSION','GI TRANSIT INHIBITION'];
  g+='<g id="scSe">';SE.forEach(function(s,k){g+='<text class="se" x="'+(RL[0]-40)+'" y="'+(MB+(o.mob?68:70)+k*(o.mob?24:19))+'">'+s+'</text>'});g+='</g>';
  g+='<g id="scOp">';RL.forEach(function(x,k){g+='<g class="om" data-k="'+k+'">'+opioid()+'</g>'});g+='</g>';
  g+='<g id="scPe">';RR.forEach(function(x,k){g+='<g class="pm" data-k="'+k+'">'+peptide()+'</g>'});g+='</g>';
  var ly=SCH-8;
  g+='<g id="lb1"><text class="a" x="'+LX+'" y="'+ly+'">'+(o.mob?'PAIN SIGNALS TRAVEL THE NERVE':'PAIN SIGNALS TRAVEL ALONG THE NERVE TO THE BRAIN')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+LX+'" y="'+ly+'">'+(o.mob?'OPIOIDS · FULL-LENGTH RECEPTOR ONLY':'MORPHINE AND OPIOIDS · FULL-LENGTH MU RECEPTOR ONLY')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+LX+'" y="'+ly+'">'+(o.mob?'CYT-1010 · EM RECEPTOR, EXON 11':'CYT-1010 · PREFERENTIALLY ACTIVATES THE EM RECEPTOR')+'</text></g>';
  return g+'</svg>';
}
function scene(){return painScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),lip:$("#scLip",svg),rec:$$("#scRec .rcp",svg),
    gw:$$("#scGl .gw",svg),gt:$$("#scGl .gt",svg),pu:$$(".pu",svg),se:$$(".se",svg),
    om:$$(".om",svg),pm:$$(".pm",svg),rl:$$("#scRec .rl",svg),rr:$$("#scRec .rr",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.lip,b);E.rec.forEach(function(el){op(el,b)})}
    var oIn=seg(p,.34,.5),oOut=seg(p,.62,.72),cIn=seg(p,.66,.84);
    var opOn=oIn*(1-oOut),cyOn=cIn;
    var pain=1-.55*opOn-.85*cyOn;if(pain<.12)pain=.12;
    E.pu.forEach(function(el,k){var x=140+((p*2600+k*100)%600);el.setAttribute("cx",x.toFixed(1));op(el,b*pain*(.35+.65*Math.sin(Math.PI*(x-140)/600)))});
    E.gw.forEach(function(el){op(el,b*opOn*.9)});E.gt.forEach(function(el){op(el,b*cyOn*.95)});
    E.rl.forEach(function(el){el.classList.toggle("on",opOn>.5)});E.rr.forEach(function(el){el.classList.toggle("on",cyOn>.5)});
    E.se.forEach(function(el,k){op(el,b*sm((opOn-k*.12)/.76)*(1-cyOn))});
    E.om.forEach(function(el,k){var x=RL[k],q=sm((oIn-k*.08)/.92),y=20+(MT-26-20)*q;
      el.setAttribute("transform","translate("+(x-60*(1-q)).toFixed(1)+" "+y.toFixed(1)+") rotate("+(40*(1-q)).toFixed(1)+")");
      op(el,b*sm(oIn*3)*(1-oOut))});
    E.pm.forEach(function(el,k){var x=RR[k],q=sm((cIn-k*.08)/.92),y=16+(MT-26-16)*q;
      el.setAttribute("transform","translate("+(x+70*(1-q)).toFixed(1)+" "+y.toFixed(1)+") rotate("+(-30*(1-q)).toFixed(1)+")");
      op(el,b*sm(cIn*3))});
    op(E.l1,b*seg(p,.04,.12)*(1-seg(p,.28,.34)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.6,.66)));op(E.l3,b*seg(p,.72,.8));
  };
}
