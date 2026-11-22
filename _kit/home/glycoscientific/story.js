/* The story scene (BL/BY/DB): how GlycoScientific's isotope-labelled glycoprotein standards work
   (glycoscientific.com /pages/igg-glycoprotein-quantitation-standards; the 2015 iGlycoMab release; Zhou et al., Electrophoresis
   2016), as ONE continuous fine-line scene in the glycobiologist's own notation (SNFG symbols: blue square GlcNAc, green circle
   mannose, yellow circle galactose, red triangle fucose). Step 1: an IgG with its biantennary, core-fucosylated N-glycans on the
   Fc. Step 2: the heavy standard, the same antibody with 15N-labelled glycans, joins the sample before processing. Step 3: the mass
   spectrum: each glycoform appears as a light/heavy pair, shifted by one dalton per 15N GlcNAc (+4 Da for G0F, G1F and G2F, which
   carry four GlcNAc each); the ratio gives the amount. Peak heights are schematic. Every element follows the scrubbed progress. */
var SCW=760,SCH=520,AX=430;
function igg(cx,cy,cls){
  var g='',dm=function(x,y,a){return '<rect class="'+cls+' sD" x="'+(x-12).toFixed(1)+'" y="'+(y-23).toFixed(1)+'" width="24" height="46" rx="11" transform="rotate('+a+' '+x.toFixed(1)+' '+y.toFixed(1)+')"/>'};
  g+=dm(cx-13,cy+30,0)+dm(cx+13,cy+30,0)+dm(cx-13,cy+80,0)+dm(cx+13,cy+80,0);
  [-1,1].forEach(function(s){var a=s*40,r=a*Math.PI/180,ux=Math.sin(r),uy=-Math.cos(r),px=Math.cos(r),py=Math.sin(r),ox=cx+s*10,oy=cy-6;
    [34,82].forEach(function(d){g+=dm(ox+ux*d+px*13,oy+uy*d+py*13,a)+dm(ox+ux*d-px*13,oy+uy*d-py*13,a)})});
  g+='<path class="'+cls+' sD" d="M'+(cx-8)+' '+(cy+7)+'C'+(cx-8)+' '+(cy-2)+' '+(cx-6)+' '+(cy-6)+' '+(cx-12)+' '+(cy-12)+'M'+(cx+8)+' '+(cy+7)+'C'+(cx+8)+' '+(cy-2)+' '+(cx+6)+' '+(cy-6)+' '+(cx+12)+' '+(cy-12)+'"/>';
  return g;
}
/* a biantennary core-fucosylated N-glycan growing from (x0,y0) in direction dir; nGal: 0, 1 or 2 galactoses; hv: 15N standard */
function glycan(x0,y0,dir,nGal,hv){
  var d=17,s=6.2,P=function(i,j){return [x0+dir*d*i,y0+d*j]},g='',L=[];
  var n1=P(1,0),fu=P(1,1),n2=P(2,0),m3=P(3,0),m4=P(4,-.85),m5=P(4,.85),g6=P(5,-.85),g7=P(5,.85),a8=P(6,-.85),a9=P(6,.85);
  L.push([[x0,y0],n1],[n1,fu],[n1,n2],[n2,m3],[m3,m4],[m3,m5],[m4,g6],[m5,g7]);if(nGal>0)L.push([g6,a8]);if(nGal>1)L.push([g7,a9]);
  L.forEach(function(l){g+='<path class="lk2" d="M'+l[0][0]+' '+l[0][1]+'L'+l[1][0]+' '+l[1][1]+'"/>'});
  var sq=function(p){return '<rect class="gn'+(hv?' hv':'')+'" x="'+(p[0]-s)+'" y="'+(p[1]-s)+'" width="'+2*s+'" height="'+2*s+'"/>'},
      ci=function(p,c){return '<circle class="'+c+(hv?' hv':'')+'" cx="'+p[0]+'" cy="'+p[1]+'" r="'+(s+.6)+'"/>'};
  g+=sq(n1)+sq(n2)+sq(g6)+sq(g7)+ci(m3,"mn")+ci(m4,"mn")+ci(m5,"mn");
  g+='<path class="fu'+(hv?' hv':'')+'" d="M'+fu[0]+' '+(fu[1]-s-1)+'L'+(fu[0]+s+1)+' '+(fu[1]+s)+'H'+(fu[0]-s-1)+'Z"/>';
  if(nGal>0)g+=ci(a8,"gl");if(nGal>1)g+=ci(a9,"gl");
  return g;
}
function peak(x,h,cls){var w=9;return '<path class="'+cls+'" d="M'+(x-3*w)+' '+AX+'C'+(x-1.4*w)+' '+AX+' '+(x-.9*w)+' '+(AX-h)+' '+x+' '+(AX-h)+'S'+(x+1.4*w)+' '+AX+' '+(x+3*w)+' '+AX+'"/>'}
var PKS=[{x:212,h:118,n:"G0F"},{x:404,h:148,n:"G1F"},{x:596,h:66,n:"G2F"}];
function glyScene(o){
  var g='',m=o.mob;
  g+='<svg class="'+(m?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  var Z='<g transform="translate(-76 4) scale(1.2)">';
  g+='<g id="scBase">'+Z+igg(212,96,"dmn")+'</g>'+
     '<path class="ax sD" d="M40 '+AX+'H730"/>'+[0,1,2,3,4,5,6,7,8,9,10,11,12].map(function(i){var x=60+i*52;return '<path class="ax sD" d="M'+x+' '+AX+'v5"/>'}).join("")+
     '<text class="t" x="730" y="'+(AX+30)+'" text-anchor="end">m/z</text>'+
     '<text class="t" x="40" y="'+(AX-96)+'">'+(m?'MS':'MASS SPECTRUM')+'</text></g>';
  g+='<g id="scGs">'+Z+glycan(186,126,-1,2,0)+glycan(238,126,1,2,0)+'</g><text class="t" x="179" y="'+(m?268:262)+'" text-anchor="middle">'+(m?'SAMPLE':'IgG · SAMPLE')+'</text></g>';
  g+='<g id="scStd">'+Z+'<g>'+igg(560,96,"dmh")+glycan(534,126,-1,2,1)+glycan(586,126,1,2,1)+'</g></g>'+
     '<text class="a" x="597" y="'+(m?268:262)+'" text-anchor="middle">'+(m?'¹⁵N STD':'¹⁵N STANDARD')+'</text></g>';
  g+='<g id="scPk">';
  PKS.forEach(function(k){g+='<g class="pr">'+peak(k.x,k.h,"pl")+peak(k.x+24,108,"ph")+'</g>'+
    '<text class="t c" x="'+(k.x+12)+'" y="'+(AX+30)+'" text-anchor="middle">'+k.n+'</text>'});
  g+='<path class="br" d="M212 '+(AX-126)+'V'+(AX-134)+'H236V'+(AX-114)+'"/><text class="a" x="244" y="'+(AX-130)+'">+4 Da</text>';
  var lx=m?470:500;
  g+='<g class="lg"><rect class="lgl" x="'+lx+'" y="'+(AX-152)+'" width="14" height="3"/><text class="t" x="'+(lx+22)+'" y="'+(AX-147)+'">'+(m?'LIGHT':'LIGHT · SAMPLE')+'</text>'+
     '<rect class="lgh" x="'+lx+'" y="'+(AX-130)+'" width="14" height="3"/><text class="t" x="'+(lx+22)+'" y="'+(AX-125)+'">'+(m?'HEAVY':'HEAVY · ¹⁵N STANDARD')+'</text></g>';
  g+='</g>';
  var ly=SCH-12;
  g+='<g id="lb1"><text class="a" x="40" y="'+ly+'">'+(m?'Fc N-GLYCANS · ASN297':'BIANTENNARY Fc N-GLYCANS · ASN297')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="40" y="'+ly+'">'+(m?'STANDARD ADDED FIRST':'STANDARD ADDED BEFORE PROCESSING')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="40" y="'+ly+'">'+(m?'LIGHT : HEAVY = AMOUNT':'RATIO OF EACH PAIR = AMOUNT · SCHEMATIC')+'</text></g>';
  return g+'</svg>';
}
function scene(){return glyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),gs:$("#scGs",svg),std:$("#scStd",svg),stdIn:$("#scStd>g>g",svg),
    pk:$("#scPk",svg),pr:$$("#scPk .pr",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var gin=seg(p,.02,.16),std=seg(p,.34,.52),spc=seg(p,.64,.84);
    op(E.gs,b*gin*(1-.5*spc));
    op(E.std,b*std*(1-.5*spc));E.stdIn.setAttribute("transform","translate("+(70*(1-std)).toFixed(1)+" 0)");
    op(E.pk,b*seg(p,.6,.68));
    E.pr.forEach(function(el,i){var s=seg(spc,i*.12,.6+i*.12);el.setAttribute("transform","translate(0 "+AX+") scale(1 "+Math.max(s,.001).toFixed(3)+") translate(0 -"+AX+")")});
    op(E.l1,b*seg(p,.1,.18)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.44,.52)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.8,.88));
  };
}
