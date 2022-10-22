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

export default function KetahananPangan() {
    const [active, setActive] = useState("keanekaragaman");
    return (
        <Box minH={"100vh"}>
            <Navbar />
            <HeadingSection
                heading="Struktur Organisasi"
                title="Bidang Ketahanan Pangan"
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
                        Bidang Ketahanan Pangan
                    </Heading>
                    <OrderedList my={4} fontSize={"lg"}>
                        <ListItem>
                            Bidang Ketahanan Pangan dipimpin oleh seorang Kepala
                            Bidang yang mempunyai tugas melaksanakan penyusunan
                            dan pelaksanaan kebijakan, pemberian bimbingan
                            teknis serta pemantauan dan evaluasi dibidang
                            Ketahanan Pangan.
                        </ListItem>
                        <ListItem>
                            Untuk melaksanakan tugas pokok sebagaimana dimaksud
                            pada ayat (1), Kepala Bidang Ketahanan Pangan
                            menyelenggarakan fungsi :
                            <UnorderedList>
                                <ListItem>
                                    Penyusunan rencana dan anggaran kegiatan
                                    Bidang Ketahan Pangan;
                                </ListItem>
                                <ListItem>
                                    Perumusan kebijakan teknis dibidang Ketahan
                                    Pangan;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan kegiatan dibidang Ketahan
                                    Pangan;
                                </ListItem>
                                <ListItem>
                                    Pembinaan, perencanaan, pengendalian dan
                                    pelaksanaan tugas Bidang Ketahanan Pangan
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan tugas lain yang diberikan oleh
                                    Kepala Dinas sesuai dengan tugas dan
                                    fungsinya
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                        <ListItem>
                            Untuk menyelenggarakan fungsi sebagaimana dimaksud
                            pada ayat (2), Kepala Bidang Ketahanan Pangan
                            mempunyai uraian tugas :
                            <UnorderedList>
                                <ListItem>
                                    Menyusun perencanaan pelayanan pendaftaran
                                    penduduk, Perumusan kebijakan teknis
                                    pendaftaran penduduk;
                                </ListItem>
                                <ListItem>
                                    Melaksanakan pembinaan dan koordinasi
                                    pelaksanaan pelayanan pendaftaran penduduk;
                                </ListItem>
                                <ListItem>
                                    Melaksanakan pelayanan pendaftaran penduduk;
                                </ListItem>
                                <ListItem>
                                    Melaksanakan penerbitan dokumen pendaftaran
                                    penduduk;
                                </ListItem>
                                <ListItem>
                                    Melaksanakan pedokumentasian hasil pelayanan
                                    pendaftaran penduduk;
                                </ListItem>
                                <ListItem>
                                    Mengendalikan dan evaluasi pelaksanaan
                                    pendaftaran penduduk;
                                </ListItem>
                                <ListItem>
                                    Menyiapkan pelaksanaan koordinasi di Bidang
                                    Ketahanan Pangan;
                                </ListItem>
                                <ListItem>
                                    Penyiapkan penyusunan bahan rumusan
                                    kebijakan daerah di Bidang Ketahanan Pangan;
                                </ListItem>
                                <ListItem>
                                    Menyiapkan pelaksanaan kebijakan di Bidang
                                    Ketahanan Pangan;
                                </ListItem>
                                <ListItem>
                                    Memberikan bimbingan teknis dan supervisi
                                    dibidang ketersediaan pangan, distribusi
                                    pangan, keamanan pangan dan kerawanan
                                    pangan;
                                </ListItem>
                                <ListItem>
                                    Menyiapkan pemantapan program di Bidang
                                    Ketahanan Pangan;
                                </ListItem>
                                <ListItem>
                                    Melaksanakan pemantauan, evaluasi dan
                                    pelaporan kegiatan Bidang Ketahanan Pangan;
                                </ListItem>
                                <ListItem>
                                    Menyiapkan bahan penyusunan program,
                                    koordinasi, pengaturan, pengendalian dan
                                    evaluasi di Bidang Ketahanan Pangan;
                                </ListItem>
                                <ListItem>
                                    Menyiapkan koordinasi penyediaan dan
                                    penyaluran pangan pokok atau pangan lainnya
                                    dalam rangka stabilisasi pasokan dan harga
                                    pangan;
                                </ListItem>
                                <ListItem>
                                    Menyiapkan pengelolaan cadangan pangan
                                    Pemerintah Kabupaten dan menjaga
                                    keseimbangan cadangan pangan Pemerintah
                                    Kabupaten;
                                </ListItem>
                                <ListItem>
                                    Menyiapkan bahan rumusan kebijakan harga
                                    minimum pangan lokal yang tidak ditetapkan
                                    oleh Provinsi;
                                </ListItem>
                                <ListItem>
                                    Penyediaan data informasi pasokan dan harga
                                    pangan serta pengembanganmjaringan pasar;
                                </ListItem>
                                <ListItem>
                                    Menyiapkan pelaksananaan komunikasi,
                                    informasi dan edukasi penganekaragaman
                                    konsumsi pangan;
                                </ListItem>
                                <ListItem>
                                    Menyiapkan bahan penyusunan program,
                                    koordinasi, pengaturan, pengendalian dan
                                    evaluasi di Bidang Ketahanan Pangan
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
                        Bidang Ketahanan Pangan, membawahkan :
                    </Heading>
                    <OrderedList fontSize={"lg"}>
                        <ListItem>
                            Sub Ketersediaan dan Kerawanan Pangan
                        </ListItem>
                        <ListItem>
                            Seksi Penganekaragaman Konsumsi dan Keamanan Pangan
                        </ListItem>
                        <ListItem>
                            Seksi Distribusi dan Cadangan Pangan.
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
