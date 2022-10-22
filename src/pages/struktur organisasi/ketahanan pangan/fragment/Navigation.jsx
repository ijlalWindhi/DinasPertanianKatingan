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
                    bgColor={active === "ketersediaan" ? "primary.100" : ""}
                    onClick={() => setActive("ketersediaan")}
                >
                    <Text
                        fontSize={"lg"}
                        fontWeight={"semibold"}
                        alignItems={"center"}
                        display={"flex"}
                        h={"100%"}
                        justifyContent={"center"}
                    >
                        Seksi Ketersediaan dan Kerawanan Pangan
                    </Text>
                </GridItem>
                <GridItem
                    colSpan={1}
                    textAlign={"center"}
                    w={"100%"}
                    h={"100%"}
                    justifySelf={"center"}
                    cursor={"pointer"}
                    bgColor={active === "keanekaragaman" ? "primary.100" : ""}
                    onClick={() => setActive("keanekaragaman")}
                >
                    <Text
                        fontSize={"lg"}
                        fontWeight={"semibold"}
                        alignItems={"center"}
                        display={"flex"}
                        h={"100%"}
                        justifyContent={"center"}
                    >
                        Sub Penganekaragaman Konsumsi dan Keamanan Pangan
                    </Text>
                </GridItem>
                <GridItem
                    colSpan={1}
                    textAlign={"center"}
                    w={"100%"}
                    h={"100%"}
                    justifySelf={"center"}
                    cursor={"pointer"}
                    bgColor={active === "distribusi" ? "primary.100" : ""}
                    onClick={() => setActive("distribusi")}
                >
                    <Text
                        fontSize={"lg"}
                        fontWeight={"semibold"}
                        alignItems={"center"}
                        display={"flex"}
                        h={"100%"}
                        justifyContent={"center"}
                    >
                        Seksi Distribusi dan Cadangan Pangan
                    </Text>
                </GridItem>
            </Grid>
        </Box>
    );
}
