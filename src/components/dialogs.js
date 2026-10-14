// Dialog Overlay Management (D1 - D6)
import { icon } from './icons.js';

let dialogOverlayEl = null;
let dialogContentEl = null;

export function initDialogs() {
  dialogOverlayEl = document.getElementById('dialog-overlay');
  dialogContentEl = document.getElementById('dialog-content');

  // Backdrop click dismisses non-critical dialogs
  dialogOverlayEl.addEventListener('click', (e) => {
    if (e.target === dialogOverlayEl) {
      closeDialog();
    }
  });
}

export function closeDialog() {
  if (dialogOverlayEl) {
    dialogOverlayEl.classList.add('hidden');
    dialogOverlayEl.setAttribute('aria-hidden', 'true');
    dialogContentEl.innerHTML = '';
  }
}

export function showDialog({ iconType = 'primary', title, body, confirmText, cancelText = 'Hủy', onConfirm, onCancel, isDanger = false }) {
  if (!dialogOverlayEl || !dialogContentEl) return;

  const iconHtml = iconType === 'danger'
    ? `<div class="dialog-icon danger">${icon('alert', 22)}</div>`
    : iconType === 'warning'
    ? `<div class="dialog-icon warning">${icon('alert', 22)}</div>`
    : `<div class="dialog-icon primary">${icon('check', 22)}</div>`;

  dialogContentEl.innerHTML = `
    ${iconHtml}
    <h3 class="dialog-title">${title}</h3>
    <div class="dialog-body">${body}</div>
    <div class="dialog-actions">
      ${cancelText ? `<button id="dialog-cancel-btn" class="m3-btn m3-btn-text">${cancelText}</button>` : ''}
      <button id="dialog-confirm-btn" class="m3-btn ${isDanger ? 'm3-btn-danger' : 'm3-btn-primary'}">${confirmText}</button>
    </div>
  `;

  document.getElementById('dialog-cancel-btn')?.addEventListener('click', () => {
    closeDialog();
    if (onCancel) onCancel();
  });

  document.getElementById('dialog-confirm-btn')?.addEventListener('click', () => {
    closeDialog();
    if (onConfirm) onConfirm();
  });

  dialogOverlayEl.classList.remove('hidden');
  dialogOverlayEl.setAttribute('aria-hidden', 'false');
}

// Dialog D1: Conflict Warning
export function showD1ConflictDialog({ courseCode, sectionCode, busyName, timeInfo, onProceed }) {
  showDialog({
    iconType: 'warning',
    title: 'Lớp này trùng giờ bận',
    body: `<strong>${courseCode} · ${sectionCode}</strong> học lúc ${timeInfo}, trùng với khung giờ bận <strong>${busyName}</strong>. Bạn vẫn muốn thêm lớp này vào kế hoạch?`,
    cancelText: 'Chọn lớp khác',
    confirmText: 'Vẫn thêm',
    onConfirm: onProceed
  });
}

// Dialog D2: Confirm Submit
export function showD2SubmitDialog({ count = 5, credits = 15, onProceed }) {
  showDialog({
    iconType: 'primary',
    title: `Gửi đăng ký ${count} lớp?`,
    body: `Bạn đang gửi đăng ký <strong>${count} lớp học phần · ${credits} tín chỉ</strong>. Vui lòng kiểm tra kỹ các thông tin trước khi xác nhận.`,
    cancelText: 'Để sau',
    confirmText: 'Gửi đăng ký',
    onConfirm: onProceed
  });
}

// Dialog D3: Delete Course from Plan
export function showD3DeleteCourseDialog({ courseCode, courseName, onProceed }) {
  showDialog({
    iconType: 'danger',
    title: `Xóa ${courseCode} khỏi kế hoạch?`,
    body: `Môn <strong>${courseName}</strong> sẽ bị xóa khỏi bản nháp. Bạn có thể hoàn tác ngay sau khi xóa.`,
    cancelText: 'Hủy',
    confirmText: 'Xóa môn',
    isDanger: true,
    onConfirm: onProceed
  });
}

// Dialog D4: Delete Busy Time
export function showD4DeleteBusyDialog({ busyName, onProceed }) {
  showDialog({
    iconType: 'danger',
    title: 'Xóa giờ bận này?',
    body: `Khung giờ bận <strong>${busyName}</strong> sẽ bị xóa. Lịch và các tính năng kiểm tra trùng giờ sẽ được cập nhật lại.`,
    cancelText: 'Hủy',
    confirmText: 'Xóa',
    isDanger: true,
    onConfirm: onProceed
  });
}

// Dialog D5: Confirm Logout
export function showD5LogoutDialog({ onProceed }) {
  showDialog({
    iconType: 'warning',
    title: 'Đăng xuất khỏi Semester?',
    body: 'Bạn sẽ cần đăng nhập lại với MSSV để tiếp tục lên lịch học kỳ.',
    cancelText: 'Hủy',
    confirmText: 'Đăng xuất',
    isDanger: true,
    onConfirm: onProceed
  });
}

// Dialog D6: Discard Unsaved Form Changes
export function showD6DirtyFormDialog({ onProceed, onContinue }) {
  showDialog({
    iconType: 'warning',
    title: 'Bỏ thay đổi chưa lưu?',
    body: 'Các thông tin giờ bận bạn vừa nhập chưa được lưu. Bạn có chắc chắn muốn thoát?',
    cancelText: 'Tiếp tục nhập',
    confirmText: 'Bỏ thay đổi',
    isDanger: true,
    onCancel: onContinue,
    onConfirm: onProceed
  });
}
