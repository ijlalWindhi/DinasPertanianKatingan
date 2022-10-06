import React from "react";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { Globe, Mail, Phone } from "react-feather";

export default function Footer() {
    return (
        <Box
            display={"flex"}
            flexDir={"row"}
            justifyContent={"space-between"}
            px={20}
            py={16}
            bgColor={"primary.100"}
            color={"white"}
            fontWeight={"semibold"}
            alignItems={"center"}
        >
            <Box>
                <Flex alignItems={"center"}>
                    <Icon as={Globe} mr={5} w={7} h={7} />
                    <Text>
                        Alamat : Jl. M.T. Haryono Komp. Perkantoran Pemkab.
                        Katingan
                    </Text>
                </Flex>
                <Flex alignItems={"center"} my={4}>
                    <Icon as={Mail} mr={5} w={7} h={7} />
                    <Text>Email : pertaniankabkatingan@gmail.com</Text>
                </Flex>
                <Flex alignItems={"center"}>
                    <Icon as={Phone} mr={5} w={7} h={7} />
                    <Text>Telp : (0536) 4043585</Text>
                </Flex>
            </Box>
            <Box maxW={"20%"}>
                <Text>
                    Website Dinas Pertanian - Dinas Pertanian, Pangan dan
                    Perikanan Kabupaten Katingan
                </Text>
            </Box>
        </Box>
    );
}
