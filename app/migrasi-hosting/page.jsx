import FormMigrasi from "@/components/Form/FormMigrasi";
import Testimonial from "@/components/Section/Testimonial";
import BgHero from "@/public/04ea02d6732c632343c0232a31158192.jpeg";
import Rhone from "@/public/Rhone.png";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Migrasi Hosting",
};

function MigrasiHsoting() {
  return (
    <main className="bg-main relative z-0 lg:pb-16 lg:pt-8">
      <div className="container bg-white p-0 md:p-4">
        <section className="relative mb-8 flex aspect-[5/2] items-end text-xs sm:aspect-[3/1] md:aspect-[4/1] md:text-base lg:aspect-[5/1]">
          <div className="relative z-[1] px-6 pb-5 pt-10 text-white">
            <h3 className="mb-1 text-base font-semibold md:text-2xl">
              Pindah Hosting ke RumahHost
            </h3>
            <p>Nikmati Beragam Fitur Hosting Terbaik Indonesia</p>
          </div>
          <div className="absolute left-0 top-0 z-0 h-full w-full ">
            <Image
              src={BgHero}
              alt="background hero"
              fill
              className="object-cover brightness-50"
            />
          </div>
        </section>
        <section className="text-xs md:text-base">
          <div className="container grid grid-cols-1 gap-8 bg-white py-4 md:p-0 lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              <div className="text-center lg:text-left">
                <h3 className="mb-4 text-base font-semibold md:text-2xl">
                  Silahkan lengkapi data di bawah Ini
                </h3>
                <p className="text-[#7E8299]">
                  Isi formulir yang tersedia di bawah ini dan kami akan segera
                  memproses permintaan transfer hosting Anda secepatnya.
                </p>
              </div>
              <FormMigrasi />
            </div>
            <div className="flex flex-col gap-8">
              <div className="text-center">
                <h3 className="mb-4 text-sm font-semibold md:text-xl">
                  Syarat dan Ketentuan Pindah Hosting
                </h3>
                <ol className="list-decimal pl-4 text-left text-[#5E6278]">
                  <li>
                    Diskon perpanjangan hanya berlaku untuk 1 tahun pertama
                    (setelah masa aktif 3 bulan pertama berakhir), kemudian
                    selanjutnya berlaku harga normal.
                  </li>
                  <li>
                    Penawaran ini hanya berlaku bagi akun hosting yang saat ini
                    aktif di provider hosting lain.
                  </li>
                  <li>
                    Untuk transfer domain, biaya transfer tetap berlaku sesuai
                    harga transfer domain.
                  </li>
                  <li>
                    Hosting yang akan dipindah masih aktif (tidak suspend dari
                    provider lama) dan menggunakan cPanel.
                  </li>
                  <li>
                    Maksimal space yang terpakai di hosting yang saat ini
                    digunakan adalah sebesar 5GB dengan inodes kurang dari
                    75.000 sesuai AUP.
                  </li>
                </ol>
              </div>
              <div className="relative min-h-56 overflow-hidden rounded-xl bg-[#1B283F] text-white">
                <div className="relative z-10 flex h-full flex-col justify-between p-6">
                  <div>
                    <h1 className="mb-4 font-ubuntu text-xl font-bold">
                      RumahHost Selalu Ada di Sini
                    </h1>
                    <p className="text-[#B5B5C3]">
                      Jangan ragu memulai langkah di dunia maya bersama
                      RumahHost. Tak peduli apakah Anda seorang newbie atau
                      ahli,. Kami akan selalu siap membantu.
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="block w-fit rounded-md bg-primary p-2 font-semibold capitalize"
                  >
                    hubungi kami
                  </Link>
                </div>
                <Image
                  src={Rhone}
                  alt=""
                  className="absolute bottom-0 left-0 right-0 z-0 w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <Testimonial isBackgroundWhite={true} />
      </div>
    </main>
  );
}

export default MigrasiHsoting;
