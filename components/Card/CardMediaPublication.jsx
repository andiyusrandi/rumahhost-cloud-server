import moment from "moment";
import Image from "next/image";
import Link from "next/link";

function CardMediaPublication({ datas }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {datas.map((data, index) => (
        <article
          key={index}
          className="relative flex min-h-60 basis-full items-end justify-start overflow-hidden rounded-lg p-4 md:min-h-64"
        >
          <div className="relative z-[2] flex flex-col gap-2 text-white">
            <h6 className="text-sm font-semibold md:text-xl">{data.title}</h6>
            <span>{moment(data.date, true).format("DD MMMM YYYY")}</span>
            <p className="line-clamp-2 overflow-hidden text-ellipsis md:hidden">
              {data.content}
            </p>
            <Link
              href={data.url}
              className="w-fit rounded bg-white p-1 font-semibold text-primary md:p-2"
            >
              Selengkapnya
            </Link>
          </div>
          <Image
            src={data.cover}
            alt=""
            fill
            className="z-[1] brightness-50 md:brightness-75"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </article>
      ))}
    </div>
  );
}

export default CardMediaPublication;
