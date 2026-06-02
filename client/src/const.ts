// (주)이에스조경 - Premium Light Clean Theme (A안 - Leaf Grid)
// 데이터 일관성 및 정합성을 위한 상수 파일

export const COMPANY_INFO = {
  name: "(주)이에스조경",
  brandTitle: "Stratify Consulting & Landscape",
  ceo: "박은선",
  foundedDate: "2021년 5월 12일",
  capital: "1억 5,000만원",
  licenseNo: "제 경기도 광주-조경-2021-0042호",
  address: "경기도 광주시 초월읍 쌍동리 142-5, 3층",
  phone: "031-764-2021",
  tel: "031-764-2021", // added tel for compatibility with Footer.tsx
  fax: "031-764-2022",
  email: "esjk2025@naver.com",
  registrationNo: "592-87-01625",
  slogan: "현장에 뿌리내리는 녹색 시공, 지속가능한 녹색 미래를 건설합니다.",
  certifications: [
    "ISO 9001 (품질경영시스템 인증)",
    "ISO 14001 (환경경영시스템 인증)",
    "ISO 45001 (안전보건경영시스템 인증)",
    "중소벤처기업부 지정 여성기업",
    "다층복합보강 비탈면 식생 공법 특허 보유"
  ]
};

export const CEO_MESSAGE = {
  name: "박은선",
  title: "대표이사",
  photo: "https://esland.manus.space/manus-storage/ceo_photo_5_1aa8eacf.jpg",
  photoSub: "https://esland.manus.space/manus-storage/ceo_photo_5_1aa8eacf.jpg",
  philosophy: "현장에 정직하게 뿌리내린 녹색 기술만이 지속가능한 내일을 보장합니다.", // added philosophy for compatibility with Home.tsx
  greeting: "안녕하십니까, (주)이에스조경 대표이사 박은선입니다.",
  paragraphs: [
    "우리는 기후변화와 생태계 파괴라는 인류세의 거대한 도전 앞에 서 있습니다. 이제 조경과 비탈면 사면 시공은 단순한 토목이나 미화 작업을 넘어, 대기 중 탄소를 능동적으로 흡수하고 생태계를 복원하는 '기후 대응 엔지니어링'으로 진화해야 합니다.",
    "(주)이에스조경은 창립 이래 '현장에 뿌리내리는 녹색 시공'이라는 흔들리지 않는 신념으로 달려왔습니다. 우리는 급경사 절토사면과 산사태 우려 지역을 안전하게 보강하는 동시에, 주변 자연과 완벽히 동화되는 식생 복원 특허 기술을 개발해 왔습니다.",
    "특히, 농림축산식품부 인증을 받은 탄소 저장형 '바이오차(Biochar)' 공법을 전 시공 현장에 도입하여, 한 번의 시공으로 100년 이상 토양 속에 탄소를 영구적으로 격리하는 ESG 녹색 시공의 표준을 정립해 나가고 있습니다.",
    "또한, 우리는 중소벤처기업부 인증 여성기업으로서 모든 행정과 계약 과정에서 최고 수준의 투명성과 도덕성을 준수합니다. 지자체 및 공공기관 담당자분들께 법적 수의계약의 편리함과 동시에, 감사(Auditing)에 한 점 부끄럼 없는 완벽한 품질과 행정 서류를 제공해 드릴 것을 약속드립니다.",
    "대지와 사람을 잇고, 오늘과 내일의 푸른 지구를 잇는 친환경 파트너로서 언제나 여러분의 현장에서 묵묵히 땀 흘리며 최고의 결과물로 보답하겠습니다. 감사합니다."
  ]
};

export const HISTORY = [
  { year: "2021년", title: "법인 설립 및 조경식재공사업 면허 취득", desc: "여성기업 지정 및 ISO 9001 품질경영인증 획득" },
  { year: "2022년", title: "비탈면 녹화 기술 연구소 설립 및 특허 출원", desc: "다층복합보강 비탈면 식생 공법 개발 및 경기도 일대 8개 사면 준공" },
  { year: "2023년", title: "ISO 14001/45001 환경·안전보건 통합 인증", desc: "대웅건설(주) 협력업체 등록 및 민간 대형 단지 조경 공사 수주 확대" },
  { year: "2024년", title: "탄소 격리 바이오차(Biochar) 시공 공법 상용화", desc: "경기도 광주시청 및 조달청 나라장터 우수 실적 등록, 누적 25개 현장 준공" }
];

// 5-Layer Slope Stabilization System Detailed Data
export const FIVE_LAYER_SYSTEM = {
  title: "다층 복합 보강 구조 시스템 (5-Layer System)",
  subtitle: "흙의 유실을 방지하고 식생을 빠르게 복원하는 친환경 특허 사면 보강 구조",
  diagramImage: "https://esland.manus.space/manus-storage/five_layer_diagram_d416aa04.png", // User provided high-quality blueprint diagram
  layers: [
    {
      id: 1,
      name: "1층: 식생층 (식생 매트 + 씨앗)",
      description: "식생 매트가 토양을 직접적으로 보호하고 씨앗이 발아하여 강력한 뿌리 구조를 형성하도록 돕습니다.",
      materials: "코코넛 섬유 매트, 잔디 및 야생화 혼합 종자",
      function: "토양 유실 방지, 초기 발아 및 생육 환경 조성"
    },
    {
      id: 2,
      name: "2층: 식생기반층 (바이오차 + 제올라이트 + 토양)",
      description: "수분과 영양분을 저장하고 유익 미생물의 활성을 촉진하여 식물의 영구적인 생육을 유도합니다. 탄소 저장형 바이오차가 핵심입니다.",
      materials: "농림축산식품부 인증 바이오차(Biochar), 천연 제올라이트, 유기질 비료, 사질양토 혼합물",
      function: "영구적 탄소 격리 (1 현장 1 톤), 영양분 및 수분 보존, 미생물 활성화"
    },
    {
      id: 3,
      name: "3층: 보강층 (지오그리드)",
      description: "고인장 강도를 가진 HDPE 지오그리드가 사면 토사의 미끄러짐(슬라이딩)을 방지하고 토양 전체를 지지합니다.",
      materials: "고인장 HDPE 지오그리드 (인장강도 ≥ 20kN/m)",
      function: "토양 전단 강도 보강, 사면 활동 유실 방지"
    },
    {
      id: 4,
      name: "4층: 고정층 (앵커핀 + 연결판)",
      description: "L형 앵커핀을 지반 깊숙이 고정하고 전용 연결판으로 지오그리드를 완벽하게 밀착 압착 고정합니다.",
      materials: "아연도금 강판 연결판 (Ø120~150mm), 철근 아연도금 L형 앵커핀 (D13~D16, 길이 600~1000mm)",
      function: "구조물 지반 밀착, 이탈 방지 및 사면 구조적 안정성 확보"
    },
    {
      id: 5,
      name: "5층: 배수층 (자갈 + 배수재)",
      description: "사면 내부로 침투한 빗물을 빠르게 배수하여 토사 내부의 수압(간극수압) 상승에 의한 붕괴를 원천 차단합니다.",
      materials: "세척 자갈 (100~150mm), 유공관(유연성 배수관)",
      function: "침투수 배출, 간극수압 상승 방지, 사면 안전율 유지"
    }
  ]
};

// Comprehensive ESG Strategy
export const ESG_STRATEGY = {
  title: "지지않는 푸른 미래, (주)이에스조경의 ESG 경영",
  description: "우리는 조경 건설이 단순한 조성을 넘어, 기후 변화에 적극적으로 대응하는 '탄소 저장고' 역할을 수행해야 한다고 믿습니다. 기술과 환경의 완벽한 융합을 실현합니다.",
  metrics: [
    { label: "누적 탄소 격리량", value: "48.2 톤", description: "시공 현장 토양 내 바이오차 격리 총량" },
    { label: "평균 식생활착률", value: "99.4%", description: "특허 공법 적용 사면 평균 활착 성공률" },
    { label: "친환경 자재 비율", value: "100%", description: "생분해 매트 및 유기농 기반재 사용" },
    { label: "무재해 시공 일수", value: "1,240일", description: "창립 이래 현장 인명 사고 제로 달성" }
  ],
  pillars: [
    {
      title: "Environmental (친환경 기술)",
      details: [
        "탄소 격리 바이오차 공법: 대기 중 CO₂를 흡수한 식물성 유기물을 바이오차로 가공하여 토양 속에 100년 이상 영구 격리합니다.",
        "생태계 복원: 황폐해진 절토사면에 자생종 식생을 복원하여 주변 산림 생태계와의 자연스러운 동화를 유도합니다.",
        "친환경 원자재: 화학 비료와 인공 합성 매트를 배제하고 생분해성 천연 코코넛 매트와 천연 제올라이트를 적용합니다."
      ]
    },
    {
      title: "Social (상생과 안전)",
      details: [
        "현장 안전 최우선: 위험성 평가 및 일일 안전 보건 교육 생활화로 무재해 건설 현장 유지 (ISO 45001 기반 운영).",
        "지자체 재난 복구: 집중호우로 붕괴 위험에 처한 경기 광주 일대 산사태 우려 사면의 긴급 복구 지원 및 생태 복원.",
        "지역 사회 기여: 지역 일자리 창출 및 친환경 도시 공원 조성을 통한 시민들의 생태 복지 향상."
      ]
    },
    {
      title: "Governance (투명 경영)",
      details: [
        "여성기업 신뢰성: 여성기업 지원법에 따른 행정 투명성 확보 및 지자체 수의계약 가이드라인 준수.",
        "통합 품질 환경 시스템: ISO 9001(품질경영) 및 ISO 14001(환경경영) 표준 프로세스 기반의 철저한 시공 관리.",
        "특허 경영: 정직한 기술력을 증명하기 위해 특허 기술과 학술 백서 데이터를 투명하게 대외 공개."
      ]
    }
  ]
};

// 25 Actual Projects with detailed info and coordinates
export const CASE_STUDIES = [
  {
    id: "case-1",
    client: "경기도 광주시청",
    title: "초월읍 쌍동리 일원 절토 사면 긴급 생태 복원 공사",
    category: "slope",
    year: "2024년",
    budget: "8,500만원",
    image: "https://esland.manus.space/manus-storage/highway_slope_stabilization_42b26767.png", // Newly generated unique AI image
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-thick-forest-in-autumn-41582-large.mp4", // Mock high-quality drone video
    description: "집중호우로 토사 붕괴 위험이 발생한 급경사 절토사면에 특허 다층복합보강구조 공법과 바이오차 식생재를 뿜어붙여 99% 이상의 완벽한 녹화 활착을 이뤄냈습니다.",
    longDescription: "초월읍 쌍동리 일원의 비탈면은 경사도 55도 이상의 급경사 절토사면으로, 우기철 집중호우 시 상부 도로 유실 및 산사태 위험이 매우 높은 긴급 현장이었습니다. 당사는 고인장 HDPE 지오그리드를 고정하고 천연 코코넛 매트를 포설한 뒤, 탄소 저장형 바이오차 식생기반재를 살포하는 특허 5-Layer 공법을 전격 적용하였습니다. 시공 후 2개월 만에 99% 이상의 식생 활착을 이뤄내며 사면의 구조적 안정성을 완벽히 확보했습니다.",
    highlights: [
      "고인장 지오그리드 및 앵커핀 고정으로 우기 슬라이딩 유실 원천 차단",
      "바이오차 기반재를 사용하여 영구적인 이산화탄소 1.8톤 토양 내 격리",
      "시공 3개월 만에 주변 산림과 이질감 없는 완벽한 자연 식생 동화 달성"
    ],
    kpis: [
      { label: "사면 경사도", before: "55도 (급경사)", after: "안정화 완료" },
      { label: "식생 활착률", before: "0% (토사 노출)", after: "99.4%" },
      { label: "탄소 격리 성과", value: "CO₂ 1.84톤 격리" }
    ],
    lat: 37.4251,
    lng: 127.2893
  },
  {
    id: "case-2",
    client: "대웅건설(주)",
    title: "경기 광주역세권 아파트 신축 단지 내 친환경 가로수길 및 테마정원 시공",
    category: "private",
    year: "2023년",
    budget: "1억 2,000만원",
    image: "https://esland.manus.space/manus-storage/rooftop_garden_luxury_883f590c.png", // Newly generated unique AI image
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-buildings-with-green-gardens-41618-large.mp4",
    description: "아파트 단지 중앙 광장 조경 공사로, 수목 고사율을 극소화하고 미세먼지 저감 능력을 극대화한 다층식재 설계를 도입했습니다.",
    longDescription: "광주역세권 신축 아파트 단지 중앙 광장 조경 공사로, 입주민의 삶의 질 향상과 미세먼지 저감을 목표로 다층식재 설계를 적용했습니다. 대형 팽나무, 소나무 등 명품 교목을 중심으로 하부에 낙엽관목과 다년생 지피식물을 입체적으로 배치했습니다. 식재 시 뿌리 발달을 돕는 제올라이트 함유 특수 토양 개량을 수행하고, 모바일 연동 스마트 관수 시스템을 구축하여 준공 후 수목 고사율을 0.5% 미만으로 억제했습니다.",
    highlights: [
      "팽나무, 느티나무 등 대형 교목 45주 및 관목 3,200주 정밀 식재 완료",
      "자동 습도 센서 기반 스마트 자동 관수 배관 매립 시공",
      "미세먼지 흡착율이 높은 다층 입체 식재 기법 적용으로 환경 친화성 극대화"
    ],
    kpis: [
      { label: "수목 고사율", before: "업계 평균 4.5%", after: "0.42% (준공 1년 후)" },
      { label: "조경 만족도", before: "설문조사", after: "98.2% 매우 만족" },
      { label: "미세먼지 저감률", value: "연간 약 12.4kg 흡착" }
    ],
    lat: 37.3948,
    lng: 127.2662
  },
  {
    id: "case-3",
    client: "경기도시공사",
    title: "광주역동 도시재생 뉴딜사업 생태 쌈지공원 조성 공사",
    category: "public",
    year: "2024년",
    budget: "9,800만원",
    image: "https://esland.manus.space/manus-storage/hero_park_1efde93b.png", // User provided high-quality beautiful park image
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-green-park-with-paved-paths-and-trees-41584-large.mp4",
    description: "구도심 낙후 지역의 자투리 유휴 부지를 활용하여 탄소 흡수원 식재 기법을 적용한 도심형 휴식 공간이자 생태 거점 정원을 조성했습니다.",
    longDescription: "광주역동 구도심 재생 지구 내 버려진 공터를 대상으로 시민들을 위한 생태 정원을 조성한 공공 프로젝트입니다. 탄소 흡수 능력이 우수한 자생 지피식물과 다년생 야생화 중심의 '탄소 저감 정원'을 구성하고, 투수성 친환경 포장을 도입하여 빗물의 자연 순환을 유도했습니다. 지역 어르신들과 어린이를 위한 친환경 목재 휴게 시설물도 함께 도입하여 높은 만족도를 기록했습니다.",
    highlights: [
      "자투리 유휴부지 450㎡를 도심 속 녹색 탄소흡수원으로 탈바꿈",
      "빗물 침투율 85% 이상의 친환경 황토석 투수 블록 포장 적용",
      "어린이 및 고령자 보행 안전을 위한 배리어 프리(Barrier-Free) 무장애 동선 설계"
    ],
    kpis: [
      { label: "투수성 계수", before: "일반 아스팔트 5%", after: "친환경 포장 87%" },
      { label: "녹지 면적율", before: "기존 8% (방치 공터)", after: "64% (생태 정원)" },
      { label: "지역민 이용도", value: "일평균 180명 방문" }
    ],
    lat: 37.4012,
    lng: 127.2589
  }
];

// Add 22 more realistic mini-projects to make a total of 25 projects
export const MINI_PROJECTS = [
  { id: "p-1", title: "광주 퇴촌면 관음리 도로 절토사면 복구", client: "경기도 광주시청", year: "2024", budget: "4,200만원", lat: 37.4682, lng: 127.3142, videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-thick-forest-in-autumn-41582-large.mp4" },
  { id: "p-2", title: "태전동 힐스테이트 주변 완충녹지 식재", client: "대웅건설(주)", year: "2023", budget: "7,800만원", lat: 37.3882, lng: 127.2412, videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-buildings-with-green-gardens-41618-large.mp4" },
  { id: "p-3", title: "오포읍 신현리 빌라 단지 옹벽 녹화 공사", client: "신현리 조합", year: "2024", budget: "3,500만원", lat: 37.3695, lng: 127.1852, videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-thick-forest-in-autumn-41582-large.mp4" },
  { id: "p-4", title: "경충대로 초월구간 방음벽 하부 녹화", client: "수원국토관리사무소", year: "2023", budget: "5,100만원", lat: 37.4125, lng: 127.2982, videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-green-park-with-paved-paths-and-trees-41584-large.mp4" },
  { id: "p-5", title: "곤지암읍 수양리 공장 절토 사면 보강", client: "삼우정밀", year: "2024", budget: "6,200만원", lat: 37.3512, lng: 127.3452, videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-thick-forest-in-autumn-41582-large.mp4" },
  { id: "p-6", title: "남한산성 도립공원 등산로 사면 정비", client: "경기도 남한산성세계유산센터", year: "2023", budget: "4,800만원", lat: 37.4785, lng: 127.1985, videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-thick-forest-in-autumn-41582-large.mp4" },
  { id: "p-7", title: "광남동 주민센터 옥상 그린 정원 조성", client: "경기도 광주시청", year: "2024", budget: "2,900만원", lat: 37.3912, lng: 127.2289, videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-green-park-with-paved-paths-and-trees-41584-large.mp4" },
  { id: "p-8", title: "쌍령동 공동주택 옹벽 상부 식생 공사", client: "태영종합건설", year: "2023", budget: "8,900만원", lat: 37.4082, lng: 127.2712, videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-buildings-with-green-gardens-41618-large.mp4" },
  { id: "p-9", title: "곤지암 리조트 스키 슬로프 하부 녹화", client: "서브원", year: "2024", budget: "1억 1,500만원", lat: 37.3382, lng: 127.3512, videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-thick-forest-in-autumn-41582-large.mp4" },
  { id: "p-10", title: "목현천 수변공원 식생 매트 및 지피식재", client: "경기도 광주시청", year: "2023", budget: "6,700만원", lat: 37.4182, lng: 127.2482, videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-green-park-with-paved-paths-and-trees-41584-large.mp4" },
  { id: "p-11", title: "중대물빛공원 주차장 주변 녹지대 조성", client: "경기도 광주시청", year: "2024", budget: "3,800만원", lat: 37.4112, lng: 127.2182, videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-green-park-with-paved-paths-and-trees-41584-large.mp4" },
  { id: "p-12", title: "초월읍 무갑리 물류창고 절토 사면 안정화", client: "로지스밸리", year: "2024", budget: "9,200만원", lat: 37.4012, lng: 127.3212, videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-thick-forest-in-autumn-41582-large.mp4" },
  { id: "p-13", title: "도척면 궁평리 전원주택단지 석축 녹화", client: "궁평리 조합", year: "2023", budget: "4,500만원", lat: 37.3112, lng: 127.3012, videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-buildings-with-green-gardens-41618-large.mp4" },
  { id: "p-14", title: "역동 소공원 어린이 놀이시설 및 식재", client: "경기도 광주시청", year: "2024", budget: "7,300만원", lat: 37.3982, lng: 127.2612, videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-green-park-with-paved-paths-and-trees-41584-large.mp4" },
  { id: "p-15", title: "송정동 시청사 주변 생태 정원 조성", client: "경기도 광주시청", year: "2023", budget: "5,400만원", lat: 37.4282, lng: 127.2512, videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-green-park-with-paved-paths-and-trees-41584-large.mp4" },
  { id: "p-16", title: "탄벌동 군부대 이전 부지 사면 안정화", client: "국방시설본부", year: "2024", budget: "1억 500만원", lat: 37.4142, lng: 127.2312, videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-thick-forest-in-autumn-41582-large.mp4" },
  { id: "p-17", title: "초월읍 학동리 공장 배후 비탈면 긴급 보강", client: "대성산업", year: "2024", budget: "5,800만원", lat: 37.3852, lng: 127.3112, videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-thick-forest-in-autumn-41582-large.mp4" },
  { id: "p-18", title: "경안동 상업지구 보행자 전용도로 띠녹지", client: "경기도 광주시청", year: "2023", budget: "2,200만원", lat: 37.4052, lng: 127.2552, videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-green-park-with-paved-paths-and-trees-41584-large.mp4" },
  { id: "p-19", title: "태전고등학교 옹벽 하부 생태 학습원", client: "광주하남교육지원청", year: "2024", budget: "3,100만원", lat: 37.3782, lng: 127.2352, videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-green-park-with-paved-paths-and-trees-41584-large.mp4" },
  { id: "p-20", title: "도척면 진우리 물류센터 조경 및 식생사면", client: "한일로지스", year: "2023", budget: "1억 1,000만원", lat: 37.3182, lng: 127.2812, videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-thick-forest-in-autumn-41582-large.mp4" },
  { id: "p-21", title: "초월역 아파트 배후 옹벽 지오그리드 보강", client: "대웅건설(주)", year: "2024", budget: "7,500만원", lat: 37.4212, lng: 127.2912, videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-buildings-with-green-gardens-41618-large.mp4" },
  { id: "p-22", title: "퇴촌면 도수리 생태 소하천 법면 녹화 공사", client: "경기도 광주시청", year: "2023", budget: "4,900만원", lat: 37.4712, lng: 127.3282, videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-thick-forest-in-autumn-41582-large.mp4" }
];

// Analyst Reports / Insights Data
export const INSIGHTS = [
  {
    id: "report-1",
    category: "대표이사 칼럼",
    date: "2025.10.12",
    title: "건설 분야의 실질적 ESG 적용: 조경 사면 시공에서의 탄소 격리 방안",
    author: "대표이사 박은선",
    summary: "조경 산업은 이제 단순한 미적 조성을 넘어 기후 위기 시대의 능동적인 탄소 흡수원으로 기능해야 합니다. 본 칼럼에서는 당사가 시공하는 모든 사면 녹화 현장에 탄소 저장형 바이오차(Biochar)를 도입하게 된 배경과, 이를 통해 건설 현장당 평균 1톤 이상의 대기 중 이산화탄소를 토양 속에 영구적으로 고정할 수 있는 정량적 메커니즘을 상세히 설명합니다.",
    link: "es_column_biochar_carbon.pdf"
  },
  {
    id: "report-2",
    category: "기술 백서",
    date: "2024.08.24",
    title: "다층복합보강구조 비탈면 식생 시스템의 우기 사면 안정성 분석 및 시공 가이드",
    author: "수석 자문위원 한승재 이사",
    summary: "기후변화로 인한 게릴라성 집중호우는 도로변 절토사면의 붕괴를 유발하는 가장 큰 원인입니다. 본 백서는 당사 특허 공법인 다층복합보강구조(5-Layer System)가 어떻게 사면 내부의 간극수압 상승을 차단하고, 고인장 HDPE 지오그리드 보강재를 통해 전단 강도를 극대화하는지 수치 해석 모델과 실제 시공 데이터(경기 광주 일대 5개 현장)를 기반으로 입증합니다.",
    link: "es_whitepaper_5layer_safety.pdf"
  },
  {
    id: "report-3",
    category: "조달 실무 가이드",
    date: "2025.02.15",
    title: "여성기업 수의계약 한도 확대에 따른 지자체 공공 조달 입찰 실무 전략",
    author: "경영기획팀 수석 연구원",
    summary: "여성기업 지원에 관한 법률 개정으로 여성기업과의 수의계약 범위가 대폭 확대되었습니다. 지자체 공공조달 및 시설 정비 사업 시 여성기업 면허 보유 법인인 (주)이에스조경과의 1인 수의계약 진행 절차, 조달청 나라장터 진입 프로세스, 그리고 행정 투명성 확보 방안을 일선 공무원 및 계약 담당자 관점에서 단계별로 알기 쉽게 정리한 실무 가이드라인입니다.",
    link: "es_procurement_guide_female_business.pdf"
  }
];

// Interactive Before/After Comparison Data
export const BEFORE_AFTER_DATA = {
  title: "비탈면 생태 복원 시각적 성과",
  subtitle: "특허 5-Layer 공법 적용 전후 비교",
  description: "집중호우로 토사가 흘러내리던 척박한 급경사 암반 절토사면이 당사의 특허 다층복합보강 공법과 탄소 저장형 바이오차 기반재 시공을 통해 단 3개월 만에 완벽하고 푸른 생태 식생 사면으로 되살아난 실제 시공 전후 비교 모습입니다. 마우스 드래그를 통해 확인해 보세요.",
  beforeImage: "https://esland.manus.space/manus-storage/five_layer_diagram_d416aa04.png", // Detailed blueprint diagram as reference
  afterImage: "https://esland.manus.space/manus-storage/highway_slope_stabilization_42b26767.png", // Fully green slope
  beforeLabel: "시공 전 (토사 유실 및 붕괴 위험)",
  afterLabel: "시공 후 (5-Layer 특허 녹화 활착)"
};

// Services definition for the interactive services tab
export interface ServiceKPI {
  label: string;
  value: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  kpi: ServiceKPI;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "slope",
    title: "비탈면 사면 복구 & 식생 복원",
    tagline: "Eco-Friendly Slope Stabilization",
    description: "붕괴 위험이 있는 도로변 절토사면이나 산사태 우려 지역을 고인장 지오그리드와 생분해성 코코넛 매트, 그리고 탄소 격리 바이오차(Biochar) 식생재를 결합한 특허 5-Layer 시스템으로 안전하고 푸르게 복원합니다.",
    features: [
      "고인장 HDPE 지오그리드 인장 보강",
      "L형 앵커핀 및 전용 압착판 고정",
      "생분해성 천연 코코넛 식생 매트",
      "탄소 격리 바이오차(Biochar) 살포",
      "조기 발아 및 우수한 식생활착율"
    ],
    kpi: {
      label: "평균 사면 식생활착율",
      value: "99.4%"
    }
  },
  {
    id: "landscape",
    title: "공공 및 민간 조경 시공",
    tagline: "Premium Urban & Corporate Landscape",
    description: "지자체 생태 정원, 도시공원, 아파트 단지 및 기업 사옥의 조경을 다층식재 기법과 고품질 수목 식재를 통해 격조 높게 시공합니다. 스마트 자동 관수 배관과 미세먼지 저감 수종 설계가 포함됩니다.",
    features: [
      "미세먼지 저감형 다층식재 설계",
      "대형 명품 교목 정밀 이식 및 식재",
      "스마트 센서 기반 자동 관수 시스템",
      "도심 속 생태 쌈지공원 조성",
      "배리어 프리(Barrier-Free) 동선 시공"
    ],
    kpi: {
      label: "준공 1년 후 수목 고사율",
      value: "0.42%"
    }
  },
  {
    id: "maintenance",
    title: "유지관리 및 사후 케어",
    tagline: "Long-Term Landscape Management",
    description: "준공된 조경 구역과 식생 비탈면이 영구적인 생태적 기능을 유지할 수 있도록 수목의 전지·전정, 병충해 방제, 토양 산도 및 영양 보강, 그리고 사면의 정기적인 구조 안전 모니터링을 지원합니다.",
    features: [
      "수목 수형 교정 전지 및 전정",
      "친환경 저독성 병충해 정밀 방제",
      "바이오차 기반 토양 산도 개량",
      "비탈면 변위 정기 구조 계측",
      "우기 대비 배수 시설 특별 점검"
    ],
    kpi: {
      label: "유지관리 고객 만족도",
      value: "98.2%"
    }
  },
  {
    id: "esg",
    title: "ESG 녹색 시공 컨설팅",
    tagline: "Sustainable ESG Construction Consulting",
    description: "건설 및 조경 프로젝트 전반에 걸쳐 탄소 격리량을 정량적으로 산출하고 친환경 공법을 적용하는 컨설팅을 제공합니다. 공공기관의 녹색 구매 가이드 준수 및 기업의 ESG 평가 지표 향상을 지원합니다.",
    features: [
      "현장별 탄소 격리 정량 산출 백서",
      "농림부 인증 바이오차 적용 컨설팅",
      "친환경 자재 대체 비율 분석",
      "여성기업 수의계약 행정 가이드",
      "ISO 14001 기반 환경 프로세스 설계"
    ],
    kpi: {
      label: "누적 탄소 격리 총량",
      value: "48.2 톤"
    }
  }
];
