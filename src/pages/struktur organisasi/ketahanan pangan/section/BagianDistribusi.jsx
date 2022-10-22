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

export default function BagianDistribusi() {
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
                        Seksi Distribusi dan Cadangan Pangan
                    </Heading>
                    <OrderedList>
                        <ListItem>
                            Seksi Distribusi dan Cadangan Pangan dipimpin oleh
                            Kepala Seksi yang mempunyai tugas melakukan
                            penyiapan bahan koordinasi, pengkajian, penyusunan
                            dan pelaksanaan kebijakan, pemantapan, serta
                            pemberian bimbingan teknis, pemantauan, dan evaluasi
                            dibidang Distribusi dan Cadangan Pangan.
                        </ListItem>
                        <ListItem>
                            Untuk melaksanakan tugas sebagaimana dimaksud pada
                            ayat (1), Kepala Seksi Distribusi dan Cadangan
                            Pangan menyelenggarakan fungsi:
                            <UnorderedList>
                                <ListItem>
                                    Penyusunan rencana dan anggaran kegiatan
                                    Seksi Distribusi Cadangan Pangan;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan rencana kegiatan, koordinasi,
                                    identifikasi, pembinaan, pemantauan dan
                                    pengendalian dibidang Distribusi Cadangan
                                    Pangan;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan tugas lain yang diberikan oleh
                                    Kepala Bidang sesuai dengan tugasnya.
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                        <ListItem>
                            Untuk menyelenggarakan fungsi sebagaimana dimaksud
                            pada ayat (2), Kepala Seksi Distribusi dan Cadangan
                            Pangan uraian tugas :
                            <UnorderedList>
                                <ListItem>
                                    Melakukan penyusunan rencana dan anggaran
                                    Seksi Distribusi dan Cadangan Pangan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan koordinasi
                                    dibidang Distribusi dan Cadangan Pangan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan analisis dan
                                    kajian dibidang Distribusi dan Cadangan
                                    pangan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan rumusan
                                    dan pelaksanaan kebijakan dbidang Distribusi
                                    dan Cadangan Pangan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan bimbingan teknis
                                    dan supervisi dibidang Distribusi dan
                                    Cadangan Pangan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan pemantauan,
                                    evaluasi dan pelaporan kegiatan dibidang
                                    Distribusi dan Cadangan Pangan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan data dan informasi
                                    rantai pasok dan jaringan distribusi pangan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan pengembangan kelembagaan
                                    distribusi pangan untuk meningkatkan akses
                                    masyarakat terhadap pangan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan
                                    prognosa neraca pangan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan pengumpulan data harga
                                    pangan ditingkat produsen dan konsumen untuk
                                    panel harga;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan penyediaan dan
                                    pengelolaan cadangan pangan pemerintah
                                    kabupaten (pangan pokok dan pangan pokok
                                    lokal);
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan pemanfaatan cadangan
                                    pangan Pemerintah Kabupaten;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyusunan laporan dan
                                    pendokumentasian kegiatan Seksi Distribusi
                                    dan Cadangan Pangan;
                                </ListItem>
                                <ListItem>
                                    Melakukan tugas lain yang diberikan oleh
                                    Kepala Bidang sesuai dengan tugasnya.
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                    </OrderedList>
                </GridItem>
            </Grid>
        </Box>
    );
}
