# ux/persona.md — Semester · Student Course Planner

**Phiên bản:** 1.0 · 15/10/2026  
**Ứng dụng:** Semester (Student Course Planner — thời khóa biểu và chọn môn/lớp cho sinh viên)

---

## 1. Vấn đề thực tế

Sinh viên ngành kỹ thuật phần mềm năm 3 (kỳ 4) cần đăng ký 5 môn học trong một học kỳ mới, nhưng gặp đồng thời nhiều ràng buộc:

- **Lịch làm thêm cố định** (ca tối và sáng Chủ Nhật) không thể thay đổi.
- **Nhiều lớp học phần** cho mỗi môn, mỗi lớp có lịch và số chỗ khác nhau.
- **Rủi ro hết chỗ** tại thời điểm gửi đăng ký (nhiều sinh viên cùng đăng ký).
- **Không có công cụ tự động** kiểm tra xung đột giữa lịch học và giờ làm việc cá nhân.
- **Mạng internet không ổn định** khi sử dụng điện thoại di động trên xe buýt.

**Hệ quả hiện tại:** Sinh viên mất 30–60 phút mỗi lần xếp lịch thủ công, dễ bỏ sót xung đột giờ, và không kịp phục hồi khi lớp bị hết chỗ trong lúc đăng ký.

**Mục tiêu của Semester:** Giúp sinh viên lập kế hoạch 5 môn không trùng lịch làm việc trong ≤ 5 phút, tự động cảnh báo xung đột và hỗ trợ phục hồi ngay khi lớp hết chỗ.

---

## 2. Persona Chính

### 👩‍💻 Trần Gia Hân

| Thuộc tính | Thông tin |
|---|---|
| **Tuổi** | 20 tuổi |
| **Ngành học** | Kỹ thuật phần mềm (Software Engineering) |
| **Học kỳ hiện tại** | Kỳ 4 (năm 3) |
| **Mã số sinh viên** | SE180123 |
| **Học kỳ lập kế hoạch** | Xuân 2027 |
| **Tín chỉ đã tích lũy** | 54 / 145 tín chỉ (~37.2% tiến độ toàn khóa) |
| **Mục tiêu học kỳ** | Đăng ký đủ 5 môn học phần · 15 tín chỉ (giới hạn 20 TC) |
| **Thiết bị sử dụng** | Điện thoại Android (màn hình 360–412 dp), một tay |
| **Cỡ chữ hệ thống** | 115–130% (mắt cận nhẹ) |
| **Kết nối mạng** | Chập chờn (thường dùng trên xe buýt) |

### Hoàn cảnh sống & làm việc

Hân đang làm thêm bán thời gian tại chuỗi cà phê Highlands Coffee với hai ca cố định mỗi tuần:

| Mã | Ca làm | Ngày | Giờ |
|---|---|---|---|
| B01 | Highlands – ca tối | T3, T5, T6 | 18:00–22:00 |
| B02 | Highlands – ca sáng | Chủ Nhật | 07:00–12:00 |

Đây là **ràng buộc thời gian cứng** — Hân không thể đổi ca hay bỏ ca. Ứng dụng phải coi đây là vùng cấm khi gợi ý lớp học.

### Mục tiêu khi dùng ứng dụng

1. **Khai báo** 2 khung giờ làm thêm một lần duy nhất.
2. **Tìm và chọn** 5 lớp học phần hợp lịch (không trùng ca làm) trong ≤ 5 phút.
3. **Xem ngay cảnh báo** nếu lớp đang chọn trùng với giờ làm việc.
4. **Phục hồi nhanh** khi lớp dự định bị hết chỗ lúc đăng ký (chọn lớp thay thế ≤ 3 thao tác).
5. **Xem lịch học** tổng hợp theo tuần sau khi đăng ký thành công.

### Pain points (vấn đề hiện tại)

- Phải đối chiếu thủ công giữa thời khóa biểu trường và lịch làm thêm của bản thân.
- Cổng đăng ký nhà trường không có chức năng cảnh báo xung đột.
- Khi lớp hết chỗ, phải tự tìm lớp thay thế từ đầu (mất nhiều thao tác).
- Hay bị mất session đăng nhập khi mạng yếu trên di động.

### Hành vi sử dụng

- **Thời điểm dùng:** Trên xe buýt đi/về, một tay cầm điện thoại.
- **Tốc độ tương tác:** Nhanh, thiếu kiên nhẫn với flow nhiều bước.
- **Thái độ:** Thực dụng — cần kết quả ngay, không thích đọc hướng dẫn.
- **Độ quen công nghệ:** Cao (sinh viên CNTT), nhưng ưu tiên ứng dụng tối giản và rõ ràng.

---

## 3. Kịch bản sử dụng điển hình (Key Scenario)

**Bối cảnh:** Đầu học kỳ Xuân 2027, Hân ngồi trên xe buýt đi học lúc 7:15 sáng và cần đăng ký môn học trong ngày hôm nay.

1. Mở **Semester**, đăng nhập với MSSV `SE180123`.
2. Vào **Giờ bận** → Thêm 2 ca làm Highlands.
3. Vào **Tìm môn** → Tìm "DBI202" → Mở chi tiết → Thấy lớp SE1801 (T2, T4 · 10:00–12:20) hợp lịch → Thêm vào kế hoạch.
4. Tiếp tục thêm 4 môn còn lại (PRM323, SWD392, MAS291, JPD123).
5. Vào **Kế hoạch** → Kiểm tra không trùng lịch → Bấm **Gửi đăng ký**.
6. Hệ thống báo: DBI202/SE1801 vừa hết chỗ → Hân chọn lớp thay thế SE1804 (T2, T4 · 15:20–17:40) ngay trên màn hình.
7. **Kết quả:** 5/5 môn đăng ký thành công, tổng 15 tín chỉ, không trùng với ca Highlands. Thời gian: 4 phút 23 giây.

---

## 4. Các môn học phần mục tiêu (Học kỳ Xuân 2027)

| Môn | Tên đầy đủ | Tín chỉ | Lớp chính | Lịch | Tiên quyết |
|---|---|---|---|---|---|
| PRM323 | Phát triển ứng dụng đa nền tảng | 3 | SE1802 | T2, T4 · 07:30–09:50 (BE-204) | PRF192 · Đã hoàn thành |
| DBI202 | Cơ sở dữ liệu | 3 | SE1801 | T2, T4 · 10:00–12:20 (BE-301) | Không có |
| SWD392 | Kiến trúc và thiết kế phần mềm | 3 | SE1805 | T3, T5 · 12:50–15:10 (AL-402) | Không có |
| MAS291 | Xác suất thống kê | 3 | SE1807 | T3, T6 · 10:00–12:20 (AL-105) | Không có |
| JPD123 | Tiếng Nhật | 3 | SE1803 | T6, T7 · 15:20–17:40 (DE-210) | Không có |
