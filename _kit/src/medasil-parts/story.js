/* The story scene (BL/BY/DB): "From the mould to the ward", told with ONE fine-line side view of a Guedel airway (Medasil's own
   product, medasil.com > Products > Guedel Airways) kept on screen for all four steps.
   Step 1 (Moulded): the two halves of a mould part; the one-piece airway draws in, flange, bite block, curved body, lumen.
   Step 2 (Cleanroom): laminar air falls through the scene (manufactured within a Class 8 cleanroom, medasil.com > Home).
   Step 3 (Checked): the bite block fills with its size colour (size 4, red, 10 cm, per their table) and a length gauge draws.
   Step 4 (Delivered): a single wrap pouch seals around it (supplied sterile in individual single wrap pouches). */
var SCW=760,SCH=520;
function mdScene(o){
  var g='',mob=o.mob,i;
  var Y=mob?8:0;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g transform="translate(0 '+Y+')">';
  /* step 1: the mould, two dashed halves that part */
  g+='<g id="mdMt"><path class="mould" d="M104 132H580V230H104Z"/></g><g id="mdMb"><path class="mould" d="M104 230H580V462H104Z"/></g>';
  /* step 2: laminar air, falling */
  var lf='';for(i=0;i<14;i++){lf+='M'+(124+i*38)+' 100V470'}
  g+='<path id="mdAir" class="air" d="'+lf+'"/>';
  /* the airway, side view: flange, straight bite-block section, curved body to the distal tip */
  var OUT='M158 208H300A192 192 0 0 1 489 434L445.6 426.3A148 148 0 0 0 300 252H158Z';
  g+='<path id="mdBite" class="bite" d="M158 210H238V250H158Z"/>';
  g+='<path class="ins iD" d="'+OUT+'"/>';
  g+='<path class="ins iD" d="M140 186Q140 172 150 172H158V288H150Q140 288 140 274Z"/>';
  g+='<path class="lum lD" d="M158 219H300A181 181 0 0 1 478.2 431.4"/><path class="lum lD" d="M158 241H300A159 159 0 0 1 456.6 427.6"/>';
  g+='<path class="lum lD" d="M238 208V252"/>';
  /* step 3: the length gauge */
  g+='<g id="mdGauge"><path class="gauge gD" d="M140 452H489"/><path class="gauge gD" d="M140 444V460M489 444V460"/></g>';
  /* step 4: the single wrap pouch, its seal and peel chevron */
  g+='<g id="mdPouch"><path class="pouch pD" d="M96 124H584V470H96Z"/><path class="seal pD" d="M108 136H572V458H108Z"/><path class="pouch pD" d="M96 124L136 297L96 470"/></g>';
  g+='<path id="mdGlow" class="glow" d="'+OUT+'"/>';
  g+='</g>';
  /* labels, per step, in the band above the scene: each >= 8px clear of every stroke (DR3) */
  function L(id,cl,a,b){return '<g id="'+id+'"><text class="t '+cl+'" x="20" y="'+(mob?40:36)+'">'+a+'</text><text class="t" x="20" y="'+(mob?72:60)+'">'+b+'</text></g>'}
  g+=mob?L("mdL1","s1","ONE-PIECE MOULDING","SMOOTH AND SEAMLESS"):L("mdL1","s1","ONE-PIECE MOULDING · SMOOTH, SEAMLESS","CURVED ANATOMICAL CONTOURS, HOLLOW LUMEN");
  g+=mob?L("mdL2","s2","CLASS 8 CLEANROOM","MADE IN LEEDS"):L("mdL2","s2","MANUFACTURED IN A CLASS 8 CLEANROOM","AT OUR OWN PREMISES IN LEEDS");
  g+=mob?L("mdL3","s1","ISO 13485:2016","SIZE 4 · 10 CM · RED"):L("mdL3","s1","STRICT QUALITY CONTROLS · ISO 13485:2016","SIZE 4 · 10 CM · RED BITE BLOCK");
  g+=mob?L("mdL4","s2","STERILE, SINGLE WRAP","NEXT-DAY UK DELIVERY"):L("mdL4","s2","SUPPLIED STERILE, IN A SINGLE WRAP POUCH","NEXT-DAY UK DELIVERY ON IN-STOCK ITEMS");
  g+='<g id="lb1"><text class="a" x="20" y="'+(mob?518:506)+'">1 · MOULDED</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+(mob?518:506)+'">2 · CLEANROOM</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+(mob?518:506)+'">3 · CHECKED</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="'+(mob?518:506)+'">4 · DELIVERED</text></g>';
  return g+'</svg>';
}
function scene(){return mdScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={ins:dl(".iD"),lum:dl(".lD"),gauge:dl(".gD"),pouch:dl(".pD"),mt:$("#mdMt",svg),mb:$("#mdMb",svg),air:$("#mdAir",svg),bite:$("#mdBite",svg),
    gz:$("#mdGauge",svg),glow:$("#mdGlow",svg),L1:$("#mdL1",svg),L2:$("#mdL2",svg),L3:$("#mdL3",svg),L4:$("#mdL4",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    /* step 1: the mould shows, the airway draws inside it, the halves part and fade */
    var mo=seg(p,.1,.24);
    op(E.mt,b*seg(p,0,.06)*(1-seg(p,.2,.27)));op(E.mb,b*seg(p,0,.06)*(1-seg(p,.2,.27)));
    if(E.mt)E.mt.setAttribute("transform","translate(0 "+(-22*mo).toFixed(1)+")");if(E.mb)E.mb.setAttribute("transform","translate(0 "+(22*mo).toFixed(1)+")");
    draw(E.ins,b*seg(p,0,.07));draw(E.lum,b*seg(p,.03,.1));
    op(E.L1,b*seg(p,.03,.09)*(1-seg(p,.22,.25)));
    /* step 2: laminar air falls through the scene */
    op(E.air,b*seg(p,.27,.33)*(1-seg(p,.46,.5)));if(E.air)E.air.style.strokeDashoffset=(-p*900).toFixed(1);
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3: the bite block takes its size colour, the gauge draws */
    op(E.bite,b*seg(p,.52,.6));draw(E.gauge,b*seg(p,.53,.6));
    op(E.L3,b*seg(p,.55,.61)*(1-seg(p,.72,.75)));
    /* step 4: the pouch draws and seals around it, the airway brightens */
    draw(E.pouch,b*seg(p,.77,.92));op(E.glow,b*seg(p,.84,.94));
    op(E.L4,b*seg(p,.79,.85));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}
