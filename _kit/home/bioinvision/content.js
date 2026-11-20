var FONTS=['300 1em "Sora"','400 1em "Sora"','600 1em "Sora"','700 1em "Sora"','400 1em "DM Sans"','500 1em "DM Sans"','600 1em "DM Sans"'];
var WEB="https://www.bioinvision.com/";
var TEL="216-373-1500",TELH="tel:+12163731500";
var MAIL="inquiry@bioinvision.com",SUPPORT="support@bioinvision.com";
var MAP="https://www.google.com/maps/search/?api=1&query=781+Beta+Dr+Ste+E+Cleveland+OH+44143";
/* CryoViz technical specifications, verbatim values from bioinvision.com/cryoviz/ */
var SPEC=[["Specimen size","Up to 250 × 110 × 50 mm; typically 90 × 60 × 30 mm, a whole mouse."],
 ["Section thickness","2–200 microns, programmable."],
 ["Imaging modes","Bright-field and fluorescence, with multiple filter cubes."],
 ["Resolution","2.4 microns at 1× objective and maximum zoom."],
 ["Optics","Integrated fluorescence microscope with 1:10 zoom and a low-noise, peltier-cooled camera."],
 ["Temperature","Automated control, 0 to −30 °C."],
 ["Software","Image acquisition, integrated processing and 3D visualisation, with a real-time 3D preview while the sample is sectioning."]];
/* products and services, as described on the company's own pages */
var PROD=[
 ["CryoViz™ Instrument","Cellular and molecular imaging with colour anatomy and exactly-registered multi-spectral fluorescence: easy sample preparation, unattended imaging sessions and single-click 3D visualisation.","Instrument","https://www.bioinvision.com/cryoviz/"],
 ["CryoViz™ Imaging Service","You ship us samples; we deliver results. Single-cell detection anywhere in a mouse, multi-spectral fluorescence and multi-scale visualisation, without buying an instrument.","Service","https://www.bioinvision.com/cryo_service/"],
 ["Image analysis","Processing, analysis and 3D visualisation of images from CT, MRI, ultrasound, bioluminescence and other modalities: registration, segmentation, fusion volumes and cell-cluster quantification.","Service","https://www.bioinvision.com/analysis/"],
 ["IschemiaViz™","Patented, AI-driven software that aids diagnosis of cardiovascular disease from dynamic cardiac CT perfusion scans; scanner-agnostic. Seeking clinical collaborators.","Clinical software","https://www.bioinvision.com/ischemiaviz/"],
 ["AI tissue screening","NIH SBIR Phase II: AI-driven software, powered by CryoViz™ imaging, for whole-organism screening and targeted tissue collection, with Case Western Reserve University.","In development","https://www.einpresswire.com/article/867948657/bioinvision-awarded-sbir-grant-to-develop-ai-based-3d-microscopic-imaging"]];
var APPS=["Stem cells","Cancer","Molecular imaging","Gene expression imaging","Developmental biology","Toxicology","Biomarker validation","Anatomical phenotyping"];
var TEAM=[
 {g:"Leadership",name:"Debashish Roy, PhD",title:"President and CEO",sum:"Co-inventor of the technology; specialist in block-face imaging and biomedical image processing and analysis."},
 {g:"Leadership",name:"David Wilson, PhD",title:"Founder and CTO",sum:"Co-inventor; Herbold Professor of Biomedical Engineering at Case Western Reserve University, formerly of Siemens Medical Systems."},
 {g:"Leadership",name:"Madhu Gargesha",title:"Vice-President of Research",sum:"Principal investigator on the NIH SBIR Phase II AI imaging project."}];
var NEWS=[
 ["1 December 2025","CWRU spinout company receives $2.5M federal grant for AI medical imaging research","Cleveland.com","https://www.cleveland.com/medical/2025/12/cwru-spinout-company-receives-25m-federal-grant-for-ai-medical-imaging-research.html"],
 ["17 November 2025","BioInVision awarded SBIR grant to develop AI-based 3D microscopic imaging","EIN Presswire","https://www.einpresswire.com/article/867948657/bioinvision-awarded-sbir-grant-to-develop-ai-based-3d-microscopic-imaging"],
 ["2018","Optimized imager tracks cancer, stem cells in medical research","NASA Spinoff","https://spinoff.nasa.gov/Spinoff2018/hm_3.html"],
 ["26 August 2011","New imaging device enables scientists to see tumor cells traveling in the brain","ScienceDaily","http://www.sciencedaily.com/releases/2011/08/110826111227.htm"]];
var SHEETS=[];
