import BgMediaPublication from "@/public/BackgroundMediaPublication.png";
import coid from "@/public/domain/coid.svg";
import com from "@/public/domain/com.svg";
import idlogo from "@/public/domain/idlogo.svg";
import myid from "@/public/domain/myid.svg";
import net from "@/public/domain/net.svg";
import xylogo from "@/public/domain/xylogo.svg";
import Affiliate from "@/public/header/affiliate.svg";
import CloudHostingDesa from "@/public/header/cloud_hosting_desa.svg";
import CloudHostingSSD from "@/public/header/cloud_hosting_ssd.svg";
import CloudHostingWeb from "@/public/header/cloud_hosting_website.svg";
import EmailHosting from "@/public/header/email_hosting.svg";
import Promo from "@/public/header/promo.svg";
import CertificateSSL from "@/public/header/certificate_ssl.svg"
import ResellerHosting from "@/public/header/reseller_hosting.svg";
import Book from "@/public/icons/emojione-monotone_blue-book.svg";
import Service from "@/public/icons/ep_service.svg";
import AccountLockOpen from "@/public/icons/mdi_account-lock-open-outline.svg";
import CloudSecurity from "@/public/icons/mdi_cloud-security-outline.svg";
import RouterNetwork from "@/public/icons/mdi_router-network-wireless.svg";
import PerformanceLine from "@/public/icons/mingcute_performance-line.svg";
import { Icon } from "@iconify/react";
import { AiOutlineCloudServer } from "react-icons/ai";
import { BsGlobe, BsWordpress } from "react-icons/bs";
import { MdOutlineAlternateEmail, MdOutlineCloudDone } from "react-icons/md";
import { PiDotsThreeCircle } from "react-icons/pi";
import Link from "next/link";

export const headerItem = [
  {
    title: "Home",
    url: "/",
    subitem: [],
  },
  {
    title: "Cloud Hosting",
    url: "#",
    subitem: [
      {
        image: CloudHostingSSD,
        title: "Minion Hosting",
        desc: "Solusi premium untuk bisnis pemula dengan harga yang terjangkau",
        url: "/hosting-murah",
      },
      {
        image: CloudHostingWeb,
        title: "Cloud Hosting Wordpress",
        desc: "Dilengkapi dengan fitur wordpress manager, performa lebih cepat 5x",
        url: "/cloud-hosting-wordpress",
      },
      {
        image: CloudHostingSSD,
        title: "Cloud Hosting SSD Bussiness",
        desc: "Performance tinggi dan waktu muat yang unggul dengan Cloud Hosting SSD, dapatkan diskon hingga 60%",
        url: "/cloud-hosting-ssd",
      },      
    ],
  },
  {
    title: "server",
    url: "#",
    subitem: [
      {
        image: CloudHostingSSD,
        title: "Managed Cloud VPS Hosting",
        desc: "Dengan Cloud VPS Hosting, servermu akan berjalan lebih cepat  karna tidak terbagi dengan VPS lain",
        url: "/cloud-vps-hosting",
      },
      {
        image: CloudHostingDesa,
        title: "Cloud Server Desa",
        desc: "Pilih cloud server desa untuk mendukung bisnis anda lebih maju",
        url: "/cloud-server-desa",
      },
    ],
  },
  {
    title: "domain murah",
    url: "/domain-murah",
    subitem: [],
  },
  {
    title: "Email",
    url: "#",
    subitem: [
      {
        image: EmailHosting,
        title: "Email Hosting",
        desc: "Mulai gunakan email hosting agar pelanggan lebih dipercaya dan bisnis lebih dikenal!",
        url: "/email-hosting",
      },
    ],
  },
  {
    title: "service",
    url: "#",
    subitem: [
      {
        // TODO: Change desc, and url for SSL Certificates
        image: CertificateSSL,
        title: "SSL Certificates",
        desc: "Pengelolaan website agar tetap berada pada performa yang baik, terupdate dan terhindar dari masalah",
        url: "/virtual-box",
      },
      {
        image: CloudHostingSSD,
        title: "IT Virtual Box",
        desc: "Pengelolaan website agar tetap berada pada performa yang baik, terupdate dan terhindar dari masalah",
        url: "/virtual-box",
      },
      {
        image: CloudHostingSSD,
        title: "Website Builder",
        desc: "Pembangunan website dengan kinerja yang cepat dan hasil yang memuaskan",
        url: "/build-web",
      },
    ],
  },
  {
    title: "program",
    url: "#",
    subitem: [
      {
        image: Affiliate,
        title: "Program Affiliate",
        desc: "Dapatkan Keuntungan, Mudah & Cepat! untuk setiap member baru yang anda referensikan membeli paket hosting ",
        url: "/affiliate",
      },
      {
        image: ResellerHosting,
        title: "Partner Reseller Hosting",
        desc: "Mulai berbisnis reseller hosting sekarang juga",
        url: "/reseller-hosting",
      },
    ],
  },
  {
    title: "Promo",
    url: "/promo",
    subitem: [],
  },
];

export const domainData = [
  { image: myid, alt: "myid", price: "2.000" },
  { image: xylogo, alt: "xyz", price: "43.058" },
  { image: net, alt: "net", price: "55.000" },
  { image: com, alt: "com", price: "160.000" },
  { image: idlogo, alt: "idlogo", price: "210.000" },
  { image: coid, alt: "coid", price: "270.000" },
];

export const productsData = [
  {
    icon: <MdOutlineCloudDone size={36} className="text-primary" />,
    title: "Minion Hosting",
    body: "Layanan ini diciptakan untuk memenuhi kebutuhan pasar menengah kebawah yang membutuhkan resource mumpuni, dengan harga sangat murah.",
    link: "/hosting-murah",
    price: "84.000",
  },
  {
    icon: <MdOutlineCloudDone size={36} className="text-primary" />,
    title: "Cloud Hosting SSD",
    body: "Cloud Hosting murah terbaik untuk kebutuhan website anda, buat websitemu lebih cepat dan dapatkan harga yang bersahabat.",
    link: "/cloud-hosting-ssd",
    price: "432.000",
  },
  {
    icon: <BsWordpress size={36} className="text-primary" />,
    title: "Wordpess Hosting SSD",
    body: "WordPress Hosting SSD Terbaik Indonesia - menjamin reliabilitas & kecepatan yang tak tertandingi, dapatkan juga Domain dan SSL Gratis",
    link: "/cloud-hosting-wordpress",
    price: "1.800.000",
  },
  {
    icon: (
      <Icon
        icon="fluent:cloud-database-20-regular"
        className="text-primary"
        width={36}
        height={36}
      />
    ),
    title: "Cloud Hosting Desa",
    body: "Hosting Desa adalah Layanan Infrastruktur Server Berbasis Cloud yang di rancang khusus untuk Website Desa dengan Technology Terbaru dan jaminan uptime 99,99% .",
    link: "/cloud-hosting-desa",
    price: "150.000",
  },
  {
    icon: <AiOutlineCloudServer size={36} className="text-primary" />,
    title: "Manage Cloud VPS",
    body: "Dengan Cloud VPS Hosting, server kamu akan berjalan lebih cepat dikarenakan semua sumber daya server tidak akan terbagi dengan VPS lain. Tersedia berbagai pilihan kapasitas penyimpanan yang sangat besar hingga 1283 GB.",
    link: "/cloud-vps-hosting",
    price: "1.260.000",
  },
];

export const serviceData = [
  {
    icon: <BsGlobe size={36} />,
    title: "Domain",
    desc: "Hasilkan Ide Nama Untuk Bisnis atau Perusahaan Anda. Jangan lewatkan kesempatan ini untuk memiliki nama domain yang mengesankan.",
    price: "12.000",
    url: "/domain-murah",
  },
  {
    icon: <MdOutlineCloudDone size={36} />,
    title: "Cloud Hosting",
    desc: "Hasilkan Ide Nama Untuk Bisnis atau Perusahaan Anda. Jangan lewatkan kesempatan ini untuk memiliki nama domain yang mengesankan.",
    price: "15.000",
    url: "/hosting-murah",
  },
  {
    icon: (
      <Icon icon="fluent:cloud-database-20-regular" width={36} height={36} />
    ),
    title: "Virtual Private Server",
    desc: "Hasilkan Ide Nama Untuk Bisnis atau Perusahaan Anda. Jangan lewatkan kesempatan ini untuk memiliki nama domain yang mengesankan.",
    price: "130.000",
    url: "/cloud-vps-hosting",
  },
  {
    icon: <PiDotsThreeCircle size={36} />,
    title: "Pembuatan Website",
    desc: "Hasilkan Ide Nama Untuk Bisnis atau Perusahaan Anda. Jangan lewatkan kesempatan ini untuk memiliki nama domain yang mengesankan.",
    price: "499.000",
    url: "/",
  },
  {
    icon: <PiDotsThreeCircle size={36} />,
    title: "SSL Certificate",
    desc: "Hasilkan Ide Nama Untuk Bisnis atau Perusahaan Anda. Jangan lewatkan kesempatan ini untuk memiliki nama domain yang mengesankan.",
    price: "112.000",
    url: "/",
  },
  {
    icon: <MdOutlineAlternateEmail size={36} />,
    title: "Email Hosting",
    desc: "Hasilkan Ide Nama Untuk Bisnis atau Perusahaan Anda. Jangan lewatkan kesempatan ini untuk memiliki nama domain yang mengesankan.",
    price: "12.000",
    url: "/email-hosting",
  },
];

export const commitmentData = [
  {
    title: "Jaminan Keamanan",
    desc: "Salah satu kepastian yang membuat nyaman pelanggan adalah keamanan. dengan penerapan struktur manajemen keamanan meliputi infrastruktur kemanan web server adalah prioritas kami.",
    image: CloudSecurity,
    alt: "",
  },
  {
    title: "Knowledge",
    desc: "RumahHost dilengkapi dengan Laman Knowledge - panduan, berisi informasi, petunjuk, dan tips lainnya yang dapat membantu pekerjaan anda.",
    image: Book,
    alt: "",
  },
  {
    title: "Jaminan Uptime 99,9%",
    desc: "Tak perlu khawatir website Anda down. RumahHost menjaga kestabilan dan kelancaran bisnis anda dengan jaminan Uptime 99.9%",
    image: RouterNetwork,
    alt: "",
  },
  {
    title: "Performa Super Cepat",
    desc: "Teknologi HTTP/3 + QUIC akan membantu kinerja website Anda menjadi lebih cepat. Selain itu, proses perpindahan data di website Anda pun akan jadi lebih lancar dan aman.",
    image: PerformanceLine,
    alt: "",
  },
  {
    title: "Akun Otomatis Aktif",
    desc: "Layanan anda akan otomatis aktif di rumahhost setelah pembelian dan pastikan memilih metode pembayaran otomatis",
    image: AccountLockOpen,
    alt: "",
  },
  {
    title: "Layanan Setiap Hari",
    desc: "Tim Support Service RumahHost siap memberi dukungan bantuan kepada seluruh pelanggan selama 24 jam, 7 hari..",
    image: Service,
    alt: "",
  },
];

export const faqHostingMurahData = [
  {
    question: "Apa itu web minion hosting?",
    answer: (
      <p className="text-sm md:text-base">
        <span className="font-medium">Web Minion Hosting</span> adalah layanan hosting menggunakan panel DirectAdmin dan Cpanel dengan performa tinggi, kapasitas penyimpanan besar, gratis domain, dan berbagai kelengkapan fitur lain.
      </p>
    ),
  },
  {
    question: "Apakah harga Cloud Minion Hosting di RumahHost murah?",
    answer: (
      <p className="text-sm md:text-base">
        <span className="font-medium">Ya,</span> Harga Cloud Minion Hosting di RumahHost dirancang untuk menawarkan nilai terbaik.
        Kami berkomitmen untuk menyediakan harga yang kompetitif di pasar hosting cloud
      </p>
    ),
  },
  {
    question: "Apakah semua pembelian minion hosting mendapatkan domain gratis?",
    answer: (
      <p className="text-sm md:text-base">
        {" "}
        <span className="font-medium">
        Ya betul,</span> RumahHost memberikan domain gratis di paket minion hosting. Anda tinggal pilih domain kesayangan anda saat pembelian hosting
      </p>
    ),
  },
  {
    question: "Apakah bisa transfer hosting ke rumahhost dari penyedia lain?",
    answer: (
      <p className="text-sm md:text-base">
        <span className="font-medium">
        Tentu, </span> tim support rumahhost akan membantu proses transfer hosting sampai selesai secara gratis.
      </p>
    ),
  },
  {
    question: "Metode pembayaran apa saja yang diterima di RumahHost?",
    answer: (
      <p className="text-sm md:text-base">
        <span className="font-medium">
        Kamu bisa melakukan melakukan pembayaran melalui: </span> 
- Bank Transfer / Virtual Account: BCA, ATM Bersama, Prima atau Alto
- QRIS Code: GO-PAY, OVO, Dana, LinkAja, m-BCA, dsb.
- Credit Card: Visa, Mastercard atau JCB
- LINE Pay e-cash
- Mandiri e-cash

      </p>
    ),
  },
]

export const faqCloudHostingSsdData = [
  {
    question: "Apa itu Cloud Hosting SSD NVme?",
    answer: (
      <p className="text-sm md:text-base">
        <span className="font-medium">Cloud Hosting SSD NVme</span> adalah layanan hosting web yang menggunakan Solid State Drives (SSD) dengan teknologi NVMe (Non-Volatile Memory Express). NVMe adalah protokol yang dirancang khusus untuk memaksimalkan kecepatan dan kinerja SSD dengan mengurangi latensi dan meningkatkan kecepatan transfer data dibandingkan dengan SSD SATA.
      </p>
    ),
  },
  {
    question: "keuntungan menggunakan Cloud Hosting SSD NVMe",
    answer: (
      <p className="text-sm md:text-base">
        <span className="font-medium">1. Kecepatan Transfer Data yang Lebih Tinggi:</span> NVMe menawarkan kecepatan baca/tulis yang jauh lebih cepat dibandingkan dengan SSD SATA, 
        memungkinkan website Anda untuk memuat lebih cepat dan meningkatkan kinerja secara keseluruhan.
        <br></br>
        <span className="font-medium">2. Latensi Rendah:</span> NVMe mengurangi latensi dan meningkatkan responsivitas server, 
        yang berarti waktu respons aplikasi dan website Anda akan lebih cepat.
        <br></br>
        <span className="font-medium">3. Kinerja yang Lebih Baik pada Beban Kerja Tinggi:</span> NVMe dapat menangani lebih banyak IOPS (Input/Output Operations Per Second), 
        yang sangat bermanfaat untuk website dengan lalu lintas tinggi atau aplikasi yang memerlukan akses data intensif.

      </p>
  
    ),
  },
  {
    question: "Bagaimana Cloud Hosting SSD NVMe berbeda dari Cloud Hosting HDD?",
    answer: (
      <p className="text-sm md:text-base">
       {" "}
        <span className="font-medium">          
        </span>
        Cloud Hosting SSD NVMe menawarkan kecepatan dan kinerja yang jauh lebih tinggi dibandingkan dengan Cloud Hosting HDD (Hard Disk Drive). 
        HDD menggunakan piringan berputar yang lebih lambat, sedangkan SSD NVMe menggunakan memori flash dan protokol NVMe yang sangat cepat, menghasilkan waktu muat yang lebih singkat dan kecepatan transfer data yang lebih tinggi.
      </p>
    ),
  },
  {
    question: "Apakah Cloud Hosting SSD NVMe cocok untuk semua jenis website?",
    answer: (
      <p className="text-sm md:text-base">
        <span className="font-medium">Ya</span>, Cloud Hosting SSD NVMe cocok untuk berbagai jenis website, termasuk situs e-commerce, 
        aplikasi web, dan situs dengan lalu lintas tinggi. Jika Anda membutuhkan kinerja cepat, latensi rendah, dan kemampuan untuk menangani beban kerja intensif, Cloud Hosting SSD NVMe adalah pilihan yang sangat baik.
      </p>
    ),
  },
  {
    question: "Apa saja manfaat tambahan dari menggunakan Cloud Hosting SSD NVMe?",
    answer: (
      <p className="text-sm md:text-base">
        <span className="font-medium">Peningkatan SEO dan Pengalaman Pengguna:</span>: Dengan kecepatan loading yang lebih cepat, 
        website Anda dapat memberikan pengalaman pengguna yang lebih baik dan mungkin mendapatkan peringkat SEO yang lebih baik.
        <br></br>
        <span className="font-medium">Efisiensi Energi</span>: SSD NVMe cenderung lebih efisien dalam konsumsi energi dibandingkan HDD, yang dapat mengurangi biaya operasional dan dampak lingkungan.
        <br></br>
        <span className="font-medium">Kemampuan Skalabilitas</span>: Banyak layanan Cloud Hosting SSD NVMe menawarkan opsi skalabilitas mudah, memungkinkan Anda untuk meningkatkan sumber daya sesuai kebutuhan tanpa gangguan.
      </p>
    ),
  },
]

export const faqCloudHostingWpData = [
  {
    question: "Apa itu Cloud Hosting untuk WordPress?",
    answer: (
      <p className="text-sm md:text-base">
        <span className="font-medium">Cloud Hosting untuk WordPress</span> adalah layanan hosting web yang dioptimalkan khusus untuk menjalankan situs WordPress di lingkungan cloud. Ini menawarkan skalabilitas, kecepatan, dan fleksibilitas yang lebih baik dibandingkan dengan hosting tradisional, 
        dengan memanfaatkan teknologi cloud untuk meningkatkan kinerja dan keamanan situs WordPress Anda.
      </p>
    ),
  },
  {
    question: "Apa keuntungan menggunakan Cloud Hosting untuk WordPress?",
    answer: (
      <p className="text-sm md:text-base">
        <span className="font-medium">1. Kecepatan dan Kinerja Tinggi</span>: Cloud Hosting menawarkan kecepatan yang 
        lebih cepat dan kinerja yang lebih baik berkat penggunaan teknologi SSD dan kemampuan untuk mendistribusikan beban secara efisien.
        <br></br>
        <span className="font-medium">2. Skalabilitas Mudah</span>: Anda dapat menyesuaikan sumber daya (seperti CPU, RAM, dan penyimpanan) 
        sesuai dengan kebutuhan situs Anda tanpa downtime atau gangguan.
        <br></br>
        <span className="font-medium">3. Ketersediaan Tinggi</span>: Dengan redundansi dan replikasi data, 
        cloud hosting memastikan situs WordPress Anda tetap online meskipun terjadi kegagalan server.
        <br></br>
        <span className="font-medium">4. Keamanan</span>: Cloud Hosting 
        sering kali dilengkapi dengan fitur keamanan tambahan seperti firewall, pemantauan malware, dan pencadangan otomatis.
      </p>
    ),
  },
  {
    question: "Apakah Cloud Hosting untuk WordPress cocok untuk semua jenis situs?",
    answer: (
      <p className="text-sm md:text-base">
       {" "}
        <span className="font-medium">
          Ya</span>, Cloud Hosting untuk WordPress cocok untuk berbagai jenis situs, mulai dari blog pribadi dan portofolio hingga situs e-commerce dan bisnis besar. 
          Ini sangat bermanfaat untuk situs dengan lalu lintas tinggi atau yang memerlukan kinerja tinggi dan keandalan.
      </p>
    ),
  },
  {
    question: "Apakah semua pembelian hosting Wordpress mendapatkan domain gratis?",
    answer: (
      <p className="text-sm md:text-base">
        RumahHost memberikan domain gratis di paket hosting tertentu diantaranya{" "}
        <span className="font-medium">
          Cloud Hosting SSD, WordPress Hosting, Cloud VPS
        </span>
        . Anda tinggal pilih domain kesayangan anda saat pembelian hosting.
      </p>
    ),
  },
  {
    question: "Apakah bisa transfer hosting ke rumahhost dari penyedia lain?",
    answer: (
      <p className="text-sm md:text-base">
        {" "}
        <span className="font-medium">Tentu</span>, tim support rumahhost akan membantu proses transfer hosting sampai selesai secara gratis.


      </p>
    ),
  },
]

export const faqCloudHostingDesaData = [
  {
    question: "Apa itu web hosting?",
    answer: (
      <p className="text-sm md:text-base">
        <span className="font-medium">Web Hosting</span> adalah sebuah perangkat
        komputer yang tersambung dengan layanan internet dan berfungsi untuk
        menyimpan data-data website agar nantinya bisa diakses siapa saja secara
        online.
      </p>
    ),
  },
  {
    question: "Apa itu Domain?",
    answer: (
      <p className="text-sm md:text-base">
        <span className="font-medium">Domain</span> adalah alamat tempat
        pengguna Internet dapat mengakses situs web Anda. Nama domain digunakan
        untuk menemukan dan mengidentifikasi website anda di Internet.
      </p>
    ),
  },
  {
    question: "Apakah semua pembelian hosting mendapatkan domain gratis?",
    answer: (
      <p className="text-sm md:text-base">
        RumahHost memberikan domain gratis di paket hosting tertentu diantaranya{" "}
        <span className="font-medium">
          Cloud Hosting SSD, WordPress Hosting, Cloud VPS
        </span>
        . Anda tinggal pilih domain kesayangan anda saat pembelian hosting.
      </p>
    ),
  },
]

export const faqCloudVpsData = [
  {
    question: "Apa itu web hosting?",
    answer: (
      <p className="text-sm md:text-base">
        <span className="font-medium">Web Hosting</span> adalah sebuah perangkat
        komputer yang tersambung dengan layanan internet dan berfungsi untuk
        menyimpan data-data website agar nantinya bisa diakses siapa saja secara
        online.
      </p>
    ),
  },
  {
    question: "Apa itu Domain?",
    answer: (
      <p className="text-sm md:text-base">
        <span className="font-medium">Domain</span> adalah alamat tempat
        pengguna Internet dapat mengakses situs web Anda. Nama domain digunakan
        untuk menemukan dan mengidentifikasi website anda di Internet.
      </p>
    ),
  },
  {
    question: "Apakah semua pembelian hosting mendapatkan domain gratis?",
    answer: (
      <p className="text-sm md:text-base">
        RumahHost memberikan domain gratis di paket hosting tertentu diantaranya{" "}
        <span className="font-medium">
          Cloud Hosting SSD, WordPress Hosting, Cloud VPS
        </span>
        . Anda tinggal pilih domain kesayangan anda saat pembelian hosting.
      </p>
    ),
  },
]

export const faqDomainMurahData = [
  {
    question: "Apa itu web hosting?",
    answer: (
      <p className="text-sm md:text-base">
        <span className="font-medium">Web Hosting</span> adalah sebuah perangkat
        komputer yang tersambung dengan layanan internet dan berfungsi untuk
        menyimpan data-data website agar nantinya bisa diakses siapa saja secara
        online.
      </p>
    ),
  },
  {
    question: "Apa itu Domain?",
    answer: (
      <p className="text-sm md:text-base">
        <span className="font-medium">Domain</span> adalah alamat tempat
        pengguna Internet dapat mengakses situs web Anda. Nama domain digunakan
        untuk menemukan dan mengidentifikasi website anda di Internet.
      </p>
    ),
  },
  {
    question: "Apakah semua pembelian hosting mendapatkan domain gratis?",
    answer: (
      <p className="text-sm md:text-base">
        RumahHost memberikan domain gratis di paket hosting tertentu diantaranya{" "}
        <span className="font-medium">
          Cloud Hosting SSD, WordPress Hosting, Cloud VPS
        </span>
        . Anda tinggal pilih domain kesayangan anda saat pembelian hosting.
      </p>
    ),
  },
]

export const faqData = [
  {
    question: "Apa itu web hosting?",
    answer: (
      <p className="text-sm md:text-base">
        <span className="font-medium">Web Hosting</span> adalah sebuah perangkat
        komputer yang tersambung dengan layanan internet dan berfungsi untuk
        menyimpan data-data website agar nantinya bisa diakses siapa saja secara
        online.
      </p>
    ),
  },
  {
    question: "Apa itu Domain?",
    answer: (
      <p className="text-sm md:text-base">
        <span className="font-medium">Domain</span> adalah alamat tempat
        pengguna Internet dapat mengakses situs web Anda. Nama domain digunakan
        untuk menemukan dan mengidentifikasi website anda di Internet.
      </p>
    ),
  },
  {
    question: "Apakah semua pembelian hosting mendapatkan domain gratis?",
    answer: (
      <p className="text-sm md:text-base">
        RumahHost memberikan domain gratis di paket hosting tertentu diantaranya{" "}
        <span className="font-medium">
          Cloud Hosting SSD, WordPress Hosting, Cloud VPS
        </span>
        . Anda tinggal pilih domain kesayangan anda saat pembelian hosting.
      </p>
    ),
  },
  {
    question:
      "Jika sudah memiliki website, apakah saya bisa transfer web hosting ke RumahHost?",
    answer: (
      <p className="text-sm md:text-base">
        Transfer hosting tidaklah rumit. Tim support kami siap membantu
        memindahkan hosting Anda ke RumahHost kapan pun Anda inginkan. Caranya,
        Anda hanya perlu mengisi formulir dan permintaan transfer akan kami
        proses secepatnya. Transfer hosting Anda ke layanan RumahHost sekarang
        dan dapatkan diskon hingga 50%! Silakan hubungi tim support kami untuk
        mendapatkan informasi lebih lengkap
      </p>
    ),
  },
  {
    question: "Apa saja layanan Web hosting RumahHost?",
    answer: (
      <ul className="mx-4 list-disc">
        <li className="text-sm font-medium md:text-base">Minion Hosting</li>
        <p className="text-sm md:text-base">
          Minion Hosting merupakan layanan hosting RumahHost yang
          paling populer. menawarkan harga yang sangat terjangkau untuk paket
          ini, mulai dari Rp7.000,- per bulan.
        </p>
        <li className="font-medium">Cloud Wordpress Hosting</li>
        <p className="text-sm md:text-base">
          Nikmati performa WordPress Hosting yang bisa menampung trafik tinggi
          dengan pengelolaan mudah. Didukung LiteSpeed,
          WordPress Accelerator, dan domain gratis, website Anda bisa memberikan
          performa terbaik dari kecepatan dan daya tampung.
        </p>
        <li className="font-medium">Cloud Hosting SSD NVme</li>
        <p className="text-sm md:text-base">
        Cloud Hosting SSD Bussiness Kecepatan Akses Data yang Lebih Cepat: SSD mampu mengakses data dengan kecepatan yang lebih tinggi dibandingkan HDD, sehingga website Anda dapat memuat lebih cepat.
        </p>
        <li className="font-medium">Cloud VPS</li>
        <p className="text-sm md:text-base">
          Selain paket Hosting, RumahHost juga memiliki paket server: Virtual
          Private Server (VPS). Dengan Cloud VPS Manage, server kamu akan
          berjalan lebih cepat dikarenakan semua sumber daya server tidak akan
          terbagi dengan VPS lain.
        </p>
      </ul>
    ),
  },
  {
    question: "Paket hosting apa yang tepat untuk Anda?",
    answer: (
      <p className="text-base">
        RumahHost menyediakan beberapa paket hosting untuk Anda. Dalam memilih
        hosting, pastikan Anda memilih sesuai dengan kebutuhan. Paket hosting
        yang kami rekomendasikan dan paling digemari oleh pelanggan saat ini
        adalah paket{" "}
        <Link
          href="/cloud-hosting-ssd"
          className="text-secondary hover:text-primary"
        >
          Cloud Hosting SSD NVme – Starter.
        </Link>
      </p>
    ),
  },
];

export const feedbackData = [
  {
    name: "Jonathan",
    comment: "Pelayanan cepat",
    rating: 5,
  },
  {
    name: "Caroline",
    comment: "Memuaskan",
    rating: 3,
  },
  {
    name: "Brandon",
    comment: "very good",
    rating: 4,
  },
  {
    name: "Michael",
    comment: "nice",
    rating: 3,
  },
  {
    name: "Jessica",
    comment: "sangat membantu",
    rating: 4,
  },
  {
    name: "Mirna",
    comment: "sangat membantu",
    rating: 5,
  },
];

export const productHosting = [
  {
    title: "hosting junior",
    subtitle: "Best Settings for Startups",
    price: 84000,
    feature: [
      "disk 1 gb",
      "Unmetered Bandwidth",
      "database 2",
      "subdomain 1",
      "AKUN EMAIL 2",
      "AKUN FTP 2",
      "MAX PARKED DOMAINS 1",
      "GRATIS 1 DOMAIN",
    ],
    url: "#features",
    isPopular: false,
  },
  {
    title: "HOSTING EXANIOR",
    subtitle: "Best Settings for Business",
    price: 120000,
    feature: [
      "disk 2 gb",
      "Unmetered Bandwidth",
      "database 2",
      "subdomain 2",
      "AKUN EMAIL 2",
      "AKUN FTP 2",
      "MAX PARKED DOMAINS 1",
      "GRATIS 1 DOMAIN",
    ],
    url: "#features",
    isPopular: true,
  },
  {
    title: "HOSTING SUPERIOR",
    subtitle: "Best Settings for Business",
    price: 216000,
    feature: [
      "disk 2 gb",
      "Unmetered Bandwidth",
      "database unlimited",
      "subdomain unlimited",
      "AKUN EMAIL 5",
      "AKUN FTP 5",
      "MAX PARKED DOMAINS unlimited",
      "GRATIS 1 DOMAIN",
    ],
    url: "#features",
    isPopular: false,
  },
];

export const tablePackageVPSDatas = [
  {
    product: "Cloud VPS Warrior",
    diskSpace: 25,
    bandwidth: 1,
    ram: 1,
    cpuCore: 1,
    server: "ID/SG/US",
    setup: "Gratis",
    price: 105000,
    url: "#",
  },
  {
    product: "Cloud VPS Elite",
    diskSpace: 50,
    bandwidth: 2,
    ram: 2,
    cpuCore: 1,
    server: "ID/SG/US",
    setup: "Gratis",
    price: 200000,
    url: "#",
  },
  {
    product: "Cloud VPS Master",
    diskSpace: 80,
    bandwidth: 3,
    ram: 4,
    cpuCore: 2,
    server: "ID/SG/US",
    setup: "Gratis",
    price: 350000,
    url: "#",
  },
  {
    product: "Cloud VPS Grandmaster",
    diskSpace: 160,
    bandwidth: 4,
    ram: 8,
    cpuCore: 4,
    server: "ID/SG/US",
    setup: "Gratis",
    price: 650000,
    url: "#",
  },
  {
    product: "Cloud VPS Epic",
    diskSpace: 320,
    bandwidth: 5,
    ram: 16,
    cpuCore: 6,
    server: "ID/SG/US",
    setup: "Gratis",
    price: 1450000,
    url: "#",
  },
  {
    product: "Cloud VPS Legend",
    diskSpace: 640,
    bandwidth: 6,
    ram: 32,
    cpuCore: 8,
    server: "ID/SG/US",
    setup: "Gratis",
    price: 3700000,
    url: "#",
  },
  {
    product: "Cloud VPS Mythic",
    diskSpace: 1283,
    bandwidth: 10,
    ram: 64,
    cpuCore: 16,
    server: "ID/SG/US",
    setup: "Gratis",
    price: 5500000,
    url: "#",
  },
];

export const domainPriceData = [
  {
    title: ".com",
    transferDomainPrice: 150000,
    renewal: 195000,
    price: 195000,
    currentPrice: 145000,
  },
  {
    title: ".net",
    transferDomainPrice: 185000,
    renewal: 195000,
    price: 195000,
    currentPrice: 185000,
  },
  {
    title: ".org",
    transferDomainPrice: 180000,
    renewal: 185000,
    price: 195000,
    currentPrice: 145000,
  },
  {
    title: ".agency",
    transferDomainPrice: 326000.99,
    renewal: 326000.99,
    price: 0,
    currentPrice: 326000.99,
  },
  {
    title: ".business",
    transferDomainPrice: 326000.99,
    renewal: 326000.99,
    price: 0,
    currentPrice: 326000.99,
  },
  {
    title: ".careers",
    transferDomainPrice: 779000.99,
    renewal: 779000.99,
    price: 0,
    currentPrice: 779000.99,
  },
  {
    title: ".center",
    transferDomainPrice: 326000.99,
    renewal: 326000.99,
    price: 0,
    currentPrice: 326000.99,
  },
  {
    title: ".company",
    transferDomainPrice: 326000.99,
    renewal: 326000.99,
    price: 0,
    currentPrice: 326000.99,
  },
  {
    title: ".enterprises",
    transferDomainPrice: 484000.55,
    renewal: 484000.55,
    price: 0,
    currentPrice: 484000.55,
  },
  {
    title: ".farm",
    transferDomainPrice: 484000.55,
    renewal: 484000.55,
    price: 0,
    currentPrice: 484000.55,
  },
  {
    title: ".foundation",
    transferDomainPrice: 484000.55,
    renewal: 484000.55,
    price: 0,
    currentPrice: 484000.55,
  },
  {
    title: ".gives",
    transferDomainPrice: 484000.75,
    renewal: 484000.75,
    price: 0,
    currentPrice: 484000.75,
  },
  {
    title: ".gmbh",
    transferDomainPrice: 484000.55,
    renewal: 484000.55,
    price: 0,
    currentPrice: 484000.55,
  },
  {
    title: ".industries",
    transferDomainPrice: 484000.55,
    renewal: 484000.55,
    price: 0,
    currentPrice: 484000.55,
  },
  {
    title: ".limited",
    transferDomainPrice: 484000.55,
    renewal: 484000.55,
    price: 0,
    currentPrice: 484000.55,
  },
  {
    title: ".ltd",
    transferDomainPrice: 326000.99,
    renewal: 326000.99,
    price: 0,
    currentPrice: 326000.99,
  },
  {
    title: ".management",
    transferDomainPrice: 326000.99,
    renewal: 326000.99,
    price: 0,
    currentPrice: 326000.99,
  },
  {
    title: ".marketing",
    transferDomainPrice: 484000.55,
    renewal: 484000.55,
    price: 0,
    currentPrice: 484000.55,
  },
  {
    title: ".ngo",
    transferDomainPrice: 701000.15,
    renewal: 701000.15,
    price: 0,
    currentPrice: 701000.15,
  },
  {
    title: ".partners",
    transferDomainPrice: 779000.99,
    renewal: 779000.99,
    price: 0,
    currentPrice: 779000.99,
  },
  {
    title: ".salt",
    transferDomainPrice: 484000.55,
    renewal: 484000.55,
    price: 0,
    currentPrice: 484000.55,
  },
  {
    title: ".solutions",
    transferDomainPrice: 326000.99,
    renewal: 326000.99,
    price: 0,
    currentPrice: 326000.99,
  },
  {
    title: ".studio",
    transferDomainPrice: 386000.03,
    renewal: 386000.03,
    price: 0,
    currentPrice: 386000.03,
  },
  {
    title: ".trade",
    transferDomainPrice: 65000.75,
    renewal: 65000.75,
    price: 0,
    currentPrice: 65000.75,
  },
  {
    title: ".trading",
    transferDomainPrice: 1193000.75,
    renewal: 1193000.75,
    price: 0,
    currentPrice: 1193000.75,
  },
  {
    title: ".id",
    transferDomainPrice: 302400,
    renewal: 302400,
    price: 0,
    currentPrice: 302400,
  },
  {
    title: ".my.id",
    transferDomainPrice: 386000.03,
    renewal: 386000.03,
    price: 0,
    currentPrice: 386000.03,
  },
  {
    title: ".ponpes.id",
    transferDomainPrice: 20000,
    renewal: 20000,
    price: 0,
    currentPrice: 20000,
  },
  {
    title: ".co.id",
    transferDomainPrice: 446400,
    renewal: 446400,
    price: 0,
    currentPrice: 446400,
  },
  {
    title: ".sch.id",
    transferDomainPrice: 86400,
    renewal: 86400,
    price: 0,
    currentPrice: 86400,
  },
  {
    title: ".ac.id",
    transferDomainPrice: 86400,
    renewal: 86400,
    price: 0,
    currentPrice: 86400,
  },
  {
    title: ".or.id",
    transferDomainPrice: 86400,
    renewal: 86400,
    price: 0,
    currentPrice: 86400,
  },
  {
    title: ".biz.id",
    transferDomainPrice: 86400,
    renewal: 86400,
    price: 0,
    currentPrice: 86400,
  },
  {
    title: ".web.id",
    transferDomainPrice: 86400,
    renewal: 86400,
    price: 0,
    currentPrice: 86400,
  },
  {
    title: ".desa.id",
    transferDomainPrice: 50000,
    renewal: 50000,
    price: 0,
    currentPrice: 50000,
  },
  {
    title: ".news",
    transferDomainPrice: 386000.03,
    renewal: 386000.03,
    price: 0,
    currentPrice: 386000.03,
  },
  {
    title: ".xyz",
    transferDomainPrice: 192000,
    renewal: 192000,
    price: 0,
    currentPrice: 192000,
  },
];

export const faqAffiliateData = [
  {
    question: "Apakah ada biaya untuk bergabung ke Program Afiliasi RumahHost?",
    answer: <p className="text-sm md:text-base">Lorem impsum</p>,
  },
  {
    question: "Apa keuntungan Mengikuti Program Afiliasi RumahHost?",
    answer: <p className="text-sm md:text-base">Lorem impsum</p>,
  },
  {
    question: "Kapan Komisi Saya Akan masuk Menjadi Saldo?",
    answer: <p className="text-sm md:text-base">Lorem impsum</p>,
  },
];

export const faqPaymentData = [
  {
    question: "BCA Virtual Account",
    answer: "Lorem impsum",
  },
  {
    question: "BRI Virtual Account",
    answer: "Lorem impsum",
  },
  {
    question: "Mandiri Virtual Account",
    answer: "Lorem impsum",
  },
  {
    question: "CIMB Virtual Account",
    answer: "Lorem impsum",
  },
  {
    question: "Maybank Virtual Account",
    answer: "Lorem impsum",
  },
  {
    question: "Permata Virtual Account",
    answer: "Lorem impsum",
  },
  {
    question: "QRIS (Dana, OVO, GoPay, LinkAja, ShopeePay)",
    answer: "Lorem impsum",
  },
  {
    question: "Alfamart",
    answer: "Lorem impsum",
  },
];

export const cloudHostingSSDSliderData = [
  {
    title: "Starter",
    price: 480000,
    priceDiscount: 36000,
    savingPercentage: 10,
    features: [
      "disk 3 gb",
      "bandwidth unmetered",
      "addon/parker tidak",
      "akun email 3",
      "free ssl",
      "akun ftp 2",
      "subdomain 2",
      "database 2",
      "security360 (opsional)",
    ],
    url: "#",
    isPopular: false,
  },
  {
    title: "medium",
    price: 800000,
    priceDiscount: 48000,
    savingPercentage: 15,
    features: [
      "disk 6 gb",
      "bandwidth unmetered",
      "addon/parker 1/1",
      "akun email 10",
      "free ssl",
      "akun ftp 5",
      "subdomain 5",
      "database 5",
      "security360 (opsional)",
    ],
    url: "#",
    isPopular: true,
  },
  {
    title: "business",
    price: 2400000,
    priceDiscount: 80000,
    savingPercentage: 60,
    features: [
      "disk 15 gb",
      "bandwidth unmetered",
      "addon/parker 2/2",
      "akun email unlimited",
      "free ssl",
      "akun ftp unlimited",
      "subdomain unlimited",
      "database 15",
      "security360 (opsional)",
    ],
    url: "#",
    isPopular: false,
  },
  {
    title: "corporate",
    price: 3800000,
    priceDiscount: 253000,
    savingPercentage: 20,
    features: [
      "disk 25 gb",
      "bandwidth unmetered",
      "addon/parker 3/3",
      "akun email unlimited",
      "free ssl",
      "akun ftp unlimited",
      "subdomain unlimited",
      "database 20",
      "security360 (opsional)",
    ],
    url: "#",
    isPopular: true,
  },
];

export const cloudHostingWordpressSliderData = [
  {
    title: "personal",
    price: 150000,
    features: [
      "disk 9 gb",
      "ram 4 gb",
      "cpu core 2",
      "unmetered bandwidth",
      "subdomain unlimited",
      "akun email unlimited",
      "cloudfire",
    ],
    url: "#",
    isPopular: false,
  },
  {
    title: "small team",
    price: 250000,
    features: [
      "disk 13 gb",
      "ram 6 gb",
      "cpu core 3",
      "unmetered bandwidth",
      "subdomain unlimited",
      "akun email unlimited",
      "cloudfire",
    ],
    url: "#",
    isPopular: true,
  },
  {
    title: "enterprise",
    price: 350000,
    features: [
      "disk 21 gb",
      "ram 10 gb",
      "cpu core 5",
      "unmetered bandwidth",
      "subdomain unlimited",
      "akun email unlimited",
      "cloudfire",
    ],
    url: "#",
    isPopular: false,
  },
];

export const tablePackageDesaDatas = [
  {
    product: "Cloud Desa Basic",
    diskSpace: 1,
    bandwidth: "Unlimited",
    email: 3,
    database: "Unlimited",
    ssl: "Gratis",
    addOn: "Domain 5",
    price: 150000,
    url: "#",
  },
  {
    product: "Cloud Desa Intermediate",
    diskSpace: 3,
    bandwidth: "Unlimited",
    email: 6,
    database: "Unlimited",
    ssl: "Gratis",
    addOn: "Domain 10",
    price: 300000,
    url: "#",
  },
  {
    product: "Cloud Desa Advanced",
    diskSpace: 6,
    bandwidth: "Unlimited",
    email: 9,
    database: "Unlimited",
    ssl: "Gratis",
    addOn: "Domain 15",
    price: 600000,
    url: "#",
  },
  {
    product: "Cloud Desa Bronze",
    diskSpace: 12,
    bandwidth: "Unlimited",
    email: 12,
    database: "Unlimited",
    ssl: "Gratis",
    addOn: "Domain 20",
    price: 1000000,
    url: "#",
  },
  {
    product: "Cloud Desa Gold",
    diskSpace: 20,
    bandwidth: "Unlimited",
    email: "Unlimited",
    database: "Unlimited",
    ssl: "Gratis",
    addOn: "Unlimited",
    price: 3000000,
    url: "#",
  },
];

export const CloudHostingDesaFeaturesData = [
  {
    icon: <Icon icon="gridicons:domains" />,
    title: "Kemudahan Kontrol",
    body: "Kemudahan kontrol web Anda dengan menghadirkan performa yang lebih baik dari panel lainnya.",
  },
  {
    icon: <Icon icon="ic:outline-cloud-done" />,
    title: "SSD Raid 10",
    body: "Teknologi RAID Pure-SSD RAID10 dapat membantu aktifitas website 5X lebih cepat dibandingkan menggunakan HDD biasa.",
  },
  {
    icon: <Icon icon="ant-design:cloud-server-outlined" />,
    title: "CloudLinux",
    body: "Memberikan limitasi serta keamanan tambahan untuk menjaga kestabilan server.",
  },
  {
    icon: <Icon icon="fluent-mdl2:website" />,
    title: "LiteSpeed Web Server",
    body: "Litespeed yang membuat website 100x lebih cepat diakses dari web server lain. Fitur ini sudah terintegrasi dan didapatkan secara gratis untuk Anda.",
  },
  {
    icon: <Icon icon="mingcute:certificate-line" />,
    title: "GRATIS SSL Certificate",
    body: "Setiap pembelian hosting paket apapun gratis SSL Certificate unlimited dan selamanya.",
  },
  {
    icon: <Icon icon="material-symbols:alternate-email-rounded" />,
    title: "Softaculous Auto-Installer",
    body: "Kemudahan instalasi berbagai macam CMS seperti WordPress hanya dalam beberapa klik",
  },
];

export const mediaPublicationData = [
  {
    title:
      "Dukung UMKM, Rumah Host Luncurkan Produk Baru Bernama Minion Hosting",
    cover: BgMediaPublication,
    date: "2022/01/04",
    url: "#",
    content:
      "SuaraSulsel.id Perusahaan penyedia layanan Cloud Web Hosting Indonesia, PT Xeon Technology Indonesia atau Rumah Host hadir memberi layanan baru bagi pelanggannya.",
  },
  {
    title:
      "Dukung UMKM, Rumah Host Luncurkan Produk Baru Bernama Minion Hosting",
    cover: BgMediaPublication,
    date: "2022/01/04",
    url: "#",
    content:
      "SuaraSulsel.id Perusahaan penyedia layanan Cloud Web Hosting Indonesia, PT Xeon Technology Indonesia atau Rumah Host hadir memberi layanan baru bagi pelanggannya.",
  },
  {
    title:
      "Dukung UMKM, Rumah Host Luncurkan Produk Baru Bernama Minion Hosting",
    cover: BgMediaPublication,
    date: "2022/01/04",
    url: "#",
    content:
      "SuaraSulsel.id Perusahaan penyedia layanan Cloud Web Hosting Indonesia, PT Xeon Technology Indonesia atau Rumah Host hadir memberi layanan baru bagi pelanggannya.",
  },
  {
    title:
      "Dukung UMKM, Rumah Host Luncurkan Produk Baru Bernama Minion Hosting",
    cover: BgMediaPublication,
    date: "2022/01/04",
    url: "#",
    content:
      "SuaraSulsel.id Perusahaan penyedia layanan Cloud Web Hosting Indonesia, PT Xeon Technology Indonesia atau Rumah Host hadir memberi layanan baru bagi pelanggannya.",
  },
  {
    title:
      "Dukung UMKM, Rumah Host Luncurkan Produk Baru Bernama Minion Hosting",
    cover: BgMediaPublication,
    date: "2022/01/04",
    url: "#",
    content:
      "SuaraSulsel.id Perusahaan penyedia layanan Cloud Web Hosting Indonesia, PT Xeon Technology Indonesia atau Rumah Host hadir memberi layanan baru bagi pelanggannya.",
  },
  {
    title:
      "Dukung UMKM, Rumah Host Luncurkan Produk Baru Bernama Minion Hosting",
    cover: BgMediaPublication,
    date: "2022/01/04",
    url: "#",
    content:
      "SuaraSulsel.id Perusahaan penyedia layanan Cloud Web Hosting Indonesia, PT Xeon Technology Indonesia atau Rumah Host hadir memberi layanan baru bagi pelanggannya.",
  },
];

export const discountCardData = [
  {
    discountPerc: 35,
    title: "DISKON 35% UNTUK SEMUA JENIS DOMAIN",
    startAt: "2023/10/23",
    endAt: "2023/11/21",
    code: "RHALLDOMAIN",
  },
  {
    discountPerc: 35,
    title: "DISKON 35% UNTUK SEMUA JENIS DOMAIN",
    startAt: "2023/10/23",
    endAt: "2023/11/21",
    code: "RHALLDOMAIN",
  },
  {
    discountPerc: 35,
    title: "DISKON 35% UNTUK SEMUA JENIS DOMAIN",
    startAt: "2023/10/23",
    endAt: "2023/11/21",
    code: "RHALLDOMAIN",
  },
];

export const resellerHostingCardData = [
  {
    isPopular: false,
    title: "RESELLER JUNIOR",
    currentPrice: 84000,
    price: 240000,
    features: ["25 cPanel Accounts", "30 GB SSD"],
    buy: 84000,
  },
  {
    isPopular: true,
    title: "RESELLER EXANIOR",
    currentPrice: 152000,
    price: 240000,
    features: ["25 cPanel Accounts", "30 GB SSD", "WHMCS Starter"],
    buy: 152000,
  },
  {
    isPopular: false,
    title: "RESELLER SUPERIOR",
    currentPrice: 252000,
    price: 408000,
    features: ["25 cPanel Accounts", "30 GB SSD"],
    buy: 252000,
  },
];

export const resellerHostingFAQData = [
  { question: "Apa itu reseller hosting?", answer: "" },
  { question: "Apa itu WHM?", answer: "" },
  { question: "Bagaimana cara memulai reselling?", answer: "" },
  { question: "Bagaimana cara mendapatkan untung?", answer: "" },
  {
    question:
      "Siapa yang akan menyediakan bantuan ke klien - saya atau RumahHost?",
    answer: "",
  },
  {
    question:
      "Jika bisnis saya tumbuh, bisakah saya mengupgrade paket kapan pun?",
    answer: "",
  },
];

export const emailHostingPackagesSliderData = [
  {
    isPopular: false,
    title: "BUSINESS JUNIOR",
    price: 31000,
    currentPrice: 14000,
    features: [
      "Kapasitas Storage Email 10 GB",
      "10 Forwarding Rules",
      "50 Email Alias",
      "Antivirus Check",
      "Advanced anti-spam",
      "Infrastruktur Berbasis Cloud",
    ],
    buy: 84000,
    promoPerc: 55,
    saved: 17000,
    url: "#",
  },
  {
    isPopular: true,
    title: "BUSINESS EXANIOR",
    price: 50000,
    currentPrice: 35000,
    features: [
      "Kapasitas Storage Email 50 GB",
      "50 Forwarding Rules",
      "50 Email Alias",
      "Antivirus Check",
      "Advanced anti-spam",
      "Infrastruktur Berbasis Cloud",
    ],
    buy: 84000,
    promoPerc: 29,
    saved: 15000,
    url: "#",
  },
  {
    isPopular: false,
    title: "BUSINESS SUPERIOR",
    price: 75000,
    currentPrice: 59000,
    features: [
      "Kapasitas Storage Email 10 GB",
      "10 Forwarding Rules",
      "50 Email Alias",
      "Antivirus Check",
      "Advanced anti-spam",
      "Infrastruktur Berbasis Cloud",
    ],
    buy: 84000,
    promoPerc: 20,
    saved: 16000,
    url: "#",
  },
];

export const emailHostingMainFeatures = [
  {
    icon: (
      <Icon
        icon="fluent:panel-left-header-key-20-filled"
        width={36}
        height={36}
      />
    ),
    title: "Control Panel Sederhana",
    body: "Mulai dari konfigurasi perangkat hingga pengaturan DNS, atur semua kebutuhan email bisnis Anda dari satu panel intuitif Hostinger. Gunakan aplikasi webmail kami untuk kirim pesan, atur mailbox dan email, dan tambah kontak baru.",
  },
  {
    icon: <Icon icon="mynaui:config" width={36} height={36} />,
    title: "Konfigurasi Otomatis",
    body: "Server email mendukung IMAP, POP3, dan SMTP. Dengan fitur konfigurasi otomatis, email hosting dapat dihubungkan ke Apple Mail, Outlook, Thunderbird, atau aplikasi lainnya di perangkat desktop atau mobile.",
  },
  {
    icon: <Icon icon="tabler:message-bolt" width={36} height={36} />,
    title: "Balas Pesan Otomatis",
    body: "Aktifkan fitur auto reply dan balas pesan yang masuk di luar jam operasional. Alihkan pesan masuk ke beberapa akun dengan email forwarding dan alias. Aktifkan catch-all untuk menerima pesan yang terkirim ke alamat yang salah ketik.",
  },
  {
    icon: (
      <Icon icon="icon-park-outline:message-privacy" width={36} height={36} />
    ),
    title: "Aman dan Bebas Spam",
    body: "Layanan kami menggunakan DKIM, DMARC, dan SPF untuk menghindari penyalahgunaan trafik email keluar. Kami juga menyaring isi pesan dari spam dan virus serta mengamankan email yang dikirim di satu domain yang sama.",
  },
  {
    icon: (
      <Icon icon="material-symbols:list-alt-outline" width={36} height={36} />
    ),
    title: "Log Akses dan Aktivitas Email",
    body: "Lihat semua aktivitas di akun email dengan fitur Log Akses dan Aktivitas Email. Dapatkan informasi percobaan login, tindakan di setiap sesi login, dan pesan masuk dan keluar. Cegah aktivitas ilegal dan berbahaya.",
  },
];

export const emailHostingFAQData = [
  { question: "Apa itu Email Hosting?", answer: "" },
  { question: "Mengapa saya perlu menggunakan email hosting?", answer: "" },
  {
    question:
      "Apa Keuntungan menggunakan email bisnis dibandingkan email pribadi?",
    answer: "",
  },
  {
    question: "Bisakah saya memindahkan email ke RumahHost dari layanan lain?",
    answer: "",
  },
  { question: "Paket Email apa yang tepat untuk Anda?", answer: "" },
];

export const FeatureHostingData = [
  {
    icon: <Icon icon="iconoir:www" />,
    title: "Domain Gratis Satu Tahun",
    desc: "Dapat domain gratis 1 tahun dengan ekstensi yang sudah di tetapkan.",
  },
  {
    icon: <Icon icon="mdi:server-shield" />,
    title: "Sertifikat SSL Gratis",
    desc: "Membeli hosting minion sudah termasuk gratis SSL, tentunya dapat menghemat biaya tahunan kamu",
  },
  {
    icon: <Icon icon="bi:speedometer" />,
    title: "Up to 80x Faster",
    desc: "Dirancang untuk membuat website memiliki performa yang baik, 80x lebih cepat di akses dengan dukungan teknology terbarukan.",
  },
  {
    icon: <Icon icon="mdi:database" />,
    title: "Unlimited Database",
    desc: "kamu gak usah khawatir lagi dengan database yang selalu dibatasi, kini kamu bisa dapat unlimited database semua jenis paket minion hosting !",
  },
  {
    icon: <Icon icon="clarity:backup-line" />,
    title: "Backup Data Mingguan",
    desc: "Fitur backup mingguan ke server khusus untuk menjaga keamanan data.",
  },
  {
    icon: <Icon icon="carbon:cics-program" />,
    title: "Softaculous Auto-Installer",
    desc: "Kemudahan instalasi berbagai macam CMS seperti WordPress hanya dalam beberapa klik.",
  },
  {
    icon: <Icon icon="mdi:gear-outline" />,
    title: "CloudLinux",
    desc: "Memberikan limitasi serta keamanan tambahan untuk menjaga kestabilan server.",
  },
];

export const FeatureSSDData = [
  {
    icon: <Icon icon="iconoir:www" />,
    title: "Domain Gratis Satu Tahun",
    desc: "Dapat domain gratis 1 tahun dengan ekstensi yang sudah di tetapkan.",
  },
  {
    icon: <Icon icon="mdi:server-shield" />,
    title: "Sertifikat SSL Gratis",
    desc: "Membeli hosting minion sudah termasuk gratis SSL, tentunya dapat menghemat biaya tahunan kamu",
  },
  {
    icon: <Icon icon="bi:speedometer" />,
    title: "Up to 80x Faster",
    desc: "Dirancang untuk membuat website memiliki performa yang baik, 80x lebih cepat di akses dengan dukungan teknology terbarukan.",
  },
  {
    icon: <Icon icon="mdi:database" />,
    title: "Unlimited Database",
    desc: "kamu gak usah khawatir lagi dengan database yang selalu dibatasi, kini kamu bisa dapat unlimited database semua jenis paket minion hosting !",
  },
  {
    icon: <Icon icon="clarity:backup-line" />,
    title: "Backup Data Mingguan",
    desc: "Fitur backup mingguan ke server khusus untuk menjaga keamanan data.",
  },
  {
    icon: <Icon icon="carbon:cics-program" />,
    title: "Softaculous Auto-Installer",
    desc: "Kemudahan instalasi berbagai macam CMS seperti WordPress hanya dalam beberapa klik.",
  },
  {
    icon: <Icon icon="mdi:gear-outline" />,
    title: "CloudLinux",
    desc: "Memberikan limitasi serta keamanan tambahan untuk menjaga kestabilan server.",
  },
];

export const FeatureWordpressData = [
  {
    icon: <Icon icon="iconoir:www" />,
    title: "Domain Gratis Satu Tahun",
    desc: "Dapat domain gratis 1 tahun dengan ekstensi yang sudah di tetapkan.",
  },
  {
    icon: <Icon icon="mdi:server-shield" />,
    title: "Sertifikat SSL Gratis",
    desc: "Membeli hosting minion sudah termasuk gratis SSL, tentunya dapat menghemat biaya tahunan kamu",
  },
  {
    icon: <Icon icon="bi:speedometer" />,
    title: "Up to 80x Faster",
    desc: "Dirancang untuk membuat website memiliki performa yang baik, 80x lebih cepat di akses dengan dukungan teknology terbarukan.",
  },
  {
    icon: <Icon icon="mdi:database" />,
    title: "Unlimited Database",
    desc: "kamu gak usah khawatir lagi dengan database yang selalu dibatasi, kini kamu bisa dapat unlimited database semua jenis paket minion hosting !",
  },
  {
    icon: <Icon icon="clarity:backup-line" />,
    title: "Backup Data Mingguan",
    desc: "Fitur backup mingguan ke server khusus untuk menjaga keamanan data.",
  },
  {
    icon: <Icon icon="carbon:cics-program" />,
    title: "Softaculous Auto-Installer",
    desc: "Kemudahan instalasi berbagai macam CMS seperti WordPress hanya dalam beberapa klik.",
  },
  {
    icon: <Icon icon="mdi:gear-outline" />,
    title: "CloudLinux",
    desc: "Memberikan limitasi serta keamanan tambahan untuk menjaga kestabilan server.",
  },
];

export const FeatureVPSData = [
  {
    icon: <Icon icon="iconoir:www" />,
    title: "Domain Gratis Satu Tahun",
    desc: "Dapat domain gratis 1 tahun dengan ekstensi yang sudah di tetapkan.",
  },
  {
    icon: <Icon icon="mdi:server-shield" />,
    title: "Sertifikat SSL Gratis",
    desc: "Membeli hosting minion sudah termasuk gratis SSL, tentunya dapat menghemat biaya tahunan kamu",
  },
  {
    icon: <Icon icon="bi:speedometer" />,
    title: "Up to 80x Faster",
    desc: "Dirancang untuk membuat website memiliki performa yang baik, 80x lebih cepat di akses dengan dukungan teknology terbarukan.",
  },
  {
    icon: <Icon icon="mdi:database" />,
    title: "Unlimited Database",
    desc: "kamu gak usah khawatir lagi dengan database yang selalu dibatasi, kini kamu bisa dapat unlimited database semua jenis paket minion hosting !",
  },
  {
    icon: <Icon icon="clarity:backup-line" />,
    title: "Backup Data Mingguan",
    desc: "Fitur backup mingguan ke server khusus untuk menjaga keamanan data.",
  },
  {
    icon: <Icon icon="carbon:cics-program" />,
    title: "Softaculous Auto-Installer",
    desc: "Kemudahan instalasi berbagai macam CMS seperti WordPress hanya dalam beberapa klik.",
  },
  {
    icon: <Icon icon="mdi:gear-outline" />,
    title: "CloudLinux",
    desc: "Memberikan limitasi serta keamanan tambahan untuk menjaga kestabilan server.",
  },
];
