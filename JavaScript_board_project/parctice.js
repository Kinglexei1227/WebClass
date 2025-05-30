function addTodo() {
    const input = document.getElementById("todoInput");
    const newTodo = input.value.trim();

    if (newTodo !== "") {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const textSpan = document.createElement("span")
        textSpan.textContent = " " + newTodo + " ";

        const editBtn = document.createElement("button");
        editBtn.textcontent = "수정";
        editBtn.oneclick = function () {
            
        }
    }
}