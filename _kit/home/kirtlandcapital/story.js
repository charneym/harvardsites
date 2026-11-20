/* the story scene (BL/BY/DB): ONE engraved elevation of a founder-owned manufacturing company that grows as Kirtland
   builds it, following their own words (About, Business Owners): step 1 the company as the founder built it; step 2
   investments in leadership and business infrastructure (a new sawtooth-roofed bay, the office floor lit); step 3
   sales and marketing (a road out of the loading dock, trucks heading to new customers); step 4 acquisitions and new
   sites (an add-on plant joined to the first). Each step changes one labelled part of the same drawing. */
function kElev(o){
  var M=o.mob,G=o.G,f=function(n){return n.toFixed(1)};
  function win(x0,y0,cols,rows,cw,ch,gx,gy,cls){var s="";for(var r=0;r<rows;r++)for(var c=0;c<cols;c++)s+='<rect class="'+cls+'" x="'+f(x0+c*(cw+gx))+'" y="'+f(y0+r*(ch+gy))+'" width="'+cw+'" height="'+ch+'"/>';return s}
  function saw(x0,x1,y,n,hh){var d="M"+x0+" "+y,step=(x1-x0)/n;for(var i=0;i<n;i++){d+="L"+f(x0+i*step)+" "+f(y-hh)+"L"+f(x0+(i+1)*step)+" "+y}return d}
  function brick(x0,x1,y0,y1,gap){var d="";for(var y=y0+gap;y<y1;y+=gap)d+="M"+x0+" "+f(y)+"H"+x1;return d}
  var g='<svg class="'+(M?"mob":"")+'" viewBox="0 0 '+o.W+' '+o.H+'" data-ry="'+(G+o.road)+'" data-x0="'+(o.plant[0]+o.plant[1]+o.bay[0]*.72+30)+'" aria-hidden="true">';
  /* base: ground, hatching, neatline, survey ticks */
  g+='<g id="scBase"><path class="gl sD" d="M0 '+G+'H'+o.W+'"/>';
  var hz="";for(var x=6;x<o.W;x+=14)hz+="M"+x+" "+(G+4)+"l-8 10";g+='<path class="ht sD" d="'+hz+'"/>';
  var tk="";for(var x2=0;x2<=o.W;x2+=50)tk+="M"+x2+" "+(o.H-1)+"v-"+(x2%200?6:12);g+='<path class="tk sD" d="'+tk+'"/>';
  g+='<rect class="neat" x=".5" y=".5" width="'+(o.W-1)+'" height="'+(o.H-1)+'"/></g>';
  var P=o.plant,px=P[0],pw=P[1],ph=P[2],py=G-ph;
  /* step 1: the founder's plant: brick hall with a gable, office block, chimney */
  g+='<g id="scPlant"><path class="ln sD" d="M'+px+' '+G+'V'+py+'L'+(px+pw/2)+' '+(py-ph*.32)+'L'+(px+pw)+' '+py+'V'+G+'"/>'+
     '<path class="fn sD" d="'+brick(px,px+pw,py,G,ph/9)+'"/>'+
     '<path class="ln sD" d="M'+(px+pw*.12)+' '+py+'V'+(py-ph*.62)+'H'+(px+pw*.2)+'V'+(py-ph*.05)+'"/>'+
     '<path class="ln sD" d="M'+(px+pw*.4)+' '+G+'V'+(G-ph*.42)+'H'+(px+pw*.6)+'V'+G+'"/>'+
     '<g class="wg">'+win(px+pw*.08,py+ph*.14,3,1,pw*.08,ph*.22,pw*.035,0,"wn")+win(px+pw*.66,py+ph*.14,3,1,pw*.07,ph*.22,pw*.035,0,"wn")+'</g>'+
     '<path class="ln" d="M'+(px+pw*.32)+' '+(py-ph*.05)+'h'+(pw*.36)+'"/><circle class="ln" cx="'+(px+pw/2)+'" cy="'+f(py-ph*.13)+'" r="'+f(ph*.06)+'"/></g>';
  g+='<g id="scPlantL"><path class="lead" d="M'+(px+pw/2)+' '+f(py-ph*.36)+'V'+o.l1[1]+'"/><text x="'+o.l1[0]+'" y="'+(o.l1[1]-8)+'" text-anchor="'+o.l1[2]+'" class="w">FOUNDER-OWNED COMPANY</text></g>';
  /* step 2: a new bay (infrastructure) and a lit office floor (leadership) */
  var bx=px+pw,bw=o.bay[0],bh=o.bay[1],by=G-bh;
  g+='<g id="scBay"><path class="ln sD" d="M'+bx+' '+by+'H'+(bx+bw)+'V'+G+'"/><path class="ln sD" d="'+saw(bx,bx+bw,by,5,bh*.3)+'"/>'+
     '<path class="fn sD" d="'+brick(bx,bx+bw,by,G,bh/8)+'"/>'+'<path class="fn sD" d="M'+(bx+bw*.55)+' '+G+'V'+(G-bh*.55)+'H'+(bx+bw*.9)+'V'+G+'"/>'+
     '<g class="wg">'+win(bx+bw*.08,by+bh*.18,4,1,bw*.09,bh*.2,bw*.04,0,"wn")+'</g></g>';
  g+='<g id="scLead"><g>'+win(px+pw*.08,py+ph*.14,3,1,pw*.08,ph*.22,pw*.035,0,"wl")+'</g></g>';
  g+='<g id="scBayL"><path class="lead" d="M'+(bx+bw*.5)+' '+f(by-bh*.3)+'V'+o.l2[1]+'"/><text x="'+o.l2[0]+'" y="'+(o.l2[1]-8)+'" text-anchor="'+o.l2[2]+'" class="a">INFRASTRUCTURE</text>'+
     '<path class="lead" d="M'+(px+pw*.2)+' '+f(py+ph*.25)+'L'+o.l3[0]+' '+o.l3[1]+'"/><text x="'+o.l3[0]+'" y="'+(o.l3[1]+o.l3[3])+'" text-anchor="'+o.l3[2]+'" class="a">LEADERSHIP</text></g>';
  /* step 3: the road out of the loading dock, and trucks heading out */
  var ry=G+o.road;
  g+='<g id="scRoad"><path class="ln" d="M'+(bx+bw*.72)+' '+G+'L'+(bx+bw*.72+16)+' '+ry+'H'+o.W+'"/><path class="dsh" d="M'+(bx+bw*.72+30)+' '+(ry+o.road*.7)+'H'+o.W+'"/>'+
     '<text x="'+o.l4[0]+'" y="'+o.l4[1]+'" text-anchor="'+o.l4[2]+'" class="w">SALES &amp; MARKETING: NEW CUSTOMERS</text></g>';
  var TR='<path class="trk" d="M0 -14H24V0H0Z"/><path class="trk" d="M24 -9H31L34 -4V0H24Z"/><circle class="whl" cx="6" cy="1.5" r="2.6"/><circle class="whl" cx="28" cy="1.5" r="2.6"/>';
  g+='<g id="scTrucks"><g class="tr" id="scT1">'+TR+'</g><g class="tr" id="scT2">'+TR+'</g></g>';
  /* step 4: the add-on plant, joined to the first */
  var A=o.add,ax=A[0],aw=A[1],ah=A[2],ay=G-ah;
  g+='<g id="scAdd"><path class="ln sD" d="M'+ax+' '+G+'V'+ay+'H'+(ax+aw)+'V'+G+'"/><path class="ln sD" d="'+saw(ax,ax+aw,ay,4,ah*.28)+'"/>'+
     '<path class="fn sD" d="'+brick(ax,ax+aw,ay,G,ah/7)+'"/><g class="wg">'+win(ax+aw*.1,ay+ah*.2,3,1,aw*.16,ah*.22,aw*.1,0,"wl")+'</g></g>';
  var x0=px+pw/2,y0=py-ph*.4,x1=ax+aw/2,y1=ay-ah*.36,cy=Math.min(y0,y1)-o.arc;
  g+='<path id="scLink" class="course" d="M'+f(x0)+' '+f(y0)+'C'+f(x0)+' '+f(cy)+' '+f(x1)+' '+f(cy)+' '+f(x1)+' '+f(y1)+'"/>';
  g+='<g id="scAddL"><circle class="mk" cx="'+f(x1)+'" cy="'+f(y1)+'" r="4.5"/><text x="'+o.l5[0]+'" y="'+o.l5[1]+'" text-anchor="'+o.l5[2]+'" class="a">ADD-ON ACQUISITION</text>'+
     '<text x="'+o.l5[0]+'" y="'+(o.l5[1]+o.fs*1.5)+'" text-anchor="'+o.l5[2]+'" class="w">AND NEW SITES</text></g>';
  return g+'</svg>';
}
function scene(){
  if(MOBILE())return kElev({mob:1,W:400,H:400,G:290,fs:14,plant:[14,130,150],bay:[110,115],road:30,add:[268,122,100],arc:40,
    l1:[14,44,"start"],l2:[199,120,"middle"],l3:[14,360,"start",16],l4:[396,356,"end"],l5:[396,20,"end"]});
  return kElev({W:800,H:520,G:430,fs:12,plant:[40,250,220],bay:[180,170],road:34,add:[575,195,150],arc:70,
    l1:[40,60,"start"],l2:[380,176,"middle"],l3:[40,486,"start",16],l4:[790,500,"end"],l5:[790,50,"end"]});
}
function storyDraw(svg){
  var E={base:$$("#scBase .sD",svg),neat:$$("#scBase .neat",svg),plant:$("#scPlant",svg),plantD:$$("#scPlant .sD",svg),pl:$("#scPlantL",svg),bay:$("#scBay",svg),bayD:$$("#scBay .sD",svg),lead:$("#scLead",svg),bl:$("#scBayL",svg),
    road:$("#scRoad",svg),t1:$("#scT1",svg),t2:$("#scT2",svg),add:$("#scAdd",svg),addD:$$("#scAdd .sD",svg),link:$("#scLink",svg),al:$("#scAddL",svg)};
  function L(a){return a.map(function(p){return p.getTotalLength()})}
  var BL=L(E.base),PL=L(E.plantD),YL=L(E.bayD),AL=L(E.addD),KL=E.link.getTotalLength(),mob=svg.classList.contains("mob");
  var road=$("path.ln",E.road),RL=road.getTotalLength();
  function draw(els,lens,s){els.forEach(function(el,k){el.style.strokeDasharray=lens[k];el.style.strokeDashoffset=(lens[k]*(1-s)).toFixed(1)})}
  var lastB=-1;
  return function(p,b){
    if(!E.link.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,BL,b);E.neat.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.16),s2=seg(p,.25,.45),s3=seg(p,.5,.7),s4=seg(p,.74,.94);
    /* the founder's company is there from the first frame; it draws in with the base */
    draw(E.plantD,PL,b);E.plant.style.opacity=b.toFixed(3);E.pl.style.opacity=b.toFixed(3);
    draw(E.bayD,YL,s2);E.bay.style.opacity=(b*Math.min(1,s2*3)).toFixed(3);E.lead.style.opacity=(b*s2).toFixed(3);E.bl.style.opacity=(b*seg(p,.36,.46)).toFixed(3);
    road.style.strokeDasharray=RL;road.style.strokeDashoffset=(RL*(1-s3)).toFixed(1);E.road.style.opacity=(b*Math.min(1,s3*3)).toFixed(3);
    var ry=+svg.getAttribute("data-ry"),W=mob?400:800,x0=+svg.getAttribute("data-x0");
    [[E.t1,1],[E.t2,.55]].forEach(function(T){var u=Math.max(0,Math.min(1,(s3-.25)/.75)),x=x0+(W-60-x0)*u*T[1];
      T[0].setAttribute("transform","translate("+x.toFixed(1)+" "+(ry-3)+") scale("+(mob?.9:1.15)+")");T[0].style.opacity=(b*seg(p,.56,.62)).toFixed(3)});
    draw(E.addD,AL,s4);E.add.style.opacity=(b*Math.min(1,s4*3)).toFixed(3);
    E.link.style.strokeDasharray=KL;E.link.style.strokeDashoffset=(KL*(1-seg(p,.82,.95))).toFixed(1);E.link.style.opacity=b;
    E.al.style.opacity=(b*seg(p,.88,.96)).toFixed(3);
  };
}
