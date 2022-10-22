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

export default function BagianProduksi() {
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
                        Seksi Produksi Tanaman dan Hortikultura
                    </Heading>
                    <OrderedList>
                        <ListItem>
                            Seksi Produksi Tanaman dan Hortikultura dipimpin
                            oleh seorang Kepala Seksi yang mempunyai tugas pokok
                            melakukan penyiapan bahan penyusunan dan pelaksanaan
                            kebijakan, pemberian bimbingan teknis dan pemantauan
                            serta evaluasi produksi di bidang Tanaman Pangan dan
                            Hortikultura.
                        </ListItem>
                        <ListItem>
                            Untuk melaksanakan tugas sebagaimana dimaksud pada
                            ayat (1), Kepala Seksi Produksi Tanaman dan
                            Hortikultura menyelenggarakan fungsi :
                            <UnorderedList>
                                <ListItem>
                                    Penyusunan rencana dan anggaran kegiatan
                                    Seksi Produksi Tanaman dan Hortikultura;
                                </ListItem>
                                <ListItem>
                                    Penyiapan bahan penyusunan kebijakan,
                                    peningkatan produksi dibidang Tanaman Pangan
                                    dan Hortikultura;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan rencana kegiatan, koordinasi,
                                    pemantauan dan pengendalian dibidang
                                    Produksi Tanaman dan Hortikultura;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan tugas lain yang diberikan oleh
                                    Kepala Bidang sesuai dengan tugasnya..
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                        <ListItem>
                            Untuk menyelenggarakan fungsi sebagaimana dimaksud
                            pada ayat (2), Kepala Seksi Lahan dan Irigasi Kepala
                            Seksi Produksi Tanaman dan Hortikultura mempunyai
                            uraian tugas :
                            <UnorderedList>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan rencana
                                    dan anggaran Seksi Produksi Tanaman Pangan
                                    dan Hortikultura;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan
                                    kebijakan, peningkatan produksi dibidang
                                    Tanaman Pangan dan Hortikultura;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan kebijakan produksi
                                    dibidang tanaman pangan;
                                </ListItem>
                                <ListItem>
                                    Melakukan menyiapkan bahan rencana tanaman
                                    dan produksi dibidang Bidang Tanaman Pangan
                                    dan Hortikultura;
                                </ListItem>
                                <ListItem>
                                    Melakukan bimbingan peningkatan mutu dan
                                    produksi di Bidang Tanaman Pangan dan
                                    Hortikultura;
                                </ListItem>
                                <ListItem>
                                    Melakukan bimbingan penerapan teknologi
                                    budidaya dibidang tanaman pangan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyusunan pelaporan dan
                                    pendokumentasian kegiatan Seksi Produksi
                                    Tanaman Pangan dan Hortikultura;
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
