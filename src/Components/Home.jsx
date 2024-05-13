import { Helmet } from "react-helmet-async";
import Slider from "./Slider";
import Contact from "./Contact";
import Faq from "./Faq";
import CountrySection from "./CountrySection";
// import LottieReact from "./LottieReact";
import Posts from "./Posts";


const Home = () => {
    return (
        <div className="">
            <Helmet><title>Paradise of Earth</title></Helmet>
            <Slider></Slider>
            {/* <LottieReact></LottieReact> */}
            <Posts></Posts>
            <CountrySection></CountrySection>
            <Faq></Faq>
            <Contact></Contact>
        </div>
    );
};

export default Home;