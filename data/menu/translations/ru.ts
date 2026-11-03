import "server-only"

// The menu in Russian, keyed by the Montenegrin text in data/menu/*.ts:
// meEn() and untranslated() look each text up here (types.ts), so the menu
// files and the import script stay as they are. One Montenegrin text has one
// translation everywhere it appears. A text missing here shows in
// Montenegrin: `npm run i18n:check` lists those. Our translation
// (2026-11-03), not the client's.
export const ru: Record<string, string> = {
  Osnova: "Основа",
  Krepa: "Креп",
  Vafla: "Вафля",
  Penkejk: "Панкейк",
  "Mini vafla": "Мини-вафля",
  "Krepa (vegan)": "Креп (веган)",
  "Penkejk (vegan)": "Панкейк (веган)",
  "Suhomesnati proizvodi": "Мясные деликатесы",
  "Sveže pečena svinjetina": "Свежезапечённая свинина",
  "Pileći file": "Куриное филе",
  "Juneće meso": "Говядина",
  Pančeta: "Панчетта",
  "Dimljeni ćureći file": "Копчёное филе индейки",
  "Dimljena kobasica": "Копчёная колбаса",
  Šunka: "Ветчина",
  "Svinjska pršuta": "Свиной пршут",
  "Goveda pršuta": "Говяжий пршут",
  "Njeguška pršuta": "Негушский пршут",
  Kulen: "Кулен",
  Mortadela: "Мортаделла",
  "Dimljeni losos": "Копчёный лосось",
  Povrće: "Овощи",
  Paradajz: "Помидор",
  "Čeri paradajz": "Помидоры черри",
  "Zelena paprika": "Зелёный перец",
  "Crvena paprika": "Красный перец",
  Krastavac: "Огурец",
  "Kisjeli krastavac": "Маринованные огурцы",
  Iceberg: "Айсберг",
  Masline: "Оливки",
  Kukuruz: "Кукуруза",
  "Svježi spanać": "Свежий шпинат",
  Rukola: "Руккола",
  "Sušeni paradajz": "Вяленые томаты",
  Pečurke: "Грибы",
  "Pečurke a la crem": "Грибы в сливочном соусе",
  "Pečena crvena paprika": "Печёный красный перец",
  "Crni luk": "Репчатый лук",
  Pasulj: "Фасоль",
  Kupus: "Капуста",
  Patlidžan: "Баклажан",
  "Miks salata": "Микс салата",
  Sir: "Сыр",
  "Domaći sir": "Домашний сыр",
  Gauda: "Гауда",
  "Feta sir": "Сыр фета",
  "Krem sir": "Сливочный сыр",
  Parmezan: "Пармезан",
  Mocarela: "Моцарелла",
  "Čedar sos": "Соус чеддер",
  "Sir Ella": "Сыр Ella",
  "Veganski-biljni sir": "Веганский растительный сыр",
  Kajmak: "Каймак",
  Burrata: "Буррата",
  Pavlaka: "Сметана",
  "Čedar sir": "Сыр чеддер",
  Razno: "Разное",
  "Kikiriki puter": "Арахисовая паста",
  Jaje: "Яйцо",
  Tunjevina: "Тунец",
  Pomfrit: "Картофель фри",
  "Pomfrit sa feta sirom": "Картофель фри с фетой",
  "Pomfrit sa pančetom": "Картофель фри с панчеттой",
  Tost: "Тост",
  Hljebčići: "Булочки",
  "Salate i sosevi": "Салаты и соусы",
  "Balsamico krema": "Бальзамический крем",
  "Tartar sos": "Соус тартар",
  "Senf sos": "Горчичный соус",
  "Pileća salata": "Куриный салат",
  "BBQ sos": "Соус барбекю",
  "Slatko ljuti sos": "Сладкий соус чили",
  "Vinegret sos": "Соус винегрет",
  "Cezar sos": "Соус «Цезарь»",
  Majonez: "Майонез",
  Senf: "Горчица",
  Kečap: "Кетчуп",
  "Tabasko sos": "Соус табаско",
  "Pesto sos": "Соус песто",
  Ajvar: "Айвар",
  "Sos od nara": "Гранатовый соус",
  "Grčki jogurt": "Греческий йогурт",
  Pelat: "Томаты пелати",
  "Koktel sos": "Коктейльный соус",
  "Burger sos": "Бургерный соус",
  "Pistać sos": "Фисташковый соус",
  "Avokado sos": "Соус из авокадо",
  Čokolade: "Шоколад",
  "Mliječna čokolada": "Молочный шоколад",
  "Bijela čokolada": "Белый шоколад",
  "Crna čokolada": "Тёмный шоколад",
  "Bueno čokolada": "Шоколад Bueno",
  "Miks čokolada": "Шоколадный микс",
  "Pistaći čokolada": "Фисташковый шоколад",
  Voće: "Фрукты",
  Banana: "Банан",
  Jagode: "Клубника",
  Jabuka: "Яблоко",
  Pomorandža: "Апельсин",
  "Sezonsko voće": "Сезонные фрукты",
  Maline: "Малина",
  Višnje: "Вишня",
  Avokado: "Авокадо",
  Nar: "Гранат",
  "Kompot breskva": "Персик в сиропе",
  "Sirupi i slatko": "Сиропы и варенье",
  "Sirup od višnje": "Вишнёвый сироп",
  "Sirup od karamele": "Карамельный сироп",
  "Sirup od čokolade": "Шоколадный сироп",
  "Sirup od jagode": "Клубничный сироп",
  "Sirup od javora": "Кленовый сироп",
  "Slatko od višnji": "Вишнёвое варенье",
  "Slatko od šumskih jagoda": "Варенье из лесной земляники",
  "Slatko od borovnica": "Черничное варенье",
  Med: "Мёд",
  Keks: "Печенье",
  "Oreo u mlijeku": "Oreo в молоке",
  "Plazma keks": "Печенье Plazma",
  "Plazma u mlijeku": "Plazma в молоке",
  "Cookie keks": "Печенье Cookies",
  "Posni keks": "Постное печенье",
  Oreo: "Oreo",
  "Vafel rolnice sa čokoladom": "Вафельные трубочки с шоколадом",
  Speculoos: "Speculoos",
  Kadaif: "Катаифи",
  "Orašasti plodovi": "Орехи",
  Badem: "Миндаль",
  Orasi: "Грецкие орехи",
  Lješnik: "Фундук",
  "Karamelizovani kikiriki": "Карамелизованный арахис",
  Kokos: "Кокос",
  "Miks orašastih plodova": "Ореховый микс",
  Pistaći: "Фисташки",
  "Kremovi i namazi": "Кремы и пасты",
  "Vanila krem": "Ванильный крем",
  Šlag: "Взбитые сливки",
  "Speculoos krem": "Крем Speculoos",
  Puter: "Сливочное масло",
  "Krem od čokolade": "Шоколадный крем",
  "Jabuka fil": "Яблочная начинка",
  "Krem od kokosa": "Кокосовый крем",
  "Coffee krem": "Кофейный крем",
  "Krem od limete": "Лаймовый крем",
  "Pistaći namaz": "Фисташковая паста",
  "Bueno namaz": "Паста Bueno",
  "Maline namaz": "Малиновая паста",
  Alkohol: "Алкоголь",
  Cointreau: "Cointreau",
  Baileys: "Baileys",
  Metaxa: "Metaxa",
  Rum: "Ром",
  "Čoko kuglice": "Шоколадные шарики",
  Smarties: "Smarties",
  "Čoko smoki": "Choco Smoki",
  "Pjenaste bombone": "Маршмеллоу",
  "Štanglica mliječne čokolade": "Батончик молочного шоколада",
  "Čoko bananice": "Шоколадные бананчики",
  "Šarene mrvice": "Цветная посыпка",
  KitKat: "KitKat",
  Munchmallow: "Munchmallow",
  "Kinder jaje": "Kinder Сюрприз",
  Granola: "Гранола",
  "Čija u mlijeku": "Чиа в молоке",
  Sladoledi: "Мороженое",
  Karamela: "Карамель",
  Bueno: "Bueno",
  Ferero: "Ferrero",
  Cookies: "Cookies",
  Jagoda: "Клубника",
  Vanila: "Ваниль",
  Plazma: "Plazma",
  Burgeri: "Бургеры",
  "Burger 1": "Бургер 1",
  "Penkejk, juneće meso, iceberg, burger sos, paradajz, pomfrit, čedar sir":
    "Панкейк, говядина, айсберг, бургерный соус, помидор, картофель фри, сыр чеддер",
  "Burger 2": "Бургер 2",
  "Penkejk, juneće meso, iceberg, crveni luk, majonez, BBQ, pomfrit, čedar sir":
    "Панкейк, говядина, айсберг, красный лук, майонез, барбекю, картофель фри, сыр чеддер",
  Kup: "Кубки",
  "Višnja vanila kup": "Кубок «Вишня и ваниль»",
  "Višnje, sladoled vanila, plazma": "Вишня, ванильное мороженое, Plazma",
  "Pistaći malina kup": "Кубок «Фисташка и малина»",
  "Sladoled pistaći, čokolada pistaći, malina, slatki kornet":
    "Фисташковое мороженое, фисташковый шоколад, малина, сладкий рожок",
  "Dubai malina kup": "Дубайский кубок с малиной",
  "Kadaif, maline, pistaći čokolada, vanila sladoled":
    "Катаифи, малина, фисташковый шоколад, ванильное мороженое",
  "Dubai jagoda": "Дубайский кубок с клубникой",
  "Kadaif, jagode, mliječna čokolada, vanila sladoled":
    "Катаифи, клубника, молочный шоколад, ванильное мороженое",
  "Cookies kup": "Кубок Cookies",
  "Cookies sladoled, cookies keks, bueno čokolada, banane":
    "Мороженое Cookies, печенье Cookies, шоколад Bueno, бананы",
  "Karamela kup": "Карамельный кубок",
  "Sladoled karamela, jagode, banane, toping karamela, karamelizovani kikiriki":
    "Карамельное мороженое, клубника, бананы, карамельный топпинг, карамелизованный арахис",
  "Čoko kup": "Шоколадный кубок",
  "Ferrero sladoled, bueno, mliječna i crna čokolada, cookies keks, šlag, čoko kuglice, roler":
    "Мороженое Ferrero, Bueno, молочный и тёмный шоколад, печенье Cookies, взбитые сливки, шоколадные шарики, вафельная трубочка",
  "Dječiji kup": "Детский кубок",
  "Sladoled vanila, sladoled jagoda, oreo, šlag, šarene mrvice, kornet":
    "Ванильное мороженое, клубничное мороженое, Oreo, взбитые сливки, цветная посыпка, рожок",
  "Voćni kup": "Фруктовый кубок",
  Desert: "Десерты",
  "Jagode sa šlagom": "Клубника со взбитыми сливками",
  "Voćna salata med i orasi": "Фруктовый салат с мёдом и грецкими орехами",
  "Voćna salata": "Фруктовый салат",
  "Banana split": "Банана-сплит",
  "Sladoled jagoda, sladoled vanila, sladoled ferero, banana, jagode, šlag":
    "Клубничное мороженое, ванильное мороженое, мороженое Ferrero, банан, клубника, взбитые сливки",
  Doručak: "Завтрак",
  "Avokado & losos": "Авокадо и лосось",
  "Integlani hljeb sa sjemenkama, avokado sos, dimljeni losos, krastavac, grčki jogurt, limun, čeri paradajz, crni susam":
    "Цельнозерновой хлеб с семенами, соус из авокадо, копчёный лосось, огурец, греческий йогурт, лимон, помидоры черри, чёрный кунжут",
  "Avokado & jaja": "Авокадо и яйца",
  "Integralni hljeb sa sjemenkama, avokado sos, kajgana, grčki jogurt, čeri paradajz, crni susam, limun":
    "Цельнозерновой хлеб с семенами, соус из авокадо, яичница-болтунья, греческий йогурт, помидоры черри, чёрный кунжут, лимон",
  "Avokado & goveđa pršuta": "Авокадо и говяжий пршут",
  "Integralni hljeb sa sjemenkama, avokado sos, kajgana, pavlaka, grčki jogurt, čeri paradajz, goveđa pršuta, limun":
    "Цельнозерновой хлеб с семенами, соус из авокадо, яичница-болтунья, сметана, греческий йогурт, помидоры черри, говяжий пршут, лимон",
  "Prosciutto & Pesto": "Прошутто и песто",
  "Integralni hljeb sa sjemenkama, mocarela, njeguška pršuta, paradajz, rukola, pesto sos":
    "Цельнозерновой хлеб с семенами, моцарелла, негушский пршут, помидор, руккола, соус песто",
  "Sendvič omlet": "Сэндвич с омлетом",
  "Integralni hljeb sa sjemenkama, omlet, gauda, pančeta, kulen, pečurke, paradajz, paprika, miks salata, BBQ sos":
    "Цельнозерновой хлеб с семенами, омлет, гауда, панчетта, кулен, грибы, помидор, перец, микс салата, соус барбекю",
  "Miks salata, krastavac, domaći sir, goveđa pršuta, čeri paradajz, kajgana, pavlaka, hljebčići":
    "Микс салата, огурец, домашний сыр, говяжий пршут, помидоры черри, яичница-болтунья, сметана, булочки",
  "Crnogorski doručak": "Черногорский завтрак",
  "Tri jaja, kobasica, domaći sir, paradajz, tost hljeb, kupus, ajvar":
    "Три яйца, колбаса, домашний сыр, помидор, тостовый хлеб, капуста, айвар",
  "Turski doručak": "Турецкий завтрак",
  "Kajgana, goveđa pršuta, krastavac, hljebčići, ajvar, čeri paradajz, kajmak, domaći sir, masline, med":
    "Яичница-болтунья, говяжий пршут, огурец, булочки, айвар, помидоры черри, каймак, домашний сыр, оливки, мёд",
  "Engleski doručak": "Английский завтрак",
  "Dva jaja, pančeta, kobasica, seoski sir, paradajz, pečurke, tost hljeb, pasulj":
    "Два яйца, панчетта, колбаса, деревенский сыр, помидор, грибы, тостовый хлеб, фасоль",
  "Cezar sendvič": "Сэндвич «Цезарь»",
  "Pizza tijesto, pileći file, cezar sos, paradajz, iceberg, krastavac, parmezan, pančeta":
    "Тесто для пиццы, куриное филе, соус «Цезарь», помидор, айсберг, огурец, пармезан, панчетта",
  "Mediteranski sendvič": "Средиземноморский сэндвич",
  "Pizza tijesto, pesto sos, sušeni paradajz, mocarela, svinjska pršuta, rukola":
    "Тесто для пиццы, соус песто, вяленые томаты, моцарелла, свиной пршут, руккола",
  "Porchetta sendvič": "Сэндвич с порчеттой",
  "Pizza tijesto, kajmak, cjepkana svinjetina i paradajz, pomfrit":
    "Тесто для пиццы, каймак, рваная свинина и помидоры, картофель фри",
  "Mortadela sendvič": "Сэндвич с мортаделлой",
  "Pizza tijesto, burata, mortadela, rukola, čeri paradajz, pistać sos":
    "Тесто для пиццы, буррата, мортаделла, руккола, помидоры черри, фисташковый соус",
  "Tuna sendvič": "Сэндвич с тунцом",
  "Pizza tijesto, posni majonez, tunjevina, crveni luk, kisjeli krastavac":
    "Тесто для пиццы, постный майонез, тунец, красный лук, маринованные огурцы",
  "Klub sendvič": "Клаб-сэндвич",
  "Tost hljeb, pančeta, jaje, pileći file, gauda, iceberg, pomfrit, miks zelenih salata sa sosom od nara, paradajz, majonez":
    "Тостовый хлеб, панчетта, яйцо, куриное филе, гауда, айсберг, картофель фри, микс зелёных салатов с гранатовым соусом, помидор, майонез",
  "Proteinski omlet": "Протеиновый омлет",
  "Pileći file, bjelance, krem sir, sir ella, tost hljeb, miks zelenih salata":
    "Куриное филе, яичный белок, сливочный сыр, сыр Ella, тостовый хлеб, микс зелёных салатов",
  "Vegetarijanski omlet": "Вегетарианский омлет",
  "Paradajz, pečurke, paprika, miks zelenih salata sa sosom od nara, tost hljeb, kukuruz":
    "Помидор, грибы, перец, микс зелёных салатов с гранатовым соусом, тостовый хлеб, кукуруза",
  "Patlidžan sa šakšukom": "Баклажан с шакшукой",
  "Patlidžan, feta sir, crvena paprika, crveni luk, crni luk, kumin, paradajz, dimljena paprika, hljebčići, grčki jogurt, maslinovo ulje":
    "Баклажан, сыр фета, красный перец, красный лук, репчатый лук, кумин, помидор, копчёная паприка, булочки, греческий йогурт, оливковое масло",
  Šakšuka: "Шакшука",
  "Crvena paprika, crni luk, crveni luk, paradajz, kumin, dimljena paprika, dva jaja, feta sir, hljebčići":
    "Красный перец, репчатый лук, красный лук, помидор, кумин, копчёная паприка, два яйца, сыр фета, булочки",
  "Punjene prženice ćuretina": "Фаршированные гренки с индейкой",
  "Bijeli tost, jaje, gauda, ćureći file, ajvar, krem sir, čeri paradajz, parmezan, pomfrit":
    "Белый тост, яйцо, гауда, филе индейки, айвар, сливочный сыр, помидоры черри, пармезан, картофель фри",
  "Punjene prženice pančeta": "Фаршированные гренки с панчеттой",
  "Bijeli tost, jaje, pančeta, feta sir, rukola, ajvar, pomfrit, čeri paradajz":
    "Белый тост, яйцо, панчетта, сыр фета, руккола, айвар, картофель фри, помидоры черри",
  "Tost piletina": "Тост с курицей",
  "Tost hljeb, pesto sos, pileći file, gauda, koktel sos, pomfrit":
    "Тостовый хлеб, соус песто, куриное филе, гауда, коктейльный соус, картофель фри",
  "Tost svinjetina": "Тост со свининой",
  "Tost hljeb, čedar sos, gauda, koktel sos, cjepkana svinjetina, pomfrit":
    "Тостовый хлеб, соус чеддер, гауда, коктейльный соус, рваная свинина, картофель фри",
  "Klasični brunch": "Классический бранч",
  "Dva jaja, kobasica, paradajz, krastavac, pančeta, tost hljeb, dvije palačinke mliječna čokolada/med i orasi, cijedena pomorandža/limunada":
    "Два яйца, колбаса, помидор, огурец, панчетта, тостовый хлеб, два блинчика с молочным шоколадом / мёдом и грецкими орехами, свежевыжатый апельсиновый сок / лимонад",
  "Tortilja svinjetina": "Тортилья со свининой",
  "Tortilja, krem sir, cjepkana svinjetina, paradajz, iceberg, čedar sos, čeri paradajz, pomfrit":
    "Тортилья, сливочный сыр, рваная свинина, помидор, айсберг, соус чеддер, помидоры черри, картофель фри",
  "Tortilja piletina": "Тортилья с курицей",
  "Tortilja, krem sir, pileći file, iceberg, paradajz, parmezan, koktel sos, pomfrit, čeri paradajz":
    "Тортилья, сливочный сыр, куриное филе, айсберг, помидор, пармезан, коктейльный соус, картофель фри, помидоры черри",
  "Montenegro tortilja": "Тортилья «Монтенегро»",
  "Tortilja, jaja, pančeta, gauda, ajvar, kajmak, masline, rukola":
    "Тортилья, яйца, панчетта, гауда, айвар, каймак, оливки, руккола",
  "Breakfast burito": "Буррито на завтрак",
  "Tortilja, pavlaka, kajgana, iceberg, miks salata":
    "Тортилья, сметана, яичница-болтунья, айсберг, микс салата",
  "Slani plato": "Закусочная тарелка",
  "Hljebčići, njeguška pršuta, svinjska pršuta, kulen, pančeta, mocarela, domaći sir, ajvar, kajmak, masline, čeri paradajz":
    "Булочки, негушский пршут, свиной пршут, кулен, панчетта, моцарелла, домашний сыр, айвар, каймак, оливки, помидоры черри",
  "Plato sireva": "Сырная тарелка",
  "Mocarela, domaći sir, burata, rukola, med, slatko od borovnice, kajmak, masline, čeri paradajz, hljebčići, ajvar":
    "Моцарелла, домашний сыр, буррата, руккола, мёд, черничное варенье, каймак, оливки, помидоры черри, булочки, айвар",
  "Penkejk doručak": "Завтрак с панкейками",
  "Penkejk, mliječna čokolada, bijela čokolada, jagode, plazma":
    "Панкейк, молочный шоколад, белый шоколад, клубника, Plazma",
  Crunch: "Кранч",
  "Granola, grčki jogurt, banana, jagode, bademi, slatko od borovnice":
    "Гранола, греческий йогурт, банан, клубника, миндаль, черничное варенье",
  Čija: "Чиа",
  "Grčki jogurt, med, breskva, jagode, pistaći, čija u mlijeku":
    "Греческий йогурт, мёд, персик, клубника, фисташки, чиа в молоке",
  "Naši proizvodi": "Наша продукция",
  "Voćni sok 0.2l": "Фруктовый сок 0,2 л",
  "Jabuka, kruška, kajsija, jagoda, malina, višnja, kupina":
    "Яблоко, груша, абрикос, клубника, малина, вишня, ежевика",
  "Voćni sok borovnica 0.2l": "Черничный сок 0,2 л",
  Borovnica: "Черника",
  "Buenita krem": "Крем Buenita",
  "Hari's krem": "Крем Hari's",
  "Pistachio krem": "Фисташковый крем",
  "Vanilla krem, jagode, mliječna čokolada":
    "Ванильный крем, клубника, молочный шоколад",
  "Bueno namaz, krem vanila, krem čokolada, cookies keks, bueno čokolada, mliječna čokolada, kinder jaje":
    "Паста Bueno, ванильный крем, шоколадный крем, печенье Cookies, шоколад Bueno, молочный шоколад, Kinder Сюрприз",
  "Javorov sirup, orašasti plodovi": "Кленовый сироп, орехи",
  "Pistaći čokolada, bijela čokolada, maline":
    "Фисташковый шоколад, белый шоколад, малина",
  "Crna čokolada, kikiriki puter, banana":
    "Тёмный шоколад, арахисовая паста, банан",
  "Malina namaz, jagode, sladoled jagoda, bijela čokolada, crna čokolada, kornet":
    "Малиновая паста, клубника, клубничное мороженое, белый шоколад, тёмный шоколад, рожок",
  '"Hari\'s" Specijal penkejk': "Фирменный панкейк «Hari's»",
  "Pistaći čokolada, bijela čokolada, maline, nar, pistaći sladoled, pistaći, kornet, šećer u prahu":
    "Фисташковый шоколад, белый шоколад, малина, гранат, фисташковое мороженое, фисташки, рожок, сахарная пудра",
  Pica: "Пицца",
  Giardino: "Джардино",
  "Pelat, pančeta, feta sir, pečurke, čeri paradajz, pizza sir":
    "Томаты пелати, панчетта, сыр фета, грибы, помидоры черри, сыр для пиццы",
  "Fileti di polo": "Филетти ди полло",
  "Pelat, pileći file, pančeta, pečurke, mocarela, čeri paradajz, pizza sir":
    "Томаты пелати, куриное филе, панчетта, грибы, моцарелла, помидоры черри, сыр для пиццы",
  Specijal: "Специальная",
  "Pelat, šunka, pančeta, kobasica, pečurke, rukola, pizza sir":
    "Томаты пелати, ветчина, панчетта, колбаса, грибы, руккола, сыр для пиццы",
  Margarita: "Маргарита",
  "Pelat, čeri paradajz, maslinovo ulje, pizza sir":
    "Томаты пелати, помидоры черри, оливковое масло, сыр для пиццы",
  "Mortadela, pavlaka, pizza sir, čeri paradajz, sos od pistaća, burata":
    "Мортаделла, сметана, сыр для пиццы, помидоры черри, фисташковый соус, буррата",
  "Prosciutto & Burrata": "Прошутто и буррата",
  "Pelat, čeri paradajz, pizza sir, njeguška pršuta, burata":
    "Томаты пелати, помидоры черри, сыр для пиццы, негушский пршут, буррата",
  "Montenegro pica": "Пицца «Монтенегро»",
  "Pelat, čeri paradajz, pizza sir, kulen, svinjska pršuta, feta sir":
    "Томаты пелати, помидоры черри, сыр для пиццы, кулен, свиной пршут, сыр фета",
  Kafa: "Кофе",
  Frapućino: "Фраппучино",
  "Moka lješnik": "Мокко с фундуком",
  "Ledena kafa": "Айс-кофе",
  "Latte sa ukusima": "Латте со вкусом на выбор",
  "Kapućino pistaći": "Фисташковый капучино",
  "Čoko kapućino": "Шоко-капучино",
  "Affogato vanila": "Ванильный аффогато",
  "Affogato pistaći": "Фисташковый аффогато",
  Šejk: "Шейки",
  "Plazma šejk": "Шейк Plazma",
  "Bounty šejk": "Шейк Bounty",
  "Snickers šejk": "Шейк Snickers",
  Milkšejk: "Милкшейки",
  "Oreo banana": "Oreo и банан",
  "Sladoled od banane, oreo, wellness keks":
    "Банановое мороженое, Oreo, печенье Wellness",
  "Kikiriki keks": "Арахисовое печенье",
  "Sladoled cookies, kikiriki puter, bueno čokolada":
    "Мороженое Cookies, арахисовая паста, шоколад Bueno",
  "Čoko jagoda": "Шоколад и клубника",
  "Sladoled od jagode, mliječna čokolada":
    "Клубничное мороженое, молочный шоколад",
  Ferrero: "Ferrero",
  Limunada: "Лимонады",
  "Limunada sa ukusom": "Лимонад со вкусом на выбор",
  Rumenko: "Руменко",
  "Kakadu vanila": "Какаду ваниль",
  "Cijeđena pomorandža, vanila sladoled":
    "Свежевыжатый апельсиновый сок, ванильное мороженое",
  "Topla čokolada": "Горячий шоколад",
  "Klasična topla čokolada": "Классический горячий шоколад",
  "Bueno čokolada sa kikiriki puterom": "Шоколад Bueno с арахисовой пастой",
  "Mliječna čokolada sa jagodama": "Молочный шоколад с клубникой",
  "Čokolada “Hari's” sa oreom i sladoledom od vanile":
    "Шоколад «Hari's» с Oreo и ванильным мороженым",
  "Bueno čokolada sa plazmom": "Шоколад Bueno с Plazma",
  "Mliječna čokolada sa bademom i malinama":
    "Молочный шоколад с миндалём и малиной",
  "Bijela čokolada sa malinama i pistaćima":
    "Белый шоколад с малиной и фисташками",
  Čokolada: "Шоколад",
  Tropic: "Тропик",
  Nana: "Мята",
  Malina: "Малина",
  Lubenica: "Арбуз",
  "Zelena jabuka": "Зелёное яблоко",
  "Slane posne krepe": "Сытные постные крепы",
  "Slana posna krepa 1": "Сытный постный креп 1",
  "Biljni sir, tunjevina, krastavac, čeri paradajz, crveni luk":
    "Растительный сыр, тунец, огурец, помидоры черри, красный лук",
  "Slana posna krepa 2": "Сытный постный креп 2",
  "Biljni sir, pečurke, kukuruz, paprika, paradajz, masline, rukola":
    "Растительный сыр, грибы, кукуруза, перец, помидор, оливки, руккола",
  "Slana posna krepa 3": "Сытный постный креп 3",
  "Biljni sir, losos, krastavac, paradajz":
    "Растительный сыр, лосось, огурец, помидор",
  "Slana posna krepa 4": "Сытный постный креп 4",
  "Biljni sir, posni majonez, kukuruz, avokado sos, soja, limun":
    "Растительный сыр, постный майонез, кукуруза, соус из авокадо, соя, лимон",
  "Slana posna zapečena krepa 5": "Запечённый сытный постный креп 5",
  "Biljni sir, soja, masline, koktel sos, kisjeli krastavac":
    "Растительный сыр, соя, оливки, коктейльный соус, маринованные огурцы",
  "Posni sendviči": "Постные сэндвичи",
  "Sendvič 1": "Сэндвич 1",
  "Biljni sir, avokado sos, masline, pasulj, pomfrit":
    "Растительный сыр, соус из авокадо, оливки, фасоль, картофель фри",
  "Sendvič 2": "Сэндвич 2",
  "Biljni sir, tunjevina, posni majonez, kisjeli krastavac, crveni luk":
    "Растительный сыр, тунец, постный майонез, маринованные огурцы, красный лук",
  "Sendvič 3": "Сэндвич 3",
  "Biljni sir, pelat, pečurke, soja":
    "Растительный сыр, томаты пелати, грибы, соя",
  "Posne salate": "Постные салаты",
  "Tuna salata": "Салат с тунцом",
  "Mix salate, tunjevina, posni majonez, kisjeli krastavac, crveni luk, paradajz, kukuruz":
    "Микс салата, тунец, постный майонез, маринованные огурцы, красный лук, помидор, кукуруза",
  "Soja salata": "Салат с соей",
  "Iceberg salata, soja, kisjeli krastavac, posni majonez, čeri paradajz":
    "Салат айсберг, соя, маринованные огурцы, постный майонез, помидоры черри",
  "Posne pice": "Постные пиццы",
  "Pizza posna 1": "Постная пицца 1",
  "Pelat, biljni sir, tunjevina, kisjeli krastavac, kukuruz, čeri":
    "Томаты пелати, растительный сыр, тунец, маринованные огурцы, кукуруза, помидоры черри",
  "Pizza posna 2": "Постная пицца 2",
  "Pelat, biljni sir, soja, koktel sos, kisjeli krastavac, čeri":
    "Томаты пелати, растительный сыр, соя, коктейльный соус, маринованные огурцы, помидоры черри",
  "Slatke posne krepe": "Сладкие постные крепы",
  "Slatka posna krepa 1": "Сладкий постный креп 1",
  "Maline, kokos, crna čokolada bez šećera":
    "Малина, кокос, тёмный шоколад без сахара",
  "Slatka posna krepa 2": "Сладкий постный креп 2",
  "Crna čokolada bez šećera, wellness keks, džem kajsija":
    "Тёмный шоколад без сахара, печенье Wellness, абрикосовый джем",
  "Slatka posna krepa 3": "Сладкий постный креп 3",
  "Višnja, posna plazma, crna čokolada bez šećera":
    "Вишня, постное печенье Plazma, тёмный шоколад без сахара",
  "Slatka posna krepa 4": "Сладкий постный креп 4",
  "Crna čokolada bez šećera, džem pomorandža, posna plazma":
    "Тёмный шоколад без сахара, апельсиновый джем, постное печенье Plazma",
  "Slatka posna krepa 5": "Сладкий постный креп 5",
  "Pekmez, šećer u prahu": "Повидло, сахарная пудра",
  "Slatka posna krepa 6": "Сладкий постный креп 6",
  "Džem kajsija, nar": "Абрикосовый джем, гранат",
  "Slatka posna krepa 7": "Сладкий постный креп 7",
  "Slatko šumske jagode, mix orašasto":
    "Варенье из лесной земляники, ореховый микс",
  "Slatka posna krepa 8": "Сладкий постный креп 8",
  "Kikiriki puter, banana, crna čokolada bez šećera":
    "Арахисовая паста, банан, тёмный шоколад без сахара",
  "Slatka posna krepa 9": "Сладкий постный креп 9",
  "Keks, jagode, crna čokolada bez šećera":
    "Печенье, клубника, тёмный шоколад без сахара",
  "Posni penkejk": "Постные панкейки",
  "Posni penkejk 1": "Постный панкейк 1",
  "Džem od drenjine, šećer u prahu": "Кизиловый джем, сахарная пудра",
  "Posni penkejk 2": "Постный панкейк 2",
  "Jabuka fil, cimet, orah": "Яблочная начинка, корица, грецкий орех",
  "Posni penkejk 3": "Постный панкейк 3",
  "Džem od šipka, banana, pistaći": "Джем из шиповника, банан, фисташки",
  "Posni penkejk 4": "Постный панкейк 4",
  "Javorov sirup, maline, badem": "Кленовый сироп, малина, миндаль",
  "Posni penkejk 5": "Постный панкейк 5",
  "Wellness keks, crna čokolada bez šećera, nar":
    "Печенье Wellness, тёмный шоколад без сахара, гранат",
  Potaži: "Крем-супы",
  "Potaž šargarepa": "Морковный крем-суп",
  "Šargarepa, krompir, luk, začini, grčki jogurt, krutoni, susam":
    "Морковь, картофель, лук, специи, греческий йогурт, гренки, кунжут",
  "Potaž karfiol": "Крем-суп из цветной капусты",
  "Karfiol, krompir, luk, začini, ulje od tartufa, grčki jogurt, lješnik":
    "Цветная капуста, картофель, лук, специи, трюфельное масло, греческий йогурт, фундук",
  Salate: "Салаты",
  '"Hari\'s" specijal': "Фирменный «Hari's»",
  "Njeguška pršuta, mocarela, iceberg, rukola, jagode, zelena jabuka, lješnik, suvo grožđe, vinegret sos":
    "Негушский пршут, моцарелла, айсберг, руккола, клубника, зелёное яблоко, фундук, изюм, соус винегрет",
  "Grčka salata": "Греческий салат",
  "Paradajz, krastavac, paprika, crveni luk, feta sir, masline, origano, maslinovo ulje":
    "Помидор, огурец, перец, красный лук, сыр фета, оливки, орегано, оливковое масло",
  "Cezar salata": "Салат «Цезарь»",
  "Miks salata, krastavac, krutoni, pileći file, pančeta, parmezan, cezar sos, paradajz":
    "Микс салата, огурец, гренки, куриное филе, панчетта, пармезан, соус «Цезарь», помидор",
  "Miks salata, posni majonez, kukuruz, kisjeli krastavac, paradajz, crveni luk, tunjevina":
    "Микс салата, постный майонез, кукуруза, маринованные огурцы, помидор, красный лук, тунец",
  Salata: "Салат",
  "Rukola, iceberg, čeri, pesto sos, mocarela":
    "Руккола, айсберг, помидоры черри, соус песто, моцарелла",
  "Burrata i paradajz": "Буррата с помидорами",
  "Burata, aceto balzamiko, njeguška pršuta, paradajz, hljebčići":
    "Буррата, бальзамический уксус, негушский пршут, помидор, булочки",
  Sladoled: "Мороженое",
  Pistać: "Фисташка",
  "Slane krepe": "Сытные крепы",
  "Šunka, gauda": "Ветчина, гауда",
  "Pančeta, šunka, gauda, pečurke, paradajz, sos od senfa":
    "Панчетта, ветчина, гауда, грибы, помидор, горчичный соус",
  "Pavlaka, mortadela, iceberg, pistaći sos, gauda":
    "Сметана, мортаделла, айсберг, фисташковый соус, гауда",
  "Pileći file, gauda, kukuruz, pileća salata, susam":
    "Куриное филе, гауда, кукуруза, куриный салат, кунжут",
  "Mocarela, pileći file, sušeni paradajz, miks salata":
    "Моцарелла, куриное филе, вяленые томаты, микс салата",
  "Pileći file, pečurke, gauda, rukola, tartar sos":
    "Куриное филе, грибы, гауда, руккола, соус тартар",
  'Specijal "Hari\'s"': "Фирменный «Hari's»",
  "Cjepkana svinjetina, gauda, pečurke, pančeta, paprika, paradajz, sos od senfa, miks zelenih salata, pomfrit":
    "Рваная свинина, гауда, грибы, панчетта, перец, помидор, горчичный соус, микс зелёных салатов, картофель фри",
  "Grčka salata krepa": "Креп «Греческий салат»",
  "Feta sir, paradajz, krastavac, masline, paprika, crveni luk, origano, maslinovo ulje":
    "Сыр фета, помидор, огурец, оливки, перец, красный лук, орегано, оливковое масло",
  "Zapečena krepa": "Запечённый креп",
  "Pileći file, gauda, kukuruz, paradajz, kajmak":
    "Куриное филе, гауда, кукуруза, помидор, каймак",
  "Gauda, pileći file, kajmak, pavlaka, parmezan, susam, kisjeli krastavac":
    "Гауда, куриное филе, каймак, сметана, пармезан, кунжут, маринованные огурцы",
  "Gauda, pavlaka, juneće meso, kečap, koktel sos, čedar, čeri paradajz i crveni luk":
    "Гауда, сметана, говядина, кетчуп, коктейльный соус, чеддер, помидоры черри и красный лук",
  "Grande Italiano": "Гранде Итальяно",
  "Šunka, svinjska pršuta, kulen, sušeni paradajz, mocarela, pečena crvena paprika, rukola, vinegret sos, parmezan, pesto sos, med, zelena jabuka, pomorandža":
    "Ветчина, свиной пршут, кулен, вяленые томаты, моцарелла, печёный красный перец, руккола, соус винегрет, пармезан, соус песто, мёд, зелёное яблоко, апельсин",
  "Cjepkana svinjetina, gauda, feta sir, tartar sos, pančeta, čeri":
    "Рваная свинина, гауда, сыр фета, соус тартар, панчетта, помидоры черри",
  "Italijanska krepa": "Итальянский креп",
  "Njeguška pršuta, gauda, čeri paradajz, rukola, vinegret sos":
    "Негушский пршут, гауда, помидоры черри, руккола, соус винегрет",
  "Mediteranska krepa": "Средиземноморский креп",
  "Pileći file, gauda, rukola, feta sir, ajvar":
    "Куриное филе, гауда, руккола, сыр фета, айвар",
  "Američka krepa": "Американский креп",
  "Cjepkana svinjetina, pančeta, paradajz, crni luk, BBQ sos, čedar sos":
    "Рваная свинина, панчетта, помидор, репчатый лук, соус барбекю, соус чеддер",
  "Chicken cheese zapečena": "Запечённый креп с курицей и сыром",
  "Pileći file, krem sir, gauda, karamelizovani luk, čeri paradajz":
    "Куриное филе, сливочный сыр, гауда, карамелизованный лук, помидоры черри",
  "Cheese pork zapečena": "Запечённый креп со свининой и сыром",
  "Cjepkana svinjetina, gauda, čedar sir, karamelizovani luk, čeri paradajz":
    "Рваная свинина, гауда, сыр чеддер, карамелизованный лук, помидоры черри",
  "Slatke krepe": "Сладкие крепы",
  "Mliječna čokolada, višnje, plazma": "Молочный шоколад, вишня, Plazma",
  "Bueno čokolada, krem vanila, maline":
    "Шоколад Bueno, ванильный крем, малина",
  "Bueno čokolada, jagode, keks": "Шоколад Bueno, клубника, печенье",
  "Bijela čokolada, mliječna čokolada, oreo, banana, jagode":
    "Белый шоколад, молочный шоколад, Oreo, банан, клубника",
  "Pistaći čokolada, krem limeta, sladoled pistaći":
    "Фисташковый шоколад, лаймовый крем, фисташковое мороженое",
  "Bueno namaz, bueno čokolada, bueno sladoled, karamelizovani kikiriki, jagode":
    "Паста Bueno, шоколад Bueno, мороженое Bueno, карамелизованный арахис, клубника",
  "Speculoos namaz, banana, speculoos keks, crna čokolada, mliječna čokolada":
    "Паста Speculoos, банан, печенье Speculoos, тёмный шоколад, молочный шоколад",
  "Fil od jabuke, krem sir, šećer u prahu, cimet, med, posni keks":
    "Яблочная начинка, сливочный сыр, сахарная пудра, корица, мёд, постное печенье",
  "Mliječna čokolada, maline, plazma u mlijeku":
    "Молочный шоколад, малина, Plazma в молоке",
  "Mille - Feuille": "Мильфей",
  "Mille namaz, vanila krem, lisnato tijesto, malina, šećer u prahu":
    "Паста Mille, ванильный крем, слоёное тесто, малина, сахарная пудра",
  "Kokos, bijela čokolada, maline": "Кокос, белый шоколад, малина",
  "Pistaći čokolada, maline": "Фисташковый шоколад, малина",
  "Dubai krepa": "Дубайский креп",
  "Pistaći čokolada, mliječna čokolada, kadaif, pistaći":
    "Фисташковый шоколад, молочный шоколад, катаифи, фисташки",
  "Pistaći čokolada, bijela čokolada, plazma, višnje":
    "Фисташковый шоколад, белый шоколад, Plazma, вишня",
  "Malina namaz, banana, mliječna čokolada":
    "Малиновая паста, банан, молочный шоколад",
  "Oreo u mlijeku, jagode, bueno čokolada":
    "Oreo в молоке, клубника, шоколад Bueno",
  "Čoko pasta": "Шоко-паста",
  "Mliječna čokolada, banana, čoko kuglice, višnje":
    "Молочный шоколад, банан, шоколадные шарики, вишня",
  "Crna čokolada, maline": "Тёмный шоколад, малина",
  "Krepa vrećica": "Креп-мешочек",
  "Bijela čokolada, mliječna čokolada, krem od vanile, krem od čokolade, čoko smoki, višnje":
    "Белый шоколад, молочный шоколад, ванильный крем, шоколадный крем, Choco Smoki, вишня",
  "Dubai malina": "Дубайский креп с малиной",
  "Bijela čokolada, pistaći čokolada, kadaif, maline":
    "Белый шоколад, фисташковый шоколад, катаифи, малина",
  "Bueno namaz, krem vanila, banana, jagode,cookie keks, mliječna čokolada, bijela čokolada, čoko kuglice,karamelizovani kikiriki, štangla mliječne čokolade, vafel rolnice sa čokoladom":
    "Паста Bueno, ванильный крем, банан, клубника, печенье Cookies, молочный шоколад, белый шоколад, шоколадные шарики, карамелизованный арахис, батончик молочного шоколада, вафельные трубочки с шоколадом",
  "Krem od kokosa, maline, pistaći čokolada, bijela čokolada":
    "Кокосовый крем, малина, фисташковый шоколад, белый шоколад",
  "Crna čokolada, višnje, sladoled vanila":
    "Тёмный шоколад, вишня, ванильное мороженое",
  "Coffee krepa": "Кофейный креп",
  "Crna čokolada, Coffee krem, kakao, espresso, maline":
    "Тёмный шоколад, кофейный крем, какао, эспрессо, малина",
  "Pistaći namaz, bijela čokolada, pistaći, pistaći sladoled":
    "Фисташковая паста, белый шоколад, фисташки, фисташковое мороженое",
  "Bueno namaz, bueno čokolada, bijela čokolada, jagode":
    "Паста Bueno, шоколад Bueno, белый шоколад, клубника",
  "Malina namaz, jagode, pistaći, bijela čokolada, pistaći čokolada, kitkat":
    "Малиновая паста, клубника, фисташки, белый шоколад, фисташковый шоколад, KitKat",
  "Slatke vafle": "Сладкие вафли",
  "Višnja, bueno čokolada, bueno sladoled":
    "Вишня, шоколад Bueno, мороженое Bueno",
  "Bijela čokolada, maline, cookies keks":
    "Белый шоколад, малина, печенье Cookies",
  "Krem vanila, mliječna čokolada, jagode, orašasti plodovi":
    "Ванильный крем, молочный шоколад, клубника, орехи",
  "Mliječna čokolada, jagode, ferrero sladoled, oreo, smarties, čoko rolnice":
    "Молочный шоколад, клубника, мороженое Ferrero, Oreo, Smarties, шоколадные трубочки",
  "Mliječna čokolada, jagode, vanila sladoled":
    "Молочный шоколад, клубника, ванильное мороженое",
  "Svježe voće, vanila sladoled, mliječna čokolada":
    "Свежие фрукты, ванильное мороженое, молочный шоколад",
  "Bijela čokolada, pistaći, maline, pistaći sladoled":
    "Белый шоколад, фисташки, малина, фисташковое мороженое",
  "Mliječna čokolada, malina namaz, maline, sladoled banana":
    "Молочный шоколад, малиновая паста, малина, банановое мороженое",
  "Pistaći čokolada, bijela čokolada, oreo, jagode":
    "Фисташковый шоколад, белый шоколад, Oreo, клубника",
  "Tolos vafla": "Вафля «Толос»",
  "Dva vafla, vanila sladoled, plazma, vanilla krem, banana, jagode, mliječna čokolada, bijela čokolada":
    "Две вафли, ванильное мороженое, Plazma, ванильный крем, банан, клубника, молочный шоколад, белый шоколад",
  "Bueno namaz, bueno čokolada, kinder jajc, jagode":
    "Паста Bueno, шоколад Bueno, Kinder Сюрприз, клубника",
  "Bueno čokolada, plazma u mlijeku, banane":
    "Шоколад Bueno, Plazma в молоке, бананы",
  "Pistaći namaz, pistaći čokolada, maline":
    "Фисташковая паста, фисташковый шоколад, малина",
  "Fil od jabuke, cimet, vanila sladoled":
    "Яблочная начинка, корица, ванильное мороженое",
  "Dubai vafla": "Дубайская вафля",
  "Pistaći čokolada, bijela čokolada, kadaif, pistaći, pistaći špageti sladoled":
    "Фисташковый шоколад, белый шоколад, катаифи, фисташки, фисташковое мороженое-спагетти",
  "Mliječna čokolada, plazma, plazma sladoled, maline":
    "Молочный шоколад, Plazma, мороженое Plazma, малина",
}
