/* The story scene (BL/BY/DB): how RSD marks a cable (rsd-technik.de > Wire, cable and hose), ONE side view kept on
   screen for all three steps: a cable runs right to left under a print wheel fed by an ink roller.
   Step 1 (Engrave): a laser engraves the type around the print wheel rim, character by character.
   Step 2 (Print): the wheel turns, the cable runs, printed marks leave the wheel; CP 4R up to 1500 m/min.
   Step 3 (Laser): the wheel rests, a fibre laser head marks the cable on the fly; CP LM 1064 V500 up to 500 m/min.
   Schematic, not to scale. */
var SCW=760,SCH=420,VY=80,WX=250,WY=306,WRr=72,CT=378,CB=396,LX=512;
function rsScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 '+VY+' '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<linearGradient id="rsC" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a9bde6" stop-opacity=".30"/><stop offset=".45" stop-color="#f3f5f8" stop-opacity=".55"/><stop offset="1" stop-color="#86a0d8" stop-opacity=".18"/></linearGradient>'+
    '<radialGradient id="rsW" cx=".5" cy=".5" r=".5"><stop offset=".55" stop-color="#86a0d8" stop-opacity=".05"/><stop offset="1" stop-color="#86a0d8" stop-opacity=".22"/></radialGradient>'+
    '<radialGradient id="rsH" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffd2a0" stop-opacity=".9"/><stop offset="1" stop-color="#ff9a50" stop-opacity="0"/></radialGradient></defs>';
  g+='<text class="t" x="20" y="'+(mob?112:108)+'">'+(mob?"SIDE VIEW":"CABLE MARKING, SIDE VIEW, SCHEMATIC")+'</text>';
  /* the cable */
  g+='<path class="cab" d="M40 '+CT+'H720V'+CB+'H40Z"/><path class="body sD" d="M40 '+CT+'H720"/><path class="body sD" d="M40 '+CB+'H720"/>';
  /* printed marks (step 2) and laser marks (step 3), positioned per frame */
  g+='<g id="rsPm">';for(i=0;i<12;i++)g+='<rect class="pm" x="0" y="'+(CT+5)+'" width="26" height="8"/>';g+='</g>';
  g+='<g id="rsLm">';for(i=0;i<12;i++)g+='<rect class="lm" x="0" y="'+(CT+6)+'" width="22" height="6"/>';g+='</g>';
  /* ink roller and print wheel */
  g+='<g id="rsInk"><circle class="tool" cx="175" cy="231" r="34" style="fill:url(#rsW)"/><path class="body sD" d="M209 231A34 34 0 1 1 141 231A34 34 0 1 1 209 231Z"/></g>';
  g+='<circle class="tool" cx="'+WX+'" cy="'+WY+'" r="'+WRr+'" style="fill:url(#rsW)"/>';
  g+='<path class="body sD" d="M'+(WX+WRr)+' '+WY+'A'+WRr+' '+WRr+' 0 1 1 '+(WX-WRr)+' '+WY+'A'+WRr+' '+WRr+' 0 1 1 '+(WX+WRr)+' '+WY+'Z"/>';
  g+='<path class="body sD" d="M'+(WX+14)+' '+WY+'A14 14 0 1 1 '+(WX-14)+' '+WY+'A14 14 0 1 1 '+(WX+14)+' '+WY+'Z"/>';
  g+='<g id="rsTy">';for(i=0;i<24;i++){g+='<path class="ty" transform="rotate('+(i*15)+' '+WX+' '+WY+')" d="M'+(WX-4)+' '+(WY-WRr+3)+'H'+(WX+4)+'V'+(WY-WRr+12)+'H'+(WX-4)+'Z"/>'}g+='</g>';
  /* the engraving laser above the wheel (step 1) */
  g+='<g id="rsEng"><path class="tool" style="fill:url(#rsW)" d="M228 136H272V176H228Z"/><path class="body" d="M228 136H272V176H228Z"/><path class="beam" d="M'+WX+' 178V'+(WY-WRr)+'"/><circle cx="'+WX+'" cy="'+(WY-WRr+2)+'" r="16" fill="url(#rsH)"/></g>';
  /* the fibre laser head over the cable (step 3) */
  g+='<g id="rsLas"><path class="tool" style="fill:url(#rsW)" d="M'+(LX-24)+' 226H'+(LX+24)+'V292H'+(LX-24)+'Z"/><path class="body" d="M'+(LX-24)+' 226H'+(LX+24)+'V292H'+(LX-24)+'Z"/><path class="body" d="M'+(LX-10)+' 292H'+(LX+10)+'V306H'+(LX-10)+'Z"/><path class="beam" d="M'+LX+' 308V'+CT+'"/><circle cx="'+LX+'" cy="'+(CT+8)+'" r="15" fill="url(#rsH)"/></g>';
  /* labels, kept clear of every stroke */
  g+='<g id="rsN"><text class="t" x="20" y="'+(mob?204:236)+'">'+(mob?"INK":"INK ROLLER")+'</text><text class="t" x="338" y="'+(mob?292:300)+'">'+(mob?"WHEEL":"PRINT WHEEL")+'</text><text class="t" x="'+(mob?600:620)+'" y="428">CABLE</text></g>';
  g+='<g id="rsP1"><text class="t s1" x="290" y="'+(mob?162:160)+'">'+(mob?"ENGRAVING":"LASER ENGRAVING")+'</text></g>';
  g+='<g id="rsP2"><text class="t s1" x="338" y="'+(mob?318:322)+'">'+(mob?"1500 M/MIN":"UP TO 1500 M/MIN")+'</text></g>';
  g+='<g id="rsP3"><text class="t" x="'+(LX+40)+'" y="250">'+(mob?"LASER":"FIBRE LASER")+'</text><text class="t s3" x="'+(LX+40)+'" y="'+(mob?276:272)+'">'+(mob?"500 M/MIN":"UP TO 500 M/MIN")+'</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="488">'+(mob?"":"1 · ENGRAVE")+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="488">'+(mob?"":"2 · PRINT")+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="488">'+(mob?"":"3 · LASER")+'</text></g>';
  return g+'</svg>';
}
function scene(){return rsScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),tools:$$(".tool,.cab",svg),Ty:$$("#rsTy .ty",svg),TyG:$("#rsTy",svg),Pm:$$("#rsPm .pm",svg),Lm:$$("#rsLm .lm",svg),Ink:$("#rsInk",svg),
    Eng:$("#rsEng",svg),Las:$("#rsLas",svg),N:$("#rsN",svg),P1:$("#rsP1",svg),P2:$("#rsP2",svg),P3:$("#rsP3",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var lastB=-1,SP=46;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b);E.tools.forEach(function(c){op(c,b)})}
    /* step 1: the laser engraves the type, one character after another, while the wheel turns under it */
    var eg=seg(p,.04,.3),run=seg(p,.36,.64),run3=seg(p,.68,1);
    op(E.Eng,b*seg(p,.02,.08)*(1-seg(p,.3,.36)));op(E.P1,b*seg(p,.06,.12)*(1-seg(p,.3,.35)));
    var rot=-360*eg-540*run;
    E.TyG.setAttribute("transform","rotate("+rot.toFixed(2)+" "+WX+" "+WY+")");
    /* character k reaches the beam (top) once the wheel has turned k*15 degrees: engraved from then on */
    E.Ty.forEach(function(t,k){op(t,b*Math.max(eg*24>=k?1:0,seg(p,.3,.32)))});
    /* step 2: the cable runs right to left; marks appear where the wheel meets the cable and travel left */
    var off=run*SP*12*.98;
    E.Pm.forEach(function(r,k){var x=WX-13+(k+1)*SP-off;r.setAttribute("x",x.toFixed(1));var vis=x<WX-13.5&&x>36?1:0;op(r,b*vis*(1-.75*seg(p,.66,.74)))});
    op(E.P2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));
    /* step 3: the wheel and ink roller step back, the laser head marks on the fly */
    op(E.Ink,b*(1-.6*seg(p,.66,.74)));
    op(E.Las,b*seg(p,.66,.74));op(E.P3,b*seg(p,.72,.8));
    var off3=run3*SP*12*.98;
    E.Lm.forEach(function(r,k){var x=LX-11+(k+1)*SP-off3;r.setAttribute("x",x.toFixed(1));var vis=x<LX-11.5&&x>36?1:0;op(r,b*vis*seg(p,.7,.74))});
    op(E.N,b*seg(p,.03,.1));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
