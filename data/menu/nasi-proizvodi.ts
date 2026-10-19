import "server-only"
import { type MenuSection, meEn } from "@/data/menu/types"
import nasiProizvodiBuenitaKrem from "@/public/images/menu/nasi-proizvodi/nasi-proizvodi-buenita-krem.webp"
import nasiProizvodiHariSKrem from "@/public/images/menu/nasi-proizvodi/nasi-proizvodi-hari-s-krem.webp"
import nasiProizvodiPistachioKrem from "@/public/images/menu/nasi-proizvodi/nasi-proizvodi-pistachio-krem.webp"
import nasiProizvodiVocniSok02l from "@/public/images/menu/nasi-proizvodi/nasi-proizvodi-vocni-sok-0-2l.webp"
import nasiProizvodiVocniSokBorovnica02l from "@/public/images/menu/nasi-proizvodi/nasi-proizvodi-vocni-sok-borovnica-0-2l.webp"

// From the client's menu, main-menu-small.pdf, via scripts/import-menu.ts; the
// photos are cut out of the same PDF. Texts and prices are exactly as
// printed. The section ids are the category ids in the JSON.
export const nasiProizvodiSections: MenuSection[] = [
  {
    id: "nasi-proizvodi",
    title: meEn("Naši proizvodi", "Our products"),
    dishes: [
      {
        name: meEn("Voćni sok 0.2l", "Fruit juice 0.2l"),
        description: meEn(
          "Jabuka, kruška, kajsija, jagoda, malina, višnja, kupina",
          "Apple, pear, apricot, strawberry, raspberry, cherry, blackberry"
        ),
        price: 3.2,
        image: nasiProizvodiVocniSok02l,
        transparent: true,
      },
      {
        name: meEn("Voćni sok borovnica 0.2l", "Blueberry fruit juice 0.2l"),
        description: meEn("Borovnica", "Blueberry"),
        price: 3.3,
        image: nasiProizvodiVocniSokBorovnica02l,
        transparent: true,
      },
      {
        name: meEn("Buenita krem", "Buenita cream"),
        price: 4.7,
        image: nasiProizvodiBuenitaKrem,
        transparent: true,
      },
      {
        name: meEn("Hari's krem", "Hari's cream"),
        price: 4.6,
        image: nasiProizvodiHariSKrem,
        transparent: true,
      },
      {
        name: meEn("Pistachio krem", "Pistachio cream"),
        price: 7.6,
        image: nasiProizvodiPistachioKrem,
        transparent: true,
      },
    ],
  },
]
