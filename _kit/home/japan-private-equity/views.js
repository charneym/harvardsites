/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function pfRows(list){return '<ul class="pfr">'+list.map(function(c){return '<li><span class="lab tg">'+esc(c[3])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p><span class="lab loc2">'+esc(c[2])+'</span></li>'}).join("")+'</ul>'}
function prior(){return '<ul class="pri">'+PRIOR.map(function(n){return '<li><span>'+esc(n)+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>事業承継・事業再編ファンド<span class="nomob"> · 2000年設立 · 東京</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">志を継いで、</span><span class="l"><em>夢をカタチに。</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>JPEは、会社を“売買”するのではなく、会社を“託され”、“託し”、未来へと継承します。中堅・中小企業の事業承継と事業再編を、ファンドを通じて支えるバイアウトファンドの運営会社です。</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/criteria">投資基準を見る '+ARR+'</a><a class="btn" href="#/contact">ご相談はこちら</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>“買収ファンド”ではなく、“継承ファンド”</span>'+
   '<h2 class="txt" id="mani">オーナー経営者の皆さまと“交渉”するのではなく、“対話”するなかで、会社にとって<b class="w0">最も望ましい継承の形</b>を一緒に考え、提案し、実現します。</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">286億円</span><span class="k">累計の運用総額。これまでに組成したファンドは11組合</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30社</span><span class="k">次の担い手へとバトンタッチした卒業先（EXIT実績）</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">25年</span><span class="k">2000年10月の設立以来、中小企業分野のバイアウトファンドの先駆けとして</span></div>'+
   '</div>'+
   '<div class="plat">'+THEMES.map(function(t){return '<div><span class="lab kick" data-r>'+esc(t[0])+'</span><p data-r>'+esc(t[1])+'</p></div>'}).join("")+'</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">私たちの考え方</span><h2 class="d3"><span class="nb">託され、</span><span class="nb">みがきあげ、</span><em class="nb">次の世代へ。</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">対話</span><span>承継</span><span>みがきあげ</span><span>卒業</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>“交渉”ではなく“対話”。</h2><p>身内に後継者がいない、後継者候補に株式を買い取る資金がない。オーナー経営者の想いと会社の物語に耳を傾けることから始めます。</p></article>'+
     '<article class="step"><h2>会社を“託される”。</h2><p>ファンドが株式と経営を引き受け、所有と経営の橋渡し役となります。株主と経営陣が信頼関係と適度な緊張感を保つ、“調和”を図ります。</p></article>'+
     '<article class="step"><h2>みがきあげる。</h2><p>“変えるべきでないものは変えず、変えるべきものは変えていく”。役員派遣を通じて経営に関与し、社員の皆さまと共に企業価値を高めます。</p></article>'+
     '<article class="step"><h2>次の世代へ、つなぐ。</h2><p>3～5年を目処に、株式上場やM&Aによって新しいオーナーへとバトンタッチ。投資先を“卒業生”として送り出します。</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="criteria" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>投資基準</span><h2 class="d2 split"><span class="nb">ミドルリスク・</span><em class="nb">ミドルリターン。</em></h2></div><p data-r>「成熟度」「安定性」「キャッシュフロー」「EXIT」が見込める業界・業種を対象に、“匠”“管理”“こだわり”という3つの視点からアプローチします。</p></div>'+
   '<dl class="facts">'+CRIT.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'+
  '</div></section>'+

  '<section class="sec dark" id="portfolio" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>投資先</span><h2 class="d2 split"><span class="nb">託された会社と、</span><em class="nb">共に歩む。</em></h2></div><p data-r>現在、ファンドが株主となって企業価値の向上を図っている9社と、次のオーナーへとバトンタッチした30社の卒業先。</p></div>'+
   '<span class="lab sub-l" data-r>現在の投資先</span>'+pfRows(PF)+
   '<span class="lab sub-l pr" data-r>卒業先（EXIT実績）</span>'+prior()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>役員</span><h2 class="d2 split"><span class="nb">小さな会社の、</span><em class="nb">大きな仕事。</em></h2></div><p data-r>株主は株式会社J-Capital、日本政策投資銀行ほか。四国オフィス（香川県高松市）も構えています。</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>ニュース</span><h2 class="d2 split">新着<em>情報。</em></h2></div><p data-r>ファンドの設立、新規投資、卒業などのニュースリリース。</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>事業承継・事業再編をお考えの皆さまへ</span>'+
   '<h2 class="big split"><span class="nb">まずは、</span><em class="nb">ご相談ください。</em></h2>'+
   '<p class="sub" data-r>無料相談・秘密厳守。会社の譲渡を業界内で知られたくない、役員や従業員を後継者としたい。どのようなご相談も、お気軽にお寄せください。</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">メールで相談する '+ARR+'</a><a class="btn" href="'+TELH+'">電話 '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>本社</span><p data-r>〒101-0061<br>東京都千代田区神田三崎町2-15-6<br>K-STAGE 5F</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>地図</a></div>'+
    '<div><span class="lab" data-r>お問い合わせ</span><p data-r><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>四国オフィス</span><p data-r>〒760-8580<br>香川県高松市浜ノ町8-33</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">本社</span>東京都千代田区神田三崎町2-15-6<br>K-STAGE 5F</div>'+
   '<div class="c"><span class="lab">お問い合わせ</span><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">メール</a></div>'+
   '<div class="c"><span class="lab">メニュー</span><a class="ul" href="#/approach">私たちの考え方</a><br><a class="ul" href="#/criteria">投資基準</a><br><a class="ul" href="#/portfolio">投資先</a><br><a class="ul" href="#/team">役員</a><br><a class="ul" href="#/news">ニュース</a></div>'+
   '<div class="c"><span class="lab">四国オフィス</span>香川県高松市浜ノ町8-33</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 60" aria-hidden="true"><text x="260" y="50" text-anchor="middle" style="font-family:\'Montserrat\',Arial,sans-serif;font-weight:700;font-size:66px;letter-spacing:.04em">JPE</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 日本プライベートエクイティ株式会社</span><span class="lab">コンセプトサイト</span><a class="lab ul" href="#main" id="toTop">ページの先頭へ ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",approach:"story",criteria:"criteria",portfolio:"portfolio",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"日本プライベートエクイティ｜事業承継・事業再編ファンドの運営",x:"ホーム"};
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
