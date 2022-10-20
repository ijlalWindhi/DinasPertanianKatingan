import { Globe, Mail, Phone } from "react-feather";

const dataNavbar = [
  {
    label: "Profil Daerah",
    link: "/profil-daerah/kondisi-umum",
    type: "normal",
    children: [
      {
        label: "Kondisi Umum Daerah",
        href: "/profil-daerah/kondisi-umum",
      },
      {
        label: "Topografi",
        href: "/profil-daerah/topografi",
      },
      {
        label: "Potensi Pertanian, Pertenakan, dan Perkebunan",
        href: "/profil-daerah/potensi",
      },
    ],
  },
  {
    label: "Profil",
    link: "/profil/profil-dinas",
    type: "normal",
    children: [
      {
        label:
          "Profil Dinas Pertanian, Pangan, dan Perikanan Kabupaten Katingan",
        href: "/profil/profil-dinas",
      },
      {
        label: "Visi dan Misi",
        href: `/profil/visi-misi`,
      },
      {
        label: "Struktur Organisasi",
        href: `/profil/struktur-organisasi`,
      },
      {
        label: "Sambutan Kepala Dinas",
        href: `/profil/sambutan`,
      },
      {
        label: "Tupoksi",
        href: `/profil/tupoksi`,
      },
    ],
  },
  {
    label: "Program",
    link: "/program/renstra",
    type: "normal",
    children: [
      {
        label: "RENSTRA",
        href: "/program/renstra",
      },
      {
        label: "RKT",
        href: "/program/dokumen-rkt",
      },
      {
        label: "Dokumen Anggaran dan Laporan Keuangan",
        href: `/program/laporan-keuangan`,
      },
      {
        label: "Laporan Kinerja SKPD",
        href: `/program/laporan-kinerja`,
      },
    ],
  },
  {
    label: "Basis Data",
    link: "/basis-data/statistik/tanaman-pangan",
    type: "normal",
    children: [
      {
        label: "Statistik Pertanian, Perkebunan, dan Peternakan",
        href: "/basis-data/statistik/tanaman-pangan",
      },
      {
        label: "Komoditi Pertanian, Perkebunan, dan Peternakan",
        href: "/basis-data/komoditi",
      },
      {
        label: "Download",
        href: `/basis-data/download`,
      },
      {
        label: "Harga Komoditi Dinas Pertanian, Pangan, dan Perikanan",
        href: `/basis-data/harga-komoditi`,
      },
    ],
  },
  {
    label: "Publikasi",
    link: "/publikasi/berita/nomenklator-pertanian-baru",
    type: "normal",
    children: [
      {
        label: "Berita",
        href: "/publikasi/berita/nomenklator-pertanian-baru",
      },
      {
        label: "Pengumuman",
        href: "/publikasi/pengumuman",
      },
    ],
  },
  {
    label: "Galeri",
    link: "/galeri/galeri-foto",
    type: "normal",
    children: [
      {
        label: "Galeri Foto",
        href: "/galeri/galeri-foto",
      },
      {
        label: "Galeri Video",
        href: "/galeri/galeri-video",
      },
    ],
  },
  {
    label: "Kontak Kami",
    link: "",
    type: "icon",
    children: [
      {
        label: "SEKRETARIAT",
        description: "Jl. M.T.Haryono Komp. Perkantoran Pemkab. Katingan",
        icon: Globe,
      },
      {
        label: "EMAIL",
        description: "pertaniankabkatingan@gmail.com",
        icon: Mail,
      },
      {
        label: "TELP",
        description: "(0536) 4043585",
        icon: Phone,
      },
    ],
  },
];

export { dataNavbar };
