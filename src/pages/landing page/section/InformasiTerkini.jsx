import React from "react";
import { Box, Heading, Text, Grid } from "@chakra-ui/react";
import CardInformasi from "../fragment/CardInformasi";

export default function InformasiTerkini() {
    return (
        <Box bgColor={"primary.500"} px={"10"} py={"16"}>
            <Box color={"primary.400"} textAlign={"center"}>
                <Heading fontSize={"4xl"} fontWeight={"bold"}>
                    Informasi Terkini
                </Heading>
                <Text fontSize={"xl"}>Berita dan Pengumuman</Text>
            </Box>
            <Grid
                templateColumns="repeat(3, 1fr)"
                maxW={"80%"}
                mx={"auto"}
                gap={6}
                my={10}
                justifyItems={"center"}
            >
                <CardInformasi />
            </Grid>
        </Box>
    );
}
