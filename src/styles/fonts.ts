import { Outfit, Noto_Sans_JP } from "next/font/google";
import localFont from "next/font/local";

// Google Fonts
export const outfitFont = Outfit({
  variable: "--font-outfit",
});

// Class Css Fonts
export const notoSansJpFont = Noto_Sans_JP({
  variable: "--font-notosansjp",
});

export const adobeFonts = {
  mizolet: "font-mizolet",
  yuGothic: "font-yu-gothic",
};

// Local Fonts
// const outfitFont = localFont({
//   src: "../../public/fonts/Outfit-VariableFont_wght.ttf",
//    variable: "--font-outfit"
// })

// const notoSansJpFont = localFont({
//   src: "../../public/fonts/NotoSansJP-VariableFont_wght.ttf",
//   variable: "--font-notosansjp",
// })

// export { outfit, notoSansJp, outfitFont, notoSansJpFont }
