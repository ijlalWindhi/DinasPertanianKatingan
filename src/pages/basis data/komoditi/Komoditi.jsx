import React, { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import HeadingSection from "../../../components/heading/HeadingSection";
import {
    Box,
    Text,
    Heading,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Table,
    Tr,
    Td,
} from "@chakra-ui/react";
import { ChevronDown } from "react-feather";
import DetailKomoditi from "./DetailKomoditi";

export default function Komoditi() {
    const [visible, setVisible] = useState(true);
    const [subsektor, setSubsektor] = useState("-");
    const [level, setLevel] = useState("-");
    const [kecamatan, setKecamatan] = useState("-");
    const [kelurahan, setKelurahan] = useState("-");
    const [tahun, setTahun] = useState("-");

    return (
        <Box minH={"100vh"}>
            <Navbar />
            <HeadingSection
                heading="Basis Data"
                title="Komoditi Pertanian, Perkebunan, dan Peternakan"
            />
            {visible ? (
                <Box px={28} py={32} bgColor={"primary.500"}>
                    <Heading pb={10}>
                        Komoditi Pertanian, Perkebunan, dan Peternakan
                    </Heading>
                    <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        maxW={"60%"}
                    >
                        <Box>
                            <Table>
                                <Tr>
                                    <Td>
                                        <Text
                                            fontSize={"2xl"}
                                            fontWeight={"bold"}
                                        >
                                            Subsektor
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            fontSize={"2xl"}
                                            fontWeight={"bold"}
                                        >
                                            :
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Menu>
                                            <MenuButton
                                                as={Button}
                                                rightIcon={<ChevronDown />}
                                                bgColor={"gray.300"}
                                                w={64}
                                                textAlign={"left"}
                                            >
                                                {subsektor}
                                            </MenuButton>
                                            <MenuList>
                                                <MenuItem
                                                    onClick={() =>
                                                        setSubsektor(
                                                            "semua subsektor"
                                                        )
                                                    }
                                                >
                                                    Semua Subsektor
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        setSubsektor(
                                                            "tanaman pangan"
                                                        )
                                                    }
                                                >
                                                    Tanaman Pangan
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        setSubsektor(
                                                            "holtikultura"
                                                        )
                                                    }
                                                >
                                                    Holtikultura
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        setSubsektor(
                                                            "perkebunan"
                                                        )
                                                    }
                                                >
                                                    Perkebunan
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        setSubsektor(
                                                            "peternakan"
                                                        )
                                                    }
                                                >
                                                    Peternakan
                                                </MenuItem>
                                            </MenuList>
                                        </Menu>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Text
                                            fontSize={"2xl"}
                                            fontWeight={"bold"}
                                        >
                                            Level
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            fontSize={"2xl"}
                                            fontWeight={"bold"}
                                        >
                                            :
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Menu>
                                            <MenuButton
                                                as={Button}
                                                rightIcon={<ChevronDown />}
                                                bgColor={"gray.300"}
                                                w={64}
                                                textAlign={"left"}
                                            >
                                                {level}
                                            </MenuButton>
                                            <MenuList>
                                                <MenuItem
                                                    onClick={() =>
                                                        setLevel("semua level")
                                                    }
                                                >
                                                    Semua Level
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        setLevel("kecamatan")
                                                    }
                                                >
                                                    Kecamatan
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        setLevel("kelurahan")
                                                    }
                                                >
                                                    Kelurahan
                                                </MenuItem>
                                            </MenuList>
                                        </Menu>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Text
                                            fontSize={"2xl"}
                                            fontWeight={"bold"}
                                        >
                                            Kecamatan
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            fontSize={"2xl"}
                                            fontWeight={"bold"}
                                        >
                                            :
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Menu>
                                            <MenuButton
                                                as={Button}
                                                rightIcon={<ChevronDown />}
                                                bgColor={"gray.300"}
                                                w={64}
                                                textAlign={"left"}
                                            >
                                                {kecamatan}
                                            </MenuButton>
                                            <MenuList>
                                                <MenuItem
                                                    onClick={() =>
                                                        setKecamatan(
                                                            "Semua Kecamatan"
                                                        )
                                                    }
                                                >
                                                    Semua Kecamatan
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        setKecamatan(
                                                            "Bukit Raya"
                                                        )
                                                    }
                                                >
                                                    Bukit Raya
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        setKecamatan(
                                                            "Kamimpang"
                                                        )
                                                    }
                                                >
                                                    Kamimpang
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        setKecamatan(
                                                            "Katingan Hilir"
                                                        )
                                                    }
                                                >
                                                    Katingan Hilir
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        setKecamatan(
                                                            "Katingan Hulu"
                                                        )
                                                    }
                                                >
                                                    Katingan Hulu
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        setKecamatan(
                                                            "Katingan Kuala"
                                                        )
                                                    }
                                                >
                                                    Katingan Kuala
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        setKecamatan(
                                                            "Katingan Tengah"
                                                        )
                                                    }
                                                >
                                                    Katingan Tengah
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        setKecamatan("Marikit")
                                                    }
                                                >
                                                    Marikit
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        setKecamatan("Mendawai")
                                                    }
                                                >
                                                    Mendawai
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        setKecamatan(
                                                            "Petak Malai"
                                                        )
                                                    }
                                                >
                                                    Petak Malai
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        setKecamatan(
                                                            "Pulau Malan"
                                                        )
                                                    }
                                                >
                                                    Pulau Malan
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        setKecamatan(
                                                            "Senaman Mantikei"
                                                        )
                                                    }
                                                >
                                                    Senaman Mantikei
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        setKecamatan(
                                                            "Tasik Payawan"
                                                        )
                                                    }
                                                >
                                                    Tasik Payawan
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        setKecamatan(
                                                            "Tewang Sangalang Garing"
                                                        )
                                                    }
                                                >
                                                    Tewang Sangalang Garing
                                                </MenuItem>
                                            </MenuList>
                                        </Menu>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Text
                                            fontSize={"2xl"}
                                            fontWeight={"bold"}
                                        >
                                            Kelurahan
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            fontSize={"2xl"}
                                            fontWeight={"bold"}
                                        >
                                            :
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Menu>
                                            <MenuButton
                                                as={Button}
                                                rightIcon={<ChevronDown />}
                                                bgColor={"gray.300"}
                                                w={64}
                                                textAlign={"left"}
                                            >
                                                {kelurahan}
                                            </MenuButton>
                                            <MenuList>
                                                <MenuItem
                                                    onClick={() =>
                                                        setKelurahan(
                                                            "semua kelurahan"
                                                        )
                                                    }
                                                >
                                                    Semua Kelurahan
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        setKelurahan(
                                                            "kosongan baru"
                                                        )
                                                    }
                                                >
                                                    Kasongan Baru
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        setKelurahan(
                                                            "kosongan lama"
                                                        )
                                                    }
                                                >
                                                    Kasongan Lama
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        setKelurahan(
                                                            "Tumbang Sanamang I"
                                                        )
                                                    }
                                                >
                                                    Tumbang Sanamang I
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        setKelurahan(
                                                            "Pagatan Hilir"
                                                        )
                                                    }
                                                >
                                                    Pagatan Hilir
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        setKelurahan(
                                                            "Pagatan Hulu"
                                                        )
                                                    }
                                                >
                                                    Pagatan Hulu
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        setKelurahan(
                                                            "Samba Kahayan"
                                                        )
                                                    }
                                                >
                                                    Samba Kahayan
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        setKelurahan(
                                                            "Pendahara"
                                                        )
                                                    }
                                                >
                                                    Pendahara
                                                </MenuItem>
                                            </MenuList>
                                        </Menu>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Button
                                            color={"white"}
                                            bgColor={"primary.600"}
                                            _hover={{ bgColor: "primary.200" }}
                                            w={32}
                                            onClick={() => setVisible(!visible)}
                                        >
                                            Tampilkan
                                        </Button>
                                    </Td>
                                </Tr>
                            </Table>
                        </Box>
                        <Box>
                            <Table>
                                <Tr>
                                    <Td>
                                        <Text
                                            fontSize={"2xl"}
                                            fontWeight={"bold"}
                                        >
                                            Tahun
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            fontSize={"2xl"}
                                            fontWeight={"bold"}
                                        >
                                            :
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Menu>
                                            <MenuButton
                                                as={Button}
                                                rightIcon={<ChevronDown />}
                                                bgColor={"gray.300"}
                                                w={64}
                                                textAlign={"left"}
                                            >
                                                {tahun}
                                            </MenuButton>
                                            <MenuList>
                                                <MenuItem
                                                    onClick={() =>
                                                        setTahun("semua tahun")
                                                    }
                                                >
                                                    Semua Tahun
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        setTahun("2014")
                                                    }
                                                >
                                                    2014
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        setTahun("2015")
                                                    }
                                                >
                                                    2015
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        setTahun("2016")
                                                    }
                                                >
                                                    2016
                                                </MenuItem>
                                            </MenuList>
                                        </Menu>
                                    </Td>
                                </Tr>
                            </Table>
                        </Box>
                    </Box>
                </Box>
            ) : (
                <DetailKomoditi
                    subsektor={subsektor}
                    tahun={tahun}
                    level={level}
                    kecamatan={kecamatan}
                    kelurahan={kelurahan}
                    setVisible={setVisible}
                />
            )}

            <Footer />
        </Box>
    );
}
