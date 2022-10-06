import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Caraousel from "../fragment/Caraousel";

export default function HargaKomoditi() {
    return (
        <Box bgColor={"primary.500"} py={16}>
            <Box textAlign={"center"}>
                <Heading fontSize={"4xl"}>Harga Komoditi</Heading>
                <Text fontSize={"2xl"} fontWeight={"semibold"}>
                    Dinas Pertanian, pangan & Perikanan Kab. Katingan
                </Text>
                <Text fontSize={"xl"} my={8}>
                    Update per Senin, 8 Agustus 2022
                </Text>
            </Box>
            <Box maxW={"80%"} mx={"auto"}>
                <Caraousel />
            </Box>
        </Box>
    );
}
