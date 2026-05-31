/*
 * Design Philosophy: Premium Light Clean (A안 - Leaf Grid)
 * Page: Main Landing (Home)
 */

import { useState } from "react";
import { Link } from "wouter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SERVICES, COMPANY_INFO } from "../const";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  Sparkles,
  Layers,
  Trees,
  ChevronRight,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("slope");

  const esgPoints = [
    {
      icon: <Trees className="h-5 w-5 text-primary" />,
      title: "E (Environment) - 기후변화 대응",
      desc: "특허받은 탄소 저장형 바이오차 기반재를 전면 사용하여 시공 현장당 평균 1톤 이상의 탄소를 토양 속에 격리합니다. 또한 100% 생분해성 코코넛 섬유 매트로 미세 플라스틱 발생을 원천 차단합니다."
    },
    {
      icon: <Heart className="h-5 w-5 text-primary" />,
      title: "S (Social) - 지역 상생 및 기여",
      desc: "경기 광주 및 인근 지역의 전문 조경 기능공을 우선 채용하여 지역 일자리를 창출합니다. 매년 요양원 및 사회복지시설에 무상 기부 힐링 정원을 시공하며 도심 속 생태 복지에 앞장서고 있습니다."
    },
    {
      icon: <Award className="h-5 w-5 text-primary" />,
      title: "G (Governance) - 신뢰와 상생 경영",
      desc: "중소벤처기업부 인증 여성기업으로서 다양성과 투명한 거버넌스를 추구합니다. 창립 이래 0%의 안전사고율을 유지하며, ISO 9001/14001/45001 통합 경영 시스템을 구축하여 공정하고 안전한 준공을 보장합니다."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="flex-grow">
        {/* SECTION 1: Cinematic Split Hero */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-card/30 via-background to-background">
          {/* Subtle Background Accent Glows */}
          <div className="absolute top-1/4 left-1/4 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 -z-10 h-96 w-96 rounded-full bg-secondary/5 blur-[100px]" />

          <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
            {/* Left Column: Value Proposition */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs text-primary font-bold tracking-wide w-fit">
                <Sparkles className="h-4 w-4 text-primary" />
                뿌리에서 미래로 — 친환경 조경의 새로운 표준
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-foreground">
                자연을 복원하고,<br />
                지속가능한 가치를<br />
                <span className="text-gradient-gold">설계합니다.</span>
              </h1>

              <p className="text-muted-foreground text-sm sm:text-base max-w-xl leading-relaxed font-medium">
                특허 등록된 다층복합보강구조 시스템과 친환경 바이오차 공법으로 무너진 절·급경사 사면을 살려내며, 
                도심 속에 탄소를 흡수하는 고품격 조경 솔루션을 제안합니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact">
                  <Button className="btn-gold h-12 px-6 text-sm font-bold cursor-pointer">
                    무료 현장 진단 및 상담 <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button className="btn-outline-gold h-12 px-6 text-sm font-bold cursor-pointer">
                    사업 영역 탐색
                  </Button>
                </Link>
              </div>

              {/* Quick Trust Badges */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border max-w-lg">
                <div className="flex flex-col">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-primary">5년+</span>
                  <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mt-1">시공 및 자문 연역</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-secondary-foreground">25건</span>
                  <span className="text-[10px] text-primary font-bold uppercase tracking-wider mt-1">누적 시공 실적</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-primary">3.7억</span>
                  <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mt-1">시공능력평가액</span>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Interactive CEO Portrait Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md group">
                {/* Decorative border frame with gradient gold & emerald */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary/20 via-secondary/20 to-primary/30 opacity-40 blur transition-all duration-500 group-hover:opacity-60" />
                
                <div className="relative rounded-2xl overflow-hidden border border-border bg-card p-4 flex flex-col gap-4 shadow-xl">
                  {/* Image container */}
                  <div className="aspect-[3/4] w-full rounded-xl overflow-hidden relative border border-border/80">
                    <img 
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310519663283438125/4Ty34aTXnHdjiTU7VWcZUo/ceo_main-9ZpEsmvN5G1T5WzZ1eZ4gC.webp" 
                      alt="박은선 대표이사" 
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                    
                    {/* Floating Info on Image */}
                    <div className="absolute bottom-4 left-4 right-4 text-left">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Representative Director</span>
                      <h3 className="font-serif text-xl font-bold text-foreground mt-0.5">박은선 대표이사</h3>
                    </div>
                  </div>

                  {/* Short Quote */}
                  <blockquote className="text-xs text-muted-foreground font-semibold italic leading-relaxed text-left border-l-2 border-primary/40 pl-3 py-1">
                    &ldquo;우리가 하는 일은 단순한 공사가 아닌, 무너진 생태계를 되살리는 지속가능한 복원입니다.&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: ESG & Sustainability Spotlight */}
        <section className="py-24 bg-card/30 border-y border-border/80 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-[100px]" />
          
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">ESG Management</span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">
                자연과 인간의 상생을 짓는 <span className="text-gradient-gold">지속가능한 조경</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                (주)이에스조경은 단순한 시공을 넘어, 기후변화 대응(E), 지역사회 상생(S), 투명하고 정직한 준공(G)을 핵심 비즈니스 모델에 통합한 선도적인 ESG 경영 실천 기업입니다.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {esgPoints.map((point, idx) => (
                <div key={idx} className="luxury-card flex flex-col gap-4 text-left border-primary/10 hover:border-primary/30 bg-background/80 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/5">
                    {point.icon}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: Dynamic Services Showcase */}
        <section className="py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Our Expertise</span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">
                특허 기술이 집약된 <span className="text-gradient-gold">사업 분야</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                급경사 사면 붕괴 위험을 방지하는 특허 공법부터 공공조달 입찰에 특화된 시공 능력까지, (주)이에스조경만의 전문화된 핵심 역량을 확인해 보세요.
              </p>
            </div>

            {/* Interactive Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {SERVICES.map((service) => (
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
            {SERVICES.map((service) => {
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
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                      {service.description}
                    </p>
                    
                    <div className="h-px bg-border my-1" />
                    
                    <div className="flex flex-col gap-3">
                      <span className="text-xs font-bold text-foreground uppercase tracking-widest">주요 엔지니어링 구성</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground font-semibold">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between bg-card/50 border border-border rounded-xl p-4 mt-2">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">정량적 시공 품질 성과</span>
                        <span className="font-semibold text-xs sm:text-sm mt-0.5 text-foreground">{service.kpi.label}</span>
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
                            ? "https://d2xsxph8kpxj0f.cloudfront.net/310519663283438125/4Ty34aTXnHdjiTU7VWcZUo/slope_tech-bwFWzeXngL4eCSnuUA6Pcj.webp"
                            : service.id === "landscape"
                            ? "https://d2xsxph8kpxj0f.cloudfront.net/310519663283438125/4Ty34aTXnHdjiTU7VWcZUo/biochar_eco-BhEvRP5pvwFck6smCyD9Ke.webp"
                            : "https://d2xsxph8kpxj0f.cloudfront.net/310519663283438125/4Ty34aTXnHdjiTU7VWcZUo/hero_bg-B6FqnpDZCvDaXrLApbTrWh.webp"
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

        {/* SECTION 4: Technical Advantage (Patent 5-Layer Slope Tech Highlight) */}
        <section className="py-24 bg-card/30 border-y border-border/80 relative">
          <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Image representing technical slope stabilization */}
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-lg relative">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663283438125/4Ty34aTXnHdjiTU7VWcZUo/slope_tech-bwFWzeXngL4eCSnuUA6Pcj.webp" 
                  alt="다층복합보강구조 사면" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Right: Technical Explanation */}
            <div className="lg:col-span-7 text-left flex flex-col gap-5">
              <span className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="h-4 w-4" /> 특허 등록 독자 공법
              </span>
              <h3 className="font-serif text-3xl font-bold tracking-tight text-foreground">
                산사태 예방을 위한<br />
                <span className="text-gradient-gold">다층복합보강구조 사면복원 기술</span>
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                집중호우로 인한 급경사 사면 붕괴를 원천 차단하기 위해 식생매트, 바이오차 식생기반재, HDPE 지오그리드, 이중와셔 앵커핀, 배수 유공관을 유기적으로 결합한 5레이어 독자적 보강 공법입니다. 토사 유실 방지율 98.5%를 자랑합니다.
              </p>
              
              <div className="flex flex-col gap-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-muted-foreground font-semibold">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>토사 유실 원천 차단</strong>: 생분해 코코넛 매트와 앵커핀의 견고한 안착</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-muted-foreground font-semibold">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>탄소 격리형 기반재</strong>: 바이오차 혼합토를 활용한 수목의 신속한 활착 유도</span>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/services">
                  <Button className="btn-outline-gold h-11 px-5 text-xs font-bold cursor-pointer">
                    5-Layer 상세 원리 알아보기 <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Call to Action (Enterprise Lead Generation) */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <div className="container max-w-4xl mx-auto text-center flex flex-col gap-6 items-center">
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Request Free Diagnosis</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              전문 시공 기술팀의<br />
              <span className="text-gradient-gold">무상 현장 정밀 진단 서비스</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed font-medium">
              사면 붕괴 우려가 있거나 조경 설계 및 정기 관리가 필요한 경기도 전역 및 전국의 현장에 대해, 
              이에스조경의 기술진이 직접 방문하여 공법 제안과 합리적인 견적을 무료로 산출해 드립니다.
            </p>
            <div className="pt-4">
              <Link href="/contact">
                <Button className="btn-gold h-12 px-8 text-sm font-bold cursor-pointer">
                  1:1 무상 진단 신청하기 <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
