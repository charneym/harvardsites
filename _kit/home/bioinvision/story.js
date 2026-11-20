/* the story scene (BL/BY/DB): ONE engraved drawing of the CryoViz cryo-imaging cycle. Freeze: the embedded specimen
   block on the cryostat stage, the whole-mouse outline (traced from BioInVision's own block-face image) in its face, the
   temperature range. Section: the microtome knife at the back edge and one thin section lifting away, 2-200 microns.
   Image: the objective over the block, its light cone falls on the face and labelled cells light up green.
   3D: the imaged faces stack beside the block into a volume. */
var MOUSE="M0 28 L3 27 L7 30 L10 31 L14 34 L17 36 L20 37 L24 39 L27 41 L31 42 L34 42 L37 42 L41 40 L44 38 L48 37 L51 36 L54 34 L58 31 L61 27 L65 8 L68 5 L71 3 L75 2 L78 2 L82 2 L85 1 L88 1 L92 1 L95 0 L99 0 L102 1 L105 2 L109 2 L112 3 L116 3 L119 3 L122 4 L126 4 L129 5 L133 5 L136 5 L139 4 L143 4 L146 5 L150 6 L153 6 L156 7 L160 7 L163 7 L167 6 L170 5 L173 5 L177 5 L180 6 L184 7 L187 8 L190 8 L194 5 L197 5 L201 6 L204 6 L207 7 L211 8 L214 7 L218 8 L221 10 L224 11 L228 12 L231 14 L235 14 L238 13 L241 14 L245 16 L248 17 L252 18 L255 19 L258 20 L262 19 L265 19 L269 20 L272 20 L275 21 L279 22 L282 23 L286 25 L289 25 L292 26 L296 31 L299 38 L299 51 L296 56 L292 60 L289 62 L286 64 L282 64 L279 66 L275 69 L272 71 L269 72 L265 74 L262 75 L258 75 L255 75 L252 76 L248 81 L245 83 L241 87 L238 88 L235 86 L231 86 L228 87 L224 87 L221 86 L218 86 L214 86 L211 86 L207 86 L204 85 L201 84 L197 87 L194 89 L190 88 L187 88 L184 88 L180 88 L177 89 L173 90 L170 89 L167 89 L163 89 L160 89 L156 89 L153 90 L150 90 L146 91 L143 91 L139 92 L136 93 L133 94 L129 96 L126 98 L122 97 L119 96 L116 96 L112 96 L109 95 L105 95 L102 95 L99 95 L95 94 L92 94 L88 93 L85 93 L82 92 L78 89 L75 88 L71 86 L68 83 L65 80 L61 76 L58 73 L54 71 L51 68 L48 65 L44 62 L41 60 L37 58 L34 55 L31 54 L27 53 L24 52 L20 51 L17 49 L14 47 L10 45 L7 42 L3 38 L0 33Z";
var CELLS=[[172,58],[142,56],[226,57],[264,34],[174,37],[123,47],[183,58],[222,21],[182,39],[139,74],[157,15],[189,45],[100,33],[132,50],[144,51],[280,36],[122,46],[236,37],[256,26],[108,49],[118,39],[197,63],[177,45],[251,57],[156,72],[116,53],[210,50],[136,56],[138,39],[109,73],[137,71],[193,45],[210,55],[178,25],[174,66],[199,68],[259,57],[219,52],[271,43],[90,27],[159,61],[139,53],[166,52],[205,53],[182,33],[163,58]];
function scene(){
  var mob=MOBILE(),i;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  /* block: front face x 60..400, y 330..470; depth offset (+70,-46) */
  var X0=40,X1=470,YT=318,YB=478,DX=88,DY=-58;
  var top='M'+X0+' '+YT+'H'+X1+'l'+DX+' '+DY+'H'+(X0+DX)+'Z';
  var blk='M'+X0+' '+YT+'V'+YB+'H'+X1+'V'+YT+'M'+X1+' '+YB+'l'+DX+' '+DY+'V'+(YT+DY);
  /* top-face mapping for the 300x99 mouse drawing: u along the width, v from the back edge to the front */
  var SC=1.3,ku=-DX/99*.8,kv=-DY/99*.8,E0=X0+DX+8,F0=YT+DY+6;
  var M='matrix('+SC+' 0 '+ku.toFixed(4)+' '+kv.toFixed(4)+' '+E0+' '+F0+')';
  function uv(u,v){return [E0+u*SC+ku*v,F0+kv*v]}
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="sD gr" d="M20 '+YB+'H780"/><path class="sD kb" d="M20 '+(YB+8)+'H780M20 '+(YB+13)+'H780"/>';
  var hz='';for(i=0;i<63;i++){var hx=26+i*12;hz+='M'+hx+' '+(YB+13)+'l-8 8'}g+='<path class="sD ht" d="'+hz+'"/>';
  g+='<path class="sD bl" d="'+top+blk+'"/>';
  g+='<g class="tb"><path class="tbl" d="M552 494h228v52h-228Z M552 520h228"/><text x="562" y="512" class="t">CRYOVIZ™ · BLOCK-FACE IMAGING</text><text x="562" y="538" class="t s">BIOINVISION · CLEVELAND</text></g>';
  g+='</g>';
  /* 1 freeze: frost ticks on the block, the mouse in the face, the temperature range */
  var fr='';for(i=0;i<27;i++){var fx=X0+10+i*15.5;fr+='M'+fx+' '+(YT+12)+'l6 -6'}for(i=0;i<9;i++){var fy=YT+22+i*15;fr+='M'+(X0+8)+' '+fy+'l6 -6M'+(X1-16)+' '+fy+'l6 -6'}
  g+='<g id="sc1"><path class="frost" d="'+fr+'"/><path class="ms" transform="'+M+'" d="'+MOUSE+'"/>'+
     '<path class="dim" d="M'+(X1+DX+22)+' '+(YT+DY)+'V'+(YB+DY)+'M'+(X1+DX+16)+' '+(YT+DY)+'h12M'+(X1+DX+16)+' '+(YB+DY)+'h12"/>'+
     '<text x="'+(X1+DX+36)+'" y="'+(YT+DY+76)+'" class="a2">0 TO −30 °C</text>'+
     '<text x="40" y="60" class="a">FREEZE</text></g>';
  /* 2 section: the knife resting on the back edge, one thin section curling off, its thickness */
  var kx=X0+DX-20,ky=YT+DY-1,KL=X1-X0+60;
  g+='<g id="sc2"><path class="bl2 dr" d="M'+kx+' '+ky+'H'+(kx+KL)+'L'+(kx+KL+30)+' '+(ky-30)+'H'+(kx+30)+'Z"/>'+
     '<path class="bl2 dr" d="M'+(kx+30)+' '+(ky-30)+'l-4 -30H'+(kx+KL+26)+'l4 30"/>'+
     '<path class="cut dr" d="M'+(X0+DX+40)+' '+(YT+DY+3)+'c50 -2 90 -10 120 -34c16 -13 8 -30 -8 -24c-14 5 -10 22 6 22"/>'+
     '<path class="dim dr" d="M'+(X1+14)+' '+(YT-10)+'V'+(YT+4)+'M'+(X1+8)+' '+(YT-10)+'h12M'+(X1+8)+' '+(YT+4)+'h12"/>'+
     '<text x="'+(X1-6)+'" y="'+(YT+30)+'" class="a2" text-anchor="end">2–200 µm SECTIONS</text>'+
     '<text x="40" y="60" class="a">SECTION</text></g>';
  /* 3 image: the objective over the face, its light cone, labelled cells */
  var ox=X0+DX/2+215,oy=YT+DY/2-110,py=YT+DY/2+2;
  var cells='';CELLS.forEach(function(c){var p=uv(c[0],c[1]);cells+='<circle cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="'+(1.8+((c[0]+c[1])%3)*.7).toFixed(1)+'"/>'});
  g+='<g id="sc3"><path class="obj dr" d="M'+(ox-34)+' '+(oy-110)+'V'+(oy-40)+'H'+(ox+34)+'V'+(oy-110)+'M'+(ox-34)+' '+(oy-98)+'h68M'+(ox-34)+' '+(oy-88)+'h68M'+(ox-34)+' '+(oy-78)+'h68M'+(ox-34)+' '+(oy-68)+'h68M'+(ox-26)+' '+(oy-40)+'L'+(ox-16)+' '+oy+'H'+(ox+16)+'L'+(ox+26)+' '+(oy-40)+'M'+(ox-50)+' '+(oy-170)+'V'+(oy-110)+'H'+(ox+50)+'V'+(oy-170)+'"/>'+
     '<path class="ring dr" d="M'+(ox-34)+' '+(oy-52)+'h68"/>'+
     '<path class="beam" d="M'+(ox-16)+' '+oy+'L'+(ox-150)+' '+py+'M'+(ox+16)+' '+oy+'L'+(ox+150)+' '+py+'"/>'+
     '<ellipse class="pool" cx="'+ox+'" cy="'+py+'" rx="150" ry="24"/>'+
     '<g class="cells">'+cells+'</g>'+
     '<text x="'+(ox+60)+'" y="'+(oy-92)+'" class="a2">BRIGHT-FIELD</text><text x="'+(ox+60)+'" y="'+(oy-74)+'" class="a2">+ FLUORESCENCE</text>'+
     '<text x="40" y="60" class="a">IMAGE</text></g>';
  /* 4 3D: the imaged faces stacked into a volume beside the block */
  var st='',SX=592,SY=440,N=10,SW=150,SD=40;
  for(var k=0;k<N;k++){var y=SY-k*24;st+='<g class="sl"><path class="slab" d="M'+SX+' '+y+'h'+SW+'l'+SD+' -26h-'+SW+'Z"/><path class="ms2" transform="matrix(.42 0 -.13 .2 '+(SX+SD-4)+' '+(y-24)+')" d="'+MOUSE+'"/></g>'}
  g+='<g id="sc4"><path class="arr" d="M'+(X1+DX-30)+' '+(YT+DY-14)+'C'+(X1+DX+20)+' '+(YT+DY-60)+' '+(SX-40)+' '+(SY-170)+' '+(SX-6)+' '+(SY-130)+'M'+(SX-20)+' '+(SY-136)+'l14 6 0-15"/>'+st+
     '<text x="'+(SX+SW+SD)+'" y="'+(SY-268)+'" class="a2" text-anchor="end">3D VOLUME · &gt;60 GB</text>'+
     '<text x="40" y="60" class="a">REBUILD IN 3D</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb",svg),g1:$("#sc1",svg),g2:$("#sc2",svg),g3:$("#sc3",svg),g4:$("#sc4",svg),
    d2:dl("#sc2 .dr"),d3:dl("#sc3 .dr"),cells:$("#sc3 .cells",svg),tmp:$$("#sc1 .dim, #sc1 .a2",svg),beam:$$("#sc3 .beam, #sc3 .pool",svg),sl:$$("#sc4 .sl",svg),
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.16),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    E.g1.style.opacity=(b*Math.max(s1,.55)).toFixed(3);
    E.g2.style.opacity=(b*(s2>0?1:0)*(1-.6*s3)).toFixed(3);draw(E.d2,s2);
    E.g3.style.opacity=(b*(s3>0?1:0)).toFixed(3);draw(E.d3,Math.min(1,s3*1.6));
    E.cells.style.opacity=Math.min(1,Math.max(0,s3*2-.8)).toFixed(3);
    E.beam.forEach(function(el){el.style.opacity=Math.min(1,Math.max(0,s3*2-.5)).toFixed(3)});
    E.tmp.forEach(function(el){el.style.opacity=(1-s3).toFixed(3)});
    E.g4.style.opacity=(b*(s4>0?1:0)).toFixed(3);
    E.sl.forEach(function(el,k){el.style.opacity=Math.min(1,Math.max(0,s4*E.sl.length*1.15-k)).toFixed(3)});
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s2).toFixed(3);
    E.t[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.t[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.t[3].style.opacity=I(s4).toFixed(3);
  };
}
