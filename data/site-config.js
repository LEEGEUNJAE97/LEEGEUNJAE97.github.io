// ============================================================
// site-config.js — 이름·헤드라인·연락처·테마 등 표현 설정
// ============================================================
window.SITE_CONFIG = {
  // ▼ 홈페이지 편집 모드에서 자유롭게 수정하는 영역
  name: { ko: "이근재", en: "GEUNJAE LEE" },
  headline: {
    ko: "규제의 내외부 경험으로 리스크를 선제적으로 관리하여,\n지속 가능한 성장을 기획하겠습니다.",
    en: "Building complete ESG systems — diagnosing from outside, executing from within."
  },
  subtitle: { ko: "ESG · 산업안전보건 · 환경기사", en: "Seeking ESG · OHS · Environmental Engineer roles" },
  // ▼ 연락처 — linkedin/github은 값이 비어 있으면 화면에 표시되지 않습니다.
  //    링크드인 프로필을 만든 뒤 아래 linkedin에 전체 URL("https://www.linkedin.com/in/아이디")만 넣으면 자동으로 노출됩니다.
  contact: {
    email: "as7688@naver.com",
    phone: "010-5586-1474",
    linkedin: "",   // 예: "https://www.linkedin.com/in/geunjae-lee" (생성 후 입력)
    github: ""      // 예: "https://github.com/사용자명" (있으면 입력)
  },
  // 프로필 사진 경로 — 예: "assets/profile.jpg" (비워두면 사진 없음)
  photo: "assets/photo_nobg.png",
  theme: { accent: "#1B4332" }
};
