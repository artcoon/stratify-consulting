import { COMPANY_INFO } from "./const";

/** Canonical production URL (GitHub Pages custom domain) */
export const SITE_URL = "https://esland.space";

export const SEO = {
  siteName: "(주)이에스조경",
  brandName: "ES LANDSCAPE · ES GREENWORKS",
  legalName: COMPANY_INFO.name,
  title:
    "(주)이에스조경 | 경기 광주 조경공사 · 비탈면 식생 · 사면복원 · 친환경 조경 전문",
  description: `${COMPANY_INFO.name}은 경기도 광주·초월읍을 기반으로 조경식재·조경시설물 설치, 특허 다층복합보강 비탈면 식생, 바이오차 친환경 조경, 사면복원·절토사면 녹화, 공원·옥상조경 시공을 수행하는 ISO 인증·여성기업 조경 전문업체입니다. 무료 현장 진단 ${COMPANY_INFO.tel}.`,
  locale: "ko_KR",
  language: "ko",
  ogImage: `${SITE_URL}/logo.png`,
  twitterHandle: "@eslandscape",
  email: COMPANY_INFO.email,
  phone: COMPANY_INFO.tel,
  address: COMPANY_INFO.address,
  geoRegion: "KR-41",
  geoPlacename: "경기도 광주시",
} as const;

/** Primary & long-tail keywords for Google, Naver, Bing, Daum */
export const SEO_KEYWORDS = [
  "이에스조경",
  "ES조경",
  "ES LANDSCAPE",
  "ES GREENWORKS",
  "esland",
  "esland.space",
  COMPANY_INFO.name,
  "조경공사",
  "조경업체",
  "조경회사",
  "조경전문업체",
  "조경식재",
  "조경시설물",
  "조경시설물 설치",
  "조경설계",
  "조경시공",
  "조경 엔지니어링",
  "친환경 조경",
  "친환경 조경공사",
  "조경 복원",
  "비탈면 식생",
  "비탈면 보강",
  "비탈면 복구",
  "비탈면 녹화",
  "사면복원",
  "사면식생",
  "사면 보강",
  "절토사면 복구",
  "절토사면 식생",
  "다층복합보강구조",
  "다층복합보강",
  "5레이어 조경",
  "특허 비탈면 공법",
  "바이오차 식생",
  "바이오차 조경",
  "탄소저감 조경",
  "지오그리드 비탈면",
  "코코넛 매트 식생",
  "고속도로 비탈면",
  "도로변 식생",
  "공원조성",
  "공원 조경",
  "옥상조경",
  "옥상 정원",
  "아파트 조경",
  "조경 유지관리",
  "조경 견적",
  "조경 상담",
  "무료 현장 진단",
  "경기도 광주 조경",
  "광주시 조경공사",
  "경기 광주 조경업체",
  "초월읍 조경",
  "경기 조경공사",
  "광주역 조경",
  "여성기업 조경",
  "ISO9001 조경",
  "ISO14001 조경",
  "조경 여성기업",
  "박은선 대표",
  "조경 대표",
  "landscaping Gyeonggi",
  "slope restoration Korea",
  "eco landscaping Korea",
] as const;

/** Hashtags for social / Naver discovery (also mirrored in meta keywords) */
export const SEO_HASHTAGS = [
  "#이에스조경",
  "#ES조경",
  "#ESLANDSCAPE",
  "#조경공사",
  "#조경식재",
  "#비탈면복구",
  "#사면복원",
  "#친환경조경",
  "#바이오차식생",
  "#다층복합보강",
  "#경기광주조경",
  "#광주시조경",
  "#여성기업조경",
  "#조경전문",
  "#무료현장진단",
  "#절토사면녹화",
  "#공원조성",
  "#옥상조경",
  "#조경엔지니어링",
  "#FromTheRootsToTheFuture",
] as const;

export const SEO_KEYWORDS_STRING = [...SEO_KEYWORDS, ...SEO_HASHTAGS.map((t) => t.replace("#", ""))].join(
  ", "
);

export const SEO_HASHTAGS_STRING = SEO_HASHTAGS.join(" ");

/** Section anchors for sitemap & internal discovery */
export const SEO_SECTIONS = [
  { id: "home", path: "/", title: "홈", priority: "1.0", changefreq: "weekly" as const },
  { id: "about", path: "/#about", title: "회사소개·CEO 인사말", priority: "0.9", changefreq: "monthly" as const },
  { id: "services", path: "/#services", title: "특허 사업영역", priority: "0.9", changefreq: "monthly" as const },
  { id: "portfolio", path: "/#portfolio", title: "시공실적", priority: "0.85", changefreq: "weekly" as const },
  { id: "insights", path: "/#insights", title: "인사이트 랩", priority: "0.8", changefreq: "weekly" as const },
  { id: "contact", path: "/#contact", title: "문의·무료 진단", priority: "0.85", changefreq: "monthly" as const },
] as const;

export function buildJsonLdGraph() {
  const url = SITE_URL;
  const logo = SEO.ogImage;

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${url}/#website`,
      url,
      name: SEO.siteName,
      alternateName: ["ES LANDSCAPE", "ES GREENWORKS", "이에스조경", "Stratify Consulting Landscape"],
      description: SEO.description,
      inLanguage: SEO.language,
      publisher: { "@id": `${url}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${url}/#portfolio?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
      "@id": `${url}/#organization`,
      name: SEO.siteName,
      legalName: SEO.legalName,
      alternateName: ["ES LANDSCAPE", "ES GREENWORKS", "이에스조경"],
      url,
      logo,
      image: logo,
      description: SEO.description,
      slogan: COMPANY_INFO.slogan,
      email: SEO.email,
      telephone: SEO.phone,
      faxNumber: COMPANY_INFO.fax,
      foundingDate: "2021-05-12",
      address: {
        "@type": "PostalAddress",
        streetAddress: "경기도 광주시 초월읍 쌍동리 142-5, 3층",
        addressLocality: "광주시",
        addressRegion: "경기도",
        addressCountry: "KR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 37.4194,
        longitude: 127.2567,
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "경기도" },
        { "@type": "City", name: "광주시" },
        { "@type": "Country", name: "대한민국" },
      ],
      knowsAbout: [
        "조경공사",
        "비탈면 식생",
        "사면복원",
        "다층복합보강구조",
        "바이오차 식생",
        "친환경 조경",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "조경·비탈면 식생 시공 서비스",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "비탈면 식생·사면복원" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "조경식재·조경시설물 설치" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "공원·옥상 조경 시공" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "무료 현장 진단·견적 상담" } },
        ],
      },
      identifier: [
        {
          "@type": "PropertyValue",
          name: "사업자등록번호",
          value: COMPANY_INFO.registrationNo,
        },
        {
          "@type": "PropertyValue",
          name: "조경업 면허번호",
          value: COMPANY_INFO.licenseNo,
        },
      ],
      sameAs: [url],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}/#webpage`,
      url,
      name: SEO.title,
      description: SEO.description,
      isPartOf: { "@id": `${url}/#website` },
      about: { "@id": `${url}/#organization` },
      inLanguage: SEO.language,
      keywords: SEO_KEYWORDS_STRING,
    },
  ];
}
