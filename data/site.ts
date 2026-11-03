// Business facts. Fill the TODOs with the client, never guess.
export const site = {
  name: "Hari's", // TODO confirm public name
  fullName: "Hari's Creperie", // used in running text, e.g. the hero heading
  url: "https://restoranharis.com",
  cuisine: "Crêperie",
  phone: "", // TODO
  street: "Njegoševa 25", // the country is in the messages, contact.country
  city: "Podgorica",
  geo: { lat: 0, lng: 0 }, // TODO
  hours: [] as { days: string; open: string; close: string }[], // TODO
  social: {
    instagram: "https://www.instagram.com/hariscreperie.mne/",
    // The page that posted the reel the user sent (facebook.com/reel/
    // 2103539443883670): the Belgrade page, there is no Montenegrin one yet
    facebook: "https://www.facebook.com/creperieharisBG/",
  },
  // The studio that made the site, credited in the footer
  credit: { name: "Gondor Produkcija", url: "https://gondorcg.me/" },
}
