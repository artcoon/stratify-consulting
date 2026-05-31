/*
 * Design Philosophy: Premium Light Clean (A안 - Leaf Grid)
 * Page: About ES Landscape & Stratify
 */

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CEO_MESSAGE, COMPANY_INFO } from "../const";
import { CheckCircle2, ShieldCheck, Heart, Sparkles } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      title: "Eco-Friendly (자연과 공존하는 기술)",
      description: "인체와 자연에 무해한 생분해 PLA 매트, 바이오차 등 혁신적인 지속가능 자재만을 고집하여 생태계 회복에 앞장섭니다."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: "Sustainable (영속적인 안전성 설계)",
      description: "단순 1회성 시공을 탈피하고, 다층복합보강 공법으로 사면을 보강하여 향후 50년 이상 무너지지 않는 안전한 국토를 짓습니다."
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Joy & Human (사람을 향한 따뜻한 조경)",
      description: "병원, 복지시설 무상 기부 정원 시공 및 지역 고용 창출을 실천하며, 도심 속 녹지를 통해 사람들의 마음에 위로를 건냅니다."
    }
  ];

  const milestones = [
    { year: "2020.06", title: "법인 설립", desc: "이에스조경의 뿌리가 되는 전문 조경 시공 법인 최초 설립" },
    { year: "2023.12", title: "시공실적 누적 20건 달성", desc: "지자체 및 민간 종합건설 하도급 우수 시공사로 자리매김" },
    { year: "2025.05", title: "다층복합보강구조 특허 출원", desc: "친환경 사면 복원 및 산사태 방지를 위한 독자적 5층 공법 개발" },
    { year: "2026.02", title: "여성기업 공식 인증 획득", desc: "중소벤처기업부 인증 여성기업으로서 신뢰성 및 공공조달 입찰 경쟁력 강화" },
    { year: "2026.05", title: "종합 브랜드 리뉴얼", desc: "Stratify Consulting & Landscape 브랜드 런칭, 미래지향적 ESG 기업으로 도약" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="flex-grow pt-32">
        {/* Header Section */}
        <section className="container py-12 text-center max-w-4xl mx-auto flex flex-col gap-5">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">About Us</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            사람과 자연이 함께 자라는<br />
            <span className="text-gradient-gold">다음 세대의 조경 파트너</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">
            (주)이에스조경은 무너진 사면을 다시 살리고, 도시에 푸른 숨결을 더하며, 미래 세대에게 더 건강하고 푸른 지구를 물려주는 친환경 조경 건설 파트너입니다.
          </p>
        </section>

        {/* CEO Message Section (Cinematic Split Layout) */}
        <section className="py-20 border-t border-border relative bg-card/30">
          <div className="absolute top-1/3 left-1/4 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-[100px]" />
          
          <div className="container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* CEO Images */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-border shadow-md aspect-[3/4]">
                <img src={CEO_MESSAGE.photo} alt="박은선 대표이사 메인" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden border border-border shadow-md aspect-[3/4] mt-8">
                <img src={CEO_MESSAGE.photoSub} alt="박은선 대표이사 서브" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* CEO Message Content */}
            <div className="lg:col-span-7 text-left flex flex-col gap-6">
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">CEO Message</span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">
                &ldquo;우리가 하는 일은 단순한 공사가 아닌,<br />
                <span className="text-gradient-gold">자연을 살리는 생태 복원</span>입니다.&rdquo;
              </h2>
              <blockquote className="border-l-2 border-primary/40 pl-4 py-1 italic text-muted-foreground text-sm leading-relaxed font-medium">
                {CEO_MESSAGE.philosophy}
              </blockquote>
              
              <div className="flex flex-col gap-4 text-sm text-muted-foreground leading-relaxed font-medium">
                {CEO_MESSAGE.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex flex-col">
                  <span className="font-serif text-lg font-bold text-foreground">박 은 선</span>
                  <span className="text-xs text-muted-foreground font-semibold">대표이사, (주)이에스조경</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs text-primary font-bold">
                  여성기업 인증 (중소벤처기업부)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-24 relative">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Core Values</span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">
                우리가 타협하지 않는 <span className="text-gradient-gold">3대 경영 철학</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                정직한 흙처럼, (주)이에스조경은 보이지 않는 사면의 기초 보강재부터 수목의 뿌리 활착 기반재까지 가장 정직하고 완성도 높은 친환경 시공만을 제공합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((val, idx) => (
                <div key={idx} className="luxury-card flex flex-col gap-4 text-left border-primary/10 hover:border-primary/30 bg-card/40 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/5">
                    {val.icon}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    {val.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* History / Timeline Section */}
        <section className="py-24 bg-card/30 border-y border-border">
          <div className="absolute bottom-1/4 right-1/4 -z-10 h-96 w-96 rounded-full bg-secondary/5 blur-[100px]" />
          
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Our Journey</span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">
                도전과 신뢰로 다져온 <span className="text-gradient-gold">성장 연혁</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto relative border-l border-primary/30 pl-8 flex flex-col gap-10">
              {milestones.map((stone, idx) => (
                <div key={idx} className="relative text-left flex flex-col gap-2 group">
                  {/* Timeline node dot */}
                  <div className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background transition-transform duration-300 group-hover:scale-125" />
                  
                  <span className="font-serif text-sm font-bold text-primary">
                    {stone.year}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    {stone.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xl font-medium">
                    {stone.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
