
let note_status = () =>{
    let note_cb = document.getElementById("note_cb");
    if(note_cb.checked){
        return true;
    }else{
        return false;
    }
}

class task {
    #id;
    #info;
    #cb;

    constructor(newId,newInfo, newCb) {
        this.#id = newId;
        this.#info = newInfo;
        this.#cb = newCb;
    }
    get id(){
        return this.#id;
    }
    get info() {
        return this.#info;
    }
    set info(newInfo) {
        this.#info = newInfo;
    }
    get cb() {
        return this.#cb;
    }
    set cb(newCb) {
        this.#cb = newCb;
    }
}

class list {
    #name;
    #tasks = [];
}

let saveBtn = document.getElementById("saveBtn");
let addBtn = document.getElementById("addBtn");
let clearBtn = document.getElementById("clearBtn");

let notesArray = [];
let deletedtasksIdArray = [];
let currentId = 1;
let notes_list = $("#notes_list");

function showItems() {
    notes_list.empty();
    for (let i = 0; i < notesArray.length; i++) {
        notes_list.append(
            `
            <ol class = "note_item">
            <input onclick = "taskCheck(${notesArray[i].id})" type="checkbox" id ="note_cb">
            <p id = "note_string"> ${notesArray[i].info} ${notesArray[i].cb}</p>
            </ol>
            `
        );
    }
}
function taskCheck(taskId){
    let taskFound = false;
    let deletingtaskId = null;

    for(let i = 0; i < deletedtasksIdArray.length; i++){
        if(taskId === deletedtasksIdArray[i]){
            taskFound = true;
            deletingtaskId = i;
        }
    }
    if(taskFound){
        deletedtasksIdArray.splice(deletingtaskId, 1);
    }else{
        deletedtasksIdArray.push(taskId);
    }
}
function deleteItem(taskId){
    for(let i = 0; i < notesArray.length; i++){
        if(notesArray[i].id === taskId){
            notesArray.splice(i, 1);
        }
    }

    showItems();
}

saveBtn.addEventListener("click", function () {
    let newList = new list();
    let note_listName = document.getElementById("listnameInput").value;
    newList.name = note_listName;
    newList.tasks = notes_list;

    newList
});

addBtn.addEventListener("click",function(){
    let string = document.getElementById("note_string");
    let note_string = string.value;
    let task0 = new task(currentId,note_string, note_status());

    notesArray.push(task0);
    currentId++;

    showItems();
    localStorage.setItem('notesArray', JSON.stringify(notesArray));
    console.log(notesArray); 
})

clearBtn.addEventListener("click",function(){
   if(deletedtasksIdArray.length === 0){
       alert("You need to choose some checkbox")
   }else{
       for(let i = 0; i < deletedtasksIdArray.length; i++){
           for(let k = 0; k < notesArray.length; k++){
               if(deletedtasksIdArray[i] === notesArray[k].id){
               notesArray.splice(k, 1);
               }
           }
       }
       showItems();
   }
    
})
let users_info = JSON.parse(localStorage.getItem("users_info"));
console.log(users_info);

let noteslist_array = JSON.parse(localStorage.getItem("noteslist_array"));
console.log(noteslist_array);
