/* The story scene (DB/BL/BY): Cantoni's mechanism as ONE continuous fine-line drawing that fills the frame (cantonitx.nl,
   Science: NNMT, Mechanism of action, NNMT Inhibition; media release 16 Sep 2025). Left, a fat cell: its single large lipid
   droplet, the nucleus pressed to the rim. Right, a zoom on NNMT with its two pockets (SAM and nicotinamide), and below it
   the two cycles NNMT drains (NAD+ and methylation). Frame 0 is already a complete picture.
   Step 1 (enzyme): NNMT in the fat cell lights; elevated activity correlates with obesity.
   Step 2 (drain): SAM and nicotinamide (NA) enter their pockets; the methyl moves to NA; MNA is excreted, SAH leaves;
     both cycles dim.
   Step 3 (block): the bisubstrate inhibitor occupies both pockets; the substrates hover outside, shut out.
   Step 4 (effect): the lipid droplet shrinks (fat mass down) while the cell keeps its rim (lean mass kept); the cycles
     run again (energy expenditure up).
   Labels sit in open space with leaders that stop 8px short of the text (DR3). Driven by the scrubbed progress. */
var SCW=760,SCH=560;
var CE=[228,286,206],DR=[220,294,150],ZM=[592,232,126],MK=[402,300,13];
var ENZ="M514 254C514 214 530 188 548 178L548 196C548 214 572 214 572 196L572 172C584 168 600 168 612 172L612 196C612 214 636 214 636 196L636 178C654 188 670 214 670 254C670 300 634 326 592 326C550 326 514 300 514 254Z";
var P1=[560,197],P2=[624,197];
var RG=[[534,456,30],[650,456,30]];
function hexp(x,y,r,a){var s="";for(var k=0;k<6;k++){var t=a+k*Math.PI/3;s+=(k?"L":"M")+(x+r*Math.cos(t)).toFixed(1)+" "+(y+r*Math.sin(t)).toFixed(1)}return s+"Z"}
function dia(x,y,r){return "M"+x+" "+(y-r)+"L"+(x+r)+" "+y+"L"+x+" "+(y+r)+"L"+(x-r)+" "+y+"Z"}
function ring(c,k){var x=c[0],y=c[1],r=c[2];
  /* a cycle: an open circle with one arrowhead */
  var a0=-Math.PI*.5+.35,a1=a0+Math.PI*2-.7,p0=[x+r*Math.cos(a0),y+r*Math.sin(a0)],p1=[x+r*Math.cos(a1),y+r*Math.sin(a1)];
  return '<path class="cyc" id="cyc'+k+'" d="M'+p0[0].toFixed(1)+' '+p0[1].toFixed(1)+'A'+r+' '+r+' 0 1 1 '+p1[0].toFixed(1)+' '+p1[1].toFixed(1)+'"/>'+
    '<path class="cyh" id="cyh'+k+'" d="M'+(p0[0]-6).toFixed(1)+' '+(p0[1]-5).toFixed(1)+'L'+p0[0].toFixed(1)+' '+p0[1].toFixed(1)+'L'+(p0[0]-6).toFixed(1)+' '+(p0[1]+5).toFixed(1)+'"/>'}
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><radialGradient id="cglow"><stop offset="0" stop-color="#ff4d40" stop-opacity=".45"/><stop offset="1" stop-color="#ff4d40" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  /* the fat cell, its droplet, the nucleus at the rim */
  g+='<path class="wl sD" d="M'+(CE[0]+CE[2])+' '+CE[1]+'A'+CE[2]+' '+CE[2]+' 0 1 1 '+(CE[0]+CE[2]-.01)+' '+(CE[1]-.5)+'"/>';
  g+='<path class="wo sD" d="M'+(CE[0]+CE[2]-8)+' '+CE[1]+'A'+(CE[2]-8)+' '+(CE[2]-8)+' 0 1 1 '+(CE[0]+CE[2]-8.01)+' '+(CE[1]-.5)+'"/>';
  g+='<ellipse class="wmd sD" cx="313" cy="136" rx="30" ry="12" transform="rotate(30 313 136)"/>';
  /* the zoom: marker on the cell rim, leaders, the zoom circle, the enzyme */
  g+='<path class="wo sD" d="M'+(MK[0]+MK[2])+' '+MK[1]+'A'+MK[2]+' '+MK[2]+' 0 1 1 '+(MK[0]+MK[2]-.01)+' '+(MK[1]-.5)+'"/>';
  g+='<path class="zl sD" d="M409 289L485 166M414 304L551 351"/>';
  g+='<path class="wmd sD" d="M'+(ZM[0]+ZM[2])+' '+ZM[1]+'A'+ZM[2]+' '+ZM[2]+' 0 1 1 '+(ZM[0]+ZM[2]-.01)+' '+(ZM[1]-.5)+'"/>';
  g+='<path class="wl sD" id="enz" d="'+ENZ+'"/>';
  g+='</g>';
  g+='<circle class="halo" id="eh" cx="'+ZM[0]+'" cy="'+(ZM[1]+20)+'" r="120" fill="url(#cglow)"/>';
  g+='<path class="ef" id="ef" d="'+ENZ+'"/>';
  /* the lipid droplet (scaled in step 4) */
  g+='<g id="drop"><circle class="dp" cx="'+DR[0]+'" cy="'+DR[1]+'" r="'+DR[2]+'"/></g>';
  /* the two cycles */
  g+='<g id="cycs">'+ring(RG[0],0)+ring(RG[1],1)+'</g>';
  /* substrates and products */
  g+='<path class="sam" id="sam" d="'+dia(0,0,10)+'"/>';
  g+='<path class="na" id="na" d="'+hexp(0,0,10,Math.PI/6)+'"/>';
  g+='<circle class="me" id="me" r="3.6" cx="0" cy="0"/>';
  /* the bisubstrate inhibitor: one molecule spanning both pockets */
  g+='<g id="inh"><path class="ih" d="'+dia(P1[0],P1[1],10)+' '+hexp(P2[0],P2[1],10,Math.PI/6)+'"/><path class="ib" d="M'+(P1[0]+10)+' '+P1[1]+'L'+(P2[0]-9)+' '+P2[1]+'"/></g>';
  /* labels */
  if(!mob){
    g+='<g id="lCe"><path class="ld" d="M96 84L110 120"/><text class="t" x="24" y="72">FAT CELL</text></g>';
    g+='<g id="lDr"><text class="t" x="'+DR[0]+'" y="'+(DR[1]+4)+'" text-anchor="middle">LIPID DROPLET</text></g>';
    g+='<g id="lNu"><path class="ld" d="M358 72L324 118"/><text class="t" x="352" y="60">NUCLEUS</text></g>';
    g+='<g id="lEn"><text class="t b" x="'+ZM[0]+'" y="296" text-anchor="middle">NNMT</text><text class="t" x="'+P1[0]+'" y="246" text-anchor="middle">SAM</text><text class="t" x="'+P2[0]+'" y="246" text-anchor="middle">NA</text></g>';
    g+='<g id="lCy"><text class="t" x="'+RG[0][0]+'" y="512" text-anchor="middle">NAD+ CYCLE</text><text class="t" x="'+RG[1][0]+'" y="512" text-anchor="middle">METHYLATION</text></g>';
    g+='<g id="lMn"><text class="t a2" x="686" y="84" text-anchor="middle">MNA, EXCRETED</text></g>';
    g+='<g id="lSh"><text class="t a2" x="470" y="84" text-anchor="middle">SAH</text></g>';
    g+='<g id="lIn"><text class="t a2" x="'+ZM[0]+'" y="84" text-anchor="middle">BISUBSTRATE INHIBITOR</text></g>';
  }else{
    g+='<g id="lCe"></g><g id="lNu"></g><g id="lMn"></g><g id="lSh"></g><g id="lIn"></g>';
    g+='<g id="lDr"><text class="t" x="'+DR[0]+'" y="'+(DR[1]+8)+'" text-anchor="middle">FAT</text></g>';
    g+='<g id="lEn"><text class="t b" x="'+ZM[0]+'" y="300" text-anchor="middle">NNMT</text></g>';
    g+='<g id="lCy"><text class="t" x="'+RG[0][0]+'" y="522" text-anchor="middle">NAD+</text><text class="t" x="'+RG[1][0]+'" y="522" text-anchor="middle">SAM</text></g>';
  }
  var ly=SCH-4,lx=mob?24:20;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'NNMT IN FAT CELLS':'NNMT OVEREXPRESSED IN THE FAT CELL')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'SAM + NA → SAH + MNA':'SAM + NICOTINAMIDE → SAH + MNA · BOTH CYCLES DRAINED')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'BOTH POCKETS BLOCKED':'ONE INHIBITOR IN BOTH POCKETS · SUBSTRATES SHUT OUT')+'</text></g>';
  g+='<g id="lb4"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'FAT MASS DOWN':'FAT MASS DOWN · LEAN MASS KEPT (PRECLINICAL)')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),ef:$("#ef",svg),eh:$("#eh",svg),drop:$("#drop",svg),cyc:[$("#cyc0",svg),$("#cyc1",svg)],cyh:[$("#cyh0",svg),$("#cyh1",svg)],
    sam:$("#sam",svg),na:$("#na",svg),me:$("#me",svg),inh:$("#inh",svg),
    lCe:$("#lCe",svg),lDr:$("#lDr",svg),lNu:$("#lNu",svg),lEn:$("#lEn",svg),lCy:$("#lCy",svg),lMn:$("#lMn",svg),lSh:$("#lSh",svg),lIn:$("#lIn",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function at(el,x,y){el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")")}
  function lerp(a,b,t){return a+(b-a)*t}
  function ez(t){t=Math.max(0,Math.min(1,t));return t*t*(3-2*t)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s4=seg(p,.77,.95);
    /* 1. the enzyme lights inside the fat cell */
    var e1=seg(p,.04,.16);
    op(E.ef,b*(.25+.55*e1)*(1-.5*seg(p,.52,.6)));op(E.eh,b*e1*(1-.6*seg(p,.52,.6)));
    op(E.lCe,b);op(E.lDr,b);op(E.lNu,b);op(E.lEn,b);op(E.lCy,b);
    /* 2. SAM and NA drop into their pockets, the methyl moves over, the products leave */
    var a2=ez(seg(p,.27,.35)),m2=ez(seg(p,.36,.41)),x2=ez(seg(p,.42,.5)),on2=seg(p,.26,.3)*(1-seg(p,.5,.54));
    var sx=P1[0],sy=lerp(132,P1[1],a2),nx=P2[0],ny=lerp(132,P2[1],a2);
    sx=lerp(sx,470,x2);sy=lerp(sy,108,x2);nx=lerp(nx,686,x2);ny=lerp(ny,108,x2);
    /* step 3: the substrates hover outside, shut out */
    var h3=seg(p,.55,.6)*(1-seg(p,.74,.8));
    if(p>=.54){sx=P1[0]-34;sy=150;nx=P2[0]+34;ny=150}
    at(E.sam,sx,sy);at(E.na,nx,ny);
    op(E.sam,b*(p<.54?on2:h3*.9));op(E.na,b*(p<.54?on2:h3*.9));
    E.sam.classList.toggle("spent",p>.38&&p<.54);
    var mx=lerp(sx,nx,m2),my=lerp(sy,ny,m2)-Math.sin(m2*Math.PI)*16;
    if(m2>=1){mx=nx;my=ny}
    at(E.me,mx,my);op(E.me,b*(p<.54?on2:h3*.9));
    if(p>=.54){at(E.me,sx,sy)}
    op(E.lMn,b*seg(p,.46,.5)*(1-seg(p,.52,.55)));op(E.lSh,b*seg(p,.46,.5)*(1-seg(p,.52,.55)));
    /* the cycles: drained in step 2, run again in step 4 */
    var dim=seg(p,.38,.48)*(1-s4);
    E.cyc.forEach(function(el,i){el.classList.toggle("lit",p>.82);op(el,b*(1-.7*dim));op(E.cyh[i],b*(1-.7*dim))});
    /* 3. the bisubstrate inhibitor drops into both pockets */
    var i3=ez(seg(p,.56,.64));
    E.inh.setAttribute("transform","translate(0 "+((1-i3)*-70).toFixed(1)+")");op(E.inh,b*seg(p,.55,.6));
    op(E.lIn,b*seg(p,.6,.66)*(1-seg(p,.74,.78)));
    /* 4. the droplet shrinks; the cell keeps its rim */
    var k=1-.3*ez(s4);E.drop.setAttribute("transform","translate("+DR[0]+" "+DR[1]+") scale("+k.toFixed(3)+") translate("+(-DR[0])+" "+(-DR[1])+")");
    op(E.drop,b);
    op(E.l1,b*seg(p,.03,.1)*(1-seg(p,.22,.27)));op(E.l2,b*seg(p,.29,.36)*(1-seg(p,.47,.52)));op(E.l3,b*seg(p,.56,.62)*(1-seg(p,.72,.77)));op(E.l4,b*seg(p,.8,.87));
  };
}
