// S04: Course Detail & Section Selection (Chi tiết môn & Chọn lớp)
import { state, COURSES_CATALOG, navigateTo, navigateBack } from '../state.js';
import { icon } from '../components/icons.js';
import { showD1ConflictDialog } from '../components/dialogs.js';
import { showSnackbar } from '../components/snackbar.js';

export function renderS04(container) {
  const courseCode = state.selectedCourseForDetail || 'DBI202';
  const course = COURSES_CATALOG.find(c => c.code === courseCode) || COURSES_CATALOG[1];
  const isRecoveryMode = state.detailMode === 'alt_recovery';

  // Section preselection
  let selectedSectionCode = isRecoveryMode ? 'SE1804' : (state.selectedSectionInDetail || (course.sections[0]?.code));

  function update() {
    let sectionsToDisplay = course.sections;

    if (isRecoveryMode) {
      // In recovery mode: only show compatible available sections: SE1804 (3/35) and SE1806 (8/35)
      sectionsToDisplay = course.sections.filter(s => s.code === 'SE1804' || s.code === 'SE1806');
    }

    container.innerHTML = `
      <!-- App Bar with Back -->
      <header class="m3-app-bar">
        <div class="m3-app-bar-left">
          <button id="s04-back-btn" class="m3-icon-btn" title="Quay lại">
            ${icon('arrowLeft', 20)}
          </button>
          <h1 class="m3-app-bar-title">Chi tiết môn</h1>
        </div>
      </header>

      <!-- Scrollable Content -->
      <div class="screen-root" style="padding-bottom: 96px;">
        <!-- Course Header -->
        <div class="course-detail-header">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
            <span class="course-code" style="font-size: 18px;">${course.code}</span>
            <span class="status-tag status-tag-neutral">${course.credits} tín chỉ</span>
          </div>
          <h2 style="font-size: 18px; font-weight: 700; color: var(--md-on-surface); margin-bottom: 8px;">
            ${course.name}
          </h2>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <span class="status-tag status-tag-success">
              ${icon('check', 12)} ${course.prerequisite}
            </span>
            ${isRecoveryMode ? '<span class="status-tag status-tag-warning">Chọn lớp thay thế</span>' : ''}
          </div>
        </div>

        <div class="screen-content">
          ${
            isRecoveryMode
              ? `
                <div class="m3-banner m3-banner-warning">
                  ${icon('alert', 18)}
                  <div>
                    <strong>Lớp SE1801 vừa hết chỗ!</strong>
                    <div>Hệ thống đã tự động lọc 2 lớp hợp lịch còn chỗ thay thế. Lựa chọn khuyến nghị: <strong>SE1804</strong>.</div>
                  </div>
                </div>
              `
              : ''
          }

          <div style="font-size: 14px; font-weight: 700; color: var(--md-on-surface); margin-bottom: 12px; display: flex; justify-content: space-between;">
            <span>Danh sách lớp học phần (${sectionsToDisplay.length})</span>
            <span style="font-weight: 500; font-size: 12px; color: var(--md-on-surface-variant);">Sức chứa 35 SV</span>
          </div>

          <!-- Section Cards List -->
          <div class="section-list">
            ${sectionsToDisplay.map(sec => {
              const isSelected = sec.code === selectedSectionCode;
              const isFull = sec.remaining === 0 || sec.isFull;
              const hasClash = !!sec.clashReason;

              return `
                <div
                  class="section-card ${isSelected ? 'selected' : ''} ${isFull ? 'disabled' : ''}"
                  data-section="${sec.code}"
                  data-clash="${hasClash ? 'true' : 'false'}"
                  data-full="${isFull ? 'true' : 'false'}"
                >
                  <div class="section-radio"></div>
                  <div class="section-card-info">
                    <div class="section-header-line">
                      <span class="section-code">${sec.code}</span>
                      ${
                        isFull
                          ? `<span class="status-tag status-tag-error">Hết chỗ (0/35)</span>`
                          : hasClash
                          ? `<span class="status-tag status-tag-busy">${icon('alert', 12)} Trùng giờ bận</span>`
                          : `<span class="status-tag status-tag-success">${icon('check', 12)} Hợp lịch</span>`
                      }
                    </div>

                    <div class="section-schedule">
                      ${icon('clock', 13)} ${sec.days.join(', ')} · ${sec.time}
                    </div>

                    <div class="section-details-line">
                      <span>${icon('mapPin', 12)} Phòng ${sec.room} · GV: ${sec.lecturer}</span>
                      <strong style="color: ${isFull ? 'var(--md-error)' : 'var(--md-on-surface)'};">
                        Còn ${sec.remaining}/35 chỗ
                      </strong>
                    </div>

                    ${
                      hasClash
                        ? `<div style="font-size: 11px; color: var(--md-busy-icon); margin-top: 4px; font-weight: 500;">
                            ⚠️ ${sec.clashReason}
                          </div>`
                        : ''
                    }
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>

      <!-- Fixed Bottom Action Bar -->
      <footer class="fixed-bottom-bar" style="position: absolute; left: 0; right: 0; bottom: 0;">
        <button
          id="s04-commit-btn"
          class="m3-btn m3-btn-primary m3-btn-full"
          ${!selectedSectionCode ? 'disabled' : ''}
        >
          ${
            isRecoveryMode
              ? `Đăng ký lớp thay thế ${selectedSectionCode}`
              : `Thêm lớp ${selectedSectionCode || ''} vào kế hoạch`
          }
        </button>
      </footer>
    `;

    // Events
    container.querySelector('#s04-back-btn')?.addEventListener('click', () => {
      navigateBack();
    });

    // Card selection
    container.querySelectorAll('.section-card').forEach(card => {
      card.addEventListener('click', () => {
        const secCode = card.getAttribute('data-section');
        const isFull = card.getAttribute('data-full') === 'true';
        const hasClash = card.getAttribute('data-clash') === 'true';

        if (isFull) {
          showSnackbar('Lớp này đã hết chỗ, vui lòng chọn lớp khác!');
          return;
        }

        if (hasClash) {
          // Trigger Dialog D1
          const sectionData = course.sections.find(s => s.code === secCode);
          showD1ConflictDialog({
            courseCode: course.code,
            sectionCode: secCode,
            busyName: 'Highlands – ca tối',
            timeInfo: `${sectionData.days.join(', ')} lúc ${sectionData.time}`,
            onProceed: () => {
              selectedSectionCode = secCode;
              update();
            }
          });
          return;
        }

        selectedSectionCode = secCode;
        update();
      });
    });

    // Commit Action Button
    container.querySelector('#s04-commit-btn')?.addEventListener('click', () => {
      const secData = course.sections.find(s => s.code === selectedSectionCode);
      if (!secData) return;

      if (isRecoveryMode) {
        // Recovery replacement: Update DBI in registeredCourses to SE1804
        state.registeredCourses = state.registeredCourses.map(item => {
          if (item.courseCode === 'DBI202') {
            return {
              ...item,
              sectionCode: 'SE1804',
              days: ['T2', 'T4'],
              time: '15:20–17:40',
              room: 'BE-105'
            };
          }
          return item;
        });

        // Also update draft plan
        state.draftPlan = state.draftPlan.map(item => {
          if (item.courseCode === 'DBI202') {
            return {
              ...item,
              sectionCode: 'SE1804',
              days: ['T2', 'T4'],
              time: '15:20–17:40',
              room: 'BE-105'
            };
          }
          return item;
        });

        // Navigate to Replacement Success Result
        navigateTo('S07', { registrationOutcome: 'replacement' });
        showSnackbar(`Đã đăng ký thành công lớp thay thế SE1804!`);
      } else {
        // Normal add to draft plan
        const existingIndex = state.draftPlan.findIndex(p => p.courseCode === course.code);
        const previousItem = existingIndex >= 0 ? state.draftPlan[existingIndex] : null;

        const newItem = {
          courseCode: course.code,
          sectionCode: secData.code,
          name: course.name,
          credits: course.credits,
          days: secData.days,
          time: secData.time,
          room: secData.room,
          hasClash: !!secData.clashReason
        };

        if (existingIndex >= 0) {
          state.draftPlan[existingIndex] = newItem;
        } else {
          state.draftPlan.push(newItem);
        }

        // Show Snackbar with Hoàn tác
        showSnackbar(`Đã thêm ${course.code} (${secData.code}) vào kế hoạch`, {
          actionText: 'Hoàn tác',
          onAction: () => {
            if (previousItem) {
              state.draftPlan[existingIndex] = previousItem;
            } else {
              state.draftPlan = state.draftPlan.filter(p => p.courseCode !== course.code);
            }
            showSnackbar(`Đã hoàn tác thao tác chọn lớp ${course.code}`);
            navigateTo('S04', { selectedCourse: course.code, force: true });
          }
        });

        navigateTo('S05');
      }
    });
  }

  update();
}
