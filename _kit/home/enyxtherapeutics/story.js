/* The story scene (BL/BY/DB): ONE engraved section of trabecular bone, kept on screen for all three steps, with the blood
   stream running along its lower edge. Step 1: ethanol enters and, without working ALDH2, acetaldehyde builds up in the
   stream. Step 2: acetaldehyde suppresses the osteoblast progenitors at the strut surfaces and the trabeculae thin and
   break — the osteopenia the NIH abstract quantifies by micro-CT. Step 3: one intravenous dose of ENX03 (AAVrh.10hALDH2)
   is taken up, the liver makes normal ALDH2, the acetaldehyde is cleared and the struts thicken again. Every element is
   driven by the scrubbed story progress. Source: NIH RePORTER abstract 2R42AA028465-02A1. */
var SCW=760,SCH=520;
/* a seeded trabecular lattice: nodes on a jittered grid, joined to their neighbours by struts */
function lattice(){
  var s=20250827,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff};
  var X0=40,X1=720,Y0=30,Y1=368,cols=8,rows=6,nd=[],i,j;
  for(j=0;j<rows;j++)for(i=0;i<cols;i++){
    var jx=(R()-.5)*62,jy=(R()-.5)*50;
    nd.push({x:X0+(X1-X0)*(i/(cols-1))+jx,y:Y0+(Y1-Y0)*(j/(rows-1))+jy,c:i,r:j});
  }
  var st=[];
  nd.forEach(function(a,ai){nd.forEach(function(b,bi){if(bi<=ai)return;
    var dc=b.c-a.c,dr=b.r-a.r;
    if(Math.abs(dc)>1||Math.abs(dr)>1)return;
    if(dc===0&&dr===0)return;
    if(dc!==0&&dr!==0&&R()>.5)return;              /* keep only some diagonals */
    if(dc!==0&&dr===0&&R()>.86)return;              /* a few horizontal gaps */
    var mx=(a.x+b.x)/2+(R()-.5)*34,my=(a.y+b.y)/2+(R()-.5)*30;
    st.push({a:a,b:b,mx:mx,my:my,w:9+R()*9,v:dr!==0?1:0,k:R()});
  })});
  return {nd:nd,st:st};
}
var LAT=lattice();
function memScene(o){
  var f=function(n){return (+n).toFixed(1)},g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><radialGradient id="glw" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffe2c7" stop-opacity=".5"/><stop offset="1" stop-color="#ffe2c7" stop-opacity="0"/></radialGradient>'+
     '<clipPath id="bclip"><rect x="24" y="14" width="712" height="376"/></clipPath></defs>';
  /* ---- base: the cortical shell edges, the marrow space, the blood stream ---- */
  g+='<g id="scBase">';
  g+='<path class="cort sD" d="M28 14V390"/><path class="cort sD" d="M732 14V390"/>';
  g+='<path class="strm sD" d="M24 452H736"/><path class="strm sD" d="M24 496H736"/>';
  g+='<text class="t" x="28" y="'+(SCH-78)+'">BLOOD STREAM</text>';
  g+='<text class="t" x="'+(SCW-28)+'" y="9" text-anchor="end">TRABECULAR BONE</text>';
  g+='</g>';
  /* ---- the lattice: one path per strut, drawn and then thinned / rebuilt ---- */
  g+='<g id="scBone" clip-path="url(#bclip)">';
  LAT.st.forEach(function(t,i){
    g+='<path class="tb" data-i="'+i+'" data-v="'+t.v+'" data-k="'+t.k.toFixed(3)+'" data-w="'+t.w.toFixed(2)+'" d="M'+f(t.a.x)+' '+f(t.a.y)+'Q'+f(t.mx)+' '+f(t.my)+' '+f(t.b.x)+' '+f(t.b.y)+'"/>';
  });
  g+='</g>';
  /* ---- moving parts ---- */
  g+='<g id="scMove">';
  /* ethanol drops entering, acetaldehyde building up, both in the stream */
  for(i=0;i<9;i++)g+='<g class="eth" id="e_'+i+'"><circle r="7"/><path class="ehx" d="M-3.4 0h6.8M0 -3.4v6.8"/></g>';
  for(i=0;i<11;i++)g+='<circle class="ace" id="a_'+i+'" r="5.6"/>';
  /* the vector dose and the ALDH2 enzyme it makes */
  g+='<g class="vec" id="vec"><path class="vb" d="M0 -13L11.3 -6.5V6.5L0 13L-11.3 6.5V-6.5Z"/><path class="vh" d="M-11.3 -6.5L0 0L11.3 -6.5M0 0V13"/></g>';
  g+='<g class="enz" id="enz"><path class="eb" d="M-52 2q-4 -22 16 -28q22 -7 40 -1q20 7 18 24q-2 19 -22 24q-24 6 -42 -3q-8 -5 -10 -16z"/><path class="eh" d="M-34 -12q22 -8 44 2M-36 10q26 -7 48 3"/><text class="nl" x="-2" y="7" text-anchor="middle">ALDH2</text></g>';
  g+='<circle class="glow" id="gEnz" r="86" fill="url(#glw)"/>';
  g+='</g>';
  /* ---- step labels (fade with their step) ---- */
  g+='<g id="lb1"><text class="a" x="'+(o.mob?120:112)+'" y="440" text-anchor="start">ETHANOL</text><text class="a" x="'+(SCW-30)+'" y="440" text-anchor="end">ACETALDEHYDE</text></g>';
  g+='<g id="lb2"><text class="a" x="380" y="'+(o.mob?422:418)+'" text-anchor="middle">STRUTS THIN AND BREAK</text></g>';
  g+='<g id="lb3"><text class="a" x="380" y="'+(o.mob?422:418)+'" text-anchor="middle">BONE VOLUME RESTORED</text><text class="a" x="'+(SCW-30)+'" y="440" text-anchor="end">CLEARED</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var tb=$$(".tb",svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;
    return {el:p,L:L,w:+p.getAttribute("data-w"),v:+p.getAttribute("data-v"),k:+p.getAttribute("data-k")}});
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),tb:tb,
    eth:[],ace:[],vec:$("#vec",svg),enz:$("#enz",svg),gEnz:$("#gEnz",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),mv:$("#scMove",svg)};
  var i;for(i=0;i<9;i++)E.eth.push($("#e_"+i,svg));for(i=0;i<11;i++)E.ace.push($("#a_"+i,svg));
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    /* the lattice draws in first, at full thickness */
    var grow=seg(p,0,.16);
    /* step 2: the struts thin, the thinnest break; step 3: they thicken again (never past where they began) */
    var thin=seg(p,.34,.56),heal=seg(p,.72,.92);
    E.tb.forEach(function(t,i){
      var loss=thin*(1-heal)*(.42+.5*t.k);
      var w=Math.max(1.2,t.w*(1-loss));
      t.el.style.strokeWidth=w.toFixed(2);
      var gi=Math.min(1,Math.max(0,grow*E.tb.length*1.6-i*.5));
      /* the thinnest struts lose their middle: the dash gap opens */
      var brk=Math.min(.9,Math.max(0,(loss-.46)*2.2));
      if(brk>0){var seg1=t.L*(.5-brk*.3);t.el.style.strokeDasharray=seg1+" "+(t.L*brk*.6)+" "+seg1;t.el.style.strokeDashoffset="0"}
      else{t.el.style.strokeDasharray=t.L+" "+t.L;t.el.style.strokeDashoffset=(t.L*(1-gi)).toFixed(1)}
      t.el.style.opacity=(b*(brk>0?1:gi)).toFixed(3);
    });
    /* ethanol drifts in from the left; acetaldehyde fills the stream behind it and is cleared in step 3 */
    var eIn=seg(p,.06,.3),aIn=seg(p,.16,.44),aOut=seg(p,.76,.9);
    E.eth.forEach(function(el,i){
      var ph=(eIn*1.5-i*.08);var x=-40+ph*(SCW*.55+90),y=474+Math.sin(i*2.1)*12;
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");
      op(el,b*Math.min(1,Math.max(0,ph*3))*(1-seg(p,.42,.56)));
    });
    E.ace.forEach(function(el,i){
      var ph=Math.min(1,Math.max(0,aIn*1.6-i*.08));
      var x=SCW*.42+i*26,y=474+Math.sin(i*1.7+1)*13-ph*0;
      el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1));
      op(el,b*ph*(1-Math.min(1,Math.max(0,aOut*1.5-(10-i)*.07))));
    });
    /* the dose arrives, then the enzyme appears and glows while it works */
    var vIn=seg(p,.6,.72),vGone=seg(p,.72,.78);
    E.vec.setAttribute("transform","translate("+(-30+vIn*(SCW*.3+60)).toFixed(1)+" "+(474).toFixed(1)+") rotate("+(vIn*210).toFixed(1)+")");
    op(E.vec,b*seg(p,.58,.64)*(1-vGone));
    var en=seg(p,.74,.84);
    E.enz.setAttribute("transform","translate("+(SCW*.33).toFixed(1)+" "+(474).toFixed(1)+") scale("+(1.15+.35*en).toFixed(3)+")");
    op(E.enz,b*en);
    E.gEnz.setAttribute("cx",(SCW*.33).toFixed(1));E.gEnz.setAttribute("cy","474");E.gEnz.setAttribute("r","108");
    op(E.gEnz,b*en*.9);
    op(E.l1,b*seg(p,.2,.28)*(1-seg(p,.33,.4)));op(E.l2,b*seg(p,.5,.58)*(1-seg(p,.66,.72)));op(E.l3,b*seg(p,.86,.93));
  };
}
