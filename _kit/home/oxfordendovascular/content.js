var FONTS=['300 1em "Mulish"','400 1em "Mulish"','500 1em "Mulish"','400 1em "Instrument Sans"','italic 400 1em "Instrument Sans"','500 1em "Instrument Sans"','600 1em "Instrument Sans"'];
/* contact: oxfordendovascular.com footer ("Email Us", "Physical Address", "Office Address for Invoicing") */
var MAIL="ghsieh@oxfordendovascular.com";
var OX="https://oxfordendovascular.com/";
/* OXIFLOW, from the company's posts (May 2024: "laser-cut from Nitinol", "position and open more accurately and reliably",
   "conform to the patient's blood vessels"), the home page (patents) and the CORDIS report for H2020 project 859001
   ("an inner frame to address the placement and opening issues, with an outer sleeve to deal with the flow diversions
   and healing", "optimum and uniform radial forces", "innovative delivery system"). [group, title, detail] */
var SPECS=[
 ["Material","Laser-cut nitinol","Cut from nickel-titanium, a shape-memory alloy, rather than braided from wire like conventional flow diverters."],
 ["Inner frame","Origami design","An inner frame built on origami principles addresses placement and opening, with optimum, uniform radial force along the device."],
 ["Outer sleeve","Diverts the flow","An outer sleeve diverts blood flow away from the aneurysm and lets the vessel wall heal across its neck."],
 ["Delivery","More control for the doctor","An innovative delivery system gives the physician better control, making the device easier and safer to place."],
 ["Fit","Conforms to the vessel","Designed to conform to each patient's vessels, so it opens fully against the wall and more patients become treatable."],
 ["Protection","Patented in four regions","Patents granted in Europe, the US, China and Japan."]];
/* the team as listed on the home page ("Team of Success"); directors per Companies House 09769779. Text-only masthead. */
var TEAM=[
 {g:"Leadership",name:"Chas Taylor",title:"Chairman · founded, led and sold three medtech companies (Veryan, Novate, MedNova)"},
 {g:"Leadership",name:"Prof James Byrne",title:"Clinical Director · Professor of Neuroradiology, 30+ years treating aneurysm patients"},
 {g:"Leadership",name:"Prof Zhong You",title:"Technology Director · Professor of Engineering Science, expert in origami structures"}];
/* news from oxfordendovascular.com and Innovate UK, each linked. [date, headline, where, url] */
var NEWS=[
 ["2025","Innovate UK Biomedical Catalyst funding for an advanced hybrid flow diverter for brain aneurysms","Innovate UK","https://iuk-business-connect.org.uk/news/biomedical-catalyst-funding-gives-boost-to-healthcare-innovation/"],
 ["20 May 2024","£8 million Series A+ round led by Parkwalk Advisors, to take OXIFLOW toward a first-in-human study","Funding",OX+"oxford-endovascular-raises-8m-to-tackle-brain-aneurysms/"],
 ["13 June 2022","Selected as one of the Top 50 start-ups in the MedTech Innovator competition","Recognition",OX+"oxford-endovascular-selected-as-one-of-the-top-50-start-ups-in-the-medtech-innovator-competition/"],
 ["8 April 2021","$10 million Series A, led by Vulpes Investment Management","Funding",OX+"oxford-endovascular-ltd-raises-10m-to-develop-its-origami-engineered-medical-device-to-prevent-brain-haemorrhage/"],
 ["14 November 2020","Innovate UK Smart Grant for its neurovascular technology","Grant",OX+"oxford-endovascular-wins-innovate-uk-smart-grant/"],
 ["8 July 2019","Horizon 2020 grant of up to €2.96 million for OXIFLOW, the next-generation flow diverter","Grant",OX+"oxford-endovascular-awarded-non-dilutive-grant-funding-of-up-to-2-96-million-euros-to-support-rd-activities-and-clinicals/"]];
