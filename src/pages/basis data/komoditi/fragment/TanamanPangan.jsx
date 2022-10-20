import React from "react";
import { Box } from "@chakra-ui/react";
import Card from "./Card";
import UbiJalar from "../../../../assets/images/ubiJalar.png";
import Padi from "../../../../assets/images/padi.png";
import Jagung from "../../../../assets/images/jagung.png";

export default function TanamanPangan() {
  return (
    <Box display={"flex"} gap={10} mt={20}>
      <Card title={"Ubi Jalar"} image={UbiJalar} />
      <Card title={"Padi"} image={Padi} />
      <Card title={"Jagung"} image={Jagung} />
    </Box>
  );
}
