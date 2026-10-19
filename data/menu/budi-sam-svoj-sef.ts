import "server-only"
import { type MenuSection, meEn } from "@/data/menu/types"

// From the client's menu, main-menu-small.pdf, via scripts/import-menu.ts; the
// photos are cut out of the same PDF. Texts and prices are exactly as
// printed. The section ids are the category ids in the JSON.
export const budiSamSvojSefSections: MenuSection[] = [
  {
    id: "osnova",
    title: meEn("Osnova", "Base"),
    dishes: [
      {
        name: meEn("Krepa", "Crepe"),
        price: 2,
      },
      {
        name: meEn("Vafla", "Waffle"),
        price: 2,
      },
      {
        name: meEn("Penkejk", "Pancake"),
        price: 2,
      },
      {
        name: meEn("Mini vafla", "Mini waffle"),
        price: 1.8,
      },
      {
        name: meEn("Krepa (vegan)", "Crepe (vegan)"),
        price: 2.2,
      },
      {
        name: meEn("Penkejk (vegan)", "Pancake (vegan)"),
        price: 2.2,
      },
    ],
  },
  {
    id: "suhomesnati-proizvodi",
    title: meEn("Suhomesnati proizvodi", "Meat products"),
    dishes: [
      {
        name: meEn("Sveže pečena svinjetina", "Fresh roasted pork"),
        price: 3.6,
      },
      {
        name: meEn("Pileći file", "Chicken fillete"),
        price: 3.4,
      },
      {
        name: meEn("Juneće meso", "Beef meat"),
        price: 4.4,
      },
      {
        name: meEn("Pančeta", "Bacon"),
        price: 2.7,
      },
      {
        name: meEn("Dimljeni ćureći file", "Smoked turkey fillet"),
        price: 2.7,
      },
      {
        name: meEn("Dimljena kobasica", "Smoked sausage"),
        price: 3.1,
      },
      {
        name: meEn("Šunka", "Ham"),
        price: 2.2,
      },
      {
        name: meEn("Svinjska pršuta", "Pork prosciutto"),
        price: 2.4,
      },
      {
        name: meEn("Goveda pršuta", "Beef prosciutto"),
        price: 3.2,
      },
      {
        name: meEn("Njeguška pršuta", "Parma prosciutto"),
        price: 3.1,
      },
      {
        name: meEn("Kulen", "Kulen"),
        price: 2.6,
      },
      {
        name: meEn("Mortadela", "Mortadella"),
        price: 4.4,
      },
      {
        name: meEn("Dimljeni losos", "Smoked salmon"),
        price: 4.6,
      },
    ],
  },
  {
    id: "povrce",
    title: meEn("Povrće", "Vegetables"),
    dishes: [
      {
        name: meEn("Paradajz", "Tomato"),
        price: 1.1,
      },
      {
        name: meEn("Čeri paradajz", "Cherry tomatos"),
        price: 1.2,
      },
      {
        name: meEn("Zelena paprika", "Green pepper"),
        price: 1,
      },
      {
        name: meEn("Crvena paprika", "Red pepper"),
        price: 1,
      },
      {
        name: meEn("Krastavac", "Cucumber"),
        price: 1,
      },
      {
        name: meEn("Kisjeli krastavac", "Pickles"),
        price: 1,
      },
      {
        name: meEn("Iceberg", "Iceberg"),
        price: 1.1,
      },
      {
        name: meEn("Masline", "Olives"),
        price: 1.1,
      },
      {
        name: meEn("Kukuruz", "Corn"),
        price: 1,
      },
      {
        name: meEn("Svježi spanać", "Fresh spinach"),
        price: 1.2,
      },
      {
        name: meEn("Rukola", "Rocket"),
        price: 1.3,
      },
      {
        name: meEn("Sušeni paradajz", "Dried tomato"),
        price: 2,
      },
      {
        name: meEn("Pečurke", "Mushrooms"),
        price: 1.1,
      },
      {
        name: meEn("Pečurke a la crem", "Mushrooms a la creme"),
        price: 1.2,
      },
      {
        name: meEn("Pečena crvena paprika", "Roasted red pepper"),
        price: 1.2,
      },
      {
        name: meEn("Crni luk", "Onion"),
        price: 0.7,
      },
      {
        name: meEn("Pasulj", "Beans"),
        price: 1.9,
      },
      {
        name: meEn("Kupus", "Cabbage"),
        price: 1.7,
      },
      {
        name: meEn("Patlidžan", "Eggplant"),
        price: 2.4,
      },
      {
        name: meEn("Miks salata", "Salad mix"),
        price: 1.7,
      },
    ],
  },
  {
    id: "sir",
    title: meEn("Sir", "Cheese"),
    dishes: [
      {
        name: meEn("Domaći sir", "Farmer´s cheese"),
        price: 2.3,
      },
      {
        name: meEn("Gauda", "Gouda cheese"),
        price: 2.5,
      },
      {
        name: meEn("Feta sir", "Feta cheese"),
        price: 2.3,
      },
      {
        name: meEn("Krem sir", "Cream cheese"),
        price: 2.5,
      },
      {
        name: meEn("Parmezan", "Parmesan"),
        price: 2.5,
      },
      {
        name: meEn("Mocarela", "Mozzarella"),
        price: 2.8,
      },
      {
        name: meEn("Čedar sos", "Cheddar sauce"),
        price: 2.5,
      },
      {
        name: meEn("Sir Ella", "Ella cheese"),
        price: 2.5,
      },
      {
        name: meEn("Veganski-biljni sir", "Vegan cheese"),
        price: 2.3,
      },
      {
        name: meEn("Kajmak", "Cream"),
        price: 2.1,
      },
      {
        name: meEn("Burrata", "Burrata"),
        price: 4.6,
      },
      {
        name: meEn("Pavlaka", "Sour cream"),
        price: 1.3,
      },
      {
        name: meEn("Čedar sir", "Cheddar cheese"),
        price: 4.4,
      },
    ],
  },
  {
    id: "razno",
    title: meEn("Razno", "Various"),
    dishes: [
      {
        name: meEn("Kikiriki puter", "Peanut butter"),
        price: 2.5,
      },
      {
        name: meEn("Jaje", "Egg"),
        price: 0.8,
      },
      {
        name: meEn("Tunjevina", "Tuna"),
        price: 4.4,
      },
      {
        name: meEn("Pomfrit", "French fries"),
        price: 3.4,
      },
      {
        name: meEn("Pomfrit sa feta sirom", "French fries with feta cheese"),
        price: 4.4,
      },
      {
        name: meEn("Pomfrit sa pančetom", "French fries with Bacon"),
        price: 4.4,
      },
      {
        name: meEn("Tost", "Toast"),
        price: 0.8,
      },
      {
        name: meEn("Hljebčići", "Bread"),
        price: 1.2,
      },
    ],
  },
  {
    id: "salate-i-sosevi",
    title: meEn("Salate i sosevi", "Salads & sauces"),
    dishes: [
      {
        name: meEn("Balsamico krema", "Balsamic cream"),
        price: 2.1,
      },
      {
        name: meEn("Tartar sos", "Tartar sauce"),
        price: 2,
      },
      {
        name: meEn("Senf sos", "Mustard sauce"),
        price: 2,
      },
      {
        name: meEn("Pileća salata", "Chicken salad"),
        price: 2.3,
      },
      {
        name: meEn("BBQ sos", "BBQ sauce"),
        price: 1.1,
      },
      {
        name: meEn("Slatko ljuti sos", "Sweet chilli sauce"),
        price: 1.2,
      },
      {
        name: meEn("Vinegret sos", "Vinaigrette sauce"),
        price: 1.1,
      },
      {
        name: meEn("Cezar sos", "Caesar sauce"),
        price: 1.1,
      },
      {
        name: meEn("Majonez", "Mayonaisse"),
        price: 2,
      },
      {
        name: meEn("Senf", "Mustard"),
        price: 1.1,
      },
      {
        name: meEn("Kečap", "Ketchup"),
        price: 1.1,
      },
      {
        name: meEn("Tabasko sos", "Tabasco sauce"),
        price: 2,
      },
      {
        name: meEn("Pesto sos", "Pesto sauce"),
        price: 2.8,
      },
      {
        name: meEn("Ajvar", "Ajvar"),
        price: 2.2,
      },
      {
        name: meEn("Sos od nara", "Pomogranate sauce"),
        price: 2.5,
      },
      {
        name: meEn("Grčki jogurt", "Greek yoghurt"),
        price: 2,
      },
      {
        name: meEn("Pelat", "Pomodori pelati"),
        price: 2.1,
      },
      {
        name: meEn("Koktel sos", "Cocktail sauce"),
        price: 1.1,
      },
      {
        name: meEn("Burger sos", "Burgrer sauce"),
        price: 1.1,
      },
      {
        name: meEn("Pistać sos", "Pistachio sauce"),
        price: 2,
      },
      {
        name: meEn("Avokado sos", "Avocado sauce"),
        price: 2,
      },
    ],
  },
  {
    id: "cokolade",
    title: meEn("Čokolade", "Chocolates"),
    dishes: [
      {
        name: meEn("Mliječna čokolada", "Milk chocolate"),
        price: 2,
      },
      {
        name: meEn("Bijela čokolada", "White chocolate"),
        price: 2,
      },
      {
        name: meEn("Crna čokolada", "Dark chocolate"),
        price: 2,
      },
      {
        name: meEn("Bueno čokolada", "Bueno chocolate"),
        price: 2,
      },
      {
        name: meEn("Miks čokolada", "Mix chocolate"),
        price: 2,
      },
      {
        name: meEn("Pistaći čokolada", "Pistachio chocolate"),
        price: 2.3,
      },
    ],
  },
  {
    id: "voce",
    title: meEn("Voće", "Fruits"),
    dishes: [
      {
        name: meEn("Banana", "Banana"),
        price: 1.2,
      },
      {
        name: meEn("Jagode", "Strawberry"),
        price: 2.5,
      },
      {
        name: meEn("Jabuka", "Apple"),
        price: 1,
      },
      {
        name: meEn("Pomorandža", "Orange"),
        price: 1.4,
      },
      {
        name: meEn("Sezonsko voće", "Season fruits"),
        price: 3,
      },
      {
        name: meEn("Maline", "Raspberry"),
        price: 2.8,
      },
      {
        name: meEn("Višnje", "Cherry"),
        price: 1.8,
      },
      {
        name: meEn("Avokado", "Avocado"),
        price: 2,
      },
      {
        name: meEn("Nar", "Pomegranate"),
        price: 2.4,
      },
      {
        name: meEn("Kompot breskva", "Copmote peach"),
        price: 1.9,
      },
    ],
  },
  {
    id: "sirupi-i-slatko",
    title: meEn("Sirupi i slatko", "Syrups & sweets"),
    dishes: [
      {
        name: meEn("Sirup od višnje", "Cherry syrup"),
        price: 1.2,
      },
      {
        name: meEn("Sirup od karamele", "Caramel syrup"),
        price: 1.3,
      },
      {
        name: meEn("Sirup od čokolade", "Chocolate syrup"),
        price: 1.3,
      },
      {
        name: meEn("Sirup od jagode", "Strawberry syrup"),
        price: 1.3,
      },
      {
        name: meEn("Sirup od javora", "Maple syrup"),
        price: 2.9,
      },
      {
        name: meEn("Slatko od višnji", "Cherry sweet"),
        price: 2.2,
      },
      {
        name: meEn("Slatko od šumskih jagoda", "Wild strawberry sweet"),
        price: 2.3,
      },
      {
        name: meEn("Slatko od borovnica", "Blueberry sweet"),
        price: 2.3,
      },
      {
        name: meEn("Med", "Honey"),
        price: 2,
      },
    ],
  },
  {
    id: "keks",
    title: meEn("Keks", "Biscuits"),
    dishes: [
      {
        name: meEn("Oreo u mlijeku", "Oreo in milk"),
        price: 2,
      },
      {
        name: meEn("Keks", "Biscuit"),
        price: 1.2,
      },
      {
        name: meEn("Plazma keks", "Plazma"),
        price: 1.5,
      },
      {
        name: meEn("Plazma u mlijeku", "Plazma in milk"),
        price: 2,
      },
      {
        name: meEn("Cookie keks", "Cookies"),
        price: 1.9,
      },
      {
        name: meEn("Posni keks", "Digestive biscuit"),
        price: 1.9,
      },
      {
        name: meEn("Oreo", "Oreo"),
        price: 1.9,
      },
      {
        name: meEn("Vafel rolnice sa čokoladom", "Chocolate stuffed cigarillo"),
        price: 1.9,
      },
      {
        name: meEn("Speculoos", "Speculoos"),
        price: 2,
      },
      {
        name: meEn("Kadaif", "Kadaif"),
        price: 2.2,
      },
    ],
  },
  {
    id: "orasasti-plodovi",
    title: meEn("Orašasti plodovi", "Nuts"),
    dishes: [
      {
        name: meEn("Badem", "Almond"),
        price: 1.9,
      },
      {
        name: meEn("Orasi", "Walnut"),
        price: 1.9,
      },
      {
        name: meEn("Lješnik", "Hazelnut"),
        price: 1.9,
      },
      {
        name: meEn("Karamelizovani kikiriki", "Caramelized peanut"),
        price: 2.2,
      },
      {
        name: meEn("Kokos", "Coconut"),
        price: 1.9,
      },
      {
        name: meEn("Miks orašastih plodova", "Mixed nuts"),
        price: 1.9,
      },
      {
        name: meEn("Pistaći", "Pistachios"),
        price: 2.6,
      },
    ],
  },
  {
    id: "kremovi-i-namazi",
    title: meEn("Kremovi i namazi", "Creams & spreads"),
    dishes: [
      {
        name: meEn("Vanila krem", "Vanilla cream"),
        price: 2.4,
      },
      {
        name: meEn("Kikiriki puter", "Peanut butter"),
        price: 2.4,
      },
      {
        name: meEn("Šlag", "Whipped cream"),
        price: 1,
      },
      {
        name: meEn("Speculoos krem", "Speculoos cream"),
        price: 2.3,
      },
      {
        name: meEn("Puter", "Butter"),
        price: 1.1,
      },
      {
        name: meEn("Krem od čokolade", "Chocolate cream"),
        price: 2.4,
      },
      {
        name: meEn("Jabuka fil", "Apple puree"),
        price: 2.2,
      },
      {
        name: meEn("Krem od kokosa", "Coconut cream"),
        price: 1.4,
      },
      {
        name: meEn("Coffee krem", "Coffee cream"),
        price: 1.8,
      },
      {
        name: meEn("Krem od limete", "Lime cream"),
        price: 2,
      },
      {
        name: meEn("Pistaći namaz", "Pistachio cream"),
        price: 3,
      },
      {
        name: meEn("Bueno namaz", "Bueno cream"),
        price: 3,
      },
      {
        name: meEn("Maline namaz", "Raspberry cream"),
        price: 3,
      },
    ],
  },
  {
    id: "alkohol",
    title: meEn("Alkohol", "Alcohol"),
    dishes: [
      {
        name: meEn("Cointreau", "Cointreau"),
        price: 2.3,
      },
      {
        name: meEn("Baileys", "Baileys"),
        price: 2.3,
      },
      {
        name: meEn("Metaxa", "Metaxa"),
        price: 2.3,
      },
      {
        name: meEn("Rum", "Rum"),
        price: 2.1,
      },
    ],
  },
  {
    id: "razno-slatko",
    title: meEn("Razno", "Various"),
    dishes: [
      {
        name: meEn("Čoko kuglice", "Choco balls"),
        price: 1.8,
      },
      {
        name: meEn("Smarties", "Smarties"),
        price: 1.7,
      },
      {
        name: meEn("Čoko smoki", "Choco Smoki"),
        price: 1.2,
      },
      {
        name: meEn("Pjenaste bombone", "Marshmallows"),
        price: 1.3,
      },
      {
        name: meEn("Štanglica mliječne čokolade", "Piece of milk chocolate"),
        price: 1.2,
      },
      {
        name: meEn("Čoko bananice", "Small choco banana"),
        price: 1.3,
      },
      {
        name: meEn("Šarene mrvice", "Sprinkles"),
        price: 1,
      },
      {
        name: meEn("KitKat", "KitKat"),
        price: 1.4,
      },
      {
        name: meEn("Munchmallow", "Munchmallow"),
        price: 1.3,
      },
      {
        name: meEn("Kinder jaje", "Kinder egg"),
        price: 2,
      },
      {
        name: meEn("Granola", "Granola"),
        price: 2.8,
      },
      {
        name: meEn("Čija u mlijeku", "Chia in milk"),
        price: 2.8,
      },
    ],
  },
  {
    id: "sladoledi",
    title: meEn("Sladoledi", "Ice creams"),
    dishes: [
      {
        name: meEn("Karamela", "Caramela"),
        price: 2,
      },
      {
        name: meEn("Bueno", "Bueno"),
        price: 2,
      },
      {
        name: meEn("Ferero", "Ferrero"),
        price: 2,
      },
      {
        name: meEn("Cookies", "Cookies"),
        price: 2,
      },
      {
        name: meEn("Jagoda", "Strawberry"),
        price: 2,
      },
      {
        name: meEn("Banana", "Banana"),
        price: 2,
      },
      {
        name: meEn("Vanila", "Vanilla"),
        price: 2,
      },
      {
        name: meEn("Pistaći", "Pistachio"),
        price: 2.4,
      },
      {
        name: meEn("Plazma", "Plazma"),
        price: 2,
      },
    ],
  },
]
