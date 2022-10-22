import React from "react";
import Pengolahan from "./BagianPengolahan";
import BagianPupuk from "./BagianPerbenihan";
import BagianProduksi from "./BagianProduksi";

export default function Logic({ active }) {
    if (active == "perbenihan") {
        return <BagianPupuk />;
    } else if (active == "pengolahan") {
        return <Pengolahan />;
    } else if (active == "produksi") {
        return <BagianProduksi />;
    }
}
