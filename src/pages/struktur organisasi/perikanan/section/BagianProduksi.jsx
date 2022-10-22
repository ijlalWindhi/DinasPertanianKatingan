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
                        Seksi Produksi Perikanan
                    </Heading>
                    <OrderedList>
                        <ListItem>
                            Seksi Produksi Perikanan dipimpin oleh seorang
                            Kepala Seksi yang mempunyai tugas melakukan
                            penyiapan bahan penyusunan dan pelaksanaan
                            kebijakan, pemberian bimbingan teknis dan pemantauan
                            serta evaluasi produksi di bidang perikanan.
                        </ListItem>
                        <ListItem>
                            Untuk melaksanakan tugas sebagaimana dimaksud pada
                            ayat (1), Kepala Seksi Produksi Perikanan
                            menyelenggarakan fungsi :
                            <UnorderedList>
                                <ListItem>
                                    Penyusunan rencana kerja dan anggaran
                                    kegiatan Seksi Produksi Perikanan;
                                </ListItem>
                                <ListItem>
                                    Penyiapan bahan penyusunan kebijakan
                                    peningkatan produksi perikanan;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan rencana kegiatan, koordinasi,
                                    pemantauan dan pengendalian dibidang
                                    Produksi Perikanan;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan tugas lain yang diberikan oleh
                                    Kepala Bidang sesuai dengan tugasnya.
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                        <ListItem>
                            Untuk menyelenggarakan fungsi sebagaimana dimaksud
                            pada ayat (2), Kepala Seksi Produksi Perikanan
                            mempunyai uraian tugas :
                            <UnorderedList>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan rencana
                                    dan anggaran Seksi Produksi Perikanan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan
                                    kebijakan, peningkatan produksi perikanan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan kebijakan produksi
                                    dibidang perikanan;
                                </ListItem>
                                <ListItem>
                                    Melakukan bimbingan peningkatan mutu dan
                                    produksi dibidang tanaman pangan dan
                                    hortikultura;
                                </ListItem>
                                <ListItem>
                                    Melakukan bimbingan penerapan teknologi
                                    budidaya perikanan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyusunan pelaporan dan
                                    pendokumentasian kegiatan Seksi Produksi
                                    Perikanan;
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
