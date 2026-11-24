# 이근재 자기소개서 웹사이트 — 인테그리스코리아 KTC Cleanroom Technician 지원판 (2026-11-24)

> 신입·다른 직무(오퍼레이터·설비형) 기준. 사실 출처는 `자기소개서 작성/00_공통/01_경력_강점_재료창고.md`.

정적 사이트. `index.html`을 브라우저로 열거나 `python3 -m http.server`로 띄운다.

## 구조
- `index.html` — 레이아웃·스타일(인라인 CSS)·히어로 문구
- `data/resume.js` — 모든 내용(`window.RESUME_DATA`). **내용 수정은 이 파일만.**
  stats · ticker · workStyle · projects · experience · certifications · education · activities · partTime · motivation · next
- `js/render.js` — 데이터를 빈 컨테이너에 렌더링, 스크롤 리빌, KPI 카운트업
- `resume-pdf.html` → `assets/Lee-Geunjae-resume.pdf` (A4 1쪽 이력서 원본)

## 디자인 — 이력서 PDF와 같은 언어
- 그린블랙 `#0D1411` + 민트 `#3DDC97`, 본문 포인트 그린 `#0B7A48`, 배경 `#F7F9F8`
- Pretendard(본문) + JetBrains Mono(섹션 라벨·날짜)
- 다크 히어로(점 그리드·민트 글로우·사진) → 티커 → KPI 3칸 → 일하는 방식 카드 → 경험(네이티브 `<details>`) → 경력 타임라인 → 자격·학력 패널 → 다크 지원동기 → 푸터
- `prefers-reduced-motion` 시 애니메이션 전부 끔, JS 실패 시에도 콘텐츠 노출

## 이력서 PDF 재생성
`resume-pdf.html`(A4 1쪽 원본)을 고친 뒤 상위 폴더(`클로드`, playwright 설치됨)에서:
```
node -e "const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage();await p.goto('file://'+process.argv[1],{waitUntil:'networkidle'});await p.pdf({path:process.argv[2],format:'A4',printBackground:true,preferCSSPageSize:true});await b.close()})()" "$PWD/자기소개서 홈페이지(반도체)/resume-pdf.html" "$PWD/자기소개서 홈페이지(반도체)/assets/Lee-Geunjae-resume.pdf"
```
