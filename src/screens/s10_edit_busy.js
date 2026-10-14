// S10: Add / Edit Busy Time Screen (Thêm / Sửa giờ bận)
import { state, navigateTo, navigateBack } from '../state.js';
import { icon } from '../components/icons.js';
import { showD6DirtyFormDialog } from '../components/dialogs.js';
import { showSnackbar } from '../components/snackbar.js';

export function renderS10(container) {
  const isEditing = !!state.editingBusyId;
  const existingItem = isEditing ? state.busyTimes.find(b => b.id === state.editingBusyId) : null;

  let busyName = existingItem ? existingItem.name : '';
  let selectedDays = existingItem ? [...existingItem.days] : ['T3', 'T5', 'T6'];
  let startTime = existingItem ? existingItem.start : '18:00';
  let endTime = existingItem ? existingItem.end : '22:00';
  let isDirty = false;

  const weekdays = [
    { key: 'T2', label: 'T2' },
    { key: 'T3', label: 'T3' },
    { key: 'T4', label: 'T4' },
    { key: 'T5', label: 'T5' },
    { key: 'T6', label: 'T6' },
    { key: 'T7', label: 'T7' },
    { key: 'CN', label: 'CN' }
  ];

  function validate() {
    const hasName = busyName.trim().length > 0;
    const hasDays = selectedDays.length > 0;

    const [sh, sm] = startTime.split(':').map(Number);
    const [eh, em] = endTime.split(':').map(Number);
    const startMins = sh * 60 + sm;
    const endMins = eh * 60 + em;
    const isTimeValid = endMins > startMins;

    return {
      isValid: hasName && hasDays && isTimeValid,
      isTimeValid,
      hasName,
      hasDays
    };
  }

  function update() {
    const v = validate();

    container.innerHTML = `
      <!-- App Bar with Safe Back -->
      <header class="m3-app-bar">
        <div class="m3-app-bar-left">
          <button id="s10-back-btn" class="m3-icon-btn" title="Quay lại">
            ${icon('arrowLeft', 20)}
          </button>
          <h1 class="m3-app-bar-title">${isEditing ? 'Sửa giờ bận' : 'Thêm giờ bận'}</h1>
        </div>
      </header>

      <div class="screen-root" style="padding-bottom: 96px;">
        <div class="screen-content">
          <form id="s10-form" novalidate>
            <!-- Name Input -->
            <div class="m3-field-group">
              <label class="m3-field-label" for="s10-name-input">
                <span>Tên giờ bận</span>
                <span id="name-counter" class="m3-field-counter">${busyName.length}/40</span>
              </label>
              <div class="m3-input-wrapper">
                <input
                  type="text"
                  id="s10-name-input"
                  class="m3-input"
                  placeholder="VD: Highlands – ca tối"
                  maxlength="40"
                  value="${busyName}"
                />
              </div>
              <div class="m3-field-helper">
                Khung giờ này giúp hệ thống tự động tránh chọn lớp trùng lịch.
              </div>
            </div>

            <!-- Repeat Days -->
            <div class="m3-field-group" style="margin-top: 8px;">
              <label class="m3-field-label">Lặp lại vào các ngày</label>
              <div class="weekday-chip-grid">
                ${weekdays.map(d => {
                  const isActive = selectedDays.includes(d.key);
                  return `
                    <button
                      type="button"
                      class="weekday-chip ${isActive ? 'active' : ''}"
                      data-day="${d.key}"
                    >
                      ${d.label}
                    </button>
                  `;
                }).join('')}
              </div>
              ${
                !v.hasDays
                  ? `<div class="m3-field-helper error-text">${icon('alert', 12)} Chọn ít nhất một ngày trong tuần</div>`
                  : ''
              }
            </div>

            <!-- Time Pickers -->
            <div style="display: flex; gap: 12px; margin-top: 8px;">
              <div class="m3-field-group" style="flex: 1;">
                <label class="m3-field-label" for="s10-start-time">Bắt đầu</label>
                <div class="m3-input-wrapper">
                  <input
                    type="time"
                    id="s10-start-time"
                    class="m3-input"
                    value="${startTime}"
                  />
                </div>
              </div>

              <div class="m3-field-group" style="flex: 1;">
                <label class="m3-field-label" for="s10-end-time">Kết thúc</label>
                <div class="m3-input-wrapper">
                  <input
                    type="time"
                    id="s10-end-time"
                    class="m3-input ${!v.isTimeValid ? 'has-error' : ''}"
                    value="${endTime}"
                  />
                </div>
              </div>
            </div>

            ${
              !v.isTimeValid
                ? `
                  <div class="m3-banner m3-banner-error" style="margin-top: -6px;">
                    ${icon('alert', 16)}
                    <div>
                      <strong>Giờ kết thúc phải sau giờ bắt đầu</strong>
                      <div style="font-size: 11px;">Vui lòng điều chỉnh để giờ kết thúc lớn hơn giờ bắt đầu (${startTime}).</div>
                    </div>
                  </div>
                `
                : ''
            }

            <div class="s01-demo-hint" style="margin-top: 12px;">
              <strong>Mẹo demo:</strong>
              <div>• <strong>B01:</strong> Highlands – ca tối (T3, T5, T6 · 18:00–22:00)</div>
              <div>• <strong>B02:</strong> Highlands – ca sáng (CN · 07:00–12:00)</div>
              <div>• Thử nhập giờ kết thúc sớm hơn giờ bắt đầu (VD: 18:00) để kiểm tra nhánh lỗi xác thực form!</div>
            </div>
          </form>
        </div>
      </div>

      <!-- Fixed Bottom Action Bar -->
      <footer class="fixed-bottom-bar" style="position: absolute; left: 0; right: 0; bottom: 0;">
        <button
          id="s10-save-btn"
          class="m3-btn m3-btn-primary m3-btn-full"
          ${!v.isValid ? 'disabled' : ''}
        >
          ${isEditing ? 'Lưu thay đổi' : 'Lưu giờ bận'}
        </button>
      </footer>
    `;

    // Events
    const nameInput = container.querySelector('#s10-name-input');
    const startTimeInput = container.querySelector('#s10-start-time');
    const endTimeInput = container.querySelector('#s10-end-time');

    nameInput?.addEventListener('input', (e) => {
      busyName = e.target.value;
      isDirty = true;
      const counter = container.querySelector('#name-counter');
      if (counter) counter.textContent = `${busyName.length}/40`;
      const saveBtn = container.querySelector('#s10-save-btn');
      if (saveBtn) saveBtn.disabled = !validate().isValid;
    });

    startTimeInput?.addEventListener('change', (e) => {
      startTime = e.target.value;
      isDirty = true;
      update();
    });

    endTimeInput?.addEventListener('change', (e) => {
      endTime = e.target.value;
      isDirty = true;
      update();
    });

    container.querySelectorAll('.weekday-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const day = chip.getAttribute('data-day');
        if (selectedDays.includes(day)) {
          selectedDays = selectedDays.filter(d => d !== day);
        } else {
          selectedDays.push(day);
        }
        isDirty = true;
        update();
      });
    });

    // Back button with D6 Dirty form check
    container.querySelector('#s10-back-btn')?.addEventListener('click', () => {
      if (isDirty) {
        showD6DirtyFormDialog({
          onProceed: () => {
            navigateBack();
          }
        });
      } else {
        navigateBack();
      }
    });

    // Save Action
    container.querySelector('#s10-save-btn')?.addEventListener('click', () => {
      if (!validate().isValid) return;

      const timeRangeStr = `${startTime}–${endTime}`;
      const slotsCount = selectedDays.length;

      if (isEditing && existingItem) {
        existingItem.name = busyName.trim();
        existingItem.days = selectedDays;
        existingItem.start = startTime;
        existingItem.end = endTime;
        existingItem.time = timeRangeStr;
        existingItem.slotsPerWeek = slotsCount;
        showSnackbar(`Đã cập nhật giờ bận "${existingItem.name}"`);
      } else {
        const newId = `B0${state.busyTimes.length + 1}`;
        state.busyTimes.push({
          id: newId,
          name: busyName.trim(),
          days: selectedDays,
          start: startTime,
          end: endTime,
          time: timeRangeStr,
          slotsPerWeek: slotsCount
        });
        showSnackbar(`Đã thêm giờ bận "${busyName.trim()}" (${slotsCount} khung/tuần)`);
      }

      navigateTo('S09');
    });
  }

  update();
}
