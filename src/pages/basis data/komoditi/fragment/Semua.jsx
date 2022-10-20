import React from "react";
import TanamanPangan from "./TanamanPangan";
import Holtikultura from "./Holtikultura";
import Perkebunan from "./Perkebunan";
import Peternakan from "./Peternakan";
import { Box, Text } from "@chakra-ui/react";

export default function Semua() {
  return (
    <Box fontSize={"2xl"} fontWeight={"semibold"}>
      <Text mt={10}>Tanaman Pangan</Text>
      <TanamanPangan />
      <Text mt={10}>Peternakan</Text>
      <Peternakan />
      <Text mt={10}>Perkebunan</Text>
      <Perkebunan />
      <Text mt={10}>Holtikultura</Text>
      <Holtikultura />
    </Box>
  );
}
