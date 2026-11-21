/* The story scene (BL/BY/DB): ONE engraved scene kept on screen for all four steps. A cell membrane drawn as its lipid bilayer,
   with the CB1 receptor spanning it as a bundle of seven helices (the Artiam teals). Below the membrane, inside the cell, the
   receptor's signal radiates as arcs. Step 1: the receptor at rest, a quiet basal signal. Step 2: an endocannabinoid (or THC)
   docks and the signal floods out (over-activation, linked to obesity, liver disease and diabetes). Step 3: a first-generation
   full inverse agonist (rimonabant) takes the pocket and silences everything, even the basal signal. Step 4: an Artiam compound
   (orange) takes the pocket; the over-activation is blocked while basal activity is preserved.
   Sources: artiambio.net (Indications, Targeted Solutions) and Artiam's NIH project abstracts (1R41DK130765, 1R43DA057168,
   1R41AA031392). Schematic, not to scale. Driven by the scrubbed story progress. */
var AS={TOP:166,BOT:414,OUT:198,IN:382,PK:[400,182],SG:430};
function asHelix(x,y0,y1,k,back){var w=30,r=15,s='<g class="hx h'+k+(back?' bk':'')+'">',y;
  s+='<path class="hxo sD" d="M'+(x-w/2)+' '+(y0+r)+'A'+r+' '+r+' 0 0 1 '+(x+w/2)+' '+(y0+r)+'V'+(y1-r)+'A'+r+' '+r+' 0 0 1 '+(x-w/2)+' '+(y1-r)+'Z"/>';
  for(y=y0+22;y<y1-14;y+=17)s+='<path class="hxs sD" d="M'+(x-w/2+3)+' '+(y+7)+'Q'+x+' '+(y-3)+' '+(x+w/2-3)+' '+(y-7)+'"/>';
  return s+'</g>'}
function asTail(x,y,d){return 'M'+(x-3)+' '+(y+7*d)+'C'+(x-5)+' '+(y+30*d)+' '+(x-1)+' '+(y+52*d)+' '+(x-4)+' '+(y+76*d)+
  'M'+(x+3)+' '+(y+7*d)+'C'+(x+5)+' '+(y+34*d)+' '+(x+1)+' '+(y+58*d)+' '+(x+4)+' '+(y+80*d)}
function asMem(){var s='<g class="mem">',x;
  for(x=34;x<=766;x+=19){if(x>268&&x<532)continue;
    s+='<path class="lt sD" d="'+asTail(x,AS.OUT,1)+asTail(x,AS.IN,-1)+'"/>';
    s+='<circle class="lh" cx="'+x+'" cy="'+AS.OUT+'" r="7.5"/><circle class="lh" cx="'+x+'" cy="'+AS.IN+'" r="7.5"/>'}
  return s+'</g>'}
function asRing(cx,cy,r,rot){var p='',i;for(i=0;i<6;i++){var a=(i*60+rot)*Math.PI/180;p+=(i?'L':'M')+(cx+r*Math.cos(a)).toFixed(1)+' '+(cy+r*Math.sin(a)).toFixed(1)}return p+'Z'}
/* an endocannabinoid: a long, kinked fatty-acid chain with a small polar head */
function asAgo(){var p='M-44 8',i;for(i=1;i<=10;i++)p+='L'+(-44+i*8.4).toFixed(1)+' '+(i%2?-4:8);
  return '<g class="mol ago" id="mAgo"><circle class="mg" r="48" fill="url(#lfg)"/><path class="mc" d="'+p+'"/><circle class="mh2" cx="'+(-44+10*8.4+6).toFixed(1)+'" cy="8" r="6"/></g>'}
/* a first-generation blocker (a diarylpyrazole, rimonabant): three rings */
function asRim(){return '<g class="mol rim" id="mRim"><path class="mr" d="'+asRing(0,0,15,30)+'"/><path class="mr" d="'+asRing(-27,-17,13,0)+'"/><path class="mr" d="'+asRing(27,-17,13,0)+'"/><path class="mr" d="M0 15V30L-10 40M0 30L10 40"/></g>'}
/* an Artiam compound: the refined blocker, in the brand orange */
function asArt(){return '<g class="mol art" id="mArt"><circle class="mg" r="58" fill="url(#org)"/><path class="mr" d="'+asRing(0,0,15,30)+'"/><path class="mr" d="'+asRing(-27,-17,13,0)+'"/><path class="mr" d="'+asRing(27,-17,13,0)+'"/><path class="mr" d="M0 15V32L-12 44M13 -4L24 6H36"/></g>'}
function scene(){
  var mob=MOBILE(),g='',i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="tlg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#4a8e96" stop-opacity=".24"/><stop offset="1" stop-color="#4a8e96" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="org" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ed7d31" stop-opacity=".36"/><stop offset="1" stop-color="#ed7d31" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="lfg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#9cc9cf" stop-opacity=".3"/><stop offset="1" stop-color="#9cc9cf" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="sgg" cx=".5" cy="0" r="1"><stop offset="0" stop-color="#78aab1" stop-opacity=".34"/><stop offset="1" stop-color="#78aab1" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase"><ellipse class="halo" cx="400" cy="290" rx="320" ry="250" fill="url(#tlg)"/>'+asMem();
  /* the seven helices: three behind, four in front */
  g+=asHelix(336,AS.TOP+6,AS.BOT-4,1,1)+asHelix(400,AS.TOP-2,AS.BOT+2,2,1)+asHelix(464,AS.TOP+8,AS.BOT-6,0,1);
  g+=asHelix(304,AS.TOP+14,AS.BOT,0,0)+asHelix(368,AS.TOP+4,AS.BOT+8,1,0)+asHelix(432,AS.TOP+10,AS.BOT+4,2,0)+asHelix(496,AS.TOP+18,AS.BOT-2,1,0);
  g+='<text class="t" x="764" y="150" text-anchor="end">OUTSIDE THE CELL</text><text class="t" x="764" y="444" text-anchor="end">INSIDE THE CELL</text></g>';
  /* the signal inside the cell: arcs radiating down from the receptor */
  g+='<g id="sig"><ellipse id="sgGlow" cx="400" cy="'+AS.SG+'" rx="200" ry="92" fill="url(#sgg)"/>';
  for(i=0;i<4;i++){var r=34+i*26;g+='<path class="sa" d="M'+(400-r*1.55).toFixed(0)+' '+(AS.SG-2)+'Q400 '+(AS.SG+r*1.1).toFixed(0)+' '+(400+r*1.55).toFixed(0)+' '+(AS.SG-2)+'"/>'}
  g+='</g>';
  g+='<g id="scMove">'+asAgo()+asRim()+asArt()+'</g>';
  var LX=mob?24:36,BY=mob?536:534,BY2=552;
  function lb(id,c1,t1,s1,t2,s2){return '<g id="'+id+'"><text class="a'+c1+'" x="'+LX+'" y="40">'+t1+'</text>'+(mob?'':'<text class="t" x="'+LX+'" y="60">'+s1+'</text>')+
    '<text class="a" x="400" y="'+BY+'" text-anchor="middle">'+t2+'</text>'+(mob?'':'<text class="t" x="400" y="'+BY2+'" text-anchor="middle">'+s2+'</text>')+'</g>'}
  g+=lb("lb1","","CB1 RECEPTOR","SEVEN HELICES ACROSS THE CELL MEMBRANE","BASAL ACTIVITY","A QUIET SIGNAL, NEEDED FOR EMOTIONAL WELFARE");
  g+=lb("lb2"," lf","ENDOCANNABINOID OR THC","THE RECEPTOR SWITCHED ON","OVER-ACTIVATION","LINKED TO OBESITY, LIVER DISEASE AND DIABETES");
  g+=lb("lb3"," st","FIRST-GENERATION BLOCKER","A FULL INVERSE AGONIST, SUCH AS RIMONABANT","EVERY SIGNAL SILENCED","INCLUDING THE BASAL ACTIVITY");
  g+=lb("lb4"," or","ARTIAM COMPOUND","A REFINED, SECOND-GENERATION CB1 BLOCKER","BASAL ACTIVITY PRESERVED","OVER-ACTIVATION BLOCKED");
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),heads:$$("#scBase .lh",svg),tx:$$("#scBase text",svg),halo:$(".halo",svg),glow:$("#sgGlow",svg),sa:$$(".sa",svg),
    ago:$("#mAgo",svg),rim:$("#mRim",svg),art:$("#mArt",svg),hx:$$(".hx",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var lastB=-1,P=AS.PK;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function mv(el,x,y,r){el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+(r||0).toFixed(1)+")")}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.heads.forEach(function(h){op(h,b)});E.tx.forEach(function(t){op(t,b)});op(E.halo,b)}
    /* the endocannabinoid docks (step 2), is displaced by rimonabant (step 3), which gives way to the Artiam compound (step 4) */
    var aIn=seg(p,.24,.40),aOut=seg(p,.50,.60),rIn=seg(p,.52,.66),rOut=seg(p,.76,.84),oIn=seg(p,.78,.92);
    mv(E.ago,130+(P[0]-130)*aIn-280*aOut,76+(P[1]-76)*aIn-110*aOut,50*(1-aIn));op(E.ago,b*seg(p,.20,.28)*(1-aOut));
    mv(E.rim,660+(P[0]-660)*rIn+270*rOut,76+(P[1]-76)*rIn-110*rOut,-90*(1-rIn));op(E.rim,b*seg(p,.48,.55)*(1-rOut));
    mv(E.art,130+(P[0]-130)*oIn,70+(P[1]-70)*oIn,120*(1-oIn));op(E.art,b*seg(p,.74,.80));
    /* receptor signal: basal .4; flooded to 1 when switched on; 0 under the full inverse agonist; back to basal with Artiam's */
    var on=aIn*(1-aOut),off=rIn*(1-rOut);
    var sg=Math.max(0,.4+.6*on-.4*off);
    E.hx.forEach(function(h){h.classList.toggle("lit",on>.5);h.classList.toggle("dark",off>.6)});
    E.sa.forEach(function(a,i){var ph=((p*12-i*.25)%1+1)%1,lvl=Math.max(0,Math.min(1,sg*4-i*.9));
      a.style.opacity=(b*lvl*(.4+.6*(1-ph))).toFixed(3)});
    op(E.glow,b*sg);
    op(E.l1,b*seg(p,.02,.1)*(1-seg(p,.18,.24)));
    op(E.l2,b*seg(p,.28,.36)*(1-seg(p,.46,.52)));
    op(E.l3,b*seg(p,.56,.64)*(1-seg(p,.72,.78)));
    op(E.l4,b*seg(p,.84,.92));
  };
}
