/*
 * Design Philosophy: Premium Light Clean (A안 - Leaf Grid)
 * Page: Services & Interactive Diagrams
 */

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SERVICES } from "../const";
import { 
  CheckCircle2, 
  Layers, 
  ShieldAlert, 
  Trees, 
  CalendarRange, 
  Leaf,
  Info,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const [activeLayer, setActiveLayer] = useState<number>(0);

  // 5-Layer Slope diagram specification
  const layers = [
    {
      num: "Layer 5",
      name: "식생매트 및 수목 표층 (Vegetation & Grass)",
      thickness: "10-20mm",
      desc: "100% 생분해성 천연 코코넛 매트로 표토를 단단히 고정하고, 특수 코팅된 잔디 및 야생화 종자가 비바람에 씻겨가지 않도록 완벽히 보호하여 초기 활착률을 95% 이상으로 끌어올립니다.",
      benefit: "미세 플라스틱 발생 제로, 시공 즉시 표토 유실 방지"
    },
    {
      num: "Layer 4",
      name: "친환경 바이오차 식생기반재 (Biochar Soil)",
      thickness: "50-100mm",
      desc: "왕겨 등을 고온 열분해한 바이오차(Biochar)와 천연 다공성 광물인 제올라이트를 최적 비율로 배합한 특수 토양입니다. 일반 흙 대비 탄소 저장력이 뛰어나 기후변화 대응에 기여하며 수분과 영양분을 오랫동안 머금어 식물의 지속적인 생장을 돕습니다.",
      benefit: "현장당 약 1톤 이상의 탄소 반영구 격리, 수목 가뭄 저항성 극대화"
    },
    {
      num: "Layer 3",
      name: "고인장 지오그리드 보강재 (HDPE Geogrid)",
      thickness: "이중 보강 구조",
      desc: "고밀도 폴리에틸렌(HDPE)으로 제작된 격자형 구조물로, 사면 토사 내부의 인장 강도를 높여 슬라이딩 붕괴 압력을 완벽하게 분산시키고 지탱합니다.",
      benefit: "사면 내부 마찰각 35% 향상, 급경사지 구조적 안정성 영구 확보"
    },
    {
      num: "Layer 2",
      name: "이중 와셔 & L형 앵커핀 고정 (Anchor Pins)",
      thickness: "500-800mm 매입",
      desc: "다층 구조의 매트와 그리드를 원지반 암반층까지 관통하여 강력하게 고정하는 핵심 하드웨어입니다. 특허 출원된 이중 분산 와셔를 적용하여 태풍이나 집중호우 시에도 핀이 뽑히거나 매트가 찢어지는 현상을 방지합니다.",
      benefit: "앵커당 인장 인발 저항력 1.5톤 확보"
    },
    {
      num: "Layer 1",
      name: "배수 자갈 및 배수 유공관 (Subdrainage)",
      thickness: "기초 지반층",
      desc: "사면 내부에 고이는 간극수압을 신속히 배출하는 친환경 필터 및 자갈 배수층입니다. 내부 수압 상승으로 인한 갑작스러운 사면 붕괴(슬라이딩) 현상을 원천적으로 차단합니다.",
      benefit: "우기 사면 내부 수압 상승률 90% 차단"
    }
  ];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldAlert": return <ShieldAlert className="h-6 w-6 text-primary" />;
      case "Trees": return <Trees className="h-6 w-6 text-primary" />;
      case "CalendarRange": return <CalendarRange className="h-6 w-6 text-primary" />;
      case "Leaf": return <Leaf className="h-6 w-6 text-primary" />;
      default: return <Layers className="h-6 w-6 text-primary" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="flex-grow pt-32">
        {/* Header Section */}
        <section className="container py-12 text-center max-w-4xl mx-auto flex flex-col gap-5">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Our Services</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            특허 공법과 정직한 시공이 만드는<br />
            <span className="text-gradient-gold">지속가능한 조경 엔지니어링</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">
            (주)이에스조경은 산사태로부터 국토를 안전하게 지키는 친환경 사면 복원 기술부터 도심 속 빌딩숲에 푸른 쉼을 선물하는 고품격 실내외 조경까지 종합적인 친환경 건설 서비스를 제공합니다.
          </p>
        </section>

        {/* Dynamic Interactive Diagram: 5-Layer Slope Stabilization */}
        <section className="py-24 bg-card/30 border-y border-border relative">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Interactive Diagram</span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">
                독자 기술: <span className="text-gradient-gold">5-Layer 다층복합보강구조</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                아래 다이어그램의 각 층을 클릭하여 급경사 사면 붕괴를 완벽하게 차단하고 친환경 녹화를 유도하는 5단계 복합 구조의 원리와 엔지니어링 스펙을 확인해 보세요.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left: Interactive Visual Diagram */}
              <div className="lg:col-span-6 flex flex-col gap-3">
                <div className="flex justify-between items-center px-2 mb-2">
                  <span className="text-xs font-bold text-muted-foreground uppercase">사면 단면 모형 (클릭하여 분석)</span>
                  <span className="text-[10px] text-primary font-bold flex items-center gap-1">
                    <Info className="h-3 w-3" /> 각 레이어를 클릭해 보세요
                  </span>
                </div>

                <div className="flex flex-col gap-2.5">
                  {layers.map((layer, idx) => {
                    const isSelected = activeLayer === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveLayer(idx)}
                        className={`w-full text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer flex justify-between items-center ${
                          isSelected
                            ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/10 scale-[1.02]"
                            : "bg-background/80 border-border text-foreground hover:border-primary/40 hover:bg-card/50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            isSelected ? "bg-background text-primary" : "bg-primary/10 text-primary"
                          }`}>
                            {5 - idx}
                          </span>
                          <span className="text-xs sm:text-sm font-bold">{layer.name}</span>
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          isSelected ? "bg-background/20 text-primary-foreground" : "bg-muted text-muted-foreground"
                        }`}>
                          {layer.thickness}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right: Technical Spec Card */}
              <div className="lg:col-span-6">
                <div className="luxury-card bg-background/90 border-primary/20 shadow-lg text-left p-8 min-h-[380px] flex flex-col justify-between animate-in fade-in zoom-in-95 duration-500">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-2.5 py-1 rounded-full border border-primary/10">
                        {layers[activeLayer].num}
                      </span>
                      <span className="text-xs text-muted-foreground font-bold">두께/스펙: {layers[activeLayer].thickness}</span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                      {layers[activeLayer].name}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                      {layers[activeLayer].desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border flex flex-col gap-2">
                    <span className="text-[10px] text-primary font-bold uppercase tracking-wider">주요 엔지니어링 기대 효과</span>
                    <span className="text-sm font-bold text-foreground flex items-center gap-2">
                      <CheckCircle2 className="h-4.5 w-4.5 text-primary shrink-0" />
                      {layers[activeLayer].benefit}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Core Services</span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">
                (주)이에스조경의 <span className="text-gradient-gold">핵심 사업 안내</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {SERVICES.map((service) => (
                <div key={service.id} className="luxury-card bg-card/40 border-border/80 flex flex-col justify-between gap-6 shadow-sm">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/5">
                        {getServiceIcon(service.icon)}
                      </div>
                      <span className="text-xs font-bold text-primary bg-primary/5 px-2.5 py-0.5 rounded border border-primary/10">
                        {service.tagline}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-foreground">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                      {service.description}
                    </p>

                    <div className="h-px bg-border/60 my-1" />

                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] text-foreground font-bold uppercase tracking-wider">엔지니어링 핵심 구성 요소</span>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground font-semibold">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center bg-background/80 border border-border p-3.5 rounded-xl">
                    <span className="text-[10px] text-muted-foreground font-bold uppercase">{service.kpi.label}</span>
                    <span className="text-sm font-bold text-primary">{service.kpi.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="py-20 relative overflow-hidden border-t border-border/20">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 to-secondary/5" />
          <div className="container text-center max-w-4xl mx-auto flex flex-col gap-6 items-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight">
              전문 기술팀의 <span className="text-gradient-gold">무상 현장 진단 서비스</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed font-medium">
              사면의 경사도, 토질 상태, 산사태 우려도 및 조경 부지 여건을 면밀히 분석하여 최적의 친환경 공법과 맞춤형 견적을 제안해 드립니다. 지금 바로 신청하세요.
            </p>
            <Link href="/contact">
              <Button className="btn-gold h-12 px-8 text-sm font-semibold cursor-pointer">
                1:1 정밀 진단 신청하기 <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
