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

export default function BagianPerbenihan() {
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
                        Seksi Perbenihan dan Perlindungan Ikan
                    </Heading>
                    <OrderedList>
                        <ListItem>
                            Seksi Perbenihan dan Perlindungan Ikan dipimpin oleh
                            seorang Kepala Seksi yang mempunyai tugas melakukan
                            penyiapan bahan penyusunan dan pelaksanaan
                            kebijakan, pemberian bimbingan teknis dan pemantauan
                            serta evaluasi Seksi Perbenihan dan Perlindungan
                            Ikan.
                        </ListItem>
                        <ListItem>
                            Untuk melaksanakan tugas sebagaimana dimaksud pada
                            ayat (1), Kepala Seksi Perbenihan dan Perlindungan
                            Ikan menyelenggarakan fungsi :
                            <UnorderedList>
                                <ListItem>
                                    Penyusunan rencana kerja dan anggaran
                                    kegiatan Seksi Perbenihan dan Perlindungan
                                    Ikan;
                                </ListItem>
                                <ListItem>
                                    Penyiapan bahan penyusunan kebijakan
                                    perbenihan dan perlindungan ikan;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan rencana kegiatan, koordinasi,
                                    pemantauan dan pengendalian dibidang
                                    Perbenihan dan Perlindungan Ikan;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan tugas lain yang diberikan oleh
                                    Kepala Bidang sesuai dengan tugasnya.
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                        <ListItem>
                            Untuk menyelenggarakan fungsi sebagaimana dimaksud
                            dalam ayat (2),Kepala Seksi Perbenihan Perlindungan
                            Ikan mempunyai uraian tugas :
                            <UnorderedList>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan rencana
                                    dan anggaran Seksi Perbenihan dan
                                    Perlindungan Ikan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan
                                    kebijakan perbenihan dan perlindungan ikan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penyediaan dan
                                    pengawasan peredaran benih/bibit ikan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan pengawasan dan
                                    pengujian mutu benih/bibit ikan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan sertifikasi benih
                                    dan pengendalian sumber benih ikan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan rencana
                                    kebutuhan benih ikan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan rekomendasi
                                    pemasukan dan pengeluaran benih yang
                                    beredar;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan bimbingan produksi
                                    benih dan kelembagaan benih;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan pengendalian
                                    serangan hama dan penyakit ikan
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan pengamatan hama
                                    dan penyakit ikan;
                                </ListItem>
                                <ListItem>
                                    Melaksanakan penyiapan sekolah lapang
                                    pengendalian hama dan penyakit ikan terpadu;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penanganan dampak
                                    perubahan iklim;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan bimbingan teknis
                                    perbenihan dan perlindungan dibidang
                                    perikanan;
                                </ListItem>
                                <ListItem>
                                    Menyiapkan bahan rencana tebar benih dan
                                    produksi perikanan;
                                </ListItem>
                                <ListItem>
                                    Melakukan bimbingan peningkatan mutu dan
                                    produksi perikanan;
                                </ListItem>
                                <ListItem>
                                    Melakukan bimbingan penerapan teknologi
                                    perikanan budidaya;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyusunan pelaporan dan
                                    pendokumentasian kegiatan Seksi Perbenihan
                                    dan Perlindungan Perikanan;
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
