import React from "react";
import BagianProgram from "./BagianProgram";
import BagianUmum from "./BagianUmum";
import BagianKeuangan from "./BagianKeuangan";

export default function Logic({ active }) {
    if (active == "umum") {
        return <BagianUmum />;
    } else if (active == "program") {
        return <BagianProgram />;
    } else if (active == "keuangan") {
        return <BagianKeuangan />;
    }
}
