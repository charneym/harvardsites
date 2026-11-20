# Legacy Advisory Services, LLC (legacy-pa) — HOME-ONLY build, batch 2026-11e

Registered investment adviser (wealth manager), Exton, Pennsylvania. Live: https://www.legacyadvisorypa.com/ (FMG Suite template 006, behind Cloudflare). Src `_kit/src/legacy-pa.src.html`, assembled by `_kit/pe/assemble_legacy-pa.py` from firelight's regions.

## Sources (fetched 2026-11-19)
- Site: / , /team , /team/richard-wiedl , /team/martin-a-gruszka , /team/adam-varrenti-iii , /company , /services , /what-we-do , /continuous-monitoring
- Form ADV Part 2A brochure (linked from site footer), issue date February 27, 2026: https://static.fmgsuite.com/media/documents/825176ec-8c34-420f-b270-babf55b50168.pdf
- Form CRS (linked from site footer), dated October 8, 2024: https://static.fmgsuite.com/media/documents/17786963-1c81-4151-a986-d07aefb3c0ea.pdf
- SEC IAPD: https://adviserinfo.sec.gov/firm/summary/147173 (CRD 147173, SEC 801-128187). ADV filing date 02/27/2026; brochure submitted 2/27/2026; SEC registration approved 6/16/2023; notice filings PA, WV (6/16/2023), FL (5/6/2024).

## Facts used
- Founded 2008, Exton, PA (ADV Item 4). Principal owners Richard Wiedl, Martin Gruszka, Adam Varrenti (ADV).
- $156,935,534 client assets under continuous discretionary management as of Dec 31, 2025 (ADV Item 4) → shown as "$157M".
- Tagline (home): "Building a Legacy that will stand the test of time". Home copy: critical point in your life; assets to work as hard for you as you did; customized financial plan and portfolio; plan "balanced for safety, income, growth, taxes and inflation".
- Process (/what-we-do): casual initial meeting; six steps — clarify present situation (assets/liabilities, tax returns, investment statements, insurance policies, pension plans); goals and risk tolerance and short/medium/long horizons; diversified plan (taxation, diversification, income, safety); coordinated implementation with disciplined, unemotional asset allocation; ongoing monitoring; reporting at least quarterly + phone/in-person reviews. No one-size-fits-all.
- Services (/services + home): investment management (stocks, bonds, ETFs, brokerage, IRAs traditional/Roth/SEP/SIMPLE, solo 401(k), profit sharing, government securities, annuities); financial planning (retirement, tax, estate, college, 401(k)/403(b), Roth conversions); insurance (life, LTC, disability income, individual and group health).
- Fees (ADV Item 5): 1.25% to $500,000; 1.00% $500,001–$2,499,999; 0.75% $2.5M+; billed quarterly in advance; hourly $250.
- Clients (ADV Item 7): individuals, pension and profit sharing plans, trusts, estates, charitable organizations, corporations and other businesses.
- Custody/safeguards (ADV Items 12–15): no custody; Schwab and Altruist as broker/custodian; custodian statements at least quarterly; no third-party compensation for advice and no referral payments; no legal or disciplinary events; Code of Ethics states fiduciary duty.
- Team (/team pages): Richard S. Wiedl, CFP® — Managing Partner; 20+ years; wealth planning and tax-efficient strategies; former Director of Operations at a national broker-dealer/SEC RIA; B.S. Finance, WVU; co-founded the firm. Martin A. Gruszka — Partner/Advisor, Chief Compliance Officer; West Chester University; oversees operations and marketing; Exton Chamber of Commerce; founding member BNI Kimberton. Adam Varrenti III — Partner/Advisor, Chief Investment Officer; B.S. Finance, Drexel; oversees investment selection; 15-year career. Bios use "his" → Mr.
- Contact: 658 Exton Commons, Exton, PA 19341; office 610-524-6801; fax 610-524-6806 (ADV); info@legacyadvisorypa.com (site footer; ADV and /what-we-do give info@legacywealthpa.com).
- Footer disclosure: advisory services through Legacy Advisory Services, LLC (RIA); securities through Fortune Financial Services, LLC, Member FINRA/SIPC; separate entities.

## Brand (sampled from the live site 2026-11-19)
- Logo wordmark navy #003366 ("LEGACY / ADVISORY SERVICES", Roman serif) → favicon ground, sky navy.
- Site dark ground #06142b → --ink.
- Gold accent #f8bd00 (phone icon, "Meet Our Advisors" bar) → --acc/--accL; #7d5e00 deep tint for labels on light.
- Nav grey #dcdedf → --bone3, light pages #f4f5f5.
- Fonts: Newsreader (display), Public Sans (text), Libre Caslon Text 700 (wordmark, echoing the logo's serif).

## Photos
- No headshots (team uses FMG default-profile.png placeholders) → masthead text list (CI/CL).
- Site imagery is stock (farm fence over a lake, couple on a sailboat, generic jpgs) → not used (BR). Hero is an illustrated Chester County farm scene echoing their own fence/countryside header.

## Bad-site evidence
- Broken nav glyph: the mobile "Menu" toggle renders as a vertical "M / en / u" stack over the desktop header at 1440.
- Clashing stock collage: a sailboat-couple stock photo boxed over a farm-fence stock background, with a stray "ï»¿" BOM character printed top-left of every page.
- Team page shows three grey default-profile silhouettes (no photos); bios truncated behind "Read more".
- Generic FMG Suite template; "Insights" are syndicated FMG articles; email differs between site (legacyadvisorypa.com) and ADV/process page (legacywealthpa.com).

## Lead
Richard S. Wiedl, CFP® — Managing Partner (registry: Member/Managing). Greeting: Mr. Wiedl. Best published email: info@legacyadvisorypa.com (no personal email published). Phone 610-524-6801.

## Build concept
- Hero: evening over Chester County farmland — layered hills, a fieldstone bank barn with lit windows, silo and old shade tree against a low gold sun, split-rail fence in the foreground (navy/gold palette).
- Story: one fieldstone arch bridge built in four steps (foundations = records; timber centering = goals and risk; voussoirs + gold keystone = safety, income, growth, taxes, inflation; centering removed, deck on = monitored, reported, reviewed).
- No performance claims or testimonials (none published).
