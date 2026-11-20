/* the story scene (DB): ONE engraved schematic of magic-angle spinning, the principle behind every Doty solids probe and
   the idea in the Doty mark (a ring spinning about a tilted axis). Step 1 the sample is packed into an all-ceramic rotor
   (drawn level); step 2 the rotor tilts to 54.74 degrees from the magnet's field B0 and the angle is measured off; step 3
   the stator's air bearings float it and the turbine drives it (spin ring, flutes turning); step 4 the No-E RF coil
   (copper) reads the nuclei and the spectrum inset collapses from a broad hump into sharp lines. */
function scene(){
  var mob=MOBILE();
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  var L=272,R=54;
  /* the rotor, drawn along its own x axis in a group that the story turns from level to the magic angle */
  var parts='';for(var i=0;i<120;i++){var px=-226+((i*53)%420),py=-R+10+((i*29)%(2*R-20));parts+='M'+px+' '+py+'h3'}
  var hat='';for(var x=-228;x<228;x+=10)hat+='M'+x+' '+(R-1)+'l9 -9';
  var flute='';for(var k=0;k<7;k++)flute+='<path class="fl" d="M'+(L-6)+' '+(-R+9+k*15)+'h-26"/>';
  var coil='';for(var c=-108;c<=108;c+=12)coil+='<ellipse class="cu dr" cx="'+c+'" cy="0" rx="7" ry="'+(R+14)+'"/>';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  /* B0: the magnet's field, a vertical arrow */
  g+='<path class="sD gr" d="M86 486V96M78 112L86 96L94 112"/><text x="104" y="104" class="w">B₀</text>';
  g+='<g id="rot" transform="translate(410 300)">';
  g+='<path class="sD ax" d="M'+(-L-56)+' 0H'+(L+56)+'"/>';
  g+='<path class="sD bl" d="M'+(-L)+' '+(-R)+'H'+L+'A10 '+R+' 0 0 1 '+L+' '+R+'H'+(-L)+'A10 '+R+' 0 0 1 '+(-L)+' '+(-R)+'Z"/>';
  g+='<path class="sD kb" d="M'+(-L)+' '+(-R)+'A10 '+R+' 0 0 1 '+(-L)+' '+R+'M'+(L-36)+' '+(-R)+'V'+R+'M-234 '+(-R)+'V'+R+'"/>';
  g+='<path class="sD ht" d="'+hat+'"/>';
  g+='<g id="flutes">'+flute+'</g>';
  g+='<path id="smp" class="smp" d="'+parts+'"/>';
  g+='<g id="sc3a"><path class="stt dr" d="M-218 -76H218V76H-218Z"/>'+
     '<path class="jet dr" d="M-160 -122V-84M-168 -96L-160 -84L-152 -96M160 -122V-84M152 -96L160 -84L168 -96M-160 122V84M-168 96L-160 84L-152 96M160 122V84M152 96L160 84L168 96"/>'+
     '<path class="jet dr" d="M'+(L+60)+' -70L'+(L-6)+' -40M'+(L+2)+' -54L'+(L-6)+' -40L'+(L+10)+' -40"/>'+
     '<path class="spin dr" d="M'+(L+30)+' '+(-R-26)+'A18 '+(R+26)+' 0 1 1 '+(L+18)+' '+(R+24)+'"/><path class="spinh" d="M'+(L+30)+' '+(-R-26)+'l-12 -7l2 12Z"/></g>';
  g+='<g id="sc4a">'+coil+'<path class="cu dr" d="M-108 '+(R+14)+'V'+(R+62)+'M108 '+(R+14)+'V'+(R+62)+'"/></g>';
  g+='</g>';
  /* the spectrum inset frame and title block belong to the base drawing */
  g+='<path class="tbl" d="M548 430H776V538H548Z"/><path class="sD kb" d="M560 522H764"/><text x="560" y="452" class="t">¹³C SPECTRUM</text>';
  g+='<g class="tb"><text x="24" y="540" class="t">MAGIC-ANGLE SPINNING · SCHEMATIC</text></g>';
  g+='</g>';
  /* the magic angle: an arc from the field direction to the rotor axis */
  g+='<g id="sc2"><path id="arc" class="dim" d="M410 172"/><path class="dim" d="M410 300V128"/><text id="angT" x="398" y="150" text-anchor="end" class="a">54.74°</text></g>';
  /* the spectrum: a broad hump that sharpens into lines */
  g+='<g id="sc4"><path id="spec" class="spec" d="M560 522"/></g>';
  /* step captions */
  g+='<text id="cap1" x="40" y="58" class="a">SAMPLE IN A CERAMIC ROTOR</text>';
  g+='<text id="cap2" x="40" y="58" class="a">TILTED TO THE MAGIC ANGLE</text>';
  g+='<text id="cap3" x="40" y="58" class="a">SPUN ON AIR BEARINGS</text>';
  g+='<text id="cap4" x="40" y="58" class="a">READ BY A NO-E COIL</text>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var Lg=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=Lg+" "+Lg;return [p,Lg]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase>text, #scBase .tbl",svg),rot:$("#rot",svg),smp:$("#smp",svg),
    a3:$("#sc3a",svg),a4:$("#sc4a",svg),g2:$("#sc2",svg),g4:$("#sc4",svg),arc:$("#arc",svg),angT:$("#angT",svg),spec:$("#spec",svg),
    fl:$$("#flutes path",svg),d3:dl("#sc3a .dr"),d4:dl("#sc4a .dr"),cap:[$("#cap1",svg),$("#cap2",svg),$("#cap3",svg),$("#cap4",svg)]};
  var lastB=-1,MA=54.7356;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function spec(v){var d='',n=120;for(var i=0;i<=n;i++){var x=i/n,br=.62*Math.exp(-Math.pow((x-.52)/.2,2)),
      sh=.9/(1+Math.pow((x-.2)/.012,2))+.62/(1+Math.pow((x-.41)/.01,2))+1/(1+Math.pow((x-.55)/.009,2))+.5/(1+Math.pow((x-.63)/.01,2))+.74/(1+Math.pow((x-.82)/.011,2)),
      y=Math.min(1,br*(1-v)+sh*v);d+=(i?'L':'M')+(560+x*204).toFixed(1)+' '+(522-y*60).toFixed(1)}return d}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.16),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    /* step 1: the sample fills the rotor as soon as the drawing is in; the spectrum is the broad solid-state hump */
    E.smp.style.opacity=(b*Math.max(s1,b)).toFixed(3);
    E.g4.style.opacity=b.toFixed(3);E.spec.setAttribute("d",spec(s4));
    /* step 2: the rotor turns from level to the magic angle, and the angle is drawn from B0 to its axis */
    var th=(90-MA)*s2;E.rot.setAttribute("transform","translate(410 300) rotate("+(-th).toFixed(2)+")");
    E.g2.style.opacity=(b*(s2>0?1:0)).toFixed(3);
    var r=128,a0=-Math.PI/2,a1=-Math.PI/2+(MA*Math.PI/180)*s2;
    E.arc.setAttribute("d","M"+(410+r*Math.cos(a0)).toFixed(1)+" "+(300+r*Math.sin(a0)).toFixed(1)+"A"+r+" "+r+" 0 0 1 "+(410+r*Math.cos(a1)).toFixed(1)+" "+(300+r*Math.sin(a1)).toFixed(1));
    E.angT.style.opacity=s2.toFixed(3);
    /* step 3: stator, air jets and the spin ring draw; the turbine flutes turn with the scroll */
    E.a3.style.opacity=(b*(s3>0?1:0)*(1-.45*s4)).toFixed(3);draw(E.d3,s3);
    var ph=(p*38)%1;E.fl.forEach(function(el,k){var q=(k/7+ph*s3)%1;el.setAttribute("transform","translate(0 "+((q-k/7)*105).toFixed(1)+")");el.style.opacity=(b*(.2+.8*Math.sin(Math.PI*q))).toFixed(3)});
    /* step 4: the copper coil winds on and the spectrum sharpens */
    E.a4.style.opacity=(b*(s4>0?1:0)).toFixed(3);draw(E.d4,s4);
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.cap[0].style.opacity=(b*O(s2)).toFixed(3);E.cap[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.cap[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.cap[3].style.opacity=I(s4).toFixed(3);
  };
}
