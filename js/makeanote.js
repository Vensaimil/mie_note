let listname = $(".listname");
let innerBlocks = $("#innerBlocks")
let noteslist_array = JSON.parse(localStorage.getItem("noteslist_array"));

console.log(noteslist_array);

for(let i = 0; i < noteslist_array.length;i++){
    listname.innerText = noteslist_array[i]['name'];
    innerBlocks.append(`
    <div class = "block" onclick = "openNote(${noteslist_array[i]['id']})"> 
    <p class = "listname"> ${noteslist_array[i]['name']}</p>
    </div>
    `)   
}

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function () {
    
    for(let i = 0; i < noteslist_array.length;i++){
        listname.innerText = noteslist_array[i]['name'];
        innerBlocks.append(`
            <div class = "block" onclick = "openNote(${noteslist_array[i]['id']})"> 
            <p class = "listname"> ${noteslist_array[i]['name']}</p>
            </div>
        `)   
    }console.log("hi");
});
function createNote() {
    location.href = "notePage.html";
}
function openNote(id){
    console.log("Clicked id: " + id);
    localStorage.setItem("clickedListId", JSON.stringify(id));
    location.href = "openednote.html";
}
