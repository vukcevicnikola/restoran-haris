# Hari's Creperie – main menu (jelovnik) export

Source: `main-menu-small.pdf` (42 pages). Text was read from the page images (the PDF has outlined text, no text layer) and cross-checked with OCR.

## Files
- `menu.json` – all data, bilingual (`me` = Montenegrin, `en` = English).
- `images/webp/*.webp` – transparent cut-outs of each dish (use these on the site).
- `images/jpg/*.jpg` – same photos flattened on cream `#fff2dc` (JPG has no transparency; change the colour if you need another background).

## menu.json structure
```
categories[] -> { id, name{me,en}, order, items[] }
item -> { id, number|null, name{me,en}, description{me,en}|null, price (number), priceDisplay ("7.20 eur"),
          noPork (true = the "NO PORK" badge is printed on the menu), image{webp,jpg,width,height,transparent}|null, sourcePage }
```
- `number` is the dish number printed on the menu (pizzas, salads, crepes, pancakes, waffles).
- Sweet crepes / pancakes / waffles have no separate title: the ingredient list is the name, `description` is null.
- Category "Budi sam svoj šef" (build your own) has `sections[]` (price lists of add-ons, no photos), each with `items[]`: `{id, name{me,en}, price, priceDisplay}`.
- "Naši proizvodi": the 7 bottled juices share two photos; the juice item uses a composite of the bottles, blueberry juice its own bottle.

## Things to check
- Texts are copied as printed, including typos in the PDF (e.g. "Interglani hljeb" on page 1, "Dupai crepe", "Mediteranian", "buiscuits", "jajc", "cedar" instead of cheddar). Fix them in `menu.json` if you want clean copy.
- Numbers missing from the printed menu (not in this PDF): pizza #5, waffles #44 and #45, salty crepes #76 and #84.
- Items with no photo (`image` is null): pizzas #1-#4 and #7 (page 15), salads #2-#5 (page 17), salty crepes #70, #71, #73-#75, #78 (page 33) and #80, #85-#89 (page 35).
- "Penkejk doručak" (page 11) is in Breakfast; pancakes #60-#67 are in the Penkejk category.
