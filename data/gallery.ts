import "server-only"
import burgerFriesBlackPlate from "@/public/images/gallery/haris-food-01-burger-fries-black-plate.webp"
import bakedEggsClayDishFlatbread from "@/public/images/gallery/haris-food-02-baked-eggs-clay-dish-flatbread.webp"
import flatbreadPizzaHamWoodenBoard from "@/public/images/gallery/haris-food-03-flatbread-pizza-ham-wooden-board.webp"
import chocolateHazelnutCrepeWafer from "@/public/images/gallery/haris-food-04-chocolate-hazelnut-crepe-wafer.webp"
import rolledCrepeCreamBiscuit from "@/public/images/gallery/haris-food-05-rolled-crepe-cream-biscuit.webp"
import waiterServingStrawberryPistachioCrepe from "@/public/images/gallery/haris-food-06-waiter-serving-strawberry-pistachio-crepe.webp"
import strawberryPistachioCrepeChocolate from "@/public/images/gallery/haris-food-07-strawberry-pistachio-crepe-chocolate.webp"
import diningRoomTiledFloor from "@/public/images/gallery/haris-01-dining-room-tiled-floor.webp"
import muralArchWallLamp from "@/public/images/gallery/haris-02-mural-arch-wall-lamp.webp"
import barCounterMuralFruitBasket from "@/public/images/gallery/haris-03-bar-counter-mural-fruit-basket.webp"
import muralArchesPalmLeaves from "@/public/images/gallery/haris-04-mural-arches-palm-leaves.webp"
import barCounterArchedPanels from "@/public/images/gallery/haris-05-bar-counter-arched-panels.webp"
import tableSettingRedDoors from "@/public/images/gallery/haris-06-table-setting-red-doors.webp"
import tableSettingHangingGreenery from "@/public/images/gallery/haris-07-table-setting-hanging-greenery.webp"
import barCounterMuralView from "@/public/images/gallery/haris-08-bar-counter-mural-view.webp"
import diningRoomCurtains from "@/public/images/gallery/haris-09-dining-room-curtains.webp"
import diningRoomChairsTiledFloor from "@/public/images/gallery/haris-10-dining-room-chairs-tiled-floor.webp"
import menuBookOnTable from "@/public/images/gallery/haris-11-menu-book-on-table.webp"
import longRowOfTables from "@/public/images/gallery/haris-12-long-row-of-tables.webp"
import muralArchesFruitBasket from "@/public/images/gallery/haris-13-mural-arches-fruit-basket.webp"
import barCounterLongView from "@/public/images/gallery/haris-14-bar-counter-long-view.webp"
import barCounterTablePlacemat from "@/public/images/gallery/haris-15-bar-counter-table-placemat.webp"
import diningRoomPalmLeaf from "@/public/images/gallery/haris-16-dining-room-palm-leaf.webp"
import tablesTowardsBarMenu from "@/public/images/gallery/haris-17-tables-towards-bar-menu.webp"
import tablesTowardsBarLamp from "@/public/images/gallery/haris-18-tables-towards-bar-lamp.webp"
import tableOilBottlesMural from "@/public/images/gallery/haris-19-table-oil-bottles-mural.webp"

// The client's photos (November 2026): the food first, then the place, each
// in their numbered order. All are 1600x2400 (2:3, portrait). Each one's alt
// text is in the messages, gallery.photos.<id>.
export const galleryPhotos = [
  { id: "burgerFriesBlackPlate", image: burgerFriesBlackPlate },
  { id: "bakedEggsClayDishFlatbread", image: bakedEggsClayDishFlatbread },
  { id: "flatbreadPizzaHamWoodenBoard", image: flatbreadPizzaHamWoodenBoard },
  { id: "chocolateHazelnutCrepeWafer", image: chocolateHazelnutCrepeWafer },
  { id: "rolledCrepeCreamBiscuit", image: rolledCrepeCreamBiscuit },
  {
    id: "waiterServingStrawberryPistachioCrepe",
    image: waiterServingStrawberryPistachioCrepe,
  },
  {
    id: "strawberryPistachioCrepeChocolate",
    image: strawberryPistachioCrepeChocolate,
  },
  { id: "diningRoomTiledFloor", image: diningRoomTiledFloor },
  { id: "muralArchWallLamp", image: muralArchWallLamp },
  { id: "barCounterMuralFruitBasket", image: barCounterMuralFruitBasket },
  { id: "muralArchesPalmLeaves", image: muralArchesPalmLeaves },
  { id: "barCounterArchedPanels", image: barCounterArchedPanels },
  { id: "tableSettingRedDoors", image: tableSettingRedDoors },
  { id: "tableSettingHangingGreenery", image: tableSettingHangingGreenery },
  { id: "barCounterMuralView", image: barCounterMuralView },
  { id: "diningRoomCurtains", image: diningRoomCurtains },
  { id: "diningRoomChairsTiledFloor", image: diningRoomChairsTiledFloor },
  { id: "menuBookOnTable", image: menuBookOnTable },
  { id: "longRowOfTables", image: longRowOfTables },
  { id: "muralArchesFruitBasket", image: muralArchesFruitBasket },
  { id: "barCounterLongView", image: barCounterLongView },
  { id: "barCounterTablePlacemat", image: barCounterTablePlacemat },
  { id: "diningRoomPalmLeaf", image: diningRoomPalmLeaf },
  { id: "tablesTowardsBarMenu", image: tablesTowardsBarMenu },
  { id: "tablesTowardsBarLamp", image: tablesTowardsBarLamp },
  { id: "tableOilBottlesMural", image: tableOilBottlesMural },
] as const

export type GalleryPhoto = (typeof galleryPhotos)[number]

export const galleryPhoto = (id: GalleryPhoto["id"]) =>
  galleryPhotos.find((photo) => photo.id === id)!
