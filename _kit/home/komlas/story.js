/* The story scene (BL/BY/DB): the diode-pumped solid-state laser of KOMLAS' Festkörperlaser-Schulungssystem
   (komlas.de > Schulungssystem), built from KOMLAS parts, drawn as ONE resonator kept on screen for all three steps:
   Step 1 (Pumpen): a 1 W laser diode end-pumps the Nd:YAG crystal (808 nm); the resonator starts to lase at 1064 nm.
   Step 2 (Güteschalten): an intracavity Cr4+:YAG crystal switches the Q passively: very short pulses.
   Step 3 (Verdoppeln): an intracavity KTP crystal doubles the frequency: green pulses at 532 nm leave the output mirror.
   Schematic, not to scale, no measured values. */
var SCW=760,SCH=420,VY=80,AY=260;
function kmScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 '+VY+' '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<linearGradient id="kmY" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c9b2ff" stop-opacity=".40"/><stop offset="1" stop-color="#8c6fe0" stop-opacity=".18"/></linearGradient>'+
    '<linearGradient id="kmC" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e0a85a" stop-opacity=".45"/><stop offset="1" stop-color="#a86a20" stop-opacity=".22"/></linearGradient>'+
    '<linearGradient id="kmK" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8f2ff" stop-opacity=".30"/><stop offset="1" stop-color="#a8bce0" stop-opacity=".12"/></linearGradient>'+
    '<radialGradient id="kmG" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#45e04f" stop-opacity=".55"/><stop offset="1" stop-color="#45e04f" stop-opacity="0"/></radialGradient>'+
    '<radialGradient id="kmR" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ff5a5a" stop-opacity=".5"/><stop offset="1" stop-color="#ff5a5a" stop-opacity="0"/></radialGradient></defs>';
  g+='<text class="t" x="20" y="'+(mob?118:112)+'">'+(mob?"RESONATOR":"DIODENGEPUMPTER RESONATOR, SCHEMATISCH")+'</text>';
  /* the optical axis */
  g+='<path class="axis sD" d="M20 '+AY+'H740"/>';
  /* laser diode, lens, Nd:YAG (HR-coated input face), Cr:YAG, KTP, output mirror */
  g+='<path class="body sD" d="M30 215H120V305H30Z"/><path class="body sD" d="M120 244H136V276H120Z"/>';
  g+='<ellipse id="kmDg" cx="136" cy="'+AY+'" rx="40" ry="40" fill="url(#kmR)"/>';
  g+='<path class="lens sD" d="M185 190C202 220 202 300 185 330C168 300 168 220 185 190Z"/>';
  g+='<path class="cry" style="fill:url(#kmY)" d="M236 218H372V302H236Z"/><path class="body sD" d="M236 218H372V302H236Z"/><path class="hr sD" d="M236 208V312"/>';
  g+='<rect id="kmFl" x="236" y="218" width="136" height="84" fill="#b79cff" opacity="0"/>';
  g+='<path class="cry" style="fill:url(#kmC)" d="M420 230H464V290H420Z"/><path class="body sD" d="M420 230H464V290H420Z"/>';
  g+='<rect id="kmCh" x="420" y="230" width="44" height="60" fill="none" stroke="#ffd08a" stroke-width="2.4" opacity="0"/>';
  g+='<path class="cry" style="fill:url(#kmK)" d="M510 226H592V294H510Z"/><path class="body sD" d="M510 226H592V294H510Z"/>';
  g+='<rect id="kmKh" x="510" y="226" width="82" height="68" fill="none" stroke="#45e04f" stroke-width="2.4" opacity="0"/>';
  g+='<path class="mir sD" d="M640 190C658 225 658 295 640 330"/><path class="mirb sD" d="M640 190H654M640 330H654"/>';
  /* step 1: the pump beam (808 nm), converging into the crystal, and the 1064 nm field in the resonator */
  g+='<path id="kmP1" class="pump" d="M136 252L185 234L236 256"/><path id="kmP2" class="pump" d="M136 268L185 286L236 264"/>';
  g+='<path id="kmI" class="ir" d="M236 '+AY+'H640"/>';
  /* steps 2 and 3: pulses leaving the output mirror (1064 nm, then 532 nm) */
  var pr='',pg='';for(var i=0;i<4;i++){pr+='<path class="pl" d="M0 '+AY+'H24"/>';pg+='<path class="plg" d="M0 '+AY+'H24"/>'}
  g+='<g id="kmOr">'+pr+'</g><g id="kmOg">'+pg+'</g>';
  g+='<path id="kmGi" class="gin" d="M551 '+AY+'H640"/>';
  g+='<ellipse id="kmGg" cx="551" cy="'+AY+'" rx="58" ry="40" fill="url(#kmG)"/>';
  /* part labels */
  if(mob){
    g+='<g class="nm"><text class="t" x="30" y="190">DIODE</text><text class="t" x="236" y="190">Nd:YAG</text><text class="t" x="510" y="200">KTP</text>'+
       '<text class="t" x="400" y="334">Cr:YAG</text><text class="t" x="592" y="368">SPIEGEL</text></g>';
  }else{
    g+='<g class="nm"><text class="t" x="30" y="196">LASERDIODE 1 W</text><text class="t" x="236" y="196">Nd:YAG</text><text class="t" x="404" y="212">Cr4+:YAG</text><text class="t" x="510" y="208">KTP</text>'+
       '<text class="t" x="590" y="172">AUSKOPPELSPIEGEL</text><text class="t" x="164" y="356">LINSE</text></g>';
  }
  /* wavelength labels, per step */
  g+='<g id="kmL1"><text class="t s1" x="30" y="'+(mob?420:400)+'">808 NM</text><text class="t s2" x="'+(mob?236:280)+'" y="'+(mob?420:400)+'">1064 NM</text></g>';
  g+='<g id="kmL2"><text class="t s2" x="'+(mob?520:500)+'" y="'+(mob?420:400)+'">'+(mob?"PULSE":"KURZE IMPULSE")+'</text></g>';
  g+='<g id="kmL3"><text class="t s3" x="'+(mob?520:510)+'" y="'+(mob?420:400)+'">532 NM</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="482">1 · PUMPEN</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="482">2 · GÜTESCHALTEN</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="482">3 · VERDOPPELN</text></g>';
  return g+'</svg>';
}
function scene(){return kmScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),cry:$$(".cry",svg),nm:$(".nm",svg),Dg:$("#kmDg",svg),Fl:$("#kmFl",svg),Ch:$("#kmCh",svg),Kh:$("#kmKh",svg),
    P:dl("#kmP1,#kmP2"),I:$("#kmI",svg),Or:$$("#kmOr path",svg),Og:$$("#kmOg path",svg),gOr:$("#kmOr",svg),gOg:$("#kmOg",svg),
    Gi:dl("#kmGi"),Gg:$("#kmGg",svg),L1:$("#kmL1",svg),L2:$("#kmL2",svg),L3:$("#kmL3",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b);op(E.nm,b);E.cry.forEach(function(c){op(c,b)})}
    /* step 1: the diode lights, the pump converges into the crystal, the crystal fluoresces, the resonator lases */
    op(E.Dg,b*seg(p,.02,.08));draw(E.P,b*seg(p,.04,.14));op(E.Fl,b*.22*seg(p,.12,.2));
    var ir=b*seg(p,.18,.26);op(E.I,ir*(1-.55*seg(p,.36,.42)));
    op(E.L1,b*seg(p,.06,.14)*(1-seg(p,.3,.35)));
    /* step 2: the Cr:YAG switches; pulses leave the mirror */
    op(E.Ch,b*seg(p,.37,.43)*(1-seg(p,.64,.68)));
    var pa=b*seg(p,.4,.46),gg=b*seg(p,.72,.8);
    op(E.gOr,pa*(1-seg(p,.7,.76)));op(E.gOg,gg);
    var sh=(p*9)%1;
    for(var i=0;i<4;i++){var x=646+((i/4+sh)%1)*110;E.Or[i].setAttribute("transform","translate("+x.toFixed(1)+" 0)");E.Og[i].setAttribute("transform","translate("+x.toFixed(1)+" 0)");
      var f=1-Math.max(0,(x-680)/76);E.Or[i].style.opacity=f.toFixed(3);E.Og[i].style.opacity=f.toFixed(3)}
    op(E.L2,b*seg(p,.42,.5)*(1-seg(p,.64,.68)));
    /* step 3: the KTP doubles; green inside the resonator and out of the mirror */
    op(E.Kh,b*seg(p,.7,.76));draw(E.Gi,b*seg(p,.72,.82));op(E.Gg,b*seg(p,.72,.8));
    op(E.L3,b*seg(p,.78,.86));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
