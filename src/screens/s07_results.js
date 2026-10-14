// S07: Registration Results Screen (Kết quả đăng ký)
import { state, navigateTo } from '../state.js';
import { icon } from '../components/icons.js';

export function renderS07(container) {
  const outcome = state.registrationOutcome || 'success';
  const drafts = state.draftPlan;

  let headerHtml = '';
  let listHtml = '';
  let actionsHtml = '';

  if (outcome === 'partial') {
    // 4 enrolled, DBI202/SE1801 full!
    headerHtml = `
      <div class="result-status-card result-status-partial">
        <div class="result-icon">
          ${icon('alert', 28)}
        </div>
        <h2 style="font-size: 20px; font-weight: 700; color: #7C2D12; margin-bottom: 4px;">
          Đã đăng ký 4/5 lớp
        </h2>
        <p style="font-size: 13px; color: #9A3412;">
          4 lớp học phần đã được xác nhận thành công. Riêng lớp <strong>DBI202 (SE1801)</strong> vừa hết chỗ (0/35).
        </p>
      </div>
    `;

    listHtml = `
      <div class="m3-card" style="margin-bottom: 16px;">
        <div style="font-size: 14px; font-weight: 700; margin-bottom: 12px;">Chi tiết kết quả:</div>
        
        <!-- Failed DBI202 item -->
        <div class="review-item" style="background: #FFF5F5; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #FED7D7;">
          <div style="flex: 1;">
            <div style="font-weight: 700; color: var(--md-error);">
              DBI202 · Cơ sở dữ liệu (SE1801)
            </div>
            <div style="font-size: 12px; color: var(--md-on-surface-variant); margin-top: 2px;">
              T2, T4 · 10:00–12:20 (BE-301)
            </div>
          </div>
          <div>
            <span class="status-tag status-tag-error">Hết chỗ, chưa đăng ký</span>
          </div>
        </div>

        <!-- 4 Success items -->
        ${drafts.filter(d => d.courseCode !== 'DBI202').map(item => `
          <div class="review-item">
            <div style="flex: 1;">
              <div style="font-weight: 700; color: var(--md-on-surface);">
                ${item.courseCode} · ${item.name} (${item.sectionCode})
              </div>
              <div style="font-size: 12px; color: var(--md-on-surface-variant); margin-top: 2px;">
                ${item.days.join(', ')} · ${item.time} (${item.room})
              </div>
            </div>
            <div>
              <span class="status-tag status-tag-success">${icon('check', 12)} Đã đăng ký</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    actionsHtml = `
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <button id="s07-find-alt-btn" class="m3-btn m3-btn-primary m3-btn-full">
          Chọn lớp thay thế cho DBI202
        </button>
        <button id="s07-view-timetable-partial-btn" class="m3-btn m3-btn-text m3-btn-full">
          Về lịch tuần (giữ 4 môn đã đăng ký)
        </button>
      </div>
    `;
  } else if (outcome === 'replacement') {
    // 5 enrolled after choosing SE1804
    headerHtml = `
      <div class="result-status-card result-status-success">
        <div class="result-icon">
          ${icon('check', 30)}
        </div>
        <h2 style="font-size: 20px; font-weight: 700; color: #065F46; margin-bottom: 4px;">
          Đã đăng ký 5/5 lớp thành công!
        </h2>
        <p style="font-size: 13px; color: #047857;">
          Lớp thay thế <strong>DBI202 (SE1804)</strong> đã được xác nhận. Tổng cộng 15/20 tín chỉ hoàn tất.
        </p>
      </div>
    `;

    listHtml = `
      <div class="m3-card" style="margin-bottom: 16px;">
        <div style="font-size: 14px; font-weight: 700; margin-bottom: 12px;">5 lớp học phần chính thức:</div>
        ${state.registeredCourses.map(item => `
          <div class="review-item">
            <div style="flex: 1;">
              <div style="font-weight: 700; color: var(--md-on-surface);">
                ${item.courseCode} · ${item.name} (${item.sectionCode})
              </div>
              <div style="font-size: 12px; color: var(--md-on-surface-variant); margin-top: 2px;">
                ${item.days.join(', ')} · ${item.time} (${item.room})
              </div>
            </div>
            <div>
              <span class="status-tag status-tag-success">${icon('check', 12)} Thành công</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    actionsHtml = `
      <button id="s07-view-timetable-success-btn" class="m3-btn m3-btn-primary m3-btn-full">
        ${icon('calendar', 18)} Xem thời khóa biểu mới
      </button>
    `;
  } else {
    // Full initial success
    headerHtml = `
      <div class="result-status-card result-status-success">
        <div class="result-icon">
          ${icon('check', 30)}
        </div>
        <h2 style="font-size: 20px; font-weight: 700; color: #065F46; margin-bottom: 4px;">
          Đã đăng ký 5/5 lớp thành công!
        </h2>
        <p style="font-size: 13px; color: #047857;">
          Toàn bộ 5 môn học kỳ Xuân 2027 (15 tín chỉ) đã được ghi nhận vào hệ thống.
        </p>
      </div>
    `;

    listHtml = `
      <div class="m3-card" style="margin-bottom: 16px;">
        <div style="font-size: 14px; font-weight: 700; margin-bottom: 12px;">Chi tiết kết quả:</div>
        ${drafts.map(item => `
          <div class="review-item">
            <div style="flex: 1;">
              <div style="font-weight: 700; color: var(--md-on-surface);">
                ${item.courseCode} · ${item.name} (${item.sectionCode})
              </div>
              <div style="font-size: 12px; color: var(--md-on-surface-variant); margin-top: 2px;">
                ${item.days.join(', ')} · ${item.time} (${item.room})
              </div>
            </div>
            <div>
              <span class="status-tag status-tag-success">${icon('check', 12)} Thành công</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    actionsHtml = `
      <button id="s07-view-timetable-success-btn" class="m3-btn m3-btn-primary m3-btn-full">
        ${icon('calendar', 18)} Xem thời khóa biểu
      </button>
    `;
  }

  container.innerHTML = `
    <!-- App Bar -->
    <header class="m3-app-bar">
      <div class="m3-app-bar-left">
        <h1 class="m3-app-bar-title">Kết quả đăng ký</h1>
      </div>
    </header>

    <div class="screen-root" style="padding-bottom: 96px;">
      <div class="screen-content">
        ${headerHtml}
        ${listHtml}
      </div>
    </div>

    <!-- Fixed Bottom Action Bar -->
    <footer class="fixed-bottom-bar" style="position: absolute; left: 0; right: 0; bottom: 0;">
      ${actionsHtml}
    </footer>
  `;

  // Events
  container.querySelector('#s07-find-alt-btn')?.addEventListener('click', () => {
    // Open S04 in recovery mode
    navigateTo('S04', { selectedCourse: 'DBI202', detailMode: 'alt_recovery' });
  });

  container.querySelector('#s07-view-timetable-partial-btn')?.addEventListener('click', () => {
    navigateTo('S02');
  });

  container.querySelector('#s07-view-timetable-success-btn')?.addEventListener('click', () => {
    navigateTo('S02');
  });
}
