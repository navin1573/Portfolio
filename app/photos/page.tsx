import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Photos</h1>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/photo7.jpg",
            alt: "Roman columns",
          },
          {
            src: "/photos/photo11.jpg",
            alt: "Big Ben",
          },
          {
            src: "/photos/photo14.jpg",
            alt: "Sacré-Cœur Basilica",
          },
          {
            src: "/photos/photo12.jpg",
            alt: "Eiffel Tower",
          },
          {
            src: "/photos/photo8.jpg",
            alt: "Taj Mahal",
          },
          {
            src: "/photos/photo3.jpeg",
            alt: "Colosseum",
          },
        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/photo1.jpg", alt: "Roman columns" },
          { src: "/photos/photo2.jpg", alt: "Big Ben" },
          { src: "/photos/photo6.jpg", alt: "Sacré-Cœur Basilica" },
          { src: "/photos/photo5.jpg", alt: "Eiffel Tower" },
        ]}
      />

      <ImageGrid
        columns={4}
        images={[
          { src: "/photos/photo4.jpg", alt: "Roman columns" },
          { src: "/photos/photo10.jpg", alt: "Big Ben" },
          { src: "/photos/photo15.jpg", alt: "Sacré-Cœur Basilica" },
          { src: "/photos/photo16.jpg", alt: "Eiffel Tower" },
          { src: "/photos/photo9.jpg", alt: "Taj Mahal" },
          { src: "/photos/photo13.jpg", alt: "Colosseum" },
        ]}
      />
    </section>
  );
}
