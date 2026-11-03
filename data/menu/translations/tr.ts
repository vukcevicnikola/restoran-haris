import "server-only"

// The menu in Turkish, keyed by the Montenegrin text in data/menu/*.ts:
// meEn() and untranslated() look each text up here (types.ts), so the menu
// files and the import script stay as they are. One Montenegrin text has one
// translation everywhere it appears. A text missing here shows in
// Montenegrin: `npm run i18n:check` lists those. Our translation
// (2026-11-03), not the client's.
export const tr: Record<string, string> = {
  Osnova: "Hamur",
  Krepa: "Krep",
  Vafla: "Waffle",
  Penkejk: "Pankek",
  "Mini vafla": "Mini waffle",
  "Krepa (vegan)": "Krep (vegan)",
  "Penkejk (vegan)": "Pankek (vegan)",
  "Suhomesnati proizvodi": "Şarküteri",
  "Sveže pečena svinjetina": "Taze fırınlanmış domuz eti",
  "Pileći file": "Tavuk fileto",
  "Juneće meso": "Dana eti",
  Pančeta: "Domuz pastırması",
  "Dimljeni ćureći file": "Füme hindi fileto",
  "Dimljena kobasica": "Füme sosis",
  Šunka: "Jambon",
  "Svinjska pršuta": "Domuz prosciutto",
  "Goveda pršuta": "Dana prosciutto",
  "Njeguška pršuta": "Njeguši prosciuttosu",
  Kulen: "Kulen",
  Mortadela: "Mortadella",
  "Dimljeni losos": "Füme somon",
  Povrće: "Sebzeler",
  Paradajz: "Domates",
  "Čeri paradajz": "Çeri domates",
  "Zelena paprika": "Yeşil biber",
  "Crvena paprika": "Kırmızı biber",
  Krastavac: "Salatalık",
  "Kisjeli krastavac": "Salatalık turşusu",
  Iceberg: "Iceberg marul",
  Masline: "Zeytin",
  Kukuruz: "Mısır",
  "Svježi spanać": "Taze ıspanak",
  Rukola: "Roka",
  "Sušeni paradajz": "Kurutulmuş domates",
  Pečurke: "Mantar",
  "Pečurke a la crem": "Kremalı mantar",
  "Pečena crvena paprika": "Közlenmiş kırmızı biber",
  "Crni luk": "Soğan",
  Pasulj: "Fasulye",
  Kupus: "Lahana",
  Patlidžan: "Patlıcan",
  "Miks salata": "Karışık yeşillik",
  Sir: "Peynirler",
  "Domaći sir": "Köy peyniri",
  Gauda: "Gouda peyniri",
  "Feta sir": "Feta peyniri",
  "Krem sir": "Krem peynir",
  Parmezan: "Parmesan",
  Mocarela: "Mozzarella",
  "Čedar sos": "Cheddar sos",
  "Sir Ella": "Ella peyniri",
  "Veganski-biljni sir": "Vegan bitkisel peynir",
  Kajmak: "Kaymak",
  Burrata: "Burrata",
  Pavlaka: "Ekşi krema",
  "Čedar sir": "Cheddar peyniri",
  Razno: "Diğer",
  "Kikiriki puter": "Fıstık ezmesi",
  Jaje: "Yumurta",
  Tunjevina: "Ton balığı",
  Pomfrit: "Patates kızartması",
  "Pomfrit sa feta sirom": "Feta peynirli patates kızartması",
  "Pomfrit sa pančetom": "Domuz pastırmalı patates kızartması",
  Tost: "Tost ekmeği",
  Hljebčići: "Ekmek",
  "Salate i sosevi": "Salatalar ve soslar",
  "Balsamico krema": "Balzamik krema",
  "Tartar sos": "Tartar sos",
  "Senf sos": "Hardal sos",
  "Pileća salata": "Tavuk salatası",
  "BBQ sos": "Barbekü sos",
  "Slatko ljuti sos": "Tatlı acı sos",
  "Vinegret sos": "Vinegret sos",
  "Cezar sos": "Sezar sos",
  Majonez: "Mayonez",
  Senf: "Hardal",
  Kečap: "Ketçap",
  "Tabasko sos": "Tabasco sos",
  "Pesto sos": "Pesto sos",
  Ajvar: "Ajvar",
  "Sos od nara": "Nar sosu",
  "Grčki jogurt": "Süzme yoğurt",
  Pelat: "Soyulmuş domates",
  "Koktel sos": "Kokteyl sos",
  "Burger sos": "Burger sos",
  "Pistać sos": "Antep fıstıklı sos",
  "Avokado sos": "Avokado sos",
  Čokolade: "Çikolatalar",
  "Mliječna čokolada": "Sütlü çikolata",
  "Bijela čokolada": "Beyaz çikolata",
  "Crna čokolada": "Bitter çikolata",
  "Bueno čokolada": "Bueno çikolata",
  "Miks čokolada": "Karışık çikolata",
  "Pistaći čokolada": "Antep fıstıklı çikolata",
  Voće: "Meyveler",
  Banana: "Muz",
  Jagode: "Çilek",
  Jabuka: "Elma",
  Pomorandža: "Portakal",
  "Sezonsko voće": "Mevsim meyveleri",
  Maline: "Ahududu",
  Višnje: "Vişne",
  Avokado: "Avokado",
  Nar: "Nar",
  "Kompot breskva": "Şeftali kompostosu",
  "Sirupi i slatko": "Şuruplar ve reçeller",
  "Sirup od višnje": "Vişne şurubu",
  "Sirup od karamele": "Karamel şurubu",
  "Sirup od čokolade": "Çikolata şurubu",
  "Sirup od jagode": "Çilek şurubu",
  "Sirup od javora": "Akçaağaç şurubu",
  "Slatko od višnji": "Vişne reçeli",
  "Slatko od šumskih jagoda": "Yaban çileği reçeli",
  "Slatko od borovnica": "Yaban mersini reçeli",
  Med: "Bal",
  Keks: "Bisküvi",
  "Oreo u mlijeku": "Sütte Oreo",
  "Plazma keks": "Plazma bisküvi",
  "Plazma u mlijeku": "Sütte Plazma",
  "Cookie keks": "Cookies bisküvi",
  "Posni keks": "Digestive bisküvi",
  Oreo: "Oreo",
  "Vafel rolnice sa čokoladom": "Çikolatalı gofret rulo",
  Speculoos: "Speculoos",
  Kadaif: "Kadayıf",
  "Orašasti plodovi": "Kuruyemiş",
  Badem: "Badem",
  Orasi: "Ceviz",
  Lješnik: "Fındık",
  "Karamelizovani kikiriki": "Karamelize yer fıstığı",
  Kokos: "Hindistan cevizi",
  "Miks orašastih plodova": "Karışık kuruyemiş",
  Pistaći: "Antep fıstığı",
  "Kremovi i namazi": "Kremalar ve ezmeler",
  "Vanila krem": "Vanilyalı krema",
  Šlag: "Krem şanti",
  "Speculoos krem": "Speculoos krema",
  Puter: "Tereyağı",
  "Krem od čokolade": "Çikolata kreması",
  "Jabuka fil": "Elma dolgusu",
  "Krem od kokosa": "Hindistan cevizi kreması",
  "Coffee krem": "Kahve kreması",
  "Krem od limete": "Misket limonu kreması",
  "Pistaći namaz": "Antep fıstığı ezmesi",
  "Bueno namaz": "Bueno krema",
  "Maline namaz": "Ahududu kreması",
  Alkohol: "Alkol",
  Cointreau: "Cointreau",
  Baileys: "Baileys",
  Metaxa: "Metaxa",
  Rum: "Rom",
  "Čoko kuglice": "Çikolata topları",
  Smarties: "Smarties",
  "Čoko smoki": "Choco Smoki",
  "Pjenaste bombone": "Marshmallow",
  "Štanglica mliječne čokolade": "Sütlü çikolata bar",
  "Čoko bananice": "Çikolatalı muz şekerleri",
  "Šarene mrvice": "Renkli şeker taneleri",
  KitKat: "KitKat",
  Munchmallow: "Munchmallow",
  "Kinder jaje": "Kinder Sürpriz",
  Granola: "Granola",
  "Čija u mlijeku": "Sütte chia",
  Sladoledi: "Dondurmalar",
  Karamela: "Karamel",
  Bueno: "Bueno",
  Ferero: "Ferrero",
  Cookies: "Cookies",
  Jagoda: "Çilek",
  Vanila: "Vanilya",
  Plazma: "Plazma",
  Burgeri: "Burgerler",
  "Burger 1": "Burger 1",
  "Penkejk, juneće meso, iceberg, burger sos, paradajz, pomfrit, čedar sir":
    "Pankek, dana eti, iceberg marul, burger sos, domates, patates kızartması, cheddar peyniri",
  "Burger 2": "Burger 2",
  "Penkejk, juneće meso, iceberg, crveni luk, majonez, BBQ, pomfrit, čedar sir":
    "Pankek, dana eti, iceberg marul, kırmızı soğan, mayonez, barbekü sos, patates kızartması, cheddar peyniri",
  Kup: "Kuplar",
  "Višnja vanila kup": "Vişne vanilya kup",
  "Višnje, sladoled vanila, plazma": "Vişne, vanilyalı dondurma, Plazma",
  "Pistaći malina kup": "Antep fıstığı ahududu kup",
  "Sladoled pistaći, čokolada pistaći, malina, slatki kornet":
    "Antep fıstıklı dondurma, Antep fıstıklı çikolata, ahududu, külah",
  "Dubai malina kup": "Dubai ahududu kup",
  "Kadaif, maline, pistaći čokolada, vanila sladoled":
    "Kadayıf, ahududu, Antep fıstıklı çikolata, vanilyalı dondurma",
  "Dubai jagoda": "Dubai çilek kup",
  "Kadaif, jagode, mliječna čokolada, vanila sladoled":
    "Kadayıf, çilek, sütlü çikolata, vanilyalı dondurma",
  "Cookies kup": "Cookies kup",
  "Cookies sladoled, cookies keks, bueno čokolada, banane":
    "Cookies dondurma, Cookies bisküvi, Bueno çikolata, muz",
  "Karamela kup": "Karamel kup",
  "Sladoled karamela, jagode, banane, toping karamela, karamelizovani kikiriki":
    "Karamelli dondurma, çilek, muz, karamel sos, karamelize yer fıstığı",
  "Čoko kup": "Çikolata kup",
  "Ferrero sladoled, bueno, mliječna i crna čokolada, cookies keks, šlag, čoko kuglice, roler":
    "Ferrero dondurma, Bueno, sütlü ve bitter çikolata, Cookies bisküvi, krem şanti, çikolata topları, gofret rulo",
  "Dječiji kup": "Çocuk kupu",
  "Sladoled vanila, sladoled jagoda, oreo, šlag, šarene mrvice, kornet":
    "Vanilyalı dondurma, çilekli dondurma, Oreo, krem şanti, renkli şeker taneleri, külah",
  "Voćni kup": "Meyveli kup",
  Desert: "Tatlılar",
  "Jagode sa šlagom": "Krem şantili çilek",
  "Voćna salata med i orasi": "Ballı cevizli meyve salatası",
  "Voćna salata": "Meyve salatası",
  "Banana split": "Banana split",
  "Sladoled jagoda, sladoled vanila, sladoled ferero, banana, jagode, šlag":
    "Çilekli dondurma, vanilyalı dondurma, Ferrero dondurma, muz, çilek, krem şanti",
  Doručak: "Kahvaltı",
  "Avokado & losos": "Avokado ve somon",
  "Integlani hljeb sa sjemenkama, avokado sos, dimljeni losos, krastavac, grčki jogurt, limun, čeri paradajz, crni susam":
    "Tohumlu tam buğday ekmeği, avokado sos, füme somon, salatalık, süzme yoğurt, limon, çeri domates, siyah susam",
  "Avokado & jaja": "Avokado ve yumurta",
  "Integralni hljeb sa sjemenkama, avokado sos, kajgana, grčki jogurt, čeri paradajz, crni susam, limun":
    "Tohumlu tam buğday ekmeği, avokado sos, çırpılmış yumurta, süzme yoğurt, çeri domates, siyah susam, limon",
  "Avokado & goveđa pršuta": "Avokado ve dana prosciutto",
  "Integralni hljeb sa sjemenkama, avokado sos, kajgana, pavlaka, grčki jogurt, čeri paradajz, goveđa pršuta, limun":
    "Tohumlu tam buğday ekmeği, avokado sos, çırpılmış yumurta, ekşi krema, süzme yoğurt, çeri domates, dana prosciutto, limon",
  "Prosciutto & Pesto": "Prosciutto ve pesto",
  "Integralni hljeb sa sjemenkama, mocarela, njeguška pršuta, paradajz, rukola, pesto sos":
    "Tohumlu tam buğday ekmeği, mozzarella, Njeguši prosciuttosu, domates, roka, pesto sos",
  "Sendvič omlet": "Omletli sandviç",
  "Integralni hljeb sa sjemenkama, omlet, gauda, pančeta, kulen, pečurke, paradajz, paprika, miks salata, BBQ sos":
    "Tohumlu tam buğday ekmeği, omlet, gouda peyniri, domuz pastırması, kulen, mantar, domates, biber, karışık yeşillik, barbekü sos",
  "Miks salata, krastavac, domaći sir, goveđa pršuta, čeri paradajz, kajgana, pavlaka, hljebčići":
    "Karışık yeşillik, salatalık, köy peyniri, dana prosciutto, çeri domates, çırpılmış yumurta, ekşi krema, ekmek",
  "Crnogorski doručak": "Karadağ kahvaltısı",
  "Tri jaja, kobasica, domaći sir, paradajz, tost hljeb, kupus, ajvar":
    "Üç yumurta, sosis, köy peyniri, domates, tost ekmeği, lahana, ajvar",
  "Turski doručak": "Türk kahvaltısı",
  "Kajgana, goveđa pršuta, krastavac, hljebčići, ajvar, čeri paradajz, kajmak, domaći sir, masline, med":
    "Çırpılmış yumurta, dana prosciutto, salatalık, ekmek, ajvar, çeri domates, kaymak, köy peyniri, zeytin, bal",
  "Engleski doručak": "İngiliz kahvaltısı",
  "Dva jaja, pančeta, kobasica, seoski sir, paradajz, pečurke, tost hljeb, pasulj":
    "İki yumurta, domuz pastırması, sosis, köy peyniri, domates, mantar, tost ekmeği, fasulye",
  "Cezar sendvič": "Sezar sandviç",
  "Pizza tijesto, pileći file, cezar sos, paradajz, iceberg, krastavac, parmezan, pančeta":
    "Pizza hamuru, tavuk fileto, Sezar sos, domates, iceberg marul, salatalık, parmesan, domuz pastırması",
  "Mediteranski sendvič": "Akdeniz sandviç",
  "Pizza tijesto, pesto sos, sušeni paradajz, mocarela, svinjska pršuta, rukola":
    "Pizza hamuru, pesto sos, kurutulmuş domates, mozzarella, domuz prosciutto, roka",
  "Porchetta sendvič": "Porchetta sandviç",
  "Pizza tijesto, kajmak, cjepkana svinjetina i paradajz, pomfrit":
    "Pizza hamuru, kaymak, didiklenmiş domuz eti ve domates, patates kızartması",
  "Mortadela sendvič": "Mortadella sandviç",
  "Pizza tijesto, burata, mortadela, rukola, čeri paradajz, pistać sos":
    "Pizza hamuru, burrata, mortadella, roka, çeri domates, Antep fıstıklı sos",
  "Tuna sendvič": "Ton balıklı sandviç",
  "Pizza tijesto, posni majonez, tunjevina, crveni luk, kisjeli krastavac":
    "Pizza hamuru, vegan mayonez, ton balığı, kırmızı soğan, salatalık turşusu",
  "Klub sendvič": "Kulüp sandviç",
  "Tost hljeb, pančeta, jaje, pileći file, gauda, iceberg, pomfrit, miks zelenih salata sa sosom od nara, paradajz, majonez":
    "Tost ekmeği, domuz pastırması, yumurta, tavuk fileto, gouda peyniri, iceberg marul, patates kızartması, nar soslu karışık yeşillik, domates, mayonez",
  "Proteinski omlet": "Proteinli omlet",
  "Pileći file, bjelance, krem sir, sir ella, tost hljeb, miks zelenih salata":
    "Tavuk fileto, yumurta akı, krem peynir, Ella peyniri, tost ekmeği, karışık yeşillik",
  "Vegetarijanski omlet": "Vejetaryen omlet",
  "Paradajz, pečurke, paprika, miks zelenih salata sa sosom od nara, tost hljeb, kukuruz":
    "Domates, mantar, biber, nar soslu karışık yeşillik, tost ekmeği, mısır",
  "Patlidžan sa šakšukom": "Patlıcanlı shakshuka",
  "Patlidžan, feta sir, crvena paprika, crveni luk, crni luk, kumin, paradajz, dimljena paprika, hljebčići, grčki jogurt, maslinovo ulje":
    "Patlıcan, feta peyniri, kırmızı biber, kırmızı soğan, soğan, kimyon, domates, füme kırmızı biber, ekmek, süzme yoğurt, zeytinyağı",
  Šakšuka: "Shakshuka",
  "Crvena paprika, crni luk, crveni luk, paradajz, kumin, dimljena paprika, dva jaja, feta sir, hljebčići":
    "Kırmızı biber, soğan, kırmızı soğan, domates, kimyon, füme kırmızı biber, iki yumurta, feta peyniri, ekmek",
  "Punjene prženice ćuretina": "Hindili dolgulu yumurtalı ekmek",
  "Bijeli tost, jaje, gauda, ćureći file, ajvar, krem sir, čeri paradajz, parmezan, pomfrit":
    "Beyaz tost ekmeği, yumurta, gouda peyniri, hindi fileto, ajvar, krem peynir, çeri domates, parmesan, patates kızartması",
  "Punjene prženice pančeta": "Domuz pastırmalı dolgulu yumurtalı ekmek",
  "Bijeli tost, jaje, pančeta, feta sir, rukola, ajvar, pomfrit, čeri paradajz":
    "Beyaz tost ekmeği, yumurta, domuz pastırması, feta peyniri, roka, ajvar, patates kızartması, çeri domates",
  "Tost piletina": "Tavuklu tost",
  "Tost hljeb, pesto sos, pileći file, gauda, koktel sos, pomfrit":
    "Tost ekmeği, pesto sos, tavuk fileto, gouda peyniri, kokteyl sos, patates kızartması",
  "Tost svinjetina": "Domuz etli tost",
  "Tost hljeb, čedar sos, gauda, koktel sos, cjepkana svinjetina, pomfrit":
    "Tost ekmeği, cheddar sos, gouda peyniri, kokteyl sos, didiklenmiş domuz eti, patates kızartması",
  "Klasični brunch": "Klasik brunch",
  "Dva jaja, kobasica, paradajz, krastavac, pančeta, tost hljeb, dvije palačinke mliječna čokolada/med i orasi, cijedena pomorandža/limunada":
    "İki yumurta, sosis, domates, salatalık, domuz pastırması, tost ekmeği, sütlü çikolatalı / ballı cevizli iki krep, taze sıkılmış portakal suyu / limonata",
  "Tortilja svinjetina": "Domuz etli tortilla",
  "Tortilja, krem sir, cjepkana svinjetina, paradajz, iceberg, čedar sos, čeri paradajz, pomfrit":
    "Tortilla, krem peynir, didiklenmiş domuz eti, domates, iceberg marul, cheddar sos, çeri domates, patates kızartması",
  "Tortilja piletina": "Tavuklu tortilla",
  "Tortilja, krem sir, pileći file, iceberg, paradajz, parmezan, koktel sos, pomfrit, čeri paradajz":
    "Tortilla, krem peynir, tavuk fileto, iceberg marul, domates, parmesan, kokteyl sos, patates kızartması, çeri domates",
  "Montenegro tortilja": "Montenegro tortilla",
  "Tortilja, jaja, pančeta, gauda, ajvar, kajmak, masline, rukola":
    "Tortilla, yumurta, domuz pastırması, gouda peyniri, ajvar, kaymak, zeytin, roka",
  "Breakfast burito": "Kahvaltı burritosu",
  "Tortilja, pavlaka, kajgana, iceberg, miks salata":
    "Tortilla, ekşi krema, çırpılmış yumurta, iceberg marul, karışık yeşillik",
  "Slani plato": "Şarküteri tabağı",
  "Hljebčići, njeguška pršuta, svinjska pršuta, kulen, pančeta, mocarela, domaći sir, ajvar, kajmak, masline, čeri paradajz":
    "Ekmek, Njeguši prosciuttosu, domuz prosciutto, kulen, domuz pastırması, mozzarella, köy peyniri, ajvar, kaymak, zeytin, çeri domates",
  "Plato sireva": "Peynir tabağı",
  "Mocarela, domaći sir, burata, rukola, med, slatko od borovnice, kajmak, masline, čeri paradajz, hljebčići, ajvar":
    "Mozzarella, köy peyniri, burrata, roka, bal, yaban mersini reçeli, kaymak, zeytin, çeri domates, ekmek, ajvar",
  "Penkejk doručak": "Pankek kahvaltısı",
  "Penkejk, mliječna čokolada, bijela čokolada, jagode, plazma":
    "Pankek, sütlü çikolata, beyaz çikolata, çilek, Plazma",
  Crunch: "Crunch",
  "Granola, grčki jogurt, banana, jagode, bademi, slatko od borovnice":
    "Granola, süzme yoğurt, muz, çilek, badem, yaban mersini reçeli",
  Čija: "Chia",
  "Grčki jogurt, med, breskva, jagode, pistaći, čija u mlijeku":
    "Süzme yoğurt, bal, şeftali, çilek, Antep fıstığı, sütte chia",
  "Naši proizvodi": "Ürünlerimiz",
  "Voćni sok 0.2l": "Meyve suyu 0,2 l",
  "Jabuka, kruška, kajsija, jagoda, malina, višnja, kupina":
    "Elma, armut, kayısı, çilek, ahududu, vişne, böğürtlen",
  "Voćni sok borovnica 0.2l": "Yaban mersini suyu 0,2 l",
  Borovnica: "Yaban mersini",
  "Buenita krem": "Buenita krema",
  "Hari's krem": "Hari's krema",
  "Pistachio krem": "Antep fıstığı kreması",
  "Vanilla krem, jagode, mliječna čokolada":
    "Vanilyalı krema, çilek, sütlü çikolata",
  "Bueno namaz, krem vanila, krem čokolada, cookies keks, bueno čokolada, mliječna čokolada, kinder jaje":
    "Bueno krema, vanilyalı krema, çikolata kreması, Cookies bisküvi, Bueno çikolata, sütlü çikolata, Kinder Sürpriz",
  "Javorov sirup, orašasti plodovi": "Akçaağaç şurubu, kuruyemiş",
  "Pistaći čokolada, bijela čokolada, maline":
    "Antep fıstıklı çikolata, beyaz çikolata, ahududu",
  "Crna čokolada, kikiriki puter, banana":
    "Bitter çikolata, fıstık ezmesi, muz",
  "Malina namaz, jagode, sladoled jagoda, bijela čokolada, crna čokolada, kornet":
    "Ahududu kreması, çilek, çilekli dondurma, beyaz çikolata, bitter çikolata, külah",
  '"Hari\'s" Specijal penkejk': "“Hari's” spesiyal pankek",
  "Pistaći čokolada, bijela čokolada, maline, nar, pistaći sladoled, pistaći, kornet, šećer u prahu":
    "Antep fıstıklı çikolata, beyaz çikolata, ahududu, nar, Antep fıstıklı dondurma, Antep fıstığı, külah, pudra şekeri",
  Pica: "Pizza",
  Giardino: "Giardino",
  "Pelat, pančeta, feta sir, pečurke, čeri paradajz, pizza sir":
    "Soyulmuş domates, domuz pastırması, feta peyniri, mantar, çeri domates, pizza peyniri",
  "Fileti di polo": "Filetti di pollo",
  "Pelat, pileći file, pančeta, pečurke, mocarela, čeri paradajz, pizza sir":
    "Soyulmuş domates, tavuk fileto, domuz pastırması, mantar, mozzarella, çeri domates, pizza peyniri",
  Specijal: "Spesiyal",
  "Pelat, šunka, pančeta, kobasica, pečurke, rukola, pizza sir":
    "Soyulmuş domates, jambon, domuz pastırması, sosis, mantar, roka, pizza peyniri",
  Margarita: "Margherita",
  "Pelat, čeri paradajz, maslinovo ulje, pizza sir":
    "Soyulmuş domates, çeri domates, zeytinyağı, pizza peyniri",
  "Mortadela, pavlaka, pizza sir, čeri paradajz, sos od pistaća, burata":
    "Mortadella, ekşi krema, pizza peyniri, çeri domates, Antep fıstıklı sos, burrata",
  "Prosciutto & Burrata": "Prosciutto ve burrata",
  "Pelat, čeri paradajz, pizza sir, njeguška pršuta, burata":
    "Soyulmuş domates, çeri domates, pizza peyniri, Njeguši prosciuttosu, burrata",
  "Montenegro pica": "Montenegro pizza",
  "Pelat, čeri paradajz, pizza sir, kulen, svinjska pršuta, feta sir":
    "Soyulmuş domates, çeri domates, pizza peyniri, kulen, domuz prosciutto, feta peyniri",
  Kafa: "Kahve",
  Frapućino: "Frappuccino",
  "Moka lješnik": "Fındıklı mocha",
  "Ledena kafa": "Buzlu kahve",
  "Latte sa ukusima": "Aromalı latte",
  "Kapućino pistaći": "Antep fıstıklı cappuccino",
  "Čoko kapućino": "Çikolatalı cappuccino",
  "Affogato vanila": "Vanilyalı affogato",
  "Affogato pistaći": "Antep fıstıklı affogato",
  Šejk: "Shake",
  "Plazma šejk": "Plazma shake",
  "Bounty šejk": "Bounty shake",
  "Snickers šejk": "Snickers shake",
  Milkšejk: "Milkshake",
  "Oreo banana": "Oreo muz",
  "Sladoled od banane, oreo, wellness keks":
    "Muzlu dondurma, Oreo, Wellness bisküvi",
  "Kikiriki keks": "Yer fıstıklı bisküvi",
  "Sladoled cookies, kikiriki puter, bueno čokolada":
    "Cookies dondurma, fıstık ezmesi, Bueno çikolata",
  "Čoko jagoda": "Çikolata çilek",
  "Sladoled od jagode, mliječna čokolada": "Çilekli dondurma, sütlü çikolata",
  Ferrero: "Ferrero",
  Limunada: "Limonatalar",
  "Limunada sa ukusom": "Aromalı limonata",
  Rumenko: "Rumenko",
  "Kakadu vanila": "Kakadu vanilya",
  "Cijeđena pomorandža, vanila sladoled":
    "Taze sıkılmış portakal suyu, vanilyalı dondurma",
  "Topla čokolada": "Sıcak çikolata",
  "Klasična topla čokolada": "Klasik sıcak çikolata",
  "Bueno čokolada sa kikiriki puterom": "Fıstık ezmeli Bueno çikolata",
  "Mliječna čokolada sa jagodama": "Çilekli sütlü çikolata",
  "Čokolada “Hari's” sa oreom i sladoledom od vanile":
    "Oreo ve vanilyalı dondurmalı “Hari's” çikolata",
  "Bueno čokolada sa plazmom": "Plazma bisküvili Bueno çikolata",
  "Mliječna čokolada sa bademom i malinama":
    "Bademli ve ahududulu sütlü çikolata",
  "Bijela čokolada sa malinama i pistaćima":
    "Ahududulu ve Antep fıstıklı beyaz çikolata",
  Čokolada: "Çikolata",
  Tropic: "Tropik",
  Nana: "Nane",
  Malina: "Ahududu",
  Lubenica: "Karpuz",
  "Zelena jabuka": "Yeşil elma",
  "Slane posne krepe": "Tuzlu perhiz krepleri",
  "Slana posna krepa 1": "Tuzlu perhiz krepi 1",
  "Biljni sir, tunjevina, krastavac, čeri paradajz, crveni luk":
    "Bitkisel peynir, ton balığı, salatalık, çeri domates, kırmızı soğan",
  "Slana posna krepa 2": "Tuzlu perhiz krepi 2",
  "Biljni sir, pečurke, kukuruz, paprika, paradajz, masline, rukola":
    "Bitkisel peynir, mantar, mısır, biber, domates, zeytin, roka",
  "Slana posna krepa 3": "Tuzlu perhiz krepi 3",
  "Biljni sir, losos, krastavac, paradajz":
    "Bitkisel peynir, somon, salatalık, domates",
  "Slana posna krepa 4": "Tuzlu perhiz krepi 4",
  "Biljni sir, posni majonez, kukuruz, avokado sos, soja, limun":
    "Bitkisel peynir, vegan mayonez, mısır, avokado sos, soya, limon",
  "Slana posna zapečena krepa 5": "Fırında tuzlu perhiz krepi 5",
  "Biljni sir, soja, masline, koktel sos, kisjeli krastavac":
    "Bitkisel peynir, soya, zeytin, kokteyl sos, salatalık turşusu",
  "Posni sendviči": "Perhiz sandviçleri",
  "Sendvič 1": "Sandviç 1",
  "Biljni sir, avokado sos, masline, pasulj, pomfrit":
    "Bitkisel peynir, avokado sos, zeytin, fasulye, patates kızartması",
  "Sendvič 2": "Sandviç 2",
  "Biljni sir, tunjevina, posni majonez, kisjeli krastavac, crveni luk":
    "Bitkisel peynir, ton balığı, vegan mayonez, salatalık turşusu, kırmızı soğan",
  "Sendvič 3": "Sandviç 3",
  "Biljni sir, pelat, pečurke, soja":
    "Bitkisel peynir, soyulmuş domates, mantar, soya",
  "Posne salate": "Perhiz salataları",
  "Tuna salata": "Ton balıklı salata",
  "Mix salate, tunjevina, posni majonez, kisjeli krastavac, crveni luk, paradajz, kukuruz":
    "Karışık yeşillik, ton balığı, vegan mayonez, salatalık turşusu, kırmızı soğan, domates, mısır",
  "Soja salata": "Soyalı salata",
  "Iceberg salata, soja, kisjeli krastavac, posni majonez, čeri paradajz":
    "Iceberg marul, soya, salatalık turşusu, vegan mayonez, çeri domates",
  "Posne pice": "Perhiz pizzaları",
  "Pizza posna 1": "Perhiz pizzası 1",
  "Pelat, biljni sir, tunjevina, kisjeli krastavac, kukuruz, čeri":
    "Soyulmuş domates, bitkisel peynir, ton balığı, salatalık turşusu, mısır, çeri domates",
  "Pizza posna 2": "Perhiz pizzası 2",
  "Pelat, biljni sir, soja, koktel sos, kisjeli krastavac, čeri":
    "Soyulmuş domates, bitkisel peynir, soya, kokteyl sos, salatalık turşusu, çeri domates",
  "Slatke posne krepe": "Tatlı perhiz krepleri",
  "Slatka posna krepa 1": "Tatlı perhiz krepi 1",
  "Maline, kokos, crna čokolada bez šećera":
    "Ahududu, hindistan cevizi, şekersiz bitter çikolata",
  "Slatka posna krepa 2": "Tatlı perhiz krepi 2",
  "Crna čokolada bez šećera, wellness keks, džem kajsija":
    "Şekersiz bitter çikolata, Wellness bisküvi, kayısı reçeli",
  "Slatka posna krepa 3": "Tatlı perhiz krepi 3",
  "Višnja, posna plazma, crna čokolada bez šećera":
    "Vişne, vegan Plazma bisküvi, şekersiz bitter çikolata",
  "Slatka posna krepa 4": "Tatlı perhiz krepi 4",
  "Crna čokolada bez šećera, džem pomorandža, posna plazma":
    "Şekersiz bitter çikolata, portakal reçeli, vegan Plazma bisküvi",
  "Slatka posna krepa 5": "Tatlı perhiz krepi 5",
  "Pekmez, šećer u prahu": "Meyve ezmesi, pudra şekeri",
  "Slatka posna krepa 6": "Tatlı perhiz krepi 6",
  "Džem kajsija, nar": "Kayısı reçeli, nar",
  "Slatka posna krepa 7": "Tatlı perhiz krepi 7",
  "Slatko šumske jagode, mix orašasto":
    "Yaban çileği reçeli, karışık kuruyemiş",
  "Slatka posna krepa 8": "Tatlı perhiz krepi 8",
  "Kikiriki puter, banana, crna čokolada bez šećera":
    "Fıstık ezmesi, muz, şekersiz bitter çikolata",
  "Slatka posna krepa 9": "Tatlı perhiz krepi 9",
  "Keks, jagode, crna čokolada bez šećera":
    "Bisküvi, çilek, şekersiz bitter çikolata",
  "Posni penkejk": "Perhiz pankekleri",
  "Posni penkejk 1": "Perhiz pankeki 1",
  "Džem od drenjine, šećer u prahu": "Kızılcık reçeli, pudra şekeri",
  "Posni penkejk 2": "Perhiz pankeki 2",
  "Jabuka fil, cimet, orah": "Elma dolgusu, tarçın, ceviz",
  "Posni penkejk 3": "Perhiz pankeki 3",
  "Džem od šipka, banana, pistaći": "Kuşburnu reçeli, muz, Antep fıstığı",
  "Posni penkejk 4": "Perhiz pankeki 4",
  "Javorov sirup, maline, badem": "Akçaağaç şurubu, ahududu, badem",
  "Posni penkejk 5": "Perhiz pankeki 5",
  "Wellness keks, crna čokolada bez šećera, nar":
    "Wellness bisküvi, şekersiz bitter çikolata, nar",
  Potaži: "Kremalı çorbalar",
  "Potaž šargarepa": "Havuç çorbası",
  "Šargarepa, krompir, luk, začini, grčki jogurt, krutoni, susam":
    "Havuç, patates, soğan, baharatlar, süzme yoğurt, kruton, susam",
  "Potaž karfiol": "Karnabahar çorbası",
  "Karfiol, krompir, luk, začini, ulje od tartufa, grčki jogurt, lješnik":
    "Karnabahar, patates, soğan, baharatlar, trüf yağı, süzme yoğurt, fındık",
  Salate: "Salatalar",
  '"Hari\'s" specijal': "“Hari's” spesiyal",
  "Njeguška pršuta, mocarela, iceberg, rukola, jagode, zelena jabuka, lješnik, suvo grožđe, vinegret sos":
    "Njeguši prosciuttosu, mozzarella, iceberg marul, roka, çilek, yeşil elma, fındık, kuru üzüm, vinegret sos",
  "Grčka salata": "Yunan salatası",
  "Paradajz, krastavac, paprika, crveni luk, feta sir, masline, origano, maslinovo ulje":
    "Domates, salatalık, biber, kırmızı soğan, feta peyniri, zeytin, kekik, zeytinyağı",
  "Cezar salata": "Sezar salata",
  "Miks salata, krastavac, krutoni, pileći file, pančeta, parmezan, cezar sos, paradajz":
    "Karışık yeşillik, salatalık, kruton, tavuk fileto, domuz pastırması, parmesan, Sezar sos, domates",
  "Miks salata, posni majonez, kukuruz, kisjeli krastavac, paradajz, crveni luk, tunjevina":
    "Karışık yeşillik, vegan mayonez, mısır, salatalık turşusu, domates, kırmızı soğan, ton balığı",
  Salata: "Salata",
  "Rukola, iceberg, čeri, pesto sos, mocarela":
    "Roka, iceberg marul, çeri domates, pesto sos, mozzarella",
  "Burrata i paradajz": "Burrata ve domates",
  "Burata, aceto balzamiko, njeguška pršuta, paradajz, hljebčići":
    "Burrata, balzamik sirke, Njeguši prosciuttosu, domates, ekmek",
  Sladoled: "Dondurma",
  Pistać: "Antep fıstığı",
  "Slane krepe": "Tuzlu krepler",
  "Šunka, gauda": "Jambon, gouda peyniri",
  "Pančeta, šunka, gauda, pečurke, paradajz, sos od senfa":
    "Domuz pastırması, jambon, gouda peyniri, mantar, domates, hardal sos",
  "Pavlaka, mortadela, iceberg, pistaći sos, gauda":
    "Ekşi krema, mortadella, iceberg marul, Antep fıstıklı sos, gouda peyniri",
  "Pileći file, gauda, kukuruz, pileća salata, susam":
    "Tavuk fileto, gouda peyniri, mısır, tavuk salatası, susam",
  "Mocarela, pileći file, sušeni paradajz, miks salata":
    "Mozzarella, tavuk fileto, kurutulmuş domates, karışık yeşillik",
  "Pileći file, pečurke, gauda, rukola, tartar sos":
    "Tavuk fileto, mantar, gouda peyniri, roka, tartar sos",
  'Specijal "Hari\'s"': "“Hari's” spesiyal",
  "Cjepkana svinjetina, gauda, pečurke, pančeta, paprika, paradajz, sos od senfa, miks zelenih salata, pomfrit":
    "Didiklenmiş domuz eti, gouda peyniri, mantar, domuz pastırması, biber, domates, hardal sos, karışık yeşillik, patates kızartması",
  "Grčka salata krepa": "Yunan salatalı krep",
  "Feta sir, paradajz, krastavac, masline, paprika, crveni luk, origano, maslinovo ulje":
    "Feta peyniri, domates, salatalık, zeytin, biber, kırmızı soğan, kekik, zeytinyağı",
  "Zapečena krepa": "Fırında krep",
  "Pileći file, gauda, kukuruz, paradajz, kajmak":
    "Tavuk fileto, gouda peyniri, mısır, domates, kaymak",
  "Gauda, pileći file, kajmak, pavlaka, parmezan, susam, kisjeli krastavac":
    "Gouda peyniri, tavuk fileto, kaymak, ekşi krema, parmesan, susam, salatalık turşusu",
  "Gauda, pavlaka, juneće meso, kečap, koktel sos, čedar, čeri paradajz i crveni luk":
    "Gouda peyniri, ekşi krema, dana eti, ketçap, kokteyl sos, cheddar, çeri domates ve kırmızı soğan",
  "Grande Italiano": "Grande Italiano",
  "Šunka, svinjska pršuta, kulen, sušeni paradajz, mocarela, pečena crvena paprika, rukola, vinegret sos, parmezan, pesto sos, med, zelena jabuka, pomorandža":
    "Jambon, domuz prosciutto, kulen, kurutulmuş domates, mozzarella, közlenmiş kırmızı biber, roka, vinegret sos, parmesan, pesto sos, bal, yeşil elma, portakal",
  "Cjepkana svinjetina, gauda, feta sir, tartar sos, pančeta, čeri":
    "Didiklenmiş domuz eti, gouda peyniri, feta peyniri, tartar sos, domuz pastırması, çeri domates",
  "Italijanska krepa": "İtalyan krep",
  "Njeguška pršuta, gauda, čeri paradajz, rukola, vinegret sos":
    "Njeguši prosciuttosu, gouda peyniri, çeri domates, roka, vinegret sos",
  "Mediteranska krepa": "Akdeniz krep",
  "Pileći file, gauda, rukola, feta sir, ajvar":
    "Tavuk fileto, gouda peyniri, roka, feta peyniri, ajvar",
  "Američka krepa": "Amerikan krep",
  "Cjepkana svinjetina, pančeta, paradajz, crni luk, BBQ sos, čedar sos":
    "Didiklenmiş domuz eti, domuz pastırması, domates, soğan, barbekü sos, cheddar sos",
  "Chicken cheese zapečena": "Fırında tavuklu peynirli krep",
  "Pileći file, krem sir, gauda, karamelizovani luk, čeri paradajz":
    "Tavuk fileto, krem peynir, gouda peyniri, karamelize soğan, çeri domates",
  "Cheese pork zapečena": "Fırında domuz etli peynirli krep",
  "Cjepkana svinjetina, gauda, čedar sir, karamelizovani luk, čeri paradajz":
    "Didiklenmiş domuz eti, gouda peyniri, cheddar peyniri, karamelize soğan, çeri domates",
  "Slatke krepe": "Tatlı krepler",
  "Mliječna čokolada, višnje, plazma": "Sütlü çikolata, vişne, Plazma",
  "Bueno čokolada, krem vanila, maline":
    "Bueno çikolata, vanilyalı krema, ahududu",
  "Bueno čokolada, jagode, keks": "Bueno çikolata, çilek, bisküvi",
  "Bijela čokolada, mliječna čokolada, oreo, banana, jagode":
    "Beyaz çikolata, sütlü çikolata, Oreo, muz, çilek",
  "Pistaći čokolada, krem limeta, sladoled pistaći":
    "Antep fıstıklı çikolata, misket limonu kreması, Antep fıstıklı dondurma",
  "Bueno namaz, bueno čokolada, bueno sladoled, karamelizovani kikiriki, jagode":
    "Bueno krema, Bueno çikolata, Bueno dondurma, karamelize yer fıstığı, çilek",
  "Speculoos namaz, banana, speculoos keks, crna čokolada, mliječna čokolada":
    "Speculoos krema, muz, Speculoos bisküvi, bitter çikolata, sütlü çikolata",
  "Fil od jabuke, krem sir, šećer u prahu, cimet, med, posni keks":
    "Elma dolgusu, krem peynir, pudra şekeri, tarçın, bal, digestive bisküvi",
  "Mliječna čokolada, maline, plazma u mlijeku":
    "Sütlü çikolata, ahududu, sütte Plazma",
  "Mille - Feuille": "Milföy",
  "Mille namaz, vanila krem, lisnato tijesto, malina, šećer u prahu":
    "Mille krema, vanilyalı krema, milföy hamuru, ahududu, pudra şekeri",
  "Kokos, bijela čokolada, maline": "Hindistan cevizi, beyaz çikolata, ahududu",
  "Pistaći čokolada, maline": "Antep fıstıklı çikolata, ahududu",
  "Dubai krepa": "Dubai krep",
  "Pistaći čokolada, mliječna čokolada, kadaif, pistaći":
    "Antep fıstıklı çikolata, sütlü çikolata, kadayıf, Antep fıstığı",
  "Pistaći čokolada, bijela čokolada, plazma, višnje":
    "Antep fıstıklı çikolata, beyaz çikolata, Plazma, vişne",
  "Malina namaz, banana, mliječna čokolada":
    "Ahududu kreması, muz, sütlü çikolata",
  "Oreo u mlijeku, jagode, bueno čokolada": "Sütte Oreo, çilek, Bueno çikolata",
  "Čoko pasta": "Çoko krema",
  "Mliječna čokolada, banana, čoko kuglice, višnje":
    "Sütlü çikolata, muz, çikolata topları, vişne",
  "Crna čokolada, maline": "Bitter çikolata, ahududu",
  "Krepa vrećica": "Bohça krep",
  "Bijela čokolada, mliječna čokolada, krem od vanile, krem od čokolade, čoko smoki, višnje":
    "Beyaz çikolata, sütlü çikolata, vanilyalı krema, çikolata kreması, Choco Smoki, vişne",
  "Dubai malina": "Dubai ahududu",
  "Bijela čokolada, pistaći čokolada, kadaif, maline":
    "Beyaz çikolata, Antep fıstıklı çikolata, kadayıf, ahududu",
  "Bueno namaz, krem vanila, banana, jagode,cookie keks, mliječna čokolada, bijela čokolada, čoko kuglice,karamelizovani kikiriki, štangla mliječne čokolade, vafel rolnice sa čokoladom":
    "Bueno krema, vanilyalı krema, muz, çilek, Cookies bisküvi, sütlü çikolata, beyaz çikolata, çikolata topları, karamelize yer fıstığı, sütlü çikolata bar, çikolatalı gofret rulo",
  "Krem od kokosa, maline, pistaći čokolada, bijela čokolada":
    "Hindistan cevizi kreması, ahududu, Antep fıstıklı çikolata, beyaz çikolata",
  "Crna čokolada, višnje, sladoled vanila":
    "Bitter çikolata, vişne, vanilyalı dondurma",
  "Coffee krepa": "Kahveli krep",
  "Crna čokolada, Coffee krem, kakao, espresso, maline":
    "Bitter çikolata, kahve kreması, kakao, espresso, ahududu",
  "Pistaći namaz, bijela čokolada, pistaći, pistaći sladoled":
    "Antep fıstığı ezmesi, beyaz çikolata, Antep fıstığı, Antep fıstıklı dondurma",
  "Bueno namaz, bueno čokolada, bijela čokolada, jagode":
    "Bueno krema, Bueno çikolata, beyaz çikolata, çilek",
  "Malina namaz, jagode, pistaći, bijela čokolada, pistaći čokolada, kitkat":
    "Ahududu kreması, çilek, Antep fıstığı, beyaz çikolata, Antep fıstıklı çikolata, KitKat",
  "Slatke vafle": "Tatlı waffle'lar",
  "Višnja, bueno čokolada, bueno sladoled":
    "Vişne, Bueno çikolata, Bueno dondurma",
  "Bijela čokolada, maline, cookies keks":
    "Beyaz çikolata, ahududu, Cookies bisküvi",
  "Krem vanila, mliječna čokolada, jagode, orašasti plodovi":
    "Vanilyalı krema, sütlü çikolata, çilek, kuruyemiş",
  "Mliječna čokolada, jagode, ferrero sladoled, oreo, smarties, čoko rolnice":
    "Sütlü çikolata, çilek, Ferrero dondurma, Oreo, Smarties, çikolatalı rulo",
  "Mliječna čokolada, jagode, vanila sladoled":
    "Sütlü çikolata, çilek, vanilyalı dondurma",
  "Svježe voće, vanila sladoled, mliječna čokolada":
    "Taze meyve, vanilyalı dondurma, sütlü çikolata",
  "Bijela čokolada, pistaći, maline, pistaći sladoled":
    "Beyaz çikolata, Antep fıstığı, ahududu, Antep fıstıklı dondurma",
  "Mliječna čokolada, malina namaz, maline, sladoled banana":
    "Sütlü çikolata, ahududu kreması, ahududu, muzlu dondurma",
  "Pistaći čokolada, bijela čokolada, oreo, jagode":
    "Antep fıstıklı çikolata, beyaz çikolata, Oreo, çilek",
  "Tolos vafla": "Tolos waffle",
  "Dva vafla, vanila sladoled, plazma, vanilla krem, banana, jagode, mliječna čokolada, bijela čokolada":
    "İki waffle, vanilyalı dondurma, Plazma, vanilyalı krema, muz, çilek, sütlü çikolata, beyaz çikolata",
  "Bueno namaz, bueno čokolada, kinder jajc, jagode":
    "Bueno krema, Bueno çikolata, Kinder Sürpriz, çilek",
  "Bueno čokolada, plazma u mlijeku, banane":
    "Bueno çikolata, sütte Plazma, muz",
  "Pistaći namaz, pistaći čokolada, maline":
    "Antep fıstığı ezmesi, Antep fıstıklı çikolata, ahududu",
  "Fil od jabuke, cimet, vanila sladoled":
    "Elma dolgusu, tarçın, vanilyalı dondurma",
  "Dubai vafla": "Dubai waffle",
  "Pistaći čokolada, bijela čokolada, kadaif, pistaći, pistaći špageti sladoled":
    "Antep fıstıklı çikolata, beyaz çikolata, kadayıf, Antep fıstığı, spagetti şeklinde Antep fıstıklı dondurma",
  "Mliječna čokolada, plazma, plazma sladoled, maline":
    "Sütlü çikolata, Plazma, Plazma dondurma, ahududu",
}
