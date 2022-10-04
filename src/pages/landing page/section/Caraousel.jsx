import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { Image, Box, Text, Heading } from "@chakra-ui/react";

import Image1 from "../../../assets/images/image-caraousel1.png";
import Image2 from "../../../assets/images/image-caraousel2.png";
import Image3 from "../../../assets/images/image-caraousel3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style/style.css";

export default function Caraousel() {
    return (
        <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide>
                <Box>
                    <Image src={Image1} minH={"100vh"} />
                    <Box
                        color="white"
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                    >
                        <Heading mb={10} fontSize={"7xl"}>
                            PERIKANAN
                        </Heading>
                        <Text fontSize="4xl" fontWeight="bold">
                            DINAS PERTANIAN, PANGAN, DAN PERIKANAN <br />{" "}
                            KABUPATEN KATINGAN
                        </Text>
                    </Box>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box>
                    <Image src={Image2} minH={"100vh"} />
                    <Box
                        color="white"
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                    >
                        <Heading mb={10} fontSize={"7xl"}>
                            PANGAN
                        </Heading>
                        <Text fontSize="4xl" fontWeight="bold">
                            DINAS PERTANIAN, PANGAN, DAN PERIKANAN <br />{" "}
                            KABUPATEN KATINGAN
                        </Text>
                    </Box>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box>
                    <Image src={Image3} minH={"100vh"} />
                    <Box
                        color="white"
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                    >
                        <Heading mb={10} fontSize={"7xl"}>
                            PERTANIAN
                        </Heading>
                        <Text fontSize="4xl" fontWeight="bold">
                            DINAS PERTANIAN, PANGAN, DAN PERIKANAN <br />{" "}
                            KABUPATEN KATINGAN
                        </Text>
                    </Box>
                </Box>
            </SwiperSlide>
        </Swiper>
    );
}
