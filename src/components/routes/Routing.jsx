import { Route, Routes } from "react-router-dom";
import LandingPage from "../../pages/landing page/LandingPage";
import KondisiUmum from "../../pages/profil daerah/kondisi umum/KondisiUmum";
import Potensi from "../../pages/profil daerah/potensi/Potensi";
import Topografi from "../../pages/profil daerah/topografi/Topografi";
import ProfilDinas from "../../pages/profil/profil dinas/ProfilDinas";
import VisiMisi from "../../pages/profil/visi misi/VisiMisi";
import StrukturOrganisasi from "../../pages/profil/struktur organisasi/StrukturOrganisasi";
import Sambutan from "../../pages/profil/sambutan/Sambutan";
import Tupoksi from "../../pages/profil/tupoksi/Tupoksi";
import Renstra from "../../pages/program/renstra/Renstra";
import RKT from "../../pages/program/rkt/RKT";
import LaporanKeuangan from "../../pages/program/laporan keuangan/LaporanKeuangan";
import LaporanKinerja from "../../pages/program/laporan kinerja/LaporanKinerja";
import GaleriFoto from "../../pages/galeri/galeri foto/GaleriFoto";
import GaleriVideo from "../../pages/galeri/galeri video/GaleriVideo";
import Berita1 from "../../pages/publikasi/berita/Berita1";
import Berita2 from "../../pages/publikasi/berita/Berita2";
import Berita3 from "../../pages/publikasi/berita/Berita3";
import Pengumuman from "../../pages/publikasi/pengumuman/Pengumuman";
import PagePengumuman from "../../pages/publikasi/pengumuman/pages/PengumumanPage";
import Agenda from "../../pages/agenda/Agenda";
import PageAgenda from "../../pages/agenda/pages/AgendaPage";

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
            <Route path="/profil/profil-dinas" element={<ProfilDinas />} />
            <Route path="/profil/visi-misi" element={<VisiMisi />} />
            <Route
                path="/profil/struktur-organisasi"
                element={<StrukturOrganisasi />}
            />
            <Route path="/profil/sambutan" element={<Sambutan />} />
            <Route path="/profil/tupoksi" element={<Tupoksi />} />
            <Route path="/program/renstra" element={<Renstra />} />
            <Route path="/program/dokumen-rkt" element={<RKT />} />
            <Route
                path="/program/laporan-keuangan"
                element={<LaporanKeuangan />}
            />
            <Route
                path="/program/laporan-kinerja"
                element={<LaporanKinerja />}
            />
            <Route path="/galeri/galeri-foto" element={<GaleriFoto />} />
            <Route path="/galeri/galeri-video" element={<GaleriVideo />} />
            <Route
                path="/publikasi/berita/nomenklator-pertanian-baru"
                element={<Berita1 />}
            />
            <Route
                path="/publikasi/berita/penyerahan-bantuan-alsintan-oleh-bupati-katingan-kepada-petani"
                element={<Berita2 />}
            />
            <Route
                path="/publikasi/berita/tanam-padi-perdana-di-areal-cetak-sawah-kabupaten-katingan-tahun-2016"
                element={<Berita3 />}
            />
            <Route path="/publikasi/pengumuman" element={<Pengumuman />} />
            <Route
                path="/publikasi/pengumuman/pengumuman-1"
                element={<PagePengumuman />}
            />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/agenda/agenda-1" element={<PageAgenda />} />
        </Routes>
    );
}
