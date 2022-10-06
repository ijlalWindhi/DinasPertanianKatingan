import React from "react";
import { Box, Heading, Icon, Text, Button } from "@chakra-ui/react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import HeadingSection from "../../../components/heading/HeadingSection";
import { Calendar, User } from "react-feather";
import { Link } from "react-router-dom";

export default function AgendaPage() {
    return (
        <Box minH={"100vh"}>
            <Navbar />
            <HeadingSection heading="AGENDA" />
            <Box px={10} py={16} maxW={"80%"} mx={"auto"}>
                <Box
                    bgColor={"primary.300"}
                    px={20}
                    py={10}
                    rounded={"xl"}
                    roundedBottomLeft={"none"}
                >
                    <Heading textAlign={"center"}>Judul Agenda</Heading>
                    <Box display={"flex"} fontWeight={"normal"} mt={2}>
                        <Box display={"flex"} alignItems={"center"} mr={12}>
                            <Icon as={User} w={5} h={5} mr={1} />
                            <Text>admin</Text>
                        </Box>
                        <Box display={"flex"} alignItems={"center"}>
                            <Icon as={Calendar} w={5} h={5} mr={1} />
                            <Text>22/08/2022</Text>
                        </Box>
                    </Box>
                    <Box
                        fontSize={"lg"}
                        fontWeight={"normal"}
                        mt={6}
                        lineHeight={10}
                    >
                        <Text>Hari dan Tanggal :</Text>
                        <Text>Dilaksanakan Oleh :</Text>
                        <Text>Lokasi :</Text>
                        <Text>Kegiatan :</Text>
                    </Box>
                </Box>
                <Link to="/agenda">
                    <Button
                        bgColor={"primary.100"}
                        _hover={{ bgColor: "primary.200" }}
                        color={"white"}
                        fontSize={"xl"}
                        px={10}
                        py={6}
                        rounded={"3xl"}
                        roundedTopLeft={"none"}
                    >
                        Kembali
                    </Button>
                </Link>
            </Box>
            <Footer />
        </Box>
    );
}
