<?php
/**
 * Title: Site chrome (loader, header, menu)
 * Slug: npphotonics/chrome
 * Inserter: no
 */
?>
<!-- wp:html -->
<a class="skip" href="#main">Skip to content</a>
<div class="fieldbg" aria-hidden="true"></div>
<canvas id="field" aria-hidden="true"></canvas>
<div class="grain" aria-hidden="true"></div>

<div id="pre" aria-hidden="true">
  <div class="pc">
    <div class="mk"><img class="plogo" src="<?php echo esc_url( get_theme_file_uri( 'assets/logo-w.png' ) ); ?>" alt="" width="900" height="522"></div>
    <div class="wm" hidden><span></span></div>
  </div>
  <span class="lab pl">Specialty fiber lasers<span class="nomob"> · Tucson, Arizona</span></span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>

<header class="hdr" id="hdr">
  <a href="#/" class="brand" id="brand" aria-label="NP Photonics, home"><img class="lgo" src="<?php echo esc_url( get_theme_file_uri( 'assets/logo-h.png' ) ); ?>" alt="NP Photonics" width="1038" height="150"></a>
  <nav class="nav" aria-label="Primary">
    <a class="nl ul" href="#/technology">Technology</a>
    <a class="nl ul" href="#/products">Products</a>
    <a class="nl ul" href="#/applications">Applications</a>
    <a class="nl ul" href="#/team">Team</a>
    <a class="nl ul" href="#/news">News</a>
    <a class="btn" href="#/contact">Contact <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></a>
    <button class="burger" id="burger" aria-expanded="false" aria-controls="mm"><span id="burgerLab">Menu</span><i aria-hidden="true"></i></button>
  </nav>
</header>

<div class="mm" id="mm" aria-hidden="true" data-lenis-prevent>
  <ol>
    <li><a href="#/">Home</a></li>
    <li><a href="#/technology">Technology</a></li>
    <li><a href="#/products">Products</a></li>
    <li><a href="#/applications">Applications</a></li>
    <li><a href="#/team">Team</a></li>
    <li><a href="#/news">News</a></li>
    <li><a href="#/contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">Tucson, Arizona</span><br>9030 S Rita Ranch Rd #120</div>
    <div><span class="lab">Write to us</span><br><a href="mailto:info@npphotonics.com">info@npphotonics.com</a></div>
  </div>
</div>



<div class="ps" id="ps" role="dialog" aria-modal="true" aria-labelledby="psName" aria-hidden="true">
  <div class="ps-scrim" data-ps-close></div>
  <div class="ps-sheet" id="psSheet">
    <div class="ps-media" id="psMedia"></div>
    <div class="ps-col">
      <div class="ps-bar">
        <button class="btn sm" data-ps-close>Close</button>
        <div class="ps-step"><button class="btn sm" id="psPrev" aria-label="Previous person">Prev</button><button class="btn sm" id="psNext" aria-label="Next person">Next</button></div>
      </div>
      <div class="ps-body" id="psBody" data-lenis-prevent tabindex="0"></div>
    </div>
  </div>
</div>

<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">NP Photonics</span><div class="t" id="xtt"></div></div>
<div class="sr" aria-live="polite" id="live"></div>
<!-- /wp:html -->
