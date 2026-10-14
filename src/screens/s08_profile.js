// S08: Profile Screen (Cá nhân)
import { state, navigateTo } from '../state.js';
import { icon } from '../components/icons.js';
import { showD5LogoutDialog } from '../components/dialogs.js';
import { showSnackbar } from '../components/snackbar.js';

export function renderS08(container) {
  const p = state.persona;
  const progressPercent = ((p.accumulatedCredits / p.totalRequiredCredits) * 100).toFixed(1);

  container.innerHTML = `
    <!-- App Bar -->
    <header class="m3-app-bar">
      <div class="m3-app-bar-left">
        <h1 class="m3-app-bar-title">Cá nhân</h1>
      </div>
    </header>

    <div class="screen-root" style="padding-bottom: 84px;">
      <div class="screen-content">
        <!-- Profile Hero -->
        <div class="profile-hero">
          <div class="profile-avatar">GH</div>
          <div>
            <h2 style="font-size: 18px; font-weight: 700; color: var(--md-on-surface);">
              ${p.name}
            </h2>
            <div style="font-size: 13px; color: var(--md-on-surface-variant); margin-top: 2px;">
              MSSV: <strong>${p.studentId}</strong> · Tuổi: ${p.age}
            </div>
            <div style="font-size: 12px; color: var(--md-primary); font-weight: 600; margin-top: 4px;">
              ${p.major} · ${p.term}
            </div>
          </div>
        </div>

        <!-- Academic Degree Progress Card -->
        <div class="m3-card" style="margin-bottom: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="font-size: 14px; font-weight: 700;">Tiến độ tích lũy toàn khóa</span>
            <span style="font-size: 14px; font-weight: 700; color: var(--md-primary);">${p.accumulatedCredits}/${p.totalRequiredCredits} TC</span>
          </div>
          <div class="progress-track" style="margin-bottom: 8px;">
            <div class="progress-fill" style="width: ${progressPercent}%;"></div>
          </div>
          <div style="font-size: 12px; color: var(--md-on-surface-variant); display: flex; justify-content: space-between;">
            <span>Đạt ${progressPercent}% yêu cầu tốt nghiệp</span>
            <span>Còn ${p.totalRequiredCredits - p.accumulatedCredits} tín chỉ</span>
          </div>
        </div>

        <!-- Setting Options List -->
        <div style="font-size: 14px; font-weight: 700; color: var(--md-on-surface); margin-bottom: 10px;">
          Cài đặt & Lịch cá nhân
        </div>

        <!-- Row 1: Giờ bận -->
        <div id="s08-busy-row" class="profile-row">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="color: var(--md-busy-icon);">${icon('clock', 22)}</div>
            <div>
              <div style="font-weight: 700; font-size: 14px;">Giờ bận cá nhân</div>
              <div style="font-size: 12px; color: var(--md-on-surface-variant);">
                Khung giờ cá nhân dùng để tránh trùng lịch học
              </div>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 6px;">
            <span class="status-tag status-tag-busy">${state.busyTimes.length} mục</span>
            ${icon('chevronRight', 18)}
          </div>
        </div>

        <!-- Row 2: Term Context -->
        <div class="profile-row" style="cursor: default;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="color: var(--md-primary);">${icon('calendar', 22)}</div>
            <div>
              <div style="font-weight: 700; font-size: 14px;">Học kỳ đang lập kế hoạch</div>
              <div style="font-size: 12px; color: var(--md-on-surface-variant);">
                Xuân 2027 · Kỳ 4
              </div>
            </div>
          </div>
          <span class="status-tag status-tag-neutral">Mở đăng ký</span>
        </div>

        <!-- Row 3: Logout -->
        <div id="s08-logout-row" class="profile-row" style="border-color: #FED7D7; margin-top: 16px;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="color: var(--md-error);">${icon('logout', 22)}</div>
            <div>
              <div style="font-weight: 700; font-size: 14px; color: var(--md-error);">Đăng xuất</div>
              <div style="font-size: 12px; color: var(--md-on-surface-variant);">
                Kết thúc phiên làm việc trên Semester
              </div>
            </div>
          </div>
          ${icon('chevronRight', 18)}
        </div>
      </div>
    </div>
  `;

  // Events
  container.querySelector('#s08-busy-row')?.addEventListener('click', () => {
    navigateTo('S09');
  });

  container.querySelector('#s08-logout-row')?.addEventListener('click', () => {
    showD5LogoutDialog({
      onProceed: () => {
        state.isLoggedIn = false;
        showSnackbar('Đã đăng xuất khỏi Semester');
        navigateTo('S01');
      }
    });
  });
}
