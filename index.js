const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("task-list");

function addTask() {
    if (inputBox.value === '') {
        alert('you must write somerthing')
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskList.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7'
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData()
};


taskList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked')
        saveData()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveData()
    }
})


function saveData() {
    localStorage.setItem("taskData", taskList.innerHTML);
};

function displayData() {
    taskList.innerHTML = localStorage.getItem('taskData');
}
displayData();