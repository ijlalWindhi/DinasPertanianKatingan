import React from "react";
import HeadingSection from "../../../components/heading/HeadingSection";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import { Box, Heading, Text, Grid, GridItem, Button } from "@chakra-ui/react";

export default function Download() {
    return (
        <Box minH={"100vh"}>
            <Navbar />
            <HeadingSection heading="Basis Data" title="Download" />
            <Grid
                templateColumns="repeat(3, 1fr)"
                gap={6}
                px={10}
                py={36}
                bgColor={"primary.500"}
            >
                <GridItem
                    colSpan={2}
                    textAlign={"justify"}
                    maxW={"70%"}
                    justifySelf={"center"}
                >
                    <Heading color={"primary.100"} mb={4}>
                        Download Center
                    </Heading>
                    <Box display={"flex"} gap={10}>
                        <Box>
                            <Text fontSize={"2xl"} fontWeight={"bold"}>
                                Harga Standar Barang dan Jasa
                            </Text>
                            <Text fontSize={"sm"} fontWeight={"normal"}>
                                06 Oktober 2016 14:33 WIB
                            </Text>
                            <Text fontSize={"lg"}>
                                Harga Standar Barang dan Jasa Semester 11 Tahun
                                2016
                            </Text>
                        </Box>
                        <Box alignSelf={"end"}>
                            <Button
                                bgColor={"primary.100"}
                                color={"primary.500"}
                                _hover={{ bgColor: "primary.200" }}
                            >
                                Download
                            </Button>
                        </Box>
                    </Box>
                </GridItem>
            </Grid>
            <Footer />
        </Box>
    );
}
