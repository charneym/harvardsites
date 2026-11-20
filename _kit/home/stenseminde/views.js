/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function pfRows(list){return '<ul class="pfr">'+list.map(function(c){var nm=c[3]?'<a class="pl" href="'+c[3]+'" target="_blank" rel="noopener">'+esc(c[0])+ARRX+'</a>':esc(c[0]);
  return '<li><span class="lab tg">'+esc(c[2])+'</span><h3>'+nm+'</h3><p>'+esc(c[1])+'</p></li>'}).join("")+'</ul>'}
var MOD=["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"];
function fd(iso){var d=iso.split("-");return d[2]?(+d[2])+". "+MOD[+d[1]-1]+" "+d[0]:MOD[+d[1]-1]+" "+d[0]}
function team(){return '<div class="own">'+
  '<div class="own-n"><span class="lab kick" data-r>Ejer og direktør</span><h3 class="split">Henrik Sørensen</h3></div>'+
  '<div class="own-b"><p data-r>Stod i spidsen for pumpevirksomheden DESMI i 26 år og gjorde den, sammen med sine medarbejdere, til en af landets mest succesrige industrivirksomheder. Stiftede Stenseminde Holding i 2003.</p>'+
  '<ul class="roles" data-r><li><span>Bestyrelsesformand</span>Mariendal El-Teknik A/S</li><li><span>Bestyrelsesformand</span>Dansk Marine Center A/S</li><li><span>Bestyrelsesmedlem</span>Space Inventor A/S</li></ul></div>'+
 '</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Familieejet investeringsselskab<span class="nomob"> · Nordjylland · Est. 2003</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Langsigtet ejerskab.</span><span class="l">Nordjyske <em>rødder.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Vi investerer langsigtet og værdibåret i virksomheder med højt vækstpotentiale, enten som aktiv minoritetsejer eller som majoritetsejer.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/investeringer">Se vores investeringer '+ARR+'</a><a class="btn" href="#/kontakt">Kontakt</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Om Stenseminde Holding</span>'+
   '<h2 class="txt" id="mani">“Vi investerer som familiekontor i virksomheder med sunde værdier, hvor vi ser et udviklingspotentiale, og hvor vi kan <em>bidrage.</em>”</h2>'+
   '<p class="sig" data-r>Henrik Sørensen, ejer af Stenseminde Holding</p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2003</span><span class="k">Stenseminde Holding ApS stiftet</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">26 år</span><span class="k">Henrik Sørensen i spidsen for pumpevirksomheden DESMI</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">25,2 %</span><span class="k">Ejerandel i satellitproducenten Space Inventor, januar 2026</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Egen kapital</span><p data-r>Et familieejet investeringsselskab, der investerer som familiekontor, med langsigtede briller og uden en fonds udløbsdato.</p></div>'+
    '<div><span class="lab kick" data-r>Aktivt ejerskab</span><p data-r>Minoritet eller majoritet, men altid aktiv: med plads i bestyrelsen og industriel erfaring, der kommer i spil.</p></div>'+
    '<div><span class="lab kick" data-r>Global erfaring</span><p data-r>Mange års erfaring med internationalisering, globalt salg og leverancer til både civile og forsvarsmæssige kunder.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Vores tilgang</span><h2 class="d3">Fra pumpeindustri til <em>erhvervsfyrtårne.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Rødder</span><span>Minoritet</span><span>Majoritet</span><span>Langsigtet</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Rødder i pumpeindustrien.</h2><p>Over 26 år gjorde Henrik Sørensen og medarbejderne DESMI til en af landets mest succesrige industrivirksomheder. Erfaringen med lønsom vækst, globalisering og salg til forsvaret er det, vi bringer med ind.</p></article>'+
     '<article class="step"><h2>Aktiv minoritetsejer.</h2><p>I januar 2026 købte Stenseminde Holding 25,2 % af satellitproducenten Space Inventor i Aalborg og fik plads i bestyrelsen: kapital og industriel erfaring til at realisere vækstplanerne.</p></article>'+
     '<article class="step"><h2>Majoritetsejer, når det giver mening.</h2><p>Ved en kapitalforhøjelse i december 2025 blev vi hovedaktionær i Mariendal El-Teknik, og i 2026 overtog vi det fulde ejerskab, med ny direktion og en styrket finansiel stilling.</p></article>'+
     '<article class="step"><h2>Langsigtet ejerskab.</h2><p>Vi går ind med langsigtede briller og klare ambitioner om fremtidig lønsom vækst, for at udvikle stærke, nordjyske og danske erhvervsfyrtårne.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="criteria" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Det ser vi efter</span><h2 class="d2 split">Sunde værdier, <em>højt vækstpotentiale.</em></h2></div><p data-r>Vi investerer i virksomheder, hvor vi ser et udviklingspotentiale, og hvor vi kan bidrage.</p></div>'+
   '<dl class="facts">'+CRIT.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'+
  '</div></section>'+

  '<section class="sec dark" id="portfolio" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Investeringer</span><h2 class="d2 split">Virksomheder, vi <em>ejer og udvikler.</em></h2></div><p data-r>Fra rumfart til el-installation og lystbåde: et udvalg af virksomhederne i Stenseminde Holding, og rødderne i DESMI.</p></div>'+
   pfRows(PF)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Ejer</span><h2 class="d2 split">Familieejet, <em>nordjysk forankret.</em></h2></div><p data-r>Stenseminde Holding ejes af Henrik Sørensen, som selv sidder med i bestyrelserne i de virksomheder, vi investerer i.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Nyheder</span><h2 class="d2 split">Seneste <em>aktivitet.</em></h2></div><p data-r>Pressemeddelelser, omtale og regnskaber om Stenseminde Holdings investeringer.</p></div>'+
   newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Ejere, ledere og rådgivere</span>'+
   '<h2 class="big split">Klar til <em>næste kapitel?</em></h2>'+
   '<p class="sub" data-r>Har du en virksomhed med sunde værdier og et udviklingspotentiale, hvor kapital og industriel erfaring kan gøre en forskel, hører vi gerne fra dig.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+CVRU+'" target="_blank" rel="noopener">Se CVR-oplysninger '+ARR+'</a><a class="btn" href="'+PR+'" target="_blank" rel="noopener">Læs pressemeddelelsen</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Selskab</span><p data-r>Stenseminde Holding ApS<br>Aalborg, Nordjylland</p></div>'+
    '<div><span class="lab" data-r>CVR-nr.</span><p data-r><a class="ul" href="'+CVRU+'" target="_blank" rel="noopener">'+CVR+'</a></p></div>'+
    '<div><span class="lab" data-r>Stiftet</span><p data-r>25. marts 2003</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Selskab</span>Stenseminde Holding ApS<br>Aalborg, Nordjylland</div>'+
   '<div class="c"><span class="lab">CVR-nr.</span><a class="ul" href="'+CVRU+'" target="_blank" rel="noopener">'+CVR+'</a></div>'+
   '<div class="c"><span class="lab">Udforsk</span><a class="ul" href="#/tilgang">Tilgang</a><br><a class="ul" href="#/kriterier">Kriterier</a><br><a class="ul" href="#/investeringer">Investeringer</a><br><a class="ul" href="#/ejer">Ejer</a><br><a class="ul" href="#/nyheder">Nyheder</a></div>'+
   '<div class="c"><span class="lab">Est.</span>2003</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 76" aria-hidden="true"><text x="450" y="62" text-anchor="middle" style="font-family:\'Libre Caslon Text\',Georgia,serif;font-weight:400;font-size:84px;letter-spacing:.03em">STENSEMINDE</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Stenseminde Holding ApS</span><span class="lab">Konceptwebsite</span><a class="lab ul" href="#main" id="toTop">Til toppen ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={om:"about",about:"about",tilgang:"story",kriterier:"criteria",investeringer:"portfolio",ejer:"team",nyheder:"news",kontakt:"contact",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Stenseminde Holding — Nordjysk familieejet investeringsselskab",x:"Forside"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var r=route(a.getAttribute("href"));if(!r.sec)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home")return;e.stopImmediatePropagation();
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"});
(function(){var r=route(location.hash);if(!r.sec)return;var n=0;(function wait(){if(++n>60)return;var lk=document.documentElement.style.overflow==="hidden"||!document.getElementById(r.sec);if(lk){setTimeout(wait,150);return}
  setTimeout(function(){secGo(r.sec,true);try{history.replaceState(null,"","#/")}catch(x){}},300)})()})();
