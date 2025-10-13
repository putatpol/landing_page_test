import { outfitFont, notoSansJpFont, adobeFonts } from "../styles/fonts";

export default function Home() {
  return (
    <>
      <h1 className={outfitFont.className}>outfit</h1>
      <h2 className={notoSansJpFont.className}>すべての</h2>
      <h1 className={adobeFonts.mizolet}>Hello Mizolet!</h1>
      <p className={adobeFonts.yuGothic}>これは Yu Gothic フォントです</p>
    </>
  );
}
