function getGreeting(name) {
    return `안녕하세요, ${name}님!`;
}

let message = getGreeting("석열");
console.log(message); // 출력: 안녕하세요, 석열님!

function sayHello() {
    return "안녕!";
}

let msg = sayHello(); // msg에 "안녕!" 저장
console.log(msg); // 안녕 출력