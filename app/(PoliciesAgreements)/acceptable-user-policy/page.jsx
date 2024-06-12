import PoliciesAgreementsListofContent from "@/components/PoliciesAgreementsListofContent";
import Link from "next/link";

export const metadata = {
  title: "Acceptable User Policy",
};

const listContent = [
  { title: "isi website", url: "#isi-website" },
  { title: "penggunaan sumber daya", url: "#sumber-daya" },
  { title: "Lalu Lintas Data", url: "#lalu-lintas-data" },
  { title: "Penggunaan Fasilitas E-mail", url: "#email" },
  {
    title: "Penggunaan Resource Cloud Hosting",
    url: "#resource-cloud-hosting",
  },
  { title: "Penggunaan Layanan VPS/Cloud Server", url: "#layanan-vps" },
  {
    title: "Penggunaan Layanan Flockmail/Titan Email",
    url: "#layanan-flockmail",
  },
  { title: "Penanganan Pelanggaran/Abuse", url: "#pelanggaran" },
  { title: "Disclaimer", url: "#disclaimer" },
];

export default function AcceptableUserPolicy() {
  return (
    <section className="mb-20 mt-6">
      <div className="container flex flex-col lg:flex-row-reverse lg:gap-4">
        <PoliciesAgreementsListofContent datas={listContent} />

        <div className="mt-6 flex flex-1 flex-col gap-3">
          <div id="isi-website" className="text-xs md:text-sm">
            <h3 className="mb-2 text-sm font-medium md:text-xl">Isi Website</h3>
            <ul className="ml-4 list-outside list-disc text-[#212121]">
              <li>
                Semua layanan yang disediakan oleh RumahHost hanya digunakan
                untuk tujuan yang sah menurut hukum.
              </li>
              <li>
                Semua isi atau link yang melanggar hukum tidak diperkenankan,
                termasuk pelanggaran hak cipta, merek dagang, SARA, dan
                pornografi.
              </li>
              <li>
                Semua isi yang dapat mengganggu kinerja server RumahHost tidak
                diperkenankan.
              </li>
              <li>
                Semua script yang berbentuk Phising akan langsung kami
                Terminated.
              </li>
              <li>
                Merusak, memasuki, mengcopy, mencoba mengganti data dan sistem
                yang berada di server RumahHost yang bukan merupakan hak dari
                pelanggan yang bersangkutan.
              </li>
              <li>
                Menjual kembali web space, free e-mail
                forward/POP3/Autoresponder, subdomains, dan lain-lain ke pihak
                lain.
              </li>
              <li>
                Segala aktivitas yang tidak sah menurut hukum atau merugikan
                pihak ketiga yang menggunakan fasilitas RumahHost di luar
                tanggung jawab RumahHost. RumahHost dibebaskan dari tuntutan
                pihak ketiga atas terjadinya kerugian yang timbul akibat hal
                ini.
              </li>
              <li>
                Apabila anda melanggar salah satu dari peraturan yang ada maka
                RumahHost berhak menutup layanan secara sepihak. Dan tidak
                melakukan pengembalian dana yang telah dibayarkan.
              </li>
              <li>
                RumahHost tidak bertanggung jawab dan dibebaskan atas hilangnya
                atau rusaknya data-data pelanggannya.
              </li>
              <li>Contoh isi atau link yang dilarang</li>
              <li>IRC Bots</li>
              <li>Situs Warez </li>
              <li>Software Bajakan </li>
              <li>Situs SARA </li>
              <li>Situs Hacking dan arsipnya</li>
              <li>Emulator/ROMS</li>
              <li>Realtime chat application.</li>
              <li>Facebook Bot. </li>
              <li>Twitter Bot/Auto Followers.</li>
              <li>
                Script yang memerlukan memori besar sehingga mengganggu kinerja
                server secara keseluruhan.
              </li>
            </ul>
          </div>
          <div id="sumber-daya" className="text-xs md:text-sm">
            <h3 className="mb-2 text-sm font-medium md:text-xl">
              Penggunaan Sumber Daya
            </h3>
            <ul className="ml-4 list-outside list-disc text-[#212121]">
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
          <div id="lalu-lintas-data" className="text-xs md:text-sm">
            <h3 className="mb-2 text-sm font-medium md:text-xl">
              Lalu Lintas Data
            </h3>
            <div className="flex flex-col gap-2">
              <ul className="ml-4 list-outside list-disc text-[#212121]">
                <li>
                  RumahHost menyediakan lalu lintas data sesuai dengan batas
                  yang telah ditentukan. Jika anda telah menggunakan lalu lintas
                  data melampaui batas yang telah ditentukan maka account anda
                  akan dinonaktifkan. Dan anda akan disarankan untuk mengupgrade
                  ke paket hosting yang lebih tinggi.
                </li>
                <li>Lalu lintas data di RumahHost tidak bersifat akumulasi.</li>
                <li>
                  RumahHost tidak bertanggung jawab dan dibebaskan dari tuntutan
                  ganti rugi atas kesalahan pengiriman data atau lambatnya lalu
                  lintas data.
                </li>
              </ul>
              <p>
                Pada layanan Unlimited Hosting, berlaku kebijakan penggunaan
                sumber daya sebagai berikut:
              </p>
              <ol className="ml-4 list-decimal">
                <li>
                  Unlimited Hosting tidak boleh digunakan untuk penyediaan
                  layanan berikut:
                </li>
                <li>Streaming Video</li>
                <li>Online Storage* (hanya diijinkan hingga 6GB)</li>
                <li>File Sharing</li>
                <li>Image Hosting</li>
              </ol>
              <p>
                *Definisi “Online Storage” yang DIIJINKAN dalam batas 6GB adalah
                aktivitas penyimpanan file-file yang tidak menjadi komponen
                utama dalam menampilkan website dan atau ditujukan untuk
                didownload.
                <br />
                Jenis file yang masuk kategori ini adalah:
              </p>
              <ol className="ml-4 list-decimal">
                <li>
                  File .pdf, .doc, .xls, dan berbagai ekstensi file lainnya;
                </li>
                <li>
                  File log atau jenis file lain yang ter-generate otomatis dari
                  website;
                </li>
                <li>
                  File-file yang disubmit oleh pengunjung, misalnya file dari
                  halaman form
                </li>
                <li>
                  Penerimaan dokumen, tugas dan dokumen e-learning, file untuk
                  sistem informasi tertentu
                </li>
              </ol>
              <p>
                Jika memang website / sistem informasi Anda butuh untuk
                menyimpan file-file jenis di atas, maka kami sarankan Anda
                menggunakan layanan Cloud Server yang memiliki fitur dedicated
                space yang juga dijamin backupnya.
              </p>
              <ol className="ml-4 list-decimal">
                <li>
                  Pelanggan tidak diperkenankan untuk menyimpan file yang
                  berukuran lebih dari 1GB oleh karena itu RumahHost berhak
                  menghapus file tersebut tanpa adanya jaminan restore
                  (dikembalikan dari backup). Email notifikasi akan kami
                  kirimkan setiap kali penghapusan dilakukan.
                </li>
                <li>
                  Batas inodes dalam satu akun hosting adalah 250.000 inodes.
                  Jika inodes sudah mencapai 75.000, maka akun hosting tidak
                  akan di-backup sehingga pelanggan dapat kehilangan data
                  apabila terjadi kerusakan pada server dan RumahHost tidak akan
                  bertanggungjawab atas hal tersebut.{" "}
                </li>
                <li>
                  Backup mingguan hanya akan dijalankan pada akun yang
                  menggunakan disk space lebih kecil dari 5 GB dan atau inodes
                  lebih kecil dari 75.000.{" "}
                </li>
                <li>
                  Total penggunaan email pada satu akun hosting tidak
                  diperkenankan melebihi 10 GB.{" "}
                </li>
                <li>
                  RumahHost berhak untuk menghentikan layanan untuk akun hosting
                  yang penggunaan spacenya di atas ketentuan tersebut dengan
                  memberikan kesempatan 30 hari kepada pelanggan untuk
                  mengupgrade ke layanan Cloud Hosting, VPS, dan Dedicated
                  Server, atau memindahkan akun hostingnya ke penyedia layanan
                  lain. Dalam hal ini RumahHost akan mengembalikan sisa dana
                  yang dihitung secara pro-rata setelah dikurangi biaya domain
                  dan biaya lain yang mungkin menjadi komponen biaya yang telah
                  dibayarkan pelanggan.
                </li>
              </ol>
            </div>
          </div>
          <div id="email" className="text-xs md:text-sm">
            <h3 className="mb-2 text-sm font-medium md:text-xl">
              Penggunaan Fasilitas E-mail
            </h3>
            <ol className="ml-4 list-outside list-decimal text-[#212121]">
              <li>
                RumahHost tidak bertanggung jawab atas email yang dapat
                menimbulkan kebencian, email yang dikirim berulang-ulang (mail
                bom) dan spam.
              </li>
              <li>
                RumahHostt tidak memberikan toleransi atas email yang dapat
                menimbulkan kebencian, email yang dikirim berulang-ulang (mail
                bom) dan spam.
              </li>
              <li>
                RumahHost akan mengambil tindakan menutup atau menonaktifkan
                account pelanggan yang terbukti melakukan pelanggaran seperti di
                atas secara sepihak. Dan tidak melakukan pengembalian dana yang
                telah dibayarkan.
              </li>
              <li>
                RumahHost tidak menganjurkan Akun Cloud Hosting SSD digunakan
                sebagai Mail Hosting dan Dakses dalam jumlah yang besar, karena
                akan membebani Load Server . Jika ingin menggunakan Mail secara
                maksimal kami anjurkan menggunakan Google Apps atau menggunakan
                Mail Hosting khusus.
              </li>
            </ol>
          </div>
          <div id="resource-cloud-hosting" className="text-xs md:text-sm">
            <h3 className="mb-2 text-sm font-medium md:text-xl">
              Penggunaan Resource Cloud Hosting
            </h3>
            <ol className="ml-4 list-outside list-decimal text-[#212121]">
              <li>
                RumahHost tidak bertanggung jawab atas email yang dapat
                menimbulkan kebencian, email yang dikirim berulang-ulang (mail
                bom) dan spam.
              </li>
              <li>
                RumahHostt tidak memberikan toleransi atas email yang dapat
                menimbulkan kebencian, email yang dikirim berulang-ulang (mail
                bom) dan spam.
              </li>
              <li>
                RumahHost akan mengambil tindakan menutup atau menonaktifkan
                account pelanggan yang terbukti melakukan pelanggaran seperti di
                atas secara sepihak. Dan tidak melakukan pengembalian dana yang
                telah dibayarkan.
              </li>
              <li>
                RumahHost tidak menganjurkan Akun Cloud Hosting SSD digunakan
                sebagai Mail Hosting dan Dakses dalam jumlah yang besar, karena
                akan membebani Load Server . Jika ingin menggunakan Mail secara
                maksimal kami anjurkan menggunakan Google Apps atau menggunakan
                Mail Hosting khusus.
              </li>
            </ol>
          </div>
          <div id="layanan-vps" className="text-xs md:text-sm">
            <h3 className="mb-2 text-sm font-medium md:text-xl">
              Penggunaan Layanan VPS/Cloud Server
            </h3>
            <div className="text-[#212121]">
              <p>Pelanggan dilarang menggunakan VPS/Cloud Server untuk:</p>
              <ol className="ml-4 list-outside list-decimal">
                <li>
                  Mengirimkan e-mail massal dan atau SPAM (lebih detail
                  dijelaskan dalam pasal lain).
                </li>
                <li>
                  Memasang BOT IRC,PsyBNC, dan proses - proses yang berkaitan
                  dengan IRC.
                </li>
                <li>Web Proxy, Mail Proxy, dan jenis - jenis proxy lainnya.</li>
                <li>
                  Melakukan DDOS, port scanning, sniffing, dan exploit system.
                </li>
                <li>Bit Torrent atau aplikasi Peer to Peer lain.</li>
                <li>
                  Menyimpan file - file yang dilarang pada pasal{" "}
                  <Link href="#isi-website" className="text-blue-500">
                    “Isi Website”
                  </Link>
                  .
                </li>
                <li>Penambangan/mining Cryptocurrency.</li>
                <li>
                  Jenis - jenis penggunaan yang dilarang oleh ISP atau
                  Datacenter.
                </li>
              </ol>
            </div>
          </div>
          <div id="layanan-flockmail" className="text-xs md:text-sm">
            <h3 className="mb-2 text-sm font-medium md:text-xl">
              Penggunaan Layanan VPS/Cloud Server
            </h3>
            <div className="flex flex-col gap-2 text-[#212121]">
              <p>
                FlockMail / Titan Email adalah layanan yang diselenggarakan dari
                pihak ketiga yaitu Flock FZLLC yang bekerjasama dengan RumahHost
                Indonesia selaku sales channel. Oleh karena itu pelanggan wajib
                untuk mematuhi AUP dari Flock FZLLC yang dapat dibaca detailnya
                di link berikut. RumahHost Indonesia tidak bertanggungjawab
                apabila Flock FZLLC memutuskan untuk menghentikan layanan kepada
                pelanggan dikarenakan pelanggaran AUP yang dilakukan oleh
                pelanggan.
              </p>

              <p>Sanksi Terhadap Pelanggaran:</p>

              <ol className="ml-4 list-outside list-decimal">
                <li>
                  RumahHost Indonesia berhak untuk memutuskan kontrak tanpa
                  jaminan untuk pengembalian pembayaran dan menolak memberikan
                  jaminan yang tertera dalam Term of Services
                </li>
                <li>
                  Jika menurut penilaian RumahHost Indonesia pelanggaran yang
                  dilakukan oleh pelanggan bersifat ringan, maka RumahHost
                  Indonesia akan mengirimkan peringatan melalui e-mail kepada
                  pelanggan bersangkutan
                </li>
                <li>
                  RumahHost Indonesia berhak untuk melakukan suspend atau
                  pemberhentian layanan tanpa pemberitahuan sebelumnya
                </li>
                <li>
                  RumahHost Indonesia berhak untuk memberlakukan denda untuk
                  pelanggan yang dengan sengaja melakukan pelanggaran
                </li>
                <li>
                  RumahHost Indonesia berhak untuk mengambil alih kepemilikan
                  domain apabila pelanggaran yang dilakukan cukup berat dan
                  dilakukan dengan kesengajaan
                </li>
              </ol>
            </div>
          </div>
          <div id="pelanggaran" className="text-xs md:text-sm">
            <h3 className="mb-2 text-sm font-medium md:text-xl">
              Penanganan Pelanggaran/Abuse
            </h3>
            <div className="flex flex-col gap-2 text-[#212121]">
              <p>Phising/gambling/pornography/scam/malware/fraud/DNS threat</p>
              <ol className="ml-4 list-outside list-decimal">
                <li>
                  Pengecekan akan dilakukan terhadap laporan yang masuk, apabila
                  konten yang melanggar masih dapat diakses, RumahHost akan
                  mengirimkan email notifikasi kepada Registrant / Reseller dan
                  menghentikan semua layanan terkait.
                </li>
                <li>
                  RumahHost akan memberitahukan kepada pelapor tentang tindakan
                  yang telah diambil terkait dengan laporan abuse tersebut.
                </li>
                <li>
                  Jika Registrant / Reseller telah merespon, akan dilakukan
                  pengecekan untuk melihat apakah konten / abuse masih dapat
                  diakses atau masih berlangsung. Akan dilakukan unsuspend
                  apabila konten / pelanggaran sudah tidak dapat diakses.
                </li>
                <li>
                  RumahHost dapat mempertimbangkan dan mengambil tindakan
                  suspend permanen apabila domain dinilai didaftarkan untuk
                  dengan sengaja melakukan abuse / pelanggaran. Namun demikian
                  Registrant masih dapat mentransfer domain keluar.
                </li>
              </ol>
              <p>DMCA/Copyright/Keluhan lain terkait konten</p>
              <ol className="ml-4 list-outside list-decimal">
                <li>Email report akan diforward ke Registrant / Reseller.</li>
                <li>
                  RumahHost akan mereply laporan yang masuk dan memberitahukan
                  tindakan yang telah diambil.
                </li>
                <li>
                  RumahHost sebagai Registrar Domain tidak memiliki kendali atas
                  konten dari domain dan tidak memiliki kewajiban untuk
                  menghapus konten yang dilaporkan. Namun jika konten tersebut
                  ditempatkan di network RumahHost, maka RumahHost berhak untuk
                  menghapus konten yang secara sepihak dianggap melanggar atau
                  menghentikan layanan terkait yang memungkinkan konten tersebut
                  diakses oleh publik.
                </li>
                <li>
                  RumahHost mengakui DMCA dan Google Transparency Report sebagai
                  pihak yang memiliki legitimasi untuk menyatakan pelanggaran
                  hak cipta dari konten sehingga apabila domain / website
                  pelanggan dinyatakan melanggar hak cipta pada DMCA atau Google
                  Transparency Report maka RumahHost berhak menghapus konten
                  atau menghentikan layanan terkait yang memungkinkan konten
                  tersebut diakses oleh publik.
                </li>
                <li>
                  Apabila ada laporan konten yang mengandung unsur hak cipta dan
                  dianggap RumahHost legitimate, maka RumahHost berhak menghapus
                  konten atau menghentikan layanan yang terkait dengan itu.
                </li>
              </ol>
              <p>
                Domain Trademark Infringement Email dari pelapor akan diforward
                ke Registrant / Reseller dan mereply ke pelapor, menyarankan
                untuk melanjutkan keluhan melalui UDRP atau jalur hukum.{" "}
              </p>
              <p>Kontak Abuse</p>
              <p>
                Untuk melaporkan segala bentuk aktivitas abuse, Anda bisa
                menghubungi kami melalui: Email: abuse@RumahHost.com Telepon:
                0881-0237-55254
              </p>
            </div>
          </div>
          <div id="disclaimer" className="text-xs md:text-sm">
            <h3 className="mb-2 text-sm font-medium md:text-xl">Disclaimer</h3>
            <div className="flex flex-col gap-2 text-[#212121]">
              <p>
                RumahHost berhak merubah kebijakannya kapanpun tanpa ada
                pemberitahuan sebelumnya.
              </p>
              <p>
                RumahHost tidak bertanggung jawab atas email dan seluruh konten
                yang terpasang di situs Pelanggan. Namun kami memiliki prosedur
                untuk menangani setiap laporan atas layanan yang terdaftar di
                RumahHost.
              </p>
              <p>
                RumahHost dapat memberikan informasi pengguna kepada pihak yang
                berwenang atau penegak hukum bilamana diperlukan, sesuai dengan
                peraturan perundang-undangan yang berlaku. Layanan yang
                disediakan oleh RumahHost hanya boleh dipergunakan untuk tujuan
                yang sah dan tidak melanggar hukum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
