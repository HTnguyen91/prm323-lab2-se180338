# design/DESIGN.md — Semester · Student Course Planner

**Phiên bản:** 1.0 · 15/10/2026  
**Framework thiết kế:** Material Design 3 (Material You) · Android Light Theme  
**Ứng dụng:** Semester — thời khóa biểu và chọn môn/lớp học cho sinh viên

---

## 1. Hệ Màu Sắc (Color Tokens)

Hệ màu sử dụng chuẩn Material 3 — mỗi token có cặp màu chữ đảm bảo contrast ratio ≥ 4.5:1 (WCAG AA cho body text) và ≥ 3:1 (cho control/icon lớn).

### Primary Colors (Xanh dương đậm)
| Token | Hex | Mô tả |
|---|---|---|
| `primary` | `#3046C5` | Màu chủ đạo: nút, tiêu đề tab active, radio selected |
| `on-primary` | `#FFFFFF` | Chữ/icon trên nền primary |
| `primary-hover / pressed` | `#23379E` | Trạng thái bấm |
| `primary-container` | `#DDE1FF` | Nền nhẹ: chip selected, card highlight, FAB |
| `on-primary-container` | `#0B1A66` | Chữ/icon trên primary-container |

### Surface & Background
| Token | Hex | Mô tả |
|---|---|---|
| `background` | `#F7F8FC` | Nền toàn app |
| `surface` | `#FFFFFF` | Card, input, dialog |
| `surface-variant` | `#EBEDF4` | Navigation bar, chip không active |
| `surface-dim` | `#E5E7EF` | Dialog scrim, pressed card, skeleton |
| `on-surface` | `#1A1B21` | Chữ chính (body text) |
| `on-surface-variant` | `#44474F` | Chữ phụ (label, subtitle) |

### Outline & Divider
| Token | Hex | Mô tả |
|---|---|---|
| `outline` | `#74777F` | Viền control (input, chip unselected) |
| `outline-variant` | `#C4C6D0` | Đường kẻ nhẹ giữa các hàng |
| `divider` | `#E2E4EC` | Divider trong list / card |

### Semantic Colors (Ngữ nghĩa)
| Token | Hex nền | Hex chữ | Dùng cho |
|---|---|---|---|
| `busy` | `#FFDDB8` (icon: `#8A4F00`) | `#2E1500` | Khung giờ bận cá nhân trên lịch tuần |
| `error` | `#FFDAD6` | `#410002` (icon: `#BA1A1A`) | Lỗi form, lỗi trùng giờ, lỗi mạng |
| `success` | `#C9F0D2` | `#002110` (icon: `#1E6B37`) | Đăng ký thành công, hợp lịch, tiên quyết đủ |
| `warning` | `#FFE082` | `#331A00` (icon: `#995B00`) | Cảnh báo nhẹ (dialog xác nhận) |

### Màu đặc biệt
| Token | Hex chữ | Hex nền | Dùng cho |
|---|---|---|---|
| Navigation indicator active | `#141B2C` | `#DCE2F9` | Pill indicator tab đang active |
| Snackbar | `#F2F0F7` (action: `#B9C3FF`) | `#2F3036` | Toast thông báo |

---

## 2. Typography (Kiểu Chữ)

**Font chính:** Be Vietnam Pro  
**Fallback:** Inter → Roboto → sans-serif  
**Lý do chọn:** Be Vietnam Pro tối ưu cho tiếng Việt có dấu, bộ chữ gọn và đẹp trên màn hình nhỏ, hỗ trợ trọng lượng font từ 300–700 giúp phân cấp thông tin rõ ràng.

| Vai trò | Cỡ / Line Height | Trọng lượng | Áp dụng |
|---|---|---|---|
| Screen title (app bar) | 20sp / 28sp | Semibold 600 | Tên màn hình trên App Bar |
| Card title | 16sp / 24sp | Semibold 600 | Tên môn học, tiêu đề lớp |
| Body text | 14sp / 20sp | Regular 400 | Nội dung mô tả, thông tin phụ |
| Button / Chip / Tag | 14sp / 20sp | Semibold 600 | Tất cả nút bấm, chip filter |
| Helper / Error | 12sp / 16sp | Regular 400 | Gợi ý, thông báo lỗi inline |
| Navigation label | 12sp / 16sp | Medium 500 (active: Bold 700) | Nhãn tab điều hướng chính |
| Thông tin phụ nhỏ (room, section code) | 11sp / 14sp | Regular 400 | Phòng học, mã lớp trong thẻ nhỏ |

**Quy tắc bắt buộc:**  
- Body text tối thiểu 14sp (hỗ trợ scale 115%–130%).  
- Không khoá kích thước chữ (no text-scaling lock).  
- Tất cả thông tin quan trọng (giờ, phòng, lý do lỗi) phải được wrap đầy đủ — container tự mở rộng.

---

## 3. Spacing (Khoảng Cách)

Hệ thống spacing chuẩn Material 3, tất cả đơn vị tính bằng `dp` (density-independent pixels):

| Token | Giá trị | Dùng cho |
|---|---|---|
| `spacing-xs` | 4 dp | Khoảng cách giữa icon và text cùng hàng |
| `spacing-sm` | 8 dp | Khoảng giữa các chip, badge, pill |
| `spacing-md` | 12 dp | Padding trong card nhỏ |
| `spacing-base` | 16 dp | Margin ngang toàn app, padding card chính |
| `spacing-lg` | 24 dp | Khoảng cách giữa các section |
| `spacing-xl` | 32 dp | Padding trên/dưới empty state |
| `spacing-2xl` | 48 dp | Khoảng cách lớn, spacing giữa các group |

**Margin ngang chuẩn:** 16 dp (tất cả màn hình 360 và 412 dp).

---

## 4. Kích Thước Component (Sizing)

| Component | Kích thước | Ghi chú |
|---|---|---|
| App Bar | 64 dp chiều cao | Có back icon hoặc title |
| Navigation Bar | 80 dp chiều cao | Không tính safe area dưới |
| Touch target tối thiểu | 48 × 48 dp | WCAG AA accessibility |
| Button (Filled / Tonal / Outlined) | ≥ 48 dp chiều cao | Pill shape (radius = 9999 dp) |
| Text input field | ≥ 56 dp chiều cao | Radius 12 dp |
| Card | Radius 12 dp | Shadow elevation-1 |
| Dialog | Radius 28 dp | Shadow elevation-modal |
| FAB | ≥ 52 dp chiều cao | Radius 16 dp (extended: pill) |
| Icon tiêu chuẩn | 24 × 24 dp | Nhất quán toàn app |

---

## 5. Border Radius

| Biến | Giá trị | Áp dụng |
|---|---|---|
| `radius-xs` | 4 dp | Status tag, badge |
| `radius-sm` | 8 dp | Chip, dropdown |
| `radius-md` | 12 dp | Card, Text input, Section card |
| `radius-lg` | 16 dp | FAB, Profile hero card, Summary card |
| `radius-xl` | 24 dp | Logo block, lớn |
| `radius-dialog` | 28 dp | Dialog surface (theo MD3) |
| `radius-pill` | 9999 dp | Button, Navigation pill indicator |

---

## 6. Elevation (Đổ Bóng)

| Token | CSS Box Shadow | Áp dụng |
|---|---|---|
| `elevation-0` | none | Nền, surface thẳng |
| `elevation-1` | `0 1px 3px 1px rgba(0,0,0,.08), 0 1px 2px rgba(0,0,0,.12)` | Card thường, chip |
| `elevation-2` | `0 2px 6px 2px rgba(0,0,0,.09), 0 1px 2px rgba(0,0,0,.14)` | Card hover |
| `elevation-3` | `0 4px 12px 3px rgba(0,0,0,.10), 0 1px 3px rgba(0,0,0,.16)` | FAB, Snackbar |
| `elevation-modal` | `0 12px 36px rgba(15,23,42,.25)` | Dialog, Bottom sheet |

---

## 7. Quy Tắc Component (Component Rules)

### Button
- **Mỗi state chỉ có 1 nút Filled nổi bật** (prominent enabled action).
- Primary Filled: màu `primary` nền, `on-primary` chữ.
- Tonal: `primary-container` nền, `on-primary-container` chữ.
- Outline: trong suốt, viền `outline`, chữ `primary`.
- Text: trong suốt, chữ `primary`, không viền.
- Disabled: opacity 0.45, `pointer-events: none`.
- Trạng thái Loading: spinner + text, disable tất cả input.

### Card
- Nền trắng (`surface`), viền `divider`, shadow `elevation-1`.
- Card tương tác (bấm được): hover nâng lên `elevation-2`, pressed dùng `surface-dim`.
- Section card có thẻ lớp học: radio button 20×20 dp, card toàn bộ là vùng touch ≥ 48dp.

### Chip (Filter / Weekday)
- Filter chip: unselected = surface + viền `outline-variant`; selected = `primary-container` + viền `primary`.
- Chip selected phải có icon checkmark (không chỉ dùng màu để biểu thị trạng thái).

### Form fields (Text Input)
- Label **trên** input (không dùng floating label).
- Placeholder `on-surface-variant`.
- Focus outline: `primary` + shadow ring `primary-container`.
- Error: viền `error`, background `#FFF8F8`, helper text đỏ + icon.

### Status Tags (Trạng thái)
- **Luôn dùng cả icon LẪN chữ** để thể hiện trạng thái — không chỉ dùng màu sắc.
- `Hợp lịch` = icon ✓ + chữ (nền success-container).
- `Trùng giờ bận` = icon ⚠️ + chữ (nền busy).
- `Hết chỗ` = icon đóng + chữ (nền error-container).
- `Đã đăng ký` = icon ✓ + chữ (nền success-container).

### Navigation Bar
- Chỉ hiển thị trên 4 màn hình: S02, S03, S05, S08.
- Active indicator: pill 56×32 dp, màu `nav-indicator` (#DCE2F9).
- Tab active: icon + label đậm, chữ màu `nav-indicator-text`.
- Tab inactive: icon + label nhạt, màu `on-surface-variant`.

### Dialog Overlay
- Backdrop: `rgba(0,0,0,0.45)` + blur(4px).
- Surface: radius 28 dp, padding 24 dp, shadow modal.
- Animation: scale 0.92→1 + fade in (0.2s).
- Actions: text action bên trái (cancel/safe), filled action bên phải (confirm/destructive).
- Destructive action dùng màu `error` (đỏ).

### Snackbar / Toast
- Nền `snackbar-bg` (#2F3036), chữ `snackbar-text` (#F2F0F7).
- Action (Hoàn tác) dùng `snackbar-action` (#B9C3FF).
- Vị trí: bottom của screen, trên Navigation Bar (bottom: 88dp).
- Tự ẩn sau 4.5 giây.

---

## 8. Tone & Voice (Giọng Điệu Ứng Dụng)

| Tình huống | Tone | Ví dụ |
|---|---|---|
| Thông báo thành công | Ngắn gọn, tích cực | "Đã thêm DBI202 vào kế hoạch" |
| Cảnh báo xung đột | Trung lập, thực tế | "Lớp này trùng giờ bận Highlands – ca tối T3, T5" |
| Xác nhận hành động nguy hiểm | Rõ ràng về hậu quả | "Bạn có thể hoàn tác ngay sau khi xóa." |
| Lỗi mạng / kết quả chưa rõ | Thành thật, không đoán | "Kết nối bị gián đoạn. Kế hoạch của bạn vẫn được giữ nguyên." |
| Trạng thái loading | Trấn an người dùng | "Kế hoạch của bạn vẫn được giữ nguyên an toàn." |

**Nguyên tắc chung:**
- Tất cả UI text bằng **tiếng Việt tự nhiên** (không dùng từ kỹ thuật tắt).
- Không đưa ra kết luận khi kết quả chưa rõ (không nói "chưa đăng ký được lớp nào" khi không biết).
- Không hứa hẹn về chính sách chưa xác minh (hủy 24h, lưu mật khẩu tự động v.v.).
- Lỗi inline phải giải thích được tại sao và cách sửa.

---

## 9. Quy Tắc Layout

- **Single column**, margin ngang 16 dp, không grid nhiều cột trên 360 dp.
- Safe area padding: tránh nội dung bị che bởi bottom nav, FAB, snackbar, bàn phím ảo.
- FAB vị trí: bottom-right, `bottom: 24dp, right: 16dp`, scroll list có padding-bottom đủ để không bị che.
- Màn hình scroll dọc: `overflow-y: auto`, tránh overflow ngang.
- Container auto-grow: card, button, form tự giãn khi text lớn — không cắt text.
- Phiên bản 412 dp: giữ single column, tăng vùng touch tự nhiên do màn rộng hơn.

---

## 10. Accessibility Checklist

- [ ] Body text contrast ≥ 4.5:1 (text thường trên nền)
- [ ] UI control contrast ≥ 3:1 (icon, viền input trên nền)
- [ ] Touch target ≥ 48×48 dp cho mọi phần tử tương tác
- [ ] Không dùng màu đơn thuần để biểu thị thông tin (luôn kèm text/icon)
- [ ] Text scaling 115%–130%: layout không bị vỡ, text không bị cắt
- [ ] Form input có label rõ ràng ở phía trên
- [ ] Lỗi inline có icon + text (không chỉ viền đỏ)
- [ ] Toàn bộ nội dung quan trọng không bị che bởi keyboard/fixed bars
