var FONTS=['400 1em "Montserrat"','500 1em "Montserrat"','600 1em "Montserrat"','700 1em "Montserrat"','italic 400 1em "Montserrat"','italic 500 1em "Montserrat"'];
var WEB="https://www.lybrabio.com/";
var FORM="https://www.lybrabio.com/contact-us";
var LI="https://www.linkedin.com/company/lybra-bio/";
var ADDR="LabCentral, 700 Main Street, Cambridge, MA 02139";
var MAP="https://www.google.com/maps/search/?api=1&query=LabCentral+700+Main+Street+Cambridge+MA+02139";
var RP="https://reporter.nih.gov/project-details/11251823";
var BG="https://www.bostonglobe.com/2025/02/19/business/patches-deliver-weight-loss-drugs-startups-anodyne-nanotech/";
var LC="https://www.labcentral.org/2024-impact-report/community-the-catalyst";
var MIT="https://news.mit.edu/2024/new-treatment-could-reverse-hair-loss-caused-autoimmune-skin-disease-0509";
/* programs: from lybrabio.com ("alopecia areata, vitiligo, and psoriasis") and the NIH RePORTER abstract of 1R43AI194889-01.
   [program, indication, stage label, detail, link, link label] */
var PROG=[
 ["LybraPatch · IL-2 and CCL22","Alopecia areata","Preclinical","A hydrogel microneedle patch that delivers two Treg-expanding cytokines at the site of disease. An NIH NIAID SBIR award is defining the IL-2 dose that expands Tregs without activating effector T cells.",RP,"NIH RePORTER"],
 ["Treg-restoring platform","Vitiligo","Target indication","An autoimmune disease in which the immune system destroys the skin’s pigment cells. Lybra’s platform aims to restore immune balance in the affected skin rather than suppress immunity body-wide.",WEB,"Lybra Bio"],
 ["Treg-restoring platform","Psoriasis","Target indication","Inflammatory plaques driven by immune dysregulation. A local, patient-friendly patch could avoid the systemic exposure of broad immunosuppressants and frequent injections.",WEB,"Lybra Bio"]];
/* supporters named on lybrabio.com and its news page (type only, BW/CJ) */
var PARTNERS=["NIH NIAID","LabCentral Ignite","MassBio","Nucleate","Mass General Brigham","Harvard Business School","UMass M2D2"];
/* people: as listed on lybrabio.com/team, with their published portraits */
var TEAM=[
 ["Michael Schrader","Chief Executive Officer","img/schrader.jpg"],
 ["Núria Puigmal","PhD · Founder and Chief Scientific Officer","img/puigmal.jpg"],
 ["Nickolas Hartman","Lead Engineer","img/hartman.jpg"],
 ["Natalie Artzi","PhD · Academic Co-Founder","img/artzi.jpg","Associate Professor, HMS; Associate Director, Wyss Institute"],
 ["Jamil R. Azzi","MD, PhD · Academic Co-Founder","img/azzi.jpg","Associate Professor, HMS; Director, Transplantation Research Center, Brigham and Women’s Hospital"],
 ["Ray Nimrod","JD · Scientific Advisor","img/nimrod.jpg"]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 24, 2025","NIH NIAID awards Lybra Bio an SBIR Phase I grant ($306,321) for microneedle-mediated expansion of skin-resident regulatory T cells","NIH RePORTER",RP],
 ["February 19, 2025","Lybra Bio featured in the Boston Globe on patches that deliver drugs precisely where they are needed on the skin","The Boston Globe",BG],
 ["September 24, 2024","Lybra Bio wins one of six LabCentral Ignite Golden Tickets and begins operations at LabCentral","LabCentral",LC],
 ["May 9, 2024","The research behind Lybra: a microneedle patch that reversed autoimmune hair loss in mice, published in Advanced Materials","MIT News",MIT]];
var SHEETS=[];
