var FONTS=['300 1em "Archivo"','400 1em "Archivo"','italic 400 1em "Archivo"','500 1em "Archivo"','400 1em "Open Sans"','600 1em "Open Sans"','700 1em "Open Sans"'];
/* contact: emaled.de > Kontakt and the Impressum (November 2026) */
var MAIL="info@emaled.de",TEL="+496022206811",TELT="+49 6022 206 811",FAXT="+49 6022 208 754";
var EW="https://www.emaled.de/de/";
/* the surgical light series (emaled.de > OP-Leuchten and each model page, with the technical data). [series, title, detail, url] */
var PROD=[
 ["Serie 300","EMALED 300 W, D, D+, F und M","Für Eingriffs- und Behandlungsräume: an Wand oder Decke, auf Stativ und Fahrgestell oder netzunabhängig mit bis zu 6 Stunden Akkulaufzeit. 100.000 lx, Farbwiedergabeindex 99 Ra, 24 VA.",EW+"op-leuchte-300-d.html"],
 ["Serie 500","EMALED 500, 500/300 und 500/500","Flacher, offener Leuchtenkörper, kompatibel mit Laminar-Flow-Decken. 120.000 lx, 4-stufige Fokussierung, Endoskopie-Modus und Tiefenlicht.",EW+"op-leuchte-500.html"],
 ["Serie 560","EMALED 560, 560/300 und 560/560","Optisch identisch mit der EMALED 500 und mit 160.000 lx unser hellster Leuchtenkörper; auf Wunsch mit Akkus für rund 4 Stunden ohne Netz.",EW+"op-leuchte-560.html"],
 ["Serie 602","EMALED 602, 602 F, 602 M und 602-602","Neu im Sortiment: Lichtfeld fokussierbar in 4 Stufen, 10 Helligkeits- und 5 Farbtemperaturstufen, zwei abnehm- und sterilisierbare Handgriffe.",EW+"op-leuchte-602.html"],
 ["Mobil","EMALED 500 mobil und 560 mobil","Die großen Leuchtenkörper jetzt auch als mobile Version, flexibel in unterschiedlichen Behandlungsräumen einsetzbar.",EW+"op-leuchte-500-mobil.html"],
 ["Video","Kamera und Full-HD-Monitore","Die Kamera sitzt zentral im Leuchtenkörper der Serien 500 und 560; das HD-Signal geht per WLAN an Rekorder, Monitor im OP oder Schulungsraum.",EW+"op-kamera.html"],
 ["Tragarme","VALiA und ACROBAT","VALiA, modular und nachträglich vor Ort änderbar, oder das bewährte ACROBAT für Leuchten, Kamera und Monitore.",EW+"tragarmsysteme.html"]];
/* outside links: MEDICA 2026 exhibitor directory, then their own news (emaled.de > Aktuelles) */
var BLOG=[
 ["MEDICA 2026","EMA-LED im Ausstellerverzeichnis der MEDICA 2026, Halle 12, Stand A41","https://www.medica-tradefair.com/vis/v1/en/exhibitors/medica2026.3074009"],
 ["Neu","Operationsleuchten 602: als Decken-, Doppel- und mobile Leuchte, auch mit Full-HD-Kamera",EW+"op-leuchte-602.html"],
 ["Neu","Untersuchungsleuchten 202: für die Liege und den Behandlungsstuhl",EW+"untersuchungsleuchten.html"],
 ["Mobil","Die großen OP-Leuchten EMALED 500 und 560 jetzt auch mobil",EW+"aktuelles.html"]];
var SHEETS=[];

var FLOGO='<svg aria-hidden="true" viewBox="0 0 196 74"><g fill="none" stroke="#111DA3"><path stroke-width="1.35" d="M46.89 56.00L50.94 73.54M44.23 56.42L45.82 74.35M41.53 56.48L40.64 74.45M38.86 56.16L35.49 73.84M36.25 55.47L30.48 72.52M33.76 54.43L25.70 70.53M31.44 53.06L21.24 67.89M29.34 51.39L17.18 64.66M27.48 49.43L13.61 60.91M25.91 47.24L10.59 56.70M24.65 44.86L8.18 52.11M23.74 42.32L6.43 47.24M23.19 39.69L5.36 42.17M23.00 37.00L5.00 37.00M23.19 34.31L5.36 31.83M23.74 31.68L6.43 26.76M24.65 29.14L8.18 21.89M25.91 26.76L10.59 17.30M27.48 24.57L13.61 13.09M29.34 22.61L17.18 9.34M31.44 20.94L21.24 6.11M33.76 19.57L25.70 3.47M36.25 18.53L30.48 1.48M38.86 17.84L35.49 0.16M41.53 17.52L40.64 -0.45M44.23 17.58L45.82 -0.35M46.89 18.00L50.94 0.46"/><path stroke-width="4.9" stroke-linejoin="miter" d="M108.05 52.5V24.45H95A12.80 12.80 0 0 0 95 50.05H103M116.95 22V50.05H134M156.5 24.45H146A12.80 12.80 0 0 0 146 50.05H156.5M136 37.2H155M162.45 52.5V22M160 24.45H171A12.80 12.80 0 0 1 171 50.05H160"/></g><path fill="#111DA3" d="M48.5 52.5V22H53.6L62 37.6L70.4 22H75.5V52.5H70.6V31.6L63.9 43.6H60.1L53.4 31.6V52.5Z"/><path fill="#111DA3" d="M44 20.5H37.5A16.5 16.5 0 0 0 37.5 53.5H44Z"/><path fill="#fff" d="M42.6 22H37.5A15 15 0 0 0 37.5 52H42.6V47.2H37.6A10.2 10.2 0 0 1 28 39.2H42.6V34.8H28A10.2 10.2 0 0 1 37.6 26.8H42.6Z"/><circle cx="189" cy="21.5" r="3.4" fill="none" stroke="#111DA3" stroke-width=".55"/><path fill="#111DA3" d="M187.7 19.4h1.6a1.1 1.1 0 0 1 0 2.2h-1.6v-2.2m0 2.2v2.3m1.4-2.3 1.4 2.3" stroke="#111DA3" stroke-width=".55"/></svg>';
