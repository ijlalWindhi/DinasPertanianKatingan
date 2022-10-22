import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navigation({ setAlamat, setVisible }) {
    return (
        <Box
            display={"flex"}
            flexDir={"column"}
            maxW={"60%"}
            bgColor={"primary.300"}
            roundedBottomRight={"2xl"}
        >
            <Box
                bgColor={"primary.600"}
                px={10}
                py={4}
                roundedRight={"2xl"}
                roundedTopLeft={"2xl"}
            >
                <Heading
                    as="h1"
                    size="lg"
                    color={"white"}
                    alignItems={"center"}
                    alignContent={"center"}
                    alignSelf={"center"}
                    justifyItems={"center"}
                    display={"flex"}
                >
                    UPTD
                </Heading>
            </Box>
            <Box
                px={10}
                py={6}
                fontWeight={"semibold"}
                fontSize={"lg"}
                color={"primary.100"}
                display={"flex"}
                flexDir={"column"}
                gap={2}
            >
                <Text
                    _hover={{ color: "primary.600" }}
                    cursor={"pointer"}
                    onClick={() => {
                        setAlamat("Kecamatan Bukit Raya");
                        setVisible(false);
                    }}
                >
                    Kec. Bukit Raya
                </Text>
                <Text
                    _hover={{ color: "primary.600" }}
                    cursor={"pointer"}
                    onClick={() => {
                        setVisible(false);
                        setAlamat("Kecamatan Katingan Hulu");
                    }}
                >
                    Kec. Katingan Hulu
                </Text>
                <Text
                    _hover={{ color: "primary.600" }}
                    cursor={"pointer"}
                    onClick={() => {
                        setVisible(false);
                        setAlamat("Kecamatan Marikit");
                    }}
                >
                    Kec. Marikit
                </Text>
                <Text
                    _hover={{ color: "primary.600" }}
                    cursor={"pointer"}
                    onClick={() => {
                        setVisible(false);
                        setAlamat("Kecamatan Petak Malai");
                    }}
                >
                    Kec. Petak Malai
                </Text>
                <Text
                    _hover={{ color: "primary.600" }}
                    cursor={"pointer"}
                    onClick={() => {
                        setVisible(false);
                        setAlamat("Kecamatan Sanaman Mantikei");
                    }}
                >
                    Kec. Sanaman Mantikei
                </Text>
                <Text
                    _hover={{ color: "primary.600" }}
                    cursor={"pointer"}
                    onClick={() => {
                        setVisible(false);
                        setAlamat("Kecamatan Katingan Tengah");
                    }}
                >
                    Kec. Katingan Tengah
                </Text>
                <Text
                    _hover={{ color: "primary.600" }}
                    cursor={"pointer"}
                    onClick={() => {
                        setVisible(false);
                        setAlamat("Kecamatan Pulau Malan");
                    }}
                >
                    Kec. Pulau Malan
                </Text>
                <Text
                    _hover={{ color: "primary.600" }}
                    cursor={"pointer"}
                    onClick={() => {
                        setVisible(false);
                        setAlamat("Kecamatan Tewang Sangalang Garing");
                    }}
                >
                    Kec. Tewang Sangalang Garing
                </Text>
                <Text
                    _hover={{ color: "primary.600" }}
                    cursor={"pointer"}
                    onClick={() => {
                        setVisible(false);
                        setAlamat("Kecamatan Katingan Hilir");
                    }}
                >
                    Kec. Katingan Hilir
                </Text>
                <Text
                    _hover={{ color: "primary.600" }}
                    cursor={"pointer"}
                    onClick={() => {
                        setVisible(false);
                        setAlamat("Kecamatan Tasik Payawan");
                    }}
                >
                    Kec. Tasik Payawan
                </Text>
                <Text
                    _hover={{ color: "primary.600" }}
                    cursor={"pointer"}
                    onClick={() => {
                        setVisible(false);
                        setAlamat("Kec. Kamipang");
                    }}
                >
                    Kec. Kamipang
                </Text>
                <Text
                    _hover={{ color: "primary.600" }}
                    cursor={"pointer"}
                    onClick={() => {
                        setVisible(false);
                        setAlamat("Kec. Mendawai");
                    }}
                >
                    Kec. Mendawai
                </Text>
                <Text
                    _hover={{ color: "primary.600" }}
                    cursor={"pointer"}
                    onClick={() => {
                        setVisible(false);
                        setAlamat("Kecamatan Katingan Kuala");
                    }}
                >
                    Kec. Katingan Kuala
                </Text>
            </Box>
        </Box>
    );
}
