/* GAMMA Remote Sensing: facts from gamma-rs.ch (home, About us, Team, Gamma Software, Training courses, Instruments, GPRI,
   Services, Research, Projects, News, Impressum) and CORDIS project 101184989 (NextGenCarbon). Real characters only,
   never HTML entities (DU).
   Software rows: [code, short, title, sub, detail, dim, tag, link, linklabel] */
var SWP=SG+"gamma-software";
var MODS=[
 ["MSP","Raw data to SLC","Modular SAR Processor","From radar raw data","Focuses radar raw data into single-look complex (SLC) images, the starting point of every interferometric product.",0,"",SWP,"Details"],
 ["ISP/DIFF & GEO","Interferometry","Interferometric SAR, differential interferometry and geocoding","Elevation and displacement","Co-registration, interferograms, differential interferometry and geocoding. The co-registration and geocoding functions are also available on their own as GEO.",0,"",SWP,"Details"],
 ["LAT","Land applications","Land Application Tools","Filtering and classification","Advanced filtering, classification, mosaicking and polarimetric decomposition, for land use and land cover maps.",0,"",SWP,"Details"],
 ["IPTA","Time series","Interferometric Point Target Analysis","PSI and SBAS","Advanced time-series analysis: persistent scatterer interferometry, SBAS, and single- and multi-reference interferometric stacks.",0,"",SWP,"Details"],
 ["MOCOM / TDBP","Agile platforms","Motion compensation and time-domain back projection","Airborne, UAV and car-borne","Processing for SAR data acquired on agile platforms, including GAMMA’s own SAR systems flown on aircraft and UAVs or mounted on cars.",0,"",SWP,"Details"]];
/* services, from gamma-rs.ch/services */
var SERV=[
 ["Satellite radar","Ground deformation monitoring using standard DInSAR and persistent scatterer interferometry"],
 ["Glaciers","Glacier surface velocity from satellite SAR offset tracking"],
 ["Terrestrial radar","Monitoring slope stability with the GAMMA Portable Radar Interferometer"],
 ["Car-borne SAR","Ground deformation monitoring using car-borne L-band SAR"],
 ["Mission planning","Implementation of a SAR acquisition planning tool"],
 ["New sensors","On-demand support for new sensors in the GAMMA Software"]];
/* selected research projects, from gamma-rs.ch/research/projects and CORDIS */
var PROJ=[
 ["Horizon Europe, 2025–2029","NextGenCarbon: next-generation modelling of the terrestrial carbon cycle from in-situ campaigns and Earth observation",'https://cordis.europa.eu/project/id/101184989'],
 ["ESA CCI+, 2018–2027","Biomass: global maps of forest above-ground biomass for the Climate Change Initiative",'https://climate.esa.int/en/projects/biomass/'],
 ["ESA CCI+, 2019–2027","Glaciers: glacier flow monitoring, service and system engineering",SG+"research/projects"],
 ["ESA, 2024–2025","MODULATE: monitoring alpine landslides with multi-platform L-band radar, in preparation for ROSE-L",SG+"research/projects"]];
var TEAM=[
 {g:"Executive Board",name:"Dr. Andreas Wiesmann",title:"President of the Executive Board, Director",sum:""},
 {g:"Executive Board",name:"Dr. Maurizio Santoro",title:"Vice-President of the Executive Board",sum:"Senior project scientist"},
 {g:"Executive Board",name:"Dr. Urs Wegmüller",title:"Member of the Executive Board",sum:"Co-founder in 1995; senior project scientist"},
 {g:"Executive Board",name:"Dr. Charles Werner",title:"Member of the Executive Board",sum:"Co-founder in 1995; senior project scientist"},
 {g:"Executive Board",name:"Dr. Tazio Strozzi",title:"Member of the Executive Board",sum:"Senior project scientist"},
 {g:"Executive Board",name:"Dr. Othmar Frey",title:"Member of the Executive Board",sum:"Senior project scientist"},
 {g:"Scientists and engineers",name:"Dr. Mike Schwank",title:"Senior project scientist",sum:""},
 {g:"Scientists and engineers",name:"Dr. Rafael Caduff",title:"Senior project scientist",sum:""},
 {g:"Scientists and engineers",name:"Dr. Oliver Cartus",title:"Senior project scientist",sum:""},
 {g:"Scientists and engineers",name:"Dr. Christophe Magnard",title:"Senior project scientist",sum:""},
 {g:"Scientists and engineers",name:"Nina Jones",title:"Senior project scientist",sum:""},
 {g:"Scientists and engineers",name:"Dr. Silvan Leinss",title:"Senior project scientist",sum:""},
 {g:"Scientists and engineers",name:"Dr. Philipp Bernhard",title:"Senior project scientist",sum:""},
 {g:"Scientists and engineers",name:"Dr. Samuel Favrichon",title:"Senior project scientist",sum:""},
 {g:"Scientists and engineers",name:"Tobias Batt",title:"Senior engineer",sum:""},
 {g:"Scientists and engineers",name:"Prof. Dr. Christian Mätzler",title:"Senior consultant",sum:""}];
var NEWS=[
 ["8 Jan 2026","Small persistent humid forest clearings drive tropical forest biomass losses, in Nature, built on GAMMA’s CCI Biomass maps","Nature","https://doi.org/10.1038/s41586-025-09870-7"],
 ["16 Dec 2025","A strategic partnership with Earth Big Data for cloud-based SAR processing","GAMMA news",SG+"files/news/EarthBigDataLLC_GammaRemoteSensingAG_StrategicPartnership.pdf"],
 ["15 Dec 2025","The Annual Report on GAMMA’s activities in 2025","Annual report",SG+"files/annual-report/annual_report_2025.pdf"],
 ["2 May 2025","ESA unveils its longest-ever dataset on forest biomass","ESA","https://www.esa.int/Applications/Observing_the_Earth/Space_for_our_climate/ESA_unveils_longest-ever_dataset_on_forest_biomass"]];
var SHEETS=[];
