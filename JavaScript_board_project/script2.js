function addTodo() {
  const input = document.getElementById("todoInput");
  const newTodo = input.value.trim();

  if (newTodo !== "") {
    const li = document.createElement("li");

    // 체크박스
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // 텍스트 span
    const textSpan = document.createElement("span");
    textSpan.textContent = " " + newTodo + " ";

    // ✏ 수정 버튼
    const editBtn = document.createElement("button");
    editBtn.textContent = "✏";
    editBtn.onclick = function () {
      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = textSpan.textContent.trim();

      // 저장 함수: 엔터 또는 포커스 아웃 시
      function saveEdit() {
        const updated = editInput.value.trim();
        if (updated !== "") {
          textSpan.textContent = " " + updated + " ";
        }
        li.replaceChild(textSpan, editInput);
      }

      // 엔터로 저장
      editInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          saveEdit();
        }
      });

      // 포커스 벗어나도 저장
      editInput.addEventListener("blur", saveEdit);

      li.replaceChild(editInput, textSpan);
      editInput.focus();
    };

    // ❌ 삭제 버튼
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.onclick = function () {
      li.remove();
    };

    // 조립
    li.appendChild(checkbox);
    li.appendChild(textSpan);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    document.getElementById("todoList").appendChild(li);
    input.value = "";
  }
}
