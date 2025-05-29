function addTodo() {
  const input = document.getElementById("todoInput");
  const newTodo = input.value.trim();

  if (newTodo !== "") {
    const li = document.createElement("li");

    // 체크박스
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // 텍스트(span으로 감싸기)
    const textSpan = document.createElement("span");
    textSpan.textContent = " " + newTodo + " ";

    // ✏ 수정 버튼
    const editBtn = document.createElement("button");
    editBtn.textContent = "✏";
    editBtn.onclick = function () {
      const updated = prompt("할 일을 수정하세요:", textSpan.textContent.trim());
      if (updated !== null && updated.trim() !== "") {
        textSpan.textContent = " " + updated.trim() + " ";
      }
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
