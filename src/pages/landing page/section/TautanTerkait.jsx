import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Image, Box } from "@chakra-ui/react";

import "swiper/css";
import "swiper/css/navigation";
import "../style/style.css";

import Logo1 from "../../../assets/images/image-logo1.png";
import Logo2 from "../../../assets/images/image-logo2.png";
import Logo3 from "../../../assets/images/image-logo3.png";
import Logo4 from "../../../assets/images/image-logo4.png";
import Logo5 from "../../../assets/images/image-logo5.png";
import Logo6 from "../../../assets/images/image-logo6.png";
import Logo7 from "../../../assets/images/image-logo7.png";
import Logo8 from "../../../assets/images/image-logo8.png";
import Logo9 from "../../../assets/images/image-logo9.png";

export default function TautanTerkait() {
    return (
        <Box bgColor={"primary.300"} py={16}>
            <Box maxW={"80%"} mx={"auto"}>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Image src={Logo1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={Logo2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={Logo3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={Logo4} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={Logo5} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={Logo6} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={Logo7} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={Logo8} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={Logo9} />
                    </SwiperSlide>
                </Swiper>
            </Box>
        </Box>
    );
}
