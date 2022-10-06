import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalFooter,
    Text,
    Image,
} from "@chakra-ui/react";

export default function ModalFoto({ image, title, isOpen, onClose }) {
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} isCentered size={"2xl"}>
                <ModalOverlay />
                <ModalContent
                    bgColor={"primary.300"}
                    px={1}
                    py={4}
                    rounded={"xl"}
                >
                    <ModalBody>
                        <Image src={image} w={"100%"} />
                    </ModalBody>
                    <ModalFooter justifyContent={"left"}>
                        <Text fontWeight={"semibold"}>{title}</Text>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
