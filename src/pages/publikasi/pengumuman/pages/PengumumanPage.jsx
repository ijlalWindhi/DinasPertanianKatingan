import React from "react";
import {
    Box,
    Heading,
    Icon,
    Text,
    Grid,
    GridItem,
    Image,
} from "@chakra-ui/react";
import Navbar from "../../../../components/navbar/Navbar";
import Footer from "../../../../components/footer/Footer";
import HeadingSection from "../../../../components/heading/HeadingSection";
import { Calendar, User } from "react-feather";
import Image1 from "../../../../assets/images/image-pengumuman1.png";

export default function PengumumanPage() {
    return (
        <Box minH={"100vh"}>
            <Navbar />
            <HeadingSection heading="Pengumuman" />
            <Box px={10} py={16}>
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    bgColor={"primary.200"}
                    color={"white"}
                    px={20}
                    py={4}
                    rounded={"xl"}
                >
                    <Heading>Pengumuman 1</Heading>
                    <Box>
                        <Box display={"flex"} fontWeight={"semibold"} mt={2}>
                            <Box display={"flex"} alignItems={"center"} mr={12}>
                                <Icon as={User} w={5} h={5} mr={1} />
                                <Text>admin</Text>
                            </Box>
                            <Box display={"flex"} alignItems={"center"}>
                                <Icon as={Calendar} w={5} h={5} mr={1} />
                                <Text>22/08/2022</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Grid templateColumns="repeat(2, 1fr)" my={20}>
                    <GridItem justifySelf={"center"} w={"80%"}>
                        <Image src={Image1} w={"100%"} />
                        <Text
                            textAlign={"center"}
                            fontWeight={"semibold"}
                            fontSize={"xl"}
                            mt={4}
                        >
                            Poster Pengumuman
                        </Text>
                    </GridItem>
                    <GridItem justifySelf={"center"} w={"80%"}>
                        <Text fontSize={"xl"}>
                            Ex sit ipsum adipisicing qui. Aliquip proident
                            eiusmod et dolore ad mollit occaecat ut magna
                            exercitation eiusmod dolore id. Veniam aliquip
                            aliqua ea dolor ad laborum nisi fugiat consequat ex.
                            Dolor proident Lorem et consequat ad culpa. Nostrud
                            eiusmod pariatur exercitation non. Excepteur et
                            nulla labore in ipsum. Nulla aliquip quis aliquip
                            nulla consectetur excepteur duis est sint. Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Eius ut nihil eum! Eligendi dolore laborum
                            laboriosam vitae optio tempore assumenda corrupti!
                            Iste autem corporis iure. Animi rem totam optio
                            quaerat. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Sed asperiores quod ea culpa
                            temporibus autem placeat dicta dolor officiis
                            dolores magni accusamus, ullam fugiat reiciendis,
                            voluptatibus error. Et, dolore nisi?
                        </Text>
                    </GridItem>
                </Grid>
            </Box>
            <Footer />
        </Box>
    );
}
