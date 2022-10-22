import React from "react";
import { Box, Heading, Grid, GridItem, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import HeadingSection from "../../../components/heading/HeadingSection";
import Navigation from "../fragment/Navigation";
import ImageStrukturOrganisasi from "../../../assets/images/strukturGroup.png";
import KepalaDinas from "../../../assets/images/kepala-dinas.png";
import Sekertariat from "../../../assets/images/sekertariat.png";
import KetahananPangan from "../../../assets/images/ketahanan-pangan.png";
import Perikanan from "../../../assets/images/perikanan.png";
import Perkebunan from "../../../assets/images/perkebunan-peternakan.png";
import Prasarana from "../../../assets/images/prasarana-sarana.png";
import TanamanPangan from "../../../assets/images/tanaman-pangan.png";

export default function StrukturOrganisasi() {
    return (
        <Box minH={"100vh"}>
            <Navbar />
            <HeadingSection heading="Profil" title="Struktur Organisasi" />
            <Grid
                templateColumns="repeat(3, 1fr)"
                gap={6}
                px={10}
                py={16}
                bgColor={"primary.500"}
            >
                <GridItem
                    colSpan={2}
                    textAlign={"justify"}
                    maxW={"70%"}
                    justifySelf={"center"}
                >
                    <Heading color={"primary.100"} mb={4}>
                        Struktur Organisasi
                    </Heading>
                    <Link to="/profil/sambutan">
                        <Image src={KepalaDinas} mx={"auto"} w={"25%"} />
                    </Link>
                    <Link to="/struktur-organisasi/sekertariat">
                        <Image
                            src={Sekertariat}
                            w={"10%"}
                            position={"absolute"}
                            mt={"5%"}
                            ml={"29%"}
                        />
                    </Link>
                    <Link to="/struktur-organisasi/ketahanan-pangan">
                        <Image
                            src={KetahananPangan}
                            w={"7%"}
                            position={"absolute"}
                            mt={"17.8%"}
                        />
                    </Link>
                    <Link to="/struktur-organisasi/prasarana">
                        <Image
                            src={Prasarana}
                            w={"7%"}
                            position={"absolute"}
                            mt={"17.8%"}
                            ml={"8%"}
                        />
                    </Link>
                    <Link to="/struktur-organisasi/bidang-tanaman">
                        <Image
                            src={TanamanPangan}
                            w={"7%"}
                            position={"absolute"}
                            mt={"17.8%"}
                            ml={"15.5%"}
                        />
                    </Link>
                    <Link to="/struktur-organisasi/bidang-perkebunan">
                        <Image
                            src={Perkebunan}
                            w={"7%"}
                            position={"absolute"}
                            mt={"17.8%"}
                            ml={"23.5%"}
                        />
                    </Link>
                    <Link to="/struktur-organisasi/bidang-perikanan">
                        <Image
                            src={Perikanan}
                            w={"7%"}
                            position={"absolute"}
                            mt={"17.8%"}
                            ml={"31%"}
                        />
                    </Link>
                    <Image src={ImageStrukturOrganisasi} draggable={false} />
                </GridItem>
                <GridItem>
                    <Navigation />
                </GridItem>
            </Grid>
            <Footer />
        </Box>
    );
}
