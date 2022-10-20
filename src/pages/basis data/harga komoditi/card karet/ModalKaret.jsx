import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Text,
    Button,
    Box,
} from "@chakra-ui/react";
import { Line } from "react-chartjs-2";

const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const data = {
    labels: labels,
    datasets: [
        {
            label: "Product 1",
            backgroundColor: "rgb(255, 0, 0)",
            borderColor: "rgb(255, 0, 0)",
            data: [4, 6, 9, 5, 3, 5, 8, 9, 7],
        },
        {
            label: "Product 2",
            backgroundColor: "rgb(0, 255, 0)",
            borderColor: "rgb(0, 255, 0)",
            data: [5, 4, 2, 3, 6, 8, 6, 2, 1],
        },
        {
            label: "Product 3",
            backgroundColor: "rgb(0, 0, 255)",
            borderColor: "rgb(0, 0, 255)",
            data: [1, 2, 4, 8, 4, 3, 4, 5],
        },
    ],
};

export default function ModalKaret({ isOpen, onClose }) {
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} isCentered size={"2xl"}>
                <ModalOverlay />
                <ModalContent bgColor={"grey.200"} px={1} py={4} rounded={"xl"}>
                    <ModalHeader>Detail Informasi Harga Komoditi</ModalHeader>
                    <ModalBody>
                        <Box
                            display={"fles"}
                            justifyContent={"space-between"}
                            mb={6}
                        >
                            <Box>
                                <Text>Jenis Komoditi : Karet</Text>
                                <Text>Tahun : 2014</Text>
                            </Box>
                            <Box>
                                <Text>Harga Saat Ini : Rp. 1000</Text>
                                <Button
                                    bgColor={"primary.200"}
                                    _hover={{ bgColor: "primary.100" }}
                                    color={"white"}
                                >
                                    Harga Tetap
                                </Button>
                            </Box>
                        </Box>
                        <Line data={data} />
                    </ModalBody>
                    <ModalFooter justifyContent={"right"}>
                        <Button
                            onClick={onClose}
                            bgColor={"primary.200"}
                            _hover={{ bgColor: "primary.100" }}
                            color={"white"}
                        >
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
