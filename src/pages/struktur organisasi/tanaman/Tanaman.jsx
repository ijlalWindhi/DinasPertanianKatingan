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

export default function Tanaman() {
    const [active, setActive] = useState("perbenihan");
    return (
        <Box minH={"100vh"}>
            <Navbar />
            <HeadingSection
                heading="Struktur Organisasi"
                title="Bidang Tanaman Pangan dan Hortikultura"
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
                        Bidang Tanaman Pangan dan Hortikultura
                    </Heading>
                    <OrderedList my={4} fontSize={"lg"}>
                        <ListItem>
                            Bidang Tanaman Pangan dan Hortikultura dipimpin oleh
                            seorang Kepala Bidang yang mempunyai tugas pokok
                            melaksanakan penyusunan, pelaksanaan kebijakan, dan
                            pemberian bimbingan teknis, serta pemantauan dan
                            evaluasi di Bidang Tanaman Pangan dan Hortikultura.
                        </ListItem>
                        <ListItem>
                            Untuk melaksanakan tugas sebagaimana dimaksud pada
                            ayat (1), Kepala Bidang Tanaman Pangan dan
                            Hortikultura menyelenggarakan fungsi :
                            <UnorderedList>
                                <ListItem>
                                    Penyusunan kebijakan di Bidang Tanaman
                                    Pangan dan Hortikultura;
                                </ListItem>
                                <ListItem>
                                    Penyusunan program dan anggaran kegiatan
                                    Bidang Tanaman Pangan dan Hortikultura;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan kegiatan Bidang Tanaman Pangan
                                    dan Hortikultura;
                                </ListItem>
                                <ListItem>
                                    Pembinaan, perencanaan, pengendalian dan
                                    pelaksanaan tugas dibidang Bidang Tanaman
                                    Pangan dan Hortikultura;
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
                            pada ayat (2), Kepala Bidang Tanaman Pangan dan
                            Hortikultura mempunyai uraian tugas :
                            <UnorderedList>
                                <ListItem>
                                    Menyusun kebijakan perbenihan, produksi,
                                    perlindungan, pengolahan dan pemasaran hasil
                                    Tanaman Pangan dan Hortikultura;
                                </ListItem>
                                <ListItem>
                                    Merencanakan kebutuhan dan penyediaan benih
                                    di Bidang Tanaman Pangan dan Hortikultura;
                                </ListItem>
                                <ListItem>
                                    Mengawasi peredaran, dan sertifikasi benih
                                    Tanaman Pangan dan Hortikultura;
                                </ListItem>
                                <ListItem>
                                    Memberikan bimbingan penerapan peningkatan
                                    produksi dibidang Tanaman Pangan dan
                                    Hortikultura;
                                </ListItem>
                                <ListItem>
                                    Mengendalikan dan penanggulangan hama
                                    penyakit, penanggulangan bencana alam, dan
                                    dampak perubahan iklim dibidang Tanaman
                                    Pangan dan Hortikultura;
                                </ListItem>
                                <ListItem>
                                    Memberikan bimbingan pascapanen, pengolahan
                                    dan pemasaran hasil Tanaman Pangan dan
                                    Hortikultura;
                                </ListItem>
                                <ListItem>
                                    Memberikan rekomendasi ijin usaha dan teknis
                                    di Bidang Tanaman Pangan dan Hortikultura;
                                </ListItem>
                                <ListItem>
                                    Memantau dan mengevaluasi Bidang Tanaman
                                    Pangan dan Hortikultura;{" "}
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
                        Bidang Tanaman Pangan dan Hortikultura, membawahkan :
                    </Heading>
                    <OrderedList fontSize={"lg"}>
                        <ListItem>
                            Seksi Produksi Tanaman dan Hortikultura;
                        </ListItem>
                        <ListItem>
                            Seksi Perbenihan dan Perlindungan Tanaman Pangan dan
                            Hortikultura;
                        </ListItem>
                        <ListItem>
                            Seksi Pengolahan dan Pemasaran hasil.
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
