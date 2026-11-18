/* Southeast: one ESOP buyout, built up around the company (their square mark, 6x6 tiles).
   1 The exit: the founder's ownership flows into the ESOP buyout. 2 Capital: mission-aligned financing joins from above.
   3 Leadership: an operating leader joins from below. 4 Ownership: every tile (employee) lights; 100% ESOP-owned. */
function scene(){var o='<svg viewBox="96 32 640 400" aria-hidden="true">',N=6,q=22,x0=334,y0=164,t='';
  for(var j=0;j<N;j++)for(var i=0;i<N;i++){if(i===4&&j===4)continue;t+='<rect class="seT" x="'+(x0+i*q+2)+'" y="'+(y0+j*q+2)+'" width="'+(q-4)+'" height="'+(q-4)+'"/>'}
  o+='<rect class="frm2" x="'+(x0-14)+'" y="'+(y0-14)+'" width="'+(N*q+28)+'" height="'+(N*q+28)+'"/>'+
   '<g id="seA"><path class="join seJ" d="M182 230H318"/><rect class="node" id="seFn" x="122" y="200" width="60" height="60"/><text class="w" x="152" y="182" text-anchor="middle">FOUNDER</text><text class="a" x="250" y="218" text-anchor="middle">ESOP BUYOUT</text></g>'+
   '<g id="seB"><path class="flow seF" d="M400 92V148"/><circle class="node on" cx="400" cy="80" r="7"/><text class="w" x="400" y="58" text-anchor="middle">CAPITAL PARTNERS</text></g>'+
   '<g id="seC"><path class="join seJ2" d="M400 312V366"/><circle class="node on" cx="400" cy="378" r="7"/><text class="w" x="400" y="410" text-anchor="middle">OPERATING LEADER</text></g>'+
   '<g id="seCo">'+t+'</g>'+
   '<g id="seD"><path class="ln-a" d="M482 230H540"/><text class="a big" x="556" y="226">100%</text><text class="w" x="556" y="250">EMPLOYEE OWNERS</text></g>';
  return o+'</svg>'}
function storyDraw(svg){
  var A=$("#seA",svg),B=$("#seB",svg),C=$("#seC",svg),D=$("#seD",svg),Co=$("#seCo",svg),Fn=$("#seFn",svg),J=$(".seJ",svg),J2=$(".seJ2",svg),JL=J.getTotalLength(),J2L=J2.getTotalLength(),
    T=$$(".seT",svg),F=$(".seF",svg);
  T.forEach(function(r){var x=+r.getAttribute("x"),y=+r.getAttribute("y");r.__d=Math.hypot(446-x,276-y)/22});
  return function(p,b){if(!Co.isConnected)return;
    var s1=seg(p,.02,.2),s2=seg(p,.27,.45),s3=seg(p,.52,.7),s4=seg(p,.76,.96);
    A.style.opacity=b.toFixed(3);Co.style.opacity=b.toFixed(3);
    J.style.strokeDasharray=JL;J.style.strokeDashoffset=(JL*(1-s1)).toFixed(1);
    Fn.style.opacity=(1-.6*s1).toFixed(3);
    B.style.opacity=(b*s2).toFixed(3);F.style.strokeDashoffset=(-p*400).toFixed(1);
    C.style.opacity=(b*s3).toFixed(3);J2.style.strokeDasharray=J2L;J2.style.strokeDashoffset=(J2L*(1-s3)).toFixed(1);
    T.forEach(function(r){var q=seg(s4,r.__d/9,r.__d/9+.3);r.style.fill="rgba(var(--accr),"+(.18+.82*q).toFixed(3)+")"});
    D.style.opacity=(b*s4).toFixed(3)}}
