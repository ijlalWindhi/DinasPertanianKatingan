import React from "react";
import { Box, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import HeadingSection from "../../../components/heading/HeadingSection";
import Navigation from "../fragment/Navigation";

export default function Sambutan() {
    return (
        <Box minH={"100vh"}>
            <Navbar />
            <HeadingSection heading="Profil" title="Sambutan Kepala Dinas" />
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
                        Sambutan Kepala Dinas
                    </Heading>
                    <Text fontSize={"lg"}>
                        Assalamu’alaikum Warahmatullahi Wabarakatuh
                    </Text>
                    <Text my={4} fontSize={"lg"}>
                        Puji syukur kehadirat Allah SWT, Tuhan Yang Maha Kuasa,
                        atas limpahan Nikmat, Taufik dan Hidayah-Nya. Selamat
                        datang di Website Dinas Pertanian, Pangan dan Perikanan
                        Kabupaten Katingan yang pada akhirnya hadir dengan
                        tampilan terbaru untuk masyarakat yang ingin mendapatkan
                        informasi seputar pertanian, pangan dan perikanan di
                        lingkungan Pemerintah Kabupaten Katingan.
                    </Text>
                    <Text fontSize={"lg"}>
                        Perkembangan Teknologi Informasi yang begitu pesat dan
                        cepat menuntut peran aparatur untuk selalu update
                        terhadap informasi-informasi baru mengenai suatu hal
                        atau peristiwa. Organisasi Perangkat Daerah DISPERTAN
                        PP, sebagai pemangku kepentingan yang mempunyai andil
                        besar terhadap public service, dituntut untuk selalu
                        siap terhadap perkembangan keadaan dan perkembangan
                        teknologi informasi tersebut. Oleh karena itu perlu
                        dimanifestasikan melalui pelayanan informasi kepada
                        masyarakat, khususnya pelayanan terhadap petani,
                        peternak dan pembudidaya ikan di Kabupaten Katingan yang
                        dijabarkan dalam bentuk penerbitan dan pengelolaan
                        Website DISPERTAN PP.
                    </Text>
                    <Text my={4} fontSize={"lg"}>
                        Kritik, masukan dan saran yang ada sangat kami harapkan
                        guna penyempurnaan isi website ini di masa mendatang.
                        Semoga keberadaan website ini dapat memberikan manfaat
                        bagi kita semua.
                    </Text>
                    <Text fontSize={"lg"}>
                        Wassalamu’alaikum Warahmatullahi Wabarakatuh
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
