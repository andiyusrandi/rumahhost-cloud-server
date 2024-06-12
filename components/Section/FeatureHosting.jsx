import CarouselFeaturesHosting from "../Carousel/CarouselFeaturesHosting";

function FeatureHosting() {
  return (
    <section className="mt-10 lg:mt-20">
      <div className="container grid grid-cols-1 gap-6 lg:grid-cols-6">
        <div className="text-center lg:col-span-2 lg:text-left lg:my-auto">
          <h3 className="mb-4 font-ubuntu text-[28px] leading-7 font-bold lg:text-4xl lg:leading-tight">
            Fitur Hosting
          </h3>
          <p className="text-sm md:text-base">
            Kami menawarkan perangkat keras dan perangkat lunak tercepat yang
            dipercaya oleh ribuan pengembang.
          </p>
        </div>
        <CarouselFeaturesHosting />
      </div>
    </section>
  );
}

export default FeatureHosting;
