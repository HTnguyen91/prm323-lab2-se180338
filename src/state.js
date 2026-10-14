// Reactive State Management & Authoritative Data for Semester

export const COURSES_CATALOG = [
  {
    code: 'PRM323',
    name: 'Phát triển ứng dụng đa nền tảng',
    credits: 3,
    prerequisite: 'PRF192 · Đã hoàn thành',
    prereqPassed: true,
    sections: [
      { code: 'SE1802', days: ['T2', 'T4'], time: '07:30–09:50', room: 'BE-204', lecturer: 'Chưa cập nhật', remaining: 12, capacity: 35 },
      { code: 'SE1808', days: ['T3', 'T5'], time: '07:30–09:50', room: 'BE-205', lecturer: 'Chưa cập nhật', remaining: 6, capacity: 35 }
    ]
  },
  {
    code: 'DBI202',
    name: 'Cơ sở dữ liệu',
    credits: 3,
    prerequisite: 'Không có môn tiên quyết trong demo',
    prereqPassed: true,
    sections: [
      { code: 'SE1801', days: ['T2', 'T4'], time: '10:00–12:20', room: 'BE-301', lecturer: 'Phạm Q.', remaining: 12, capacity: 35 },
      { code: 'SE1803', days: ['T3', 'T5'], time: '18:00–20:20', room: 'AL-201', lecturer: 'Đỗ T.', remaining: 20, capacity: 35, clashReason: 'Trùng giờ bận Highlands – ca tối T3, T5' },
      { code: 'SE1804', days: ['T2', 'T4'], time: '15:20–17:40', room: 'BE-105', lecturer: 'Lý H.', remaining: 3, capacity: 35 },
      { code: 'SE1806', days: ['T6', 'T7'], time: '07:30–09:50', room: 'DE-102', lecturer: 'Mai N.', remaining: 8, capacity: 35 },
      { code: 'SE1802', days: ['T2', 'T4'], time: '07:30–09:50', room: 'BE-302', lecturer: 'Chưa cập nhật', remaining: 0, capacity: 35, isFull: true },
      { code: 'SE1805', days: ['T3', 'T5'], time: '10:00–12:20', room: 'AL-202', lecturer: 'Chưa cập nhật', remaining: 0, capacity: 35, isFull: true }
    ]
  },
  {
    code: 'SWD392',
    name: 'Kiến trúc và thiết kế phần mềm',
    credits: 3,
    prerequisite: 'Không yêu cầu trong demo',
    prereqPassed: true,
    sections: [
      { code: 'SE1805', days: ['T3', 'T5'], time: '12:50–15:10', room: 'AL-402', lecturer: 'Chưa cập nhật', remaining: 10, capacity: 35 }
    ]
  },
  {
    code: 'MAS291',
    name: 'Xác suất thống kê',
    credits: 3,
    prerequisite: 'Không yêu cầu trong demo',
    prereqPassed: true,
    sections: [
      { code: 'SE1807', days: ['T3', 'T6'], time: '10:00–12:20', room: 'AL-105', lecturer: 'Chưa cập nhật', remaining: 7, capacity: 35 }
    ]
  },
  {
    code: 'JPD123',
    name: 'Tiếng Nhật',
    credits: 3,
    prerequisite: 'Không yêu cầu trong demo',
    prereqPassed: true,
    sections: [
      { code: 'SE1803', days: ['T6', 'T7'], time: '15:20–17:40', room: 'DE-210', lecturer: 'Chưa cập nhật', remaining: 9, capacity: 35 }
    ]
  }
];

export const INITIAL_BUSY_TIMES = [
  {
    id: 'B01',
    name: 'Highlands – ca tối',
    days: ['T3', 'T5', 'T6'],
    start: '18:00',
    end: '22:00',
    time: '18:00–22:00',
    slotsPerWeek: 3
  },
  {
    id: 'B02',
    name: 'Highlands – ca sáng',
    days: ['CN'],
    start: '07:00',
    end: '12:00',
    time: '07:00–12:00',
    slotsPerWeek: 1
  }
];

// App State
export const state = {
  isLoggedIn: true,
  currentScreen: 'S02',
  previousScreen: null,
  screenHistory: ['S02'],
  
  // Persona Info
  persona: {
    name: 'Trần Gia Hân',
    age: 20,
    studentId: 'SE180123',
    major: 'Kỹ thuật phần mềm',
    term: 'Kỳ 4 · Học kỳ Xuân 2027',
    accumulatedCredits: 54,
    totalRequiredCredits: 145,
    targetCredits: 15,
    maxCredits: 20
  },

  // Busy Times
  busyTimes: JSON.parse(JSON.stringify(INITIAL_BUSY_TIMES)),

  // Course Draft Plan (S05)
  draftPlan: [
    { courseCode: 'PRM323', sectionCode: 'SE1802', name: 'Phát triển ứng dụng đa nền tảng', credits: 3, days: ['T2', 'T4'], time: '07:30–09:50', room: 'BE-204' },
    { courseCode: 'DBI202', sectionCode: 'SE1801', name: 'Cơ sở dữ liệu', credits: 3, days: ['T2', 'T4'], time: '10:00–12:20', room: 'BE-301' },
    { courseCode: 'SWD392', sectionCode: 'SE1805', name: 'Kiến trúc và thiết kế phần mềm', credits: 3, days: ['T3', 'T5'], time: '12:50–15:10', room: 'AL-402' },
    { courseCode: 'MAS291', sectionCode: 'SE1807', name: 'Xác suất thống kê', credits: 3, days: ['T3', 'T6'], time: '10:00–12:20', room: 'AL-105' },
    { courseCode: 'JPD123', sectionCode: 'SE1803', name: 'Tiếng Nhật', credits: 3, days: ['T6', 'T7'], time: '15:20–17:40', room: 'DE-210' }
  ],

  // Registered Confirmed Timetable (S02)
  registeredCourses: [
    { courseCode: 'PRM323', sectionCode: 'SE1802', name: 'Phát triển ứng dụng đa nền tảng', credits: 3, days: ['T2', 'T4'], time: '07:30–09:50', room: 'BE-204' },
    { courseCode: 'DBI202', sectionCode: 'SE1801', name: 'Cơ sở dữ liệu', credits: 3, days: ['T2', 'T4'], time: '10:00–12:20', room: 'BE-301' },
    { courseCode: 'SWD392', sectionCode: 'SE1805', name: 'Kiến trúc và thiết kế phần mềm', credits: 3, days: ['T3', 'T5'], time: '12:50–15:10', room: 'AL-402' },
    { courseCode: 'MAS291', sectionCode: 'SE1807', name: 'Xác suất thống kê', credits: 3, days: ['T3', 'T6'], time: '10:00–12:20', room: 'AL-105' },
    { courseCode: 'JPD123', sectionCode: 'SE1803', name: 'Tiếng Nhật', credits: 3, days: ['T6', 'T7'], time: '15:20–17:40', room: 'DE-210' }
  ],

  // UI Transient states
  selectedCourseForDetail: 'DBI202',
  selectedSectionInDetail: 'SE1801',
  detailMode: 'normal', // 'normal' | 'alt_recovery' | 'change'
  
  // Registration Results
  registrationOutcome: 'success', // 'success' | 'partial' | 'replacement' | 'error'

  // Undo memory
  lastUndoAction: null,
  
  // Selected busy item for editing
  editingBusyId: null,

  // Listeners for reactivity
  listeners: []
};

// Event emitter
export function subscribe(fn) {
  state.listeners.push(fn);
  return () => {
    state.listeners = state.listeners.filter(l => l !== fn);
  };
}

export function notify() {
  state.listeners.forEach(fn => fn(state));
}

// Navigation helper
export function navigateTo(screenId, params = {}) {
  if (state.currentScreen === screenId && !params.force) return;
  state.previousScreen = state.currentScreen;
  state.screenHistory.push(screenId);
  state.currentScreen = screenId;

  if (params.selectedCourse) {
    state.selectedCourseForDetail = params.selectedCourse;
  }
  if (params.detailMode) {
    state.detailMode = params.detailMode;
  }
  if (params.editingBusyId !== undefined) {
    state.editingBusyId = params.editingBusyId;
  }
  if (params.registrationOutcome) {
    state.registrationOutcome = params.registrationOutcome;
  }

  notify();
}

export function navigateBack() {
  if (state.screenHistory.length > 1) {
    state.screenHistory.pop(); // current
    const prev = state.screenHistory[state.screenHistory.length - 1];
    state.currentScreen = prev;
    notify();
  } else {
    navigateTo('S02');
  }
}

// Helper: check clash between time intervals
function timeToMinutes(timeStr) {
  const [h, m] = timeStr.split(':').map(Number);
  return h * 60 + m;
}

export function checkIntervalOverlap(rangeA, rangeB) {
  const [startAStr, endAStr] = rangeA.split('–');
  const [startBStr, endBStr] = rangeB.split('–');
  const startA = timeToMinutes(startAStr);
  const endA = timeToMinutes(endAStr);
  const startB = timeToMinutes(startBStr);
  const endB = timeToMinutes(endBStr);

  return startA < endB && startB < endA;
}

// Check if a section clashes with personal busy times
export function checkClashWithBusy(section) {
  for (const busy of state.busyTimes) {
    const commonDays = section.days.filter(d => busy.days.includes(d));
    if (commonDays.length > 0) {
      if (checkIntervalOverlap(section.time, busy.time)) {
        return {
          clashes: true,
          busyName: busy.name,
          days: commonDays,
          reason: `Trùng ${busy.name} (${commonDays.join(', ')})`
        };
      }
    }
  }
  return { clashes: false };
}

// Get total draft credits
export function getDraftCredits() {
  return state.draftPlan.reduce((acc, item) => acc + item.credits, 0);
}

// Get total busy slots
export function getBusySlotsCount() {
  return state.busyTimes.reduce((acc, item) => acc + item.slotsPerWeek, 0);
}

// Preset Flow Loaders for fast rubric evaluation
export function loadFlow(flowKey) {
  if (flowKey === 'f1') {
    // Flow 1: Khai báo giờ bận
    state.isLoggedIn = true;
    state.busyTimes = [JSON.parse(JSON.stringify(INITIAL_BUSY_TIMES[0]))]; // start with B01
    state.draftPlan = [];
    state.registeredCourses = [];
    navigateTo('S09');
  } else if (flowKey === 'f2') {
    // Flow 2: Chọn môn DBI202
    state.isLoggedIn = true;
    state.busyTimes = JSON.parse(JSON.stringify(INITIAL_BUSY_TIMES));
    state.selectedCourseForDetail = 'DBI202';
    state.selectedSectionInDetail = 'SE1801';
    state.detailMode = 'normal';
    navigateTo('S03');
  } else if (flowKey === 'f3a') {
    // Flow 3A: Đăng ký thành công 5 môn
    state.isLoggedIn = true;
    state.busyTimes = JSON.parse(JSON.stringify(INITIAL_BUSY_TIMES));
    state.draftPlan = [
      { courseCode: 'PRM323', sectionCode: 'SE1802', name: 'Phát triển ứng dụng đa nền tảng', credits: 3, days: ['T2', 'T4'], time: '07:30–09:50', room: 'BE-204' },
      { courseCode: 'DBI202', sectionCode: 'SE1801', name: 'Cơ sở dữ liệu', credits: 3, days: ['T2', 'T4'], time: '10:00–12:20', room: 'BE-301' },
      { courseCode: 'SWD392', sectionCode: 'SE1805', name: 'Kiến trúc và thiết kế phần mềm', credits: 3, days: ['T3', 'T5'], time: '12:50–15:10', room: 'AL-402' },
      { courseCode: 'MAS291', sectionCode: 'SE1807', name: 'Xác suất thống kê', credits: 3, days: ['T3', 'T6'], time: '10:00–12:20', room: 'AL-105' },
      { courseCode: 'JPD123', sectionCode: 'SE1803', name: 'Tiếng Nhật', credits: 3, days: ['T6', 'T7'], time: '15:20–17:40', room: 'DE-210' }
    ];
    state.registrationOutcome = 'success';
    navigateTo('S06');
  } else if (flowKey === 'f3b') {
    // Flow 3B: Phục hồi khi hết chỗ (Recovery branch)
    state.isLoggedIn = true;
    state.busyTimes = JSON.parse(JSON.stringify(INITIAL_BUSY_TIMES));
    state.registrationOutcome = 'partial';
    navigateTo('S07');
  } else if (flowKey === 'net_err') {
    // Simulated network error branch
    state.isLoggedIn = true;
    state.registrationOutcome = 'error';
    navigateTo('S06');
  } else if (flowKey === 'conflict') {
    // Conflict demo
    state.isLoggedIn = true;
    state.busyTimes = JSON.parse(JSON.stringify(INITIAL_BUSY_TIMES));
    state.selectedCourseForDetail = 'DBI202';
    state.selectedSectionInDetail = 'SE1803'; // Conflicting section
    state.detailMode = 'normal';
    navigateTo('S04');
  }
}
