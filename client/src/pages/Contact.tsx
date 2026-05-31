/*
 * Design Philosophy: Premium Light Clean (A안 - Leaf Grid)
 * Page: Contact / Multi-step Lead Qualification Form
 */

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  Building2, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2,
  FileCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Contact() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    phone: "",
    email: "",
    projectType: "slope", // slope, landscape, public, other
    projectArea: "under_500", // under_500, 500_2000, over_2000
    slopeAngle: "under_20", // under_20, 20_40, over_40
    budget: "under_50m", // under_50m, 50m_200m, over_200m
    description: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4); // Move to Success Screen
    toast.success("정밀 진단 컨설팅 신청이 정상 접수되었습니다.", {
      description: "담당 수석 엔지니어가 24시간 이내에 직접 연락드리겠습니다.",
      duration: 5000
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="flex-grow pt-32">
        <section className="container py-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Contact Us</span>
                <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  지속가능한 국토를 위한<br />
                  <span className="text-gradient-gold">첫 걸음, 정밀 기술 상담</span>
                </h1>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                  지방자치단체, 공공기관 및 민간 종합건설사의 사면 붕괴 예방 공법 적용과 고품격 조경 설계를 위해 이에스조경의 전문 기술진이 1:1 맞춤형 컨설팅을 제공합니다.
                </p>
              </div>

              <div className="h-px bg-border" />

              {/* Information Cards */}
              <div className="flex flex-col gap-5">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/5">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground font-bold uppercase">본사 및 연구소</span>
                    <span className="text-sm font-bold text-foreground mt-0.5">경기도 광주시 장지동 소재</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/5">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground font-bold uppercase">대표 전화</span>
                    <span className="text-sm font-bold text-foreground mt-0.5">031-XXX-XXXX (B2B 전용)</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/5">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground font-bold uppercase">이메일 문의</span>
                    <span className="text-sm font-bold text-foreground mt-0.5">es_landscape@naver.com</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/5">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground font-bold uppercase">상담 가능 시간</span>
                    <span className="text-sm font-bold text-foreground mt-0.5">평일 09:00 - 18:00 (주말/공휴일 제외)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Multi-step Form */}
            <div className="lg:col-span-7">
              <div className="luxury-card bg-card/30 border-primary/20 p-8 sm:p-10 shadow-md">
                {/* Step Progress Bar */}
                {step < 4 && (
                  <div className="flex items-center justify-between gap-2 mb-8">
                    {[1, 2, 3].map((num) => (
                      <div key={num} className="flex-grow flex items-center">
                        <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                          step >= num 
                            ? "bg-primary text-primary-foreground shadow" 
                            : "bg-muted text-muted-foreground border border-border"
                        }`}>
                          {num}
                        </div>
                        {num < 3 && (
                          <div className={`flex-grow h-0.5 mx-2 rounded-full transition-all duration-300 ${
                            step > num ? "bg-primary" : "bg-border"
                          }`} />
                        )}
                      </div>
                    ))}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="text-sm">
                  {/* STEP 1: Basic Information */}
                  {step === 1 && (
                    <div className="flex flex-col gap-5 animate-in fade-in duration-300">
                      <h3 className="font-serif text-lg font-bold text-foreground border-b border-border pb-3">
                        STEP 1: 기업 및 담당자 기본 정보
                      </h3>
                      
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-muted-foreground font-semibold">회사명 / 기관명</label>
                        <input 
                          required
                          type="text" 
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="예: OO건설 / OO시청 도로과" 
                          className="bg-background/60 border border-border rounded-lg p-3 text-foreground focus:outline-none focus:border-primary/60 font-medium"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-muted-foreground font-semibold">담당자 성함</label>
                        <input 
                          required
                          type="text" 
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleInputChange}
                          placeholder="예: 홍길동 과장" 
                          className="bg-background/60 border border-border rounded-lg p-3 text-foreground focus:outline-none focus:border-primary/60 font-medium"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs text-muted-foreground font-semibold">연락처</label>
                          <input 
                            required
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="010-XXXX-XXXX" 
                            className="bg-background/60 border border-border rounded-lg p-3 text-foreground focus:outline-none focus:border-primary/60 font-medium"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs text-muted-foreground font-semibold">이메일 주소</label>
                          <input 
                            required
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="example@company.com" 
                            className="bg-background/60 border border-border rounded-lg p-3 text-foreground focus:outline-none focus:border-primary/60 font-medium"
                          />
                        </div>
                      </div>

                      <Button 
                        type="button" 
                        onClick={nextStep}
                        disabled={!formData.companyName || !formData.contactName || !formData.phone || !formData.email}
                        className="btn-gold h-12 mt-4 cursor-pointer"
                      >
                        다음 단계 진행 <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  )}

                  {/* STEP 2: Project Specifications */}
                  {step === 2 && (
                    <div className="flex flex-col gap-5 animate-in fade-in duration-300">
                      <h3 className="font-serif text-lg font-bold text-foreground border-b border-border pb-3">
                        STEP 2: 현장 진단 및 사업 영역 자가진단
                      </h3>

                      {/* Project Type */}
                      <div className="flex flex-col gap-2">
                        <label className="text-xs text-muted-foreground font-semibold">사업 및 공법 영역</label>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { id: "slope", label: "사면 복원 · 녹화" },
                            { id: "landscape", label: "공공 및 단지 조경" },
                            { id: "public", label: "공원 공사 (지자체)" },
                            { id: "other", label: "기타 설계 문의" }
                          ].map(opt => (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => handleSelectChange("projectType", opt.id)}
                              className={`p-3 rounded-lg border text-xs font-bold transition-all duration-300 cursor-pointer ${
                                formData.projectType === opt.id 
                                  ? "bg-primary/5 border-primary text-primary" 
                                  : "bg-background/60 border-border hover:border-primary/40"
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Project Area */}
                      <div className="flex flex-col gap-2">
                        <label className="text-xs text-muted-foreground font-semibold">예상 시공 면적</label>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { id: "under_500", label: "500㎡ 미만" },
                            { id: "500_2000", label: "500㎡ - 2,000㎡" },
                            { id: "over_2000", label: "2,000㎡ 초과" }
                          ].map(opt => (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => handleSelectChange("projectArea", opt.id)}
                              className={`p-3 rounded-lg border text-[11px] font-bold transition-all duration-300 cursor-pointer ${
                                formData.projectArea === opt.id 
                                  ? "bg-primary/5 border-primary text-primary" 
                                  : "bg-background/60 border-border hover:border-primary/40"
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Slope Angle (Conditional) */}
                      {formData.projectType === "slope" && (
                        <div className="flex flex-col gap-2 animate-in slide-in-from-top-3 duration-300">
                          <label className="text-xs text-muted-foreground font-semibold">현장 사면의 예상 경사도</label>
                          <div className="grid grid-cols-3 gap-2">
                            {[
                              { id: "under_20", label: "완경사 (20도 미만)" },
                              { id: "20_40", label: "급경사 (20-40도)" },
                              { id: "over_40", label: "수직에 가까움 (40도+)" }
                            ].map(opt => (
                              <button
                                key={opt.id}
                                type="button"
                                onClick={() => handleSelectChange("slopeAngle", opt.id)}
                                className={`p-3 rounded-lg border text-[11px] font-bold transition-all duration-300 cursor-pointer ${
                                  formData.slopeAngle === opt.id 
                                    ? "bg-primary/5 border-primary text-primary" 
                                    : "bg-background/60 border-border hover:border-primary/40"
                                }`}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex gap-4 mt-4">
                        <Button 
                          type="button" 
                          variant="outline"
                          onClick={prevStep}
                          className="flex-1 h-12 border-border hover:bg-card/40 cursor-pointer font-bold"
                        >
                          <ChevronLeft className="mr-1 h-4 w-4" /> 이전으로
                        </Button>
                        <Button 
                          type="button" 
                          onClick={nextStep}
                          className="flex-1 btn-gold h-12 cursor-pointer"
                        >
                          다음 단계 진행 <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Budget & Detail Description */}
                  {step === 3 && (
                    <div className="flex flex-col gap-5 animate-in fade-in duration-300">
                      <h3 className="font-serif text-lg font-bold text-foreground border-b border-border pb-3">
                        STEP 3: 예산 수립 및 세부 현장 정보 입력
                      </h3>

                      {/* Budget Range */}
                      <div className="flex flex-col gap-2">
                        <label className="text-xs text-muted-foreground font-semibold">사업 예산 규모</label>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { id: "under_50m", label: "5천만 원 미만" },
                            { id: "50m_200m", label: "5천만 - 2억 원" },
                            { id: "over_200m", label: "2억 원 초과" }
                          ].map(opt => (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => handleSelectChange("budget", opt.id)}
                              className={`p-3 rounded-lg border text-[11px] font-bold transition-all duration-300 cursor-pointer ${
                                formData.budget === opt.id 
                                  ? "bg-primary/5 border-primary text-primary" 
                                  : "bg-background/60 border-border hover:border-primary/40"
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Detail Description */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-muted-foreground font-semibold">현장 상태 및 주요 요구사항 (선택)</label>
                        <textarea 
                          name="description"
                          value={formData.description}
                          onChange={handleInputChange}
                          rows={4}
                          placeholder="현장의 토질 상태, 암반 유무, 집중호우 시 토사 유실 우려 사항 등 구체적인 현장 컨디션을 적어주시면 더욱 정밀한 1차 도면 검토가 가능합니다." 
                          className="bg-background/60 border border-border rounded-lg p-3 text-foreground focus:outline-none focus:border-primary/60 font-medium resize-none"
                        />
                      </div>

                      <div className="flex gap-4 mt-4">
                        <Button 
                          type="button" 
                          variant="outline"
                          onClick={prevStep}
                          className="flex-1 h-12 border-border hover:bg-card/40 cursor-pointer font-bold"
                        >
                          <ChevronLeft className="mr-1 h-4 w-4" /> 이전으로
                        </Button>
                        <Button 
                          type="submit" 
                          className="flex-1 btn-gold h-12 cursor-pointer"
                        >
                          기술 상담 신청하기 <FileCheck className="ml-1.5 h-4.5 w-4.5" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* SUCCESS SCREEN */}
                  {step === 4 && (
                    <div className="flex flex-col items-center text-center gap-6 py-10 animate-in zoom-in-95 duration-500">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                        <CheckCircle2 className="h-10 w-10 text-primary" />
                      </div>

                      <div className="flex flex-col gap-2">
                        <h3 className="font-serif text-2xl font-bold text-foreground">
                          기술 상담 접수가 완료되었습니다!
                        </h3>
                        <p className="text-sm text-muted-foreground max-w-md leading-relaxed font-medium">
                          (주)이에스조경을 신뢰하고 정밀 기술 상담을 신청해 주셔서 대단히 감사합니다.
                        </p>
                      </div>

                      <div className="h-px w-full bg-border" />

                      <div className="flex flex-col gap-2.5 text-left bg-primary/5 border border-primary/15 p-5 rounded-xl w-full max-w-md">
                        <span className="text-[10px] text-primary font-bold uppercase tracking-wider">향후 진행 일정 가이드</span>
                        <div className="flex flex-col gap-2 text-xs text-muted-foreground font-semibold">
                          <span className="flex items-center gap-2 text-foreground">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            1단계: 24시간 이내 담당 수석 엔지니어 해피콜 연락
                          </span>
                          <span className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                            2단계: 위성 지도 및 지형 도면을 통한 1차 비대면 분석
                          </span>
                          <span className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                            3단계: 정밀 시공 장비를 지참한 무상 현장 실사 및 견적 조율
                          </span>
                        </div>
                      </div>

                      <Button 
                        type="button" 
                        onClick={() => setStep(1)}
                        className="btn-gold h-11 px-6 text-xs font-bold mt-2 cursor-pointer"
                      >
                        새로운 상담 신청하기
                      </Button>
                    </div>
                  )}
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
