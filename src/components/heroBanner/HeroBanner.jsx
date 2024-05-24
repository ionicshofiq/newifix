import {Carousel} from "react-responsive-carousel";
import bannerImage from "../../assets/hero-banner-background.jpg";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";
import slider4 from "../../assets/slider4.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const HeroBanner = () => {
  return (
    <div
      className="h-[600px] my-2 bg-cover bg-center bg-fixed flex justify-center items-center"
      style={{backgroundImage: `url(${bannerImage})`}}>
      <div className="w-1/2 flex flex-col ml-12">
        <p className="text-2xl font-medium">PROFESSIONAL</p>
        <p className="my-2">
          <span className="text-4xl text-white">Apple Service Center</span> <br />
          <span className="text-4xl text-white">Accessories Shop</span>
        </p>
        <div>
          <button className="bg-white text-2xl mr-3 px-8 py-[10px]">REPAIR NOW</button>
          <button className=" text-2xl px-10 py-2 bg-transparent text-white border-white border-2">BUY NOW</button>
        </div>
      </div>
      <div className="w-1/2">
        <Carousel
          showThumbs={false}
          autoPlay
          showArrows={false}
          showStatus={false}
          infiniteLoop
          stopOnHover={false}
          interval={5000}>
          <div>
            <img className="h-[600px] w-full" src={slider1} />
          </div>
          <div>
            <img className="h-[600px] w-full" src={slider2} />
          </div>
          <div>
            <img className="h-[600px] w-full" src={slider3} />
          </div>
          <div>
            <img className="h-[600px] w-full" src={slider4} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HeroBanner;
