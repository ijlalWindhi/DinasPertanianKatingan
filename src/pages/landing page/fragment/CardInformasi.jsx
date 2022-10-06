import React from "react";
import { GridItem, Image, Text, Icon, Button, Box } from "@chakra-ui/react";
import Image1 from "../../../assets/images/image-informasTerkini1.png";
import Image2 from "../../../assets/images/image-informasTerkini2.png";
import Image3 from "../../../assets/images/image-informasTerkini3.png";
import { Calendar, User } from "react-feather";
import { Link } from "react-router-dom";

export default function CardInformasi() {
    return (
        <>
            <GridItem
                bgColor={"primary.600"}
                py={8}
                px={6}
                borderRadius={"3xl"}
                color={"white"}
                w={"70%"}
                display={"flex"}
                flexDirection={"column"}
            >
                <Image src={Image1} mx={"auto"} />
                <Box
                    h={"full"}
                    justifyContent={"space-between"}
                    display={"flex"}
                    flexDirection={"column"}
                >
                    <Text fontSize={"lg"} fontWeight={"bold"} pt={3}>
                        Nomenklator Pertanian baru
                    </Text>
                    <Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent={"space-between"}
                            mb={2}
                            mt={4}
                        >
                            <Box
                                display={"flex"}
                                flexDir={"row"}
                                alignItems={"center"}
                            >
                                <Icon as={Calendar} />
                                <Text ml={1}>20 Agustus 2018</Text>
                            </Box>
                            <Box
                                display={"flex"}
                                flexDir={"row"}
                                alignItems={"center"}
                            >
                                <Icon as={User} />
                                <Text ml={1}>oleh Admin</Text>
                            </Box>
                        </Box>
                        <Link to="/publikasi/berita/nomenklator-pertanian-baru">
                            <Button
                                bgColor={"primary.400"}
                                _hover={{ bgColor: "primary.200" }}
                                px={6}
                            >
                                Lihat Selengkapnya
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </GridItem>
            <GridItem
                bgColor={"primary.600"}
                py={8}
                px={6}
                borderRadius={"3xl"}
                color={"white"}
                w={"70%"}
                display={"flex"}
                flexDirection={"column"}
            >
                <Image src={Image2} mx={"auto"} />
                <Box
                    h={"full"}
                    justifyContent={"space-between"}
                    display={"flex"}
                    flexDirection={"column"}
                >
                    <Text fontSize={"lg"} fontWeight={"bold"} pt={3}>
                        Penyerahan Bantuan Alsintan oleh Bupati Katingan kepada
                        Petani
                    </Text>
                    <Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent={"space-between"}
                            mb={2}
                            mt={4}
                        >
                            <Box
                                display={"flex"}
                                flexDir={"row"}
                                alignItems={"center"}
                            >
                                <Icon as={Calendar} />
                                <Text ml={1}>20 Agustus 2018</Text>
                            </Box>
                            <Box
                                display={"flex"}
                                flexDir={"row"}
                                alignItems={"center"}
                            >
                                <Icon as={User} />
                                <Text ml={1}>oleh Admin</Text>
                            </Box>
                        </Box>
                        <Link to="/publikasi/berita/penyerahan-bantuan-alsintan-oleh-bupati-katingan-kepada-petani">
                            <Button
                                bgColor={"primary.400"}
                                _hover={{ bgColor: "primary.200" }}
                                px={6}
                            >
                                Lihat Selengkapnya
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </GridItem>
            <GridItem
                bgColor={"primary.600"}
                py={8}
                px={6}
                borderRadius={"3xl"}
                color={"white"}
                w={"70%"}
                display={"flex"}
                flexDirection={"column"}
            >
                <Image src={Image3} mx={"auto"} />
                <Box
                    h={"full"}
                    justifyContent={"space-between"}
                    display={"flex"}
                    flexDirection={"column"}
                >
                    <Text fontSize={"lg"} fontWeight={"bold"} pt={3}>
                        Tanam Padi Perdana di Areal Cetak Sawah Kabupaten
                        Katingan Tahun 2016
                    </Text>
                    <Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent={"space-between"}
                            mb={2}
                            mt={4}
                        >
                            <Box
                                display={"flex"}
                                flexDir={"row"}
                                alignItems={"center"}
                            >
                                <Icon as={Calendar} />
                                <Text ml={1}>20 Agustus 2018</Text>
                            </Box>
                            <Box
                                display={"flex"}
                                flexDir={"row"}
                                alignItems={"center"}
                            >
                                <Icon as={User} />
                                <Text ml={1}>oleh Admin</Text>
                            </Box>
                        </Box>
                        <Link to="/publikasi/berita/tanam-padi-perdana-di-areal-cetak-sawah-kabupaten-katingan-tahun-2016">
                            <Button
                                bgColor={"primary.400"}
                                _hover={{ bgColor: "primary.200" }}
                                px={6}
                            >
                                Lihat Selengkapnya
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </GridItem>
        </>
    );
}
