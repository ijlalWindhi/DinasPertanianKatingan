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

export default function Perkebunan() {
    const [active, setActive] = useState("perbenihan");
    return (
        <Box minH={"100vh"}>
            <Navbar />
            <HeadingSection
                heading="Struktur Organisasi"
                title="Bidang Perkebunan dan Peternakan"
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
                        Bidang Perkebunan dan Peternakan
                    </Heading>
                    <OrderedList my={4} fontSize={"lg"}>
                        <ListItem>
                            Bidang Perkebunan dan Peternakan dipimpin oleh
                            seorang Kepala Bidang yang mempunyai tugas
                            melaksanakan penyusunan, pelaksanaan kebijakan, dan
                            pemberian bimbingan teknis, serta pemantauan dan
                            evaluasi dibidang perkebunan dan perternakan.
                        </ListItem>
                        <ListItem>
                            Untuk melaksanakan tugas sebagaimana dimaksud pada
                            ayat (1), Kepala Bidang Perkebunan dan Peternakan
                            menyelenggarakan fungsi :
                            <UnorderedList>
                                <ListItem>
                                    Penyusunan kebijakan dibidang Perkebunan dan
                                    Peternakan;
                                </ListItem>
                                <ListItem>
                                    Penyusunan program dan anggaran kegiatan
                                    Bidang Perkebunan dan Peternakan;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan kegiatan Bidang Perkebunan dan
                                    Peternakan;
                                </ListItem>
                                <ListItem>
                                    Pembinaan, perencanaan, pengendalian dan
                                    pelaksanaan tugas Bidang Perkebunan dan
                                    Peternakan;
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
                            pada ayat (2), Kepala Bidang Perkebunan dan
                            Peternakan mempunyai uraian tugas :
                            <UnorderedList>
                                <ListItem>
                                    Menyusun kebijakan perbenihan, produksi,
                                    perlindungan, pengolahan dan pemasaran hasil
                                    perkebunan dan peternakan;
                                </ListItem>
                                <ListItem>
                                    Merencanakan kebutuhan dan penyediaan
                                    benih/bibit di Bidang Perkebunan dan
                                    Peternakan;
                                </ListItem>
                                <ListItem>
                                    Mengawasi peredaran dan sertifikasi
                                    benih/bibit di Bidang Perkebunan dan
                                    Peternakan;
                                </ListItem>
                                <ListItem>
                                    Mengawasi peredaran dan pengunaan serta
                                    sertifikasi benih/bibit ternak, pakan,
                                    hijauan pakan ternak dan obat hewan;
                                </ListItem>
                                <ListItem>
                                    Mengelola sumber daya genetik hewan;
                                </ListItem>
                                <ListItem>
                                    Merencanakan kebutuhan dan penyediaan
                                    benih/bibit ternak, pakan ternak, dan
                                    benih/bibit hijauan pakan ternak;
                                </ListItem>
                                <ListItem>
                                    Mengendalikan dan penanggulangan hama
                                    penyakit, penanggulangan bencana alam, dan
                                    dampak perubahan iklim di Bidang Perkebunan
                                    dan Peternakan;
                                </ListItem>
                                <ListItem>
                                    Menanggulangi gangguan usaha, dan pencegahan
                                    kebakaran di Bidang Perkebunan dan
                                    Peternakan;
                                </ListItem>
                                <ListItem>
                                    Memberi bimbingan pascapanen, pengolahan dan
                                    pemasaran hasil perkebunan dan peternakan;
                                </ListItem>
                                <ListItem>
                                    Memberi rekomendasi izin usaha dan teknis di
                                    Bidang Perkebunan dan Peternakan;
                                </ListItem>
                                <ListItem>
                                    Mengendalikan penyakit hewan dan kesehatan
                                    masyarakat veteriner;
                                </ListItem>
                                <ListItem>
                                    Memantau dan menevaluasi Bidang Perkebunan
                                    dan Peternakan;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan tugas lain yang diberikan oleh
                                    Kepala Dinas sesuai dengan tugas dan
                                    fungsinya.
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                    </OrderedList>
                    <Heading olor={"primary.100"} mt={10} fontSize={"xl"}>
                        Bidang Perkebunan dan Peternakan, membawahkan :
                    </Heading>
                    <OrderedList fontSize={"lg"}>
                        <ListItem>
                            Seksi Produksi Perkebunan dan Peternakan;
                        </ListItem>
                        <ListItem>
                            Seksi Perbenihan Perlindungan Perkebunan dan
                            Peternakan;
                        </ListItem>
                        <ListItem>Seksi Pengolahan dan Pemasaran.</ListItem>
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
