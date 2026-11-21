/* the story scene: the CollaMedix process, from the technology page, drawn as one engraved plate.
   Step 1 medical-grade collagen in solution: loosely packed, randomly oriented molecules in a glass cell;
   step 2 electrocompaction (ELAC): two electrodes, the molecules migrate and align into one dense thread, without denaturation;
   step 3 braiding: the threads are braided on an industrial braiding machine into a macroporous tube, CollaFabric;
   step 4 in the body: the braid over a suture at a repair, and new collagen laid down aligned along its threads (tendon-like).
   One caption names each step. */
var CM_MOL=(function(){var A=[],s=7;function r(){s=(s*9301+49297)%233280;return s/233280}
  for(var i=0;i<120;i++){var x=96+r()*408,y=190+r()*180,a=r()*180,tx=110+(i/119)*380+(r()-.5)*8,ty=280+(r()-.5)*12;A.push([x,y,a,tx,ty,r()])}return A})();
function scene(){
  var mob=MOBILE(),cs=mob?18:13,ls=mob?19:11;
  var caps=["COLLAGEN · RANDOM, LOOSE","ELECTROCOMPACTION · ALIGNED","BRAIDED · MACROPOROUS","NEW COLLAGEN · ALIGNED"];
  var s='<svg viewBox="20 30 560 520" role="img" aria-label="The CollaMedix process: collagen in solution is electrocompacted into an aligned thread, braided into CollaFabric, and guides new aligned collagen in the body">';
  var g='';for(var gx=40;gx<=560;gx+=40)g+='<path class="xg" d="M'+gx+' 50V500"/>';for(var gy=60;gy<=500;gy+=40)g+='<path class="xg" d="M30 '+gy+'H570"/>';
  s+='<g>'+g+'</g>';
  /* step 1-2: the glass cell, with its meniscus */
  s+='<g id="cmCell"><path class="cm-cell" d="M70 172V384Q70 398 84 398H516Q530 398 530 384V172"/><path class="cm-cell2" d="M70 186Q300 178 530 186"/>'+
     '<text x="78" y="160" style="font-size:'+ls+'px">COLLAGEN SOLUTION</text></g>';
  /* step 2: the electrodes */
  s+='<g id="cmEl"><path class="cm-el" d="M84 236H516"/><path class="cm-el" d="M84 324H516"/><circle class="cm-elt" cx="84" cy="236" r="4"/><circle class="cm-elt" cx="84" cy="324" r="4"/>'+
     '<text x="516" y="222" text-anchor="end" style="font-size:'+ls+'px">ELECTRODE</text><text x="516" y="350" text-anchor="end" style="font-size:'+ls+'px">ELECTRODE</text></g>';
  /* the molecules */
  var M='';CM_MOL.forEach(function(m,i){M+='<path class="cm-mol" id="cmM'+i+'" d="M-11 0C-6 -2.4 -2 2.4 2 0S8 -2.4 11 0"/>'});
  s+='<g id="cmMols">'+M+'</g>';
  s+='<path id="cmTh" class="cm-th" d="M110 280H490"/>';
  /* step 3: the braid, an elevation of a tubular braid */
  var B='<clipPath id="cmClip"><rect x="90" y="214" width="420" height="132"/></clipPath><g clip-path="url(#cmClip)">';
  var Ru='',Rp='',Rm='';
  for(var x=-60;x<=520;x+=26){Rp+='M'+x+' 214L'+(x+132)+' 346';Rm+='M'+(x+132)+' 214L'+x+' 346'}
  B+='<path class="cm-ribu" d="'+Rp+'"/><path class="cm-rib" id="cmRp" d="'+Rp+'"/><path class="cm-ribu" d="'+Rm+'"/><path class="cm-rib" id="cmRm" d="'+Rm+'"/></g>';
  B+='<path class="cm-tube" d="M90 214H510M90 346H510"/><ellipse class="cm-tube" cx="510" cy="280" rx="16" ry="66"/>';
  B+='<g id="cmNew">';for(var k=0;k<9;k++){var yy=226+k*13.5;B+='<path class="cm-new" d="M96 '+yy+'H504"/>'}B+='</g>';
  /* step 4: the repair (a tendon running under the braid, a suture through it) */
  var T='';for(var j=0;j<12;j++){var y=402+j*7.5,w=(j%3)*1.2;T+='<path class="cm-ten" d="M36 '+y+'C150 '+(y-2-w)+' 260 '+(y+2+w)+' 380 '+y+'S520 '+(y-2)+' 566 '+y+'"/>'}
  s+='<g id="cmTen">'+T+'<path class="cm-sut" d="M36 346C110 341 170 338 300 338S500 341 566 348"/><text x="40" y="502" style="font-size:'+ls+'px">TENDON</text><text x="566" y="330" text-anchor="end" style="font-size:'+ls+'px">SUTURE</text></g>';
  s+='<g id="cmBr"><g id="cmBrIn">'+B+'</g></g>';
  caps.forEach(function(t,i){s+='<text class="cap" id="cmC'+i+'" x="300" y="'+(mob?540:536)+'" text-anchor="middle" style="font-size:'+cs+'px">'+t+'</text>'});
  return s+'</svg>';
}
function storyDraw(svg){
  var E={cell:$("#cmCell",svg),el:$("#cmEl",svg),th:$("#cmTh",svg),br:$("#cmBr",svg),brIn:$("#cmBrIn",svg),rp:$("#cmRp",svg),rm:$("#cmRm",svg),nw:$("#cmNew",svg),ten:$("#cmTen",svg),
    mols:CM_MOL.map(function(m,i){return $("#cmM"+i,svg)}),news:[].slice.call(svg.querySelectorAll(".cm-new")),cap:[0,1,2,3].map(function(i){return $("#cmC"+i,svg)})};
  var RL=E.rp.getTotalLength(),NL=408;
  return function(p,b){
    if(!E.cell.isConnected)return;
    var s1=seg(p,.0,.12),s2=seg(p,.27,.46),s3=seg(p,.52,.70),s4=seg(p,.77,.94);
    svg.style.opacity=(.3+.7*b).toFixed(3);
    E.cell.style.opacity=((.55+.45*Math.max(s1,b*.6))*(1-s3)).toFixed(3);
    E.el.style.opacity=(Math.min(1,seg(p,.25,.32))*(1-s3)).toFixed(3);
    /* molecules: drift (step 1), migrate and align (step 2), then become the thread */
    var tt=performance.now()/1000;
    E.mols.forEach(function(el,i){var m=CM_MOL[i],wob=RM?0:Math.sin(tt*.6+i)*3*(1-s2);
      var x=lerp(m[0],m[3],s2),y=lerp(m[1]+wob,m[4],s2),a=lerp(m[2],0,s2);
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+a.toFixed(1)+")");
      el.style.opacity=(.85*(1-seg(p,.44,.5))).toFixed(3)});
    E.th.style.opacity=(seg(p,.4,.47)*(1-seg(p,.55,.62))).toFixed(3);
    /* the braid draws on, left to right */
    var bo=seg(p,.5,.56);E.br.style.opacity=bo.toFixed(3);
    var d=RL*(1-s3);E.rp.style.strokeDasharray=RL.toFixed(0)+" "+RL.toFixed(0);E.rp.style.strokeDashoffset=d.toFixed(1);
    E.rm.style.strokeDasharray=RL.toFixed(0)+" "+RL.toFixed(0);E.rm.style.strokeDashoffset=(RL*(1-seg(p,.55,.72))).toFixed(1);
    /* step 4: the braid settles onto the repair; new collagen grows along it */
    var sc=lerp(1,.86,s4),ty=lerp(0,58,s4);
    E.brIn.setAttribute("transform","translate(300 "+(280+ty).toFixed(1)+") scale("+sc.toFixed(3)+") translate(-300 -280)");
    E.ten.style.opacity=s4.toFixed(3);E.ten.setAttribute("transform","translate(0 "+((1-s4)*20).toFixed(1)+")");
    E.news.forEach(function(el,k){var q=seg(p,.8+k*.012,.92+k*.006);el.style.strokeDasharray=NL+" "+NL;el.style.strokeDashoffset=(NL*(1-q)).toFixed(1)});
    var W=[[0,0,.23,.25],[.25,.28,.48,.5],[.5,.53,.73,.75],[.75,.78,2,2]];
    E.cap.forEach(function(el,k){var a2=k===0?1:seg(p,W[k][0],W[k][1]),o=k===3?0:seg(p,W[k][2],W[k][3]);el.style.opacity=(b*a2*(1-o)).toFixed(3)});
  };
}
