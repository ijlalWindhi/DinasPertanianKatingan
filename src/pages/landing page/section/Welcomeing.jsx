import React from "react";
import {
    Box,
    Text,
    Image,
    Button,
    Grid,
    GridItem,
    Heading,
} from "@chakra-ui/react";
import ImageSKPD from "../../../assets/images/image-kepalaSKPD.png";

export default function Welcomeing() {
    return (
        <Box px={10} py={16} bgColor={"primary.300"}>
            <Grid
                templateColumns="repeat(3, 1fr)"
                gap={6}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <GridItem colSpan={2} mx={"auto"} maxW={"60%"}>
                    <Heading color={"primary.600"} fontSize={"5xl"}>
                        Selamat Datang
                    </Heading>
                    <Text
                        color={"primary.400"}
                        fontSize={"3xl"}
                        fontWeight={"bold"}
                    >
                        di Website Dinas Pertanian, Pangan & Perikanan
                    </Text>
                    <Text color={"primary.400"} fontSize={"xl"} my={6}>
                        Kabupaten Katingan merupakan kabupaten pemekaran dari
                        Kabupaten Kotawaringin Timur yang dibentuk berdasarkan
                        Undang – Undang No. 05 Tahun 2001.
                    </Text>
                    <Button
                        bgColor={"primary.600"}
                        _hover={{ bgColor: "primary.400" }}
                        color={"white"}
                        fontSize={"xl"}
                        px={14}
                    >
                        Selengkapnya
                    </Button>
                </GridItem>
                <GridItem
                    colSpan={1}
                    mx={"auto"}
                    textAlign={"center"}
                    color={"primary.400"}
                >
                    <Image src={ImageSKPD} />
                    <Text fontSize={"3xl"} fontWeight={"bold"}>
                        Ir. HENDRI
                    </Text>
                    <Text fontSize={"xl"}>(Kepala SKPD)</Text>
                </GridItem>
            </Grid>
        </Box>
    );
}
