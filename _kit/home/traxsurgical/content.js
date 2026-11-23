var FONTS=['300 1em "Archivo"','400 1em "Archivo"','500 1em "Archivo"','600 1em "Archivo"','400 1em "Lato"','700 1em "Lato"','italic 900 1em "Lato"'];
var WEB="https://www.traxsurgical.com/";
var MAIL="inquires@traxsurgical.com";
/* product lines, from traxsurgical.com. [name, figure, detail, url] */
var PRODS=[
 ["REDIFIX™ System","Suture anchors · new","Titanium screw-in and push-in anchors with a preloaded, knotless, tension-responsive suture, for suture or tissue fixation in the upper and lower extremities.",WEB+"suture-anchors"],
 ["Headless compression screws","Seven diameters","Compression through differential pitch between the threads at each end, generated across the fracture or osteotomy before the screw is countersunk below the bone surface. Self-tapping and cannulated.",WEB+"headless-compression-bone-screws"],
 ["Headed compression screws","Slim heads · cannulated","Self-tapping, with sharp double-lead threads designed for fast advancement, positive mechanical hold and stability.",WEB+"headed-compression-bone-screws"],
 ["Snap-away compression screws","11 to 14 mm","Break-away screws for small bones and fragments: self-tapping and self-drilling, with a design that minimises prominence and lessens the risk of soft tissue irritation.",WEB+"snap-away-bone-compression-screws"],
 ["Instrument kits","Small · medium · large","Headed and headless screws with their instruments in three kits, colour-coded so each drill and driver pairs with its screws.",WEB+"instrument-kits"],
 ["LINKT™ compression staples","Nitinol","Shape-memory nickel-titanium staples that deliver continuous compression for fracture and osteotomy fixation and joint arthrodesis of the hand and foot; single use, with pre-sterilised instruments.",WEB+"bone-compression-staples"]];
/* REDIFIX indications by region, from traxsurgical.com/suture-anchors. [region, figure, detail] */
var APPS=[
 ["Foot and ankle","Lateral and medial stabilisation","Achilles tendon repair, metatarsal ligament repair, hallux valgus reconstruction, digital tendon transfers and mid-foot reconstruction."],
 ["Hand and wrist","Ligaments and tendons","Scapholunate ligament reconstruction, collateral ligament repair, flexor and extensor tendon repair at the PIP, DIP and MCP joints, carpal ligament reconstruction and CMC joint arthroplasty."],
 ["Elbow","Biceps and collateral ligaments","Biceps tendon reattachment and ulnar or radial collateral ligament reconstruction."],
 ["Shoulder","Rotator cuff and labrum","Rotator cuff, Bankart and SLAP lesion repair, biceps tenodesis, acromio-clavicular separation and deltoid repair, capsular shift or capsulolabral reconstruction."],
 ["Knee","Collateral ligaments and tendons","Medial and lateral collateral ligament repair, patellar tendon repair, posterior oblique ligament repair and iliotibial band tenodesis."]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["May 2026","First implantation of the REDIFIX suture anchor, in a mid-foot reconstruction","ORTHOWORLD","https://www.orthoworld.com/first-implantation-of-trax-surgicals-new-suture-anchor/"],
 ["March 2026","FDA 510(k) clearance K251750 for the Trax EX Anchor","U.S. FDA","https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=K251750"],
 ["May 2025","FDA 510(k) clearance K250712 for the LINKT Compression Staple System","U.S. FDA","https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=K250712"],
 ["September 2023","FDA 510(k) clearance K230946 for the Accelerate Compression Screw System, small, medium and large","U.S. FDA","https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=K230946"]];
var SHEETS=[];
