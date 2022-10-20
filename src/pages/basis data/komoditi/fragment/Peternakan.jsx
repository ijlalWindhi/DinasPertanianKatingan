import React from "react";
import { Box } from "@chakra-ui/react";
import Card from "./Card";
import Kambing from "../../../../assets/images/kambing.png";
import Ayam from "../../../../assets/images/ayam.png";
import Sapi from "../../../../assets/images/sapi.png";

export default function Peternakan() {
  return (
    <Box display={"flex"} gap={10} mt={20}>
      <Card title={"Kambing"} image={Kambing} />
      <Card title={"Ayam"} image={Ayam} />
      <Card title={"Sapi"} image={Sapi} />
    </Box>
  );
}
