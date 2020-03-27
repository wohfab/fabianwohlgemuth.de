
// Documentation on: https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-lincoln/src/index.js

import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  googleFonts: [
    {
      name: "Oswald",
      styles: ["400", "700"],
    },
    {
      name: "Fjalla One",
      styles: ["400"],
    },    
    {
      name: "Lato",
      styles: ["400", "700"],
    },
    {
      name: "Libre Baskerville",
      styles: ["400", "400i", "700"],
    },
    {
      name: "Roboto Slab",
      styles: ["400", "400i", "700"],
    },
    {
      name: "Playfair Display",
      styles: ["400", "400i", "700"],
    },
    {
      name: "Lora",
      styles: ["400", "400i", "700"],
    },
    {
      name: "Slabo",
      styles: ["400", "400i", "700"],
    },
    {
      name: "Merriweather",
      styles: ["400", "400i", "700"],
    },
  ],
  headerFontFamily: [
    "Oswald",
    "Open Sans Condensed",
    "Bebas Neue",
    "Fjalla One",
    "Lato",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: [
    "Libre Baskerville", 
    "Roboto Slab",
    "Playfair Display",
    "Lora",
    "Slabo",
    "Merriweather",
    "serif"],
  headerWeight: 400,
  bodyWeight: 400,
  boldWeight: 700,
})

export const { scale, rhythm, options } = typography
export default typography