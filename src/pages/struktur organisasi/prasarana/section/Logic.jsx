import React from "react";
import BagianPenyuluhan from "./BagianPenyuluhan";
import BagianPupuk from "./BagianPupuk";
import BagianLahan from "./BagianLahan";

export default function Logic({ active }) {
    if (active == "pupuk") {
        return <BagianPupuk />;
    } else if (active == "penyuluhan") {
        return <BagianPenyuluhan />;
    } else if (active == "lahan") {
        return <BagianLahan />;
    }
}
