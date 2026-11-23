/* the story scene (BL/BY/DB): one patch of the body's own tissue, kept on screen for all three steps.
   Step 1 (attack): an autoantibody binds the tissue with its two arms; its Fc stem engages an immune cell's Fc receptor, and
   inflammation flares where it binds. Step 2 (neutralize): the autoantibody's effector function is modulated (the Fc stem fades
   from red), the immune cell lets go and drifts off, and the inflammation subsides. Step 3 (protect): a protective antibody,
   untouched, still binds and neutralizes a virus. Source: Rhapsogen's description of its drug class (Catalio Capital portfolio
   page; Business Wire, Jan 2026): it modulates antibody effector function to blunt tissue damage and inflammation while preserving
   antibodies' capacity to neutralize viruses. Schematic; no mechanism beyond that is drawn. Driven by the scrubbed story progress. */
var RG={sy:340,bot:412,x0:20,x1:700,ab:[400,272,176],cell:[548,118,64],vir:[172,112,32],pab:[172,166,214,286]};
function rgTop(x){return RG.sy+4*Math.sin(x*.023)+2.5*Math.sin(x*.061+1)}
function rgRand(i){var x=Math.sin(i*127.1+311.7)*43758.5453;return x-Math.floor(x)}
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,x,R=RG;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 720 440" aria-hidden="true">';
  g+='<defs><radialGradient id="rinf" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#f0353b" stop-opacity=".55"/><stop offset="1" stop-color="#f0353b" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="rcalm" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#3fb8ea" stop-opacity=".35"/><stop offset="1" stop-color="#3fb8ea" stop-opacity="0"/></radialGradient></defs>';
  /* tissue: surface, cell walls, nuclei, lower boundary */
  g+='<g id="scBase">';
  var s='';for(x=R.x0;x<=R.x1;x+=6)s+=(s?'L':'M')+f(x)+' '+f(rgTop(x));
  g+='<path class="rb sD" d="'+s+'"/><path class="nt sD" d="M'+R.x0+' '+R.bot+'L'+R.x1+' '+R.bot+'"/>';
  for(x=R.x0+58,i=0;x<R.x1-20;x+=86,i++){var wob=(rgRand(i)-.5)*10;
    g+='<path class="nt sD" d="M'+f(x)+' '+f(rgTop(x)+3)+'Q'+f(x+wob)+' '+f((R.sy+R.bot)/2)+' '+f(x-wob*.4)+' '+(R.bot-2)+'"/>';
    var nx=x-43+(rgRand(i+9)-.5)*12,ny=(R.sy+R.bot)/2+4+(rgRand(i+19)-.5)*8;if(nx>R.x0+20)g+='<ellipse class="nu sD" cx="'+f(nx)+'" cy="'+f(ny)+'" rx="11" ry="7.5"/>'}
  g+='<text class="t" x="'+(R.x0+4)+'" y="'+(R.bot+28)+'">'+(mob?'SELF TISSUE':'THE BODY’S OWN TISSUE')+'</text>';
  g+='</g>';
  /* inflammation where the autoantibody binds */
  g+='<g id="inf"><ellipse cx="'+R.ab[0]+'" cy="'+(R.sy-4)+'" rx="150" ry="56" fill="url(#rinf)"/>';
  for(i=0;i<9;i++){var a=Math.PI*(1.08+.84*i/8),r0=46+rgRand(i+3)*14,cx=R.ab[0]+Math.cos(a)*r0*1.5,cy=R.sy+Math.sin(a)*r0*.75;
    g+='<path class="sp" d="M'+f(cx)+' '+f(cy)+'l'+f(Math.cos(a)*10)+' '+f(Math.sin(a)*7)+'"/>'}
  g+='</g><ellipse id="calm" cx="'+R.ab[0]+'" cy="'+R.ab[2]+'" rx="44" ry="44" fill="url(#rcalm)"/>';
  /* the autoantibody, inverted: arms bound to the tissue, Fc stem up */
  var A=R.ab,tl=[A[0]-44,rgTop(A[0]-44)-5],tr=[A[0]+44,rgTop(A[0]+44)-5];
  g+='<g id="aab"><path class="arm sA" d="M'+f(tl[0])+' '+f(tl[1])+'L'+A[0]+' '+A[1]+'L'+f(tr[0])+' '+f(tr[1])+'"/>'+
     '<path class="arml sA" d="M'+f(tl[0]+5)+' '+f(tl[1]-2)+'L'+f(A[0]+2)+' '+f(A[1]+8)+'"/><path class="arml sA" d="M'+f(tr[0]-5)+' '+f(tr[1]-2)+'L'+f(A[0]-2)+' '+f(A[1]+8)+'"/>'+
     '<path class="fc sA" id="afc" d="M'+A[0]+' '+A[1]+'L'+A[0]+' '+A[2]+'"/>'+
     '<circle class="ep" cx="'+f(tl[0])+'" cy="'+f(tl[1]+5)+'" r="5.2"/><circle class="ep" cx="'+f(tr[0])+'" cy="'+f(tr[1]+5)+'" r="5.2"/></g>';
  g+='<text class="a w" id="aablab" x="'+(A[0]+26)+'" y="'+(A[1]-34)+'">AUTOANTIBODY</text>';
  /* the immune cell, with its Fc receptor reaching for the stem */
  var C=R.cell,dx=A[0]-C[0],dy=A[2]-C[1],dl=Math.hypot(dx,dy),ux=dx/dl,uy=dy/dl,ex=C[0]+ux*C[2],ey=C[1]+uy*C[2],rx=A[0]-ux*14,ry=A[2]-uy*14;
  g+='<g id="cell"><circle class="cm sD2" cx="'+C[0]+'" cy="'+C[1]+'" r="'+C[2]+'"/><path class="cn sD2" d="M'+(C[0]-22)+' '+(C[1]-4)+'C'+(C[0]-22)+' '+(C[1]-26)+' '+(C[0]+20)+' '+(C[1]-26)+' '+(C[0]+20)+' '+(C[1]-6)+'C'+(C[0]+20)+' '+(C[1]+6)+' '+(C[0]+6)+' '+(C[1]+4)+' '+(C[0])+' '+(C[1]+10)+'C'+(C[0]-8)+' '+(C[1]+18)+' '+(C[0]-22)+' '+(C[1]+14)+' '+(C[0]-22)+' '+(C[1]-4)+'Z"/>'+
     '<path class="rc sD2" id="rcp" d="M'+f(ex)+' '+f(ey)+'L'+f(rx)+' '+f(ry)+'"/>'+
     '<text class="a" x="'+(C[0]-C[2])+'" y="'+(C[1]-C[2]-16)+'">IMMUNE CELL</text></g>';
  /* step 3: a protective antibody, upright, neutralizing a virus */
  var V=R.vir,P=R.pab;
  g+='<g id="prot"><circle class="vr sP" cx="'+V[0]+'" cy="'+V[1]+'" r="'+V[2]+'"/>';
  for(i=0;i<12;i++){var aa=i*Math.PI/6+.26,x0=V[0]+Math.cos(aa)*V[2],y0=V[1]+Math.sin(aa)*V[2],x1=V[0]+Math.cos(aa)*(V[2]+9),y1=V[1]+Math.sin(aa)*(V[2]+9);
    if(Math.sin(aa)>.75)continue;g+='<path class="vs sP" d="M'+f(x0)+' '+f(y0)+'L'+f(x1)+' '+f(y1)+'"/><circle class="vh" cx="'+f(x1)+'" cy="'+f(y1)+'" r="2.4"/>'}
  g+='<path class="arm sP" d="M'+(P[0]-36)+' '+P[1]+'L'+P[0]+' '+P[2]+'L'+(P[0]+36)+' '+P[1]+'"/><path class="fc sP" d="M'+P[0]+' '+P[2]+'L'+P[0]+' '+P[3]+'"/>'+
     '<text class="a" x="'+(V[0]+V[2]+22)+'" y="'+(V[1]+5)+'">VIRUS</text></g>';
  /* step labels, one at a time, in the clear band at top left */
  var lx=24,ly=40;
  g+='<g id="lb0"><text class="a r" x="'+lx+'" y="'+ly+'">'+(mob?'AUTOANTIBODY ATTACK':'AN AUTOANTIBODY ATTACKS THE TISSUE')+'</text></g>';
  g+='<g id="lb1"><text class="a b" x="'+lx+'" y="'+ly+'">'+(mob?'EFFECTOR FUNCTION QUIETED':'EFFECTOR FUNCTION MODULATED')+'</text></g>';
  g+='<g id="lb2"><text class="a b" x="'+lx+'" y="'+ly+'">'+(mob?'PROTECTION PRESERVED':'PROTECTIVE ANTIBODIES STILL WORK')+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),aab:dl("#aab .sA"),ep:$$("#aab .ep",svg),afc:$("#afc",svg),alab:$("#aablab",svg),
    cell:$("#cell",svg),cd:dl("#cell .sD2"),ctx:$("#cell text",svg),rcp:$("#rcp",svg),inf:$("#inf",svg),sp:$$("#inf .sp",svg),calm:$("#calm",svg),
    prot:$("#prot",svg),pd:dl("#prot .sP"),vh:$$("#prot .vh",svg),ptx:$("#prot text",svg),l0:$("#lb0",svg),l1:$("#lb1",svg),l2:$("#lb2",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function mix(a,b,t){return 'rgb('+a.map(function(c,i){return Math.round(c+(b[i]-c)*t)}).join(',')+')'}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,.0,.22),s2=seg(p,.38,.6),s3=seg(p,.68,.9);
    /* step 1: the autoantibody draws in on the tissue, the immune cell engages, inflammation flares */
    var a1=Math.max(b*.999,s1);draw(E.aab,a1);E.ep.forEach(function(c){op(c,a1)});op(E.alab,a1*(1-seg(p,.62,.7)));
    var c1=seg(p,.04,.24);draw(E.cd,Math.max(c1,b*.999));op(E.ctx,c1||b);
    op(E.inf,b*(.55+.45*c1)*(1-s2));
    E.sp.forEach(function(el,i){el.style.opacity=(b*(1-s2)*(.5+.5*Math.sin(p*38+i*1.7))).toFixed(3)});
    /* step 2: the Fc stem fades from red, the receptor lets go, the cell drifts off, a calm glow on the quieted stem */
    E.afc.style.stroke=mix([240,53,59],[92,112,128],s2);
    E.rcp.style.opacity=(1-seg(p,.4,.5)).toFixed(3);
    E.cell.setAttribute("transform","translate("+(34*s2).toFixed(1)+" "+(-12*s2).toFixed(1)+")");op(E.cell,1-.55*s2);
    op(E.calm,b*Math.sin(Math.PI*Math.min(1,s2*1.15))*.9+b*.25*s2);
    /* step 3: a protective antibody neutralizes a virus, fully functional */
    op(E.prot,b*Math.min(1,s3*4));draw(E.pd,s3);E.vh.forEach(function(c){op(c,s3)});op(E.ptx,seg(p,.8,.9));
    op(E.l0,b*(1-seg(p,.3,.37)));op(E.l1,b*seg(p,.38,.45)*(1-seg(p,.64,.69)));op(E.l2,b*seg(p,.7,.77));
  };
}
