/* the story scene (BL/BY): ONE picture kept on screen. A Leptospira bacterium and a host cell. Step 2 the bacterium
   releases VM proteins that reach the cell and break its membrane; step 3 vaccine-induced antibodies bind them and pull
   them off, and the membrane closes; step 4 a lateral flow test strip takes a drop of sample and its test line lights. */
var LY={
 d:{vb:"0 0 800 470",bx0:48,bx1:330,by:150,coil:6.5,lab:[["LEPTOSPIRA",189,96,189,104,189,132]],cx:610,cy:215,rx:132,ry:102,nx:632,ny:222,nrx:40,nry:30,
    a0:150,a1:212,src:[214,236,258,280,302,322],ab:[-1,-.75],abd:72,
    vmL:["VM PROTEINS",420,318,420,306,430,262],abL:["ANTIBODIES",330,52,330,60,360,108],cellL:["HOST CELL",610,86],
    st:[120,392,560,30],sp:80,tl:450,cl:540,drop:[160,346],sL:[["SAMPLE",160,452],["TEST",453,452],["CONTROL",543,452]]},
 m:{vb:"0 0 400 440",bx0:30,bx1:370,by:58,coil:5.5,lab:[["LEPTOSPIRA",200,22,200,28,200,46]],cx:200,cy:226,rx:118,ry:80,nx:208,ny:236,nrx:34,nry:24,
    a0:232,a1:308,src:[110,150,190,230,270,300],ab:[0,-1],abd:0,abs:true,
    vmL:["VM PROTEINS",320,118,320,124,284,148],abL:["ANTIBODIES",80,118,80,124,118,148],cellL:["HOST CELL",200,332],
    st:[30,360,340,26],sp:62,tl:240,cl:310,drop:[61,322],sL:[["SAMPLE",61,428],["TEST",243,428],["CONTROL",313,428]]}
};
function scBuild(L,mob){
  var o='<svg'+(mob?' class="mob"':'')+' viewBox="'+L.vb+'" aria-hidden="true">';
  /* the bacterium: a tight helix along a gentle S, hooked at both ends */
  var pts=[],N