import React from "react";
import { Box, Image, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Image1 from "../../../assets/images/image-galeri1.png";
import Image2 from "../../../assets/images/image-galeri2.png";
import Image3 from "../../../assets/images/image-galeri3.png";

export default function Galeri() {
    return (
        <Box
            bgColor={"primary.600"}
            textAlign={"center"}
            color={"white"}
            py={16}
        >
            <Box>
                <Heading fontSize={"4xl"}>Galeri</Heading>
                <Text fontSize={"xl"}>
                    Agenda dan Kegiatan Dinas Pertanian, Pangan dan Perikanan
                </Text>
            </Box>
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                bgColor={"primary.400"}
                mt={10}
                py={8}
            >
                <Box w={"32%"}>
                    <Link to="/">
                        <Image src={Image3} w={"100%"} />
                    </Link>
                </Box>
                <Box w={"32%"}>
                    <Link to="/">
                        <Image src={Image1} w={"100%"} />
                    </Link>
                </Box>
                <Box w={"32%"}>
                    <Link to="/">
                        <Image src={Image2} w={"100%"} />
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}
