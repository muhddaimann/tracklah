dt/
├─ app/
│  ├─ (tabs)/
│  │  ├─ a/
│  │  │  ├─ _layout.tsx
│  │  ├─ b/
│  │  │  ├─ _layout.tsx
│  │  └─ _layout.tsx
│  ├─ _layout.tsx
│  └─ index.tsx
├─ assets/
│  └─ images/
├─ components/
│  ├─ atom/
│  │  ├─ button.tsx
│  │  ├─ icon.tsx
│  │  ├─ text.tsx
│  │  ├─ avatar.tsx
│  │  ├─ badge.tsx
│  │  ├─ chip.tsx
│  │  ├─ input.tsx
│  │  ├─ divider.tsx
│  │  ├─ spinner.tsx
│  │  ├─ checkbox.tsx
│  │  └─ index.tsx
│  └─ molecule/
│     ├─ card.tsx
│     ├─ listItem.tsx
│     ├─ modal.tsx
│     ├─ alertDialog.tsx
│     ├─ toast.tsx
│     ├─ formField.tsx
│     ├─ searchBar.tsx
│     ├─ toolbar.tsx
│     ├─ tabBar.tsx
│     ├─ bottomSheet.tsx
│     ├─ progressSection.tsx
│     └─ index.ts
├─ contexts/
│  └─ overlayContext.tsx
├─ hooks/
│  └─ useOverlay.tsx
├─ lib/
│  ├─ theme.ts
│  ├─ token.ts
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