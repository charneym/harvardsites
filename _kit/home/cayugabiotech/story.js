/* The story scene (DB/BL): Cayuga's own mechanism (cayugabiotech.com, Our Novel Science and Pipeline; press releases:
   CAY001 is a single-dose intravenous polyP-SNP complex that reaches non-compressible bleeding sites, mimics platelet
   polyphosphate, is targeted to the site of bleeding and inert elsewhere, and as a cofactor accelerates / normalizes
   thrombin so a clot forms), drawn as ONE fine-line blood vessel that fills the frame, with a small opening in its lower
   wall (the bleeding site, drawn calmly as a gap in a line, never as a wound: DT).
   Frame 0 is complete: the vessel with platelets drifting through it.
   Step 1 (deliver): CAY001 particles (a ring with polyP beads, after the hero) flow in from the left.
   Step 2 (target): the particles gather at the opening; the rest pass on unchanged.
   Step 3 (clot): thrombin bursts at the opening and a fibrin mesh draws across it. Everything follows the scrubbed progress. */
var SCW=760,SCH=560;
var GX0=404,GX1=476,GXC=440,WY=440;
var NPS=[[0,231],[.07,313],[.15,264],[.22,361],[.3,203],[.37,290],[.45,381],[.52,244],[.6,336],[.67,221],[.75,308],[.82,376],[.9,272]];
var CL=[[418,424],[440,418],[462,424],[428,406],[452,404],[410,408],[470,408],[440,396],[424,390]];
var PLT=[[.05,249,0],[.18,351,1],[.31,193,2],[.44,300,0],[.57,389,1],[.7,216,2],[.83,328,0],[.95,277,1]];
function f1(v){return v.toFixed(1)}
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'40 84 680 482':'24 80 712 488')+'" aria-hidden="true">';
  g+='<defs><radialGradient id="gBurst"><stop offset="0" stop-color="#5aaee6" stop-opacity=".5"/><stop offset="1" stop-color="#5aaee6" stop-opacity="0"/></radialGradient></defs>';
  /* the vessel: upper wall (double line), lower wall with an opening between GX0 and GX1 */
  g+='<g id="scVes"><path class="wl sD" d="M40 150C240 138 520 138 720 150"/><path class="wo sD" d="M40 142C240 130 520 130 720 142"/>';
  g+='<path class="wl sD" d="M40 '+WY+'C160 444 300 444 '+GX0+' '+WY+'"/><path class="wl sD" d="M'+GX1+' '+WY+'C580 444 660 444 720 '+WY+'"/>';
  g+='<path class="wo sD" d="M40 '+(WY+8)+'C160 452 300 452 '+(GX0-4)+' '+(WY+10)+'"/><path class="wo sD" d="M'+(GX1+4)+' '+(WY+10)+'C580 452 660 452 720 '+(WY+8)+'"/>';
  g+='<path class="wl sD" d="M'+GX0+' '+WY+'C'+(GX0+2)+' '+(WY+6)+' '+(GX0+1)+' '+(WY+12)+' '+(GX0-4)+' '+(WY+10)+'"/><path class="wl sD" d="M'+GX1+' '+WY+'C'+(GX1-2)+' '+(WY+6)+' '+(GX1-1)+' '+(WY+12)+' '+(GX1+4)+' '+(WY+10)+'"/></g>';
  /* platelets drifting through */
  g+='<g id="scPlt">';PLT.forEach(function(){g+='<ellipse class="plt" rx="9" ry="3.6" cx="0" cy="0"/>'});g+='</g>';
  /* thrombin burst at the opening */
  g+='<g id="scBurst"><circle class="bglow" cx="'+GXC+'" cy="'+(WY-6)+'" r="70" fill="url(#gBurst)"/><circle class="br" cx="'+GXC+'" cy="'+(WY-6)+'" r="10"/><circle class="br" cx="'+GXC+'" cy="'+(WY-6)+'" r="10"/></g>';
  /* fibrin mesh across the opening */
  g+='<g id="scMesh">';[[GX0-14,WY-26,GX1+12,WY+6],[GX0-8,WY+8,GX1+14,WY-22],[GX0-16,WY-8,GX1+16,WY-4],[GX0+4,WY-34,GX1-6,WY+10],[GX0+20,WY+10,GX1-18,WY-36],[GX0-10,WY-18,GX1+8,WY-30],[GX0-6,WY+2,GX1+6,WY+4]].forEach(function(m){
    g+='<path class="mesh" d="M'+m[0]+' '+m[1]+'Q'+((m[0]+m[2])/2)+' '+((m[1]+m[3])/2+6)+' '+m[2]+' '+m[3]+'"/>'});g+='</g>';
  /* CAY001 particles */
  g+='<g id="scNp">';NPS.forEach(function(){g+='<g class="np"><circle class="nc" r="8"/><circle class="nb" r="1.9" cx="-4" cy="-5"/><circle class="nb" r="1.9" cx="3" cy="-6"/><circle class="nb" r="1.9" cx="7" cy="-1"/><circle class="nb" r="1.9" cx="-7" cy="2"/></g>'});g+='</g>';
  if(!mob){
    g+='<g id="lInj"><text class="t" x="44" y="104">CAY001</text><text class="t q" x="44" y="120">ONE INTRAVENOUS DOSE</text></g>';
    g+='<g id="lInert"><text class="t" x="716" y="104" text-anchor="end">INERT</text><text class="t q" x="716" y="120" text-anchor="end">ELSEWHERE IN THE BODY</text></g>';
    g+='<g id="lSite"><path class="ld" d="M'+GXC+' 472V488"/><text class="t" x="'+GXC+'" y="508" text-anchor="middle">SITE OF BLEEDING</text></g>';
    g+='<g id="lClot"><path class="ld" d="M'+GXC+' 472V488"/><text class="t" x="'+GXC+'" y="508" text-anchor="middle">THROMBIN BURST</text><text class="t q" x="'+GXC+'" y="524" text-anchor="middle">CLOT FORMS</text></g>';
  }else{g+='<g id="lInj"></g><g id="lInert"></g><g id="lSite"></g><g id="lClot"></g>'}
  var ly=SCH-6,lx=mob?48:40;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'GIVEN INTRAVENOUSLY':'CAY001 ENTERS THE CIRCULATION')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'IT GATHERS AT THE BLEED':'IT GATHERS WHERE THE VESSEL BLEEDS')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'THROMBIN, THEN A CLOT':'THROMBIN ACCELERATES AND A CLOT FORMS')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),np:$$("#scNp .np",svg),plt:$$("#scPlt .plt",svg),mesh:dl("#scMesh .mesh"),burst:$("#scBurst",svg),br:$$("#scBurst .br",svg),
    lInj:$("#lInj",svg),lInert:$("#lInert",svg),lSite:$("#lSite",svg),lClot:$("#lClot",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.32),s2=seg(p,.36,.64),s3=seg(p,.68,.94);
    /* platelets drift left to right all the way through */
    E.plt.forEach(function(el,i){var q=PLT[i],x=60+((q[0]+p*1.6)%1)*640,y=q[1]+Math.sin((p*6+i)*1.3)*6;
      el.setAttribute("transform","translate("+f1(x)+" "+f1(y)+") rotate("+(q[2]*25-25)+")");op(el,b*.9*Math.min(1,Math.sin(((x-60)/640)*Math.PI)*4))});
    /* CAY001: flows in (1); most peel off to the opening (2), the rest pass on unchanged */
    E.np.forEach(function(el,i){var q=NPS[i],inn=sm((s1-q[0]*.6)/.4),stay=i<CL.length,f=stay?sm((s2-i*.035)/.62):0;
      var xf=60+((q[0]+p*1.3)%1)*640,yf=q[1]+Math.sin((p*5+i)*1.1)*5;
      var x=xf,y=yf;if(stay){var c=CL[i];x=xf+(c[0]-xf)*f;y=yf+(c[1]-yf)*f}
      el.setAttribute("transform","translate("+f1(x)+" "+f1(y)+")");
      var edge=stay&&f>.5?1:Math.min(1,Math.sin(((xf-60)/640)*Math.PI)*4);op(el,b*inn*edge)});
    /* thrombin burst, then the mesh */
    op(E.burst,b*sm(s3*2.2)*(1-.55*sm((s3-.6)/.4)));
    E.br.forEach(function(el,i){var k=(s3*1.6+i*.5)%1;el.setAttribute("r",f1(10+k*54));op(el,b*(s3>0?1:0)*(1-k)*.8)});
    E.mesh.forEach(function(a,i){a[0].style.strokeDashoffset=(a[1]*(1-sm((s3-.18-i*.06)/.5))).toFixed(1)});
    op(E.lInj,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));
    op(E.lInert,b*seg(p,.44,.5)*(1-seg(p,.62,.68)));
    op(E.lSite,b*seg(p,.38,.44)*(1-seg(p,.64,.68)));
    op(E.lClot,b*seg(p,.72,.78));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
