/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function pfRows(list){return '<ul class="pfr">'+list.map(function(c){return '<li><span class="lab tg">'+esc(c[1])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[2])+'</p><a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener" aria-label="Visitar '+esc(c[0])+'">Visitar</a></li>'}).join("")+'</ul>'}
function funds(){return '<div class="funds">'+FUNDS.map(function(F){return '<article class="fund"><div class="fh"><span class="lab kick" data-r>'+esc(F.st)+'</span><h3 class="fn" data-r>'+esc(F.n)+'</h3><span class="fv" data-r>'+esc(F.v)+'</span></div><p class="fd" data-r>'+esc(F.d)+'</p><dl class="facts">'+F.f.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl><span class="lab reg" data-r>'+esc(F.reg)+'</span></article>'}).join("")+'</div>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Capital de risco<span class="nomob"> · Lisboa, desde a Praça do Príncipe Real</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Transformar hoje.</span><span class="l"><em>Impacto amanhã.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Sociedade gestora independente de fundos de capital de risco que investe de forma responsável em negócios de média dimensão, com o objetivo de gerar retornos atrativos para os seus Investidores.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/fundos">Os nossos fundos '+ARR+'</a><a class="btn" href="#/contactos">Contacte-nos</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="sobre" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Bem-vindo</span>'+
   '<h2 class="txt" id="mani">Um grupo de profissionais independentes, com experiência ampla e complementar <em>em todo o ciclo do capital de risco.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">71,5 M€</span><span class="k">Fundo Touro I, de crescimento e compra, em investimento</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">21,1 M€</span><span class="k">Fundo Touro Next (SIFIDE II), fecho final</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">13</span><span class="k">Participadas desde 2023, nove delas em 2025</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Abordagem</span><p data-r>Posicionamento colaborativo com os negócios alvo e as participadas do portefólio.</p></div>'+
    '<div><span class="lab kick" data-r>Arbitragem</span><p data-r>Mapeamento estratégico contínuo de entradas e saídas na carteira de investimento.</p></div>'+
    '<div><span class="lab kick" data-r>Foco operacional</span><p data-r>Maior peso na criação de valor através das variáveis operacionais.</p></div>'+
    '<div><span class="lab kick" data-r>Equipa</span><p data-r>Senioridade, complementaridade e experiência em todo o ciclo do capital de risco.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">A nossa abordagem estratégica</span><h2 class="d3">Ligar, transformar, <em>crescer.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Ligar</span><span>Transformar</span><span>Crescer</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Ligar.</h2><p>Ligar o capital a empresários, a equipas de gestão com ambição e a negócios que demonstrem potencial de crescimento.</p></article>'+
     '<article class="step"><h2>Transformar.</h2><p>Criar valor de negócio em cada participada através de um Programa de Mudança feito à sua medida.</p></article>'+
     '<article class="step"><h2>Crescer.</h2><p>Fazer crescer a carteira de investimentos de forma sustentada e responsável.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="fundos" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Fundos e critérios</span><h2 class="d2 split">Negócios comprovados, <em>a operar em Portugal.</em></h2></div><p data-r>Dois fundos de capital de risco fechados, registados na CMVM: um para adquirir o controlo de negócios industriais maduros, outro para investir em Investigação e Desenvolvimento.</p></div>'+
   funds()+
  '</div></section>'+

  '<section class="sec dark" id="participadas" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Participadas</span><h2 class="d2 split">Da indústria <em>à inteligência artificial.</em></h2></div><p data-r>Treze participadas, da produção de sacos de papel e produtos à base de carne à digitalização industrial e ao retalho com IA.</p></div>'+
   pfRows(PF)+
  '</div></section>'+

  '<section class="sec light" id="equipa" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Equipa</span><h2 class="d2 split">Senioridade e <em>complementaridade.</em></h2></div><p data-r>Sócios com percurso na banca, na consultoria e na gestão de multinacionais, apoiados por um Conselho Consultivo ibérico.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="noticias" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Notícias</span><h2 class="d2 split">Na <em>imprensa.</em></h2></div><p data-r>Investimentos, fundos e entrevistas.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contactos" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Empresários, equipas de gestão e assessores</span>'+
   '<h2 class="big split">Vamos falar sobre <em>o seu negócio.</em></h2>'+
   '<p class="sub" data-r>Se lidera ou assessora um negócio de média dimensão a operar em Portugal, com potencial de crescimento, gostaríamos de o conhecer.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Escreva-nos '+ARR+'</a><a class="btn" href="'+MAP+'" target="_blank" rel="noopener">Ver no mapa</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Escritório</span><p data-r>Touro Capital Partners, SCR, S.A.<br>Praça do Príncipe Real n.º 11, 1.º<br>1250-184 Lisboa</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Mapa</a></div>'+
    '<div><span class="lab" data-r>Contacto</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Recrutamento: <a class="ul" href="mailto:'+MAILCV+'">'+MAILCV+'</a></p></div>'+
    '<div><span class="lab" data-r>Investidores</span><p data-r><a class="ul" href="'+AREA+'" target="_blank" rel="noopener">Área Reservada</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Escritório</span>Praça do Príncipe Real n.º 11, 1.º<br>1250-184 Lisboa</div>'+
   '<div class="c"><span class="lab">Contacto</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="'+AREA+'" target="_blank" rel="noopener">Área Reservada</a></div>'+
   '<div class="c"><span class="lab">Explorar</span><a class="ul" href="#/more/abordagem">Abordagem</a><br><a class="ul" href="#/more/fundos">Fundos</a><br><a class="ul" href="#/more/participadas">Participadas</a><br><a class="ul" href="#/more/equipa">Equipa</a><br><a class="ul" href="#/more/noticias">Notícias</a></div>'+
   '<div class="c"><span class="lab">Regulação</span>Sociedade de capital de risco autorizada e regulada pela CMVM</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 60" aria-hidden="true"><text x="260" y="50" text-anchor="middle" style="font-family:\'Manrope\',Arial,sans-serif;font-weight:700;font-size:64px;letter-spacing:.08em">TOURO</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Touro Capital Partners</span><span class="lab">Website conceptual</span><a class="lab ul" href="#main" id="toTop">Voltar ao topo ↑</a></div></footer>';
}

/* ================= BUILD-OUT PAGES (HOME_BRIEF update 2026-11-20): every nav item but Contactos opens #/more/<item> ================= */
var MORE={abordagem:["Abordagem","desenvolvida","abordagem"],fundos:["Fundos","desenvolvidos","fundos"],participadas:["Participadas","desenvolvidas","participadas"],equipa:["Equipa","desenvolvida","equipa"],noticias:["Notícias","desenvolvidas","noticias"]};
function vMore(id){var m=MORE[id];
  return '<section class="ph-head more" data-field data-theme="dark"><span class="lab eyebrow">Pré-visualização do conceito</span>'+
   '<h1 class="d1" id="pageTitle" tabindex="-1">'+esc(m[0])+', <em>'+m[1]+'.</em></h1>'+
   '<p class="lede intro" data-r>Este é um conceito para a página inicial. Se gostar da direção, desenvolvo esta página e o resto do site no mesmo estilo, com a vossa equipa, participadas e notícias, e trato da migração a partir do site atual. Basta responder ao e-mail em que recebeu este link e seguimos a partir daí.</p>'+
   '<div class="act more-act" data-r><a class="btn solid" href="#/">Voltar à página inicial '+ARR+'</a></div>'+
   '<a class="ul more-lk" data-r href="#/'+m[2]+'">Ou continue a explorar o conceito</a></section>';
}

/* ================= ROUTER: #/ is the home page; #/<section> scrolls to that section; #/more/<item> is a build-out page ================= */
var SECS={sobre:"sobre",abordagem:"story",fundos:"fundos",participadas:"participadas",equipa:"equipa",noticias:"noticias",contactos:"contactos"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  if(p[0]==="more"&&MORE[p[1]])return {k:"more-"+p[1],v:function(){return vMore(p[1])},t:MORE[p[1]][0]+" — Touro Capital Partners",x:MORE[p[1]][0]};
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Touro Capital Partners — Capital de risco, Lisboa",x:"Início"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
/* on the home page, section links scroll in place */
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a||curKey!=="home")return;var r=route(a.getAttribute("href"));if(r.k!=="home"||!r.sec)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home"||r.k!=="home")return;e.stopImmediatePropagation();
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"});
/* arriving at a section from a build-out page (or a cold link): wait for the home view, then jump to the section */
function secAfter(sec){var n=0;(function wait(){if(++n>80)return;var lk=document.documentElement.style.overflow==="hidden"||curKey!=="home"||busy||!document.getElementById(sec);if(lk){setTimeout(wait,120);return}
  setTimeout(function(){secGo(sec,true);try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"},250)})()}
addEventListener("hashchange",function(){var r=route(location.hash);if(curKey!=="home"&&r.k==="home"&&r.sec)secAfter(r.sec)});
(function(){var r=route(location.hash);if(r.k==="home"&&r.sec)secAfter(r.sec)})();
