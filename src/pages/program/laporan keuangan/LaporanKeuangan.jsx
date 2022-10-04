import React from "react";
import { Box, Heading, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import HeadingSection from "../../../components/heading/HeadingSection";
import Navigation from "../fragment/Navigation";
import CardDownload from "../fragment/CardDownload";

export default function LaporanKeuangan() {
    return (
        <Box minH={"100vh"}>
            <Navbar />
            <HeadingSection
                heading="Program"
                title="Anggran Laporan Keuangan"
            />
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
                    w={"70%"}
                    justifySelf={"center"}
                >
                    <Heading color={"primary.100"} mb={4}>
                        Dokumen Anggaran dan Keuangan
                    </Heading>
                    <CardDownload
                        heading="APBD Tahun 2016"
                        date="30 September 2016 16:31 WIB,"
                        title="-"
                    />
                    <CardDownload
                        heading="DPA-SKPD TA.2016"
                        date="30 September 2016 16:31 WIB,"
                        title="-"
                    />
                </GridItem>
                <GridItem>
                    <Navigation />
                </GridItem>
            </Grid>
            <Footer />
        </Box>
    );
}
