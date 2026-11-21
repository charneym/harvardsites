/* the story scene: an engraved elevation of one at-home CCAB session, drawn like a lab plate and kept on screen throughout:
   a calibrated tablet (centre), the participant's headphones (left), a timing rail under both. Step 1 a stimulus appears on the
   screen and the rail marks its onset and the response, the interval bracketed as reaction time (Presentation's precise
   stimulus delivery and event logging); step 2 the headphones carry the spoken instructions (text-to-speech voices); step 3
   the spoken answer is transcribed by seven ASR engines whose lines converge into one consensus transcript; step 4 the score
   is placed on a norm curve for the participant's own group. No values are drawn on the rail or the curve. */
function nbWave(x0,x1,y,amp,ph){var d='';for(var x=x0;x<=x1;x+=3){var u=(x-x0)/(x1-x0),e=Math.sin(u*Math.PI);d+=(x===x0?'M':'L')+x+' '+(y+Math.sin(x*.21+ph)*amp*e*(.6+.4*Math.sin(x*.05))).toFixed(1)}return d}
function nbBell(x0,x1,yb,hh){var d='';for(var x=x0;x<=x1;x+=4){var u=(x-(x0+x1)/2)/((x1-x0)/6.2);d+=(x===x0?'M':'L')+x+' '+(yb-hh*Math.exp(-u*u/2)).toFixed(1)}return d}
function scene(){
  var mob=MOBILE(),fs=mob?20:12.5,cs=mob?21:13.5;
  var caps=["STIMULUS · ONSET AND RESPONSE LOGGED","SPOKEN INSTRUCTIONS · TEXT-TO-SPEECH VOICES","SEVEN ASR ENGINES · ONE CONSENSUS TRANSCRIPT","SCORED AGAINST NORMS FOR THE PARTICIPANT'S GROUP"];
  var s='<svg viewBox="0 0 800 500" role="img" aria-label="Plate: a tablet and headphones for at-home cognitive testing, with a timing rail; a stimulus is shown, instructions are spoken, the spoken answer is transcribed and the score is placed on a norm curve">';
  var g='';for(var gx=40;gx<=760;gx+=40)g+='<path class="gd" d="M'+gx+' 20V440"/>';for(var gy=20;gy<=440;gy+=40)g+='<path class="gd" d="M40 '+gy+'H760"/>';s+=g;
  /* the tablet: body, bezel, screen, camera */
  s+='<path class="dv" d="M232 70H588V318H232Z"/><path class="dv2" d="M250 86H570V302H250Z"/><circle class="dv2" cx="410" cy="78" r="2.5"/>';
  s+='<text x="232" y="56" style="font-size:'+fs+'px">CALIBRATED TABLET</text>';
  /* step 1: the stimulus (a fixation cross, then a target) */
  s+='<g id="nbFix"><path class="aw" d="M402 194H418M410 186V202"/></g>';
  s+='<g id="nbStim"><path class="stim" d="M370 154H450V234H370Z"/></g>';
  /* step 3 on screen: the transcript line */
  s+='<g id="nbTr"><path class="aw2" d="M286 150H534M286 172H500M286 194H520"/><path class="tr" id="nbTrL" d="M286 236H534"/><text class="a" x="286" y="272" style="font-size:'+fs+'px">CONSENSUS TRANSCRIPT</text></g>';
  /* step 4 on screen: the norm curve and the score */
  s+='<g id="nbNorm"><path class="dv2" d="M276 270H544"/><path class="bell" d="'+nbBell(276,544,270,128)+'"/><path id="nbMk" class="mk2" d="M452 270V150"/><circle id="nbMkD" class="hub" cx="452" cy="150" r="4"/><text class="a" x="276" y="124" style="font-size:'+fs+'px">NORMS · OWN GROUP</text></g>';
  /* the headphones (left) */
  s+='<path class="aw" d="M88 214C88 128 196 128 196 214"/><path class="dv" d="M76 206H100V262H76Z"/><path class="dv" d="M184 206H208V262H184Z"/>';
  s+='<text x="76" y="300" style="font-size:'+fs+'px">HEADPHONES</text>';
  s+='<g id="nbSnd"><path class="snd" d="M66 214Q54 234 66 254"/><path class="snd" d="M54 204Q36 234 54 264"/><path class="snd" d="M218 214Q230 234 218 254"/><path class="snd" d="M230 204Q248 234 230 264"/></g>';
  /* step 3: seven engine lines converging from the speech wave into one */
  var en='<g id="nbAsr"><path class="wv" id="nbWv" d=""/>';for(var i=0;i<7;i++){var y=110+i*30;en+='<path class="eng" id="nbE'+i+'" d="M640 '+y+'C690 '+y+' 700 236 750 236"/>'}
  en+='<text x="640" y="88" style="font-size:'+fs+'px">7 ASR ENGINES</text><path class="dv2" d="M600 236H634" stroke-dasharray="2 4"/></g>';s+=en;
  /* the timing rail */
  s+='<path class="aw" d="M60 380H740"/>';var tk='';for(var x=60;x<=740;x+=20)tk+='<path class="tk" d="M'+x+' 380V'+(x%100===60?388:384)+'"/>';s+=tk;
  s+='<text x="60" y="414" style="font-size:'+fs+'px">EVENT LOG</text>';
  s+='<g id="nbOn"><path class="ndl" d="M300 352V380"/><text class="nm2" x="300" y="342" text-anchor="middle" style="font-size:'+fs+'px">STIMULUS</text></g>';
  s+='<g id="nbRs"><path class="ndl" d="M470 352V380"/><text class="nm2" x="470" y="342" text-anchor="middle" style="font-size:'+fs+'px">RESPONSE</text></g>';
  s+='<g id="nbRt"><path class="gap" d="M304 398H466M304 392V404M466 392V404"/><text class="a" x="385" y="424" text-anchor="middle" style="font-size:'+fs+'px">REACTION TIME</text></g>';
  caps.forEach(function(t,i){s+='<text class="cap" id="nbC'+i+'" x="400" y="'+(mob?482:476)+'" text-anchor="middle" style="font-size:'+cs+'px">'+t+'</text>'});
  return s+'</svg>';
}
function storyDraw(svg){
  var q=function(id){return $("#"+id,svg)};
  var E={fix:q("nbFix"),stim:q("nbStim"),tr:q("nbTr"),trl:q("nbTrL"),norm:q("nbNorm"),mk:q("nbMk"),mkd:q("nbMkD"),snd:q("nbSnd"),asr:q("nbAsr"),wv:q("nbWv"),
    on:q("nbOn"),rs:q("nbRs"),rt:q("nbRt"),E:[0,1,2,3,4,5,6].map(function(i){return q("nbE"+i)}),cap:[0,1,2,3].map(function(i){return q("nbC"+i)})};
  return function(p,b){
    if(!E.fix.isConnected)return;
    var s1=seg(p,.02,.13),s2=seg(p,.24,.36),s3=seg(p,.49,.61),s4=seg(p,.74,.86);
    svg.style.opacity=(.3+.7*b).toFixed(3);
    /* step 1: fixation, then the target; the rail marks onset, then the response and the interval */
    var st=seg(p,.04,.09)*(1-s2);
    E.fix.style.opacity=(b*(1-st)*(1-s3)*(1-s4)).toFixed(3);E.stim.style.opacity=(b*st).toFixed(3);
    E.on.style.opacity=(b*seg(p,.04,.08)).toFixed(3);E.rs.style.opacity=(b*seg(p,.09,.13)).toFixed(3);E.rt.style.opacity=(b*seg(p,.11,.16)*(1-s2*.7)).toFixed(3);
    /* step 2: sound from the headphones */
    var pl=.55+.45*Math.sin(p*120);E.snd.style.opacity=(b*s2*(1-s3)*pl).toFixed(3);
    /* step 3: the spoken answer, seven engine lines converging into the transcript */
    E.asr.style.opacity=(b*s3*(1-s4*.85)).toFixed(3);E.wv.setAttribute("d",nbWave(596,636,236,11*s3,p*60));
    E.E.forEach(function(el,i){var u=seg(p,.5+i*.012,.58+i*.012);el.style.strokeDashoffset=((1-u)*200).toFixed(1)});
    E.tr.style.opacity=(b*s3*(1-s4)).toFixed(3);E.trl.style.strokeDashoffset=((1-seg(p,.56,.64))*260).toFixed(1);
    /* step 4: the norm curve and the score marker */
    E.norm.style.opacity=(b*s4).toFixed(3);var mx=330+122*seg(p,.78,.88);E.mk.setAttribute("d","M"+mx.toFixed(1)+" 270V"+(270-128*Math.exp(-Math.pow((mx-410)/(268/6.2),2)/2)).toFixed(1));
    E.mkd.setAttribute("cx",mx.toFixed(1));E.mkd.setAttribute("cy",(270-128*Math.exp(-Math.pow((mx-410)/(268/6.2),2)/2)).toFixed(1));
    var W=[[0,0,.23,.25],[.25,.28,.48,.5],[.5,.53,.73,.75],[.75,.78,2,2]];
    E.cap.forEach(function(el,k){var a=k===0?1:seg(p,W[k][0],W[k][1]),o=k===3?0:seg(p,W[k][2],W[k][3]);el.style.opacity=(b*a*(1-o)).toFixed(3)});
  };
}
