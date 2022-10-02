import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Container, Box } from "@chakra-ui/react";
import Caraousel from "./fragment/Caraousel";

export default function LandingPage() {
    return (
        <Box>
            <Navbar />
            <Caraousel />
        </Box>
    );
}
