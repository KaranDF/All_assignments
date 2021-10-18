const inputBox = document.querySelector(".inputfield input");
const addBtn = document.getElementById("addTaskbtn");
const todoList = document.querySelector(".todoList");

inputBox.onkeyup = () => {
    let userData = inputBox.value;
    if (userData.trim() != 0) {
        addBtn.classList.add("active");
    } else {
        addBtn.classList.remove("active");
    }
}
showTasks();
addBtn.onclick = () => {
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("New Todo-task");//getting localstorage
    if (getLocalStorage == null) {
        listArr = [];
    }
    else {
        listArr = JSON.parse(getLocalStorage);//string to object
    }
    listArr.push(userData);
    localStorage.setItem("New Todo-task", JSON.stringify(listArr)); //object to string
    showTasks();
}

function showTasks() {
    let getLocalStorage = localStorage.getItem("New Todo-task");
    if (getLocalStorage == null) {
        listArr = [];
    }
    else {
        listArr = JSON.parse(getLocalStorage);//string to object
    }
    let newList = '';
    listArr.forEach((element, index) => {
        newList += `<li> ${element}
     <span onclick="deleteTask(${index})";><i class="fas fa-trash"></i></span></li>`;
       // // <span onclick ="editTask(${index})"><i class="fas fa-edit"></i></span> 
    })
  
    todoList.innerHTML = newList;
    inputBox.value = '';//leaves input black after adding
}

//delete

function deleteTask(index) {
    let getLocalStorage = localStorage.getItem("New Todo-task");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1)//delete a particular 

    localStorage.setItem("New Todo-task", JSON.stringify(listArr));
    showTasks();
}

function editTask(index) {
    let saveIndex = document.getElementById("saveIndex");
    let addTaskbtn = document.getElementById("addTaskbtn");
    let saveTaskbtn = document.getElementById("saveTaskbtn");
    saveIndex.value = index;
    let getLocalStorage = localStorage.getItem("New Todo-task");
    let listArr = JSON.parse(getLocalStorage);
    inputBox.value = listArr[index];
    addTaskbtn.style.display = "none";
    saveTaskbtn.style.display = "block";
}

//save Task

let saveTaskbtn = document.getElementById("saveTaskbtn");
saveTaskbtn.addEventListener("click", function () {
    let getLocalStorage = localStorage.getItem("New Todo-task");
    let listArr = JSON.parse(getLocalStorage);
    let input = document.getElementById("input").value;
    listArr[input] = userData.value;
    localStorage.setItem("New Todo-task", JSON.stringify(listArr));
})



