import { Helmet } from "react-helmet-async";
import Slider from "./Slider";
// import Contact from "./Contact";
import Faq from "./Faq";
// import LottieReact from "./LottieReact";
import Posts from "./Posts";
import Features from "./Features";


const Home = () => {
    return (
        <div className="">
            <Helmet><title>Infinity Care</title></Helmet>
            <Slider></Slider>
            {/* <LottieReact></LottieReact> */}
            <Posts></Posts>
            <Faq></Faq>
            {/* <Contact></Contact> */}
            <Features></Features>
        </div>
    );
};

export default Home;