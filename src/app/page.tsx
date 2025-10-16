import MainSection from "@/components/page/main-page/Main";
import Pickup from "@/components/page/main-page/Pickup";
import PickupDaily from "@/components/page/main-page/Pickup-daily";
import PickupFamily from "@/components/page/main-page/Pickup-family";
import { outfitFont, notoSansJpFont, adobeFonts } from "@styles/fonts";

export default function Home() {
  return (
    <>
      <MainSection />
      <Pickup />
      <PickupFamily />
      {/* <PickupDaily /> */}
      {/* <div className="h-[1500px]">
      <h1 className={`${outfitFont.className} text-custom-yellow`}>outfit</h1>
      <h2 className={`${notoSansJpFont.className} text-custom-red`}>すべての</h2>
      <h1 className={`${adobeFonts.mizolet} text-custom-green-dark`}>Hello Mizolet!</h1>
      <p className={adobeFonts.yuGothic}>これは Yu Gothic フォントです OWNDAYSについて</p>
    </div> */}
    </>
  );
}
