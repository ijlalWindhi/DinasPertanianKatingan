import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

export default function Card({ image, title }) {
  return (
    <Box p={6} bgColor={"primary.100"} rounded={"xl"} maxW={"20%"}>
      <Image src={image} alt={"image"} />
      <Text
        fontWeight={"semibold"}
        fontSize={"xl"}
        color={"white"}
        textAlign={"center"}
        mt={4}
      >
        {title}
      </Text>
    </Box>
  );
}
