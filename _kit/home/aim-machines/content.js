var FONTS=['300 1em "Inter Tight"','400 1em "Inter Tight"','500 1em "Inter Tight"','400 1em "Inter"','500 1em "Inter"','600 1em "Inter"'];
/* contact: aimmachines.com > Contact AIM (Automated Industrial Machinery, Inc., 14103 McCormick Drive, Tampa, FL 33626) */
var TEL="+18138188222",TELT="+1 813-818-8222",MAIL="sales@aimmachines.com";
var DP="https://www.aimmachines.com/";
/* the flagship machines (aimmachines.com > Products, AFM 3DxS, AFES 3DxT, AFCe 3Dx, Gemini). [kind, model, text] */
var FLAG=[
 ["3D · flagship","AFM 3DxS Synchro","The patent-pending Synchro head pairs a turret head with three rotary satellite benders: turret forming, rotary mandrel forming, or both."],
 ["3D · five servo axes","AFES 3DxT","Unveiled at Interwire 2019: a turret tool-changer machine with an ultra-fast servo cutter, at a very attractive price."],
 ["3D · compact","AFCe 3Dx","Launched in 2025 on 20+ years of the AccuForm Compact series, with DXF, LRA and XYZ import and animated bending simulation."],
 ["Twin head · 24 axes","Gemini","Independent twin-3D head forming and two pick-and-place arms, about 40% more output than the previous model."]];
/* the full line (aimmachines.com > 2D / 3D CNC machines). [type, models, what it does, wire] */
var LINE=[
 ["1D","AFM-1Dx","Payoff, 2-plane straightener, feeder, encoder and cutter: a complete feed-and-cut line.","Servo, hydraulic, air or saw cut"],
 ["2D","AFM-2Dx-T · AFE-2Dx","Single-stage bending head; the AFM tilts its top plate, the AFE is the simplified version.","2–16 mm by model"],
 ["2D","AFFB Frame Bender","Wire border frames, mostly for bedding, up to 72″ × 84″ (1828 × 2134 mm).","2–6.35 mm"],
 ["3D","AFM 3DxS · AFM 3Dx · AFES 3DxT · AFCe 3Dx","Synchro, turret and compact 3D benders with in-line chamfering, threading and flattening.","2–16 mm by model"],
 ["Twin","Gemini · AFM-xDHx · AFE-xDHx","Double-head machines for parts bent from both ends.","By model"],
 ["Bench","AFT Tabletop","Wire and tube bending on a table-top frame: AFT-8, AFT-12, AFT-16.","2.7–16 mm"],
 ["Weld","T-Welder TWx","Cross-wire welded frames for filters, shelving, fixtures, ovens and grills.","2–10 mm"],
 ["Cell","FANUC integration","Turn-key cells with FANUC robots, for lights-out production.","2D and 3D parts"]];
/* SmartEditor (aimmachines.com > Software) */
var SOFT=[
 ["CAD import","DXF, XYZ, STEP and IGES files load directly."],
 ["Simulator","Animation with collision detection, before the first bend."],
 ["Office version","Off-line programming at a desk."],
 ["Dual processor","Program the next part while producing."],
 ["Maintenance","A module that reminds you of every service task."],
 ["CMM link","FARO, ROMER and AICON arms correct programs automatically."],
 ["Robots","Integrates with FANUC and Motoman (Yaskawa)."],
 ["AccuTrack and AccuCAL","Automate production statistics and set-ups."]];
/* clients (aimmachines.com > Clients, testimonials) */
var QUOTES=[
 ["Our team did a complete evaluation of all options around the world, before finally buying the needed CNC wire bending machine from AIM. What stood out for us was AIM’s productivity, robust design, use of ‘top shelf’ quality components, and service.","Vibhor Khanna, Managing Director","Modern Industries, Gurgaon, India · AFC 6"],
 ["What we like the best of the AFC is the ease of programming, touch screen monitor, how quiet it is, the reliability and the ease of SmartEditor.","Steve Scarlett, Managing Director","Agri Drain Corp., Iowa · AFC 10"],
 ["We have five AIM machines and have been very satisfied with the training, support, and machines performance. What convinced us to purchase the AIM machines were the price, speed, and ease of use.","Joel Owens","E.H. Baare Co., Illinois · four 3D, one 2D"]];
/* news: each row links out to its source. [date, title, source, url] */
var NEWS=[
 ["May 2027","Interwire 2027, Atlanta: AIM on Booth 905, May 4–6","AIM · Trade shows",DP+"trade-shows/"],
 ["Apr 2026","AIM at wire 2026, Düsseldorf, Hall 11, Booth 11A21","wire 2026 · Exhibitors","https://www.wire-tradefair.com/vis/v1/en/exhibitors/wire2026.3034001"],
 ["Dec 2025","Don’t forget your end-of-year CNC wirebender maintenance","AIM · Blog",DP+"aim-inc-cnc-wirebender-maintenance-tips/"],
 ["Feb 2025","AIM launches the new AFCe-3Dx compact 3D line","AIM · Blog",DP+"aim-inc-announces-the-launch-of-the-new-afce-3dx-line/"]];
var SHEETS=[];
