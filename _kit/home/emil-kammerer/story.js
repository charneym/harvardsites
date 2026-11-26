/* The story scene (BL/BY/DB): what a Kammerer Trennschieber does (emil-kammerer.de > Sonderarmaturen: "Trennschieber zum
   Absperren und Durchschneiden von stehenden und fallenden Produktsäulen"; Dichtung G: "produktdichte Absperrung von
   Granulaten, Stäuben, kristallinen Produkten"; types FT/ST: "druckdicht ... vakuumdicht"), drawn as ONE valve in section,
   kept on screen for all three steps:
   Step 1 (Offen): the pipe, flanges, body and pneumatic drive draw in; granulate falls freely through the open bore.
   Step 2 (Trennen): the knife runs in from its housing and cuts through the falling product column; what is above stays.
   Step 3 (Abdichten): the seal system closes round the knife: produktdicht, druckdicht, vakuumdicht. */
var SCW=760,SCH=520;
var KY=252,KH=14,KOPEN=362,KSHUT=186,KLEN=236;
function kmScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="140 0 600 '+SCH+'" aria-hidden="true">';
  g+='<text class="t" x="150" y="30">'+(mob?"TRENNSCHIEBER":"TRENNSCHIEBER, IM SCHNITT")+'</text>';
  /* pipe, flanges, valve body with the bore, the knife housing and the pneumatic drive */
  g+='<g id="kmB">'+
    '<path class="pw sD" d="M196 56V206M304 56V206"/>'+
    '<path class="fl sD" d="M160 206H340V222H160Z"/><path class="fl sD" d="M160 292H340V308H160Z"/>'+
    '<path class="bd sD" d="M150 222H600V292H150Z"/>'+
    '<path class="bo sD" d="M196 222V292M304 222V292"/>'+
    '<path class="pw sD" d="M196 308V470M304 308V470"/>'+
    '<path class="cy sD" d="M600 230H716V284H600Z"/>'+
    '<path class="cy2 sD" d="M612 230V284M704 230V284"/>'+
    '</g>';
  /* the product column: granulate */
  g+='<g id="kmP">';
  for(i=0;i<46;i++){var x=206+((i*37)%88),r=3.2+((i*7)%4)*0.7;g+='<circle class="gr" cx="'+x+'" cy="60" r="'+r.toFixed(1)+'"/>'}
  g+='</g>';
  /* the knife and its piston rod */
  g+='<g id="kmK"><rect class="kn" x="'+KOPEN+'" y="'+KY+'" width="'+KLEN+'" height="'+KH+'"/><path class="kne" d="M'+KOPEN+' '+KY+'L'+(KOPEN-10)+' '+(KY+KH/2)+'L'+KOPEN+' '+(KY+KH)+'Z"/></g>';
  g+='<path id="kmRod" class="rod" d="M598 259H600"/>';
  /* the seal system round the knife, shown in step 3 */
  g+='<g id="kmS"><path class="se" d="M164 246H340"/><path class="se" d="M164 272H340"/><path class="se" d="M180 246V272"/></g>';
  /* labels, per step (8px+ clear of every stroke) */
  g+='<g id="kmL1"><text class="t s1" x="'+(mob?352:360)+'" y="120">'+(mob?"PRODUKT":"GRANULAT · STAUB · KRISTALLE")+'</text></g>';
  g+='<g id="kmL2"><text class="t s1" x="'+(mob?352:420)+'" y="334">'+(mob?"MESSER":"TRENNMESSER")+'</text><text class="t" x="'+(mob?560:610)+'" y="'+(mob?206:214)+'">'+(mob?"ANTRIEB":"PNEUMATIK")+'</text></g>';
  g+='<g id="kmL3"><text class="t s1" x="'+(mob?352:360)+'" y="334">'+(mob?"DICHT":"PRODUKT-, DRUCK-, VAKUUMDICHT")+'</text><text class="t" x="'+(mob?352:360)+'" y="120">'+(mob?"GEHALTEN":"PRODUKTSÄULE GEHALTEN")+'</text></g>';
  g+='<g id="lb1"><text class="a" x="150" y="508">1 · OFFEN</text></g>';
  g+='<g id="lb2"><text class="a" x="150" y="508">2 · TRENNEN</text></g>';
  g+='<g id="lb3"><text class="a" x="150" y="508">3 · ABDICHTEN</text></g>';
  return g+'</svg>';
}
function scene(){return kmScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#kmB .sD"),se:dl("#kmS .se"),gr:$$("#kmP .gr",svg),P:$("#kmP",svg),K:$("#kmK",svg),kn:$("#kmK .kn",svg),kne:$("#kmK .kne",svg),rod:$("#kmRod",svg),S:$("#kmS",svg),
    L1:$("#kmL1",svg),L2:$("#kmL2",svg),L3:$("#kmL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var G=E.gr.map(function(c,k){return {c:c,x:+c.getAttribute("cx"),r:+c.getAttribute("r"),ph:(k*0.137)%1,
    rest:KY-4.5-((k*11)%9)*5.4}});
  var lastB=-1,V=1312;   /* fall speed: 410px per 1/3.2 of the scroll */
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function yf(g,q){return 60+((g.ph+q*3.2)%1)*410}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;op(E.t0,b)}
    /* step 1: the valve draws in and granulate falls through the open bore */
    draw(E.base,b*seg(p,0,.18));
    op(E.P,b*seg(p,.1,.2));
    /* step 2: the knife runs in (p .38-.56) */
    var kc=seg(p,.38,.56),kx=KOPEN+(KSHUT-KOPEN)*kc;
    op(E.K,b*seg(p,.04,.16));op(E.rod,b*seg(p,.04,.16));
    E.kn.setAttribute("x",kx.toFixed(1));
    E.kne.setAttribute("d","M"+kx.toFixed(1)+" "+KY+"L"+(kx-10).toFixed(1)+" "+(KY+KH/2)+"L"+kx.toFixed(1)+" "+(KY+KH)+"Z");
    E.rod.setAttribute("d","M"+Math.min(600,kx+KLEN).toFixed(1)+" 259H600");
    /* granulate: a falling stream until the knife edge passes a grain's column; then grains above it come to rest
       on the knife, grains below fall on and leave the pipe (stateless, so scrubbing back works) */
    G.forEach(function(g){
      var tc=.38+.18*Math.min(1,Math.max(0,(KOPEN-(g.x-g.r-4))/(KOPEN-KSHUT))),y,o=1;
      if(p<tc){y=yf(g,p)}
      else{
        var ya=yf(g,tc);
        if(ya<KY-g.r){y=Math.min(g.rest,ya+(p-tc)*V)}
        else{y=Math.max(ya,KY+KH+g.r+1)+(p-tc)*V;if(y>470)o=0}
      }
      if(y>452)o=Math.min(o,Math.max(0,1-(y-452)/16));
      g.c.setAttribute("cy",y.toFixed(1));g.c.style.opacity=o.toFixed(2);
    });
    op(E.L1,b*seg(p,.14,.22)*(1-seg(p,.3,.36)));
    op(E.L2,b*seg(p,.42,.5)*(1-seg(p,.64,.68)));
    /* step 3: the seals close round the knife */
    op(E.S,b*seg(p,.68,.72));draw(E.se,b*seg(p,.68,.84));
    op(E.L3,b*seg(p,.76,.84));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
