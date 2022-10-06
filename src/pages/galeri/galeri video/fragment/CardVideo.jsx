import React from "react";
import { GridItem, Text, Heading, Image, Box } from "@chakra-ui/react";

export default function CardVideo({ image, heading, title, href }) {
    return (
        <GridItem
            display={"flex"}
            bgColor={"primary.300"}
            w={"70%"}
            justifySelf={"center"}
            alignItems={"center"}
            py={4}
            px={6}
            rounded={"xl"}
        >
            <Image src={image} />
            <Box ml={8} color={"primary.100"}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                    <Heading fontSize={"2xl"} as={"ins"} mawW={"80%"}>
                        {heading}
                    </Heading>
                    <Text>{title}</Text>
                </a>
            </Box>
        </GridItem>
    );
}
