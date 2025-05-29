import CallCard from "../CallCard/CallCard";
import Cards from "../Cards/Cards";
import CardsQuality from "../CardsQuality/CardsQuality";
import Examples from "../Examples/Example";
import Faq from "../Faq/Faq";
import Packages from "../Packages/Packages";
import Works from "../Works/Works";

const Main = () => {
  return (
    <main className="h-full">
      <Cards />
      <CardsQuality />
      <Examples />
      <Works />
      <Packages />
      <Faq />
      <CallCard />
    </main>
  );
};

export default Main;
