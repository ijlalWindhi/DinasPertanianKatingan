import { Route, Routes } from "react-router-dom";
import LandingPage from "../../pages/landing page/LandingPage";
import KondisiUmum from "../../pages/profil daerah/kondisi umum/KondisiUmum";
import Potensi from "../../pages/profil daerah/potensi/Potensi";
import Topografi from "../../pages/profil daerah/topografi/Topografi";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" exact element={<LandingPage />} />
            <Route
                path="/profil-daerah/kondisi-umum"
                element={<KondisiUmum />}
            />
            <Route path="/profil-daerah/potensi" element={<Potensi />} />
            <Route path="/profil-daerah/topografi" element={<Topografi />} />
        </Routes>
    );
}
