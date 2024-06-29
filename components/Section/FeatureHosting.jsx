'use client'
 
import { usePathname } from 'next/navigation'
import CarouselFeaturesHosting from "../Carousel/CarouselFeaturesHosting";
import CarouselFeaturesSSD from '../Carousel/CarouselFeaturesSSD';
import CarouselFeaturesWordpress from '../Carousel/CarouselFeaturesWordpress';
import CarouselFeaturesVPS from '../Carousel/CarouselFeaturesVPS';

function FeatureHosting({ title }) {
  const pathname = usePathname()
  
  return (
    <section className="mt-10 lg:mt-20">
      <div className="container grid grid-cols-1 gap-6 lg:grid-cols-6">
        <div className="text-center lg:col-span-2 lg:text-left lg:my-auto">
          <h3 className="mb-4 font-ubuntu text-[28px] leading-7 font-bold lg:text-4xl lg:leading-tight">
            Fitur Unggulan <br/> {title}
          </h3>
          <p className="text-sm md:text-base">
            Kami menawarkan perangkat keras dan perangkat lunak tercepat yang
            dipercaya oleh ribuan pengembang.
          </p>
        </div>
        {pathname === "/hosting-murah" && (
          <CarouselFeaturesHosting />
        )}
        {pathname === "/cloud-hosting-ssd" && (
          <CarouselFeaturesSSD />
        )}
        {pathname === "/cloud-hosting-wordpress" && (
          <CarouselFeaturesWordpress />
        )}
        {pathname === "/cloud-vps-hosting" && (
          <CarouselFeaturesVPS />
        )}
      </div>
    </section>
  );
}

export default FeatureHosting;
