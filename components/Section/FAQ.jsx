import Image from "next/image";

import DotsSquare from "@/public/DotsSquare.png";

import FaqAccordion from "../FAQ/FaqAccordion";

function FAQ() {
  return (
    <section id="faq" className="mt-2 lg:mt-8">
      <div className="container flex flex-col gap-3">
        <div className="relative">
          <Image
            src={DotsSquare}
            alt=""
            height={58}
            className="absolute left-0 top-1/2 -translate-x-1/3 -translate-y-1/2"
          />
          <h3 className="py-3 text-[28px] leading-10 font-semibold md:leading-none md:text[40px]">
          Pertanyaan seputar Layanan Web Hosting RumahHost.com
          </h3>
        </div>

        <FaqAccordion />
      </div>
    </section>
  );
}

export default FAQ;
