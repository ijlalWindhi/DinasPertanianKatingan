import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "./fragment/Header";
import TanamanPangan from "./fragment/TanamanPangan";
import Holtikultura from "./fragment/Holtikultura";
import Perkebunan from "./fragment/Perkebunan";
import Peternakan from "./fragment/Peternakan";
import Semua from "./fragment/Semua";

export default function DetailKomoditi({
  subsektor,
  tahun,
  level,
  kecamatan,
  kelurahan,
  setVisible,
}) {
  if (subsektor === "tanaman pangan") {
    return (
      <Box px={28} py={32} bgColor={"primary.500"}>
        <Header
          subsektor={subsektor}
          tahun={tahun}
          level={level}
          kecamatan={kecamatan}
          kelurahan={kelurahan}
          setVisible={setVisible}
        />
        <TanamanPangan />
      </Box>
    );
  } else if (subsektor === "peternakan") {
    return (
      <Box px={28} py={32} bgColor={"primary.500"}>
        <Header
          subsektor={subsektor}
          tahun={tahun}
          level={level}
          kecamatan={kecamatan}
          kelurahan={kelurahan}
          setVisible={setVisible}
        />
        <Peternakan />
      </Box>
    );
  } else if (subsektor === "perkebunan") {
    return (
      <Box px={28} py={32} bgColor={"primary.500"}>
        <Header
          subsektor={subsektor}
          tahun={tahun}
          level={level}
          kecamatan={kecamatan}
          kelurahan={kelurahan}
          setVisible={setVisible}
        />
        <Perkebunan />
      </Box>
    );
  } else if (subsektor === "holtikultura") {
    return (
      <Box px={28} py={32} bgColor={"primary.500"}>
        <Header
          subsektor={subsektor}
          tahun={tahun}
          level={level}
          kecamatan={kecamatan}
          kelurahan={kelurahan}
          setVisible={setVisible}
        />
        <Holtikultura />
      </Box>
    );
  } else {
    return (
      <Box px={28} py={32} bgColor={"primary.500"}>
        <Header
          subsektor={subsektor}
          tahun={tahun}
          level={level}
          kecamatan={kecamatan}
          kelurahan={kelurahan}
          setVisible={setVisible}
        />
        <Semua />
      </Box>
    );
  }
}
