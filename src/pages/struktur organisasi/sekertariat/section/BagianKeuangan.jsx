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

export default function BagianKeuangan() {
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
                        Sub Bagian Keuangan
                    </Heading>
                    <OrderedList>
                        <ListItem>
                            Sub Bagian Keuangan dipimpin oleh seorang Kepala Sub
                            Bagian yang mempunyai tugas melakukan penyiapan
                            urusan keuangan dan pengelolaan barang milik Negara.
                        </ListItem>
                        <ListItem>
                            Untuk melaksanakan tugas sebagaimana dimaksud pada
                            ayat (1), Kepala Sub Bagian Keuangan
                            menyelenggarakan fungsi :
                            <UnorderedList>
                                <ListItem>Penyusunan kegiatan rutin;</ListItem>
                                <ListItem>
                                    Pelaksanaan koordinasi kegiatan administrasi
                                    keuangan Dinas Pertanian, Pangan dan
                                    Perikanan;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan tugas penatausahaan keuangan
                                    Dinas Pertanian, Pangan dan Perikanan;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan tugas lain yang diberikan oleh
                                    Kepala Dinas sesuai dengan tugasnya.
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                        <ListItem>
                            Untuk menyelenggarakan fungsi sebagaimana dimaksud
                            pada ayat (2), Kepala Sub Bagian Keuangan mempunyai
                            uraian tugas :
                            <UnorderedList>
                                <ListItem>
                                    Melakukan penyusunan kegiatan rutin;
                                </ListItem>
                                <ListItem>
                                    Melakukan urusan akutansi, verifikasi
                                    keuangan;
                                </ListItem>
                                <ListItem>
                                    Melakukan urusan perbendaharaan, pengelolaan
                                    penerimaan Negara bukan pajak, pengujian dan
                                    penerbitan surat perintah membayar;
                                </ListItem>
                                <ListItem>
                                    Melakukan administrasi keuangan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan pertanggungjawaban dan
                                    pengelolaan dokumen keuangan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyusunan laporan keuangan;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan pemantauan
                                    tidaklanjut laporan hasil pengawasan dan
                                    penyelesaian tuntutan perbendaharaan dan
                                    ganti rugi;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyusunan Rencana Kebutuhan
                                    Barang Unit (RKBU) dan Rencana Pemeliharaan
                                    Barang Unit (RPBU);
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan penatausahaan dan
                                    inventarisasi barang;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan bahan administrasi
                                    pengadaan, penyaluran, penghapusan dan
                                    pemindah tanganan barang milik Negara;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyiapan penyusunan laporan dan
                                    administrasi penggunaan peralatan dan
                                    perlengkapan kantor;
                                </ListItem>
                                <ListItem>
                                    Melakukan penyusunan laporan dan
                                    pendokumentasian kegiatan Sub Bagian
                                    Keuangan;
                                </ListItem>
                                <ListItem>
                                    Melaksanakan tugas lain yang diberikan oleh
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
