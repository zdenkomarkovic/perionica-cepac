import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export function getImageUrl(image, width = 800) {
  if (!image?.asset) return null;

  return urlFor(image)
    .width(width)

    .fit("max")
    .auto("format")
    .url();
}
