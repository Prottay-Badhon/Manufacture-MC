import React from "react";
import banner1 from "../../images/Banner/banner1.jpg";
import banner2 from "../../images/Banner/banner2.jpg";
import banner3 from "../../images/Banner/banner3.jpg";

const Banner = () => {
  return (
    <div className="">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full h-[400px] lg:h-[550px]">
          <img src={banner1} className="w-full" alt="" />
        </div>
        <div id="item2" className="carousel-item w-full  h-[400px] lg:h-[550px]">
          <img src={banner2} className="w-full" alt="" />
        </div>
        <div id="item3" className="carousel-item w-full  h-[400px] lg:h-[550px]">
          <img src={banner3} className="w-full" alt="" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default Banner;
