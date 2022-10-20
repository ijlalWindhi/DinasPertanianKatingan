import React from "react";
import { Box } from "@chakra-ui/react";
import Card from "./Card";
import BawangMerah from "../../../../assets/images/bawangMerah.png";
import Kol from "../../../../assets/images/kol.png";
import Pisang from "../../../../assets/images/pisang.png";

export default function Holtikultura() {
  return (
    <Box display={"flex"} gap={10} mt={20}>
      <Card title={"Bawang Merah"} image={BawangMerah} />
      <Card title={"Kol"} image={Kol} />
      <Card title={"Pisang"} image={Pisang} />
    </Box>
  );
}
