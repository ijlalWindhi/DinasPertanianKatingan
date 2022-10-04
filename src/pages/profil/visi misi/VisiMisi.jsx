import React from "react";
import {
    Box,
    Heading,
    Text,
    Grid,
    GridItem,
    OrderedList,
    ListItem,
} from "@chakra-ui/react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import HeadingSection from "../../../components/heading/HeadingSection";
import Navigation from "../fragment/Navigation";

export default function VisiMisi() {
    return (
        <Box minH={"100vh"}>
            <Navbar />
            <HeadingSection heading="Profil" title="Visi dan Misi" />
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
                        Visi
                    </Heading>
                    <Text
                        fontSize={"lg"}
                        bgColor={"primary.300"}
                        fontWeight={"bold"}
                        width={"fit-content"}
                        py={2}
                        px={5}
                        rounded={"xl"}
                    >
                        PERTANIAN MAJU, MANDIRI DAN BERDAYA SAING
                    </Text>
                    <Heading color={"primary.100"} mt={8} mb={4}>
                        Misi
                    </Heading>
                    <OrderedList lineHeight={"8"}>
                        <ListItem fontSize={"lg"}>
                            Mengoptimalkan pengelolaan sumberdaya lahan
                            pertanian dalam rangka diversifikasi komoditi dan
                            usaha tani.
                        </ListItem>
                        <ListItem fontSize={"lg"}>
                            Meningkatkan sumber daya manusia dan kelembagaan
                            pertanian yang berwawasan agribisnis.
                        </ListItem>
                        <ListItem fontSize={"lg"}>
                            Mengembangkan sarana prasarana, teknologi dalam
                            rangka meningkatkan produksi dan mutu produk
                            pertanian.
                        </ListItem>
                        <ListItem fontSize={"lg"}>
                            Mengembangkan diversifikasi dan komoditas unggulan
                            daerah dalam rangka pemantapan ketahanan pangan
                            masyarakat.
                        </ListItem>
                        <ListItem fontSize={"lg"}>
                            Mengembangkan pemasaran dan promosi hasil pertanian.
                        </ListItem>
                    </OrderedList>
                </GridItem>
                <GridItem>
                    <Navigation />
                </GridItem>
            </Grid>
            <Footer />
        </Box>
    );
}
