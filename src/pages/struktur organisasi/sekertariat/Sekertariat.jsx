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

export default function Sekertariat() {
    const [active, setActive] = useState("program");
    return (
        <Box minH={"100vh"}>
            <Navbar />
            <HeadingSection heading="Struktur Organisasi" title="Sekretariat" />
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
                        Sekretariat
                    </Heading>
                    <OrderedList my={4} fontSize={"lg"}>
                        <ListItem>
                            Sekretariat Dinas Pertanian, Pengan dan Perikanan
                            dipimpin oleh seorang Sekretaris yang mempunyai
                            tugas melakukan pelayanan teknis dan administrasi
                            kepada seluruh unit organisasi di lingkungan Dinas
                            Pertanian, Pengan dan Perikanan.
                        </ListItem>
                        <ListItem>
                            Untuk melaksanakan tugas sebagaimana dimaksud pada
                            ayat (1), Sekretaris Dinas menyelenggarakan fungsi :
                            <UnorderedList>
                                <ListItem>
                                    Penyusunan rencana, program, anggaran
                                    dibidang produksi tanaman pangan,
                                    hortikultura, perkebunan, peternakan,
                                    perikanan dan kesehatan hewan serta
                                    penyuluhan;
                                </ListItem>
                                <ListItem>
                                    Pemberian dukungan administrasi yang
                                    meliputi ketatausahaan, kepegawaian,
                                    keuangan, kerumah tanggaan, kerjasama,
                                    hubungan masyarakat, arsip, dan dokumentasi;
                                </ListItem>
                                <ListItem>
                                    Penataan organisasi dan tata laksana;
                                </ListItem>
                                <ListItem>
                                    Koordinasi dan penyusunan peraturan
                                    perundang-undangan;
                                </ListItem>
                                <ListItem>
                                    Pengelolaan barang milik/kekayaan negara;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan tugas lain yang diberikan oleh
                                    Kepala Dinas Pertanian, Pengan dan Perikanan
                                    sesuai dengan tugas dan fungsinya.
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                        <ListItem>
                            Untuk menyelenggarakan fungsi sebagaimana dimaksud
                            pada ayat (2), Sekretaris Dinas mempunyai uraian
                            tugas :
                            <UnorderedList>
                                <ListItem>
                                    Membantu Kepala Badan dalam tugas dibidang
                                    kesekretariatan;
                                </ListItem>
                                <ListItem>
                                    Menyusun rencana, program, anggaran dibidang
                                    produksi tanaman pangan, hortikultura,
                                    perkebunan, peternakan, perikanan dan
                                    kesehatan hewan serta penyuluhan;
                                </ListItem>
                                <ListItem>
                                    Memberikan dukungan administrasi yang
                                    meliputi ketatausahaan, kepegawaian,
                                    keuangan,kerumah tanggaan, kerjasama,
                                    hubungan masyarakat, arsip, dan dokumentasi;
                                </ListItem>
                                <ListItem>
                                    Menata organisasi dan tata laksana;
                                </ListItem>
                                <ListItem>
                                    Mendistribusikan dan memberi petunjuk
                                    pelaksanaan tugas kepada para Kepala Sub
                                    Bagian sesuai dengan tugas dan fungsinya;
                                </ListItem>
                                <ListItem>
                                    Memantau, mengendalikan, mengevaluasi dan
                                    menilai pelaksanaan tugas bawahan;
                                </ListItem>
                                <ListItem>
                                    Mengkoordinasikan dan mengendalikan
                                    pelaksanaan administrasi kerasipan, Naskah
                                    Dinas yang masuk dan keluar;
                                </ListItem>
                                <ListItem>
                                    Mengelola administrasi dan ketatausahaan
                                    Dinas:
                                </ListItem>
                                <ListItem>
                                    Memantau, mengkoordinasikan penyusunan
                                    Rencana Anggaran;
                                </ListItem>
                                <ListItem>
                                    Mengkoordinasikan dan penyusunan peraturan
                                    perundang-undangan;
                                </ListItem>
                                <ListItem>
                                    Mengelolaan barang milik/kekayaan negara
                                </ListItem>
                                <ListItem>
                                    Melaksanakan tugas lain yang diberikan oleh
                                    Kepala Dinas Pertanian, Pengan dan Perikanan
                                    sesuai dengan tugas dan fungsinya.
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                    </OrderedList>
                    <Heading olor={"primary.100"} mt={10} fontSize={"xl"}>
                        Sekretaris, membawahkan :
                    </Heading>
                    <OrderedList fontSize={"lg"}>
                        <ListItem>Sub Bagian Umum dan Kepegawaian;</ListItem>
                        <ListItem>
                            Sub Bagian Program, Evaluasi, Pelaporan dan
                            Informasi Teknologi;
                        </ListItem>
                        <ListItem>Sub Bagian Keuangan.</ListItem>
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
