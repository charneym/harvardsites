/* the story scene (BL/BY/DB): ONE engraved skin cross-section with three hair follicles, kept on screen for all three steps.
   Step 1 effector T cells crowd the follicle bulbs, the bulbs glow inflamed, few regulatory T cells, the hair is broken short.
   Step 2 the LybraPatch comes down: hydrogel microneedles enter the skin and release IL-2 and CCL22 (gold dots).
   Step 3 the patch lifts away, regulatory T cells gather and expand, effector cells and inflammation fade, the hair regrows.
   Sources: NIH RePORTER abstract of 1R43AI194889-01 (depletion of skin Tregs triggers follicle inflammation in alopecia areata;
   the LybraPatch delivers IL-2 and CCL22 at the site; Treg expansion, hair regrowth, no systemic immunosuppression in mice) and
   MIT News 2024-05-09 (hyaluronic acid needles that swell in the skin). Schematic; sizes and counts are illustrative. */
var SK=(function(){
  var FX=[250,400,550],SURF=236,i;
  function surf(x){return SURF+3*Math.sin(x/37)}
  function dej(x){return 270+7*Math.sin(x/19)+3*Math.sin(x/7.3)}
  /* needles: every 34 units across the patch, skipping the hair shafts */
  var ND=[];for(var x=118;x<=684;x+=34){var ok=true;FX.forEach(function(f){if(Math.abs(x-f)<14)ok=false});if(ok)ND.push(x)}
  /* effector T cells around each bulb, regulatory T cells (two at rest, many after treatment) */
  var TE=[],TR0=[[118,372],[690,452]],TR1=[];
  FX.forEach(function(f,k){TE.push([f-34,412+k*3],[f+36,428-k*4],[f-30,470],[f+32,486-k*3],[f+2,506])});
  FX.forEach(function(f,k){TR1.push([f-38,394+k*2],[f+40,452],[f-36,452-k*2],[f+4,330+k*6])});TR1.push([325,420],[475,380],[140,470],[660,360]);
  return {FX:FX,surf:surf,dej:dej,ND:ND,TE:TE,TR0:TR0,TR1:TR1,SURF:SURF};
})();
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,x;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="44 58 712 500" aria-hidden="true">';
  g+='<defs><radialGradient id="infl" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#e8846b" stop-opacity=".5"/><stop offset="1" stop-color="#e8846b" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="calm" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#6cc0d2" stop-opacity=".26"/><stop offset="1" stop-color="#6cc0d2" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  /* the skin block: surface, epidermis/dermis junction, cut sides and base */
  var s='',d='';for(x=60;x<=740;x+=4){s+=(x>60?'L':'M')+x+' '+f(SK.surf(x));d+=(x>60?'L':'M')+x+' '+f(SK.dej(x))}
  g+='<path class="sk sD" d="'+s+'"/><path class="dj sD" d="'+d+'"/>';
  g+='<path class="sk sD" d="M60 '+f(SK.surf(60))+'V520H740V'+f(SK.surf(740))+'"/>';
  /* engraved dermis texture: short wavy collagen strokes */
  var col='';for(i=0;i<34;i++){var cx=84+((i*97)%640),cy=310+((i*53)%190);var near=false;SK.FX.forEach(function(fx){if(Math.abs(cx-fx)<44)near=true});if(near)continue;
    col+='M'+cx+' '+cy+'q8 -5 16 0t16 0'}
  g+='<path class="cl sD" d="'+col+'"/>';
  /* follicles: sheath from the surface down to the bulb, with its dermal papilla */
  SK.FX.forEach(function(x){var y0=SK.surf(x)+2;
    g+='<path class="fo sD" d="M'+(x-12)+' '+f(y0)+'L'+(x-14)+' 420C'+(x-31)+' 440 '+(x-25)+' 480 '+x+' 480C'+(x+25)+' 480 '+(x+31)+' 440 '+(x+14)+' 420L'+(x+12)+' '+f(y0)+'"/>'+
      '<path class="pa sD" d="M'+(x-8)+' 470C'+(x-9)+' 458 '+(x-4)+' 450 '+x+' 450C'+(x+4)+' 450 '+(x+9)+' 458 '+(x+8)+' 470"/>'});
  g+='<text class="t" x="740" y="548" text-anchor="end">SKIN CROSS-SECTION · SCHEMATIC</text>';
  g+='</g>';
  g+='<g id="scMove">';
  /* inflammation / calm glows behind each bulb */
  SK.FX.forEach(function(x){g+='<circle class="ig" cx="'+x+'" cy="452" r="70" fill="url(#infl)"/><circle class="cg" cx="'+x+'" cy="440" r="80" fill="url(#calm)"/>'});
  /* hair shafts (their tops move with the story) */
  SK.FX.forEach(function(x,k){g+='<line class="hr" x1="'+x+'" y1="452" x2="'+x+'" y2="228"/>'});
  /* cells */
  SK.TE.forEach(function(c){g+='<g class="te" transform="translate('+c[0]+' '+c[1]+')"><circle r="9"/><circle class="nu" r="4"/></g>'});
  SK.TR0.forEach(function(c){g+='<g class="tr" transform="translate('+c[0]+' '+c[1]+')"><circle r="9"/><circle class="nu" r="4"/></g>'});
  SK.TR1.forEach(function(c){g+='<g class="tr tr1" transform="translate('+c[0]+' '+c[1]+')"><circle r="9"/><circle class="nu" r="4"/></g>'});
  /* cytokines released from the needle tips */
  SK.ND.forEach(function(x,k){for(var j=0;j<3;j++)g+='<circle class="cy" data-x="'+x+'" data-k="'+(k*3+j)+'" cx="'+x+'" cy="300" r="2.8"/>'});
  /* the patch: backing and its microneedles (drawn once, moved as a unit) */
  var nd='';SK.ND.forEach(function(x){nd+='M'+(x-9)+' 212L'+x+' 302L'+(x+9)+' 212Z'});
  g+='<g id="patch"><path class="nd" d="'+nd+'"/><rect class="bk" x="100" y="196" width="600" height="16"/></g>';
  g+='</g>';
  /* labels, one set per step, all in the clear band above the skin (leaders end at the thing they name) */
  var t1=SK.TE[0],r1=SK.TR1[0];
  g+='<g id="lb1"><text class="a" x="60" y="'+(mob?84:96)+'">EFFECTOR T CELLS</text>'+(mob?'':'<text class="t" x="60" y="116">INFLAME THE HAIR FOLLICLE</text>')+
     '<path class="ldr" d="M'+(mob?150:120)+' '+(mob?100:126)+'L'+f(t1[0]-6)+' '+f(t1[1]-7)+'"/></g>';
  g+='<g id="lb2"><text class="a" x="60" y="'+(mob?84:96)+'">'+(mob?'MICRONEEDLES':'HYDROGEL MICRONEEDLES')+'</text>'+(mob?'':'<text class="t" x="60" y="116">ENTER THE SKIN AND SWELL</text>')+
     (mob?'':'<text class="a" x="740" y="96" text-anchor="end">IL-2 + CCL22</text><text class="t" x="740" y="116" text-anchor="end">RELEASED AT THE SITE</text>')+'</g>';
  g+='<g id="lb3"><text class="a" x="60" y="'+(mob?84:96)+'">'+(mob?'TREGS EXPAND':'REGULATORY T CELLS EXPAND')+'</text>'+(mob?'':'<text class="t" x="60" y="116">INFLAMMATION FALLS</text>')+
     (mob?'':'<text class="a" x="740" y="96" text-anchor="end">HAIR REGROWS</text>')+
     '<path class="ldr" d="M'+(mob?150:120)+' '+(mob?100:126)+'L'+f(r1[0]-6)+' '+f(r1[1]-7)+'"/></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),mv:$("#scMove",svg),ig:$$(".ig",svg),cg:$$(".cg",svg),hr:$$(".hr",svg),
    te:$$(".te",svg),tr1:$$(".tr1",svg),cy:$$(".cy",svg),patch:$("#patch",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=seg(p,0,.12),s2=seg(p,.36,.5),s2b=seg(p,.46,.62),s3=seg(p,.68,.8),s3b=seg(p,.74,.94);
    /* the patch: absent in step 1, comes down in step 2, lifts away in step 3 */
    var py=-60*(1-s2)-90*s3;E.patch.setAttribute("transform","translate(0 "+py.toFixed(1)+")");op(E.patch,s2*(1-s3));
    /* cytokines spread out from the tips while the patch is in */
    E.cy.forEach(function(c){var x=+c.getAttribute("data-x"),k=+c.getAttribute("data-k"),a=k*2.39996,r=s2b*(14+(k%5)*7);
      c.setAttribute("cx",(x+Math.cos(a)*r).toFixed(1));c.setAttribute("cy",(304+Math.abs(Math.sin(a))*r*1.3).toFixed(1));op(c,b*s2b*(1-s3b*.85))});
    /* inflammation falls, calm rises */
    E.ig.forEach(function(el,i){op(el,b*(1-s3)*(.75+.25*Math.sin(p*30+i*2)))});
    E.cg.forEach(function(el){op(el,b*s3b)});
    E.te.forEach(function(el,i){op(el,b*(1-.85*s3b));var c=SK.TE[i],dx=(c[0]%2?1:-1)*10*s3b;el.setAttribute("transform","translate("+(c[0]+dx).toFixed(1)+" "+(c[1]+6*s3b).toFixed(1)+")")});
    E.tr1.forEach(function(el,i){var k=seg(s3b,i/E.tr1.length*.6,i/E.tr1.length*.6+.4);op(el,b*k);var c=SK.TR1[i];el.setAttribute("transform","translate("+c[0]+" "+c[1]+") scale("+(.4+.6*k).toFixed(3)+")")});
    /* the hair regrows from a short broken stub */
    E.hr.forEach(function(el,i){el.setAttribute("y2",(228-72*seg(s3b,i*.12,.64+i*.12)).toFixed(1))});
    op(E.l1,b*s1*(1-seg(p,.27,.34)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.63,.69)));op(E.l3,b*seg(p,.76,.84));
  };
}
