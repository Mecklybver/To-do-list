const button = document.querySelector("button");
const textarea = document.querySelector("textarea");
const taskList = document.createElement("ol");
taskList.classList.add("task-list"); 
document.body.appendChild(taskList);
button.innerText = "Add";

textarea.addEventListener("keypress", e =>{

    if (e.key === "Enter"){
        addTask()
    }


})

button.addEventListener("click", e => {
    addTask()
});

function addTask(){

    const text = textarea.value.trim();

    if (text) {
        const listItem = document.createElement("li");

        const taskText = document.createElement("span");
        taskText.textContent = text;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        listItem.appendChild(taskText);
        listItem.appendChild(checkbox);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        checkbox.addEventListener("change", e => {
            if (checkbox.checked) {
                taskText.style.textDecoration = "line-through";
            } else {
                taskText.style.textDecoration = "none";
            }
        });

        deleteButton.addEventListener("click", e => {
            listItem.remove(); 
        });

        textarea.value = "";
    }
}