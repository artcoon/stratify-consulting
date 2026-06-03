import { useEffect } from "react";
import {
  SEO,
  SEO_HASHTAGS_STRING,
  SEO_KEYWORDS_STRING,
  SITE_URL,
  buildJsonLdGraph,
} from "@/seo";

const JSON_LD_ID = "esland-json-ld";

function upsertMeta(
  attribute: "name" | "property",
  key: string,
  content: string
) {
  if (!content) return;
  let el = document.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attribute, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

function upsertLink(rel: string, href: string, extra?: Record<string, string>) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
  if (extra) {
    Object.entries(extra).forEach(([k, v]) => el!.setAttribute(k, v));
  }
}

/**
 * Injects comprehensive SEO meta tags and JSON-LD for Google, Naver, Bing, Daum.
 */
export default function SeoHead() {
  useEffect(() => {
    const { title, description, locale, language, ogImage, siteName, brandName, email, phone, address } =
      SEO;

    document.documentElement.lang = language;
    document.title = title;

    upsertLink("canonical", SITE_URL);
    upsertLink("alternate", SITE_URL, { hreflang: "ko" });
    upsertLink("alternate", SITE_URL, { hreflang: "x-default" });

    // Core
    upsertMeta("name", "description", description);
    upsertMeta("name", "keywords", SEO_KEYWORDS_STRING);
    upsertMeta("name", "author", siteName);
    upsertMeta("name", "publisher", siteName);
    upsertMeta("name", "copyright", siteName);
    upsertMeta("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    upsertMeta("name", "googlebot", "index, follow");
    upsertMeta("name", "bingbot", "index, follow");
    upsertMeta("name", "yandex", "index, follow");
    upsertMeta("name", "referrer", "origin-when-cross-origin");
    upsertMeta("name", "format-detection", "telephone=yes");
    upsertMeta("name", "theme-color", "#173B57");

    // Naver / Daum friendly
    upsertMeta("name", "subject", title);
    upsertMeta("name", "title", title);
    upsertMeta("name", "classification", "조경공사, 비탈면식생, 사면복원, 친환경조경");
    upsertMeta("name", "coverage", "대한민국 경기도 광주시");
    upsertMeta("name", "distribution", "global");
    upsertMeta("name", "rating", "general");

    // Dublin Core (legacy crawlers)
    upsertMeta("name", "DC.title", title);
    upsertMeta("name", "DC.creator", siteName);
    upsertMeta("name", "DC.subject", SEO_KEYWORDS_STRING.slice(0, 500));
    upsertMeta("name", "DC.description", description);
    upsertMeta("name", "DC.language", language);
    upsertMeta("name", "DC.publisher", siteName);

    // Open Graph
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", siteName);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", SITE_URL);
    upsertMeta("property", "og:locale", locale);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:image:alt", `${siteName} 로고`);
    upsertMeta("property", "og:email", email);
    upsertMeta("property", "og:phone_number", phone);
    upsertMeta("property", "og:street-address", address);

    // Twitter / X
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", ogImage);

    // Article-style tags (hashtags for social crawlers)
    upsertMeta("property", "article:tag", SEO_HASHTAGS_STRING);

    // Geo
    upsertMeta("name", "geo.region", SEO.geoRegion);
    upsertMeta("name", "geo.placename", SEO.geoPlacename);

    // Search engine ownership verification (set in .env)
    const googleVerify = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION as string | undefined;
    const naverVerify = import.meta.env.VITE_NAVER_SITE_VERIFICATION as string | undefined;
    if (googleVerify) upsertMeta("name", "google-site-verification", googleVerify);
    if (naverVerify) upsertMeta("name", "naver-site-verification", naverVerify);

    // JSON-LD
    let script = document.getElementById(JSON_LD_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = JSON_LD_ID;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": buildJsonLdGraph(),
    });
  }, []);

  return null;
}
