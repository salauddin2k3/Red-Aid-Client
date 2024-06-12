import { Helmet } from "react-helmet-async";
import Faq from "../../Faq";
// import LottieReact from "../../LottieReact";
// import Posts from "../../Posts";
import Features from "../../Features";
import Banner from "./Banner/Banner";
import Contact from "../../Contact";


const Home = () => {
    return (
        <div className="">
            <Helmet><title>Red Aid</title></Helmet>
            <Banner></Banner>
            {/* <LottieReact></LottieReact> */}
            {/* <Posts></Posts> */}
            <Faq></Faq>
            <Contact></Contact>
            <Features></Features>
        </div>
    );
};

export default Home;