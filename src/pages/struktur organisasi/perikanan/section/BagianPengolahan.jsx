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

export default function BagianPengolahan() {
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
                        Seksi Pengolahan dan Pemasaran Hasil Perikanan
                    </Heading>
                    <OrderedList>
                        <ListItem>
                            Seksi Pengolahan dan Pemasaran Hasil Perikanan
                            dipimpin oleh seorang Kepala Seksi yang mempunyai
                            tugas melakukan penyiapan bahan penyusunan
                            kebijakan, pelaksanaan, dan pemberian bimbingan
                            teknis serta pemantauan dan evaluasi pengolahan dan
                            pemasaran hasil perikanan.
                        </ListItem>
                        <ListItem>
                            Untuk melaksanakan tugas sebagaimana dimaksud pada
                            ayat (1), Kepala Seksi Pengolahan dan Pemasaran
                            Hasil Perikanan menyelenggarakan fungsi :
                            <UnorderedList>
                                <ListItem>
                                    Penyusunan rencana kerja dan anggaran
                                    kegiatan Seksi Pengolahan dan Pemasaran
                                    Hasil Perikanan;
                                </ListItem>
                                <ListItem>
                                    Penyiapan bahan penyusunan kebijakan
                                    pengolahan hasil perikanan;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan rencana kegiatan, koordinasi,
                                    pemantauan dan pengendalian dibidang
                                    Pengolahan dan Pemasaran Hasil Perikanan;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan tugas lain yang diberikan oleh
                                    Kepala Bidang sesuai dengan tugasnya.
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                        <ListItem>
                            Untuk menyelenggarakan fungsi sebagaimana dimaksud
                            pada ayat (2), Kepala Seksi Pengolahan dan Pemasaran
                            Hasil Perikanan mempunyai uraian tugas :
                            <UnorderedList>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan rencana
                                    dan anggaran Seksi Pengolahan dan Pemasaran
                                    Hasil Perikanan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan
                                    kebijakan pengolahan hasil perikanan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan bimbingan dan
                                    pengembangan unit pengolahan hasil
                                    perikanan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan kebutuhan alat
                                    pengolahan hasil perikanan;
                                </ListItem>
                                <ListItem>
                                    Melakukan pelayanan dan pengembangan
                                    informasi pasar;
                                </ListItem>
                                <ListItem>
                                    Melakukan fasilitasi promosi produk
                                    perikanan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan pemberian
                                    bimbingan teknis pengolahan dan pemasaran
                                    hasil perikanan;
                                </ListItem>
                                <ListItem>
                                    Melakukan pemantauan dan evaluasi
                                    pelaksanaan kegiatan pengolahan dan
                                    pemasaran hasil perikanan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyusunan pelaporan dan
                                    pendokumentasian kegiatan Seksi Pengolahan
                                    dan Pemasaran Hasil Perikanan;
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
