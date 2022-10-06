import React from "react";
import {
    Image,
    GridItem,
    Text,
    Button,
    Box,
    useDisclosure,
} from "@chakra-ui/react";
import ModalFoto from "./ModalFoto";

export default function CardFoto({ image, title, amount }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <GridItem
            bgColor={"primary.300"}
            maxW={"55%"}
            px={4}
            py={6}
            rounded={"xl"}
            justifySelf={"center"}
        >
            <ModalFoto
                image={image}
                title={title}
                isOpen={isOpen}
                onClose={onClose}
            />
            <Image src={image} />
            <Text mt={4} mb={2} fontWeight={"semibold"} maxW={"80%"}>
                {title}
            </Text>
            <Box display={"flex"} justifyContent={"end"}>
                <Button
                    borderColor={"primary.100"}
                    color={"primary.100"}
                    _hover={{ bgColor: "primary.200", color: "white" }}
                    variant={"outline"}
                    onClick={onOpen}
                >
                    {amount} Foto
                </Button>
            </Box>
        </GridItem>
    );
}
