import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import HeadingSection from "../../../components/heading/HeadingSection";
import CardFoto from "./fragment/CardFoto";
import Image1 from "../../../assets/images/image-galeri1.png";
import Image2 from "../../../assets/images/image-galeri2.png";
import Image3 from "../../../assets/images/image-galeri3.png";
import Image4 from "../../../assets/images/image-galeri4.png";

export default function GaleriFoto() {
    return (
        <Box minH={"100vh"} bgColor={"primary.500"}>
            <Navbar />
            <HeadingSection heading="Publikasi" title="Galeri Foto" />
            <Grid
                templateColumns="repeat(2, 1fr)"
                gap={6}
                px={10}
                py={16}
                bgColor={"primary.500"}
            >
                <CardFoto
                    image={Image1}
                    title={"Panen Raya Desa Subur Indah"}
                    amount={"1"}
                />
                <CardFoto
                    image={Image2}
                    title={
                        "Kalteng Surplus Beras, Katingan Kesulitan Pemasaran"
                    }
                    amount={"1"}
                />
                <CardFoto
                    image={Image3}
                    title={
                        "Panen Jagung Dalam Rangka Memperingati Hari Tani Nasional"
                    }
                    amount={"1"}
                />
                <CardFoto
                    image={Image4}
                    title={
                        "Katingan Manfaatkan SIMURP Kementan Turunkan Emisi Gas Rumah Kaca"
                    }
                    amount={"1"}
                />
            </Grid>
            <Footer />
        </Box>
    );
}
