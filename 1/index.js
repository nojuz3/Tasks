const Taskinfo = localStorage.getItem("Task");

const task = document.getElementById("task");
const prio = document.getElementById("prio");
const save = document.querySelector(".save");


//tablebody
const tableBody = document.querySelector(".tablebody");
const tbody = document.createElement("tbody");
tableBody.append(tbody)




const Task = Taskinfo === null ? [] : JSON.parse(Taskinfo);



const Table = () => {
    tableBody.innerHTML = "";
    Task.forEach(el => {
        const row = document.createElement("tr");

        const taskCell = document.createElement("td");
        taskCell.textContent = el.task;
        row.appendChild(taskCell);

        const Priority = document.createElement("td");
        Priority.setAttribute("class", "left");
        Priority.textContent = el.priority;
        row.appendChild(Priority);

        const Check = document.createElement("input");
        Check.setAttribute("type","checkbox");
        Check.setAttribute("id","check");
        const Label = document.createElement("label");
        Label.setAttribute("for","check");
        row.appendChild(Check,Label);

        const del = document.createElement("button");
        del.setAttribute("class","delete");
        del.textContent = "Delete"
        row.appendChild(del)

        
        tableBody.appendChild(row);
    });
};
//


save.addEventListener("click", () => {
  push();
});

const push = () => {
  const tasks = {
    task: task.value,
    priority: prio.value,
  };

  Task.push(tasks);
  localStorage.setItem("Task", JSON.stringify(Task));
  Table();
};

//


Table();

function termsChecked() {
    var chk = document.getElementById('termsChkbx');
    if (chk.checked) {
         chk.parentNode.style.color = 'black';
    } else {
         chk.parentNode.style.color = 'red';
    }
}