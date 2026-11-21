/* The story scene (BL/BY/DB): Treysta's approach as ONE continuous engraved cross-section of skin (epidermis, the wavy
   collagen of the dermis, the lobules of the subcutaneous fat) with a surgical wound open at its centre.
   Step 1, the default: the wound fills with dense, straight, packed fibres, a scar ("Scarring is the body's default
   emergency repair mode", Marcelo Buzzi, treystamedicaltechnologies.com/investors).
   Step 2, intervene: TreystaCare, a topical, goes on over the healing wound during dressing changes, and the scar fibres
   recede ("interrupts the scarring cascade").
   Step 3, heal: the wound fills with tissue drawn like the skin around it and the surface closes ("healing that looks and
   feels much more like normal skin"). Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
var SY=96,EY=128,DY=356,FY=474,WX=380,WT=50,WA=304;  /* surface, epidermis base, dermis base, fat base; wound centre, half-width, apex */
function wHalf(y){return y<SY?WT:y>WA?0:WT*(1-(y-SY)/(WA-SY))}
function wave(y0,amp,ph,x0,x1,st){var f=function(n){return (+n).toFixed(1)},d='';for(var x=x0;x<=x1+.1;x+=st){var y=y0+amp*Math.sin(x*.045+ph)+amp*.45*Math.sin(x*.11+ph*2.3);d+=(d?'L':'M')+f(x)+' '+f(y)}return d}
function skinScene(o){
  var f=function(n){return (+n).toFixed(1)},g='',i,y;
  var wound='M'+(WX-WT)+' '+(SY-14)+'L'+(WX+WT)+' '+(SY-14)+'L'+(WX+WT)+' '+SY+'L'+WX+' '+WA+'L'+(WX-WT)+' '+SY+'Z';
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><mask id="wmask" maskUnits="userSpaceOnUse" x="0" y="0" width="'+SCW+'" height="'+SCH+'"><rect width="'+SCW+'" height="'+SCH+'" fill="#fff"/><path d="'+wound+'" fill="#000"/></mask>'+
     '<clipPath id="wclip"><path d="'+wound+'"/></clipPath>'+
     '<clipPath id="tclip"><rect x="24" y="'+(SY-2)+'" width="712" height="'+(FY-SY+4)+'"/></clipPath></defs>';
  /* ---- the tissue around the wound (engraved) ---- */
  g+='<g id="scBase">';
  g+='<text class="t" x="24" y="22">SKIN · CROSS-SECTION</text>';
  g+='<g mask="url(#wmask)" clip-path="url(#tclip)">';
  g+='<path class="sf sD" d="M24 '+SY+'H736"/>';
  g+='<path class="ep sD" d="M24 '+(SY+6)+'H736"/>';
  /* the basal line with its rete ridges */
  var rp='';for(var x=24;x<=736;x+=4){y=EY-6+8*Math.pow(.5+.5*Math.sin(x*.16),1.6);rp+=(rp?'L':'M')+x+' '+f(y)}
  g+='<path class="bs sD" d="'+rp+'"/>';
  for(i=0;i<15;i++){y=EY+12+i*15.2;g+='<path class="cl sD" d="'+wave(y,2.6+(i%3)*.6,i*1.7,24,736,6)+'"/>'}
  g+='<path class="dl sD" d="'+wave(DY,4,0.7,24,736,6)+'"/>';
  /* fat lobules */
  var rr=17;for(var row=0;row<3;row++){for(x=24+rr+(row%2)*rr;x<736;x+=rr*2.05){var cy=DY+rr+8+row*rr*1.75,r=rr*(.86+.12*Math.sin(x*1.7+row));
    g+='<path class="ft sD" d="M'+f(x+r)+' '+f(cy)+'A'+f(r)+' '+f(r)+' 0 1 0 '+f(x-r)+' '+f(cy)+'A'+f(r)+' '+f(r)+' 0 1 0 '+f(x+r)+' '+f(cy)+'"/>'}}
  g+='</g>';
  g+='<text class="t" x="736" y="'+(SY-10)+'" text-anchor="end">EPIDERMIS</text>';
  g+='<text class="t" x="736" y="'+(DY-12)+'" text-anchor="end">DERMIS</text>';
  g+='<text class="t" x="736" y="'+(FY+22)+'" text-anchor="end">SUBCUTANEOUS FAT</text>';
  g+='</g>';
  /* ---- the wound's edges ---- */
  g+='<g id="scWound"><path class="wd" d="M'+(WX-WT)+' '+SY+'L'+WX+' '+WA+'L'+(WX+WT)+' '+SY+'"/></g>';
  /* ---- step 1: scar, dense straight packed fibres ---- */
  g+='<g id="scScar" clip-path="url(#wclip)">';
  for(y=SY+3;y<WA;y+=5.2)g+='<path class="scr" d="M'+(WX-WT)+' '+f(y)+'H'+(WX+WT)+'"/>';
  g+='</g>';
  /* ---- step 3: healed tissue, drawn like the skin around it ---- */
  g+='<g id="scHeal"><g clip-path="url(#wclip)">';
  for(i=0;i<12;i++){y=EY+12+i*15.2;if(y<WA)g+='<path class="hl" d="'+wave(y,2.6+(i%3)*.6,i*1.7,WX-WT,WX+WT,4)+'"/>'}
  var rp2='';for(x=WX-WT;x<=WX+WT;x+=4){y=EY-6+8*Math.pow(.5+.5*Math.sin(x*.16),1.6);rp2+=(rp2?'L':'M')+x+' '+f(y)}
  g+='<path class="hl" d="'+rp2+'"/></g>';
  g+='<path class="hs" d="M'+(WX-WT-2)+' '+SY+'H'+(WX+WT+2)+'"/><path class="hs e" d="M'+(WX-WT-2)+' '+(SY+6)+'H'+(WX+WT+2)+'"/></g>';
  /* ---- step 2: the topical over the healing wound ---- */
  var ox0=WX-118,ox1=WX+118;
  g+='<g id="scOint"><path class="oi" d="M'+ox0+' '+SY+'C'+(ox0+18)+' '+(SY-15)+' '+(ox0+40)+' '+(SY-17)+' '+WX+' '+(SY-17)+'S'+(ox1-18)+' '+(SY-15)+' '+ox1+' '+SY+'Z"/>'+
     '<text class="a" x="'+WX+'" y="'+(SY-28)+'" text-anchor="middle">TREYSTACARE</text></g>';
  /* ---- step labels (fade with their step) ---- */
  g+='<g id="lb1"><text class="a" x="24" y="'+(SCH-8)+'">DEFAULT REPAIR · A DENSE SCAR</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="'+(SCH-8)+'">TOPICAL · FIRST WEEKS OF HEALING</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="'+(SCH-8)+'">HEALING CLOSER TO NORMAL SKIN</text></g>';
  return g+'</svg>';
}
function scene(){return skinScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),wd:dl("#scWound .wd"),scr:dl("#scScar .scr"),hl:dl("#scHeal .hl"),hs:dl("#scHeal .hs"),
    oint:$("#scOint",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),scar:$("#scScar",svg),wg:$("#scWound",svg)};
  var lastB=-1;
  function draw(list,v,st){list.forEach(function(a,i){var q=st?Math.min(1,Math.max(0,v*(1+st*list.length)-i*st)):v;a[0].style.strokeDashoffset=(a[1]*(1-q)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var open=seg(p,0,.1),scar=seg(p,.1,.3),oin=seg(p,.38,.52),rec=seg(p,.46,.64),heal=seg(p,.68,.9);
    draw(E.wd,b*open);op(E.wg,1-.85*heal);
    draw(E.scr,scar,.04);op(E.scar,b*(1-.9*rec));
    if(E.oint){E.oint.style.opacity=(b*oin*(1-.45*heal)).toFixed(3);E.oint.setAttribute("transform","translate(0 "+(-26*(1-oin)).toFixed(1)+")")}
    draw(E.hl,heal,.05);draw(E.hs,heal);
    op(E.l1,b*seg(p,.14,.22)*(1-seg(p,.36,.42)));op(E.l2,b*seg(p,.46,.54)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.8,.88));
  };
}
