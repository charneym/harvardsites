/* the story scene (BL/BY/DB, DR3/DR4): ONE section through bone with a torn soft-tissue flap lifted off it, kept on screen for all four
   steps of the REDIFIX technique as traxsurgical.com describes it ("drill, drive, and push ... place the pin, drill, screw in the first
   anchor, press in the second, and cinch") and ORTHOWORLD (guidewire, pilot hole, threaded anchor over the wire; traction on the trailing
   suture reduces the proximal implant and the tissue):
   1 drill: the guidewire goes in and the drill opens a pilot hole over it;
   2 drive: the threaded screw-in anchor is driven over the wire, its suture preloaded and passing up through the tissue;
   3 push: the push-in anchor, on the suture loop, is pressed into the bone;
   4 cinch: traction on the trailing suture shortens the loop and brings the tissue down onto the bone. Schematic, scrubbed. */
var RX={x0:40,x1:720,top:268,cin:292,bot:470,a1:330,a2:560,tEnd:430,tL:60};
function rxRand(i){var x=Math.sin(i*127.1+311.7)*43758.5453;return x-Math.floor(x)}
function rxSm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
/* tissue centre line at x for lift L (1 = torn and lifted, 0 = reduced onto bone) */
function rxT(L){return 250+180*(1-L)}                                  /* the torn end: retracted at 250, reduced over anchor 1 to 430 */
function rxTY(x,L){return RX.top-9-L*44*rxSm((x-110)/(rxT(L)-110))}
function rxTissue(L){var f=function(n){return (+n).toFixed(1)},d='',k,x,ln=[];
  for(k=0;k<5;k++){var o=-7+k*3.5,s='';var xe=rxT(L)-(k===0||k===4?6:0);for(x=RX.x0;x<xe;x+=10)s+=(s?'L':'M')+f(x)+' '+f(rxTY(x,L)+o);s+='L'+f(xe)+' '+f(rxTY(xe,L)+o);ln.push(s)}
  return ln}
function rxSut(L,st){/* the suture: anchor 1 head -> up through the tissue near its end -> anchor 2 head (from step 3) or out of frame */
  var f=function(n){return (+n).toFixed(1)},tx=rxT(L)-22,ty=rxTY(tx,L),a1=RX.a1,top=RX.top;
  var d='M'+a1+' '+(top-2)+'Q'+f((a1+tx)/2)+' '+f(Math.min(top-2,ty)-30)+' '+f(tx)+' '+f(ty-9);
  if(st<.5)d+='Q'+f(tx-10)+' '+f(ty-60)+' '+f(tx+20)+' '+f(ty-110);
  else d+='Q'+f(tx+60)+' '+f(ty-14+L*0)+' '+RX.a2+' '+(top-2);
  return d}
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,x,y,C=RX;C.x0=mob?172:158;C.x1=mob?708:735;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'170 60 540 500':'150 90 590 430')+'" aria-hidden="true">';
  g+='<g id="scBase">';
  /* bone: cortex surface, inner cortex line, cancellous bone below */
  g+='<path class="cx sD" d="M'+C.x0+' '+C.top+'H'+C.x1+'"/><path class="ci sD" d="M'+C.x0+' '+C.cin+'H'+C.x1+'"/>';
  g+='<path class="nt sD" d="M'+C.x0+' '+C.bot+'H'+C.x1+'"/>';
  var tb='';for(i=0;i<80;i++){x=C.x0+14+rxRand(i+3)*(C.x1-C.x0-28);y=C.cin+16+rxRand(i+501)*(C.bot-C.cin-30);
    if(Math.abs(x-C.a1)<24&&y<C.top+120||Math.abs(x-C.a2)<22&&y<C.top+92)continue;
    tb+='<ellipse class="tb" cx="'+f(x)+'" cy="'+f(y)+'" rx="'+f(6+rxRand(i+71)*8)+'" ry="'+f(4+rxRand(i+91)*5)+'" transform="rotate('+f((rxRand(i+33)-.5)*60)+' '+f(x)+' '+f(y)+')"/>'}
  g+='<g class="tbs">'+tb+'</g>';
  if(!mob)g+='<text class="t" x="'+C.x1+'" y="'+(C.bot+34)+'" text-anchor="end">BONE AND SOFT TISSUE, IN SECTION</text>';
  g+='</g>';
  /* the soft-tissue flap: five fibre lines, torn end at right */
  g+='<g id="tis">';for(i=0;i<5;i++)g+='<path class="tf" id="tf'+i+'" d="M0 0"/>';g+='<path class="te" id="tend" d="M0 0"/></g>';
  /* pilot holes */
  g+='<path class="hole" id="h1" d="M'+(C.a1-11)+' '+C.top+'V'+C.top+'H'+(C.a1+11)+'V'+C.top+'"/>';
  g+='<path class="hole" id="h2" d="M'+(C.a2-10)+' '+C.top+'V'+(C.top+78)+'Q'+C.a2+' '+(C.top+86)+' '+(C.a2+10)+' '+(C.top+78)+'V'+C.top+'"/>';
  /* step 1: guidewire and drill */
  g+='<path class="gw" id="gw" d="M'+C.a1+' 96V'+(C.top+118)+'"/>';
  g+='<g id="drl"><path class="ins" d="M'+(C.a1-9)+' 60V'+(C.top-6)+'L'+C.a1+' '+(C.top+6)+'L'+(C.a1+9)+' '+(C.top-6)+'V60"/>';
  for(i=0;i<8;i++){y=C.top-12-i*14;g+='<path class="fl" d="M'+(C.a1-9)+' '+y+'L'+(C.a1+9)+' '+(y-9)+'"/>'}g+='</g>';
  /* anchor 1: threaded screw-in anchor (body from the surface down 100), with its driver */
  var th='M'+(C.a1-7)+' '+(C.top-2);for(i=0;i<9;i++){y=C.top+4+i*10;th+='L'+(C.a1-13)+' '+(y+2)+'L'+(C.a1-7)+' '+(y+6)}th+='L'+C.a1+' '+(C.top+100);
  for(i=8;i>=0;i--){y=C.top+4+i*10;th+='L'+(C.a1+7)+' '+(y+6)+'L'+(C.a1+13)+' '+(y+2)}th+='L'+(C.a1+7)+' '+(C.top-2)+'Z';
  g+='<g id="an1"><path class="anc" d="'+th+'"/><path class="dv" id="dv1" d="M'+C.a1+' 60V'+(C.top-4)+'M'+(C.a1-6)+' 60V'+(C.top-4)+'M'+(C.a1+6)+' 60V'+(C.top-4)+'"/></g>';
  /* the suture loop */
  g+='<path class="sut" id="sut" d="M0 0"/>';
  /* anchor 2: tapered push-in anchor with ribs, and its inserter */
  var p2='M'+(C.a2-9)+' '+(C.top-2)+'V'+(C.top+64)+'L'+C.a2+' '+(C.top+80)+'L'+(C.a2+9)+' '+(C.top+64)+'V'+(C.top-2)+'Z',rb='';
  for(i=0;i<5;i++){y=C.top+10+i*11;rb+='M'+(C.a2-9)+' '+y+'L'+(C.a2-4)+' '+(y-5)+'M'+(C.a2+9)+' '+y+'L'+(C.a2+4)+' '+(y-5)}
  g+='<g id="an2"><path class="anc" d="'+p2+'"/><path class="rib" d="'+rb+'"/><path class="dv" id="dv2" d="M'+C.a2+' 60V'+(C.top-4)+'M'+(C.a2-6)+' 60V'+(C.top-4)+'M'+(C.a2+6)+' 60V'+(C.top-4)+'"/></g>';
  /* step 4: the trailing suture and the pull arrow */
  g+='<g id="tail"><path class="sut" id="tl" d="M'+C.a2+' '+(C.top-2)+'Q'+(C.a2+26)+' '+(C.top-70)+' '+(C.a2+72)+' '+(C.top-150)+'"/>'+
     '<path class="arw" d="M'+(C.a2+92)+' '+(C.top-120)+'L'+(C.a2+108)+' '+(C.top-168)+'M'+(C.a2+94)+' '+(C.top-156)+'L'+(C.a2+108)+' '+(C.top-168)+'L'+(C.a2+113)+' '+(C.top-153)+'"/></g>';
  /* one label per step: bottom left on desktop (clear of the instruments, which come from above), centred under the bone on phones */
  var lx=mob?440:160,ly=C.bot+34,an=mob?' text-anchor="middle"':'';
  var LB=["PIN AND PILOT HOLE","SCREW-IN ANCHOR","PUSH-IN ANCHOR","TISSUE CINCHED TO BONE"];
  for(i=0;i<4;i++)g+='<g id="lb'+i+'"><text class="a" x="'+lx+'" y="'+ly+'"'+an+'>'+LB[i]+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text,#scBase .tbs",svg),tf:[0,1,2,3,4].map(function(i){return $("#tf"+i,svg)}),te:$("#tend",svg),tis:$("#tis",svg),
    h1:$("#h1",svg),h2:$("#h2",svg),gw:$("#gw",svg),drl:$("#drl",svg),an1:$("#an1",svg),dv1:$("#dv1",svg),an2:$("#an2",svg),dv2:$("#dv2",svg),sut:$("#sut",svg),tail:$("#tail",svg),
    l:[0,1,2,3].map(function(i){return $("#lb"+i,svg)})};
  var lastB=-1,C=RX;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function tr(el,dy){el.setAttribute("transform","translate(0 "+dy.toFixed(1)+")")}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var gwIn=seg(p,.02,.08),dr=seg(p,.08,.20),drOut=seg(p,.20,.25),
        an1=seg(p,.29,.42),dv1Out=seg(p,.44,.48),gwOut=seg(p,.44,.48),
        an2=seg(p,.53,.65),dv2Out=seg(p,.66,.70),cin=seg(p,.76,.90);
    var L=1-cin,f=function(n){return (+n).toFixed(1)};
    /* tissue */
    var ln=rxTissue(L);E.tf.forEach(function(el,i){el.setAttribute("d",ln[i])});
    var ex=rxT(L),ey=rxTY(ex,L);E.te.setAttribute("d","M"+f(ex-6)+" "+f(ey-7)+"Q"+f(ex+3)+" "+f(ey-2)+" "+f(ex-2)+" "+f(ey+1)+"Q"+f(ex+4)+" "+f(ey+5)+" "+f(ex-6)+" "+f(ey+7));
    op(E.tis,b);
    /* step 1: wire in, drill down, hole opens; drill out */
    op(E.gw,b*(1-gwOut)*(gwIn>.01?1:0));E.gw.style.strokeDashoffset="";E.gw.setAttribute("d","M"+C.a1+" "+f(96+0)+"V"+f(96+(C.top+118-96)*gwIn));
    var depth=100*dr;E.h1.setAttribute("d","M"+(C.a1-11)+" "+C.top+"V"+f(C.top+depth)+"H"+(C.a1+11)+"V"+C.top);
    op(E.h1,b*seg(p,.08,.1));
    op(E.drl,b*seg(p,.05,.09)*(1-drOut));tr(E.drl,-100*(1-dr)+(-60)*drOut);
    /* step 2: anchor 1 descends over the wire and is driven in; the driver lifts away */
    op(E.an1,b*seg(p,.26,.3));tr(E.an1,-150*(1-an1));op(E.dv1,1-dv1Out);
    /* suture: appears with anchor 1, then runs to anchor 2 */
    op(E.sut,b*seg(p,.36,.42));E.sut.setAttribute("d",rxSut(L,seg(p,.63,.65)));
    E.sut.setAttribute("transform",an1<1?"translate(0 "+(-150*(1-an1)).toFixed(1)+")":"");
    /* step 3: the push-in anchor is pressed in */
    op(E.an2,b*seg(p,.5,.54));tr(E.an2,-140*(1-an2));op(E.dv2,1-dv2Out);op(E.h2,b*seg(p,.6,.64));
    /* step 4: the trailing suture is pulled; the tissue comes down */
    op(E.tail,b*seg(p,.72,.76));
    var Ls=[1-seg(p,.22,.26),seg(p,.29,.33)*(1-seg(p,.47,.51)),seg(p,.54,.58)*(1-seg(p,.71,.75)),seg(p,.78,.82)];
    E.l.forEach(function(el,i){op(el,b*Ls[i])});
  };
}
