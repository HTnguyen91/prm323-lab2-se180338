# ux/user-flow.md — Semester · Student Course Planner

**Phiên bản:** 1.0 · 15/10/2026  
**Tác giả:** Nhóm PRM323 Lab 2  
**Ứng dụng:** Semester — thời khóa biểu và chọn môn/lớp học cho sinh viên

---

## 1. Information Architecture (IA)

```
Semester
├── S01 · Đăng nhập
│
├── [Tab] S02 · Lịch tuần
│          ├── → S09 · Giờ bận (qua App Bar button)
│          └── → S03 · Tìm môn (qua FAB Thêm môn)
│
├── [Tab] S03 · Tìm môn
│          └── → S04 · Chi tiết môn & chọn lớp
│
├── [Tab] S05 · Kế hoạch
│          ├── → S04 · Chi tiết môn (Đổi lớp)
│          └── → S06 · Xem lại & gửi đăng ký
│                   └── → S07 · Kết quả đăng ký
│                            ├── (success) → S02 · Lịch tuần
│                            └── (partial) → S04.alt · Chọn lớp thay thế
│                                                └── → S06.loading1 → S07.replacement
│
└── [Tab] S08 · Cá nhân
           └── → S09 · Giờ bận
                    └── → S10 · Thêm / Sửa giờ bận

Dialog Overlays (không phải màn hình độc lập):
  D1 — Cảnh báo lớp trùng giờ bận
  D2 — Xác nhận gửi đăng ký
  D3 — Xác nhận xóa môn khỏi kế hoạch
  D4 — Xác nhận xóa giờ bận
  D5 — Xác nhận đăng xuất
  D6 — Cảnh báo thoát form chưa lưu
```

---

## 2. Bản Đồ Màn Hình (Screen Map)

| Mã | Màn hình | Loại | Tab điều hướng |
|---|---|---|---|
| S01 | Đăng nhập | Root / Entry | Không có |
| S02 | Lịch tuần | Top-level Tab | Lịch |
| S03 | Tìm môn | Top-level Tab | Tìm môn |
| S04 | Chi tiết môn & chọn lớp | Nested (Back → S03/S05/S07) | Không có |
| S05 | Kế hoạch | Top-level Tab | Kế hoạch |
| S06 | Xem lại & gửi đăng ký | Nested (Back → S05) | Không có |
| S07 | Kết quả đăng ký | Nested (Back → S05 theo trạng thái) | Không có |
| S08 | Cá nhân | Top-level Tab | Cá nhân |
| S09 | Giờ bận cá nhân | Nested (Back → S02 hoặc S08) | Không có |
| S10 | Thêm / Sửa giờ bận | Nested (Back → S09, D6 nếu bẩn) | Không có |

---

## 3. Flow F1 — Khai Báo Thời Gian Không Thể Học

**Mục tiêu:** Thiết lập các khung giờ làm thêm cá nhân làm ràng buộc để hệ thống tự động kiểm tra xung đột lớp học.  
**Điểm bắt đầu:** `S01.default` (Màn hình đăng nhập, lần đầu sử dụng)  
**Điểm kết thúc:** `S02.busy` (Lịch tuần hiển thị 4 khung giờ bận/tuần, sẵn sàng chọn môn)

### Đường chính (Happy Path)

```
S01.default
   ↓ [Nhập MSSV SE180123 + Mật khẩu]
S01.filled
   ↓ [Bấm Đăng nhập]
S01.loading  ─── (700ms mô phỏng) ───→  S02.empty
                                              ↓ [Bấm Khai báo giờ bận]
                                         S09.empty
                                              ↓ [Bấm Thêm giờ bận (FAB)]
                                         S10.default
                                              ↓ [Nhập: "Highlands – ca tối", T3/T5/T6, 18:00–22:00]
                                         S10.filled
                                              ↓ [Bấm Lưu giờ bận]
                                         S10.saving ──→  S09.saved (1 mục B01, snackbar Đã lưu)
                                                              ↓ [Bấm FAB Thêm giờ bận]
                                                         S10.default
                                                              ↓ [Nhập: "Highlands – ca sáng", CN, 07:00–12:00]
                                                         S10.filledB02
                                                              ↓ [Bấm Lưu giờ bận]
                                                         S09.populated (2 mục, 4 khung giờ/tuần)
                                                              ↓ [Bấm Back]
                                                         S02.busy
                                                         [KẾT THÚC F1 ✓]
```

### Nhánh lỗi / phục hồi của F1

| Tình huống | Nhánh xử lý |
|---|---|
| **Đăng nhập sai thông tin** | `S01.filled` → `S01.error` (inline error + cho nhập lại) |
| **Nhập giờ kết thúc ≤ giờ bắt đầu** | `S10.filled` → `S10.error` (inline error đỏ "Giờ kết thúc phải sau giờ bắt đầu") |
| **Thoát form khi đã sửa nhưng chưa lưu** | `S10.filled` + Back → Dialog `D6` → "Tiếp tục nhập" (giữ dữ liệu) hoặc "Bỏ thay đổi" (quay về) |
| **Xóa giờ bận B01** | `S09.populated` → Icon xóa → Dialog `D4` xác nhận → Còn lại B02 (1 mục/1 khung) |

---

## 4. Flow F2 — Tìm Môn & Thêm Lớp Phù Hợp Vào Kế Hoạch

**Mục tiêu:** Tìm kiếm, xem chi tiết lớp học phần và thêm 5 môn (DBI202 làm môn demo chính) vào bản nháp kế hoạch học kỳ.  
**Điểm bắt đầu:** `S02.busy` (Lịch tuần với 4 khung giờ bận đã khai báo)  
**Điểm kết thúc:** `S05.full` (Kế hoạch đủ 5 môn/15 tín chỉ, không trùng lịch, sẵn sàng gửi)

### Đường chính (Happy Path) — Demo môn DBI202

```
S02.busy
   ↓ [Bấm FAB Thêm môn / Tab Tìm môn]
S03.default
   ↓ [Gõ "DBI" vào ô tìm kiếm]
S03.results  (1 kết quả: DBI202 Cơ sở dữ liệu, 6 lớp/3 hợp lịch còn chỗ)
   ↓ [Bấm vào card DBI202]
S04.default  (6 thẻ lớp: SE1801 Hợp lịch / SE1803 Trùng giờ bận / SE1804 Hợp lịch /
              SE1806 Hợp lịch / SE1802 Hết chỗ / SE1805 Hết chỗ)
   ↓ [Bấm thẻ SE1801 → radio được chọn]
S04.selected  (SE1801 T2,T4 10:00–12:20 BE-301, còn 12/35 chỗ)
   ↓ [Bấm Thêm lớp SE1801 vào kế hoạch]
S04.added  (Snackbar "Đã thêm DBI202 vào kế hoạch" + nút Hoàn tác)
   ↓ [Bấm Mở kế hoạch / Tiếp tục chọn 4 môn còn lại]
S05.one → ... thêm PRM323, SWD392, MAS291, JPD123 ... → S05.full
                                                          [KẾT THÚC F2 ✓]
```

### Nhánh lỗi / phục hồi của F2

| Tình huống | Nhánh xử lý |
|---|---|
| **Tìm kiếm sai từ khoá** | `S03.default` → `S03.empty` (Zero-match, nút "Xóa từ khóa") |
| **Chọn lớp SE1803 trùng giờ bận** | `S04.default` → Dialog `D1` "Lớp này trùng giờ bận" → "Vẫn thêm" (→ S05.conflict) hoặc "Chọn lớp khác" |
| **Chọn lớp đã hết chỗ** | Thẻ SE1802/SE1805 disabled, không thể bấm chọn; Snackbar cảnh báo |
| **Hoàn tác vừa thêm môn** | Snackbar "Đã thêm..." + nút Hoàn tác → Xóa khỏi nháp, quay lại S04.selected |
| **Xóa môn khỏi kế hoạch** | `S05.full` → Icon xóa → Dialog `D3` xác nhận → `S05.deleted` (4 môn) + Snackbar Hoàn tác |
| **Môn có xung đột trong kế hoạch** | `S05.conflict` — nút gửi bị khoá, banner cảnh báo, bấm vào môn xung đột → S04 để đổi lớp |

---

## 5. Flow F3 — Gửi Đăng Ký & Phục Hồi Khi Xảy Ra Sự Cố

### 5A. Flow F3A — Gửi Đăng Ký Thành Công (Happy Path)

**Mục tiêu:** Gửi đăng ký 5 lớp học phần và nhận xác nhận thành công.  
**Điểm bắt đầu:** `S05.full` (Kế hoạch 5 môn/15 tín chỉ, không trùng lịch)  
**Điểm kết thúc:** `S02.populated` (Lịch tuần chính thức sau đăng ký thành công)

```
S05.full
   ↓ [Bấm Xem lại & gửi đăng ký]
S06.default  (Bảng tổng kết 5 lớp, read-only)
   ↓ [Bấm Gửi đăng ký (5 lớp)]
Dialog D2: "Gửi đăng ký 5 lớp?"
   ↓ [Bấm Gửi] (Để sau → đóng dialog, không gửi)
S06.loading  (Spinner "Đang gửi 5 lớp…", kế hoạch giữ nguyên)
   ↓ (1.2 giây mô phỏng)
S07.success  (Đã đăng ký 5/5 lớp thành công · 15 tín chỉ)
   ↓ [Bấm Xem lịch tuần]
S02.populated  (10 buổi học + 4 khung giờ bận hiển thị đầy đủ)
[KẾT THÚC F3A ✓]
```

### 5B. Flow F3B — Phục Hồi Khi Lớp Hết Chỗ (Recovery Branch)

**Mục tiêu:** Xử lý tình huống 1 lớp học phần bị hết chỗ trong lúc gửi đăng ký, chọn lớp thay thế và hoàn tất đăng ký.  
**Điểm bắt đầu:** `S06.loading` (Đang gửi 5 lớp)  
**Điểm kết thúc:** `S02.replacement` (Lịch tuần với DBI202 thay thế thành SE1804)

```
S06.loading
   ↓ (DBI202/SE1801 hết chỗ 0/35 ngay lúc gửi)
S07.partial  (Đã đăng ký 4/5 lớp — DBI202 hết chỗ, chưa đăng ký được)
   ↓ [Bấm Chọn lớp thay thế cho DBI202]
S04.alt  (Chế độ recovery: Banner "Lớp SE1801 vừa hết chỗ!" +
          Lọc tự động → chỉ hiển thị 2 lớp hợp lịch còn chỗ:
          SE1804 T2,T4 15:20–17:40 BE-105 (3/35) — preselect
          SE1806 T6,T7 07:30–09:50 DE-102 (8/35))
   ↓ [Giữ mặc định SE1804 hoặc chọn SE1806]
   ↓ [Bấm Đăng ký lớp thay thế SE1804]
S06.loading1  (Spinner "Đang gửi 1 lớp… DBI202 · SE1804 · 4 lớp đã đăng ký được giữ nguyên")
   ↓ (Xác nhận thành công)
S07.replacement  (Đã đăng ký 5/5 lớp — DBI202 đổi sang SE1804 15:20–17:40 BE-105)
   ↓ [Bấm Xem lịch tuần mới]
S02.replacement  (Lịch tuần cập nhật: DBI202/SE1804 T2,T4 15:20–17:40)
[KẾT THÚC F3B ✓]
```

### 5C. Nhánh lỗi mạng của F3

| Tình huống | Nhánh xử lý |
|---|---|
| **Mất kết nối lúc gửi 5 lớp** | `S06.loading` → `S06.error` "Chưa xác nhận được kết quả" → "Thử lại" (→ S06.loading, giữ dữ liệu) hoặc "Về kế hoạch" (→ S05 trạng thái chưa rõ) |
| **Mất kết nối lúc gửi lớp thay thế** | `S06.loading1` → `S06.error1` "4 đã xác nhận · 1 lớp chưa xác nhận" → "Thử lại" (chỉ retry DBI/SE1804) |

---

## 6. Bảng Ánh Xạ Screen → Flow

| Màn hình / State | Thuộc Flow | Vai trò |
|---|---|---|
| S01.default / filled / loading / error | F1 | Xác thực danh tính người dùng |
| S02.empty | F1 | Điểm đến sau đăng nhập lần đầu |
| S09.empty / saved / populated | F1 | Quản lý giờ bận cá nhân |
| S10.default / filled / error / saving / edit / filledB02 | F1 | Form nhập/sửa giờ bận |
| S03.default / results / empty / loading | F2 | Tìm kiếm môn học phần |
| S04.default / selected / added / loading / prm / blocked | F2 | Chọn lớp học phần |
| S04.change / changeSelected | F2 | Đổi lớp học phần đã có trong nháp |
| S05.empty / one / full / conflict / deleted | F2 | Quản lý kế hoạch học kỳ (bản nháp) |
| S06.default | F3A/F3B | Xem lại và gửi đăng ký |
| S06.loading / error | F3A | Gửi 5 lớp + xử lý mất mạng |
| S06.loading1 / error1 | F3B | Gửi lớp thay thế + xử lý mất mạng |
| S07.success | F3A | Kết quả thành công hoàn toàn |
| S07.partial | F3B bắt đầu | Kết quả thất bại 1 lớp |
| S04.alt | F3B phục hồi | Chọn lớp thay thế khi SE1801 hết chỗ |
| S07.replacement | F3B kết thúc | Kết quả thành công sau thay thế lớp |
| S02.populated | F3A / F1 kết thúc | Lịch tuần đầy đủ sau đăng ký |
| S02.replacement | F3B kết thúc | Lịch tuần với SE1804 thay thế |
| S08.default | Tất cả | Profile và cài đặt cá nhân |
| D1 / D2 / D3 / D4 / D5 / D6 | F1/F2/F3 | Dialog xác nhận và cảnh báo |
