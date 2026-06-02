import { COMPANY_INFO } from "../const";
import {
  Building2,
  Phone,
  Printer,
  Mail,
  MapPin,
  ShieldCheck,
  Award,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-16 text-left">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center">
              <img
                src="/logo.png?v=3"
                alt="(주)이에스조경"
                className="h-10 w-auto max-h-12 sm:h-12 sm:max-h-14 object-contain shrink-0"
              />
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed font-semibold max-w-sm">
              (주)이에스조경은 특허 등록된 다층복합보강구조 비탈면 식생 공법과
              친환경 탄소 저장형 바이오차 기반재를 전면 적용하여, 기후변화에
              대응하는 정밀 조경 엔지니어링을 실천합니다.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="flex items-center gap-1 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] text-primary font-bold">
                <ShieldCheck className="h-3 w-3" /> 여성기업 인증
              </div>
              <div className="flex items-center gap-1 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] text-primary font-bold">
                <Award className="h-3 w-3" /> 특허 공법 보유
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="font-serif text-xs font-bold text-foreground uppercase tracking-wider">
              주요 메뉴
            </h4>
            <ul className="text-xs font-semibold text-muted-foreground flex flex-col gap-2.5">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  홈으로
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  회사 소개 (대표이사 인사말)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  특허 사업 영역
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  시공 실적 대시보드
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("insights")}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  인사이트 랩 (기술 백서)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  무료 현장 진단 신청
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="font-serif text-xs font-bold text-foreground uppercase tracking-wider">
              고객 지원 및 문의
            </h4>
            <ul className="text-xs font-semibold text-muted-foreground flex flex-col gap-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>본사: {COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>대표전화: {COMPANY_INFO.tel}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Printer className="h-4 w-4 text-primary shrink-0" />
                <span>팩스번호: {COMPANY_INFO.fax}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span>이메일: {COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex flex-col gap-1 sm:items-start">
            <p className="font-medium text-center sm:text-left">
              {COMPANY_INFO.name} | 대표이사 {COMPANY_INFO.ceo} |
              사업자등록번호: {COMPANY_INFO.registrationNo} | 법인등록번호:
              205411-0033219
            </p>
            <p className="text-center sm:text-left">
              면허번호: {COMPANY_INFO.licenseNo} | 자본금:{" "}
              {COMPANY_INFO.capital}
            </p>
          </div>
          <div className="text-center sm:text-right font-medium">
            <p>
              © {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </p>
            <p className="text-[10px] text-primary/80 mt-0.5 font-bold">
              From the Roots to the Future.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
