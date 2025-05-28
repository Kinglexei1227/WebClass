function addTodo() {
      const input = document.getElementById("todoInput");
      const newTodo = input.value.trim();

      if (newTodo !== "") {
        const li = document.createElement("li");

        // 체크박스
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // 텍스트
        const text = document.createTextNode(" " + newTodo + " ");

        // 삭제 버튼
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.onclick = function () {
          li.remove();
        };

        // 조합
        li.appendChild(checkbox);
        li.appendChild(text);
        li.appendChild(deleteBtn);

        document.getElementById("todoList").appendChild(li);
        input.value = "";
      }
    }