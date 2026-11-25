var FONTS=['300 1em "Montserrat"','400 1em "Montserrat"','500 1em "Montserrat"','600 1em "Montserrat"'];
var MAIL="mailto:sales@atlasspine.com";
var AS="https://www.atlasspine.com/";
var FDA="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=";
/* Systems, from atlasspine.com (HiJAK AC, HiJAK Stand-Alone, V3 Segmental Plate, Ortus PL pages), Atlas' December 2024
   release (HiJAK LLIF) and the FDA 510(k) database (HiRISE). [name, region, title, descriptor, detail, dim, tag, link, linklabel] */
var PIPE=[
 ["HiJAK AC","Cervical","Expandable Cervical Spacer System","Flagship system","The first expandable cervical interbody with adjustable height and lordosis. A 4.5 mm starting height, 2.5 mm of continuous anterior and 1.25 mm of posterior expansion, and up to 20° of lordotic correction.",0,"",AS+"hijak-ac","Product page"],
 ["HiJAK SA","Cervical","Expandable Stand-Alone Interbody","Integrated fixation","The first expandable cervical stand-alone interbody to offer adjustable height and lordosis, with an integrated plate for better screw accessibility and bone purchase than typical “zero profile” devices.",0,"",AS+"hijak-stand-alone","Product page"],
 ["HiJAK LLIF","Lumbar","Expandable Lateral Lumbar Interbody System","FDA 510(k) cleared, 2024","Atlas’ expandable technology for lateral fusion, with and without integrated fixation and options of up to 30° of angulation, so surgeons can adjust the implant intra-operatively to each patient.",0,"","https://www.orthoworld.com/wp-content/uploads/2024/12/atlas-spine_121024.pdf","Release"],
 ["HiRISE","Cervical","Expandable Cervical Corpectomy System","FDA 510(k) cleared, 2025 and 2026","An expandable vertebral body replacement for the cervical spine, cleared in November 2025, followed by the HiRISE Expandable Cervical-p Corpectomy Implant in July 2026.",0,"",FDA+"K252822","FDA record"],
 ["V3","Cervical","Guided Segmental Plating System","Plating","Treats each segment individually: the simplicity of stand-alone devices with the integrity of plate and cage constructs. 3- and 4-hole plates, heights from 9 to 17 mm, 1.5 mm thick.",0,"",AS+"copy-of-back-pak","Product page"]];
/* FDA 510(k) clearances to Atlas Spine, Inc., Jupiter FL (FDA 510(k) database). */
var EVID=[
 ["July 2026","HiRISE Expandable Cervical-p Corpectomy Implant (K252822)"],
 ["November 2025","HiRISE Expandable Cervical Corpectomy System (K252560)"],
 ["August 2025","Expandable Posterior Lumbar Interbody System (K251969)"],
 ["November 2024","Lateral Expandable Interbody System (K243191), launched as HiJAK LLIF"]];
var TEAM=[
 {g:"Leadership",name:"Matt Baynham",title:"Chief Executive Officer & Chief Technology Officer",sum:"Leads Atlas’ expandable technology platform, from the first true expandable cervical interbody to the lateral lumbar and corpectomy systems."}];
/* Surgeon voices, as quoted on atlasspine.com. */
var VOICES=[
 ["HiJAK truly represents a disruptive technology when it comes to both height and lordosis restoration especially at the cervicothoracic junction.","Kees Poelstra, MD, PhD","Director of the Spine Center of Excellence, Sacred Heart Hospital, Destin"],
 ["I had the opportunity to implant and evaluate this technology in a cadaver lab, and I have to say, it doesn’t get much easier than this.","Patrick B. Senatus, MD","Minimal invasive and functional spine surgery, Hartford HealthCare"],
 ["This method creates great synergy between construct integrity and simplicity.","Rasesh Desai, MD","Assistant Professor, University of Kentucky Orthopedics and Sports Medicine"]];
var NEWS=[
 ["15 July 2026","FDA clears the HiRISE Expandable Cervical-p Corpectomy Implant","FDA 510(k) K252822",FDA+"K252822"],
 ["10 November 2025","FDA clears the HiRISE Expandable Cervical Corpectomy System","FDA 510(k) K252560",FDA+"K252560"],
 ["15 August 2025","FDA clears Atlas’ Expandable Posterior Lumbar Interbody System","FDA 510(k) K251969",FDA+"K251969"],
 ["10 December 2024","Atlas Spine announces FDA clearance of its HiJAK Expandable Lateral Lumbar Interbody Fusion System","ORTHOWORLD","https://www.orthoworld.com/wp-content/uploads/2024/12/atlas-spine_121024.pdf"],
 ["20 August 2020","Atlas Spine launches expandable cervical stand-alone interbody system","ODT","https://www.odtmag.com/contents/view_breaking-news/2020-08-20/atlas-spine-launches-expandable-cervical-stand-alone-interbody-system/"],
 ["27 February 2019","Atlas Spine announces full launch of first expandable cervical IBFD","ODT","https://www.odtmag.com/contents/view_breaking-news/2019-02-27/atlas-spine-announces-full-launch-of-first-expandable-cervical-ibfd/"]];
var SHEETS=[];
