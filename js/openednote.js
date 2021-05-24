let noteslist_array = JSON.parse(localStorage.getItem("noteslist_array"));
console.log(noteslist_array);

let clickedListId = JSON.parse(localStorage.getItem("clickedListId"));
console.log(clickedListId);


let note_status = () => {
    let note_cb = document.getElementById("note_cb");
    if (note_cb.checked) {
        return true;
       // note_cb.setProperty("text-decoration", "line-through");
    } else {
        return false;
    }
}

for(let i = 0; i < noteslist_array.length; i++){
    if(noteslist_array[i].id === clickedListId){
        let listname = $("#listname");
        let opened_notes = $("#opened_notes");
        listname.append(`
        ${noteslist_array[i].name}
        `)
        for(let k = 0; k <noteslist_array[i].notesArray.length; k++ ){
        opened_notes.append(`
        <ol class = "note_item">
        <input onClick = "note_status(${noteslist_array[i].notesArray[k].id})" type="checkbox" id ="note_cb">
        <p id = "note_string"> ${noteslist_array[i].notesArray[k].info} </p>
        </ol>
      
        `)
        }
    }
   
}
 

