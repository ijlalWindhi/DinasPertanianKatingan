import React, { useState } from "react";
import {
    Box,
    Heading,
    Text,
    Grid,
    GridItem,
    UnorderedList,
    OrderedList,
    ListItem,
} from "@chakra-ui/react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import HeadingSection from "../../../components/heading/HeadingSection";
import Navigation from "../fragment/Navigation";
import NavigationBar from "./fragment/Navigation";
import Logic from "./section/Logic";

export default function Perikanan() {
    const [active, setActive] = useState("perbenihan");
    return (
        <Box minH={"100vh"}>
            <Navbar />
            <HeadingSection
                heading="Struktur Organisasi"
                title="Bidang Perikanan"
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
                        Bidang Perikanan
                    </Heading>
                    <OrderedList my={4} fontSize={"lg"}>
                        <ListItem>
                            Bidang Perikanan dipimpin oleh seorang Kepala Bidang
                            yang mempunyai tugas melaksanakan penyusunan,
                            pelaksanaan kebijakan, dan pemberian bimbingan
                            teknis, serta pemantauan dan evaluasi di Bidang
                            Perikanan.
                        </ListItem>
                        <ListItem>
                            Untuk melaksanakan tugas sebagaimana dimaksud pada
                            ayat (1), Kepala Bidang Perikanan menyelenggarakan
                            fungsi :
                            <UnorderedList>
                                <ListItem>
                                    Penyusunan kebijakan di Bidang Perikanan;
                                </ListItem>
                                <ListItem>
                                    Penyusunan program dan anggaran kegiatan
                                    Bidang Perikanan;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan kegiatan Bidang Perikanan;
                                </ListItem>
                                <ListItem>
                                    Pembinaan, perencanaan, pengendalian dan
                                    pelaksanaan tugas Bidang Perikanan;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan tugas lain yang diberikan oleh
                                    Kepala Dinas sesuai dengan tugas dan
                                    fungsinya.
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                        <ListItem>
                            Untuk menyelenggarakan fungsi sebagaimana dimaksud
                            pada ayat (2), Kepala Bidang Perikanan mempunyai
                            uraian tugas :
                            <UnorderedList>
                                <ListItem>
                                    Menyusun kebijakan perbenihan, produksi,
                                    perlindungan, pengolahan dan pemasaran hasil
                                    dibidang perikanan;
                                </ListItem>
                                <ListItem>
                                    Merencanakan kebutuhan dan penyediaan benih
                                    perikanan;
                                </ListItem>
                                <ListItem>
                                    Mengawasi peredaran dan sertifikasi benih
                                    perikanan;
                                </ListItem>
                                <ListItem>
                                    Memberikan bimbingan penerapan peningkatan
                                    produksi perikanan;
                                </ListItem>
                                <ListItem>
                                    Mengendalikan dan penanggulangan hama
                                    penyakit ikan;
                                </ListItem>
                                <ListItem>
                                    Memberikan bimbingan pascapanen, pengolahan
                                    dan pemasaran hasil perikanan;
                                </ListItem>
                                <ListItem>
                                    Memberikan rekomendasi ijin usaha dan teknis
                                    di bidang perikanan;
                                </ListItem>
                                <ListItem>
                                    Memantau dan evaluasi di Bidang Perikanan;
                                </ListItem>
                                <ListItem>
                                    Melaksanakan tugas lain yang diberikan oleh
                                    Kepala Dinas sesuai dengan tugas dan
                                    fungsinya.
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                    </OrderedList>
                    <Heading olor={"primary.100"} mt={10} fontSize={"xl"}>
                        Bidang Perikanan, membawahkan :
                    </Heading>
                    <OrderedList fontSize={"lg"}>
                        <ListItem>Seksi Produksi Perikanan;</ListItem>
                        <ListItem>
                            Seksi Perbenihan dan perlindungan Ikan;
                        </ListItem>
                        <ListItem>
                            Seksi Pengolahan dan Pemasaran hasil Perikanan.
                        </ListItem>
                    </OrderedList>
                </GridItem>
                <GridItem>
                    <Navigation />
                </GridItem>
            </Grid>
            <NavigationBar active={active} setActive={setActive} />
            <Logic active={active} />
            <Footer />
        </Box>
    );
}
