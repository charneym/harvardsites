/* the story scene (BL/BY/DB): ONE engraved longitudinal section of the abdominal aorta, as on a surgical atlas plate:
   renal arteries, the neck, the aneurysm sac (hatched thrombus) and the iliac bifurcation. Repair: the bifurcated
   endograft and its stent rings draw in. Risk: the graft slips (dashed outline) and blood tracks past the neck into
   the sac, a type 1a endoleak. Catheter: the Suture-Tight catheter rises through the graft to the neck. Endosuture:
   four nitinol endosutures pin graft to wall at the neck, with a magnified inset of the double-loop suture (drawn from
   the product render on vesteck.com). */
function scene(){
  var mob=MOBILE(),f=function(n){return n.toFixed(1)};
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  var SAC='M262 190C258 212 182 228 182 295C182 362 252 382 262 412H338C348 382 418 362 418 295C418 228 342 212 338 190Z';
  g+='<defs><clipPath id="vsac"><path d="'+SAC+'"/></clipPath></defs>';
  /* base plate: neatline, the vessel walls (outer and intimal lines), renal branches, thrombus hatching, title block */
  var hz='';for(var i=-30;i<40;i++){var hx=180+i*9;hz+='M'+hx+' 412L'+(hx+222)+' 190'}
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="ht" clip-path="url(#vsac)" d="'+hz+'"/>';
  g+='<path class="sD wl" d="M262 14V98M262 118V190C258 212 182 228 182 295C182 362 252 382 262 412L192 548M338 14V98M338 118V190C342 212 418 228 418 295C418 362 348 382 338 412L408 548M236 548L300 444L364 548"/>';
  g+='<path class="sD wi" d="M268 14V100M268 116V192C264 216 189 232 189 295C189 358 258 380 268 414L201 548M332 14V100M332 116V192C336 216 411 232 411 295C411 358 342 380 332 414L399 548M229 548L300 454L371 548"/>';
  g+='<path class="sD wl" d="M262 98L186 88M262 118L186 110M338 98L414 88M338 118L414 110"/>';
  g+='<g class="sl"><text x="40" y="84" class="t">RENAL</text><path class="ld" d="M88 80H180"/>'+
     '<text x="40" y="150" class="t">NECK</text><path class="ld" d="M80 146H256"/>'+
     '<text x="40" y="299" class="t">SAC</text><path class="ld" d="M72 295H176"/>'+
     '<text x="40" y="528" class="t">ILIAC</text><path class="ld" d="M88 524H196"/></g>';
  var AX=640,AY=196;
  g+='<path class="cut" d="M240 170H360"/><text x="226" y="174" class="t">A</text><text x="366" y="174" class="t">A</text><path class="ld" d="M378 170L'+(AX-80)+' '+AY+'"/>';
  g+='<circle class="sD wl" cx="'+AX+'" cy="'+AY+'" r="74"/><circle class="sD wi" cx="'+AX+'" cy="'+AY+'" r="68"/>';
  g+='<text x="'+AX+'" y="'+(AY+104)+'" class="t" text-anchor="middle">SECTION A–A · NECK</text>';
  g+='<g class="tb"><path class="tbl" d="M548 494h228v52h-228Z M548 520h228"/><text x="558" y="512" class="t">SECTION · ABDOMINAL AORTA</text><text x="558" y="538" class="t s">SUTURE-TIGHT™ · VESTECK</text></g>';
  g+='</g>';
  function zz(cx,cy,r0,r1,n){var p='';for(var k=0;k<=n;k++){var a=k/n*Math.PI*2,r=k%2?r1:r0;p+=(k?'L':'M')+f(cx+r*Math.cos(a))+' '+f(cy+r*Math.sin(a))}return p+'Z'}
  function circ(cx,cy,r){return 'M'+f(cx-r)+' '+cy+'a'+r+' '+r+' 0 1 0 '+(2*r)+' 0a'+r+' '+r+' 0 1 0 '+(-2*r)+' 0'}
  /* 1 the repair: the bifurcated endograft with its zig-zag stent rings */
  var GR='M271 132H329V380L393 548H371L300 436L229 548H207L271 380Z';
  function ring(yc,x0,x1,n,a){var s='M'+x0+' '+(yc-a),dx=(x1-x0)/n;for(var k=1;k<=n;k++)s+='L'+f(x0+dx*k)+' '+(k%2?yc+a:yc-a);return s}
  var rs='';[146,182,222,262,302,342].forEach(function(y){rs+=ring(y,271,329,8,9)});
  var leg='';for(var k=1;k<5;k++){var t=k/5;leg+='M'+f(271-64*t)+' '+f(380+168*t)+'L'+f(293-64*t)+' '+f(380+168*t)+'M'+f(307+64*t)+' '+f(380+168*t)+'L'+f(329+64*t)+' '+f(380+168*t)}
  g+='<g id="sc1"><path class="gf dr" d="'+GR+'"/><path class="st dr" d="'+rs+'"/><path class="st2 dr" d="'+leg+'"/>'+
     '<path class="gf dr" d="'+circ(AX,AY,62)+'"/><path class="st dr" d="'+zz(AX,AY,53,61,24)+'"/>'+
     '<text x="470" y="64" class="a">THE REPAIR</text></g>';
  /* 2 the risk: the graft slips (dashed ghost), the seal opens at the neck and flow tracks into the sac */
  g+='<g id="sc2"><path class="mg dr" d="M271 160H329V408"/><path class="mg dr" d="M271 160V408"/>'+
     '<path class="lk dr" d="M300 22V120C300 128 276 126 272 140C268 156 262 172 252 206C236 236 214 262 222 300"/>'+
     '<path class="lk dr" d="M300 22V120C300 128 324 126 328 140C332 156 338 172 348 206C364 236 386 262 378 300"/>'+
     '<path class="lkh" d="M216 290l6 10l5 -11M372 290l6 10l5 -11"/>'+
     '<path class="mg dr" d="'+circ(AX+9,AY,62)+'"/><path class="lk dr" d="M'+(AX-48)+' '+(AY-42)+'A64 64 0 0 0 '+(AX-48)+' '+(AY+42)+'"/>'+
     '<path class="ld2 dr" d="M466 346L386 304"/><text x="470" y="350" class="t c">TYPE 1A ENDOLEAK</text>'+
     '<path class="ld2 dr" d="M466 404H338"/><text x="470" y="408" class="t c">MIGRATION</text>'+
     '<text x="470" y="64" class="a">THE RISK</text></g>';
  /* 3 the catheter: in through the right iliac limb, up the graft to the neck */
  var CT='M382 556C376 520 340 452 320 404C308 372 306 330 306 280V170';
  g+='<g id="sc3"><path class="ct dr" d="'+CT+'"/><path class="cti dr" d="'+CT+'"/>'+
     '<path class="hd" d="M300 176V150Q300 142 306 140Q312 142 312 150V176Z"/><path class="hdl" d="M300 158H312M300 166H312"/>'+
     '<circle class="cx" cx="'+AX+'" cy="'+AY+'" r="9"/><circle class="cxi" cx="'+AX+'" cy="'+AY+'" r="4"/>'+
     '<g class="c3"><path class="ld2 dr" d="M466 470H360"/><text x="470" y="474" class="t c">PRE-LOADED CATHETER</text></g>'+
     '<text x="470" y="64" class="a">THE CATHETER</text></g>';
  /* 4 the endosuture: four sutures through graft and wall at the neck, and the magnified double-loop implant */
  function su(x,y,d){return 'M'+(x+d*10)+' '+(y-6)+'C'+(x-d*4)+' '+(y-10)+' '+(x-d*14)+' '+(y-2)+' '+(x-d*8)+' '+(y+5)+'C'+(x-d*2)+' '+(y+10)+' '+(x+d*8)+' '+(y+6)+' '+(x+d*10)+' '+(y+2)}
  var SU=su(268,150,1)+su(268,176,1)+su(332,150,-1)+su(332,176,-1);
  var ax='';[45,135,225,315].forEach(function(d){var a=d*Math.PI/180,c=Math.cos(a),n=Math.sin(a),x=AX+65*c,y=AY+65*n;
    ax+='<ellipse class="su" cx="'+f(x)+'" cy="'+f(y)+'" rx="13" ry="4.5" transform="rotate('+d+' '+f(x)+' '+f(y)+')"/>'});
  var cx=640,cy=384,R=60;
  function loop(ox,oy){return 'M'+(cx+ox+38)+' '+(cy+oy-44)+'A58 58 0 1 0 '+(cx+ox+50)+' '+(cy+oy+32)+'M'+(cx+ox+38)+' '+(cy+oy-44)+'L'+(cx+ox+52)+' '+(cy+oy-30)+'V'+(cy+oy+10)+'L'+(cx+ox+40)+' '+(cy+oy+22)}
  g+='<g id="sc4"><path class="su dr" d="'+SU+'"/>'+ax+
     '<path class="ld2 dr" d="M344 180L'+f(cx-R*.8)+' '+f(cy-R*.6)+'"/><circle class="lens" cx="'+cx+'" cy="'+cy+'" r="'+R+'"/>'+
     '<g transform="translate('+cx+' '+cy+') scale(.56) translate('+(-cx-4)+' '+(-cy)+')"><path class="nt dr" d="'+loop(-10,-6)+'"/><path class="nt2 dr" d="'+loop(8,6)+'"/>'+
     '<path class="bb" d="M'+(cx+30)+' '+(cy+35)+'l14 1l-6 -8M'+(cx+48)+' '+(cy+47)+'l14 1l-6 -8"/></g>'+
     '<text x="'+cx+'" y="'+(cy+R+22)+'" class="t c c4" text-anchor="middle">NITINOL ENDOSUTURE</text>'+
     '<text x="470" y="64" class="a">THE ENDOSUTURE</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase .ht, #scBase .sl",svg),g1:$("#sc1",svg),g2:$("#sc2",svg),g3:$("#sc3",svg),g4:$("#sc4",svg),
    d1:dl("#sc1 .dr"),d2:dl("#sc2 .dr"),d3:dl("#sc3 .dr"),d4:dl("#sc4 .dr"),lens:$("#sc4 .lens",svg),c3:$("#sc3 .c3",svg),c4:$("#sc4 .c4",svg),
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.16),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94),d1=Math.max(s1,.55);
    E.g1.style.opacity=b.toFixed(3);draw(E.d1,b*d1);
    E.g2.style.opacity=(b*(s2>0?1:0)*(1-s3)).toFixed(3);draw(E.d2,s2);
    E.g3.style.opacity=(b*(s3>0?1:0)*(1-.55*s4)).toFixed(3);draw(E.d3,s3);E.c3.style.opacity=Math.max(0,1-s4*2.2).toFixed(3);
    E.g4.style.opacity=(b*(s4>0?1:0)).toFixed(3);draw(E.d4,s4);E.lens.style.opacity=s4.toFixed(3);E.c4.style.opacity=Math.max(0,s4*2-1).toFixed(3);
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s2).toFixed(3);
    E.t[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.t[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.t[3].style.opacity=I(s4).toFixed(3);
  };
}
