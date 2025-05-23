let person = {
    name: "지수",
    greet: function() {
        console.log(`안녕하세요, 저는 ${this.name}입니다.`);
    }
};

person.greet(); // 출력: 안녕하세요, 저는 지수입니다.

const student = {
    name: "민수",
    birthYear: 2000,
    getAge: function() {
        let now = new Date().getFullYear();
        return now - this.birthYear
    }
};

console.log(`${student.name}의 나이: ${student.getAge()}살`);

// 결과 : 민수의 나이: 25살

