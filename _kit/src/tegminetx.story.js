/* the story scene (BL/BY/DB/DR): how a TegMine ADC works, in one drawing that stays on screen for all four steps (the whole
   figure is laid down faintly first, so no frame is empty; each step brings its part up to full strength):
   Step 1 (discover): a healthy cell and a tumor cell, each with surface proteins; on the tumor cell the proteins carry
     branched glycans, which light up.
   Step 2 (recognize): the antibody settles onto the tumor protein where glycan and protein sit together; over the healthy
     cell (protein alone) a second antibody stays unbound.
   Step 3 (deliver): the conjugate's drug payloads pass into the tumor cell.
   Step 4 (unshield): the glycan shield is stripped and an immune cell comes in.
   Sources: tegminetx.com ("exploiting cancer's glycan shield for targeted killing and restored immunity"; ADCs that deliver
   payloads while stripping immunosuppressive ligands) and the 23 Sept 2025 release (2-Factor: dual glycan/protein
   recognition). Schematic, not to scale. Driven by the scrubbed story progress. */
var GX={hp:[90,170,250],tp:[430,530,630],my:295,abx:530};
function glyc(x){var y=231;return '<path class="gl sD" d="M'+x+' '+y+'V'+(y-13)+'M'+x+' '+(y-13)+'L'+(x-11)+' '+(y-25)+'V'+(y-36)+'M'+x+' '+(y-13)+'L'+(x+11)+' '+(y-25)+'V'+(y-36)+'"/>'+
  '<rect class="gn sq" x="'+(x-3.5)+'" y="'+(y-16.5)+'" width="7" height="7"/><circle class="gn" cx="'+(x-11)+'" cy="'+(y-25)+'" r="4"/><circle class="gn" cx="'+(x+11)+'" cy="'+(y-25)+'" r="4"/><circle class="gn" cx="'+(x-11)+'" cy="'+(y-37)+'" r="3.4"/><circle class="gn" cx="'+(x+11)+'" cy="'+(y-37)+'" r="3.4"/>'}
function prot(x){return '<path class="pr" d="M'+x+' '+GX.my+'V253"/><circle class="ph" cx="'+x+'" cy="242" r="11"/>'}
function abY(x,y,cls){return '<g class="'+cls+'"><path class="abp" d="M'+x+' '+y+'V'+(y+50)+'M'+x+' '+(y+50)+'L'+(x-13)+' '+(y+85)+'M'+x+' '+(y+50)+'L'+(x+13)+' '+(y+85)+'"/></g>'}
function scene(){
  var mob=MOBILE(),g='',X=GX.abx;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="10 20 700 392" aria-hidden="true">';
  /* the two cells: interiors and membranes */
  g+='<defs><linearGradient id="cfg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9cc3e6" stop-opacity=".09"/><stop offset="1" stop-color="#9cc3e6" stop-opacity="0"/></linearGradient><linearGradient id="cft" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#69a1d1" stop-opacity=".2"/><stop offset="1" stop-color="#69a1d1" stop-opacity="0"/></linearGradient></defs>';
  g+='<g id="sxCell"><path class="cf" d="M40 300Q170 286 300 300V412H40Z"/><path class="cf tu" d="M380 300Q530 286 680 300V412H380Z"/>'+
     '<path class="mb sD" d="M40 300Q170 286 300 300"/><path class="mb tu sD" d="M380 300Q530 286 680 300"/>';
  GX.hp.forEach(function(x){g+=prot(x)});GX.tp.forEach(function(x){g+=prot(x)});g+='</g>';
  g+='<g id="sxGly">'+GX.tp.map(glyc).join("")+'</g>';
  /* the unbound antibody over the healthy cell, and the conjugate over the tumor cell with four payloads */
  g+='<g id="sxAbH">'+abY(170,95,"ab gh2")+'</g>';
  g+='<g id="sxAb">'+abY(X,100,"ab")+'<path class="lk" d="M'+X+' 112H'+(X+8)+'M'+X+' 126H'+(X-8)+'M'+X+' 138H'+(X+8)+'M'+X+' 138H'+(X-8)+'"/></g>';
  g+='<g id="sxPay"><circle class="py" cx="'+(X+12)+'" cy="112" r="4.6"/><circle class="py" cx="'+(X-12)+'" cy="126" r="4.6"/><circle class="py" cx="'+(X+12)+'" cy="138" r="4.6"/><circle class="py" cx="'+(X-12)+'" cy="138" r="4.6"/></g>';
  g+='<circle id="sxHit" class="hit" cx="'+X+'" cy="352" r="34"/>';
  /* the immune cell */
  g+='<g id="sxImm"><circle class="im" cx="640" cy="118" r="28"/><circle class="imn" cx="644" cy="114" r="11"/><path class="imp sD" d="M620 142L582 226"/>'+
     '<text class="a" x="640" y="78" text-anchor="middle">'+(mob?'IMMUNE':'IMMUNE CELL')+'</text></g>';
  g+='<g id="sxCap"><text class="t" x="40" y="398">'+(mob?'HEALTHY':'HEALTHY CELL')+'</text><text class="t" x="380" y="398">'+(mob?'TUMOR':'TUMOR CELL')+'</text></g>';
  var lx=mob?360:40,an=mob?' text-anchor="middle"':'',ly=52;
  g+='<g id="lb0"><text class="a"'+an+' x="'+lx+'" y="'+ly+'">'+(mob?'TUMOR GLYCANS':'DISCOVER · GLYCANS FOUND ONLY ON THE TUMOR')+'</text></g>';
  g+='<g id="lb1"><text class="a"'+an+' x="'+lx+'" y="'+ly+'">'+(mob?'GLYCAN + PROTEIN':'RECOGNIZE · GLYCAN AND PROTEIN TOGETHER')+'</text></g>';
  g+='<g id="lb2"><text class="a"'+an+' x="'+lx+'" y="'+ly+'">'+(mob?'PAYLOAD DELIVERED':'DELIVER · THE PAYLOAD ENTERS THE TUMOR')+'</text></g>';
  g+='<g id="lb3"><text class="a"'+an+' x="'+lx+'" y="'+ly+'">'+(mob?'SHIELD STRIPPED':'UNSHIELD · THE IMMUNE SYSTEM SEES IT')+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={cell:$("#sxCell",svg),cap:$("#sxCap",svg),mb:dl("#sxCell .mb"),gly:$("#sxGly",svg),gl:dl("#sxGly .gl"),gn:$$("#sxGly .gn",svg),
    ab:$("#sxAb",svg),abH:$("#sxAbH",svg),payG:$("#sxPay",svg),pay:$$("#sxPay .py",svg),hit:$("#sxHit",svg),imm:$("#sxImm",svg),imp:dl("#sxImm .imp"),
    l0:$("#lb0",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var P0=E.pay.map(function(c){return [+c.getAttribute("cx"),+c.getAttribute("cy")]}),P1=[[518,338],[546,346],[530,362],[506,356]];
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  var lastB=-1;
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;op(E.cell,b);op(E.cap,b);draw(E.mb,b)}
    /* step 1: the glycans light up on the tumor cell */
    var g1=seg(p,.02,.2),g4=seg(p,.78,.9);draw(E.gl,b);
    op(E.gly,(.35+.65*g1)*b*(1-.78*g4));E.gn.forEach(function(n){n.classList.toggle("on",g1>.5&&g4<.5)});
    /* step 2: the conjugate settles onto the tumor glycoprotein; the second antibody stays unbound over the healthy cell */
    var s2=seg(p,.27,.45),e=s2*s2*(3-2*s2),ty=-34+e*34;
    E.ab.setAttribute("transform","translate(0 "+ty.toFixed(1)+")");op(E.ab,b*(.3+.7*seg(p,.24,.32)));
    op(E.abH,b*(.25+.35*seg(p,.3,.4)));
    /* step 3: the payloads leave the stem and pass into the tumor cell */
    var s3=seg(p,.53,.7),e3=s3*s3*(3-2*s3);
    E.pay.forEach(function(c,i){var a=P0[i],z=P1[i],y0=a[1]+ty;c.setAttribute("cx",(a[0]+(z[0]-a[0])*e3).toFixed(1));c.setAttribute("cy",(y0+(z[1]-y0)*e3).toFixed(1))});
    op(E.payG,b*(.3+.7*seg(p,.24,.32)));op(E.hit,b*seg(p,.66,.74)*(1-.5*g4));
    /* step 4: the shield is stripped and the immune cell comes in */
    op(E.imm,b*seg(p,.8,.88));draw(E.imp,seg(p,.84,.95));
    op(E.l0,b*(1-seg(p,.2,.26)));op(E.l1,b*seg(p,.27,.33)*(1-seg(p,.45,.51)));op(E.l2,b*seg(p,.52,.58)*(1-seg(p,.7,.76)));op(E.l3,b*seg(p,.77,.83));
  };
}
