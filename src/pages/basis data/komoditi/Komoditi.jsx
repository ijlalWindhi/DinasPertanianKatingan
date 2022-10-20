import React from "react";
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
  Image,
} from "@chakra-ui/react";
import { ChevronDown } from "react-feather";
import { data } from "./DataKomoditi";

export default function Komoditi() {
  return (
    <Box minH={"100vh"}>
      <Navbar />
      <HeadingSection
        heading="Basis Data"
        title="Komoditi Pertanian, Perkebunan, dan Peternakan"
      />
      <Box px={28} py={32} bgColor={"primary.500"}>
        <Heading pb={10}>
          Komoditi Pertanian, Perkebunan, dan Peternakan
        </Heading>
        <Box display={"flex"} justifyContent={"space-between"} maxW={"50%"}>
          <Box display={"flex"} flexDir={"column"} gap={10}>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Text mr={10} fontSize={"2xl"} fontWeight={"bold"}>
                Subsektor :
              </Text>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDown />}
                  bgColor={"gray.300"}
                  w={48}
                  textAlign={"left"}
                >
                  Pilih Subsektor
                </MenuButton>
                <MenuList>
                  <MenuItem>Semua Subsektor</MenuItem>
                  <MenuItem>Tanaman Pangan</MenuItem>
                  <MenuItem>Holtikultura</MenuItem>
                  <MenuItem>Perkebunan</MenuItem>
                  <MenuItem>Peternakan</MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Text mr={10} fontSize={"2xl"} fontWeight={"bold"}>
                Level :
              </Text>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDown />}
                  bgColor={"gray.300"}
                  w={48}
                  textAlign={"left"}
                >
                  Pilih Level
                </MenuButton>
                <MenuList>
                  <MenuItem>Semua Level</MenuItem>
                  <MenuItem>Kecamatan</MenuItem>
                  <MenuItem>Kelurahan</MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Text mr={10} fontSize={"2xl"} fontWeight={"bold"}>
                Kecamatan :
              </Text>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDown />}
                  bgColor={"gray.300"}
                  w={48}
                  textAlign={"left"}
                >
                  Pilih Kecamatan
                </MenuButton>
                <MenuList>
                  <MenuItem>Semua Kecamatan</MenuItem>
                  <MenuItem>Bukit Raya</MenuItem>
                  <MenuItem>Kamimpang</MenuItem>
                  <MenuItem>Katingan Hilir</MenuItem>
                  <MenuItem>Katingan Hulu</MenuItem>
                  <MenuItem>Katingan Kuala</MenuItem>
                  <MenuItem>Katingan Tengah</MenuItem>
                  <MenuItem>Marikit</MenuItem>
                  <MenuItem>Mendawai</MenuItem>
                  <MenuItem>Petak Malai</MenuItem>
                  <MenuItem>Pulau Malan</MenuItem>
                  <MenuItem>Senaman Mantikei</MenuItem>
                  <MenuItem>Tasik Payawan</MenuItem>
                  <MenuItem>Tewang Sangalang Garing</MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Text mr={10} fontSize={"2xl"} fontWeight={"bold"}>
                Kelurahan :
              </Text>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDown />}
                  bgColor={"gray.300"}
                  w={48}
                  textAlign={"left"}
                >
                  Pilih Kelurahan
                </MenuButton>
                <MenuList>
                  <MenuItem>Semua Kelurahan</MenuItem>
                  <MenuItem>Kasongan Baru</MenuItem>
                  <MenuItem>Kasongan Lama</MenuItem>
                  <MenuItem>Tumbang Sanamang I</MenuItem>
                  <MenuItem>Pagatan Hilir</MenuItem>
                  <MenuItem>Pagatan Hulu</MenuItem>
                  <MenuItem>Samba Kahayan</MenuItem>
                  <MenuItem>Pendahara</MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Button
              color={"white"}
              bgColor={"primary.600"}
              _hover={{ bgColor: "primary.200" }}
              w={32}
            >
              Tampilkan
            </Button>
          </Box>
          <Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Text mr={10} fontSize={"2xl"} fontWeight={"bold"}>
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
                  Pilih Tahun
                </MenuButton>
                <MenuList>
                  <MenuItem>Semua Tahun</MenuItem>
                  <MenuItem>2014</MenuItem>
                  <MenuItem>2015</MenuItem>
                  <MenuItem>2016</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        {data.map((item) => (
          <Box>
            <Text>{item.subsektor}</Text>
            <Text>{item.level}</Text>
            <Text>{item.kecamatan}</Text>
            <Text>{item.tahun}</Text>
            <Text>{item.nama}</Text>
            <Image src={item.gambar} />
          </Box>
        ))}
      </Box>
      <Footer />
    </Box>
  );
}
