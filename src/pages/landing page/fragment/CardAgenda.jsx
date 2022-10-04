import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function CardAgenda() {
    return (
        <Box
            bgColor={"primary.500"}
            maxW={"95%"}
            py={4}
            px={8}
            textAlign={"right"}
            borderLeftRadius={"md"}
            ml={8}
            color={"primary.100"}
            my={2}
        >
            <Heading fontSize={"3xl"}>Rapat Desa Dalam Rangka HUT RI</Heading>
            <Link to="/">
                <Text>Lihat Selengkapnya</Text>
            </Link>
        </Box>
    );
}
