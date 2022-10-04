import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import HeadingSection from "../../../components/heading/HeadingSection";
import CardVideo from "./fragment/CardVideo";

import Image1 from "../../../assets/images/image-video1.png";
import Image2 from "../../../assets/images/image-video2.png";

export default function GaleriVideo() {
    return (
        <Box minH={"100vh"} bgColor={"primary.500"}>
            <Navbar />
            <HeadingSection heading="Publikasi" title="Galeri Video" />
            <Grid
                templateColumns="repeat(1, 1fr)"
                gap={6}
                px={10}
                py={16}
                bgColor={"primary.500"}
            >
                <CardVideo
                    image={Image1}
                    heading={"Perjuangan Sosok Peluluh di Katingan"}
                    title={"@SIMURPKementerianPertanian"}
                    href={"https://www.youtube.com/"}
                />
                <CardVideo
                    image={Image2}
                    heading={"Desa Jaya Makmur - Desa Agro Pertanian"}
                    title={"@SIMURPKementerianPertanian"}
                    href={"https://www.youtube.com/"}
                />
            </Grid>
            <Footer />
        </Box>
    );
}
