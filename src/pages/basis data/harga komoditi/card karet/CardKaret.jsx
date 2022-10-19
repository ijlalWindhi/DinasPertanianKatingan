import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import DiagramKaret from "./DiagramKaret";

export default function CardKaret() {
    return (
        <Box bgColor={"gray.300"} px={10} py={5} rounded={"3xl"} my={5}>
            <Heading fontSize={"3xl"} fontWeight={"normal"} mb={2}>
                Karet /Kg
            </Heading>
            <Box>
                <DiagramKaret />
            </Box>
        </Box>
    );
}
