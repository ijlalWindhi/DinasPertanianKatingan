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

export default function BagianKetersediaan() {
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
                        Seksi Ketersediaan dan Kerawanan Pangan
                    </Heading>
                    <OrderedList>
                        <ListItem>
                            Seksi Ketersediaan dan Kerawanan Pangan dipimpin
                            oleh seorang Kepala Seksi yang mempunyai tugas
                            melakukan penyiapan bahan koordinasi, pengkajian,
                            serta pemberian bimbingan teknis, pemantauan dan
                            evaluasi dibidang ketersediaan dan kerawanan pangan.
                        </ListItem>
                        <ListItem>
                            Untuk melaksanakan tugas sebagaimana dimaksud pada
                            ayat (1), Kepala Seksi Ketersediaan Kerawanan Pangan
                            menyelenggarakan fungsi :
                            <UnorderedList>
                                <ListItem>
                                    Penyusunan rencana dan anggaran Seksi
                                    Ketersediaan dan Kerawanan Pangan;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan rencana kegiatan, koordinasi,
                                    identifikasi, pembinaan, pemantauan dan
                                    pengendalian dibidang ketersediaan dan
                                    kerawanan pangan;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan tugas lain yang diberikan oleh
                                    Kepala Bidang sesuai dengan tugasnya.
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                        <ListItem>
                            Untuk menyelenggarakan fungsi sebagaimana dimaksud
                            pada ayat (2), Kepala Seksi Ketersediaan Kerawanan
                            Pangan mempunyai uraian tugas :
                            <UnorderedList>
                                <ListItem>
                                    Melakukan penyusunan rencana dan anggaran
                                    Seksi Ketersediaan dan Kerawanan Pangan;
                                </ListItem>
                                <ListItem>
                                    Melakukan melakukan penyiapan bahan
                                    koordinasi di bidang ketersediaan dan
                                    kerawanan pangan, penyediaan infrastruktur
                                    pangan, dan sumber daya ketahanan pangan
                                    lainnya;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan analisis dan
                                    pengkajian diseksi ketersediaan dan
                                    kerawanan pangan, penyediaan infrastruktur
                                    pangan, dan sumber daya ketahanan pangan
                                    lainnya;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan rumusan
                                    dan pelaksanaan kebijakan di Seksi
                                    Ketersediaan dan Kerawanan Pangan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan bimbingan teknis
                                    di Seksi Ketersediaan dan Kerawanan Pangan;
                                </ListItem>
                                <ListItem>
                                    Menyiapkan bahan pemantauan,evaluasi,
                                    supervisi dan pelaporan kegiatan dibidang
                                    ketersediaan dan kerawanan pangan;
                                </ListItem>
                                <ListItem>
                                    Menyiapkan bahan analisis dan kajian
                                    ketersediaan pangan daerah;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan pengkajian
                                    penyediaan infrastruktur pangan;
                                </ListItem>
                                <ListItem>
                                    Menyiapkan data dan informasi untuk
                                    penyusunan Neraca Bahan Makanan (NBM);
                                </ListItem>
                                <ListItem>
                                    Menyiapkan data dan informasi untuk
                                    penghitungan Pola Pangan Harapan (PPH)
                                    ketersediaan pangan;
                                </ListItem>
                                <ListItem>
                                    Menyiapkan bahan pengembangan jaringan
                                    informasi ketersediaan pangan;
                                </ListItem>
                                <ListItem>
                                    Menyiapkan bahan koordinasi ketersediaan
                                    pangan dalam rangka menghadapi Hari Besar
                                    Keagaman Nasional (HBKN);
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan intervensi daerah
                                    rawan pangan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan dan
                                    analisis sistem kewaspadaan pangan dan gizi;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan data dan informasi
                                    kerentanan dan ketahanan pangan Provinsi;
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
                                    pendokumentasian kegiatan Seksi Ketersediaan
                                    dan Kerawanan Pangan;
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
