const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// which add the task in list (Unordered List)
inputBox.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something! ");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData();
}

//Here , we code for checked or unchecked which remove of task-
listContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false); 

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();