import React from "react";
import { Box, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import HeadingSection from "../../../components/heading/HeadingSection";
import Navigation from "../fragment/Navigation";

export default function ProfilDinas() {
    return (
        <Box minH={"100vh"}>
            <Navbar />
            <HeadingSection
                heading="Profil"
                title="Profil Dinas Pertanian, Pangan dan Perikanan Kabupaten Katingan"
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
                    maxW={"70%"}
                    justifySelf={"center"}
                >
                    <Heading color={"primary.100"} mb={4}>
                        Profil Dinas Pertanian, Pangan dan Perikanan Kabupaten
                        Katingan
                    </Heading>
                    <Text fontSize={"lg"}>
                        Dinas Pertanian Kabupaten Katingan merupakan salah satu
                        instansi teknis dibidang pertanian, perkebunan,
                        peternakan dan penyuluhan yang dibentuk berdasarkan
                        Surat Keputusan Gubernur Kalimantan Tengah 224 Tahun
                        2002 Tanggal 19 Juni 2002 dan ditindaklanjuti dengan
                        Peraturan Daerah Kabupaten Katingan Nomor 02 Tahun 2004
                        tentang Susunan Organisasi dan Tata Kerja Dinas
                        Pertanian Kabupaten Katingan.
                    </Text>
                    <Text my={4} fontSize={"lg"}>
                        Dan diberlakukannya Peraturan Pemerintah Republik
                        Indonesia Nomor 41 Tahun 2007 tentang Organisasi
                        Perangkat Daerah maka Peraturan Daerah Nomor 2 Tahun
                        2004. kemudian diubah dengan Peraturan Daerah Nomor 3
                        Tahun 2011 tanggal 4 April 2011 tentang Perubahan Atas
                        Peraturan Daerah Kabupaten Katingan Nomor 5 Tahun 2008
                        tentang Organisasi dan Tata Kerja Dinas Daerah Kabupaten
                        Katingan.
                    </Text>
                    <Text fontSize={"lg"}>
                        dan terakhir diubah dengan Peraturan Daerah Kabupaten
                        Katingan Nomor 7 Tahun 2015 tentang Perubahan Kedua atas
                        Peraturan Daerah Nomor 5 Tahun 2008 tentang Organisasi
                        dan Tata Kerja Dinas Daerah Kabupaten Katingan
                    </Text>
                </GridItem>
                <GridItem>
                    <Navigation />
                </GridItem>
            </Grid>
            <Footer />
        </Box>
    );
}
