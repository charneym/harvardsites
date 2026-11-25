var FONTS=['400 1em "Archivo"','500 1em "Archivo"','600 1em "Archivo"','700 1em "Archivo"','400 1em "Inter Tight"','500 1em "Inter Tight"','400 1em "IBM Plex Mono"','500 1em "IBM Plex Mono"'];
var WEB="https://www.pritel.com/";
var MAIL="pritel@pritel.com";
var TEL="+1 630 983 2200";
/* product lines, as published on pritel.com/products.html and each product page: [code, name, what it is, key figures, page] */
var LINES=[
 ["FFL","Picosecond and femtosecond fiber lasers","Passively mode-locked Er-doped (1550 nm) and Yb-doped (1060 nm) fiber lasers. Turn the key switch; no further adjustment is needed.","10 ps to 150 fs · 20–50 MHz","ffl1550.html"],
 ["UOC","Ultrafast optical clocks","Actively mode-locked fiber lasers for time-division-multiplexed communications R&D, with embedded microprocessor control.","1–40 GHz · jitter < 100 fs","uoc1550.html"],
 ["FA","Optical fiber amplifiers","Low- and high-power, polarization-maintaining, sub-picosecond, low-noise, L-band and 1060 nm amplifiers, with optional power monitors.","Er and Er/Yb doped fiber","high_power_fa.html"],
 ["FP","FEMTOPULSE™ optical pulse compressors","Specialty fibers compress transform-limited pulses from the UOC, boosted by an integrated EDFA.","< 300 fs · > 10 W peak","fp.html"],
 ["OCM","Optical clock multipliers","Passive OTDM multiplexers that raise the pulse rate of 10 to 40 GHz inputs by 2, 4, 8 or 16 times.","Up to 320 GHz achieved","ocm.html"],
 ["SHG","Second and third harmonic generators","Periodically-poled LiNbO₃ with an integrated amplifier doubles or triples FFL pulses, free-space or fiber-coupled.","764–782 nm · 510–520 nm","shg.html"],
 ["OPP","Optical pulse pickers","Select pulses from a pulse train, with a countdown scaler and a variable delay.","Extinction > 35 dB","opp.html"],
 ["TFA","Tunable filter assemblies","Pre-aligned Quick-Change filter cartridges in a fiber-pigtailed tunable module.","1535–1570 nm · < 1 dB loss","tfa.html"]];
/* applications: pritel.com home and about pages, and the World of QUANTUM 2025 exhibitor profile */
var APPS=[["Communications","Ultra-high-speed fiber optic communications at bit rates of 2.5, 10, 40 and 160 Gbps."],
 ["Component testing","Impulse response testing of optoelectronic components."],
 ["Fiber research","Characterizing optical fiber dispersion and nonlinearities."],
 ["Ranging and metrology","Laser ranging and metrology with stable, synchronized pulse trains."],
 ["Imaging","Short pulses for optical coherence tomography and supercontinuum generation."],
 ["Quantum","Short-pulse fiber lasers for generating entangled photon pairs, tunable in wavelength, pulse width and repetition rate."]];
var QUANT="https://exhibitors.world-of-quantum.com/ausstellerportal/2025/aussteller/ausstellerdetails/pritel-inc/?elb=188.1100.3076.1.111";
/* international representatives (pritel.com/contact.html) */
var REPS=[["Japan","Sun Instruments"],["France","Keopsys"],["China","Luster"],["All other countries","PriTel, Inc."]];
var SHEETS=[];
