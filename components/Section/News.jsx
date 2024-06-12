"use client";

import { mediaPublicationData } from "@/utils/data";
import CardMediaPublication from "../Card/CardMediaPublication";

function News() {
  return (
    <section className="mb-20">
      <div className="container py-4">
        <CardMediaPublication datas={mediaPublicationData} />
      </div>
    </section>
  );
}

export default News;
