/* The story scene (BL/BY/DB): how a 2Morrow program works (2morrowinc.com/products, "How does it work?"), as ONE continuous
   engraved seascape that echoes the hero: a sea horizon with the sun just breaking it. Step 1 (Valued Goals): the sun rises
   and its rays draw in, the values that orient everything after. Step 2 (make room): thoughts, feelings and urges drift across
   as clouds; they are noticed, labelled, and pass, without the sun going anywhere. Step 3 (valued action): stepping stones
   across the water toward the sun, one practised step at a time, and the light lays its path on the sea. Every element is
   driven by the scrubbed story progress. Fine-line, in the site's own engraved language; no UI boxes. */
var SCW=760,SCH=520,HZ=300,SUX=520,SUR=58;
var CLD=[{y:178,s:1,w:"THOUGHTS",d:0},{y:96,s:.86,w:"FEELINGS",d:.3},{y:246,s:.78,w:"URGES",d:.6}];
var STN=[[118,486,40],[214,452,34],[300,424,29],[378,400,25],[442,378,21],[492,360,17],[530,346,14]];
function cloudPath(s){ /* an engraved cumulus outline, centred on 0,0 */
  return 'M'+(-110*s)+' '+(18*s)+'C'+(-130*s)+' '+(18*s)+' '+(-128*s)+' '+(-14*s)+' '+(-100*s)+' '+(-12*s)+'C'+(-98*s)+' '+(-40*s)+' '+(-58*s)+' '+(-46*s)+' '+(-42*s)+' '+(-26*s)+
    'C'+(-30*s)+' '+(-62*s)+' '+(28*s)+' '+(-64*s)+' '+(38*s)+' '+(-28*s)+'C'+(60*s)+' '+(-44*s)+' '+(98*s)+' '+(-30*s)+' '+(96*s)+' '+(-6*s)+'C'+(126*s)+' '+(-4*s)+' '+(128*s)+' '+(18*s)+' '+(104*s)+' '+(18*s)+'Z';}
function seaScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs><clipPath id="skyClip"><rect x="0" y="-40" width="'+SCW+'" height="'+(HZ+40)+'"/></clipPath></defs>';
  /* ---- base: engraved sky lines, the horizon, the sea hatching (closer lines spread wider: perspective) ---- */
  g+='<g id="scBase">';
  for(i=0;i<9;i++){var sy=34+i*29,x0=20+((i*53)%90),x1=740-((i*71)%120);g+='<path class="cg sD" d="M'+x0+' '+sy+'H'+x1+'"/>';}
  g+='<path class="sk sD" d="M0 '+HZ+'H'+SCW+'"/>';
  var yy=HZ+7,gp=5;for(i=0;yy<SCH;i++){var a=(i%3)*37;g+='<path class="bm sD" d="M'+(6+a%40)+' '+yy.toFixed(1)+'c40 -2 80 2 120 0s80 -2 120 0 80 2 120 0 80 -2 120 0 80 2 120 0 80 -2 120 0"/>';gp*=1.17;yy+=gp;}
  g+='</g>';
  /* ---- the sun: rings and hatching inside, clipped at the horizon ---- */
  g+='<g clip-path="url(#skyClip)"><g id="scSun" transform="translate('+SUX+' '+(HZ+SUR*.55)+')">';
  g+='<circle class="sun" r="'+SUR+'"/><circle class="sunr" r="'+(SUR+14)+'"/><circle class="sunr2" r="'+(SUR+30)+'"/>';
  for(i=-5;i<=5;i++){var hy=i*10,hw=Math.sqrt(Math.max(0,SUR*SUR-hy*hy))-4;if(hw>4)g+='<path class="sh" d="M'+(-hw).toFixed(1)+' '+hy+'H'+hw.toFixed(1)+'"/>';}
  g+='<g id="scRay">';for(i=0;i<13;i++){var an=Math.PI*(i/12),r0=SUR+42,r1=SUR+(i%2?66:84);g+='<path class="ray" d="M'+(Math.cos(an)*r0).toFixed(1)+' '+(-Math.sin(an)*r0).toFixed(1)+'L'+(Math.cos(an)*r1).toFixed(1)+' '+(-Math.sin(an)*r1).toFixed(1)+'"/>';}g+='</g>';
  g+='</g></g>';
  /* ---- the light on the water: a path of glints under the sun ---- */
  g+='<g id="scPath">';var gy=HZ+8,gg=5;for(i=0;gy<SCH-6;i++){var gw=10+i*6.5,off=(i%2?1:-1)*i*1.6;g+='<path class="gl" d="M'+(SUX-gw/2+off).toFixed(1)+' '+gy.toFixed(1)+'h'+gw.toFixed(1)+'"/>';gg*=1.17;gy+=gg;}g+='</g>';
  /* ---- thoughts, feelings, urges: clouds that drift across and pass ---- */
  g+='<g id="scCld">';CLD.forEach(function(cd,k){g+='<g class="cld" data-k="'+k+'"><path class="cl" d="'+cloudPath(cd.s)+'"/><path class="clh" d="M'+(-84*cd.s)+' '+(10*cd.s)+'H'+(84*cd.s)+'"/><text class="a" text-anchor="middle" x="0" y="'+(o.mob?2:-2)+'">'+cd.w+'</text></g>'});g+='</g>';
  /* ---- valued action: stepping stones across the water toward the sun ---- */
  g+='<g id="scStn">';STN.forEach(function(s,k){g+='<g class="stn"><ellipse class="st" cx="'+s[0]+'" cy="'+s[1]+'" rx="'+s[2]+'" ry="'+(s[2]*.3).toFixed(1)+'"/><path class="sth" d="M'+(s[0]-s[2]*.6)+' '+(s[1]-s[2]*.06).toFixed(1)+'H'+(s[0]+s[2]*.5)+'"/></g>'});g+='</g>';
  /* ---- step labels, in the clear band under the sky lines ---- */
  var ly=22;
  g+='<g id="lb1"><text class="a" x="20" y="'+ly+'">'+(o.mob?'VALUED GOALS':'VALUED GOALS · WHAT MATTERS MOST')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+ly+'">'+(o.mob?'NOTICE · MAKE ROOM':'NOTICE THEM · MAKE ROOM · LET THEM PASS')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+ly+'">'+(o.mob?'VALUED ACTION':'VALUED ACTION · IN THE REAL WORLD')+'</text></g>';
  return g+'</svg>';
}
function scene(){return seaScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),sun:$("#scSun",svg),rays:$$("#scRay .ray",svg),gl:$$("#scPath .gl",svg),
    cld:$$(".cld",svg),stn:$$(".stn",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var rise=seg(p,0,.3),ray=seg(p,.08,.3),cl=seg(p,.34,.66),act=seg(p,.68,.94);
    /* the sun: from just breaking the horizon to fully risen */
    var sy=HZ+SUR*.55-(SUR*1.9)*(.25+.75*rise*rise*(3-2*rise));
    E.sun.setAttribute("transform","translate("+SUX+" "+sy.toFixed(1)+")");op(E.sun,b);
    E.rays.forEach(function(r,i){op(r,b*seg(ray,i/16,i/16+.3))});
    /* the clouds cross in front of the sun from the left and drift on off to the right, each a little later */
    E.cld.forEach(function(el,k){var cd=CLD[k],u=Math.max(0,Math.min(1,(cl-cd.d*.55)/.45));
      var x=150+(SCW-300)*u,ov=b*Math.sin(Math.PI*Math.min(1,u))*.95;el.setAttribute("transform","translate("+x.toFixed(1)+" "+cd.y+")");op(el,ov);el.style.visibility=ov>.01?"visible":"hidden"});
    /* the light path builds as the stones are laid */
    E.gl.forEach(function(el,i){op(el,b*(.25+.75*rise)*(.35+.65*seg(act,i/30,i/30+.4)))});
    E.stn.forEach(function(el,i){var v=seg(act,i/9,i/9+.22);op(el,b*v);el.style.transform="translateY("+((1-v)*10).toFixed(1)+"px)"});
    op(E.l1,b*seg(p,.04,.12)*(1-seg(p,.28,.34)));op(E.l2,b*seg(p,.36,.42)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.72,.8));
  };
}
