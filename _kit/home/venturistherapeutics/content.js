var FONTS=['500 1em "Archivo"','600 1em "Archivo"','400 1em "Lato"','400 1em "IBM Plex Mono"','500 1em "IBM Plex Mono"'];
var TEL="tel:+17142806028";
var NR="https://cdn.prod.website-files.com/5d929ea754fd0f4955087956/";
/* Programmes, from venturistherapeutics.com (Pipeline: three open INDs with the U.S. FDA, four preclinical programmes)
   and the company's news releases. Stage words only as the company states them. [indication, area, title, stage, detail, dim, tag] */
var PIPE=[
 ["VT-141","Wound","Chronic diabetic foot ulcers","Vascu-Grow™ · Phase 1","Since 2023 David G. Armstrong, DPM, MD, PhD, a leading authority on diabetic limb preservation, has served as senior academic advisor for the surgeon board, supporting the diabetic wound programme.",0,"Open IND"],
 ["VT-141","Heart","Coronary artery disease","Vascu-Grow™ · Phase 2","Severe ischemic heart disease. A U.S. patent for the angiogenic treatment of ischemic heart disease was issued on 6 April 2021, with 15 claims.",0,"Open IND"],
 ["VT-141","Limb","Peripheral artery disease","Vascu-Grow™ · Phase 2","Peripheral arterial disease, the third of the company’s three open INDs with the U.S. Food and Drug Administration.",0,"Open IND"],
 ["VT-141ED","Vascular","Erectile dysfunction","Preclinical","U.S. and Australian patents granted for therapeutic angiogenesis in erectile conditions (2019, 2020).",1,"Preclinical"],
 ["VT-141S","Brain","Infarct stroke","Preclinical","",1,"Preclinical"],
 ["VT-141D","Spine","Ischemic disc disease","Preclinical","",1,"Preclinical"],
 ["VT-141P","Brain","Parkinson’s disease","Preclinical","",1,"Preclinical"]];
/* American Heart Association, Heart Disease and Stroke Statistics, 2018 Update, as cited on venturistherapeutics.com */
var EVID=[
 ["92.1 million","American adults, more than one in three, live with one or more types of cardiovascular disease"],
 ["2,300 a day","Americans die of cardiovascular disease, an average of one death every 38 seconds"]];
/* agreements and affiliations, from the company's own news releases */
var DEALS=[
 ["May 2026","Pradaxis, Inc.","Development agreement","An agreement for Pradaxis to develop additional therapeutic indications using Venturis&#8217; API, with milestone payments to Venturis as each therapeutic area progresses."],
 ["Jun 2023","David G. Armstrong, DPM, MD, PhD","Clinical affiliation","Senior academic advisor for the surgeon board, strengthening the diabetic wound programme and its clinical research."],
 ["Sep 2021","Prevail InfoWorks, Inc. and Prevail Partners, LLC","Strategic alliance","An alliance to manage and advance the coronary artery disease trials, with Prevail Partners agreeing in principle to invest a seven-figure amount once trial initiation begins."]];
/* news releases (venturistherapeutics.com, News), each linking to the company's own PDF */
var NEWS=[
 ["24 Aug 2026","New leadership team and corporate headquarters move to Chicago","6a8f98da71e7c5e130e87415_Updated%20Change%20of%20control%20press%20release%20V3.pdf"],
 ["18 May 2026","Agreement with Pradaxis, Inc. to develop new therapeutic indications","6a0b3d7d73c9ddb920895f1a_Pradaxis%20Press%20Release%20May%2018%202026.pdf"],
 ["6 Jun 2023","Affiliation with David G. Armstrong, DPM, MD, PhD, authority on the diabetic foot","648231a8145ec6158eeaf3e9_PR%20Armstrong%20VT%20final.pdf"],
 ["9 Sep 2021","Strategic alliance with Prevail InfoWorks and Prevail Partners","613961449f112e3b46602886_PR%209-6-21%20FINAL%20FINAL%20FINAL.pdf"],
 ["30 Apr 2021","U.S. patent granted for the angiogenic treatment of ischemic heart disease","608c36b4f0b7c7ffa9bb6319_CAD%20patent%20PR%20final%204.29.2021.pdf"]];
var SHEETS=[];
