import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <Box
            display={"flex"}
            flexDir={"column"}
            maxW={"60%"}
            bgColor={"primary.300"}
            roundedBottomRight={"2xl"}
        >
            <Box
                bgColor={"primary.600"}
                px={10}
                py={4}
                roundedRight={"2xl"}
                roundedTopLeft={"2xl"}
            >
                <Heading
                    as="h1"
                    size="md"
                    color={"white"}
                    alignItems={"center"}
                    alignContent={"center"}
                    alignSelf={"center"}
                    justifyItems={"center"}
                    display={"flex"}
                >
                    Basis Data
                </Heading>
            </Box>
            <Box
                px={10}
                py={6}
                fontWeight={"semibold"}
                fontSize={"lg"}
                color={"primary.100"}
                lineHeight={"short"}
            >
                <Text _hover={{ color: "primary.600" }}>
                    <Link to="/basis-data/statistik/tanaman-pangan">
                        Statistik Pertanian, Perkebunan dan Peternakan
                    </Link>
                </Text>
                <Text my={4} _hover={{ color: "primary.600" }}>
                    <Link to="/">
                        Komoditi Pertanian, Perkebunan dan Peternakan
                    </Link>
                </Text>
                <Text _hover={{ color: "primary.600" }}>
                    <Link to="/basis-data/harga-komoditi">
                        Harga Komoditi Pertanian, Perkebunan dan Peternakan
                    </Link>
                </Text>
                <Text my={4} _hover={{ color: "primary.600" }}>
                    <Link to="/basis-data/download">Download</Link>
                </Text>
            </Box>
        </Box>
    );
}
