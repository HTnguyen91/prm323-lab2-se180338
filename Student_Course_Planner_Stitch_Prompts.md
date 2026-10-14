# Student Course Planner — Bộ prompt Google Stitch cho Semester

**Phiên bản:** 3.0 · 15/10/2026  
**Tên file:** `Student_Course_Planner_Stitch_Prompts.md`  
**Chủ đề của nhóm:** Student Course Planner — thời khóa biểu và chọn môn/lớp cho sinh viên.  
**Tên app đã chốt:** **Semester**.  
**Nguồn:** `prm323-lab 2-SE182796.zip` và đề PDF PRM323 Lab 2 người dùng cung cấp. Bộ tài liệu trong ZIP ghi tên cũ Kỳ Này; bản prompt này cập nhật tên theo yêu cầu mới của người dùng.

## 1. Phạm vi và cách hiểu thống nhất

Đây là **một ứng dụng, một project Stitch, một bộ dữ liệu và một hệ thống điều hướng**. S01–S10 là các màn của cùng ứng dụng; `.default`, `.error`, `.loading`… là các tình huống của màn đó. Chia prompt để dễ tạo/review từng frame, không chia dự án thành các sản phẩm khác nhau.

Chức năng trung tâm: **xem thời khóa biểu → tìm môn → chọn lớp học phần → lập kế hoạch → kiểm tra trùng giờ → gửi đăng ký mô phỏng → xem kết quả/lớp thay thế**. Giờ bận là ràng buộc thời gian cá nhân của sinh viên để chọn lớp phù hợp. Không có chức năng phân ca nhân viên, đổi ca với đồng nghiệp, quản lý nhân sự/chấm công/lương.

Giữ persona, 10 màn, 3 flow và phong cách trong ZIP. Luồng chọn lớp chính dùng **DBI202**, đúng `ux/user-flow.md` và ảnh S04 của nhóm. PRM323 vẫn là một môn trong cùng catalog; state chi tiết/thiếu tiên quyết của PRM323 được bổ sung riêng khi cần. S04 chứa radio chọn lớp, S05 là Kế hoạch.

### Điều đã chỉnh từ nguồn

- Đồng bộ thương hiệu Semester, nội dung tiếng Việt và tên màn/state. Giữ nguyên MSSV persona **SE180123**; **SE182796** là mã trong repo của người làm bài, không tự thay hồ sơ Hân bằng mã đó.
- Giữ lịch 5 lớp chính từ handoff. **DBI202/SE1804 dùng T2/T4 15:20–17:40, BE-105** theo ảnh Final UI `S04-alt.png`, không dùng lịch thay thế của bản prompt trước.
- Chuẩn hóa số lớp/chỗ/tiên quyết ở bảng dữ liệu bên dưới vì ảnh/spec có số liệu chưa đầy đủ hoặc chưa đồng nhất. Mục “Nguồn dữ liệu và bổ sung demo” ghi rõ phần kế thừa và phần mới đề xuất.
- Phân biệt thêm môn mới, đổi lớp nháp, xem lớp đã đăng ký và gửi riêng lớp thay thế. Không nhân đôi môn/tín chỉ hoặc gửi lại 4 lớp đã xác nhận.
- Bổ sung error1 và kết quả/lịch sau thay thế. Lỗi mạng có kết quả chưa rõ dùng thông báo “chưa xác nhận”, không tự kết luận chưa lớp nào được đăng ký.
- Bỏ lời hứa lưu mật khẩu, tự động đăng ký và chính sách hủy 24 giờ khỏi UI demo; các nội dung này chưa có triển khai/chính sách trường được xác minh. Giữ CTA xem lại và xác nhận gửi.
- Lưu B01 trước chỉ có 1 mục/3 khung giờ; lưu thêm B02 mới thành 2 mục/4 khung giờ. Profile progress 54/145 ≈37,2%, khác progress học kỳ 15/20=75%.
- Mỗi khối prompt tạo **đúng một frame**, có mã ngắn ngoài UI và đặt cạnh state cùng màn để dễ quản lý.

Những thay đổi trên là đề xuất thiết kế mới, cần cập nhật vào screen-spec/handoff/log khi nhóm chấp nhận. Không sửa hoặc ghi đè ZIP/ảnh gốc, không ghi các lượt tạo mới là đã chạy.

## 2. Đối chiếu yêu cầu đề bài

| Yêu cầu trong PDF | Áp dụng vào bộ prompt / việc nhóm cần làm |
| --- | --- |
| Ít nhất 8 màn khác nhau; dialog/state không tính màn riêng (trang 2) | Giữ 10 màn S01–S10 của nhóm |
| Ít nhất 3 flow và có nhánh lỗi/phục hồi (trang 2, 5) | F1 khai báo giờ bận; F2 chọn môn/lớp; F3 gửi và phục hồi; bảng ánh xạ ở cuối |
| UI đầu tiên từ Stitch, lưu nguyên văn prompt/ảnh (trang 4) | P00 và từng prompt một frame; log theo lượt thực tế |
| Ít nhất 3 vòng lặp AI có vấn đề khác nhau, ảnh trước/sau (trang 4) | V1–V3 là mẫu có điều kiện, chưa phải vòng đã hoàn thành |
| Phản biện AI theo Nielsen/accessibility/persona, ít nhất 5 phát hiện cụ thể (trang 4) | Prompt review ở cuối, phát hiện phải dựa trên ảnh thật |
| Figma đúng 6 page; state đặt cạnh màn tương ứng (trang 5) | 01 User Flow, 02 Wireframe, 03 Final UI, 04 Design System, 05 Components, 06 Prototype |
| 9 nhóm component với state, Auto Layout/Variables/styles (trang 5–6) | Checklist component ở cuối; các ảnh riêng chưa thay thế component variants |
| Kiểm tra 360/412 dp, accessibility; mô tả ≥600 dp trong handoff (trang 6) | 4 prompt rộng, checklist đo và mô tả tablet |
| Flow bấm được, Back đúng, overlay và loading → kết quả (trang 6) | Bản đồ nối prototype; phải tự bấm kiểm tra |
| Handoff mỗi màn đủ 6 mục + 2 bảng mapping (trang 8) | Checklist handoff ở cuối; lab không yêu cầu code Flutter |

## 3. Dữ liệu chung của Semester

Toàn bộ lịch, số chỗ, tiên quyết và kết quả bên dưới là **dữ liệu demo để dựng prototype**, không phải xác nhận chương trình/cổng đăng ký thật của trường. Profile: Trần Gia Hân, 20 tuổi, Kỹ thuật phần mềm, Kỳ 4, **Học kỳ Xuân 2027**, SE180123, 54/145 tín chỉ. Mục tiêu demo 5 môn/15 tín chỉ; trần demo 20.

### 3.1. Năm lớp chính

| Môn | Tên thống nhất | Lớp chính | Thứ | Giờ | Phòng | Tiên quyết trong demo | Lớp hợp lịch còn chỗ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PRM323 | Phát triển ứng dụng đa nền tảng | SE1802 | T2, T4 | 07:30–09:50 | BE-204 | PRF192 · Đã hoàn thành | 2 |
| DBI202 | Cơ sở dữ liệu | SE1801 | T2, T4 | 10:00–12:20 | BE-301 | Không có môn tiên quyết trong demo | 3 |
| SWD392 | Kiến trúc và thiết kế phần mềm | SE1805 | T3, T5 | 12:50–15:10 | AL-402 | Không yêu cầu trong demo | 1 |
| MAS291 | Xác suất thống kê | SE1807 | T3, T6 | 10:00–12:20 | AL-105 | Không yêu cầu trong demo | 1 |
| JPD123 | Tiếng Nhật | SE1803 | T6, T7 | 15:20–17:40 | DE-210 | Không yêu cầu trong demo | 1 |

Mỗi môn 3 tín chỉ và mỗi lớp 2 buổi/tuần: 5 môn = 15 tín chỉ = 10 buổi học. Khi điền S05/S06/S07 không tự chuyển mã môn, lớp, ngày hay giờ. Môn đã có trong nháp hiển thị “Đã có trong kế hoạch”; đổi lớp không thêm môn thứ hai.

### 3.2. Danh mục lớp có dữ liệu đầy đủ

| Môn | Lớp | Thứ | Giờ | Phòng | Chỗ còn / 35 | Giảng viên | Trạng thái cơ sở |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PRM323 | SE1802 | T2, T4 | 07:30–09:50 | BE-204 | 12/35 | Chưa cập nhật | Hợp lịch |
| PRM323 | SE1808 | T3, T5 | 07:30–09:50 | BE-205 | 6/35 | Chưa cập nhật | Hợp lịch |
| DBI202 | SE1801 | T2, T4 | 10:00–12:20 | BE-301 | 12/35 | Phạm Q. | Hợp lịch |
| DBI202 | SE1803 | T3, T5 | 18:00–20:20 | AL-201 | 20/35 | Đỗ T. | Trùng giờ bận T3, T5 |
| DBI202 | SE1804 | T2, T4 | 15:20–17:40 | BE-105 | 3/35 | Lý H. | Hợp lịch |
| DBI202 | SE1806 | T6, T7 | 07:30–09:50 | DE-102 | 8/35 | Mai N. | Hợp lịch |
| DBI202 | SE1802 | T2, T4 | 07:30–09:50 | BE-302 | 0/35 | Chưa cập nhật | Hết chỗ |
| DBI202 | SE1805 | T3, T5 | 10:00–12:20 | AL-202 | 0/35 | Chưa cập nhật | Hết chỗ |
| SWD392 | SE1805 | T3, T5 | 12:50–15:10 | AL-402 | 10/35 | Chưa cập nhật | Hợp lịch |
| MAS291 | SE1807 | T3, T6 | 10:00–12:20 | AL-105 | 7/35 | Chưa cập nhật | Hợp lịch |
| JPD123 | SE1803 | T6, T7 | 15:20–17:40 | DE-210 | 9/35 | Chưa cập nhật | Hợp lịch |

`Còn 12/35 chỗ` nghĩa là 12 chỗ trống trong sức chứa 35, không phải 12 người đã đăng ký. DBI202 có 6 lớp liệt kê, 4 còn chỗ, **3 hợp lịch còn chỗ** trước khi SE1801 hết chỗ. Sau partial, 2 phương án phù hợp còn chỗ là SE1804/SE1806. PRM323 có 2 lớp mở/2 phù hợp trong fixture cơ sở. Định danh bằng mã môn + mã lớp; DBI202/SE1802 khác PRM323/SE1802.

**Nguồn dữ liệu và bổ sung demo:** lịch 5 lớp chính lấy từ `handoff/flutter-handoff.md`; SE1801/SE1803/SE1804/SE1806 của DBI, phòng, giảng viên và số chỗ lấy từ ảnh Final UI S04-default/alt. Hai lớp DBI hết chỗ SE1802/SE1805 được **bổ sung làm fixture demo** để đủ danh mục 6 lớp và có trạng thái Full. Lớp PRM323/SE1808, số chỗ các môn còn lại và quan hệ PRF192 cho PRM323 là **dữ liệu demo bổ sung**. Với các môn ngoài PRM/DBI, “không yêu cầu trong demo” là quy ước prototype, không phải thông tin học vụ thật. Không tự bịa tên giảng viên chưa có nguồn.

### 3.3. Giờ bận cá nhân

| Mục | Tên | Ngày | Giờ | Counter | Số khung/tuần |
| --- | --- | --- | --- | --- | --- |
| B01 | Highlands – ca tối | T3, T5, T6 | 18:00–22:00 | 18/40 | 3 |
| B02 | Highlands – ca sáng | CN | 07:00–12:00 | 19/40 | 1 |

B01/B02 kế thừa persona của nhóm. UI dùng nhãn **Giờ bận**; đây chỉ là thời gian không thể học, không phải nghiệp vụ đổi/phân ca. B01 một mình: 1 mục/3 khung; cả hai: 2 mục/4 khung; xóa B01 chỉ còn B02: 1 mục/1 khung.

### 3.4. Fixture và quy tắc trạng thái

| Fixture | Dữ liệu và trạng thái |
| --- | --- |
| FIRST_USE | 0 môn đã đăng ký, 0 nháp, 0 giờ bận |
| BUSY_B01 | B01 đã lưu; 3 khung/tuần, 0 môn |
| BUSY | B01+B02 đã lưu; 4 khung/tuần, 0 môn |
| PLAN1_DBI | BUSY + nháp DBI202/SE1801; 1 môn/3 tín chỉ, chưa đăng ký |
| PLAN5 | BUSY + 5 lớp chính trong nháp, chưa đăng ký; 15 tín chỉ |
| PLAN4_NO_DBI | Xóa DBI khỏi PLAN5; 4 môn/12 tín chỉ |
| CONFLICT_DBI | PLAN5 thay DBI bằng SE1803; 1 lớp xung đột, 2 buổi trùng B01 |
| CHANGE_DBI_DRAFT | Chỉ đổi nháp DBI202 sang SE1804; giữ 5 môn/15 tín chỉ |
| BLOCKED_PRM | Nhánh độc lập PRF192 chưa hoàn thành, không thêm PRM323 |
| SUCCESS_INITIAL | 5 lớp chính đã xác nhận, DBI vẫn SE1801 |
| PARTIAL_INITIAL | 4 lớp khác DBI đã xác nhận; DBI/SE1801 hết chỗ, chưa đăng ký |
| REPLACEMENT_PENDING | Giữ 4 xác nhận, chỉ đang gửi DBI/SE1804 |
| SUCCESS_REPLACEMENT | 4 lớp cũ + DBI/SE1804 xác nhận; 5 môn/15 tín chỉ |
| SUBMIT5_UNKNOWN | Yêu cầu 5 lớp có kết quả chưa xác nhận; giữ nháp và khóa gửi độc lập trùng yêu cầu |
| REPLACEMENT_UNKNOWN | 4 đã xác nhận, chỉ DBI/SE1804 chưa xác nhận; retry riêng 1 lớp |

- S02 là **lịch đã đăng ký**, S05 là **bản nháp/kết quả kế hoạch**. Thêm/sửa nháp chưa đổi lịch đã xác nhận. S02 trước khi đăng ký thành công có thể chỉ hiện giờ bận. Nếu nhóm muốn thêm lịch dự kiến, cần gắn nhãn rõ và tạo state riêng sau; không trộn xác nhận với dự kiến.
- Một môn tối đa một lớp; đổi lớp bỏ lớp cũ cùng môn khỏi kiểm tra xung đột. Cùng thứ và `startA < endB && startB < endA` là giao giờ; chạm điểm cuối/đầu không tính trùng trong demo. Thời gian di chuyển chưa mô phỏng.
- Lớp full/thiếu tiên quyết không thêm; lớp trùng cần D1 trước khi thêm nháp. S05 khóa gửi khi có xung đột, quá 20 tín chỉ hoặc thiếu điều kiện. Khi nháp chưa đủ mục tiêu 5 môn, CTA theo flow nhóm là tìm thêm môn; “5 môn” là mục tiêu demo, không phải chính sách trường.
- S04 từ S03 add nếu môn chưa có nháp; từ S05 change với lớp hiện tại được chọn sẵn; lớp đã xác nhận từ S02/S07 chỉ xem. Bản này chưa mở tính năng hủy/đổi đăng ký đã xác nhận.
- Kết quả chưa rõ: giữ dữ liệu và trạng thái chờ; Thử lại kiểm tra/tiếp tục cùng yêu cầu, không tạo đăng ký trùng. Chi tiết chống xử lý trùng cần hợp đồng backend khi triển khai, không được xem là đã hoạt động từ ảnh prototype.
- Đang gửi tối đa 30 giây trong demo rồi phải có kết quả/lỗi/đường tiếp tục; Back từ S07 về kế hoạch theo kết quả, không về màn gửi cũ có nút còn bật.

## 4. Cách gửi vào Stitch và quản lý tên

1. Dùng **một project Mobile tên Semester** cho toàn bộ màn/state. Gửi **P00** trước; prompt này chứa đủ dữ liệu chung và tạo màn tham chiếu S02.populated với thời khóa biểu sinh viên.
2. Không cần dán riêng mục 3 vào Stitch; P00 đã có dữ liệu. Các bảng tiếng Việt giúp nhóm đối chiếu kết quả.
3. Mỗi khối `text` sau đó tạo **đúng một frame**. Copy một khối, gửi, chờ và kiểm tra rồi mới gửi khối tiếp theo. Không copy cả file.
4. Mỗi màn có các state đặt cạnh nhau: một hàng S01, một hàng S02…; dialog tách riêng. Mã ngắn trên canvas như `S01.default` nằm ngoài giao diện điện thoại, tiêu đề trong app vẫn “Đăng nhập”.
5. Prompt yêu cầu tên canvas nhưng cần kiểm tra đầu ra; nếu tên chưa được gán, đổi nhãn màn thủ công khi giao diện hỗ trợ. Nếu chưa đổi được ngay, xuất/ghi chú ảnh theo đúng ID sau mỗi lượt và đổi frame name trong Figma. Không xem nhãn chữ do AI vẽ bên trong ảnh là tên metadata của frame.
6. S02.populated đã do P00 tạo; không tạo lại khi đến nhóm S02. Chỉ tạo frame còn thiếu. Các dòng “Bổ sung” là state phục hồi/hành vi làm rõ, vẫn thuộc màn gốc.
7. Dựng 10 màn chính và state baseline trước, rồi bổ sung state cần cho flow nhóm. Bản rộng tạo sau khi UI 360 dp ổn định. Đây là danh sách đầu ra kế hoạch, không phải tuyên bố đã tạo/xác minh.
8. Nối prototype trong công cụ hỗ trợ hoặc Figma và bấm thử; có nút trong ảnh chưa chứng minh hoạt động. Thực hiện ít nhất 3 vòng sửa có bằng chứng theo đề; không tính việc chỉ đổi tên hay đổi màu trang trí.

**Tạo nhanh bản nền:** P00, S01.default, S03.default, S04.default, S05.full, S06.default, S07.success, S08.default, S09.populated, S10.default. Sau đó tạo những state còn lại theo từng nhóm dưới đây.

## 5. P00 — Khởi tạo đúng Student Course Planner và màn tham chiếu

```text
Design ONE mobile application named "Semester", topic "Student Course Planner" (student timetable and course/section selection). This is the same group project described by the provided PRM323 archive, with the brand updated to Semester. ALL screens/states belong to this one project. All product copy is natural Vietnamese. Keep the brand exactly Semester.

PRODUCT SCOPE
The main job is finding courses, choosing academic class sections, checking overlaps, planning a semester and viewing the resulting timetable. Personal busy-time records only tell the app when the student cannot attend a class. There is no staff roster, employer dashboard, shift assignment, attendance/payroll or shift-exchange feature. Recovery means choosing a different CLASS SECTION for the SAME COURSE, not changing the student's work shift.

PERSONA
Trần Gia Hân, 20, Kỹ thuật phần mềm, Kỳ 4, student ID SE180123, uses Android one-handed on the bus, intermittent connectivity and text size 115–130%. Goal: five conflict-free 3-credit courses in ≤5 minutes after personal availability is entered. Semester display Học kỳ Xuân 2027. Profile progress 54/145 tín chỉ. The repository author's SE182796 is not this persona's ID. Login/enrollment responses are simulated fixtures for UI design; do not invent a live school API, deadlines, auto-submission, password-storage guarantees or enrollment cancellation policies.

VISUAL SYSTEM FROM THE PROJECT
Material 3 light, 360×800 dp, adaptable to 412 dp. Font Be Vietnam Pro, fallback Inter then Roboto. Screen title 22/28 semibold; card title 16/24 semibold; body/helper/error 14/20 regular; button/chip/tag 14/20 semibold; only NavigationBar labels may use 12/16. Important text wraps, containers grow, no text-scaling lock. Single column, 16 dp margins, 4/8/12/16/24/32/48 dp spacing. At least 48×48 dp interactive targets; icons 24 dp; app bar 64 dp; nav bar 80 dp before safe inset; buttons ≥48 dp and pill; text inputs ≥56 dp; cards/inputs radius 12, FAB 16, dialog 28. One prominent enabled Filled action per state. Stable components and icon family across all states.
Primary #3046C5/on-primary #FFFFFF/pressed #23379E; primary-container #DDE1FF/on-container #0B1A66; selected nav indicator #DCE2F9 with #141B2C; background #F7F8FC; white cards; navigation surface #EBEDF4; dialog/pressed card #E5E7EF; skeleton #DFE1EA; main text #1A1B21, secondary #44474F; control outline #74777F, decorative outline #C4C6D0. Busy #FFDDB8 with #2E1500, busy icon #8A4F00. Error #BA1A1A with #FFDAD6/#410002. Success #1E6B37 with #C9F0D2/#002110. Snackbar #2F3036 with #F2F0F7 and action #B9C3FF. Status uses icon AND text, never only color. Target body contrast ≥4.5:1 and necessary UI boundaries ≥3:1; verify actual final color pairs later.
Safe areas and scroll padding must prevent fixed bottom actions, FAB, snackbar and keyboard from covering content. Weekday chips Wrap and time fields can stack at larger text. Lists use skeleton; submissions use bounded spinner + text.

ONE INFORMATION ARCHITECTURE
S01 Đăng nhập; S02 Lịch tuần; S03 Tìm môn; S04 Chi tiết môn & chọn lớp; S05 Kế hoạch; S06 Xem lại & gửi đăng ký; S07 Kết quả đăng ký; S08 Cá nhân; S09 Giờ bận; S10 Thêm/sửa giờ bận. Exactly four top-level tabs Lịch/Tìm môn/Kế hoạch/Cá nhân appear only on S02/S03/S05/S08. S04 contains the section radios; S05 is the plan, not a separate class-picker page. Nested screens have one Back except S01 and temporarily bounded submission states.

AUTHORITATIVE DATA
Five courses, all 3 credits, goal 15, demo cap 20; original selections:
PRM323/SE1802 T2,T4 07:30–09:50 BE-204; DBI202/SE1801 T2,T4 10:00–12:20 BE-301; SWD392/SE1805 T3,T5 12:50–15:10 AL-402; MAS291/SE1807 T3,T6 10:00–12:20 AL-105; JPD123/SE1803 T6,T7 15:20–17:40 DE-210. Each course is 3 credits.
B01 "Highlands – ca tối" T3,T5,T6 18:00–22:00; B02 "Highlands – ca sáng" CN 07:00–12:00. These are personal unavailable times, two records/four weekly shifts, used ONLY to avoid overlapping class meetings.
Names: PRM323 Phát triển ứng dụng đa nền tảng; DBI202 Cơ sở dữ liệu; SWD392 Kiến trúc và thiết kế phần mềm; MAS291 Xác suất thống kê; JPD123 Tiếng Nhật.
PRM323 prerequisite PRF192 completed; two open sections SE1802 as above with 12/35 seats and SE1808 T3,T5 07:30–09:50 BE-205 with 6/35 seats. DBI202 has no prerequisite in demo. Last three courses have no prerequisite requirement in this demo; each has one defined compatible section, respectively 10/35, 7/35, 9/35 seats. Unknown lecturer is displayed as Chưa cập nhật, not invented.
DBI202 Cơ sở dữ liệu, 3 tín chỉ, no prerequisite in demo. Six section cards, all capacity 35: SE1801 T2,T4 10:00–12:20 BE-301, GV Phạm Q., 12/35 remaining, Hợp lịch; SE1803 T3,T5 18:00–20:20 AL-201, GV Đỗ T., 20/35, Trùng giờ bận T3,T5; SE1804 T2,T4 15:20–17:40 BE-105, GV Lý H., 3/35, Hợp lịch; SE1806 T6,T7 07:30–09:50 DE-102, GV Mai N., 8/35, Hợp lịch; SE1802 T2,T4 07:30–09:50 BE-302, 0/35, Hết chỗ; SE1805 T3,T5 10:00–12:20 AL-202, 0/35, Hết chỗ. Use "Giảng viên: Chưa cập nhật" for the last two. Count 6 listed sections, 4 with seats, 3 compatible sections with seats before partial submission. Full cards stay visible but nonselectable.
Main course-selection flow uses DBI202, consistent with the group project. A later PRM course-specific/blocked state is another state of S04 within this SAME app. Compatible-available course counts initially PRM=2, DBI=3, SWD=1, MAS=1, JPD=1. A section identity includes both course and section codes. Each class has two weekly meetings: five classes give ten meetings. Two busy records give four occurrences, B01 alone gives three.

BEHAVIOR AND RESULT FIXTURES
Unsubmitted choices live in S05 draft, separate from the registered timetable S02. Existing draft course opens change mode with current section preselected; confirmed course detail is read-only. One course/one section; exclude its old section when checking a replacement. Overlap on same day is startA < endB AND startB < endA; touching endpoints are not clashes. Full/ineligible choices disabled; conflicting class requires D1 before draft addition, and S05 blocks send while conflict remains.
PARTIAL_INITIAL confirms four non-DBI courses but DBI202/SE1801 becomes 0/35 at submission. S04.alt offers SE1804 T2,T4 15:20–17:40 BE-105, 3/35 and SE1806 T6,T7 07:30–09:50 DE-102, 8/35; preselect SE1804. The new request contains ONE replacement class. SUCCESS_REPLACEMENT changes only DBI to SE1804, preserving four confirmations and five courses/15 credits. Never mix SE1804's old invented schedule with this project's 15:20–17:40 BE-105 schedule.
Network interruption can leave the result unknown. Keep selections and known confirmations; retry checks/resumes the same request, not a new duplicate enrollment. Error for one replacement keeps four confirmed classes; do not resend them. A processing state has a 30-second demo timeout then recovery; do not trap the user indefinitely. Back from results returns to a status-aware plan, never an enabled old submit request. Details of request IDs/backend belong in handoff, not product UI.

CREATE EXACTLY ONE FRAME NOW — OUTPUT ID S02.populated
Use SUCCESS_INITIAL: five original sections confirmed, both busy records saved. Title Lịch tuần. Compact summary Học kỳ Xuân 2027 · Kỳ 4, "Đã đăng ký 5 môn · 15 tín chỉ", secondary "4 khung giờ bận/tuần", check icon Không trùng lịch. Academic agenda is the dominant content, grouped T2–CN, ten class meetings plus four personal busy occurrences. Course blocks show code/name, time, room/section; personal blocks use smaller supporting busy labels/icons. All content reachable by scrolling. App-bar action Giờ bận → S09; extended FAB Thêm môn → S03; Lịch navigation selected. No busy-time management as the primary home feature, greetings/metric tiles that push class content down, or week/day controls outside the project scope.
Use the exact short canvas label S02.populated OUTSIDE the phone UI when supported; do not put technical screen IDs in the app. One separate selectable frame, no collage. This is the visual reference for later screens. Generate no other screen until requested.

```

## 6. Prompt theo từng màn và trạng thái

### S01 — Đăng nhập

| Frame ID | Fixture | Vai trò |
| --- | --- | --- |
| S01.default | FIRST_USE | Baseline |
| S01.filled | FIRST_USE | Baseline |
| S01.error | LOGIN_ERROR | Baseline |
| S01.loading | LOGIN_PENDING | Baseline |

#### S01.default

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S01.default
FIXTURE: FIRST_USE

Title Đăng nhập, one Semester brand block and tagline "Lên lịch học kỳ, chọn lớp phù hợp." Labels ABOVE Mã số sinh viên and Mật khẩu; accessible password visibility eye; full-width Đăng nhập. No Back, bottom navigation, authenticated profile, duplicate logo or unverifiable password-storage claim. Form scrolls with keyboard and keeps focus/error/action accessible. On valid first-use login go to S02.empty; if saved data exists open the corresponding S02 state.
Empty fields, placeholders "VD: SE180123" and "Nhập mật khẩu"; disabled Đăng nhập until both required values are present.
```

#### S01.filled

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S01.filled
FIXTURE: FIRST_USE

Title Đăng nhập, one Semester brand block and tagline "Lên lịch học kỳ, chọn lớp phù hợp." Labels ABOVE Mã số sinh viên and Mật khẩu; accessible password visibility eye; full-width Đăng nhập. No Back, bottom navigation, authenticated profile, duplicate logo or unverifiable password-storage claim. Form scrolls with keyboard and keeps focus/error/action accessible. On valid first-use login go to S02.empty; if saved data exists open the corresponding S02 state.
MSSV SE180123 and masked demo password entered; enabled Đăng nhập → S01.loading. Do not show a confirmed student profile yet.
```

#### S01.error

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S01.error
FIXTURE: LOGIN_ERROR

Title Đăng nhập, one Semester brand block and tagline "Lên lịch học kỳ, chọn lớp phù hợp." Labels ABOVE Mã số sinh viên and Mật khẩu; accessible password visibility eye; full-width Đăng nhập. No Back, bottom navigation, authenticated profile, duplicate logo or unverifiable password-storage claim. Form scrolls with keyboard and keeps focus/error/action accessible. On valid first-use login go to S02.empty; if saved data exists open the corresponding S02 state.
Retain SE180123 and editable form. Inline icon + "Mã số sinh viên hoặc mật khẩu chưa đúng." under password. Allow correction/retry; no claim a real portal has been connected.
```

#### S01.loading

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S01.loading
FIXTURE: LOGIN_PENDING

Title Đăng nhập, one Semester brand block and tagline "Lên lịch học kỳ, chọn lớp phù hợp." Labels ABOVE Mã số sinh viên and Mật khẩu; accessible password visibility eye; full-width Đăng nhập. No Back, bottom navigation, authenticated profile, duplicate logo or unverifiable password-storage claim. Form scrolls with keyboard and keeps focus/error/action accessible. On valid first-use login go to S02.empty; if saved data exists open the corresponding S02 state.
Filled form locked; spinner and Đang đăng nhập… in button, disable repeated taps. Success fixture → S02.empty; failure → S01.error. No success before the response.
```

### S02 — Lịch tuần

`S02.populated` đã tạo ở P00; dùng cùng frame, không tạo thêm bản trùng.

| Frame ID | Fixture | Vai trò |
| --- | --- | --- |
| S02.busy | BUSY | Baseline |
| S02.empty | FIRST_USE | Baseline |
| S02.loading | TIMETABLE_PENDING | Baseline |
| S02.offline | SUCCESS_INITIAL_CACHE | Baseline |
| S02.replacement | SUCCESS_REPLACEMENT | Bổ sung / kiểm tra |
| S02.partial | PARTIAL_INITIAL | Bổ sung / kiểm tra |

#### S02.busy

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S02.busy
FIXTURE: BUSY

B01 "Highlands – ca tối" T3,T5,T6 18:00–22:00; B02 "Highlands – ca sáng" CN 07:00–12:00. These are personal unavailable times, two records/four weekly shifts, used ONLY to avoid overlapping class meetings.
Title Lịch tuần, Học kỳ Xuân 2027 · Kỳ 4. Summary "0 môn · 0 tín chỉ · 4 khung giờ bận/tuần". Agenda only T3/T5/T6 18:00–22:00 and CN 07:00–12:00, each with icon and Giờ bận. App-bar Giờ bận → S09.populated, FAB Thêm môn → S03.default, Lịch navigation selected. No staff, shift exchange or class-registration success tag.
```

#### S02.empty

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S02.empty
FIXTURE: FIRST_USE

Lịch tuần, semester Học kỳ Xuân 2027, zero registered courses and zero busy records. Icon, "Chưa có gì trong lịch", "Chọn môn và khai báo giờ bận để lên lịch phù hợp.", one Filled "Khai báo giờ bận" → S09.empty. Hide FAB, keep Lịch navigation. No fake course blocks, shift counts or no-conflict success badge.
```

#### S02.loading

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S02.loading
FIXTURE: TIMETABLE_PENDING

Lịch tuần app bar and Lịch navigation stable; skeleton summary and agenda. Hide FAB while loading, no fake confirmed timetable or zero-data conclusion. Completed fixture → S02.populated; initial empty response → S02.empty.
```

#### S02.offline

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S02.offline
FIXTURE: SUCCESS_INITIAL_CACHE

PRM323/SE1802 T2,T4 07:30–09:50 BE-204; DBI202/SE1801 T2,T4 10:00–12:20 BE-301; SWD392/SE1805 T3,T5 12:50–15:10 AL-402; MAS291/SE1807 T3,T6 10:00–12:20 AL-105; JPD123/SE1803 T6,T7 15:20–17:40 DE-210. Each course is 3 credits.
B01 "Highlands – ca tối" T3,T5,T6 18:00–22:00; B02 "Highlands – ca sáng" CN 07:00–12:00. These are personal unavailable times, two records/four weekly shifts, used ONLY to avoid overlapping class meetings.
Keep cached registered timetable and Học kỳ Xuân 2027 summary 5 môn/15 tín chỉ. Banner "Đang ngoại tuyến · Đang hiển thị lịch đã lưu" with Thử lại. No invented sync timestamp or vanished course data. No newly claimed enrollment while offline. Preserve Lịch navigation and safe FAB/list padding.
```

#### S02.replacement

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S02.replacement
FIXTURE: SUCCESS_REPLACEMENT

PRM323/SE1802 T2,T4 07:30–09:50 BE-204; DBI202/SE1804 T2,T4 15:20–17:40 BE-105; SWD392/SE1805 T3,T5 12:50–15:10 AL-402; MAS291/SE1807 T3,T6 10:00–12:20 AL-105; JPD123/SE1803 T6,T7 15:20–17:40 DE-210. Each course is 3 credits.
B01 "Highlands – ca tối" T3,T5,T6 18:00–22:00; B02 "Highlands – ca sáng" CN 07:00–12:00. These are personal unavailable times, two records/four weekly shifts, used ONLY to avoid overlapping class meetings.
Same registered layout as S02.populated: five courses/15 credits, ten class meetings and four busy occurrences. DBI on both T2 and T4 is SE1804 15:20–17:40 BE-105. No old SE1801 DBI block. Xem lịch tuần from S07.replacement opens this frame.
```

#### S02.partial

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S02.partial
FIXTURE: PARTIAL_INITIAL

PRM323/SE1802 T2,T4 07:30–09:50 BE-204; DBI202/SE1801 T2,T4 10:00–12:20 BE-301; SWD392/SE1805 T3,T5 12:50–15:10 AL-402; MAS291/SE1807 T3,T6 10:00–12:20 AL-105; JPD123/SE1803 T6,T7 15:20–17:40 DE-210. Each course is 3 credits.
B01 "Highlands – ca tối" T3,T5,T6 18:00–22:00; B02 "Highlands – ca sáng" CN 07:00–12:00. These are personal unavailable times, two records/four weekly shifts, used ONLY to avoid overlapping class meetings.
Only the FOUR confirmed courses other than DBI202 appear in the registered agenda: 4 môn/12 tín chỉ/eight meetings, four busy occurrences. Banner "Còn 1 môn chưa đăng ký" with text action Xem kết quả → S07.partial. Do not show rejected DBI202 as registered; Lịch navigation selected.
```

### S03 — Tìm môn

| Frame ID | Fixture | Vai trò |
| --- | --- | --- |
| S03.default | BUSY | Baseline |
| S03.results | BUSY | Baseline |
| S03.empty | SEARCH_NO_MATCH | Baseline |
| S03.loading | SEARCH_PENDING | Baseline |

#### S03.default

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S03.default
FIXTURE: BUSY

Tìm môn app bar, search "Nhập mã hoặc tên môn" with clear action, chips Hợp lịch của tôi ON, Còn chỗ ON, Kỳ 4 · KTPM fixed context. Filters apply to course discovery; detail mode defaults to showing all relevant section statuses. No FAB or floating selected-course bar; Tìm môn navigation. Keep query/filter/scroll on return. Tapping a course opens S04 for that course: add if absent in draft, change if already a draft, read-only if registered.
Suggest exactly five 3-credit course cards: PRM323 Phát triển ứng dụng đa nền tảng, 2 lớp đang mở · 2 lớp hợp lịch còn chỗ, PRF192 completed; DBI202 Cơ sở dữ liệu, 6 lớp · 3 lớp hợp lịch còn chỗ, no prerequisite; SWD392 Kiến trúc và thiết kế phần mềm, 1 lớp hợp lịch còn chỗ; MAS291 Xác suất thống kê, 1 lớp hợp lịch còn chỗ; JPD123 Tiếng Nhật, 1 lớp hợp lịch còn chỗ. Last three have no prerequisite requirement in this demo. Do not invent course/section counts beyond this inventory. Course names wrap.
```

#### S03.results

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S03.results
FIXTURE: BUSY

Tìm môn app bar, search "Nhập mã hoặc tên môn" with clear action, chips Hợp lịch của tôi ON, Còn chỗ ON, Kỳ 4 · KTPM fixed context. Filters apply to course discovery; detail mode defaults to showing all relevant section statuses. No FAB or floating selected-course bar; Tìm môn navigation. Keep query/filter/scroll on return. Tapping a course opens S04 for that course: add if absent in draft, change if already a draft, read-only if registered.
Query "DBI"; exact heading "1 kết quả cho “DBI”" and only DBI202 Cơ sở dữ liệu, 3 credits, 6 listed sections/3 compatible available. Tap → S04.default. Do not show two results without a defined second matching course.
```

#### S03.empty

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S03.empty
FIXTURE: SEARCH_NO_MATCH

Tìm môn app bar, search "Nhập mã hoặc tên môn" with clear action, chips Hợp lịch của tôi ON, Còn chỗ ON, Kỳ 4 · KTPM fixed context. Filters apply to course discovery; detail mode defaults to showing all relevant section statuses. No FAB or floating selected-course bar; Tìm môn navigation. Keep query/filter/scroll on return. Tapping a course opens S04 for that course: add if absent in draft, change if already a draft, read-only if registered.
Query "DBI2O2" with letter O. No cards; icon, "Không tìm thấy môn này", "Kiểm tra mã môn hoặc thử từ khóa khác.", Xóa từ khóa → S03.default. This is a completed zero-match query, not a network error.
```

#### S03.loading

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S03.loading
FIXTURE: SEARCH_PENDING

Tìm môn app bar, search "Nhập mã hoặc tên môn" with clear action, chips Hợp lịch của tôi ON, Còn chỗ ON, Kỳ 4 · KTPM fixed context. Filters apply to course discovery; detail mode defaults to showing all relevant section statuses. No FAB or floating selected-course bar; Tìm môn navigation. Keep query/filter/scroll on return. Tapping a course opens S04 for that course: add if absent in draft, change if already a draft, read-only if registered.
Query DBI retained; result area uses skeleton, stable search/chips/navigation. No final count until completed; response → S03.results.
```

### S04 — Chi tiết môn và chọn lớp

| Frame ID | Fixture | Vai trò |
| --- | --- | --- |
| S04.default | BUSY | Baseline |
| S04.selected | BUSY | Baseline |
| S04.added | PLAN1_DBI | Baseline |
| S04.loading | SECTIONS_PENDING | Baseline |
| S04.alt | PARTIAL_INITIAL | Baseline |
| S04.change | PLAN5 | Bổ sung / kiểm tra |
| S04.changeSelected | CHANGE_DBI_DRAFT | Bổ sung / kiểm tra |
| S04.prm | BUSY | Bổ sung / kiểm tra |
| S04.blocked | BLOCKED_PRM | Bổ sung / kiểm tra |

#### S04.default

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S04.default
FIXTURE: BUSY

Nested S04 "Chi tiết môn", one Back to the originating S03/S05/S07, no bottom navigation. Course code/name, credits, prerequisite status and short description. One fixed bottom action, no Add on each radio card. Both local filters OFF in ordinary detail mode so compatible/conflicting/full cards remain inspectable; selected chips include a checkmark. Entire selectable card is a ≥48 dp target. Show all section information through scrolling and keep the final card accessible above the action bar.
DBI202 Cơ sở dữ liệu, 3 tín chỉ, no prerequisite in demo. Six section cards, all capacity 35: SE1801 T2,T4 10:00–12:20 BE-301, GV Phạm Q., 12/35 remaining, Hợp lịch; SE1803 T3,T5 18:00–20:20 AL-201, GV Đỗ T., 20/35, Trùng giờ bận T3,T5; SE1804 T2,T4 15:20–17:40 BE-105, GV Lý H., 3/35, Hợp lịch; SE1806 T6,T7 07:30–09:50 DE-102, GV Mai N., 8/35, Hợp lịch; SE1802 T2,T4 07:30–09:50 BE-302, 0/35, Hết chỗ; SE1805 T3,T5 10:00–12:20 AL-202, 0/35, Hết chỗ. Use "Giảng viên: Chưa cập nhật" for the last two. Count 6 listed sections, 4 with seats, 3 compatible sections with seats before partial submission. Full cards stay visible but nonselectable.
No radio selected; button disabled "Chọn một lớp để thêm" and helper "Chọn lớp để thêm vào kế hoạch". Selecting compatible SE1801 → S04.selected. Selecting SE1803 opens D1 before committing; full sections cannot be selected.
```

#### S04.selected

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S04.selected
FIXTURE: BUSY

Nested S04 "Chi tiết môn", one Back to the originating S03/S05/S07, no bottom navigation. Course code/name, credits, prerequisite status and short description. One fixed bottom action, no Add on each radio card. Both local filters OFF in ordinary detail mode so compatible/conflicting/full cards remain inspectable; selected chips include a checkmark. Entire selectable card is a ≥48 dp target. Show all section information through scrolling and keep the final card accessible above the action bar.
DBI202 Cơ sở dữ liệu, 3 tín chỉ, no prerequisite in demo. Six section cards, all capacity 35: SE1801 T2,T4 10:00–12:20 BE-301, GV Phạm Q., 12/35 remaining, Hợp lịch; SE1803 T3,T5 18:00–20:20 AL-201, GV Đỗ T., 20/35, Trùng giờ bận T3,T5; SE1804 T2,T4 15:20–17:40 BE-105, GV Lý H., 3/35, Hợp lịch; SE1806 T6,T7 07:30–09:50 DE-102, GV Mai N., 8/35, Hợp lịch; SE1802 T2,T4 07:30–09:50 BE-302, 0/35, Hết chỗ; SE1805 T3,T5 10:00–12:20 AL-202, 0/35, Hết chỗ. Use "Giảng viên: Chưa cập nhật" for the last two. Count 6 listed sections, 4 with seats, 3 compatible sections with seats before partial submission. Full cards stay visible but nonselectable.
SE1801 radio selected with primary outline and readable selected status; fixed enabled "Thêm lớp SE1801 vào kế hoạch". No enrollment claim. Add → S04.added, plan becomes only DBI202/SE1801, 1 môn/3 tín chỉ.
```

#### S04.added

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S04.added
FIXTURE: PLAN1_DBI

Nested S04 "Chi tiết môn", one Back to the originating S03/S05/S07, no bottom navigation. Course code/name, credits, prerequisite status and short description. One fixed bottom action, no Add on each radio card. Both local filters OFF in ordinary detail mode so compatible/conflicting/full cards remain inspectable; selected chips include a checkmark. Entire selectable card is a ≥48 dp target. Show all section information through scrolling and keep the final card accessible above the action bar.
DBI202 Cơ sở dữ liệu, 3 tín chỉ, no prerequisite in demo. Six section cards, all capacity 35: SE1801 T2,T4 10:00–12:20 BE-301, GV Phạm Q., 12/35 remaining, Hợp lịch; SE1803 T3,T5 18:00–20:20 AL-201, GV Đỗ T., 20/35, Trùng giờ bận T3,T5; SE1804 T2,T4 15:20–17:40 BE-105, GV Lý H., 3/35, Hợp lịch; SE1806 T6,T7 07:30–09:50 DE-102, GV Mai N., 8/35, Hợp lịch; SE1802 T2,T4 07:30–09:50 BE-302, 0/35, Hết chỗ; SE1805 T3,T5 10:00–12:20 AL-202, 0/35, Hết chỗ. Use "Giảng viên: Chưa cập nhật" for the last two. Count 6 listed sections, 4 with seats, 3 compatible sections with seats before partial submission. Full cards stay visible but nonselectable.
SE1801 retained, confirmation "Đã thêm DBI202 vào kế hoạch", snackbar Hoàn tác, bottom Filled Mở kế hoạch → S05.one. No duplicate Add button. Undo removes the draft item, restores S04.selected and plan zero; saved registered timetable stays unchanged.
```

#### S04.loading

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S04.loading
FIXTURE: SECTIONS_PENDING

Nested S04 "Chi tiết môn", one Back to the originating S03/S05/S07, no bottom navigation. Course code/name, credits, prerequisite status and short description. One fixed bottom action, no Add on each radio card. Both local filters OFF in ordinary detail mode so compatible/conflicting/full cards remain inspectable; selected chips include a checkmark. Entire selectable card is a ≥48 dp target. Show all section information through scrolling and keep the final card accessible above the action bar.
DBI202 header may remain, section list skeleton; no guessed seats or selectable radios, disabled bottom action with loading context. Back available. Response → S04.default; not a full registration spinner.
```

#### S04.alt

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S04.alt
FIXTURE: PARTIAL_INITIAL

Nested S04 "Chi tiết môn", one Back to the originating S03/S05/S07, no bottom navigation. Course code/name, credits, prerequisite status and short description. One fixed bottom action, no Add on each radio card. Both local filters OFF in ordinary detail mode so compatible/conflicting/full cards remain inspectable; selected chips include a checkmark. Entire selectable card is a ≥48 dp target. Show all section information through scrolling and keep the final card accessible above the action bar.
DBI202 Cơ sở dữ liệu, 3 credits, no prerequisite. Banner "Lớp SE1801 vừa hết chỗ"; filters Hợp lịch của tôi ON and Còn chỗ ON. Heading "Lớp phù hợp (2)". Preselect SE1804 T2,T4 15:20–17:40 BE-105, GV Lý H., Còn 3/35 chỗ, Hợp lịch. Second available card SE1806 T6,T7 07:30–09:50 DE-102, GV Mai N., Còn 8/35 chỗ, Hợp lịch. SE1801 is now 0/35 and excluded by filters, not selectable. Show "4 lớp đã đăng ký · Gửi thêm 1 lớp" and bottom "Đăng ký lớp SE1804" → S06.loading1. Back keeps four confirmed classes and DBI not yet registered. Do not send all five again or use generic Add/change-of-confirmed-registration semantics.
```

#### S04.change

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S04.change
FIXTURE: PLAN5

Nested S04 "Chi tiết môn", one Back to the originating S03/S05/S07, no bottom navigation. Course code/name, credits, prerequisite status and short description. One fixed bottom action, no Add on each radio card. Both local filters OFF in ordinary detail mode so compatible/conflicting/full cards remain inspectable; selected chips include a checkmark. Entire selectable card is a ≥48 dp target. Show all section information through scrolling and keep the final card accessible above the action bar.
DBI202 Cơ sở dữ liệu, 3 tín chỉ, no prerequisite in demo. Six section cards, all capacity 35: SE1801 T2,T4 10:00–12:20 BE-301, GV Phạm Q., 12/35 remaining, Hợp lịch; SE1803 T3,T5 18:00–20:20 AL-201, GV Đỗ T., 20/35, Trùng giờ bận T3,T5; SE1804 T2,T4 15:20–17:40 BE-105, GV Lý H., 3/35, Hợp lịch; SE1806 T6,T7 07:30–09:50 DE-102, GV Mai N., 8/35, Hợp lịch; SE1802 T2,T4 07:30–09:50 BE-302, 0/35, Hết chỗ; SE1805 T3,T5 10:00–12:20 AL-202, 0/35, Hết chỗ. Use "Giảng viên: Chưa cập nhật" for the last two. Count 6 listed sections, 4 with seats, 3 compatible sections with seats before partial submission. Full cards stay visible but nonselectable.
Opened from S05.full for existing DRAFT DBI202. Context "Đổi lớp DBI202", preselect current SE1801, label Lớp hiện tại. Bottom disabled "Chọn lớp khác để đổi". Selecting SE1804 → S04.changeSelected. Cancel/Back preserves SE1801. No Add CTA.
```

#### S04.changeSelected

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S04.changeSelected
FIXTURE: CHANGE_DBI_DRAFT

Nested S04 "Chi tiết môn", one Back to the originating S03/S05/S07, no bottom navigation. Course code/name, credits, prerequisite status and short description. One fixed bottom action, no Add on each radio card. Both local filters OFF in ordinary detail mode so compatible/conflicting/full cards remain inspectable; selected chips include a checkmark. Entire selectable card is a ≥48 dp target. Show all section information through scrolling and keep the final card accessible above the action bar.
DBI202 Cơ sở dữ liệu, 3 tín chỉ, no prerequisite in demo. Six section cards, all capacity 35: SE1801 T2,T4 10:00–12:20 BE-301, GV Phạm Q., 12/35 remaining, Hợp lịch; SE1803 T3,T5 18:00–20:20 AL-201, GV Đỗ T., 20/35, Trùng giờ bận T3,T5; SE1804 T2,T4 15:20–17:40 BE-105, GV Lý H., 3/35, Hợp lịch; SE1806 T6,T7 07:30–09:50 DE-102, GV Mai N., 8/35, Hợp lịch; SE1802 T2,T4 07:30–09:50 BE-302, 0/35, Hết chỗ; SE1805 T3,T5 10:00–12:20 AL-202, 0/35, Hết chỗ. Use "Giảng viên: Chưa cập nhật" for the last two. Count 6 listed sections, 4 with seats, 3 compatible sections with seats before partial submission. Full cards stay visible but nonselectable.
SE1804 selected instead of current SE1801. Bottom "Đổi sang lớp SE1804" replaces the old DBI selection, keeping 5 courses/15 credits; DBI schedule becomes T2,T4 15:20–17:40 BE-105. Exclude old same-course section from clash checks. Return to an updated S05.full with snackbar Đã đổi lớp DBI202; derive the updated frame before wiring static prototypes. Cancel leaves SE1801. This draft change does not automatically register anything.
```

#### S04.prm

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S04.prm
FIXTURE: BUSY

Nested S04 "Chi tiết môn", one Back to the originating S03/S05/S07, no bottom navigation. Course code/name, credits, prerequisite status and short description. One fixed bottom action, no Add on each radio card. Both local filters OFF in ordinary detail mode so compatible/conflicting/full cards remain inspectable; selected chips include a checkmark. Entire selectable card is a ≥48 dp target. Show all section information through scrolling and keep the final card accessible above the action bar.
Course-specific example within the SAME app: PRM323 Phát triển ứng dụng đa nền tảng, 3 credits, PRF192 · Đã hoàn thành. Exactly two open class cards: SE1802 T2,T4 07:30–09:50 BE-204 Còn 12/35 chỗ; SE1808 T3,T5 07:30–09:50 BE-205 Còn 6/35 chỗ. Both Hợp lịch. No selection, disabled Chọn một lớp để thêm; selecting then adding commits PRM323 with correct course data. This example does not replace main S04 DBI or turn S05 into a class-picker screen.
```

#### S04.blocked

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S04.blocked
FIXTURE: BLOCKED_PRM

Nested S04 "Chi tiết môn", one Back to the originating S03/S05/S07, no bottom navigation. Course code/name, credits, prerequisite status and short description. One fixed bottom action, no Add on each radio card. Both local filters OFF in ordinary detail mode so compatible/conflicting/full cards remain inspectable; selected chips include a checkmark. Entire selectable card is a ≥48 dp target. Show all section information through scrolling and keep the final card accessible above the action bar.
Separate prerequisite-error fixture, not the main eligible profile. PRM323 Phát triển ứng dụng đa nền tảng, 3 credits, PRF192 · Chưa hoàn thành. Warning "Bạn cần hoàn thành PRF192 trước khi chọn môn này." Two class entries from S04.prm may remain readable but selection and bottom action are disabled with visible reason. Back returns to the PRM course result showing the same blocked status, which must be derived if needed. Main profile PRF192 remains completed. Never simultaneously show completed and missing prerequisite in this fixture.
```

### S05 — Kế hoạch

| Frame ID | Fixture | Vai trò |
| --- | --- | --- |
| S05.empty | BUSY | Baseline |
| S05.one | PLAN1_DBI | Baseline |
| S05.full | PLAN5 | Baseline |
| S05.conflict | CONFLICT_DBI | Baseline |
| S05.deleted | PLAN4_NO_DBI | Baseline |
| S05.registered | SUCCESS_REPLACEMENT | Bổ sung / kiểm tra |

#### S05.empty

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S05.empty
FIXTURE: BUSY

Kế hoạch top-level screen with Kế hoạch navigation. Summary course count, x/20 credits and text-labelled progress, icon + status on every item, draft label Chưa gửi đăng ký. No FAB. Fixed contextual action sits above NavigationBar, with list padding. Draft card opens S04 change for its own course; labelled 48 dp delete action opens D3 for that course. One course has one selected section; change never adds credits twice.
Zero courses/0 credits. Empty icon, Chưa có môn trong kế hoạch, one Filled Tìm môn → S03.default. No review/send action for an empty plan.
```

#### S05.one

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S05.one
FIXTURE: PLAN1_DBI

Kế hoạch top-level screen with Kế hoạch navigation. Summary course count, x/20 credits and text-labelled progress, icon + status on every item, draft label Chưa gửi đăng ký. No FAB. Fixed contextual action sits above NavigationBar, with list padding. Draft card opens S04 change for its own course; labelled 48 dp delete action opens D3 for that course. One course has one selected section; change never adds credits twice.
Only DBI202/SE1801 T2,T4 10:00–12:20 BE-301, 3 credits. Summary "1 môn · 3/20 tín chỉ", progress 15%, Hợp lịch, Chưa đăng ký. Primary "Tìm thêm môn (còn 4 môn)" → S03; DBI course in search is labelled Đã có trong kế hoạch and opens change mode. This is the end of F2 adding one course.
```

#### S05.full

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S05.full
FIXTURE: PLAN5

Kế hoạch top-level screen with Kế hoạch navigation. Summary course count, x/20 credits and text-labelled progress, icon + status on every item, draft label Chưa gửi đăng ký. No FAB. Fixed contextual action sits above NavigationBar, with list padding. Draft card opens S04 change for its own course; labelled 48 dp delete action opens D3 for that course. One course has one selected section; change never adds credits twice.
PRM323/SE1802 T2,T4 07:30–09:50 BE-204; DBI202/SE1801 T2,T4 10:00–12:20 BE-301; SWD392/SE1805 T3,T5 12:50–15:10 AL-402; MAS291/SE1807 T3,T6 10:00–12:20 AL-105; JPD123/SE1803 T6,T7 15:20–17:40 DE-210. Each course is 3 credits.
Five draft items, total "5 môn · 15/20 tín chỉ", progress 75%, Không trùng lịch. Small text + Thêm môn allowed near list header; primary "Xem lại & gửi đăng ký" → S06.default. No registered/saved-timetable claim. All prerequisite checks pass in this fixture.
```

#### S05.conflict

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S05.conflict
FIXTURE: CONFLICT_DBI

Kế hoạch top-level screen with Kế hoạch navigation. Summary course count, x/20 credits and text-labelled progress, icon + status on every item, draft label Chưa gửi đăng ký. No FAB. Fixed contextual action sits above NavigationBar, with list padding. Draft card opens S04 change for its own course; labelled 48 dp delete action opens D3 for that course. One course has one selected section; change never adds credits twice.
PRM323/SE1802 T2,T4 07:30–09:50 BE-204; DBI202/SE1801 T2,T4 10:00–12:20 BE-301; SWD392/SE1805 T3,T5 12:50–15:10 AL-402; MAS291/SE1807 T3,T6 10:00–12:20 AL-105; JPD123/SE1803 T6,T7 15:20–17:40 DE-210. Each course is 3 credits.
B01 "Highlands – ca tối" T3,T5,T6 18:00–22:00; B02 "Highlands – ca sáng" CN 07:00–12:00. These are personal unavailable times, two records/four weekly shifts, used ONLY to avoid overlapping class meetings.
Replace only draft DBI202 with SE1803 T3,T5 18:00–20:20 AL-201. Total remains 5 courses/15 credits. Banner "DBI202 trùng giờ bận" and exact overlap against B01 on T3/T5. DBI item outlined with warning + Trùng giờ bận T3, T5; summary "1 lớp xung đột · 2 buổi". Submit action disabled with visible reason; tap that draft DBI item → S04 change to fix. No staff shift swap or instruction to change workplace schedules.
```

#### S05.deleted

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S05.deleted
FIXTURE: PLAN4_NO_DBI

Kế hoạch top-level screen with Kế hoạch navigation. Summary course count, x/20 credits and text-labelled progress, icon + status on every item, draft label Chưa gửi đăng ký. No FAB. Fixed contextual action sits above NavigationBar, with list padding. Draft card opens S04 change for its own course; labelled 48 dp delete action opens D3 for that course. One course has one selected section; change never adds credits twice.
After D3 removes DBI202 from unsubmitted PLAN5, exactly PRM323/SE1802, SWD392/SE1805, MAS291/SE1807, JPD123/SE1803 remain. 4 môn · 12/20 tín chỉ, progress 60%, Không trùng lịch. Snackbar "Đã xóa DBI202 khỏi kế hoạch" + Hoàn tác for 6 seconds restores SE1801 and total 15. Primary "Tìm thêm môn (còn 1 môn)". Draft removal does not cancel a confirmed class.
```

#### S05.registered

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S05.registered
FIXTURE: SUCCESS_REPLACEMENT

Kế hoạch navigation selected; five courses/15 credits, all labelled Đã đăng ký. PRM323/SE1802 T2,T4 07:30–09:50 BE-204; DBI202/SE1804 T2,T4 15:20–17:40 BE-105; SWD392/SE1805 T3,T5 12:50–15:10 AL-402; MAS291/SE1807 T3,T6 10:00–12:20 AL-105; JPD123/SE1803 T6,T7 15:20–17:40 DE-210. Each course is 3 credits.
No enabled Add-again/delete/change-registration/send-again controls. One Filled Xem lịch tuần → S02.replacement. Back from S07.replacement lands here. For initial-success Back use an equivalent registered state with original SE1801 timetable, derived explicitly; never send four confirmed courses again.
```

### S06 — Xem lại và gửi đăng ký

| Frame ID | Fixture | Vai trò |
| --- | --- | --- |
| S06.default | PLAN5 | Baseline |
| S06.loading | SUBMIT5_PENDING | Baseline |
| S06.loading1 | REPLACEMENT_PENDING | Baseline |
| S06.error | SUBMIT5_UNKNOWN | Baseline |
| S06.error1 | REPLACEMENT_UNKNOWN | Bổ sung / kiểm tra |

#### S06.default

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S06.default
FIXTURE: PLAN5

Nested S06, no bottom navigation. Review/results use safe Back to S05; sending states temporarily hide Back and repeated actions, bounded demo timeout 30 s then an error/uncertain state. Keep request scope and known results explicit; no automatic registration, invented portal time or 24-hour cancellation policy. Local selections persist on network failure.
Title Xem lại đăng ký. PRM323/SE1802 T2,T4 07:30–09:50 BE-204; DBI202/SE1801 T2,T4 10:00–12:20 BE-301; SWD392/SE1805 T3,T5 12:50–15:10 AL-402; MAS291/SE1807 T3,T6 10:00–12:20 AL-105; JPD123/SE1803 T6,T7 15:20–17:40 DE-210. Each course is 3 credits.
Summary 5 lớp · 15 tín chỉ; check icon Đã kiểm tra: không trùng lịch; read-only list of exactly those five drafts, no delete controls. Plain guidance "Kiểm tra các lớp trước khi gửi đăng ký." One fixed Filled Gửi đăng ký (5 lớp) opens D2. Để sau closes dialog; only Gửi begins S06.loading.
```

#### S06.loading

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S06.loading
FIXTURE: SUBMIT5_PENDING

Nested S06, no bottom navigation. Review/results use safe Back to S05; sending states temporarily hide Back and repeated actions, bounded demo timeout 30 s then an error/uncertain state. Keep request scope and known results explicit; no automatic registration, invented portal time or 24-hour cancellation policy. Local selections persist on network failure.
Title Đang gửi đăng ký. Spinner, "Đang gửi 5 lớp…", "Kế hoạch của bạn vẫn được giữ nguyên." No completed checkmark, Back, navigation or repeated submit button. Result fixture → S07.success or S07.partial; uncertain connection result → S06.error.
```

#### S06.loading1

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S06.loading1
FIXTURE: REPLACEMENT_PENDING

Nested S06, no bottom navigation. Review/results use safe Back to S05; sending states temporarily hide Back and repeated actions, bounded demo timeout 30 s then an error/uncertain state. Keep request scope and known results explicit; no automatic registration, invented portal time or 24-hour cancellation policy. Local selections persist on network failure.
Title Đang gửi đăng ký. Spinner, "Đang gửi 1 lớp…", "DBI202 · SE1804", "4 lớp đã đăng ký được giữ nguyên". Request includes ONLY SE1804 T2,T4 15:20–17:40 BE-105. Confirmed success → S07.replacement; uncertain failure → S06.error1. Never reuse five-class loading copy.
```

#### S06.error

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S06.error
FIXTURE: SUBMIT5_UNKNOWN

Nested S06, no bottom navigation. Review/results use safe Back to S05; sending states temporarily hide Back and repeated actions, bounded demo timeout 30 s then an error/uncertain state. Keep request scope and known results explicit; no automatic registration, invented portal time or 24-hour cancellation policy. Local selections persist on network failure.
Title Xem lại đăng ký. Icon, heading Chưa xác nhận được kết quả đăng ký, explanation "Kết nối bị gián đoạn. Kế hoạch của bạn vẫn được giữ nguyên." PRM323/SE1802 T2,T4 07:30–09:50 BE-204; DBI202/SE1801 T2,T4 10:00–12:20 BE-301; SWD392/SE1805 T3,T5 12:50–15:10 AL-402; MAS291/SE1807 T3,T6 10:00–12:20 AL-105; JPD123/SE1803 T6,T7 15:20–17:40 DE-210. Each course is 3 credits.
One Filled Thử lại checks/resumes the SAME unresolved five-class request → S06.loading. Text Về kế hoạch retains pending/unknown labels and prevents a new duplicate request. Do not assert no class was registered when the outcome is unknown. Do not show a different course list.
```

#### S06.error1

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S06.error1
FIXTURE: REPLACEMENT_UNKNOWN

Nested S06, no bottom navigation. Review/results use safe Back to S05; sending states temporarily hide Back and repeated actions, bounded demo timeout 30 s then an error/uncertain state. Keep request scope and known results explicit; no automatic registration, invented portal time or 24-hour cancellation policy. Local selections persist on network failure.
Title Xem lại đăng ký. Heading Chưa xác nhận được lớp thay thế; "4 lớp đã đăng ký · 1 lớp chưa xác nhận". The four non-DBI classes remain confirmed. Unknown class is DBI202/SE1804 T2,T4 15:20–17:40 BE-105. One Filled Thử lại checks/resumes only this unresolved one-class request → S06.loading1; Về kế hoạch keeps these statuses and blocks a different replacement request until resolved. Never retry confirmed courses or mark SE1804 as definitely rejected.
```

### S07 — Kết quả đăng ký

| Frame ID | Fixture | Vai trò |
| --- | --- | --- |
| S07.success | SUCCESS_INITIAL | Baseline |
| S07.partial | PARTIAL_INITIAL | Baseline |
| S07.replacement | SUCCESS_REPLACEMENT | Bổ sung / kiểm tra |

#### S07.success

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S07.success
FIXTURE: SUCCESS_INITIAL

Kết quả đăng ký nested screen, one Back to status-aware S05, no bottom navigation, delete/cancel-registration controls or countdown. Calm result icon, exact course result tags, one prominent Filled action. Back cannot reopen an enabled old submit request.
PRM323/SE1802 T2,T4 07:30–09:50 BE-204; DBI202/SE1801 T2,T4 10:00–12:20 BE-301; SWD392/SE1805 T3,T5 12:50–15:10 AL-402; MAS291/SE1807 T3,T6 10:00–12:20 AL-105; JPD123/SE1803 T6,T7 15:20–17:40 DE-210. Each course is 3 credits.
Heading Đã đăng ký 5/5 lớp, 5 môn · 15 tín chỉ. All five show Đăng ký thành công. DBI202 remains SE1801 10:00–12:20 T2,T4 BE-301. Xem lịch tuần → S02.populated. No SE1804 in the initial-success fixture.
```

#### S07.partial

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S07.partial
FIXTURE: PARTIAL_INITIAL

Kết quả đăng ký nested screen, one Back to status-aware S05, no bottom navigation, delete/cancel-registration controls or countdown. Calm result icon, exact course result tags, one prominent Filled action. Back cannot reopen an enabled old submit request.
PRM323/SE1802 T2,T4 07:30–09:50 BE-204; DBI202/SE1801 T2,T4 10:00–12:20 BE-301; SWD392/SE1805 T3,T5 12:50–15:10 AL-402; MAS291/SE1807 T3,T6 10:00–12:20 AL-105; JPD123/SE1803 T6,T7 15:20–17:40 DE-210. Each course is 3 credits.
Heading Đã đăng ký 4/5 lớp. DBI202/SE1801 now has 0/35 seats, first item Hết chỗ, chưa đăng ký. Four other original items Đăng ký thành công, unchanged. Primary Chọn lớp thay thế cho DBI202 → S04.alt; secondary text Về lịch tuần → S02.partial. Do not register/change work shifts; recovery selects another academic section for the same course.
```

#### S07.replacement

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S07.replacement
FIXTURE: SUCCESS_REPLACEMENT

Kết quả đăng ký nested screen, one Back to status-aware S05, no bottom navigation, delete/cancel-registration controls or countdown. Calm result icon, exact course result tags, one prominent Filled action. Back cannot reopen an enabled old submit request.
PRM323/SE1802 T2,T4 07:30–09:50 BE-204; DBI202/SE1804 T2,T4 15:20–17:40 BE-105; SWD392/SE1805 T3,T5 12:50–15:10 AL-402; MAS291/SE1807 T3,T6 10:00–12:20 AL-105; JPD123/SE1803 T6,T7 15:20–17:40 DE-210. Each course is 3 credits.
Heading Đã đăng ký 5/5 lớp, all confirmed; only DBI changes to SE1804 with exact new schedule. Xem lịch tuần → S02.replacement; Back → S05.registered. Keep original four registered courses, do not reintroduce SE1801 or append a sixth course.
```

### S08 — Cá nhân

| Frame ID | Fixture | Vai trò |
| --- | --- | --- |
| S08.default | PROFILE | Baseline |

#### S08.default

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S08.default
FIXTURE: PROFILE

Cá nhân with Cá nhân navigation selected. Initials avatar GH, Trần Gia Hân, SE180123, Kỹ thuật phần mềm, Kỳ 4. Progress 54/145 tín chỉ with visible text, accurately about 37.2%, not 75% from semester credits. Exactly three rows: "Giờ bận" → S09.populated, subtitle "Khung giờ cá nhân dùng để tránh trùng lịch học"; "Học kỳ đang lập kế hoạch" with Xuân 2027 · Kỳ 4; "Đăng xuất" → D5. Names and subtitles wrap. No staff scheduling, employee data, payroll, shift exchange, tuition or unrelated settings. Student ID here is persona data; do not replace it with the repository author's student ID.
```

### S09 — Giờ bận cá nhân

| Frame ID | Fixture | Vai trò |
| --- | --- | --- |
| S09.empty | FIRST_USE | Baseline |
| S09.populated | BUSY | Baseline |
| S09.saved | BUSY_B01 | Baseline |

#### S09.empty

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S09.empty
FIXTURE: FIRST_USE

S09 title Giờ bận, one Back to originating S02 or S08, no bottom navigation. Intro "Khai báo thời gian bạn không thể học để tìm lớp phù hợp." This is a personal timetable constraint within Student Course Planner. A row has name, repeated weekdays, 24h interval, icon and labelled 48 dp edit action → S10.edit. No staff assignment, approval or exchange features.
No records; icon, Chưa có giờ bận nào, concise explanation and ONE Filled Thêm giờ bận → S10.default. Hide FAB and do not place an empty panel inside a populated list.
```

#### S09.populated

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S09.populated
FIXTURE: BUSY

S09 title Giờ bận, one Back to originating S02 or S08, no bottom navigation. Intro "Khai báo thời gian bạn không thể học để tìm lớp phù hợp." This is a personal timetable constraint within Student Course Planner. A row has name, repeated weekdays, 24h interval, icon and labelled 48 dp edit action → S10.edit. No staff assignment, approval or exchange features.
B01 "Highlands – ca tối" T3,T5,T6 18:00–22:00; B02 "Highlands – ca sáng" CN 07:00–12:00. These are personal unavailable times, two records/four weekly shifts, used ONLY to avoid overlapping class meetings.
Exactly 2 records, summary "2 mục · 4 khung giờ/tuần". Extended FAB Thêm giờ bận; safe list/snackbar/FAB padding. Back → S02.busy or profile origin.
```

#### S09.saved

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S09.saved
FIXTURE: BUSY_B01

S09 title Giờ bận, one Back to originating S02 or S08, no bottom navigation. Intro "Khai báo thời gian bạn không thể học để tìm lớp phù hợp." This is a personal timetable constraint within Student Course Planner. A row has name, repeated weekdays, 24h interval, icon and labelled 48 dp edit action → S10.edit. No staff assignment, approval or exchange features.
After first saving only B01, show ONE record Highlands – ca tối T3,T5,T6 18:00–22:00; "1 mục · 3 khung giờ/tuần", snackbar Đã lưu giờ bận. FAB lets user add B02 via S10.filledB02. After second save use S09.populated with a transient saved snackbar and 2 records/4 occurrences. Do not claim the Sunday record exists before saving it.
```

### S10 — Thêm/sửa giờ bận

| Frame ID | Fixture | Vai trò |
| --- | --- | --- |
| S10.default | FIRST_USE | Baseline |
| S10.filled | NEW_B01 | Baseline |
| S10.error | INVALID_B01 | Baseline |
| S10.saving | NEW_B01_PENDING | Baseline |
| S10.edit | BUSY | Baseline |
| S10.filledB02 | NEW_B02 | Bổ sung / kiểm tra |

#### S10.default

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S10.default
FIXTURE: FIRST_USE

Nested S10, one Back, no bottom navigation. Labels above Tên giờ bận, Lặp lại vào các ngày, Bắt đầu, Kết thúc. Name 1–40 characters with accurate counter. Seven multiselect weekday chips T2–CN use Wrap and ≥48 dp targets; selected days include checkmarks. Start/end controls open 24h time picker and may stack at 130% text. Explain "Khung giờ này giúp tránh chọn lớp trùng lịch." Form scrolls with keyboard and fixed SafeArea action. Name and at least one day required; end strictly after start; inline errors keep input and focus first invalid control. Overnight intervals are split in this demo. Dirty Back opens D6; unchanged Back returns normally. Save returns to S09 if opened there, or updated S02 if editing directly from a busy block.
Title Thêm giờ bận, fields and days empty, counter 0/40, disabled Lưu giờ bận until required values present. No staff-shift controls.
```

#### S10.filled

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S10.filled
FIXTURE: NEW_B01

Nested S10, one Back, no bottom navigation. Labels above Tên giờ bận, Lặp lại vào các ngày, Bắt đầu, Kết thúc. Name 1–40 characters with accurate counter. Seven multiselect weekday chips T2–CN use Wrap and ≥48 dp targets; selected days include checkmarks. Start/end controls open 24h time picker and may stack at 130% text. Explain "Khung giờ này giúp tránh chọn lớp trùng lịch." Form scrolls with keyboard and fixed SafeArea action. Name and at least one day required; end strictly after start; inline errors keep input and focus first invalid control. Overnight intervals are split in this demo. Dirty Back opens D6; unchanged Back returns normally. Save returns to S09 if opened there, or updated S02 if editing directly from a busy block.
Title Thêm giờ bận, name Highlands – ca tối counter 18/40, T3/T5/T6 checked, 18:00–22:00. Enabled Lưu giờ bận → S10.saving → S09.saved with ONE record/three occurrences. No pre-created B02.
```

#### S10.error

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S10.error
FIXTURE: INVALID_B01

Nested S10, one Back, no bottom navigation. Labels above Tên giờ bận, Lặp lại vào các ngày, Bắt đầu, Kết thúc. Name 1–40 characters with accurate counter. Seven multiselect weekday chips T2–CN use Wrap and ≥48 dp targets; selected days include checkmarks. Start/end controls open 24h time picker and may stack at 130% text. Explain "Khung giờ này giúp tránh chọn lớp trùng lịch." Form scrolls with keyboard and fixed SafeArea action. Name and at least one day required; end strictly after start; inline errors keep input and focus first invalid control. Overnight intervals are split in this demo. Dirty Back opens D6; unchanged Back returns normally. Save returns to S09 if opened there, or updated S02 if editing directly from a busy block.
B01 name retained counter 18/40, days T3/T5/T6 checked, start 22:00/end 18:00. Error under end field "Giờ kết thúc phải sau giờ bắt đầu" with icon. Retain input and permit correction; no save success while invalid. Let long error wrap fully.
```

#### S10.saving

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S10.saving
FIXTURE: NEW_B01_PENDING

Nested S10, one Back, no bottom navigation. Labels above Tên giờ bận, Lặp lại vào các ngày, Bắt đầu, Kết thúc. Name 1–40 characters with accurate counter. Seven multiselect weekday chips T2–CN use Wrap and ≥48 dp targets; selected days include checkmarks. Start/end controls open 24h time picker and may stack at 130% text. Explain "Khung giờ này giúp tránh chọn lớp trùng lịch." Form scrolls with keyboard and fixed SafeArea action. Name and at least one day required; end strictly after start; inline errors keep input and focus first invalid control. Overnight intervals are split in this demo. Dirty Back opens D6; unchanged Back returns normally. Save returns to S09 if opened there, or updated S02 if editing directly from a busy block.
Valid B01 18:00–22:00 and selected T3/T5/T6; form locked, bottom spinner Đang lưu…; no success before completion. Completed first save → S09.saved. No repeated save taps.
```

#### S10.edit

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S10.edit
FIXTURE: BUSY

Nested S10, one Back, no bottom navigation. Labels above Tên giờ bận, Lặp lại vào các ngày, Bắt đầu, Kết thúc. Name 1–40 characters with accurate counter. Seven multiselect weekday chips T2–CN use Wrap and ≥48 dp targets; selected days include checkmarks. Start/end controls open 24h time picker and may stack at 130% text. Explain "Khung giờ này giúp tránh chọn lớp trùng lịch." Form scrolls with keyboard and fixed SafeArea action. Name and at least one day required; end strictly after start; inline errors keep input and focus first invalid control. Overnight intervals are split in this demo. Dirty Back opens D6; unchanged Back returns normally. Save returns to S09 if opened there, or updated S02 if editing directly from a busy block.
Title Sửa giờ bận. Existing B01 name counter 18/40, T3/T5/T6 18:00–22:00. App-bar delete action opens D4. Lưu thay đổi enabled only when valid data differs from saved record. Saving/reverting recalculates class–busy conflicts. Editing is personal availability; no proposal to exchange shifts with another employee.
```

#### S10.filledB02

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S10.filledB02
FIXTURE: NEW_B02

Nested S10, one Back, no bottom navigation. Labels above Tên giờ bận, Lặp lại vào các ngày, Bắt đầu, Kết thúc. Name 1–40 characters with accurate counter. Seven multiselect weekday chips T2–CN use Wrap and ≥48 dp targets; selected days include checkmarks. Start/end controls open 24h time picker and may stack at 130% text. Explain "Khung giờ này giúp tránh chọn lớp trùng lịch." Form scrolls with keyboard and fixed SafeArea action. Name and at least one day required; end strictly after start; inline errors keep input and focus first invalid control. Overnight intervals are split in this demo. Dirty Back opens D6; unchanged Back returns normally. Save returns to S09 if opened there, or updated S02 if editing directly from a busy block.
Add SECOND record: name Highlands – ca sáng counter 19/40, only CN checked, 07:00–12:00. Save creates B02 while preserving B01 → S09.populated with two records/four occurrences, then S02.busy. Never overwrite B01 or keep the count at three.
```

### Dialog — Dialog overlay

| Frame ID | Fixture | Vai trò |
| --- | --- | --- |
| D1 | PLAN4_NO_DBI | Baseline |
| D2 | PLAN5 | Baseline |
| D3 | PLAN5 | Baseline |
| D4 | BUSY | Baseline |
| D5 | PROFILE | Baseline |
| D6 | DIRTY_FORM | Baseline |

#### D1

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: D1
FIXTURE: PLAN4_NO_DBI

One dialog overlay on the ordinary DBI202 detail layout when selecting SE1803. For THIS conflict demonstration, four non-DBI draft courses already exist (PLAN4_NO_DBI); do not use the empty-plan fixture. Title "Lớp này trùng giờ bận"; body "DBI202 · SE1803 học T3, T5 lúc 18:00–20:20, trùng Highlands – ca tối 18:00–22:00." Actions Vẫn thêm / Chọn lớp khác, emphasize safe choice. Vẫn thêm adds only the conflicting DBI class → S05.conflict, now five courses/15 credits; Chọn lớp khác dismisses without adding. If using D1 from an initially empty plan instead, derive a ONE-course conflict plan rather than jumping to the five-course fixture. No work-shift exchange. 28 dp radius, two ≥48 dp actions.
```

#### D2

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: D2
FIXTURE: PLAN5

One confirmation dialog overlay on S06.default. Title Gửi đăng ký 5 lớp?, body "5 lớp · 15 tín chỉ. Kiểm tra các lớp trước khi gửi.", actions Để sau / Gửi. Để sau dismisses, Gửi → S06.loading. No policy/cancellation guarantee or automated submission. This dialog is for the original five-class request, not the one-class replacement. 28 dp radius.
```

#### D3

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: D3
FIXTURE: PLAN5

One destructive dialog overlay on S05.full. Title Xóa DBI202 khỏi kế hoạch?, body "Bạn có thể hoàn tác ngay sau khi xóa.", Hủy / Xóa. Xóa only the unsubmitted draft DBI202/SE1801 → S05.deleted; Hủy preserves it. Do not cancel confirmed school registration. 28 dp radius and readable safe action hierarchy.
```

#### D4

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: D4
FIXTURE: BUSY

One destructive dialog overlay on S10.edit. Title "Xóa giờ bận này?", named record "Highlands – ca tối", explanation "Lịch và cảnh báo trùng giờ sẽ được cập nhật.", Hủy / Xóa. Deleting B01 from B01+B02 leaves B02 only, 1 record/1 weekly occurrence. Recalculate clashes but keep every course. Return to originating S09/S02 with correct counts. This removes personal unavailable time, not an employee shift.
```

#### D5

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: D5
FIXTURE: PROFILE

One confirmation overlay on S08.default. Title "Đăng xuất khỏi Semester?", Hủy / Đăng xuất. Hủy preserves screen; confirmation ends demo session → S01.default without showing authenticated profile. Do not delete/cancel confirmed class data or make unsupported security claims. 28 dp radius.
```

#### D6

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 360 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: D6
FIXTURE: DIRTY_FORM

One dialog overlay on a modified unsaved S10 form. Title Bỏ thay đổi chưa lưu?, Tiếp tục nhập / Bỏ. Continue preserves the entered data; discard returns to the originating S09/S02 using last saved record. Do not save on discard. An unchanged form uses ordinary Back without this overlay.
```

### Responsive — Bản rộng 412 dp

| Frame ID | Fixture | Vai trò |
| --- | --- | --- |
| S02.populated.412 | WIDTH_CHECK | Bổ sung / kiểm tra |
| S04.selected.412 | WIDTH_CHECK | Bổ sung / kiểm tra |
| S05.full.412 | WIDTH_CHECK | Bổ sung / kiểm tra |
| S10.error.412 | WIDTH_CHECK | Bổ sung / kiểm tra |

#### S02.populated.412

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 412 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S02.populated.412
FIXTURE: WIDTH_CHECK

Create the 412 × 800 dp width variant of S02.populated, not another 360 dp copy. Preserve its exact base data and state; DBI selected/original is SE1801 T2,T4 10:00–12:20 BE-301, not the replacement. Keep original font sizes, 16 dp margins and one-column mobile layout. Let content grow/wrap, retain safe action/list padding and ≥48 dp targets. S10.error retains 22:00–18:00 and full inline error; S05.full retains 15/20 credits and 75% progress. No new courses, shifted hours or tiny seven-column grid.
```

#### S04.selected.412

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 412 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S04.selected.412
FIXTURE: WIDTH_CHECK

Create the 412 × 800 dp width variant of S04.selected, not another 360 dp copy. Preserve its exact base data and state; DBI selected/original is SE1801 T2,T4 10:00–12:20 BE-301, not the replacement. Keep original font sizes, 16 dp margins and one-column mobile layout. Let content grow/wrap, retain safe action/list padding and ≥48 dp targets. S10.error retains 22:00–18:00 and full inline error; S05.full retains 15/20 credits and 75% progress. No new courses, shifted hours or tiny seven-column grid.
```

#### S05.full.412

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 412 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S05.full.412
FIXTURE: WIDTH_CHECK

Create the 412 × 800 dp width variant of S05.full, not another 360 dp copy. Preserve its exact base data and state; DBI selected/original is SE1801 T2,T4 10:00–12:20 BE-301, not the replacement. Keep original font sizes, 16 dp margins and one-column mobile layout. Let content grow/wrap, retain safe action/list padding and ≥48 dp targets. S10.error retains 22:00–18:00 and full inline error; S05.full retains 15/20 credits and 75% progress. No new courses, shifted hours or tiny seven-column grid.
```

#### S10.error.412

```text
Continue the SAME Semester Student Course Planner project and the P00 visual reference. One unified student timetable/course-planning app. All visible UI is Vietnamese, brand exactly Semester, Android Material 3 light, 412 × 800 dp, 16 dp margins, Be Vietnam Pro, body/helper/error/chip/button ≥14 sp, interactive targets ≥48×48 dp. Preserve original tokens/components, safe areas and scroll padding. Bottom navigation only on S02/S03/S05/S08: Lịch, Tìm môn, Kế hoạch, Cá nhân. Personal busy time is a scheduling constraint, not a separate workplace product. Create exactly ONE separately selectable canvas frame for the output ID below. Use that exact short ID as its canvas label when supported; keep technical IDs outside the phone UI. Place beside sibling states of the same screen with a clear gap; preserve existing correct screens. Never create a multi-state collage, duplicates or an additional app.

OUTPUT ID: S10.error.412
FIXTURE: WIDTH_CHECK

Create the 412 × 800 dp width variant of S10.error, not another 360 dp copy. Preserve its exact base data and state; DBI selected/original is SE1801 T2,T4 10:00–12:20 BE-301, not the replacement. Keep original font sizes, 16 dp margins and one-column mobile layout. Let content grow/wrap, retain safe action/list padding and ≥48 dp targets. S10.error retains 22:00–18:00 and full inline error; S05.full retains 15/20 credits and 75% progress. No new courses, shifted hours or tiny seven-column grid.
```

## 7. Nối thành một prototype của cùng ứng dụng

| Flow | Bắt đầu và mục tiêu | Đường chính | Nhánh và kết quả |
| --- | --- | --- | --- |
| F1 — Khai báo thời gian không thể học | S01 FIRST_USE; lưu giờ bận làm ràng buộc xếp lớp | S01.filled → loading → S02.empty → S09.empty → S10.filled → saving → S09.saved → thêm S10.filledB02 → S09.populated → S02.busy | Sai thông tin → S01.error; giờ sai → S10.error; dirty Back → D6; 1 mục/3 khung rồi 2 mục/4 khung |
| F2 — Tìm môn và thêm lớp phù hợp | S02.busy; thêm DBI vào nháp | S03.default/results → S04.default → selected → added → S05.one | Search sai → empty; Undo → selected; tiếp tục chọn các môn còn lại → S05.full. Nhánh D1 → S05.conflict dùng PLAN4_NO_DBI có 4 môn trước khi thêm DBI |
| F3A — Gửi 5 lớp thành công | S05.full PLAN5; xác nhận 5 lớp | S06.default → D2 → loading → S07.success → S02.populated | Để sau không gửi; kết quả chỉ thành công khi fixture xác nhận |
| F3B — Gửi và phục hồi | S05.full; mất mạng hoặc lớp hết chỗ | loading → error → retry → loading → S07.partial → S04.alt → S06.loading1 → S07.replacement → S02.replacement | error1 giữ 4 xác nhận và 1 chưa rõ; retry riêng lớp thay thế; Về lịch tuần sau partial → S02.partial |

F3A/F3B là hai starting point của flow nghiệp vụ thứ ba. F1/F2/F3 đều cùng app, dùng fixture được ghi rõ. Mỗi màn S01–S10 phải truy cập được: S08 từ tab Cá nhân; S09 từ S02/S08; S10 từ S09 hoặc khối giờ bận.

### State chuyển tiếp cần derive khi nối ảnh tĩnh

Không nối nút đến ảnh sai dữ liệu chỉ để “bấm được”. Nếu công cụ không hỗ trợ thay đổi dữ liệu component, tạo frame bổ sung từ state gốc trước khi nối:

- Sau đổi nháp DBI: S05 vẫn 5/15 nhưng DBI SE1804 T2/T4 15:20–17:40 BE-105. Undo/hủy giữ SE1801, không đăng ký tự động.
- Nhánh D1 → S05.conflict có sẵn 4 môn ngoài DBI (PLAN4_NO_DBI). Nếu thử thêm lớp trùng từ nháp trống, tạo S05.oneConflict với đúng 1 môn/3 tín chỉ, không nối thẳng sang ảnh 5 môn. Đây là kịch bản kiểm thử của cùng app, không phải dự án khác.
- Mở course card ngoài DBI: S04 phải hiển thị đúng môn, không cho mọi card mở ảnh DBI. PRM dùng S04.prm; các môn khác dùng bảng dữ liệu, đúng mode add/change/read-only.
- Từ S02/S07 tới lớp xác nhận: S04 chỉ xem, không nút thêm/đổi/xóa đăng ký. Màn này vẫn là state S04, không phải màn chức năng mới.
- Back sau SUCCESS_INITIAL: S05 với năm lớp original Đã đăng ký và CTA Xem lịch tuần. S05.registered có DBI thay thế chỉ dùng SUCCESS_REPLACEMENT.
- Về kế hoạch sau partial: 4 item Đã đăng ký, DBI SE1801 Hết chỗ và CTA Chọn lớp thay thế; không gửi lại cả 5. Sau error1: 4 xác nhận + DBI SE1804 Chưa xác nhận, chưa bật đổi/gửi độc lập đến khi có kết quả.
- Back S09.saved sau lưu B01: S02 trung gian 0 môn/3 khung. Sau B02 dùng S02.busy 0 môn/4 khung. Xóa B01: 1 mục/1 khung CN; dữ liệu môn giữ nguyên.
- Chiều dài tên/quy mô text lớn phải để card/button/form tự giãn; các state không được cắt thông tin giờ, phòng hoặc lý do lỗi.

Prompt derive một trạng thái chuyển tiếp khi thiếu:

```text
In the SAME Semester Student Course Planner project, create exactly ONE additional state of an existing screen.
Output canvas ID: [exact new state ID].
Source frame: [existing frame ID].
Fixture: [exact fixture from the document].
Change ONLY: [precise course/section/status/count changes].
Preserve all other course data, components, navigation and tokens. Keep one course/one section, known registered results and personal busy times intact. Do not send or cancel registrations merely by displaying this state. Use one separately selectable frame, technical ID outside the phone UI. Do not invent missing backend behavior.
```

Nếu Stitch có hỗ trợ prototype, yêu cầu nối theo bảng trên rồi kiểm tra từng nút; nếu không, nối trong Figma. Loading demo gắn nhánh fixture rõ; thao tác bấm trong Figma chỉ chứng minh điều hướng mô phỏng, không chứng minh API/cổng trường hoạt động.

## 8. Prompt phản biện đúng rubric, dựa trên ảnh thật

Gửi khi có ảnh rõ, kèm frame ID và fixture. Giữ toàn bộ câu trả lời và quyết định của nhóm theo đề.

```text
Bạn là người phản biện UX/accessibility cho Semester — Student Course Planner (thời khóa biểu và chọn môn/lớp cho sinh viên). Toàn bộ S01–S10 là một ứng dụng. Persona Trần Gia Hân, sinh viên KTPM kỳ 4, dùng Android một tay 360–412 dp, chữ hệ thống 115–130%, mạng chập chờn. Giờ bận cá nhân là ràng buộc chọn lớp, không phải quản lý nhân viên/đổi ca.
Đọc bảng dữ liệu, fixture và flow đã cung cấp; chỉ đánh giá ảnh thực tế đính kèm. S04 chính DBI202, 6 lớp/3 hợp lịch còn chỗ ban đầu; sau SE1801 hết chỗ, SE1804 T2/T4 15:20–17:40 BE-105 là lựa chọn thay thế mặc định. Giữ 4 xác nhận và gửi mới 1 lớp. Lịch đăng ký S02 khác nháp S05.
Review theo 10 heuristic Nielsen và accessibility của đề: contrast văn bản thường ≥4.5:1, chữ lớn/control cần thiết ≥3:1, touch target ≥48×48 dp, body ≥14 sp, icon + chữ, Auto Layout/constraints và 360/412 dp.
Tìm ít nhất 5 phát hiện có bằng chứng gắn với màn cụ thể theo rubric. Nếu bằng chứng không đủ, nói rõ chưa đủ; không bịa lỗi cho đủ số lượng. Phân biệt lỗi quan sát trong ảnh với vấn đề cần kiểm tra Figma/prototype/runtime.
Bảng: ID | Màn/state/ảnh | Bằng chứng | Heuristic hoặc mục accessibility | Mức Blocker/Major/Minor | Ảnh hưởng với persona | Sửa cụ thể | Cách kiểm tra lại.
Ưu tiên hành động chính, đúng dữ liệu, add/change/alternative, số môn/tín chỉ/khung giờ, tiên quyết, trạng thái nháp/xác nhận/chưa rõ, Back và đường phục hồi. Chỉ nêu tỷ lệ contrast khi biết và tính đúng cặp màu; ảnh không chứng minh dp/font size, tương tác hay usability test đã đạt.
Ghi điểm làm tốt; chọn tối đa 5 sửa đổi ưu tiên. Đề xuất prompt sửa theo từng vấn đề, giữ frame/fixture đã đúng; không đổi đề tài, tên Semester hoặc thêm chức năng ngoài phạm vi.
```

## 9. Ba vòng tinh chỉnh có mục tiêu

Đây là mẫu để dùng **khi đã thấy vấn đề tương ứng**, không phải ba vòng đã thực hiện. Điền frame, ảnh và bằng chứng; nếu UI không có lỗi đó, chọn vấn đề có thật khác. Lưu ảnh trước/sau cùng fixture và quyết định Chấp nhận/Chỉnh sửa/Từ chối với lý do.

### V1 — Hành động và điều hướng

```text
Refine ONLY [exact affected frame IDs] in Semester. Observed problem: [specific CTA/navigation/overlap issue and image evidence]. Preserve the Student Course Planner topic, fixture, data and all correct frames.
One clear prominent enabled Filled action per state. S04 uses one radio-selected section and contextual Add/Change/Register replacement, no Add per card. S05 has no FAB and the bottom action sits above its NavigationBar. S02/S09 FAB/snackbar never cover the final list item. Bottom navigation only S02/S03/S05/S08; one Back on nested screens except login/bounded sending. Confirmed records cannot be added/deleted/resent through draft actions.
Keep separate revised frames, exact canvas IDs with a version suffix, no collage. Acceptance: [specific visible improvement and interaction to verify].
```

### V2 — Đọc được và thao tác được trên màn nhỏ

```text
Refine ONLY [exact affected frame IDs] in Semester. Observed problem: [clipped text, small target or unreadable status with image evidence]. Preserve all course, semester, section and availability data.
Body/helper/error/chip/button ≥14 sp; icons AND text for all states; target ≥48×48 dp. Long course titles, hours, rooms, action labels and error messages wrap fully; containers grow rather than shrinking type. S10 weekday chips Wrap with checkmarks, time inputs stack at larger text. Keyboard/safe areas/FAB/fixed bars must not obscure content.
Keep 360 dp and revise specified 412 dp variants with the same content. Prepare requested 115%/130% text-scaling candidates if useful, but numerical compliance must be measured in Figma/runtime. Acceptance: [which exact content stays visible and what dimensions to verify].
```

### V3 — Phản hồi, dữ liệu và phục hồi đăng ký

```text
Refine ONLY [exact affected frame IDs] in Semester. Observed problem: [specific wrong result, count or recovery scope with image evidence]. Keep the same one-app student course-planning flow.
Original DBI202 is SE1801 T2,T4 10:00–12:20 BE-301. Replacement is SE1804 T2,T4 15:20–17:40 BE-105. Successful replacement updates result, plan and timetable, preserves four earlier confirmations and total five courses/15 credits. Never shift work schedules instead of selecting an academic class.
Unknown initial request keeps five choices; retry checks/resumes that same request. Unknown replacement preserves four confirmed classes and one unknown SE1804; retry only that request. Do not claim no class was enrolled without evidence or resend confirmed classes. First B01 save yields one personal busy record/three occurrences; adding B02 yields two/four.
Create separate before/after-comparable states with the correct fixture. Acceptance: [exact consistent data, message and recovery destination].
```

### Khi tên/frame đầu ra chưa đúng

```text
The previous request needs organization fixes. Preserve the existing Semester UI and data. Keep each state as a separate selectable canvas frame. Requested exact labels: [IDs]. Use short state IDs as external canvas metadata labels when supported, not text inside the phone UI. Place sibling states next to each other and leave clear gaps so labels do not overlap. Do not regenerate correct screens or create multiple copies just to rename them. If metadata renaming/placement is unsupported, report that limitation rather than claiming it succeeded.
```

## 10. Checklist Figma và bàn giao theo đề

### 10.1. Đúng sáu page

| Page | Nội dung |
| --- | --- |
| 01 User Flow | IA, ba flow có điểm đầu/cuối/nhánh và ánh xạ màn |
| 02 Wireframe | Low-fidelity 10 màn S01–S10 |
| 03 Final UI | 360×800 dp, state đặt cạnh màn tương ứng, bản 412 dp |
| 04 Design System | Variables/styles màu, chữ, spacing, radius, elevation |
| 05 Components | Auto Layout, variants và state đầy đủ; màn dùng instance |
| 06 Prototype | Ít nhất ba flow hoàn chỉnh có starting point; overlay và loading → kết quả |

### 10.2. Chín nhóm component bắt buộc

| Nhóm | State theo đề |
| --- | --- |
| Button | default, pressed, disabled, loading |
| Text field | default, focused, filled, error, disabled |
| Card | default, pressed nếu bấm được |
| Navigation | mỗi tab được chọn |
| App bar | default, có action; thêm Back cho màn con |
| Dialog | xác nhận, biến thể hủy hoặc báo lỗi |
| Loading | skeleton/spinner ở mức màn |
| Empty | icon/minh họa, thông báo, một hành động |
| Error | chuyện gì xảy ra/nguyên nhân dễ hiểu, thử lại |

SectionCard/CourseCard/PlanItem/TimetableBlock/Chip/Radio/StatusTag là component bổ sung phục vụ luồng. Ảnh các state riêng chưa thay thế component set và variants trong Figma. Component phải dùng token, không chỉ định nghĩa rồi gán cứng lại.

### 10.3. Kiểm tra tương tác/dữ liệu

- Tất cả S01–S10 truy cập được trong cùng project; đúng course/mode khi chạm card, đúng nguồn mở khi Back.
- P00 S02.populated có 5 môn/15 tín chỉ/10 buổi học, 4 giờ bận lặp; S05.full vẫn bản nháp. Profile 54/145 khoảng 37,2%, học kỳ 15/20 là 75%.
- S03 query DBI có một kết quả đúng; counts theo fixture, filters khác nhau có trạng thái checkmark rõ.
- Đổi lớp không nhân đôi môn/tín chỉ; xóa DBI xuống 4/12, Undo khôi phục đúng SE1801; lớp full/thiếu tiên quyết không thêm.
- D1 cảnh báo trước khi thêm nháp có xung đột; còn xung đột thì gửi khóa. D2 Để sau không gửi; Gửi mới vào loading.
- Sau partial giữ4 xác nhận; loading1/error1 chỉ xử lý 1 lớp. Sau thay thế tất cả màn dùng SE1804 15:20–17:40 BE-105; không còn SE1801 đang học.
- Lỗi mạng giữ dữ liệu; unknown không hiển thị kết luận giả; Back kết quả không tạo gửi lặp; loading có kết thúc/timeout.
- S10 validate tên/ngày/giờ, counter 18/19 đúng; B01/B02 số mục/số khung đúng; xóa B01 giữ B02 và các môn.

### 10.4. Accessibility, responsive và handoff

Đo cặp màu thực dùng, touch target và font/layer trong Figma hoặc runtime; kiểm tra 360/412 dp, chữ 115%/130%, bàn phím và scroll padding. Icon+chữ cho trạng thái; không cắt giờ/phòng/lý do lỗi. Ghi từng kết quả và bằng chứng vào design-decisions, mục chưa kiểm tra ghi rõ.

Mỗi màn handoff đủ 6 mục: Layout, Components, States, Interactions/validation, Navigation/Back, UI constraints. Kèm 2 bảng token→Flutter và component→widget. Mô tả ≥600 dp: có thể list–detail hai cột cho tìm/chọn môn; lịch tuần rộng hơn, form giới hạn chiều rộng; không cần dựng màn tablet trong lab. Đây là thiết kế/handoff, không yêu cầu viết code Flutter cho lab 2.

### 10.5. Log lượt mới

| Trường | Dữ liệu cần ghi |
| --- | --- |
| Thời điểm/công cụ/model nếu hiển thị | Theo lượt thực tế, không kế thừa model/ngày từ ZIP |
| Prompt/frame/fixture | Nguyên văn prompt đã gửi, kể cả sửa |
| Kết quả | Ảnh và link frame/project thực tế |
| Review | Phát hiện có bằng chứng gắn màn/state |
| Quyết định | Chấp nhận/chỉnh sửa/từ chối, lý do liên quan persona/heuristic/ràng buộc |
| Trước/sau | Giữ ảnh cùng fixture, không ghi đè bằng chứng |
| Kiểm tra | Kết quả đo/bấm tương tác/thử người dùng hoặc chưa kiểm tra |

Nhật ký trong ZIP là lịch sử phiên bản cũ do nhóm cung cấp. Lượt dùng bộ prompt 3.0 phải có log mới; không tự xác nhận lại lịch sử hoặc số đo cũ. Tiêu chí lập 5 môn ≤5 phút, thêm lớp ≤20 giây/≤4 chạm, retry ≤2 chạm vẫn là mục tiêu để kiểm thử, chưa phải kết quả của bản UI mới.

## 11. Nguồn đã đối chiếu và trạng thái bàn giao

- ZIP: README, ux/persona.md, ux/user-flow.md, design/DESIGN.md, design/screen-spec.md, ai/ai-design-log.md, handoff/flutter-handoff.md; đối chiếu các ảnh Final UI S02/S03/S04/S05/S08 được nêu ở trên.
- PDF PRM323 Lab 2 bản tiếng Việt: trang 2 (chủ đề/màn/flow), trang 4 (AI/log/vòng lặp), trang 5–6 (Figma/component/accessibility/prototype), trang 7–8 (repo/handoff), trang 9–11(rubric).
- Đã sửa prompt, chuẩn hóa dữ liệu và kiểm tra lịch/đếm/state theo bảng trên. Chưa chạy Stitch cho phiên bản 3.0, chưa có ảnh mới hoặc kiểm thử prototype mới. Tên app Semester theo yêu cầu mới nhất; mọi frame đều thuộc một Student Course Planner của nhóm.
