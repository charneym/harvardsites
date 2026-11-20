/* the story scene (BL/BY/DB): ONE engraved elevation of an established small business, a brick works with a sawtooth
   north-light roof, a roller door and a two-storey office, the kind of company Shilling buys. Each step of a sale to
   Shilling inks one more layer of the same drawing: the initial review (survey dimensions), the fully funded offer (a
   letter, linked to the owner's lit office), completion (the roller door rises on a lit floor), and the next decade
   (a new bay, the north lights lit, a second van in the yard, a young birch by the gate). */
function scene(){
  var mob=MOBILE(),f=function(n){return n.toFixed(1)};
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  var GY=470,WT=300,K=1.4;
  function Y(y){return GY-(GY-y)*K}
  /* stretch building geometry upward from the ground line so the elevation fills its frame (DB) */
  function td(d){var out='',cmd='',nums=[],re=/([MLHVZ])|(-?\d*\.?\d+)/g,m,toks=[];while((m=re.exec(d)))toks.push(m[1]||+m[2]);
    var i=0,mode='';while(i<toks.length){var t=toks[i];if(typeof t==='string'){mode=t;out+=t;i++;if(t==='Z')out+=' ';continue}
      if(mode==='H'){out+=f(t)+' ';i++}else if(mode==='V'){out+=f(Y(t))+' ';i++}else{out+=f(t)+' '+f(Y(toks[i+1]))+' ';i+=2}}
    return out.trim()}
  function saw(x0,x1,n,top,lo){var s='M'+x0+' '+lo,dx=(x1-x0)/n;for(var i=0;i<n;i++){var a=x0+i*dx;s+='L'+f(a+dx*.78)+' '+top+'V'+lo+'L'+f(a+dx)+' '+lo}return s}
  function glaze(x0,x1,n,top,lo){var s='',dx=(x1-x0)/n;for(var i=0;i<n;i++){var a=x0+i*dx+dx*.78;s+='M'+f(a)+' '+(top+5)+'V'+(lo-3)+'H'+f(a+dx*.16)+'L'+f(a+2)+' '+(top+5)+'Z'}return s}
  function van(x,s){return 'M'+x+' '+GY+'V'+(GY-44*s)+'H'+(x+70*s)+'L'+(x+92*s)+' '+(GY-26*s)+'H'+(x+104*s)+'V'+GY+
    'M'+(x+70*s)+' '+(GY-44*s)+'V'+(GY-26*s)+'H'+(x+92*s)+'M'+(x+6*s)+' '+(GY-30*s)+'H'+(x+62*s)}
  function wheels(x,s){return 'M'+(x+28*s)+' '+GY+'a'+(9*s)+' '+(9*s)+' 0 1 1 0 -.1M'+(x+84*s)+' '+GY+'a'+(9*s)+' '+(9*s)+' 0 1 1 0 -.1'}
  var brick='';for(var y=WT+12;y<GY;y+=9)brick+='M124 '+y+'H296M444 '+y+'H496';
  var slats='';for(var y2=Y(356)+8;y2<GY;y2+=6)slats+='M304 '+y2+'H436';
  /* base: neatline, ground, the works and office, windows, the roller door, a title block */
  g+='<defs><clipPath id="dclip"><rect x="300" y="'+f(Y(356))+'" width="140" height="'+f(GY-Y(356))+'"/></clipPath></defs>';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="sD gr" d="M24 '+GY+'H776"/><path class="sD kb" d="M24 478H776M24 483H776"/>';
  var hz='';for(var i=0;i<62;i++){var hx=30+i*12;hz+='M'+hx+' 483l-8 8'}g+='<path class="sD ht" d="'+hz+'"/>';
  g+='<path class="sD bl" d="'+td('M120 '+GY+'V'+WT+'H500V'+GY+' '+saw(120,500,4,236,WT))+'"/>';
  g+='<path class="sD kb" d="'+td(glaze(120,500,4,236,WT))+'"/>';
  g+='<path class="sD ht" d="'+td(brick)+'"/>';
  g+='<path class="sD bl" d="'+td('M156 312H464V338H156Z M300 '+GY+'V356H440V'+GY+'M294 352H446')+'"/>';
  g+='<path class="sD bl" d="'+td('M500 '+GY+'V322H648V'+GY+'M496 322H652V314H496Z M514 342H556V384H514Z M582 342H632V384H582Z M520 '+GY+'V408H552V'+GY+'M574 404H632V444H574Z M535 342V384M607 342V384M603 404V444')+'"/>';
  g+='<path class="sD bl" d="'+td('M164 396H212V436H164Z M226 396H274V436H226Z M188 396V436M250 396V436')+'"/>';
  g+='<g class="tb"><path class="tbl" d="M548 492h228v52h-228Z M548 518h228"/><text x="558" y="510" class="t">SOUTH ELEVATION · THE WORKS</text><text x="558" y="536" class="t s">AN ESTABLISHED BUSINESS</text></g>';
  g+='</g>';
  /* the roller door (part of the base drawing; it rises in step 3) and the lit floor behind it */
  g+='<g clip-path="url(#dclip)"><path id="inside" class="lit2" d="'+td('M300 356H440V470H300Z')+'" style="opacity:0"/><g id="door"><path class="sD2 fix" d="'+td('M300 356H440V470H300Z')+'"/><path class="kb" d="'+slats+'"/></g></g>';
  /* 1 the initial review: survey dimensions across the frontage and up the office */
  g+='<g id="sc1"><path class="dim dr" d="M120 520V500M500 520V500M648 520V500M120 510H648"/>'+
     '<path class="dim dr" d="'+td('M674 '+GY+'V322M666 '+GY+'H682M666 322H682M92 '+WT+'V236M84 '+WT+'H100M84 236H100')+'"/>'+
     '<path class="plan dr" d="'+td('M156 312H464V338H156Z')+'"/>'+
     '<text x="44" y="64" class="a">INITIAL REVIEW</text></g>';
  /* 2 the offer: the owner's office lit, and a fully funded offer letter linked to it */
  g+='<g id="sc2"><path class="lit" d="'+td('M582 342H632V384H582Z')+'"/><path class="lit" d="'+td('M514 342H556V384H514Z')+'"/>'+
     '<path class="sys dr" d="M662 90H768V214H662Z"/><path class="frm dr" d="M676 112H754M676 126H746M676 140H754M676 154H730M676 182H716"/>'+
     '<circle class="lbl dr" cx="740" cy="188" r="11"/><path class="pipe dr" d="M632 '+f(Y(352))+'L662 214"/>'+
     '<text x="44" y="64" class="a">FULLY FUNDED OFFER</text></g>';
  /* 3 completion: (the door rises) lights across the works floor */
  g+='<g id="sc3"><path class="lit2" d="'+td('M164 396H212V436H164Z')+'"/><path class="lit2" d="'+td('M226 396H274V436H226Z')+'"/><path class="lit" d="'+td('M574 404H632V444H574Z')+'"/>'+
     '<path class="pipe dr" d="M300 '+(GY-1)+'H440"/>'+
     '<text x="44" y="64" class="a">COMPLETION</text></g>';
  /* 4 the next decade: a new bay, the north lights lit, a second van, a young birch by the gate */
  g+='<g id="sc4"><path class="sec dr" d="'+td('M120 '+GY+'V'+WT+'H24V'+GY+' '+saw(24,120,1,236,WT))+'"/><path class="lit" d="'+td(glaze(24,120,1,236,WT))+'"/>'+
     '<path class="lit" d="'+td(glaze(120,500,4,236,WT))+'"/><path class="lit2" d="'+td('M40 396H104V436H40Z')+'"/>'+
     '<path class="sec dr" d="'+van(664,1)+'"/><path class="sec dr" d="'+wheels(664,1)+'"/>'+
     '<path class="frm dr" d="M716 '+GY+'C714 440 720 410 716 380M716 420L700 404M716 404L732 388M716 392L704 376"/>'+
     '<circle class="lit2" cx="700" cy="400" r="8"/><circle class="lit2" cx="732" cy="386" r="9"/><circle class="lit2" cx="706" cy="374" r="7"/><circle class="lit2" cx="718" cy="368" r="8"/>'+
     '<text x="44" y="64" class="a">THE NEXT DECADE</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #door",svg),g1:$("#sc1",svg),g2:$("#sc2",svg),g3:$("#sc3",svg),g4:$("#sc4",svg),
    door:$("#door",svg),dh:+$("#dclip rect",svg).getAttribute("height"),ins:$("#inside",svg),
    d1:dl("#sc1 .dr"),d2:dl("#sc2 .dr"),d3:dl("#sc3 .dr"),d4:dl("#sc4 .dr"),t:[$("#sc1 text",svg),$("#sc2 text",svg),$("#sc3 text",svg),$("#sc4 text",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.16),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    /* the first frame is already complete: the review dimensions are drawn as soon as the base is */
    var r1=Math.max(s1,b);
    E.g1.style.opacity=(b*(1-.65*s2)*(1-s4)).toFixed(3);draw(E.d1,r1);
    E.g2.style.opacity=(b*(s2>0?1:0)*(1-.35*s4)).toFixed(3);draw(E.d2,s2);
    E.g3.style.opacity=(b*(s3>0?1:0)).toFixed(3);draw(E.d3,s3);
    E.door.setAttribute("transform","translate(0 "+(-(E.dh-10)*s3).toFixed(1)+")");E.ins.style.opacity=(b*s3).toFixed(3);
    E.g4.style.opacity=(b*(s4>0?1:0)).toFixed(3);draw(E.d4,s4);
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s2).toFixed(3);
    E.t[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.t[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.t[3].style.opacity=I(s4).toFixed(3);
  };
}
