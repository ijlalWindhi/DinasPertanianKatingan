import { Globe, Mail, Phone } from "react-feather";

const dataNavbar = [
    {
        label: "Profil Daerah",
        link: "/",
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
        link: "/",
        type: "normal",
        children: [
            {
                label: "Profil Dinas Pertanian, Pangan, dan Perikanan Kabupaten Katingan",
                href: "/",
            },
            {
                label: "Visi dan Misi",
                href: `/`,
            },
            {
                label: "Struktur Organisasi",
                href: `/`,
            },
            {
                label: "Sambutan Kepala Dinas",
                href: `/`,
            },
            {
                label: "Tupoksi",
                href: `/`,
            },
        ],
    },
    {
        label: "Program",
        link: "/",
        type: "normal",
        children: [
            {
                label: "RENSTRA",
                href: "/",
            },
            {
                label: "RKT",
                href: "/",
            },
            {
                label: "Dokumen Anggaran dan Laporan Keuangan",
                href: `/`,
            },
            {
                label: "Laporan Kinerja SKPD",
                href: `/`,
            },
        ],
    },
    {
        label: "Basis Data",
        link: "/",
        type: "normal",
        children: [
            {
                label: "Statistik Pertanian, Perkebunan, dan Peternakan",
                href: "/",
            },
            {
                label: "Komoditi Pertanian, Perkebunan, dan Peternakan",
                href: "/",
            },
            {
                label: "Download",
                href: `/`,
            },
            {
                label: "Harga Komoditi Dinas Pertanian, Pangan, dan Perikanan",
            },
        ],
    },
    {
        label: "Publikasi",
        link: "/",
        type: "normal",
        children: [
            {
                label: "Berita",
                href: "/",
            },
            {
                label: "Pengumuman",
                href: "/",
            },
        ],
    },
    {
        label: "Galeri",
        link: "/",
        type: "normal",
        children: [
            {
                label: "Galeri Foto",
                href: "/",
            },
            {
                label: "Galeri Video",
                href: "/",
            },
        ],
    },
    {
        label: "Kontak Kami",
        link: "/",
        type: "icon",
        children: [
            {
                label: "SEKRETARIAT",
                description:
                    "Jl. M.T.Haryono Komp. Perkantoran Pemkab. Katingan",
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
