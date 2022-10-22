import React from "react";
import BagianKetersediaan from "./BagianKetersediaan";
import BagianKeaneragaman from "./BagianKeaneragaman";
import BagianDistribusi from "./BagianDistribusi";

export default function Logic({ active }) {
    if (active == "keanekaragaman") {
        return <BagianKeaneragaman />;
    } else if (active == "ketersediaan") {
        return <BagianKetersediaan />;
    } else if (active == "distribusi") {
        return <BagianDistribusi />;
    }
}
