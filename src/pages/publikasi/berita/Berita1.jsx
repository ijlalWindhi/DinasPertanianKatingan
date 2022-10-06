import React from "react";
import { Box, Heading, Text, Icon, Image, Button } from "@chakra-ui/react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import HeadingSection from "../../../components/heading/HeadingSection";
import { Calendar, Clock, Tag } from "react-feather";
import Image1 from "../../../assets/images/image-berita1.png";

export default function Berita() {
    return (
        <Box minH={"100vh"}>
            <Navbar />
            <HeadingSection heading="Berita" />
            <Box px={10} py={16} bgColor={"primary.500"}>
                <Box
                    display={"flex"}
                    gap={10}
                    fontWeight={"bold"}
                    maxW={"70%"}
                    mx={"auto"}
                >
                    <Box display={"flex"} alignItems={"center"}>
                        <Icon as={Calendar} w={6} h={6} />
                        <Text ml={1}>Senin, 12 Juli 2021</Text>
                    </Box>
                    <Box display={"flex"} alignItems={"center"}>
                        <Icon as={Clock} w={6} h={6} />
                        <Text ml={1}>08.00 WIB</Text>
                    </Box>
                </Box>
                <Box textAlign={"center"} mt={10}>
                    <Heading mb={5}>Nomenklator Pertanian baru</Heading>
                    <Image src={Image1} mx={"auto"} w={"50%"} />
                </Box>
                <Box mx={"auto"} maxWidth={"70%"}>
                    <Text mt={10} textAlign={"justify"} fontSize={"xl"}>
                        Berdasarkan Peraturan Daerah Kabupaten Katingan Nomor 9
                        Tahun 2016 tentang Pembentukan dan Susunan Perangkat
                        Daerah Kabupaten Katingan, maka Dinas Pertanian,
                        Perkebunan dan Peternakan Kabupaten Katingan berubaha
                        menjadi Dinas Pertanian, Pangan dan Perikanan Kabupaten
                        Katingan terdiri dari satu Sekretariat dan lima bidang
                        teknis, yang masing - masing sekretariat dan bidang
                        terdiri dari tiga sub bagian/seksi.
                    </Text>
                    <Box display={"flex"} alignItems={"center"} mt={8}>
                        <Icon as={Tag} w={6} h={6} fontWeight={"bold"} mr={4} />
                        <Box display={"flex"} gap={2}>
                            <Button
                                bgColor={"primary.600"}
                                color={"white"}
                                _hover={{ bgColor: "primary.200" }}
                            >
                                Kabupaten Katingan
                            </Button>
                            <Button
                                bgColor={"primary.600"}
                                color={"white"}
                                _hover={{ bgColor: "primary.200" }}
                            >
                                Dinas Pertanian Katingan
                            </Button>
                            <Button
                                bgColor={"primary.600"}
                                color={"white"}
                                _hover={{ bgColor: "primary.200" }}
                            >
                                Dinas Pertanian
                            </Button>
                            <Button
                                bgColor={"primary.600"}
                                color={"white"}
                                _hover={{ bgColor: "primary.200" }}
                            >
                                Berita Dinas Pertanian
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </Box>
    );
}
