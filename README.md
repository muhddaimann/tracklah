tracklah/
├─ app/
│  ├─ sidebar/
│  │  ├─ a/
│  │  │  ├─ _layout.tsx
│  │  │  └─ index.tsx
│  │  ├─ b/
│  │  │  ├─ _layout.tsx
│  │  │  └─ index.tsx
│  │  ├─ c/
│  │  │  ├─ _layout.tsx
│  │  │  └─ index.tsx
│  │  ├─ d/
│  │  │  ├─ _layout.tsx
│  │  │  └─ index.tsx
│  │  └─ _layout.tsx
│  ├─ _layout.tsx
│  └─ index.tsx
├─ assets/
├─ components/
│  ├─ atom/
│  │  ├─ avatar.tsx
│  │  ├─ badge.tsx
│  │  ├─ button.tsx
│  │  ├─ checkbox.tsx
│  │  ├─ chip.tsx
│  │  ├─ divider.tsx
│  │  ├─ icon.tsx
│  │  ├─ index.ts
│  │  ├─ input.tsx
│  │  ├─ spinner.tsx
│  │  └─ text.tsx
│  └─ molecule/
│     ├─ alertDialog.tsx
│     ├─ card.tsx
│     ├─ formField.tsx
│     ├─ index.ts
│     ├─ listItem.tsx
│     ├─ progressSection.tsx
│     ├─ searchBar.tsx
│     ├─ sidebar.tsx
│     ├─ tabBar.tsx
│     ├─ toast.tsx
│     └─ toolbar.tsx
├─ contexts/
│  ├─ overlayContext.tsx
│  └─ sidebarContext.tsx
├─ hooks/
│  ├─ useOverlay.tsx
│  ├─ useProject.tsx
│  └─ useSidebar.tsx
├─ lib/
│  ├─ theme.ts
│  ├─ token.ts
│  ├─ types.ts
│  └─ utils.ts
├─ .gitignore
├─ .prettierrc
├─ app.json
├─ babel.config.js
├─ components.json
├─ expo-env.d.ts
├─ global.css
├─ metro.config.js
├─ nativewind-env.d.ts
├─ package-lock.json
├─ package.json
├─ README.md
├─ tailwind.config.js
└─ tsconfig.json


TrackLah/
├─ what/
│ ├─ problem: “Scattered tasks, no single source of truth for status/ownership/deadlines.”
│ ├─ vision: “Minimal, fast personal dashboard to plan, track, and review progress.”
│ └─ goals: quick capture • clear status • effortless weekly review
├─ personas/
│ ├─ me: track progress, visibility, transparency
│ └─ exec-view: KPI snapshot, simple trends
├─ features/
│ ├─ tasks: title • status(todo/doing/done) • due • tag • project
│ ├─ views: Inbox • Today • This Week • Kanban by project • Done
│ ├─ notes: quick notes per task/project
│ ├─ review: weekly summary (done, slipped, upcoming)
│ └─ share: read-only link for exec-view (optional)
├─ pages/
│ ├─ Dashboard (KPIs, quick actions)
│ ├─ Tasks (list + filters + quick add)
│ ├─ Board (kanban per project)
│ ├─ Review (weekly)
│ └─ Settings (tags, projects)
├─ kpis/
│ ├─ on-time% (last 7/30d)
│ ├─ tasks done (week)
│ └─ slips (overdue count)
├─ mvp/
│ ├─ task CRUD • tags • projects
│ ├─ list + kanban
│ └─ simple dashboard (on-time%, done, overdue)
├─ nice-later/
│ ├─ calendar view
│ ├─ recurring tasks
│ └─ public share
├─ data/
│ ├─ Project(id, name)
│ ├─ Task(id, projectId, title, status, dueAt, tags[])
│ └─ Note(id, taskId?, projectId?, body)
├─ tech/
│ ├─ FE: React + TS, Tailwind, TanStack Query
│ ├─ BE: Supabase (Postgres + auth) or SQLite (local)
│ └─ deploy: Vercel
├─ rituals/
│ ├─ daily: check Today, drag board
│ └─ weekly: Review page, archive done, plan next week


Projects/
├─ Faith Mobile (internal staffing super-app)
│ ├─ Status: Active (UI/UX polish + balance API refactor)
│ ├─ Modules: Attendance • Leave • Overtime • Claims • Room Booking • Newsflash • Profile
│ ├─ Frontend: Expo React Native (TS), React Native Paper, custom design tokens
│ ├─ Backend: PHP (JWT auth), MySQL; routes: leave/balance, claims, auth
│ ├─ Recent: Date/Duration/DateTime modals, LeaveForm loading skeletons, status-based theming, ClaimModa/
│ └─ Next: finalize balanceController parity with legacy logic • integrate useClaimStore • OCR + file size validations
├─ Leave Balance API Refactor (PHP)
│ ├─ Status: Ongoing (exact parity with legacy)
│ ├─ Files: balanceController.php • balanceRoute.php • authMiddleware (JWT)
│ ├─ Logic: carry-forward cutoff • monthly deduction • replacement leave • 13 leave types
│ └─ Next: finalize GET “all balances” • embed helpers in controller • unit tests
├─ Laive (voice assistant / interview)
│ ├─ Status: 🚧 active (Phase 2–3 largely done; polish ongoing)
│ ├─ Frontend (web, Expo RN Web): RealtimeClient (custom TS), WavRecorder/WavStreamPlayer, canvas waveform, contexts (voice/chat/log/theme)
│ ├─ Features: auto-VAD, greeting on start, tool calls (query_db→RAG), cost estimation, scoring, results/report
│ ├─ Variants: Console (debug) • Demo (card UI: Chat/Action/Icon/Document)
│ └─ Next: tool handling polish • RAG wiring • UI animations for voice states
├─ Realtime AI Assistant (react01 / test05 / Home screen rebuild)
│ ├─ Status: ✅ core setup; 🚧 integrating console → demo flow
│ ├─ Stack: Expo RN Web, TS, custom RealtimeClient, hooks (useRecorder/useStreaming/useWaveform/useClientEvents)
│ └─ Next: full logic injection into Demo cards • tidy providers & modularization
├─ Design Toolkit (atoms/molecules + app shell)
│ ├─ Status: 🚧 active (component library + layouts)
│ ├─ Atoms: Text • Button • Icon • Avatar • Badge/BadgeText • Chip/ChipText • Input • Spinner • Checkbox • Divider
│ ├─ Molecules: Card/* • ListItem • FormField • SearchBar • Toolbar • TabBar • BottomSheet • ProgressSection
│ ├─ Overlays: OverlayContext + AlertHost + ToastHost (animated) + ModalHost (animated)
│ ├─ Shell: Expo Router (tabs a/b), collapsible Sidebar (theme toggle, active state), ThemeProvider
│ └─ Next: component docs • snapshot tests • refining sidebar interactions
├─ Playplay (design system playground)
│ ├─ Status: 🧭 paused/aux (tokens & primitives scaffolded)
│ ├─ Stack: Expo RN, tokens/primitives/theme folders
│ └─ Next: migrate stable components from Design Toolkit
├─ ClaimIt (expense reimbursement w/ OCR)
│ ├─ Status: 🧭 planned → early design
│ ├─ Stack: Expo RN; OCR.space API; Google Drive API; Supabase (files/meta)
│ ├─ Hooks: useOCR • useUpload
│ └─ Next: refactor ClaimModal (4 options, validations, OCR pipeline, autofill to ClaimForm)
├─ DAISY – Agent CSAT Performance
│ ├─ Status: 🧭 planned
│ ├─ Scope: real-time scores, analytics, feedback, goals, gamification
│ └─ Next: define KPIs, dashboards, and data contracts
├─ Reserve / Status Bots (mock ops tools)
│ ├─ Status: 🚧 scaffolding
│ ├─ UI: ReservePage/ReserveList/ReserveCard; data via useBots (mock)
│ └─ Next: date selection in RoomList • MyBooking modularization
├─ Interview Suite (LaiveRecruit/Configure/Applicant/Test/InterviewPage)
│ ├─ Status: 🚧 active
│ ├─ Updates: candidate analyzer config (strengths, roleFit roleScore 1–10), scoreBreakdown, costEstimation, transcript/summary
│ └─ Next: end-to-end flow + result modal polish
├─ CMS & Withdrawal Tools (enterprise)
│ ├─ Status: 🧭 ongoing maintenance
│ ├─ Stack: PHP, MySQL, Laserfiche integration; Spring Boot services (uploads/jobs)
│ └─ Next: specific controllers & QA hardening
├─ QA & Perf Tooling
│ ├─ Status: ✅ in use
│ ├─ Tools: Selenium + PyTest + Allure (UI) • Locust (load) • Postman collections
│ └─ Next: add perf baselines for leave APIs & Realtime flows
├─ TrackLah (personal task dashboard)
│ ├─ Status: 🧭 new (PRD drafted)
│ ├─ MVP: Task CRUD • tags/projects • list+kanban • on-time%, done, overdue
│ ├─ Stack: React+TS, Tailwind, TanStack Query; BE Supabase or local SQLite
│ └─ Next: schema + seed • task row/card • dashboard KPIs
└─ Personal Apps (ideation/prototypes)
├─ Reso Journal • Glass Journal • Monee (expense)
└─ Status: 🧭 on hold (design tokens & patterns will feed these later)