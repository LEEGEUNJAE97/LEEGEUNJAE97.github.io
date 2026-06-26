// ============================================================
// resume.js — 경력·학력·자격증·역량·자기소개 등 이력 데이터
// ============================================================
window.RESUME_DATA = {
  about: {
    ko: "명지대학교 환경에너지공학과 졸업 후 동희산업·이순환거버넌스에서 3년간 EHS·ESG 업무를 수행했습니다. 약 1,400개 회원사 재활용 분담금을 관리하며 3단계 교차검증 체계를 설계해 감사 지적사항 0건(2년 연속)을 달성했습니다. 전국 8개 공장의 ISO 14001·45001 경영시스템을 표준화했습니다.",
    en: "Environmental & Energy Engineering graduate of Myongji University with three years of EHS/ESG experience at Donghee Industry and E-Soonhwan Governance. Managed recycling levies for ~1,400 member companies, designed a three-step cross-verification routine, and achieved zero audit findings for two straight years. Standardized ISO 14001/45001 OHS management across eight nationwide plants."
  },
  experience: [
    {
      company: { ko: "이순환거버넌스 (E-순환거버넌스)", en: "E-Soonhwan Governance" },
      title: { ko: "공제센터 관리팀 사원 (환경기사 · ESG)", en: "Associate, Mutual-Aid Center Management Team (Environmental · ESG)" },
      period: "2023.09 – 2026.03 · 2년 7개월",
      highlights: [
        { ko: "약 1,400개 회원사의 제품 출고·매입량 데이터 취합·분석 및 법적 신고 사항 관리", en: "Compiled and analyzed shipment/purchase data for ~1,400 member companies and managed statutory reporting" },
        { ko: "연간 1,000억 원 규모 재활용 분담금 산출·청구·정산 업무 총괄", en: "Owned calculation, billing, and settlement of recycling levies worth ~KRW 100B annually" },
        { ko: "엑셀·내부 시스템 연계 3단계 데이터 교차검증 프로세스 자체 설계 — 오차율 0% 달성", en: "Self-designed a three-step Excel/system cross-verification process — achieved 0% error rate" },
        { ko: "기후환경에너지부·한국환경공단·감사원 정기 감사 대응 — 데이터 불일치 지적사항 0건(2년 연속)", en: "Handled audits by the Ministry, K-eco, and the Board of Audit — zero data-discrepancy findings for two straight years" },
        { ko: "한국환경공단 주관 전국 제도 설명회 총 10회 단독 연사 — 약 1,000명 기업 담당자 실무 교육", en: "Sole speaker at 10 nationwide K-eco briefings, training ~1,000 corporate staff" },
        { ko: "재활용 사업 회원사 53개사 대상 EHS 컴플라이언스 진단 및 맞춤형 개선 대책 제시", en: "Ran EHS compliance diagnostics for 53 recycling member companies with tailored improvement plans" },
        { ko: "재활용 사업장 현장 안전점검 수행 및 SELF EHS 점검 시스템 운영", en: "Conducted on-site safety inspections and operated the SELF EHS inspection system" }
      ]
    },
    {
      company: { ko: "동희산업", en: "Donghee Industry" },
      title: { ko: "노사협력팀 사원 (보건관리자)", en: "Associate, Labor-Management Team (Health & Safety Manager)" },
      period: "2023.02 – 2023.08 · 7개월",
      highlights: [
        { ko: "ISO 14001·45001 기반 전사 환경·안전보건경영시스템 통합 구축 — 전국 8개 공장 문서 표준화", en: "Built an integrated company-wide ISO 14001/45001 EHS management system — standardized documentation across 8 plants" },
        { ko: "본사 Control Tower 역할 수행 — 공장별 소통 채널 운영, 개선 사례 수평전개 체계 정립", en: "Served as HQ control tower — ran per-plant channels and a horizontal best-practice rollout system" },
        { ko: "중대재해처벌법 대응 — 법적 의무 이행 점검, 경영진 보고 체계 수립 및 리스크 분석", en: "Drove Serious Accidents Punishment Act compliance — duty checks, executive reporting, and risk analysis" },
        { ko: "취급 화학물질(MSDS) 전수 조사 및 경고표지·교육 자료 현행화 — 화관법 대응 기초 확립", en: "Audited all chemicals (MSDS) and updated labels/training materials — Chemicals Control Act foundation" },
        { ko: "작업환경측정 및 임직원 건강검진 총괄, 유해인자 노출 저감 조치 실행", en: "Oversaw work-environment monitoring and employee health checkups, implementing exposure-reduction measures" }
      ]
    }
  ],
  education: [
    { school: { ko: "명지대학교 (자연계열)", en: "Myongji University" }, degree: { ko: "환경에너지공학과 학사 (졸업, 학점 3.33/4.5)", en: "B.S. in Environmental & Energy Engineering (GPA 3.33/4.5)" }, period: "2016.03 – 2022.02" }
  ],
  certifications: [
    { ko: "대기환경기사 (2021.12)", en: "Air Pollution Environmental Engineer (2021.12)" },
    { ko: "산업안전산업기사 (2024.06)", en: "Industrial Safety Engineer (Industrial, 2024.06)" },
    { ko: "컴퓨터활용능력 1급 (2022.08)", en: "Computer Specialist (Spreadsheet & DB) Lv.1 (2022.08)" },
    { ko: "AICE Basic (2026.04)", en: "AICE Basic — AI Certificate for Everyone (2026.04)" },
    { ko: "ESG공급망평가관리사 (2024.04)", en: "ESG Supply Chain Assessment Manager (2024.04)" },
    { ko: "OPIc IH · 영어 (2026.04)", en: "OPIc IH · English (2026.04)" }
  ],
  skills: [
    { ko: "ESG 데이터 관리·검증", en: "ESG data management & verification" },
    { ko: "재활용 분담금 산정·정산", en: "Recycling-levy calculation & settlement" },
    { ko: "데이터 3단계 교차검증", en: "Three-step data cross-verification" },
    { ko: "EHS 점검·진단", en: "EHS inspection & diagnosis" },
    { ko: "ISO 14001·45001 문서화", en: "ISO 14001 / 45001 documentation" },
    { ko: "중대재해처벌법·화관법 대응", en: "Serious Accidents & Chemicals Control Act compliance" },
    { ko: "환경 인허가·신고", en: "Environmental permitting & reporting" },
    { ko: "대관 업무·이해관계자 소통", en: "Government relations & stakeholder communication" }
  ],
  projects: [],
  selfIntro: [
    {
      title: { ko: "성장 배경 및 강점", en: "Background & Strengths" },
      content: {
        ko: "명지대학교 환경에너지공학과를 졸업한 후, 동희산업과 이순환거버넌스에서 3년간 EHS·ESG 실무를 담당했습니다. 공장 현장의 안전보건경영부터 전국 단위 환경 제도 운영까지, 규모와 성격이 다른 두 조직에서 실무 기반을 닦은 것이 저의 강점입니다.",
        en: "After graduating in Environmental & Energy Engineering from Myongji University, I spent three years in EHS/ESG practice at Donghee Industry and E-Soonhwan Governance. My strength lies in having built a hands-on foundation across two organizations of different scale and character — from on-site plant safety management to nationwide environmental program operations."
      }
    },
    {
      title: { ko: "동희산업 — 시스템 구축 경험", en: "Donghee Industry — Building Systems" },
      content: {
        ko: "동희산업에서는 보건관리자로서 ISO 14001·45001 기반 환경·안전보건경영시스템을 전국 8개 공장에 통합 구축했습니다. 중대재해처벌법 시행 초기에 본사 Control Tower 역할을 맡아 현장과 경영진을 연결하고, 법적 의무 이행 현황 점검과 리스크 분석 체계를 수립했습니다.",
        en: "At Donghee Industry, as Health & Safety Manager, I led the integration of an ISO 14001/45001 management system across eight plants nationwide. During the early implementation of the Serious Accidents Punishment Act, I served as the HQ control tower — bridging sites and senior management while establishing frameworks for statutory compliance checks and risk analysis."
      }
    },
    {
      title: { ko: "이순환거버넌스 — 데이터 정확성과 대외 활동", en: "E-Soonhwan Governance — Data Integrity & Public Role" },
      content: {
        ko: "이순환거버넌스에서는 약 1,400개 회원사의 재활용 분담금 산출·청구·정산을 총괄하면서, 3단계 교차검증 프로세스를 자체 설계해 오차율 0%를 달성했습니다. 이 체계는 기후환경에너지부·한국환경공단·감사원의 정기 감사에서 2년 연속 데이터 불일치 지적사항 0건이라는 결과로 이어졌으며, 전국 설명회 단독 연사로서 약 1,000명의 기업 담당자에게 실무 교육을 제공하기도 했습니다.",
        en: "At E-Soonhwan Governance, I owned calculation, billing, and settlement of recycling levies for ~1,400 member companies. I self-designed a three-step cross-verification process that achieved a 0% error rate — resulting in zero audit findings across two consecutive reviews by the Ministry, K-eco, and the Board of Audit. I also served as sole speaker at ten nationwide briefings, providing practical training to approximately 1,000 corporate staff."
      }
    },
    {
      title: { ko: "입사 후 포부", en: "What I Bring Going Forward" },
      content: {
        ko: "환경 데이터의 신뢰성이 ESG 경영의 출발점이라는 믿음 아래, 저는 단순히 규정을 따르는 것을 넘어 오류를 구조적으로 차단하는 시스템을 만들어 왔습니다. 외부에서 진단하고 내부에서 실행한 경험을 바탕으로, 입사 후에도 데이터 기반의 EHS·ESG 체계를 완성하고 조직의 지속가능성에 기여하겠습니다.",
        en: "Guided by the belief that data integrity is the foundation of ESG management, I have consistently built systems that structurally prevent errors rather than simply following regulations. Drawing on experience that spans external diagnosis and internal execution, I am committed to completing data-driven EHS/ESG frameworks and contributing to organizational sustainability wherever I join."
      }
    }
  ]
};
