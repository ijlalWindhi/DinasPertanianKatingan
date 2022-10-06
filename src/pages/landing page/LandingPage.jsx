import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-scroll";
import Caraousel from "./section/Caraousel";
import Welcomeing from "./section/Welcomeing";
import InformasiTerkini from "./section/InformasiTerkini";
import Pengumuman from "./section/Pengumuman";
import DataStatistik from "./section/DataStatistik";
import Galeri from "./section/Galeri";
import HargaKomoditi from "./section/HargaKomoditi";
import TautanTerkait from "./section/TautanTerkait";
import Footer from "../../components/footer/Footer";
import IconToTop from "../../assets/icon/icon-toTop.svg";

export default function LandingPage() {
    return (
        <Box>
            <Navbar />
            <Caraousel />
            <Welcomeing />
            <InformasiTerkini />
            <Pengumuman />
            <DataStatistik />
            <Galeri />
            <HargaKomoditi />
            <TautanTerkait />
            <Footer />
            <Box
                position={"fixed"}
                bottom={[5, 20]}
                right={[5, 20]}
                cursor={"pointer"}
                zIndex={"1"}
            >
                <Link to="caraousel" smooth={true} cursor="pointer">
                    <Image src={IconToTop} />
                </Link>
            </Box>
        </Box>
    );
}
