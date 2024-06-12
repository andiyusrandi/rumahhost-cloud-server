import Image from "next/image";
import Link from "next/link";
import { MdOutlineCall } from "react-icons/md";

import LogoRumahHost from "@/public/Logo Rumah Host.png";
import DMCA from "@/public/dmca_premi_badge_2.png";
import KominfoLogo from "@/public/keminfo 1.png";
import QRCode from "@/public/qrcode.png";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#323548] text-xs text-white lg:text-sm">
      <div className="absolute bottom-[99%] z-0 h-[60px] w-full rounded-t-[50%] bg-[#323548]"></div>
      <div className="container grid grid-cols-1 gap-4 py-8 md:grid-cols-2 md:gap-8">
        <div className="grid grid-cols-1 gap-8">
          <div className="flex flex-col gap-2">
            <Image src={LogoRumahHost} alt="Logo Rumah Host" />
            <p className="text-sm">
              Penyedia cloud hosting di Indonesia dengan performance terbaik
              Uptime server terjamin dengan Technologi Upper class
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-xl font-semibold capitalize">Kantor Kami</h5>
            <div className="flex flex-col gap-2">
              <p className="text-sm">
                Jl. Kebon Nanas Selatan Cipinang Cempedak, Jatinegara, Jakarta
                Timur 55581 - Indonesia
              </p>
              <p className="text-sm">
                Villa Pattalassang Indah 3 Blok D NO. 5 92172 Sulawesi Selatan
              </p>
              <Link href="#" className="flex items-center gap-2 text-sm">
                <MdOutlineCall size={16} />
                0881-0237-55254
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Link href="#">
                <FaLinkedin size={20} />
              </Link>
              <Link href="#">
                <FaFacebookSquare size={20} />
              </Link>
              <Link href="#">
                <FaInstagramSquare size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-y-4">
            <div className="flex flex-col gap-1">
              <h5 className="text-xl font-semibold capitalize">About</h5>
              <div className="flex flex-col gap-1 text-nowrap">
                <Link href="/tentang-kami" className="py-[2px] text-sm hover:text-primary">
                  Tentang RumahHost
                </Link>
                <Link href="#" className="py-[2px] text-sm hover:text-primary">
                  Network & Infrastructure
                </Link>
                <Link href="#" className="py-[2px] text-sm hover:text-primary">
                  Partner
                </Link>
                <Link href="/media" className="py-[2px] text-sm hover:text-primary">
                  Media Publication
                </Link>
                <Link href="/payment" className="py-[2px] text-sm hover:text-primary">
                  Metode Pembayaran
                </Link>
                <Link href="/migrasi-hosting" className="py-[2px] text-sm hover:text-primary">
                  Migrasi Hosting
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="text-xl font-semibold uppercase">MSA/SLA/AUP</h5>
              <div className="flex flex-col gap-1 text-nowrap">
                <Link href="/master-service-agreement" className="py-[2px] text-sm hover:text-primary">
                  Master Service Agreement
                </Link>
                <Link href="/acceptable-user-policy" className="py-[2px] text-sm hover:text-primary">
                  Acceptable-User-Policy
                </Link>
                <Link href="/privacy-policy" className="py-[2px] text-sm hover:text-primary">
                  Privacy Policy
                </Link>
                <Link href="/term-of-service" className="py-[2px] text-sm hover:text-primary">
                  Term Of Service
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="text-xl font-semibold">
                Protected by
              </h5>
              <Image src={DMCA} alt="DMCA" quality={100} />
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="text-xl font-semibold">
                Terdaftar di PSE Kominfo
              </h5>
              <div className="flex gap-4">
                <Image src={KominfoLogo} alt="Kominfo" />
                <Image src={QRCode} alt="QR Code" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
