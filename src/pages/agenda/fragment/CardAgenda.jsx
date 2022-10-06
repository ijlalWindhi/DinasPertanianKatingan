import React from "react";
import { Link } from "react-router-dom";
import { Box, Icon, Text, Heading, Button, GridItem } from "@chakra-ui/react";
import { User, Calendar } from "react-feather";

export default function CardAgenda({ heading, author, date }) {
    return (
        <GridItem justifySelf={"center"} w={"80%"}>
            <Box
                bgGradient={
                    "linear(to-tr, primary.300, primary.300, primary.300, primary.300, secondary.100)"
                }
                w={"100%"}
                minH={44}
                py={4}
                px={10}
                rounded={"2xl"}
                roundedBottomLeft={"none"}
            >
                <Heading fontSize={"3xl"}>{heading}</Heading>
                <Box display={"flex"} fontWeight={"normal"} mt={2}>
                    <Box display={"flex"} alignItems={"center"} mr={12}>
                        <Icon as={User} w={5} h={5} mr={1} />
                        <Text>{author}</Text>
                    </Box>
                    <Box display={"flex"} alignItems={"center"}>
                        <Icon as={Calendar} w={5} h={5} mr={1} />
                        <Text>{date}</Text>
                    </Box>
                </Box>
            </Box>
            <Link to="/agenda/agenda-1">
                <Button
                    bgColor={"primary.100"}
                    _hover={{ bgColor: "primary.200" }}
                    color={"white"}
                    rounded={"3xl"}
                    roundedTopLeft={"none"}
                >
                    Selengkapnya
                </Button>
            </Link>
        </GridItem>
    );
}
