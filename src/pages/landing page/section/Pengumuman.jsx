import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Pengumuman() {
    return (
        <Box
            bgColor={"primary.600"}
            textAlign={"center"}
            color={"white"}
            py={16}
        >
            <Box>
                <Heading fontSize={"4xl"}>Pengumuman</Heading>
                <Text fontSize={"xl"}>
                    Agenda dan Kegiatan Dinas Pertanian, Pangan dan Perikanan
                </Text>
            </Box>
            <Box bgColor={"primary.400"} mt={10}>
                <Text fontSize={"2xl"} fontWeight={"semibold"} py={4}>
                    RENCANA PEMBANGUNAN JALAN DI DESA...
                </Text>
            </Box>
        </Box>
    );
}
