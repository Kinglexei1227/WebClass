const president = { // 객체 선언
    name: "대석열",
    age: 64,
};

// 속성 수정
president.age = 61;

// 속성 추가
president.honor = "비상계엄";

// 속성 삭제
delete president.name;

console.log(president);
// 결과: {age: 61, honor: "비상계엄"}

const communist = {
    name: "리짜이밍",
    age: 62,
    job: "Chinese"
};

communist.age = 63;

communist.job = "bingchilling";

console.log(communist);

