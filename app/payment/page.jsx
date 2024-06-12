import FAQPayment from "@/components/FAQ/FAQPayment";
import DotsSquare from "@/public/DotsSquare.png";
import PaymentHeader from "@/public/PaymentHeader.png";
import Dana from "@/public/paymentMethod/E-Wallet/Dana.png";
import Doku from "@/public/paymentMethod/E-Wallet/Doku.png";
import Gopay from "@/public/paymentMethod/E-Wallet/Gopay.png";
import Ovo from "@/public/paymentMethod/E-Wallet/Ovo.png";
import ShopeePay from "@/public/paymentMethod/E-Wallet/ShopeePay.png";
import MasterCard from "@/public/paymentMethod/Kredit/mastercard.png";
import Visa from "@/public/paymentMethod/Kredit/visa.png";
import BCA from "@/public/paymentMethod/TransferBank/BCA.png";
import BSI from "@/public/paymentMethod/TransferBank/BSI.png";
import BankSampoerna from "@/public/paymentMethod/TransferBank/BankSampoerna.png";
import BankSinarmas from "@/public/paymentMethod/TransferBank/BankSinarmas.png";
import BRI from "@/public/paymentMethod/TransferBank/bri.png";
import CIMB from "@/public/paymentMethod/TransferBank/cimb.png";
import Mandiri from "@/public/paymentMethod/TransferBank/mandiri.png";
import MayBank from "@/public/paymentMethod/TransferBank/maybank.png";
import Permata from "@/public/paymentMethod/TransferBank/permata.png";
import AlfaExpress from "@/public/paymentMethod/Tunai/alfaexpress.png";
import Alfamart from "@/public/paymentMethod/Tunai/alfamart.png";
import Alfamidi from "@/public/paymentMethod/Tunai/alfamidi.png";
import Image from "next/image";

export const metadata = {
  title: "Metode Pembayaran",
};

function Payment() {
  return (
    <main className="bg-main">
      <section className="relative mb-6 aspect-video">
        <div className="container relative z-[1] flex h-full flex-col justify-end gap-1 pb-4 text-xs text-[#566292] md:text-base">
          <h3 className="text-base font-semibold md:text-2xl">
            Metode Pembayaran
          </h3>
          <p>
            Dapatkan Kemudahan Transaksi Menggunakan Layanan RumahHost <br />
            Transaksi Otomatis dengan berbagai pilihan Metode Pembayaran
          </p>
        </div>
        <Image
          src={PaymentHeader}
          alt="Header"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            zIndex: 0,
          }}
        />
      </section>
      <section className="mb-6">
        <div className="container grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="flex flex-col gap-3 rounded border border-[#D5DFFF] bg-white p-6">
            <h5 className="text-lg font-semibold text-[#2F1C6A]">E-wallet</h5>
            <div className="flex h-full flex-wrap items-center justify-center gap-4">
              <div className="flex h-10 w-20 items-center justify-center rounded border border-[#D5DFFF]">
                <Image src={Dana} alt="Dana" />
              </div>
              <div className="flex h-10 w-16 items-center justify-center rounded border border-[#D5DFFF]">
                <Image src={Ovo} alt="Ovo" />
              </div>
              <div className="flex h-10 w-20 items-center justify-center rounded border border-[#D5DFFF]">
                <Image src={Gopay} alt="Gopay" />
              </div>
              <div className="flex h-10 w-16 items-center justify-center rounded border border-[#D5DFFF]">
                <Image src={Doku} alt="Doku" />
              </div>
              <div className="flex h-10 w-20 items-center justify-center rounded border border-[#D5DFFF]">
                <Image src={ShopeePay} alt="ShopeePay" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 rounded border border-[#D5DFFF] bg-white p-6">
            <h5 className="text-lg font-semibold text-[#2F1C6A]">
              Transfer Bank
            </h5>
            <div className="flex h-full flex-wrap items-center justify-center gap-4">
              <div className="flex h-10 w-16 items-center justify-center rounded border border-[#D5DFFF]">
                <Image src={BCA} alt="Bank BCA" />
              </div>
              <div className="flex h-10 w-16 items-center justify-center rounded border border-[#D5DFFF]">
                <Image src={Mandiri} alt="Bank Mandiri" />
              </div>
              <div className="flex h-10 w-16 items-center justify-center rounded border border-[#D5DFFF]">
                <Image src={CIMB} alt="CIMB" />
              </div>
              <div className="flex h-10 w-16 items-center justify-center rounded border border-[#D5DFFF]">
                <Image src={BRI} alt="BRI" />
              </div>
              <div className="flex h-10 w-16 items-center justify-center rounded border border-[#D5DFFF]">
                <Image src={MayBank} alt="MayBank" />
              </div>
              <div className="flex h-10 w-16 items-center justify-center rounded border border-[#D5DFFF]">
                <Image src={BankSampoerna} alt="Bank Sampoerna" />
              </div>
              <div className="flex h-10 w-16 items-center justify-center rounded border border-[#D5DFFF]">
                <Image src={BSI} alt="BSI" />
              </div>
              <div className="flex h-10 w-16 items-center justify-center rounded border border-[#D5DFFF]">
                <Image src={BankSinarmas} alt="Bank Sinarmas" />
              </div>
              <div className="flex h-10 w-16 items-center justify-center rounded border border-[#D5DFFF]">
                <Image src={Permata} alt="Bank Permata" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3 rounded border border-[#D5DFFF] bg-white p-6">
              <h5 className="text-lg font-semibold text-[#2F1C6A]">Tunai</h5>
              <div className="flex h-full flex-wrap items-center justify-center gap-4">
                <div className="flex h-10 w-16 items-center justify-center rounded border border-[#D5DFFF]">
                  <Image src={Alfamart} alt="Alfamart" />
                </div>
                <div className="flex h-10 w-16 items-center justify-center rounded border border-[#D5DFFF]">
                  <Image src={Alfamidi} alt="Alfamidi" />
                </div>
                <div className="flex h-10 w-16 items-center justify-center rounded border border-[#D5DFFF]">
                  <Image src={AlfaExpress} alt="AlfaExpress" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 rounded border border-[#D5DFFF] bg-white p-6">
              <h5 className="text-lg font-semibold text-[#2F1C6A]">
                Kartu Kredit dan Debit
              </h5>
              <div className="flex h-full flex-wrap items-center justify-center gap-4">
                <div className="flex h-10 w-16 items-center justify-center rounded border border-[#D5DFFF]">
                  <Image src={Visa} alt="Visa" />
                </div>
                <div className="flex h-10 w-16 items-center justify-center rounded border border-[#D5DFFF]">
                  <Image src={MasterCard} alt="MasterCard" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-6">
        <div className="container text-sm md:text-lg">
          <p className="mb-5 text-center font-medium">
            Menerima berbagai cara pembayaran dengan validasi otomatis tanpa
            perlu konfirmasi. Produk atau Layanan di Jagoan Kode Cloud bersifat
            aktivasi instant dan anda dapat menggunakan salah satu metode
            pembayaran dari sekian banyak bank di indonesia dan e-Money.
          </p>
          <button className="w-full rounded bg-primary p-2 text-center font-semibold text-white">
            Konfirmasi Pembayaran
          </button>
        </div>
      </section>
      <section className="mb-16">
        <div className="container flex flex-col gap-3">
          <div className="relative">
            <Image
              src={DotsSquare}
              alt=""
              height={58}
              className="absolute left-0 top-1/2 -translate-x-1/3 -translate-y-1/2"
            />
            <h3 className="py-3 text-xl font-semibold">Metode Pembayaran</h3>
          </div>

          <FAQPayment />
        </div>
      </section>
    </main>
  );
}

export default Payment;
