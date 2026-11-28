/* The story scene (BL/BY/DB): how a Rejuvenate Bio therapy works (rejuvenatebio.com > Our Science, Trials), ONE fine-line
   schematic kept on screen for all four steps: an AAV capsid at left, a liver cell in the middle, a blood vessel and the
   heart at right.
   Step 1 (Package): the FGF21 gene is packed into a liver-tropic AAV capsid.
   Step 2 (Deliver): a single dose; the capsid homes to the liver and its gene enters a liver cell's nucleus.
   Step 3 (Secrete): the liver cell makes FGF21 and secretes it into the blood.
   Step 4 (Protect): the protein reaches the heart; in mice, up to 85% less scar tissue than placebo. */
var SCW=760,SCH=520;
function rjHex(cx,cy,r,a0){var d="",i,a;for(i=0;i<6;i++){a=a0+i*Math.PI/3;d+=(i?"L":"M")+(cx+r*Math.cos(a)).toFixed(1)+" "+(cy+r*Math.sin(a)).toFixed(1)}return d+"Z"}
var RJ_DOTS=[[478,250],[496,276],[512,236],[530,262],[548,288],[566,248],[584,272],[602,232],[620,258]];
function rjScene(o){
  var g='',mob=o.mob,i,a,cx=104,cy=262;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">LIVER-DIRECTED GENE THERAPY, SCHEMATIC</text>';
  /* the capsid: an icosahedron in outline (hexagonal silhouette with its inner faces) */
  var cap='';for(i=0;i<6;i++){a=-Math.PI/2+i*Math.PI/3;cap+='M'+cx+' '+cy+'L'+(cx+40*Math.cos(a)).toFixed(1)+' '+(cy+40*Math.sin(a)).toFixed(1)}
  g+='<g id="rjC"><path class="edge sC" d="'+rjHex(cx,cy,40,-Math.PI/2)+'"/><path class="face sC" d="'+cap+'"/></g>';
  g+='<g id="rjG"><path class="gene sG" d="M'+(cx-18)+' '+(cy+2)+'C'+(cx-10)+' '+(cy-12)+' '+(cx-2)+' '+(cy+16)+' '+(cx+6)+' '+(cy+2)+'S'+(cx+14)+' '+(cy-12)+' '+(cx+20)+' '+(cy+2)+'"/></g>';
  /* the liver cell: a hepatocyte, its nucleus */
  g+='<g id="rjL"><path class="edge sL" d="'+rjHex(350,262,96,0)+'"/><circle class="nuc sL" cx="350" cy="262" r="30"/></g>';
  /* the blood vessel and the heart */
  g+='<g id="rjV"><path class="ves sV" d="M462 200H700M462 324H700"/></g>';
  g+='<g id="rjH"><path class="edge sH" d="M676 404C650 384 626 364 626 338C626 320 640 308 656 308C666 308 672 314 676 322C680 314 686 308 696 308C712 308 726 320 726 338C726 364 702 384 676 404Z"/></g>';
  /* step 2: the delivery path and the capsid's gene in the nucleus */
  g+='<g id="rjP"><path class="path sP" d="M150 262H246"/><path class="gene sP" d="M334 264C340 252 346 276 352 264S364 252 368 264"/></g>';
  /* step 3: secreted FGF21 in the vessel */
  g+='<g id="rjD">';RJ_DOTS.forEach(function(d){g+='<circle class="prot" cx="'+d[0]+'" cy="'+d[1]+'" r="5"/>'});g+='</g>';
  /* step 4: protein reaching the heart */
  g+='<g id="rjQ"><path class="path sQ" d="M676 326V300"/><circle class="prot" cx="662" cy="352" r="4"/><circle class="prot" cx="690" cy="346" r="4"/><circle class="prot" cx="676" cy="372" r="4"/></g>';
  /* labels (>= 8px clear of every stroke, DR3) */
  g+='<g id="rjL1"><text class="t s2" x="'+(mob?40:56)+'" y="'+(mob?196:200)+'">'+(mob?'AAV + FGF21 GENE':'AAV CAPSID + FGF21 GENE')+'</text></g>';
  g+='<g id="rjL2"><text class="t s2" x="'+(mob?250:262)+'" y="'+(mob?150:146)+'">'+(mob?'ONE DOSE · LIVER':'ONE DOSE · INTO THE LIVER')+'</text></g>';
  g+='<g id="rjL3"><text class="t s2" x="'+(mob?400:472)+'" y="'+(mob?184:186)+'">'+(mob?'FGF21 SECRETED':'FGF21 SECRETED INTO THE BLOOD')+'</text></g>';
  g+='<g id="rjL4"><text class="t s2" x="'+(mob?300:400)+'" y="'+(mob?440:434)+'">'+(mob?'LESS SCAR TISSUE':'HEART · LESS SCAR TISSUE (MICE)')+'</text></g>';
  g+='<g id="rjL0"><text class="t" x="296" y="'+(mob?400:390)+'">LIVER CELL</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · PACKAGE</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · DELIVER</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · SECRETE</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · PROTECT</text></g>';
  return g+'</svg>';
}
function scene(){return rjScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={C:$("#rjC",svg),cE:dl(".sC"),G:$("#rjG",svg),gE:dl(".sG"),L:$("#rjL",svg),lE:dl(".sL"),V:$("#rjV",svg),vE:dl(".sV"),H:$("#rjH",svg),hE:dl(".sH"),
    P:$("#rjP",svg),pE:dl(".sP"),D:$$("#rjD circle",svg),Q:$("#rjQ",svg),qE:dl(".sQ"),QD:$$("#rjQ circle",svg),
    T:[$("#rjL1",svg),$("#rjL2",svg),$("#rjL3",svg),$("#rjL4",svg)],T0:$("#rjL0",svg),l:[$("#lb1",svg),$("#lb2",svg),$("#lb3",svg),$("#lb4",svg)],t0:svg.querySelector("text.t")};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.t0,b);op(E.C,b);draw(E.cE,b*seg(p,0,.08));op(E.L,b);draw(E.lE,b*seg(p,.02,.1));op(E.V,b);draw(E.vE,b*seg(p,.04,.12));op(E.H,b);draw(E.hE,b*seg(p,.06,.14));
    op(E.T0,b*seg(p,.08,.14)*(1-seg(p,.22,.25)));
    op(E.G,b);draw(E.gE,b*seg(p,.08,.18));
    op(E.P,b);draw(E.pE,b*seg(p,.3,.44));
    E.D.forEach(function(d,i){op(d,b*seg(p,.54+i*.012,.58+i*.012))});
    op(E.Q,b);draw(E.qE,b*seg(p,.78,.84));E.QD.forEach(function(d,i){op(d,b*seg(p,.8+i*.02,.86+i*.02))});
    for(var i=0;i<4;i++){var s0=i*.25;op(E.T[i],b*seg(p,s0+.05,s0+.11)*(i<3?(1-seg(p,s0+.22,s0+.25)):1));op(E.l[i],b*seg(p,s0+(i?.02:0),s0+.07)*(i<3?(1-seg(p,s0+.22,s0+.25)):1))}
  };
}
