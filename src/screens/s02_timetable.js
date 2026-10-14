// S02: Weekly Timetable Screen (Lịch tuần)
import { state, navigateTo, getBusySlotsCount } from '../state.js';
import { icon } from '../components/icons.js';

export function renderS02(container) {
  const courses = state.registeredCourses;
  const busyList = state.busyTimes;
  const totalCredits = courses.reduce((sum, c) => sum + c.credits, 0);
  const totalBusySlots = getBusySlotsCount();

  const daysOfWeek = [
    { key: 'T2', label: 'Thứ Hai' },
    { key: 'T3', label: 'Thứ Ba' },
    { key: 'T4', label: 'Thứ Tư' },
    { key: 'T5', label: 'Thứ Năm' },
    { key: 'T6', label: 'Thứ Sáu' },
    { key: 'T7', label: 'Thứ Bảy' },
    { key: 'CN', label: 'Chủ Nhật' }
  ];

  // Build agenda items grouped by day
  const agendaByDay = {};
  daysOfWeek.forEach(d => {
    agendaByDay[d.key] = [];
  });

  // Add course sessions
  courses.forEach(c => {
    c.days.forEach(day => {
      if (agendaByDay[day]) {
        agendaByDay[day].push({
          type: 'class',
          code: c.courseCode,
          section: c.sectionCode,
          name: c.name,
          time: c.time,
          room: c.room
        });
      }
    });
  });

  // Add busy occurrences
  busyList.forEach(b => {
    b.days.forEach(day => {
      if (agendaByDay[day]) {
        agendaByDay[day].push({
          type: 'busy',
          name: b.name,
          time: b.time
        });
      }
    });
  });

  // Sort by time within each day
  Object.keys(agendaByDay).forEach(day => {
    agendaByDay[day].sort((a, b) => a.time.localeCompare(b.time));
  });

  const isEmpty = courses.length === 0 && busyList.length === 0;

  let agendaContentHtml = '';

  if (isEmpty) {
    agendaContentHtml = `
      <div class="empty-state-view">
        <div class="empty-state-icon">
          ${icon('calendar', 36)}
        </div>
        <h2 class="empty-state-title">Chưa có gì trong lịch</h2>
        <p class="empty-state-desc">Chọn môn và khai báo giờ bận cá nhân để lên lịch học kỳ phù hợp.</p>
        <button id="s02-add-busy-empty-btn" class="m3-btn m3-btn-primary">
          ${icon('plus', 18)} Khai báo giờ bận
        </button>
      </div>
    `;
  } else {
    agendaContentHtml = `
      <!-- Summary Card -->
      <div class="s02-summary-card">
        <div class="s02-summary-term">Học kỳ Xuân 2027 · Kỳ 4</div>
        <div class="s02-summary-stats">
          ${courses.length > 0 ? `Đã đăng ký ${courses.length} môn · ${totalCredits} tín chỉ` : 'Chưa đăng ký môn nào'}
        </div>
        <div class="s02-summary-pills">
          <span class="s02-pill">
            ${icon('clock', 12)} ${totalBusySlots} khung giờ bận/tuần
          </span>
          <span class="s02-pill" style="background: rgba(52, 211, 153, 0.25);">
            ${icon('check', 12)} Không trùng lịch
          </span>
        </div>
      </div>

      <!-- Agenda Days -->
      <div class="agenda-container" style="padding-bottom: 72px;">
        ${daysOfWeek.map(dayObj => {
          const items = agendaByDay[dayObj.key];
          if (!items || items.length === 0) return '';

          return `
            <div class="agenda-day-group">
              <div class="agenda-day-header">
                ${dayObj.label} (${dayObj.key}) · <span style="font-weight: 500; font-size: 11px;">${items.length} sự kiện</span>
              </div>
              <div class="agenda-items">
                ${items.map(item => {
                  if (item.type === 'class') {
                    return `
                      <div class="agenda-block agenda-block-class">
                        <div class="agenda-time-col">
                          <span>${item.time.split('–')[0]}</span>
                          <span style="opacity: 0.6; font-size: 11px;">${item.time.split('–')[1]}</span>
                        </div>
                        <div class="agenda-info-col">
                          <div class="agenda-course-code">
                            ${item.code}
                            <span class="status-tag status-tag-neutral">${item.section}</span>
                          </div>
                          <div class="agenda-course-name">${item.name}</div>
                          <div class="agenda-room-tag">${icon('mapPin', 12)} Phòng ${item.room}</div>
                        </div>
                      </div>
                    `;
                  } else {
                    return `
                      <div class="agenda-block agenda-block-busy">
                        <div class="agenda-time-col" style="color: var(--md-busy-icon);">
                          <span>${item.time.split('–')[0]}</span>
                          <span style="opacity: 0.7; font-size: 11px;">${item.time.split('–')[1]}</span>
                        </div>
                        <div class="agenda-info-col">
                          <div class="agenda-course-code" style="color: var(--md-busy-text);">
                            ${icon('clock', 14)} Giờ bận cá nhân
                          </div>
                          <div class="agenda-course-name" style="color: var(--md-busy-text); font-weight: 600;">${item.name}</div>
                          <div class="status-tag status-tag-busy" style="margin-top: 4px;">Ràng buộc xếp lớp</div>
                        </div>
                      </div>
                    `;
                  }
                }).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Extended FAB: Thêm môn -->
      <button id="s02-add-course-fab" class="m3-fab" title="Tìm và thêm môn vào kế hoạch">
        ${icon('plus', 20)}
        <span>Thêm môn</span>
      </button>
    `;
  }

  container.innerHTML = `
    <!-- App Bar -->
    <header class="m3-app-bar">
      <div class="m3-app-bar-left">
        <h1 class="m3-app-bar-title">Lịch tuần</h1>
      </div>
      <div>
        <button id="s02-busy-btn" class="m3-app-bar-action" title="Xem danh sách giờ bận">
          ${icon('clock', 16)} Giờ bận
        </button>
      </div>
    </header>

    <!-- Scroll Content -->
    <div class="screen-content">
      ${agendaContentHtml}
    </div>
  `;

  // Event handlers
  container.querySelector('#s02-busy-btn')?.addEventListener('click', () => {
    navigateTo('S09');
  });

  container.querySelector('#s02-add-course-fab')?.addEventListener('click', () => {
    navigateTo('S03');
  });

  container.querySelector('#s02-add-busy-empty-btn')?.addEventListener('click', () => {
    navigateTo('S09');
  });
}
