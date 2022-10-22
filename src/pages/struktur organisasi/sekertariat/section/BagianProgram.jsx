import React from "react";
import {
    Box,
    Text,
    Grid,
    GridItem,
    Heading,
    UnorderedList,
    OrderedList,
    ListItem,
} from "@chakra-ui/react";

export default function BagianProgram() {
    return (
        <Box bgColor={"primary.300"}>
            <Grid templateColumns="repeat(3, 1fr)" gap={6} px={10} py={16}>
                <GridItem
                    colSpan={3}
                    textAlign={"justify"}
                    maxW={"80%"}
                    justifySelf={"center"}
                >
                    <Heading color={"primary.100"} mb={4}>
                        Sub Bagian, Program, Evaluasi, Pelaporan Dan Informasi
                        Teknologi
                    </Heading>
                    <OrderedList>
                        <ListItem>
                            Sub Bagian Program, Evaluasi, Pelaporan dan
                            Informasi Teknologi dipimpin oleh Kepala Sub Bagian
                            yang mempunyai tugas melakukan penyiapan bahan
                            penyusunan rencana, program, dan anggaran,
                            pemantauan, evaluasi dan pelaporan serta informasi
                            teknologi dalam pelaksanan kegiatan dibidang
                            Pertanian, Ketahanan Pangan dan Perikanan.
                        </ListItem>
                        <ListItem>
                            Untuk melaksanakan tugas sebagaiman dimaksud dalam
                            ayat (1), Sub Bagian Program, Evaluasi, Pelaporan
                            dan Informasi Teknologi menyelenggarakan fungsi :
                            <UnorderedList>
                                <ListItem>
                                    Penyusunan rencana dan anggaran Sub Bagian
                                    Program, Evaluasi, Pelaporan dan Informasi
                                    Teknologi;
                                </ListItem>
                                <ListItem>
                                    Penyiapan bahan koordinasi dan penyusunan
                                    rencana, program dibidang pertanian,
                                    ketahanan pangan dan perikanan;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan dan pengelolaan informasi
                                    teknologi di lingkungan Dinas Pertanian,
                                    Pangan dan Perikanan;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan koordinasi kegiatan perencanaan,
                                    pemantauan, evaluasi, dan pelaporan
                                    kegiatan;
                                </ListItem>
                                <ListItem>
                                    Pelakasanaan tugas penyusunan program Dinas
                                    Pertanian, Pangan dan Perikanan.
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                        <ListItem>
                            <UnorderedList>
                                <ListItem>
                                    Melakukan penyusunan rencana dan anggaran
                                    Sub Bagian Program, Evaluasi, Pelaporan dan
                                    Informasi Teknologi;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan koordinasi dan
                                    penyusunan rencana, program dibidang
                                    pertanian, ketahanan pangan dan perikanan;
                                </ListItem>
                                <ListItem>
                                    Melakukan urusan kerja sama, hubungan
                                    masyarakat dan protokol;
                                </ListItem>
                                <ListItem>
                                    Menyiapkan bahan koordinasi dan penyusunan
                                    anggaran dibidang pertanian dan perikanan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan pedoman
                                    teknis pelaksanaan kegiatan tahunan dibidang
                                    pertanian dan perikanan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan satuan
                                    biaya, daftar isian pelaksanaan anggaran,
                                    petunjuk operasional kegiatan dan revisi
                                    anggaran;
                                </ListItem>
                                <ListItem>
                                    Melakukan pengumpulan, pengolahan dan
                                    penyajian data dan statistik dibidang
                                    pertanian dan perikanan;
                                </ListItem>
                                <ListItem>
                                    Melakukan koordinasi dengan bidang dalam
                                    rangka menyediakan layanan informasi
                                    teknologi yang mampu memenuhi kebutuhan
                                    Dinas Pertanian, Pangan dan Perikanan;
                                </ListItem>
                                <ListItem>
                                    Melakukan pemantauan dan evaluasi
                                    pelaksanaan program dan kegiatan dibidang
                                    pertanian dan perikanan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyusunan pelaporan kinerja
                                    dibidang pertanian dan perikanan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyusunan pelaporan dan
                                    pendokumentasian kegiatan Sub Bagian
                                    Perencanaan dan Evaluasi;
                                </ListItem>
                                <ListItem>
                                    Melaksanakan tugas lain yang diberikan oleh
                                    Kepala Dinas sesuai dengan tugasnya.
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                    </OrderedList>
                </GridItem>
            </Grid>
        </Box>
    );
}
