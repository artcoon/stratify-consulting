/*
 * Design Philosophy: Premium Light Clean (A안 - Leaf Grid)
 * Page: Insights Hub (Analyst Reports & Columns)
 */

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { INSIGHTS } from "../const";
import { 
  BookOpen, 
  Download, 
  Calendar, 
  User, 
  FileText, 
  ChevronRight,
  Sparkles,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Insights() {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const handleDownload = (id: string, title: string) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
      toast.success(`'${title}' 보고서 다운로드가 시작되었습니다.`, {
        description: "PDF 파일이 성공적으로 준비되었습니다.",
        duration: 4000
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="flex-grow pt-32">
        {/* Header Section */}
        <section className="container py-12 text-center max-w-4xl mx-auto flex flex-col gap-5">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Insights Lab</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            생태 복원과 탄소 저감을 선도하는<br />
            <span className="text-gradient-gold">이에스 기술 백서 & 칼럼</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">
            (주)이에스조경의 연구소와 박은선 대표이사가 제안하는 차세대 조경 공법 분석, ESG 건설 트렌드, 그리고 정량적인 환경 가치 평가 보고서를 열람해 보세요.
          </p>
        </section>

        {/* Featured Report Highlight */}
        <section className="py-12">
          <div className="container">
            <div className="luxury-card bg-card/30 border-primary/20 p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-left shadow-sm">
              <div className="lg:col-span-7 flex flex-col gap-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs text-primary font-bold tracking-wide w-fit">
                  <Sparkles className="h-3.5 w-3.5" />
                  대표이사 자문 기술 보고서
                </div>
                
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                  조경 건설 기업의 ESG 도입 전략과<br />
                  바이오차 공법을 통한 탄소 저감 효과 검증
                </h2>
                
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                  본 연구 보고서는 전통적인 절토사면 복원 공법의 한계를 지적하고, 다공성 탄소 물질인 바이오차(Biochar) 식생기반재를 도입했을 때 토양의 수분 보유력 향상 및 대기 중 이산화탄소의 정량적 격리 효과를 실험 데이터와 함께 증명합니다.
                </p>

                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground font-semibold">
                  <span className="flex items-center gap-1.5">
                    <User className="h-4 w-4 text-primary" /> 저자: 박은선 대표이사
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-primary" /> 발행일: 2026.05
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FileText className="h-4 w-4 text-primary" /> 포맷: PDF (24 pages)
                  </span>
                </div>

                <div className="pt-2">
                  <Button 
                    onClick={() => handleDownload("featured", "조경 건설 기업의 ESG 도입 전략과 바이오차 공법을 통한 탄소 저감 효과 검증")}
                    disabled={downloadingId === "featured"}
                    className="btn-gold h-11 px-5 text-xs font-bold cursor-pointer"
                  >
                    {downloadingId === "featured" ? "준비 중..." : "백서 전문 무료 다운로드"} <Download className="ml-1.5 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Decorative Book/PDF Cover Representation */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-56 sm:w-64 aspect-[3/4] rounded-xl overflow-hidden border border-border shadow-xl bg-background p-6 flex flex-col justify-between text-left group transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                  <div className="flex flex-col gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/5">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-[9px] font-bold tracking-[0.2em] text-primary uppercase">Technical Whitepaper</span>
                    <h3 className="font-serif text-sm font-bold text-foreground leading-snug mt-1">
                      조경 건설 기업의 ESG 도입 전략과 탄소 저감 효과 검증
                    </h3>
                  </div>

                  <div className="flex flex-col gap-1 border-t border-border pt-4 mt-4">
                    <span className="text-[9px] text-muted-foreground font-bold">REPRESENTATIVE DIRECTOR</span>
                    <span className="text-xs font-serif font-bold text-foreground">박은선 대표이사 저</span>
                    <span className="text-[8px] tracking-widest text-primary font-bold uppercase mt-1">ES Landscape Research Lab</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Analyst Reports Grid */}
        <section className="py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Research & Reports</span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">
                분야별 핵심 <span className="text-gradient-gold">기술 분석 자료</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {INSIGHTS.map((report) => (
                <div key={report.id} className="luxury-card bg-card/40 border-border/80 flex flex-col justify-between gap-6 shadow-sm text-left">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold bg-primary/5 border border-primary/15 text-primary px-2.5 py-0.5 rounded-full">
                        {report.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-semibold">
                        <Clock className="h-3.5 w-3.5 text-primary" />
                        {report.readTime}
                      </div>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-foreground leading-snug hover:text-primary transition-colors cursor-pointer">
                      {report.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                      {report.summary}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground font-semibold">저자: {report.author}</span>
                    <button 
                      onClick={() => handleDownload(report.id, report.title)}
                      disabled={downloadingId === report.id}
                      className="text-xs font-bold text-primary hover:text-primary/80 flex items-center gap-1 cursor-pointer"
                    >
                      {downloadingId === report.id ? "준비 중..." : "다운로드"} <Download className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Document Request */}
        <section className="py-24 bg-card/10 border-y border-border relative mt-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 text-left flex flex-col gap-5">
                <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Technical Archive</span>
                <h2 className="font-serif text-3xl font-bold tracking-tight">
                  특허 공법 시방서 및<br />
                  <span className="text-gradient-gold">설계 도면 패키지 요청</span>
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                  다층복합보강구조 사면 복원 공법의 표준 도면, 친환경 조경 시방서, 여성기업 수의계약 한도 및 조달 가이드라인이 포함된 종합 기술 아카이브 패키지를 무료로 받아보실 수 있습니다.
                </p>
              </div>

              <div className="lg:col-span-7 luxury-card bg-background/90 border-primary/20 flex flex-col gap-6 text-left">
                <h3 className="font-serif text-lg font-bold text-foreground border-b border-border pb-3">
                  기술 패키지 무료 신청
                </h3>
                
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    toast.success("기술 패키지 신청이 접수되었습니다.", {
                      description: "입력하신 이메일로 5분 이내에 다운로드 링크가 전송됩니다."
                    });
                  }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm"
                >
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-muted-foreground font-semibold">회사명 / 기관명</label>
                    <input 
                      required
                      type="text" 
                      placeholder="예: OO건설 / OO시청" 
                      className="bg-background/60 border border-border rounded-lg p-3 text-foreground focus:outline-none focus:border-primary/60 font-medium"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-muted-foreground font-semibold">담당자 성함</label>
                    <input 
                      required
                      type="text" 
                      placeholder="예: 홍길동" 
                      className="bg-background/60 border border-border rounded-lg p-3 text-foreground focus:outline-none focus:border-primary/60 font-medium"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label className="text-xs text-muted-foreground font-semibold">이메일 주소</label>
                    <input 
                      required
                      type="email" 
                      placeholder="example@company.com" 
                      className="bg-background/60 border border-border rounded-lg p-3 text-foreground focus:outline-none focus:border-primary/60 font-medium"
                    />
                  </div>
                  <Button type="submit" className="btn-gold sm:col-span-2 h-12 mt-2 cursor-pointer">
                    도면 및 시방서 패키지 이메일 수령 <ChevronRight className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
