// S05: Semester Plan Screen (Kế hoạch)
import { state, navigateTo, getDraftCredits } from '../state.js';
import { icon } from '../components/icons.js';
import { showD3DeleteCourseDialog } from '../components/dialogs.js';
import { showSnackbar } from '../components/snackbar.js';

export function renderS05(container) {
  const drafts = state.draftPlan;
  const totalCredits = getDraftCredits();
  const maxCredits = state.persona.maxCredits; // 20
  const progressPercent = Math.min(100, Math.round((totalCredits / maxCredits) * 100));

  // Check if any draft item has conflict
  const hasAnyConflict = drafts.some(d => d.hasClash || d.sectionCode === 'SE1803');

  function update() {
    if (drafts.length === 0) {
      container.innerHTML = `
        <header class="m3-app-bar">
          <div class="m3-app-bar-left">
            <h1 class="m3-app-bar-title">Kế hoạch</h1>
          </div>
        </header>

        <div class="screen-content" style="padding-bottom: 84px;">
          <div class="empty-state-view">
            <div class="empty-state-icon">
              ${icon('book', 36)}
            </div>
            <h2 class="empty-state-title">Chưa có môn trong kế hoạch</h2>
            <p class="empty-state-desc">Chọn các môn học kỳ 4 để xếp lịch và kiểm tra trùng giờ trước khi gửi đăng ký.</p>
            <button id="s05-find-courses-btn" class="m3-btn m3-btn-primary">
              ${icon('search', 18)} Tìm môn học
            </button>
          </div>
        </div>
      `;

      container.querySelector('#s05-find-courses-btn')?.addEventListener('click', () => {
        navigateTo('S03');
      });
      return;
    }

    container.innerHTML = `
      <!-- App Bar -->
      <header class="m3-app-bar">
        <div class="m3-app-bar-left">
          <h1 class="m3-app-bar-title">Kế hoạch</h1>
        </div>
        <div>
          <button id="s05-add-more-header-btn" class="m3-app-bar-action">
            ${icon('plus', 16)} Thêm môn
          </button>
        </div>
      </header>

      <div class="screen-root" style="padding-bottom: 96px;">
        <div class="screen-content">
          <!-- Progress Card -->
          <div class="plan-progress-card">
            <div class="plan-progress-header">
              <span>Đã chọn ${drafts.length} môn</span>
              <span style="color: var(--md-primary); font-weight: 700;">${totalCredits}/${maxCredits} tín chỉ</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill" style="width: ${progressPercent}%;"></div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 12px; margin-top: 4px;">
              <span style="color: var(--md-on-surface-variant);">${progressPercent}% mục tiêu học kỳ</span>
              ${
                hasAnyConflict
                  ? `<span class="status-tag status-tag-error">${icon('alert', 12)} Có môn trùng lịch</span>`
                  : `<span class="status-tag status-tag-success">${icon('check', 12)} Không trùng lịch</span>`
              }
            </div>
          </div>

          ${
            hasAnyConflict
              ? `
                <div class="m3-banner m3-banner-error">
                  ${icon('alert', 20)}
                  <div>
                    <strong>Cảnh báo xung đột lịch!</strong>
                    <div>Môn <strong>DBI202 (SE1803)</strong> trùng với khung giờ bận Highlands – ca tối T3, T5 lúc 18:00–20:20. Vui lòng đổi lớp khác để có thể gửi đăng ký.</div>
                  </div>
                </div>
              `
              : ''
          }

          <div style="font-size: 14px; font-weight: 700; color: var(--md-on-surface); margin-bottom: 12px;">
            Danh sách môn nháp (${drafts.length})
          </div>

          <!-- Draft Items List -->
          <div class="plan-items-list">
            ${drafts.map(item => {
              const isConflict = item.hasClash || item.sectionCode === 'SE1803';

              return `
                <div class="plan-draft-item ${isConflict ? 'conflict' : ''}" data-code="${item.courseCode}">
                  <div style="flex: 1; padding-right: 8px;">
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 2px;">
                      <span class="course-code" style="font-size: 15px;">${item.courseCode}</span>
                      <span class="status-tag status-tag-neutral">${item.sectionCode}</span>
                      <span style="font-size: 12px; color: var(--md-on-surface-variant); font-weight: 600;">${item.credits} TC</span>
                    </div>

                    <div style="font-size: 13px; font-weight: 600; color: var(--md-on-surface); margin-bottom: 4px;">
                      ${item.name}
                    </div>

                    <div style="font-size: 12px; color: var(--md-on-surface-variant);">
                      ${icon('clock', 12)} ${item.days.join(', ')} · ${item.time} (${item.room})
                    </div>

                    ${
                      isConflict
                        ? `<div class="status-tag status-tag-error" style="margin-top: 6px;">
                            ${icon('alert', 12)} Trùng giờ bận Highlands ca tối
                          </div>`
                        : ''
                    }
                  </div>

                  <div style="display: flex; align-items: center; gap: 4px;">
                    <button class="m3-icon-btn btn-change-draft" data-code="${item.courseCode}" title="Đổi lớp khác">
                      ${icon('edit', 18)}
                    </button>
                    <button class="m3-icon-btn btn-delete-draft" data-code="${item.courseCode}" data-name="${item.name}" title="Xóa khỏi kế hoạch" style="color: var(--md-error);">
                      ${icon('trash', 18)}
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>

      <!-- Fixed Bottom Action Bar -->
      <footer class="fixed-bottom-bar" style="position: absolute; left: 0; right: 0; bottom: 0;">
        ${
          hasAnyConflict
            ? `
              <button class="m3-btn m3-btn-danger m3-btn-full" disabled title="Khóa gửi khi còn xung đột">
                ${icon('alert', 16)} Đang có lớp trùng lịch (Sửa để gửi)
              </button>
            `
            : drafts.length >= 5
            ? `
              <button id="s05-review-btn" class="m3-btn m3-btn-primary m3-btn-full">
                Xem lại & gửi đăng ký (${drafts.length} lớp)
              </button>
            `
            : `
              <button id="s05-find-more-btn" class="m3-btn m3-btn-tonal m3-btn-full">
                Tìm thêm môn (còn ${5 - drafts.length} môn)
              </button>
            `
        }
      </footer>
    `;

    // Events
    container.querySelector('#s05-add-more-header-btn')?.addEventListener('click', () => {
      navigateTo('S03');
    });

    container.querySelector('#s05-find-more-btn')?.addEventListener('click', () => {
      navigateTo('S03');
    });

    container.querySelector('#s05-review-btn')?.addEventListener('click', () => {
      navigateTo('S06');
    });

    // Change draft class
    container.querySelectorAll('.btn-change-draft').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const code = btn.getAttribute('data-code');
        navigateTo('S04', { selectedCourse: code, detailMode: 'normal' });
      });
    });

    // Delete draft item
    container.querySelectorAll('.btn-delete-draft').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const code = btn.getAttribute('data-code');
        const name = btn.getAttribute('data-name');
        const deletedItem = drafts.find(d => d.courseCode === code);

        showD3DeleteCourseDialog({
          courseCode: code,
          courseName: name,
          onProceed: () => {
            state.draftPlan = state.draftPlan.filter(d => d.courseCode !== code);

            // Show Snackbar with Hoàn tác
            showSnackbar(`Đã xóa ${code} khỏi kế hoạch`, {
              actionText: 'Hoàn tác',
              onAction: () => {
                if (deletedItem) {
                  state.draftPlan.push(deletedItem);
                  showSnackbar(`Đã khôi phục ${code} vào kế hoạch`);
                  update();
                }
              }
            });

            update();
          }
        });
      });
    });
  }

  update();
}
