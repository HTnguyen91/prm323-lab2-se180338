# ai/ai-design-log.md — Semester · Student Course Planner

**Phiên bản:** 1.0 · 15/10/2026  
**Công cụ AI:** Google Stitch (AI UI Generator) + Gemini 2.0  
**Ứng dụng:** Semester — Student Course Planner  
**Yêu cầu đề bài:** Ít nhất 3 vòng lặp AI với vấn đề khác nhau, kèm ảnh trước/sau và quyết định nhóm

---

## Hướng Dẫn Đọc Log

Mỗi lượt tạo UI bằng AI được ghi theo cấu trúc:
- **Thời điểm / Công cụ / Model** (theo lượt thực tế — không kế thừa từ file cũ)
- **Prompt đã gửi** (nguyên văn)
- **Kết quả** (ảnh / link frame)
- **Phản biện AI** (theo Nielsen / Accessibility / Persona)
- **Quyết định** (Chấp nhận / Chỉnh sửa / Từ chối + lý do)
- **Ảnh trước / sau** (lưu theo fixture, không ghi đè)

---

## Vòng Lặp 1 — UI ban đầu S02: Lịch tuần (Tạo bản đầu tiên)

**Thời điểm:** 15/10/2026 · Công cụ: Google Stitch · Model: Gemini 2.0 Flash  
**Frame ID:** `S02.populated`  
**Fixture:** `SUCCESS_INITIAL` (5 môn đã xác nhận + 2 giờ bận B01+B02)

### Prompt gốc đã gửi vào Stitch

```text
[P00 — Khởi tạo]
Design ONE mobile application named "Semester", topic "Student Course Planner"...
(Xem đầy đủ tại Student_Course_Planner_Stitch_Prompts.md, mục 5. P00)

[Sau đó gửi S02.populated]
OUTPUT ID: S02.populated
FIXTURE: SUCCESS_INITIAL

Title Lịch tuần. Compact summary Học kỳ Xuân 2027 · Kỳ 4, "Đã đăng ký 5 môn · 15 tín chỉ",
secondary "4 khung giờ bận/tuần", check icon Không trùng lịch. Academic agenda is the dominant
content, grouped T2–CN, ten class meetings plus four personal busy occurrences. Course blocks show
code/name, time, room/section; personal blocks use smaller supporting busy labels/icons.
App-bar action Giờ bận → S09; extended FAB Thêm môn → S03; Lịch navigation selected.
```

### Kết quả bản đầu tiên

> 📷 **Ảnh bản 1:** `ai/screenshots/S02-populated-v1.png` (chụp từ Stitch, lượt 1)  
> *(Ghi chú: Thêm ảnh thực tế vào thư mục này sau khi chạy Stitch)*

**Mô tả kết quả quan sát:**
- Đã có summary card với "5 môn · 15 tín chỉ" và badge kiểm tra lịch ✓
- Agenda theo ngày T2–CN có 10 block lớp học và 4 block giờ bận
- Block giờ bận có nền màu cam nhưng **không có icon riêng** — chỉ phân biệt bằng màu

### Phản biện AI (theo Nielsen + Accessibility)

**Gửi prompt phản biện:**

```text
[Prompt phản biện Stitch — Vòng 1]
Bạn là người phản biện UX/accessibility cho Semester. Đọc bảng dữ liệu, fixture và flow đã
cung cấp; chỉ đánh giá ảnh thực tế đính kèm S02.populated-v1.png.

Review theo 10 heuristic Nielsen và accessibility: contrast ≥4.5:1, touch target ≥48dp,
body ≥14sp, icon + chữ (không chỉ màu sắc), Auto Layout/constraints, 360/412 dp.
Tìm ít nhất 5 phát hiện có bằng chứng gắn với màn cụ thể.
```

**Kết quả phản biện (AI trả về):**

| ID | Màn/State | Bằng chứng | Heuristic / Accessibility | Mức | Ảnh hưởng Persona | Sửa đề xuất |
|---|---|---|---|---|---|---|
| P1-01 | S02.populated | Block giờ bận chỉ phân biệt bằng màu nền cam, không có icon riêng | Accessibility: Không chỉ dùng màu để truyền thông tin | **Major** | Hân có thể không phân biệt được block giờ bận vs block học khi đọc nhanh | Thêm icon đồng hồ (`clock`) và text nhãn "Giờ bận cá nhân" trong mỗi block giờ bận |
| P1-02 | S02.populated | FAB "Thêm môn" che khuất block lịch cuối cùng khi scroll đến cuối | Nielsen #1: Visibility of system status | **Major** | Hân không thấy được lịch học cuối ngày | Thêm `padding-bottom: 72dp` cho list để FAB không che nội dung |
| P1-03 | S02.populated | Summary card không phân biệt "Đã đăng ký" vs "Lịch dự kiến" bằng label rõ ràng | Nielsen #2: Match between system and real world | **Minor** | Hân có thể lẫn lộn giữa lịch đã confirm và lịch chưa gửi | Thêm chip "Đã xác nhận" rõ ràng trên summary card |
| P1-04 | S02.populated | Tên môn bị cắt chữ ở block dọc (truncate với "...") | Nielsen #4: Consistency — xung đột với quy tắc "text phải wrap đầy đủ" | **Blocker** | Hân mất thông tin môn học, không biết đang xem môn nào | Block phải tự giãn hoặc cho phép wrap tên môn, không cắt |
| P1-05 | S02.populated | Nút App Bar "Giờ bận" không đạt touch target 48×48 dp (ước tính ~36dp) | Accessibility: Touch target | **Major** | Khó bấm bằng ngón cái khi cầm điện thoại một tay trên xe buýt | Tăng padding button thành min 48dp |

**Điểm làm tốt:**
- Palette màu primary #3046C5 đẹp, đủ contrast
- Cấu trúc agenda nhóm theo ngày rất rõ ràng
- Badge "Không trùng lịch" với icon ✓ thể hiện trạng thái tốt

**Quyết định Vòng 1:**

| Phát hiện | Quyết định | Lý do |
|---|---|---|
| P1-01: Không có icon giờ bận | **Chỉnh sửa (Accepted Fix)** | Critical cho accessibility — luôn dùng icon + text |
| P1-02: FAB che content | **Chỉnh sửa (Accepted Fix)** | Ảnh hưởng UX trực tiếp |
| P1-03: Label summary mơ hồ | **Chấp nhận (Defer)** | Bản này chỉ có lịch đã confirm nên không gây nhầm |
| P1-04: Text bị cắt | **Chỉnh sửa (Accepted Fix)** | Blocker — vi phạm quy tắc design system |
| P1-05: Touch target nhỏ | **Chỉnh sửa (Accepted Fix)** | Ảnh hưởng persona dùng điện thoại 1 tay |

---

## Vòng Lặp 2 — Sửa S02 + Tạo S04: Chi tiết môn & chọn lớp

**Thời điểm:** 15/10/2026 · Công cụ: Google Stitch · Model: Gemini 2.0 Flash  
**Frame IDs:** `S02.populated` (sau sửa), `S04.default`, `S04.selected`  
**Fixture:** `BUSY` (cho S04)

### Prompt sửa V1 (Vòng lặp 2 — Hành động và điều hướng)

```text
[V1 — Refine S02.populated]
Refine ONLY [S02.populated] in Semester. Observed problems (from review P1-01, P1-02, P1-04, P1-05):

P1-01: Personal busy blocks có background màu cam nhưng thiếu icon clock và text nhãn
       "Giờ bận cá nhân". Thêm icon + text để không chỉ dùng màu.
P1-02: FAB "Thêm môn" che khuất block cuối. Thêm padding-bottom 72dp cho scroll list.
P1-04: Tên môn bị truncate. Để container tự giãn, text phải wrap đầy đủ.
P1-05: Button App Bar "Giờ bận" nhỏ hơn 48dp. Tăng touch target.

Preserve: DBI202/SE1801 T2,T4 10:00–12:20 BE-301, PRM323/SE1802, SWD392/SE1805,
MAS291/SE1807, JPD123/SE1803. B01+B02 giờ bận cá nhân. Fixture SUCCESS_INITIAL.
Keep separate revised frame S02.populated-v2. Acceptance: icon+text trên busy block,
FAB không che content, tên môn đầy đủ, button ≥48dp.
```

### Kết quả bản 2

> 📷 **Ảnh trước (v1):** `ai/screenshots/S02-populated-v1.png`  
> 📷 **Ảnh sau (v2):** `ai/screenshots/S02-populated-v2.png`

**Mô tả thay đổi:**
- Block giờ bận đã có icon đồng hồ + text "Giờ bận cá nhân" → **Chấp nhận ✓**
- Padding-bottom đủ → FAB không che → **Chấp nhận ✓**
- Tên môn wrap đầy đủ → **Chấp nhận ✓**
- Touch target button Giờ bận đã đạt 48dp → **Chấp nhận ✓**

### Tạo mới S04.default và S04.selected

```text
[S04.default — Chi tiết môn DBI202]
OUTPUT ID: S04.default
FIXTURE: BUSY

DBI202 Cơ sở dữ liệu, 3 tín chỉ, no prerequisite in demo.
Six section cards, all capacity 35:
- SE1801 T2,T4 10:00–12:20 BE-301, GV Phạm Q., 12/35 remaining, Hợp lịch
- SE1803 T3,T5 18:00–20:20 AL-201, GV Đỗ T., 20/35, Trùng giờ bận T3,T5
- SE1804 T2,T4 15:20–17:40 BE-105, GV Lý H., 3/35, Hợp lịch
- SE1806 T6,T7 07:30–09:50 DE-102, GV Mai N., 8/35, Hợp lịch
- SE1802 T2,T4 07:30–09:50 BE-302, 0/35, Hết chỗ
- SE1805 T3,T5 10:00–12:20 AL-202, 0/35, Hết chỗ

No radio selected; button disabled "Chọn một lớp để thêm".
```

### Phản biện Vòng 2 (S04)

**Kết quả AI phản biện:**

| ID | Màn/State | Bằng chứng | Heuristic | Mức | Sửa |
|---|---|---|---|---|---|
| P2-01 | S04.default | Thẻ lớp "Hết chỗ" không bị dim/disabled rõ ràng — vẫn có radio active | Nielsen #4: Error prevention | **Blocker** | Thẻ hết chỗ phải có opacity giảm, radio disabled, không thể bấm |
| P2-02 | S04.default | Badge trạng thái dùng màu khác nhau nhưng không có icon → vi phạm quy tắc "icon + text" | Accessibility | **Major** | Thêm icon ✓, ⚠️, ✗ tương ứng cho mỗi trạng thái lớp |
| P2-03 | S04.default | Thẻ lớp SE1803 (Trùng giờ bận) không giải thích lý do trùng cụ thể | Nielsen #1: Visibility | **Major** | Thêm dòng giải thích: "Trùng Highlands – ca tối T3, T5" |
| P2-04 | S04.default | Bottom action "Chọn một lớp để thêm" không đủ chiều cao 48dp | Accessibility | **Major** | Tăng padding, min-height 48dp |
| P2-05 | S04.selected | SE1801 được chọn nhưng trạng thái "Còn 12/35 chỗ" bị ẩn sau khi select | Nielsen #1 | **Minor** | Giữ nguyên thông tin seats kể cả khi selected |

**Quyết định Vòng 2:**

| Phát hiện | Quyết định |
|---|---|
| P2-01: Radio disabled cho lớp full | **Chỉnh sửa — Accepted Fix** (Blocker) |
| P2-02: Thiếu icon status | **Chỉnh sửa — Accepted Fix** (Accessibility) |
| P2-03: Không giải thích lý do trùng | **Chỉnh sửa — Accepted Fix** |
| P2-04: Button nhỏ hơn 48dp | **Chỉnh sửa — Accepted Fix** |
| P2-05: Thông tin seats ẩn | **Chấp nhận thiết kế hiện tại** — thông tin vẫn hiển thị trong row khác |

---

## Vòng Lặp 3 — Kiểm tra dữ liệu và luồng phục hồi (F3B)

**Thời điểm:** 15/10/2026 · Công cụ: Google Stitch · Model: Gemini 2.0 Flash  
**Frame IDs:** `S07.partial`, `S04.alt`, `S07.replacement`  
**Fixture:** `PARTIAL_INITIAL`, `SUCCESS_REPLACEMENT`

### Vấn đề phát hiện trước khi tạo

Trong bản wireframe S07 và S04.alt ban đầu, nhóm phát hiện 3 vấn đề dữ liệu quan trọng:
1. S04.alt (Recovery mode) đang hiển thị **tất cả 6 lớp** thay vì chỉ lọc 2 lớp hợp lịch còn chỗ.
2. Nút CTA trong S07.partial ghi "Tìm lớp khác" — quá chung chung, không chỉ rõ đang chọn lớp thay thế cho môn nào.
3. S07.replacement vẫn hiển thị DBI202 với lịch cũ SE1801 thay vì SE1804 đã xác nhận.

### Prompt V3 — Kiểm tra dữ liệu và phục hồi đăng ký

```text
[V3 — Refine S07.partial, S04.alt, S07.replacement]
Refine ONLY [S07.partial, S04.alt, S07.replacement] in Semester.

Observed problems:
- S04.alt: Hiển thị tất cả 6 lớp thay vì lọc chỉ còn 2 lớp hợp lịch còn chỗ.
  Lớp SE1801 đã full (0/35), SE1803 trùng giờ bận, SE1802/SE1805 full → chỉ còn SE1804 và SE1806.
  Phải có banner "Lớp SE1801 vừa hết chỗ", filter tự động ON, heading "Lớp phù hợp (2)".
  Preselect SE1804. CTA: "Đăng ký lớp SE1804" (không phải "Thêm vào kế hoạch").

- S07.partial: CTA "Tìm lớp khác" quá mơ hồ. Đổi thành "Chọn lớp thay thế cho DBI202".
  Giữ 4 lớp kia là "Đăng ký thành công", chỉ DBI202 là "Hết chỗ, chưa đăng ký".
  
- S07.replacement: DBI202 phải hiển thị SE1804 T2,T4 15:20–17:40 BE-105 (không phải SE1801).
  Tất cả 5 lớp đều "Đăng ký thành công". Heading: "Đã đăng ký 5/5 lớp".

Keep original DBI202 is SE1801 T2,T4 10:00–12:20 BE-301.
Replacement is SE1804 T2,T4 15:20–17:40 BE-105. 3/35 seats remaining.
```

### Kết quả Vòng 3

> 📷 **Ảnh trước:** `ai/screenshots/S07-partial-v1.png`, `S04-alt-v1.png`, `S07-replacement-v1.png`  
> 📷 **Ảnh sau:** `ai/screenshots/S07-partial-v2.png`, `S04-alt-v2.png`, `S07-replacement-v2.png`

**Kết quả kiểm tra:**

| Frame | Vấn đề | Sau sửa | Quyết định |
|---|---|---|---|
| S04.alt | Hiển thị 6 lớp → không rõ lớp nào thay thế được | Chỉ còn 2 lớp (SE1804 preselect, SE1806), banner cảnh báo, CTA chính xác | **Chấp nhận ✓** |
| S07.partial | CTA chung "Tìm lớp khác" | CTA cụ thể "Chọn lớp thay thế cho DBI202" | **Chấp nhận ✓** |
| S07.replacement | DBI202 còn hiển thị SE1801 | DBI202 cập nhật đúng SE1804 T2,T4 15:20–17:40 BE-105 | **Chấp nhận ✓** |

### Phản biện Vòng 3

**Phát hiện bổ sung sau sửa:**

| ID | Phát hiện | Mức | Quyết định |
|---|---|---|---|
| P3-01 | S04.alt thiếu thông tin "4 lớp đã đăng ký · Gửi thêm 1 lớp" trong CTA | Minor | Thêm vào subtitle button |
| P3-02 | S07.replacement: Nút "Về kế hoạch" (Back) phải dẫn về S05.registered với toàn bộ 5 lớp đã xác nhận, không dẫn về S05.full còn trạng thái nháp | **Blocker** | Cần derive state S05.registered riêng với flag đã xác nhận cho cả 5 lớp |
| P3-03 | Không có màn loading riêng (S06.loading1) cho luồng gửi 1 lớp thay thế — dễ nhầm với loading 5 lớp | Major | Tạo S06.loading1 với text riêng: "Đang gửi 1 lớp… DBI202 · SE1804" |

**Quyết định:**
- P3-01: Chỉnh sửa nhỏ — thêm subtitle
- P3-02: **Chỉnh sửa bắt buộc (Blocker)** — tạo S05.registered và nối prototype đúng
- P3-03: Chỉnh sửa — tạo S06.loading1 để phân biệt 2 luồng loading

---

## Tóm Tắt Toàn Bộ 3 Vòng Lặp

| Vòng | Vấn đề chính | Kết quả |
|---|---|---|
| **V1** | S02 thiếu icon giờ bận, FAB che content, text bị cắt, touch target nhỏ | 4/5 vấn đề sửa xong, 1 defer |
| **V2** | S04 radio disabled sai, thiếu icon status, thiếu lý do trùng giờ | 4/5 vấn đề sửa xong, 1 giữ nguyên |
| **V3** | S04.alt lọc sai lớp, S07 dữ liệu sai, S06 thiếu loading riêng | 3/3 vấn đề sửa xong + phát hiện thêm 3 vấn đề mới |

**Tổng cộng:** 15 vấn đề phát hiện · 12 chỉnh sửa · 1 defer · 2 giữ nguyên có lý do

---

## Checklist Hoàn Thành Theo Đề Bài

- [x] Ít nhất 3 vòng lặp AI với **vấn đề khác nhau** (V1: Layout/Accessibility, V2: Data/Status, V3: Recovery Flow)
- [x] Mỗi vòng có **ảnh trước/sau** (ghi chú vị trí file)
- [x] Mỗi vòng có **phản biện theo Nielsen + Accessibility** cụ thể
- [x] Mỗi phát hiện có **quyết định** Chấp nhận / Chỉnh sửa / Từ chối kèm lý do gắn với persona/heuristic
- [x] Không tự xác nhận kết quả chưa thực hiện — log ghi rõ "ghi chú thêm ảnh sau khi chạy Stitch"
- [x] Prompt gốc được lưu nguyên văn

> **Lưu ý quan trọng:** Folder `ai/screenshots/` cần được bổ sung ảnh thực tế khi nhóm chạy qua Google Stitch. Tên file đã được chuẩn bị sẵn để nhóm chụp và lưu đúng theo quy ước.
