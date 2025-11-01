import * as React from 'react';

export type ProjectStatus = 'active' | 'planned' | 'paused' | 'done';
export type ProjectTag =
  | 'mobile'
  | 'web'
  | 'backend'
  | 'ai'
  | 'design-system'
  | 'qa'
  | 'infra'
  | 'ops'
  | 'personal';

export interface Project {
  id: string;
  name: string;
  code?: string;
  description?: string;
  status: ProjectStatus;
  progress: number; // 0-100
  stack: string[];
  modules?: string[];
  tags: ProjectTag[];
  nextSteps: string[];
  metrics?: {
    tasksDone?: number;
    tasksTotal?: number;
    overdue?: number;
  };
  updatedAt: string; // ISO
}

export interface ProjectFilter {
  statuses?: ProjectStatus[];
  tags?: ProjectTag[];
  search?: string;
}

const now = () => new Date().toISOString();

const initialProjects: Project[] = [
  {
    id: 'faith-mobile',
    name: 'Faith Mobile',
    description:
      'Internal staffing super-app: Attendance, Leave, Overtime, Claims, Room Booking, Newsflash, Profile.',
    status: 'active',
    progress: 62,
    stack: ['Expo RN (TS)', 'NativeWind', 'RN Paper', 'PHP', 'MySQL', 'JWT'],
    modules: ['Attendance', 'Leave', 'Overtime', 'Claims', 'Room Booking', 'Newsflash', 'Profile'],
    tags: ['mobile', 'backend', 'ops'],
    nextSteps: [
      'Finalize balanceController parity with legacy logic',
      'Integrate useClaimStore in ClaimForm',
      'OCR validations + 1MB file guard',
    ],
    metrics: { tasksDone: 31, tasksTotal: 50, overdue: 2 },
    updatedAt: now(),
  },
  {
    id: 'leave-balance-api',
    name: 'Leave Balance API Refactor',
    description: 'Exact parity with legacy: carry-forward, monthly deduction, replacement leave.',
    status: 'active',
    progress: 70,
    stack: ['PHP', 'JWT', 'MySQL'],
    tags: ['backend'],
    nextSteps: ['Add GET all 13 balances', 'Embed helpers into controller', 'Unit tests'],
    metrics: { tasksDone: 14, tasksTotal: 20, overdue: 0 },
    updatedAt: now(),
  },
  {
    id: 'laive',
    name: 'Laive (Voice Assistant / Interview)',
    description:
      'Auto-VAD, RealtimeClient, tool calls (RAG), cost estimation, scoring, report screens.',
    status: 'active',
    progress: 58,
    stack: ['Expo RN Web', 'TypeScript', 'Custom RealtimeClient', 'Canvas audio'],
    tags: ['web', 'ai'],
    nextSteps: ['Polish tool handling', 'Wire RAG end-to-end', 'Voice state animations'],
    metrics: { tasksDone: 23, tasksTotal: 40, overdue: 1 },
    updatedAt: now(),
  },
  {
    id: 'realtime-assistant',
    name: 'Realtime AI Assistant (react01/test05)',
    description: 'Console → Demo logic integration, hooks modularization.',
    status: 'active',
    progress: 54,
    stack: ['Expo RN Web', 'TS', 'WavRecorder', 'WavStreamPlayer'],
    tags: ['web', 'ai'],
    nextSteps: ['Inject full console logic into Demo cards', 'Tidy providers & contexts'],
    updatedAt: now(),
  },
  {
    id: 'design-toolkit',
    name: 'Design Toolkit (Atoms/Molecules + Shell)',
    description:
      'Component library + overlays + collapsible sidebar with theme toggle; Expo Router tabs.',
    status: 'active',
    progress: 65,
    stack: ['Expo RN (TS)', 'NativeWind', 'class-variance-authority'],
    tags: ['design-system', 'web'],
    nextSteps: ['Component docs', 'Snapshot tests', 'Sidebar interactions polish'],
    updatedAt: now(),
  },
  {
    id: 'playplay',
    name: 'Playplay (Design System Playground)',
    description: 'Tokens, primitives, theme scaffolding.',
    status: 'paused',
    progress: 20,
    stack: ['Expo RN', 'Tokens/Primitives'],
    tags: ['design-system'],
    nextSteps: ['Migrate stable components from Design Toolkit'],
    updatedAt: now(),
  },
  {
    id: 'claimit',
    name: 'ClaimIt (Expense Reimbursement)',
    description: 'OCR pipeline to autofill claims; Drive/Supabase integration.',
    status: 'planned',
    progress: 10,
    stack: ['Expo RN', 'OCR.space', 'Supabase', 'Google Drive API'],
    tags: ['mobile', 'backend'],
    nextSteps: ['Refactor ClaimModal 4 options', 'Implement useOCR + useUpload'],
    updatedAt: now(),
  },
  {
    id: 'daisy-csat',
    name: 'DAISY – Agent CSAT Performance',
    description: 'Realtime scores, analytics, goals, gamification dashboards.',
    status: 'planned',
    progress: 5,
    stack: ['React', 'Charts', 'API TBD'],
    tags: ['web', 'ops'],
    nextSteps: ['Define KPIs & dashboard widgets', 'Data contracts'],
    updatedAt: now(),
  },
  {
    id: 'reserve-status-bots',
    name: 'Reserve / Status Bots',
    description: 'ReservePage/ReserveList/ReserveCard with mock useBots data.',
    status: 'active',
    progress: 35,
    stack: ['Expo RN', 'Mock data'],
    tags: ['mobile'],
    nextSteps: ['RoomList own date selection', 'MyBooking modularization'],
    updatedAt: now(),
  },
  {
    id: 'interview-suite',
    name: 'Interview Suite (Recruit/Configure/Applicant/Test)',
    description:
      'Updated analyzer (strengths, roleFit), score breakdown, cost estimation, transcript/summary.',
    status: 'active',
    progress: 48,
    stack: ['Expo RN Web', 'RealtimeClient', 'Whisper'],
    tags: ['web', 'ai'],
    nextSteps: ['End-to-end flow', 'Result modal polish'],
    updatedAt: now(),
  },
  {
    id: 'cms-withdrawal',
    name: 'CMS & Withdrawal Tools',
    description: 'Enterprise PHP + Laserfiche, Spring Boot uploads/jobs.',
    status: 'active',
    progress: 40,
    stack: ['PHP', 'MySQL', 'Laserfiche', 'Spring Boot'],
    tags: ['backend', 'ops'],
    nextSteps: ['Controller hardening', 'QA test coverage'],
    updatedAt: now(),
  },
  {
    id: 'qa-perf',
    name: 'QA & Performance Tooling',
    description: 'Selenium+PyTest+Allure, Locust load testing, Postman suites.',
    status: 'active',
    progress: 60,
    stack: ['Python', 'Selenium', 'Locust', 'Postman'],
    tags: ['qa', 'infra'],
    nextSteps: ['Perf baselines for leave APIs', 'Realtime flows load test'],
    updatedAt: now(),
  },
  {
    id: 'tracklah',
    name: 'TrackLah (Personal Task Dashboard)',
    description: 'Minimal task board + KPIs: on-time%, done, overdue.',
    status: 'planned',
    progress: 8,
    stack: ['React+TS', 'Tailwind', 'TanStack Query', 'Supabase/SQLite'],
    tags: ['personal', 'web'],
    nextSteps: ['Schema + seed', 'Task row/card', 'Dashboard KPIs'],
    updatedAt: now(),
  },
];

function matchesFilter(p: Project, f?: ProjectFilter) {
  if (!f) return true;
  if (f.statuses && f.statuses.length && !f.statuses.includes(p.status)) return false;
  if (f.tags && f.tags.length && !f.tags.some((t) => p.tags.includes(t))) return false;
  if (f.search) {
    const q = f.search.toLowerCase();
    const hay =
      `${p.name} ${p.description ?? ''} ${p.stack.join(' ')} ${p.tags.join(' ')} ${p.nextSteps.join(' ')}`.toLowerCase();
    if (!hay.includes(q)) return false;
  }
  return true;
}

export function useProject(initial: Project[] = initialProjects) {
  const [projects, setProjects] = React.useState<Project[]>(initial);
  const [filter, setFilter] = React.useState<ProjectFilter>({});

  const addProject = React.useCallback((p: Project) => {
    setProjects((prev) => [{ ...p, updatedAt: now() }, ...prev]);
  }, []);

  const removeProject = React.useCallback((id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const updateProject = React.useCallback((id: string, patch: Partial<Project>) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...patch, updatedAt: now() } : p))
    );
  }, []);

  const setStatus = React.useCallback((id: string, status: ProjectStatus) => {
    updateProject(id, { status });
  }, [updateProject]);

  const setProgress = React.useCallback((id: string, progress: number) => {
    updateProject(id, { progress: Math.max(0, Math.min(100, progress)) });
  }, [updateProject]);

  const addNextStep = React.useCallback((id: string, step: string) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, nextSteps: [...p.nextSteps, step], updatedAt: now() } : p
      )
    );
  }, []);

  const findById = React.useCallback((id: string) => projects.find((p) => p.id === id), [projects]);

  const filtered = React.useMemo(
    () => projects.filter((p) => matchesFilter(p, filter)),
    [projects, filter]
  );

  const search = React.useCallback((q: string) => {
    setFilter((f) => ({ ...f, search: q || undefined }));
  }, []);

  const clearFilters = React.useCallback(() => setFilter({}), []);

  const groupByStatus = React.useMemo(() => {
    const g: Record<ProjectStatus, Project[]> = { active: [], planned: [], paused: [], done: [] };
    for (const p of filtered) g[p.status].push(p);
    return g;
  }, [filtered]);

  const groupByTag = React.useMemo(() => {
    const g: Record<string, Project[]> = {};
    for (const p of filtered) {
      for (const t of p.tags) {
        if (!g[t]) g[t] = [];
        g[t].push(p);
      }
    }
    return g;
  }, [filtered]);

  const kpis = React.useMemo(() => {
    const total = projects.length;
    const active = projects.filter((p) => p.status === 'active').length;
    const planned = projects.filter((p) => p.status === 'planned').length;
    const paused = projects.filter((p) => p.status === 'paused').length;
    const done = projects.filter((p) => p.status === 'done').length;

    const avgProgress =
      total ? Math.round(projects.reduce((s, p) => s + (p.progress || 0), 0) / total) : 0;

    const overdue = projects.reduce((s, p) => s + (p.metrics?.overdue || 0), 0);
    const tasksDone = projects.reduce((s, p) => s + (p.metrics?.tasksDone || 0), 0);
    const tasksTotal = projects.reduce((s, p) => s + (p.metrics?.tasksTotal || 0), 0);
    const onTimePct =
      tasksTotal ? Math.round(((tasksDone - overdue) / tasksTotal) * 100) : 0;

    return { total, active, planned, paused, done, avgProgress, overdue, tasksDone, tasksTotal, onTimePct };
  }, [projects]);

  return {
    projects,
    setProjects,
    filter,
    setFilter,
    search,
    clearFilters,
    filtered,
    groupByStatus,
    groupByTag,
    kpis,
    addProject,
    removeProject,
    updateProject,
    setStatus,
    setProgress,
    addNextStep,
    findById,
  };
}
