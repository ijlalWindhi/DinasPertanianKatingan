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
                    size="lg"
                    color={"white"}
                    alignItems={"center"}
                    alignContent={"center"}
                    alignSelf={"center"} // justifyContent={"center"}
                    justifyItems={"center"}
                    display={"flex"}
                >
                    Profil Daerah
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
                    <Link to="/profil-daerah/potensi">
                        Potensi Pertanian, Perkebunan dan Peternakan
                    </Link>
                </Text>
                <Text my={4} _hover={{ color: "primary.600" }}>
                    <Link to="/profil-daerah/topografi">Topografi</Link>
                </Text>
                <Text _hover={{ color: "primary.600" }}>
                    <Link to="/profil-daerah/kondisi-umum">
                        Kondisi Umum Daerah
                    </Link>
                </Text>
            </Box>
        </Box>
    );
}
