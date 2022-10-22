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
                        Seksi Perbenihan dan Perlindungan Perkebunan dan
                        Peternakan
                    </Heading>
                    <OrderedList>
                        <ListItem>
                            Seksi Perbenihan Perlindungan Perkebunan dan
                            Peternakan dipimpin oleh Kepala Seksi yang mempunyai
                            tugas pokok melakukan penyiapan bahan penyusunan
                            kebijakan, pelaksanaan, dan pemberian bimbingan
                            teknis serta pemantauan dan evaluasi perbenihan
                            perlindungan dibidang Perkebunan dan Peternakan.
                        </ListItem>
                        <ListItem>
                            Untuk melaksanakan tugas sebagaiman dimaksud dalam
                            ayat (1), Kepala Seksi Perbenihan Perlindungan
                            Perkebunan dan Peternakan menyelenggarakan fungsi :
                            <UnorderedList>
                                <ListItem>
                                    Penyusunan rencana kerja dan anggaran
                                    kegiatan Seksi Perbenihan Perlindungan
                                    Perkebunan dan Peternakan;
                                </ListItem>
                                <ListItem>
                                    Penyiapan bahan penyusunan kebijakan
                                    perbenihan dan perlindungan dibidang
                                    Perkebunan dan Peternakan;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan rencana kegiatan, koordinasi,
                                    pemantauan dan pengendalian dibidang
                                    Perbenihan Perlindungan Perkebunan dan
                                    Peternakan;
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
                            Perkebunan dan Peternakan mempunyai uraian tugas :
                            <UnorderedList>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan rencana
                                    dan anggaran Seksi Perbenihan Perlindungan
                                    Perkebunan dan Peternakan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan
                                    kebijakan, perbenihan dan perlindungan
                                    dibidang Perkebunan dan Peternakan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyediaan dan pengawasan
                                    peredaran/ penggunaan benih tanaman
                                    perkebunan dan bibit ternak;
                                </ListItem>
                                <ListItem>
                                    Melakukan pengawasan dan pengujian mutu
                                    benih tanaman perkebunan;
                                </ListItem>
                                <ListItem>
                                    Melakukan sertifikasi benih dan
                                    pengendaliaan sumber benih tanaman
                                    perkebunan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyusunan rencana kebutuhan benih
                                    dan pengembangan varietas unggul;
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
                                    Organisme Pengganggu Tumbuhan (OPT);
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan pengamatan OPT;
                                </ListItem>
                                <ListItem>
                                    Melakukan menyiapan bahan pengedalian dan
                                    pemantauan OPT, bimbingan operasional
                                    pengamatan dan peramalan OPT;
                                </ListItem>
                                <ListItem>
                                    Melakukan pengelolaan data OPT;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan bimbingan
                                    kelembagaan OPT;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan sekolah lapang
                                    pengendalian hama terpadu;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penanganan dampak
                                    perubahan iklim;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penanggulangan
                                    bencana alam;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan pemberian
                                    bimbingan teknis perbenihan dan perlindungan
                                    dibidang perkebunan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan pengamatan,
                                    pencegahan dan pemberantasan penyakit hewan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penetapan
                                    persyaratan teknis kesehatan hewan dan
                                    penerbitan keterangan kesehatan hewan;
                                </ListItem>
                                <ListItem>
                                    Melakukan fasilitasi unit pelayanan
                                    kesehatan hewan;
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                    </OrderedList>
                </GridItem>
            </Grid>
        </Box>
    );
}
