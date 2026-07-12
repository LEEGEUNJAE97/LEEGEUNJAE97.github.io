// ============================================================
// resume.js — 경력·학력·자격증·역량·자기소개 등 이력 데이터
// ============================================================
window.RESUME_DATA = {
  // ──────────────────────────────────────────────────────────
  // 일하는 방식 — '일하는 방식' 섹션 카드만 여기서 수정하세요.
  // tag: 초록색 핵심 역량 레이블  /  desc: 한 줄 설명
  // ──────────────────────────────────────────────────────────
  workStyle: [
    {
      tag:  { ko: "데이터 무결성", en: "Data Integrity" },
      desc: { ko: "데이터 검증 절차 설계로 정합성을 확보하여, 외부 감사 지적 0건을 달성했습니다.", en: "Self-designed three-step verification: 0% error on KRW 100B/yr settlements, zero audit findings." }
    },
    {
      tag:  { ko: "표준화 · 협업", en: "Standardization" },
      desc: { ko: "차이를 형식·공정으로 이원화해 전국 8개 거점 표준화 기준을 세웠습니다.", en: "Split differences into format vs. process — embedded standards across 8 sites without field resistance." }
    },
    {
      tag:  { ko: "이해관계자 소통", en: "Communication" },
      desc: { ko: "한국환경공단, 감사원 등 대관 업무를 수행하고, 국가기관 제도 설명회 단독 연사 10회 참석으로 신규 가입 310건을 달성했습니다.", en: "Reordered by workflow, not statute — 10 solo briefings, 310 new enrollments in 3 months." }
    },
    {
      tag:  { ko: "내·외부 시각", en: "Dual Perspective" },
      desc: { ko: "법정 보건관리자와 외부 EHS 진단자를 모두 경험해 내부 사각지대를 선제적으로 관리합니다.", en: "Statutory H&S Manager inside, external EHS auditor outside — blind spots caught before they surface." }
    },
    {
      tag:  { ko: "리스크 차단 체계", en: "Risk Prevention" },
      desc: { ko: "점검 항목을 법적 리스크 수준으로 분류해 외부 지적 전에 선제 차단합니다.", en: "Classify inspection items by legal risk level and block findings before any external review." }
    }
  ],

  about: {
    ko: "보건관리자와 EHS 외부 점검자 및 ESG 성과 지원으로, 내부 실행과 외부 규제 진단 양 방면의 경험을 쌓은 EHS·ESG 실무자입니다. 동희산업에서 전국 8개 제조 공장·연구소의 유해인자 관리·ISO 45001 문서 표준화를 본사에서 통합 관리했고,\n이순환거버넌스에서는 1,400여 개 회원사의 ESG 활동 지원과 연 1,000억 원 규모의 분담금 데이터 정산을 통해 외부 감사 지적 0건을 유지했을 뿐만 아니라,\n55개 재활용 사업회원사의 EHS 현장 점검 및 컨설팅까지 아우르며 수행했습니다. 리스크를 구조적으로 차단하는 체계를 직접 설계하겠습니다.",
    en: "An EHS/ESG professional who has operated as both an internal statutory Health & Safety Manager and an external EHS auditor — combining on-the-ground execution with regulatory diagnostic expertise. At Donghee Industry, I unified hazardous factor management and ISO 45001 documentation across 8 national manufacturing sites under a single headquarters-led framework; at E-Soonhwan Governance, I supported ESG compliance for ~1,400 member companies and managed KRW 100B in annual levy settlements with a 0% error rate and zero external audit findings. I also conducted on-site EHS inspections and provided tailored improvement consulting across 55 recycling member sites. My approach is to design structures that intercept risk before it materializes."
  },
  experience: [
    {
      company: { ko: "이순환거버넌스", en: "E-Soonhwan Governance" },
      note: { ko: "환경부 산하 비영리 공익법인 · 환경성보장제도 운영 공제조합", en: "Non-profit public corporation under MoE · mutual-aid cooperative operating Korea's EPR system" },
      title: { ko: "공제센터 관리팀 선임 (ESG · 환경)", en: "Senior, Mutual-Aid Center Management Team (ESG · Environmental)" },
      period: "2023.09 – 2026.03 · 2년 7개월",
      preview: [
        { ko: "회원사 ESG 성과 제공 및 규제 대응 지원", en: "ESG performance support & regulatory response for member companies" },
        { ko: "재직 기간 내 외부 감사 데이터 불일치 지적 0건 (2년 7개월 연속)", en: "Zero audit data-discrepancy findings for 31 months" },
        { ko: "재활용 사업장 EHS 점검 및 컴플라이언스 지원", en: "EHS inspection & compliance support for recycling sites" }
      ],
      groups: [
        {
          label: { ko: "1. ESG 데이터 관리 및 분담금 운영", en: "1. ESG Data Management & Levy Operations" },
          duties: [
            { ko: "약 1,400개 회원사 출고·매입량 데이터 취합·분석 및 법적 신고 사항 관리", en: "Compiled and analyzed shipment/purchase data for ~1,400 member companies; managed statutory reporting" },
            { ko: "연 1,000억 원 규모 재활용 분담금 산출·청구·정산 총괄", en: "Owned the full KRW 100B/yr recycling levy calculation, billing, and settlement lifecycle" },
            { ko: "3단계 데이터 교차검증 프로세스 자체 설계", en: "Self-designed a three-step data cross-verification process" },
            { ko: "기후에너지환경부·한국환경공단·감사원 정기 감사 대응", en: "Handled audits by the Ministry of Climate & Environment, K-eco, and the Board of Audit" }
          ],
          results: [
            { ko: "정산 오차율 0% 달성", en: "0% settlement error rate" },
            { ko: "재직 기간 내 외부 감사 데이터 불일치 지적 0건 (2년 7개월 연속)", en: "Zero audit data-discrepancy findings for the full tenure (31 consecutive months)" }
          ]
        },
        {
          label: { ko: "2. 환경 규제 대응 및 이해관계자 소통", en: "2. Environmental Regulation & Stakeholder Communication" },
          duties: [
            { ko: "환경성보장제도 의무 대상 품목 확대 이슈 분석 및 회원사 약 1,400개사 대응 가이드라인 수립·배포", en: "Analyzed EPR mandatory-item expansion and issued response guidelines to ~1,400 member companies" },
            { ko: "한국환경공단 주관 전국 설명회 공제조합 단독 연사 — 기업 담당자 대상 실무 교육 진행", en: "Sole cooperative speaker at K-eco-hosted nationwide briefings — practical training for corporate practitioners" },
            { ko: "기업 건의사항 수집·정리 후 한국환경공단 전달 및 법 개정 반영", en: "Collected company feedback, relayed to K-eco, and reflected legislative amendments" },
            { ko: "국회·기후에너지환경부·한국환경공단 대외업무 및 환경 정책·법규 동향 모니터링", en: "Monitored environmental policy and regulatory trends across the National Assembly, Ministry, and K-eco" }
          ],
          results: [
            { ko: "설명회 단독 연사 10회 (회당 약 1,000명) · 반복 문의 건수 가시적 감소", en: "Sole speaker at 10 briefings (~1,000 attendees per session) · measurable reduction in repeat inquiries" },
            { ko: "회원사 약 1,400개사 대상 가이드라인 배포 및 교육 실시", en: "Guidelines distributed and training delivered to ~1,400 member companies" }
          ]
        },
        {
          label: { ko: "3. 공급망 EHS 진단 및 안전보건 컨설팅", en: "3. Supply Chain EHS Diagnostics & Safety Consulting" },
          duties: [
            { ko: "재활용 사업 회원사 55개사 EHS 컴플라이언스 진단 및 맞춤형 개선 대책 제시", en: "EHS compliance diagnostics for 55 recycling member sites with tailored improvement plans" },
            { ko: "기후에너지환경부 요청 재활용 사업장 현장 안전점검 수행", en: "Conducted Ministry-requested on-site safety inspections at recycling facilities" },
            { ko: "SELF EHS 점검 시스템 운영 및 안전보건 우수 사업장 포상 제도 운영", en: "Operated the SELF EHS inspection system and best-site recognition program" }
          ],
          results: [
            { ko: "회원사 55개 사업장 EHS 컴플라이언스 진단 완료", en: "EHS compliance diagnostics completed for all 55 member sites" },
            { ko: "재활용 사업장 현장 안전점검 및 결과 보고 완료 (기후에너지환경부)", en: "On-site safety inspections completed and results reported to the Ministry of Climate & Environment" }
          ]
        }
      ]
    },
    {
      company: { ko: "동희산업 수원지점", en: "Donghee Industry, Suwon" },
      note: { ko: "현대자동차 1차 협력사 · 차체·부품 제조 · 연매출 2.3조 · 직원 약 4,000명", en: "Tier-1 Hyundai Motor supplier · body & parts manufacturing · KRW 2.3T revenue · ~4,000 employees" },
      title: { ko: "노사협력팀 매니저 (법정 보건관리자)", en: "Manager, Labor-Management Team (Statutory Health & Safety Manager)" },
      period: "2023.02 – 2023.08 · 7개월",
      groups: [
        {
          label: { ko: "1. 전사 환경·안전보건경영시스템 구축", en: "1. Enterprise EHS Management System Build" },
          duties: [
            { ko: "ISO 14001·45001 기반 전사 환경·안전보건경영시스템 통합 구축", en: "Built integrated ISO 14001/45001 EHS management system" },
            { ko: "공장별 문서 표준화 — 양식 차이는 통합, 공정 차이는 예외 항목 분류", en: "Standardized plant documentation — merged format differences, classified genuine process differences as exceptions" },
            { ko: "본사 Control Tower 역할 — 공장별 소통 채널 운영 및 개선 사례 수평전개 체계 정립", en: "Served as HQ control tower — per-plant communication channels and horizontal best-practice rollout" },
            { ko: "중대재해처벌법 대응 — 법적 의무 이행 점검, 경영진 보고 체계 수립 및 리스크 분석", en: "SAPA compliance — statutory duty checks, executive reporting framework, and risk analysis" }
          ],
          results: [
            { ko: "전국 8개 공장 ISO 45001 문서 표준화 기준 설계 및 수평전개 채널 구축", en: "ISO 45001 documentation standards designed and horizontal rollout channel established across 8 plants nationwide" }
          ]
        },
        {
          label: { ko: "2. 법적 보건관리자 핵심 업무 및 화학물질 관리", en: "2. Statutory H&S Manager Core Duties & Chemical Management" },
          duties: [
            { ko: "취급 화학물질(MSDS) 전수 조사·경고표지·교육 자료 현행화 — 화관법 대응 기초 확립", en: "Full MSDS audit and updated warning labels/training materials — Chemicals Control Act baseline established" },
            { ko: "관리감독자·신규입사자·현장 근로자 대상 법정 의무교육 및 특별 안전교육 기획·실시", en: "Planned and delivered statutory mandatory training and special safety training for supervisors, new hires, and workers" },
            { ko: "작업환경측정 및 임직원 특수·일반 건강검진 총괄, 유해인자 노출 저감 조치 실행", en: "Oversaw work-environment monitoring and special/general health checkups with hazard exposure-reduction measures" },
            { ko: "연구실 안전점검 항목 미실시·미흡 이원화 기준 수립·적용", en: "Established 'not-implemented vs incomplete' two-tier classification for lab safety inspection items" },
            { ko: "산업안전보건위원회 분기별 정기 개최 주도 및 노사 안전 심의·의결 운영", en: "Led quarterly OSH committee meetings and managed labor-management safety deliberation and resolution" }
          ],
          results: [
            { ko: "과기정통부 주관 연구실 안전 현장점검 과태료 지적사항 0건", en: "Zero penalty findings in the Ministry of Science & ICT on-site lab safety inspection" }
          ]
        },
        {
          label: { ko: "3. 환경 인허가 및 전사 안전·환경 데이터 관리", en: "3. Environmental Permitting & EHS Data Management" },
          duties: [
            { ko: "전국 사업장 환경·안전 데이터, 인증, 법적 신고 현황 취합·관리 (본사 총괄)", en: "HQ-level integration of environmental/safety data, certifications, and statutory filing status for all nationwide sites" },
            { ko: "현장 운영 실태와 신고 서류 대조를 통해 인허가 누락 항목 점검", en: "Cross-checked actual site operations against filed documents to identify permit gaps" }
          ],
          results: [
            { ko: "수원 연구소 대기배출시설 변경신고 누락 발견·정정 — 인허가 리스크 사전 차단", en: "Identified and corrected unreported air-emissions facility change at Suwon Research Lab — permit risk pre-empted" }
          ]
        },
        {
          label: { ko: "4. 복리후생 기획", en: "4. Employee Benefits Planning" },
          duties: [
            { ko: "전사 복지몰 신규 도입 기획 및 운영 업체 계약 체결", en: "Planned introduction of new company welfare portal and contracted operating vendor" },
            { ko: "하계휴양소 카라반 추가 도입 및 전 직원 공개추첨 배정 체계 수립", en: "Added caravan units at summer resort and established company-wide open lottery allocation system" }
          ],
          results: [
            { ko: "복지몰 운영 업체 계약 체결, 퇴직 이후에도 임직원 대상 정상 운영 중", en: "Welfare portal vendor contracted; portal continues to operate normally for employees after departure" }
          ]
        }
      ]
    }
  ],
  partTime: [
    {
      company: { ko: "안산문화재단 · 안산문화예술의전당", en: "Ansan Cultural Foundation · Ansan Arts Center" },
      title: { ko: "하우스어셔 (아르바이트)", en: "House Usher (Part-time)" },
      period: "2021.03 – 2023.02 · 2년",
      highlights: [
        { ko: "티켓 수표 및 객석 안내, 물품보관소 운영 등 관람객 서비스 담당", en: "Ticket checking, seat guidance, cloakroom operation — front-of-house guest service" },
        { ko: "공연 전·중·후 상영관 상태 점검 및 관람객 질서 유지", en: "Pre/during/post-show hall inspection and crowd management" },
        { ko: "비상 상황 시 대피 안내 등 공연장 안전 관리 수행", en: "Evacuation guidance and venue safety management during emergencies" }
      ]
    },
    {
      company: { ko: "롯데시네마 센트럴락관", en: "Lotte Cinema Central Rock" },
      title: { ko: "드리미 (멀티 포지션 아르바이트)", en: "Crew Member — Multi-position (Part-time)" },
      period: "2018.11 – 2020.03 · 1년 5개월",
      highlights: [
        { ko: "박스오피스(매표)·스위트샵(매점)·웰컴(검표·상영관 안내) 등 멀티 포지션 근무", en: "Rotated across box office, concession, and ticket/auditorium guidance" },
        { ko: "고객 응대 및 불만 처리, 원활한 관람 환경 조성", en: "Customer service and complaint handling to maintain a smooth viewing environment" },
        { ko: "상영관 청결 유지 및 시설 점검 등 매장 운영 관리", en: "Auditorium cleanliness and facility checks for daily store operations" }
      ]
    }
  ],
  education: [
    { school: { ko: "명지대학교 (자연계열)", en: "Myongji University" }, degree: { ko: "환경에너지공학과 학사 (졸업, 학점 3.33/4.5)", en: "B.S. in Environmental & Energy Engineering (GPA 3.33/4.5)" }, period: "2016.03 – 2022.02" },
    { school: { ko: "성안고등학교", en: "Sungan High School" }, degree: { ko: "이과계열 졸업", en: "Science Track, Graduated" }, period: "2013.03 – 2016.02" }
  ],
  // 자격증: 직무 관련성 순으로 그룹화. items 각각 ko/en/date/desc.
  certifications: [
    {
      title: { ko: "어학", en: "Language" },
      items: [
        { ko: "OPIc IH · 영어", en: "OPIc IH · English", date: "2026.04",
          desc: { ko: "영문 ESG 검토·글로벌 소통", en: "English ESG review & global communication" } }
      ]
    },
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
          desc: { ko: "데이터 정리·분석 및 OA 실무 활용", en: "Data organization/analysis & OA proficiency" } },
        { ko: "워드프로세서 3급", en: "Word Processor Lv.3", date: "2008.03",
          desc: { ko: "공문서·보고서 서식 작성", en: "Official documents & report formatting" } }
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
    { ko: "ESG 데이터 관리", en: "ESG data verification & levy settlement",
      desc: { ko: "1,400개 회원사 데이터 취합 및 연 1,000억 원 분담금 산출·청구·정산", en: "Compile data for 1,400 members and run KRW 100B/yr levy lifecycle" } },
    { ko: "데이터 정합성 확보", en: "Three-step cross-verification design",
      desc: { ko: "자체 설계 검증으로 오차율 0%, 외부 감사 지적 0건 (2년 7개월)", en: "Self-designed checks: 0% error, zero audit findings for 31 months" } },
    { ko: "대관·이해관계자 소통", en: "Government & stakeholder communication",
      desc: { ko: "전국 설명회 단독 연사 10회 (회당 최대 400명) — 신규 가입 310건", en: "Sole speaker at 10 briefings (up to 400/session) — drove 310 enrollments" } },
    { ko: "EHS 점검·진단", en: "EHS inspection & diagnosis",
      desc: { ko: "회원사 55개 사업장 컴플라이언스 진단 및 맞춤형 개선안 제시", en: "Compliance diagnostics & tailored remediation for 55 member sites" } },
    { ko: "중대재해처벌법·화관법 대응", en: "Serious Accidents & Chemicals Control Act compliance",
      desc: { ko: "법적 의무 이행 점검, 리스크 분석, 경영진 보고 체계 수립", en: "Statutory duty checks, risk analysis, executive reporting framework" } },
    { ko: "법정 보건관리자 업무", en: "Statutory Health & Safety Manager duties",
      desc: { ko: "유해인자·화학물질 관리, 작업환경측정, 건강검진 총괄", en: "Hazard/chemical control, work-environment monitoring, health checkup oversight" } },
    { ko: "ISO 14001·45001 표준화·운영", en: "ISO 14001 / 45001 standardization",
      desc: { ko: "전국 8개 공장 환경·안전보건경영시스템 통합 구축", en: "Integrated EHS management system across 8 plants nationwide" } },
    { ko: "AI·바이브코딩 업무 자동화", en: "AI / vibe-coding workflow automation",
      desc: { ko: "AICE Basic 취득 후 다중 출처 데이터 통합 프로그램 직접 개발·실사용", en: "Built and uses a multi-source data consolidation tool via AI-assisted coding" } },
  ],
  tools: [
    { ko: "OA(Excel · PPT · Word · 한글)", en: "Excel · pivot · data",
      desc: { ko: "데이터 가공 및 문서 작성 도구", en: "Data processing and document creation" } },
    { ko: "목표관리시스템(회원사 관리 시스템)", en: "-",
      desc: { ko: "회원사 정보 관리 및 ESG 데이터 산출 시스템", en: "Member information management & ESG data calculation system" } },
    { ko: "국가법령정보센터", en: "Korean statutes portal",
      desc: { ko: "환경·안전 규정 조회 및 개정 이력 추적", en: "Environmental & safety regulation lookup and amendment tracking" } },
    { ko: "MSDS · 화학물질정보처리시스템", en: "MSDS · Chemicals Information System",
      desc: { ko: "화관법 대응 화학물질 전수 조사·교육 자료 현행화", en: "Chemicals Control Act audit & label/training updates" } },
    { ko: "AI 프롬프트 (Claude·Gemini)", en: "AI prompting (Claude · Gemini)",
      desc: { ko: "보고서 작성·데이터 분석·반복 업무 자동화에 상시 활용", en: "Daily use for report drafting, data analysis & workflow automation" } },
    { ko: "HTML·CSS·JS (바이브코딩)", en: "HTML · CSS · JS (vibe-coded)",
      desc: { ko: "AI 바이브코딩으로 실무 도구 직접 개발·운용 중", en: "Self-built practical tools via AI-assisted coding, currently in use" } }
  ],
  projects: [
    {
      type: { ko: "프로세스 재설계·리스크 분류", en: "Process Redesign · Risk Classification" },
      company: { ko: "동희산업", en: "Donghee Industry" },
      title: { ko: "안전 점검 체크리스트 이원화 개편", en: "Two-Tier Safety Checklist Redesign" },
      period: "2023.02 – 2023.08",
      highlights: [
        { ko: "과기정통부 주관 연구실 안전 현장점검에서 과태료 지적사항 0건 달성", en: "Zero penalty findings in the MSIT on-site lab safety inspection" },
        { ko: "기존 체크리스트가 서류 유무만 확인하고 절차의 실제 운영 여부는 식별하지 못한다는 구조적 문제를 진단", en: "Diagnosed the structural flaw: checklists verified document existence but not whether procedures actually ran" },
        { ko: "점검 항목을 '미실시(절차 미수립 → 즉시 문서화 최우선)'와 '미흡(절차는 있으나 운영 불완전 → 이행 근거 확보)'으로 이원화해 우선순위 구조화", en: "Two-tier classification — 'not implemented' (establish immediately) and 'incomplete' (secure execution evidence)" },
        { ko: "같은 분류 기준을 공장 유해인자 순회점검 체크리스트에 확대 적용해 대응 우선순위 정비", en: "Extended the same framework to plant hazard patrol checklists, restructuring response priorities" }
      ]
    },
    {
      type: { ko: "표준화·다거점 협업", en: "Standardization & Multi-site Collaboration" },
      company: { ko: "동희산업", en: "Donghee Industry" },
      title: { ko: "전국 8개 거점 문서 표준화 주도", en: "Multi-site Documentation Standardization Across 8 Locations" },
      period: "2023.02 – 2023.08",
      highlights: [
        { ko: "취급 화학물질(MSDS) 전수 조사·경고표지 현행화로 화관법 대응 기초 확립", en: "Full MSDS audit and label updates established the Chemicals Control Act foundation" },
        { ko: "차이를 '형식만 다른 경우(통합 대상)'와 '공정이 실제로 다른 경우(예외 관리)'로 이원화해 표준과 예외의 경계를 명확화", en: "Split differences into 'format-only (merge)' and 'process-actual (manage as exception)' for a clear boundary" },
        { ko: "8개 공장 담당자가 매일 이슈를 공유하는 전사 메신저 채널을 개설해 개선 사례 수평전개 구조 정착", en: "Built a real-time messenger channel for all 8 plant leads — daily horizontal rollout of improvements" },
        { ko: "중대재해처벌법 시행 초기 본사 Control Tower로서 현장과 경영진을 연결하고 리스크 분석 체계 수립", en: "Served as HQ control tower during early SAPA rollout, bridging sites and leadership and building the risk-analysis framework" }
      ]
    },
    {
      type: { ko: "정산 데이터 검증", en: "Settlement Data Verification" },
      company: { ko: "이순환거버넌스", en: "E-Soonhwan Governance" },
      title: { ko: "재활용 분담금 3단계 교차검증 체계 설계", en: "Three-Step Cross-Verification System for Levy Settlement" },
      period: "2023.09 – 2026.03",
      highlights: [
        { ko: "연 1,000억 원 규모 정산에서 오차율 0%, 외부 감사 데이터 불일치 지적 0건 (2년 7개월 연속) 달성", en: "0% error on ~KRW 100B/yr settlements; zero audit data-discrepancy findings for 31 straight months" },
        { ko: "신고량→의무량→단가 적용의 누적 구조에서 한 단계 오류가 다음 단계로 전이되는 구조적 리스크를 파악", en: "Identified that errors propagate through the cumulative reported-volume → obligation → unit-rate calculation" },
        { ko: "신고 총중량 대조 → 품목군 기준치 이탈 → 과년도 3개년 평균 대조의 3단계 검증을 수립", en: "Established three sequential checks: total-weight reconciliation, item-group threshold screening, 3-year historical average" }
      ]
    },
    {
      type: { ko: "이해관계자 커뮤니케이션", en: "Stakeholder Communication" },
      company: { ko: "이순환거버넌스 · 한국환경공단 주관", en: "E-Soonhwan Governance · hosted by K-eco" },
      title: { ko: "환경성보장제도 설명회 단독 연사", en: "Solo Speaker, EPR Briefing Series" },
      period: "2023.09 – 2026.03",
      highlights: [
        { ko: "회당 최대 400명 대상 10회 수행 — 3개월 만에 설립 10년간 누적 회원사의 약 22%에 해당하는 신규 가입 310건 달성", en: "10 sessions to up to 400 attendees each — 310 new enrollments in 3 months (~22% of 10 years' cumulative members)" },
        { ko: "법 조문 순서 대신 기업이 실제로 거치는 업무 흐름(가입→분담금 산정→정산) 순서로 설명을 재배열", en: "Reordered the briefing to follow the workflow companies actually take — enrollment, levy calculation, settlement" },
        { ko: "회차마다 반복되는 질문 패턴을 기록해 다음 회차 앞쪽에 선제 배치, 법령 개정 시 즉시 반영", en: "Logged recurring questions each session, moved them to the opening of the next, reflected amendments immediately" }
      ]
    },
    {
      type: { ko: "AI 활용·자동화", en: "AI & Automation" },
      company: { ko: "개인 프로젝트", en: "Personal Project" },
      title: { ko: "AI 바이브코딩 도구 3종 자체 개발", en: "Three Self-Built Tools via AI-Assisted Coding" },
      period: "2025 – 현재",
      highlights: [
        { ko: "코딩 비전공 상태에서 AICE Basic으로 AI 기본기를 다지고 업무에서 직접 필요한 도구를 제작하는 방식으로 접근", en: "As a non-CS background, grounded with AICE Basic before building the tools I actually needed at work" },
        { ko: "수작업 취합 병목 해소를 위해 여러 출처 데이터를 한 화면에 통합·비교하는 프로그램 개발 및 실사용", en: "Built a multi-source data consolidation/comparison tool that resolves the manual aggregation bottleneck — in daily use" },
        { ko: "운동 기록을 자동으로 추천하는 일지 앱 개발 — 자동화 접근을 개인 영역에 동일하게 적용", en: "Developed a workout-log app with auto-recommendation — same automation approach applied personally" },
        { ko: "주식·크립토 투자 정보 앱 개발 (SwiftUI + FastAPI) — 기술·기본 분석 및 RSI·MACD 알림", en: "Built an investment app (SwiftUI + FastAPI) — technical/fundamental analysis and RSI·MACD alerts" }
      ]
    }
  ],
  activities: [
    {
      kind: { ko: "교육", en: "Training" },
      org: { ko: "한국표준협회", en: "Korean Standards Association" },
      title: { ko: "ESG 이해와 현장 개선 실무 교육 이수", en: "ESG Understanding & On-site Improvement Practical Training" },
      period: "2025.05",
      highlights: [
        { ko: "생산 현장의 ESG 관리 포인트 및 최근 이슈 학습", en: "Learned ESG management points and recent issues on production floors" },
        { ko: "현장 로스 진단·개선 과제 도출 방법론 습득", en: "Acquired methodology for diagnosing losses and deriving improvement tasks" },
        { ko: "안전 제로화, 에너지 설비 개선, 환경 오염 배출량 저감 방안 학습", en: "Studied zero-incident safety, energy facility improvement, emissions reduction" }
      ]
    },
    {
      kind: { ko: "교육", en: "Training" },
      org: { ko: "한국표준협회", en: "Korean Standards Association" },
      title: { ko: "ESG 평가 전문가 교육 수료", en: "ESG Assessment Expert Training" },
      period: "2024.04",
      highlights: [
        { ko: "ESG 주요 이니셔티브 및 공급망 평가 지표 이해", en: "Understanding of major ESG initiatives and supply-chain assessment metrics" },
        { ko: "공급망 기업 대상 3자 평가 준비사항 및 수행 기법 습득", en: "Third-party assessment preparation and execution methods for supply-chain firms" },
        { ko: "E·S·G 각 지표별 평가 항목의 효과적 실행 여부 평가 역량 제고", en: "Strengthened ability to assess effective execution across E/S/G indicators" }
      ]
    },
    {
      kind: { ko: "교육", en: "Training" },
      org: { ko: "한국표준협회", en: "Korean Standards Association" },
      title: { ko: "보건관리자 신규교육 이수", en: "New Health & Safety Manager Training" },
      period: "2023.08",
      highlights: [
        { ko: "법적 보건관리자 신규 선임에 따른 교육 이수", en: "Required onboarding training for newly appointed statutory H&S Manager" },
        { ko: "보건관리자로서의 법적 업무 수행 방법 학습", en: "Learned statutory duties and execution procedures for H&S Managers" },
        { ko: "중대재해처벌법·산업안전보건법 기반 현장관리 및 문서관리 실무", en: "Field & document management under SAPA and the OSH Act" }
      ]
    },
    {
      kind: { ko: "교육", en: "Training" },
      org: { ko: "한국환경산업기술원", en: "Korea Environmental Industry & Technology Institute" },
      title: { ko: "재활용환경성평가 전문인력 양성과정 수료", en: "Recycling Environmental Assessment Specialist Training" },
      period: "2022.04 – 2022.05",
      highlights: [
        { ko: "「자원순환기본법」 등 폐기물 재활용 관련 법규 및 재활용환경성평가 제도 이해", en: "Understanding of the Framework Act on Resource Circulation and recycling environmental assessment system" },
        { ko: "재활용 대상 물질의 유해성 파악 및 환경 노출 경로 분석 등 환경 위해성 평가 방법론 습득", en: "Methodology for hazard identification, exposure-pathway analysis, environmental risk assessment" },
        { ko: "환경성평가서 작성 실습 및 사례 분석을 통한 현장 실무 역량 배양", en: "Hands-on practice writing assessment reports and case analysis" }
      ]
    },
    {
      kind: { ko: "봉사활동", en: "Volunteering" },
      org: { ko: "한국로하스협회 · 행정안전부", en: "Korea LOHAS Association · MOIS" },
      title: { ko: "2020년 일회용플라스틱다이어트챌린지 (팀장)", en: "2020 Single-Use Plastic Diet Challenge (Team Lead)" },
      period: "2020.07 – 2020.11 · 5개월",
      highlights: [
        { ko: "일회용 플라스틱 문제 등 환경 인식 제고를 목적으로 한 카드 뉴스 제작 및 배포 (팀장)", en: "Led card-news production and distribution to raise awareness on single-use plastics" },
        { ko: "일회용 플라스틱 사용 절감을 위한 아이디어 도출 및 지역사회 홍보 활동 수행", en: "Generated reduction ideas and ran community-level outreach campaigns" },
        { ko: "교육·워크숍·아이디어 토론회·팀 홍보활동·활동보고회 전 과정 이수", en: "Completed the full cycle: training, workshops, ideation, team promotion, reporting" }
      ]
    },
    {
      kind: { ko: "봉사활동", en: "Volunteering" },
      org: { ko: "환경재단", en: "Korea Green Foundation" },
      title: { ko: "제17회 서울환경영화제 자원활동가 '그린티어'", en: "17th Seoul Eco Film Festival — 'Green Tier' Volunteer" },
      period: "2020.07 · 1개월",
      highlights: [
        { ko: "아시아 최대 환경영화제 서울환경영화제의 자원활동가로 티켓/안내 파트 참여", en: "Volunteered in ticketing/guidance at Asia's largest environmental film festival" },
        { ko: "관람객 안내 및 영화제 현장 운영 보조", en: "Guided attendees and supported on-site festival operations" },
        { ko: "코로나19 대응 방역 수칙 준수 하에 발열 체크, 좌석 안내 등 현장 지원", en: "Provided fever checks and seat guidance under COVID-19 protocols" }
      ]
    }
  ],
  selfIntro: [
    {
      tag: { ko: "리스크 차단 체계", en: "Risk Prevention" },
      title: { ko: "리스크 수준 기반 기준 재설계 — 선제적 문제 차단 체계 구축", en: "Criteria Redesign by Risk Level — Building Systems That Block Problems at the Source" },
      content: {
        ko: "절차의 실제 운영 여부를 기준으로 안전 점검 항목을 재설계해, 과기정통부 주관 현장점검에서 과태료 지적사항 0건을 달성했습니다.\n\n동희산업 보건관리자로 일하며 전국 8개 제조 공장과 연구소의 안전보건 업무를 본사에서 통합 관리했습니다. 공장별 화학물질 등 유해인자 관리와 연구실 점검을 함께 담당했는데, 두 영역에 공통된 문제는 기존 체크리스트가 서류 유무만 확인할 뿐 절차의 실제 운영 여부는 식별하지 못한다는 점이었습니다.\n\n점검 항목을 법적 리스크 수준에 따라 두 종류로 분류했습니다. 법적 근거가 있음에도 절차 자체가 수립되지 않아 적발 시 법 위반에 해당하는 항목은 '미실시'로 분류해 문서화와 절차 수립을 최우선으로 처리했고, 형식은 갖췄으나 실제 운영이 불완전한 항목은 '미흡'으로 분류해 이행 근거 서류를 점검 전에 확보했습니다. 그 결과 과기정통부 주관 연구실 안전 현장점검을 과태료 지적사항 0건으로 마감했고, 같은 기준을 공장 순회 점검 체크리스트에 적용해 유해인자별 대응 우선순위도 정비했습니다.\n\n리스크 항목을 심각도 기준으로 먼저 분류하겠습니다. 절차 자체가 없어 즉시 시정이 필요한 항목은 최우선으로 처리하고, 형식은 갖췄으나 운영이 불완전한 항목은 이행 근거를 점검 전에 확보하는 방식으로 대응하겠습니다. 이 이원화 기준을 점검 체계에 내재화해 같은 문제가 반복되지 않는 구조를 만들겠습니다.",
        en: "By redesigning safety inspection items around whether procedures actually operate, I closed a Ministry of Science and ICT on-site inspection with zero penalty findings.\n\nAs Donghee Industry's Health & Safety Manager I centrally managed EHS for 8 manufacturing plants and labs nationwide. Across both chemical hazard control and lab inspections, the structural problem was the same: existing checklists verified document existence but could not detect whether procedures were actually being followed.\n\nI classified inspection items by legal risk into two tiers. Items with no procedure established at all — where detection would constitute a legal violation — were classified as 'not implemented' and prioritized for immediate documentation. Items with a procedure on paper but incomplete in practice were classified as 'incomplete', with execution evidence secured before the inspection. The MSIT lab safety inspection closed with zero penalty findings, and the same framework was extended to plant patrol checklists to restructure hazard response priorities.\n\nI will classify risk items by severity before anything else. Items with no procedure at all — requiring immediate correction — will be handled as the top priority. Items that exist formally but are incomplete in practice will be addressed by securing execution evidence before any review. By embedding this two-tier classification directly into the inspection framework, I will build a structure where the same finding does not repeat."
      }
    },
    {
      tag: { ko: "데이터 무결성", en: "Data Integrity" },
      title: { ko: "데이터 검증 체계 직접 설계 · AI 자동화 — 오차를 구조적으로 차단하는 방식", en: "Self-Designed Verification System · AI Automation — Blocking Errors at the Structure Level" },
      content: {
        ko: "이순환거버넌스에서 1,400개 회원사의 재활용 분담금 정산에 3단계 교차검증 체계를 설계해, 2년 7개월간 외부 감사 지적 0건을 유지했습니다.\n\n분담금은 신고량에서 의무량을 구하고 단가를 적용하는 누적 구조여서, 한 단계의 오류가 다음 단계로 이어졌습니다. 오차 하나가 회원사 부담과 기관 신뢰로 직결되는 구조였기에 세 단계 검증 절차를 직접 수립했습니다. 신고 데이터 총중량으로 전체 규모를 먼저 대조한 뒤, 품목군 기준치 이탈 여부와 과년도 3개년 평균을 순서대로 확인해 세 단계를 모두 충족한 값만 청구 자료로 확정했습니다. 그 결과 재직 기간 동안 연간 1,000억 원 규모의 정산 업무를 오차율 0%로 완벽히 수행했으며, 외부 감사에서 데이터 불일치 지적 사항 0건을 달성했습니다.\n\n검증 정확도는 확보했지만, 출처가 다른 데이터를 매번 수작업으로 취합하는 병목은 재직 중 해소하지 못했습니다. 이 한계를 보완하기 위해 AICE Basic 자격을 취득해 AI 활용 데이터 관리 역량을 학습했고, 바이브 코딩으로 여러 출처의 데이터를 한 화면에 모아 비교하는 프로그램을 직접 개발해 실사용하고 있습니다.\n\n여러 단계를 거치는 데이터 업무에서 오류가 다음 단계로 전파되지 않도록 단계별 검증 기준을 먼저 설계하겠습니다. 전체 총량 대조부터 항목별 기준치 이탈, 과거 평균과의 비교까지 순서대로 확인해 오류가 증폭되기 전에 드러나는 구조를 만들겠습니다. 출처가 다른 데이터의 반복 취합은 AI 도구로 자동화해 검증 판단에 집중할 여력을 확보하겠습니다.",
        en: "I designed a three-step cross-verification system for the recycling levy settlements of 1,400 member companies at E-Soonhwan Governance, sustaining zero external audit findings for 31 months.\n\nThe levy follows a cumulative structure — reported volume drives obligation, multiplied by a unit rate — so one step's error propagates into the next. Because any discrepancy directly impacts member-company cost and institutional credibility, I built three verification steps myself. I first reconciled total reported weight against the statutory figure, then screened for item-group threshold violations, then compared against the three-year historical average — confirming only values that cleared all three for billing. This delivered a 0% error rate on ~KRW 100B annual settlements and zero audit data-discrepancy findings.\n\nAccuracy was secured, but manually consolidating data from different sources remained an unresolved bottleneck during my tenure. To close that gap I earned AICE Basic to build AI-driven data management literacy, then built — via AI-assisted coding — a tool that pulls data from multiple sources into a single comparison view, now in daily use.\n\nIn multi-step data work, I will design stage-by-stage verification criteria first so that errors do not propagate to the next step. Working from total-volume reconciliation through item-level threshold checks to historical average comparisons, I will build a structure where errors surface before they amplify downstream. Recurring consolidation of data from different sources will be automated with AI tooling, freeing capacity for the verification judgements that actually matter."
      }
    },
    {
      tag: { ko: "표준화 · 협업", en: "Standardization" },
      title: { ko: "다거점 문서 표준화와 수평전개 체계 구축 — 현장 저항 없이 기준을 정착시키는 방식", en: "Multi-site Standardization & Horizontal Rollout — Making Standards Stick Without Field Resistance" },
      content: {
        ko: "공장마다 달랐던 ISO 45001 문서를 통합하기 위해 표준화 기준을 직접 설계하고, 담당자들이 같은 기준으로 작업하는 수평 전개 채널을 구축했습니다.\n\n동희산업에서 안전보건 업무를 본사에서 통합 관리하던 중, 공장마다 문서 양식이 달라 취합·검토할 때마다 기준을 재조정해야 했습니다. 각 공장 담당자는 \"우리 현장은 공정이 다르다\"라는 입장이었고, 차이를 전면 수용하면 표준화가 불가했지만 무시하면 현장이 따르지 않았습니다.\n\n이때 차이를 허용 가능한 항목과 통합 대상 항목으로 이원화했습니다. 단순 서식 차이는 공통 양식으로 통합하고, 각 공장 담당자와 세부 지침을 조율한 뒤 문서화했습니다. 반면 도장과 조립처럼 공정 자체가 다른 경우는 예외 항목으로 분류해 별도 관리했습니다. 동시에 전사 단체 메신저 채널을 개설해 매일 아침 이슈와 변경 사항을 공유하도록 했습니다. 한 공장의 개선 사례가 다른 공장의 문제를 사전에 해소하는 수평전개 구조를 정착시킴으로써, 전사 안전관리 수준이 상향 평준화되도록 설계했습니다.\n\n다양한 주체를 대상으로 기준을 수립할 때 각자의 실제 차이를 먼저 파악하겠습니다. 통합 가능한 차이는 공통 양식으로 묶고, 실질적으로 다른 항목은 예외로 인정해 각자의 현실을 반영하겠습니다. 변경 사항은 공유 채널을 통해 모든 조직에 즉시 전파해, 한 곳의 개선이 다른 곳의 문제를 사전에 해소하는 수평전개 구조를 유지하겠습니다.",
        en: "To unify the ISO 45001 documents that varied plant-to-plant, I designed standardization criteria myself and built a horizontal-rollout channel so plant leads worked from the same baseline.\n\nWhile centrally managing EHS at Donghee Industry, every consolidation required re-aligning criteria because each plant's document format was different. Plant leads insisted \"our process is different\" — accepting all differences killed standardization, but ignoring them meant the field would not comply.\n\nI split differences into two buckets. Pure format differences were merged into a common template after coordinating detailed guidance with each plant. Items where the process itself differed — like painting versus assembly — were classified as exceptions and managed separately. In parallel, I opened a company-wide messenger channel for daily sharing of issues and changes, so one plant's improvement preempted another plant's problem. The result was a horizontal rollout that leveled up safety management across the company.\n\nWhen establishing shared standards across different teams or sites, I will first identify what actually differs between each party. Differences that can be unified will be merged into a common template; items that are genuinely distinct will be classified as exceptions and respected. Changes will propagate to every part of the organisation immediately through a shared channel — maintaining a horizontal-rollout structure where one team's improvement resolves another's problem before it occurs."
      }
    },
    {
      tag: { ko: "이해관계자 소통", en: "Communication" },
      title: { ko: "복잡한 정보를 청중의 업무 흐름으로 재구성 — 단독 연사 10회, 신규 가입 310건", en: "Restructuring Complex Information Around the Audience's Workflow — 10 Solo Briefings, 310 Enrollments" },
      content: {
        ko: "국가기관 설명회에 단독 연사로 10회 참석해, 법 조문 순서가 아닌 실무자의 실제 업무 흐름에 맞춰 설명 구조를 재배열함으로써 신규 가입 310건을 이끌어냈습니다.\n\n한국환경공단 주관 환경성보장제도 설명회에 공제조합 대표 연사로 참여했습니다. 법령 조문 순서대로 전달하면 청중이 제도를 자사 업무와 연결하지 못했습니다. 회당 최대 400명이 참석하는 자리에서 설명이 실무로 이어지지 않으면 가입 행동으로 연결되지 않는다는 문제였습니다.\n\n설명 순서를 법 조문 기준에서 기업이 실제로 거치는 업무 흐름 순으로 재배열했습니다. 특히 규제 첫해에 우선 대응해야 하는 출고량 신고 등 주요 업무를 먼저 다루고, 이어 공제조합 가입 절차와 비용 순으로 구성해 실제 업무를 수행하는 순서대로 설명했습니다. 또한 회차마다 반복되는 질문 패턴을 기록해 다음 회차에서는 해당 항목을 앞쪽으로 배치해 선제적으로 설명했고, 법령 개정 사항은 다음 회차에 즉시 반영했습니다. 그 결과 3개월 만에 설립 후 10년간 누적된 회원사의 약 22%에 해당하는 신규 가입 310건을 이끌어냈습니다.\n\n제도나 기준의 나열 순서가 아닌 상대방이 실제로 일하는 순서로 설명하겠습니다. 첫 번째 설명부터 반복되는 질문을 기록해 다음 회차의 앞쪽에 배치하고, 내용이 바뀌면 즉시 반영해 청중이 자리로 돌아가 바로 적용할 수 있는 설명 구조를 만들겠습니다.",
        en: "Speaking solo at 10 government briefings, I reordered the content from statutory article sequence to the practitioner's actual workflow — driving 310 new enrollments.\n\nI represented the mutual-aid cooperative as sole speaker at K-eco's Extended Producer Responsibility briefings. Presented in article order, the audience could not connect the program to their own operations. With up to 400 attendees per session, if the explanation did not translate to practice, it would not translate to enrollment.\n\nI restructured the sequence to follow how companies actually operate. Critical first-year tasks like shipment-volume reporting came first, then cooperative enrollment steps and costs — in the order practitioners would execute. I logged recurring questions each session and moved them to the opening of the next as pre-emptive answers; any regulatory amendment was reflected immediately. Three months in, the approach delivered 310 new enrollments — roughly 22% of the cumulative member base built up over the prior decade.\n\nI will explain in the order the audience actually works — not in the sequence of a policy document or standard. From the first session I will log recurring questions and move them to the front of the next, and any content update will be reflected immediately. By the time the audience returns to their desk, the explanation should already map to the action they need to take."
      }
    },
    {
      tag: { ko: "내·외부 시각", en: "Dual Perspective" },
      title: { ko: "내부 실행과 외부 진단 양쪽의 시각 — 객관성과 실행력을 함께 갖춘 접근", en: "Inside Executor & Outside Diagnoser — Combining Objectivity with Implementation Authority" },
      content: {
        ko: "리스크 관리 업무는 외부 규제 기관의 관점으로 내부 실행을 선제적으로 관리해야 한다고 생각합니다.\n\n동희산업에서 법적 보건관리자로 법정 업무 전반을 직접 수행했습니다. 개선이 필요한 항목을 파악해도 예산과 우선순위에서 밀려 외부 점검에서 개선 지적을 받는 상황을 경험했습니다. 이후 이순환거버넌스에서 회원사 55개 사업장을 EHS 현장점검하며 외부 조력자 역할을 담당했는데, 점검 보고서를 제출해도 이후 시정이 이뤄졌는지 확인하거나 개입할 수단이 없었습니다.\n\n내부 담당자로 일할 때는 현장을 바꿀 수 있었지만, 현장 업무에 익숙해질수록 외부 규제 기준을 객관적으로 들여다보는 시각이 약해졌습니다. 반대로 외부 조력자로 전환한 뒤에는 진단의 객관성은 높아졌지만 실행 권한이 없었습니다. 두 역할을 순서대로 거치면서, 규제 기준을 단순히 적용하는 것을 넘어 내부의 법적 리스크 관리 기획과 운영에 내재화할 때 비로소 실질적인 개선을 이끌어낼 수 있음을 깨달았습니다.\n\n조직 내부에서 일할 때도 외부인의 시각을 놓치지 않겠습니다. 익숙한 환경에 오래 있을수록 외부인이 먼저 포착하는 문제가 안 보이기 시작하는데, 외부 조력자로 일한 경험이 그 사각지대를 짚어줍니다. 정기적인 자체 진단과 데이터 기반 우선순위 보고 체계를 통해 문제가 외부에서 먼저 드러나기 전에 내부에서 먼저 포착되도록 하겠습니다.",
        en: "I believe risk management requires managing internal execution proactively, through the lens of external regulators.\n\nAt Donghee Industry I executed statutory H&S duties firsthand. Even when I identified items needing improvement, budget and priority constraints sometimes meant they surfaced as external inspection findings. Later at E-Soonhwan Governance I shifted to the external advisor role across 55 member sites — but once a report was submitted, I had no way to verify or drive remediation.\n\nWorking inside gave me execution authority, but familiarity with daily operations gradually weakened the regulatory vantage point. Switching to an external role sharpened diagnostic objectivity but removed implementation authority. Having moved through both, I concluded that real improvement requires more than applying regulations — it requires internalizing the regulator's lens into in-house risk planning and operations.\n\nEven while working inside an organisation, I will not lose the outsider's perspective. The longer you are embedded in daily operations, the harder it becomes to see what someone from outside would notice first — experience as an external advisor fills that blind spot. Through regular self-audit cycles and a data-driven priority reporting structure, I will ensure problems are identified and resolved internally before they surface to the outside."
      }
    }
  ]
};
