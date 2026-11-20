/* Offline render of the hero (HOME_BRIEF update, option c: a crafted render of the real subject).
   Subject: a megakaryocyte, the large bone-marrow cell that makes platelets, extending proplatelets (long beaded
   shafts whose swellings and tips break off as platelets). BCT's BLVRB inhibitors enhance megakaryocyte and platelet
   formation (their site; NIH 1R44CA302180). Drawn as a fluorescence micrograph: tubulin in the BCT logo coral (#fe5342),
   the polyploid, multilobed nucleus in a pale DNA stain, free platelets around it, neighbours out of focus.
   Output: hero.webp (2880x1800) + paths.json (main proplatelet shafts, for the live glints).
   Run: node _kit/home/bloodcelltechnologies/render.js */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const W=2880,H=1800;
(async()=>{
const b=await chromium.launch();const p=await b.newPage({viewport:{width:800,height:600}});
const out=await p.evaluate(({W,H})=>{
 let s=90417;const R=()=>{s=(s*16807)%2147483647;return (s-1)/2147483646};const RR=(a,b)=>a+(b-a)*R();
 const cv=document.createElement('canvas');cv.width=W;cv.height=H;const c=cv.getContext('2d');
 let g=c.createRadialGradient(W*.66,H*.48,0,W*.66,H*.48,W*.8);g.addColorStop(0,'#112024');g.addColorStop(.45,'#0c181b');g.addColorStop(1,'#060d0f');c.fillStyle=g;c.fillRect(0,0,W,H);
 c.globalCompositeOperation='lighter';
 /* a proplatelet: a thin, gently curving shaft with periodic swellings, sometimes branching (a bifurcation), ending in a bulbous tip */
 function shaft(x,y,a,len,w0,depth,segs,beads,poly){
   let step=10,n=Math.round(len/step),av=0,pts=[[x,y]],nextBead=RR(60,110);
   for(let i=0;i<n;i++){
     av+=RR(-.03,.03);av*=.9;a+=av;const nx=x+Math.cos(a)*step,ny=y+Math.sin(a)*step;const t=i/n;
     const ww=Math.max(w0*(1-t*.55),2.2);segs.push([x,y,nx,ny,ww,depth]);x=nx;y=ny;pts.push([x,y]);
     nextBead-=step;if(nextBead<=0&&t>.12){beads.push([x,y,RR(8,12)*(depth?0.85:1),a]);nextBead=RR(70,130)}
     if(depth<2&&i>n*.3&&i<n*.8&&R()<.022){const sd=R()<.5?-1:1;shaft(x,y,a+sd*RR(.4,.8),len*(1-t)*RR(.5,.8),ww*.9,depth+1,segs,beads,null)}
   }
   beads.push([x,y,RR(10,14),a,1]);if(poly)poly.push(pts);
 }
 function cell(cx,cy,sc,blur,alpha,nPro,rot,keep){
   const segs=[],beads=[],polys=[];
   /* proplatelets leave from the edge of the cell body, spread round a wide fan */
   for(let k=0;k<nPro;k++){const a=rot+k*2*Math.PI/nPro+RR(-.22,.22);
     const r=RR(255,290)*sc,sx=cx+Math.cos(a)*r*1.06,sy=cy+Math.sin(a)*r*.94;shaft(sx,sy,a+RR(-.3,.3),RR(520,980)*sc,RR(8,12)*sc,0,segs,beads,polys)}
   const L=document.createElement('canvas');L.width=W;L.height=H;const l=L.getContext('2d');l.lineCap='round';
   function body(rk){l.beginPath();for(let i=0;i<=72;i++){const t=i/72*Math.PI*2,r=rk*(285+16*Math.sin(t*3+.6)+10*Math.sin(t*7+2)+6*Math.sin(t*11))*sc;l.lineTo(cx+Math.cos(t)*r*1.06,cy+Math.sin(t)*r*.94)}l.closePath()}
   function paint(col,wm,bodyA){l.clearRect(0,0,W,H);l.strokeStyle=col;l.fillStyle=col;
     for(const q of segs){l.globalAlpha=1-q[5]*.12;l.lineWidth=q[4]*wm;l.beginPath();l.moveTo(q[0],q[1]);l.lineTo(q[2],q[3]);l.stroke()}
     for(const bd of beads){l.globalAlpha=1;l.beginPath();l.ellipse(bd[0],bd[1],bd[2]*wm*(bd[4]?1:1.5),bd[2]*wm*(bd[4]?.9:1),bd[3],0,7);l.fill()}
     /* the cell body: tubulin forms a dense cortical band under the membrane, dimmer inside */
     l.globalAlpha=bodyA;body(1);l.fill();l.globalAlpha=1}
   const layers=blur>0?[[blur*2.2,'#c8382a',.45*alpha,1.8,.6],[blur,'#f05a46',.55*alpha,1.1,.6]]:[[44,'#b32c20',.7,2.2,.32],[14,'#e8483a',.75,1.4,.16],[3,'#ff6a55',.85,.9,.1],[0,'#ffd2c8',.7,.38,0]];
   for(const [bl,col,al,wm,ba] of layers){paint(col,wm,ba);c.globalAlpha=al;c.filter=bl>0?'blur('+bl+'px)':'none';c.drawImage(L,0,0);c.filter='none';c.globalAlpha=1}
   if(blur==0){
     /* cortical microtubule rim: bright, slightly ragged ring just inside the membrane */
     c.save();l.clearRect(0,0,W,H);l.lineWidth=22*sc;l.strokeStyle='#ff6c58';body(.96);l.stroke();l.lineWidth=5*sc;l.strokeStyle='#ffb2a4';body(.975);l.stroke();
     c.globalAlpha=.6;c.filter='blur(7px)';c.drawImage(L,0,0);c.filter='blur(1.5px)';c.globalAlpha=.3;c.drawImage(L,0,0);c.filter='none';c.restore();c.globalAlpha=1;
     /* fibrous tubulin texture inside the cytoplasm */
     l.clearRect(0,0,W,H);l.strokeStyle='#ff7a66';l.lineWidth=2.2;
     for(let i=0;i<1400;i++){const a=RR(0,7),rr=Math.sqrt(R())*250*sc;let x=cx+Math.cos(a)*rr,y=cy+Math.sin(a)*rr*.9,d=RR(0,7);l.globalAlpha=RR(.2,.7);l.beginPath();l.moveTo(x,y);for(let k=0;k<6;k++){d+=RR(-.3,.3);x+=Math.cos(d)*14;y+=Math.sin(d)*14;l.lineTo(x,y)}l.stroke()}
     l.globalAlpha=1;c.globalAlpha=.75;c.filter='blur(1.2px)';c.drawImage(L,0,0);c.filter='none';c.globalAlpha=1;
     /* the polyploid nucleus: several fused lobes, a pale DNA stain with darker chromatin mottling */
     c.globalCompositeOperation='source-over';
     const lobes=[[-.18,-.1,.36,.3],[.12,-.18,.3,.26],[.2,.1,.32,.27],[-.06,.18,.34,.25],[-.28,.12,.24,.22],[.0,-.0,.3,.3]];
     const N=document.createElement('canvas');N.width=W;N.height=H;const n=N.getContext('2d');
     for(const lb of lobes){const x=cx+lb[0]*330*sc,y=cy+lb[1]*300*sc,rx=lb[2]*340*sc,ry=lb[3]*320*sc;const ng=n.createRadialGradient(x-rx*.25,y-ry*.3,0,x,y,Math.max(rx,ry));
       ng.addColorStop(0,'rgba(250,236,236,.8)');ng.addColorStop(.6,'rgba(214,188,200,.62)');ng.addColorStop(1,'rgba(170,140,160,0)');n.fillStyle=ng;n.beginPath();n.ellipse(x,y,rx,ry,RR(-.6,.6),0,7);n.fill()}
     n.globalCompositeOperation='source-atop';
     for(let i=0;i<900;i++){const a=RR(0,7),rr=Math.sqrt(R())*230*sc;n.fillStyle='rgba(60,30,40,'+RR(.06,.22)+')';n.beginPath();n.arc(cx+Math.cos(a)*rr,cy+Math.sin(a)*rr*.95,RR(3,11)*sc,0,7);n.fill()}
     n.globalCompositeOperation='source-over';
     c.globalAlpha=.85;c.filter='blur(3px)';c.drawImage(N,0,0);c.globalCompositeOperation='lighter';c.globalAlpha=.25;c.filter='blur(18px)';c.drawImage(N,0,0);c.filter='none';c.globalAlpha=1;
     c.globalCompositeOperation='lighter';
   }
   if(keep)return polys;
 }
 /* free platelets: small discs, a few in focus, many soft */
 function platelets(n,blur,amin,amax){const B=document.createElement('canvas');B.width=W;B.height=H;const bc=B.getContext('2d');
   for(let i=0;i<n;i++){let x=RR(0,W),y=RR(0,H);if(!blur&&Math.hypot((x-W*.665)/1.06,(y-H*.5)/.94)<330){i--;continue}const r=RR(7,13),a=RR(0,7);bc.fillStyle='rgba(255,98,78,'+RR(amin,amax)+')';bc.beginPath();bc.ellipse(x,y,r,r*RR(.6,.9),a,0,7);bc.fill();
     bc.fillStyle='rgba(255,210,200,'+RR(amin,amax)*.8+')';bc.beginPath();bc.ellipse(x,y,r*.45,r*.3,a,0,7);bc.fill()}
   c.filter=blur?'blur('+blur+'px)':'none';c.drawImage(B,0,0);c.filter='none'}
 platelets(160,10,.12,.3);
 /* neighbouring megakaryocytes, out of focus */
 cell(W*.12,H*.16,.6,22,.32,7,.5);cell(W*1.0,H*.98,.7,18,.4,8,1.2);cell(W*.32,H*1.05,.5,24,.28,6,2.1);
 platelets(70,3,.25,.55);
 /* the cell in focus, right of centre */
 const polys=cell(W*.665,H*.5,1,0,1,11,.15,true);
 platelets(40,0,.5,.85);
 c.globalCompositeOperation='source-over';
 const id=c.getImageData(0,0,W,H),d=id.data;for(let i=0;i<d.length;i+=4){const nn=(R()-.5)*7;d[i]+=nn;d[i+1]+=nn;d[i+2]+=nn}c.putImageData(id,0,0);
 const P=polys.map(pl=>pl.filter((_,i)=>i%3==0).map(q=>[+(q[0]/W).toFixed(4),+(q[1]/H).toFixed(4)]));
 return {url:cv.toDataURL('image/webp',.9),P};
},{W,H});
fs.writeFileSync(path.join(__dirname,'hero.webp'),Buffer.from(out.url.split(',')[1],'base64'));
fs.writeFileSync(path.join(__dirname,'paths.json'),JSON.stringify(out.P));
console.log('hero.webp',fs.statSync(path.join(__dirname,'hero.webp')).size,'paths',out.P.length);
await b.close();})();
