// S03: Course Search Screen (Tìm môn)
import { state, COURSES_CATALOG, navigateTo } from '../state.js';
import { icon } from '../components/icons.js';

export function renderS03(container) {
  let searchQuery = '';
  let filterClash = true;
  let filterSeats = true;

  function renderList() {
    const searchInput = container.querySelector('#search-input');
    const chipClash = container.querySelector('#chip-filter-clash');
    const chipSeats = container.querySelector('#chip-filter-seats');
    const listContainer = container.querySelector('#course-list-container');
    const resultsCountEl = container.querySelector('#search-results-count');

    // Filter courses by search query
    let filtered = COURSES_CATALOG.filter(c => {
      const q = searchQuery.toLowerCase().trim();
      return c.code.toLowerCase().includes(q) || c.name.toLowerCase().includes(q);
    });

    if (filtered.length === 0) {
      resultsCountEl.textContent = `0 kết quả cho "${searchQuery}"`;
      listContainer.innerHTML = `
        <div class="empty-state-view" style="padding-top: 24px;">
          <div class="empty-state-icon">
            ${icon('search', 32)}
          </div>
          <h2 class="empty-state-title">Không tìm thấy môn này</h2>
          <p class="empty-state-desc">Kiểm tra mã môn hoặc thử từ khóa khác (ví dụ: DBI202, PRM323).</p>
          <button id="btn-clear-search" class="m3-btn m3-btn-tonal">
            ${icon('x', 16)} Xóa từ khóa
          </button>
        </div>
      `;
      container.querySelector('#btn-clear-search')?.addEventListener('click', () => {
        searchQuery = '';
        searchInput.value = '';
        renderList();
      });
      return;
    }

    if (searchQuery.trim()) {
      resultsCountEl.textContent = `${filtered.length} kết quả cho "${searchQuery}"`;
    } else {
      resultsCountEl.textContent = `Gợi ý ${filtered.length} môn học kỳ 4`;
    }

    listContainer.innerHTML = filtered.map(c => {
      // Calculate compatible & available section counts
      const availableSections = c.sections.filter(s => s.remaining > 0);
      const compatibleSections = availableSections.filter(s => !s.clashReason);

      // Check if already in draft plan
      const inDraft = state.draftPlan.some(p => p.courseCode === c.code);
      const inRegistered = state.registeredCourses.some(p => p.courseCode === c.code);

      let statusBadge = '';
      if (inRegistered) {
        statusBadge = `<span class="status-tag status-tag-success">${icon('check', 12)} Đã đăng ký</span>`;
      } else if (inDraft) {
        statusBadge = `<span class="status-tag status-tag-warning">Đã có trong kế hoạch</span>`;
      }

      return `
        <div class="m3-card m3-card-interactive course-card" data-code="${c.code}">
          <div class="course-card-header">
            <div>
              <div class="course-code">${c.code}</div>
              <div class="course-credits">${c.credits} tín chỉ · ${c.prerequisite}</div>
            </div>
            ${statusBadge}
          </div>

          <h3 class="course-title">${c.name}</h3>

          <div class="course-meta-row">
            <span><strong>${c.sections.length}</strong> lớp mở · <strong style="color: var(--md-success);">${compatibleSections.length}</strong> hợp lịch còn chỗ</span>
            <span style="color: var(--md-primary); font-weight: 600; display: flex; align-items: center; gap: 2px;">
              Xem lớp ${icon('chevronRight', 16)}
            </span>
          </div>
        </div>
      `;
    }).join('');

    // Attach card clicks
    listContainer.querySelectorAll('.course-card').forEach(card => {
      card.addEventListener('click', () => {
        const code = card.getAttribute('data-code');
        navigateTo('S04', { selectedCourse: code, detailMode: 'normal' });
      });
    });
  }

  container.innerHTML = `
    <!-- App Bar -->
    <header class="m3-app-bar">
      <div class="m3-app-bar-left">
        <h1 class="m3-app-bar-title">Tìm môn</h1>
      </div>
    </header>

    <div class="screen-content" style="padding-bottom: 84px;">
      <!-- Search Input -->
      <div class="m3-field-group s03-search-bar">
        <div class="m3-input-wrapper">
          <input
            type="text"
            id="search-input"
            class="m3-input"
            placeholder="Nhập mã hoặc tên môn (VD: DBI202)"
            value="${searchQuery}"
            autocomplete="off"
          />
          <button id="btn-input-clear" class="m3-input-icon-end" title="Xóa tìm kiếm">
            ${icon('x', 18)}
          </button>
        </div>
      </div>

      <!-- Filter Chips -->
      <div class="m3-chip-group">
        <button id="chip-filter-clash" class="m3-chip ${filterClash ? 'selected' : ''}">
          ${filterClash ? icon('check', 14) : ''} Hợp lịch của tôi
        </button>
        <button id="chip-filter-seats" class="m3-chip ${filterSeats ? 'selected' : ''}">
          ${filterSeats ? icon('check', 14) : ''} Còn chỗ
        </button>
        <span class="m3-chip" style="background: var(--md-surface-dim); cursor: default;">
          Kỳ 4 · KTPM
        </span>
      </div>

      <!-- Results Header -->
      <div id="search-results-count" style="font-size: 13px; font-weight: 600; color: var(--md-on-surface-variant); margin-bottom: 12px;"></div>

      <!-- List Container -->
      <div id="course-list-container"></div>
    </div>
  `;

  const searchInput = container.querySelector('#search-input');
  const clearBtn = container.querySelector('#btn-input-clear');
  const chipClash = container.querySelector('#chip-filter-clash');
  const chipSeats = container.querySelector('#chip-filter-seats');

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderList();
  });

  clearBtn.addEventListener('click', () => {
    searchQuery = '';
    searchInput.value = '';
    searchInput.focus();
    renderList();
  });

  chipClash.addEventListener('click', () => {
    filterClash = !filterClash;
    chipClash.classList.toggle('selected', filterClash);
    chipClash.innerHTML = `${filterClash ? icon('check', 14) : ''} Hợp lịch của tôi`;
    renderList();
  });

  chipSeats.addEventListener('click', () => {
    filterSeats = !filterSeats;
    chipSeats.classList.toggle('selected', filterSeats);
    chipSeats.innerHTML = `${filterSeats ? icon('check', 14) : ''} Còn chỗ`;
    renderList();
  });

  renderList();
}
