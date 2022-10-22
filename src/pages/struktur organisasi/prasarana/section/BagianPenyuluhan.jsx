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

export default function BagianPenyuluhant() {
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
                        Sub Bagian Penyuluhan
                    </Heading>
                    <OrderedList>
                        <ListItem>
                            Seksi Penyuluhan dipimpin oleh seorang Kepala Seksi
                            yang mempunyai tugas melakukan penyiapan bahan
                            penyusunan kebijakan, pelaksanaan, dan pemberian
                            bimbingan teknis serta pemantauan dan evaluasi
                            dibidang kelembagaan, ketenagaan dan metode, serta
                            informasi penyuluhan.
                        </ListItem>
                        <ListItem>
                            Untuk melaksanakan tugas sebagaimana dimaksud pada
                            ayat (1), Kepala Seksi Penyuluhan menyelenggarakan
                            fungsi :
                            <UnorderedList>
                                <ListItem>
                                    Pelaksanaan rencana kegiatan, koordinasi,
                                    pemantauan dan pengendalian dibidang
                                    Penyuluhan;
                                </ListItem>
                                <ListItem>
                                    Penyusunan rencana dan anggaran kegiatan
                                    Seksi Penyuluhan;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan tugas lain yang diberikan oleh
                                    Kepala Bidang sesuai dengan tugasnya.
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                        <ListItem>
                            Untuk menyelenggarakan fungsi sebagaimana dimaksud
                            pada ayat (2), Kepala Seksi Penyuluhan mempunyai
                            uraian tugas :
                            <UnorderedList>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan rencana
                                    dan anggaran Seksi Penyuluhan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan
                                    kebijakan, dibidang kelembagaan, ketenagaan
                                    dan metode serta informasi penyuluhan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penyusunan program
                                    penyuluhan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan materi dan
                                    pengembangan metodologi dibidang penyuluhan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan informasi dan
                                    media di bidang penyuluhan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan pengembangan dan
                                    pengelolaan sistem manajemen informasi
                                    dibidang penyuluhan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penguatan dan
                                    pengembangan serta peningkatan kapasitas
                                    dibidang ketenagaan penyuluhan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyusunan dan pengelolaan
                                    database dibidang ketenagaan penyuluhan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan pengembangan
                                    kompetensi kerja penyuluh pertanian;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan dan fasilitasi
                                    penilaian dan pemberian penghargaan kepada
                                    penyuluh;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan dan fasilitasi
                                    akreditasi dibidang kelembagaan penyuluhan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan dan fasilitasi
                                    sertifikasi dan akreditasi kelembagaan
                                    petani;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penilaian dan
                                    pemberian penghargaan kepada kelembagaan
                                    penyuluh;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyusunan pelaporan dan
                                    pendokumentasian kegiatan Seksi Penyuluhan;
                                </ListItem>
                                <ListItem>
                                    Melakukan pelaksanaan tugas lain yang
                                    diberikan oleh Kepala Bidang sesuai dengan
                                    tugasnya.
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                    </OrderedList>
                </GridItem>
            </Grid>
        </Box>
    );
}
