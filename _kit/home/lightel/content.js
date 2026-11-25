var FONTS=['400 1em "Barlow"','500 1em "Barlow"','600 1em "Barlow"','700 1em "Barlow"','400 1em "Inter Tight"','500 1em "Inter Tight"','400 1em "IBM Plex Mono"','500 1em "IBM Plex Mono"'];
var WEB="https://www.lightel.com/";
var MAIL="sales@lightel.com";/* lightel.com/contact: Sales Inquiries */
var MAIL2="info@lightel.com";/* lightel.com/contact: General Inquiries */
var TEL="(425) 277-8000";
/* product lines, from lightel.com/passive-components and /inspection-cleaning-test: [group, name, description] */
var PROD=[
 ["Comp","Couplers and splitters","Fused biconic taper and PLC devices: single, dual and three window, polarization maintaining, 1 µm and 2 µm, all tested before shipment."],
 ["Comp","WDM, CWDM and DWDM","Fused, filter and pump/signal multiplexers that combine or separate wavelengths on a single fiber."],
 ["Comp","High-power components","Tap couplers for fiber lasers and optical amplifiers, 980 to 2000 nm, each tested at the customer’s specified power."],
 ["Comp","Isolators, circulators and attenuators","Micro-optic passive components, with VOAs, hybrids and PM patchcords."],
 ["Insp","DI-3000 digital inspector","Embedded WiFi and an autofocus probe: inspect, store, certify and analyze connectors on the ConnectorView app."],
 ["Insp","DI-2000 and DI-1000 series","One-touch autofocus, USB probes and ConnectorView Plus pass/fail reports, with an MPO version that scans in X and Y."],
 ["Insp","CI-1100 connector inspector","A hand-held probe with a fold-up 3.5″ monitor for patchcords and hard-to-reach in-adapter connectors."],
 ["Insp","Tips and cleaning","Series 2 inspection tips, including SN and URM connector tips, and cleaning accessories."]];
/* equipment, from lightel.com/equipment and its product pages: [figure, unit, title, text] */
var CAPS=[["37×1","","<span class=\"nw\">CW-7000 workstation</span>","End-pump combiners up to 37×1 or (36+1)×1, with no glass tubes or capillaries to taper."],
 ["80–400","µm","FiberForge","A compact platform for heating and pulling standard and novel fiber components, for research and production."],
 ["5","fibers","GPST-1100 stripper","Patented gliding-plasma stripping of up to five fibers at once, even carbon and polyimide coatings."],
 [">99.999","%","LTL-H2-500-2","A high-purity hydrogen generator, widely used with Lightel fusion workstations."]];
/* services, from lightel.com/services */
var APPS=[["OEM and integration","Standard and built-to-specification components and modules, and component integration that minimizes size and adds reliability."],
 ["Contract manufacturing","The best cost structure for a given bill of materials, with clean rooms and environmentally compliant materials as standard."],
 ["ODM and ODM+","Molding, software, electronics and mechanical instrumentation for a customer’s own product, through to volume production."]];
/* the company (lightel.com/about, the 2020 CEO message and press releases) */
var SITES=[["Renton, Washington","Headquarters","Sales and marketing, administration, R&D, engineering and domestic production, at 2210 Lind Ave SW, near Seattle."],
 ["Shenzhen, China","Factory","Offshore engineering and manufacturing for high-volume, cost-sensitive production, drop-shipping direct to customers."]];
var CERTS=[["ISO 9001","Certified quality system"],["US patents","Many awarded, several pending"],["Worldwide","Distributor network"]];
/* news: only items that link out. [date, headline, source, url] */
var NEWS=[
 ["March 2027","At OFC 2027, Los Angeles, booth S-612","Lightel",WEB],
 ["February 2027","At SPIE Photonics West 2027, San Francisco, booth 4222","Lightel",WEB],
 ["September 2026","At ECOC 2026 in Málaga, Spain, booth 1315","Lightel",WEB],
 ["September 2023","DI-3000 ConnectorView app now available for iOS and Android","Lightel news",WEB+"di-3000-connectorview-app-now-available-for-ios-and-android/"]];
var SHEETS=[];
