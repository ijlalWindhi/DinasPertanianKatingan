import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Box, Text } from "@chakra-ui/react";

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

export default function DiagramLine() {
    return (
        <Box w={"30vw"} bgColor={"primary.300"} p={8} borderRadius={"xl"}>
            <Box fontWeight={"bold"}>
                <Text fontSize={"xl"}>Primary Text</Text>
                <Text fontSize={"2xl"}>5.987,34</Text>
            </Box>
            <Line data={data} />
        </Box>
    );
}
