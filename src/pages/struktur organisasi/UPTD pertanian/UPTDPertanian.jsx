import React, { useState } from "react";
import {
    Box,
    Heading,
    Text,
    Grid,
    GridItem,
    UnorderedList,
    ListItem,
} from "@chakra-ui/react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import HeadingSection from "../../../components/heading/HeadingSection";
import NavigationUPTD from "../fragment/NavigationUPTD";
import DetailUPTD from "./section/DetailUPTD";

export default function UPTDPertanian() {
    const [visible, setVisible] = useState(true);
    const [alamat, setAlamat] = useState("");
    return (
        <>
            {visible ? (
                <Box minH={"100vh"}>
                    <Navbar />
                    <HeadingSection
                        heading="Struktur Organisasi"
                        title="UPTD Pertanian, Pangan dan Perikanan"
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
                                UPTD Pertanian, Pangan dan Perikanan
                            </Heading>
                            <Text fontSize={"lg"}>
                                Meliputi beberapa daerah seperti :
                            </Text>
                            <UnorderedList my={4} fontSize={"lg"}>
                                <ListItem>
                                    UPTD Pertanian, Pangan dan Perikanan Kec.
                                    Bukit Raya
                                </ListItem>
                                <ListItem>
                                    UPTD Pertanian, Pangan dan Perikanan Kec.
                                    Katingan Hulu
                                </ListItem>
                                <ListItem>
                                    UPTD Pertanian, Pangan dan Perikanan Kec.
                                    Marikit
                                </ListItem>
                                <ListItem>
                                    UPTD Pertanian, Pangan dan Perikanan Kec.
                                    Petak Malai
                                </ListItem>
                                <ListItem>
                                    UPTD Pertanian, Pangan dan Perikanan Kec.
                                    Sanaman Mantikei
                                </ListItem>
                                <ListItem>
                                    UPTD Pertanian, Pangan dan Perikanan Kec.
                                    Katingan Tengah
                                </ListItem>
                                <ListItem>
                                    UPTD Pertanian, Pangan dan Perikanan Kec.
                                    Pulau Malan
                                </ListItem>
                                <ListItem>
                                    UPTD Pertanian, Pangan dan Perikanan Kec.
                                    Tewang Sangalang Garing
                                </ListItem>
                                <ListItem>
                                    UPTD Pertanian, Pangan dan Perikanan Kec.
                                    Katingan Hilir
                                </ListItem>
                                <ListItem>
                                    UPTD Pertanian, Pangan dan Perikanan Kec.
                                    Tasik Payawan
                                </ListItem>
                                <ListItem>
                                    UPTD Pertanian, Pangan dan Perikanan Kec.
                                    Kamipang
                                </ListItem>
                                <ListItem>
                                    UPTD Pertanian, Pangan dan Perikanan Kec.
                                    Mendawai
                                </ListItem>
                                <ListItem>
                                    UPTD Pertanian, Pangan dan Perikanan Kec.
                                    Katingan Kuala
                                </ListItem>
                            </UnorderedList>
                        </GridItem>
                        <GridItem>
                            <NavigationUPTD
                                setAlamat={setAlamat}
                                setVisible={setVisible}
                            />
                        </GridItem>
                    </Grid>
                    <Footer />
                </Box>
            ) : (
                <DetailUPTD alamat={alamat} setVisible={setVisible} />
            )}
        </>
    );
}
