import "server-only"
import { type MenuSection, untranslated } from "@/data/menu/types"
import pizzaPosna1 from "@/public/images/menu/posni-meni/pizza-posna-1.webp"
import pizzaPosna2 from "@/public/images/menu/posni-meni/pizza-posna-2.webp"
import posniPenkejk1 from "@/public/images/menu/posni-meni/posni-penkejk-1.webp"
import posniPenkejk2 from "@/public/images/menu/posni-meni/posni-penkejk-2.webp"
import posniPenkejk3 from "@/public/images/menu/posni-meni/posni-penkejk-3.webp"
import posniPenkejk4 from "@/public/images/menu/posni-meni/posni-penkejk-4.webp"
import posniPenkejk5 from "@/public/images/menu/posni-meni/posni-penkejk-5.webp"
import sendvic1 from "@/public/images/menu/posni-meni/sendvic-1.webp"
import sendvic2 from "@/public/images/menu/posni-meni/sendvic-2.webp"
import sendvic3 from "@/public/images/menu/posni-meni/sendvic-3.webp"
import slanaPosnaKrepa1 from "@/public/images/menu/posni-meni/slana-posna-krepa-1.webp"
import slanaPosnaKrepa2 from "@/public/images/menu/posni-meni/slana-posna-krepa-2.webp"
import slanaPosnaKrepa3 from "@/public/images/menu/posni-meni/slana-posna-krepa-3.webp"
import slanaPosnaKrepa4 from "@/public/images/menu/posni-meni/slana-posna-krepa-4.webp"
import slanaPosnaZapecenaKrepa5 from "@/public/images/menu/posni-meni/slana-posna-zapecena-krepa-5.webp"
import slatkaPosnaKrepa1 from "@/public/images/menu/posni-meni/slatka-posna-krepa-1.webp"
import slatkaPosnaKrepa2 from "@/public/images/menu/posni-meni/slatka-posna-krepa-2.webp"
import slatkaPosnaKrepa3 from "@/public/images/menu/posni-meni/slatka-posna-krepa-3.webp"
import slatkaPosnaKrepa4 from "@/public/images/menu/posni-meni/slatka-posna-krepa-4.webp"
import slatkaPosnaKrepa5 from "@/public/images/menu/posni-meni/slatka-posna-krepa-5.webp"
import slatkaPosnaKrepa6 from "@/public/images/menu/posni-meni/slatka-posna-krepa-6.webp"
import slatkaPosnaKrepa7 from "@/public/images/menu/posni-meni/slatka-posna-krepa-7.webp"
import slatkaPosnaKrepa8 from "@/public/images/menu/posni-meni/slatka-posna-krepa-8.webp"
import slatkaPosnaKrepa9 from "@/public/images/menu/posni-meni/slatka-posna-krepa-9.webp"
import sojaSalata from "@/public/images/menu/posni-meni/soja-salata.webp"
import tunaSalata from "@/public/images/menu/posni-meni/tuna-salata.webp"

// Posni meni, from the client's menu, CG_Haris_posni_meni_FINAL_10_2026_.pdf
// (October 2026); the photos are cut out of the same PDF.
export const posniMeniSections: MenuSection[] = [
  {
    id: "slane-posne-krepe",
    title: untranslated("Slane posne krepe"),
    dishes: [
      {
        name: untranslated("Slana posna krepa 1"),
        description: untranslated(
          "Biljni sir, tunjevina, krastavac, čeri paradajz, crveni luk"
        ),
        price: 9.2,
        image: slanaPosnaKrepa1,
      },
      {
        name: untranslated("Slana posna krepa 2"),
        description: untranslated(
          "Biljni sir, pečurke, kukuruz, paprika, paradajz, masline, rukola"
        ),
        price: 7.4,
        image: slanaPosnaKrepa2,
      },
      {
        name: untranslated("Slana posna krepa 3"),
        description: untranslated("Biljni sir, losos, krastavac, paradajz"),
        price: 9.2,
        image: slanaPosnaKrepa3,
      },
      {
        name: untranslated("Slana posna krepa 4"),
        description: untranslated(
          "Biljni sir, posni majonez, kukuruz, avokado sos, soja, limun"
        ),
        price: 8.8,
        image: slanaPosnaKrepa4,
      },
      {
        name: untranslated("Slana posna zapečena krepa 5"),
        description: untranslated(
          "Biljni sir, soja, masline, koktel sos, kisjeli krastavac"
        ),
        price: 8.8,
        image: slanaPosnaZapecenaKrepa5,
      },
    ],
  },
  {
    id: "posni-sendvici",
    title: untranslated("Posni sendviči"),
    dishes: [
      {
        name: untranslated("Sendvič 1"),
        description: untranslated(
          "Biljni sir, avokado sos, masline, pasulj, pomfrit"
        ),
        price: 6,
        image: sendvic1,
      },
      {
        name: untranslated("Sendvič 2"),
        description: untranslated(
          "Biljni sir, tunjevina, posni majonez, kisjeli krastavac, crveni luk"
        ),
        price: 7.8,
        image: sendvic2,
      },
      {
        name: untranslated("Sendvič 3"),
        description: untranslated("Biljni sir, pelat, pečurke, soja"),
        price: 5.7,
        image: sendvic3,
      },
    ],
  },
  {
    id: "posne-salate",
    title: untranslated("Posne salate"),
    dishes: [
      {
        name: untranslated("Tuna salata"),
        description: untranslated(
          "Mix salate, tunjevina, posni majonez, kisjeli krastavac, crveni luk, paradajz, kukuruz"
        ),
        price: 9.2,
        image: tunaSalata,
      },
      {
        name: untranslated("Soja salata"),
        description: untranslated(
          "Iceberg salata, soja, kisjeli krastavac, posni majonez, čeri paradajz"
        ),
        price: 7.4,
        image: sojaSalata,
      },
    ],
  },
  {
    id: "posne-pice",
    title: untranslated("Posne pice"),
    dishes: [
      {
        name: untranslated("Pizza posna 1"),
        description: untranslated(
          "Pelat, biljni sir, tunjevina, kisjeli krastavac, kukuruz, čeri"
        ),
        price: 9.4,
        image: pizzaPosna1,
      },
      {
        name: untranslated("Pizza posna 2"),
        description: untranslated(
          "Pelat, biljni sir, soja, koktel sos, kisjeli krastavac, čeri"
        ),
        price: 8.8,
        image: pizzaPosna2,
      },
    ],
  },
  {
    id: "slatke-posne-krepe",
    title: untranslated("Slatke posne krepe"),
    dishes: [
      {
        name: untranslated("Slatka posna krepa 1"),
        description: untranslated("Maline, kokos, crna čokolada bez šećera"),
        price: 7.4,
        image: slatkaPosnaKrepa1,
      },
      {
        name: untranslated("Slatka posna krepa 2"),
        description: untranslated(
          "Crna čokolada bez šećera, wellness keks, džem kajsija"
        ),
        price: 7.4,
        image: slatkaPosnaKrepa2,
      },
      {
        name: untranslated("Slatka posna krepa 3"),
        description: untranslated(
          "Višnja, posna plazma, crna čokolada bez šećera"
        ),
        price: 7.4,
        image: slatkaPosnaKrepa3,
      },
      {
        name: untranslated("Slatka posna krepa 4"),
        description: untranslated(
          "Crna čokolada bez šećera, džem pomorandža, posna plazma"
        ),
        price: 7.4,
        image: slatkaPosnaKrepa4,
      },
      {
        name: untranslated("Slatka posna krepa 5"),
        description: untranslated("Pekmez, šećer u prahu"),
        price: 4.8,
        image: slatkaPosnaKrepa5,
      },
      {
        name: untranslated("Slatka posna krepa 6"),
        description: untranslated("Džem kajsija, nar"),
        price: 7.4,
        image: slatkaPosnaKrepa6,
      },
      {
        name: untranslated("Slatka posna krepa 7"),
        description: untranslated("Slatko šumske jagode, mix orašasto"),
        price: 7.4,
        image: slatkaPosnaKrepa7,
      },
      {
        name: untranslated("Slatka posna krepa 8"),
        description: untranslated(
          "Kikiriki puter, banana, crna čokolada bez šećera"
        ),
        price: 7.4,
        image: slatkaPosnaKrepa8,
      },
      {
        name: untranslated("Slatka posna krepa 9"),
        description: untranslated("Keks, jagode, crna čokolada bez šećera"),
        price: 7.4,
        image: slatkaPosnaKrepa9,
      },
    ],
  },
  {
    id: "posni-penkejk",
    title: untranslated("Posni penkejk"),
    dishes: [
      {
        name: untranslated("Posni penkejk 1"),
        description: untranslated("Džem od drenjine, šećer u prahu"),
        price: 7.1,
        image: posniPenkejk1,
      },
      {
        name: untranslated("Posni penkejk 2"),
        description: untranslated("Jabuka fil, cimet, orah"),
        price: 7.1,
        image: posniPenkejk2,
      },
      {
        name: untranslated("Posni penkejk 3"),
        description: untranslated("Džem od šipka, banana, pistaći"),
        price: 7.4,
        image: posniPenkejk3,
      },
      {
        name: untranslated("Posni penkejk 4"),
        description: untranslated("Javorov sirup, maline, badem"),
        price: 7.6,
        image: posniPenkejk4,
      },
      {
        name: untranslated("Posni penkejk 5"),
        description: untranslated(
          "Wellness keks, crna čokolada bez šećera, nar"
        ),
        price: 7.4,
        image: posniPenkejk5,
      },
    ],
  },
]
