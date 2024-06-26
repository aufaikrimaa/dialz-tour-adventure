import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "./thumbswiper.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import price from "../../assets/images/price.svg";
import expert from "../../assets/images/expert.svg";
import facility from "../../assets/images/facility.svg";
import order from "../../assets/images/order.svg";
import photos from "../../assets/images/photos.svg";
import shield from "../../assets/images/shield.svg";

function ThumbsSwiper() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const data = [
    {
      title: "Harga terjangkau",
      desc: "Menawarkan pilihan terbaik dengan harga terjangkau sesuai kebutuhan Anda.",
      icon: price,
    },
    {
      title: "Profesional",
      desc: "Tim yang profesional dan berpengalaman siap melayani Anda dengan sepenuh hati.",
      icon: expert,
    },
    {
      title: "Fasilitas terbaik",
      desc: "Menyediakan fasilitas terbaik untuk kenyamanan dan kepuasan Anda.",
      icon: facility,
    },
    {
      title: "Booking cepat",
      desc: "Proses booking yang cepat, mudah, dan efisien untuk memudahkan transaksi Anda.",
      icon: order,
    },
    {
      title: "Dokumentasi",
      desc: "Menyediakan dokumentasi dengan Drone and Camera SLR by request",
      icon: photos,
    },
    {
      title: "Asuransi",
      desc: "Menyediakan fasilitas Asuransi untuk keamanan dan ketenangan anda selama kegiatan bersama kami.",
      icon: shield,
    },
  ];

  const settings1 = {
    arrows: false,
  };

  const settings2 = {
    slidesToShow: 6,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
  };

  return (
    <div className="thumbs text-white w-[45vw] sm:w-[80vw] md:w-[60vw]">
      <Slider
        {...settings2}
        asNavFor={nav1}
        ref={(slider) => (sliderRef2 = slider)}
        className="cursor-pointer mb-3 pl-4"
      >
        {data.map((item, index) => (
          <div key={index}>
            <img src={item.icon} alt={item.title} className="w-10 sm:w-6" />
          </div>
        ))}
      </Slider>
      <Slider
        {...settings1}
        asNavFor={nav2}
        ref={(slider) => (sliderRef1 = slider)}
      >
        {data.map((item, index) => (
          <div key={index} className="px-2 sm:px-0 sm:pl-4 md:px-0 md:pl-4">
            <div className="bg-[#FFAA00] bg-opacity-50 rounded-md p-6 sm:p-4 border-l-4 border-[#FFAA00] ">
              <div>
                <h3 className="text-xl sm:text-base md:text-lg font-bold mb-4 sm:mb-2 md:mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-xs">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ThumbsSwiper;
