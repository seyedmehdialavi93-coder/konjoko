import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.konjoko.com", lastModified: new Date() },
    { url: "https://www.konjoko.com/blog", lastModified: new Date() },
    { url: "https://www.konjoko.com/blog/kharid-az-dubai", lastModified: new Date() },
    { url: "https://www.konjoko.com/blog/pardakht-beinalmelli", lastModified: new Date() },
    { url: "https://www.konjoko.com/blog/kharid-az-chin", lastModified: new Date() },
    { url: "https://www.konjoko.com/blog/kharid-az-turkey", lastModified: new Date() },
    { url: "https://www.konjoko.com/blog/havaleh-arzi", lastModified: new Date() },
    { url: "https://www.konjoko.com/blog/kharid-az-amazon", lastModified: new Date() },
    { url: "https://www.konjoko.com/blog/vardaat-az-dubai", lastModified: new Date() },
    { url: "https://www.konjoko.com/services/shopping", lastModified: new Date() },
    { url: "https://www.konjoko.com/services/payment", lastModified: new Date() },
    { url: "https://www.konjoko.com/services/business", lastModified: new Date() },
    { url: "https://www.konjoko.com/contact", lastModified: new Date() },
  ];
}