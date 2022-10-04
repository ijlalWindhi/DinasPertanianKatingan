import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Box } from "@chakra-ui/react";
import Caraousel from "./section/Caraousel";
import Welcomeing from "./section/Welcomeing";
import InformasiTerkini from "./section/InformasiTerkini";
import Pengumuman from "./section/Pengumuman";
import DataStatistik from "./section/DataStatistik";
import Galeri from "./section/Galeri";
import HargaKomoditi from "./section/HargaKomoditi";
import TautanTerkait from "./section/TautanTerkait";
import Footer from "../../components/footer/Footer";

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
        </Box>
    );
}
