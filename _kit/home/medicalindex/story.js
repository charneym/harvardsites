/* The story scene (BL/BY/DB, DR): ONE fine-line tailor's dress form, drawn once and kept on screen for all four steps, wearing
   Medical Index's garments in turn, with the weight they put on the body (medical-index.de product pages and the MEDICA
   magazine piece of 1 Oct 2025):
   1 the front apron (Frontschürze): shoulder pads carry the weight (arrows on the shoulders);
   2 the double apron (Doppelschürze): two 0.25 mmPb front panels overlap to 0.50 mmPb (the hatched overlap band);
   3 skirt and vest (Rock & Weste): more than half of the weight sits on the hips (arrows move to the hips);
   4 the floating apron: a patented device takes 100% of the weight off shoulders and back (the apron is lifted clear, no arrows).
   No mechanism is drawn for step 4: the company has not published one. Driven by the scrubbed progress. */
var MI={X:380};
function miPath(p0,S,closeQ){
  var X=MI.X,f=function(n){return (+n).toFixed(1)},R=function(p){return f(X+p[0])+' '+f(p[1])},Lf=function(p){return f(X-p[0])+' '+f(p[1])};
  var d='M'+R(p0);S.forEach(function(s){d+='C'+R(s[0])+' '+R(s[1])+' '+R(s[2])});
  for(var i=S.length-1;i>=0;i--){var prev=i?S[i-1][2]:p0;d+='C'+Lf(S[i][1])+' '+Lf(S[i][0])+' '+Lf(prev)}
  if(closeQ)d+='Q'+R(closeQ[0])+' '+R(closeQ[1]);return d+'Z'}
var MI_FORM=[[24,58],[[[24,70],[24,84],[24,96]],[[40,108],[82,114],[100,126]],[[112,134],[112,162],[100,176]],[[104,188],[108,200],[106,214]],[[102,252],[80,268],[80,294]],[[80,322],[108,344],[110,372]],[[111,388],[108,398],[102,406]],[[70,416],[30,418],[0,418]]]];
var MI_TOP=[[[48,104],[70,110],[88,116]],[[80,136],[72,156],[76,172]],[[82,186],[96,194],[108,200]]];
var MI_APRON=MI_TOP.concat([[[110,280],[112,380],[114,468]],[[114,476],[108,480],[98,481]],[[60,484],[30,486],[0,486]]]);
var MI_VEST=MI_TOP.concat([[[108,240],[106,280],[104,302]],[[70,312],[30,314],[0,314]]]);
var MI_SKIRT=[[[100,320],[116,350],[118,380]],[[119,420],[118,450],[118,478]],[[80,484],[40,486],[0,486]]];
function miArrow(x1,y1,x2,y2){var a=Math.atan2(y2-y1,x2-x1),h=11,s=.5,f=function(n){return (+n).toFixed(1)};
  return 'M'+f(x1)+' '+f(y1)+'L'+f(x2)+' '+f(y2)+'M'+f(x2-h*Math.cos(a-s))+' '+f(y2-h*Math.sin(a-s))+'L'+f(x2)+' '+f(y2)+'L'+f(x2-h*Math.cos(a+s))+' '+f(y2-h*Math.sin(a+s))}
function miScene(mob){
  var X=MI.X,g='',i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'170 10 580 606':'0 0 760 560')+'" aria-hidden="true"><defs>'+
    '<clipPath id="miOv"><rect x="'+(X-40)+'" y="90" width="80" height="400"/></clipPath>'+
    '<pattern id="miHt" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V9" stroke="#04808e" stroke-width="1.6"/></pattern></defs>';
  /* the dress form: outline, seams, neck cap, pole and tripod base (drawn in) */
  g+='<g id="miForm"><path class="fm sD" d="'+miPath(MI_FORM[0],MI_FORM[1])+'"/>'+
     '<path class="sm sD" d="M'+(X-52)+' 132C'+(X-60)+' 200 '+(X-46)+' 262 '+(X-50)+' 300C'+(X-54)+' 340 '+(X-68)+' 382 '+(X-66)+' 412"/>'+
     '<path class="sm sD" d="M'+(X+52)+' 132C'+(X+60)+' 200 '+(X+46)+' 262 '+(X+50)+' 300C'+(X+54)+' 340 '+(X+68)+' 382 '+(X+66)+' 412"/>'+
     '<ellipse class="fm2" cx="'+X+'" cy="58" rx="24" ry="6"/><path class="fm sD" d="M'+X+' 52V42"/><circle class="fm2" cx="'+X+'" cy="37" r="5"/>'+
     '<path class="fm sD" d="M'+X+' 418V524"/><path class="fm sD" d="M'+X+' 524L'+(X-66)+' 550M'+X+' 524L'+(X+66)+' 550M'+X+' 524V552"/></g>';
  /* 3: skirt and vest */
  g+='<g id="miA3"><path class="ap" d="'+miPath([84,292],MI_SKIRT)+'"/><path class="wb" d="M'+(X-86)+' 294H'+(X+86)+'"/>'+
     '<path class="ap" d="'+miPath([30,96],MI_VEST,[[0,124],[30,96]])+'"/></g>';
  /* 1, 2 and 4: the apron; 2 adds the overlapping panels and the hatched double layer */
  var ap=miPath([30,96],MI_APRON,[[0,124],[30,96]]);
  g+='<g id="miA1"><path class="ap" d="'+ap+'"/>'+
     '<g id="miOvG"><path d="'+ap+'" fill="url(#miHt)" clip-path="url(#miOv)" opacity=".55"/><path class="pe" d="M'+(X+40)+' 112V485"/><path class="pe pe2" d="M'+(X-40)+' 112V485"/></g></g>';
  /* step 4: the shoulders of the form, drawn over the lifted apron, so the clearance between them reads */
  g+='<g id="miGap"><path class="gp" d="M'+(X-24)+' 96C'+(X-40)+' 108 '+(X-82)+' 114 '+(X-100)+' 126"/><path class="gp" d="M'+(X+24)+' 96C'+(X+40)+' 108 '+(X+82)+' 114 '+(X+100)+' 126"/></g>';
  /* weight arrows: on the shoulders, on the hips */
  g+='<g id="miWs"><path class="wa" d="'+miArrow(X-66,30,X-66,96)+'"/><path class="wa" d="'+miArrow(X+66,30,X+66,96)+'"/></g>';
  g+='<g id="miWh"><path class="wa" d="'+miArrow(X-176,318,X-128,360)+'"/><path class="wa" d="'+miArrow(X+176,318,X+128,360)+'"/></g>';
  /* labels: the shoulders and hips on the right, the garment on the left (phones: one caption under the drawing) */
  var rx=mob?476:470;
  g+='<text class="t" id="miSl" x="'+rx+'" y="'+(mob?40:52)+'">SCHULTERN</text>';
  var SV=mob?["TRAGEN","TRAGEN","ENTLASTET","100 % ENTLASTET"]:["TRAGEN DAS GEWICHT","TRAGEN DAS GEWICHT","DEUTLICH ENTLASTET","100 % ENTLASTET"];
  SV.forEach(function(s,j){g+='<text class="a sv" id="miSv'+j+'" x="'+rx+'" y="'+(mob?68:74)+'">'+s+'</text>'});
  var hy=mob?408:404;
  g+='<g id="miHl"><text class="t" x="'+(mob?540:548)+'" y="'+hy+'">HÜFTEN</text><text class="a" x="'+(mob?540:548)+'" y="'+(hy+(mob?28:22))+'">'+(mob?"> 50 %":"MEHR ALS DIE HÄLFTE")+'</text></g>';
  if(mob){
    ["1 · FRONTSCHÜRZE","2 · DOPPELSCHÜRZE, 0,50 mmPb","3 · ROCK & WESTE","4 · DIE SCHWEBENDE SCHÜRZE"].forEach(function(s,j){g+='<text class="a gl" id="miG'+j+'" x="'+X+'" y="604" text-anchor="middle">'+s.replace("&","&amp;")+'</text>'});
  }else{
    var GL=[["FRONTSCHÜRZE","7 VERSCHLUSSARTEN"],["DOPPELSCHÜRZE","2 × 0,25 = 0,50 mmPb"],["ROCK & WESTE","7 MODELLE"],["SCHWEBENDE SCHÜRZE","PATENTIERTE VORRICHTUNG"]];
    GL.forEach(function(s,j){g+='<g class="gl" id="miG'+j+'"><text class="a" x="40" y="226">'+s[0].replace("&","&amp;")+'</text><text class="t" x="40" y="250">'+s[1]+'</text>'+
      (j===1?'<path class="ld" d="M232 245H'+(X-46)+'"/><circle class="ldd" cx="'+(X-46)+'" cy="245" r="2.6"/>':'')+'</g>'});
  }
  return g+'</svg>';
}
function scene(){return miScene(MOBILE()?1:0)}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#miForm .sD"),fade:$$("#miForm .fm2",svg),a1:$("#miA1",svg),a3:$("#miA3",svg),ov:$("#miOvG",svg),ws:$("#miWs",svg),wh:$("#miWh",svg),
    sl:$("#miSl",svg),sv:[0,1,2,3].map(function(j){return $("#miSv"+j,svg)}),hl:$("#miHl",svg),gap:$("#miGap",svg),gl:[0,1,2,3].map(function(j){return $("#miG"+j,svg)})};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var g=seg(b,.35,1);
    /* garments: apron (1, 2), skirt and vest (3), apron again, lifted clear of the shoulders (4) */
    var a3=seg(p,.49,.55)*(1-seg(p,.73,.79));
    op(E.a1,g*(1-a3));op(E.a3,g*a3);
    op(E.ov,g*seg(p,.26,.32)*(1-seg(p,.47,.52)));
    var lift=seg(p,.79,.9);op(E.gap,g*seg(p,.84,.92));E.a1.setAttribute("transform","translate(0 "+(-18*lift).toFixed(2)+")");
    /* weight: on the shoulders (1, 2), lighter there in 3, gone in 4; on the hips in 3 */
    op(E.ws,g*(1-.62*seg(p,.5,.56))*(1-seg(p,.75,.8)));
    op(E.wh,g*seg(p,.52,.58)*(1-seg(p,.73,.78)));
    op(E.sl,g);
    var W=[[0,0,.25],[1,.25,.5],[2,.5,.75],[3,.75,1.01]];
    W.forEach(function(w){var i=w[0],a=w[1],z=w[2],v=(i?seg(p,a,a+.05):1)*(i<3?1-seg(p,z-.03,z+.02):1);op(E.sv[i],g*v);op(E.gl[i],g*v)});
    op(E.hl,g*seg(p,.53,.59)*(1-seg(p,.73,.78)));
  };
}
