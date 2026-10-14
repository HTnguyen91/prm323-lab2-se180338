// S09: Personal Busy Times List (Giờ bận cá nhân)
import { state, navigateTo, navigateBack, getBusySlotsCount } from '../state.js';
import { icon } from '../components/icons.js';
import { showD4DeleteBusyDialog } from '../components/dialogs.js';
import { showSnackbar } from '../components/snackbar.js';

export function renderS09(container) {
  const busyList = state.busyTimes;
  const totalSlots = getBusySlotsCount();

  function update() {
    let contentHtml = '';

    if (busyList.length === 0) {
      contentHtml = `
        <div class="empty-state-view">
          <div class="empty-state-icon" style="color: var(--md-busy-icon);">
            ${icon('clock', 36)}
          </div>
          <h2 class="empty-state-title">Chưa có giờ bận nào</h2>
          <p class="empty-state-desc">Khai báo thời gian bạn không thể học (như ca làm thêm, việc cá nhân) để hệ thống tự động tìm lớp phù hợp.</p>
          <button id="s09-add-busy-empty-btn" class="m3-btn m3-btn-primary">
            ${icon('plus', 18)} Thêm giờ bận
          </button>
        </div>
      `;
    } else {
      contentHtml = `
        <div class="m3-banner m3-banner-info" style="margin-bottom: 16px;">
          ${icon('clock', 18)}
          <div>
            <strong>Ràng buộc xếp lớp thông minh</strong>
            <div>Các khung giờ này sẽ được dùng để cảnh báo khi lớp học phần bị trùng lịch với công việc của bạn.</div>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <span style="font-size: 14px; font-weight: 700; color: var(--md-on-surface);">
            Danh sách khung giờ bận
          </span>
          <span class="status-tag status-tag-busy">
            ${busyList.length} mục · ${totalSlots} khung giờ/tuần
          </span>
        </div>

        <div class="busy-list" style="padding-bottom: 84px;">
          ${busyList.map(item => `
            <div class="busy-item-card" data-id="${item.id}">
              <div style="flex: 1; padding-right: 8px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <strong style="font-size: 15px; color: var(--md-on-surface);">${item.name}</strong>
                  <span class="status-tag status-tag-neutral">${item.slotsPerWeek} khung/tuần</span>
                </div>
                <div style="font-size: 13px; color: var(--md-on-surface-variant); margin-top: 4px;">
                  ${icon('calendar', 12)} ${item.days.join(', ')}
                </div>
                <div class="busy-time-tag">
                  ${icon('clock', 12)} ${item.time}
                </div>
              </div>

              <div style="display: flex; align-items: center; gap: 4px;">
                <button class="m3-icon-btn btn-edit-busy" data-id="${item.id}" title="Chỉnh sửa">
                  ${icon('edit', 18)}
                </button>
                <button class="m3-icon-btn btn-delete-busy" data-id="${item.id}" data-name="${item.name}" title="Xóa" style="color: var(--md-error);">
                  ${icon('trash', 18)}
                </button>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Extended FAB -->
        <button id="s09-add-busy-fab" class="m3-fab" title="Thêm khung giờ bận mới">
          ${icon('plus', 20)}
          <span>Thêm giờ bận</span>
        </button>
      `;
    }

    container.innerHTML = `
      <!-- App Bar with Back -->
      <header class="m3-app-bar">
        <div class="m3-app-bar-left">
          <button id="s09-back-btn" class="m3-icon-btn" title="Quay lại">
            ${icon('arrowLeft', 20)}
          </button>
          <h1 class="m3-app-bar-title">Giờ bận</h1>
        </div>
      </header>

      <div class="screen-root">
        <div class="screen-content">
          ${contentHtml}
        </div>
      </div>
    `;

    // Events
    container.querySelector('#s09-back-btn')?.addEventListener('click', () => {
      navigateBack();
    });

    container.querySelector('#s09-add-busy-fab')?.addEventListener('click', () => {
      navigateTo('S10', { editingBusyId: null });
    });

    container.querySelector('#s09-add-busy-empty-btn')?.addEventListener('click', () => {
      navigateTo('S10', { editingBusyId: null });
    });

    // Edit item
    container.querySelectorAll('.btn-edit-busy').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        navigateTo('S10', { editingBusyId: id });
      });
    });

    // Delete item
    container.querySelectorAll('.btn-delete-busy').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const name = btn.getAttribute('data-name');
        const deletedItem = busyList.find(b => b.id === id);

        showD4DeleteBusyDialog({
          busyName: name,
          onProceed: () => {
            state.busyTimes = state.busyTimes.filter(b => b.id !== id);

            showSnackbar(`Đã xóa giờ bận "${name}"`, {
              actionText: 'Hoàn tác',
              onAction: () => {
                if (deletedItem) {
                  state.busyTimes.push(deletedItem);
                  showSnackbar(`Đã khôi phục "${name}"`);
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
