import { Helmet } from "react-helmet-async";
import Estates from "./Estates";
import Slider from "./Slider";
import Contact from "./Contact";
import Faq from "./Faq";
import CountrySection from "./CountrySection";
import LottieReact from "./LottieReact";


const Home = () => {
    return (
        <div className="">
            <Helmet><title>Paradise of Earth</title></Helmet>
            <Slider></Slider>
            <LottieReact></LottieReact>
            <Estates></Estates>
            <CountrySection></CountrySection>
            <Faq></Faq>
            <Contact></Contact>
        </div>
    );
};

export default Home;