import Link from "next/link";

export const metadata = {
  title: "Master Service Agreement",
};

function MasterServiceAgreement() {
  return (
    <section className="mb-20 mt-6">
      <div className="container">
        <div className="mb-4 flex flex-col gap-4 text-xs md:text-base">
          <p>
            Pelanggan atau calon Pelanggan{" "}
            <Link href="/" className="text-secondary">
              RumahHost.com
            </Link>{" "}
            wajib membaca dan menyetujui Master Service Agreement RumahHost
            sebelum memesan, dan tidak dapat melanjutkan pemesanan jika tidak
            setuju dengan Master Service Agreement RumahHost beserta turunannya.
            Master Service Agreement ini berisikan Kontrak antara RumahHost
            Cloud Server Indonesia, Perusahaan Web Hosting yang berkedudukan di
            Bandung, Indonesia, dan Pelanggan yang menyewa layanan di{" "}
            <Link href="/" className="text-secondary">
              RumahHost
            </Link>
            .
          </p>
          <p>
            Untuk menghindari perselisihan yang mungkin terjadi dikemudian hari,
            maka dengan membaca dan memahami Master Service Agreement ini,{" "}
            <Link href="/" className="text-secondary">
              RumahHost
            </Link>{" "}
            dan Pelanggan menyatakan telah sepakat untuk melaksanakan dan
            mensetujui seluruh dari isi perjanjian ini atas peraturan yang
            disebutkan di Halaman ini, termasuk kedalam rujukan detail Seperti
            Service Level Agreement, Term Of Service, Acceptable Use Policy,
            Privacy Policy, Refund Policy, Migrasi Pelanggan, Pembatasan
            Tanggung Jawab & Layanan, Service Level Agreement WordPress Hosting,
            Service Level Agreement DiegoVPN, Service Level Agreement KVM SSD,
            Product Life Cycle Policy dan Aturan Lain-Lain.
          </p>
          <p>
            Segala Urusan yang terkait dengan Legal, Abuse dan MSA, dapat
            ditujukan kepada :
          </p>
        </div>
        <div className="mb-4 flex flex-col gap-4 text-xs md:text-sm">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            <h6 className="text-center text-sm font-medium md:text-left md:text-base">
              Email Informasi Umum
            </h6>
            <p className="block w-full rounded-md bg-[#F5F8FA] px-4 py-2 text-[#5E6278]">
              info@RumahHost.com
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            <h6 className="text-center text-sm font-medium md:text-left md:text-base">
              Email informasi Tagihan & Pembayaran
            </h6>
            <p className="block w-full rounded-md bg-[#F5F8FA] px-4 py-2 text-[#5E6278]">
              billing@RumahHost.com
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            <h6 className="text-center text-sm font-medium md:text-left md:text-base">
              Email informasi All Produk
            </h6>
            <p className="block w-full rounded-md bg-[#F5F8FA] px-4 py-2 text-[#5E6278]">
              Sales@rumahhost.com
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            <h6 className="text-center text-sm font-medium md:text-left md:text-base">
              Bantuan Layanan Teknis 24 jam
            </h6>
            <p className="block w-full rounded-md bg-[#F5F8FA] px-4 py-2 text-[#5E6278]">
              Melalui support ticket setelah login di{" "}
              <Link href="www.RumahHost.com" className="text-secondary">
                www.RumahHost.com
              </Link>
              , atau melalui Nomor Khusus Technical Support RumahHost.com, dan
              Live Chat Khusus Teknis{" "}
              <Link
                href="mailto:Technical@rumahhost.com"
                className="text-secondary"
              >
                Technical@rumahhost.com
              </Link>
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            <h6 className="text-center text-sm font-medium md:text-left md:text-base">
              Bantuan Teknis Tidak diberikan melalui
            </h6>
            <p className="block w-full rounded-md bg-[#F5F8FA] px-4 py-2 text-[#5E6278]">
              Whatsapp / Telegram / SMS
            </p>
          </div>
        </div>
        <div className="mb-4 flex flex-col gap-4 text-xs md:text-base">
          <p>
            Penggunaan Whatsapp / Telegram / Telepon / SMS, hanya untuk
            keperluan sales / billing / administratif, atau pemberitahuan ada
            support ticket yang bersifat segera.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MasterServiceAgreement;
