import React from "react";
import {
    Box,
    Heading,
    Text,
    Grid,
    GridItem,
    UnorderedList,
    ListItem,
} from "@chakra-ui/react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import HeadingSection from "../../../components/heading/HeadingSection";
import Navigation from "../fragment/Navigation";

export default function KelompokJabatan() {
    return (
        <Box minH={"100vh"}>
            <Navbar />
            <HeadingSection
                heading="Struktur Organisasi"
                title="Kelompok Jabatan FungsionalProfil Dinas Pertanian, Pangan dan Perikanan Kabupaten Katingan"
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
                        Kelompok Jabatan Fungsional
                    </Heading>
                    <Text fontSize={"lg"}>Memiliki tugas :</Text>
                    <UnorderedList my={4} fontSize={"lg"}>
                        <ListItem>
                            Melaksanakan sebagian tugas Dinas Pertanian, Pengan
                            dan Perikanan sesuai dengan keahlian dan kebutuhan.
                        </ListItem>
                        <ListItem>
                            Jabatan Fungsional terdiri dari sejumlah tenaga
                            dalam jenjang jabatan fungsional yang terbagi dalam
                            berbagai kelompok sesuai dengan bidang keahliannya;
                        </ListItem>
                        <ListItem>
                            Kelompok jabatan fungsional dipimpin oleh seorang
                            tenaga fungsional yang senior ditunjuk oleh Bupati
                            atas usul Kepala Dinas melalui Sekretaris Daerah dan
                            bertanggung jawab kepada Kepala Dinas;
                        </ListItem>
                        <ListItem>
                            Jumlah jabatan dan tenaga fungsional ditentukan
                            berdasarkan kebutuhan dan beban kerja;
                        </ListItem>
                        <ListItem>
                            Jenis jabatan fungsional ditetapkan sesuai ketentuan
                            peraturan perundang-undangan yang berlaku.
                        </ListItem>
                    </UnorderedList>
                </GridItem>
                <GridItem>
                    <Navigation />
                </GridItem>
            </Grid>
            <Footer />
        </Box>
    );
}
