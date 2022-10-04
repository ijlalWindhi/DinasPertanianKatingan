import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

export default function CardKomoditi({ image, title, price }) {
    return (
        <Box
            bgColor={"primary.600"}
            px={5}
            py={6}
            borderRadius={"2xl"}
            color={"white"}
        >
            <Image src={image} />
            <Text fontSize={"2xl"} fontWeight={"semibold"} pt={4}>
                {title}
            </Text>
            <Text>{price}/Kg</Text>
        </Box>
    );
}
