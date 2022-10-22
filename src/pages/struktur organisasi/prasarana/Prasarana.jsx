import React, { useState } from "react";
import {
    Box,
    Heading,
    Text,
    Grid,
    GridItem,
    UnorderedList,
    OrderedList,
    ListItem,
} from "@chakra-ui/react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import HeadingSection from "../../../components/heading/HeadingSection";
import Navigation from "../fragment/Navigation";
import NavigationBar from "./fragment/Navigation";
import Logic from "./section/Logic";

export default function Prasarana() {
    const [active, setActive] = useState("pupuk");
    return (
        <Box minH={"100vh"}>
            <Navbar />
            <HeadingSection
                heading="Struktur Organisasi"
                title="Bidang Prasarana, Sarana dan Penyuluhan Pertanian"
            />
            <Grid
                templateColumns="repeat(3, 1fr)"
                gap={6}
                px={10}
                py={16}
                bgColor={"primary.500"}
            >
                <GridItem
                    colSpan={2}
                    textAlign={"justify"}
                    maxW={"70%"}
                    justifySelf={"center"}
                >
                    <Heading color={"primary.100"} mb={4}>
                        Bidang Prasarana, Sarana dan Penyuluhan Pertanian
                    </Heading>
                    <OrderedList my={4} fontSize={"lg"}>
                        <ListItem>
                            Bidang Prasarana, Sarana dan Penyuluhan Pertanian
                            dipimpin oleh seorang Kepala Bidang yang mempunyai
                            tugas pokok melaksanakan penyusunan, pelaksanaan
                            kebijakan, dan pemberian bimbingan teknis, serta
                            pemantauan dan evaluasi di Bidang Prasarana, Sarana
                            dan Penyuluhan Pertanian.
                        </ListItem>
                        <ListItem>
                            Untuk melaksanakan tugas sebagaimana dimaksud pada
                            ayat (1), Kepala Bidang Prasarana, Sarana dan
                            Penyuluhan Pertanian menyelenggarakan fungsi :
                            <UnorderedList>
                                <ListItem>
                                    Penyusunan kebijakan di Bidang Prasarana,
                                    Sarana dan Penyuluhan Pertanian;
                                </ListItem>
                                <ListItem>
                                    Penyusunan program dan anggaran kegiatan
                                    Bidang Prasarana, Sarana dan Penyuluhan
                                    Pertanian;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan kegiatan di Bidang Prasarana,
                                    Sarana dan Penyuluhan Pertanian;
                                </ListItem>
                                <ListItem>
                                    Pembinaan, perencanaan, pengendalian dan
                                    pelaksanaan tugas dibidang Prasarana, Sarana
                                    dan Penyuluhan Pertanian;
                                </ListItem>
                                <ListItem>
                                    Pelaksanaan tugas lain yang diberikan oleh
                                    Kepala Dinas sesuai dengan tugas dan
                                    fungsinya.
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                        <ListItem>
                            Untuk menyelenggarakan fungsi sebagaimana dimaksud
                            pada ayat (2), Kepala Bidang Prasarana, Sarana dan
                            Penyuluhan Pertanian mempunyai uraian tugas :
                            <UnorderedList>
                                <ListItem>
                                    Menyusun kebijakan di Bidang Prasarana,
                                    Sarana dan Penyuluhan Pertanian;
                                </ListItem>
                                <ListItem>
                                    Menyusun program dan anggaran kegiatan
                                    Bidang Prasarana, Sarana dan Penyuluhan
                                    Pertanian;
                                </ListItem>
                                <ListItem>
                                    Menyediakan dukungan infrastruktur pertanian
                                    dan perikanan;
                                </ListItem>
                                <ListItem>
                                    Mengembangkan potensi dan pengelolaan lahan
                                    dan irigasi;
                                </ListItem>
                                <ListItem>
                                    Menyediakan dan pengawasan peredaran pupuk,
                                    pestisida, serta alat dan mesin;
                                </ListItem>
                                <ListItem>
                                    Memberikan bimbingan pembiayaan pertanian
                                    dan perikanan;
                                </ListItem>
                                <ListItem>
                                    Memberikan fasilitasi investasi pertanian
                                    dan perikanan;
                                </ListItem>
                                <ListItem>
                                    Melakukan bimbingan dan penguatan
                                    kelembagaan pertanian dan perikanan;
                                </ListItem>
                                <ListItem>
                                    Melakukan bimbingan dan peningkatan
                                    kapasitas ketenagaan penyuluhan;
                                </ListItem>
                                <ListItem>
                                    Melakukan pemantauan dan evaluasi di Bidang
                                    Prasarana, Sarana dan Penyuluhan Pertanian;
                                </ListItem>
                                <ListItem>
                                    Melaksanakan tugas lain yang diberikan oleh
                                    Kepala Dinas sesuai dengan tugas dan
                                    fungsinya.
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                    </OrderedList>
                    <Heading olor={"primary.100"} mt={10} fontSize={"xl"}>
                        Bidang Prsarana,Sarana dan Penyuluhan Pertanian,
                        membawahkan :
                    </Heading>
                    <OrderedList fontSize={"lg"}>
                        <ListItem>Seksi Lahan dan Irigasi;</ListItem>
                        <ListItem>
                            Seksi Pupuk, Pestisida, Alat dan Mesin;
                        </ListItem>
                        <ListItem>Seksi Penyuluhan.</ListItem>
                    </OrderedList>
                </GridItem>
                <GridItem>
                    <Navigation />
                </GridItem>
            </Grid>
            <NavigationBar active={active} setActive={setActive} />
            <Logic active={active} />
            <Footer />
        </Box>
    );
}
