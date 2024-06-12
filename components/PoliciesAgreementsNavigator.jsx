"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function PoliciesAgreementsNavigator() {
  const datas = [
    { title: "Master Service Agreement", url: "/master-service-agreement" },
    { title: "Acceptable-User-Policy", url: "/acceptable-user-policy" },
    { title: "Privacy Policy", url: "/privacy-policy" },
    { title: "Term Of Service", url: "/term-of-service" },
  ];

  const pathname = usePathname();

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 text-nowrap">
      {datas.map((data, index) => (
        <Link
          href={data.url}
          key={index}
          className={`flex items-center justify-start gap-2 rounded-2xl p-3 text-xs font-medium md:text-base ${pathname === data.url ? "bg-gradient-to-r from-[#323548] from-[-160%] to-[rgba(50,53,72,0)] to-[275%]" : "bg-transparent hover:bg-gradient-to-r hover:from-[#323548] hover:from-[-160%] hover:to-[rgba(50,53,72,0)] hover:to-[275%]"}`}
        >
          <span className="text-4xl text-[#B5B5C3]">
            <Icon icon="mdi:deal-outline" />
          </span>
          {data.title}
        </Link>
      ))}
    </div>
  );
}

export default PoliciesAgreementsNavigator;
