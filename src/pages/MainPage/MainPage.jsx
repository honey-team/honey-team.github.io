import SecondarySection from "../../components/SecondarySection/SecondarySection.jsx";
import ThirdSection from "../../components/ThirdSection/ThirdSection.jsx";
import MainSection from "../../components/MainSection/MainSection.jsx";
import FifthSection from "../../components/FifthSection/FifthSection.jsx";
import FourthSection from "../../components/FourthSection/FourthSection.jsx";
import HTHead, { Pages } from "../../components/HTHead/HTHead.jsx";

function MainPage() {
  return (
    <>
      <HTHead page={Pages.index} />
      <MainSection />
      <SecondarySection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </>
  );
}

export default MainPage;
