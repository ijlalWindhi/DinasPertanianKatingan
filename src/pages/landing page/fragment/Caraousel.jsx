import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import CardKomoditi from "./CardKomoditi";

import "swiper/css";
import "swiper/css/navigation";
import "../style/style.css";

import Image1 from "../../../assets/images/image-komoditi1.png";
import Image2 from "../../../assets/images/image-komoditi2.png";
import Image3 from "../../../assets/images/image-komoditi3.png";
import Image4 from "../../../assets/images/image-komoditi4.png";
import Image5 from "../../../assets/images/image-komoditi5.png";
import Image6 from "../../../assets/images/image-komoditi6.png";
import Image7 from "../../../assets/images/image-komoditi7.png";
import Image8 from "../../../assets/images/image-komoditi8.png";

export default function Caraousel() {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            slidesPerGroup={4}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <CardKomoditi
                    title={"Kelapa Sawit"}
                    price={"7.000"}
                    image={Image1}
                />
            </SwiperSlide>
            <SwiperSlide>
                <CardKomoditi
                    title={"Kelapa"}
                    price={"20.000"}
                    image={Image2}
                />
            </SwiperSlide>
            <SwiperSlide>
                <CardKomoditi title={"Karet"} price={"10.000"} image={Image3} />
            </SwiperSlide>
            <SwiperSlide>
                <CardKomoditi title={"Kopi"} price={"15.000"} image={Image4} />
            </SwiperSlide>
            <SwiperSlide>
                <CardKomoditi
                    title={"Ikan Nila"}
                    price={"40.000"}
                    image={Image5}
                />
            </SwiperSlide>
            <SwiperSlide>
                <CardKomoditi
                    title={"Gula Merah"}
                    price={"40.000"}
                    image={Image6}
                />
            </SwiperSlide>
            <SwiperSlide>
                <CardKomoditi
                    title={"Beras Ketan"}
                    price={"40.000"}
                    image={Image7}
                />
            </SwiperSlide>
            <SwiperSlide>
                <CardKomoditi title={"Tahu"} price={"40.000"} image={Image8} />
            </SwiperSlide>
        </Swiper>
    );
}
