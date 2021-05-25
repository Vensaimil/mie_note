let noteslist_array = JSON.parse(localStorage.getItem("noteslist_array"));
console.log(noteslist_array);

let clickedListId = JSON.parse(localStorage.getItem("clickedListId"));
console.log(clickedListId);

let currentUser = JSON.parse(localStorage.getItem("currentUser"));
document.body.style.backgroundImage = `url(${currentUser.imgsrc})`;

for (let i = 0; i < noteslist_array.length; i++) {
    if (noteslist_array[i].id === clickedListId) {
        let listname = $("#listname");
        let opened_notes = $("#opened_notes");
        listname.append(`
        ${noteslist_array[i].name}
        `)
        for (let k = 0; k < noteslist_array[i].notesArray.length; k++) {
            if(noteslist_array[i].notesArray[k].cb === true){
                opened_notes.append(`
                    <ol class = "note_item">
                    <input checked onClick = "note_status(${noteslist_array[i].notesArray[k].id})" type="checkbox" id ="note_cb">
                    <p id = "note_string" class="active"> ${noteslist_array[i].notesArray[k].info} </p>
                    </ol>
                `)
            }else{
                opened_notes.append(`
                    <ol class = "note_item">
                    <input onClick = "note_status(${noteslist_array[i].notesArray[k].id})" type="checkbox" id ="note_cb">
                    <p id = "note_string"> ${noteslist_array[i].notesArray[k].info} </p>
                    </ol>
                `)
            }
            
        }
    }
}

function note_status(id) {
    for(let i = 0; i < noteslist_array.length; i++){
        for (let k = 0; k < noteslist_array[i].notesArray.length; k++) {
            if(id === noteslist_array[i].notesArray[k].id){
                noteslist_array[i].notesArray[k].cb = !noteslist_array[i].notesArray[k].cb;
              /*   console.log("Found item:");
                console.log(noteslist_array[i].notesArray[k]); */
            }
        };  
    }
}

let editBtn = document.getElementById("editBtn");
editBtn.addEventListener("click", function () {
    localStorage.setItem("noteslist_array", JSON.stringify(noteslist_array))
    location.reload();
}) 

 let dltBtn = document.getElementById("dltBtn");
dltBtn.addEventListener("click",function(){
    for(let i = 0 ; i < noteslist_array.length; i++ ){
        if(noteslist_array[i].id === clickedListId){
            noteslist_array.splice(i,1)
            localStorage.setItem("noteslist_array", JSON.stringify(noteslist_array))
            location.href = "makeanote.html";
        }
       
    }
})  