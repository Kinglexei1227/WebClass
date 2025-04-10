<?php
  $score = 90;

  if ($score >= 90) {
    echo "A등급입니다";
  } elseif ($score >= 80) {
    echo "B등급입니다";
  } elseif ($score >= 70) {
    echo "C등급입니다";
  } elseif ($score >= 60) {
    echo "D등급입니다";
  } else {
    echo "낙제입니다다";
  }
?>