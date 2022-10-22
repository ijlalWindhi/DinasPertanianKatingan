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

export default function BagianPupuk() {
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
                        Seksi Pupuk,Pestisida,Alat dan Mesin
                    </Heading>
                    <OrderedList>
                        <ListItem>
                            Seksi Pupuk, Pestisida, Alat dan Mesin dipimpin oleh
                            seorang Kepala Seksi yang mempunyai tugas melakukan
                            melakukan penyiapan bahan penyusunan dan pelaksanaan
                            kebijakan, pemberian bimbingan teknis, dan
                            pemantauan serta evaluasi di bidang Pupuk,
                            Pestisida, Alat dan Mesin Pertanian.
                        </ListItem>
                        <ListItem>
                            Untuk melaksanakan tugas sebagaiman dimaksud dalam
                            ayat (1), Kepala Seksi Pupuk,Pestisida,Alat dan
                            Mesin menyelenggarakan fungsi :
                            <UnorderedList>
                                <ListItem>
                                    Penyusunan rencana dan anggaran kegiatan
                                    Seksi Pupuk, Pestisida, Alat dan Mesin
                                    Pertanian;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan rencana kegiatan, koordinasi,
                                    pemantauan dan pengendalian dibidang Pupuk,
                                    Pestisida, Alat dan Mesin Pertanian;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan tugas lain yang diberikan oleh
                                    Kepala Bidang sesuai dengan tugasnya.
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                        <ListItem>
                            Untuk menyelenggarakan fungsi sebagaimana dimaksud
                            dalam ayat (2), Kepala Seksi Pupuk,Pestisida,Alat
                            dan Mesin mempunyai uraian tugas :
                            <UnorderedList>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan rencana
                                    dan anggaran Seksi Pupuk, Pestisida, Alat
                                    dan Mesin Pertanian;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan
                                    kebijakan teknis dibidang pupuk, pestisida,
                                    alat dan mesin pertanian;
                                </ListItem>
                                <ListItem>
                                    Melakukan penghitungan penyediaan pupuk,
                                    pestisida, alat dan mesin pertanian;
                                </ListItem>
                                <ListItem>
                                    Melakukan pengawasan peredaran dan
                                    pendaftaran pupuk, pestisida, alat dan mesin
                                    pertanian;
                                </ListItem>
                                <ListItem>
                                    Melakukan penjaminan mutu pupuk, pestisida,
                                    alat dan mesin pertanian;
                                </ListItem>
                                <ListItem>
                                    Melakukan bimbingan pendampingan dan
                                    superfisi pembiayaan dan investasi pertanian
                                    dan perikanan;
                                </ListItem>
                                <ListItem>
                                    Melakukan bimbingan, fasilitasi dan
                                    pelayanan investasi pertanian;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyusunan pelaporan dan
                                    pendokumentasian kegiatan Seksi Pupuk,
                                    Pestisida, Alat dan Mesin Pertanian;
                                </ListItem>
                                <ListItem>
                                    Melakukan tugas lain yang diberikan oleh
                                    Kepala Bidang sesuai dengan tugasnya..
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                    </OrderedList>
                </GridItem>
            </Grid>
        </Box>
    );
}
