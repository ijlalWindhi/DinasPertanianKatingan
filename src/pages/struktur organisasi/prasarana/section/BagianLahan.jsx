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

export default function BagianLahan() {
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
                        Seksi Lahan dan Irigasi
                    </Heading>
                    <OrderedList>
                        <ListItem>
                            Seksi Lahan dan Irigasi dipimpin oleh seorang Kepala
                            Seksi yang mempunyai tugas melakukan penyiapan bahan
                            penyusunan kebijakan, dan pemberian bimbingan teknis
                            dan pemantauan serta evaluasi dibidang pengelolaan
                            lahan dan irigasi.
                        </ListItem>
                        <ListItem>
                            Untuk melaksanakan tugas sebagaimana dimaksud pada
                            ayat (1), Kepala Seksi Lahan dan Irigasi
                            menyelenggarakan fungsi :
                            <UnorderedList>
                                <ListItem>
                                    Penyusunan rencana dan anggaran kegiatan
                                    Seksi Lahan dan Irigasi;
                                </ListItem>
                                <ListItem>
                                    Penyiapan bahan penyusunan kebijakan,
                                    dibidang Pengembangan Lahan dan Irigasi
                                    Pertanian;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan rencana kegiatan, koordinasi,
                                    pemantauan dan pengendalian dibidang Lahan
                                    dan Irigasi;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan tugas lain yang diberikan oleh
                                    Kepala Bidang sesuai dengan tugasnya..
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                        <ListItem>
                            Untuk menyelenggarakan fungsi sebagaimana dimaksud
                            pada ayat (2), Kepala Seksi Lahan dan Irigasi
                            mempunyai uraian tugas :
                            <UnorderedList>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan rencana
                                    dan anggaran Seksi Bidang Lahan dan Irigasi;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan
                                    kebijakan, dibidang Pengembangan Lahan dan
                                    Irigasi Pertanian;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penyediaan lahan,
                                    jalan usahatani, dan jaringan irigasi
                                    tersier;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyusunan peta pengembangan,
                                    rehabilitasi, konservasi, optimalisasi dan
                                    pengendalian lahan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan pengembangan tata
                                    ruang dan tata guna lahan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan bimbingan
                                    pemberdayaan kelembagaan pemakai air;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyusunan laporan dan
                                    pendokumentasian kegiatan Seksi Lahan dan
                                    Irigasi;
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
