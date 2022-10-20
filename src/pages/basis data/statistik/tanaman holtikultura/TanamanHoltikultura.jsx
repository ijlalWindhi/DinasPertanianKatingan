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

export default function TanamanHoltikultura() {
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
                    minW={"80%"}
                    justifySelf={"center"}
                >
                    <Heading color={"primary.100"} mb={4}>
                        Data Statistik Holtikultura
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
                                <Td>Luas Panen Habis Tanam</Td>
                                <Td>25/11/2015</Td>
                                <Td>Statistik Dasar</Td>
                            </Tr>
                            <Tr>
                                <Td>2</Td>
                                <Td>Luas Panen Tanaman Biofarmaka</Td>
                                <Td>25/11/2015</Td>
                                <Td>Statistik Dasar</Td>
                            </Tr>
                            <Tr>
                                <Td>3</Td>
                                <Td>Produksi Tanaman Biofarmaka</Td>
                                <Td>25/11/2015</Td>
                                <Td>Statistik Dasar</Td>
                            </Tr>
                            <Tr>
                                <Td>4</Td>
                                <Td>
                                    Produksi Tanaman Buah-Buahan dan Sayuran
                                </Td>
                                <Td>25/11/2015</Td>
                                <Td>Statistik Dasar</Td>
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
