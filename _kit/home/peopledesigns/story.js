/* The story scene (BL/BY/DB): how People Designs works (peopledesigns.com #company, #expertise, #work-with-us), as ONE
   continuous engraved scene. Left: the intervention, a page being drafted. Right: twelve people, each labelled with one
   of the twelve languages People Designs has built interventions in. Step 1 (explore): the people are drawn in and the
   page is sketched. Step 2 (tailor): a line runs from the page to each person and a message travels along it, and each
   person's language appears. Step 3 (deliver and study): every person is reached (filled in the accent) and a ring of
   study closes around each. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
var LANGS=["SPANISH","ARABIC","CHINESE","VIETNAMESE","TAGALOG","KOREAN","FARSI","RUSSIAN","KHMER","FRENCH","ARMENIAN","PORTUGUESE"];
var PPL=(function(){var a=[],i;for(i=0;i<12;i++){var c=i%4,r=Math.floor(i/4);a.push({x:340+c*118,y:118+r*150,d:((i*7)%12)/12})}return a})();
var SRC={x:52,y:150,w:150,h:220};
function curve(P){var x0=SRC.x+SRC.w,y0=SRC.y+SRC.h*.5,x1=P.x-34,y1=P.y-8,mx=(x0+x1)/2;
  return "M"+x0+" "+y0+"C"+(mx).toFixed(1)+" "+y0+" "+(mx).toFixed(1)+" "+y1+" "+x1+" "+y1}
function person(P,k){var x=P.x,y=P.y;
  return '<g class="pp" data-k="'+k+'"><circle class="pf" cx="'+x+'" cy="'+(y-24)+'" r="13"/><path class="pf" d="M'+(x-26)+' '+(y+16)+'c0-16 11-24 26-24s26 8 26 24z"/>'+
    '<circle class="ph pd" cx="'+x+'" cy="'+(y-24)+'" r="13"/><path class="pb pd" d="M'+(x-26)+' '+(y+16)+'c0-16 11-24 26-24s26 8 26 24"/>'+
    '<circle class="rg" cx="'+x+'" cy="'+(y-8)+'" r="40"/></g>'}
function memScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase"><path class="frm sD" d="M24 20H736M24 500H736"/>';
  g+='<text class="t" x="24" y="10">ONE INTERVENTION · MANY READERS · SCHEMATIC</text></g>';
  /* the page: frame, header band and greeked lines */
  g+='<g id="scSrc"><path class="bl sD" d="M'+SRC.x+' '+SRC.y+'h'+SRC.w+'v'+SRC.h+'h-'+SRC.w+'z"/>';
  g+='<path class="hb sD" d="M'+(SRC.x+14)+' '+(SRC.y+22)+'h'+(SRC.w-28)+'M'+(SRC.x+14)+' '+(SRC.y+34)+'h'+(SRC.w-60)+'"/>';
  for(i=0;i<7;i++)g+='<path class="tl sD" d="M'+(SRC.x+14)+' '+(SRC.y+64+i*18)+'h'+([118,104,112,92,116,84,100][i])+'"/>';
  g+='</g><g id="scLn">';
  PPL.forEach(function(P,k){g+='<path class="ln" data-k="'+k+'" d="'+curve(P)+'"/>'});
  g+='</g><g id="scMs">';
  PPL.forEach(function(P,k){g+='<circle class="ms" data-k="'+k+'" cx="0" cy="0" r="'+(o.mob?5.5:4.2)+'"/>'});
  g+='</g><g id="scPp">';
  PPL.forEach(function(P,k){g+=person(P,k)});
  g+='</g><g id="scLg">';
  PPL.forEach(function(P,k){g+='<text class="lg" data-k="'+k+'" x="'+P.x+'" y="'+(P.y+(o.mob?44:38))+'" text-anchor="middle">'+LANGS[k]+'</text>'});
  g+='</g>';
  g+='<g id="lb1"><text class="a" x="24" y="48">EXPLORE · THE ISSUE AND THE PEOPLE</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="48">TAILOR · A MESSAGE FOR EACH READER</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="48">DELIVER · AND STUDY THE RESULTS</text></g>';
  g+='<text class="t k1" x="24" y="486">● TAILORED MESSAGE</text><text class="t k2" x="'+(o.mob?300:230)+'" y="486">◯ STUDIED</text>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;p.style.strokeDashoffset=L;return [p,L]})};
  var E={base:dl("#scBase .sD"),src:dl("#scSrc .sD"),fade:$$("#scBase text, .k1, .k2",svg),
    pp:$$(".pp",svg).map(function(el){var k=+el.getAttribute("data-k");return {el:el,P:PPL[k],pd:$$(".pd",el).map(function(p){var L=p.getTotalLength();p.style.strokeDasharray=L+" "+L;return [p,L]}),pf:$$(".pf",el),rg:$(".rg",el)}}),
    ln:$$(".ln",svg).map(function(el){var L=el.getTotalLength();el.style.strokeDasharray=L+" "+L;el.style.strokeDashoffset=L;return {el:el,L:L,P:PPL[+el.getAttribute("data-k")]}}),
    ms:$$(".ms",svg),lg:$$(".lg",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  E.rgL=E.pp.map(function(x){var L=2*Math.PI*40;x.rg.style.strokeDasharray=L+" "+L;return L});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function cl(v){return v<0?0:v>1?1:v}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var grow=seg(p,0,.1),sk=seg(p,.02,.14),tl=seg(p,.34,.58),go=seg(p,.68,.88);
    /* step 1: the page is sketched, the people are drawn in */
    E.src.forEach(function(a,i){var v=cl(sk*1.6-i*.07);a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1);op(a[0],b)});
    E.pp.forEach(function(x,i){var v=cl(grow*1.7-x.P.d*.7);x.pd.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)});op(x.el,b);
      /* step 3: each person is reached (filled) and a ring of study closes around them */
      var f=cl(go*1.6-x.P.d*.6);x.pf.forEach(function(el){el.style.opacity=(.85*f).toFixed(3)});
      x.rg.style.strokeDashoffset=(E.rgL[i]*(1-cl(go*1.5-x.P.d*.5-.1))).toFixed(1);
      x.el.classList.toggle("on",tl>.02)});
    /* step 2: a line from the page to each reader, a message travelling along it, and each reader's language */
    E.ln.forEach(function(x,i){var v=cl(tl*1.7-x.P.d*.7);x.el.style.strokeDashoffset=(x.L*(1-v)).toFixed(1);op(x.el,b*(1-.55*go));
      var m=E.ms[i],t=cl(tl*1.5-x.P.d*.5),pt=x.el.getPointAtLength(x.L*t);m.setAttribute("cx",pt.x.toFixed(1));m.setAttribute("cy",pt.y.toFixed(1));
      op(m,b*(t>0&&t<1?1:0)*(1-go));op(E.lg[i],b*cl(tl*1.6-x.P.d*.6-.2))});
    op(E.l1,b*seg(p,.03,.1)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.74,.82));
  };
}
