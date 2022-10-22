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
                        Seksi Perbenihan dan Perlindungan Tanaman Pangan dan
                        Hortikultura
                    </Heading>
                    <OrderedList>
                        <ListItem>
                            Seksi Perbenihan dan Perlindungan Tanaman Pangan dan
                            Hortikultura dipimpin oleh seorang Kepala Seksi yang
                            mempunyai tugas melakukan penyiapan bahan penyusunan
                            dan pelaksanaan kebijakan, pemberian bimbingan
                            teknis dan pemantauan serta evaluasi perbenihan dan
                            perlindungan Tanaman Pangan dan Hortikultura.
                        </ListItem>
                        <ListItem>
                            Untuk melaksanakan tugas sebagaiman dimaksud dalam
                            ayat (1), Kepala Seksi Pembenihan dan Perlindungan
                            Tanaman Pangan dan Hortikultura menyelenggarakan
                            fungsi :
                            <UnorderedList>
                                <ListItem>
                                    Penyusunan rencana dan anggaran kegiatan
                                    Seksi Perlindungan Tanaman Pangan dan
                                    Hortikultura;
                                </ListItem>
                                <ListItem>
                                    Penyusunan kebijakan perbenihan dan
                                    perlindungan Tanaman Pangan dan
                                    Hortikultura;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan rencana kegiatan, koordinasi,
                                    pemantauan dan pengendalian dibidang
                                    Perlindungan Tanaman Pangan dan
                                    Hortikultura;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan tugas lain yang diberikan oleh
                                    Kepala Bidang sesuai dengan tugasnya
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                        <ListItem>
                            Untuk menyelenggarakan fungsi sebagaimana dimaksud
                            dalam ayat (2),Kepala Seksi Pembenihan dan
                            Perlindungan Tanaman Pangan dan
                            Hortikulturamempunyai uraian tugas :
                            <UnorderedList>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan rencana
                                    dan anggaran Seksi Perbenihanan Perlindungan
                                    Tanaman Pangan dan Hortikultur;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan
                                    kebijakan perbenihan dan perlindungan
                                    Tanaman Pangan dan Hortikultura;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penyediaan dan
                                    pengawasan peredaran benih Tanaman Pangan
                                    dan Hortikultura;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan pengawasan dan
                                    pengujian mutu benih Tanaman Pangan dan
                                    Hortikultura;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan sertifikasi benih
                                    dan pengendalian sumber benih Tanaman Pangan
                                    dan Hortikultura;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan rencana
                                    kebutuhan benih dan pengembangan varietas
                                    unggul;
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
                                    serangan organisme pengganggu tumbuhan
                                    (OPT);
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
                                    Melaksanakan penyiapan sekolah lapang
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
                                    Melakukan penyiapan bahan bimbingan teknis
                                    perbenihan dan perlindungan tanaman pangan
                                    dan hortikultura;
                                </ListItem>
                                <ListItem>
                                    Menyiapkan bahan rencana tanam dan produksi
                                    hortikultura;
                                </ListItem>
                                <ListItem>
                                    Melakukan bimbingan peningkatan mutu dan
                                    produksi hortikultura;
                                </ListItem>
                                <ListItem>
                                    Melakukan bimbingan penerapan teknologi
                                    budidaya hortikultura;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyusunan pelaporan dan
                                    pendokumentasian kegiatan Seksi Perbenihan
                                    dan Perlindungan Tanaman Pangan dan
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
