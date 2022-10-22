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

export default function BagianPenyuluhant() {
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
                        Seksi Pengolahan dan Pemasaran Hasil
                    </Heading>
                    <OrderedList>
                        <ListItem>
                            Untuk melaksanakan tugas sebagaimana dimaksud pada
                            ayat (1), Kepala Seksi Pengolahan dan Pemasaran
                            hasil Tanaman Pangan dan Hortikultura
                            menyelenggarakan fungsi :
                        </ListItem>
                        <ListItem>
                            Untuk melaksanakan tugas sebagaimana dimaksud pada
                            ayat (1), Kepala Seksi Penyuluhan menyelenggarakan
                            fungsi :
                            <UnorderedList>
                                <ListItem>
                                    Penyusunan rencana dan anggaran kegiatan
                                    Seksi Tanaman Pangan dan Hortikultura;
                                </ListItem>
                                <ListItem>
                                    Penyiapan bahan penyusunan kebijakan
                                    pengolahan hasil tanaman pangan dan
                                    hortikultura;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan rencana kegiatan, koordinasi,
                                    pemantauan dan pengendalian dibidang Tanaman
                                    Pangan dan Hortikultura;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan tugas lain yang diberikan oleh
                                    Kepala Bidang sesuai dengan tugasnya
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                        <ListItem>
                            Untuk menyelenggarakan fungsi sebagaimana dimaksud
                            pada ayat (2), Kepala Seksi Pengolahan dan Pemasaran
                            hasil Tanaman Pangan dan Hortikultura mempunyai
                            uraian tugas :
                            <UnorderedList>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan rencana
                                    dan anggaran Seksi Pengolahan dan Pemasaran
                                    Hasil Tanaman Pangan dan Hortikultura;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan
                                    kebijakan pengolahan hasil tanaman pangan
                                    dan hortikultura;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan bimbingan dan
                                    pengembangan unit pengolahan hasil tanaman
                                    pangan dan hortikultura;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan kebutuhan alat
                                    pengolahan hasil tanaman pangan dan
                                    hortikultura;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penerapan Cara
                                    Produksi Pangan Olahan yang Baik (CPPOB) dan
                                    Pemberian Surat Keterangan Kelayakan
                                    Pengolahan (SKKP/SKP) di Bidang Tanaman
                                    Pangan dan Hortikultura;
                                </ListItem>
                                <ListItem>
                                    Melakukan pelayanan dan pengembangan
                                    informasi pasar;
                                </ListItem>
                                <ListItem>
                                    Melakukan fasilitasi promosi produk tanaman
                                    pangan dan hortikultura;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan pemberian
                                    bimbingan teknis pengolahan dan pemasaran
                                    hasil tanaman pangan dan hortikultura;
                                </ListItem>
                                <ListItem>
                                    Melakukan pemantauan dan evaluasi
                                    pelaksanaan kegiatan pengolahan dan
                                    pemasaran hasil tanaman pangan dan
                                    hortikultura;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyusunan pelaporan dan
                                    pendokumentasian kegiatan Seksi Pengolahan
                                    dan Pemasaran Hasil Tanaman Pangan dan
                                    Hortikultura;
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
