import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MapView } from "../components/Map";
import {
  SERVICES,
  CASE_STUDIES,
  INSIGHTS,
  CEO_MESSAGE,
  COMPANY_INFO,
  HISTORY,
  BEFORE_AFTER_DATA,
  TECHNICIANS,
} from "../const";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Award,
  Sparkles,
  Trees,
  Heart,
  Leaf,
  User,
  MapPin,
  Phone,
  Printer,
  Mail,
  Flame,
  Car,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import heroPortrait from "../../ceopics.png";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("slope");
  const [portfolioFilter, setPortfolioFilter] = useState<string>("all");
  const [selectedCase, setSelectedCase] = useState<
    (typeof CASE_STUDIES)[0] | null
  >(null);

  // Carbon Calculator State
  const [areaInput, setAreaInput] = useState<string>("1000");

  // Before/After Slider State
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleSliderMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleSliderMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  // Google Maps GIS Tracker
  const mapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.marker.AdvancedMarkerElement[]>([]);

  const handleMapReady = (map: google.maps.Map) => {
    mapRef.current = map;

    // Clear old markers if any
    markersRef.current.forEach(m => (m.map = null));
    markersRef.current = [];

    // Add Markers for each case study
    CASE_STUDIES.forEach(study => {
      if (!study.lat || !study.lng) return;

      const pinElement = document.createElement("div");
      pinElement.className =
        "flex items-center justify-center h-8 w-8 rounded-full bg-primary border-2 border-background shadow-lg text-primary-foreground font-serif text-[10px] font-bold cursor-pointer hover:scale-110 transition-transform";
      pinElement.innerText = "ES";

      const marker = new google.maps.marker.AdvancedMarkerElement({
        map,
        position: { lat: study.lat, lng: study.lng },
        title: study.title,
        content: pinElement,
      });

      // Info Window for Marker Click
      const infoContent = `
        <div style="padding: 10px; max-width: 250px; text-align: left; font-family: sans-serif;">
          <span style="font-size: 9px; font-weight: bold; color: #1F7A3A; text-transform: uppercase; letter-spacing: 1px;">${study.client}</span>
          <h4 style="margin: 4px 0 6px; font-size: 13px; font-weight: bold; color: #173B57;">${study.title}</h4>
          <p style="margin: 0 0 8px; font-size: 11px; color: #6B6B5F; line-height: 1.4;">${study.description}</p>
          <div style="font-size: 10px; font-weight: bold; color: #1F7A3A;">실적 규모: ${study.budget}</div>
        </div>
      `;

      const infoWindow = new google.maps.InfoWindow({
        content: infoContent,
      });

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });

      markersRef.current.push(marker);
    });

    // Center map to show all pins
    if (CASE_STUDIES.length > 0) {
      const bounds = new google.maps.LatLngBounds();
      CASE_STUDIES.forEach(study => {
        if (study.lat && study.lng) {
          bounds.extend({ lat: study.lat, lng: study.lng });
        }
      });
      map.fitBounds(bounds);
    }
  };

  // Real-time calculation helper based on PDF parameters:
  const calculateMetrics = () => {
    const area = parseFloat(areaInput) || 0;
    const co2SequestrationKg = area * 2.0;
    const co2SequestrationTons = co2SequestrationKg / 1000;
    const treeEquivalent = co2SequestrationKg / 6.6;
    const carDistanceReductionKm = co2SequestrationKg / 0.12;

    return {
      co2Kg: co2SequestrationKg.toLocaleString(undefined, {
        maximumFractionDigits: 1,
      }),
      co2Tons: co2SequestrationTons.toLocaleString(undefined, {
        maximumFractionDigits: 2,
      }),
      trees: Math.round(treeEquivalent).toLocaleString(),
      carKm: Math.round(carDistanceReductionKm).toLocaleString(),
    };
  };

  const metrics = calculateMetrics();

  // Lead Qualification Form State
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    projectType: "",
    slopeAngle: "",
    budget: "",
    details: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const subject = encodeURIComponent(
        `[무료 진단/문의] ${formData.companyName} (${formData.contactPerson})`
      );
      const body = encodeURIComponent(
        [
          "아래 내용으로 무료 진단/문의가 접수되었습니다.",
          "",
          `회사/기관명: ${formData.companyName}`,
          `담당자명: ${formData.contactPerson}`,
          `연락처: ${formData.phone}`,
          `이메일: ${formData.email}`,
          "",
          `요청 공사 구분: ${formData.projectType || "-"}`,
          `사면 경사도: ${formData.slopeAngle || "-"}`,
          `예산 규모: ${formData.budget || "-"}`,
          "",
          "상세 내용:",
          formData.details,
          "",
          `접수 경로: ${window.location.href}`,
        ].join("\n")
      );

      // Client-side only: open the user's mail client prefilled to the target inbox.
      window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;

      toast.success("메일 작성 화면을 열었습니다. 전송을 눌러 제출을 완료해 주세요.");
      
      setStep(1);
      setFormData({
        companyName: "",
        contactPerson: "",
        phone: "",
        email: "",
        projectType: "",
        slopeAngle: "",
        budget: "",
        details: "",
      });
    } catch (error) {
      toast.error("에러가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredPortfolio =
    portfolioFilter === "all"
      ? CASE_STUDIES
      : CASE_STUDIES.filter(item => item.category === portfolioFilter);

  const esgPoints = [
    {
      icon: <Trees className="h-5 w-5 text-primary" />,
      title: "E (Environment) - 기후변화 대응",
      desc: "특허받은 탄소 저장형 바이오차 기반재를 전면 사용하여 시공 현장당 평균 1톤 이상의 탄소를 토양 속에 격리합니다. 또한 100% 생분해성 코코넛 섬유 매트로 미세 플라스틱 발생을 원천 차단합니다.",
    },
    {
      icon: <Heart className="h-5 w-5 text-primary" />,
      title: "S (Social) - 지역 상생 및 기여",
      desc: "경기 광주 및 인근 지역의 전문 조경 기능공을 우선 채용하여 지역 일자리를 창출합니다. 매년 요양원 및 사회복지시설에 무상 기부 힐링 정원을 시공하며 도심 속 생태 복지에 앞장서고 있습니다.",
    },
    {
      icon: <Award className="h-5 w-5 text-primary" />,
      title: "G (Governance) - 신뢰와 상생 경영",
      desc: "중소벤처기업부 인증 여성기업으로서 다양성과 투명한 거버넌스를 추구합니다. 창립 이래 0%의 안전사고율을 유지하며, ISO 9001/14001/45001 통합 경영 시스템을 구축하여 공정하고 안전한 준공을 보장합니다.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="flex-grow">
        {/* SECTION 1: Cinematic Split Hero */}
        <section
          id="home"
          className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-to-b from-[#F5F6F0]/60 via-background to-background"
        >
          <div className="absolute top-1/4 left-1/4 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 -z-10 h-96 w-96 rounded-full bg-secondary/5 blur-[100px]" />

          <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
            {/* Left Column: Value Proposition */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs text-primary font-bold tracking-wide w-fit">
                <Sparkles className="h-4 w-4 text-primary" />
                뿌리에서 미래로 — 친환경 조경 및 사면 복원의 새로운 표준
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-[#173B57]">
                자연을 복원하고,
                <br />
                지속가능한 가치를
                <br />
                <span className="text-primary">설계합니다.</span>
              </h1>

              <p className="text-[#6B6B5F] text-sm sm:text-base max-w-xl leading-relaxed font-medium">
                특허 등록된 다층복합보강구조 시스템과 친환경 바이오차 공법으로
                무너진 절·급경사 사면을 살려내며, 도심 속에 탄소를 흡수하는
                고품격 조경 솔루션을 제안합니다. (주)이에스조경은 사람과 자연이
                함께 숨 쉬는 내일을 짓습니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="btn-gold h-12 px-6 text-sm font-bold cursor-pointer"
                >
                  무료 현장 진단 및 상담 <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  onClick={() => scrollToSection("services")}
                  className="btn-outline-gold h-12 px-6 text-sm font-bold cursor-pointer"
                >
                  사업 영역 탐색
                </Button>
              </div>

              {/* Quick Trust Badges */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border max-w-lg">
                <div className="flex flex-col">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-primary">
                    2020년
                  </span>
                  <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mt-1">
                    회사 설립 연도
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-secondary-foreground">
                    25건
                  </span>
                  <span className="text-[10px] text-primary font-bold uppercase tracking-wider mt-1">
                    누적 준공 실적
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-primary">
                    9.8억원
                  </span>
                  <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mt-1">
                    2025년 시공능력평가액
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Interactive CEO Portrait Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary/20 via-secondary/20 to-primary/30 opacity-40 blur transition-all duration-500 group-hover:opacity-60" />

                <div className="relative rounded-2xl overflow-hidden border border-border bg-card p-4 flex flex-col gap-4 shadow-xl">
                  {/* Image container */}
                  <div className="aspect-[3/4] w-full rounded-xl overflow-hidden relative border border-border/80">
                    <img
                      src={heroPortrait}
                      alt="박은선 대표이사"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />

                    {/* Floating Info on Image */}
                    <div className="absolute bottom-4 left-4 right-4 text-left">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                        Representative Director
                      </span>
                      <h3 className="font-serif text-xl font-bold text-foreground mt-0.5">
                        박은선 대표이사
                      </h3>
                    </div>
                  </div>

                  {/* Short Quote */}
                  <blockquote className="text-xs text-muted-foreground font-semibold italic leading-relaxed text-left border-l-2 border-primary/40 pl-3 py-1">
                    &ldquo;우리가 하는 일은 단순한 공사가 아닌, 무너진 생태계를
                    되살리는 지속가능한 복원입니다.&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: About (CEO, Company Info & History) */}
        <section
          id="about"
          className="py-24 border-t border-border relative bg-card/10"
        >
          <div className="absolute top-1/3 left-1/4 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-[100px]" />

          <div className="container">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
                About Us
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#173B57]">
                사람과 자연이 함께 숨 쉬는{" "}
                <span className="text-primary">다음 세대의 조경</span>
              </h2>
              <p className="text-[#6B6B5F] text-sm leading-relaxed font-medium">
                (주)이에스조경은 조경식재 및 조경시설물 설치공사를 핵심 사업으로
                삼고, 독자적인 친환경 기술력과 투명한 신뢰 경영을 통해 미래 환경
                가치를 창출하는 전문건설 법인입니다.
              </p>
            </div>

            <div className="flex justify-center mb-16">
              <img
                src="/logo.png?v=3"
                alt="(주)이에스조경"
                className="h-28 w-auto max-h-32 sm:h-32 sm:max-h-40 object-contain"
              />
            </div>

            {/* CEO Message Detail Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
              {/* CEO Image (Single elegant portrait) */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-border shadow-xl aspect-[3/4] max-w-[400px] mx-auto">
                  <img
                    src={CEO_MESSAGE.photo}
                    alt="박은선 대표이사"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* CEO Message Content */}
              <div className="lg:col-span-7 text-left flex flex-col gap-6">
                <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
                  CEO Message
                </span>
                <h3 className="font-serif text-3xl font-bold tracking-tight text-[#173B57]">
                  &ldquo;뿌리가 깊은 나무는
                  <br />
                  <span className="text-primary">흔들리지 않습니다.</span>
                  &rdquo;
                </h3>
                <blockquote className="border-l-2 border-primary/40 pl-4 py-1 italic text-[#6B6B5F] text-sm leading-relaxed font-medium">
                  {CEO_MESSAGE.philosophy}
                </blockquote>

                <div className="flex flex-col gap-4 text-sm text-[#6B6B5F] leading-relaxed font-medium">
                  {CEO_MESSAGE.paragraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="font-serif text-lg font-bold text-foreground">
                      박 은 선
                    </span>
                    <span className="text-xs text-muted-foreground font-semibold">
                      대표이사, (주)이에스조경
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs text-primary font-bold">
                    여성기업 인증 (수의계약 우대 법인)
                  </div>
                </div>
              </div>
            </div>

            {/* Company Administrative Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24 pt-16 border-t border-border/60">
              <div className="lg:col-span-4 text-left flex flex-col gap-4">
                <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
                  Corporate Overview
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#173B57]">
                  기업 개요 및 공신력
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                  (주)이에스조경은 자본금 1억 5,500만원 규모의 탄탄한 재무
                  구조와 전문공제조합 가입을 완료한 정식 등록 법인입니다.
                  여성기업 수의계약 한도 확대 등 공공 입찰 참여에 완벽한 자격을
                  갖추고 있습니다.
                </p>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                <div className="p-5 rounded-xl bg-background border border-border/60 flex flex-col gap-2">
                  <span className="text-[10px] text-primary font-bold uppercase tracking-wider">
                    법인 등록 정보
                  </span>
                  <ul className="text-xs text-[#6B6B5F] font-medium flex flex-col gap-2">
                    <li>
                      <strong>법인명:</strong> 주식회사 이에스조경
                    </li>
                    <li>
                      <strong>설립일:</strong> 2020년 06월 12일
                    </li>
                    <li>
                      <strong>사업자등록번호:</strong> 592-87-01625
                    </li>
                    <li>
                      <strong>법인등록번호:</strong> 205411-0033219
                    </li>
                  </ul>
                </div>
                <div className="p-5 rounded-xl bg-background border border-border/60 flex flex-col gap-2">
                  <span className="text-[10px] text-primary font-bold uppercase tracking-wider">
                    건설업 면허 및 주력분야
                  </span>
                  <ul className="text-xs text-[#6B6B5F] font-medium flex flex-col gap-2">
                    <li>
                      <strong>보유 면허:</strong> 조경식재·시설물공사업
                      (2020-16-05호)
                    </li>
                    <li>
                      <strong>면허 유효기간:</strong> 2026.02.11 ~ 2029.02.10
                    </li>
                    <li>
                      <strong>시공 능력 평가액:</strong> 983,046,000원 (2025년
                      기준)
                    </li>
                    <li>
                      <strong>신용 등급:</strong> EW등급 (CREVIEW 신용평가인증)
                    </li>
                  </ul>
                </div>
                <div className="p-5 rounded-xl bg-background border border-border/60 flex flex-col gap-2 sm:col-span-2">
                  <span className="text-[10px] text-primary font-bold uppercase tracking-wider">
                    대외 공신력 및 인증 혜택
                  </span>
                  <ul className="text-xs text-[#6B6B5F] font-medium grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {COMPANY_INFO.certifications.map((cert, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-5 rounded-xl bg-background border border-border/60 flex flex-col gap-2 sm:col-span-2">
                  <span className="text-[10px] text-primary font-bold uppercase tracking-wider">
                    기술자 보유현황
                  </span>
                  <div className="overflow-x-auto w-full mt-2">
                    <table className="w-full text-xs text-left border-collapse">
                      <thead>
                        <tr className="border-b border-border/60 text-muted-foreground font-semibold">
                          <th className="py-2.5 px-2 whitespace-nowrap">번호</th>
                          <th className="py-2.5 px-2 whitespace-nowrap">성명</th>
                          <th className="py-2.5 px-2 whitespace-nowrap">생년월일</th>
                          <th className="py-2.5 px-2 whitespace-nowrap">보유자격</th>
                          <th className="py-2.5 px-2 whitespace-nowrap">등록번호</th>
                        </tr>
                      </thead>
                      <tbody className="text-[#6B6B5F] font-medium">
                        {TECHNICIANS.map((tech, idx) => (
                          <tr key={idx} className="border-b border-border/30 last:border-0 hover:bg-muted/50 transition-colors">
                            <td className="py-2.5 px-2">{tech.id}</td>
                            <td className="py-2.5 px-2">{tech.name}</td>
                            <td className="py-2.5 px-2">{tech.birth}</td>
                            <td className="py-2.5 px-2">{tech.license}</td>
                            <td className="py-2.5 px-2">{tech.regNo}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* History Timeline */}
            <div className="pt-16 border-t border-border/60">
              <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
                <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
                  Our Journey
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#173B57]">
                  신뢰와 혁신으로 다져온 발자취
                </h3>
              </div>
              <div className="max-w-4xl mx-auto relative border-l border-primary/30 pl-8 flex flex-col gap-10">
                {HISTORY.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative text-left flex flex-col gap-1 group"
                  >
                    <div className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background transition-transform duration-300 group-hover:scale-125" />
                    <span className="font-serif text-sm font-bold text-primary">
                      {item.year}
                    </span>
                    <h4 className="text-sm text-foreground font-bold leading-relaxed">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#6B6B5F] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: ESG & Sustainability Spotlight with Carbon Calculator */}
        <section className="py-24 bg-card/30 border-y border-border/80 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-[100px]" />

          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
                ESG Management
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#173B57]">
                자연과 인간의 상생을 짓는{" "}
                <span className="text-primary">지속가능한 조경</span>
              </h2>
              <p className="text-[#6B6B5F] text-sm leading-relaxed font-medium">
                (주)이에스조경은 단순한 시공을 넘어, 기후변화 대응(E), 지역사회
                상생(S), 투명하고 정직한 준공(G)을 핵심 비즈니스 모델에 통합한
                선도적인 ESG 경영 실천 기업입니다.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              {esgPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="luxury-card flex flex-col gap-4 text-left border-primary/10 hover:border-primary/30 bg-background/80 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/5">
                    {point.icon}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#173B57]">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* INTERACTIVE CARBON CALCULATOR */}
            <div className="max-w-4xl mx-auto rounded-2xl border border-primary/20 bg-background p-8 shadow-xl text-left">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Calculator Input Side */}
                <div className="w-full lg:w-1/2 flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                      Carbon Reduction Simulator
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#173B57]">
                      친환경 바이오차 탄소 저감 계산기
                    </h3>
                    <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                      시공 예정인 비탈면 또는 조경 면적(㎡)을 입력해 보세요.
                      (주)이에스조경의 특허받은 탄소 저장형 바이오차 공법을
                      적용했을 때 영구적으로 격리되는 이산화탄소 감축량을
                      정량적으로 산출해 드립니다.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-bold text-foreground">
                        시공 예정 면적 (㎡)
                      </label>
                      <span className="text-xs font-serif font-bold text-primary">
                        {(parseFloat(areaInput) || 0).toLocaleString()} ㎡
                      </span>
                    </div>

                    <div className="flex gap-4 items-center">
                      <input
                        type="range"
                        min="100"
                        max="10000"
                        step="100"
                        value={areaInput}
                        onChange={e => setAreaInput(e.target.value)}
                        className="flex-grow h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                      />
                      <Input
                        type="number"
                        value={areaInput}
                        onChange={e => setAreaInput(e.target.value)}
                        className="w-24 text-right text-xs font-bold font-serif h-9"
                        placeholder="1000"
                      />
                    </div>
                    <div className="flex justify-between text-[10px] text-muted-foreground font-bold">
                      <span>최소 100 ㎡</span>
                      <span>최대 10,000 ㎡</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-border/80 bg-[#F5F6F0]/50 text-[11px] text-[#6B6B5F] leading-relaxed font-semibold flex gap-2.5 items-start">
                    <Leaf className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong>산출 공식 근거:</strong> 당사의 특허 공법에
                      혼합되는 탄소 저장형 식생기반재는 ㎡당 약 2.0kg의 순수
                      탄소(CO₂)를 대기 중에서 회수하여 토양 속에 반영구적으로
                      가둡니다.
                    </span>
                  </div>
                </div>

                {/* Calculator Results Side */}
                <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                  {/* Result 1: CO2 */}
                  <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 flex items-center gap-4 text-left">
                    <div className="h-10 w-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                      <Flame className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">
                        이산화탄소(CO₂) 영구 격리량
                      </span>
                      <span className="font-serif text-lg sm:text-xl font-bold text-primary mt-0.5">
                        {metrics.co2Kg} kg{" "}
                        <span className="text-xs text-muted-foreground">
                          ({metrics.co2Tons} 톤)
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Result 2: Trees */}
                  <div className="p-4 rounded-xl border border-border bg-background flex items-center gap-4 text-left">
                    <div className="h-10 w-10 rounded-lg bg-secondary text-secondary-foreground flex items-center justify-center shrink-0">
                      <Trees className="h-5 w-5 text-secondary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">
                        연간 소나무 식재 대체 효과
                      </span>
                      <span className="font-serif text-lg sm:text-xl font-bold text-foreground mt-0.5">
                        {metrics.trees} 그루{" "}
                        <span className="text-xs text-muted-foreground">
                          식재 효과
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Result 3: Car */}
                  <div className="p-4 rounded-xl border border-border bg-background flex items-center gap-4 text-left">
                    <div className="h-10 w-10 rounded-lg bg-muted-foreground/10 text-foreground flex items-center justify-center shrink-0">
                      <Car className="h-5 w-5 text-[#6B6B5F]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">
                        승용차 주행거리 감축 효과
                      </span>
                      <span className="font-serif text-lg sm:text-xl font-bold text-foreground mt-0.5">
                        {metrics.carKm} km{" "}
                        <span className="text-xs text-muted-foreground">
                          주행 상쇄
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Services (Breakdown with Diagrams) */}
        <section id="services" className="py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Our Expertise
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#173B57]">
                특허 기술이 집약된{" "}
                <span className="text-primary">사업 분야</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                급경사 사면 붕괴 위험을 방지하는 특허 공법부터 공공조달 입찰에
                특화된 시공 능력까지, (주)이에스조경만의 전문화된 핵심 역량을
                확인해 보세요.
              </p>
            </div>

            {/* Interactive Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {SERVICES.map((service: any) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider border transition-all duration-300 cursor-pointer ${
                    activeTab === service.id
                      ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/10"
                      : "bg-card/60 border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>

            {/* Active Tab Content */}
            {SERVICES.map((service: any) => {
              if (service.id !== activeTab) return null;
              return (
                <div
                  key={service.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left animate-in fade-in zoom-in-95 duration-500"
                >
                  {/* Left: Service Details */}
                  <div className="lg:col-span-7 flex flex-col gap-5">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      {service.tagline}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#173B57]">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                      {service.description}
                    </p>

                    <div className="h-px bg-border my-1" />

                    <div className="flex flex-col gap-3">
                      <span className="text-xs font-bold text-foreground uppercase tracking-widest">
                        주요 엔지니어링 구성
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feat: string, idx: number) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 text-xs text-muted-foreground font-semibold"
                          >
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between bg-card/50 border border-border rounded-xl p-4 mt-2">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">
                          정량적 시공 품질 성과
                        </span>
                        <span className="font-semibold text-xs sm:text-sm mt-0.5 text-foreground">
                          {service.kpi.label}
                        </span>
                      </div>
                      <span className="font-serif text-xl sm:text-2xl font-bold text-primary">
                        {service.kpi.value}
                      </span>
                    </div>
                  </div>

                  {/* Right: Service Image */}
                  <div className="lg:col-span-5">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-lg relative">
                      <img
                        src={
                          service.id === "slope"
                            ? "https://d2xsxph8kpxj0f.cloudfront.net/310519663283438125/4Ty34aTXnHdjiTU7VWcZUo/slope_stabilization-o5iJtUGAFBYmYxNxieYdXA.webp"
                            : service.id === "landscape"
                              ? "https://d2xsxph8kpxj0f.cloudfront.net/310519663283438125/4Ty34aTXnHdjiTU7VWcZUo/urban_park-EiigRRy5QtdCVY69xddPh9.webp"
                              : service.id === "maintenance"
                                ? "https://d2xsxph8kpxj0f.cloudfront.net/310519663283438125/4Ty34aTXnHdjiTU7VWcZUo/slope_stabilization-U7LdWDW7qPSHtKdLGEupTW.png"
                                : "https://d2xsxph8kpxj0f.cloudfront.net/310519663283438125/4Ty34aTXnHdjiTU7VWcZUo/biochar_tech-DVtAuQ7kaaP946e7jg5jE5.png"
                        }
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/30 to-transparent" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 5: Technical Advantage (Patent 5-Layer Slope Tech Highlight) */}
        <section className="py-24 bg-card/30 border-y border-border/80 relative">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
                PATENTED TECHNOLOGY
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#173B57]">
                다층복합보강구조{" "}
                <span className="text-primary">5-Layer 시스템</span>
              </h2>
              <p className="text-[#6B6B5F] text-sm leading-relaxed font-medium">
                비탈면의 안전을 보장하는 구조 보강 엔지니어링과 영구적인
                식생활착 유도 공법을 결합하여 집중호우에도 토사 붕괴와 유실을
                완벽하게 차단합니다.
              </p>
            </div>

            {/* Diagram Visualization */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
              {/* Left: Diagram Cards */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 flex gap-4 items-start">
                  <div className="h-8 w-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-serif font-bold text-sm shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-foreground">
                      식생층 (Vegetation Layer)
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      생분해 PLA 및 코코넛 매트로 표면 토사 유실 방지 및 식생
                      종자의 안전한 발아와 조기 안착 유도
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-border bg-background flex gap-4 items-start">
                  <div className="h-8 w-8 rounded-lg bg-secondary text-secondary-foreground flex items-center justify-center font-serif font-bold text-sm shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-foreground">
                      식생기반층 (Growth Media Layer)
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      탄소 저감형 바이오차(Biochar) 및 제올라이트 혼합
                      식생기반재(50~100mm)를 뿜어붙여 척박지 수분·영양 저장
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-border bg-background flex gap-4 items-start">
                  <div className="h-8 w-8 rounded-lg bg-muted-foreground/20 text-foreground flex items-center justify-center font-serif font-bold text-sm shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-foreground">
                      보강층 (Reinforcement Layer)
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      고인장 HDPE 지오그리드(인장강도 ≥20kN/m)를 밀착 포설하여
                      토양 전단강도 강화 및 비탈 슬라이딩 방지
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-border bg-background flex gap-4 items-start">
                  <div className="h-8 w-8 rounded-lg bg-muted-foreground/20 text-foreground flex items-center justify-center font-serif font-bold text-sm shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-foreground">
                      고정층 (Anchoring Layer)
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      이중 와셔 및 L형 앵커핀(500~800mm 매입) 고정 공법으로 사면
                      내부 지탱력 강화
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-border bg-background flex gap-4 items-start">
                  <div className="h-8 w-8 rounded-lg bg-muted-foreground/20 text-foreground flex items-center justify-center font-serif font-bold text-sm shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-foreground">
                      배수층 (Drainage Layer)
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      배수 자갈층(100~150mm) 및 종방향 유공관 시공으로 우기
                      간극수압 상승을 차단하고 신속한 지하수 배출 유도
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Graphic Rendering */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-border shadow-xl aspect-square">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663283438125/4Ty34aTXnHdjiTU7VWcZUo/biochar_tech-kGSekntoTish9svJe5iXYM.webp"
                    alt="바이오차 기술"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-left">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                      ECOLOGICAL RESTORATION
                    </span>
                    <h4 className="font-serif text-lg font-bold text-foreground mt-1">
                      기후변화 대응형 녹화 엔지니어링
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1 font-medium">
                      단순 지탱을 넘어, ㎡당 2kg 이상의 탄소를 토양에 가두는
                      과학적 생태 복원입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: Portfolio & Client Results */}
        <section id="portfolio" className="py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Client Results
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#173B57]">
                검증된 수치와 <span className="text-primary">시공 실적</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                (주)이에스조경은 지자체 공공 조달부터 민간 대기업 하도급까지 총
                25건의 다양한 현장을 무사고로 준공했습니다. 정량화된 지표로
                증명된 품질을 확인해 보세요.
              </p>
            </div>

            {/* INTERACTIVE BEFORE/AFTER DRAG SLIDER */}
            <div className="max-w-4xl mx-auto mb-20 flex flex-col gap-6 text-left">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                  Before & After Slider
                </span>
                <h3 className="font-serif text-xl font-bold text-[#173B57]">
                  {BEFORE_AFTER_DATA.title}
                </h3>
                <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                  {BEFORE_AFTER_DATA.description}
                </p>
              </div>

              <div
                ref={sliderRef}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-border shadow-xl select-none cursor-ew-resize"
              >
                {/* Before Image (Bottom Layer) */}
                <img
                  src={BEFORE_AFTER_DATA.beforeImage}
                  alt="시공 전 비탈면"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute bottom-4 left-4 px-3 py-1 rounded bg-black/70 text-white text-[10px] font-bold uppercase tracking-wider">
                  {BEFORE_AFTER_DATA.beforeLabel}
                </div>

                {/* After Image (Top Layer, Clipped) */}
                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  style={{
                    clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                  }}
                >
                  <img
                    src={BEFORE_AFTER_DATA.afterImage}
                    alt="시공 후 비탈면"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    style={{
                      width: sliderRef.current?.getBoundingClientRect().width,
                    }}
                  />
                  <div className="absolute bottom-4 left-4 px-3 py-1 rounded bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider">
                    {BEFORE_AFTER_DATA.afterLabel}
                  </div>
                </div>

                {/* Handle Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg flex items-center justify-center pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="h-10 w-10 rounded-full bg-white text-primary border border-primary/20 shadow-xl flex items-center justify-center font-bold text-sm">
                    ↔
                  </div>
                </div>
              </div>
            </div>

            {/* GOOGLE MAPS GIS TRACKER */}
            <div className="max-w-4xl mx-auto mb-20 flex flex-col gap-6 text-left">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                  GIS Project Tracker
                </span>
                <h3 className="font-serif text-xl font-bold text-[#173B57]">
                  (주)이에스조경 전국 준공 현장 지도
                </h3>
                <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                  경기 광주시를 포함하여 당사가 정직하고 안전하게 준공을 완료한
                  전국 주요 시공 현장의 실적 분포입니다. 마커를 클릭하시면
                  현장명과 상세 실적 규모를 확인하실 수 있습니다.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-border shadow-xl">
                <MapView
                  initialCenter={{ lat: 37.4251, lng: 127.2893 }}
                  initialZoom={11}
                  onMapReady={handleMapReady}
                  className="h-[400px] w-full"
                />
              </div>
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              <button
                onClick={() => setPortfolioFilter("all")}
                className={`px-4 py-2 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                  portfolioFilter === "all"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card/60 text-muted-foreground border-border"
                }`}
              >
                전체 보기
              </button>
              <button
                onClick={() => setPortfolioFilter("slope")}
                className={`px-4 py-2 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                  portfolioFilter === "slope"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card/60 text-muted-foreground border-border"
                }`}
              >
                사면복원 · 녹화
              </button>
              <button
                onClick={() => setPortfolioFilter("public")}
                className={`px-4 py-2 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                  portfolioFilter === "public"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card/60 text-muted-foreground border-border"
                }`}
              >
                공공 조경 식재
              </button>
              <button
                onClick={() => setPortfolioFilter("private")}
                className={`px-4 py-2 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                  portfolioFilter === "private"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card/60 text-muted-foreground border-border"
                }`}
              >
                민간 · 대기업 조경
              </button>
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredPortfolio.map(study => (
                <div
                  key={study.id}
                  className="luxury-card flex flex-col gap-4 text-left border-primary/10 hover:border-primary/30 bg-background/80 shadow-sm cursor-pointer"
                  onClick={() => setSelectedCase(study)}
                >
                  <div className="aspect-[16/10] w-full rounded-lg overflow-hidden border border-border/60 relative">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-background/90 text-primary border border-primary/10">
                      {study.year} | {study.budget}
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                    {study.client}
                  </span>
                  <h3 className="font-serif text-base font-bold text-[#173B57] line-clamp-1">
                    {study.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 font-medium">
                    {study.description}
                  </p>

                  {/* Mini KPIs */}
                  <div className="mt-2 pt-3 border-t border-border/60 flex items-center justify-between text-xs font-bold">
                    {study.kpis.slice(0, 2).map((kpi, idx) => (
                      <div key={idx} className="flex flex-col gap-0.5">
                        <span className="text-[9px] text-muted-foreground font-semibold">
                          {kpi.label}
                        </span>
                        <span className="text-primary">
                          {kpi.before
                            ? `${kpi.before} → ${kpi.after}`
                            : kpi.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Detail Modal */}
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="relative w-full max-w-3xl rounded-2xl border border-border bg-background p-6 shadow-2xl max-h-[90vh] overflow-y-auto text-left flex flex-col gap-6">
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors cursor-pointer font-bold text-lg"
              >
                ✕
              </button>

              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                {selectedCase.client}
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#173B57]">
                {selectedCase.title}
              </h3>

              <div className="aspect-[16/9] w-full rounded-xl overflow-hidden border border-border/80">
                <img
                  src={selectedCase.image}
                  alt={selectedCase.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {selectedCase.kpis.map((kpi, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#F5F6F0] border border-border/40 text-center flex flex-col gap-1"
                  >
                    <span className="text-[10px] text-muted-foreground font-bold">
                      {kpi.label}
                    </span>
                    <span className="font-serif text-lg font-bold text-primary">
                      {kpi.before ? `${kpi.before} → ${kpi.after}` : kpi.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="font-serif text-sm font-bold text-foreground">
                  상세 시공 개요
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                  {selectedCase.longDescription}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="font-serif text-sm font-bold text-foreground">
                  핵심 엔지니어링 성과
                </h4>
                <ul className="text-xs sm:text-sm text-muted-foreground flex flex-col gap-2">
                  {selectedCase.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 7: Insights Lab (Reports & Column) */}
        <section
          id="insights"
          className="py-24 bg-card/30 border-y border-border/80 relative"
        >
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Insights Lab
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#173B57]">
                전문 전략 및{" "}
                <span className="text-primary">기술 자문 자료</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                (주)이에스조경의 수석 전략 자문위원 한승재 이사와 대표이사
                박은선이 기고한 기후대응 기술 백서 및 조경 산업의 ESG 도입 전략
                보고서 핵심 요약을 공개합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {INSIGHTS.map(insight => (
                <div
                  key={insight.id}
                  className="luxury-card flex flex-col gap-4 text-left border-primary/10 hover:border-primary/30 bg-background/80 shadow-sm"
                >
                  <div className="flex justify-between items-center text-[10px] font-bold text-primary">
                    <span>{insight.category}</span>
                    <span className="text-muted-foreground">
                      {insight.date}
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#173B57] line-clamp-2 leading-snug">
                    {insight.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-4 font-medium leading-relaxed">
                    {insight.summary}
                  </p>

                  <div className="mt-auto pt-4 border-t border-border/60 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-primary" />
                      <span className="font-semibold text-muted-foreground">
                        {insight.author}
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        toast.info(
                          `"${insight.title}" 전문 PDF 다운로드가 준비 중입니다.`
                        )
                      }
                      className="flex items-center gap-1 text-primary hover:text-primary/80 font-bold cursor-pointer"
                    >
                      <Download className="h-3.5 w-3.5" /> PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: Multi-step Lead Qualification Form */}
        <section id="contact" className="py-24">
          <div className="container max-w-4xl">
            <div className="text-center mx-auto mb-16 flex flex-col gap-4">
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Free Diagnosis
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#173B57]">
                무료 현장 진단 및{" "}
                <span className="text-primary">기술 자문 신청</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                여성기업 수의계약 가이드부터 다층복합보강 특허 공법 설계까지,
                당사의 전문 기술이사가 직접 현장을 분석하고 무료 최적화
                포트폴리오를 제공해 드립니다.
              </p>
              <p className="text-xs font-bold text-primary">문의 이메일: {COMPANY_INFO.email}</p>
            </div>

            {/* Step Progress Bar */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="flex items-center gap-2">
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    step >= 1
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  1
                </div>
                <span className="text-xs font-bold">기본 정보</span>
              </div>
              <div className="h-px w-12 bg-border" />
              <div className="flex items-center gap-2">
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    step >= 2
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  2
                </div>
                <span className="text-xs font-bold">현장 자가진단</span>
              </div>
              <div className="h-px w-12 bg-border" />
              <div className="flex items-center gap-2">
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    step >= 3
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  3
                </div>
                <span className="text-xs font-bold">진단 요청 제출</span>
              </div>
            </div>

            {/* Multi-step Form Box */}
            <div className="p-8 rounded-2xl border border-border bg-card/40 backdrop-blur shadow-xl text-left">
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                {step === 1 && (
                  <div className="flex flex-col gap-5 animate-in fade-in duration-300">
                    <h3 className="font-serif text-lg font-bold text-[#173B57]">
                      기본 기업 및 연락처 정보
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-foreground">
                          회사명 / 기관명
                        </label>
                        <Input
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="예: (주)이에스조경"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-foreground">
                          담당자명
                        </label>
                        <Input
                          name="contactPerson"
                          value={formData.contactPerson}
                          onChange={handleInputChange}
                          placeholder="예: 홍길동 팀장"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-foreground">
                          연락처 (휴대폰)
                        </label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="예: 010-1234-5678"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-foreground">
                          이메일 주소
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="예: example@company.com"
                          required
                        />
                      </div>
                    </div>
                    <Button
                      type="button"
                      onClick={() => {
                        if (
                          !formData.companyName ||
                          !formData.contactPerson ||
                          !formData.phone ||
                          !formData.email
                        ) {
                          toast.error("기본 필수 항목을 모두 입력해 주세요.");
                          return;
                        }
                        setStep(2);
                      }}
                      className="btn-gold h-11 w-full mt-4 cursor-pointer"
                    >
                      다음 단계로 이동 <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                )}

                {step === 2 && (
                  <div className="flex flex-col gap-5 animate-in fade-in duration-300">
                    <h3 className="font-serif text-lg font-bold text-[#173B57]">
                      현장 및 시공 조건 분석
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-foreground">
                          요청 공사 구분
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            "사면 복원 · 녹화",
                            "공공 조경 식재",
                            "유지관리 용역",
                            "실내 플랜테리어",
                          ].map(type => (
                            <button
                              key={type}
                              type="button"
                              onClick={() =>
                                handleSelectChange("projectType", type)
                              }
                              className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all text-center cursor-pointer ${
                                formData.projectType === type
                                  ? "bg-primary/10 border-primary text-primary"
                                  : "bg-background border-border text-muted-foreground hover:border-primary/30"
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-foreground">
                          사면 경사도 (사면공사 시 필수)
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            "30도 미만 (완경사)",
                            "30~45도 (중경사)",
                            "45~60도 (급경사)",
                            "60도 이상 (절토면)",
                          ].map(angle => (
                            <button
                              key={angle}
                              type="button"
                              onClick={() =>
                                handleSelectChange("slopeAngle", angle)
                              }
                              className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all text-center cursor-pointer ${
                                formData.slopeAngle === angle
                                  ? "bg-primary/10 border-primary text-primary"
                                  : "bg-background border-border text-muted-foreground hover:border-primary/30"
                              }`}
                            >
                              {angle}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5 sm:col-span-2">
                        <label className="text-xs font-bold text-foreground">
                          예상 공사 예산 규모
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {[
                            "2천만원 미만",
                            "2천만 ~ 5천만원",
                            "5천만 ~ 1억원",
                            "1억원 이상",
                          ].map(bud => (
                            <button
                              key={bud}
                              type="button"
                              onClick={() => handleSelectChange("budget", bud)}
                              className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all text-center cursor-pointer ${
                                formData.budget === bud
                                  ? "bg-primary/10 border-primary text-primary"
                                  : "bg-background border-border text-muted-foreground hover:border-primary/30"
                              }`}
                            >
                              {bud}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 mt-4">
                      <Button
                        type="button"
                        onClick={() => setStep(1)}
                        className="btn-outline-gold h-11 flex-1 cursor-pointer"
                      >
                        이전 단계
                      </Button>
                      <Button
                        type="button"
                        onClick={() => {
                          if (!formData.projectType || !formData.budget) {
                            toast.error(
                              "프로젝트 유형 및 예산 범위를 선택해 주세요."
                            );
                            return;
                          }
                          setStep(3);
                        }}
                        className="btn-gold h-11 flex-1 cursor-pointer"
                      >
                        마지막 단계로 이동 <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="flex flex-col gap-5 animate-in fade-in duration-300">
                    <h3 className="font-serif text-lg font-bold text-[#173B57]">
                      진단 요청 내용 상세 입력
                    </h3>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-foreground">
                        현장 상세 상황 및 요구사항
                      </label>
                      <Textarea
                        name="details"
                        value={formData.details}
                        onChange={handleInputChange}
                        placeholder="현장의 상태(예: 암반 비탈면 유실 발생, 지자체 관공서 화단 정비 등)와 구체적인 요청사항을 자유롭게 입력해 주세요."
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 text-xs text-primary leading-relaxed font-semibold">
                      ✓ 본 요청이 완료되면 (주)이에스조경의 전문 기술이사가 직접
                      인공위성 지형도 분석 및 로드뷰 정밀 분석을 거친 뒤 무료
                      1차 소견서와 맞춤형 견적 제안서를 송부해 드립니다.
                    </div>

                    <div className="flex gap-4">
                      <Button
                        type="button"
                        onClick={() => setStep(2)}
                        className="btn-outline-gold h-11 flex-1 cursor-pointer"
                      >
                        이전 단계
                      </Button>
                      <Button
                        type="submit"
                        className="btn-gold h-11 flex-1 cursor-pointer"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "요청 전송 중..." : "무료 진단 요청 제출하기"}{" "}
                        {!isSubmitting && <CheckCircle2 className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
