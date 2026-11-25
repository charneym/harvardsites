var FONTS=['300 1em "Poppins"','400 1em "Poppins"','500 1em "Poppins"','600 1em "Poppins"','italic 300 1em "Poppins"','400 1em "Source Sans 3"','500 1em "Source Sans 3"','600 1em "Source Sans 3"'];
var WEB="https://www.atomising.co.uk/";
var PWD="http://www.metal-powder.co.uk/";
var MAIL="info@atomising.co.uk";
/* facts: atomising.co.uk (home, equipment, recycling, technical, news, careers, contact) and its powder division site
   metal-powder.co.uk (home, gas, water, quality control); directors from Companies House (company 02731401). Fetched 2026-11-25. */
var PARTS=[["Powders","Water and gas atomised","Specialists in water and gas atomised stainless steel powders, with low alloy and nickel-based alloys in the portfolio."],
 ["Equipment","Atomisers, designed in-house","Gas, water, centrifugal, ultrasonic and pressure-nozzle atomisation, at scales from 1 kg to 100 t ladles."],
 ["Refining","Atomising for recovery","Atomised powders have a large surface area, well suited to hydrometallurgy: gold and PGM alloys, battery smelting alloys, electronic waste and zinc purification."]];
/* powder division: [tag, name, description, link] */
var POWDERS=[
 ["1,800 t a year","Gas atomised powders","Highly spherical particles with very low oxidation, from under 10 µm to 250 µm, on in-house atomisers with ASL’s Anti-Satellite and Hot Gas systems. For MIM, AM and 3D printing, laser sintering, brazing and thermal spray.",PWD+"gas"],
 ["2,500 t a year","Water atomised powders","Irregular particles at high production rates. Two large water atomisers, each with a 750 kg melt, make powders with D50s from under 10 µm to over 500 µm, for PM, filters and other sectors.",PWD+"water"],
 ["30 kg batches","Trial and special lots","Small gas and water atomising systems for solar alloys, dental and precious metal powders, and specialised trial production lots, from test batches to production campaigns.",PWD],
 ["BS ISO 9001:2015","Quality control","An in-house laboratory: chemistry by ICP-OES and XRF, oxygen, nitrogen, carbon and sulphur, particle size by laser diffraction and sieving, flow, density and green strength.",PWD+"quality-control"]];
/* equipment: [technology, line, key figure, figure label] */
var TECH=[
 ["Gas atomisation","Moderate production rates, highly spherical particles with very low oxidation. Hot Gas for finer powder at lower gas cost; Anti-Satellite for free-flowing powder.","10–50","kg/min from one melt stream, typically"],
 ["Water atomisation","Irregular particles with a large surface area, for pressed-and-sintered PM parts and refining. The lowest operating costs, at the highest rates.","60","t/hour, up to"],
 ["Centrifugal, oil and more","Centrifugal atomisers break the metal up through centrifugal acceleration; oil atomisation is similar to water. Ultrasonic and pressure-nozzle atomisation complete the range.","1 kg–100 t","ladles, the scales of operation"],
 ["Refining atomisers","Atomisers for refining processes, from a batch of a few kilograms of precious metals to cobalt-containing alloys at plant scale.","500","kg/min, for cobalt-containing alloys"]];
/* team: directors of Atomising Systems Ltd (Companies House) and the roles named on atomising.co.uk news */
var TEAM=[
 {g:"Leadership",name:"John Dunkley",title:"Chairman",sum:"Author of many of ASL’s technical papers on gas, water and pressure-nozzle atomisation, from 1995 on."},
 {g:"Leadership",name:"Simon Dunkley",title:"Director",sum:"Director of Atomising Systems Ltd since 2008."},
 {g:"Leadership",name:"Tom Williamson",title:"General Manager",sum:"Formerly ASL’s R&D Manager; presents the atomisation course."},
 {g:"Leadership",name:"Dirk Aderhold",title:"Technical Director",sum:"Director since 2015; presents the atomisation course."},
 {g:"Leadership",name:"Dr Paul Rose",title:"Director",sum:"Director of Atomising Systems Ltd since 2015."}];
var NEWS=[
 ["May 2025","The short course on atomisation for metal powders runs for the seventeenth time, on 18 and 19 September 2025 in Glasgow","ASL news",WEB+"news"],
 ["May 2024","The sixteenth intensive two-day course on the atomisation of metals, in Manchester, with expanded coverage of powders for additive manufacturing","ASL news",WEB+"news"],
 ["May 2023","The fifteenth course on atomisation for metal powders, after the successful October 2022 course","ASL news",WEB+"news"],
 ["Papers","Technical papers by ASL on gas, water, centrifugal and pressure-nozzle atomisation, from 1995 to the present","ASL technical",WEB+"technical"]];
var SHEETS=[];
