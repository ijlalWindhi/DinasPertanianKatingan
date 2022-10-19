import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import DiagramKopi from "./DiagramKopi";

export default function CardKopi() {
    return (
        <Box bgColor={"gray.300"} px={10} py={5} rounded={"3xl"} my={5}>
            <Heading fontSize={"3xl"} fontWeight={"normal"} mb={2}>
                Kopi /Kg
            </Heading>
            <Box>
                <DiagramKopi />
            </Box>
        </Box>
    );
}
