// Snackbar / Toast Notification with Undo Action
let snackbarEl = null;
let snackbarTextEl = null;
let snackbarActionBtn = null;
let dismissTimer = null;

export function initSnackbar() {
  snackbarEl = document.getElementById('global-snackbar');
  snackbarTextEl = document.getElementById('snackbar-text');
  snackbarActionBtn = document.getElementById('snackbar-action');
}

export function showSnackbar(message, { actionText = 'Hoàn tác', onAction = null, duration = 4500 } = {}) {
  if (!snackbarEl) return;

  clearTimeout(dismissTimer);

  snackbarTextEl.textContent = message;

  if (onAction) {
    snackbarActionBtn.textContent = actionText;
    snackbarActionBtn.classList.remove('hidden');
    snackbarActionBtn.onclick = () => {
      hideSnackbar();
      onAction();
    };
  } else {
    snackbarActionBtn.classList.add('hidden');
    snackbarActionBtn.onclick = null;
  }

  snackbarEl.classList.remove('hidden');

  dismissTimer = setTimeout(() => {
    hideSnackbar();
  }, duration);
}

export function hideSnackbar() {
  if (snackbarEl) {
    snackbarEl.classList.add('hidden');
  }
}
