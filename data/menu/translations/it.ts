import "server-only"

// The menu in Italian, keyed by the Montenegrin text in data/menu/*.ts:
// meEn() and untranslated() look each text up here (types.ts), so the menu
// files and the import script stay as they are. One Montenegrin text has one
// translation everywhere it appears. A text missing here shows in
// Montenegrin: `npm run i18n:check` lists those. Our translation
// (2026-11-03), not the client's.
export const it: Record<string, string> = {
  Osnova: "Base",
  Krepa: "Crêpe",
  Vafla: "Waffle",
  Penkejk: "Pancake",
  "Mini vafla": "Mini waffle",
  "Krepa (vegan)": "Crêpe (vegana)",
  "Penkejk (vegan)": "Pancake (vegano)",
  "Suhomesnati proizvodi": "Salumi",
  "Sveže pečena svinjetina": "Arrosto di maiale fresco",
  "Pileći file": "Filetto di pollo",
  "Juneće meso": "Manzo",
  Pančeta: "Pancetta",
  "Dimljeni ćureći file": "Filetto di tacchino affumicato",
  "Dimljena kobasica": "Salsiccia affumicata",
  Šunka: "Prosciutto cotto",
  "Svinjska pršuta": "Prosciutto crudo",
  "Goveda pršuta": "Prosciutto di manzo",
  "Njeguška pršuta": "Prosciutto di Njeguši",
  Kulen: "Kulen",
  Mortadela: "Mortadella",
  "Dimljeni losos": "Salmone affumicato",
  Povrće: "Verdure",
  Paradajz: "Pomodoro",
  "Čeri paradajz": "Pomodorini",
  "Zelena paprika": "Peperone verde",
  "Crvena paprika": "Peperone rosso",
  Krastavac: "Cetriolo",
  "Kisjeli krastavac": "Cetriolini sottaceto",
  Iceberg: "Iceberg",
  Masline: "Olive",
  Kukuruz: "Mais",
  "Svježi spanać": "Spinaci freschi",
  Rukola: "Rucola",
  "Sušeni paradajz": "Pomodori secchi",
  Pečurke: "Funghi",
  "Pečurke a la crem": "Funghi alla panna",
  "Pečena crvena paprika": "Peperone rosso arrosto",
  "Crni luk": "Cipolla",
  Pasulj: "Fagioli",
  Kupus: "Cavolo",
  Patlidžan: "Melanzana",
  "Miks salata": "Insalata mista",
  Sir: "Formaggi",
  "Domaći sir": "Formaggio casereccio",
  Gauda: "Gouda",
  "Feta sir": "Feta",
  "Krem sir": "Formaggio spalmabile",
  Parmezan: "Parmigiano",
  Mocarela: "Mozzarella",
  "Čedar sos": "Salsa cheddar",
  "Sir Ella": "Formaggio Ella",
  "Veganski-biljni sir": "Formaggio vegano",
  Kajmak: "Kajmak",
  Burrata: "Burrata",
  Pavlaka: "Panna acida",
  "Čedar sir": "Cheddar",
  Razno: "Varie",
  "Kikiriki puter": "Burro di arachidi",
  Jaje: "Uovo",
  Tunjevina: "Tonno",
  Pomfrit: "Patatine fritte",
  "Pomfrit sa feta sirom": "Patatine fritte con feta",
  "Pomfrit sa pančetom": "Patatine fritte con pancetta",
  Tost: "Pane da toast",
  Hljebčići: "Pane",
  "Salate i sosevi": "Insalate e salse",
  "Balsamico krema": "Crema di balsamico",
  "Tartar sos": "Salsa tartara",
  "Senf sos": "Salsa alla senape",
  "Pileća salata": "Insalata di pollo",
  "BBQ sos": "Salsa BBQ",
  "Slatko ljuti sos": "Salsa agrodolce piccante",
  "Vinegret sos": "Vinaigrette",
  "Cezar sos": "Salsa Caesar",
  Majonez: "Maionese",
  Senf: "Senape",
  Kečap: "Ketchup",
  "Tabasko sos": "Tabasco",
  "Pesto sos": "Pesto",
  Ajvar: "Ajvar",
  "Sos od nara": "Salsa al melograno",
  "Grčki jogurt": "Yogurt greco",
  Pelat: "Pomodori pelati",
  "Koktel sos": "Salsa cocktail",
  "Burger sos": "Salsa burger",
  "Pistać sos": "Salsa al pistacchio",
  "Avokado sos": "Salsa all'avocado",
  Čokolade: "Cioccolato",
  "Mliječna čokolada": "Cioccolato al latte",
  "Bijela čokolada": "Cioccolato bianco",
  "Crna čokolada": "Cioccolato fondente",
  "Bueno čokolada": "Cioccolato Bueno",
  "Miks čokolada": "Mix di cioccolato",
  "Pistaći čokolada": "Cioccolato al pistacchio",
  Voće: "Frutta",
  Banana: "Banana",
  Jagode: "Fragole",
  Jabuka: "Mela",
  Pomorandža: "Arancia",
  "Sezonsko voće": "Frutta di stagione",
  Maline: "Lamponi",
  Višnje: "Amarene",
  Avokado: "Avocado",
  Nar: "Melograno",
  "Kompot breskva": "Pesche sciroppate",
  "Sirupi i slatko": "Sciroppi e confetture",
  "Sirup od višnje": "Sciroppo di amarena",
  "Sirup od karamele": "Sciroppo al caramello",
  "Sirup od čokolade": "Sciroppo al cioccolato",
  "Sirup od jagode": "Sciroppo di fragola",
  "Sirup od javora": "Sciroppo d'acero",
  "Slatko od višnji": "Confettura di amarene",
  "Slatko od šumskih jagoda": "Confettura di fragoline di bosco",
  "Slatko od borovnica": "Confettura di mirtilli",
  Med: "Miele",
  Keks: "Biscotti",
  "Oreo u mlijeku": "Oreo nel latte",
  "Plazma keks": "Biscotti Plazma",
  "Plazma u mlijeku": "Plazma nel latte",
  "Cookie keks": "Biscotti Cookies",
  "Posni keks": "Biscotti digestive",
  Oreo: "Oreo",
  "Vafel rolnice sa čokoladom": "Rotolini di wafer al cioccolato",
  Speculoos: "Speculoos",
  Kadaif: "Kataifi",
  "Orašasti plodovi": "Frutta secca",
  Badem: "Mandorle",
  Orasi: "Noci",
  Lješnik: "Nocciole",
  "Karamelizovani kikiriki": "Arachidi caramellate",
  Kokos: "Cocco",
  "Miks orašastih plodova": "Frutta secca mista",
  Pistaći: "Pistacchi",
  "Kremovi i namazi": "Creme e spalmabili",
  "Vanila krem": "Crema alla vaniglia",
  Šlag: "Panna montata",
  "Speculoos krem": "Crema Speculoos",
  Puter: "Burro",
  "Krem od čokolade": "Crema al cioccolato",
  "Jabuka fil": "Ripieno di mele",
  "Krem od kokosa": "Crema al cocco",
  "Coffee krem": "Crema al caffè",
  "Krem od limete": "Crema al lime",
  "Pistaći namaz": "Crema al pistacchio",
  "Bueno namaz": "Crema Bueno",
  "Maline namaz": "Crema ai lamponi",
  Alkohol: "Alcolici",
  Cointreau: "Cointreau",
  Baileys: "Baileys",
  Metaxa: "Metaxa",
  Rum: "Rum",
  "Čoko kuglice": "Palline di cioccolato",
  Smarties: "Smarties",
  "Čoko smoki": "Choco Smoki",
  "Pjenaste bombone": "Marshmallow",
  "Štanglica mliječne čokolade": "Barretta di cioccolato al latte",
  "Čoko bananice": "Bananine al cioccolato",
  "Šarene mrvice": "Codette colorate",
  KitKat: "KitKat",
  Munchmallow: "Munchmallow",
  "Kinder jaje": "Ovetto Kinder",
  Granola: "Granola",
  "Čija u mlijeku": "Chia nel latte",
  Sladoledi: "Gelati",
  Karamela: "Caramello",
  Bueno: "Bueno",
  Ferero: "Ferrero",
  Cookies: "Cookies",
  Jagoda: "Fragola",
  Vanila: "Vaniglia",
  Plazma: "Plazma",
  Burgeri: "Burger",
  "Burger 1": "Burger 1",
  "Penkejk, juneće meso, iceberg, burger sos, paradajz, pomfrit, čedar sir":
    "Pancake, manzo, iceberg, salsa burger, pomodoro, patatine fritte, cheddar",
  "Burger 2": "Burger 2",
  "Penkejk, juneće meso, iceberg, crveni luk, majonez, BBQ, pomfrit, čedar sir":
    "Pancake, manzo, iceberg, cipolla rossa, maionese, BBQ, patatine fritte, cheddar",
  Kup: "Coppe",
  "Višnja vanila kup": "Coppa amarena e vaniglia",
  "Višnje, sladoled vanila, plazma": "Amarene, gelato alla vaniglia, Plazma",
  "Pistaći malina kup": "Coppa pistacchio e lampone",
  "Sladoled pistaći, čokolada pistaći, malina, slatki kornet":
    "Gelato al pistacchio, cioccolato al pistacchio, lampone, cono",
  "Dubai malina kup": "Coppa Dubai al lampone",
  "Kadaif, maline, pistaći čokolada, vanila sladoled":
    "Kataifi, lamponi, cioccolato al pistacchio, gelato alla vaniglia",
  "Dubai jagoda": "Coppa Dubai alla fragola",
  "Kadaif, jagode, mliječna čokolada, vanila sladoled":
    "Kataifi, fragole, cioccolato al latte, gelato alla vaniglia",
  "Cookies kup": "Coppa Cookies",
  "Cookies sladoled, cookies keks, bueno čokolada, banane":
    "Gelato Cookies, biscotti Cookies, cioccolato Bueno, banane",
  "Karamela kup": "Coppa al caramello",
  "Sladoled karamela, jagode, banane, toping karamela, karamelizovani kikiriki":
    "Gelato al caramello, fragole, banane, topping al caramello, arachidi caramellate",
  "Čoko kup": "Coppa al cioccolato",
  "Ferrero sladoled, bueno, mliječna i crna čokolada, cookies keks, šlag, čoko kuglice, roler":
    "Gelato Ferrero, Bueno, cioccolato al latte e fondente, biscotti Cookies, panna montata, palline di cioccolato, rotolino di wafer",
  "Dječiji kup": "Coppa bambini",
  "Sladoled vanila, sladoled jagoda, oreo, šlag, šarene mrvice, kornet":
    "Gelato alla vaniglia, gelato alla fragola, Oreo, panna montata, codette colorate, cono",
  "Voćni kup": "Coppa di frutta",
  Desert: "Dessert",
  "Jagode sa šlagom": "Fragole con panna montata",
  "Voćna salata med i orasi": "Macedonia con miele e noci",
  "Voćna salata": "Macedonia",
  "Banana split": "Banana split",
  "Sladoled jagoda, sladoled vanila, sladoled ferero, banana, jagode, šlag":
    "Gelato alla fragola, gelato alla vaniglia, gelato Ferrero, banana, fragole, panna montata",
  Doručak: "Colazione",
  "Avokado & losos": "Avocado e salmone",
  "Integlani hljeb sa sjemenkama, avokado sos, dimljeni losos, krastavac, grčki jogurt, limun, čeri paradajz, crni susam":
    "Pane integrale ai semi, salsa all'avocado, salmone affumicato, cetriolo, yogurt greco, limone, pomodorini, sesamo nero",
  "Avokado & jaja": "Avocado e uova",
  "Integralni hljeb sa sjemenkama, avokado sos, kajgana, grčki jogurt, čeri paradajz, crni susam, limun":
    "Pane integrale ai semi, salsa all'avocado, uova strapazzate, yogurt greco, pomodorini, sesamo nero, limone",
  "Avokado & goveđa pršuta": "Avocado e prosciutto di manzo",
  "Integralni hljeb sa sjemenkama, avokado sos, kajgana, pavlaka, grčki jogurt, čeri paradajz, goveđa pršuta, limun":
    "Pane integrale ai semi, salsa all'avocado, uova strapazzate, panna acida, yogurt greco, pomodorini, prosciutto di manzo, limone",
  "Prosciutto & Pesto": "Prosciutto e pesto",
  "Integralni hljeb sa sjemenkama, mocarela, njeguška pršuta, paradajz, rukola, pesto sos":
    "Pane integrale ai semi, mozzarella, prosciutto di Njeguši, pomodoro, rucola, pesto",
  "Sendvič omlet": "Sandwich con omelette",
  "Integralni hljeb sa sjemenkama, omlet, gauda, pančeta, kulen, pečurke, paradajz, paprika, miks salata, BBQ sos":
    "Pane integrale ai semi, omelette, gouda, pancetta, kulen, funghi, pomodoro, peperone, insalata mista, salsa BBQ",
  "Miks salata, krastavac, domaći sir, goveđa pršuta, čeri paradajz, kajgana, pavlaka, hljebčići":
    "Insalata mista, cetriolo, formaggio casereccio, prosciutto di manzo, pomodorini, uova strapazzate, panna acida, pane",
  "Crnogorski doručak": "Colazione montenegrina",
  "Tri jaja, kobasica, domaći sir, paradajz, tost hljeb, kupus, ajvar":
    "Tre uova, salsiccia, formaggio casereccio, pomodoro, pane da toast, cavolo, ajvar",
  "Turski doručak": "Colazione turca",
  "Kajgana, goveđa pršuta, krastavac, hljebčići, ajvar, čeri paradajz, kajmak, domaći sir, masline, med":
    "Uova strapazzate, prosciutto di manzo, cetriolo, pane, ajvar, pomodorini, kajmak, formaggio casereccio, olive, miele",
  "Engleski doručak": "Colazione inglese",
  "Dva jaja, pančeta, kobasica, seoski sir, paradajz, pečurke, tost hljeb, pasulj":
    "Due uova, pancetta, salsiccia, formaggio contadino, pomodoro, funghi, pane da toast, fagioli",
  "Cezar sendvič": "Sandwich Caesar",
  "Pizza tijesto, pileći file, cezar sos, paradajz, iceberg, krastavac, parmezan, pančeta":
    "Impasto per pizza, filetto di pollo, salsa Caesar, pomodoro, iceberg, cetriolo, parmigiano, pancetta",
  "Mediteranski sendvič": "Sandwich mediterraneo",
  "Pizza tijesto, pesto sos, sušeni paradajz, mocarela, svinjska pršuta, rukola":
    "Impasto per pizza, pesto, pomodori secchi, mozzarella, prosciutto crudo, rucola",
  "Porchetta sendvič": "Sandwich alla porchetta",
  "Pizza tijesto, kajmak, cjepkana svinjetina i paradajz, pomfrit":
    "Impasto per pizza, kajmak, maiale sfilacciato e pomodori, patatine fritte",
  "Mortadela sendvič": "Sandwich alla mortadella",
  "Pizza tijesto, burata, mortadela, rukola, čeri paradajz, pistać sos":
    "Impasto per pizza, burrata, mortadella, rucola, pomodorini, salsa al pistacchio",
  "Tuna sendvič": "Sandwich al tonno",
  "Pizza tijesto, posni majonez, tunjevina, crveni luk, kisjeli krastavac":
    "Impasto per pizza, maionese vegana, tonno, cipolla rossa, cetriolini sottaceto",
  "Klub sendvič": "Club sandwich",
  "Tost hljeb, pančeta, jaje, pileći file, gauda, iceberg, pomfrit, miks zelenih salata sa sosom od nara, paradajz, majonez":
    "Pane da toast, pancetta, uovo, filetto di pollo, gouda, iceberg, patatine fritte, misticanza con salsa al melograno, pomodoro, maionese",
  "Proteinski omlet": "Omelette proteica",
  "Pileći file, bjelance, krem sir, sir ella, tost hljeb, miks zelenih salata":
    "Filetto di pollo, albume, formaggio spalmabile, formaggio Ella, pane da toast, misticanza",
  "Vegetarijanski omlet": "Omelette vegetariana",
  "Paradajz, pečurke, paprika, miks zelenih salata sa sosom od nara, tost hljeb, kukuruz":
    "Pomodoro, funghi, peperone, misticanza con salsa al melograno, pane da toast, mais",
  "Patlidžan sa šakšukom": "Melanzana con shakshuka",
  "Patlidžan, feta sir, crvena paprika, crveni luk, crni luk, kumin, paradajz, dimljena paprika, hljebčići, grčki jogurt, maslinovo ulje":
    "Melanzana, feta, peperone rosso, cipolla rossa, cipolla, cumino, pomodoro, paprika affumicata, pane, yogurt greco, olio d'oliva",
  Šakšuka: "Shakshuka",
  "Crvena paprika, crni luk, crveni luk, paradajz, kumin, dimljena paprika, dva jaja, feta sir, hljebčići":
    "Peperone rosso, cipolla, cipolla rossa, pomodoro, cumino, paprika affumicata, due uova, feta, pane",
  "Punjene prženice ćuretina": "French toast ripieno al tacchino",
  "Bijeli tost, jaje, gauda, ćureći file, ajvar, krem sir, čeri paradajz, parmezan, pomfrit":
    "Pane bianco da toast, uovo, gouda, filetto di tacchino, ajvar, formaggio spalmabile, pomodorini, parmigiano, patatine fritte",
  "Punjene prženice pančeta": "French toast ripieno alla pancetta",
  "Bijeli tost, jaje, pančeta, feta sir, rukola, ajvar, pomfrit, čeri paradajz":
    "Pane bianco da toast, uovo, pancetta, feta, rucola, ajvar, patatine fritte, pomodorini",
  "Tost piletina": "Toast al pollo",
  "Tost hljeb, pesto sos, pileći file, gauda, koktel sos, pomfrit":
    "Pane da toast, pesto, filetto di pollo, gouda, salsa cocktail, patatine fritte",
  "Tost svinjetina": "Toast al maiale",
  "Tost hljeb, čedar sos, gauda, koktel sos, cjepkana svinjetina, pomfrit":
    "Pane da toast, salsa cheddar, gouda, salsa cocktail, maiale sfilacciato, patatine fritte",
  "Klasični brunch": "Brunch classico",
  "Dva jaja, kobasica, paradajz, krastavac, pančeta, tost hljeb, dvije palačinke mliječna čokolada/med i orasi, cijedena pomorandža/limunada":
    "Due uova, salsiccia, pomodoro, cetriolo, pancetta, pane da toast, due crêpes al cioccolato al latte / miele e noci, spremuta d'arancia / limonata",
  "Tortilja svinjetina": "Tortilla al maiale",
  "Tortilja, krem sir, cjepkana svinjetina, paradajz, iceberg, čedar sos, čeri paradajz, pomfrit":
    "Tortilla, formaggio spalmabile, maiale sfilacciato, pomodoro, iceberg, salsa cheddar, pomodorini, patatine fritte",
  "Tortilja piletina": "Tortilla al pollo",
  "Tortilja, krem sir, pileći file, iceberg, paradajz, parmezan, koktel sos, pomfrit, čeri paradajz":
    "Tortilla, formaggio spalmabile, filetto di pollo, iceberg, pomodoro, parmigiano, salsa cocktail, patatine fritte, pomodorini",
  "Montenegro tortilja": "Tortilla Montenegro",
  "Tortilja, jaja, pančeta, gauda, ajvar, kajmak, masline, rukola":
    "Tortilla, uova, pancetta, gouda, ajvar, kajmak, olive, rucola",
  "Breakfast burito": "Burrito della colazione",
  "Tortilja, pavlaka, kajgana, iceberg, miks salata":
    "Tortilla, panna acida, uova strapazzate, iceberg, insalata mista",
  "Slani plato": "Tagliere salato",
  "Hljebčići, njeguška pršuta, svinjska pršuta, kulen, pančeta, mocarela, domaći sir, ajvar, kajmak, masline, čeri paradajz":
    "Pane, prosciutto di Njeguši, prosciutto crudo, kulen, pancetta, mozzarella, formaggio casereccio, ajvar, kajmak, olive, pomodorini",
  "Plato sireva": "Tagliere di formaggi",
  "Mocarela, domaći sir, burata, rukola, med, slatko od borovnice, kajmak, masline, čeri paradajz, hljebčići, ajvar":
    "Mozzarella, formaggio casereccio, burrata, rucola, miele, confettura di mirtilli, kajmak, olive, pomodorini, pane, ajvar",
  "Penkejk doručak": "Colazione con pancake",
  "Penkejk, mliječna čokolada, bijela čokolada, jagode, plazma":
    "Pancake, cioccolato al latte, cioccolato bianco, fragole, Plazma",
  Crunch: "Crunch",
  "Granola, grčki jogurt, banana, jagode, bademi, slatko od borovnice":
    "Granola, yogurt greco, banana, fragole, mandorle, confettura di mirtilli",
  Čija: "Chia",
  "Grčki jogurt, med, breskva, jagode, pistaći, čija u mlijeku":
    "Yogurt greco, miele, pesca, fragole, pistacchi, chia nel latte",
  "Naši proizvodi": "I nostri prodotti",
  "Voćni sok 0.2l": "Succo di frutta 0,2 l",
  "Jabuka, kruška, kajsija, jagoda, malina, višnja, kupina":
    "Mela, pera, albicocca, fragola, lampone, amarena, mora",
  "Voćni sok borovnica 0.2l": "Succo di mirtillo 0,2 l",
  Borovnica: "Mirtillo",
  "Buenita krem": "Crema Buenita",
  "Hari's krem": "Crema Hari's",
  "Pistachio krem": "Crema al pistacchio",
  "Vanilla krem, jagode, mliječna čokolada":
    "Crema alla vaniglia, fragole, cioccolato al latte",
  "Bueno namaz, krem vanila, krem čokolada, cookies keks, bueno čokolada, mliječna čokolada, kinder jaje":
    "Crema Bueno, crema alla vaniglia, crema al cioccolato, biscotti Cookies, cioccolato Bueno, cioccolato al latte, ovetto Kinder",
  "Javorov sirup, orašasti plodovi": "Sciroppo d'acero, frutta secca",
  "Pistaći čokolada, bijela čokolada, maline":
    "Cioccolato al pistacchio, cioccolato bianco, lamponi",
  "Crna čokolada, kikiriki puter, banana":
    "Cioccolato fondente, burro di arachidi, banana",
  "Malina namaz, jagode, sladoled jagoda, bijela čokolada, crna čokolada, kornet":
    "Crema ai lamponi, fragole, gelato alla fragola, cioccolato bianco, cioccolato fondente, cono",
  '"Hari\'s" Specijal penkejk': "Pancake speciale “Hari's”",
  "Pistaći čokolada, bijela čokolada, maline, nar, pistaći sladoled, pistaći, kornet, šećer u prahu":
    "Cioccolato al pistacchio, cioccolato bianco, lamponi, melograno, gelato al pistacchio, pistacchi, cono, zucchero a velo",
  Pica: "Pizza",
  Giardino: "Giardino",
  "Pelat, pančeta, feta sir, pečurke, čeri paradajz, pizza sir":
    "Pomodori pelati, pancetta, feta, funghi, pomodorini, formaggio per pizza",
  "Fileti di polo": "Filetti di pollo",
  "Pelat, pileći file, pančeta, pečurke, mocarela, čeri paradajz, pizza sir":
    "Pomodori pelati, filetto di pollo, pancetta, funghi, mozzarella, pomodorini, formaggio per pizza",
  Specijal: "Speciale",
  "Pelat, šunka, pančeta, kobasica, pečurke, rukola, pizza sir":
    "Pomodori pelati, prosciutto cotto, pancetta, salsiccia, funghi, rucola, formaggio per pizza",
  Margarita: "Margherita",
  "Pelat, čeri paradajz, maslinovo ulje, pizza sir":
    "Pomodori pelati, pomodorini, olio d'oliva, formaggio per pizza",
  "Mortadela, pavlaka, pizza sir, čeri paradajz, sos od pistaća, burata":
    "Mortadella, panna acida, formaggio per pizza, pomodorini, salsa al pistacchio, burrata",
  "Prosciutto & Burrata": "Prosciutto e burrata",
  "Pelat, čeri paradajz, pizza sir, njeguška pršuta, burata":
    "Pomodori pelati, pomodorini, formaggio per pizza, prosciutto di Njeguši, burrata",
  "Montenegro pica": "Pizza Montenegro",
  "Pelat, čeri paradajz, pizza sir, kulen, svinjska pršuta, feta sir":
    "Pomodori pelati, pomodorini, formaggio per pizza, kulen, prosciutto crudo, feta",
  Kafa: "Caffè",
  Frapućino: "Frappuccino",
  "Moka lješnik": "Moka alla nocciola",
  "Ledena kafa": "Caffè freddo",
  "Latte sa ukusima": "Latte aromatizzato",
  "Kapućino pistaći": "Cappuccino al pistacchio",
  "Čoko kapućino": "Cappuccino al cioccolato",
  "Affogato vanila": "Affogato alla vaniglia",
  "Affogato pistaći": "Affogato al pistacchio",
  Šejk: "Shake",
  "Plazma šejk": "Shake Plazma",
  "Bounty šejk": "Shake Bounty",
  "Snickers šejk": "Shake Snickers",
  Milkšejk: "Milkshake",
  "Oreo banana": "Oreo e banana",
  "Sladoled od banane, oreo, wellness keks":
    "Gelato alla banana, Oreo, biscotti Wellness",
  "Kikiriki keks": "Cookie e arachidi",
  "Sladoled cookies, kikiriki puter, bueno čokolada":
    "Gelato Cookies, burro di arachidi, cioccolato Bueno",
  "Čoko jagoda": "Cioccolato e fragola",
  "Sladoled od jagode, mliječna čokolada":
    "Gelato alla fragola, cioccolato al latte",
  Ferrero: "Ferrero",
  Limunada: "Limonate",
  "Limunada sa ukusom": "Limonata aromatizzata",
  Rumenko: "Rumenko",
  "Kakadu vanila": "Kakadu alla vaniglia",
  "Cijeđena pomorandža, vanila sladoled":
    "Spremuta d'arancia, gelato alla vaniglia",
  "Topla čokolada": "Cioccolata calda",
  "Klasična topla čokolada": "Cioccolata calda classica",
  "Bueno čokolada sa kikiriki puterom":
    "Cioccolata Bueno con burro di arachidi",
  "Mliječna čokolada sa jagodama": "Cioccolata al latte con fragole",
  "Čokolada “Hari's” sa oreom i sladoledom od vanile":
    "Cioccolata “Hari's” con Oreo e gelato alla vaniglia",
  "Bueno čokolada sa plazmom": "Cioccolata Bueno con Plazma",
  "Mliječna čokolada sa bademom i malinama":
    "Cioccolata al latte con mandorle e lamponi",
  "Bijela čokolada sa malinama i pistaćima":
    "Cioccolata bianca con lamponi e pistacchi",
  Čokolada: "Cioccolato",
  Tropic: "Tropical",
  Nana: "Menta",
  Malina: "Lampone",
  Lubenica: "Anguria",
  "Zelena jabuka": "Mela verde",
  "Slane posne krepe": "Crêpes salate di magro",
  "Slana posna krepa 1": "Crêpe salata di magro 1",
  "Biljni sir, tunjevina, krastavac, čeri paradajz, crveni luk":
    "Formaggio vegetale, tonno, cetriolo, pomodorini, cipolla rossa",
  "Slana posna krepa 2": "Crêpe salata di magro 2",
  "Biljni sir, pečurke, kukuruz, paprika, paradajz, masline, rukola":
    "Formaggio vegetale, funghi, mais, peperone, pomodoro, olive, rucola",
  "Slana posna krepa 3": "Crêpe salata di magro 3",
  "Biljni sir, losos, krastavac, paradajz":
    "Formaggio vegetale, salmone, cetriolo, pomodoro",
  "Slana posna krepa 4": "Crêpe salata di magro 4",
  "Biljni sir, posni majonez, kukuruz, avokado sos, soja, limun":
    "Formaggio vegetale, maionese vegana, mais, salsa all'avocado, soia, limone",
  "Slana posna zapečena krepa 5": "Crêpe salata di magro al forno 5",
  "Biljni sir, soja, masline, koktel sos, kisjeli krastavac":
    "Formaggio vegetale, soia, olive, salsa cocktail, cetriolini sottaceto",
  "Posni sendviči": "Sandwich di magro",
  "Sendvič 1": "Sandwich 1",
  "Biljni sir, avokado sos, masline, pasulj, pomfrit":
    "Formaggio vegetale, salsa all'avocado, olive, fagioli, patatine fritte",
  "Sendvič 2": "Sandwich 2",
  "Biljni sir, tunjevina, posni majonez, kisjeli krastavac, crveni luk":
    "Formaggio vegetale, tonno, maionese vegana, cetriolini sottaceto, cipolla rossa",
  "Sendvič 3": "Sandwich 3",
  "Biljni sir, pelat, pečurke, soja":
    "Formaggio vegetale, pomodori pelati, funghi, soia",
  "Posne salate": "Insalate di magro",
  "Tuna salata": "Insalata di tonno",
  "Mix salate, tunjevina, posni majonez, kisjeli krastavac, crveni luk, paradajz, kukuruz":
    "Insalata mista, tonno, maionese vegana, cetriolini sottaceto, cipolla rossa, pomodoro, mais",
  "Soja salata": "Insalata di soia",
  "Iceberg salata, soja, kisjeli krastavac, posni majonez, čeri paradajz":
    "Lattuga iceberg, soia, cetriolini sottaceto, maionese vegana, pomodorini",
  "Posne pice": "Pizze di magro",
  "Pizza posna 1": "Pizza di magro 1",
  "Pelat, biljni sir, tunjevina, kisjeli krastavac, kukuruz, čeri":
    "Pomodori pelati, formaggio vegetale, tonno, cetriolini sottaceto, mais, pomodorini",
  "Pizza posna 2": "Pizza di magro 2",
  "Pelat, biljni sir, soja, koktel sos, kisjeli krastavac, čeri":
    "Pomodori pelati, formaggio vegetale, soia, salsa cocktail, cetriolini sottaceto, pomodorini",
  "Slatke posne krepe": "Crêpes dolci di magro",
  "Slatka posna krepa 1": "Crêpe dolce di magro 1",
  "Maline, kokos, crna čokolada bez šećera":
    "Lamponi, cocco, cioccolato fondente senza zucchero",
  "Slatka posna krepa 2": "Crêpe dolce di magro 2",
  "Crna čokolada bez šećera, wellness keks, džem kajsija":
    "Cioccolato fondente senza zucchero, biscotti Wellness, confettura di albicocche",
  "Slatka posna krepa 3": "Crêpe dolce di magro 3",
  "Višnja, posna plazma, crna čokolada bez šećera":
    "Amarene, biscotti Plazma vegani, cioccolato fondente senza zucchero",
  "Slatka posna krepa 4": "Crêpe dolce di magro 4",
  "Crna čokolada bez šećera, džem pomorandža, posna plazma":
    "Cioccolato fondente senza zucchero, marmellata d'arance, biscotti Plazma vegani",
  "Slatka posna krepa 5": "Crêpe dolce di magro 5",
  "Pekmez, šećer u prahu": "Marmellata, zucchero a velo",
  "Slatka posna krepa 6": "Crêpe dolce di magro 6",
  "Džem kajsija, nar": "Confettura di albicocche, melograno",
  "Slatka posna krepa 7": "Crêpe dolce di magro 7",
  "Slatko šumske jagode, mix orašasto":
    "Confettura di fragoline di bosco, frutta secca mista",
  "Slatka posna krepa 8": "Crêpe dolce di magro 8",
  "Kikiriki puter, banana, crna čokolada bez šećera":
    "Burro di arachidi, banana, cioccolato fondente senza zucchero",
  "Slatka posna krepa 9": "Crêpe dolce di magro 9",
  "Keks, jagode, crna čokolada bez šećera":
    "Biscotti, fragole, cioccolato fondente senza zucchero",
  "Posni penkejk": "Pancake di magro",
  "Posni penkejk 1": "Pancake di magro 1",
  "Džem od drenjine, šećer u prahu": "Confettura di corniole, zucchero a velo",
  "Posni penkejk 2": "Pancake di magro 2",
  "Jabuka fil, cimet, orah": "Ripieno di mele, cannella, noci",
  "Posni penkejk 3": "Pancake di magro 3",
  "Džem od šipka, banana, pistaći":
    "Confettura di rosa canina, banana, pistacchi",
  "Posni penkejk 4": "Pancake di magro 4",
  "Javorov sirup, maline, badem": "Sciroppo d'acero, lamponi, mandorle",
  "Posni penkejk 5": "Pancake di magro 5",
  "Wellness keks, crna čokolada bez šećera, nar":
    "Biscotti Wellness, cioccolato fondente senza zucchero, melograno",
  Potaži: "Vellutate",
  "Potaž šargarepa": "Vellutata di carote",
  "Šargarepa, krompir, luk, začini, grčki jogurt, krutoni, susam":
    "Carote, patate, cipolla, spezie, yogurt greco, crostini, sesamo",
  "Potaž karfiol": "Vellutata di cavolfiore",
  "Karfiol, krompir, luk, začini, ulje od tartufa, grčki jogurt, lješnik":
    "Cavolfiore, patate, cipolla, spezie, olio al tartufo, yogurt greco, nocciole",
  Salate: "Insalate",
  '"Hari\'s" specijal': "Speciale “Hari's”",
  "Njeguška pršuta, mocarela, iceberg, rukola, jagode, zelena jabuka, lješnik, suvo grožđe, vinegret sos":
    "Prosciutto di Njeguši, mozzarella, iceberg, rucola, fragole, mela verde, nocciole, uvetta, vinaigrette",
  "Grčka salata": "Insalata greca",
  "Paradajz, krastavac, paprika, crveni luk, feta sir, masline, origano, maslinovo ulje":
    "Pomodoro, cetriolo, peperone, cipolla rossa, feta, olive, origano, olio d'oliva",
  "Cezar salata": "Insalata Caesar",
  "Miks salata, krastavac, krutoni, pileći file, pančeta, parmezan, cezar sos, paradajz":
    "Insalata mista, cetriolo, crostini, filetto di pollo, pancetta, parmigiano, salsa Caesar, pomodoro",
  "Miks salata, posni majonez, kukuruz, kisjeli krastavac, paradajz, crveni luk, tunjevina":
    "Insalata mista, maionese vegana, mais, cetriolini sottaceto, pomodoro, cipolla rossa, tonno",
  Salata: "Insalata",
  "Rukola, iceberg, čeri, pesto sos, mocarela":
    "Rucola, iceberg, pomodorini, pesto, mozzarella",
  "Burrata i paradajz": "Burrata e pomodoro",
  "Burata, aceto balzamiko, njeguška pršuta, paradajz, hljebčići":
    "Burrata, aceto balsamico, prosciutto di Njeguši, pomodoro, pane",
  Sladoled: "Gelato",
  Pistać: "Pistacchio",
  "Slane krepe": "Crêpes salate",
  "Šunka, gauda": "Prosciutto cotto, gouda",
  "Pančeta, šunka, gauda, pečurke, paradajz, sos od senfa":
    "Pancetta, prosciutto cotto, gouda, funghi, pomodoro, salsa alla senape",
  "Pavlaka, mortadela, iceberg, pistaći sos, gauda":
    "Panna acida, mortadella, iceberg, salsa al pistacchio, gouda",
  "Pileći file, gauda, kukuruz, pileća salata, susam":
    "Filetto di pollo, gouda, mais, insalata di pollo, sesamo",
  "Mocarela, pileći file, sušeni paradajz, miks salata":
    "Mozzarella, filetto di pollo, pomodori secchi, insalata mista",
  "Pileći file, pečurke, gauda, rukola, tartar sos":
    "Filetto di pollo, funghi, gouda, rucola, salsa tartara",
  'Specijal "Hari\'s"': "Speciale “Hari's”",
  "Cjepkana svinjetina, gauda, pečurke, pančeta, paprika, paradajz, sos od senfa, miks zelenih salata, pomfrit":
    "Maiale sfilacciato, gouda, funghi, pancetta, peperone, pomodoro, salsa alla senape, misticanza, patatine fritte",
  "Grčka salata krepa": "Crêpe all'insalata greca",
  "Feta sir, paradajz, krastavac, masline, paprika, crveni luk, origano, maslinovo ulje":
    "Feta, pomodoro, cetriolo, olive, peperone, cipolla rossa, origano, olio d'oliva",
  "Zapečena krepa": "Crêpe al forno",
  "Pileći file, gauda, kukuruz, paradajz, kajmak":
    "Filetto di pollo, gouda, mais, pomodoro, kajmak",
  "Gauda, pileći file, kajmak, pavlaka, parmezan, susam, kisjeli krastavac":
    "Gouda, filetto di pollo, kajmak, panna acida, parmigiano, sesamo, cetriolini sottaceto",
  "Gauda, pavlaka, juneće meso, kečap, koktel sos, čedar, čeri paradajz i crveni luk":
    "Gouda, panna acida, manzo, ketchup, salsa cocktail, cheddar, pomodorini e cipolla rossa",
  "Grande Italiano": "Grande Italiano",
  "Šunka, svinjska pršuta, kulen, sušeni paradajz, mocarela, pečena crvena paprika, rukola, vinegret sos, parmezan, pesto sos, med, zelena jabuka, pomorandža":
    "Prosciutto cotto, prosciutto crudo, kulen, pomodori secchi, mozzarella, peperone rosso arrosto, rucola, vinaigrette, parmigiano, pesto, miele, mela verde, arancia",
  "Cjepkana svinjetina, gauda, feta sir, tartar sos, pančeta, čeri":
    "Maiale sfilacciato, gouda, feta, salsa tartara, pancetta, pomodorini",
  "Italijanska krepa": "Crêpe all'italiana",
  "Njeguška pršuta, gauda, čeri paradajz, rukola, vinegret sos":
    "Prosciutto di Njeguši, gouda, pomodorini, rucola, vinaigrette",
  "Mediteranska krepa": "Crêpe mediterranea",
  "Pileći file, gauda, rukola, feta sir, ajvar":
    "Filetto di pollo, gouda, rucola, feta, ajvar",
  "Američka krepa": "Crêpe americana",
  "Cjepkana svinjetina, pančeta, paradajz, crni luk, BBQ sos, čedar sos":
    "Maiale sfilacciato, pancetta, pomodoro, cipolla, salsa BBQ, salsa cheddar",
  "Chicken cheese zapečena": "Crêpe al forno pollo e formaggio",
  "Pileći file, krem sir, gauda, karamelizovani luk, čeri paradajz":
    "Filetto di pollo, formaggio spalmabile, gouda, cipolla caramellata, pomodorini",
  "Cheese pork zapečena": "Crêpe al forno maiale e formaggio",
  "Cjepkana svinjetina, gauda, čedar sir, karamelizovani luk, čeri paradajz":
    "Maiale sfilacciato, gouda, cheddar, cipolla caramellata, pomodorini",
  "Slatke krepe": "Crêpes dolci",
  "Mliječna čokolada, višnje, plazma": "Cioccolato al latte, amarene, Plazma",
  "Bueno čokolada, krem vanila, maline":
    "Cioccolato Bueno, crema alla vaniglia, lamponi",
  "Bueno čokolada, jagode, keks": "Cioccolato Bueno, fragole, biscotti",
  "Bijela čokolada, mliječna čokolada, oreo, banana, jagode":
    "Cioccolato bianco, cioccolato al latte, Oreo, banana, fragole",
  "Pistaći čokolada, krem limeta, sladoled pistaći":
    "Cioccolato al pistacchio, crema al lime, gelato al pistacchio",
  "Bueno namaz, bueno čokolada, bueno sladoled, karamelizovani kikiriki, jagode":
    "Crema Bueno, cioccolato Bueno, gelato Bueno, arachidi caramellate, fragole",
  "Speculoos namaz, banana, speculoos keks, crna čokolada, mliječna čokolada":
    "Crema Speculoos, banana, biscotti Speculoos, cioccolato fondente, cioccolato al latte",
  "Fil od jabuke, krem sir, šećer u prahu, cimet, med, posni keks":
    "Ripieno di mele, formaggio spalmabile, zucchero a velo, cannella, miele, biscotti digestive",
  "Mliječna čokolada, maline, plazma u mlijeku":
    "Cioccolato al latte, lamponi, Plazma nel latte",
  "Mille - Feuille": "Millefoglie",
  "Mille namaz, vanila krem, lisnato tijesto, malina, šećer u prahu":
    "Crema Mille, crema alla vaniglia, pasta sfoglia, lamponi, zucchero a velo",
  "Kokos, bijela čokolada, maline": "Cocco, cioccolato bianco, lamponi",
  "Pistaći čokolada, maline": "Cioccolato al pistacchio, lamponi",
  "Dubai krepa": "Crêpe Dubai",
  "Pistaći čokolada, mliječna čokolada, kadaif, pistaći":
    "Cioccolato al pistacchio, cioccolato al latte, kataifi, pistacchi",
  "Pistaći čokolada, bijela čokolada, plazma, višnje":
    "Cioccolato al pistacchio, cioccolato bianco, Plazma, amarene",
  "Malina namaz, banana, mliječna čokolada":
    "Crema ai lamponi, banana, cioccolato al latte",
  "Oreo u mlijeku, jagode, bueno čokolada":
    "Oreo nel latte, fragole, cioccolato Bueno",
  "Čoko pasta": "Choco crema",
  "Mliječna čokolada, banana, čoko kuglice, višnje":
    "Cioccolato al latte, banana, palline di cioccolato, amarene",
  "Crna čokolada, maline": "Cioccolato fondente, lamponi",
  "Krepa vrećica": "Crêpe a fagottino",
  "Bijela čokolada, mliječna čokolada, krem od vanile, krem od čokolade, čoko smoki, višnje":
    "Cioccolato bianco, cioccolato al latte, crema alla vaniglia, crema al cioccolato, Choco Smoki, amarene",
  "Dubai malina": "Dubai al lampone",
  "Bijela čokolada, pistaći čokolada, kadaif, maline":
    "Cioccolato bianco, cioccolato al pistacchio, kataifi, lamponi",
  "Bueno namaz, krem vanila, banana, jagode,cookie keks, mliječna čokolada, bijela čokolada, čoko kuglice,karamelizovani kikiriki, štangla mliječne čokolade, vafel rolnice sa čokoladom":
    "Crema Bueno, crema alla vaniglia, banana, fragole, biscotti Cookies, cioccolato al latte, cioccolato bianco, palline di cioccolato, arachidi caramellate, barretta di cioccolato al latte, rotolini di wafer al cioccolato",
  "Krem od kokosa, maline, pistaći čokolada, bijela čokolada":
    "Crema al cocco, lamponi, cioccolato al pistacchio, cioccolato bianco",
  "Crna čokolada, višnje, sladoled vanila":
    "Cioccolato fondente, amarene, gelato alla vaniglia",
  "Coffee krepa": "Crêpe al caffè",
  "Crna čokolada, Coffee krem, kakao, espresso, maline":
    "Cioccolato fondente, crema al caffè, cacao, espresso, lamponi",
  "Pistaći namaz, bijela čokolada, pistaći, pistaći sladoled":
    "Crema al pistacchio, cioccolato bianco, pistacchi, gelato al pistacchio",
  "Bueno namaz, bueno čokolada, bijela čokolada, jagode":
    "Crema Bueno, cioccolato Bueno, cioccolato bianco, fragole",
  "Malina namaz, jagode, pistaći, bijela čokolada, pistaći čokolada, kitkat":
    "Crema ai lamponi, fragole, pistacchi, cioccolato bianco, cioccolato al pistacchio, KitKat",
  "Slatke vafle": "Waffle dolci",
  "Višnja, bueno čokolada, bueno sladoled":
    "Amarene, cioccolato Bueno, gelato Bueno",
  "Bijela čokolada, maline, cookies keks":
    "Cioccolato bianco, lamponi, biscotti Cookies",
  "Krem vanila, mliječna čokolada, jagode, orašasti plodovi":
    "Crema alla vaniglia, cioccolato al latte, fragole, frutta secca",
  "Mliječna čokolada, jagode, ferrero sladoled, oreo, smarties, čoko rolnice":
    "Cioccolato al latte, fragole, gelato Ferrero, Oreo, Smarties, rotolini al cioccolato",
  "Mliječna čokolada, jagode, vanila sladoled":
    "Cioccolato al latte, fragole, gelato alla vaniglia",
  "Svježe voće, vanila sladoled, mliječna čokolada":
    "Frutta fresca, gelato alla vaniglia, cioccolato al latte",
  "Bijela čokolada, pistaći, maline, pistaći sladoled":
    "Cioccolato bianco, pistacchi, lamponi, gelato al pistacchio",
  "Mliječna čokolada, malina namaz, maline, sladoled banana":
    "Cioccolato al latte, crema ai lamponi, lamponi, gelato alla banana",
  "Pistaći čokolada, bijela čokolada, oreo, jagode":
    "Cioccolato al pistacchio, cioccolato bianco, Oreo, fragole",
  "Tolos vafla": "Waffle Tolos",
  "Dva vafla, vanila sladoled, plazma, vanilla krem, banana, jagode, mliječna čokolada, bijela čokolada":
    "Due waffle, gelato alla vaniglia, Plazma, crema alla vaniglia, banana, fragole, cioccolato al latte, cioccolato bianco",
  "Bueno namaz, bueno čokolada, kinder jajc, jagode":
    "Crema Bueno, cioccolato Bueno, ovetto Kinder, fragole",
  "Bueno čokolada, plazma u mlijeku, banane":
    "Cioccolato Bueno, Plazma nel latte, banane",
  "Pistaći namaz, pistaći čokolada, maline":
    "Crema al pistacchio, cioccolato al pistacchio, lamponi",
  "Fil od jabuke, cimet, vanila sladoled":
    "Ripieno di mele, cannella, gelato alla vaniglia",
  "Dubai vafla": "Waffle Dubai",
  "Pistaći čokolada, bijela čokolada, kadaif, pistaći, pistaći špageti sladoled":
    "Cioccolato al pistacchio, cioccolato bianco, kataifi, pistacchi, spaghetti di gelato al pistacchio",
  "Mliječna čokolada, plazma, plazma sladoled, maline":
    "Cioccolato al latte, Plazma, gelato Plazma, lamponi",
}
