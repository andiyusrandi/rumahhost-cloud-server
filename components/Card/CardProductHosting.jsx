"use client";

import { productHosting } from "@/utils/data";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";

import numeral from "numeral";
import { MdDone } from "react-icons/md";

import XYZ from "@/public/domain/xylogo.svg";
import XYZWhite from "@/public/domain/xylogowhite.svg";
import MYID from "@/public/domain/myidred.svg";
import MYIDWhite from "@/public/domain/myidwhite.svg";
import Image from "next/image";
import Link from "next/link";
import CarouselMain from "../Carousel/CarouselMain";

function CardProductHosting({ datas }) {  
  return (
    <>
      <div className="w-full lg:hidden">
        <CarouselMain
          isShowNavigator={false}
          isShowDots={true}
          autoPlay={false}
        >
          {datas.map((data, index) => (
            <GridItem
              as={Card}
              key={index}
              bgColor={data.isPopular ? "#FF7D2A" : "white"}
              className={`my-4 flex-shrink-0 flex-grow-0 basis-full custom-shadow md:basis-[calc(50%-0.5rem)]`}
              boxShadow="md"
              padding="1rem"
              borderRadius="0.75rem"
            >
              <CardHeader
                textAlign="center"
                display="flex"
                flexDirection="column"
                gap="2"
                paddingBottom="0"
              >
                <Heading
                  fontSize="1.5rem"
                  textTransform="uppercase"
                  fontWeight="700"
                  textColor={data.isPopular ? "white" : "#FF7D2A"}
                >
                  {data.name}
                </Heading>
                <Text
                  as="span"
                  textColor={data.isPopular ? "white" : "#5E6278 "}
                  fontWeight="500"
                >
                  {data.subtitle}
                </Text>
              </CardHeader>
              <CardBody className="flex flex-col gap-3 text-sm">
                <Box display="flex" alignItems="center" flexDirection="column">
                  <Text
                    className={`font-bold ${data.isPopular ? "text-white" : "text-primary"}`}
                  >
                    Rp.
                    <Text as="span" className={`font-roboto text-4xl`}>
                      {numeral(parseInt(data.pricing.IDR.annually) - (parseInt(data.pricing.IDR.annually) * (parseInt(data.promo.value) / 100))).format("0,0")}
                    </Text>
                    <Text
                      as="span"
                      fontSize="0.75rem"
                      textColor={data.isPopular ? "white" : "#5E6278 "}
                      fontWeight="400"
                    >
                      / Tahun
                    </Text>
                  </Text>
                </Box>
                <Box className="flex flex-col items-center gap-2 text-center">
                  <Text
                    as="span"
                    className={`font-medium line-through ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}
                  >
                    Rp.{numeral(data.pricing.IDR.annually).format("0,0")}
                  </Text>
                  <Box
                    className={`w-full rounded px-3 py-2 font-bold ${data.isPopular ? "bg-white text-primary" : "bg-primary text-white"}`}
                  >
                    Promo {numeral(data.promo.value).format("0,0")}% - Hemat Rp.{numeral(parseInt(data.pricing.IDR.annually) * (parseInt(data.promo.value) / 100)).format("0,0")}
                  </Box>
                </Box>
                <Box
                  className={`flex flex-col gap-2 px-2 font-roboto font-medium uppercase ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}
                >
                  <Box className="flex items-center justify-between">
                    <Box>Disk {data.feature.QUOTA / 1000} GB</Box>
                    <Box className={`aspect-square rounded-full p-1 ${data.isPopular ? "bg-[#F8FAFC]/30 text-white" : "bg-primary/30 text-primary"}`}>
                      <MdDone size={18} />
                    </Box>
                  </Box>
                  <Box className="flex items-center justify-between">
                    <Box>Unmetered Bandwidth</Box>
                    <Box className={`aspect-square rounded-full p-1 ${data.isPopular ? "bg-[#F8FAFC]/30 text-white" : "bg-primary/30 text-primary"}`}>
                      <MdDone size={18} />
                    </Box>
                  </Box>
                  <Box className="flex items-center justify-between">
                    <Box>{data.feature.MAXSQL== null ? 'Unlimited Database' : `Database ${data.feature.MAXSQL}`}</Box>
                    <Box className={`aspect-square rounded-full p-1 ${data.isPopular ? "bg-[#F8FAFC]/30 text-white" : "bg-primary/30 text-primary"}`}>
                      <MdDone size={18} />
                    </Box>
                  </Box>
                  <Box className="flex items-center justify-between">
                    <Box>{data.feature.MAXSUB== null ? 'Unlimited Subdomain' : `Subdomain ${data.feature.MAXSUB}`}</Box>
                    <Box className={`aspect-square rounded-full p-1 ${data.isPopular ? "bg-[#F8FAFC]/30 text-white" : "bg-primary/30 text-primary"}`}>
                      <MdDone size={18} />
                    </Box>
                  </Box>
                  <Box className="flex items-center justify-between">
                    <Box>{data.feature.MAX_EMAILACCT_QUOTA === "unlimited" ? "Unlimited Akun Email" : `Akun Email ${data.feature.MAX_EMAILACCT_QUOTA}`}</Box>
                    <Box className={`aspect-square rounded-full p-1 ${data.isPopular ? "bg-[#F8FAFC]/30 text-white" : "bg-primary/30 text-primary"}`}>
                      <MdDone size={18} />
                    </Box>
                  </Box>
                  <Box className="flex items-center justify-between">
                    <Box>{data.feature.MAXFTP== null ? 'Unlimited Akun FTP' : `Akun FTP ${data.feature.MAXFTP}`}</Box>
                    <Box className={`aspect-square rounded-full p-1 ${data.isPopular ? "bg-[#F8FAFC]/30 text-white" : "bg-primary/30 text-primary"}`}>
                      <MdDone size={18} />
                    </Box>
                  </Box>
                  <Box className="flex items-center justify-between">
                    <Box>{data.feature.MAXPARK == null ? 'Unlimited Parked Domains' : `Max Parked Domains 1`}</Box>
                    <Box className={`aspect-square rounded-full p-1 ${data.isPopular ? "bg-[#F8FAFC]/30 text-white" : "bg-primary/30 text-primary"}`}>
                      <MdDone size={18} />
                    </Box>
                  </Box>
                  <Box className="flex items-center justify-between">
                    <Box>
                      Gratis 1 Domain
                      <Box className="flex gap-2">
                        <Image
                          src={data.isPopular ? XYZWhite : XYZ}
                          alt=""
                          height={32}
                        />
                        <Image
                          src={data.isPopular ? MYIDWhite : MYID}
                          alt=""
                          height={32}
                        />
                      </Box>
                    </Box>
                    <Box
                      className={`aspect-square rounded-full p-1 ${data.isPopular ? "bg-[#F8FAFC]/30 text-white" : "bg-primary/30 text-primary"}`}
                    >
                      <MdDone size={18} />
                    </Box>
                  </Box>
                </Box>
              </CardBody>
              <CardFooter className="mt-8 flex items-center justify-center">
                <Link
                  href="#features"
                  className={`rounded-lg border px-4 py-3 text-center font-semibold capitalize ${data.isPopular ? "border-white text-white" : "border-primary text-primary"} `}
                >
                  Lihat detail
                </Link>
              </CardFooter>
            </GridItem>
          ))}
        </CarouselMain>
      </div>

      <div className="hidden w-full max-w-7xl grid-cols-3 content-center items-center gap-10 lg:grid">
        {datas.map((data, index) => (
          <GridItem
            as={Card}
            key={index}
            bgColor={data.isPopular ? "#FF7D2A" : "white"}
            padding="1rem"
            borderRadius="0.75rem"
            height="fit-content"
            className="custom-shadow"
          >
            <CardHeader
              textAlign="center"
              display="flex"
              flexDirection="column"
              gap="2"
              paddingBottom="0"
            >
              <Heading
                fontSize="1.5rem"
                textTransform="uppercase"
                fontWeight="700"
                textColor={data.isPopular ? "white" : "#FF7D2A"}
              >
                {data.name}
              </Heading>
              <Text
                as="span"
                textColor={data.isPopular ? "white" : "#5E6278 "}
                fontWeight="500"
              >
                {data.subtitle}
              </Text>
            </CardHeader>
            <CardBody className="flex flex-col gap-3 text-sm">
              <Box display="flex" alignItems="center" flexDirection="column">
                <Text
                  className={`font-bold ${data.isPopular ? "text-white" : "text-primary"}`}
                >
                  Rp.
                  <Text as="span" className={`font-roboto text-4xl`}>
                    {numeral(parseInt(data.pricing.IDR.annually) - (parseInt(data.pricing.IDR.annually) * (parseInt(data.promo.value) / 100))).format("0,0")}
                  </Text>
                  <Text
                    as="span"
                    fontSize="0.75rem"
                    textColor={data.isPopular ? "white" : "#5E6278 "}
                    fontWeight="400"
                  >
                    / Tahun
                  </Text>
                </Text>
              </Box>
              <Box className="flex flex-col items-center gap-2 text-center">
                <Text
                  as="span"
                  className={`font-medium line-through ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}
                >
                  Rp.{numeral(data.pricing.IDR.annually).format("0,0")}
                </Text>
                <Box
                  className={`w-full rounded px-3 py-2 font-bold ${data.isPopular ? "bg-white text-primary" : "bg-primary text-white"}`}
                >
                  Promo {numeral(data.promo.value).format("0,0")}% - Hemat Rp.{numeral(parseInt(data.pricing.IDR.annually) * (parseInt(data.promo.value) / 100)).format("0,0")}
                </Box>
              </Box>
              <Box
                className={`flex flex-col gap-2 px-2 font-roboto font-medium uppercase ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}
              >
                <Box className="flex items-center justify-between">
                  <Box>Disk {data.feature.QUOTA / 1000} GB</Box>
                  <Box className={`aspect-square rounded-full p-1 ${data.isPopular ? "bg-[#F8FAFC]/30 text-white" : "bg-primary/30 text-primary"}`}>
                    <MdDone size={18} />
                  </Box>
                </Box>
                <Box className="flex items-center justify-between">
                  <Box>Unmetered Bandwidth</Box>
                  <Box className={`aspect-square rounded-full p-1 ${data.isPopular ? "bg-[#F8FAFC]/30 text-white" : "bg-primary/30 text-primary"}`}>
                    <MdDone size={18} />
                  </Box>
                </Box>
                <Box className="flex items-center justify-between">
                  <Box>{data.feature.MAXSQL== null ? 'Unlimited Database' : `Database ${data.feature.MAXSQL}`}</Box>
                  <Box className={`aspect-square rounded-full p-1 ${data.isPopular ? "bg-[#F8FAFC]/30 text-white" : "bg-primary/30 text-primary"}`}>
                    <MdDone size={18} />
                  </Box>
                </Box>
                <Box className="flex items-center justify-between">
                  <Box>{data.feature.MAXSUB== null ? 'Unlimited Subdomain' : `Subdomain ${data.feature.MAXSUB}`}</Box>
                  <Box className={`aspect-square rounded-full p-1 ${data.isPopular ? "bg-[#F8FAFC]/30 text-white" : "bg-primary/30 text-primary"}`}>
                    <MdDone size={18} />
                  </Box>
                </Box>
                <Box className="flex items-center justify-between">
                  <Box>{data.feature.MAX_EMAILACCT_QUOTA === "unlimited" ? "Unlimited Akun Email" : `Akun Email ${data.feature.MAX_EMAILACCT_QUOTA}`}</Box>
                  <Box className={`aspect-square rounded-full p-1 ${data.isPopular ? "bg-[#F8FAFC]/30 text-white" : "bg-primary/30 text-primary"}`}>
                    <MdDone size={18} />
                  </Box>
                </Box>
                <Box className="flex items-center justify-between">
                  <Box>{data.feature.MAXFTP== null ? 'Unlimited Akun FTP' : `Akun FTP ${data.feature.MAXFTP}`}</Box>
                  <Box className={`aspect-square rounded-full p-1 ${data.isPopular ? "bg-[#F8FAFC]/30 text-white" : "bg-primary/30 text-primary"}`}>
                    <MdDone size={18} />
                  </Box>
                </Box>
                <Box className="flex items-center justify-between">
                  <Box>{data.feature.MAXPARK == null ? 'Unlimited Parked Domains' : `Max Parked Domains 1`}</Box>
                  <Box className={`aspect-square rounded-full p-1 ${data.isPopular ? "bg-[#F8FAFC]/30 text-white" : "bg-primary/30 text-primary"}`}>
                    <MdDone size={18} />
                  </Box>
                </Box>
                <Box className="flex items-center justify-between">
                  <Box>
                    Gratis 1 Domain
                    <Box className="flex gap-2">
                      <Image
                        src={data.isPopular ? XYZWhite : XYZ}
                        alt=""
                        height={32}
                      />
                      <Image
                        src={data.isPopular ? MYIDWhite : MYID}
                        alt=""
                        height={32}
                      />
                    </Box>
                  </Box>
                  <Box
                    className={`aspect-square rounded-full p-1 ${data.isPopular ? "bg-[#F8FAFC]/30 text-white" : "bg-primary/30 text-primary"}`}
                  >
                    <MdDone size={18} />
                  </Box>
                </Box>
              </Box>
            </CardBody>
            <CardFooter
              className={`flex items-center justify-center ${data.isPopular ? "mt-16" : "mt-6"}`}
            >
              <Link
                href="#features"
                className={`rounded-lg border px-4 py-3 text-center font-semibold capitalize ${data.isPopular ? "border-white text-white" : "border-primary text-primary"} `}
              >
                Lihat detail
              </Link>
            </CardFooter>
          </GridItem>
        ))}
      </div>
    </>
  );
}

export default CardProductHosting;
