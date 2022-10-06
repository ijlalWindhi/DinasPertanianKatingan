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
                    alignSelf={"center"}
                    justifyItems={"center"}
                    display={"flex"}
                >
                    Profil
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
                    <Link to="/profil/profil-dinas">
                        Profil Dinas Pertanian, Perkebunan dan Peternakan
                    </Link>
                </Text>
                <Text my={4} _hover={{ color: "primary.600" }}>
                    <Link to="/profil/visi-misi">Visi dan Misi</Link>
                </Text>
                <Text _hover={{ color: "primary.600" }}>
                    <Link to="/profil/struktur-organisasi">
                        Struktur Organisasi
                    </Link>
                </Text>
                <Text my={4} _hover={{ color: "primary.600" }}>
                    <Link to="/profil/sambutan">Sambutan Kepala Dinas</Link>
                </Text>
                <Text _hover={{ color: "primary.600" }}>
                    <Link to="/profil/tupoksi">Tupoksi</Link>
                </Text>
            </Box>
        </Box>
    );
}
