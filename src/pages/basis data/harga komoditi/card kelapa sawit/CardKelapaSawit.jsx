import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import DiagramKelapaSawit from "./DiagramKelapaSawit";

export default function CardKelapaSawit() {
    return (
        <Box bgColor={"gray.300"} px={10} py={5} my={5} rounded={"3xl"}>
            <Heading fontSize={"3xl"} fontWeight={"normal"} mb={2}>
                Kelapa Sawit /Kg
            </Heading>
            <Box>
                <DiagramKelapaSawit />
            </Box>
        </Box>
    );
}
