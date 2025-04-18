<?php
// 학생들의 점수를 분석해, 각 점수를 A~F 등급으로 분류하고,
// 등급변 평균 점수와 인원수를 출력하는 프로그램

// 점수 배열 선언
$scores = [92, 85, 34, 76, 58, 90, 61, 70, 45, 99, 82, 67, 50, 77, 89];

// 등급별 배열 초기화
$grades = [
    "A" => [],
    "B" => [],
    "C" => [],
    "D" => [],
    "F" => []
];

// 점수 등급 분류 (반복문)
foreach ($scores as $score) {
    if ($score >= 90) {
        $grades["A"][] = $score;
    } elseif ($score >= 80) {
        $grades["B"][] = $score;
    } elseif ($score >= 70) {
        $grades["C"][] = $score;
    } elseif ($score >= 60) {
        $grades["D"][] = $score;
    } else {
        $grades["F"][] = $score;
    }
}

// 결과 출력
echo "등급 분포 및 평균 점수:\n";

foreach (["A", "B", "C", "D", "F"] as $grade) {
    // 현재 등급에 해당하는 점수 가져오기
    $student_scores = $grades[$grade];
    $count = count($student_scores);

    // 평균 점수 계산 및 출력
    if ($count > 0) {
        $sum = array_sum($student_scores);
        $avg = $sum / $count;
        echo "{$grade} 등급: 평균 점수 = " . number_format($avg, 2) . "\n";
    } else {
        echo "{$grade} 등급: 평균 점수 = 없음\n";
    }
    // * 로 시각화 출력
    echo str_repeat("*", $count) . " ({$count}명)\n";
}
?>