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
import Download from "../../pages/basis data/download/Download";
import TanamanPangan from "../../pages/basis data/statistik/tanaman pangan/TanamanPangan";
import Peternakan from "../../pages/basis data/statistik/peternakan/Peternakan";
import Perkebunan from "../../pages/basis data/statistik/perkebunan/Perkebunan";
import TanamanHoltikultura from "../../pages/basis data/statistik/tanaman holtikultura/TanamanHoltikultura";
import HargaKomoditi from "../../pages/basis data/harga komoditi/HargaKomoditi";
import Komoditi from "../../pages/basis data/komoditi/Komoditi";
import KelompokJabatan from "../../pages/struktur organisasi/kelompok jabatan/KelompokJabatan";
import UPTDPertanian from "../../pages/struktur organisasi/UPTD pertanian/UPTDPertanian";
import Sekertariat from "../../pages/struktur organisasi/sekertariat/Sekertariat";
import KetahananPangan from "../../pages/struktur organisasi/ketahanan pangan/KetahananPangan";
import Prasarana from "../../pages/struktur organisasi/prasarana/Prasarana";
import Tanaman from "../../pages/struktur organisasi/tanaman/Tanaman";
import BidangPerkebunan from "../../pages/struktur organisasi/perkebunan/Perkebunan";
import Perikanan from "../../pages/struktur organisasi/perikanan/Perikanan";

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
            <Route path="/basis-data/download" element={<Download />} />
            <Route
                path="/basis-data/statistik/tanaman-pangan"
                element={<TanamanPangan />}
            />
            <Route
                path="/basis-data/statistik/peternakan"
                element={<Peternakan />}
            />
            <Route
                path="/basis-data/statistik/perkebunan"
                element={<Perkebunan />}
            />
            <Route
                path="/basis-data/statistik/tanaman-holtikultura"
                element={<TanamanHoltikultura />}
            />
            <Route
                path="/basis-data/harga-komoditi"
                element={<HargaKomoditi />}
            />
            <Route path="/basis-data/komoditi" element={<Komoditi />} />
            <Route
                path="/struktur-organisasi/kelompok-jabatan"
                element={<KelompokJabatan />}
            />
            <Route
                path="/struktur-organisasi/uptd-pertanian"
                element={<UPTDPertanian />}
            />
            <Route
                path="/struktur-organisasi/sekertariat"
                element={<Sekertariat />}
            />
            <Route
                path="/struktur-organisasi/ketahanan-pangan"
                element={<KetahananPangan />}
            />
            <Route
                path="/struktur-organisasi/prasarana"
                element={<Prasarana />}
            />
            <Route
                path="/struktur-organisasi/bidang-tanaman"
                element={<Tanaman />}
            />
            <Route
                path="/struktur-organisasi/bidang-perkebunan"
                element={<BidangPerkebunan />}
            />
            <Route
                path="/struktur-organisasi/bidang-perikanan"
                element={<Perikanan />}
            />
        </Routes>
    );
}
