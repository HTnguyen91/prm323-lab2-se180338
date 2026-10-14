// S06: Review & Submit Registration Screen (Xem lại & gửi đăng ký)
import { state, navigateTo, navigateBack } from '../state.js';
import { icon } from '../components/icons.js';
import { showD2SubmitDialog } from '../components/dialogs.js';

export function renderS06(container) {
  let isSending = false;
  let isNetworkError = state.registrationOutcome === 'error';
  const drafts = state.draftPlan;
  const totalCredits = drafts.reduce((sum, d) => sum + d.credits, 0);

  function update() {
    if (isSending) {
      container.innerHTML = `
        <div class="loading-fullscreen">
          <div class="spinner spinner-primary" style="margin-bottom: 24px;"></div>
          <h2 style="font-size: 20px; font-weight: 700; color: var(--md-on-surface); margin-bottom: 8px;">
            Đang gửi đăng ký ${drafts.length} lớp…
          </h2>
          <p style="font-size: 14px; color: var(--md-on-surface-variant); max-width: 280px; line-height: 1.5;">
            Hệ thống đang gửi yêu cầu và xếp chỗ tự động. Kế hoạch của bạn vẫn được giữ nguyên an toàn.
          </p>
        </div>
      `;
      return;
    }

    if (isNetworkError) {
      container.innerHTML = `
        <header class="m3-app-bar">
          <div class="m3-app-bar-left">
            <button id="s06-err-back-btn" class="m3-icon-btn" title="Quay lại kế hoạch">
              ${icon('arrowLeft', 20)}
            </button>
            <h1 class="m3-app-bar-title">Xem lại đăng ký</h1>
          </div>
        </header>

        <div class="screen-content" style="padding-bottom: 96px;">
          <div class="m3-banner m3-banner-error" style="margin-top: 12px;">
            ${icon('alert', 24)}
            <div>
              <strong style="font-size: 15px; display: block; margin-bottom: 4px;">Chưa xác nhận được kết quả đăng ký</strong>
              <div>Kết nối mạng bị gián đoạn trong khi gửi. Kế hoạch ${drafts.length} lớp của bạn vẫn được lưu giữ an toàn, chưa bị hủy.</div>
            </div>
          </div>

          <div class="m3-card" style="margin-top: 16px;">
            <div style="font-size: 14px; font-weight: 700; margin-bottom: 12px;">Danh sách lớp đang giữ:</div>
            ${drafts.map(d => `
              <div class="review-item">
                <span><strong>${d.courseCode}</strong> (${d.sectionCode})</span>
                <span style="color: var(--md-on-surface-variant);">${d.time}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <footer class="fixed-bottom-bar" style="position: absolute; left: 0; right: 0; bottom: 0;">
          <button id="s06-retry-btn" class="m3-btn m3-btn-primary m3-btn-full">
            ${icon('refresh', 18)} Thử lại gửi đăng ký
          </button>
        </footer>
      `;

      container.querySelector('#s06-err-back-btn')?.addEventListener('click', () => {
        navigateTo('S05');
      });

      container.querySelector('#s06-retry-btn')?.addEventListener('click', () => {
        isNetworkError = false;
        triggerSending();
      });
      return;
    }

    // Default review layout
    container.innerHTML = `
      <!-- App Bar with Back -->
      <header class="m3-app-bar">
        <div class="m3-app-bar-left">
          <button id="s06-back-btn" class="m3-icon-btn" title="Quay lại">
            ${icon('arrowLeft', 20)}
          </button>
          <h1 class="m3-app-bar-title">Xem lại đăng ký</h1>
        </div>
      </header>

      <div class="screen-root" style="padding-bottom: 96px;">
        <div class="screen-content">
          <!-- Summary Header -->
          <div class="m3-card" style="margin-bottom: 16px; background: #F8FAFF; border-color: #C8D1F7;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-size: 16px; font-weight: 700; color: var(--md-primary);">
                Tổng cộng: ${drafts.length} lớp · ${totalCredits} tín chỉ
              </span>
              <span class="status-tag status-tag-success">
                ${icon('check', 12)} Không trùng lịch
              </span>
            </div>
            <p style="font-size: 13px; color: var(--md-on-surface-variant); line-height: 1.4;">
              Kiểm tra kỹ các lớp học phần bên dưới trước khi bấm gửi đăng ký vào hệ thống.
            </p>
          </div>

          <div style="font-size: 14px; font-weight: 700; color: var(--md-on-surface); margin-bottom: 12px;">
            Các lớp sẽ gửi đăng ký (${drafts.length})
          </div>

          <!-- Read-only List -->
          <div class="review-card">
            ${drafts.map((item, idx) => `
              <div class="review-item">
                <div style="flex: 1;">
                  <div style="font-weight: 700; color: var(--md-on-surface);">
                    ${idx + 1}. ${item.courseCode} · ${item.sectionCode}
                  </div>
                  <div style="font-size: 12px; color: var(--md-on-surface-variant); margin-top: 2px;">
                    ${item.name}
                  </div>
                  <div style="font-size: 12px; color: var(--md-primary); margin-top: 2px;">
                    ${item.days.join(', ')} · ${item.time} (${item.room})
                  </div>
                </div>
                <div style="text-align: right;">
                  <span class="status-tag status-tag-neutral">${item.credits} TC</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Fixed Bottom Action Bar -->
      <footer class="fixed-bottom-bar" style="position: absolute; left: 0; right: 0; bottom: 0;">
        <button id="s06-submit-btn" class="m3-btn m3-btn-primary m3-btn-full">
          Gửi đăng ký (${drafts.length} lớp)
        </button>
      </footer>
    `;

    container.querySelector('#s06-back-btn')?.addEventListener('click', () => {
      navigateBack();
    });

    container.querySelector('#s06-submit-btn')?.addEventListener('click', () => {
      showD2SubmitDialog({
        count: drafts.length,
        credits: totalCredits,
        onProceed: () => {
          triggerSending();
        }
      });
    });
  }

  function triggerSending() {
    isSending = true;
    update();

    setTimeout(() => {
      isSending = false;

      if (state.registrationOutcome === 'partial') {
        // Partial failure: 4 courses enrolled, DBI202/SE1801 full!
        state.registeredCourses = drafts.filter(d => d.courseCode !== 'DBI202');
        navigateTo('S07', { registrationOutcome: 'partial' });
      } else if (state.registrationOutcome === 'error') {
        isNetworkError = true;
        update();
      } else {
        // Initial success: 5 courses enrolled
        state.registeredCourses = JSON.parse(JSON.stringify(drafts));
        navigateTo('S07', { registrationOutcome: 'success' });
      }
    }, 1200);
  }

  update();
}
