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
                        Seksi Pengolahan dan Pemasaran Hasil Perkebunan dan
                        Peternakan
                    </Heading>
                    <OrderedList>
                        <ListItem>
                            Seksi Pengolahan dan Pemasaran Hasil Perkebunan dan
                            Peternakan dipimpin oleh Kepala Seksi yang mempunyai
                            tugas melakukan penyiapan bahan penyusunan
                            kebijakan, pelaksanaan, dan pemberian bimbingan
                            teknis serta pemantauan dan evaluasi pengolahan dan
                            pemasaran hasil dibidang perkebunan dan peternakan.
                        </ListItem>
                        <ListItem>
                            Untuk melaksanakan tugas sebagaimana dimaksud pada
                            ayat (1), Kepala Seksi Pengolahan dan Pemasaran
                            Hasil Perkebunan dan Peternakan menyelenggarakan
                            fungsi :
                            <UnorderedList>
                                <ListItem>
                                    Penyusunan rencana kerja dan anggaran
                                    kegiatan Seksi Pengolahan dan Pemasaran
                                    Hasil Perkebunan dan Peternakan;
                                </ListItem>
                                <ListItem>
                                    Penyiapan bahan penyusunan kebijakan
                                    pengolahan hasil perkebunan dan peternakan;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan rencana kegiatan, koordinasi,
                                    pemantauan dan pengendalian dibidang
                                    Pengolahan dan Pemasaran Hasil Perkebunan
                                    dan Peternakan;
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
                            Hasil Perkebunan dan Peternakan mempunyai uraian
                            tugas :
                            <UnorderedList>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan
                                    kebijakan pengolahan hasil perkebunan dan
                                    peternakan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan bimbingan dan
                                    pengembangan unit pengolahan hasil
                                    perkebunan serta penilaian penerapan
                                    penanganan limbah dampak, hygiene dan
                                    sanitasi usaha produk hewan.
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan kebutuhan alat
                                    pengolahan hasil perkebunan dan peternakan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penerapan Cara
                                    Produksi Pangan Olahan yang Baik (CPPOB) dan
                                    Pemberian Surat Keterangan Kelayakan
                                    Pengolahan (SKKP/SKP) dibidang Perkebunan
                                    dan Peternakan;
                                </ListItem>
                                <ListItem>
                                    Melakukan pelayanan dan pengembangan
                                    informasi pasar;
                                </ListItem>
                                <ListItem>
                                    Melakukan fasilitasi promosi produk dibidang
                                    perkebunan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan pemberian
                                    bimbingan teknis pengolahan dan pemasaran
                                    hasil perkebunan dan peternakan;
                                </ListItem>
                                <ListItem>
                                    Melakukan pematauan dan evaluasi pelaksanaan
                                    kegiatan pengolahan dan pemasaran hasil
                                    perkebunan dan peternakan;
                                </ListItem>
                                <ListItem>
                                    Melakukan pemberian fasilitas sertifikasi
                                    unit usaha produk hewan skala kecil;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan rekomendasi teknis
                                    hasil penilaian dokumen aplikasi pengeluaran
                                    dan pemasukan produk hewan;
                                </ListItem>
                                <ListItem>
                                    Melakukan analisis resiko pengeluaran dan
                                    pemasukan produk hewan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan sertifikasi veteriner
                                    pengeluaran produk hewan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan pencegahan
                                    penularan zoonosis;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan bimbingan rumah
                                    potong dan pemotongan hewan qurban;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyusunan pelaporan dan
                                    pendokumentasian kegiatan Seksi Pengolahan
                                    dan Pemasaran Hasil Perkebunan dan
                                    Peternakan;
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
