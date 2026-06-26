"use client";

import Image from "next/image";
import { useState } from "react";

export function ImageGallery({
  images,
  name
}: {
  images: string[];
  name: string;
}) {
  const [active, setActive] = useState(images[0]);

  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden bg-surface">
        <Image
          src={active}
          alt={name}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition duration-500 hover:scale-[1.03]"
        />
      </div>
      <div className="mt-4 flex gap-3 overflow-x-auto" aria-label={`${name} gallery thumbnails`}>
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            aria-label={`Show ${name} image ${index + 1}`}
            aria-pressed={active === image}
            className="relative h-24 w-20 shrink-0 overflow-hidden border border-border data-[active=true]:border-ink"
            data-active={active === image}
            onClick={() => setActive(image)}
          >
            <Image
              src={image}
              alt=""
              fill
              sizes="80px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
