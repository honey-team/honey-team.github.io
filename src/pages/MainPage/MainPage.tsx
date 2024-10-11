import HTHead, { Pages } from "../../components/HTHead/HTHead";
import MainSection from "../../components/MainSection/MainSection";
import SecondarySection from "../../components/SecondarySection/SecondarySection";
import ThirdSection from "../../components/ThirdSection/ThirdSection";
import FourthSection from "../../components/FourthSection/FourthSection";
import FifthSection from "../../components/FifthSection/FifthSection";

export default function MainPage() {
    return (
        <>
            <HTHead page={Pages.index}/>
            <MainSection/>
            <SecondarySection/>
            <ThirdSection/>
            <FourthSection/>
            <FifthSection/>
        </>
    );
}