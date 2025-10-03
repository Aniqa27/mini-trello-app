const addCardBtn = document.getElementById("addCardBtn");
    const cardInp = document.getElementById("cardInp");
    const board = document.getElementById("board");

   
    addCardBtn.addEventListener("click", () => {
      const cardTitle = cardInp.value.trim();
      if (cardTitle === "") return;

      const card = document.createElement("div");
      card.className = "card";

      const h3 = document.createElement("h3");
      h3.textContent = cardTitle;

      
      const taskInput = document.createElement("input");
      taskInput.type = "text";
      taskInput.placeholder = "Add Task";

      const taskBtn = document.createElement("button");
      taskBtn.textContent = "Add Task";

      const taskContainer = document.createElement("div");

      
      taskBtn.addEventListener("click", () => {
        const taskValue = taskInput.value.trim();
        if (taskValue === "") return;

        const taskDiv = document.createElement("div");
        taskDiv.className = "task";

        const taskText = document.createElement("input");
        taskText.type = "text";
        taskText.value = taskValue;
        taskText.disabled = true;

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.onclick = () => {
          const newTask = prompt("Edit task:", taskText.value);
          if (newTask && newTask.trim() !== "") {
            taskText.value = newTask;
          }
        };

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.onclick = () => taskDiv.remove();

        taskDiv.appendChild(taskText);
        taskDiv.appendChild(editBtn);
        taskDiv.appendChild(delBtn);

        taskContainer.appendChild(taskDiv);
        taskInput.value = "";
      });

      card.appendChild(h3);
      card.appendChild(taskInput);
      card.appendChild(taskBtn);
      card.appendChild(taskContainer);

      board.appendChild(card);
      cardInp.value = "";
    });