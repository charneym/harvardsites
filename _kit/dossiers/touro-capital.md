# Touro Capital Partners (slug: touro-capital) — HOME-ONLY build, 2026-11-20

- Site: https://tourocp.com/ (static Bootstrap one-pager; root redirects to index_eng.html; PT version index.html, ES version index_esp.html). Read: PT and EN home in full (about, team, funds, portfolio, contacts, news, SFDR).
- Type: private equity / capital de risco, lower-middle market. Touro Capital Partners – SCR, S.A., authorised and regulated by the CMVM. UN PRI signatory. In scope under SPEC §2b (international; site built in Portuguese, PT-PT).
- HQ: Praça do Príncipe Real n.º 11, 1.º, 1250-184 Lisboa, Portugal. General email geral@tourocp.com; recruitment cv@tourocp.com. No phone published.
- Lead: Manuel Alves Gomes, Sócio Fundador (Founding Partner), mag@tourocp.com. Bio is in the masculine in Portuguese ("certificado", "qualificado") -> "Dear Mr. Alves Gomes". Chartered accountant (ICAEW), so works in English.
- Alternatives: Miguel Vodrazka de Miranda, Sócio Fundador, mvm@tourocp.com (Harvard MBA) -> "Dear Mr. Vodrazka de Miranda"; António Ramalho, Presidente (Chairman since Sept 2023, ex-CEO Novo Banco), ar@tourocp.com.

## Scope checks
- Size: Touro I EUR 71.5M (second close, investing); targets with revenue of EUR 10M and EBITDA of EUR 2M; control positions. Touro Next EUR 21.1M (SIFIDE II, final close). Lower-middle market or smaller: yes.
- Operating companies: yes (Pasto Alentejano meat products, Norbags paper bags, Uzugos industrial holdings, proGrow, Reckon.ai, etc.).

## Activity (since 2025-05-18)
- 2025-06-03: proGrow raises EUR 2M "liderada por Touro Capital Partners" (El Referente). https://elreferente.es/?p=185378 (ECO reported it 2025-05-15.)
- 2025-07-29: Reckon.ai raises EUR 5.1M, led by Iberis Capital with Alea and Touro participating (Retail Tech Innovation Hub). https://retailtechinnovationhub.com/home/2025/7/29/autonomous-retail-technology-startup-reckonai-bags-51-million-in-funding-round-led-by-iberis-capital
  Note: the registry said Touro "leads" the Reckon.ai Series A; the press says Iberis led and Touro participated.
- The firm's own site lists 9 portfolio companies dated 2025, and an SFDR section updated 2026-06-25 announcing a Touro II fund (Article 8).

## Facts used (all from tourocp.com unless noted)
- Tagline "Transform Today. Impact Tomorrow." (set in Portuguese as "Transformar hoje. Impacto amanhã.").
- Description: "sociedade gestora independente de fundos de capital de risco que investe de forma responsável em negócios de média dimensão com o objetivo de gerar retornos atrativos para os seus Investidores".
- Bem-vindo text; Fatores Distintivos (Abordagem, Arbitragem, Foco Operacional, Equipa); Abordagem Estratégica (Ligar, Transformar, Crescer), copy kept close to the original.
- Funds: Touro I and Touro Next policy fields, CMVM n.º 1894 and n.º 1971.
- Portfolio: 13 companies with year and sector as listed; names from their logos/sites; links to their sites. No descriptions invented.
- Team: 4 partners, 2 back office, 4 advisory board members shown on the live site (Emilio Novela Berlín and Isabel Azeredo are commented out in the HTML, so left out; the late Josep Piqué, "Ex-Presidente", left out). Summaries condensed from bios. Boada's surname corrected to Pallarés (the site spells it "Pallerés").
- News: 4 items with working links (Retail Tech Innovation Hub 2025-07-29, El Referente 2025-06-03, and the two on the firm's site: BPF 2023-08-04 and Expresso 2021-10-01).

## Bad-site evidence
- The home screen is a flat charcoal page with the logo boxed in the middle and the tagline and intro in fallback Times New Roman (the theme's web font isn't loading); off-the-shelf Bootstrap theme (theme-startup.css, flexslider, et-line icons). The root URL redirects to a static index_eng.html.
- Stale and incomplete: news holds only two items (2023 and 2021), none of the 2025 deals; the portfolio is logos with a year and a one-word sector, no descriptions; two advisers' bios are left commented out in the page source.
- Typos and errors: "Pallerés", "negocicação", "Private Equiy"; loads geoplugin.net over plain http (mixed content); cookie bar covers the bottom of the first screen.

## Palette
- tourocp.com: charcoal #292929 and white, green #47b475 (used on the SFDR and sustainability highlights) -> --accL, #2f8a55 on bone. The ink is deepened to the near-black of the firm's bull photograph. Mark = the firm's own line-drawn bull logo path (logo_new.svg), stroked. Fraunces (display) + Manrope (geometric, close to the logo's TOURO wordmark).

## Hero / story
- Hero (DG): the firm's own professional photograph from tourocp.com (img/imagem_16.jpg): a studio portrait of a black Iberian bull ("touro") against black. Graded warm-neutral, feathered into black, with a slow push-in, a drifting soft key light across the horns, dust motes and grain. On phones it sits in the top band, above the title (CW). It moves on its own with no pointer response (CZ).
- Story: one engraved elevation (a Pombaline townhouse like those on Praça do Príncipe Real, and a sawtooth-roofed Portuguese industrial workshop). LIGAR = an arc from the office to the works, and people at the door; TRANSFORMAR = a cut-away of the production line, solar panels on the north lights, dimensions; CRESCER = a new lit bay, a lorry at the dock, trees, lit windows.
