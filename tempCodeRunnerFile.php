<?php

$products = [ //리스트
    "table" =>  [1000 , 2], //"table -> 가격 1000원, 재고 2개
    "chair" => [500, 4], //"chair -> 가격 500원, 재고 4개
    "bed" => [10000, 1], // bed -> 가격 10000원, 재고 1개
    "light" => [5000, 1] // light -> 
];
// 반복문
foreach ($products as $name => $info) {
    $price = $info[0];
    $stock = $info[1];
    echo "{$name}은 {$price}원에 {$stock}개 재고가 있습니다.\n";
}
