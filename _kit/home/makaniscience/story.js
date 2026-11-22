/* The story scene (BL/BY/DB): how the Makani Respiratory Monitor works, as ONE continuous fine-line scene in plan view.
   Engraved skin contours run across the frame. Step 1 (wear): the wireless pod and its soft sensor strip settle onto the
   skin (shapes after Makani's own product photographs). Step 2 (stretch): the body breathes, the skin and the strip
   lengthen and relax with each breath, and the sensing element stretches with them (dimension marks show the change).
   Step 3 (stream): Bluetooth arcs leave the pod and the breathing waveform draws across the frame to its end point.
   Driven by the scrubbed progress. Facts: makaniscience.com (technology, product, market opportunity), PR Newswire 2025-04-02. */
var SCW=760,SCH=520,AX=180;
function mkSkinY(k,x){return 116+k*23+5*Math.sin(x/61+k*.9)+3*Math.sin(x/23+k*2.1)}
function mkSkin(){var g='',k,x;for(k=0;k<9;k++){var d='';for(x=40;x<=720;x+=8)d+=(x==40?'M':'L')+x+' '+mkSkinY(k,x).toFixed(1);g+='<path class="'+(k==0||k==8?'sk2':'sk')+' sD" d="'+d+'"/>'}
  var s=5,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff};
  for(var i=0;i<46;i++){var px=50+R()*660,kk=Math.floor(R()*8),py=(mkSkinY(kk,px)+mkSkinY(kk+1,px))/2;g+='<path class="sk2 sD" d="M'+(px-3).toFixed(1)+' '+py.toFixed(1)+'l6 0"/>'}
  return g}
function mkWave(){var d='',x;for(x=60;x<=700;x+=4){var ph=(x-60)/640*5*Math.PI*2,y=405-34*Math.sin(ph-Math.PI/2)*(.85+.15*Math.sin(ph*.37));d+=(x==60?'M':'L')+x+' '+y.toFixed(1)}return d}
function mkScene(o){
  var g='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><g id="mkBase">';
  g+='<g id="mkSkin">'+mkSkin()+'</g>';
  g+='<path class="ax sD" d="M60 405H700"/>';
  g+=o.mob?'<text class="t" x="380" y="34" text-anchor="middle">PLAN VIEW · ON THE SKIN</text>':'<text class="t" x="40" y="36">PLAN VIEW · ON THE SKIN</text>';
  g+='</g>';
  /* the device: the pod (a rounded capsule) clipped to the sensor strip, with the sensing element in a window */
  g+='<g transform="translate(330 210) scale(1.22) translate(-330 -210)"><g id="mkDev"><g id="mkStripG">';
  g+='<path class="st" id="mkStrip" d=""/>';
  g+='<rect class="el" id="mkEl" x="372" y="196" width="76" height="28"/>';
  g+='<path class="elh" id="mkElH" d=""/>';
  g+='<circle class="ho" cx="300" cy="210" r="5"/><circle class="ho" cx="356" cy="198" r="4"/><circle class="ho" cx="356" cy="222" r="4"/><circle class="ho" id="mkH4" cx="468" cy="198" r="4"/><circle class="ho" id="mkH5" cx="468" cy="222" r="4"/>';
  g+='</g>';
  g+='<rect class="pd" x="96" y="158" width="168" height="104" rx="46"/><rect class="pd2" x="112" y="172" width="136" height="76" rx="34"/>';
  g+='<path class="pdm" d="M186 196h28M150 224h44"/>';
  g+='</g>';
  /* stretch dimension marks above the element (no text on them) */
  g+='<g id="mkDim"><path class="dm" id="mkDimL" d=""/></g></g>';
  /* bluetooth arcs from the pod, down toward the waveform */
  g+='<g id="mkBt"><path class="bt" d="M127 300q20 10 40 0"/><path class="bt" d="M115 316q32 16 64 0"/><path class="bt" d="M103 332q44 22 88 0"/></g>';
  g+='<path class="wv" id="mkWave" d="'+mkWave()+'"/><circle class="pen" id="mkPen" r="4.5" cx="60" cy="439"/>';
  if(o.mob){
    g+='<g id="lb1"><text x="380" y="80" text-anchor="middle">POD · SENSOR STRIP</text></g>';
    g+='<g id="lb2"><text x="380" y="80" text-anchor="middle">STRETCHES WITH BREATH</text></g>';
    g+='<g id="lb3"><text x="380" y="500" text-anchor="middle">LIVE WAVEFORM</text></g>';
  }else{
    g+='<g id="lb1"><text x="40" y="84">WIRELESS POD · SOFT SENSOR STRIP</text></g>';
    g+='<g id="lb2"><text x="720" y="84" text-anchor="end">STRETCHES WITH EACH BREATH</text></g>';
    g+='<g id="lb3"><text x="40" y="500">RESPIRATORY WAVEFORM · OVER BLUETOOTH</text></g>';
  }
  return g+'</svg>';
}
function scene(){return mkScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#mkBase .sD"),fade:$$("#mkBase text",svg),skin:$("#mkSkin",svg),dev:$("#mkDev",svg),strip:$("#mkStrip",svg),el:$("#mkEl",svg),elh:$("#mkElH",svg),
    h4:$("#mkH4",svg),h5:$("#mkH5",svg),dim:$("#mkDimL",svg),dimG:$("#mkDim",svg),bt:$("#mkBt",svg),wave:$("#mkWave",svg),pen:$("#mkPen",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var WL=E.wave.getTotalLength();E.wave.style.strokeDasharray=WL+" "+WL;
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var on=sm2(seg(p,.03,.2)),amp=sm2(seg(p,.34,.46)),bt=sm2(seg(p,.64,.72)),wv=sm2(seg(p,.4,.95));
    /* breathing: five slow breaths across the scrub, felt from step 2 on */
    var br=(.5-.5*Math.cos(p*Math.PI*2*5))*amp,s=br*26;
    E.skin.setAttribute("transform","translate("+AX+" 0) scale("+(1+.03*br).toFixed(4)+" 1) translate("+(-AX)+" 0)");
    op(E.dev,b*on);E.dev.setAttribute("transform","translate(0 "+((1-on)*-14).toFixed(1)+")");
    var re=560+s;
    E.strip.setAttribute("d","M230 180H"+(re-22).toFixed(1)+"Q"+re.toFixed(1)+" 180 "+re.toFixed(1)+" 202V218Q"+re.toFixed(1)+" 240 "+(re-22).toFixed(1)+" 240H230Z");
    var ew=76+s*.85;E.el.setAttribute("width",ew.toFixed(1));
    var hd='';for(var hx=380;hx<372+ew-4;hx+=8)hd+='M'+hx+' 200V220';E.elh.setAttribute("d",hd);
    E.h4.setAttribute("cx",(468+s*.85).toFixed(1));E.h5.setAttribute("cx",(468+s*.85).toFixed(1));
    var dx1=372,dx2=372+ew;E.dim.setAttribute("d","M"+dx1+" 160V172M"+dx2.toFixed(1)+" 160V172M"+dx1+" 166H"+dx2.toFixed(1));
    op(E.dimG,b*amp);
    op(E.bt,b*bt);
    E.wave.style.strokeDashoffset=(WL*(1-wv)).toFixed(1);op(E.wave,b);
    var pt=E.wave.getPointAtLength(WL*wv);E.pen.setAttribute("cx",pt.x.toFixed(1));E.pen.setAttribute("cy",pt.y.toFixed(1));op(E.pen,b*sm2(seg(p,.38,.42)));
    op(E.l1,b*seg(p,.12,.2)*(1-seg(p,.3,.35)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.6,.65)));op(E.l3,b*seg(p,.74,.82));
  };
}
function sm2(x){return x*x*(3-2*x)}
