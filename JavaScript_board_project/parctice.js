function addTodo() { // 함수 정의
    const input = document.getElementById("todoInput"); // HTML 문에서 ID: todoInput 의 요소를 가져옴
    const newTodo = input.value.trim(); // Value 에 사용자의 입력 값을 받아서 trim 처리

    if (newTodo !== "") { // 빈공간이 아닐시에만 작동
        const li = document.createElement("li"); // li의 변수에 

        const checkbox = document.createElement("input"); // 체크 박스 요소 추가
        checkbox.type = "checkbox"; // 타입 체크박스

        const textSpan = document.createElement("span") // span 요소 추가
        textSpan.textContent = " " + newTodo + " "; // newTodo 에 요소를 추가

        const editBtn = document.createElement("button"); // 버튼 요소 추가
        editBtn.textcontent = "수정"; // 박스의 문구 : "수정"
        editBtn.oneclick = function () { // 클릭시 일어날 알고리즘을 담은 함수 선언

        }
    }
}