import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Box, Text } from "@chakra-ui/react";

const labels = ["Q1", "Q2", "Q3", "Q4"];

const data = {
    labels: labels,
    datasets: [
        {
            label: "Product 1",
            backgroundColor: "rgb(255, 0, 0)",
            borderColor: "rgb(255, 0, 0)",
            data: [750, 1150, 1400, 1250],
        },
        {
            label: "Product 2",
            backgroundColor: "rgb(0, 255, 0)",
            borderColor: "rgb(0, 255, 0)",
            data: [1000, 1750, 1750, 1500],
        },
        {
            label: "Product 3",
            backgroundColor: "rgb(0, 0, 255)",
            borderColor: "rgb(0, 0, 255)",
            data: [1500, 2000, 2250, 1750],
        },
    ],
};

export default function DiagramBar() {
    return (
        <Box w={"30vw"} bgColor={"primary.300"} p={8} borderRadius={"xl"}>
            <Bar data={data} />
        </Box>
    );
}
