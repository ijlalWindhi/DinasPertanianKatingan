import React from "react";
import { Box, Text, Grid, GridItem } from "@chakra-ui/react";

export default function Navigation({ active, setActive }) {
    return (
        <Box>
            <Grid
                templateColumns="repeat(3, 1fr)"
                height={"28"}
                bgColor={"primary.200"}
                color={"white"}
            >
                <GridItem
                    colSpan={1}
                    textAlign={"center"}
                    w={"100%"}
                    h={"100%"}
                    justifySelf={"center"}
                    cursor={"pointer"}
                    bgColor={active === "produksi" ? "primary.100" : ""}
                    onClick={() => setActive("produksi")}
                >
                    <Text
                        fontSize={"lg"}
                        fontWeight={"semibold"}
                        alignItems={"center"}
                        display={"flex"}
                        h={"100%"}
                        justifyContent={"center"}
                    >
                        Seksi Produksi Perkebunan dan Peternakan
                    </Text>
                </GridItem>
                <GridItem
                    colSpan={1}
                    textAlign={"center"}
                    w={"100%"}
                    h={"100%"}
                    justifySelf={"center"}
                    cursor={"pointer"}
                    bgColor={active === "perbenihan" ? "primary.100" : ""}
                    onClick={() => setActive("perbenihan")}
                >
                    <Text
                        fontSize={"lg"}
                        fontWeight={"semibold"}
                        alignItems={"center"}
                        display={"flex"}
                        h={"100%"}
                        justifyContent={"center"}
                    >
                        Seksi Perbenihan Perlindungan Perkebunan dan Peternakan
                    </Text>
                </GridItem>
                <GridItem
                    colSpan={1}
                    textAlign={"center"}
                    w={"100%"}
                    h={"100%"}
                    justifySelf={"center"}
                    cursor={"pointer"}
                    bgColor={active === "pengolahan" ? "primary.100" : ""}
                    onClick={() => setActive("pengolahan")}
                >
                    <Text
                        fontSize={"lg"}
                        fontWeight={"semibold"}
                        alignItems={"center"}
                        display={"flex"}
                        h={"100%"}
                        justifyContent={"center"}
                    >
                        Seksi Pengolahan dan Pemasaran
                    </Text>
                </GridItem>
            </Grid>
        </Box>
    );
}
