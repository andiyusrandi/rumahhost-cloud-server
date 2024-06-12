import PoliciesAgreementsListofContent from "@/components/PoliciesAgreementsListofContent";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
};

const listContent = [
  { title: "Jenis Data", url: "#jenis-data" },
  { title: "Keamanan Data Pribadi", url: "#keamanan-pribady" },
  { title: "Keamanan Data Kartu Kredit", url: "#keamanan-kartu-kredit" },
  { title: "Penggunaan Data Pelanggan", url: "#penggunaan-data" },
  { title: "Jaminan Perlindungan Data", url: "#jaminan" },
];

function PrivacyPolicy() {
  return (
    <section className="mb-20 mt-6">
      <div className="container flex flex-col lg:flex-row-reverse lg:gap-4">
        <PoliciesAgreementsListofContent datas={listContent} />

        <div className="mt-6 flex flex-1 flex-col gap-3 text-xs md:text-sm">
          <div id="jenis-data">
            <h3 className="mb-2 text-sm font-medium md:text-xl">
              Jenis data yang dikumpulkan RumahHost
            </h3>
            <div className="flex flex-col gap-2 text-[#212121]">
              <p>
                RumahHost mengumpulkan data terkait pelanggan RumahHost dengan
                cara berikut:
              </p>
              <ul className="ml-4 list-outside list-disc">
                <li>
                  Pendaftaran Online dan juga Formulir Offline yang disediakan
                </li>
                <li>
                  Transaksi dan Permintaan kepada Sales, Billing, Abuse, dan
                  Technical Support
                </li>
                <li>
                  Komunikasi Online Pelanggan kepada RumahHost dan Interaksinya
                </li>
                <li>
                  Komunikasi Offline Pelanggan kepada RumahHost dan Interaksinya
                </li>
                <li>
                  Identitas Resmi Pelanggan / Perusahaan Pelangan berbentuk KTP
                  / SIM / Passport, SIUP / NPWP / TDP, Jika diperlukan oleh
                  Pihak Ketiga dan RumahHost
                </li>
                <li>
                  Surat Pernyataan, Surat Permohonan, Surat Keterangan, syarat
                  pendaftaran, dan hal terkait baik itu offline maupun online
                </li>
                <li>
                  Data asli untuk pendaftaran nama domain dan layanan RumahHost.
                </li>
              </ul>
              <p>
                Data yang dimasukkan ketika pendaftaran oleh Pelanggan harus
                merupakan data yang benar. RumahHost akan mempergunakan data
                tersebut untuk pendaftaran, dan berkomunikasi kepada pelanggan
                dengan cara apapun. <br />
                RumahHost berhak untuk menggunakan data pelanggan untuk
                keperluan internal RumahHost dalam meningkatkan kualitas
                pelayanan kepada pelanggan.
              </p>
            </div>
          </div>
          <div id="keamanan-pribady">
            <h3 className="mb-2 text-sm font-medium md:text-xl">
              Keamanan Data Pribadi Pelanggan RumahHost
            </h3>
            <ul className="ml-4 list-outside list-disc">
              <li>
                Tidak boleh menggunakan 20% sumber daya server lebih dari 90
                detik. Penyebabnya antaralain, CGI Script, FTP, HTTP, dan
                lain-lain.
              </li>
              <li>
                Tidak boleh menjalankan aplikasi chatting realtime yang
                menggunakan sumber daya server namun penggunaan remote-chating
                diperbolehkan (humanclick.com, liveperson.com, dan
                livehumanhelp.com).
              </li>
              <li>
                Tidak boleh menjalankan bit torrent, rapidleech atau sejenisnya.
              </li>
              <li>
                Tidak boleh menjalankan game online seperti counter-strike,
                half-life, battlefield1492, dan lain-lain.
              </li>
              <li>
                Aplikasi script yang tidak boleh dijalankan di server RumahHost
                antara lain:
              </li>
              <li>Anonymizer</li>
              <li>CGI/Perl version of YABB</li>
              <li>Chat room/IRC scripts</li>
              <li>FormMail (versions prior to 1.91)</li>
              <li>Ikonboard</li>
              <li>Proxy scripts</li>
              <li>phpShell dan script yang menggunakan command execution</li>
              <li>PsyBNC, Eggdrop, mailbom, dan sejenisnya</li>
              <li>Telnet Scripts</li>
              <li>UltimateBBS</li>
              <li>Image Hosting/File Hosting/File Storage</li>
              <li>
                Jika RumahHost menemukan pelanggaran penggunaan sumber daya,
                RumahHost akan menonaktifkan account pelanggan tanpa
                pemberitahuan.
              </li>
            </ul>
          </div>
          <div id="keamanan-kartu-kredit">
            <h3 className="mb-2 text-sm font-medium md:text-xl">
              Keamanan Data Kartu Kredit Pelanggan RumahHost
            </h3>
            <p className="text-[#212121]">
              RumahHost menjamin keamanan data kartu kredit pelanggan yang
              dimasukkan kedalam website Pemesanan RumahHost yaitu{" "}
              <Link
                href="https://portal.RumahHost.com"
                className="text-blue-500"
              >
                https://portal.RumahHost.com
              </Link>
              ,{" "}
              <Link
                href="https://www.payment2go.com/payment/PaymentWindow.jsp"
                className="text-blue-500"
              >
                https://www.payment2go.com/payment/PaymentWindow.jsp
              </Link>{" "}
              dan{" "}
              <Link
                href="https://www.nicepay.co.id/nicepay/api/orderInquiry.do"
                className="text-blue-500"
              >
                https://www.nicepay.co.id/nicepay/api/orderInquiry.do
              </Link>{" "}
              pastikan url telah benar sebelum memasukan detail informasi kartu
              kredit. RumahHost tidak menyimpan data kartu kredit milik
              pelanggan.
            </p>
          </div>
          <div id="penggunaan-data">
            <h3 className="mb-2 text-sm font-medium md:text-xl">
              Penggunaan Data Pelanggan diluar RumahHost
            </h3>
            <p className="text-[#212121]">
              Pelanggan menyetujui jika dikemudian hari RumahHost diminta
              memberikan informasi kontak Pelanggan kepada lembaga / instansi
              resmi dari kepolisian, pemerintahan atau kenegaraan baik itu
              tingkat nasional maupun internasional. Diluar kebutuhan ini, maka
              informasi Pelanggan akan dijamin kerahasiannya oleh RumahHost.com
              agar tidak disalah gunakan ( dan dienkripsi), terkecuali data
              pribadi Pelanggan yang tampil dalam whois information, jika data
              ini disimpan / dicache atau ditangkap oleh situs lain, maka hal
              ini diluar tanggungan RumahHost. Jika Pelanggan tidak ingin data
              ini dipublikasikan, harap segera merequest privacy protect
              /masking (Rp.50.000 (belum termasuk ppn)) untuk whois domain
              (tidak tersedia di semua extensi domain) pada saat memesan /
              mengaktifkan pesanan domain tersebut.
            </p>
          </div>
          <div id="jaminan">
            <h3 className="mb-2 text-sm font-medium md:text-xl">
              Jaminan Perlindungan Data Hosting Pelanggan
            </h3>
            <ol className="ml-4 list-outside list-decimal text-[#212121]">
              <li>
                RumahHost hanya menyediakan sarana prasarana untuk peletakan
                content milik pelanggan.
              </li>
              <li>
                RumahHost tidak mencampuri atau membuat atau mengubah content
                milik pelanggan tanpa persetujuan pelanggan sebelumnya.
              </li>
              <li>
                Terkecuali terdapat tindakan darurat yang membuat RumahHost
                harus mengubah / mengedit / menghapus content milik pelanggan -
                dalam hal ini pelanggan akan dinotifikasi mengenai perubahannya.
              </li>
              <li>
                RumahHost menjaga kerahasiaan data pelanggan, termasuk nomor
                telepon dan juga isi dari website pelanggan, terkecuali jika
                pelanggan yang membukanya kepada publik, atau meminta untuk
                dipublikasikan. Pada Saat Pendaftaran, Pelanggan Wajib
                menggunakan data Asli dan dapat meminta untuk menutupi data
                informasi pada nama domain apabila diizinkan oleh registry.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
