import React from "react";
import { Box, Heading, Grid, GridItem, Image } from "@chakra-ui/react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import HeadingSection from "../../../components/heading/HeadingSection";
import Navigation from "../fragment/Navigation";
import ImageStrukturOrganisasi from "../../../assets/images/image-strukturOrganisasi.png";

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
