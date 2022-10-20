import React from "react";
import { Box } from "@chakra-ui/react";
import Card from "./Card";
import Sawit from "../../../../assets/images/sawit.png";
import Kakao from "../../../../assets/images/kakao.png";
import Karet from "../../../../assets/images/karet.png";

export default function Perkebunan() {
  return (
    <Box display={"flex"} gap={10} mt={20}>
      <Card title={"Kelapa Sawit"} image={Sawit} />
      <Card title={"Kakao"} image={Kakao} />
      <Card title={"Karet"} image={Karet} />
    </Box>
  );
}
