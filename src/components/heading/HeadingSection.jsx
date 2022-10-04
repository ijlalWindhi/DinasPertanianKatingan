import React from "react";
import { Heading, Text, Box } from "@chakra-ui/react";

export default function HeadingSection({ heading, title }) {
    return (
        <Box
            pt={36}
            textAlign={"center"}
            minH={72}
            bgColor={"primary.200"}
            color={"white"}
        >
            <Heading as="h1" size="2xl">
                {heading}
            </Heading>
            <Text fontSize={"xl"} fontWeight={"semibold"} mt={2}>
                {title}
            </Text>
        </Box>
    );
}
