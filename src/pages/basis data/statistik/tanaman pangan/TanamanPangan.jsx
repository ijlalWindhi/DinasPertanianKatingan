import React from "react";
import {
    Box,
    Heading,
    Grid,
    GridItem,
    Table,
    Thead,
    Tbody,
    Tr,
    Td,
    Th,
} from "@chakra-ui/react";
import Navbar from "../../../../components/navbar/Navbar";
import Footer from "../../../../components/footer/Footer";
import HeadingSection from "../../../../components/heading/HeadingSection";
import Navigation from "../fragment/Navigation";

export default function TanamanPangan() {
    return (
        <Box minH={"100vh"}>
            <Navbar />
            <HeadingSection
                heading="Basis Data"
                title="Statistik Pertanian, Perkebunan, dan Perikanan"
            />
            <Grid
                templateColumns="repeat(3, 1fr)"
                gap={6}
                px={10}
                py={16}
                bgColor={"primary.500"}
            >
                <GridItem
                    colSpan={2}
                    textAlign={"justify"}
                    maxW={"100%"}
                    justifySelf={"center"}
                >
                    <Heading color={"primary.100"} mb={4}>
                        Data Statistik Tanaman Pangan
                    </Heading>
                    <Table variant={"striped"} bgColor={"white"} size={"lg"}>
                        <Thead bgColor={"primary.600"}>
                            <Tr>
                                <Th color={"white"}>No</Th>
                                <Th color={"white"}>Judul Tabel</Th>
                                <Th color={"white"}>Update</Th>
                                <Th color={"white"}>Keterangan</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>1</Td>
                                <Td>Luas Lahan Tanaman Pangan</Td>
                                <Td>30 Maret 2016</Td>
                                <Td>Statistik Dasar</Td>
                            </Tr>
                            <Tr>
                                <Td>2</Td>
                                <Td>
                                    Luas Lahan Tanaman Pangan Kabupaten
                                    Katingan, 2010-2014
                                </Td>
                                <Td>2010-2014</Td>
                                <Td></Td>
                            </Tr>
                            <Tr>
                                <Td>3</Td>
                                <Td>Produksi Tanaman Pangan, 2014</Td>
                                <Td>2014</Td>
                                <Td></Td>
                            </Tr>
                            <Tr>
                                <Td>4</Td>
                                <Td>Produktivitas Tanaman Pangan, 2014</Td>
                                <Td>2014</Td>
                                <Td></Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </GridItem>
                <GridItem>
                    <Navigation />
                </GridItem>
            </Grid>
            <Footer />
        </Box>
    );
}
