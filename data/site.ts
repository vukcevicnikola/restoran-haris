// Business facts. Fill the TODOs with the client, never guess.
export const site = {
  name: "Hari's", // TODO confirm public name
  fullName: "Hari's Creperie", // used in running text, e.g. the hero heading
  url: "https://restoranharis.com",
  cuisine: "Crêperie",
  // What the menu has, for search engines (schema.org servesCuisine)
  servesCuisine: [
    "Crêpes",
    "Waffles",
    "Pancakes",
    "Breakfast",
    "Pizza",
    "Burgers",
    "Desserts",
  ],
  phone: "", // TODO, international format: +382 ...
  street: "Njegoševa 25", // the country is in the messages, contact.country
  city: "Podgorica",
  country: "ME", // ISO code, for search engines
  geo: { lat: 0, lng: 0 }, // TODO
  // TODO. days as schema.org writes them: "Mo-Fr", "Sa", "Su"; times "08:00"
  hours: [] as { days: string; open: string; close: string }[],
  social: {
    instagram: "https://www.instagram.com/hariscreperie.mne/",
    // The page that posted the reel the user sent (facebook.com/reel/
    // 2103539443883670): the Belgrade page, there is no Montenegrin one yet
    facebook: "https://www.facebook.com/creperieharisBG/",
  },
  // The studio that made the site, credited in the footer
  credit: { name: "Gondor Produkcija", url: "https://gondorcg.me/" },
}
