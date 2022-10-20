import React from "react";
import { Box, Icon, Heading, Text } from "@chakra-ui/react";
import { ArrowLeft } from "react-feather";

export default function Header({
  subsektor,
  tahun,
  level,
  kecamatan,
  kelurahan,
  setVisible,
}) {
  return (
    <Box>
      <Box display={"flex"} alignItems={"center"} gap={20}>
        <Icon
          as={ArrowLeft}
          bgColor={"primary.100"}
          color={"white"}
          width={8}
          height={8}
          rounded={"lg"}
          cursor={"pointer"}
          onClick={() => setVisible(true)}
        />
        <Heading color={"primary.100"}>
          Komoditi Pertanian, Perkebunan, dan Peternakan
        </Heading>
      </Box>
      <Box
        display={"flex"}
        gap={5}
        fontWeight={"semibold"}
        fontSize={"2xl"}
        mt={10}
      >
        <Box>
          <Text>Subsektor :</Text>
          <Text>Level :</Text>
          <Text>Kecamatan :</Text>
          <Text>Kelurahan :</Text>
          <Text>Tahun :</Text>
        </Box>
        <Box textTransform={"capitalize"}>
          <Text>{subsektor}</Text>
          <Text>{level}</Text>
          <Text>{kecamatan}</Text>
          <Text>{kelurahan}</Text>
          <Text>{tahun}</Text>
        </Box>
      </Box>
    </Box>
  );
}
