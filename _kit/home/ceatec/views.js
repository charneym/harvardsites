/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function meds(){return '<ul class="pfr pipe np">'+MED.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function mats(){return '<div class="ev ind"><span class="lab kick" data-r>Qualität</span><dl>'+MAT.map(function(c){return '<div data-r><dt class="lab">'+esc(c[0])+'</dt><dd>'+esc(c[1])+'</dd></div>'}).join("")+'</dl></div>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* what CEATEC does beyond the catalogue (ceatec.de > Innovationen, Service > AT-Beratung, Dokumentenservice), each with a small line icon */
var ICO={
 s:'<svg viewBox="0 0 56 56"><path d="M8 46L40 14L46 20L14 52Z"/><path class="a" d="M36 18L42 24"/><path d="M8 46L6 52L14 52"/></svg>',
 w:'<svg viewBox="0 0 56 56"><path d="M18 6H38V18H18Z"/><path d="M24 18V30H32V18"/><path class="a" d="M26 30V38H30V30"/><path d="M6 46H50V50H6Z"/></svg>',
 f:'<svg viewBox="0 0 56 56"><path d="M6 10H38V32H20L12 40V32H6Z"/><path class="a" d="M24 36V42H38L46 48V42H50V22H42"/></svg>',
 l:'<svg viewBox="0 0 56 56"><path d="M12 6H36L44 14V50H12Z"/><path d="M36 6V14H44"/><path class="a" d="M18 24H38M18 32H38M18 40H30"/></svg>'};
var SERV=[
 ["s","Maßanfertigung","Ihre Idee als Prototyp","Eine eigene Forschungs- und Entwicklungsabteilung entwirft und baut Prototypen kundenspezifischer Instrumente: für Projekte, die über das Standardinstrumentarium hinausgehen."],
 ["w","Handwerk und CNC","Gefertigt in der Region","Familienbetriebe in Tuttlingen und Umgebung fertigen in unserem Auftrag, mit langjähriger Erfahrung im Handwerk und mit Technologien wie CNC-Maschinen."],
 ["f","AT-Beratung","Über 40 Jahre Erfahrung","Schulung des OP-Personals zu Sterilisation, Hygiene, Instrumentenkunde und Sicherheit im OP, Beratung für Verwaltung und Fachhandel. Das Kennenlerngespräch ist kostenfrei."],
 ["l","Dokumentenservice","Unterlagen per E-Mail","Gebrauchsanleitungen und Aufbereitungshinweise für Klasse I, IIa und IIb, das Zertifikat nach EN ISO 13485 und die AGB: bequem angefordert, schnell zugestellt."]];
function serv(){return '<div class="caps svc">'+SERV.map(function(c){return '<div class="cap">'+ICO[c[0]]+'<span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[2])+'</h3><p data-r>'+esc(c[3])+'</p></div>'}).join("")+'</div>'}
var NEWS=[
 ["16.–19.11.2026","Aussteller auf der MEDICA 2026 in Düsseldorf","MEDICA","https://www.medica-tradefair.com/vis/v1/en/exhibitors/medica2026.3077074"],
 ["09.–12.02.2026","Mit eigenem Stand auf der WHX Dubai, ehemals Arab Health","CEATEC",PW+"/arab-health/"],
 ["17.–20.11.2025","MEDICA 2025: Halle 15, Stand 15G24","CEATEC",PW+"/medica/"],
 ["Weltweit","Gesucht: neue Vertriebspartner mit Erfahrung in der Neurochirurgie","CEATEC",PW+"/ceatec/international/"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="light">'+
   '<span class="lab eyebrow" data-r>Chirurgische Instrumente<span class="nomob"> · Wurmlingen bei Tuttlingen</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Gute Instrumente</span> <span class="l">haben viele.</span> <span class="l"><em>Wir bieten mehr.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Mehr als 15.000 chirurgische Instrumente aus deutschem rostfreiem Edelstahl, für Allgemeinchirurgie, Neurochirurgie und Retraktor-Systeme, dazu Instrumente nach Ihren Wünschen.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/produkte">Zu den Produkten '+ARR+'</a><a class="btn" href="#/kontakt">Kontakt aufnehmen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Seit 1995 in Wurmlingen</span>'+
   '<h2 class="txt" id="mani">Ein Familienunternehmen in zweiter Generation, nah am Chirurgen: Wir sprechen seine Ideen und Wünsche durch und <span class="nw">kümmern uns</span> <span class="nw">um die Umsetzung.</span> <em><span class="nw">Qualität, Sicherheit,</span> <span class="nw">Service, Innovationen.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1995</span><p class="k">gegründet, heute in zweiter Generation in Familienhand</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">15.000+</span><p class="k">chirurgische Instrumente im Programm, mit bis zu zehn Jahren Garantie</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">31</span><p class="k">Länder, in denen CEATEC vertreten ist, von Mexiko bis Vietnam</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Wissenswertes</span><h2 class="d3"><span class="nw">Der Werdegang</span> <em class="nw">eines Instruments.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Rohling</span><span>Fräsen</span><span>Handarbeit</span><span>Veredeln</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Aus der</span> <span class="nw">Stahlstange.</span></h2><p>Am Beispiel einer Arterienklemme: Flache Stahlstangen werden gespalten, beim Abgraten wird das Instrument ausgestochen. Es entsteht der Rohling.</p></article>'+
     '<article class="step"><h2><span class="nw">Gefräst</span> <span class="nw">und gefügt.</span></h2><p>Sperre, Schluss und Maul werden gefräst, dann werden die beiden Instrumententeile zusammengefügt und der Schluss für Stift oder Schraube vorgebohrt.</p></article>'+
     '<article class="step"><h2><span class="nw">Von Hand</span> <span class="nw">vollendet.</span></h2><p>Richten, Feilen, Schleifen: Die Arbeitsschritte, die ein gutes Instrument ausmachen, entstehen in Handarbeit, bei Familienbetrieben rund um Tuttlingen.</p></article>'+
     '<article class="step"><h2><span class="nw">Gehärtet</span> <span class="nw">und veredelt.</span></h2><p>Härten, Polieren, Mattieren und Elektropolieren, dann Auswaschen und Ölen. Erst dann ist das Instrument fertig.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="innovationen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Innovationen</span><h2 class="d2 split"><span class="nw">Weil Sie wissen,</span> <em class="nw">was der OP braucht.</em></h2></div><p data-r>CEATEC bietet maßgeschneiderte chirurgische Instrumente an. Teilen Sie uns Ihre Projekte mit, die über die Standardinstrumente hinausgehen: Wir interessieren uns für Ihre Ideen.</p></div>'+
   serv()+
  '</div></section>'+

  '<section class="sec dark2" id="produkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte</span><h2 class="d2 split"><span class="nw">Von der Stanze</span> <em class="nw">zum Retraktor.</em></h2></div><p data-r>Unser Fokus liegt in der Allgemeinchirurgie, der Neurochirurgie (Wirbelsäule und Mikrochirurgie), in Retraktor-Systemen und kundenspezifischen Instrumenten. Viele Modelle sind ab Lager lieferbar.</p></div>'+
   meds()+
   mats()+
  '</div></section>'+

  '<section class="sec light" id="unternehmen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Der direkte Draht</span> <em class="nw">zum Kunden.</em></h2></div><p data-r>Unser „Mehr“ im Kundenservice entsteht durch die besondere Nähe zum Chirurgen. Dafür stehen unser Team in Wurmlingen und Vertriebspartner vor Ort, die exklusiv für CEATEC tätig sind.</p></div>'+
   team()+
   '<div class="ozs">'+
    '<div class="oz-site"><span class="lab" data-r>Zertifiziert</span><h3 data-r>EN ISO 13485</h3><p data-r>Bei der DQS zertifiziert und von Beginn an nach der DIN EN ISO-Norm und weiteren Standards gearbeitet.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>International</span><h3 data-r>Vertreten in 31 Ländern</h3><p data-r>Von Ägypten bis Südkorea, von Finnland bis Peru, mit Exklusivkunden in Ägypten, Jordanien, Italien, Russland und Mexiko.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Standort</span><h3 data-r>Wurmlingen bei Tuttlingen</h3><p data-r>Nah an den Familienbetrieben, die unsere Instrumente fertigen: So schaffen und erhalten wir Arbeitsplätze in der Region.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="aktuelles" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Aktuelles</span><h2 class="d2 split"><span class="nw">Wir sind</span> <em class="nw">vor Ort.</em></h2></div><p data-r>Auf den großen Messen der Medizintechnik mit eigenem Stand. Sprechen Sie uns an, und wir vereinbaren gern einen Termin vor Ort.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Ihr Instrument,</span> <em class="nw">unsere Aufgabe.</em></h2>'+
   '<p class="sub" data-r>Ob aus dem Katalog oder nach Ihrer Idee gefertigt: sprechen Sie uns an. Wir beraten Sie persönlich und liefern schnell.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>CEATEC Medizintechnik GmbH<br>Untere Hauptstrasse 6<br>78573 Wurmlingen</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Telefax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Kataloge</span><p data-r><a class="ul" href="'+PW+'/produkte/" target="_blank" rel="noopener">Blätterkataloge online</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>CEATEC Medizintechnik GmbH<br>Untere Hauptstrasse 6, 78573 Wurmlingen</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/innovationen">Innovationen</a><br><a class="ul" href="#/unternehmen">Unternehmen</a><br><a class="ul" href="#/aktuelles">Aktuelles</a></div>'+
   '<div class="c"><span class="lab">Zertifiziert</span>EN ISO 13485 (DQS)<br>Familienunternehmen seit 1995</div>'+
  '</div>'+'<svg class="bigsvg cem" viewBox="-1 -1 397.4 74" aria-hidden="true"><path class="ceg" d="M21.8 35.0Q21.8 28.5 24.700000000000003 23.9Q27.6 19.299999999999997 32.35 16.9Q37.1 14.5 42.800000000000004 14.5Q47.800000000000004 14.5 51.60000000000001 15.75Q55.400000000000006 17.0 58.400000000000006 19.15Q61.400000000000006 21.299999999999997 63.7 23.699999999999996V5.5Q59.5 2.200000000000003 54.5 0.29999999999999716Q49.5 -1.6000000000000085 41.800000000000004 -1.6000000000000085Q33.4 -1.6000000000000085 26.3 0.9999999999999929Q19.200000000000003 3.5999999999999943 14.100000000000001 8.499999999999996Q9.0 13.399999999999999 6.2 20.099999999999998Q3.4000000000000004 26.799999999999997 3.4000000000000004 35.0Q3.4000000000000004 43.2 6.2 49.900000000000006Q9.0 56.6 14.100000000000001 61.5Q19.200000000000003 66.4 26.3 69.0Q33.4 71.6 41.800000000000004 71.6Q49.5 71.6 54.5 69.69999999999999Q59.5 67.8 63.7 64.5V46.3Q61.400000000000006 48.7 58.400000000000006 50.8Q55.400000000000006 52.9 51.60000000000001 54.2Q47.800000000000004 55.5 42.800000000000004 55.5Q37.1 55.5 32.35 53.1Q27.6 50.7 24.700000000000003 46.05Q21.8 41.4 21.8 35.0ZM89.70000000000002 70.0H125.00000000000001V56.1H89.70000000000002ZM89.70000000000002 13.899999999999999H125.00000000000001V0.0H89.70000000000002ZM89.70000000000002 40.0H123.00000000000001V26.4H89.70000000000002ZM78.50000000000001 0.0V70.0H94.70000000000002V0.0ZM282.6 70.0H317.9V56.1H282.6ZM282.6 13.899999999999999H317.9V0.0H282.6ZM282.6 40.0H315.9V26.4H282.6ZM271.4 0.0V70.0H287.6V0.0ZM347.1 35.0Q347.1 28.5 350.0 23.9Q352.90000000000003 19.299999999999997 357.65000000000003 16.9Q362.40000000000003 14.5 368.1 14.5Q373.1 14.5 376.90000000000003 15.75Q380.70000000000005 17.0 383.70000000000005 19.15Q386.70000000000005 21.299999999999997 389.0 23.699999999999996V5.5Q384.8 2.200000000000003 379.8 0.29999999999999716Q374.8 -1.6000000000000085 367.1 -1.6000000000000085Q358.7 -1.6000000000000085 351.6 0.9999999999999929Q344.5 3.5999999999999943 339.4 8.499999999999996Q334.3 13.399999999999999 331.5 20.099999999999998Q328.7 26.799999999999997 328.7 35.0Q328.7 43.2 331.5 49.900000000000006Q334.3 56.6 339.4 61.5Q344.5 66.4 351.6 69.0Q358.7 71.6 367.1 71.6Q374.8 71.6 379.8 69.69999999999999Q384.8 67.8 389.0 64.5V46.3Q386.70000000000005 48.7 383.70000000000005 50.8Q380.70000000000005 52.9 376.90000000000003 54.2Q373.1 55.5 368.1 55.5Q362.40000000000003 55.5 357.65000000000003 53.1Q352.90000000000003 50.7 350.0 46.05Q347.1 41.4 347.1 35.0Z"/><path class="cer" d="M150.8 56.5H187.8L186.70000000000002 43.599999999999994H152.0ZM169.10000000000002 25.699999999999996 179.0 48.4 178.4 52.7 186.8 70.0H206.0L169.10000000000002 -4.400000000000006L132.3 70.0H151.4L160.10000000000002 52.0L159.3 48.3ZM207.3 15.099999999999994H226.5V70.0H243.4V15.099999999999994H262.7V0.0H207.3Z"/></svg>'+
  '<div class="legal"><span class="lab">© 2026 CEATEC Medizintechnik GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",werdegang:"story",produkte:"produkte",innovationen:"innovationen",unternehmen:"unternehmen",aktuelles:"aktuelles",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"CEATEC Medizintechnik GmbH — Chirurgische Instrumente aus Wurmlingen bei Tuttlingen",x:"Start"};
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
