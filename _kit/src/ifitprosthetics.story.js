/* the story scene: iFIT's own fitting sequence (catalogue p.5 "Prosthesis Selection and Fitting"), drawn as a fine-line technical
   elevation of a transtibial residual limb and the TT200 socket. Step 1 the prosthetist measures the limb (distal 1/3 circumference,
   limb length from the base of the patella); step 2 one of 20 sizes is chosen and the open socket arrives (no cast, scan or mould);
   step 3 it closes round the limb and is aligned on the pylon in a single session with hand tools; step 4 the wearer adjusts the
   closure as limb volume changes during the day. One caption under the figure names each step. */
var IF_CX=400;
function ifLimb(){/* knee and residual limb, front elevation */
  return '<path class="lb" d="M296 22C298 92 304 138 318 176C326 252 334 318 344 364C352 402 448 402 456 364C466 318 474 252 482 176C496 138 502 92 504 22"/>'+
   '<path class="lb2" d="M318 176C350 188 450 188 482 176"/><ellipse class="lb2" cx="400" cy="150" rx="30" ry="20"/>'+
   '<path class="lb3" d="M352 120C360 136 372 146 384 150M448 120C440 136 428 146 416 150"/>';
}
function ifHalf(sx){/* one shell half of the socket (sx = -1 left, 1 right), drawn about the centre line */
  function X(x){return (IF_CX+sx*x).toFixed(1)}
  return '<path class="sh" d="M'+X(0)+' 150C'+X(40)+' 150 '+X(80)+' 160 '+X(96)+' 172C'+X(92)+' 250 '+X(82)+' 330 '+X(70)+' 386C'+X(60)+' 418 '+X(34)+' 432 '+X(0)+' 436"/>'+
   '<path class="sh2" d="M'+X(10)+' 166C'+X(44)+' 168 '+X(72)+' 176 '+X(84)+' 186C'+X(80)+' 256 '+X(72)+' 326 '+X(62)+' 376"/>'+
   '<circle class="rv" cx="'+X(78)+'" cy="214" r="3.2"/><circle class="rv" cx="'+X(72)+'" cy="330" r="3.2"/>';
}
function scene(){
  var mob=MOBILE(),fs=mob?21:12.5,cs=mob?23:13.5;
  var caps=["MEASURE THE LIMB","20 SIZES · NO CASTS, SCANS OR MOULDS","FIT AND ALIGNED IN ONE SESSION","THE WEARER ADJUSTS, ANYTIME"];
  var s='<svg viewBox="'+(mob?'110 0 580 570':'0 0 800 570')+'" role="img" aria-label="Fine-line drawing of a residual limb being measured and fitted with an iFIT adjustable socket">';
  var g='';for(var gx=80;gx<=720;gx+=40)g+='<path class="gd" d="M'+gx+' 10V520"/>';for(var gy=10;gy<=520;gy+=40)g+='<path class="gd" d="M80 '+gy+'H720"/>';
  s+='<defs><radialGradient id="ifGm" cx="400" cy="270" r="330" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset=".55" stop-color="#fff" stop-opacity=".8"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient><mask id="ifGk" maskUnits="userSpaceOnUse" x="0" y="0" width="800" height="570"><rect width="800" height="570" fill="url(#ifGm)"/></mask></defs>';
  s+='<g mask="url(#ifGk)">'+g+'<path class="ax" d="M400 4V528"/></g>';
  s+='<g id="ifLimb">'+ifLimb()+'</g>';
  /* step 1: measures */
  s+='<g id="ifM"><ellipse id="ifCirc" class="ms" cx="400" cy="318" rx="66" ry="11"/>'+
   '<path class="dm" d="M530 150V392M522 150H538M522 392H538"/><path class="lead" d="M430 150H522M452 392H522M466 318H540"/>'+
   '<text x="546" y="250" style="font-size:'+fs+'px">LIMB LENGTH</text><text x="546" y="'+(250+fs*1.5)+'" class="mu" style="font-size:'+(fs*.9)+'px">PATELLA TO END</text>'+
   '<text x="546" y="'+(322+fs*.35)+'" style="font-size:'+fs+'px" class="a">DISTAL 1/3</text></g>';
  /* step 2: the size row */
  var SZ=["NARROW","STD","WIDE","X-WIDE","ULTRA"];s+='<g id="ifSz">';
  SZ.forEach(function(t,i){var x=180+i*110;s+='<path class="szb'+(i===1?' on':'')+'" d="M'+(x-40)+' 502H'+(x+40)+'"/><text x="'+x+'" y="'+(mob?526:522)+'" text-anchor="middle" class="'+(i===1?'a':'mu')+'" style="font-size:'+(fs*.88)+'px">'+t+'</text>'});
  s+='</g>';
  /* the socket: two halves, base, pylon */
  s+='<g id="ifSock"><g id="ifL">'+ifHalf(-1)+'</g><g id="ifR">'+ifHalf(1)+'</g>'+
   '<g id="ifBase"><path class="sh" d="M364 436H436L430 452H370Z"/><path class="py" d="M388 452H412V500H388Z"/><path class="sh2" d="M380 460H420M380 470H420"/></g>'+
   '<g id="ifStraps"><path id="ifS1" class="st" d="M318 214C360 222 440 222 478 214"/><path id="ifS2" class="st" d="M326 330C362 338 438 338 472 330"/>'+
   '<path class="bk" d="M462 204h20v20h-20zM456 320h20v20h-20z"/></g>'+
   '<path id="ifCord" class="cd" d="M330 250L470 262L330 274L470 286L330 298"/></g>';
  /* step 3: alignment line through the pylon and the hand-tool label */
  s+='<g id="ifAl"><path class="al" d="M400 120V540"/><path class="al2" d="M380 508L420 492"/><text x="'+(mob?228:244)+'" y="478" text-anchor="end" style="font-size:'+fs+'px">ALIGN</text><text x="'+(mob?228:244)+'" y="'+(478+fs*1.5)+'" text-anchor="end" class="mu" style="font-size:'+(fs*.9)+'px">HAND TOOLS</text><path class="lead" d="M252 474H384"/></g>';
  /* step 4: tighten arrows */
  s+='<g id="ifAdj"><path class="ar" d="M232 280H296M284 270L296 280L284 290"/><path class="ar" d="M568 280H504M516 270L504 280L516 290"/><text x="232" y="256" style="font-size:'+fs+'px" class="a">VOLUME</text><text x="568" y="256" text-anchor="end" style="font-size:'+fs+'px" class="a">CHANGES</text></g>';
  caps.forEach(function(t,i){s+='<text class="cap" id="ifC'+i+'" x="400" y="'+(mob?566:562)+'" text-anchor="middle" style="font-size:'+cs+'px">'+t+'</text>'});
  return s+'</svg>';
}
function storyDraw(svg){
  function q(id){return svg.querySelector("#"+id)}
  var E={m:q("ifM"),circ:q("ifCirc"),sz:q("ifSz"),sock:q("ifSock"),L:q("ifL"),R:q("ifR"),base:q("ifBase"),straps:q("ifStraps"),s1:q("ifS1"),s2:q("ifS2"),cord:q("ifCord"),al:q("ifAl"),adj:q("ifAdj"),cap:[0,1,2,3].map(function(i){return q("ifC"+i)})};
  var CL=E.circ.getTotalLength?E.circ.getTotalLength():420,S1=E.s1.getTotalLength(),S2=E.s2.getTotalLength(),CD=E.cord.getTotalLength();
  return function(p,b){
    if(!E.m.isConnected)return;
    var s1=seg(p,.03,.16),s2=seg(p,.28,.44),s3=seg(p,.53,.7),s4=seg(p,.78,.94);
    svg.style.opacity=(.3+.7*b).toFixed(3);
    /* step 1: the tape draws round the limb, the length dimension appears */
    E.circ.style.strokeDasharray=CL.toFixed(1)+" "+CL.toFixed(1);E.circ.style.strokeDashoffset=(CL*(1-Math.max(s1,.02))).toFixed(1);
    E.m.style.opacity=(b*(.25+.75*s1)*(1-.8*s2)*(1-s3)).toFixed(3);
    /* step 2: the size row lights, the open socket rises into place under the limb */
    E.sz.style.opacity=(b*s2*(1-s3)).toFixed(3);
    var open=46*(1-s3)+(-4)*s4,rise=120*(1-s2);
    E.sock.style.opacity=(b*Math.min(1,s2*1.6)).toFixed(3);
    E.L.setAttribute("transform","translate("+(-open).toFixed(1)+" "+rise.toFixed(1)+")");
    E.R.setAttribute("transform","translate("+open.toFixed(1)+" "+rise.toFixed(1)+")");
    E.base.setAttribute("transform","translate(0 "+rise.toFixed(1)+")");
    /* step 3: straps draw across, alignment line */
    E.straps.style.opacity=(b*s3).toFixed(3);
    E.s1.style.strokeDasharray=S1.toFixed(1)+" "+S1.toFixed(1);E.s1.style.strokeDashoffset=(S1*(1-s3)).toFixed(1);
    E.s2.style.strokeDasharray=S2.toFixed(1)+" "+S2.toFixed(1);E.s2.style.strokeDashoffset=(S2*(1-seg(p,.58,.72))).toFixed(1);
    E.al.style.opacity=(b*s3*(1-s4)).toFixed(3);
    /* step 4: the cord lacing tightens, arrows press in */
    E.cord.style.strokeDasharray=CD.toFixed(1)+" "+CD.toFixed(1);E.cord.style.strokeDashoffset=(CD*(1-s4)).toFixed(1);E.cord.style.opacity=(b*Math.min(1,s4*2)).toFixed(3);
    E.adj.style.opacity=(b*s4).toFixed(3);
    var W=[[0,0,.23,.25],[.25,.28,.48,.5],[.5,.53,.73,.75],[.75,.78,2,2]];
    E.cap.forEach(function(el,k){var a=k===0?1:seg(p,W[k][0],W[k][1]),o=k===3?0:seg(p,W[k][2],W[k][3]);el.style.opacity=(b*a*(1-o)).toFixed(3)});
  };
}
