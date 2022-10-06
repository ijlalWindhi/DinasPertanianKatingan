import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import HeadingSection from "../../../components/heading/HeadingSection";
import CardPengumuman from "./fragment/CardPengumuman";

export default function Pengumuman() {
    return (
        <Box minH={"100vh"}>
            <Navbar />
            <HeadingSection heading="Pengumuman" />
            <Grid
                templateColumns="repeat(3, 1fr)"
                gap={10}
                px={10}
                py={16}
                bgColor={"primary.500"}
            >
                <CardPengumuman
                    heading={"Pengumuman 1"}
                    author={"admin"}
                    date={"22/08/2022"}
                />
                <CardPengumuman
                    heading={"Pengumuman 2"}
                    author={"admin"}
                    date={"22/08/2022"}
                />
                <CardPengumuman
                    heading={"Pengumuman 3"}
                    author={"admin"}
                    date={"22/08/2022"}
                />
                <CardPengumuman
                    heading={"Pengumuman 4"}
                    author={"admin"}
                    date={"22/08/2022"}
                />
                <CardPengumuman
                    heading={"Pengumuman 5"}
                    author={"admin"}
                    date={"22/08/2022"}
                />
                <CardPengumuman
                    heading={"Pengumuman 6"}
                    author={"admin"}
                    date={"22/08/2022"}
                />
            </Grid>
            <Footer />
        </Box>
    );
}
