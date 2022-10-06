import React from "react";
import { Box, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import HeadingSection from "../../../components/heading/HeadingSection";
import Navigation from "../fragment/Navigation";

export default function Topografi() {
    return (
        <Box minH={"100vh"}>
            <Navbar />
            <HeadingSection heading="Profil Daerah" title="Topografi" />
            <Grid
                templateColumns="repeat(3, 1fr)"
                gap={6}
                px={10}
                py={24}
                bgColor={"primary.500"}
            >
                <GridItem
                    colSpan={2}
                    textAlign={"justify"}
                    maxW={"70%"}
                    justifySelf={"center"}
                >
                    <Heading color={"primary.100"} mb={4}>
                        Topografi
                    </Heading>
                    <Text fontSize={"lg"}>
                        Ketinggian rata-rata wilayah Kabupaten Katingan antara 0
                        sampai dengan 600 meter diatas permukaan laut, dengan
                        keadaan tanah dari rata rata datar sampai bergelombang
                        mulai dari kemiringan 0 derajat sampai dengan 45 derajat
                        yang terdiri dari laut, sungai dan danau, daerah pasang
                        surut, dataran rendah, dataran tinggi dan
                        perbukitan/pegunungan.
                    </Text>
                </GridItem>
                <GridItem>
                    <Navigation />
                </GridItem>
            </Grid>
            <Footer />
        </Box>
    );
}
