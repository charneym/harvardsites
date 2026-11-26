/* The story scene (BL/BY/DB): how a Feller cord is made (feller-at.com > Products "Global standards" and Quality pages),
   drawn as fine-line technical figures in one frame, the step label band at the top and the figure below it.
   Step 1 (Extrude): a copper conductor runs through the extrusion die and leaves insulated; its cross-section, strands
     inside the insulation ring.
   Step 2 (Cable): three insulated cores (L, N, PE) laid up inside the co-extruded jacket, in cross-section.
   Step 3 (Mould): the face of a moulded IEC 60320 C13 connector, to Feller's own data sheet (23 x 15.8 mm, E, N, L).
   Step 4 (Test): the high-voltage test: the voltage ramps up and holds; the cord passes. */
var SCW=760,SCH=520;
function circ(cx,cy,r){return "M"+(cx-r)+" "+cy+"a"+r+" "+r+" 0 1 0 "+(2*r)+" 0a"+r+" "+r+" 0 1 0 "+(-2*r)+" 0"}
function flScene(o){
  var g='',mob=o.mob,i,k;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* a constant frame: corner ticks */
  g+='<path class="frm sD" d="M20 120V100H40M740 120V100H720M20 470V490H40M740 470V490H720"/>';
  /* ---- step 1: extrusion. side view at the top of the figure, cross-section below ---- */
  g+='<g id="fx1">';
  g+='<path class="cu sA" d="M40 190H300"/>';                                          /* bare conductor */
  g+='<path class="edge sA" d="M300 150H380L404 172V208L380 230H300Z"/>';               /* extrusion head */
  g+='<path class="edge sA" d="M330 150V124H360V150"/>';                                /* compound feed */
  g+='<path class="ins sA" d="M404 180H720M404 200H720"/><path class="cu sA" d="M404 190H720"/>';
  var cs='';var pts=[[0,0]];for(k=0;k<6;k++)pts.push([Math.cos(k*Math.PI/3)*22,Math.sin(k*Math.PI/3)*22]);for(k=0;k<12;k++)pts.push([Math.cos((k+.5)*Math.PI/6)*42,Math.sin((k+.5)*Math.PI/6)*42]);
  pts.forEach(function(p){cs+='<path class="str" d="'+circ(380+p[0],360+p[1],10.5)+'"/>'});
  g+='<g id="fx1s">'+cs+'</g><path class="ring sA" d="'+circ(380,360,72)+'"/>';
  g+='</g>';
  /* ---- step 2: three cores in the jacket ---- */
  g+='<g id="fx2"><path class="jk sB" d="'+circ(380,310,150)+'"/><path class="jk2 sB" d="'+circ(380,310,134)+'"/>';
  var cores=[[380,240,"cL"],[319,345,"cN"],[441,345,"cE"]];
  cores.forEach(function(c){g+='<path class="core '+c[2]+' sB" d="'+circ(c[0],c[1],56)+'"/><path class="cond" d="'+circ(c[0],c[1],30)+'"/>'});
  g+='</g>';
  /* ---- step 3: the C13 face, 14 px per mm ---- */
  var S=14,cx=380,cy=316,hw=11.5*S,hh=7.9*S,ch=3*S;
  var fo="M"+(cx-hw)+" "+(cy+hh)+"V"+(cy-hh+ch)+"L"+(cx-hw+ch)+" "+(cy-hh)+"H"+(cx+hw-ch)+"L"+(cx+hw)+" "+(cy-hh+ch)+"V"+(cy+hh)+"Z";
  function slot(x,y,w,h){return "M"+(x-w/2)+" "+(y-h/2)+"H"+(x+w/2)+"V"+(y+h/2)+"H"+(x-w/2)+"Z"}
  g+='<g id="fx3"><path class="edge sC" d="'+fo+'"/>'+
     '<path class="slot sC" d="'+slot(cx,cy-2.2*S,2.5*S,4*S)+'"/><path class="slot sC" d="'+slot(cx-7*S,cy+1.8*S,2.5*S,5*S)+'"/><path class="slot sC" d="'+slot(cx+7*S,cy+1.8*S,2.5*S,5*S)+'"/>'+
     '<path class="dim sC" d="M'+(cx-hw)+' '+(cy+hh+16)+'V'+(cy+hh+40)+'M'+(cx+hw)+' '+(cy+hh+16)+'V'+(cy+hh+40)+'M'+(cx-hw)+' '+(cy+hh+30)+'H'+(cx-60)+'M'+(cx+60)+' '+(cy+hh+30)+'H'+(cx+hw)+'"/>'+
     '<text class="dn" x="'+cx+'" y="'+(cy+hh+36)+'" text-anchor="middle">23 mm</text></g>';
  /* ---- step 4: the high-voltage test ---- */
  g+='<g id="fx4"><path class="axis" d="M120 430H660M120 430V170"/>'+
     '<path class="hv sD4" d="M120 430L250 210H560"/><path class="hold sD4" d="M560 210L600 430"/>'+
     '<path class="okc sD4" d="M622 168L638 184L668 148"/></g>';
  /* ---- labels: one band at the top, clear of every figure (DR3) ---- */
  var T=function(id,a,b){return '<g id="'+id+'"><text class="a" x="40" y="'+(mob?62:58)+'">'+a+'</text><text class="t" x="40" y="'+(mob?90:82)+'">'+b+'</text></g>'};
  g+=T('fl1','1 · EXTRUDE',mob?'COPPER IN, INSULATED OUT':'2 LINES · 4 EXTRUDERS · ONLINE DIAMETER CONTROL');
  g+=T('fl2','2 · CABLE',mob?'L · N · PE IN THE JACKET':'3 CORES · 28–10 AWG · CO-EXTRUDED JACKET');
  g+=T('fl3','3 · MOULD',mob?'IEC 60320 C13 FACE':'IEC 60320 C13 · E · N · L · 23 × 15.8 MM');
  g+=T('fl4','4 · TEST',mob?'SHORT · OPEN · HIGH VOLTAGE':'SHORT · OPEN CIRCUIT · HIGH-VOLTAGE FLASHOVER');
  return g+'</svg>';
}
function scene(){return flScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),A:dl(".sA"),B:dl(".sB"),C:dl(".sC"),D:dl(".sD4"),g1:$("#fx1",svg),g1s:$("#fx1s",svg),g2:$("#fx2",svg),g3:$("#fx3",svg),g4:$("#fx4",svg),
    dn:$(".dn",svg),conds:$$("#fx2 .cond",svg),l1:$("#fl1",svg),l2:$("#fl2",svg),l3:$("#fl3",svg),l4:$("#fl4",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var v1=b*(1-seg(p,.22,.25)),v2=b*seg(p,.26,.29)*(1-seg(p,.47,.5)),v3=b*seg(p,.51,.54)*(1-seg(p,.72,.75)),v4=b*seg(p,.76,.79);
    op(E.g1,v1);draw(E.A,b*seg(p,0,.14));op(E.g1s,b*seg(p,.08,.15));
    op(E.g2,v2);draw(E.B,b*seg(p,.27,.4));E.conds.forEach(function(c){op(c,b*seg(p,.33,.4))});
    op(E.g3,v3);draw(E.C,b*seg(p,.52,.65));op(E.dn,b*seg(p,.62,.66));
    op(E.g4,v4);draw(E.D,b*seg(p,.78,.92));
    op(E.l1,v1);op(E.l2,v2);op(E.l3,v3);op(E.l4,v4);
  };
}
