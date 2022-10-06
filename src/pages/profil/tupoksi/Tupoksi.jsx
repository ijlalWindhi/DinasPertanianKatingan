import React from "react";
import {
    Box,
    Heading,
    Text,
    Grid,
    GridItem,
    OrderedList,
    ListItem,
} from "@chakra-ui/react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import HeadingSection from "../../../components/heading/HeadingSection";
import Navigation from "../fragment/Navigation";

export default function Tupoksi() {
    return (
        <Box minH={"100vh"}>
            <Navbar />
            <HeadingSection heading="Profil" title="Tupoksi" />
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
                        Pasal 3
                    </Heading>
                    <Text fontSize={"lg"}>
                        Dinas Pertanian, Pangan dan Perikanan mempunyai tugas
                        pokok Membantu Bupati melaksanakan urusan pemerintahan
                        yang menjadi kewenangan daerah dan tugas pembantuan
                        dibidang Pertanian, Pangan dan Perikanan.
                    </Text>
                    <Heading color={"primary.100"} mt={8} mb={4}>
                        Pasal 4
                    </Heading>
                    <Text fontSize={"lg"} mb={4}>
                        Untuk melaksanakan tugas sebagaimana dimaksud dalam
                        pasal 3, Dinas Pertanian, Pangan dan Perikanan
                        menyelenggarakan fungsi :
                    </Text>
                    <OrderedList lineHeight={"8"}>
                        <ListItem fontSize={"lg"}>
                            Perumusan kebijakan dibidang Pertanian, Ketahanan
                            Pengan dan Perikanan;
                        </ListItem>
                        <ListItem fontSize={"lg"}>
                            Pelaksanaan kebijakan dibidang Pertanian, Ketahanan
                            Pengan dan Perikanan;
                        </ListItem>
                        <ListItem fontSize={"lg"}>
                            Koordinasi penyediaan infrastruktur dan pendukung
                            dibidang Pertanian, Ketahanan Pengan dan Perikanan;
                        </ListItem>
                        <ListItem fontSize={"lg"}>
                            Peningkatan kualitas sumber daya manusia dibidang
                            Pertanian, Ketahanan Pengan dan Perikanan;
                        </ListItem>
                        <ListItem fontSize={"lg"}>
                            Penyusunan programa penyuluhan;
                        </ListItem>
                        <ListItem fontSize={"lg"}>
                            Penataan prasarana Pertanian, Pengan dan Perikanan;
                        </ListItem>
                        <ListItem fontSize={"lg"}>
                            Pengawasan mutu dan peredaran benih tanaman,
                            benih/bibit ternak, benih/bibit ikan dan hijauan
                            pakan ternak;
                        </ListItem>
                        <ListItem fontSize={"lg"}>
                            Pengawasan peredaran sarana Pertanian, Ketahanan
                            Pengan dan Perikanan;
                        </ListItem>
                        <ListItem fontSize={"lg"}>
                            Pembinaan produksi dibidang Pertanian dan Perikanan;
                        </ListItem>
                        <ListItem fontSize={"lg"}>
                            Pengendalian dan penanggulangan hama penyakit
                            tanaman penyakit hewan dan ikan;
                        </ListItem>
                        <ListItem fontSize={"lg"}>
                            Pengendalian dan penanggulangan bencana alam;
                        </ListItem>
                        <ListItem fontSize={"lg"}>
                            Pembinaan pengolahan dan pemasaran hasil Pertanian
                            dan Perikanan;
                        </ListItem>
                        <ListItem fontSize={"lg"}>
                            Penyelenggaraan penyuluhan;
                        </ListItem>
                        <ListItem fontSize={"lg"}>
                            Pemberian rekomendasi ijin usaha dan teknis
                            pertanian dan perikanan;
                        </ListItem>
                        <ListItem fontSize={"lg"}>
                            Pemantauan, pengawasan, evaluasi dan pelaporan
                            penyelenggaraan dibidang Pertanian, Ketahanan Pengan
                            dan Perikanan;
                        </ListItem>
                        <ListItem fontSize={"lg"}>
                            Pelaksanaan administrasi Dinas Pertanian, Pengan dan
                            Perikanan; dan
                        </ListItem>
                        <ListItem fontSize={"lg"}>
                            Pelaksanaan fungsi lain yang diberikan oleh Bupati
                            sesuai dengan tugas dan fungsinya.
                        </ListItem>
                    </OrderedList>
                    <Heading color={"primary.100"} mt={8} mb={4}>
                        Pasal 5
                    </Heading>
                    <Text fontSize={"lg"} mb={4}>
                        Untuk menyelenggarakan fungsi sebagaimana dimaksud pada
                        pasal 4, Dinas Pertanian, Pangan dan Perikanan mempunyai
                        kewenangan sebagai berikut :
                    </Text>
                    <OrderedList lineHeight={"8"}>
                        <ListItem fontSize={"lg"}>
                            Merumuskan kebijakan dibidang Pertanian, Ketahanan
                            Pengan dan Perikanan;
                        </ListItem>
                        <ListItem fontSize={"lg"}>
                            Menyusun programa penyuluhan;
                        </ListItem>
                        <ListItem fontSize={"lg"}>
                            Mengawasi mutu dan peredaran benih tanaman,
                            benih/bibit ternak, benih/bibit ikan dan hijauan
                            pakan ternak;
                        </ListItem>
                        <ListItem fontSize={"lg"}>
                            Menyelenggarakan penyuluhan; dan
                        </ListItem>
                        <ListItem fontSize={"lg"}>
                            Memberikan rekomendasi ijin usaha dan teknis
                            pertanian dan perikanan;
                        </ListItem>
                    </OrderedList>
                </GridItem>
                <GridItem>
                    <Navigation />
                </GridItem>
            </Grid>
            <Footer />
        </Box>
    );
}
