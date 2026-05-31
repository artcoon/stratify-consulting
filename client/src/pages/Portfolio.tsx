/*
 * Design Philosophy: Premium Light Clean (A안 - Leaf Grid)
 * Page: Portfolio / Case Studies Dashboard
 */

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CASE_STUDIES } from "../const";
import { 
  Filter, 
  CheckCircle2, 
  TrendingUp, 
  ArrowRight, 
  MapPin, 
  Clock,
  Calendar,
  Coins
} from "lucide-react";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeCaseStudy, setActiveCaseStudy] = useState<string>(CASE_STUDIES[0].id);

  const categories = [
    { id: "all", name: "전체 보기" },
    { id: "slope", name: "사면 복원 · 녹화" },
    { id: "public", name: "공공 조경 공사" },
    { id: "private", name: "민간 조경 공사" }
  ];

  const filteredStudies = selectedCategory === "all"
    ? CASE_STUDIES
    : CASE_STUDIES.filter(study => study.category === selectedCategory);

  const currentStudy = CASE_STUDIES.find(study => study.id === activeCaseStudy) || CASE_STUDIES[0];

  // Aggregated KPIs based on 25 real projects
  const kpiStats = [
    { label: "누적 시공 건수", value: "25 건", desc: "지자체 공공 공원 및 민간 아파트·산단 조경 시공 완료" },
    { label: "안전 사고율", value: "0 %", desc: "창립 이래 단 한 건의 안전 사고 없는 철저한 무사고 준공" },
    { label: "평균 토사 유실 차단율", value: "98.5 %", desc: "다층복합보강구조 특허 공법 시공 사면 정밀 계측 결과" },
    { label: "공공조달 입찰 가점", value: "최고 등급", desc: "공공조달 적격심사 시 여성기업 우대 가점 만점 확보" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="flex-grow pt-32">
        {/* Header Section */}
        <section className="container py-12 text-center max-w-4xl mx-auto flex flex-col gap-5">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Our Portfolio</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            정량적 성과로 입증하는<br />
            <span className="text-gradient-gold">25건의 완벽 준공 실적</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">
            (주)이에스조경이 경기 광주시를 비롯한 전국 각지에서 안전하고 성실하게 준공한 실제 현장들의 시공 전/후 지표와 지속가능한 조경 포트폴리오를 공개합니다.
          </p>
        </section>

        {/* Aggregated KPI Dashboard */}
        <section className="py-16 bg-card/30 border-y border-border relative">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-2.5 py-1 rounded-full border border-primary/10">
                ESG Engineering Dashboard
              </span>
              <h2 className="font-serif text-2xl font-bold text-foreground mt-3">조경 시공 종합 성과 지표</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {kpiStats.map((stat, idx) => (
                <div key={idx} className="luxury-card bg-background/90 border-primary/10 shadow-sm text-left p-6 flex flex-col justify-between">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs text-muted-foreground font-bold">{stat.label}</span>
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-primary tracking-tight">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground font-semibold mt-4 border-t border-border pt-3">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Explorer with Filters */}
        <section className="py-24">
          <div className="container">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2.5 justify-center mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    const firstFiltered = cat.id === "all" 
                      ? CASE_STUDIES[0] 
                      : CASE_STUDIES.find(study => study.category === cat.id);
                    if (firstFiltered) setActiveCaseStudy(firstFiltered.id);
                  }}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider border transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat.id
                      ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/10"
                      : "bg-card/40 border-border/40 text-muted-foreground hover:border-border hover:text-primary"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Side: Case Study List */}
              <div className="lg:col-span-4 flex flex-col gap-3">
                {filteredStudies.map((study) => (
                  <button
                    key={study.id}
                    onClick={() => setActiveCaseStudy(study.id)}
                    className={`flex flex-col gap-2 p-5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                      activeCaseStudy === study.id
                        ? "bg-primary/5 border-primary shadow-md pl-7"
                        : "bg-card/30 border-border/80 hover:bg-card/60 hover:border-border"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                        {study.client}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        {study.year}년
                      </span>
                    </div>
                    <h3 className={`font-serif font-bold text-sm transition-colors line-clamp-2 ${
                      activeCaseStudy === study.id ? "text-primary" : "text-foreground"
                    }`}>
                      {study.title}
                    </h3>
                  </button>
                ))}
                {filteredStudies.length === 0 && (
                  <div className="text-center py-12 text-muted-foreground text-sm border border-dashed border-border/60 rounded-xl">
                    해당 카테고리의 실적이 준비 중입니다.
                  </div>
                )}
              </div>

              {/* Right Side: Detailed Active Case Study */}
              <div className="lg:col-span-8">
                {filteredStudies.length > 0 && (
                  <div className="luxury-card bg-card/20 border-border/80 flex flex-col gap-8 text-left p-8 animate-in fade-in zoom-in-95 duration-500">
                    {/* Hero Image */}
                    <div className="w-full aspect-[21/9] rounded-lg overflow-hidden border border-border/60 relative">
                      <img 
                        src={
                          currentStudy.category === "slope" 
                            ? "https://d2xsxph8kpxj0f.cloudfront.net/310519663283438125/4Ty34aTXnHdjiTU7VWcZUo/slope_tech-bwFWzeXngL4eCSnuUA6Pcj.webp"
                            : "https://d2xsxph8kpxj0f.cloudfront.net/310519663283438125/4Ty34aTXnHdjiTU7VWcZUo/biochar_eco-BhEvRP5pvwFck6smCyD9Ke.webp"
                        } 
                        alt={currentStudy.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3">
                        <span className="text-xs font-semibold text-primary bg-background border border-primary/20 px-3 py-1 rounded-full">
                          {currentStudy.client}
                        </span>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground bg-background px-3 py-1 rounded-full font-semibold">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5 text-primary" /> {currentStudy.year}년 준공
                          </span>
                          <span className="flex items-center gap-1">
                            <Coins className="h-3.5 w-3.5 text-primary" /> 공사비: {currentStudy.budget}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Title and Description */}
                    <div className="flex flex-col gap-3">
                      <h3 className="font-serif text-2xl font-bold text-foreground">
                        {currentStudy.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                        {currentStudy.longDescription}
                      </p>
                    </div>

                    {/* Before/After Metrics Dashboard */}
                    <div className="flex flex-col gap-3">
                      <h4 className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
                        <TrendingUp className="h-4 w-4" />
                        시공 전/후 핵심 성과 지표 (Before & After)
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {currentStudy.kpis.map((kpi, idx) => (
                          <div key={idx} className="border border-border bg-background rounded-xl p-4 flex flex-col justify-between gap-2">
                            <span className="text-xs text-muted-foreground font-semibold">{kpi.label}</span>
                            {kpi.before && kpi.after ? (
                              <div className="flex items-center justify-between mt-1">
                                <div className="flex flex-col">
                                  <span className="text-[10px] text-muted-foreground uppercase font-bold">시공 전</span>
                                  <span className="text-xs line-through text-destructive font-bold">{kpi.before}</span>
                                </div>
                                <ArrowRight className="h-4 w-4 text-primary shrink-0 mx-1" />
                                <div className="flex flex-col text-right">
                                  <span className="text-[10px] text-primary uppercase font-bold">시공 후</span>
                                  <span className="text-sm font-bold text-primary">{kpi.after}</span>
                                </div>
                              </div>
                            ) : (
                              <div className="text-right mt-1">
                                <span className="text-sm font-bold text-primary">{kpi.value}</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="h-px bg-border" />

                    {/* Highlights */}
                    <div className="flex flex-col gap-3">
                      <h4 className="text-xs font-bold text-primary uppercase tracking-wider">
                        주요 공정 및 엔지니어링 포인트
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {currentStudy.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground font-semibold">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
