import React from "react";
import { Box, Heading, Text, Icon, Divider } from "@chakra-ui/react";
import { Download, ExternalLink } from "react-feather";

export default function CardDownload({ heading, date, title }) {
    return (
        <>
            <Box w={"full"} h={"0.4"} bgColor={"gray.300"} my={4}></Box>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Box>
                    <Heading fontSize={"2xl"} fontWeight={"semibold"}>
                        {heading}
                    </Heading>
                    <Text fontSize={"xs"} mb={4}>
                        {date}
                    </Text>
                    <Text>{title}</Text>
                </Box>
                <Box>
                    <Icon as={ExternalLink} w={7} h={7} mr={6} />
                    <Icon as={Download} w={7} h={7} />
                </Box>
            </Box>
        </>
    );
}
