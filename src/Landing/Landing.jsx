import Popular from "./Popular";
import Carousel from "../components/Carousel";
import Top from "./Top"
import TestimonialCarousel from "./TestimonialCarousel";
import Footer from "./Footer";

 const Landing = () => {
  return (
    <div>
        <div className="m-8">
            <img src="../src/assets/home.png" alt="" />
        </div>
        <div>
            <Popular></Popular>
        </div>
        <div className="m-8  rounded-[20px] p-[10px] ">
          <Carousel></Carousel>
        </div>
        <div>
            <Top></Top>
        </div>
        <div>
       < TestimonialCarousel/>
        </div>
        <div>
          <Footer></Footer>
        </div>

    </div>
  )
}

export default Landing;
