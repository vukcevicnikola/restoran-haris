import "server-only"
import { type MenuSection, meEn } from "@/data/menu/types"
import dorucakAvokadoGovedjaPrsuta from "@/public/images/menu/dorucak/dorucak-avokado-govedja-prsuta.webp"
import dorucakAvokadoJaja from "@/public/images/menu/dorucak/dorucak-avokado-jaja.webp"
import dorucakAvokadoLosos from "@/public/images/menu/dorucak/dorucak-avokado-losos.webp"
import dorucakBreakfastBurito from "@/public/images/menu/dorucak/dorucak-breakfast-burito.webp"
import dorucakCezarSendvic from "@/public/images/menu/dorucak/dorucak-cezar-sendvic.webp"
import dorucakCija from "@/public/images/menu/dorucak/dorucak-cija.webp"
import dorucakCrnogorskiDorucak from "@/public/images/menu/dorucak/dorucak-crnogorski-dorucak.webp"
import dorucakCrunch from "@/public/images/menu/dorucak/dorucak-crunch.webp"
import dorucakDorucak from "@/public/images/menu/dorucak/dorucak-dorucak.webp"
import dorucakEngleskiDorucak from "@/public/images/menu/dorucak/dorucak-engleski-dorucak.webp"
import dorucakKlasicniBrunch from "@/public/images/menu/dorucak/dorucak-klasicni-brunch.webp"
import dorucakKlubSendvic from "@/public/images/menu/dorucak/dorucak-klub-sendvic.webp"
import dorucakMediteranskiSendvic from "@/public/images/menu/dorucak/dorucak-mediteranski-sendvic.webp"
import dorucakMontenegroTortilja from "@/public/images/menu/dorucak/dorucak-montenegro-tortilja.webp"
import dorucakMortadelaSendvic from "@/public/images/menu/dorucak/dorucak-mortadela-sendvic.webp"
import dorucakPatlidzanSaSaksukom from "@/public/images/menu/dorucak/dorucak-patlidzan-sa-saksukom.webp"
import dorucakPenkejkDorucak from "@/public/images/menu/dorucak/dorucak-penkejk-dorucak.webp"
import dorucakPlatoSireva from "@/public/images/menu/dorucak/dorucak-plato-sireva.webp"
import dorucakPorchettaSendvic from "@/public/images/menu/dorucak/dorucak-porchetta-sendvic.webp"
import dorucakProsciuttoPesto from "@/public/images/menu/dorucak/dorucak-prosciutto-pesto.webp"
import dorucakProteinskiOmlet from "@/public/images/menu/dorucak/dorucak-proteinski-omlet.webp"
import dorucakPunjenePrzeniceCuretina from "@/public/images/menu/dorucak/dorucak-punjene-przenice-curetina.webp"
import dorucakPunjenePrzenicePanceta from "@/public/images/menu/dorucak/dorucak-punjene-przenice-panceta.webp"
import dorucakSaksuka from "@/public/images/menu/dorucak/dorucak-saksuka.webp"
import dorucakSendvicOmlet from "@/public/images/menu/dorucak/dorucak-sendvic-omlet.webp"
import dorucakSlaniPlato from "@/public/images/menu/dorucak/dorucak-slani-plato.webp"
import dorucakTortiljaPiletina from "@/public/images/menu/dorucak/dorucak-tortilja-piletina.webp"
import dorucakTortiljaSvinjetina from "@/public/images/menu/dorucak/dorucak-tortilja-svinjetina.webp"
import dorucakTostPiletina from "@/public/images/menu/dorucak/dorucak-tost-piletina.webp"
import dorucakTostSvinjetina from "@/public/images/menu/dorucak/dorucak-tost-svinjetina.webp"
import dorucakTunaSendvic from "@/public/images/menu/dorucak/dorucak-tuna-sendvic.webp"
import dorucakTurskiDorucak from "@/public/images/menu/dorucak/dorucak-turski-dorucak.webp"
import dorucakVegetarijanskiOmlet from "@/public/images/menu/dorucak/dorucak-vegetarijanski-omlet.webp"

// From the client's menu, main-menu-small.pdf, via scripts/import-menu.ts; the
// photos are cut out of the same PDF. Texts and prices are exactly as
// printed. The section ids are the category ids in the JSON.
export const dorucakSections: MenuSection[] = [
  {
    id: "dorucak",
    title: meEn("Doručak", "Breakfast"),
    dishes: [
      {
        name: meEn("Avokado & losos", "Avocado & salmon"),
        description: meEn(
          "Integlani hljeb sa sjemenkama, avokado sos, dimljeni losos, krastavac, grčki jogurt, limun, čeri paradajz, crni susam",
          "Integral bread with seeds, avocado sauce, smoked salmon, cucumber, greek yoghurt, lemon, cherry tomato, black sesame"
        ),
        price: 9,
        noPork: true,
        image: dorucakAvokadoLosos,
        transparent: true,
      },
      {
        name: meEn("Avokado & jaja", "Avocado & Eggs"),
        description: meEn(
          "Integralni hljeb sa sjemenkama, avokado sos, kajgana, grčki jogurt, čeri paradajz, crni susam, limun",
          "Integral bread with seeds, avocado sauce, scrambled eggs, greek yoghurt, cherry tomato, black sesame, lemon"
        ),
        price: 8,
        noPork: true,
        image: dorucakAvokadoJaja,
        transparent: true,
      },
      {
        name: meEn("Avokado & goveđa pršuta", "Avocado & Beef prosciutto"),
        description: meEn(
          "Integralni hljeb sa sjemenkama, avokado sos, kajgana, pavlaka, grčki jogurt, čeri paradajz, goveđa pršuta, limun",
          "Integral bread with seeds, avocado sauce, scrambled eggs, sour cream, greek yogurt, cherry tomatoes, beef prosciutto, lemon"
        ),
        price: 9,
        noPork: true,
        image: dorucakAvokadoGovedjaPrsuta,
        transparent: true,
      },
      {
        name: meEn("Prosciutto & Pesto", "Prosciutto & Pesto"),
        description: meEn(
          "Integralni hljeb sa sjemenkama, mocarela, njeguška pršuta, paradajz, rukola, pesto sos",
          "Integral bread with seeds, mozzarella, parma prosciutto, tomato, rocket, pesto sauce"
        ),
        price: 8.6,
        image: dorucakProsciuttoPesto,
        transparent: true,
      },
      {
        name: meEn("Sendvič omlet", "Sandwich omelette"),
        description: meEn(
          "Integralni hljeb sa sjemenkama, omlet, gauda, pančeta, kulen, pečurke, paradajz, paprika, miks salata, BBQ sos",
          "Integral bread with seeds, omelette, gouda cheese, bacon, kulen, mushrooms, tomato, pepper, mix salad, BBQ sauce"
        ),
        price: 7.8,
        image: dorucakSendvicOmlet,
        transparent: true,
      },
      {
        name: meEn("Doručak", "Breakfast"),
        description: meEn(
          "Miks salata, krastavac, domaći sir, goveđa pršuta, čeri paradajz, kajgana, pavlaka, hljebčići",
          "Mixed salad, cucumber, farmer's cheese, beef prosciutto, cherry tomatoes, scrambled eggs, sour cream, bread"
        ),
        price: 8.2,
        noPork: true,
        image: dorucakDorucak,
        transparent: true,
      },
      {
        name: meEn("Crnogorski doručak", "Montenegro breakfast"),
        description: meEn(
          "Tri jaja, kobasica, domaći sir, paradajz, tost hljeb, kupus, ajvar",
          "Three eggs, sausage, farmer's cheese, tomato, toast bread, cabbage, ajvar"
        ),
        price: 8.2,
        image: dorucakCrnogorskiDorucak,
        transparent: true,
      },
      {
        name: meEn("Turski doručak", "Turkish breakfast"),
        description: meEn(
          "Kajgana, goveđa pršuta, krastavac, hljebčići, ajvar, čeri paradajz, kajmak, domaći sir, masline, med",
          "Scrambled eggs, beef prosciutto, cucumber, bread, ajvar, cherry tomato, cream, farmer's cheese, olives, honey"
        ),
        price: 9.2,
        noPork: true,
        image: dorucakTurskiDorucak,
        transparent: true,
      },
      {
        name: meEn("Engleski doručak", "English breakfast"),
        description: meEn(
          "Dva jaja, pančeta, kobasica, seoski sir, paradajz, pečurke, tost hljeb, pasulj",
          "Two eggs, bacon, sausage, farmer's cheese, tomato, mushrooms, toast bread, beans"
        ),
        price: 9.2,
        image: dorucakEngleskiDorucak,
        transparent: true,
      },
      {
        name: meEn("Cezar sendvič", "Caesar sandwich"),
        description: meEn(
          "Pizza tijesto, pileći file, cezar sos, paradajz, iceberg, krastavac, parmezan, pančeta",
          "Pizza dough, chicken fillet, caesar sauce, tomato, iceberg, cucumber, parmesan, bacon"
        ),
        price: 8,
        image: dorucakCezarSendvic,
        transparent: true,
      },
      {
        name: meEn("Mediteranski sendvič", "Mediteranian sandwich"),
        description: meEn(
          "Pizza tijesto, pesto sos, sušeni paradajz, mocarela, svinjska pršuta, rukola",
          "Pizza dough, pesto sauce, dried tomato, mozzarella, pork prosciutto, rocket"
        ),
        price: 8,
        image: dorucakMediteranskiSendvic,
        transparent: true,
      },
      {
        name: meEn("Porchetta sendvič", "Porchetta sandwich"),
        description: meEn(
          "Pizza tijesto, kajmak, cjepkana svinjetina i paradajz, pomfrit",
          "Pizza dough, cream, chopped pork and tomatoes, french fries"
        ),
        price: 8.2,
        image: dorucakPorchettaSendvic,
        transparent: true,
      },
      {
        name: meEn("Mortadela sendvič", "Mortadella sandwich"),
        description: meEn(
          "Pizza tijesto, burata, mortadela, rukola, čeri paradajz, pistać sos",
          "Pizza dough, burrata, mortadella, rocket, cherry tomatoes, pistachio sauce"
        ),
        price: 9.2,
        image: dorucakMortadelaSendvic,
        transparent: true,
      },
      {
        name: meEn("Tuna sendvič", "Tuna sandwich"),
        description: meEn(
          "Pizza tijesto, posni majonez, tunjevina, crveni luk, kisjeli krastavac",
          "Pizza dough, egg-free mayonaisse, tuna, red onion, pickles"
        ),
        price: 8,
        noPork: true,
        image: dorucakTunaSendvic,
        transparent: true,
      },
      {
        name: meEn("Klub sendvič", "Club sandwich"),
        description: meEn(
          "Tost hljeb, pančeta, jaje, pileći file, gauda, iceberg, pomfrit, miks zelenih salata sa sosom od nara, paradajz, majonez",
          "Toast bread, bacon, egg, chicken fillet, gouda cheese, iceberg, mix of green salads with pomogranate sauce, french fries, tomato, mayonaisse"
        ),
        price: 8,
        image: dorucakKlubSendvic,
        transparent: true,
      },
      {
        name: meEn("Proteinski omlet", "Protein omelette"),
        description: meEn(
          "Pileći file, bjelance, krem sir, sir ella, tost hljeb, miks zelenih salata",
          "Chicken fillet, eggwhite, cream cheese, ella cheese, toast bread, mix of green salads"
        ),
        price: 7.4,
        noPork: true,
        image: dorucakProteinskiOmlet,
        transparent: true,
      },
      {
        name: meEn("Vegetarijanski omlet", "Vegeterian omlette"),
        description: meEn(
          "Paradajz, pečurke, paprika, miks zelenih salata sa sosom od nara, tost hljeb, kukuruz",
          "Tomato, mushrooms, pepper, mix of green salads with pomogranate sauce, toast bread, corn"
        ),
        price: 7.2,
        noPork: true,
        image: dorucakVegetarijanskiOmlet,
        transparent: true,
      },
      {
        name: meEn("Patlidžan sa šakšukom", "Eggplant with shakshuka"),
        description: meEn(
          "Patlidžan, feta sir, crvena paprika, crveni luk, crni luk, kumin, paradajz, dimljena paprika, hljebčići, grčki jogurt, maslinovo ulje",
          "Eggplant, feta cheese, red pepper, red onion, onion, cumin, tomato, smoked pepper, bread, greek yoghurt, olive oil"
        ),
        price: 7.2,
        noPork: true,
        image: dorucakPatlidzanSaSaksukom,
        transparent: true,
      },
      {
        name: meEn("Šakšuka", "Shakshuka"),
        description: meEn(
          "Crvena paprika, crni luk, crveni luk, paradajz, kumin, dimljena paprika, dva jaja, feta sir, hljebčići",
          "Red pepper, onion, red onion, tomato, cumin, smoked pepper, two egg, feta cheese, bread"
        ),
        price: 7.2,
        noPork: true,
        image: dorucakSaksuka,
        transparent: true,
      },
      {
        name: meEn("Punjene prženice ćuretina", "Stuffed fried bread turkey"),
        description: meEn(
          "Bijeli tost, jaje, gauda, ćureći file, ajvar, krem sir, čeri paradajz, parmezan, pomfrit",
          "White toast, egg, gouda cheese, turkey fillet, ajvar, cream cheese, cherry tomato, parmesan, french fries"
        ),
        price: 6.2,
        noPork: true,
        image: dorucakPunjenePrzeniceCuretina,
        transparent: true,
      },
      {
        name: meEn("Punjene prženice pančeta", "Stuffed fried bread pancetta"),
        description: meEn(
          "Bijeli tost, jaje, pančeta, feta sir, rukola, ajvar, pomfrit, čeri paradajz",
          "White toast, egg, bacon, feta cheese, rocket, ajvar, french fries, cherry tomato"
        ),
        price: 6.2,
        image: dorucakPunjenePrzenicePanceta,
        transparent: true,
      },
      {
        name: meEn("Tost piletina", "Chicken toast"),
        description: meEn(
          "Tost hljeb, pesto sos, pileći file, gauda, koktel sos, pomfrit",
          "Toast bread, pesto sauce, chicken fillet, gouda cheese, cocktail sauce, french fries"
        ),
        price: 5.2,
        noPork: true,
        image: dorucakTostPiletina,
        transparent: true,
      },
      {
        name: meEn("Tost svinjetina", "Pork toast"),
        description: meEn(
          "Tost hljeb, čedar sos, gauda, koktel sos, cjepkana svinjetina, pomfrit",
          "Toast bread, cheddar sauce, gouda cheese, cocktail sauce, chopped pork, french fries"
        ),
        price: 5.2,
        image: dorucakTostSvinjetina,
        transparent: true,
      },
      {
        name: meEn("Klasični brunch", "Classic brunch"),
        description: meEn(
          "Dva jaja, kobasica, paradajz, krastavac, pančeta, tost hljeb, dvije palačinke mliječna čokolada/med i orasi, cijedena pomorandža/limunada",
          "Two eggs, sausage, tomato, cucumber, bacon, toast bread, two pancakes milk chocolate/honey and walnuts, fresh orange juice/lemonade"
        ),
        price: 10.8,
        image: dorucakKlasicniBrunch,
        transparent: true,
      },
      {
        name: meEn("Tortilja svinjetina", "Pork tortilla"),
        description: meEn(
          "Tortilja, krem sir, cjepkana svinjetina, paradajz, iceberg, čedar sos, čeri paradajz, pomfrit",
          "Tortilla, cream cheese, chopped pork, tomato, iceberg, cheddar sauce, cherry tomato, french fries"
        ),
        price: 7,
        image: dorucakTortiljaSvinjetina,
        transparent: true,
      },
      {
        name: meEn("Tortilja piletina", "Chicken tortilla"),
        description: meEn(
          "Tortilja, krem sir, pileći file, iceberg, paradajz, parmezan, koktel sos, pomfrit, čeri paradajz",
          "Tortilla, cream cheese, chicken fillet, tomato, parmesan, cocktail sauce, french fries, cherry tomato, iceberg"
        ),
        price: 7,
        noPork: true,
        image: dorucakTortiljaPiletina,
        transparent: true,
      },
      {
        name: meEn("Montenegro tortilja", "Montenegro tortilla"),
        description: meEn(
          "Tortilja, jaja, pančeta, gauda, ajvar, kajmak, masline, rukola",
          "Tortilla, eggs, bacon, gouda cheese, ajvar, cream, olives, rocket"
        ),
        price: 7,
        image: dorucakMontenegroTortilja,
        transparent: true,
      },
      {
        name: meEn("Breakfast burito", "Breakfast burrito"),
        description: meEn(
          "Tortilja, pavlaka, kajgana, iceberg, miks salata",
          "Tortilla, sour cream, scrambled eggs, iceberg, mixed salad"
        ),
        price: 7,
        noPork: true,
        image: dorucakBreakfastBurito,
        transparent: true,
      },
      {
        name: meEn("Slani plato", "Salty platter"),
        description: meEn(
          "Hljebčići, njeguška pršuta, svinjska pršuta, kulen, pančeta, mocarela, domaći sir, ajvar, kajmak, masline, čeri paradajz",
          "Bread, njeguška prosciutto, pork prosciutto, kulen, pancetta, mozzarella, country cheese, ajvar, kajmak, olives, cherry tomatoes"
        ),
        price: 16,
        image: dorucakSlaniPlato,
        transparent: true,
      },
      {
        name: meEn("Plato sireva", "Cheese platter"),
        description: meEn(
          "Mocarela, domaći sir, burata, rukola, med, slatko od borovnice, kajmak, masline, čeri paradajz, hljebčići, ajvar",
          "Mozzarella, farmer's cheese, burrata, rocket, honey, blueberry jam, cream, olives, cherry tomato, bread, ajvar"
        ),
        price: 14,
        noPork: true,
        image: dorucakPlatoSireva,
        transparent: true,
      },
      {
        name: meEn("Penkejk doručak", "Pancake breakfast"),
        description: meEn(
          "Penkejk, mliječna čokolada, bijela čokolada, jagode, plazma",
          "Pancake, milk chocolate, white chocolate, strawberries, plazma"
        ),
        price: 6.6,
        noPork: true,
        image: dorucakPenkejkDorucak,
        transparent: true,
      },
      {
        name: meEn("Crunch", "Crunch"),
        description: meEn(
          "Granola, grčki jogurt, banana, jagode, bademi, slatko od borovnice",
          "Granola, greek yoghurt, banana, strawberries, almonds, blueberries jam"
        ),
        price: 6.6,
        noPork: true,
        image: dorucakCrunch,
        transparent: true,
      },
      {
        name: meEn("Čija", "Chia"),
        description: meEn(
          "Grčki jogurt, med, breskva, jagode, pistaći, čija u mlijeku",
          "Greek yoghurt, honey, peach, strawberries, pistachio, chia in milk"
        ),
        price: 6.8,
        noPork: true,
        image: dorucakCija,
        transparent: true,
      },
    ],
  },
]
