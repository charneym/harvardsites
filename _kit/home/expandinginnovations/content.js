var FONTS=['300 1em "Montserrat"','400 1em "Montserrat"','500 1em "Montserrat"','600 1em "Montserrat"'];
var MAIL="mailto:info@expandinginnovations.com";
var EI="https://expandinginnovations.com/";
/* Products, from expandinginnovations.com (X-PAC TLIF, X-PAC LLIF, X-PAC N-Gage) and EI's releases.
   [name, approach, title, descriptor, detail, dim, tag, link, linklabel] */
var PIPE=[
 ["X-PAC TLIF","Posterior","Expandable Posterior Cage System","Flagship system","A NON-SCREW based interbody fusion cage with instrumentation designed to mitigate postoperative vertebral body subsidence and cage collapse. Expands both anteriorly and posteriorly, in a variety of sizes.",0,"",EI+"x-pac-tlif/","Product page"],
 ["X-PAC LLIF","Lateral","Expandable Lateral Cage System","FDA 510(k) cleared","Designed to optimize indirect decompression and bridging bone fusion. Widths 18 and 22mm, lengths 40 to 60mm, insertion heights 7, 8 and 9mm, expanding to 13, 14 or 15mm with up to 12&#176; of lordosis.",0,"",EI+"x-pac-llif/","Product page"],
 ["N-GAGE","Lateral fixation","Lumbar Plate System","FDA 510(k) cleared, June 2025","EI&#8217;s first spinal fixation platform: a modular, low-profile plate in 1-, 2- and 4-hole options that pairs with X-PAC LLIF cages through a NON-SCREW, polyaxial coupler (coronal toggle &#177;6&#176;, rotational toggle &#177;7&#176;).",0,"",EI+"x-pac-n-gage/","Product page"]];
/* Milestones, as EI's releases state them (PR Newswire / expandinginnovations.com, 2025 to February 2026). */
var EVID=[
 ["20,000+ cages implanted","X-PAC cages implanted nationwide, as of February 2026"],
 ["31% growth in 2024","Followed by record growth in Q1 2025, with X-PAC revenue up 22% on the prior quarter"],
 ["N-GAGE cleared","FDA 510(k) clearance in June 2025 for the N-GAGE Lumbar Plate System, the company&#8217;s first fixation platform"],
 ["Enabling Technologies","A new division in North Carolina&#8217;s Research Triangle, launched February 2026, developing intraoperative diagnostics for endplate integrity"]];
/* Leadership and board, from EI's November and December 2025 releases. Text-only masthead. */
var TEAM=[
 {g:"Leadership",name:"Ron Sacher",title:"Chief Executive Officer & Co-Founder",sum:"Co-Founder and formerly Executive Chairman; assumed the role of CEO in December 2025."},
 {g:"Leadership",name:"Robert Jaramillo",title:"President & Chief Operating Officer",sum:"Formerly CEO; oversees day-to-day operations and execution across the organization."},
 {g:"Board of Directors",name:"Timothy J. Scannell",title:"Director",sum:"Over 30 years at Stryker, including President and Chief Operating Officer from 2018 to 2021; non-executive chairman of Insulet."}];
var NEWS=[
 ["26 February 2026","Expanding Innovations launches Enabling Technologies Division in North Carolina&#8217;s Research Triangle","expandinginnovations.com",EI+"2026/02/26/243806/"],
 ["2 December 2025","Expanding Innovations announces leadership realignment to support record growth and upcoming product launches","PR Newswire","https://www.prnewswire.com/news-releases/expanding-innovations-announces-leadership-realignment-to-support-record-growth-and-upcoming-product-launches-302630758.html"],
 ["10 November 2025","Expanding Innovations appoints Timothy J. Scannell to Board of Directors","expandinginnovations.com",EI+"2025/11/10/expanding-innovations-appoints-timothy-j-scannell-to-board-of-directors/"],
 ["16 June 2025","Expanding Innovations receives FDA clearance for N-GAGE&#8482; Lumbar Plate System","expandinginnovations.com",EI+"2025/06/18/expanding-innovations-receives-fda-clearance-for-n-gage-lumbar-plate-system/"],
 ["1 May 2025","Expanding Innovations announces record growth for X-PAC&#174; Expandable Cages","expandinginnovations.com",EI+"2025/05/02/expanding-innovations-announces-record-growth-for-x-pac-expandable-cages/"]];
var SHEETS=[];
