import React from "react";
import {
    Box,
    Heading,
    Text,
    Grid,
    GridItem,
    OrderedList,
    ListItem,
    Icon,
} from "@chakra-ui/react";
import Navbar from "../../../../components/navbar/Navbar";
import Footer from "../../../../components/footer/Footer";
import HeadingSection from "../../../../components/heading/HeadingSection";
import NavigationAlamat from "../../fragment/NavigationAlamat";
import { ArrowLeft } from "react-feather";

export default function DetailUPTD({ alamat, setVisible }) {
    return (
        <Box minH={"100vh"}>
            <Navbar />
            <HeadingSection
                heading="UPTD Pertanian, Pangan dan Perikanan"
                title={alamat}
            />
            <Grid
                templateColumns="repeat(3, 1fr)"
                gap={6}
                px={10}
                py={16}
                bgColor={"primary.500"}
            >
                <GridItem colSpan={2} maxW={"70%"} ml={36}>
                    <Icon
                        as={ArrowLeft}
                        bgColor={"primary.100"}
                        color={"white"}
                        width={8}
                        height={8}
                        rounded={"lg"}
                        cursor={"pointer"}
                        mb={10}
                        onClick={() => setVisible(true)}
                    />
                    <Heading color={"primary.100"} mb={4}>
                        Visi
                    </Heading>
                    <Text
                        fontSize={"lg"}
                        bgColor={"primary.300"}
                        fontWeight={"bold"}
                        width={"fit-content"}
                        py={2}
                        px={5}
                        rounded={"xl"}
                    >
                        Abstrak
                    </Text>
                    <Heading color={"primary.100"} mt={8} mb={4}>
                        Misi
                    </Heading>
                    <OrderedList lineHeight={"8"}>
                        <ListItem fontSize={"lg"}>Abstrak</ListItem>
                        <ListItem fontSize={"lg"}>Abstrak</ListItem>
                    </OrderedList>
                </GridItem>
                <GridItem>
                    <NavigationAlamat />
                </GridItem>
            </Grid>
            <Footer />
        </Box>
    );
}
