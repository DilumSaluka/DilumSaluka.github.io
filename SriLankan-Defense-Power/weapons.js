const WEAPONS = {
    "Hyundai Elantra": {
        origin: "South Korea",
        type: "Patrol Sedan",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/2017_Hyundai_Elantra,_Windsor,_Ontario,_2025-07-01.jpg?width=400",
        history: "The Hyundai Elantra has been a mainstay of the Sri Lanka Police patrol fleet since the early 2000s, replacing ageing Japanese sedans in city and highway roles.",
        reason: "Reliable, economical front-wheel-drive sedans are ideal for daily patrol and station duties.",
        records: "Standard patrol sedan of the Sri Lanka Police."
    },
    "Volkswagen": {
        origin: "Germany",
        type: "Patrol Car",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Volkswagen_Passat_Variant_B9_IAA_2023_1X7A0654.jpg?width=400",
        history: "Volkswagen Passat variants have served in Sri Lanka Police traffic and general patrol units, imported for senior patrol and escort duties.",
        reason: "German build quality and long-distance comfort suit highway patrol and VIP escort work.",
        records: "Patrol and traffic unit vehicles."
    },
    "Mazda": {
        origin: "Japan",
        type: "Patrol Sedan / Wagon",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/2018-2019_Mazda_Atenza_Wagon_XD.jpg?width=400",
        history: "Mazda sedans and wagons are used by Sri Lanka Police for patrol and unmarked operational duties.",
        reason: "Sporty handling and reliability make Mazdas effective for both marked patrol and discreet surveillance.",
        records: "Patrol and unmarked use."
    },
    "Subaru": {
        origin: "Japan",
        type: "Surveillance Sedan",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Subaru_Legacy_(BE)_S401_IMG_9845.jpg?width=400",
        history: "Subaru Legacy models have served as unmarked surveillance vehicles in Sri Lanka, favoured for criminal tracking operations.",
        reason: "All-wheel-drive grip and discreet looks suit close surveillance work.",
        records: "Unmarked surveillance vehicle."
    },
    "Proton": {
        origin: "Malaysia",
        type: "Patrol Sedan",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/2005_Proton_Waja_1.6_(4G18)_in_Puchong,_Malaysia_(01).jpg?width=400",
        history: "Proton Waja sedans were acquired in batches for the Sri Lanka Police patrol fleet as an economical alternative to Japanese brands.",
        reason: "Low purchase and running costs allow large fleet numbers across island-wide stations.",
        records: "Patrol fleet sedan."
    },
    "Mitsubishi Galant": {
        origin: "Japan",
        type: "Highway Patrol Sedan",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Mitsubishi_Galant_1600_GL_6280199.jpg?width=400",
        history: "The Mitsubishi Galant was a classic of the Sri Lanka Police highway patrol fleet from the 1990s, well remembered on the expressway and city streets.",
        reason: "Durable Japanese engineering kept Galants in service for decades as patrol stalwarts.",
        records: "Highway patrol classic."
    },
    "Mazda BT-50": {
        origin: "Japan",
        type: "Utility Pickup",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Mazda_BT-50_front_20080103.jpg?width=400",
        history: "Mazda BT-50 pickups serve in provincial police commands, carrying personnel and equipment across rural terrain.",
        reason: "The pickup bed and rugged chassis suit station logistics and rural patrol resupply.",
        records: "Utility pickups for provincial transport."
    },
    "Tata Safari": {
        origin: "India",
        type: "Rugged SUV",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/TATA_Safari_Dicor_2.2.jpg?width=400",
        history: "The Tata Safari SUV has been used by Sri Lanka Police for rural and remote-area patrols, including the special task patrols of the STF.",
        reason: "Body-on-frame construction and high ground clearance handle rough village roads.",
        records: "Rugged SUV for rural patrols."
    },
    "Tata Sumo": {
        origin: "India",
        type: "Multi-Purpose Van",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/MHV_Tata_Sumo_02.jpg?width=400",
        history: "Tata Sumo multi-purpose vehicles transport police squads and prisoners across Sri Lanka, a common sight at police stations nationwide.",
        reason: "The Sumo's boxy interior carries up to ten officers for patrol and transport duties.",
        records: "Multi-purpose police transport."
    },
    "Mahindra Scorpio": {
        origin: "India",
        type: "Command SUV",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Mahindra_Scorpio.jpg?width=400",
        history: "Mahindra Scorpio SUVs serve at district commands and divisional headquarters, including STF rapid-response elements.",
        reason: "A proven Indian SUV with strong off-road ability for command mobility.",
        records: "SUVs for district commands."
    },
    "Yamaha 600cc": {
        origin: "Japan",
        type: "Highway Patrol Motorcycle",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/2005_Yamaha_FZ6.jpg?width=400",
        history: "Yamaha 600cc motorcycles, such as the FZ6, are used by Sri Lanka Police highway patrol units for fast response on main roads.",
        reason: "Light, agile machines that weave through traffic to reach incidents quickly.",
        records: "Highway patrol motorcycle."
    },
    "Kawasaki 750cc": {
        origin: "Japan",
        type: "Escort Motorcycle",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Kawasaki_Zephyr_750.JPG?width=400",
        history: "Kawasaki 750cc motorcycles serve in escort and rapid-response roles, notably in the ceremonial escorts of the police motorcycle squad.",
        reason: "Torquey 750cc engines give strong acceleration for escorts and emergencies.",
        records: "Escort and response motorcycle."
    },
    "Suzuki 500cc": {
        origin: "Japan",
        type: "Patrol Motorcycle",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/SuzukiGS500.JPG?width=400",
        history: "Suzuki 500cc machines form the backbone of city traffic patrols, a long-serving model in the police fleet.",
        reason: "Simple, dependable twins ideal for everyday patrol duty.",
        records: "Patrol and escort motorcycle."
    },
    "Hero Honda 200cc": {
        origin: "India",
        type: "Urban Response Motorcycle",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Hero_Honda_CBZ_Star.jpg?width=400",
        history: "Hero Honda motorcycles are used by urban traffic units for quick response in congested city centres.",
        reason: "Fuel-efficient Indian commuter machines suit high-mileage urban policing.",
        records: "Urban traffic response motorcycle."
    },
    "Close Surveillance Division Vans": {
        origin: "Various",
        type: "Surveillance Van",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/DSC05464_Mercedes-Benz_Sprinter,_Logistical_Vehicle,_Johanniter_Vienna,_2023-10.jpg?width=400",
        history: "The Close Surveillance Division operates modernized vans fitted with high-tech camera and surveillance systems to monitor traffic safety and public events.",
        reason: "Discreet van bodies conceal cameras, monitors and communications gear for mobile observation.",
        records: "High-tech mobile surveillance platform."
    },
    "AK-47": {
        origin: "Soviet Union",
        type: "Assault Rifle",
        caliber: "7.62x39mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/AK-47_type_II_noBG.png?width=400",
        history: "The AK-47 was one of the first assault rifles issued to the Sri Lanka Army, supplied from the 1970s and widely carried during the civil war.",
        reason: "Its legendary reliability in mud, rain and jungle made it the backbone of infantry sections.",
        records: "First-generation assault rifle of the Sri Lanka Army."
    },
    "AKM": {
        origin: "Soviet Union",
        type: "Assault Rifle",
        caliber: "7.62x39mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/AKM_automatkarbin,_Ryssland_-_7,62x39mm_-_Armémuseum.jpg?width=400",
        history: "The modernized AKM replaced earlier AK-47s in Sri Lankan service from the 1980s as the standard infantry rifle.",
        reason: "Stamped construction made it lighter and cheaper while keeping the Kalashnikov action.",
        records: "Standard-issue assault rifle of the Sri Lanka Army."
    },
    "Type 56": {
        origin: "China",
        type: "Assault Rifle",
        caliber: "7.62x39mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Male_Mandalay_PDF_recruits_with_Type_56_rifles.png?width=400",
        history: "The Chinese Type 56 copy of the AK-47 was procured in large numbers and saw heavy service in every Sri Lankan conflict since the 1970s.",
        reason: "Cheap, rugged and simple to maintain, it equipped entire battalions.",
        records: "Most numerous assault rifle in Sri Lanka Army service."
    },
    "Type 56 SMG": {
        origin: "China",
        type: "Carbine",
        caliber: "7.62x39mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/SMG_T-56.jpg?width=400",
        history: "The folding-stock Type 56 carbine version armed vehicle crews, paratroopers and special units of the Sri Lanka Army.",
        reason: "Compact folding stock suits tight vehicle and aircraft interiors.",
        records: "Short-barrelled carbine variant of the Type 56 rifle."
    },
    "SAR-80": {
        origin: "Singapore",
        type: "Assault Rifle",
        caliber: "5.56x45mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/SAR_80_rifle.JPG?width=400",
        history: "The SAR-80, Singapore's AR-18-derived rifle, was the first 5.56mm rifle adopted by the Sri Lanka Army in the 1980s.",
        reason: "NATO calibre and simple gas-piston action suited tropical jungle warfare.",
        records: "First NATO-calibre assault rifle of the Sri Lanka Army."
    },
    "SLA Rifle": {
        origin: "Sri Lanka",
        type: "Service Rifle",
        caliber: "5.56x45mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/SAR_80_rifle.JPG?width=400",
        history: "The SLA rifle designation covers locally assigned and modified service rifles in Sri Lanka Army service.",
        reason: "Issued as the standard personal weapon across the army.",
        records: "General-issue service rifle of the Sri Lanka Army."
    },
    "FAL 50.00": {
        origin: "Belgium",
        type: "Battle Rifle",
        caliber: "7.62x51mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/FN_FAL_compilation.jpg?width=400",
        history: "The FN FAL was the Sri Lanka Army's standard battle rifle from independence-era procurement until the 5.56mm transition.",
        reason: "Powerful full-calibre 7.62mm rounds with proven reliability worldwide.",
        records: "Former standard battle rifle of the Sri Lanka Army."
    },
    "G3A3": {
        origin: "West Germany",
        type: "Battle Rifle",
        caliber: "7.62x51mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/DCB_Shooting_G3_pictures.jpg?width=400",
        history: "The Heckler & Koch G3 armed Sri Lankan units alongside the FAL, prized for its accuracy and durability.",
        reason: "Roller-delayed blowback design gives outstanding accuracy.",
        records: "7.62mm battle rifle used in infantry and support units."
    },
    "M16A2": {
        origin: "United States",
        type: "Assault Rifle",
        caliber: "5.56x45mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/M16A2_noBG.jpg?width=400",
        history: "M16A2 rifles were delivered to the Sri Lanka Army through US military assistance programmes.",
        reason: "Lightweight 5.56mm platform familiar to special forces and guard units.",
        records: "US-supplied 5.56mm rifle in Sri Lankan service."
    },
    "M4 Carbine": {
        origin: "United States",
        type: "Carbine",
        caliber: "5.56x45mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/PEO_M4_Carbine_RAS_M68_CCO.png?width=400",
        history: "M4 carbines were acquired for special operations, commandos and VIP protection details.",
        reason: "Compact and reliable with extensive accessory rails.",
        records: "Special forces carbine with rapid-response units."
    },
    "HK MP5": {
        origin: "Germany",
        type: "Submachine Gun",
        caliber: "9x19mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Police_Heckler_%26_Koch_MP5_(33507069243).jpg?width=400",
        history: "The MP5 equipped the Commando Regiment, Special Forces and police special units.",
        reason: "Accuracy and controllability make it the benchmark close-quarters weapon.",
        records: "Standard SMG of special operations and close protection teams."
    },
    "Uzi": {
        origin: "Israel",
        type: "Submachine Gun",
        caliber: "9x19mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/UZI_Submachine_Gun_(7414624230).jpg?width=400",
        history: "Israeli Uzi submachine guns served with Sri Lankan special forces and police during counter-insurgency operations.",
        reason: "Compact blowback design suited to vehicle and urban operations.",
        records: "Israeli SMG used by special units."
    },
    "Mini Uzi": {
        origin: "Israel",
        type: "Compact Submachine Gun",
        caliber: "9x19mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Uzi_2.jpg?width=400",
        history: "The Mini Uzi provided close-protection teams with a concealable automatic weapon.",
        reason: "Smaller than the standard Uzi with the same firepower.",
        records: "Concealed-carry SMG for bodyguard details."
    },
    "MAT-49": {
        origin: "France",
        type: "Submachine Gun",
        caliber: "9x19mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/MAT_Submachine_Gun.jpg?width=400",
        history: "French MAT-49 submachine guns were among the first SMGs in post-independence Sri Lankan service.",
        reason: "Simple stamped design inherited from colonial-era stocks.",
        records: "Early Cold War SMG in Ceylon Army service."
    },
    "Sterling L2A3": {
        origin: "United Kingdom",
        type: "Submachine Gun",
        caliber: "9x19mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Submachine_Gun,_9mm,_L2A3,_Sterling,_British,_S-N_UF57A5347_(NHHC_2002-11-2).jpg?width=400",
        history: "The Sterling served through the British connection, remaining in reserve roles for decades.",
        reason: "Excellent reliability and accuracy for a wartime-era SMG.",
        records: "British SMG inherited into Sri Lankan service."
    },
    "PM-63": {
        origin: "Poland",
        type: "Submachine Gun",
        caliber: "9x18mm Makarov",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Submachine_gun_wz63.jpg?width=400",
        history: "Polish PM-63 RAK submachine guns reached Sri Lanka in small numbers for special units.",
        reason: "Compact design with a folding grip for discreet carry.",
        records: "Polish compact SMG in limited service."
    },
    "Škorpion vz. 61": {
        origin: "Czechoslovakia",
        type: "Machine Pistol",
        caliber: "7.65mm Browning",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Normal_skorpion_01.jpg?width=400",
        history: "The vz. 61 Skorpion machine pistol was used by special units as a compact personal defence weapon.",
        reason: "Very small and controllable for a full-auto weapon.",
        records: "Czech machine pistol in special operations use."
    },
    "PP-19 Bizon": {
        origin: "Russia",
        type: "Submachine Gun",
        caliber: "9x18mm Makarov",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/PP-19_Bizon_right_view.jpg?width=400",
        history: "The PP-19 Bizon was acquired in limited numbers for specialized security units.",
        reason: "High-capacity helical magazine in a compact frame.",
        records: "Russian SMG in limited special-service use."
    },
    "TZ-45": {
        origin: "Italy",
        type: "Submachine Gun",
        caliber: "9x19mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/TZ-45.jpg?width=400",
        history: "Italian TZ-45 wartime SMGs were among early sub-machine guns available to the Ceylon Police and army.",
        reason: "Wartime surplus provided cheap automatic weapons.",
        records: "Early surplus SMG in Ceylonese service."
    },
    "Beretta 92F": {
        origin: "Italy",
        type: "Pistol",
        caliber: "9x19mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Beretta_92F_9MM_Parabellum_Pistol.jpg?width=400",
        history: "The Beretta 92F served as an officer's sidearm in the Sri Lanka Army.",
        reason: "Proven Italian service pistol with 15-round magazine.",
        records: "Standard officer sidearm for decades."
    },
    "Beretta 92FS": {
        origin: "Italy",
        type: "Pistol",
        caliber: "9x19mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Beretta-92FS.jpg?width=400",
        history: "The 92FS update of the Beretta service pistol armed officers and military police.",
        reason: "Improved slide design of the classic 92 series.",
        records: "Sidearm for officers and MP units."
    },
    "Glock 17": {
        origin: "Austria",
        type: "Pistol",
        caliber: "9x19mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Glock_17-removebg-preview.png?width=400",
        history: "The Glock 17 became the standard sidearm of Sri Lankan special forces and police in the modern era.",
        reason: "Lightweight polymer frame with 17-round capacity.",
        records: "Modern standard-issue pistol."
    },
    "Glock 19": {
        origin: "Austria",
        type: "Compact Pistol",
        caliber: "9x19mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Glock_19_Generation_4-removebg.png?width=400",
        history: "The compact Glock 19 is carried by plainclothes officers and close protection teams.",
        reason: "Compact enough for concealed carry with full-size capacity.",
        records: "Concealed-carry sidearm of security details."
    },
    "CZ 99": {
        origin: "Serbia",
        type: "Pistol",
        caliber: "9x19mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Zastava_CZ_99-IMG_6547-gradient.jpg?width=400",
        history: "Zastava CZ 99 pistols were supplied to Sri Lanka in police and military quantities.",
        reason: "Robust Yugoslav-era service pistol design.",
        records: "Balkan 9mm pistol in Sri Lankan service."
    },
    "Zastava M57": {
        origin: "Yugoslavia",
        type: "Pistol",
        caliber: "7.62x25mm Tokarev",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Yugo_Tokarev_M57.jpg?width=400",
        history: "The Tokarev-derived M57 was issued in large numbers to Sri Lankan forces during the 1980s.",
        reason: "Powerful Tokarev round with simple robust action.",
        records: "Widely issued Tokarev-pattern sidearm."
    },
    "Tokarev TT-33": {
        origin: "Soviet Union",
        type: "Pistol",
        caliber: "7.62x25mm Tokarev",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Tokarev_TT33_(6825679152).jpg?width=400",
        history: "The TT-33 was a standard Soviet-bloc sidearm that reached Sri Lanka in large numbers.",
        reason: "Simple, hard-hitting Tokarev design.",
        records: "Cold War standard pistol of Soviet-bloc allies."
    },
    "Browning Hi-Power": {
        origin: "Belgium",
        type: "Pistol",
        caliber: "9x19mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/FN_Hi_Power.jpg?width=400",
        history: "The FN Hi-Power served as the officer sidearm of the Ceylon Army from the 1950s.",
        reason: "Classic 13-round double-action design from FN.",
        records: "Long-serving classic military pistol."
    },
    "Browning M2HB": {
        origin: "United States",
        type: "Heavy Machine Gun",
        caliber: "12.7x99mm (.50 BMG)",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/M2_machine_gun_at_Musee_de_l_Armee-IMG_7566-white.jpg?width=400",
        history: "The M2HB .50-calibre machine gun arms Sri Lankan armoured vehicles, naval craft and defensive positions.",
        reason: "Devastating anti-personnel and anti-vehicle firepower.",
        records: "Standard heavy machine gun across all three services."
    },
    "PKM": {
        origin: "Soviet Union",
        type: "General Purpose Machine Gun",
        caliber: "7.62x54mmR",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/7,62_KK_PKM_Helsinki_2012.JPG?width=400",
        history: "The PKM is the standard general-purpose machine gun of Sri Lankan infantry and armoured units.",
        reason: "Light, reliable and powerful in the classic GPMG role.",
        records: "Standard squad and vehicle machine gun."
    },
    "RPK": {
        origin: "Soviet Union",
        type: "Light Machine Gun",
        caliber: "7.62x39mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/7.62mm_light_machine_gun_RPK.png?width=400",
        history: "The RPK light machine gun complemented the AK rifle family at section level.",
        reason: "Shares the AK's parts and ammunition for logistical simplicity.",
        records: "Section-level light machine gun."
    },
    "RPD": {
        origin: "Soviet Union",
        type: "Light Machine Gun",
        caliber: "7.62x39mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/RPD_feed_system.JPG?width=400",
        history: "The RPD belt-fed light machine gun served with Sri Lankan infantry in early counter-insurgency campaigns.",
        reason: "Belt feed gave sustained fire at light weight.",
        records: "Early belt-fed section machine gun."
    },
    "MG3": {
        origin: "West Germany",
        type: "General Purpose Machine Gun",
        caliber: "7.62x51mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/BundeswehrMG3.jpg?width=400",
        history: "The MG3 equips armoured vehicles and helicopter door-gun positions in Sri Lankan service.",
        reason: "Extremely high rate of fire in a proven NATO design.",
        records: "Vehicle and helicopter-mounted machine gun."
    },
    "M60D": {
        origin: "United States",
        type: "General Purpose Machine Gun",
        caliber: "7.62x51mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/M60_Medium_Machine_Gun_(7414626098).jpg?width=400",
        history: "The M60D helicopter door gun armed Sri Lanka Air Force Bell helicopters.",
        reason: "Lightweight pintle-mounted gun for door gunners.",
        records: "Air Force helicopter door gun."
    },
    "NSV": {
        origin: "Soviet Union",
        type: "Heavy Machine Gun",
        caliber: "12.7x108mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/NSV_machine_gun-04.jpg?width=400",
        history: "The NSV heavy machine gun arms armoured vehicles and coastal defence positions.",
        reason: "Powerful Soviet 12.7mm firepower for vehicles.",
        records: "Vehicle-mounted heavy machine gun."
    },
    "DShK": {
        origin: "Soviet Union",
        type: "Heavy Machine Gun",
        caliber: "12.7x108mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Soviet_DSHK_Model_1938_12.7mm_Heavy_Machine_Gun_(9885042345).jpg?width=400",
        history: "The DShK 12.7mm machine gun served as an anti-aircraft and defensive weapon for decades.",
        reason: "Reliable heavy-calibre firepower against aircraft and light vehicles.",
        records: "Long-serving 12.7mm defensive machine gun."
    },
    "SVD Dragunov": {
        origin: "Soviet Union",
        type: "Sniper Rifle",
        caliber: "7.62x54mmR",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/SVD_Dragunov.jpg?width=400",
        history: "The SVD Dragunov armed Sri Lankan marksmen and sniper teams during the civil war.",
        reason: "Semi-automatic fire with superb accuracy at range.",
        records: "Standard-issue sniper rifle of infantry units."
    },
    "Type 85 Sniper": {
        origin: "China",
        type: "Sniper Rifle",
        caliber: "7.62x54mmR",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Type-85_Sniper_Rifle_@_PA_122nd_Anniversary_Caravan.jpg?width=400",
        history: "The Chinese Type 85 sniper rifle, a Dragunov variant, was issued to marksmen and special units.",
        reason: "Same capabilities as the Soviet SVD at lower cost.",
        records: "Chinese Dragunov variant in sniper service."
    },
    "Zastava M76": {
        origin: "Yugoslavia",
        type: "Sniper Rifle",
        caliber: "7.92x57mm Mauser",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Zastava_M76_Full_noBG.jpg?width=400",
        history: "The Zastava M76 sniper rifle served in Sri Lankan units during the conflict era.",
        reason: "Full-power Mauser round with proven accuracy.",
        records: "Balkan sniper rifle in limited service."
    },
    "Barrett M95": {
        origin: "United States",
        type: "Anti-Materiel Sniper Rifle",
        caliber: "12.7x99mm (.50 BMG)",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Barrett-M95-Grass.png?width=400",
        history: "The Barrett M95 bolt-action .50-calibre rifle provides Sri Lankan snipers with anti-materiel capability.",
        reason: "Engages vehicles, equipment and targets beyond 1,500m.",
        records: "Long-range anti-materiel rifle of sniper teams."
    },
    "Sako TRG-42": {
        origin: "Finland",
        type: "Sniper Rifle",
        caliber: ".338 Lapua Magnum",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Sako_TRG-42.jpg?width=400",
        history: "The Sako TRG-42 was acquired for elite sniper units needing extreme precision.",
        reason: "Sub-MOA accuracy with .338 Lapua reach.",
        records: "Precision sniper rifle of special forces."
    },
    "SSG 69": {
        origin: "Austria",
        type: "Sniper Rifle",
        caliber: "7.62x51mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Steyr_SSG_69.jpg?width=400",
        history: "The Steyr SSG 69 was among the first purpose-built sniper rifles in Sri Lankan service.",
        reason: "Known for outstanding accuracy from the 1970s onward.",
        records: "Classic police and military sniper rifle."
    },
    "RPG-7": {
        origin: "Soviet Union",
        type: "Rocket-Propelled Grenade Launcher",
        caliber: "40mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/ANA_soldier_with_RPG-7_in_2013-cropped.jpg?width=400",
        history: "The RPG-7 is the ubiquitous anti-armour weapon of Sri Lankan infantry, used against LTTE bunkers and vehicles.",
        reason: "Simple, powerful and effective against every battlefield target.",
        records: "Standard infantry anti-armour weapon."
    },
    "Type 69 RPG": {
        origin: "China",
        type: "Rocket-Propelled Grenade Launcher",
        caliber: "40mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Type_69_RPG_@_PA_122nd_Anniversary_Caravan.jpg?width=400",
        history: "The Chinese Type 69 RPG supplemented the RPG-7 in Sri Lankan service.",
        reason: "Improved sights and identical ammunition to the RPG-7.",
        records: "Chinese RPG variant in infantry service."
    },
    "9K111 Fagot (AT-4)": {
        origin: "Soviet Union",
        type: "Anti-Tank Guided Missile",
        caliber: "120mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/9K111_Fagot_mockup.jpg?width=400",
        history: "The 9K111 Fagot wire-guided missile gave Sri Lankan infantry a stand-off anti-armour punch.",
        reason: "Guided missile engages armour beyond RPG range.",
        records: "Wire-guided anti-tank missile of infantry units."
    },
    "9M113 Konkurs (AT-5)": {
        origin: "Soviet Union",
        type: "Anti-Tank Guided Missile",
        caliber: "135mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/AT-5_spandrel.JPG?width=400",
        history: "The heavier 9M113 Konkurs missile was deployed on launchers and armoured carriers.",
        reason: "Longer range and heavier warhead than the Fagot.",
        records: "Heavy anti-tank guided missile in service."
    },
    "SPG-9": {
        origin: "Soviet Union",
        type: "Recoilless Gun",
        caliber: "73mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Spg_9_from_libya.jpg?width=400",
        history: "The SPG-9 recoilless gun equipped Sri Lankan infantry and commando units.",
        reason: "Portable anti-armour firepower from a tripod.",
        records: "Crew-served 73mm recoilless gun."
    },
    "B-10": {
        origin: "Soviet Union",
        type: "Recoilless Rifle",
        caliber: "82mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/B-10-82mm-recoilles-rifle-batey-haosef-1-1.jpg?width=400",
        history: "The B-10 82mm recoilless rifle provided battalion-level direct fire support.",
        reason: "High-explosive firepower from a light carriage.",
        records: "Crew-served direct fire support weapon."
    },
    "2B14 Podnos": {
        origin: "Soviet Union",
        type: "Mortar",
        caliber: "82mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/2B14_Podnos_at_%22Engineering_Technologies_2010%22_forum.jpg?width=400",
        history: "The 2B14 Podnos 82mm mortar is a modern replacement for the M-41 series.",
        reason: "Lighter and faster into action than older mortars.",
        records: "Modern 82mm infantry mortar."
    },
    "M224 60mm Mortar": {
        origin: "United States",
        type: "Mortar",
        caliber: "60mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/M224_60mm_Mortar.jpg?width=400",
        history: "The M224 60mm light mortar supports infantry companies with rapid indirect fire.",
        reason: "Manportable firepower at company level.",
        records: "Company-level 60mm light mortar."
    },
    "M29 81mm Mortar": {
        origin: "United States",
        type: "Mortar",
        caliber: "81mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Mortar_M29.jpg?width=400",
        history: "The M29 81mm mortar was a standard battalion support weapon.",
        reason: "Heavier firepower than 60mm tubes at battalion level.",
        records: "Battalion-level 81mm mortar."
    },
    "M120 120mm Mortar": {
        origin: "United States",
        type: "Heavy Mortar",
        caliber: "120mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Soldiers_firing_a_M120_120mm_mortar_(Iraq).jpg?width=400",
        history: "The M120 120mm heavy mortar provides long-range fire support to mechanized units.",
        reason: "Near-artillery firepower at the unit level.",
        records: "Heavy mortar of mechanized infantry."
    },
    "M30 107mm Mortar": {
        origin: "United States",
        type: "Heavy Mortar",
        caliber: "107mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/M30_mortar_at_the_War_Remnants_Museum.jpg?width=400",
        history: "The M30 4.2-inch mortar served as a heavy battalion mortar.",
        reason: "Rifled tube for enhanced accuracy.",
        records: "Rifled 107mm heavy mortar."
    },
    "PM-43 120mm": {
        origin: "Soviet Union",
        type: "Heavy Mortar",
        caliber: "120mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/120-PM-43_Mortar.jpg?width=400",
        history: "The PM-43 120mm mortar was the standard heavy mortar of Soviet-aligned armies and saw extensive Sri Lankan service.",
        reason: "Hard-hitting 120mm firepower with a proven design.",
        records: "Standard 120mm mortar of infantry brigades."
    },
    "W86 120mm Mortar": {
        origin: "China",
        type: "Heavy Mortar",
        caliber: "120mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/W86.jpg?width=400",
        history: "The Chinese W86 120mm mortar is a modern copy of the PM-43 design.",
        reason: "Same calibre and role as the PM-43 with lighter build.",
        records: "Chinese-built 120mm mortar."
    },
    "SAM-16 Igla": {
        origin: "Soviet Union",
        type: "Man-Portable Air Defence System",
        caliber: "72mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/SA-16_and_SA-18_missiles_and_launchers.jpg?width=400",
        history: "The 9K310 Igla (SA-16) shoulder-launched missile defends Sri Lankan units against low-flying aircraft.",
        reason: "Fire-and-forget heat-seeking engagement of aircraft.",
        records: "Infantry air defence missile."
    },
    "T-55": {
        origin: "Soviet Union",
        type: "Main Battle Tank",
        caliber: "100mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Imperial_War_Museum_North_-_T-55_tank_1.jpg?width=400",
        history: "The T-55 was the first main battle tank of the Sri Lanka Army, delivered in 1991 to counter LTTE armour.",
        reason: "Simple, rugged 100mm-gun tank suited to the theatre.",
        records: "Sri Lanka's first main battle tank."
    },
    "T-55AM2": {
        origin: "Soviet Union",
        type: "Main Battle Tank",
        caliber: "100mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/T-55AM2_Tracks.JPG?width=400",
        history: "Upgraded T-55AM2 tanks were supplied in the 1990s with improved engines and fire control.",
        reason: "Modernized electronics and powerpack extend the T-55's usefulness.",
        records: "Upgraded variant of the T-55 fleet."
    },
    "T-55V": {
        origin: "Soviet Union",
        type: "Main Battle Tank",
        caliber: "100mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/T-55_4.jpg?width=400",
        history: "T-55V tanks arrived with add-on armour for the final offensives of the civil war.",
        reason: "Era-specific protection package for assault roles.",
        records: "Armoured T-55 variant in the final offensive."
    },
    "Type 59": {
        origin: "China",
        type: "Main Battle Tank",
        caliber: "100mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Type_59_tank_in_Military_Museum_of_the_Chinese_People%27s_Revolution_20180219.jpg?width=400",
        history: "Chinese Type 59 tanks supplemented the T-55 fleet in Sri Lankan armoured regiments.",
        reason: "Direct Chinese copy of the T-54A with parts commonality.",
        records: "Chinese-built main battle tank."
    },
    "Type 69-II": {
        origin: "China",
        type: "Main Battle Tank",
        caliber: "105mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Type_69-II_tank.jpg?width=400",
        history: "The Type 69-II with its 105mm gun gave the Sri Lanka Armoured Corps additional punch.",
        reason: "105mm firepower and night-fighting equipment.",
        records: "Chinese 105mm-gun tank in armoured service."
    },
    "BMP-1": {
        origin: "Soviet Union",
        type: "Infantry Fighting Vehicle",
        caliber: "73mm / 7.62mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/BMP-1_Zlot_Dar%C5%82owo_2009.JPG?width=400",
        history: "BMP-1 infantry fighting vehicles were delivered to the Sri Lanka Army in the 1990s.",
        reason: "Carries infantry into battle under armour with its own firepower.",
        records: "First IFV of the Sri Lanka Army."
    },
    "BMP-2": {
        origin: "Soviet Union",
        type: "Infantry Fighting Vehicle",
        caliber: "30mm / 7.62mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Ukrainian_BMP-2_IFV_tank_trew.jpg?width=400",
        history: "The BMP-2 with its 30mm autocannon was acquired alongside the BMP-1.",
        reason: "30mm autocannon improves anti-infantry and anti-helicopter capability.",
        records: "30mm-armed infantry fighting vehicle."
    },
    "BMP-2K": {
        origin: "Soviet Union",
        type: "Command IFV",
        caliber: "30mm / 7.62mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Ukrainian_BMP-2_IFV_tank_trew.jpg?width=400",
        history: "The BMP-2K command variant controls battalions from the front line.",
        reason: "Extra radios turn the IFV into a mobile command post.",
        records: "Command variant of the BMP-2."
    },
    "Type 86 ICV": {
        origin: "China",
        type: "Infantry Fighting Vehicle",
        caliber: "73mm / 7.62mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Chinese_Type86.jpg?width=400",
        history: "The Chinese Type 86 is a locally produced BMP-1 derivative used by mechanized infantry.",
        reason: "BMP-1 layout with Chinese manufacture.",
        records: "Chinese BMP-1 derivative in infantry service."
    },
    "BTR-80": {
        origin: "Soviet Union",
        type: "Armoured Personnel Carrier",
        caliber: "14.5mm / 7.62mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/BTR-80_of_the_Hungarian_Army.jpg?width=400",
        history: "The BTR-80 wheeled APC is the standard armoured transport of Sri Lankan mechanized battalions.",
        reason: "Fast, amphibious wheeled transport for infantry.",
        records: "Standard wheeled armoured personnel carrier."
    },
    "BTR-80A": {
        origin: "Russia",
        type: "Armoured Personnel Carrier",
        caliber: "30mm / 7.62mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/BTR-80A_(3).jpg?width=400",
        history: "The BTR-80A replaces the open turret with a 30mm autocannon turret.",
        reason: "30mm firepower while carrying a full infantry squad.",
        records: "Autocannon-armed version of the BTR-80."
    },
    "BTR-82A": {
        origin: "Russia",
        type: "Armoured Personnel Carrier",
        caliber: "30mm / 7.62mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/BTR-82A_turret_-_June_2023.jpg?width=400",
        history: "The BTR-82A modernization added an electro-optical sight and stabilizer to the 30mm turret.",
        reason: "Modernized optics make the 30mm gun accurate on the move.",
        records: "Modernized 30mm wheeled APC."
    },
    "WZ-551": {
        origin: "China",
        type: "Armoured Personnel Carrier",
        caliber: "12.7mm / 7.62mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Armed_Police_armored_vehicles_in_Urumqi_(3).jpg?width=400",
        history: "Chinese WZ-551 6x6 armoured personnel carriers serve in Sri Lankan peacekeeping and mechanized units.",
        reason: "Large 6x6 hull with excellent road mobility.",
        records: "6x6 armoured personnel carrier."
    },
    "WMZ-551A": {
        origin: "China",
        type: "Armoured Personnel Carrier",
        caliber: "12.7mm / 7.62mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Armed_Police_armored_vehicles_in_Urumqi_(3).jpg?width=400",
        history: "The WMZ-551A export variant of the WZ-551 family equips UN peacekeeping contingents.",
        reason: "Export designation of the proven WZ-551 hull.",
        records: "Export variant in peacekeeping service."
    },
    "BRDM-2": {
        origin: "Soviet Union",
        type: "Reconnaissance Vehicle",
        caliber: "14.5mm / 7.62mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/BRDM-2_in_Korolyov_Moscow_Oblast.jpg?width=400",
        history: "The BRDM-2 amphibious scout car conducts reconnaissance and command tasks.",
        reason: "Fast, amphibious and amphibious-capable scouting.",
        records: "Standard reconnaissance vehicle."
    },
    "MT-LB": {
        origin: "Soviet Union",
        type: "Tracked Carrier",
        caliber: "7.62mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Soviet_MT-LB.JPEG?width=400",
        history: "The MT-LB tracked carrier moves troops and supplies across swamp and jungle terrain.",
        reason: "Excellent cross-country performance in soft ground.",
        records: "Versatile tracked logistics carrier."
    },
    "ZSL-92": {
        origin: "China",
        type: "Wheeled Armoured Vehicle",
        caliber: "25mm / 7.62mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/PLA_Hong_Kong_Garrison_ZSL92B.JPG?width=400",
        history: "The ZSL-92 wheeled armoured vehicle brings autocannon firepower to mechanized battalions.",
        reason: "25mm turret on a fast 6x6 chassis.",
        records: "Autocannon-armed wheeled IFV."
    },
    "Type 85 AFV": {
        origin: "China",
        type: "Armoured Fighting Vehicle",
        caliber: "12.7mm / 7.62mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/ChineseType85C2Veh.jpg?width=400",
        history: "The Type 85 tracked armoured vehicle supports infantry with heavy firepower.",
        reason: "Tracked chassis with heavy armament.",
        records: "Tracked armoured fighting vehicle."
    },
    "OT-64 SKOT": {
        origin: "Czechoslovakia / Poland",
        type: "Armoured Personnel Carrier",
        caliber: "7.62mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/OT-64_SKOT.jpg?width=400",
        history: "The OT-64 SKOT 8x8 APC served in smaller numbers in Sri Lankan mechanized units.",
        reason: "8x8 mobility with amphibious ability.",
        records: "8x8 armoured personnel carrier."
    },
    "Panhard M3": {
        origin: "France",
        type: "Armoured Personnel Carrier",
        caliber: "7.62mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/UAE_Army_Panhard_M3_at_IDEX_2023.jpg?width=400",
        history: "French Panhard M3 APCs were among the first armoured carriers of the Sri Lanka Army.",
        reason: "Light, simple wheeled transport for internal security.",
        records: "Early French APC in Sri Lankan service."
    },
    "Mahindra Marksman": {
        origin: "India",
        type: "Armoured Personnel Carrier",
        caliber: "7.62mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Mahindra_Marksman_Delhi_Police_New_Delhi.jpg?width=400",
        history: "The Mahindra Marksman is an Indian APC used by Sri Lankan police special units.",
        reason: "Budget armoured transport based on a commercial chassis.",
        records: "Indian-built APC for special operations."
    },
    "Buffalo MPCV": {
        origin: "South Africa",
        type: "Mine-Protected Vehicle",
        caliber: "7.62mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Buffalo_mine-protected_vehicle.jpg?width=400",
        history: "The Buffalo mine-protected vehicle was developed from South African mine-resistant designs.",
        reason: "V-hull and blast protection against landmines.",
        records: "Mine-protected armoured vehicle."
    },
    "BMC Kirpi": {
        origin: "Turkey",
        type: "Mine-Resistant Armoured Vehicle",
        caliber: "12.7mm / 7.62mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/BMC_Kirpi_II_UA.jpg?width=400",
        history: "Turkish BMC Kirpi MRAPs were procured to protect Sri Lankan troops from IEDs.",
        reason: "Mine and blast protection with heavy crew comfort.",
        records: "Turkish mine-resistant vehicle in service."
    },
    "Unibuffel": {
        origin: "Sri Lanka",
        type: "Mine-Protected APC",
        caliber: "7.62mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/SLA_UniBuffel.JPG?width=400",
        history: "The Unibuffel is a Sri Lankan-built mine-protected APC used for counter-terrorism and high-risk operations.",
        reason: "V-hull mine protection developed from local experience.",
        records: "Locally built mine-protected APC."
    },
    "Unicorn APC": {
        origin: "Sri Lanka",
        type: "Armoured Personnel Carrier",
        caliber: "7.62mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Sri_Lanka_Military_0197.jpg?width=400",
        history: "The Unicorn APC is a locally designed armoured carrier used by the STF and army.",
        reason: "Local design built for jungle and urban operations.",
        records: "Sri Lankan-built armoured carrier."
    },
    "Unicorn": {
        origin: "Sri Lanka",
        type: "Armoured Personnel Carrier",
        caliber: "7.62mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Sri_Lanka_Military_0204.jpg?width=400",
        history: "The base Unicorn APC platform is the foundation of Sri Lanka's local armoured vehicle family.",
        reason: "Modular local design for multiple roles.",
        records: "Base model of the Unicorn family."
    },
    "Unicob": {
        origin: "Sri Lanka",
        type: "Armoured Personnel Carrier",
        caliber: "7.62mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Unicob_Mine-Resistant_Ambush-Protected_Vehicle_(MRAPV)-_Sri_Lanka_Army.jpg?width=400",
        history: "The Unicob is an armoured variant of the local Unicorn family built for internal security.",
        reason: "Cob-built armour sharing the Unicorn chassis.",
        records: "Local armoured variant in police and army service."
    },
    "UniCOLT": {
        origin: "Sri Lanka",
        type: "Armoured Personnel Carrier",
        caliber: "7.62mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Sri_Lanka_Military_0240.jpg?width=400",
        history: "The UniCOLT is a further local armoured vehicle derived from the Unicorn programme.",
        reason: "Continued local development of armoured hulls.",
        records: "Local armoured vehicle variant."
    },
    "AVALON 6x6": {
        origin: "Sri Lanka",
        type: "Armoured Personnel Carrier",
        caliber: "7.62mm",
        img: "none",
        history: "The AVALON 6x6 is a locally produced armoured personnel carrier.",
        reason: "Six-wheel drive for better payload and mobility.",
        records: "Local 6x6 armoured carrier."
    },
    "AIMOV 4x4": {
        origin: "Sri Lanka",
        type: "Armoured Vehicle",
        caliber: "7.62mm",
        img: "none",
        history: "The AIMOV 4x4 is a local armoured utility vehicle built for patrol duties.",
        reason: "Compact 4x4 armour for road patrols.",
        records: "Local 4x4 armoured patrol vehicle."
    },
    "Ferret Scout Car": {
        origin: "United Kingdom",
        type: "Scout Car",
        caliber: "7.62mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Ferret-Scout-Car-18EA24.jpg?width=400",
        history: "The Ferret scout car was a long-serving armoured reconnaissance vehicle of the Sri Lanka Army.",
        reason: "Fast, small armoured recce vehicle.",
        records: "Classic British scout car in long service."
    },
    "P2 Armored Car": {
        origin: "Sri Lanka / UK",
        type: "Armoured Car",
        caliber: "7.62mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/P2_APC_in_KKIP_website.jpg?width=400",
        history: "The P2 armoured car is used for riot response, VIP escorts and high-risk warrants.",
        reason: "Armoured response vehicle for urban security.",
        records: "Armoured response vehicle."
    },
    "Land Rover Defender": {
        origin: "United Kingdom",
        type: "Utility Vehicle",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Land_Rover_Defender_110_Station_Wagon_2016_-_rear.jpg?width=400",
        history: "The Land Rover Defender is the iconic utility vehicle of the Sri Lanka Army and police.",
        reason: "Go-anywhere off-road capability for every role.",
        records: "Most widely used military utility vehicle."
    },
    "Mercedes Unimog": {
        origin: "Germany",
        type: "Utility Truck",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Unimog_S_404_(Sp_2014-06-15).JPG?width=400",
        history: "The Mercedes Unimog provides heavy off-road transport for troops and equipment.",
        reason: "Extreme off-road capability with truck payload.",
        records: "General-purpose tactical truck."
    },
    "RM-70": {
        origin: "Czechoslovakia",
        type: "Multiple Rocket Launcher",
        caliber: "122mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/RM-70_Modular_227mm_GMRLS_SIAF-2022.jpg?width=400",
        history: "The RM-70 122mm multiple rocket launcher gives the artillery brigade massive saturation firepower.",
        reason: "Forty 122mm rockets laid down in seconds.",
        records: "Multiple rocket launcher of the artillery."
    },
    "KRAZ-6322": {
        origin: "Ukraine",
        type: "Heavy Truck",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Kraz_6322.jpg?width=400",
        history: "Ukrainian KRAZ-6322 heavy trucks haul artillery, cargo and troops across rough terrain.",
        reason: "Six-wheel drive with high payload capacity.",
        records: "Heavy logistics truck."
    },
    "Type 63": {
        origin: "China",
        type: "Light Amphibious Tank",
        caliber: "85mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Type_63_tank_-_above.jpg?width=400",
        history: "The Chinese Type 63 light amphibious tank supports river-crossing and lagoon operations.",
        reason: "Fully amphibious with an 85mm gun.",
        records: "Amphibious light tank."
    },
    "MTU-55": {
        origin: "Czechoslovakia",
        type: "Armoured Bridgelayer",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/MT-55_Militärtag_-_Uffenheim_-_2015_.jpg?width=400",
        history: "The MTU-55 armoured bridgelayer opens routes for tanks across canals and rivers.",
        reason: "Scissors bridge launched under armour.",
        records: "Armoured vehicle-launched bridge."
    },
    "BREM-K": {
        origin: "Russia",
        type: "Armoured Recovery Vehicle",
        caliber: "7.62mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/BREM-K_-_TankBiathlon14part2-04.jpg?width=400",
        history: "The BREM-K recovery vehicle tows disabled wheeled vehicles from the battlefield.",
        reason: "BTR-80-based crane and winch for recovery work.",
        records: "Wheeled armoured recovery vehicle."
    },
    "TATA 1313": {
        origin: "India",
        type: "Utility Truck",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/INDIAN_ARMY_TATA_1210_FIELD_ARTILLERY_TRACTOR.jpg?width=400",
        history: "TATA 1313 trucks are standard logistics vehicles of the Sri Lanka Army.",
        reason: "Rugged Indian military trucks for troop and cargo transport.",
        records: "General service logistics truck."
    },
    "TATA 1613": {
        origin: "India",
        type: "Heavy Utility Truck",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/TATA_1613_truck,_Bangladesh._(29269171893).jpg?width=400",
        history: "The larger TATA 1613 hauls heavier loads across the army's supply network.",
        reason: "Higher payload for artillery and engineer units.",
        records: "Heavy-duty logistics truck."
    },
    "TATA 709": {
        origin: "India",
        type: "Light Truck",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Tata-709e.jpg?width=400",
        history: "TATA 709 light trucks serve as personnel carriers and support vehicles.",
        reason: "Lightweight transport for quick movement.",
        records: "Light personnel and support truck."
    },
    "Fuso Canter": {
        origin: "Japan",
        type: "Light Truck",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Mitsubishi_Fuso_Canter_Guts_front.png?width=400",
        history: "Mitsubishi Fuso Canter light trucks are used for utility and workshop duties.",
        reason: "Compact, economical light trucks for support roles.",
        records: "Utility light truck."
    },
    "Falcon": {
        origin: "France",
        type: "VIP Jet",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Dassault_Falcon_8X,_Paris_Air_Show_2019,_Le_Bourget_(SIAE8623).jpg?width=400",
        history: "The Dassault Falcon jet transports the country's leadership and VIP delegations.",
        reason: "Fast executive jet for official travel.",
        records: "VIP transport jet."
    },
    "Land Cruiser": {
        origin: "Japan",
        type: "Utility SUV",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/??????,_Toyota_Land_Cruiser_??_????_??-?????????????.jpg?width=400",
        history: "The Toyota Land Cruiser is the premier command and patrol SUV across all services.",
        reason: "Legendary off-road durability for commanders.",
        records: "Standard command vehicle."
    },
    "Mitsubishi L200": {
        origin: "Japan",
        type: "Utility Pickup",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Mitsubishi_L200_(2019)_DSC_9302.jpg?width=400",
        history: "Mitsubishi L200 pickups serve in patrol and utility roles.",
        reason: "Dependable pickups for general duties.",
        records: "General utility pickup."
    },
    "Toyota HiAce": {
        origin: "Japan",
        type: "Utility Van",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Älterer_Toyota_HiAce.jpg?width=400",
        history: "The Toyota HiAce is a high-roof utility van used for staff transport and as a field medical ambulance.",
        reason: "The HiAce's high roof and boxy layout made it easy to convert for medical and staff roles.",
        records: "Staff transport and field medical ambulance van."
    },
    "Various Engineering Vehicles": {
        origin: "Various",
        type: "Engineer Vehicles",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/IDF-Puma-by-Zachi-Evenor.jpg?width=400",
        history: "Sri Lanka Engineers operate bulldozers, excavators, bridging and earth-moving equipment.",
        reason: "Heavy machinery keeps routes and camps operational.",
        records: "Combat engineer plant and equipment."
    },
    "Logistics & Support Vehicles": {
        origin: "Various",
        type: "Logistics Vehicles",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Logistics_Vehicle_System_Replacement_Mark-15_Recovery_Vehicle.jpg?width=400",
        history: "The logistics corps operates fuel bowsers, water tankers, ambulances and recovery vehicles.",
        reason: "Sustained operations depend on the logistics fleet.",
        records: "Supply, fuel and recovery fleet."
    },
    "Arrow Class Patrol": {
        origin: "Sri Lanka",
        type: "Patrol Craft",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Cedric-Class_Patrol_Boat.jpg?width=400",
        history: "The locally built Arrow class patrol craft conducts coastal patrols and interception duties.",
        reason: "Fast, shallow-draft boats for coastal work.",
        records: "Sri Lankan-built coastal patrol craft."
    },
    "Bay Class Gunboat": {
        origin: "Sri Lanka",
        type: "Gunboat",
        caliber: "20mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/USS_Green_Bay_(PG-101)_underway_c1970.jpg?width=400",
        history: "Bay class gunboats give the Navy a fast gun platform for coastal defence.",
        reason: "Gun-armed craft for shore and sea interdiction.",
        records: "Coastal gunboat class."
    },
    "Shanghai Class Gunboat": {
        origin: "China",
        type: "Gunboat",
        caliber: "37mm / 25mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/2014_coast_guard_ship_type_062_built_in_Romania.jpg?width=400",
        history: "Chinese-built Shanghai class (Type 062) gunboats served in Sri Lanka Navy coastal patrols.",
        reason: "Reliable Chinese gunboats for coastal defence.",
        records: "Chinese coastal gunboat."
    },
    "Super Dvora FAC": {
        origin: "Israel",
        type: "Fast Attack Craft",
        caliber: "25mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Super_Dvora_Mk3.JPG?width=400",
        history: "The Super Dvora Mk3 fast attack craft was the Navy's premier gunboat during the civil war.",
        reason: "High speed and gun armament for sea control.",
        records: "Fast attack craft of the Sri Lanka Navy."
    },
    "Saryu Class AOPV": {
        origin: "India",
        type: "Advanced Offshore Patrol Vessel",
        caliber: "30mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/SLNS_Sayurala(P623).jpg?width=400",
        history: "The Saryu class offshore patrol vessels, led by SLNS Sayurala, patrol Sri Lanka's deep-water EEZ.",
        reason: "Long endurance blue-water patrol capability.",
        records: "Advanced offshore patrol vessels."
    },
    "Sukanya Class OPV": {
        origin: "India",
        type: "Offshore Patrol Vessel",
        caliber: "40mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/INS_Jalashwa_with_INS_Kolkata_and_Sukanya-class_OPV_en-route_to_Maldives.jpg?width=400",
        history: "Indian-built Sukanya class OPVs are used for EEZ patrol and humanitarian missions.",
        reason: "Endurance patrol with helicopter support.",
        records: "Offshore patrol vessels of Indian construction."
    },
    "Yuhai Yunnan Landing Craft": {
        origin: "China",
        type: "Landing Craft",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Yunnan_Class_067_general_purpose_landing_craft.jpg?width=400",
        history: "Yunnan class landing craft move troops and supplies to coastal areas without harbours.",
        reason: "Beach-landing capability for amphibious logistics.",
        records: "Amphibious logistics landing craft."
    },
    "SLNS Gajabahu": {
        origin: "United States",
        type: "Offshore Patrol Vessel",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/USCGC_Sherman_(WHEC-720)_underway.JPG?width=400",
        history: "SLNS Gajabahu, a former US Coast Guard cutter, serves as the Navy's flagship patrol vessel.",
        reason: "Large cutter hull ideal for long patrols and command.",
        records: "Flagship of the Sri Lanka Navy."
    },
    "SLNS Nandimithra": {
        origin: "Sri Lanka",
        type: "Fast Gunboat",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Sri_Lanka_70th_Independence_-_Navy_(3).jpg?width=400",
        history: "SLNS Nandimithra is a Sri Lankan-built fast gunboat of the naval strike flotilla.",
        reason: "Locally built fast attack craft.",
        records: "Sri Lankan-built gunboat."
    },
    "SLNS Parakramabahu": {
        origin: "China",
        type: "Offshore Patrol Vessel",
        caliber: "37mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/P_625_vessel_taken_over_from_the_People%27s_Republic_of_China_on_05th_June_2019.jpg?width=400",
        history: "SLNS Parakramabahu (P625), a Chinese-built offshore patrol vessel, was commissioned in June 2019.",
        reason: "Long-range patrol and disaster relief capability.",
        records: "Chinese-built OPV of the Sri Lanka Navy."
    },
    "Gabriel II": {
        origin: "Israel",
        type: "Anti-Ship Missile",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Navy_Museum_080621_Gabriel_01.jpg?width=400",
        history: "The Gabriel II sea-skimming missile armed Sri Lankan fast attack craft against surface targets.",
        reason: "Sea-skimming anti-ship missile for fast craft.",
        records: "Ship-launched anti-ship missile."
    },
    "SY-1A": {
        origin: "China",
        type: "Anti-Ship Missile",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/SY-1_Missile_20170919.jpg?width=400",
        history: "The Chinese SY-1A surface-to-surface missile armed Sri Lankan missile craft.",
        reason: "Chinese anti-ship missile for naval strike craft.",
        records: "Ship-to-ship missile system."
    },
    "OTO Melara 76mm": {
        origin: "Italy",
        type: "Naval Gun",
        caliber: "76mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Oto_Melara_76_mm_Gun.jpg?width=400",
        history: "The OTO Melara 76mm rapid-fire gun is the main gun of larger Sri Lankan naval vessels.",
        reason: "Very high rate of fire against surface and air targets.",
        records: "Main naval gun of the fleet."
    },
    "Mark 92 FCS": {
        origin: "United States",
        type: "Fire Control System",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/FCS_MK_92_marketing_brochure_-_back_side.jpg?width=400",
        history: "The Mark 92 fire control system directs the guns of Sri Lankan naval vessels.",
        reason: "Radar-guided fire control for naval guns.",
        records: "Naval fire control system."
    },
    "Mini Typhoon": {
        origin: "Israel",
        type: "Remote Weapon Station",
        caliber: "12.7mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Typhoon25mm001.jpg?width=400",
        history: "The Mini Typhoon remote weapon station arms Sri Lankan patrol vessels with stabilized firepower.",
        reason: "Electro-optically stabilized gun for small craft.",
        records: "Stabilized naval gun mount."
    },
    "Typhoon RNWS": {
        origin: "Israel",
        type: "Remote Weapon Station",
        caliber: "12.7mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Typhoon_RWS_-_Front_View.jpg?width=400",
        history: "The Typhoon remotely operated naval weapon station equips Sri Lankan fast attack craft.",
        reason: "Remote-controlled heavy machine gun for sea duty.",
        records: "Remote naval weapon station."
    },
    "PJ33A 100mm": {
        origin: "China",
        type: "Naval Gun",
        caliber: "100mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Chinese_Type_79A_100mm_turret.jpg?width=400",
        history: "The PJ33A 100mm naval gun is fitted to Chinese-built Sri Lankan patrol vessels.",
        reason: "Heavy-calibre naval gun for surface engagements.",
        records: "100mm naval gun system."
    },
    "Type 76A": {
        origin: "China",
        type: "Naval Anti-Aircraft Gun",
        caliber: "37mm",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Type_76A_37mm_gun.png?width=400",
        history: "The Type 76A twin 37mm naval gun provides close-in air defence on Sri Lankan ships.",
        reason: "Twin autocannon for close-range air defence.",
        records: "Twin 37mm naval anti-aircraft gun."
    },
    "AN-32": {
        origin: "Ukraine",
        type: "Transport Aircraft",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Antonov_An-32_9Q-CAC.jpg?width=400",
        history: "The Antonov An-32 is the workhorse transport aircraft of the Sri Lanka Air Force.",
        reason: "Hot-and-high capable transport for troops and cargo.",
        records: "Main transport aircraft of the SLAF."
    },
    "Beechcraft Super King Air B200": {
        origin: "United States",
        type: "Utility Aircraft",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/2017-09-20_Norlandair_Super_King_Air_B200_(TF-NLB),_at_Nuuk_Airport.jpg?width=400",
        history: "The Super King Air B200 serves as a VIP and utility transport of the SLAF.",
        reason: "Fast turboprop for official transport and liaison.",
        records: "VIP and liaison aircraft."
    },
    "Bell 206 JetRanger": {
        origin: "United States",
        type: "Utility Helicopter",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/LAPD_Bell_206_Jetranger.jpg?width=400",
        history: "The Bell 206 JetRanger has served as a training and utility helicopter of the SLAF.",
        reason: "Simple turbine helicopter for training and light tasks.",
        records: "Trainer and utility helicopter."
    },
    "Bell 212 Twin Huey": {
        origin: "United States",
        type: "Utility Helicopter",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Bell_UH-1N_Twin_Huey_3-view_line_drawing.png?width=400",
        history: "The Bell 212 Twin Huey transported troops and conducted casualty evacuation.",
        reason: "Twin-engine reliability over the earlier single-engine Hueys.",
        records: "Twin-engine utility helicopter."
    },
    "Bell 412": {
        origin: "United States",
        type: "Utility Helicopter",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/CC-dhh_(Bell_412).jpg?width=400",
        history: "The Bell 412 is the SLAF's modern four-blade utility helicopter.",
        reason: "Four-blade rotor for better lift and smoothness.",
        records: "Modern utility helicopter of the SLAF."
    },
    "C-130 Hercules": {
        origin: "United States",
        type: "Heavy Transport Aircraft",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/20180512_C-130J_Super_Hercules_Dyess_AFB_Air_Show_2018_1.jpg?width=400",
        history: "The C-130 Hercules gives the SLAF strategic airlift for troops, vehicles and disaster relief.",
        reason: "Heavy cargo airlift from rough runways.",
        records: "Heavy transport aircraft of the SLAF."
    },
    "Chengdu F-7": {
        origin: "China",
        type: "Fighter Aircraft",
        caliber: "30mm / missiles",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Chengdu_F-7_-_Trainer_Variant_of_F-7_-_F934_-_Bangladesh_Air_Force_-_VGHS.jpg?width=400",
        history: "The Chengdu F-7 (MiG-21 derivative) was the SLAF's main interceptor for decades.",
        reason: "Mach 2 interceptor with simple MiG-21 lineage.",
        records: "Primary fighter of the SLAF."
    },
    "Dornier 228": {
        origin: "Germany",
        type: "Maritime Patrol Aircraft",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Do-228_NXT,_ILA_2024,_Schoenefeld_(ILA45438).jpg?width=400",
        history: "The Dornier 228 conducts maritime surveillance and coastal patrols for the SLAF.",
        reason: "Long-loiter turboprop with excellent visibility.",
        records: "Maritime patrol aircraft."
    },
    "Harbin Y-12": {
        origin: "China",
        type: "Utility Transport",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Soldiers_shaking_hands_near_Harbin_Y-12_turboprop_utility_aircraft_of_Kenya_Air_Force.jpg?width=400",
        history: "The Harbin Y-12 turboprop serves as a light utility transport of the SLAF.",
        reason: "Short take-off transport for small airfields.",
        records: "Light utility transport aircraft."
    },
    "Hongdu K-8 Karakorum": {
        origin: "China / Pakistan",
        type: "Jet Trainer / Light Attack",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Sudan_Air_Force_Hongdu_K-8_Karakorum_MTI-1.jpg?width=400",
        history: "The Hongdu K-8 Karakorum is the SLAF's advanced jet trainer.",
        reason: "Jet training with light attack capability.",
        records: "Advanced jet trainer of the SLAF."
    },
    "IAI Kfir": {
        origin: "Israel",
        type: "Fighter Aircraft",
        caliber: "30mm / missiles",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/A_SLAF_IAI_Kfir_Fighter_Jet.jpg?width=400",
        history: "The IAI Kfir gave the SLAF a modern multi-role fighter, in service since the 1990s.",
        reason: "Mach 2+ multi-role fighter with Israeli avionics.",
        records: "Front-line multi-role fighter of the SLAF."
    },
    "Mil Mi-17": {
        origin: "Russia",
        type: "Transport Helicopter",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Mil_Mi-17_Helicopter_-_Bangladesh_Air_Force_-_748_-_VGHS.jpg?width=400",
        history: "The Mil Mi-17 is the SLAF's main medium transport helicopter.",
        reason: "Rugged Russian helicopter for troops and casualties.",
        records: "Main transport helicopter of the SLAF."
    },
    "Mil Mi-24": {
        origin: "Soviet Union",
        type: "Attack Helicopter",
        caliber: "12.7mm / rockets",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/20110827_Mi-24_Radom_Air_Show_8611.jpg?width=400",
        history: "The Mi-24 Hind attack helicopter provided fire support in the final campaigns of the civil war.",
        reason: "Armoured helicopter gunship with heavy weapon load.",
        records: "Attack helicopter of the SLAF."
    },
    "Mil Mi-35": {
        origin: "Russia",
        type: "Attack Helicopter",
        caliber: "12.7mm / rockets",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Mi-35_8044.JPG?width=400",
        history: "The Mi-35 export variant of the Mi-24 remains in SLAF service.",
        reason: "Modernized Hind for day and night attack.",
        records: "Export attack helicopter of the SLAF."
    },
    "Xian MA60": {
        origin: "China",
        type: "Passenger Transport",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Xi%27an_MA60_at_Rurrenabaque_Airport.jpg?width=400",
        history: "The Xian MA60 turboprop transports personnel and supplies for the SLAF.",
        reason: "Twin turboprop for personnel movement.",
        records: "Passenger transport aircraft."
    },
    "IAI Searcher": {
        origin: "Israel",
        type: "Unmanned Aerial Vehicle",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/IAI_Searcher._I.jpg?width=400",
        history: "The IAI Searcher UAV conducts long-endurance surveillance and target acquisition.",
        reason: "Long flight endurance for intelligence gathering.",
        records: "Reconnaissance UAV of the SLAF."
    },
    "Japan UAVs": {
        origin: "Japan",
        type: "Unmanned Aerial Vehicle",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Circular_Flying_Object,_a_kind_of_UAV.jpg?width=400",
        history: "Japanese-built UAVs serve in the SLAF's expanding unmanned surveillance fleet.",
        reason: "Compact UAVs for tactical surveillance.",
        records: "Japanese UAV systems."
    },
    "Blue Horizon": {
        origin: "Sri Lanka",
        type: "Fast Patrol Craft",
        caliber: "—",
        img: "none",
        history: "The Blue Horizon is a locally built fast patrol craft of the Sri Lanka Navy.",
        reason: "Local construction for coastal patrol duties.",
        records: "Sri Lankan-built patrol craft."
    },
    "Vimana SII": {
        origin: "Sri Lanka",
        type: "Unmanned Aerial Vehicle",
        caliber: "—",
        img: "none",
        history: "The Vimana SII is a locally developed surveillance UAV programme.",
        reason: "Domestic UAV development for surveillance.",
        records: "Sri Lankan indigenous UAV."
    },
    "HFSWR-503": {
        origin: "China",
        type: "Over-The-Horizon Radar",
        caliber: "—",
        img: "none",
        history: "The HFSWR-503 high-frequency surface wave radar watches for surface targets beyond the horizon.",
        reason: "Over-the-horizon detection of small craft.",
        records: "Coastal surveillance radar."
    },
    "INDRA Mk II": {
        origin: "India",
        type: "Air Surveillance Radar",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Indra-I_radar_SriLanka.JPG?width=400",
        history: "The Indian INDRA Mk II low-level radar covers the SLAF's air picture.",
        reason: "Low-level air surveillance and reporting.",
        records: "Low-level air defence radar."
    },
    "JY-11": {
        origin: "China",
        type: "Air Surveillance Radar",
        caliber: "—",
        img: "none",
        history: "The JY-11 radar provides medium-range air surveillance for the SLAF.",
        reason: "Mobile medium-range air search radar.",
        records: "Medium-range surveillance radar."
    },
    "YLC-18": {
        origin: "China",
        type: "Air Defence Radar",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Sri_Lanka_Military_0052.jpg?width=400",
        history: "The YLC-18 low-altitude search radar covers the island's air defence network.",
        reason: "Low-altitude detection for air defence weapons.",
        records: "Low-altitude air defence radar."
    },
    "Integrated AD Radar Network": {
        origin: "Sri Lanka",
        type: "Air Defence Network",
        caliber: "—",
        img: "https://en.wikipedia.org/wiki/Special:Redirect/file/Bangladesh_Air_Force_YLC_6_Radar_Inauguration_Cox%27s_Bazar_(PID-0057363).jpg?width=400",
        history: "The Integrated Air Defence Radar Network ties SLAF radars into a single national air picture.",
        reason: "Networking radars gives a complete island air picture.",
        records: "National integrated air defence network."
    },
    "Pidurutalagala ADOC": {
        origin: "Sri Lanka",
        type: "Air Defence Operations Centre",
        caliber: "—",
        img: "none",
        history: "The Pidurutalagala ADOC at Sri Lanka's highest peak coordinates national air defence.",
        reason: "High-altitude site for long-range radar coverage.",
        records: "National air defence operations centre."
    },
    "Mirigama ADOC": {
        origin: "Sri Lanka",
        type: "Air Defence Operations Centre",
        caliber: "—",
        img: "none",
        history: "The Mirigama ADOC is a secondary air defence operations centre of the SLAF.",
        reason: "Backup command post for air defence.",
        records: "Secondary air defence centre."
    }
}

function openWeaponModal(name, pageImg) {
    var w = WEAPONS[name];
    if (!w) return;
    if (!pageImg) {
        try {
            var t = window.event ? window.event.currentTarget : null;
            if (t) {
                if (t.tagName === 'IMG' && t.src && (!t.complete || t.naturalWidth > 0)) pageImg = t.src;
                else {
                    var im = t.querySelector ? t.querySelector('img') : null;
                    if (im && im.src && (!im.complete || im.naturalWidth > 0)) pageImg = im.src;
                }
            }
        } catch (e) {}
    }
    var initials = name.split(/[\s\-]+/).filter(function(p) { return p; }).slice(0, 2).map(function(p) { return p[0]; }).join('').toUpperCase();
    var img = '';
    var src = '';
    if (pageImg && pageImg.indexOf('none') === -1) {
        src = pageImg.replace(/width=\d+/, 'width=800');
    } else if (w.img && w.img !== 'none') {
        src = w.img;
    }
    if (src) {
        img = '<img src="' + src + '" alt="' + name + '" class="w-full h-52 object-cover rounded-xl border border-military-700 mb-4" onerror="this.onerror=null;this.style.display=\'none\'">';
    }
    var s = function(t, txt) {
        return txt ? '<div class="mb-4"><div class="text-[10px] font-mono text-military-500 tracking-[0.25em] mb-1">' + t + '</div><p class="text-sm text-gray-300 leading-relaxed">' + txt + '</p></div>' : '';
    };
    document.getElementById('weaponModalContent').innerHTML =
        '<div class="flex items-center gap-4 mb-5">' +
        '<div class="w-14 h-14 rounded-full bg-military-900 border border-military-600 flex items-center justify-center font-heading font-bold text-military-300 text-lg shrink-0">' + initials + '</div>' +
        '<div><h3 class="font-heading font-bold text-xl text-white tracking-wide">' + name + '</h3>' +
        '<p class="text-xs font-mono text-military-400 tracking-widest">' + (w.type || '') + '</p></div></div>' +
        img +
        '<div class="grid grid-cols-2 gap-3 mb-5">' +
        '<div class="bg-[#0c120c] border border-military-800 rounded-lg p-3"><div class="text-[10px] font-mono text-military-500 tracking-widest mb-1">ORIGIN</div><div class="text-sm text-gray-200">' + (w.origin || '—') + '</div></div>' +
        '<div class="bg-[#0c120c] border border-military-800 rounded-lg p-3"><div class="text-[10px] font-mono text-military-500 tracking-widest mb-1">CALIBER</div><div class="text-sm text-gray-200">' + (w.caliber || '—') + '</div></div>' +
        '</div>' +
        s('HISTORY', w.history) +
        s('WHY IT IS USED', w.reason) +
        s('SERVICE RECORD', w.records);
    var m = document.getElementById('weaponModal');
    m.classList.remove('hidden');
    m.classList.add('active');
    lockScroll();
}

function closeWeaponModal() {
    var m = document.getElementById('weaponModal');
    m.classList.remove('active');
    m.classList.add('hidden');
    unlockScroll();
}
