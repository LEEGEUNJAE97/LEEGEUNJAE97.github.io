// ============================================================
// resume.js — 경력·학력·자격증·역량·자기소개 등 이력 데이터
// ============================================================
window.RESUME_DATA = {
  about: {
    ko: "환경·안전 데이터의 신뢰성을 시스템으로 만드는 EHS·ESG 실무자입니다. 동희산업과 이순환거버넌스에서 3년간, 사업장 안전보건경영부터 전국 단위 환경제도 운영까지 규모가 다른 두 현장을 모두 경험했습니다. 규정을 따르는 데 그치지 않고 오차를 구조적으로 차단하는 체계를 직접 설계해 왔습니다.",
    en: "An EHS/ESG practitioner who turns the reliability of environmental and safety data into working systems. Across three years at Donghee Industry and E-Soonhwan Governance, I have worked both ends of the field — from plant-level OHS management to nationwide environmental program operations. Rather than simply meeting regulations, I design structures that prevent errors at the source."
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
  // 자격증: 직무 관련성 순으로 그룹화. items 각각 ko/en/date/desc.
  certifications: [
    {
      title: { ko: "환경·안전 (직무 핵심)", en: "EHS · Safety (Core)" },
      items: [
        { ko: "대기환경기사", en: "Air Pollution Environmental Engineer", date: "2021.12",
          desc: { ko: "인허가·배출량 검증 실무", en: "Permitting & emissions verification" } },
        { ko: "산업안전산업기사", en: "Industrial Safety Engineer", date: "2024.06",
          desc: { ko: "위험성 평가·중대재해 대응", en: "Risk assessment & serious accidents compliance" } },
        { ko: "ESG공급망평가관리사(민간)", en: "ESG Supply Chain Assessment Manager (Private)", date: "2024.04",
          desc: { ko: "공급망 ESG 실사·데이터 검증", en: "Supply-chain ESG due-diligence" } }
      ]
    },
    {
      title: { ko: "디지털·AI", en: "Digital · AI" },
      items: [
        { ko: "AICE Basic", en: "AICE Basic", date: "2026.04",
          desc: { ko: "AI 활용·업무 자동화", en: "AI tools & workflow automation" } },
        { ko: "컴퓨터활용능력 1급", en: "Computer Specialist Lv.1", date: "2022.08",
          desc: { ko: "Excel 분담금 산정·교차검증", en: "Excel levy calculation & cross-verification" } },
        { ko: "워드프로세서 3급", en: "Word Processor Lv.3", date: "2008.03",
          desc: { ko: "공문서·보고서 서식 작성", en: "Official documents & report formatting" } }
      ]
    },
    {
      title: { ko: "어학", en: "Language" },
      items: [
        { ko: "OPIc IH · 영어", en: "OPIc IH · English", date: "2026.04",
          desc: { ko: "영문 ESG 검토·글로벌 소통", en: "English ESG review & global communication" } }
      ]
    },
    {
      title: { ko: "기타", en: "Other" },
      items: [
        { ko: "운전면허 2종 보통", en: "Driver's License (Class 2 Standard)", date: "2016.07",
          desc: { ko: "현장 방문·EHS 점검 이동", en: "Field visits & EHS inspection travel" } }
      ]
    }
  ],
  skills: [
    { ko: "ESG 데이터 검증", en: "ESG data verification",
      desc: { ko: "회원사 출고·매입 데이터 취합·분석 및 법적 신고 관리", en: "Compile & analyze member shipment/purchase data; manage statutory reporting" } },
    { ko: "재활용 분담금 산정·정산", en: "Recycling-levy calculation & settlement",
      desc: { ko: "연 1,000억 원 규모 분담금 산출·청구·정산 총괄", en: "Own full lifecycle of ~KRW 100B in annual levy calculation, billing & settlement" } },
    { ko: "3단계 교차검증 설계", en: "Three-step cross-verification design",
      desc: { ko: "자체 설계 검증 프로세스로 오차율 0%, 감사 지적 0건(2년 연속)", en: "Self-designed process: 0% error rate, zero audit findings two years running" } },
    { ko: "EHS 점검·진단", en: "EHS inspection & diagnosis",
      desc: { ko: "사업장 안전점검 및 53개사 컴플라이언스 진단·개선안 제시", en: "On-site safety inspections & compliance diagnostics for 53 companies" } },
    { ko: "ISO 14001·45001 문서 표준화", en: "ISO 14001 / 45001 documentation",
      desc: { ko: "전국 8개 공장 환경·안전보건경영시스템 통합 구축", en: "Integrated EHS management system across 8 plants nationwide" } },
    { ko: "중대재해처벌법·화관법 대응", en: "Serious Accidents & Chemicals Control Act compliance",
      desc: { ko: "법적 의무 이행 점검, 리스크 분석 및 경영진 보고 체계 수립", en: "Statutory duty checks, risk analysis & executive reporting framework" } },
    { ko: "환경 인허가·변경신고", en: "Environmental permitting & reporting",
      desc: { ko: "배출량 검증·허가 기준 준수 및 변경 신고 실무", en: "Emissions verification, permit compliance & change-notification filings" } },
    { ko: "대관·이해관계자 소통", en: "Government & stakeholder communication",
      desc: { ko: "전국 설명회 단독 연사 10회, 기업 담당자 약 1,000명 실무 교육", en: "Sole speaker at 10 nationwide briefings; trained ~1,000 corporate staff" } }
  ],
  tools: [
    { ko: "Excel · 피벗 ·. 데이터 가공", en: "Excel · pivot · data",
      desc: { ko: "분담금 산정·3단계 교차검증의 핵심 작업 도구", en: "Core tool for levy calculation & three-step cross-verification" } },
    { ko: "국가법령정보센터", en: "Korean statutes portal",
      desc: { ko: "환경·안전 규정 조회 및 개정 이력 추적", en: "Environmental & safety regulation lookup and amendment tracking" } },
    { ko: "환경공단 EcoAS", en: "K-eco EcoAS",
      desc: { ko: "환경성보장제도 데이터 신고·관리 시스템", en: "Extended Producer Responsibility data reporting & management system" } },
    { ko: "MSDS · 화학물질정보처리시스템", en: "MSDS · Chemicals Information System",
      desc: { ko: "화관법 대응 화학물질 전수 조사·교육 자료 현행화", en: "Chemicals Control Act audit & label/training material updates" } },
    { ko: "AI 프롬프트 (Claude·Gemini)", en: "AI prompting (Claude · Gemini)",
      desc: { ko: "보고서 작성·데이터 분석·반복 업무 자동화에 상시 활용", en: "Daily use for report drafting, data analysis & workflow automation" } },
    { ko: "HTML·CSS·JS", en: "HTML · CSS · JS",
      desc: { ko: "AI 바이브코딩으로 실무 도구 직접 개발·운용 중", en: "Self-built practical tools via AI-assisted coding, currently in use" } }
  ],
  projects: [
    {
      type: { ko: "데이터 무결성", en: "Data Integrity" },
      company: { ko: "이순환거버넌스", en: "E-Soonhwan Governance" },
      title: { ko: "재활용 분담금 3단계 교차검증 체계 설계", en: "Three-Step Cross-Verification System for Recycling Levies" },
      period: "2023.09 – 2026.03",
      highlights: [
        { ko: "분담금이 신고량→의무량→단가 적용 순서로 이어지는 누적 구조여서 한 단계 오류가 다음 단계로 전이된다는 구조적 리스크를 파악해 검증 체계를 직접 설계", en: "Identified the structural risk in the cumulative levy calculation — one step's error carries into the next — and self-designed a verification system to contain it" },
        { ko: "법적 신고 총중량 대조 → 품목군 기준치 이탈 분류 → 과년도 3개년 평균 대조의 3단계 검증 절차를 수립해, 세 단계를 모두 충족한 값만 청구 자료로 확정", en: "Established three sequential checks — statutory total-weight reconciliation, item-group threshold screening, three-year historical average comparison — confirming only figures that cleared all three for billing" },
        { ko: "연 1,000억 원 규모 정산에서 오차율 0% 달성", en: "Achieved a 0% error rate across ~KRW 100B in annual levy settlements" },
        { ko: "기후환경에너지부·한국환경공단·감사원 정기 감사에서 데이터 불일치 지적 0건(2년 연속)", en: "Zero data-discrepancy findings across audits by the Ministry, K-eco, and the Board of Audit for two consecutive years" }
      ]
    },
    {
      type: { ko: "표준화·다거점 협업", en: "Standardization & Multi-site Collaboration" },
      company: { ko: "동희산업", en: "Donghee Industry" },
      title: { ko: "전국 8개 공장 ISO 45001 문서 표준화 주도", en: "Leading ISO 45001 Documentation Standardization Across 8 Plants" },
      period: "2023.02 – 2023.08",
      highlights: [
        { ko: "차이를 허용 가능한 '형식 차이(통합 대상)'와 통합 불가한 '공정 차이(예외 관리)'로 이원화해, 표준과 예외의 경계를 명확히 설정", en: "Split plant-to-plant differences into 'format-only (merge)' and 'actual process difference (manage as exception)' — drawing a clear boundary between standard and exception" },
        { ko: "8개 공장 담당자들이 이슈를 실시간으로 공유하는 협업 채널을 구축해 개선 사례를 매일 수평전개", en: "Built a real-time collaboration channel for all 8 plant leads, rolling out improvements horizontally every day" },
        { ko: "중대재해처벌법 시행 초기 본사 Control Tower로서 현장과 경영진을 연결하고 리스크 분석 체계 수립", en: "Served as HQ control tower during the early Serious Accidents Punishment Act rollout, bridging sites and leadership and establishing a risk-analysis framework" },
        { ko: "취급 화학물질(MSDS) 전수 조사 및 경고표지·교육 자료 현행화로 화관법 대응 기초 확립", en: "Audited all handled chemicals (MSDS) and updated labels and training materials, establishing the foundation for Chemicals Control Act compliance" }
      ]
    },
    {
      type: { ko: "리스크 분류·점검 체계", en: "Risk Classification & Inspection System" },
      company: { ko: "동희산업", en: "Donghee Industry" },
      title: { ko: "점검 기준 재설계 — 법적 리스크 분류로 외부 점검 지적 0건", en: "Inspection Standard Redesign — Zero Findings via Legal Risk Classification" },
      period: "2023.02 – 2023.08",
      highlights: [
        { ko: "기존 체크리스트가 서류 유무만 확인하고 절차의 실제 운영 여부는 식별하지 못한다는 구조적 문제를 진단", en: "Diagnosed the structural flaw: existing checklists verified document existence but could not detect whether procedures were actually being followed" },
        { ko: "점검 항목을 '미실시(절차 미수립 → 즉시 문서화·절차 수립 최우선)'와 '미흡(절차는 있으나 운영 불완전 → 이행 근거 확보)'으로 분류해 우선순위를 구조화", en: "Classified items into two tiers: 'not implemented (no procedure — establish immediately)' and 'incomplete (procedure exists but inadequately operated — secure evidence)' to make priorities structural, not ad hoc" },
        { ko: "과기정통부 주관 연구실 안전 현장점검에서 과태료 지적사항 0건 달성", en: "Achieved zero penalty findings in the Ministry of Science and ICT's on-site laboratory safety inspection" },
        { ko: "같은 분류 기준을 공장 유해인자 순회점검 체크리스트에 확대 적용해 대응 우선순위 정비", en: "Extended the same classification framework to plant-level hazard patrol checklists, restructuring response priorities across all facilities" }
      ]
    },
    {
      type: { ko: "규제 대응·대외 커뮤니케이션", en: "Regulatory & Public Communication" },
      company: { ko: "이순환거버넌스 · 한국환경공단 주관", en: "E-Soonhwan Governance · hosted by K-eco" },
      title: { ko: "환경성보장제도 설명회 단독 연사 10회", en: "Sole Speaker at 10 Nationwide Program Briefings" },
      period: "2023.09 – 2026.03",
      highlights: [
        { ko: "법 조문 순서 대신 기업이 실제로 거치는 업무 흐름(가입→분담금 산정→정산) 순서로 설명 구조를 재배열해 청중이 제도를 자사 업무에 즉시 연결하도록 설계", en: "Restructured content from the law's article sequence to the workflow companies actually follow — enrollment, levy calculation, settlement — so the audience could map the program to their own operations immediately" },
        { ko: "회차마다 반복되는 질문 패턴을 기록해 다음 회차 설명 앞에 선제 배치, 법령 개정 시 다음 회차에 즉시 반영", en: "Logged recurring question patterns each session, moved those topics to the opening of the next, and reflected any regulatory amendment at the very next session" },
        { ko: "회당 최대 400명 대상 단독 연사 10회 수행, 누적 신규 가입 310건 달성", en: "Delivered 10 solo-speaker sessions to audiences of up to 400, driving 310 cumulative new enrollments" }
      ]
    },
    {
      type: { ko: "AI 활용·자동화", en: "AI & Automation" },
      company: { ko: "개인 프로젝트", en: "Personal Project" },
      title: { ko: "AI 바이브코딩 도구 2종 자체 개발", en: "Two Self-Built Tools via AI-Assisted Coding" },
      period: "2025 – 현재",
      highlights: [
        { ko: "코딩 비전공 상태에서 AICE Basic으로 AI 기본기를 다지고, 업무에서 직접 필요한 도구를 제작하는 방식으로 접근", en: "As a non-CS background professional, grounded myself with AICE Basic before building the tools I actually needed at work" },
        { ko: "출처가 다른 데이터를 수작업으로 취합하던 병목을 해소하기 위해 여러 출처 데이터를 한 화면에 통합·비교하는 프로그램 개발 및 실사용 중", en: "Built a program consolidating data from multiple sources into a single comparison view — directly addressing the manual aggregation bottleneck from prior work, now in daily use" },
        { ko: "운동 기록을 자동으로 추천하는 일지 앱 개발 — 반복 수작업을 자동화하는 동일한 접근을 개인 영역에 적용", en: "Developed a workout-log app with auto-recommendation — the same automation-over-manual-repetition approach applied to a personal context" }
      ]
    }
  ],
  selfIntro: [
    {
      title: { ko: "성장 배경 및 강점", en: "Background & Strengths" },
      content: {
        ko: "동희산업에서 법정 보건관리자로 전국 8개 제조 공장의 안전보건 업무를 본사에서 통합 관리했고, 이순환거버넌스에서는 외부 조력자로 전국 약 1,400개 사업장 대상 EHS 점검과 환경 제도 운영을 담당했습니다.\n\n내부 실행자와 외부 진단자를 순서대로 경험하면서 한 가지 판단에 이르렀습니다. 내부에 있으면 현장을 바꿀 수 있지만, 업무에 익숙해질수록 규제 기준을 객관적으로 들여다보는 시각이 약해집니다. 외부 조력자로 전환하면 진단의 객관성은 높아지지만 실행 권한이 없습니다. 두 역할을 거치며 확인한 것은, 규제 기준으로 현장을 바라보는 시각은 내부에 있어도 의식적으로 유지할 수 있다는 점입니다.\n\n규정을 따르는 데서 멈추지 않고, 오류가 재발하지 않도록 구조 자체를 바꾸는 방식으로 일해 왔습니다.",
        en: "At Donghee Industry I managed health and safety operations for eight manufacturing plants nationwide as a statutory Health & Safety Manager, working from headquarters. At E-Soonhwan Governance I shifted to an external advisory role — conducting EHS inspections and administering environmental programs across approximately 1,400 member companies.\n\nMoving through both roles in sequence led me to one conclusion. Working inside gives you execution authority, but familiarity with daily operations gradually weakens the regulatory vantage point. Switching to an external role sharpens diagnostic objectivity, but removes the authority to implement change. Having held both, I found that the regulatory perspective does not require an external position — it can be maintained deliberately from within.\n\nI work by changing structures, not just following rules, so that errors cannot recur."
      }
    },
    {
      title: { ko: "리스크를 구조로 차단하는 방식", en: "Blocking Risk Through Structure" },
      content: {
        ko: "동희산업에서 공장 유해인자 관리와 연구실 점검을 함께 담당했는데, 두 영역에 공통된 문제가 있었습니다. 기존 체크리스트가 서류 유무만 확인하고 절차의 실제 운영 여부는 식별하지 못했습니다. 점검이 끝나도 무엇부터 고쳐야 하는지 우선순위가 불명확했습니다.\n\n이 문제를 해결하기 위해 점검 항목을 법적 리스크 수준에 따라 두 가지로 분류했습니다. 절차 자체가 수립되지 않아 적발 시 법 위반에 해당하는 항목은 '미실시'로 분류해 즉시 문서화와 절차 수립을 최우선으로 처리했고, 형식은 갖췄으나 실제 운영이 불완전한 항목은 '미흡'으로 분류해 이행 근거 서류를 점검 전에 확보했습니다. 과기정통부 주관 연구실 안전 현장점검에서 과태료 지적사항 0건으로 마감했고, 같은 기준을 공장 순회점검 체크리스트에도 적용했습니다.\n\nISO 45001 문서 표준화에서도 같은 논리를 적용했습니다. 공장마다 달랐던 문서를 통합할 때, 차이를 '형식만 다른 경우(통합 대상)'와 '공정이 실제로 다른 경우(예외 관리)'로 이원화해 표준과 예외의 경계를 명확히 설정했습니다. 8개 공장 담당자들이 실시간으로 이슈를 공유하는 협업 채널을 구축해 매일 수평전개했습니다.",
        en: "At Donghee Industry I managed both chemical and noise hazard control at manufacturing plants and laboratory safety inspections. A structural problem was common to both: existing checklists verified document existence but could not detect whether procedures were actually being followed. Even after an inspection, it was unclear which items to address first.\n\nTo solve this, I classified inspection items by legal risk into two tiers. Items with no established procedure at all — where detection would constitute a legal violation — were categorized as 'not implemented' and prioritized for immediate documentation. Items with a procedure on paper but incomplete in practice were categorized as 'incomplete,' with evidence of execution secured before the next inspection. The result: zero penalty findings in the Ministry of Science and ICT's on-site laboratory safety inspection. I then extended the same classification framework to the plant patrol checklists.\n\nThe same logic applied to ISO 45001 documentation standardization. When integrating documents that varied plant to plant, I split differences into 'format-only (merge)' and 'actual process difference (manage as exception)' — establishing a clear boundary between standard and exception. I built a real-time collaboration channel for all eight plant leads and rolled out improvements daily."
      }
    },
    {
      title: { ko: "데이터 정확도와 디지털 전환", en: "Data Accuracy & Digital Improvement" },
      content: {
        ko: "이순환거버넌스에서 약 1,400개 회원사의 재활용 분담금 산출·청구·정산을 총괄했습니다. 분담금은 신고량에서 의무량을 구하고 단가를 적용하는 누적 구조여서, 한 단계 오류가 다음 단계로 전이됩니다. 오차 하나가 회원사 부담과 기관 신뢰로 직결되는 구조였습니다.\n\n이를 차단하기 위해 세 단계 검증 절차를 직접 수립했습니다. 신고 데이터 총중량으로 전체 규모를 먼저 대조한 뒤 품목군 기준치 이탈 여부와 과년도 3개년 평균을 순서대로 확인해, 세 단계를 충족한 값만 청구 자료로 확정했습니다. 연 1,000억 원 규모 정산에서 오차율 0%를 달성했고, 기후환경에너지부·한국환경공단·감사원 정기 감사에서 2년 연속 데이터 불일치 지적사항 0건을 유지했습니다.\n\n정확도는 확보했지만 출처가 다른 데이터를 매번 수작업으로 취합하는 병목은 재직 중 해소하지 못했습니다. 퇴직 후 이 한계를 보완하기 위해 AICE Basic을 취득하고, 여러 출처의 데이터를 한 화면에 통합해 비교하는 프로그램을 바이브코딩으로 직접 개발해 현재 실사용 중입니다.",
        en: "At E-Soonhwan Governance I owned the full lifecycle of recycling levy calculation, billing, and settlement for approximately 1,400 member companies. The levy follows a cumulative structure — reported volume drives the obligation amount, which is then multiplied by a unit rate — so one step's error propagates into the next. Any discrepancy had a direct impact on member company costs and institutional credibility.\n\nTo contain this, I designed a three-step verification process myself. I first reconciled total reported weight against the statutory figure, then screened for item-group threshold violations, then compared against the three-year historical average — confirming only values that cleared all three checks for billing. This achieved a 0% error rate on approximately KRW 100B in annual settlements and sustained zero data-discrepancy findings across two consecutive audits by the Ministry, K-eco, and the Board of Audit.\n\nAccuracy was secured, but the bottleneck of manually consolidating data from different sources remained unresolved during my tenure. After leaving, I earned AICE Basic to address this limit, then built a program via AI-assisted coding that pulls data from multiple sources into a single comparison view — now in daily use."
      }
    },
    {
      title: { ko: "현장이 움직이는 소통 설계", en: "Communication Designed to Drive Action" },
      content: {
        ko: "한국환경공단 주관 환경성보장제도 설명회에 공제조합 대표 연사로 단독 참여했습니다. 법령 조문 순서대로 전달하면 청중이 제도를 자사 업무와 연결하지 못했습니다. 회당 최대 400명이 참석하는 자리에서 설명이 실무로 이어지지 않으면 가입 행동으로 연결되지 않는다는 문제였습니다.\n\n설명 순서를 법 조문에서 기업이 실제로 거치는 업무 흐름, 즉 가입→분담금 산정→정산 순으로 재배열했습니다. 회차마다 반복되는 질문 패턴을 기록해 다음 회차에서 해당 항목을 앞으로 당겨 선제적으로 설명했고, 법령 개정이 생기면 다음 회차에 즉시 반영했습니다. 10회 누적 결과 신규 가입 310건을 달성했습니다.\n\n청중이 '이해'에서 '행동'으로 이어지도록 정보 순서를 설계하는 방식은 교육과 이해관계자 소통 전반에서 제가 일관되게 적용하는 원칙입니다. 법적 의무 항목을 조문 순서대로 나열하는 대신, 청중의 실제 업무 흐름에 맞춰 내용을 배열해 교육이 현장 행동 변화로 이어지는 구조를 설계합니다.",
        en: "I served as the sole representative speaker for the mutual-aid cooperative at K-eco-hosted briefings on the Extended Producer Responsibility program. Presenting in the order of statutory articles left the audience unable to connect the program to their own operations. With up to 400 participants per session, if the explanation did not translate to practice, it would not translate to enrollment.\n\nI restructured the content to follow the workflow companies actually go through: enrollment, levy calculation, then settlement. Each session I logged recurring question patterns and moved those topics to the opening of the next session as pre-emptive answers; any regulatory amendment was reflected immediately. Ten sessions in, this approach drove 310 new enrollments.\n\nOrdering information so that 'understanding' becomes 'action' is a principle I carry into every training and stakeholder communication context. Rather than listing statutory obligations in the order of legal articles, I sequence content around the audience's actual workflow, designing the structure so that training leads to behavior change on the ground."
      }
    }
  ]
};
