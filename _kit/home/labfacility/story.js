/* The story scene (BL/BY/DB): one mineral insulated thermocouple, drawn in long section on its axis, following
   labfacility.com > Technical Resources > Thermocouple Theory and Practice and the Mineral Insulated Thermocouples IEC
   page ("two dissimilar metals ... the measuring junction", "mineral insulated", "IEC Type K ... miniature plug",
   "the reference junction ... kept at a known temperature"). ONE scene kept on screen:
   Step 1 (Junction): two legs of dissimilar metal meet at the measuring junction, which warms in the heat.
   Step 2 (Insulate): the sheath closes round them and the mineral insulation packs the space.
   Step 3 (Terminate): the legs end in a green IEC Type K miniature plug with two pins of different widths.
   Step 4 (Measure): the plug meets the instrument, whose reference junction is marked; a reading builds.
   No dash-drawn strokes: every line is revealed by a clip that ends at full length (DR4). */
var SCW=760,SCH=520;
function lfScene(o){
  var g='',mob=o.mob,i,ax=260;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"30 96 720 504":"0 0 "+SCW+" "+SCH)+'" aria-hidden="true">';
  g+='<defs><clipPath id="lfWc"><rect id="lfWr" x="0" y="0" width="0" height="'+SCH+'"/></clipPath>'+
     '<clipPath id="lfMc"><path d="M146 230H468V290H146A30 30 0 0 1 146 230Z"/></clipPath>'+
     '<clipPath id="lfMg"><rect id="lfMr" x="0" y="0" width="0" height="'+SCH+'"/></clipPath>'+
     '<radialGradient id="lfHt"><stop offset="0" stop-color="#ff8a3d" stop-opacity=".75"/><stop offset=".45" stop-color="#e0393f" stop-opacity=".28"/><stop offset="1" stop-color="#e0393f" stop-opacity="0"/></radialGradient>'+
     '<pattern id="lfMp" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2.5" cy="2.5" r="1.3" fill="#b9c2cc"/><circle cx="7" cy="6.8" r="1" fill="#8d98a4"/></pattern></defs>';
  g+='<path class="axl" d="M70 '+ax+'H760"/>';
  /* heat at the tip */
  g+='<g id="lfHeat"><circle cx="146" cy="'+ax+'" r="92" fill="url(#lfHt)"/><path class="hw" d="M60 214C70 226 50 238 60 250S50 274 60 286S50 300 60 306"/><path class="hw" d="M82 222C92 234 72 246 82 258S72 282 82 294"/></g>';
  /* the sheath (fill + outline) and the mineral packing, revealed left to right */
  g+='<g id="lfSh"><path class="shf" d="M146 226H470V294H146A34 34 0 0 1 146 226Z"/><g clip-path="url(#lfMg)"><rect class="mn" x="110" y="228" width="360" height="64" clip-path="url(#lfMc)"/></g><path class="sho" d="M146 226H470V294H146A34 34 0 0 1 146 226Z"/></g>';
  /* a cross-section through the sheath: two legs bedded in mineral */
  g+='<g id="lfX"><circle class="xs" cx="300" cy="410" r="46"/><circle class="mn" cx="300" cy="410" r="43"/><circle class="xp" cx="284" cy="410" r="7"/><circle class="xn" cx="316" cy="410" r="7"/><text class="t" x="'+(mob?362:366)+'" y="'+(mob?417:414)+'">'+(mob?"SECTION":"CROSS-SECTION")+'</text></g>';
  /* the two legs and the measuring junction, revealed from the junction outward */
  g+='<g clip-path="url(#lfWc)"><path class="lp" d="M146 '+ax+'L166 248H520L548 242H600"/><path class="ln" d="M146 '+ax+'L166 272H520L548 277H600"/></g>';
  g+='<circle id="lfJn" class="jn" cx="146" cy="'+ax+'" r="7"/>';
  /* the plug: green body, two pins of different widths */
  g+='<g id="lfPl"><rect class="plb" x="470" y="196" width="130" height="128"/><rect class="plp" x="485" y="210" width="78" height="100"/><rect class="pin" x="600" y="235" width="64" height="15"/><rect class="pin" x="600" y="272" width="64" height="10"/></g>';
  /* the instrument with its socket, reference junction and display */
  g+='<g id="lfIn"><rect class="inb" x="664" y="150" width="90" height="220"/><rect class="ind" x="676" y="166" width="66" height="44"/><rect id="lfRd" class="rdb" x="682" y="194" width="54" height="8"/><rect class="sok" x="664" y="226" width="22" height="68"/><rect class="rj" x="690" y="'+(ax-6)+'" width="12" height="12"/></g>';
  /* labels: one set per step, plus one caption per step under the part */
  var L=mob?[["lfL0",[[146,370,"middle","JUNCTION"]]],["lfL1",[[300,206,"middle","SHEATH"],[300,350,"middle","MINERAL"]]],["lfL2",[[535,176,"middle","TYPE K PLUG"]]],["lfL3",[[748,130,"end","INSTRUMENT"],[748,402,"end","REFERENCE"]]]]
          :[["lfL0",[[146,350,"middle","MEASURING JUNCTION"],[330,236,"middle","+ LEG"],[330,296,"middle","− LEG"]]],["lfL1",[[300,208,"middle","METAL SHEATH"],[300,326,"middle","MINERAL INSULATION"]]],["lfL2",[[535,180,"middle","IEC TYPE K MINIATURE PLUG"],[632,226,"middle","PINS"]]],["lfL3",[[709,134,"middle","INSTRUMENT"],[754,394,"end","REFERENCE JUNCTION"]]]];
  L.forEach(function(s){g+='<g id="'+s[0]+'" class="lbl">';s[1].forEach(function(t){g+='<text class="t" x="'+t[0]+'" y="'+t[1]+'" text-anchor="'+t[2]+'">'+t[3]+'</text>'});g+='</g>'});
  var C=mob?["SEEBECK EFFECT","MINERAL INSULATED","COLOUR CODED","REFERENCE JUNCTION"]:["THE SEEBECK EFFECT","MINERAL INSULATED CONSTRUCTION","COLOUR-CODED TERMINATION","MEASURED AGAINST A REFERENCE"];
  for(i=0;i<4;i++)g+='<g id="lfC'+i+'" class="cap"><text class="t" x="'+(mob?60:70)+'" y="'+(mob?520:476)+'">'+C[i]+'</text></g>';
  return g+'</svg>';
}
function scene(){return lfScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var Q=function(s){return svg.querySelector(s)};
  var E={axl:Q(".axl"),x:Q("#lfX"),ht:Q("#lfHeat"),sh:Q("#lfSh"),wr:Q("#lfWr"),mr:Q("#lfMr"),jn:Q("#lfJn"),pl:Q("#lfPl"),inn:Q("#lfIn"),rd:Q("#lfRd"),
    L:[Q("#lfL0"),Q("#lfL1"),Q("#lfL2"),Q("#lfL3")],C:[Q("#lfC0"),Q("#lfC1"),Q("#lfC2"),Q("#lfC3")]};
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,bb){
    if(!svg.isConnected)return;
    var s1=seg(p,.02,.2),s2=seg(p,.28,.46),s3=seg(p,.53,.72),s4=seg(p,.78,.94);
    op(E.axl,bb);
    /* 1: the legs run out from the junction; the tip warms */
    E.wr.setAttribute("width",(146+(470-146)*s1+(610-470)*s3).toFixed(1));
    op(E.jn,bb);E.jn.classList.toggle("hot",s1>.6);
    op(E.ht,bb*(.35+.65*s1)*(1-.45*s2));
    /* 2: the sheath closes and the mineral packs in, left to right */
    op(E.sh,bb*seg(p,.26,.32));E.mr.setAttribute("width",(110+(470-110)*s2).toFixed(1));
    op(E.x,bb*seg(p,.34,.44));
    /* 3: the plug */
    op(E.pl,bb*s3);E.pl.style.transform="translateX("+(16*(1-s3)).toFixed(1)+"px)";
    /* 4: the instrument; a reading builds on its display */
    op(E.inn,bb*seg(p,.76,.84));E.rd.style.transform="scaleX("+seg(p,.84,.96).toFixed(3)+")";
    /* labels: never two steps at once */
    var cw=[[0,.24],[.27,.49],[.52,.74],[.77,1.01]];
    [E.L,E.C].forEach(function(A){A.forEach(function(el,i){var a=cw[i][0],z=cw[i][1];op(el,bb*(i===0?1:seg(p,a,a+.02))*(i===3?1:1-seg(p,z,z+.02)))})});
  };
}
