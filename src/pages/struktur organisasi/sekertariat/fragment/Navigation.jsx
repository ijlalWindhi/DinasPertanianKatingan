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
                    bgColor={active === "umum" ? "primary.100" : ""}
                    onClick={() => setActive("umum")}
                >
                    <Text
                        fontSize={"lg"}
                        fontWeight={"semibold"}
                        alignItems={"center"}
                        display={"flex"}
                        h={"100%"}
                        justifyContent={"center"}
                    >
                        Sub Bagian Umum dan Kepegawaian
                    </Text>
                </GridItem>
                <GridItem
                    colSpan={1}
                    textAlign={"center"}
                    w={"100%"}
                    h={"100%"}
                    justifySelf={"center"}
                    cursor={"pointer"}
                    bgColor={active === "program" ? "primary.100" : ""}
                    onClick={() => setActive("program")}
                >
                    <Text
                        fontSize={"lg"}
                        fontWeight={"semibold"}
                        alignItems={"center"}
                        display={"flex"}
                        h={"100%"}
                        justifyContent={"center"}
                    >
                        Sub Bagian Program, Evaluasi, Pelaporan dan Informasi
                        Teknologi
                    </Text>
                </GridItem>
                <GridItem
                    colSpan={1}
                    textAlign={"center"}
                    w={"100%"}
                    h={"100%"}
                    justifySelf={"center"}
                    cursor={"pointer"}
                    bgColor={active === "keuangan" ? "primary.100" : ""}
                    onClick={() => setActive("keuangan")}
                >
                    <Text
                        fontSize={"lg"}
                        fontWeight={"semibold"}
                        alignItems={"center"}
                        display={"flex"}
                        h={"100%"}
                        justifyContent={"center"}
                    >
                        Sub Bagian Keuangan
                    </Text>
                </GridItem>
            </Grid>
        </Box>
    );
}
