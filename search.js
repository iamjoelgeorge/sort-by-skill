let select = document.querySelector("#dropdown");
let addTaskButton = document.querySelector("#add-task-btn");
let infoDiv = document.querySelector("#info");
let tableParent = document.querySelector("#table");
let displayDiv = document.querySelector("#result");

addTaskButton.addEventListener("click", save);

//SAVE BUTTON
function save() {
  let name = document.querySelector("#name").value;
  let skill = select.value;
  if (name === "") {
    alert("Please enter a name");
  } else {
    let tr = document.createElement("tr");
    tr.setAttribute("class", "row");

    let nameTd = document.createElement("td");
    nameTd.setAttribute("class", "name-td");

    let skillTd = document.createElement("td");
    skillTd.setAttribute("class", "skill-td");

    tr.appendChild(nameTd);
    tr.appendChild(skillTd);
    nameTd.innerText = name;
    skillTd.innerText = skill;

    tableParent.appendChild(tr);
    console.log(tr);
  }
}
