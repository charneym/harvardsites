/* The story scene (BL/BY/DB): from an old remedy to Peripear, as ONE continuous fine-line scene.
   Step 1 (remedy): a basin of warm water with a folded cloth over its rim and steam rising, the compress midwives have used
   for two thousand years (peri-pear.com/about). Step 2 (evidence): the basin steps back and the pooled risk ratios from
   Sun et al. (2024), quoted on peri-pear.com/product, draw in as a forest plot on a log axis. Step 3 (device): the plot gives
   way to the second stage of labour as a timeline, from full dilation to birth, with warmth held steady across all of it
   (their "efficient heat storage throughout the 2nd stage of labour"). Driven by the scrubbed progress. No data invented. */
var SCW=760,SCH=520;
function ppFx(v){return 120+(Math.log(v)/Math.LN10+1)/2*560}
function ppScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* --- step 1: the basin --- */
  g+='<g id="scBas">';
  var bx=380,by=300;
  g+='<path class="bs sD" d="M'+(bx-250)+' '+by+'C'+(bx-240)+' '+(by+150)+' '+(bx-120)+' '+(by+196)+' '+bx+' '+(by+196)+'S'+(bx+240)+' '+(by+150)+' '+(bx+250)+' '+by+'"/>';
  g+='<ellipse class="bs sD" cx="'+bx+'" cy="'+by+'" rx="250" ry="46"/>';
  g+='<ellipse class="bs2 sD" cx="'+bx+'" cy="'+by+'" rx="236" ry="40"/>';
  g+='<path class="bs2 sD" d="M'+(bx-70)+' '+(by+196)+'C'+(bx-60)+' '+(by+214)+' '+(bx+60)+' '+(by+214)+' '+(bx+70)+' '+(by+196)+'"/>';
  for(i=0;i<5;i++){var ry=by+4+i*7,rx=200-i*34;g+='<path class="wt sD" d="M'+(bx-rx)+' '+ry+'Q'+(bx-rx/2)+' '+(ry-5)+' '+bx+' '+ry+'T'+(bx+rx)+' '+ry+'"/>'}
  /* hatching on the bowl, an engraved shade on its right */
  for(i=0;i<16;i++){var hx=bx+70+i*11;var y0=by+42-i*1.2,y1=by+150-i*8.4;g+='<path class="ht sD" d="M'+hx+' '+y0.toFixed(1)+'L'+(hx+6)+' '+y1.toFixed(1)+'"/>'}
  /* the folded cloth over the near rim */
  g+='<path class="cl sD" d="M'+(bx-150)+' '+(by+36)+'C'+(bx-130)+' '+(by+20)+' '+(bx-40)+' '+(by+24)+' '+(bx-10)+' '+(by+42)+'L'+(bx-6)+' '+(by+128)+'C'+(bx-40)+' '+(by+112)+' '+(bx-120)+' '+(by+112)+' '+(bx-146)+' '+(by+124)+'Z"/>';
  for(i=1;i<6;i++){var cx0=bx-150+i*24;g+='<path class="cl2 sD" d="M'+cx0+' '+(by+34-i*1.5)+'C'+(cx0+3)+' '+(by+70)+' '+(cx0-2)+' '+(by+100)+' '+(cx0+2)+' '+(by+120-i*1.2)+'"/>'}
  g+='</g><g id="scSteam">';
  for(i=0;i<5;i++){var sx=bx-140+i*70,s='M'+sx+' '+(by-30);for(var j=0;j<4;j++){var yy=by-30-(j+1)*44;s+='C'+(sx+(j%2?-22:22))+' '+(yy+30)+' '+(sx+(j%2?22:-22))+' '+(yy+14)+' '+sx+' '+yy}
    g+='<path class="stm" d="'+s+'"/>'}
  g+='</g>';
  g+='<g id="lb1"><text class="t" x="20" y="34">WARM WATER · A CLOTH · THE PERINEUM</text><text class="t" x="740" y="'+(by+236)+'" text-anchor="end">SORANUS OF EPHESUS · 2ND CENTURY AD</text></g>';
  /* --- step 2: the forest plot (Sun et al., 2024) --- */
  g+='<g id="scFp">';
  var top=110,rh=78;
  g+='<path class="ax sD" d="M120 '+(top+4*rh+10)+'H680"/>';
  [0.1,0.2,0.5,1,2,5,10].forEach(function(v){var x=ppFx(v);g+='<path class="ax sD" d="M'+x.toFixed(1)+' '+(top+4*rh+10)+'v8"/><text class="t" x="'+x.toFixed(1)+'" y="'+(top+4*rh+38)+'" text-anchor="middle">'+v+'</text>'});
  g+='<path class="one sD" d="M'+ppFx(1).toFixed(1)+' '+(top-36)+'V'+(top+4*rh+10)+'"/>';
  g+='<text class="t" x="'+(ppFx(1)-14).toFixed(1)+'" y="'+(top-46)+'" text-anchor="end">FEWER WITH A COMPRESS</text><text class="t" x="'+(ppFx(1)+14).toFixed(1)+'" y="'+(top-46)+'" text-anchor="start">MORE</text>';
  RR.forEach(function(r,k){var y=top+k*rh+30,a=ppFx(r[2]),b=ppFx(r[3]),p=ppFx(r[1]);
    g+='<g class="fr" data-k="'+k+'"><path class="fci" d="M'+a.toFixed(1)+' '+y+'H'+b.toFixed(1)+'M'+a.toFixed(1)+' '+(y-7)+'v14M'+b.toFixed(1)+' '+(y-7)+'v14"/><rect class="fpt" x="'+(p-7).toFixed(1)+'" y="'+(y-7)+'" width="14" height="14"/>'+
      '<text class="a" x="'+(r[1]<1?b+16:a-16).toFixed(1)+'" y="'+(y-12)+'" text-anchor="'+(r[1]<1?"start":"end")+'">'+r[0].toUpperCase().replace("THIRD- AND/OR FOURTH-DEGREE","3RD/4TH-DEGREE").replace("SECOND-DEGREE","2ND-DEGREE")+'</text>'+
      '<text class="t" x="'+(r[1]<1?b+16:a-16).toFixed(1)+'" y="'+(y+14)+'" text-anchor="'+(r[1]<1?"start":"end")+'">'+r[4]+'</text></g>'});
  g+='</g>';
  g+='<g id="lb2"><text class="t" x="20" y="34">WARM COMPRESS VS NONE · RISK RATIO, 95% CI · SUN ET AL. 2024</text></g>';
  /* --- step 3: the second stage of labour, warmth held steady --- */
  g+='<g id="scDev">';
  var ly=380,x0=90,x1=670;
  g+='<path class="ax" id="tl" d="M'+x0+' '+ly+'H'+x1+'"/><path class="ax" d="M'+x0+' '+(ly-10)+'v20M'+x1+' '+(ly-10)+'v20"/>';
  g+='<text class="t" x="'+x0+'" y="'+(ly+40)+'">FULL DILATION</text><text class="t" x="'+x1+'" y="'+(ly+40)+'" text-anchor="end">BIRTH</text>';
  g+='<text class="t" x="380" y="'+(ly+40)+'" text-anchor="middle">SECOND STAGE OF LABOUR</text>';
  g+='<path class="band" id="band" d="M'+x0+' 250H'+x1+'"/>';
  g+='<path class="band2" d="M'+x0+' 250V'+ly+'M'+x1+' 250V'+ly+'"/>';
  for(i=0;i<13;i++){var wx=x0+22+i*44.5,ws='M'+wx+' 236';for(var q=0;q<3;q++){var wy=236-(q+1)*36;ws+='C'+(wx+(q%2?-12:12))+' '+(wy+24)+' '+(wx+(q%2?12:-12))+' '+(wy+12)+' '+wx+' '+wy}g+='<path class="hw" data-i="'+i+'" d="'+ws+'"/>'}
  g+='</g>';
  g+='<g id="lb3"><text class="t" x="20" y="34">PERIPEAR · EFFICIENT HEAT STORAGE</text><text class="a" x="'+x1+'" y="276" text-anchor="end">CONSISTENT WARMTH, START TO FINISH</text></g>';
  return g+'</svg>';
}
function scene(){return ppScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={bas:dl("#scBas .sD"),basG:$("#scBas",svg),stm:dl("#scSteam .stm"),stmG:$("#scSteam",svg),fp:$("#scFp",svg),fpA:dl("#scFp .sD"),fr:$$("#scFp .fr",svg),
    dev:$("#scDev",svg),tl:dl("#scDev #tl"),band:dl("#scDev #band"),hw:dl("#scDev .hw"),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-Math.max(0,Math.min(1,v)))).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.bas,b)}
    var t=(performance.now()/1000)%6;
    /* step 1: steam rises over the basin */
    draw(E.stm,sm2(seg(p,.02,.22)));
    var out1=sm2(seg(p,.30,.40));
    op(E.basG,b*(1-.82*out1)*(1-sm2(seg(p,.62,.7))));op(E.stmG,b*(1-out1));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.28,.34)));
    /* step 2: the forest plot */
    var in2=seg(p,.36,.46),out2=sm2(seg(p,.64,.72));
    op(E.fp,b*Math.min(1,in2*3)*(1-out2));draw(E.fpA,sm2(in2));
    E.fr.forEach(function(el,k){op(el,sm2(seg(p,.42+k*.04,.5+k*.04)))});
    op(E.l2,b*seg(p,.42,.48)*(1-seg(p,.62,.68)));
    /* step 3: the second stage, warmth held steady */
    var in3=seg(p,.68,.8);
    op(E.dev,b*Math.min(1,in3*4));draw(E.tl,sm2(in3));draw(E.band,sm2(seg(p,.74,.88)));
    E.hw.forEach(function(a,i){draw([a],sm2(seg(p,.76+i*.008,.86+i*.008)))});
    op(E.l3,b*seg(p,.82,.9));
  };
}
function sm2(x){return x*x*(3-2*x)}
