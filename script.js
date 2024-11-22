const input = document.getElementById("input");
const addTodo = document.getElementById("addbtn");
const todoList = document.getElementById("todoList");

addTodo.addEventListener("click", () => {
  const task = input.value;

  if (task == "") {
    alert("Please enter a task");
    return;
  }
  //Creating element
  const todo = document.createElement("li");
  const btnDiv = document.createElement("div");
  const editBtn = document.createElement("button");
  const delBtn = document.createElement("button");

  //Adding text in element
  todo.textContent = task;
  editBtn.textContent = "Edit";
  delBtn.textContent = "Delete";

  //Adding class
  btnDiv.className = "btnDiv";
  editBtn.className = "button";
  delBtn.className = "button";

  //Adding functionlity on buttons
  //Edit button functionlity
  editBtn.addEventListener("click", () => {
    //Creating element
    const container = document.createElement("div");
    const editInp = document.createElement("input");
    const editDiv = document.createElement("div");
    const submitBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");
    const inDelBtn = document.createElement("button");

    //Adding text in element
    container.className = "todo";
    editDiv.className = "editDiv";
    submitBtn.className = "button";
    cancelBtn.className = "button";
    inDelBtn.className = "button";

    //Add text in element
    editInp.type = "text";
    editInp.value = task;
    submitBtn.textContent = "Submit";
    cancelBtn.textContent = "Cancel";
    inDelBtn.textContent = "Delete";

    //Adding functionlity on buttons
    //Submit button functionlity
    submitBtn.addEventListener("click", () => {
      const updatedTask = editInp.value;

      if (updatedTask == "") {
        alert("Please enter a task");
        return;
      }

      //Transfer the updated task to todo
      todo.textContent = updatedTask;

      //Append btns in div
      btnDiv.appendChild(editBtn);
      btnDiv.appendChild(delBtn);

      //Append btnDiv in todo
      todo.appendChild(btnDiv);

      //Replace the container with new todo
      container.replaceWith(todo);
    });

    //Cancel button functionlity
    cancelBtn.addEventListener("click", () => {
      //Append btns in div
      btnDiv.appendChild(editBtn);
      btnDiv.appendChild(delBtn);

      //Append btnDiv in todo
      todo.appendChild(btnDiv);

      //Replace input container with old todo
      container.replaceWith(todo)
    });

    //Delete button functionlity
    inDelBtn.addEventListener("click", () => {
      container.remove();
    });

    //Append buttons in Edit div
    editDiv.appendChild(submitBtn);
    editDiv.appendChild(cancelBtn);
    editDiv.appendChild(inDelBtn);

    //Append Edit div in Edit input
    container.appendChild(editInp);
    container.appendChild(editDiv);

    //Replace todo with Edit input
    todo.replaceWith(container);
  });

  //Delete button functionlity
  delBtn.addEventListener("click", () => {
    todo.remove();
  });

  //Append btns in div
  btnDiv.appendChild(editBtn);
  btnDiv.appendChild(delBtn);

  //Append btnDiv in todo
  todo.appendChild(btnDiv);

  //Append todo in Todolist
  todoList.appendChild(todo);

  input.value = "";
});
