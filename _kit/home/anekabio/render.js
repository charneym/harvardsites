/* Offline render of the hero (HOME_BRIEF update, option c: a crafted render of the real subject).
   Subject: a cerebellar neuron (Purkinje-type: a flat, fan-shaped dendritic arbor above a round soma, one axon below),
   drawn as a confocal fluorescence image in the AnekaBio logo green (#5f933b). Friedreich's ataxia, the target of
   AnekaBio's QTE therapy (NIH 1R41NS143585), is a neurodegenerative disease of the nervous system.
   Output: hero.webp (2880x1800) + paths.json (main dendrite polylines for the live glints).
   Run: node _kit/home/anekabio/render.js */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const W=2880,H=1800,SEED=+(process.env.SEED||7777);
(async()=>{
const b=await chromium.launch();const p=await b.newPage({viewport:{width:800,height:600}});
const out=await p.evaluate(({W,H,SEED})=>{
 let s=SEED;const R=()=>{s=(s*16807)%2147483647;return (s-1)/2147483646};const RR=(a,b)=>a+(b-a)*R();
 const cv=document.createElement('canvas');cv.width=W;cv.height=H;const c=cv.getContext('2d');
 let g=c.createRadialGradient(W*.64,H*.48,0,W*.64,H*.48,W*.75);g.addColorStop(0,'#0f2014');g.addColorStop(.5,'#0a170e');g.addColorStop(1,'#050b07');c.fillStyle=g;c.fillRect(0,0,W,H);
 c.globalCompositeOperation='lighter';
 /* envelope of the arbor: a half-ellipse fan above the soma */
 function inside(x,y,E){const dx=(x-E.cx)/E.rx,dy=(y-E.cy)/E.ry;return y<E.cy-RR(0,90)&&dx*dx+dy*dy<1-RR(0,.28)}
 function tree(x,y,ang,len,w0,depth,segs,poly,E){
   const step=9,n=Math.max(3,Math.round(len/step));let a=ang,av=0,pts=[[x,y]];
   for(let i=0;i<n;i++){
     av+=RR(-.07,.07);av*=.8;a+=av;a+=(-Math.PI/2-a)*.012*(depth<2?1:.3);
     const nx=x+Math.cos(a)*step,ny=y+Math.sin(a)*step;if(!inside(nx,ny,E))break;
     const t=i/n,ww=w0*Math.pow(1-t*.7,1.2);segs.push([x,y,nx,ny,Math.max(ww,1.1),depth]);x=nx;y=ny;pts.push([x,y]);
     const pb=depth==0?.05:depth<3?.075:depth<6?.085:.035;
     if(depth<8&&i>1&&R()<pb&&n-i>3){const side=R()<.5?-1:1;tree(x,y,a+side*RR(.35,.95),len*RR(.5,.85),ww*RR(.6,.8),depth+1,segs,null,E)}
     /* spiny branchlets on the finer dendrites */
     if(depth>=3&&R()<.1){const sa=a+(R()<.5?-1:1)*RR(.9,1.6),sl=RR(10,26);segs.push([x,y,x+Math.cos(sa)*sl,y+Math.sin(sa)*sl,1,9])}
   }
   if(poly)poly.push(pts);
 }
 function neuron(cx,cy,sc,blur,alpha,keep,K){K=K||1;
   const segs=[],polys=[];const E={cx:cx,cy:cy-30*sc,rx:720*sc,ry:900*sc};
   /* primary dendrite: one thick trunk up from the soma that splits into main branches */
   const tx=cx+RR(-10,10)*sc,ty=cy-150*sc;segs.push([cx,cy-60*sc,tx,ty,30*sc,0]);
   const nb=4,AA=[-1.2,-.42,.42,1.2];for(let k=0;k<nb;k++){const a=-Math.PI/2+AA[k]*.75+RR(-.06,.06);tree(tx,ty,a,RR(820,1000)*sc,RR(15,19)*sc,0,segs,polys,E)}
   /* the axon, thin and straight, leaving the base of the soma */
   const ax=[];let x=cx,y=cy+70*sc,a=Math.PI/2+.08;for(let i=0;i<120;i++){a+=RR(-.02,.02);const nx=x+Math.cos(a)*9,ny=y+Math.sin(a)*9;segs.push([x,y,nx,ny,4.2*sc,4]);x=nx;y=ny}for(let i=0;i<60;i++){const nx=x+Math.cos(a)*9,ny=y+Math.sin(a)*9;segs.push([x,y,nx,ny,4.2*sc,4]);x=nx;y=ny}
   const L=document.createElement('canvas');L.width=W;L.height=H;const l=L.getContext('2d');l.lineCap='round';
   function paint(col,wm){l.clearRect(0,0,W,H);l.strokeStyle=col;l.fillStyle=col;
     for(const q of segs){l.globalAlpha=q[5]==9?.7:Math.max(.5,1-q[5]*.07);l.lineWidth=q[4]*wm;l.beginPath();l.moveTo(q[0],q[1]);l.lineTo(q[2],q[3]);l.stroke()}
     l.globalAlpha=1;l.beginPath();for(let i=0;i<=60;i++){const t=i/60*Math.PI*2;let r=(78+5*Math.sin(t*3+.7))*sc;let yy=Math.sin(t)*r*1.02;if(Math.sin(t)<0)yy*=1.08;l.lineTo(cx+Math.cos(t)*r*.94,cy+yy)}
     if(wm<.5){const rg=l.createRadialGradient(cx+12*sc,cy-14*sc,0,cx,cy,86*sc);rg.addColorStop(0,'rgba(246,255,236,.95)');rg.addColorStop(.6,'rgba(196,236,160,.6)');rg.addColorStop(1,'rgba(120,190,80,.25)');l.fillStyle=rg}l.fill()}
   const layers=blur>0?[[blur*2.4,'#4f8a2c',.5*alpha,1.6],[blur,'#78b84c',.55*alpha,1]]:[[36,'#4f8a2c',.7,1.9],[11,'#6aad3e',.78,1.25],[3,'#9fd572',.85,.8],[0,'#effbe2',.88,.42]];
   c.setTransform(K,0,0,K,cx*(1-K),cy*(1-K));
   for(const [bl,col,al,wm] of layers){paint(col,wm);c.globalAlpha=al;c.filter=bl>0?'blur('+bl+'px)':'none';c.drawImage(L,0,0);c.filter='none';c.globalAlpha=1}
   if(blur==0){c.globalCompositeOperation='source-over';const ng=c.createRadialGradient(cx-4*sc,cy+6*sc,0,cx-4*sc,cy+6*sc,46*sc);ng.addColorStop(0,'rgba(48,96,28,.6)');ng.addColorStop(.65,'rgba(80,140,50,.4)');ng.addColorStop(1,'rgba(180,230,140,0)');
     c.fillStyle=ng;c.beginPath();c.ellipse(cx-4*sc,cy+6*sc,42*sc,36*sc,.2,0,7);c.fill();c.globalCompositeOperation='lighter'}
   c.setTransform(1,0,0,1,0,0);
   if(keep)return polys.map(pl=>pl.map(q=>[cx+(q[0]-cx)*K,cy+(q[1]-cy)*K]));
 }
 /* out-of-focus neuropil and parallel fibres far behind */
 const N=document.createElement('canvas');N.width=W;N.height=H;const nc=N.getContext('2d');nc.lineCap='round';
 for(let i=0;i<60;i++){let x=RR(-100,W+100),y=RR(-100,H+100),a=RR(0,7);nc.strokeStyle='rgba(70,130,45,'+RR(.05,.12)+')';nc.lineWidth=RR(4,13);nc.beginPath();nc.moveTo(x,y);for(let k=0;k<40;k++){a+=RR(-.12,.12);x+=Math.cos(a)*30;y+=Math.sin(a)*30;nc.lineTo(x,y)}nc.stroke()}
 c.filter='blur(14px)';c.drawImage(N,0,0);c.filter='none';
 /* neighbouring neurons, out of focus */
 neuron(W*.14,H*.78,.62,16,.4);neuron(W*.97,H*.86,.6,18,.36);neuron(W*.36,H*1.18,.55,20,.3);
 const polys=neuron(W*.72,H*.74,.98,0,1,true,.7);
 {const B=document.createElement('canvas');B.width=W;B.height=H;const bc=B.getContext('2d');for(let i=0;i<110;i++){bc.fillStyle='rgba(170,220,130,'+RR(.04,.14)+')';bc.beginPath();bc.arc(RR(0,W),RR(0,H),RR(2,9),0,7);bc.fill()}c.filter='blur(6px)';c.drawImage(B,0,0);c.filter='none'}
 c.globalCompositeOperation='source-over';
 const id=c.getImageData(0,0,W,H),d=id.data;for(let i=0;i<d.length;i+=4){const n=(R()-.5)*7;d[i]+=n;d[i+1]+=n;d[i+2]+=n}c.putImageData(id,0,0);
 const P=polys.map(pl=>pl.filter((_,i)=>i%3==0).map(q=>[+(q[0]/W).toFixed(4),+(q[1]/H).toFixed(4)]));
 return {url:cv.toDataURL('image/webp',.9),P};
},{W,H,SEED});
fs.writeFileSync(path.join(__dirname,'hero.webp'),Buffer.from(out.url.split(',')[1],'base64'));
fs.writeFileSync(path.join(__dirname,'paths.json'),JSON.stringify(out.P));
console.log('hero.webp',fs.statSync(path.join(__dirname,'hero.webp')).size,'paths',out.P.length);
await b.close();})();
