import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import HeadingSection from "../../components/heading/HeadingSection";
import CardAgenda from "./fragment/CardAgenda";

export default function Agenda() {
    return (
        <Box minH={"100vh"}>
            <Navbar />
            <HeadingSection heading="AGENDA" />
            <Grid
                templateColumns="repeat(3, 1fr)"
                gap={10}
                px={10}
                py={16}
                bgColor={"primary.500"}
            >
                <CardAgenda
                    heading={"Agenda 1"}
                    author={"admin"}
                    date={"22/08/2022"}
                />
                <CardAgenda
                    heading={"Agenda 2"}
                    author={"admin"}
                    date={"22/08/2022"}
                />
                <CardAgenda
                    heading={"Agenda 3"}
                    author={"admin"}
                    date={"22/08/2022"}
                />
                <CardAgenda
                    heading={"Agenda 4"}
                    author={"admin"}
                    date={"22/08/2022"}
                />
                <CardAgenda
                    heading={"Agenda 5"}
                    author={"admin"}
                    date={"22/08/2022"}
                />
                <CardAgenda
                    heading={"Agenda 6"}
                    author={"admin"}
                    date={"22/08/2022"}
                />
            </Grid>
            <Footer />
        </Box>
    );
}
