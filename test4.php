<?php
class Dog { // OOP 객체지향
    public $name;

    public function bark() {
        echo "{$this->name}가 멍멍 짖습니다!\n";
    }
}

// 객체 생성
$myDog = new Dog();
$myDog->name = "초코";
$myDog->bark();
?>
