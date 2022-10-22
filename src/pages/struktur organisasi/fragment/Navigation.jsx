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
                    Struktur Organisasi
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
                    <Link to="/struktur-organisasi/sekertariat">
                        Sekretariat
                    </Link>
                </Text>
                <Text my={4} _hover={{ color: "primary.600" }}>
                    <Link to="/struktur-organisasi/ketahanan-pangan">
                        Bidang Ketahanan Pangan
                    </Link>
                </Text>
                <Text _hover={{ color: "primary.600" }}>
                    <Link to="/struktur-organisasi/prasarana">
                        Bidang Prasarana, Sarana Dan Penyuluhan Pertanian
                    </Link>
                </Text>
                <Text my={4} _hover={{ color: "primary.t600" }}>
                    <Link to="/struktur-organisasi/bidang-tanaman">
                        Bidang Tanaman Pangan Dan Hortikultura
                    </Link>
                </Text>
                <Text _hover={{ color: "primary.600" }}>
                    <Link to="/struktur-organisasi/bidang-perkebunan">
                        Bidang Perkebunan Dan Peternakan
                    </Link>
                </Text>
                <Text my={4} _hover={{ color: "primary.600" }}>
                    <Link to="/struktur-organisasi/bidang-perikanan">
                        Bidang Perikanan
                    </Link>
                </Text>
                <Text _hover={{ color: "primary.600" }}>
                    <Link to="/struktur-organisasi/kelompok-jabatan">
                        Kelompok Jabatan Fungsional
                    </Link>
                </Text>
                <Text my={4} _hover={{ color: "primary.600" }}>
                    <Link to="/struktur-organisasi/uptd-pertanian">
                        UPTD Pertanian, Pangan dan Perikanan
                    </Link>
                </Text>
            </Box>
        </Box>
    );
}
