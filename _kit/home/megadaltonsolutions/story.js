/* The story scene (BL/BY/DB): how CD-MS weighs a particle, as ONE continuous scene. An electrostatic linear ion trap: two ion
   mirrors (stacked plate electrodes) with a copper detection cylinder between them (as in Megadalton's own trap photograph),
   wired to a charge-sensitive amplifier, with the signal trace below and a mass axis at the base.
   Step 1 (trap): one ion enters and is reflected back and forth through the cylinder. Step 2 (read): every pass induces a
   pulse; the trace draws in time with the ion. The pulse height gives the charge z, the oscillation frequency gives m/z.
   Step 3 (weigh): mass = m/z x z, ion after ion, building the mass distribution that separates empty, partial and full
   capsids (as in the AAV histogram on megadaltonsolutions.com, 3.5-5.6 MDa). Every element is driven by the scrubbed story. */
var SCW=760,SCH=520;
var TY=118,CX0=318,CX1=442,MX0=168,MX1=592;     /* ion axis, detection cylinder, turning points inside the mirrors */
var TR0=60,TR1=730,TB=292,TH=34,NOSC=5;          /* trace: x range, baseline, pulse height, round trips drawn */
var HB=462,HX0=60,HX1=730;                        /* histogram baseline and x range (3.5 to 5.5 MDa) */
function oscX(u){var f=u*NOSC%1,tri=f<.5?f*2:2-f*2;return MX0+(MX1-MX0)*tri}
function inCyl(x){return x>=CX0&&x<=CX1}
function tracePath(){var d='',n=600,i,u,x,y,prev=null;
  for(i=0;i<=n;i++){u=i/n;x=TR0+(TR1-TR0)*u;y=inCyl(oscX(u))?TB-TH:TB;
    if(prev===null)d+='M'+x.toFixed(1)+' '+y;else if(y!==prev)d+='L'+x.toFixed(1)+' '+prev+'L'+x.toFixed(1)+' '+y;prev=y}
  return d+'L'+TR1+' '+prev}
/* the mass distribution, after the AAV example on their site: empty near 3.75 MDa, partials between, full near 4.7 MDa */
var BINS=(function(){var a=[],i,m,v,N=40;for(i=0;i<N;i++){m=3.5+2*(i+.5)/N;
  v=.42*Math.exp(-Math.pow((m-3.76)/.07,2))+.13*Math.exp(-Math.pow((m-4.25)/.22,2))+1*Math.exp(-Math.pow((m-4.7)/.1,2))+.07*Math.exp(-Math.pow((m-5.1)/.16,2));
  a.push({m:m,v:v,k:m<3.95?"e":m<4.52?"p":"f"})}return a})();
function mx(m){return HX0+(HX1-HX0)*(m-3.5)/2}
function trapScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><linearGradient id="cu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e9a07a"/><stop offset=".45" stop-color="#b8653f"/><stop offset="1" stop-color="#6e3520"/></linearGradient>'+
     '<radialGradient id="ionG"><stop offset="0" stop-color="#fff3ef"/><stop offset=".35" stop-color="#ff5a4c"/><stop offset="1" stop-color="rgba(255,42,31,0)"/></radialGradient></defs>';
  /* ---- base: the trap, wiring, axes, captions ---- */
  g+='<g id="scBase">';
  g+='<path class="ax sD" d="M20 '+TY+'H740"/>';
  for(i=0;i<5;i++){var xl=40+i*26,xr=720-i*26,hh=46-i*3;
    g+='<path class="el sD" d="M'+xl+' '+(TY-hh)+'V'+(TY-11)+'M'+xl+' '+(TY+11)+'V'+(TY+hh)+'"/>';
    g+='<path class="el sD" d="M'+xr+' '+(TY-hh)+'V'+(TY-11)+'M'+xr+' '+(TY+11)+'V'+(TY+hh)+'"/>'}
  g+='<path class="wr sD" d="M380 '+(TY+34)+'V200H404"/>';
  g+='<path class="amp sD" d="M404 184L436 200L404 216Z"/>';
  g+='<path class="wr sD" d="M436 200H470V'+(TB-TH-18)+'"/>';
  g+='<path class="ax sD" d="M'+TR0+' '+TB+'H'+TR1+'"/>';
  g+='<path class="ax sD" d="M'+HX0+' '+HB+'H'+HX1+'"/>';
  [3.5,4,4.5,5,5.5].forEach(function(m){g+='<path class="ax sD" d="M'+mx(m)+' '+HB+'v6"/>'});
  g+='</g>';
  g+='<g id="scTx">';
  g+='<text class="t" x="20" y="34">'+(mob?'ION TRAP':'ELECTROSTATIC LINEAR ION TRAP')+'</text>';
  g+='<text class="t" x="40" y="'+(TY+66)+'">ION MIRROR</text><text class="t" x="720" y="'+(TY+66)+'" text-anchor="end">ION MIRROR</text>';
  g+='<text class="t" x="352" y="'+(TY-46)+'">DETECTOR</text>';
  g+='<text class="t" x="446" y="'+(204)+'">AMP</text>';
  g+='<text class="t" x="'+TR0+'" y="'+(TB-TH-18)+'">INDUCED CHARGE</text>';
  g+='<text class="t" x="'+HX0+'" y="'+(HB-118)+'">'+(mob?'MASS, MDa':'IONS PER MASS · MDa')+'</text>';
  [3.5,4,4.5,5,5.5].forEach(function(m){g+='<text class="t" x="'+mx(m)+'" y="'+(HB+24)+'" text-anchor="middle">'+m.toFixed(1)+'</text>'});
  g+='</g>';
  /* ---- the detection cylinder (copper, as in their trap photograph) ---- */
  g+='<g id="scCyl"><rect class="cyl" x="'+CX0+'" y="'+(TY-28)+'" width="'+(CX1-CX0)+'" height="56"/><ellipse class="cye" cx="'+CX0+'" cy="'+TY+'" rx="9" ry="28"/><ellipse class="cyf" cx="'+CX1+'" cy="'+TY+'" rx="9" ry="28"/></g>';
  /* ---- the ion's flight path (its recent passes, a fading streak) and the ion ---- */
  g+='<path id="scStreak" class="stk" d="M0 0"/>';
  g+='<g id="scIon"><circle class="halo" r="16" fill="url(#ionG)"/><circle class="ion" r="5"/></g>';
  /* ---- the signal trace ---- */
  g+='<path id="scTrace" class="trc" d="'+tracePath()+'"/>';
  /* ---- the readout: pulse height = charge, period = m/z ---- */
  var ents=[],n=600,j;for(j=1;j<=n;j++){if(!inCyl(oscX((j-1)/n))&&inCyl(oscX(j/n)))ents.push(TR0+(TR1-TR0)*j/n)}
  var xa=ents[3],xb=ents[5],xh=ents[ents.length-1]-9;
  g+='<g id="scRd">';
  g+='<path class="br" d="M'+(xh+5)+' '+TB+'H'+xh+'V'+(TB-TH)+'H'+(xh+5)+'"/><text class="a" x="'+TR1+'" y="'+(TB-TH-14)+'" text-anchor="end">'+(mob?'HEIGHT → z':'HEIGHT → CHARGE z')+'</text>';
  g+='<path class="br" d="M'+xa+' '+(TB+14)+'V'+(TB+20)+'H'+xb+'V'+(TB+14)+'"/><text class="a" x="'+((xa+xb)/2)+'" y="'+(TB+40)+'" text-anchor="middle">'+(mob?'PERIOD → m/z':'FREQUENCY → m/z')+'</text>';
  g+='</g>';
  /* ---- the mass distribution ---- */
  g+='<g id="scHist">';
  var bw=(HX1-HX0)/BINS.length;
  BINS.forEach(function(b,k){g+='<rect class="bn '+b.k+'" data-k="'+k+'" x="'+(HX0+k*bw+1).toFixed(1)+'" y="'+HB+'" width="'+(bw-2).toFixed(1)+'" height="0"/>'});
  g+='<g id="hLab"><text class="a e" x="'+mx(3.76)+'" y="'+(HB-52)+'" text-anchor="middle">EMPTY</text><text class="a p" x="'+mx(4.27)+'" y="'+(HB-30)+'" text-anchor="middle">PARTIAL</text><text class="a f" x="'+mx(4.7)+'" y="'+(HB-108)+'" text-anchor="middle">FULL</text></g>';
  g+='</g>';
  /* ---- step labels ---- */
  var ly=SCH-6;
  g+='<g id="lb1"><text class="a" x="20" y="'+ly+'">'+(mob?'ONE ION, TRAPPED':'ONE ION, REFLECTED THROUGH THE DETECTOR')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+ly+'">'+(mob?'CHARGE AND m/z, TOGETHER':'CHARGE AND m/z, MEASURED TOGETHER')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+ly+'">MASS = m/z × z · ION BY ION</text></g>';
  return g+'</svg>';
}
function scene(){return trapScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var tr=$("#scTrace",svg),TL=tr.getTotalLength();tr.style.strokeDasharray=TL+" "+TL;tr.style.strokeDashoffset=TL;
  var E={base:dl("#scBase .sD"),tx:$("#scTx",svg),cyl:$("#scCyl",svg),ion:$("#scIon",svg),stk:$("#scStreak",svg),rd:$("#scRd",svg),
    bn:$$(".bn",svg),hl:$("#hLab",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,bw=(HX1-HX0)/BINS.length;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.tx,b);op(E.cyl,b)}
    var ent=seg(p,.04,.12),tau=seg(p,.12,.62),hist=seg(p,.66,.9);
    /* the ion: enters from the left mirror, then oscillates; time on the trace = tau */
    var x=tau>0?oscX(tau):20+(MX0-20)*ent;
    E.ion.setAttribute("transform","translate("+x.toFixed(1)+" "+TY+")");
    var io=b*seg(p,.03,.07)*(1-seg(p,.64,.7));op(E.ion,io);
    /* a short streak behind the ion, along the axis */
    var xs=tau>0?oscX(Math.max(0,tau-.035)):Math.max(20,x-40);E.stk.setAttribute("d","M"+xs.toFixed(1)+" "+TY+"L"+x.toFixed(1)+" "+TY);op(E.stk,io*.9);
    E.cyl.classList.toggle("lit",tau>0&&tau<1&&inCyl(x));
    tr.style.strokeDashoffset=(TL*(1-tau)).toFixed(1);op(tr,b);
    op(E.rd,b*seg(p,.4,.5)*(1-.6*hist));
    E.bn.forEach(function(r,k){var B=BINS[k],q=Math.min(1,Math.max(0,hist*1.25-k/BINS.length*.25));var hh=B.v*104*q;r.setAttribute("y",(HB-hh).toFixed(1));r.setAttribute("height",hh.toFixed(1))});
    op(E.hl,b*seg(p,.82,.9));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.6,.66)));op(E.l3,b*seg(p,.74,.82));
  };
}
