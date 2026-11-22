/* the story scene: how Pippin size selection works, drawn as one engraved lane of a precast agarose cassette in plan view
   (facts: sagescience.com/our-technology). Step 1 the DNA library is loaded into the sample well; a marker lane runs beside it.
   Step 2 electrophoresis separates fragments by size along the gel column, past the optical detector. Step 3 when the programmed
   range reaches the branch point, the instrument switches the active electrode and diverts it into the membrane-bound elution
   chamber, while larger and smaller fragments stay behind or run on. Step 4 the electrode switches back and the fraction is
   removed with a standard pipette. Fragment motion follows one migration law (small runs faster). Schematic, not data. */
var SS_Y=262,SS_X0=96,SS_BR=520,SS_DET=468,SS_MY=150;
var SS_F=(function(){var a=[];for(var i=0;i<26;i++){var sp=.42+.58*i/25;a.push({sp:sp,sel:sp>=.66&&sp<=.8,i:.5+.5*Math.exp(-Math.pow((sp-.7)/.2,2))})}return a})();
var SS_L=[.46,.58,.7,.82,.94];
function scene(){
  var mob=MOBILE(),fs=mob?19:12,cs=mob?21:13;
  var caps=["LOAD · DNA LIBRARY INTO THE SAMPLE WELL","SEPARATE · FRAGMENTS SORT BY SIZE","DIVERT · ELECTRODE SWITCHES AT THE BRANCH","COLLECT · A STANDARD PIPETTE"];
  var s='<svg viewBox="0 0 760 600" role="img" aria-label="Engraved plan view of one Pippin gel lane: sample well, gel column, detector, branch point and elution chamber, with DNA bands separating by size">';
  s+='<defs><radialGradient id="ssG" cx="0" cy="0" r="1"><stop offset="0" stop-color="#9dffb4" stop-opacity=".9"/><stop offset="1" stop-color="#5dff8c" stop-opacity="0"/></radialGradient>'+
    '<linearGradient id="ssD" x1="0" x2="1"><stop offset="0" stop-color="#4f8cff" stop-opacity="0"/><stop offset=".5" stop-color="#6aa2ff" stop-opacity=".55"/><stop offset="1" stop-color="#4f8cff" stop-opacity="0"/></linearGradient></defs>';
  var g='';for(var gx=20;gx<=740;gx+=40)g+='<path class="ssg" d="M'+gx+' 40V520"/>';for(var gy=40;gy<=520;gy+=40)g+='<path class="ssg" d="M20 '+gy+'H740"/>';
  s+='<g>'+g+'</g>';
  /* cassette outline (engraved double line) and reservoirs */
  s+='<g id="ssCas"><rect class="ssb" x="30" y="70" width="700" height="430"/><rect class="sse" x="38" y="78" width="684" height="414"/>'+
    '<rect class="ssr" x="46" y="92" width="26" height="386"/><rect class="ssr" x="688" y="92" width="26" height="386"/>'+
    '<path class="sspt" d="M59 100V470"/><path class="sspt" d="M701 100V470"/></g>';
  /* marker lane */
  s+='<g id="ssMk"><rect class="ssl" x="80" y="'+(SS_MY-16)+'" width="600" height="32"/><rect class="ssw" x="'+(SS_X0-8)+'" y="'+(SS_MY-11)+'" width="14" height="22"/>'+
    '<text x="80" y="'+(SS_MY-28)+'" style="font-size:'+fs+'px">MARKER LANE</text></g>';
  /* sample lane with branch, elution arm and chamber */
  s+='<g id="ssLn"><path class="ssl" d="M80 '+(SS_Y-20)+'H680V'+(SS_Y+20)+'H'+(SS_BR+16)+'V'+(SS_Y+70)+'H'+(SS_BR+52)+'V'+(SS_Y+150)+'H'+(SS_BR-52)+'V'+(SS_Y+70)+'H'+(SS_BR-16)+'V'+(SS_Y+20)+'H80Z"/>'+
    '<rect class="ssw" x="'+(SS_X0-8)+'" y="'+(SS_Y-14)+'" width="14" height="28"/>'+
    '<path id="ssMem" class="ssm" d="M'+(SS_BR-52)+' '+(SS_Y+150)+'H'+(SS_BR+52)+'"/>'+
    '<text x="80" y="'+(SS_Y-32)+'" style="font-size:'+fs+'px">SAMPLE LANE</text></g>';
  /* detector strip across both lanes */
  s+='<g id="ssDt"><rect x="'+(SS_DET-12)+'" y="'+(SS_MY-26)+'" width="24" height="'+(SS_Y-SS_MY+52)+'" fill="url(#ssD)"/>'+
    '<path class="sscl" d="M'+SS_DET+' '+(SS_MY-26)+'V96"/><text class="ssa" x="'+SS_DET+'" y="90" text-anchor="middle" style="font-size:'+fs+'px">DETECTOR</text></g>';
  /* electrodes: separation (right reservoir) and elution (behind the membrane) */
  s+='<g id="ssE2"><circle class="ssel" cx="701" cy="'+SS_Y+'" r="9"/><text x="672" y="'+(SS_Y+48)+'" text-anchor="end" style="font-size:'+fs+'px">SEPARATION</text><text x="672" y="'+(SS_Y+48+fs+6)+'" text-anchor="end" style="font-size:'+fs+'px">ELECTRODE</text></g>';
  s+='<g id="ssE3"><path class="sspt" d="M'+(SS_BR-40)+' '+(SS_Y+166)+'H'+(SS_BR+40)+'"/><circle class="ssel" cx="'+SS_BR+'" cy="'+(SS_Y+166)+'" r="9"/>'+
    '<text x="'+(SS_BR-66)+'" y="'+(SS_Y+171)+'" text-anchor="end" style="font-size:'+fs+'px">ELUTION ELECTRODE</text></g>';
  s+='<g id="ssLab"><path class="sscl" d="M'+(SS_BR+52)+' '+(SS_Y+110)+'H580"/><text x="586" y="'+(SS_Y+106)+'" style="font-size:'+fs+'px">ELUTION</text><text x="586" y="'+(SS_Y+106+fs+5)+'" style="font-size:'+fs+'px">CHAMBER</text>'+
    '<path class="sscl" d="M'+(SS_BR-52)+' '+(SS_Y+150)+'L'+(SS_BR-90)+' '+(SS_Y+118)+'H'+(SS_BR-150)+'"/><text x="'+(SS_BR-156)+'" y="'+(SS_Y+122)+'" text-anchor="end" style="font-size:'+fs+'px">MEMBRANE</text></g>';
  /* the branch-point marker */
  s+='<g id="ssBr"><path class="ssbr" d="M'+SS_BR+' '+(SS_Y-30)+'V'+(SS_Y-48)+'"/><text class="ssa" x="'+SS_BR+'" y="'+(SS_Y-56)+'" text-anchor="middle" style="font-size:'+fs+'px">BRANCH POINT</text></g>';
  /* DNA bands */
  var B='';SS_F.forEach(function(f,i){B+='<rect class="ssdna" id="ssF'+i+'" x="-2.5" y="-13" width="5" height="26"/>'});
  var M='';SS_L.forEach(function(f,i){M+='<rect class="ssdna" id="ssM'+i+'" x="-2" y="-10" width="4" height="20"/>'});
  s+='<g id="ssDNA">'+B+M+'</g>';
  s+='<ellipse id="ssGlow" cx="'+SS_BR+'" cy="'+(SS_Y+112)+'" rx="56" ry="40" fill="url(#ssG)" style="transform-box:fill-box"/>';
  s+='<rect id="ssCol" class="ssdna" x="'+(SS_BR-40)+'" y="'+(SS_Y+120)+'" width="80" height="22"/>';
  /* pipette tip (step 4) */
  s+='<g id="ssPip"><path class="sspip" d="M'+(SS_BR-14)+' 0H'+(SS_BR+14)+'L'+(SS_BR+5)+' 120L'+(SS_BR+2)+' 140H'+(SS_BR-2)+'L'+(SS_BR-5)+' 120Z"/><path class="sse" d="M'+(SS_BR-10)+' 30H'+(SS_BR+10)+'M'+(SS_BR-8)+' 60H'+(SS_BR+8)+'"/></g>';
  caps.forEach(function(t,i){s+='<text class="cap" id="ssC'+i+'" x="380" y="'+(mob?570:560)+'" text-anchor="middle" style="font-size:'+cs+'px">'+t+'</text>'});
  return s+'</svg>';
}
function storyDraw(svg){
  var F=SS_F.map(function(f,i){return $("#ssF"+i,svg)}),M=SS_L.map(function(f,i){return $("#ssM"+i,svg)});
  var E={cas:$("#ssCas",svg),glow:$("#ssGlow",svg),col:$("#ssCol",svg),pip:$("#ssPip",svg),e2:$("#ssE2",svg),e3:$("#ssE3",svg),lab:$("#ssLab",svg),br:$("#ssBr",svg),
    cap:[0,1,2,3].map(function(i){return $("#ssC"+i,svg)})};
  return function(p,b){
    if(!E.cas.isConnected)return;
    var s1=seg(p,.02,.18),s2=seg(p,.27,.47),s3=seg(p,.53,.72),s4=seg(p,.78,.94);
    svg.style.opacity=(.3+.7*b).toFixed(3);
    var m=.8*s2+.7*s3,D=470,col=0;
    F.forEach(function(el,i){var f=SS_F[i],d=f.sp*m*D,x=SS_X0+d,y=SS_Y,o=s1*(.45+.55*f.i);
      if(f.sel&&x>SS_BR){var q=Math.min(1,(x-SS_BR)/60);x=SS_BR;y=SS_Y+q*118;if(q>=1){col++;o*=1-s4*.8}}
      else if(x>682){o=0}
      /* before separation the library sits in the well as one smear */
      if(m===0){x=SS_X0;}
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")"+(y>SS_Y+14?" rotate(90)":""));el.style.opacity=o.toFixed(3)});
    M.forEach(function(el,i){var x=SS_X0+SS_L[i]*m*D;el.setAttribute("transform","translate("+x.toFixed(1)+" "+SS_MY+")");el.style.opacity=(x>682?0:s1*.85).toFixed(3)});
    var c=Math.min(1,col/7);
    E.glow.style.opacity=(c*.55*(1-.3*s4)).toFixed(3);E.col.style.opacity=(c*.9*(1-s4*.85)).toFixed(3);
    /* active electrode: separation, then elution while the range is diverted, then back */
    var div=seg(s3,.25,.4)*(1-seg(s3,.92,1));
    E.e3.style.opacity=(.35+.65*div).toFixed(3);E.e2.style.opacity=(.35+.65*(1-div)).toFixed(3);
    E.e3.classList.toggle("on",div>.5);E.e2.classList.toggle("on",div<=.5&&s1>.5);
    E.br.style.opacity=(.4+.6*seg(s3,0,.3)).toFixed(3);
    E.lab.style.opacity=(seg(s3,.2,.5)).toFixed(3);
    var pq=seg(s4,.15,.7);E.pip.setAttribute("transform","translate(0 "+(-170+pq*410).toFixed(1)+")");E.pip.style.opacity=pq.toFixed(3);
    var W=[[0,0,.23,.25],[.25,.28,.48,.5],[.5,.53,.73,.75],[.75,.78,2,2]];
    E.cap.forEach(function(el,k){var a2=k===0?1:seg(p,W[k][0],W[k][1]),o=k===3?0:seg(p,W[k][2],W[k][3]);el.style.opacity=(b*a2*(1-o)).toFixed(3)});
  };
}
