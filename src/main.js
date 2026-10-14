// Main Entry Point for Semester — Student Course Planner
import { state, subscribe, navigateTo, loadFlow } from './state.js';
import { initDialogs } from './components/dialogs.js';
import { initSnackbar } from './components/snackbar.js';

// Screens
import { renderS01 } from './screens/s01_login.js';
import { renderS02 } from './screens/s02_timetable.js';
import { renderS03 } from './screens/s03_search.js';
import { renderS04 } from './screens/s04_detail.js';
import { renderS05 } from './screens/s05_plan.js';
import { renderS06 } from './screens/s06_review.js';
import { renderS07 } from './screens/s07_results.js';
import { renderS08 } from './screens/s08_profile.js';
import { renderS09 } from './screens/s09_busy.js';
import { renderS10 } from './screens/s10_edit_busy.js';

document.addEventListener('DOMContentLoaded', () => {
  const screenRoot = document.getElementById('screen-root');
  const bottomNav = document.getElementById('bottom-nav');
  const planBadgeCount = document.getElementById('plan-badge-count');
  const phoneContainer = document.getElementById('phone-container');
  const infoDrawer = document.getElementById('info-drawer');
  const btnToggleInfo = document.getElementById('btn-toggle-info');
  const btnCloseDrawer = document.getElementById('btn-close-drawer');
  const quickScreenSelect = document.getElementById('quick-screen-select');

  // Initialize dialogs and snackbar
  initDialogs();
  initSnackbar();

  // Top level screens that show the bottom nav bar
  const TOP_LEVEL_SCREENS = ['S02', 'S03', 'S05', 'S08'];

  function renderCurrentScreen() {
    const cur = state.currentScreen;

    // Manage Bottom Nav visibility
    if (TOP_LEVEL_SCREENS.includes(cur)) {
      bottomNav.classList.remove('hidden');

      // Update active nav item
      document.querySelectorAll('.nav-item').forEach(btn => {
        const targetScreen = btn.getAttribute('data-screen');
        btn.classList.toggle('active', targetScreen === cur);
      });

      // Update badge on Plan
      if (state.draftPlan.length > 0) {
        planBadgeCount.textContent = state.draftPlan.length;
        planBadgeCount.classList.remove('hidden');
      } else {
        planBadgeCount.classList.add('hidden');
      }
    } else {
      bottomNav.classList.add('hidden');
    }

    // Sync screen selector
    if (quickScreenSelect) {
      quickScreenSelect.value = cur;
    }

    // Scroll to top on screen change
    screenRoot.scrollTop = 0;

    // Render screen
    switch (cur) {
      case 'S01':
        renderS01(screenRoot);
        break;
      case 'S02':
        renderS02(screenRoot);
        break;
      case 'S03':
        renderS03(screenRoot);
        break;
      case 'S04':
        renderS04(screenRoot);
        break;
      case 'S05':
        renderS05(screenRoot);
        break;
      case 'S06':
        renderS06(screenRoot);
        break;
      case 'S07':
        renderS07(screenRoot);
        break;
      case 'S08':
        renderS08(screenRoot);
        break;
      case 'S09':
        renderS09(screenRoot);
        break;
      case 'S10':
        renderS10(screenRoot);
        break;
      default:
        renderS02(screenRoot);
    }
  }

  // Subscribe to state changes
  subscribe(() => {
    renderCurrentScreen();
  });

  // Bottom Navigation tabs click
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetScreen = btn.getAttribute('data-screen');
      navigateTo(targetScreen);
    });
  });

  // Top Dock: Flow Selector buttons
  document.querySelectorAll('.flow-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.flow-pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const flow = btn.getAttribute('data-flow');
      loadFlow(flow);
    });
  });

  // Screen Selector dropdown
  quickScreenSelect?.addEventListener('change', (e) => {
    if (e.target.value) {
      navigateTo(e.target.value);
    }
  });

  // Viewport Switcher
  document.querySelectorAll('.vp-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.vp-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const vp = btn.getAttribute('data-vp');
      phoneContainer.className = `phone-container vp-${vp}`;
    });
  });

  // Info Drawer toggling
  btnToggleInfo?.addEventListener('click', () => {
    infoDrawer.classList.toggle('open');
  });
  btnCloseDrawer?.addEventListener('click', () => {
    infoDrawer.classList.remove('open');
  });

  // Initial render
  renderCurrentScreen();
});
