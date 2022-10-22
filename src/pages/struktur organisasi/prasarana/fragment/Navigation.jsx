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
                    bgColor={active === "lahan" ? "primary.100" : ""}
                    onClick={() => setActive("lahan")}
                >
                    <Text
                        fontSize={"lg"}
                        fontWeight={"semibold"}
                        alignItems={"center"}
                        display={"flex"}
                        h={"100%"}
                        justifyContent={"center"}
                    >
                        Seksi Lahan dan Irigasi
                    </Text>
                </GridItem>
                <GridItem
                    colSpan={1}
                    textAlign={"center"}
                    w={"100%"}
                    h={"100%"}
                    justifySelf={"center"}
                    cursor={"pointer"}
                    bgColor={active === "pupuk" ? "primary.100" : ""}
                    onClick={() => setActive("pupuk")}
                >
                    <Text
                        fontSize={"lg"}
                        fontWeight={"semibold"}
                        alignItems={"center"}
                        display={"flex"}
                        h={"100%"}
                        justifyContent={"center"}
                    >
                        Seksi Pupuk,Pestisida,Alat dan Mesin
                    </Text>
                </GridItem>
                <GridItem
                    colSpan={1}
                    textAlign={"center"}
                    w={"100%"}
                    h={"100%"}
                    justifySelf={"center"}
                    cursor={"pointer"}
                    bgColor={active === "penyuluhan" ? "primary.100" : ""}
                    onClick={() => setActive("penyuluhan")}
                >
                    <Text
                        fontSize={"lg"}
                        fontWeight={"semibold"}
                        alignItems={"center"}
                        display={"flex"}
                        h={"100%"}
                        justifyContent={"center"}
                    >
                        Seksi Penyuluhan
                    </Text>
                </GridItem>
            </Grid>
        </Box>
    );
}
