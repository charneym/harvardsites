var FONTS=['300 1em "Fraunces"','italic 300 1em "Fraunces"','400 1em "Fraunces"','italic 400 1em "Fraunces"','400 1em "Figtree"','500 1em "Figtree"','600 1em "Figtree"','400 1em "IBM Plex Mono"','600 1em "Comfortaa"'];
var MAIL="contact@newhaptics.com";
var NSF="https://www.nsf.gov/awardsearch/showAward?AWD_ID=";
var NIH="https://reporter.nih.gov/project-details/";
var PRN="https://www.prnewswire.com/news-releases/";
/* programmes: every line from newhaptics.com (codex, about), NIH RePORTER and NSF award records.
   [stage, title, sub, status, detail, link, label] */
var PIPE=[
 ["Product","Codex","Four-line refreshable braille display","Available","Four lines of 32 braille characters, a 10-point touchpad, a Perkins-style keyboard and JAWS support, with pins driven by air.","https://www.newhaptics.com/codex","newhaptics.com"],
 ["NIH SBIR Phase IIB","Full-page braille and tactile graphics","For the education market","Awarded 2026","Colocated multiline braille and tactile graphics on a 30 × 96 grid of individually actuated dots, with multi-touch sensing, portable like a laptop or tablet.",NIH+"11409085","NIH RePORTER"],
 ["NIH R61","TITO: touch in, touch out","Direct manipulation for blind computer users","2025–2027","Thousands of pins on a touch-sensing surface, raised under the finger as it moves, so blind users can drag, drop, draw and resize on screen.",NIH+"11365199","NIH RePORTER"],
 ["NSF SBIR Phase II","Microfluidic full-page display","Half a page of braille in a tablet","Through 2027","Shifts drive functions from electromechanical hardware into a multilayered microfluidic substrate, for a seamless array of pins at braille spacing.",NSF+"2153384","NSF award"],
 ["NSF, with UIUC","AudioTactile data system","For blind STEM faculty and graduate students","2024–2028","Hardware and software, with the University of Illinois Urbana-Champaign, to generate, explore and manipulate data by touch and sound.",NSF+"2348165","NSF award"]];
/* Codex at a glance: newhaptics.com/codex */
var SPEC=[
 ["Braille","4 lines of 32 eight-dot cells"],
 ["Input","10-point touchpad; Perkins-style 8-dot keyboard with split spacebars"],
 ["Navigation","Thumb keys, reading keys, line selectors and a D-pad"],
 ["Connectivity","USB-C, USB-A, SD card, Wi-Fi 5 and Bluetooth 5.1"],
 ["Screen readers","JAWS today; more coming"],
 ["Weight","4.42 lb (2 kg)"]];
/* the team: newhaptics.com/our-team. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Founders",name:"Alex Russomanno",title:"CEO",sum:"Designs, tests and fabricates tactile devices. B.S. in mechanical engineering from the University of Virginia, Ph.D. from the University of Michigan."},
 {g:"Founders",name:"Sile O’Modhrain",title:"CXO",sum:"Associate Professor of Information Science at U-M, with over 25 years designing haptic and tactile interfaces, and a braille display user herself."},
 {g:"Founders",name:"Brent Gillespie",title:"CTO",sum:"Professor of Mechanical Engineering at U-M, with nearly 30 years in haptics and tactile displays."},
 {g:"Product and engineering",name:"Thomas Simpson",title:"Head of Product",sum:"Over a decade in assistive technology, at ViewPlus, Irie-AT and HIMS. Leads product development and commercialization."},
 {g:"Product and engineering",name:"Collin Rich",title:"Senior R&D Engineer",sum:"Twenty-two years of microfluidic subsystems across life-science start-ups. Develops NewHaptics’ electro-pneumatic support technologies."},
 {g:"Product and engineering",name:"Greg Pool",title:"Mechanical Engineer",sum:"Leads development and testing of the physical multiline braille device and its fabrication."},
 {g:"Product and engineering",name:"Hrishi Rao",title:"UX Researcher",sum:"Shapes the interaction design of the new device, from over five years designing tactile graphics, braille displays and screen reader scripts."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2026","NIH SBIR Phase IIB award to bring a full-page braille and tactile graphics display to the education market","NIH",NIH+"11409085"],
 ["July 2025","NIH R61 award for TITO, a touch-in, touch-out tactile display for direct manipulation interfaces","NIH",NIH+"11169446"],
 ["August 2024","NSF award, with the University of Illinois: an audio-tactile data system for blind STEM faculty and students","NSF",NSF+"2348165"],
 ["March 2024","NewHaptics shows its latest multiline braille display prototypes at the 39th CSUN Assistive Technology Conference","NewHaptics","https://www.newhaptics.com/photos/csun"],
 ["June 2023","NewHaptics raises growth capital from the Accelerate Blue Fund, its first round of venture funding","PR Newswire",PRN+"newhaptics-raises-growth-capital-from-the-accelerate-blue-fund-301855621.html"],
 ["April 2023","NSF SBIR Phase II grant for a multiline braille and graphical tactile display","PR Newswire",PRN+"newhaptics-awarded-nsf-sbir-phase-ii-grant-to-develop-microfluidic-technology-for-a-multiline-braille-and-graphical-tactile-display-301791949.html"],
 ["September 2022","NIH SBIR Phase II grant to commercialize a multiline braille and graphical tactile display","PR Newswire",PRN+"newhaptics-awarded-nih-sbir-phase-ii-grant-to-commercialize-multiline-braille-and-graphical-tactile-display-301625782.html"],
 ["August 2021","Selected as a finalist for the MIT Solve Global Challenge in Digital Inclusion, one of 75 teams from over 1,800","MIT Solve","https://solve.mit.edu/challenges/digital-inclusion/solutions/37309"]];
var SHEETS=[];
