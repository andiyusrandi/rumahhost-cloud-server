import Link from "next/link";

function PoliciesAgreementsListofContent({ datas }) {
  return (
    <div className="min-w-80">
      <h6 className="mb-3 font-semibold">Categories</h6>
      <div className="flex flex-col items-start gap-2">
        {datas.map((data, index) => (
          <Link
            key={index}
            href={data.url}
            className="font-medium capitalize text-[#A1A5B7]"
          >
            {data.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PoliciesAgreementsListofContent;
