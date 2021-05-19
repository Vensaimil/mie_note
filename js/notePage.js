
let note_status = () => {
    let note_cb = document.getElementById("note_cb");
    if (note_cb.checked) {
        return true;
    } else {
        return false;
    }
}

class task {
    id;
    info;
    cb;

    constructor(newId, newInfo, newCb) {
        this.id = newId;
        this.info = newInfo;
        this.cb = newCb;
    }
}

class list {
    id;
    name;
    notesArray;
    constructor(newId,newName, newNotesArray) {
        this.id = newId;
        this.name = newName;
        this.notesArray = newNotesArray;
    }
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
function taskCheck(taskId) {
    let taskFound = false;
    let deletingtaskId = null;

    for (let i = 0; i < deletedtasksIdArray.length; i++) {
        if (taskId === deletedtasksIdArray[i]) {
            taskFound = true;
            deletingtaskId = i;
        }
    }
    if (taskFound) {
        deletedtasksIdArray.splice(deletingtaskId, 1);
    } else {
        deletedtasksIdArray.push(taskId);
    }
}
function deleteItem(taskId) {
    for (let i = 0; i < notesArray.length; i++) {
        if (notesArray[i].id === taskId) {
            notesArray.splice(i, 1);
        }
    }

    showItems();
}



saveBtn.addEventListener("click", function () {
    let note_listName = document.getElementById("listnameInput").value;

    let noteslist_array = JSON.parse(localStorage.getItem("noteslist_array"));
    let newId = noteslist_array.length + 1;
    let newList = new list(newId, note_listName,notesArray);
    
    noteslist_array.push(newList)

    localStorage.setItem('noteslist_array', JSON.stringify(noteslist_array));
    console.log(noteslist_array);

});




addBtn.addEventListener("click", function () {
    let string = document.getElementById("note_string");
    let note_string = string.value;
    let task0 = new task(currentId, note_string, note_status());

    notesArray.push(task0);
    currentId++;

    showItems();
    localStorage.setItem('notesArray', JSON.stringify(notesArray));
    console.log(notesArray);
})




clearBtn.addEventListener("click", function () {
    if (deletedtasksIdArray.length === 0) {
        alert("You need to choose some checkbox")
    } else {
        for (let i = 0; i < deletedtasksIdArray.length; i++) {
            for (let k = 0; k < notesArray.length; k++) {
                if (deletedtasksIdArray[i] === notesArray[k].id) {
                    notesArray.splice(k, 1);
                }
            }
        }
        showItems();
    }

})
