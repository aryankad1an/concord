
function addPersonalTask() {
    // Prompt the user for task title and description
    var taskTitle = prompt("Enter task title:");
    var taskDescription = prompt("Enter task description:");
    var dueDate = prompt("Enter due date (e.g., 20/12/2023):");

    // Create a new task card
    var taskCard = document.createElement("div");
    taskCard.className = "card task-card";

    // Create a card header with the task title and due date
    var cardHeader = document.createElement("div");
    cardHeader.className = "card-header task-header";
    var titleWithDate = document.createElement("h5");
    titleWithDate.className = "card-title";
    titleWithDate.innerHTML = taskTitle + '<br><small>Due ' + dueDate + '</small>';
    cardHeader.appendChild(titleWithDate);

    // Create a card body for the task description and buttons
    var cardBody = document.createElement("div");
    cardBody.className = "card-body";

    var description = document.createElement("p");
    description.className = "card-text";
    description.textContent = taskDescription || "Description of the new task.";

    var importantButton = document.createElement("button");
    importantButton.type = "button";
    importantButton.className = "btn btn-warning button-spacing";
    importantButton.textContent = "Mark as Important";
    importantButton.onclick = function() {
        taskCard.classList.toggle("important-task");
        importantButton.textContent = taskCard.classList.contains("important-task") ? "Mark as Unimportant" : "Mark as Important";
    };

    var completedButton = document.createElement("button");
    completedButton.type = "button";
    completedButton.className = "btn btn-success button-spacing";
    completedButton.textContent = "Mark as Completed";
    completedButton.onclick = function() {
        markCompleted(completedButton);
    };

    var removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "btn btn-danger button-spacing remove-button";
    removeButton.textContent = "Remove Task";
    removeButton.onclick = function() {
        taskCard.parentNode.removeChild(taskCard);
    };

    // Append elements to the task card
    taskCard.appendChild(cardHeader);
    cardBody.appendChild(description);
    cardBody.appendChild(importantButton);
    cardBody.appendChild(completedButton);
    cardBody.appendChild(removeButton);
    taskCard.appendChild(cardBody);

    // Append the new task card to the personal tasks section
    document.getElementById("personal-tasks-section").appendChild(taskCard);
}

    function markCompleted(button) {
        var taskCard = button.closest(".task-card");
        taskCard.classList.toggle("completed-task");
        var titleElement = taskCard.querySelector(".card-title");
        if (taskCard.classList.contains("completed-task")) {
            titleElement.classList.add("completed-text");
            button.textContent = "Mark as Not Completed";
            showRemoveButton(taskCard);
        } else {
            titleElement.classList.remove("completed-text");
            button.textContent = "Mark as Completed";
            hideRemoveButton(taskCard);
        }
    }

    function showRemoveButton(taskCard) {
        var removeButton = taskCard.querySelector(".remove-button");
        if (removeButton) {
            removeButton.style.display = "inline-block";
        }
    }

    function hideRemoveButton(taskCard) {
        var removeButton = taskCard.querySelector(".remove-button");
        if (removeButton) {
            removeButton.style.display = "none";
        }
    }