// S01: Login Screen (Đăng nhập)
import { state, navigateTo, notify } from '../state.js';
import { icon } from '../components/icons.js';
import { showSnackbar } from '../components/snackbar.js';

export function renderS01(container) {
  let isPasswordVisible = false;
  let isLoading = false;
  let hasError = false;

  function update() {
    container.innerHTML = `
      <div class="s01-container">
        <div class="s01-brand">
          <div class="s01-logo">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              <polyline points="10 9 14 13 18 9"></polyline>
            </svg>
          </div>
          <h1 class="s01-title">Semester</h1>
          <p class="s01-subtitle">Lên lịch học kỳ, chọn lớp phù hợp.</p>
        </div>

        <div class="s01-card">
          <form id="s01-form" novalidate>
            <div class="m3-field-group">
              <label class="m3-field-label" for="mssv-input">Mã số sinh viên</label>
              <div class="m3-input-wrapper">
                <input
                  type="text"
                  id="mssv-input"
                  class="m3-input ${hasError ? 'has-error' : ''}"
                  placeholder="VD: SE180123"
                  value="SE180123"
                  autocomplete="username"
                  ${isLoading ? 'disabled' : ''}
                />
              </div>
            </div>

            <div class="m3-field-group">
              <label class="m3-field-label" for="password-input">Mật khẩu</label>
              <div class="m3-input-wrapper">
                <input
                  type="${isPasswordVisible ? 'text' : 'password'}"
                  id="password-input"
                  class="m3-input ${hasError ? 'has-error' : ''}"
                  placeholder="Nhập mật khẩu"
                  value="student123"
                  autocomplete="current-password"
                  ${isLoading ? 'disabled' : ''}
                />
                <button
                  type="button"
                  id="toggle-pw-btn"
                  class="m3-input-icon-end"
                  aria-label="${isPasswordVisible ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}"
                  ${isLoading ? 'disabled' : ''}
                >
                  ${isPasswordVisible ? icon('eyeOff', 18) : icon('eye', 18)}
                </button>
              </div>
              ${
                hasError
                  ? `<div class="m3-field-helper error-text">${icon('alert', 14)} Mã số sinh viên hoặc mật khẩu chưa đúng.</div>`
                  : ''
              }
            </div>

            <div style="margin-top: 24px;">
              <button
                type="submit"
                id="login-submit-btn"
                class="m3-btn m3-btn-primary m3-btn-full"
                ${isLoading ? 'disabled' : ''}
              >
                ${
                  isLoading
                    ? `<span class="spinner"></span> Đang đăng nhập…`
                    : `Đăng nhập`
                }
              </button>
            </div>
          </form>

          <div class="s01-demo-hint">
            <strong>Mẹo đánh giá:</strong> Tài khoản demo sinh viên persona <code>SE180123</code> (Trần Gia Hân · KTPM Kỳ 4). Bấm Đăng nhập để vào ứng dụng.
          </div>
        </div>
      </div>
    `;

    // Events
    const form = container.querySelector('#s01-form');
    const mssvInput = container.querySelector('#mssv-input');
    const pwInput = container.querySelector('#password-input');
    const togglePwBtn = container.querySelector('#toggle-pw-btn');

    togglePwBtn?.addEventListener('click', () => {
      isPasswordVisible = !isPasswordVisible;
      update();
    });

    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const mssv = mssvInput.value.trim();
      const pw = pwInput.value.trim();

      if (!mssv || !pw) {
        hasError = true;
        update();
        return;
      }

      isLoading = true;
      hasError = false;
      update();

      setTimeout(() => {
        isLoading = false;
        state.isLoggedIn = true;
        showSnackbar(`Chào mừng bạn Trần Gia Hân (SE180123)!`);
        navigateTo('S02');
      }, 700);
    });
  }

  update();
}
