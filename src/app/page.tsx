import Lineup from "@/components/page/main-page/Lineup";
import MainSection from "@/components/page/main-page/Main";
import Option from "@/components/page/main-page/Option";
import Pickup from "@/components/page/main-page/Pickup";
import PickupDaily from "@/components/page/main-page/Pickup-daily";
import PickupFamily from "@/components/page/main-page/Pickup-family";

export default function Home() {
  return (
    <>
      <MainSection />
      <Pickup />
      <section id="purpost">
        <PickupFamily />
        <PickupDaily />
      </section>
      <section id="budget">
        <Lineup />
      </section>
      <Option />
    </>
  );
}
