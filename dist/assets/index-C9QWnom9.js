(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{code:`PRM323`,name:`Phát triển ứng dụng đa nền tảng`,credits:3,prerequisite:`PRF192 · Đã hoàn thành`,prereqPassed:!0,sections:[{code:`SE1802`,days:[`T2`,`T4`],time:`07:30–09:50`,room:`BE-204`,lecturer:`Chưa cập nhật`,remaining:12,capacity:35},{code:`SE1808`,days:[`T3`,`T5`],time:`07:30–09:50`,room:`BE-205`,lecturer:`Chưa cập nhật`,remaining:6,capacity:35}]},{code:`DBI202`,name:`Cơ sở dữ liệu`,credits:3,prerequisite:`Không có môn tiên quyết trong demo`,prereqPassed:!0,sections:[{code:`SE1801`,days:[`T2`,`T4`],time:`10:00–12:20`,room:`BE-301`,lecturer:`Phạm Q.`,remaining:12,capacity:35},{code:`SE1803`,days:[`T3`,`T5`],time:`18:00–20:20`,room:`AL-201`,lecturer:`Đỗ T.`,remaining:20,capacity:35,clashReason:`Trùng giờ bận Highlands – ca tối T3, T5`},{code:`SE1804`,days:[`T2`,`T4`],time:`15:20–17:40`,room:`BE-105`,lecturer:`Lý H.`,remaining:3,capacity:35},{code:`SE1806`,days:[`T6`,`T7`],time:`07:30–09:50`,room:`DE-102`,lecturer:`Mai N.`,remaining:8,capacity:35},{code:`SE1802`,days:[`T2`,`T4`],time:`07:30–09:50`,room:`BE-302`,lecturer:`Chưa cập nhật`,remaining:0,capacity:35,isFull:!0},{code:`SE1805`,days:[`T3`,`T5`],time:`10:00–12:20`,room:`AL-202`,lecturer:`Chưa cập nhật`,remaining:0,capacity:35,isFull:!0}]},{code:`SWD392`,name:`Kiến trúc và thiết kế phần mềm`,credits:3,prerequisite:`Không yêu cầu trong demo`,prereqPassed:!0,sections:[{code:`SE1805`,days:[`T3`,`T5`],time:`12:50–15:10`,room:`AL-402`,lecturer:`Chưa cập nhật`,remaining:10,capacity:35}]},{code:`MAS291`,name:`Xác suất thống kê`,credits:3,prerequisite:`Không yêu cầu trong demo`,prereqPassed:!0,sections:[{code:`SE1807`,days:[`T3`,`T6`],time:`10:00–12:20`,room:`AL-105`,lecturer:`Chưa cập nhật`,remaining:7,capacity:35}]},{code:`JPD123`,name:`Tiếng Nhật`,credits:3,prerequisite:`Không yêu cầu trong demo`,prereqPassed:!0,sections:[{code:`SE1803`,days:[`T6`,`T7`],time:`15:20–17:40`,room:`DE-210`,lecturer:`Chưa cập nhật`,remaining:9,capacity:35}]}],t=[{id:`B01`,name:`Highlands – ca tối`,days:[`T3`,`T5`,`T6`],start:`18:00`,end:`22:00`,time:`18:00–22:00`,slotsPerWeek:3},{id:`B02`,name:`Highlands – ca sáng`,days:[`CN`],start:`07:00`,end:`12:00`,time:`07:00–12:00`,slotsPerWeek:1}],n={isLoggedIn:!0,currentScreen:`S02`,previousScreen:null,screenHistory:[`S02`],persona:{name:`Trần Gia Hân`,age:20,studentId:`SE180123`,major:`Kỹ thuật phần mềm`,term:`Kỳ 4 · Học kỳ Xuân 2027`,accumulatedCredits:54,totalRequiredCredits:145,targetCredits:15,maxCredits:20},busyTimes:JSON.parse(JSON.stringify(t)),draftPlan:[{courseCode:`PRM323`,sectionCode:`SE1802`,name:`Phát triển ứng dụng đa nền tảng`,credits:3,days:[`T2`,`T4`],time:`07:30–09:50`,room:`BE-204`},{courseCode:`DBI202`,sectionCode:`SE1801`,name:`Cơ sở dữ liệu`,credits:3,days:[`T2`,`T4`],time:`10:00–12:20`,room:`BE-301`},{courseCode:`SWD392`,sectionCode:`SE1805`,name:`Kiến trúc và thiết kế phần mềm`,credits:3,days:[`T3`,`T5`],time:`12:50–15:10`,room:`AL-402`},{courseCode:`MAS291`,sectionCode:`SE1807`,name:`Xác suất thống kê`,credits:3,days:[`T3`,`T6`],time:`10:00–12:20`,room:`AL-105`},{courseCode:`JPD123`,sectionCode:`SE1803`,name:`Tiếng Nhật`,credits:3,days:[`T6`,`T7`],time:`15:20–17:40`,room:`DE-210`}],registeredCourses:[{courseCode:`PRM323`,sectionCode:`SE1802`,name:`Phát triển ứng dụng đa nền tảng`,credits:3,days:[`T2`,`T4`],time:`07:30–09:50`,room:`BE-204`},{courseCode:`DBI202`,sectionCode:`SE1801`,name:`Cơ sở dữ liệu`,credits:3,days:[`T2`,`T4`],time:`10:00–12:20`,room:`BE-301`},{courseCode:`SWD392`,sectionCode:`SE1805`,name:`Kiến trúc và thiết kế phần mềm`,credits:3,days:[`T3`,`T5`],time:`12:50–15:10`,room:`AL-402`},{courseCode:`MAS291`,sectionCode:`SE1807`,name:`Xác suất thống kê`,credits:3,days:[`T3`,`T6`],time:`10:00–12:20`,room:`AL-105`},{courseCode:`JPD123`,sectionCode:`SE1803`,name:`Tiếng Nhật`,credits:3,days:[`T6`,`T7`],time:`15:20–17:40`,room:`DE-210`}],selectedCourseForDetail:`DBI202`,selectedSectionInDetail:`SE1801`,detailMode:`normal`,registrationOutcome:`success`,lastUndoAction:null,editingBusyId:null,listeners:[]};function r(e){return n.listeners.push(e),()=>{n.listeners=n.listeners.filter(t=>t!==e)}}function i(){n.listeners.forEach(e=>e(n))}function a(e,t={}){(n.currentScreen!==e||t.force)&&(n.previousScreen=n.currentScreen,n.screenHistory.push(e),n.currentScreen=e,t.selectedCourse&&(n.selectedCourseForDetail=t.selectedCourse),t.detailMode&&(n.detailMode=t.detailMode),t.editingBusyId!==void 0&&(n.editingBusyId=t.editingBusyId),t.registrationOutcome&&(n.registrationOutcome=t.registrationOutcome),i())}function o(){n.screenHistory.length>1?(n.screenHistory.pop(),n.currentScreen=n.screenHistory[n.screenHistory.length-1],i()):a(`S02`)}function s(){return n.draftPlan.reduce((e,t)=>e+t.credits,0)}function c(){return n.busyTimes.reduce((e,t)=>e+t.slotsPerWeek,0)}function l(e){e===`f1`?(n.isLoggedIn=!0,n.busyTimes=[JSON.parse(JSON.stringify(t[0]))],n.draftPlan=[],n.registeredCourses=[],a(`S09`)):e===`f2`?(n.isLoggedIn=!0,n.busyTimes=JSON.parse(JSON.stringify(t)),n.selectedCourseForDetail=`DBI202`,n.selectedSectionInDetail=`SE1801`,n.detailMode=`normal`,a(`S03`)):e===`f3a`?(n.isLoggedIn=!0,n.busyTimes=JSON.parse(JSON.stringify(t)),n.draftPlan=[{courseCode:`PRM323`,sectionCode:`SE1802`,name:`Phát triển ứng dụng đa nền tảng`,credits:3,days:[`T2`,`T4`],time:`07:30–09:50`,room:`BE-204`},{courseCode:`DBI202`,sectionCode:`SE1801`,name:`Cơ sở dữ liệu`,credits:3,days:[`T2`,`T4`],time:`10:00–12:20`,room:`BE-301`},{courseCode:`SWD392`,sectionCode:`SE1805`,name:`Kiến trúc và thiết kế phần mềm`,credits:3,days:[`T3`,`T5`],time:`12:50–15:10`,room:`AL-402`},{courseCode:`MAS291`,sectionCode:`SE1807`,name:`Xác suất thống kê`,credits:3,days:[`T3`,`T6`],time:`10:00–12:20`,room:`AL-105`},{courseCode:`JPD123`,sectionCode:`SE1803`,name:`Tiếng Nhật`,credits:3,days:[`T6`,`T7`],time:`15:20–17:40`,room:`DE-210`}],n.registrationOutcome=`success`,a(`S06`)):e===`f3b`?(n.isLoggedIn=!0,n.busyTimes=JSON.parse(JSON.stringify(t)),n.registrationOutcome=`partial`,a(`S07`)):e===`net_err`?(n.isLoggedIn=!0,n.registrationOutcome=`error`,a(`S06`)):e===`conflict`&&(n.isLoggedIn=!0,n.busyTimes=JSON.parse(JSON.stringify(t)),n.selectedCourseForDetail=`DBI202`,n.selectedSectionInDetail=`SE1803`,n.detailMode=`normal`,a(`S04`))}function u(e,t=20,n=``){return{check:`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="${n}"><polyline points="20 6 9 17 4 12"></polyline></svg>`,alert:`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${n}"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,calendar:`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${n}"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,clock:`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${n}"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,search:`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${n}"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,arrowLeft:`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${n}"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`,trash:`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${n}"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`,edit:`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${n}"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`,plus:`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${n}"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,user:`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${n}"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,logout:`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${n}"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>`,chevronRight:`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${n}"><polyline points="9 18 15 12 9 6"></polyline></svg>`,eye:`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${n}"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,eyeOff:`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${n}"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`,book:`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${n}"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,mapPin:`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${n}"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,users:`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${n}"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,refresh:`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${n}"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>`,x:`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${n}"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`}[e]||``}var d=null,f=null;function p(){d=document.getElementById(`dialog-overlay`),f=document.getElementById(`dialog-content`),d.addEventListener(`click`,e=>{e.target===d&&m()})}function m(){d&&(d.classList.add(`hidden`),d.setAttribute(`aria-hidden`,`true`),f.innerHTML=``)}function h({iconType:e=`primary`,title:t,body:n,confirmText:r,cancelText:i=`Hủy`,onConfirm:a,onCancel:o,isDanger:s=!1}){if(!d||!f)return;let c=e===`danger`?`<div class="dialog-icon danger">${u(`alert`,22)}</div>`:e===`warning`?`<div class="dialog-icon warning">${u(`alert`,22)}</div>`:`<div class="dialog-icon primary">${u(`check`,22)}</div>`;f.innerHTML=`
    ${c}
    <h3 class="dialog-title">${t}</h3>
    <div class="dialog-body">${n}</div>
    <div class="dialog-actions">
      ${i?`<button id="dialog-cancel-btn" class="m3-btn m3-btn-text">${i}</button>`:``}
      <button id="dialog-confirm-btn" class="m3-btn ${s?`m3-btn-danger`:`m3-btn-primary`}">${r}</button>
    </div>
  `,document.getElementById(`dialog-cancel-btn`)?.addEventListener(`click`,()=>{m(),o&&o()}),document.getElementById(`dialog-confirm-btn`)?.addEventListener(`click`,()=>{m(),a&&a()}),d.classList.remove(`hidden`),d.setAttribute(`aria-hidden`,`false`)}function g({courseCode:e,sectionCode:t,busyName:n,timeInfo:r,onProceed:i}){h({iconType:`warning`,title:`Lớp này trùng giờ bận`,body:`<strong>${e} · ${t}</strong> học lúc ${r}, trùng với khung giờ bận <strong>${n}</strong>. Bạn vẫn muốn thêm lớp này vào kế hoạch?`,cancelText:`Chọn lớp khác`,confirmText:`Vẫn thêm`,onConfirm:i})}function _({count:e=5,credits:t=15,onProceed:n}){h({iconType:`primary`,title:`Gửi đăng ký ${e} lớp?`,body:`Bạn đang gửi đăng ký <strong>${e} lớp học phần · ${t} tín chỉ</strong>. Vui lòng kiểm tra kỹ các thông tin trước khi xác nhận.`,cancelText:`Để sau`,confirmText:`Gửi đăng ký`,onConfirm:n})}function v({courseCode:e,courseName:t,onProceed:n}){h({iconType:`danger`,title:`Xóa ${e} khỏi kế hoạch?`,body:`Môn <strong>${t}</strong> sẽ bị xóa khỏi bản nháp. Bạn có thể hoàn tác ngay sau khi xóa.`,cancelText:`Hủy`,confirmText:`Xóa môn`,isDanger:!0,onConfirm:n})}function y({busyName:e,onProceed:t}){h({iconType:`danger`,title:`Xóa giờ bận này?`,body:`Khung giờ bận <strong>${e}</strong> sẽ bị xóa. Lịch và các tính năng kiểm tra trùng giờ sẽ được cập nhật lại.`,cancelText:`Hủy`,confirmText:`Xóa`,isDanger:!0,onConfirm:t})}function b({onProceed:e}){h({iconType:`warning`,title:`Đăng xuất khỏi Semester?`,body:`Bạn sẽ cần đăng nhập lại với MSSV để tiếp tục lên lịch học kỳ.`,cancelText:`Hủy`,confirmText:`Đăng xuất`,isDanger:!0,onConfirm:e})}function x({onProceed:e,onContinue:t}){h({iconType:`warning`,title:`Bỏ thay đổi chưa lưu?`,body:`Các thông tin giờ bận bạn vừa nhập chưa được lưu. Bạn có chắc chắn muốn thoát?`,cancelText:`Tiếp tục nhập`,confirmText:`Bỏ thay đổi`,isDanger:!0,onCancel:t,onConfirm:e})}var S=null,C=null,w=null,T=null;function E(){S=document.getElementById(`global-snackbar`),C=document.getElementById(`snackbar-text`),w=document.getElementById(`snackbar-action`)}function D(e,{actionText:t=`Hoàn tác`,onAction:n=null,duration:r=4500}={}){S&&(clearTimeout(T),C.textContent=e,n?(w.textContent=t,w.classList.remove(`hidden`),w.onclick=()=>{O(),n()}):(w.classList.add(`hidden`),w.onclick=null),S.classList.remove(`hidden`),T=setTimeout(()=>{O()},r))}function O(){S&&S.classList.add(`hidden`)}function k(e){let t=!1,r=!1,i=!1;function o(){e.innerHTML=`
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
                  class="m3-input ${i?`has-error`:``}"
                  placeholder="VD: SE180123"
                  value="SE180123"
                  autocomplete="username"
                  ${r?`disabled`:``}
                />
              </div>
            </div>

            <div class="m3-field-group">
              <label class="m3-field-label" for="password-input">Mật khẩu</label>
              <div class="m3-input-wrapper">
                <input
                  type="${t?`text`:`password`}"
                  id="password-input"
                  class="m3-input ${i?`has-error`:``}"
                  placeholder="Nhập mật khẩu"
                  value="student123"
                  autocomplete="current-password"
                  ${r?`disabled`:``}
                />
                <button
                  type="button"
                  id="toggle-pw-btn"
                  class="m3-input-icon-end"
                  aria-label="${t?`Ẩn mật khẩu`:`Hiện mật khẩu`}"
                  ${r?`disabled`:``}
                >
                  ${u(t?`eyeOff`:`eye`,18)}
                </button>
              </div>
              ${i?`<div class="m3-field-helper error-text">${u(`alert`,14)} Mã số sinh viên hoặc mật khẩu chưa đúng.</div>`:``}
            </div>

            <div style="margin-top: 24px;">
              <button
                type="submit"
                id="login-submit-btn"
                class="m3-btn m3-btn-primary m3-btn-full"
                ${r?`disabled`:``}
              >
                ${r?`<span class="spinner"></span> Đang đăng nhập…`:`Đăng nhập`}
              </button>
            </div>
          </form>

          <div class="s01-demo-hint">
            <strong>Mẹo đánh giá:</strong> Tài khoản demo sinh viên persona <code>SE180123</code> (Trần Gia Hân · KTPM Kỳ 4). Bấm Đăng nhập để vào ứng dụng.
          </div>
        </div>
      </div>
    `;let s=e.querySelector(`#s01-form`),c=e.querySelector(`#mssv-input`),l=e.querySelector(`#password-input`);e.querySelector(`#toggle-pw-btn`)?.addEventListener(`click`,()=>{t=!t,o()}),s?.addEventListener(`submit`,e=>{e.preventDefault();let t=c.value.trim(),s=l.value.trim();!t||!s?(i=!0,o()):(r=!0,i=!1,o(),setTimeout(()=>{r=!1,n.isLoggedIn=!0,D(`Chào mừng bạn Trần Gia Hân (SE180123)!`),a(`S02`)},700))})}o()}function A(e){let t=n.registeredCourses,r=n.busyTimes,i=t.reduce((e,t)=>e+t.credits,0),o=c(),s=[{key:`T2`,label:`Thứ Hai`},{key:`T3`,label:`Thứ Ba`},{key:`T4`,label:`Thứ Tư`},{key:`T5`,label:`Thứ Năm`},{key:`T6`,label:`Thứ Sáu`},{key:`T7`,label:`Thứ Bảy`},{key:`CN`,label:`Chủ Nhật`}],l={};s.forEach(e=>{l[e.key]=[]}),t.forEach(e=>{e.days.forEach(t=>{l[t]&&l[t].push({type:`class`,code:e.courseCode,section:e.sectionCode,name:e.name,time:e.time,room:e.room})})}),r.forEach(e=>{e.days.forEach(t=>{l[t]&&l[t].push({type:`busy`,name:e.name,time:e.time})})}),Object.keys(l).forEach(e=>{l[e].sort((e,t)=>e.time.localeCompare(t.time))});let d=t.length===0&&r.length===0,f=``;f=d?`
      <div class="empty-state-view">
        <div class="empty-state-icon">
          ${u(`calendar`,36)}
        </div>
        <h2 class="empty-state-title">Chưa có gì trong lịch</h2>
        <p class="empty-state-desc">Chọn môn và khai báo giờ bận cá nhân để lên lịch học kỳ phù hợp.</p>
        <button id="s02-add-busy-empty-btn" class="m3-btn m3-btn-primary">
          ${u(`plus`,18)} Khai báo giờ bận
        </button>
      </div>
    `:`
      <!-- Summary Card -->
      <div class="s02-summary-card">
        <div class="s02-summary-term">Học kỳ Xuân 2027 · Kỳ 4</div>
        <div class="s02-summary-stats">
          ${t.length>0?`Đã đăng ký ${t.length} môn · ${i} tín chỉ`:`Chưa đăng ký môn nào`}
        </div>
        <div class="s02-summary-pills">
          <span class="s02-pill">
            ${u(`clock`,12)} ${o} khung giờ bận/tuần
          </span>
          <span class="s02-pill" style="background: rgba(52, 211, 153, 0.25);">
            ${u(`check`,12)} Không trùng lịch
          </span>
        </div>
      </div>

      <!-- Agenda Days -->
      <div class="agenda-container" style="padding-bottom: 72px;">
        ${s.map(e=>{let t=l[e.key];return!t||t.length===0?``:`
            <div class="agenda-day-group">
              <div class="agenda-day-header">
                ${e.label} (${e.key}) · <span style="font-weight: 500; font-size: 11px;">${t.length} sự kiện</span>
              </div>
              <div class="agenda-items">
                ${t.map(e=>e.type===`class`?`
                      <div class="agenda-block agenda-block-class">
                        <div class="agenda-time-col">
                          <span>${e.time.split(`–`)[0]}</span>
                          <span style="opacity: 0.6; font-size: 11px;">${e.time.split(`–`)[1]}</span>
                        </div>
                        <div class="agenda-info-col">
                          <div class="agenda-course-code">
                            ${e.code}
                            <span class="status-tag status-tag-neutral">${e.section}</span>
                          </div>
                          <div class="agenda-course-name">${e.name}</div>
                          <div class="agenda-room-tag">${u(`mapPin`,12)} Phòng ${e.room}</div>
                        </div>
                      </div>
                    `:`
                      <div class="agenda-block agenda-block-busy">
                        <div class="agenda-time-col" style="color: var(--md-busy-icon);">
                          <span>${e.time.split(`–`)[0]}</span>
                          <span style="opacity: 0.7; font-size: 11px;">${e.time.split(`–`)[1]}</span>
                        </div>
                        <div class="agenda-info-col">
                          <div class="agenda-course-code" style="color: var(--md-busy-text);">
                            ${u(`clock`,14)} Giờ bận cá nhân
                          </div>
                          <div class="agenda-course-name" style="color: var(--md-busy-text); font-weight: 600;">${e.name}</div>
                          <div class="status-tag status-tag-busy" style="margin-top: 4px;">Ràng buộc xếp lớp</div>
                        </div>
                      </div>
                    `).join(``)}
              </div>
            </div>
          `}).join(``)}
      </div>

      <!-- Extended FAB: Thêm môn -->
      <button id="s02-add-course-fab" class="m3-fab" title="Tìm và thêm môn vào kế hoạch">
        ${u(`plus`,20)}
        <span>Thêm môn</span>
      </button>
    `,e.innerHTML=`
    <!-- App Bar -->
    <header class="m3-app-bar">
      <div class="m3-app-bar-left">
        <h1 class="m3-app-bar-title">Lịch tuần</h1>
      </div>
      <div>
        <button id="s02-busy-btn" class="m3-app-bar-action" title="Xem danh sách giờ bận">
          ${u(`clock`,16)} Giờ bận
        </button>
      </div>
    </header>

    <!-- Scroll Content -->
    <div class="screen-content">
      ${f}
    </div>
  `,e.querySelector(`#s02-busy-btn`)?.addEventListener(`click`,()=>{a(`S09`)}),e.querySelector(`#s02-add-course-fab`)?.addEventListener(`click`,()=>{a(`S03`)}),e.querySelector(`#s02-add-busy-empty-btn`)?.addEventListener(`click`,()=>{a(`S09`)})}function j(t){let r=``,i=!0,o=!0;function s(){let i=t.querySelector(`#search-input`);t.querySelector(`#chip-filter-clash`),t.querySelector(`#chip-filter-seats`);let o=t.querySelector(`#course-list-container`),c=t.querySelector(`#search-results-count`),l=e.filter(e=>{let t=r.toLowerCase().trim();return e.code.toLowerCase().includes(t)||e.name.toLowerCase().includes(t)});l.length===0?(c.textContent=`0 kết quả cho "${r}"`,o.innerHTML=`
        <div class="empty-state-view" style="padding-top: 24px;">
          <div class="empty-state-icon">
            ${u(`search`,32)}
          </div>
          <h2 class="empty-state-title">Không tìm thấy môn này</h2>
          <p class="empty-state-desc">Kiểm tra mã môn hoặc thử từ khóa khác (ví dụ: DBI202, PRM323).</p>
          <button id="btn-clear-search" class="m3-btn m3-btn-tonal">
            ${u(`x`,16)} Xóa từ khóa
          </button>
        </div>
      `,t.querySelector(`#btn-clear-search`)?.addEventListener(`click`,()=>{r=``,i.value=``,s()})):(c.textContent=r.trim()?`${l.length} kết quả cho "${r}"`:`Gợi ý ${l.length} môn học kỳ 4`,o.innerHTML=l.map(e=>{let t=e.sections.filter(e=>e.remaining>0).filter(e=>!e.clashReason),r=n.draftPlan.some(t=>t.courseCode===e.code),i=n.registeredCourses.some(t=>t.courseCode===e.code),a=``;return i?a=`<span class="status-tag status-tag-success">${u(`check`,12)} Đã đăng ký</span>`:r&&(a=`<span class="status-tag status-tag-warning">Đã có trong kế hoạch</span>`),`
        <div class="m3-card m3-card-interactive course-card" data-code="${e.code}">
          <div class="course-card-header">
            <div>
              <div class="course-code">${e.code}</div>
              <div class="course-credits">${e.credits} tín chỉ · ${e.prerequisite}</div>
            </div>
            ${a}
          </div>

          <h3 class="course-title">${e.name}</h3>

          <div class="course-meta-row">
            <span><strong>${e.sections.length}</strong> lớp mở · <strong style="color: var(--md-success);">${t.length}</strong> hợp lịch còn chỗ</span>
            <span style="color: var(--md-primary); font-weight: 600; display: flex; align-items: center; gap: 2px;">
              Xem lớp ${u(`chevronRight`,16)}
            </span>
          </div>
        </div>
      `}).join(``),o.querySelectorAll(`.course-card`).forEach(e=>{e.addEventListener(`click`,()=>{a(`S04`,{selectedCourse:e.getAttribute(`data-code`),detailMode:`normal`})})}))}t.innerHTML=`
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
            value="${r}"
            autocomplete="off"
          />
          <button id="btn-input-clear" class="m3-input-icon-end" title="Xóa tìm kiếm">
            ${u(`x`,18)}
          </button>
        </div>
      </div>

      <!-- Filter Chips -->
      <div class="m3-chip-group">
        <button id="chip-filter-clash" class="m3-chip ${i?`selected`:``}">
          ${i?u(`check`,14):``} Hợp lịch của tôi
        </button>
        <button id="chip-filter-seats" class="m3-chip ${o?`selected`:``}">
          ${o?u(`check`,14):``} Còn chỗ
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
  `;let c=t.querySelector(`#search-input`),l=t.querySelector(`#btn-input-clear`),d=t.querySelector(`#chip-filter-clash`),f=t.querySelector(`#chip-filter-seats`);c.addEventListener(`input`,e=>{r=e.target.value,s()}),l.addEventListener(`click`,()=>{r=``,c.value=``,c.focus(),s()}),d.addEventListener(`click`,()=>{i=!i,d.classList.toggle(`selected`,i),d.innerHTML=`${i?u(`check`,14):``} Hợp lịch của tôi`,s()}),f.addEventListener(`click`,()=>{o=!o,f.classList.toggle(`selected`,o),f.innerHTML=`${o?u(`check`,14):``} Còn chỗ`,s()}),s()}function M(t){let r=n.selectedCourseForDetail||`DBI202`,i=e.find(e=>e.code===r)||e[1],s=n.detailMode===`alt_recovery`,c=s?`SE1804`:n.selectedSectionInDetail||i.sections[0]?.code;function l(){let e=i.sections;s&&(e=i.sections.filter(e=>e.code===`SE1804`||e.code===`SE1806`)),t.innerHTML=`
      <!-- App Bar with Back -->
      <header class="m3-app-bar">
        <div class="m3-app-bar-left">
          <button id="s04-back-btn" class="m3-icon-btn" title="Quay lại">
            ${u(`arrowLeft`,20)}
          </button>
          <h1 class="m3-app-bar-title">Chi tiết môn</h1>
        </div>
      </header>

      <!-- Scrollable Content -->
      <div class="screen-root" style="padding-bottom: 96px;">
        <!-- Course Header -->
        <div class="course-detail-header">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
            <span class="course-code" style="font-size: 18px;">${i.code}</span>
            <span class="status-tag status-tag-neutral">${i.credits} tín chỉ</span>
          </div>
          <h2 style="font-size: 18px; font-weight: 700; color: var(--md-on-surface); margin-bottom: 8px;">
            ${i.name}
          </h2>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <span class="status-tag status-tag-success">
              ${u(`check`,12)} ${i.prerequisite}
            </span>
            ${s?`<span class="status-tag status-tag-warning">Chọn lớp thay thế</span>`:``}
          </div>
        </div>

        <div class="screen-content">
          ${s?`
                <div class="m3-banner m3-banner-warning">
                  ${u(`alert`,18)}
                  <div>
                    <strong>Lớp SE1801 vừa hết chỗ!</strong>
                    <div>Hệ thống đã tự động lọc 2 lớp hợp lịch còn chỗ thay thế. Lựa chọn khuyến nghị: <strong>SE1804</strong>.</div>
                  </div>
                </div>
              `:``}

          <div style="font-size: 14px; font-weight: 700; color: var(--md-on-surface); margin-bottom: 12px; display: flex; justify-content: space-between;">
            <span>Danh sách lớp học phần (${e.length})</span>
            <span style="font-weight: 500; font-size: 12px; color: var(--md-on-surface-variant);">Sức chứa 35 SV</span>
          </div>

          <!-- Section Cards List -->
          <div class="section-list">
            ${e.map(e=>{let t=e.code===c,n=e.remaining===0||e.isFull,r=!!e.clashReason;return`
                <div
                  class="section-card ${t?`selected`:``} ${n?`disabled`:``}"
                  data-section="${e.code}"
                  data-clash="${r?`true`:`false`}"
                  data-full="${n?`true`:`false`}"
                >
                  <div class="section-radio"></div>
                  <div class="section-card-info">
                    <div class="section-header-line">
                      <span class="section-code">${e.code}</span>
                      ${n?`<span class="status-tag status-tag-error">Hết chỗ (0/35)</span>`:r?`<span class="status-tag status-tag-busy">${u(`alert`,12)} Trùng giờ bận</span>`:`<span class="status-tag status-tag-success">${u(`check`,12)} Hợp lịch</span>`}
                    </div>

                    <div class="section-schedule">
                      ${u(`clock`,13)} ${e.days.join(`, `)} · ${e.time}
                    </div>

                    <div class="section-details-line">
                      <span>${u(`mapPin`,12)} Phòng ${e.room} · GV: ${e.lecturer}</span>
                      <strong style="color: ${n?`var(--md-error)`:`var(--md-on-surface)`};">
                        Còn ${e.remaining}/35 chỗ
                      </strong>
                    </div>

                    ${r?`<div style="font-size: 11px; color: var(--md-busy-icon); margin-top: 4px; font-weight: 500;">
                            ⚠️ ${e.clashReason}
                          </div>`:``}
                  </div>
                </div>
              `}).join(``)}
          </div>
        </div>
      </div>

      <!-- Fixed Bottom Action Bar -->
      <footer class="fixed-bottom-bar" style="position: absolute; left: 0; right: 0; bottom: 0;">
        <button
          id="s04-commit-btn"
          class="m3-btn m3-btn-primary m3-btn-full"
          ${c?``:`disabled`}
        >
          ${s?`Đăng ký lớp thay thế ${c}`:`Thêm lớp ${c||``} vào kế hoạch`}
        </button>
      </footer>
    `,t.querySelector(`#s04-back-btn`)?.addEventListener(`click`,()=>{o()}),t.querySelectorAll(`.section-card`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-section`),n=e.getAttribute(`data-full`)===`true`,r=e.getAttribute(`data-clash`)===`true`;if(n)D(`Lớp này đã hết chỗ, vui lòng chọn lớp khác!`);else if(r){let e=i.sections.find(e=>e.code===t);g({courseCode:i.code,sectionCode:t,busyName:`Highlands – ca tối`,timeInfo:`${e.days.join(`, `)} lúc ${e.time}`,onProceed:()=>{c=t,l()}})}else c=t,l()})}),t.querySelector(`#s04-commit-btn`)?.addEventListener(`click`,()=>{let e=i.sections.find(e=>e.code===c);if(e){if(s)n.registeredCourses=n.registeredCourses.map(e=>e.courseCode===`DBI202`?{...e,sectionCode:`SE1804`,days:[`T2`,`T4`],time:`15:20–17:40`,room:`BE-105`}:e),n.draftPlan=n.draftPlan.map(e=>e.courseCode===`DBI202`?{...e,sectionCode:`SE1804`,days:[`T2`,`T4`],time:`15:20–17:40`,room:`BE-105`}:e),a(`S07`,{registrationOutcome:`replacement`}),D(`Đã đăng ký thành công lớp thay thế SE1804!`);else{let t=n.draftPlan.findIndex(e=>e.courseCode===i.code),r=t>=0?n.draftPlan[t]:null,o={courseCode:i.code,sectionCode:e.code,name:i.name,credits:i.credits,days:e.days,time:e.time,room:e.room,hasClash:!!e.clashReason};t>=0?n.draftPlan[t]=o:n.draftPlan.push(o),D(`Đã thêm ${i.code} (${e.code}) vào kế hoạch`,{actionText:`Hoàn tác`,onAction:()=>{r?n.draftPlan[t]=r:n.draftPlan=n.draftPlan.filter(e=>e.courseCode!==i.code),D(`Đã hoàn tác thao tác chọn lớp ${i.code}`),a(`S04`,{selectedCourse:i.code,force:!0})}}),a(`S05`)}}})}l()}function N(e){let t=n.draftPlan,r=s(),i=n.persona.maxCredits,o=Math.min(100,Math.round(r/i*100)),c=t.some(e=>e.hasClash||e.sectionCode===`SE1803`);function l(){t.length===0?(e.innerHTML=`
        <header class="m3-app-bar">
          <div class="m3-app-bar-left">
            <h1 class="m3-app-bar-title">Kế hoạch</h1>
          </div>
        </header>

        <div class="screen-content" style="padding-bottom: 84px;">
          <div class="empty-state-view">
            <div class="empty-state-icon">
              ${u(`book`,36)}
            </div>
            <h2 class="empty-state-title">Chưa có môn trong kế hoạch</h2>
            <p class="empty-state-desc">Chọn các môn học kỳ 4 để xếp lịch và kiểm tra trùng giờ trước khi gửi đăng ký.</p>
            <button id="s05-find-courses-btn" class="m3-btn m3-btn-primary">
              ${u(`search`,18)} Tìm môn học
            </button>
          </div>
        </div>
      `,e.querySelector(`#s05-find-courses-btn`)?.addEventListener(`click`,()=>{a(`S03`)})):(e.innerHTML=`
      <!-- App Bar -->
      <header class="m3-app-bar">
        <div class="m3-app-bar-left">
          <h1 class="m3-app-bar-title">Kế hoạch</h1>
        </div>
        <div>
          <button id="s05-add-more-header-btn" class="m3-app-bar-action">
            ${u(`plus`,16)} Thêm môn
          </button>
        </div>
      </header>

      <div class="screen-root" style="padding-bottom: 96px;">
        <div class="screen-content">
          <!-- Progress Card -->
          <div class="plan-progress-card">
            <div class="plan-progress-header">
              <span>Đã chọn ${t.length} môn</span>
              <span style="color: var(--md-primary); font-weight: 700;">${r}/${i} tín chỉ</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill" style="width: ${o}%;"></div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 12px; margin-top: 4px;">
              <span style="color: var(--md-on-surface-variant);">${o}% mục tiêu học kỳ</span>
              ${c?`<span class="status-tag status-tag-error">${u(`alert`,12)} Có môn trùng lịch</span>`:`<span class="status-tag status-tag-success">${u(`check`,12)} Không trùng lịch</span>`}
            </div>
          </div>

          ${c?`
                <div class="m3-banner m3-banner-error">
                  ${u(`alert`,20)}
                  <div>
                    <strong>Cảnh báo xung đột lịch!</strong>
                    <div>Môn <strong>DBI202 (SE1803)</strong> trùng với khung giờ bận Highlands – ca tối T3, T5 lúc 18:00–20:20. Vui lòng đổi lớp khác để có thể gửi đăng ký.</div>
                  </div>
                </div>
              `:``}

          <div style="font-size: 14px; font-weight: 700; color: var(--md-on-surface); margin-bottom: 12px;">
            Danh sách môn nháp (${t.length})
          </div>

          <!-- Draft Items List -->
          <div class="plan-items-list">
            ${t.map(e=>{let t=e.hasClash||e.sectionCode===`SE1803`;return`
                <div class="plan-draft-item ${t?`conflict`:``}" data-code="${e.courseCode}">
                  <div style="flex: 1; padding-right: 8px;">
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 2px;">
                      <span class="course-code" style="font-size: 15px;">${e.courseCode}</span>
                      <span class="status-tag status-tag-neutral">${e.sectionCode}</span>
                      <span style="font-size: 12px; color: var(--md-on-surface-variant); font-weight: 600;">${e.credits} TC</span>
                    </div>

                    <div style="font-size: 13px; font-weight: 600; color: var(--md-on-surface); margin-bottom: 4px;">
                      ${e.name}
                    </div>

                    <div style="font-size: 12px; color: var(--md-on-surface-variant);">
                      ${u(`clock`,12)} ${e.days.join(`, `)} · ${e.time} (${e.room})
                    </div>

                    ${t?`<div class="status-tag status-tag-error" style="margin-top: 6px;">
                            ${u(`alert`,12)} Trùng giờ bận Highlands ca tối
                          </div>`:``}
                  </div>

                  <div style="display: flex; align-items: center; gap: 4px;">
                    <button class="m3-icon-btn btn-change-draft" data-code="${e.courseCode}" title="Đổi lớp khác">
                      ${u(`edit`,18)}
                    </button>
                    <button class="m3-icon-btn btn-delete-draft" data-code="${e.courseCode}" data-name="${e.name}" title="Xóa khỏi kế hoạch" style="color: var(--md-error);">
                      ${u(`trash`,18)}
                    </button>
                  </div>
                </div>
              `}).join(``)}
          </div>
        </div>
      </div>

      <!-- Fixed Bottom Action Bar -->
      <footer class="fixed-bottom-bar" style="position: absolute; left: 0; right: 0; bottom: 0;">
        ${c?`
              <button class="m3-btn m3-btn-danger m3-btn-full" disabled title="Khóa gửi khi còn xung đột">
                ${u(`alert`,16)} Đang có lớp trùng lịch (Sửa để gửi)
              </button>
            `:t.length>=5?`
              <button id="s05-review-btn" class="m3-btn m3-btn-primary m3-btn-full">
                Xem lại & gửi đăng ký (${t.length} lớp)
              </button>
            `:`
              <button id="s05-find-more-btn" class="m3-btn m3-btn-tonal m3-btn-full">
                Tìm thêm môn (còn ${5-t.length} môn)
              </button>
            `}
      </footer>
    `,e.querySelector(`#s05-add-more-header-btn`)?.addEventListener(`click`,()=>{a(`S03`)}),e.querySelector(`#s05-find-more-btn`)?.addEventListener(`click`,()=>{a(`S03`)}),e.querySelector(`#s05-review-btn`)?.addEventListener(`click`,()=>{a(`S06`)}),e.querySelectorAll(`.btn-change-draft`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation(),a(`S04`,{selectedCourse:e.getAttribute(`data-code`),detailMode:`normal`})})}),e.querySelectorAll(`.btn-delete-draft`).forEach(e=>{e.addEventListener(`click`,r=>{r.stopPropagation();let i=e.getAttribute(`data-code`),a=e.getAttribute(`data-name`),o=t.find(e=>e.courseCode===i);v({courseCode:i,courseName:a,onProceed:()=>{n.draftPlan=n.draftPlan.filter(e=>e.courseCode!==i),D(`Đã xóa ${i} khỏi kế hoạch`,{actionText:`Hoàn tác`,onAction:()=>{o&&(n.draftPlan.push(o),D(`Đã khôi phục ${i} vào kế hoạch`),l())}}),l()}})})}))}l()}function P(e){let t=!1,r=n.registrationOutcome===`error`,i=n.draftPlan,s=i.reduce((e,t)=>e+t.credits,0);function c(){t?e.innerHTML=`
        <div class="loading-fullscreen">
          <div class="spinner spinner-primary" style="margin-bottom: 24px;"></div>
          <h2 style="font-size: 20px; font-weight: 700; color: var(--md-on-surface); margin-bottom: 8px;">
            Đang gửi đăng ký ${i.length} lớp…
          </h2>
          <p style="font-size: 14px; color: var(--md-on-surface-variant); max-width: 280px; line-height: 1.5;">
            Hệ thống đang gửi yêu cầu và xếp chỗ tự động. Kế hoạch của bạn vẫn được giữ nguyên an toàn.
          </p>
        </div>
      `:r?(e.innerHTML=`
        <header class="m3-app-bar">
          <div class="m3-app-bar-left">
            <button id="s06-err-back-btn" class="m3-icon-btn" title="Quay lại kế hoạch">
              ${u(`arrowLeft`,20)}
            </button>
            <h1 class="m3-app-bar-title">Xem lại đăng ký</h1>
          </div>
        </header>

        <div class="screen-content" style="padding-bottom: 96px;">
          <div class="m3-banner m3-banner-error" style="margin-top: 12px;">
            ${u(`alert`,24)}
            <div>
              <strong style="font-size: 15px; display: block; margin-bottom: 4px;">Chưa xác nhận được kết quả đăng ký</strong>
              <div>Kết nối mạng bị gián đoạn trong khi gửi. Kế hoạch ${i.length} lớp của bạn vẫn được lưu giữ an toàn, chưa bị hủy.</div>
            </div>
          </div>

          <div class="m3-card" style="margin-top: 16px;">
            <div style="font-size: 14px; font-weight: 700; margin-bottom: 12px;">Danh sách lớp đang giữ:</div>
            ${i.map(e=>`
              <div class="review-item">
                <span><strong>${e.courseCode}</strong> (${e.sectionCode})</span>
                <span style="color: var(--md-on-surface-variant);">${e.time}</span>
              </div>
            `).join(``)}
          </div>
        </div>

        <footer class="fixed-bottom-bar" style="position: absolute; left: 0; right: 0; bottom: 0;">
          <button id="s06-retry-btn" class="m3-btn m3-btn-primary m3-btn-full">
            ${u(`refresh`,18)} Thử lại gửi đăng ký
          </button>
        </footer>
      `,e.querySelector(`#s06-err-back-btn`)?.addEventListener(`click`,()=>{a(`S05`)}),e.querySelector(`#s06-retry-btn`)?.addEventListener(`click`,()=>{r=!1,l()})):(e.innerHTML=`
      <!-- App Bar with Back -->
      <header class="m3-app-bar">
        <div class="m3-app-bar-left">
          <button id="s06-back-btn" class="m3-icon-btn" title="Quay lại">
            ${u(`arrowLeft`,20)}
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
                Tổng cộng: ${i.length} lớp · ${s} tín chỉ
              </span>
              <span class="status-tag status-tag-success">
                ${u(`check`,12)} Không trùng lịch
              </span>
            </div>
            <p style="font-size: 13px; color: var(--md-on-surface-variant); line-height: 1.4;">
              Kiểm tra kỹ các lớp học phần bên dưới trước khi bấm gửi đăng ký vào hệ thống.
            </p>
          </div>

          <div style="font-size: 14px; font-weight: 700; color: var(--md-on-surface); margin-bottom: 12px;">
            Các lớp sẽ gửi đăng ký (${i.length})
          </div>

          <!-- Read-only List -->
          <div class="review-card">
            ${i.map((e,t)=>`
              <div class="review-item">
                <div style="flex: 1;">
                  <div style="font-weight: 700; color: var(--md-on-surface);">
                    ${t+1}. ${e.courseCode} · ${e.sectionCode}
                  </div>
                  <div style="font-size: 12px; color: var(--md-on-surface-variant); margin-top: 2px;">
                    ${e.name}
                  </div>
                  <div style="font-size: 12px; color: var(--md-primary); margin-top: 2px;">
                    ${e.days.join(`, `)} · ${e.time} (${e.room})
                  </div>
                </div>
                <div style="text-align: right;">
                  <span class="status-tag status-tag-neutral">${e.credits} TC</span>
                </div>
              </div>
            `).join(``)}
          </div>
        </div>
      </div>

      <!-- Fixed Bottom Action Bar -->
      <footer class="fixed-bottom-bar" style="position: absolute; left: 0; right: 0; bottom: 0;">
        <button id="s06-submit-btn" class="m3-btn m3-btn-primary m3-btn-full">
          Gửi đăng ký (${i.length} lớp)
        </button>
      </footer>
    `,e.querySelector(`#s06-back-btn`)?.addEventListener(`click`,()=>{o()}),e.querySelector(`#s06-submit-btn`)?.addEventListener(`click`,()=>{_({count:i.length,credits:s,onProceed:()=>{l()}})}))}function l(){t=!0,c(),setTimeout(()=>{t=!1,n.registrationOutcome===`partial`?(n.registeredCourses=i.filter(e=>e.courseCode!==`DBI202`),a(`S07`,{registrationOutcome:`partial`})):n.registrationOutcome===`error`?(r=!0,c()):(n.registeredCourses=JSON.parse(JSON.stringify(i)),a(`S07`,{registrationOutcome:`success`}))},1200)}c()}function F(e){let t=n.registrationOutcome||`success`,r=n.draftPlan,i=``,o=``,s=``;t===`partial`?(i=`
      <div class="result-status-card result-status-partial">
        <div class="result-icon">
          ${u(`alert`,28)}
        </div>
        <h2 style="font-size: 20px; font-weight: 700; color: #7C2D12; margin-bottom: 4px;">
          Đã đăng ký 4/5 lớp
        </h2>
        <p style="font-size: 13px; color: #9A3412;">
          4 lớp học phần đã được xác nhận thành công. Riêng lớp <strong>DBI202 (SE1801)</strong> vừa hết chỗ (0/35).
        </p>
      </div>
    `,o=`
      <div class="m3-card" style="margin-bottom: 16px;">
        <div style="font-size: 14px; font-weight: 700; margin-bottom: 12px;">Chi tiết kết quả:</div>
        
        <!-- Failed DBI202 item -->
        <div class="review-item" style="background: #FFF5F5; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #FED7D7;">
          <div style="flex: 1;">
            <div style="font-weight: 700; color: var(--md-error);">
              DBI202 · Cơ sở dữ liệu (SE1801)
            </div>
            <div style="font-size: 12px; color: var(--md-on-surface-variant); margin-top: 2px;">
              T2, T4 · 10:00–12:20 (BE-301)
            </div>
          </div>
          <div>
            <span class="status-tag status-tag-error">Hết chỗ, chưa đăng ký</span>
          </div>
        </div>

        <!-- 4 Success items -->
        ${r.filter(e=>e.courseCode!==`DBI202`).map(e=>`
          <div class="review-item">
            <div style="flex: 1;">
              <div style="font-weight: 700; color: var(--md-on-surface);">
                ${e.courseCode} · ${e.name} (${e.sectionCode})
              </div>
              <div style="font-size: 12px; color: var(--md-on-surface-variant); margin-top: 2px;">
                ${e.days.join(`, `)} · ${e.time} (${e.room})
              </div>
            </div>
            <div>
              <span class="status-tag status-tag-success">${u(`check`,12)} Đã đăng ký</span>
            </div>
          </div>
        `).join(``)}
      </div>
    `,s=`
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <button id="s07-find-alt-btn" class="m3-btn m3-btn-primary m3-btn-full">
          Chọn lớp thay thế cho DBI202
        </button>
        <button id="s07-view-timetable-partial-btn" class="m3-btn m3-btn-text m3-btn-full">
          Về lịch tuần (giữ 4 môn đã đăng ký)
        </button>
      </div>
    `):t===`replacement`?(i=`
      <div class="result-status-card result-status-success">
        <div class="result-icon">
          ${u(`check`,30)}
        </div>
        <h2 style="font-size: 20px; font-weight: 700; color: #065F46; margin-bottom: 4px;">
          Đã đăng ký 5/5 lớp thành công!
        </h2>
        <p style="font-size: 13px; color: #047857;">
          Lớp thay thế <strong>DBI202 (SE1804)</strong> đã được xác nhận. Tổng cộng 15/20 tín chỉ hoàn tất.
        </p>
      </div>
    `,o=`
      <div class="m3-card" style="margin-bottom: 16px;">
        <div style="font-size: 14px; font-weight: 700; margin-bottom: 12px;">5 lớp học phần chính thức:</div>
        ${n.registeredCourses.map(e=>`
          <div class="review-item">
            <div style="flex: 1;">
              <div style="font-weight: 700; color: var(--md-on-surface);">
                ${e.courseCode} · ${e.name} (${e.sectionCode})
              </div>
              <div style="font-size: 12px; color: var(--md-on-surface-variant); margin-top: 2px;">
                ${e.days.join(`, `)} · ${e.time} (${e.room})
              </div>
            </div>
            <div>
              <span class="status-tag status-tag-success">${u(`check`,12)} Thành công</span>
            </div>
          </div>
        `).join(``)}
      </div>
    `,s=`
      <button id="s07-view-timetable-success-btn" class="m3-btn m3-btn-primary m3-btn-full">
        ${u(`calendar`,18)} Xem thời khóa biểu mới
      </button>
    `):(i=`
      <div class="result-status-card result-status-success">
        <div class="result-icon">
          ${u(`check`,30)}
        </div>
        <h2 style="font-size: 20px; font-weight: 700; color: #065F46; margin-bottom: 4px;">
          Đã đăng ký 5/5 lớp thành công!
        </h2>
        <p style="font-size: 13px; color: #047857;">
          Toàn bộ 5 môn học kỳ Xuân 2027 (15 tín chỉ) đã được ghi nhận vào hệ thống.
        </p>
      </div>
    `,o=`
      <div class="m3-card" style="margin-bottom: 16px;">
        <div style="font-size: 14px; font-weight: 700; margin-bottom: 12px;">Chi tiết kết quả:</div>
        ${r.map(e=>`
          <div class="review-item">
            <div style="flex: 1;">
              <div style="font-weight: 700; color: var(--md-on-surface);">
                ${e.courseCode} · ${e.name} (${e.sectionCode})
              </div>
              <div style="font-size: 12px; color: var(--md-on-surface-variant); margin-top: 2px;">
                ${e.days.join(`, `)} · ${e.time} (${e.room})
              </div>
            </div>
            <div>
              <span class="status-tag status-tag-success">${u(`check`,12)} Thành công</span>
            </div>
          </div>
        `).join(``)}
      </div>
    `,s=`
      <button id="s07-view-timetable-success-btn" class="m3-btn m3-btn-primary m3-btn-full">
        ${u(`calendar`,18)} Xem thời khóa biểu
      </button>
    `),e.innerHTML=`
    <!-- App Bar -->
    <header class="m3-app-bar">
      <div class="m3-app-bar-left">
        <h1 class="m3-app-bar-title">Kết quả đăng ký</h1>
      </div>
    </header>

    <div class="screen-root" style="padding-bottom: 96px;">
      <div class="screen-content">
        ${i}
        ${o}
      </div>
    </div>

    <!-- Fixed Bottom Action Bar -->
    <footer class="fixed-bottom-bar" style="position: absolute; left: 0; right: 0; bottom: 0;">
      ${s}
    </footer>
  `,e.querySelector(`#s07-find-alt-btn`)?.addEventListener(`click`,()=>{a(`S04`,{selectedCourse:`DBI202`,detailMode:`alt_recovery`})}),e.querySelector(`#s07-view-timetable-partial-btn`)?.addEventListener(`click`,()=>{a(`S02`)}),e.querySelector(`#s07-view-timetable-success-btn`)?.addEventListener(`click`,()=>{a(`S02`)})}function I(e){let t=n.persona,r=(t.accumulatedCredits/t.totalRequiredCredits*100).toFixed(1);e.innerHTML=`
    <!-- App Bar -->
    <header class="m3-app-bar">
      <div class="m3-app-bar-left">
        <h1 class="m3-app-bar-title">Cá nhân</h1>
      </div>
    </header>

    <div class="screen-root" style="padding-bottom: 84px;">
      <div class="screen-content">
        <!-- Profile Hero -->
        <div class="profile-hero">
          <div class="profile-avatar">GH</div>
          <div>
            <h2 style="font-size: 18px; font-weight: 700; color: var(--md-on-surface);">
              ${t.name}
            </h2>
            <div style="font-size: 13px; color: var(--md-on-surface-variant); margin-top: 2px;">
              MSSV: <strong>${t.studentId}</strong> · Tuổi: ${t.age}
            </div>
            <div style="font-size: 12px; color: var(--md-primary); font-weight: 600; margin-top: 4px;">
              ${t.major} · ${t.term}
            </div>
          </div>
        </div>

        <!-- Academic Degree Progress Card -->
        <div class="m3-card" style="margin-bottom: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="font-size: 14px; font-weight: 700;">Tiến độ tích lũy toàn khóa</span>
            <span style="font-size: 14px; font-weight: 700; color: var(--md-primary);">${t.accumulatedCredits}/${t.totalRequiredCredits} TC</span>
          </div>
          <div class="progress-track" style="margin-bottom: 8px;">
            <div class="progress-fill" style="width: ${r}%;"></div>
          </div>
          <div style="font-size: 12px; color: var(--md-on-surface-variant); display: flex; justify-content: space-between;">
            <span>Đạt ${r}% yêu cầu tốt nghiệp</span>
            <span>Còn ${t.totalRequiredCredits-t.accumulatedCredits} tín chỉ</span>
          </div>
        </div>

        <!-- Setting Options List -->
        <div style="font-size: 14px; font-weight: 700; color: var(--md-on-surface); margin-bottom: 10px;">
          Cài đặt & Lịch cá nhân
        </div>

        <!-- Row 1: Giờ bận -->
        <div id="s08-busy-row" class="profile-row">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="color: var(--md-busy-icon);">${u(`clock`,22)}</div>
            <div>
              <div style="font-weight: 700; font-size: 14px;">Giờ bận cá nhân</div>
              <div style="font-size: 12px; color: var(--md-on-surface-variant);">
                Khung giờ cá nhân dùng để tránh trùng lịch học
              </div>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 6px;">
            <span class="status-tag status-tag-busy">${n.busyTimes.length} mục</span>
            ${u(`chevronRight`,18)}
          </div>
        </div>

        <!-- Row 2: Term Context -->
        <div class="profile-row" style="cursor: default;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="color: var(--md-primary);">${u(`calendar`,22)}</div>
            <div>
              <div style="font-weight: 700; font-size: 14px;">Học kỳ đang lập kế hoạch</div>
              <div style="font-size: 12px; color: var(--md-on-surface-variant);">
                Xuân 2027 · Kỳ 4
              </div>
            </div>
          </div>
          <span class="status-tag status-tag-neutral">Mở đăng ký</span>
        </div>

        <!-- Row 3: Logout -->
        <div id="s08-logout-row" class="profile-row" style="border-color: #FED7D7; margin-top: 16px;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="color: var(--md-error);">${u(`logout`,22)}</div>
            <div>
              <div style="font-weight: 700; font-size: 14px; color: var(--md-error);">Đăng xuất</div>
              <div style="font-size: 12px; color: var(--md-on-surface-variant);">
                Kết thúc phiên làm việc trên Semester
              </div>
            </div>
          </div>
          ${u(`chevronRight`,18)}
        </div>
      </div>
    </div>
  `,e.querySelector(`#s08-busy-row`)?.addEventListener(`click`,()=>{a(`S09`)}),e.querySelector(`#s08-logout-row`)?.addEventListener(`click`,()=>{b({onProceed:()=>{n.isLoggedIn=!1,D(`Đã đăng xuất khỏi Semester`),a(`S01`)}})})}function L(e){let t=n.busyTimes,r=c();function i(){let s=``;s=t.length===0?`
        <div class="empty-state-view">
          <div class="empty-state-icon" style="color: var(--md-busy-icon);">
            ${u(`clock`,36)}
          </div>
          <h2 class="empty-state-title">Chưa có giờ bận nào</h2>
          <p class="empty-state-desc">Khai báo thời gian bạn không thể học (như ca làm thêm, việc cá nhân) để hệ thống tự động tìm lớp phù hợp.</p>
          <button id="s09-add-busy-empty-btn" class="m3-btn m3-btn-primary">
            ${u(`plus`,18)} Thêm giờ bận
          </button>
        </div>
      `:`
        <div class="m3-banner m3-banner-info" style="margin-bottom: 16px;">
          ${u(`clock`,18)}
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
            ${t.length} mục · ${r} khung giờ/tuần
          </span>
        </div>

        <div class="busy-list" style="padding-bottom: 84px;">
          ${t.map(e=>`
            <div class="busy-item-card" data-id="${e.id}">
              <div style="flex: 1; padding-right: 8px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <strong style="font-size: 15px; color: var(--md-on-surface);">${e.name}</strong>
                  <span class="status-tag status-tag-neutral">${e.slotsPerWeek} khung/tuần</span>
                </div>
                <div style="font-size: 13px; color: var(--md-on-surface-variant); margin-top: 4px;">
                  ${u(`calendar`,12)} ${e.days.join(`, `)}
                </div>
                <div class="busy-time-tag">
                  ${u(`clock`,12)} ${e.time}
                </div>
              </div>

              <div style="display: flex; align-items: center; gap: 4px;">
                <button class="m3-icon-btn btn-edit-busy" data-id="${e.id}" title="Chỉnh sửa">
                  ${u(`edit`,18)}
                </button>
                <button class="m3-icon-btn btn-delete-busy" data-id="${e.id}" data-name="${e.name}" title="Xóa" style="color: var(--md-error);">
                  ${u(`trash`,18)}
                </button>
              </div>
            </div>
          `).join(``)}
        </div>

        <!-- Extended FAB -->
        <button id="s09-add-busy-fab" class="m3-fab" title="Thêm khung giờ bận mới">
          ${u(`plus`,20)}
          <span>Thêm giờ bận</span>
        </button>
      `,e.innerHTML=`
      <!-- App Bar with Back -->
      <header class="m3-app-bar">
        <div class="m3-app-bar-left">
          <button id="s09-back-btn" class="m3-icon-btn" title="Quay lại">
            ${u(`arrowLeft`,20)}
          </button>
          <h1 class="m3-app-bar-title">Giờ bận</h1>
        </div>
      </header>

      <div class="screen-root">
        <div class="screen-content">
          ${s}
        </div>
      </div>
    `,e.querySelector(`#s09-back-btn`)?.addEventListener(`click`,()=>{o()}),e.querySelector(`#s09-add-busy-fab`)?.addEventListener(`click`,()=>{a(`S10`,{editingBusyId:null})}),e.querySelector(`#s09-add-busy-empty-btn`)?.addEventListener(`click`,()=>{a(`S10`,{editingBusyId:null})}),e.querySelectorAll(`.btn-edit-busy`).forEach(e=>{e.addEventListener(`click`,()=>{a(`S10`,{editingBusyId:e.getAttribute(`data-id`)})})}),e.querySelectorAll(`.btn-delete-busy`).forEach(e=>{e.addEventListener(`click`,()=>{let r=e.getAttribute(`data-id`),a=e.getAttribute(`data-name`),o=t.find(e=>e.id===r);y({busyName:a,onProceed:()=>{n.busyTimes=n.busyTimes.filter(e=>e.id!==r),D(`Đã xóa giờ bận "${a}"`,{actionText:`Hoàn tác`,onAction:()=>{o&&(n.busyTimes.push(o),D(`Đã khôi phục "${a}"`),i())}}),i()}})})})}i()}function R(e){let t=!!n.editingBusyId,r=t?n.busyTimes.find(e=>e.id===n.editingBusyId):null,i=r?r.name:``,s=r?[...r.days]:[`T3`,`T5`,`T6`],c=r?r.start:`18:00`,l=r?r.end:`22:00`,d=!1,f=[{key:`T2`,label:`T2`},{key:`T3`,label:`T3`},{key:`T4`,label:`T4`},{key:`T5`,label:`T5`},{key:`T6`,label:`T6`},{key:`T7`,label:`T7`},{key:`CN`,label:`CN`}];function p(){let e=i.trim().length>0,t=s.length>0,[n,r]=c.split(`:`).map(Number),[a,o]=l.split(`:`).map(Number),u=n*60+r,d=a*60+o>u;return{isValid:e&&t&&d,isTimeValid:d,hasName:e,hasDays:t}}function m(){let h=p();e.innerHTML=`
      <!-- App Bar with Safe Back -->
      <header class="m3-app-bar">
        <div class="m3-app-bar-left">
          <button id="s10-back-btn" class="m3-icon-btn" title="Quay lại">
            ${u(`arrowLeft`,20)}
          </button>
          <h1 class="m3-app-bar-title">${t?`Sửa giờ bận`:`Thêm giờ bận`}</h1>
        </div>
      </header>

      <div class="screen-root" style="padding-bottom: 96px;">
        <div class="screen-content">
          <form id="s10-form" novalidate>
            <!-- Name Input -->
            <div class="m3-field-group">
              <label class="m3-field-label" for="s10-name-input">
                <span>Tên giờ bận</span>
                <span id="name-counter" class="m3-field-counter">${i.length}/40</span>
              </label>
              <div class="m3-input-wrapper">
                <input
                  type="text"
                  id="s10-name-input"
                  class="m3-input"
                  placeholder="VD: Highlands – ca tối"
                  maxlength="40"
                  value="${i}"
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
                ${f.map(e=>`
                    <button
                      type="button"
                      class="weekday-chip ${s.includes(e.key)?`active`:``}"
                      data-day="${e.key}"
                    >
                      ${e.label}
                    </button>
                  `).join(``)}
              </div>
              ${h.hasDays?``:`<div class="m3-field-helper error-text">${u(`alert`,12)} Chọn ít nhất một ngày trong tuần</div>`}
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
                    value="${c}"
                  />
                </div>
              </div>

              <div class="m3-field-group" style="flex: 1;">
                <label class="m3-field-label" for="s10-end-time">Kết thúc</label>
                <div class="m3-input-wrapper">
                  <input
                    type="time"
                    id="s10-end-time"
                    class="m3-input ${h.isTimeValid?``:`has-error`}"
                    value="${l}"
                  />
                </div>
              </div>
            </div>

            ${h.isTimeValid?``:`
                  <div class="m3-banner m3-banner-error" style="margin-top: -6px;">
                    ${u(`alert`,16)}
                    <div>
                      <strong>Giờ kết thúc phải sau giờ bắt đầu</strong>
                      <div style="font-size: 11px;">Vui lòng điều chỉnh để giờ kết thúc lớn hơn giờ bắt đầu (${c}).</div>
                    </div>
                  </div>
                `}

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
          ${h.isValid?``:`disabled`}
        >
          ${t?`Lưu thay đổi`:`Lưu giờ bận`}
        </button>
      </footer>
    `;let g=e.querySelector(`#s10-name-input`),_=e.querySelector(`#s10-start-time`),v=e.querySelector(`#s10-end-time`);g?.addEventListener(`input`,t=>{i=t.target.value,d=!0;let n=e.querySelector(`#name-counter`);n&&(n.textContent=`${i.length}/40`);let r=e.querySelector(`#s10-save-btn`);r&&(r.disabled=!p().isValid)}),_?.addEventListener(`change`,e=>{c=e.target.value,d=!0,m()}),v?.addEventListener(`change`,e=>{l=e.target.value,d=!0,m()}),e.querySelectorAll(`.weekday-chip`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-day`);s.includes(t)?s=s.filter(e=>e!==t):s.push(t),d=!0,m()})}),e.querySelector(`#s10-back-btn`)?.addEventListener(`click`,()=>{d?x({onProceed:()=>{o()}}):o()}),e.querySelector(`#s10-save-btn`)?.addEventListener(`click`,()=>{if(!p().isValid)return;let e=`${c}–${l}`,o=s.length;if(t&&r)r.name=i.trim(),r.days=s,r.start=c,r.end=l,r.time=e,r.slotsPerWeek=o,D(`Đã cập nhật giờ bận "${r.name}"`);else{let t=`B0${n.busyTimes.length+1}`;n.busyTimes.push({id:t,name:i.trim(),days:s,start:c,end:l,time:e,slotsPerWeek:o}),D(`Đã thêm giờ bận "${i.trim()}" (${o} khung/tuần)`)}a(`S09`)})}m()}document.addEventListener(`DOMContentLoaded`,()=>{let e=document.getElementById(`screen-root`),t=document.getElementById(`bottom-nav`),i=document.getElementById(`plan-badge-count`),o=document.getElementById(`phone-container`),s=document.getElementById(`info-drawer`),c=document.getElementById(`btn-toggle-info`),u=document.getElementById(`btn-close-drawer`),d=document.getElementById(`quick-screen-select`);p(),E();let f=[`S02`,`S03`,`S05`,`S08`];function m(){let r=n.currentScreen;switch(f.includes(r)?(t.classList.remove(`hidden`),document.querySelectorAll(`.nav-item`).forEach(e=>{let t=e.getAttribute(`data-screen`);e.classList.toggle(`active`,t===r)}),n.draftPlan.length>0?(i.textContent=n.draftPlan.length,i.classList.remove(`hidden`)):i.classList.add(`hidden`)):t.classList.add(`hidden`),d&&(d.value=r),e.scrollTop=0,r){case`S01`:k(e);break;case`S02`:A(e);break;case`S03`:j(e);break;case`S04`:M(e);break;case`S05`:N(e);break;case`S06`:P(e);break;case`S07`:F(e);break;case`S08`:I(e);break;case`S09`:L(e);break;case`S10`:R(e);break;default:A(e)}}r(()=>{m()}),document.querySelectorAll(`.nav-item`).forEach(e=>{e.addEventListener(`click`,()=>{a(e.getAttribute(`data-screen`))})}),document.querySelectorAll(`.flow-pill-btn`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`.flow-pill-btn`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),l(e.getAttribute(`data-flow`))})}),d?.addEventListener(`change`,e=>{e.target.value&&a(e.target.value)}),document.querySelectorAll(`.vp-btn`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`.vp-btn`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let t=e.getAttribute(`data-vp`);o.className=`phone-container vp-${t}`})}),c?.addEventListener(`click`,()=>{s.classList.toggle(`open`)}),u?.addEventListener(`click`,()=>{s.classList.remove(`open`)}),m()});