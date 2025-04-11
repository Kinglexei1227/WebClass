<?php


$products = [
    "table" =>  [1000 , 2],
    "chair" => [500, 4],
    "bed" => [10000, 1],
    "light" => [5000, 1]
];

foreach ($products as $name => $info) {
    $price = $info[0];
    $stock = $info[1];
    echo "{$name}은{$price}원에{$stock}재고가 있습니다.\n";
}