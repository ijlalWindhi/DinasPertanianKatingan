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

export default function BagianUmum() {
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
                        Sub Bagian Umum dan Kepegawaian
                    </Heading>
                    <OrderedList>
                        <ListItem>
                            Sub Bagian Umum dan Kepegawaian dipimpin oleh
                            seorang Kepala Sub Bagian yang mempunyai tugas
                            melakukan urusan kepegawaian, tata usaha, rumah
                            tangga, kerja sama, serta ketatalaksanaan.
                        </ListItem>
                        <ListItem>
                            Untuk melaksanakan tugas sebagaimana dimaksud pada
                            ayat (1), Kepala Sub Bagian Umum dan Kepegawaian
                            menyelenggarakan fungsi :
                            <UnorderedList>
                                <ListItem>
                                    Penyusunan rencana dan anggaran Sub Bagian
                                    Umum dan Kepegawaian;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan koordinasi kegiatan administrasi
                                    umum dan kepegawaian Dinas;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan tugas umum dan kepegawaian
                                    Dinas;
                                </ListItem>
                                <ListItem>
                                    Pelaksaan tugas lain yang diberikan oleh
                                    Kepala Dinas sesuai dengan tugasnya.
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                        <ListItem>
                            Untuk menyelenggarakan fungsi sebagaimana dimaksud
                            pada ayat (2), Kepala Sub Bagian Umum dan
                            Kepegawaian mempunyai uraian tugas :
                            <UnorderedList>
                                <ListItem>
                                    Melakukan penyusunan rencana dan anggaran
                                    Sub Bagian Umum dan Kepegawaian;
                                </ListItem>
                                <ListItem>
                                    Melakukan urusan rencana kebutuhan,
                                    pengembangan pegawai;
                                </ListItem>
                                <ListItem>
                                    Melakukan urusan mutasi, tanda jasa,
                                    kenaikan pangkat, pemberhentian dan pensiun
                                    pegawai;
                                </ListItem>
                                <ListItem>
                                    Melakukan urusan tata usaha kepegawaian,
                                    disiplin pegawai dan evaluasi kinerja
                                    pegawai;
                                </ListItem>
                                <ListItem>
                                    Melakukan urusan tata usaha dan kearsipan;
                                </ListItem>
                                <ListItem>
                                    Melakukan urusan rumah tangga, keamanan dan
                                    kebersihan;
                                </ListItem>
                                <ListItem>
                                    Melakukan evaluasi kelembagaan dan
                                    ketatalaksanaan.
                                </ListItem>
                                <ListItem>
                                    Melakukan telahan dan penyiapan penyusunan
                                    peraturan perundang-Undangan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyusunan pelaporan dan
                                    pendokumentasian kegiatan Sub bagian Umum
                                    dan Kepegawaian;
                                </ListItem>
                                <ListItem>
                                    Melakukan tugas lain yang diberikan oleh
                                    Kepala Dinas sesuai dengan tugasnya.
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                    </OrderedList>
                </GridItem>
            </Grid>
        </Box>
    );
}
