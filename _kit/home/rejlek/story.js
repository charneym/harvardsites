/* The story scene (BL/BY/DB): Rejlek's manufacturing process (rejlek.at > Herstellung), told in four steps around ONE
   fine-line section of an injection mould for a medical multi-cavity part (the clear strip in the hero, their own photo).
   Step 1 (Design): the part in 3D construction, dashed, with its dimension line.
   Step 2 (Werkzeug): cavity plate and core plate draw around it, with guide pins and core cooling channels.
   Step 3 (Spritzguss): the nozzle docks at the sprue, the melt fills strip and cavities from below.
   Step 4 (Prüfen): the mould lifts away, the finished part glows and a CT scan line passes across it. */
var SCW=760,SCH=520;
function rjCup(cx){return "M"+(cx-20)+" 284V228Q"+(cx-20)+" 196 "+cx+" 190Q"+(cx+20)+" 196 "+(cx+20)+" 228V284"}
function rjScene(o){
  var g='',mob=o.mob,i,CX=[290,350,410,470];
  var Y=mob?12:0;
  var part=CX.map(rjCup).join("")+"M240 284H520V300H240Z";
  var partFill=CX.map(function(cx){return rjCup(cx)+"Z"}).join("")+"M240 284H520V300H240Z";
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g transform="translate(0 '+Y+')">';
  g+='<path class="base sD" d="M20 466H740"/>';
  g+='<g transform="translate(380 314) scale(1.18) translate(-380 -300)">';
  /* step 1: construction (dashed outline + dimension line) */
  g+='<path id="rjCad" class="blank" d="'+part+'"/>';
  g+='<g id="rjDim"><path class="dim" d="M240 318V336M520 318V336M240 330H520"/><path class="dim" d="M240 330l8-4v8zM520 330l-8-4v8z"/></g>';
  /* step 2: the mould: cavity plate (top), core plate (bottom), guide pins, cooling channels */
  g+='<g id="rjMould"><g id="rjTop"><path class="ins mD" d="M150 140H610V300H150Z"/><path class="ins mD" d="M150 180H610"/></g>';
  g+='<g id="rjBot"><path class="ins mD" d="M150 300H610V420H150Z"/><path class="ins mD" d="M150 384H610"/></g>';
  g+='<path id="rjPins" class="ins mD" d="M168 150H182V410H168ZM578 150H592V410H578Z"/>';
  var cool='';[320,440].forEach(function(x){cool+=ring(x,250,6)});[270,340,420,490].forEach(function(x){cool+=ring(x,350,7)});
  g+='<path id="rjCool" class="cool" d="'+cool+'"/></g>';
  /* step 3: nozzle, sprue, the melt filling from below */
  g+='<g id="rjNoz"><path class="noz" d="M360 100H400V110L388 124H372L360 110Z"/><path class="noz" d="M372 124V140H388V124"/></g>';
  g+='<path id="rjSprue" class="spr" d="M380 140V284"/>';
  g+='<clipPath id="rjClip"><rect id="rjFillR" x="230" y="300" width="300" height="0"/></clipPath>';
  g+='<path id="rjMelt" class="melt" clip-path="url(#rjClip)" d="'+partFill+'"/>';
  /* the part outline, solid (from step 3 on) */
  g+='<path id="rjPart" class="ins pD" d="'+part+'"/>';
  /* step 4: the finished part glows, a CT scan line passes */
  g+='<path id="rjGlow" class="glow" d="'+partFill+'"/>';
  g+='<g id="rjScan"><path class="scan" d="M0 170V316"/></g>';
  g+='</g></g>';
  function L(id,cl,a,b){return '<g id="'+id+'"><text class="t '+cl+'" x="20" y="'+(mob?40:36)+'">'+a+'</text><text class="t" x="20" y="'+(mob?72:60)+'">'+b+'</text></g>'}
  g+=mob?L("rjL1","s1","3D-KONSTRUKTION","MOLDFLOW-ANALYSE"):L("rjL1","s1","3D-TEILEKONSTRUKTION · MOLDFLOW-ANALYSE","PROTOTYPEN AUS DEM MODELSHOP VIENNA");
  g+=mob?L("rjL2","s2","FORMPLATTEN, KAVITÄTEN","KERNKÜHLUNG"):L("rjL2","s2","FORMPLATTEN, KAVITÄTEN, FÜHRUNGSSÄULEN","SMARTE KERNKÜHLUNG IM EIGENEN WERKZEUGBAU");
  g+=mob?L("rjL3","s1","DIREKT ANGESPRITZT","BIS 11.000 KN"):L("rjL3","s1","DÜSE AN, DIREKT ANGESPRITZT","ÜBER 100 SPRITZGUSSMASCHINEN, BIS 11.000 KN");
  g+=mob?L("rjL4","s2","COMPUTERTOMOGRAPHIE","3D-CNC-MESSTECHNIK"):L("rjL4","s2","COMPUTERTOMOGRAPHIE · 3D-CNC-MESSTECHNIK","DAS FERTIGE SERIENTEIL");
  g+='<g id="lb1"><text class="a" x="20" y="510">1 · ENTWICKLUNG UND DESIGN</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="510">2 · WERKZEUGBAU</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="510">3 · SPRITZGUSS</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="510">4 · MESSEN UND PRÜFEN</text></g>';
  return g+'</svg>';
}
function ring(cx,cy,r){return "M"+(cx+r)+" "+cy+"A"+r+" "+r+" 0 1 1 "+(cx-r)+" "+cy+"A"+r+" "+r+" 0 1 1 "+(cx+r)+" "+cy+"Z"}
function scene(){return rjScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),M:dl("#rjMould .mD"),P:dl(".pD"),cad:$("#rjCad",svg),dim:$("#rjDim",svg),cool:$("#rjCool",svg),mould:$("#rjMould",svg),
    noz:$("#rjNoz",svg),spr:$("#rjSprue",svg),fr:$("#rjFillR",svg),melt:$("#rjMelt",svg),glow:$("#rjGlow",svg),scan:$("#rjScan",svg),
    L1:$("#rjL1",svg),L2:$("#rjL2",svg),L3:$("#rjL3",svg),L4:$("#rjL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    /* 1: the dashed construction and its dimension */
    op(E.cad,b*seg(p,.02,.1)*(1-seg(p,.5,.56)));op(E.dim,b*seg(p,.08,.15)*(1-seg(p,.27,.32)));
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    /* 2: the mould draws in around the part, cooling channels appear */
    draw(E.M,b*seg(p,.27,.42));op(E.cool,b*seg(p,.4,.47));
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* 3: nozzle docks, melt fills from the strip up into the cavities, the part outline goes solid */
    op(E.noz,b*seg(p,.52,.56)*(1-seg(p,.76,.8)));
    if(E.noz)E.noz.setAttribute("transform","translate(0 "+(-6*(1-seg(p,.52,.58))).toFixed(1)+")");
    op(E.spr,b*seg(p,.57,.6)*(1-seg(p,.76,.8)));
    var f=seg(p,.58,.72);if(E.fr){E.fr.setAttribute("y",(300-112*f).toFixed(1));E.fr.setAttribute("height",(112*f+0.01).toFixed(1))}
    op(E.melt,b*seg(p,.58,.6)*(1-seg(p,.8,.88)));
    draw(E.P,b*seg(p,.5,.6));
    op(E.L3,b*seg(p,.56,.62)*(1-seg(p,.72,.75)));
    /* 4: the mould fades away, the part glows, a CT scan line crosses it */
    op(E.mould,1-.86*seg(p,.77,.85));
    op(E.glow,b*seg(p,.8,.88));
    var sp=seg(p,.82,.97);if(E.scan)E.scan.setAttribute("transform","translate("+(236+288*sp).toFixed(1)+" 0)");
    op(E.scan,b*seg(p,.82,.85)*(1-seg(p,.95,.98)));
    op(E.L4,b*seg(p,.79,.85));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}
