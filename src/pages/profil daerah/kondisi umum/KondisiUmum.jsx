import React from "react";
import {
    Box,
    Heading,
    Text,
    Grid,
    GridItem,
    OrderedList,
    ListItem,
} from "@chakra-ui/react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import HeadingSection from "../../../components/heading/HeadingSection";
import Navigation from "../fragment/Navigation";

export default function KondisiUmum() {
    return (
        <Box minH={"100vh"}>
            <Navbar />
            <HeadingSection
                heading="Profil Daerah"
                title="Kondisi Umum Daerah"
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
                        Kondisi Umum Daerah
                    </Heading>
                    <Text fontSize={"lg"}>
                        Kabupaten Katingan merupakan kabupaten pemekaran dari
                        Kabupaten Kotawaringin Timur yang dibentuk berdasarkan
                        Undang – Undang No. 05 Tahun 2001 secara geografis
                        terletak antara 112º 00’ - 113º 20 º BT dan 0º 20’ - 3º
                        30 LS. Wilayah Kabupaten Katingan terbentang hampir
                        1.080 km sepanjang daerah aliran sungai Katingan, mulai
                        dari pantai Laut Jawa di selatan sampai ke pegunungan di
                        utara berbatasan dengan popinsi Kalimantan Barat dengan
                        luas wilayah 17.800 Km2 yang secara administrasi dibagi
                        menjadi 13 kecamatan dan 161 desa/kelurahan dengan
                        ibukota kabupaten berada di Kota Kasongan Kecamatan
                        Katingan Hilir dengan jumlah penduduk sampai dengan
                        akhir Tahun 2012 sebanyak 150.314 jiwa. Kabupaten
                        Katingan memiliki potensi yang cukup besar untuk
                        pengembangan beberapa sektor pembangunan antara lain
                        sektor pertanian dalam arti luas terdiri dari sub sektor
                        pertanian tanaman pangan, hortikultura, peternakan,
                        perikanan dan kelautan, kehutanan, perkebunan, maupun
                        sektor industri, pertambangan, perdagangan dan
                        lain-lain.
                    </Text>
                    <Text my={4} fontSize={"lg"}>
                        Dari luas sebesar 17.800 Km2 yang dapat dikembangkan
                        untuk pengembangan pertanian, perkebunan dan peternakan
                        seluas 569.530,70 Ha. Secara geografis Kabupaten
                        Katingan berbatasan dengan :
                    </Text>
                    <OrderedList lineHeight={"8"}>
                        <ListItem fontSize={"lg"}>
                            Sebelah Utara dengan Kabupaten Melawi dan Kabupaten
                            Sintang Provinsi Kalimantan Barat.
                        </ListItem>
                        <ListItem fontSize={"lg"}>
                            Sebelah Timur dengan Kota Palangka Raya, Kabupaten
                            Pulang Pisau dan Kabupaten Gunung Mas.
                        </ListItem>
                        <ListItem fontSize={"lg"}>
                            Sebelah Selatan dengan Laut Jawa.
                        </ListItem>
                        <ListItem fontSize={"lg"}>
                            Sebelah Barat dengan Kabupaten Kotawaringin Timur
                            dan Kabupaten Seruyan.
                        </ListItem>
                    </OrderedList>
                </GridItem>
                <GridItem>
                    <Navigation />
                </GridItem>
            </Grid>
            <Footer />
        </Box>
    );
}
