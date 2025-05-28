// 예시 1번
const add = (x, y) => {
    return x = y;
}

// 1번 예시 실행 결과
console.log(add(3, 5)); // 출력: 8

// 예시 2번
const greet = (name) => {
    return `안녕하세요, ${name}님!`;
}

// 2번 예시 실행 결과
console.log(greet("민수")); // 출력 : 안녕하세요, 민수님!

// 예시 3번
const isEven = (number) => {
    return number % 2 === 0;
}


// 3번 예시 실행 결과
console.log(isEven(4)); // true
console.log(isEven(7)); // false

// 기본 매개변수 설정
function greet(name = "손님") {
    console.log(`안녕하세요, ${name}님!`);
}

greet();      // 출력 결과 : 안녕하세요, 손님님!
greet("민수"); // 출력 결과 : 안녕하세요, 민수님!

// => 함수 설정시
const greet = (name = "손님") => {
    return `안녕하세요, ${name}님!`;
}

console.log(greet());
console.log(greet("민수"));