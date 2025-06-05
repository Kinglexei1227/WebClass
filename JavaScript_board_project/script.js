// 할 일 추가 함수
function addTodo() {
  // 1. 입력창에서 값 가져오기
  const input = document.getElementById("todoInput");
  const newTodo = input.value.trim(); // 앞뒤 공백 제거

  // 2. 입력값이 비어있지 않으면
  if (newTodo !== "") {
    // 3. 새로운 <li> 항목 만들기
    const li = document.createElement("li");
    li.textContent = newTodo;
    
    // 4. 클릭하면 완료 상태 토글
    li.onclick = function () {
      li.classList.toggle("completed");
    };
    
    // 5. 삭제 버튼 만들기
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    
    // 6. 삭제 버튼 클릭 시 해당 항목 삭제
    deleteBtn.onclick = function () {
      li.remove(); // 해당 li 항목 제거
    };

    // 7. li에 삭제 버튼 붙이기
    li.appendChild(deleteBtn);

    // 8. 리스트에 추가
    document.getElementById("todoList").appendChild(li);

    // 9. 입력창 초기화
    input.value = "";
  }
}
