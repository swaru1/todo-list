var form = document.querySelector("form");
var subBtn = document.querySelector("button");
//var del = document.querySelector(".del");
var list = document.querySelector(".list");
var dateinp = document.querySelector('#date-inp')
var timeinp = document.querySelector('#time-inp')
var taskinp = document.querySelector('#task-inp')

var taskList = [
  {
    date: "20-07-2025",
    time: "6:00",
    taskTodo: "Go for a morning jog.",
  },
  {
    date: "20-07-2025",
    time: "8:00",
    taskTodo: "Have your breakfast.",
  },
  {
    date: "20-07-2025",
    time: "6:00",
    taskTodo: "Go for a morning jog.",
  },
  {
    date: "20-07-2025",
    time: "8:00",
    taskTodo: "Have your breakfast.",
  },
];

function renderTaskList() {
  let clutter = "";

  taskList.forEach(function (task, idx) {
    clutter += `
            <div class="task">
              <div>
                <p id="date">
                  Date : <span>${task.date}</span> | Time: <span>${task.time}</span>
                </p>
                <p>${task.taskTodo}</p>
              </div>
              <button id="${idx}" class="del" >Delete</button>
            </div>`;
    });

    list.innerHTML = clutter;
}
renderTaskList();

subBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let newTask = {
    date: dateinp.value,
    time: timeinp.value,
    taskTodo: taskinp.value.trim(),
  }

  if(!newTask.date) {
    newTask.date = 'Not available'
  }

  if (!newTask.time || !newTask.taskTodo) {
    alert("Time and Task cant be left empty!");
    return;
  }
  
  taskList.push(newTask);
  renderTaskList()
  form.reset();
});

list.addEventListener("click", function (e) {
   if (e.target.tagName === "BUTTON") {
    let index = e.target.id;
    taskList.splice(index, 1); // remove that task
    renderTaskList(); 
  }
});



