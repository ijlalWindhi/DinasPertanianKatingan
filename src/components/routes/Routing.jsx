import { Route, Routes } from "react-router-dom";
import LandingPage from "../../pages/landing page/LandingPage";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" exact element={<LandingPage />} />
        </Routes>
    );
}
