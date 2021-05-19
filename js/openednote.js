let noteslist_array = JSON.parse(localStorage.getItem("noteslist_array"));
console.log(noteslist_array);

let clickedListId = JSON.parse(localStorage.getItem("clickedListId"));
console.log(clickedListId);

for(let i =0; i < noteslist_array.length; i++){
    if(noteslist_array[i].id === clickedListId){
        let opened_notes = $("#opened_notes");
        opened_notes.append(`
        <p class="listname" >${noteslist_array[i].name}</p>
        `)
        for(let k = 0; k <noteslist_array[i].notesArray.length; k++ ){
            opened_notes.append(`
        <p class="listname" >${noteslist_array[i].notesArray[k].info}</p>
        `)
        }
    }
}