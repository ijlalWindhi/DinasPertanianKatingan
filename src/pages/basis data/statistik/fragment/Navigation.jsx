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
                    Statistik Pertanian, Perkebunan dan Peternakan
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
                        Data Statistik Tanaman Pangan
                    </Link>
                </Text>
                <Text my={4} _hover={{ color: "primary.600" }}>
                    <Link to="/basis-data/statistik/perkebunan">
                        Data Statistik Perkebunan
                    </Link>
                </Text>
                <Text _hover={{ color: "primary.600" }}>
                    <Link to="/basis-data/statistik/tanaman-holtikultura">
                        Data Statistik Holtikultura
                    </Link>
                </Text>
                <Text my={4} _hover={{ color: "primary.600" }}>
                    <Link to="/basis-data/statistik/peternakan">
                        Data Statistik Peternakan
                    </Link>
                </Text>
            </Box>
        </Box>
    );
}
