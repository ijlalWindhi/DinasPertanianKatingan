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
                        Seksi Produksi Perkebunan dan Peternakan
                    </Heading>
                    <OrderedList>
                        <ListItem>
                            Seksi Produksi Perkebunan dan Peternakan dipimpin
                            oleh seorang Kepala Seksi yang mempunyai tugas
                            melakukan penyiapan bahan penyusunan kebijakan,
                            pelaksanaan, dan pemberian bimbingan teknis serta
                            pemantauan dan evaluasi produksi perkebunan dan
                            peternakan.
                        </ListItem>
                        <ListItem>
                            Untuk melaksanakan tugas sebagaimana dimaksud pada
                            ayat (1), Kepala Seksi Produksi Perkebunan dan
                            Peternakan menyelenggarakan fungsi :
                            <UnorderedList>
                                <ListItem>
                                    Penyusunan rencana kerja dan anggaran
                                    kegiatan Seksi Produksi Perkebunan dan
                                    Peternakan;
                                </ListItem>
                                <ListItem>
                                    Penyiapan bahan penyusunan kebijakan
                                    benih/bibit, pakan ternak dan produksi;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan rencana kegiatan, koordinasi,
                                    pemantauan dan pengendalian dibidang
                                    Produksi Perkebunan dan Peternakan;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan tugas lain yang diberikan oleh
                                    Kepala Bidang sesuai dengan tugasnya.
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                        <ListItem>
                            Untuk menyelenggarakan fungsi sebagaimana dimaksud
                            pada ayat (2), Kepala Seksi Produksi Perkebunan dan
                            Peternakan mempunyai uraian tugas :
                            <UnorderedList>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan rencana
                                    dan anggaran Seksi Produksi Perkebunan dan
                                    Peternakan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan
                                    kebijakan benih/bibit, pakan ternak dan
                                    produksi;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan rencana
                                    tanam dan produksi dibidang perkebunan;
                                </ListItem>
                                <ListItem>
                                    Melakukan bimbingan peningkatan mutu dan
                                    produksi dibidang perkebunan;
                                </ListItem>
                                <ListItem>
                                    Melakukan bimbingan penerapan teknologi
                                    budidaya perkebunan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penyediaan dan
                                    peredaran pakan, bibit ternak dan hijauan
                                    pakan ternak;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan pengendalian
                                    penyediaan dan peredaran Hijauan Pakan
                                    Ternak (HPT);
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan pengawasan
                                    produksi, mutu, pakan, benih/bibit HPT;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan pengujian
                                    binih/bibit HPT;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan pengelolaan sumber
                                    daya genetik hewan melalui jaminan kemurnian
                                    dan kelestarian;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyusunan pelaporan dan
                                    pendokumentasian kegiatan Seksi Produksi
                                    Perkebunan dan Peternakan;{" "}
                                </ListItem>
                                <ListItem>
                                    Melakukan tugas lain yang diberikan oleh
                                    Kepala Bidang sesuai dengan tugas dan
                                    fungsinya.
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                    </OrderedList>
                </GridItem>
            </Grid>
        </Box>
    );
}
