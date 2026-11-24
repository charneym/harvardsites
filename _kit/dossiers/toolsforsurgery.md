# Tools for Surgery, LLC (slug: toolsforsurgery) — HOME-ONLY build, batch 2026-11j

- Site: https://www.toolsforsurgery.com/ (WordPress/Divi, read 2026-11-23; Home / Products / How to Order / Contact). Domain check: company name, logo, products and info@toolsforsurgery.com on the page; the address 8 Technology Dr., #100, East Setauket NY matches the applicant address on FDA 510(k) K220218 and K242901; FDA establishment registration 3004550973 (Tools for Surgery, LLC, owner/operator 9060703, official correspondent Arnold R. Leiboff) is current through 2026. No newer site on another domain.
- Type: medtech, surgical devices for general, bariatric and colorectal surgery. No pathogens, toxins or biodefence.
- HQ: Tools for Surgery, LLC, 8 Technology Drive, #100, East Setauket, NY 11733-3327. Phone (631) 444-4448, fax (631) 689-2943 (site footer).
- Lead: Arnold R. Leiboff, MD, President (registry; FDA 510(k) contact on K040109, K040110, K220218, K242901; FDA registration official correspondent). Board-certified colon and rectal surgeon, East Setauket (Stony Brook Medicine directory, https://doctors.stonybrookmedicine.edu/provider/arnold-r-leiboff/2249039). Greeting: "Dear Dr. Leiboff".
- Best published email: info@toolsforsurgery.com (site footer and Contact). No personal address found published.

## Activity (pre-screen OK)
- 2026-06: new product page and photography for the Bariatric Air Syringe (ALT-BA) on toolsforsurgery.com (image uploads dated 2026/06; site feed lastBuildDate 20 Jun 2026). https://www.toolsforsurgery.com/bariatric-air-syringe/
- 2025-01-10: FDA 510(k) K242901, ZZIREN Orogastric Tube (SGT and GBT, 32/36/40 Fr). https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=K242901
- FDA establishment registration 3004550973 active, expiry year 2026 (openFDA registration listing).
- Earlier 510(k)s: K220218 Siren SGT (2022-05-18); K040109 Hemorrhage Occluder Pin (2004-03-25); K040110 Easy Loop EZL-01 (2004-03-24).

## Facts used (all from toolsforsurgery.com product pages unless noted)
- Taglines: "Tools for Surgery™", "All Surgeons Are Inventors™", "We make it simple, by design™"; "we design and manufacture high-quality surgical devices that empower surgeons and enhance patient outcomes. Specializing in general and colorectal surgery, we combine innovative engineering with precision manufacturing".
- Twelve catalogue products with catalogue numbers and descriptions (ZZIREN Orogastric Tubes, Bariatric Air Syringe, Colorectal Air Syringes ALT-30/ALT-50, Anvil and Head Sizer Sets, Hemorrhage Occluder Pins, Easy Loop, Sohn's Dilators, Young's Style Anal Dilators, Illuminated Indirect Anoscopy Mirror, NEOBALM, WIKI DRAINS).
- Patents named on product pages: U.S. 11,006,957 (ZZIREN); 8,216,159 and 10,123,712 (Colorectal Air Syringes); 11,189,813 (WIKI DRAINS).
- Quotes cited on product pages: ASCRS Clinical Practice Guidelines (anastomotic testing); Abe Fingerhut, MD (titanium thumbtacks); 83–88% success of anal dilatation to 40 mm for six minutes (Sohn's Dilators page); Leiboff AR, J Wound Care 2014;23(12):623-9 (WIKI DRAINS page).

## Build
- _kit/home/toolsforsurgery/* (assemble.py from firelight regions) → _kit/src/toolsforsurgery.src.html → /toolsforsurgery/index.html.
- Palette from the live site and logo: black italic TFS mark on a steel-grey gradient panel, charcoal #3f3f3f buttons, white → charcoal ink #1c1d21, white mark, steel accent #b6c5ce on dark, deep steel #3f5562 on bone. Poppins (the site's own face) + Inter.
- Logo: their raster Logo.png traced (potrace) to clean filled vector paths, white, in header and loader.
- Hero: option (a), the company's own product photograph of the Bariatric Air Syringe (https://www.toolsforsurgery.com/wp-content/uploads/2026/06/BARIATRIC-AIR-SYRINGE-02-INTERNET.jpg), keyed from its pure-white ground to real alpha, lightly graded, with a soft contact shadow and steel glow on the charcoal ink; slow breath, no pointer response.
- Story: fine-line drawing of the same device (bulb, valve, nozzle, integral gauge); steps squeeze → gauge reads → held in the 20–60 mmHg band.
- Nav Products / Evidence / Company open build-out pages (buildout lib); Contact scrolls to the contact block.
