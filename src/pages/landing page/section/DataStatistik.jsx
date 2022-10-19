import React from "react";
import {
    Box,
    Heading,
    Button,
    Text,
    Grid,
    GridItem,
    Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import DiagramLine from "../fragment/DiagramLine";
import DiagramBar from "../fragment/DiagramBar";
import CardAgenda from "../fragment/CardAgenda";

export default function DataStatistik() {
    return (
        <Grid templateColumns="repeat(3, 1fr)" bgColor={"primary.500"}>
            <GridItem colSpan={2}>
                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    mt={16}
                >
                    <Box pr={10}>
                        <Heading fontSize={"5xl"}>Data Statistik</Heading>
                        <Text fontSize={"xl"}>
                            Pertanian, Pangan, & Perikanan
                        </Text>
                        <Link to={"/basis-data/statistik/tanaman-pangan"}>
                            <Button
                                bgColor={"primary.100"}
                                _hover={{ bgColor: "primary.200" }}
                                color={"white"}
                                fontSize={"xl"}
                                px={8}
                                mt={6}
                            >
                                Lihat Selengkapnya
                            </Button>
                        </Link>
                    </Box>
                    <Box>
                        <DiagramLine />
                    </Box>
                </Box>
                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    mt={10}
                    ml={4}
                    mb={16}
                >
                    <Box pr={10}>
                        <Heading fontSize={"5xl"}>Komoditi</Heading>
                        <Text fontSize={"xl"}>
                            Pertanian, Pangan, & Perikanan
                        </Text>
                        <Link to={"/basis-data/harga-komoditi"}>
                            <Button
                                bgColor={"primary.100"}
                                _hover={{ bgColor: "primary.200" }}
                                color={"white"}
                                fontSize={"xl"}
                                px={8}
                                mt={6}
                            >
                                Lihat Selengkapnya
                            </Button>
                        </Link>
                    </Box>
                    <Box>
                        <DiagramBar />
                    </Box>
                </Box>
            </GridItem>
            <GridItem colSpan={1} bgColor={"primary.700"} mt={2}>
                <Box textAlign={"center"} color={"white"} mt={10} mb={6}>
                    <Heading>Agenda</Heading>
                    <Text fontSize={"lg"}>
                        Agenda dan Kegiatan Dinas Pertanian, Pangan dan
                        Perikanan
                    </Text>
                </Box>
                <Box>
                    <CardAgenda />
                    <CardAgenda />
                    <CardAgenda />
                    <CardAgenda />
                    <CardAgenda />
                    <CardAgenda />
                    <CardAgenda />
                </Box>
            </GridItem>
        </Grid>
    );
}
