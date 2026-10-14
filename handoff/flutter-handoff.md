# handoff/flutter-handoff.md — Semester · Student Course Planner

**Phiên bản:** 1.0 · 15/10/2026  
**Nền tảng:** Flutter (Android · Màn hình 360–412 dp)  
**Framework:** Material 3 (Material You) · Light Theme  
**Font:** `google_fonts: Be Vietnam Pro` (pub: `google_fonts ^6.2.1`)  
**Backend (tương lai):** RESTful API hoặc Firebase Firestore (ngoài phạm vi Lab 2)  
**Ứng dụng:** Semester — Student Course Planner

---

## 1. Cấu Trúc Dự Án Flutter Đề Xuất

```
lib/
├── main.dart               # MaterialApp, ThemeData, GoRouter
├── theme/
│   ├── color_scheme.dart   # M3 ColorScheme token
│   └── text_theme.dart     # TextTheme với Be Vietnam Pro
├── router/
│   └── app_router.dart     # GoRouter routes (GoRouter ^14)
├── state/
│   ├── busy_time_notifier.dart   # BusyTime state (Riverpod/Provider)
│   ├── course_catalog_notifier.dart
│   ├── plan_notifier.dart        # Draft plan state
│   └── registration_notifier.dart # Submit + recovery state
├── models/
│   ├── busy_time.dart
│   ├── course.dart
│   ├── section.dart
│   └── registration_result.dart
├── screens/
│   ├── s01_login/
│   ├── s02_weekly_schedule/
│   ├── s03_find_course/
│   ├── s04_course_detail/
│   ├── s05_plan/
│   ├── s06_review/
│   ├── s07_result/
│   ├── s08_profile/
│   ├── s09_busy_times/
│   └── s10_edit_busy_time/
├── widgets/
│   ├── section_card.dart
│   ├── schedule_block.dart
│   ├── status_tag.dart
│   ├── course_card.dart
│   └── semester_snackbar.dart
└── dialogs/
    ├── conflict_warning_dialog.dart
    ├── confirm_submit_dialog.dart
    ├── confirm_delete_course_dialog.dart
    ├── confirm_delete_busy_dialog.dart
    ├── confirm_logout_dialog.dart
    └── unsaved_changes_dialog.dart
```

---

## 2. Design Tokens → Flutter Code

### 2.1 ColorScheme

```dart
// lib/theme/color_scheme.dart
import 'package:flutter/material.dart';

const seedColor = Color(0xFF3046C5);

final lightColorScheme = ColorScheme(
  brightness: Brightness.light,
  primary:           Color(0xFF3046C5),
  onPrimary:         Color(0xFFFFFFFF),
  primaryContainer:  Color(0xFFDDE1FF),
  onPrimaryContainer:Color(0xFF0B1A66),
  secondary:         Color(0xFF585E72),
  onSecondary:       Color(0xFFFFFFFF),
  secondaryContainer:Color(0xFFDCE2F9),
  onSecondaryContainer: Color(0xFF141B2C),
  error:             Color(0xFFBA1A1A),
  onError:           Color(0xFFFFFFFF),
  errorContainer:    Color(0xFFFFDAD6),
  onErrorContainer:  Color(0xFF410002),
  surface:           Color(0xFFFFFFFF),
  onSurface:         Color(0xFF1A1B21),
  surfaceVariant:    Color(0xFFEBEDF4),
  onSurfaceVariant:  Color(0xFF44474F),
  outline:           Color(0xFF74777F),
  outlineVariant:    Color(0xFFC4C6D0),
  shadow:            Color(0xFF000000),
  scrim:             Color(0xFF000000),
  inverseSurface:    Color(0xFF2F3036),
  onInverseSurface:  Color(0xFFF2F0F7),
  inversePrimary:    Color(0xFFB9C3FF),
);
```

### 2.2 TextTheme (Be Vietnam Pro)

```dart
// lib/theme/text_theme.dart
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

TextTheme buildTextTheme() {
  final base = GoogleFonts.beVietnamProTextTheme();
  return base.copyWith(
    // App Bar title
    titleLarge: base.titleLarge?.copyWith(
      fontSize: 20, fontWeight: FontWeight.w600, height: 1.4),
    // Card title
    titleMedium: base.titleMedium?.copyWith(
      fontSize: 16, fontWeight: FontWeight.w600, height: 1.5),
    // Body text
    bodyMedium: base.bodyMedium?.copyWith(
      fontSize: 14, fontWeight: FontWeight.w400, height: 1.43),
    // Helper/Error text
    bodySmall: base.bodySmall?.copyWith(
      fontSize: 12, fontWeight: FontWeight.w400, height: 1.33),
    // Button/Chip
    labelLarge: base.labelLarge?.copyWith(
      fontSize: 14, fontWeight: FontWeight.w600, letterSpacing: 0.1),
    // Navigation label
    labelSmall: base.labelSmall?.copyWith(
      fontSize: 12, fontWeight: FontWeight.w500, letterSpacing: 0.5),
  );
}
```

### 2.3 ThemeData đầy đủ

```dart
// lib/main.dart (fragment)
ThemeData buildTheme() {
  return ThemeData(
    useMaterial3: true,
    colorScheme: lightColorScheme,
    textTheme: buildTextTheme(),
    fontFamily: GoogleFonts.beVietnamPro().fontFamily,
    appBarTheme: const AppBarTheme(
      elevation: 0,
      scrolledUnderElevation: 2,
      centerTitle: false,
    ),
    navigationBarTheme: NavigationBarThemeData(
      height: 80,
      indicatorColor: const Color(0xFFDCE2F9),
      labelTextStyle: WidgetStateProperty.resolveWith((states) {
        if (states.contains(WidgetState.selected)) {
          return buildTextTheme().labelSmall?.copyWith(
            fontWeight: FontWeight.w700,
            color: const Color(0xFF141B2C),
          );
        }
        return buildTextTheme().labelSmall?.copyWith(
          color: const Color(0xFF44474F),
        );
      }),
    ),
    cardTheme: CardTheme(
      elevation: 1,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
      color: Colors.white,
    ),
    filledButtonTheme: FilledButtonThemeData(
      style: FilledButton.styleFrom(
        minimumSize: const Size(double.infinity, 48),
        shape: const StadiumBorder(),
        textStyle: buildTextTheme().labelLarge,
      ),
    ),
    inputDecorationTheme: InputDecorationTheme(
      filled: true,
      fillColor: Colors.white,
      border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
      contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
    ),
    dialogTheme: DialogTheme(
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(28)),
      elevation: 12,
    ),
  );
}
```

---

## 3. Navigation — GoRouter Routes

```dart
// lib/router/app_router.dart
import 'package:go_router/go_router.dart';
import '../screens/s01_login/login_screen.dart';
// ... import all screens

final appRouter = GoRouter(
  initialLocation: '/login',
  routes: [
    GoRoute(path: '/login',         builder: (c, s) => const LoginScreen()),
    ShellRoute(
      builder: (c, s, child) => MainShell(child: child), // Bottom Nav
      routes: [
        GoRoute(path: '/schedule',  builder: (c, s) => const WeeklyScheduleScreen()),
        GoRoute(path: '/search',    builder: (c, s) => const FindCourseScreen()),
        GoRoute(path: '/plan',      builder: (c, s) => const PlanScreen()),
        GoRoute(path: '/profile',   builder: (c, s) => const ProfileScreen()),
      ],
    ),
    GoRoute(path: '/course/:id',    builder: (c, s) => CourseDetailScreen(courseId: s.pathParameters['id']!)),
    GoRoute(path: '/course/:id/alt',builder: (c, s) => CourseDetailAltScreen(courseId: s.pathParameters['id']!)),
    GoRoute(path: '/review',        builder: (c, s) => const ReviewScreen()),
    GoRoute(path: '/result',        builder: (c, s) => const ResultScreen()),
    GoRoute(path: '/busy-times',    builder: (c, s) => const BusyTimesScreen()),
    GoRoute(path: '/busy-times/edit',builder: (c, s) => EditBusyTimeScreen(busyTimeId: s.uri.queryParameters['id'])),
  ],
);
```

---

## 4. Data Models

### BusyTime

```dart
// lib/models/busy_time.dart
class BusyTime {
  final String id;       // 'B01', 'B02'
  final String label;    // 'Highlands – ca tối'
  final List<int> days;  // [2, 4, 5] (2=T2, 7=CN)
  final TimeOfDay start; // TimeOfDay(hour: 18, minute: 0)
  final TimeOfDay end;   // TimeOfDay(hour: 22, minute: 0)
  
  const BusyTime({
    required this.id, required this.label,
    required this.days, required this.start, required this.end,
  });
}

// Fixtures
const busyB01 = BusyTime(
  id: 'B01', label: 'Highlands – ca tối',
  days: [2, 4, 5],
  start: TimeOfDay(hour: 18, minute: 0),
  end: TimeOfDay(hour: 22, minute: 0),
);
const busyB02 = BusyTime(
  id: 'B02', label: 'Highlands – ca sáng',
  days: [7],
  start: TimeOfDay(hour: 7, minute: 0),
  end: TimeOfDay(hour: 12, minute: 0),
);
```

### Section

```dart
// lib/models/section.dart
enum SectionStatus { available, conflictBusy, full }

class Section {
  final String id;        // 'SE1801'
  final String courseId;  // 'DBI202'
  final List<int> days;   // [2, 4]
  final TimeOfDay start;
  final TimeOfDay end;
  final String room;      // 'BE-301'
  final String instructor;
  final int capacity;     // 35
  final int enrolled;     // 23 → remaining = capacity - enrolled
  SectionStatus status;   // computed from BusyTime + enrolled vs capacity
  
  int get remaining => capacity - enrolled;
  bool get isFull => remaining <= 0;
}
```

### RegistrationResult

```dart
// lib/models/registration_result.dart
enum CourseRegistrationStatus { success, failed }

class CourseRegistrationResult {
  final String courseId;
  final String sectionId;
  final CourseRegistrationStatus status;
  final String? failureReason; // 'Section full', 'Network error'
}

class RegistrationResult {
  final List<CourseRegistrationResult> results;
  int get successCount => results.where((r) => r.status == CourseRegistrationStatus.success).length;
  List<CourseRegistrationResult> get failed => results.where((r) => r.status == CourseRegistrationResult.failed).toList();
}
```

---

## 5. State Management (Riverpod Pattern)

```dart
// lib/state/plan_notifier.dart
import 'package:riverpod_annotation/riverpod_annotation.dart';
import '../models/section.dart';

part 'plan_notifier.g.dart';

@riverpod
class PlanNotifier extends _$PlanNotifier {
  @override
  Map<String, Section> build() => {}; // courseId → Section

  void addSection(String courseId, Section section) {
    state = {...state, courseId: section};
  }

  void removeSection(String courseId) {
    final next = Map<String, Section>.from(state);
    next.remove(courseId);
    state = next;
  }

  bool hasConflict(List<BusyTime> busyTimes) {
    return state.values.any((s) => s.status == SectionStatus.conflictBusy);
  }

  int get totalCredits => state.length * 3; // simplified
}
```

---

## 6. Widget — SectionCard

```dart
// lib/widgets/section_card.dart
import 'package:flutter/material.dart';
import '../models/section.dart';

class SectionCard extends StatelessWidget {
  final Section section;
  final bool isSelected;
  final VoidCallback? onTap;

  const SectionCard({
    super.key, required this.section,
    required this.isSelected, this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final cs = Theme.of(context).colorScheme;
    final disabled = section.isFull;

    return Opacity(
      opacity: disabled ? 0.45 : 1.0,
      child: GestureDetector(
        onTap: disabled ? null : onTap,
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 200),
          decoration: BoxDecoration(
            color: isSelected ? cs.primaryContainer : cs.surface,
            border: Border.all(
              color: isSelected ? cs.primary
                  : section.status == SectionStatus.conflictBusy ? const Color(0xFF8A4F00)
                  : cs.outlineVariant,
              width: isSelected ? 2 : 1,
            ),
            borderRadius: BorderRadius.circular(12),
          ),
          padding: const EdgeInsets.all(12),
          child: Row(
            children: [
              Radio<String>(
                value: section.id,
                groupValue: isSelected ? section.id : null,
                onChanged: disabled ? null : (_) => onTap?.call(),
                activeColor: cs.primary,
              ),
              const SizedBox(width: 8),
              Expanded(child: _buildInfo(context)),
              _buildStatusTag(context),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildStatusTag(BuildContext context) {
    switch (section.status) {
      case SectionStatus.available:
        return _Tag(icon: Icons.check_circle_rounded, label: 'Hợp lịch',
            bg: const Color(0xFFC9F0D2), fg: const Color(0xFF1E6B37));
      case SectionStatus.conflictBusy:
        return _Tag(icon: Icons.warning_rounded, label: 'Trùng giờ bận',
            bg: const Color(0xFFFFDDB8), fg: const Color(0xFF8A4F00));
      case SectionStatus.full:
        return _Tag(icon: Icons.cancel_rounded, label: 'Hết chỗ',
            bg: const Color(0xFFFFDAD6), fg: const Color(0xFFBA1A1A));
    }
  }

  Widget _buildInfo(BuildContext context) {
    // Day names, time, room, instructor, seats remaining
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(section.id, style: Theme.of(context).textTheme.titleMedium),
        const SizedBox(height: 2),
        Text('${_dayNames(section.days)} · ${_time(section.start)}–${_time(section.end)}',
            style: Theme.of(context).textTheme.bodyMedium),
        Text('${section.room} · ${section.instructor}',
            style: Theme.of(context).textTheme.bodySmall?.copyWith(
              color: Theme.of(context).colorScheme.onSurfaceVariant)),
        if (!section.isFull)
          Text('Còn ${section.remaining}/${section.capacity} chỗ',
              style: Theme.of(context).textTheme.bodySmall),
      ],
    );
  }
}

String _dayNames(List<int> days) =>
    days.map((d) => ['', 'CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'][d]).join(', ');

String _time(TimeOfDay t) =>
    '${t.hour.toString().padLeft(2,'0')}:${t.minute.toString().padLeft(2,'0')}';

class _Tag extends StatelessWidget {
  final IconData icon;
  final String label;
  final Color bg, fg;
  const _Tag({required this.icon, required this.label, required this.bg, required this.fg});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
      decoration: BoxDecoration(color: bg, borderRadius: BorderRadius.circular(4)),
      child: Row(mainAxisSize: MainAxisSize.min, children: [
        Icon(icon, size: 14, color: fg),
        const SizedBox(width: 4),
        Text(label, style: TextStyle(fontSize: 12, color: fg, fontWeight: FontWeight.w600)),
      ]),
    );
  }
}
```

---

## 7. Screens — Annotations

### S04 CourseDetailScreen — Key Logic

```dart
// lib/screens/s04_course_detail/course_detail_screen.dart (fragment)
class CourseDetailScreen extends ConsumerWidget {
  final String courseId;
  final bool isRecoveryMode; // true khi đến từ S07.partial (F3B)

  void _onAddSection(BuildContext ctx, WidgetRef ref, Section sec) {
    // Kiểm tra xung đột trước
    if (sec.status == SectionStatus.conflictBusy) {
      showDialog(ctx, builder: (_) => ConflictWarningDialog(
        section: sec,
        onConfirm: () => _doAdd(ctx, ref, sec),
        onCancel: () => Navigator.pop(ctx),
      ));
    } else {
      _doAdd(ctx, ref, sec);
    }
  }

  void _doAdd(BuildContext ctx, WidgetRef ref, Section sec) {
    ref.read(planNotifierProvider.notifier).addSection(courseId, sec);
    ScaffoldMessenger.of(ctx).showSnackBar(SnackBar(
      content: Text('Đã thêm $courseId vào kế hoạch'),
      action: SnackBarAction(
        label: 'Hoàn tác',
        onPressed: () => ref.read(planNotifierProvider.notifier).removeSection(courseId),
      ),
    ));
  }
}
```

### S06 ReviewScreen — Submit Logic (F3A / F3B)

```dart
// lib/screens/s06_review/review_screen.dart (fragment)
void _onSubmit(BuildContext ctx, WidgetRef ref) async {
  final result = await showDialog<bool>(
    context: ctx,
    builder: (_) => ConfirmSubmitDialog(count: plan.length),
  );
  if (result != true) return;

  // Chuyển sang loading state
  ref.read(registrationNotifierProvider.notifier).setSubmitting();

  try {
    final regResult = await ref.read(registrationNotifierProvider.notifier).submit(plan);
    if (!ctx.mounted) return;
    
    if (regResult.failed.isEmpty) {
      // F3A: Tất cả thành công
      context.go('/result', extra: regResult);
    } else {
      // F3B: Có lớp thất bại → S07.partial → S04.alt
      context.go('/result', extra: regResult);
    }
  } on NetworkException {
    // Mất mạng → show S06.error
    ref.read(registrationNotifierProvider.notifier).setNetworkError();
  }
}
```

---

## 8. Accessibility Checklist (Flutter-specific)

| Hạng mục | Cách thực hiện trong Flutter |
|---|---|
| **Semantic labels** | Dùng `Semantics(label: ...)` cho icon không có text |
| **Touch target ≥ 48dp** | Dùng `InkWell` với `Padding(padding: EdgeInsets.all(12))`, hoặc `SizedBox(height: 48)` |
| **Text scale** | Không lock `textScaleFactor`, cho phép OS scale đến 1.3× |
| **Contrast ratio** | Tuân thủ ColorScheme đã định nghĩa ở mục 2.1 |
| **Status không dùng màu đơn** | Mọi `_Tag` widget phải có cả icon lẫn text |
| **Focus order** | Đảm bảo các radio, button trong SectionCard theo đúng thứ tự focus |
| **Screen reader** | Mỗi SectionCard phải có `Semantics(label: "Lớp ${section.id}, ...")` tổng hợp |

---

## 9. pubspec.yaml Dependencies

```yaml
name: semester
description: Student Course Planner — Semester App
version: 1.0.0+1

environment:
  sdk: '>=3.3.0 <4.0.0'
  flutter: '>=3.22.0'

dependencies:
  flutter:
    sdk: flutter
  google_fonts: ^6.2.1
  go_router: ^14.2.0
  riverpod: ^2.5.1
  flutter_riverpod: ^2.5.1
  riverpod_annotation: ^2.3.5
  
dev_dependencies:
  flutter_test:
    sdk: flutter
  riverpod_generator: ^2.4.0
  build_runner: ^2.4.11
  flutter_lints: ^4.0.0
```

---

## 10. Checklist Handoff

- [ ] Import `google_fonts: ^6.2.1` và gọi `GoogleFonts.beVietnamProTextTheme()`
- [ ] Set `ThemeData(useMaterial3: true, colorScheme: lightColorScheme)` trong `main.dart`
- [ ] Tất cả `SectionCard` phải có `status` computed từ `BusyTime` list hiện tại
- [ ] Navigation dùng `GoRouter` với `ShellRoute` cho 4 màn hình Tab
- [ ] Dialog `ConflictWarningDialog` phải block action "Thêm lớp" khi `status == conflictBusy`
- [ ] `Snackbar` Hoàn tác phải gọi được `PlanNotifier.removeSection`
- [ ] S04.alt (Recovery Mode): lọc còn ≤ 3 lớp hợp lịch còn chỗ, preselect lớp đầu tiên
- [ ] S06.loading1 phân biệt với S06.loading qua `RegistrationState.isRetrying`
- [ ] Tất cả text widget phải dùng `TextTheme` từ `BuildContext`, không hardcode style
- [ ] Touch target tất cả button/radio/icon ≥ 48×48 dp
