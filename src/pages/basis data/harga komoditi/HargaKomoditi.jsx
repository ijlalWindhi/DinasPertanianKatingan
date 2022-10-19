import React, { useState } from "react";
import {
    Box,
    Heading,
    Text,
    Grid,
    GridItem,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from "@chakra-ui/react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import HeadingSection from "../../../components/heading/HeadingSection";
import Navigation from "./fragment/Navigation";
import { ChevronDown } from "react-feather";
import CardKelapaSawit from "./card kelapa sawit/CardKelapaSawit";
import CardKelapa from "./card kelapa/CardKelapa";
import CardKaret from "./card karet/CardKaret";
import CardKopi from "./card kopi/CardKopi";

export default function HargaKomoditi() {
    const [selectedKomoditi, setSelectedKomoditi] = useState("Semua");
    const [selectedTahun, setSelectedTahun] = useState("Semua");

    const data = [
        {
            komoditi: "Kelapa Sawit",
            tahun: "2014",
            component: <CardKelapaSawit />,
        },
        {
            komoditi: "Kelapa",
            tahun: "2015",
            component: <CardKelapa />,
        },
        {
            komoditi: "Kopi",
            tahun: "2016",
            component: <CardKopi />,
        },
        {
            komoditi: "Karet",
            tahun: "2014",
            component: <CardKaret />,
        },
    ];

    return (
        <Box minH={"100vh"}>
            <Navbar />
            <HeadingSection
                heading="Basis Data"
                title="Harga Komoditi Pertanian, Perkebunan, dan Peternakan"
            />
            <Box px={28} py={5} bgColor={"primary.500"}>
                <Heading>
                    Daftar Harga Komoditi Dinas Pertanian Kab. Katingan
                </Heading>
                <Text fontWeight={"bold"} fontSize={"xl"} color={"primary.100"}>
                    Harga Komoditi Tahun 2014 - 2016
                </Text>
            </Box>
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
                    <Box display={"flex"} alignItems={"center"} gap={10}>
                        <Box display={"flex"} alignItems={"center"}>
                            <Text
                                fontSize={"lg"}
                                color={"primary.100"}
                                fontWeight={"bold"}
                                mr={4}
                            >
                                Komoditi :
                            </Text>
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rightIcon={<ChevronDown />}
                                    bgColor={"gray.300"}
                                    w={48}
                                    textAlign={"left"}
                                >
                                    {selectedKomoditi}
                                </MenuButton>
                                <MenuList>
                                    <MenuItem
                                        onClick={() =>
                                            setSelectedKomoditi("Semua")
                                        }
                                    >
                                        Semua Komoditi
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() =>
                                            setSelectedKomoditi("Kelapa Sawit")
                                        }
                                    >
                                        Kelapa Sawit
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() =>
                                            setSelectedKomoditi("Kelapa")
                                        }
                                    >
                                        Kelapa
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() =>
                                            setSelectedKomoditi("Kopi")
                                        }
                                    >
                                        Kopi
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() =>
                                            setSelectedKomoditi("Karet")
                                        }
                                    >
                                        Karet
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                        <Box display={"flex"} alignItems={"center"}>
                            <Text
                                fontSize={"lg"}
                                color={"primary.100"}
                                fontWeight={"bold"}
                                mr={4}
                            >
                                Tahun :
                            </Text>
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rightIcon={<ChevronDown />}
                                    bgColor={"gray.300"}
                                    w={48}
                                    textAlign={"left"}
                                >
                                    {selectedTahun}
                                </MenuButton>
                                <MenuList>
                                    <MenuItem
                                        onClick={() =>
                                            setSelectedTahun("Semua")
                                        }
                                    >
                                        Semua Tahun
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => setSelectedTahun("2014")}
                                    >
                                        2014
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => setSelectedTahun("2015")}
                                    >
                                        2015
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => setSelectedTahun("2016")}
                                    >
                                        2016
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                    </Box>
                    <Box my={10}>
                        {data.map((item, index) => {
                            if (
                                item.komoditi === selectedKomoditi &&
                                item.tahun === selectedTahun
                            ) {
                                return item.component;
                            } else if (
                                selectedKomoditi === "Semua" &&
                                item.tahun === selectedTahun
                            ) {
                                return item.component;
                            } else if (
                                selectedTahun === "Semua" &&
                                item.komoditi === selectedKomoditi
                            ) {
                                return item.component;
                            } else if (
                                selectedKomoditi === "Semua" &&
                                selectedTahun === "Semua"
                            ) {
                                return item.component;
                            }

                            if (index == data.length - 1) {
                                return (
                                    <Text
                                        fontSize={"xl"}
                                        fontWeight={"bold"}
                                        color={"primary.100"}
                                    >
                                        Data tidak ditemukan
                                    </Text>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </Box>
                </GridItem>
                <GridItem>
                    <Navigation />
                </GridItem>
            </Grid>
            <Footer />
        </Box>
    );
}
