import React from "react";
import { Box, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import HeadingSection from "../../../components/heading/HeadingSection";
import Navigation from "../fragment/Navigation";

export default function Potensi() {
    return (
        <Box minH={"100vh"}>
            <Navbar />
            <HeadingSection
                heading="Profil Daerah"
                title="Potensi Pertanian, Perkebunan dan Peternakan"
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
                        Potensi Pertanian, Perkebunan dan Peternakan
                    </Heading>
                    <Text fontSize={"lg"}>
                        Kabupaten Katingan memiliki potensi ketersediaan lahan
                        yang cukup besar dan belum dimanfaatkan secara optimal.
                        Data berdasarkan yang dihimpun oleh Badan Pusat
                        Statistik Kabupaten Katingan pada tahun 2013
                        memperlihatkan bahwa total luas daratan Kabupaten
                        Katingan adalah sebesar 20.403 km2, terbagi atas 439.965
                        ha (21,82 persen) merupakan kawasan suaka alam /
                        perlindungan alam, 47.789 ha (2,37 persen) kawasan hutan
                        lindung, 247.304 ha (12,26 persen) kawasan hutan
                        produksi, 262.276 ha (18,98 persen) kawasan hutan
                        produksi konversi, 52.615 ha (2,61 persen) kawasan
                        pemukiman perkotaan/desa, 363 ha (0.02 persen) kawasan
                        minerba, 1.000 ha (0.05 persen) kawasan industri, 6.000
                        ha (0.30 persen) kawasan wisata, 22.291 ha (1,11 persen)
                        kawasan lindung setempat dan 569.599 ha (28,03 persen)
                        kawasan holding zone/ kawasan perkebunan, pertanian dan
                        peternakan. Sampai saat ini, dari areal yang berpotensi
                        untuk pertanian tersebut, yang sudah dibudidayakan
                        menjadi areal pertanian sebesar 46.907 ha, sehingga
                        masih tersisa 522.692 ha yang berpotensi untuk perluasan
                        areal pertanian.
                    </Text>
                    <Text mt={4} fontSize={"lg"}>
                        Jumlah luasan dan sebaran hutan, sungai, rawa dan danau
                        serta curah hujan yang cukup tinggi dan merata sepanjang
                        tahun sesungguhnya merupakan potensi alamiah untuk
                        memenuhi kebutuhan air pertanian apabila dikelola dengan
                        baik. Waduk, bendungan, embung dan air tanah serta air
                        permukaan lainnya sangat potensial untuk mendukung
                        pengembangan usaha pertanian.
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
