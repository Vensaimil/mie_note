let noteslist_array = JSON.parse(localStorage.getItem("noteslist_array"));
console.log(noteslist_array);

let clickedListId = JSON.parse(localStorage.getItem("clickedListId"));
console.log(clickedListId);

let currentUser = JSON.parse(localStorage.getItem("currentUser"));
document.body.style.backgroundImage = `url(${currentUser.imgsrc})`;

let editArray = [];

for (let i = 0; i < noteslist_array.length; i++) {
    if (noteslist_array[i].id === clickedListId) {
        let listname = $("#listname");
        let opened_notes = $("#opened_notes");
        listname.append(`
        ${noteslist_array[i].name}
        `)
        for (let k = 0; k < noteslist_array[i].notesArray.length; k++) {
            opened_notes.append(`
        <ol class = "note_item">
        <input onClick = "note_status(${noteslist_array[i].notesArray[k].id})" type="checkbox" id ="note_cb">
        <p id = "note_string"> ${noteslist_array[i].notesArray[k].info} </p>
        </ol>
      
        `)
        }
    }
}
 function note_status() {
    /* let taskFound = false;
    let  editArrayId = null;

    for (let i = 0; i < editArray.length; i++) {
        if (taskId === editArray[i]) {
            taskFound = true;
            editArrayId = i;
        }
    }
    if (taskFound) {
        editArray.splice(editArrayId, 1);
    } else {
        editArray.push(taskId);
    } */
} 

let editBtn = document.getElementById("editBtn");
editBtn.addEventListener("click", function () {
    if (editArray.length === 0) {
        alert("You need to choose some checkbox")
    } else {
        for (let i = 0; i < editArray.length; i++) {
            for (let k = 0; k < notesArray.length; k++) {
                if (editArray[i] === notesArray[k].id) {
                   
                }
            }
        }
        showItems();
    }

}) 

