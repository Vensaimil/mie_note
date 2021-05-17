
let notesArray = JSON.parse(localStorage.getItem("notesArray"));
console.log(notesArray);

/* 
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function () {

    let innerBlocks = document.querySelector(".innerBlocks");
    const squareColors = ['#ed220d', '#b542e5', '#0d93ed', '#f2770b', '#8affbc', '#f2ff8a', '#ff38c2', '#e37f35'];
    let blocksnum = 50;

    for (let i = 0; i < 1; i++) {
        let square = document.createElement("div");
       // let listname_input = document.createElement("input")
       // listname_input.setAttribute("type", "text");

        square.classList.add("square");
       // listname_input.classList.add("listname_input");

        square.addEventListener("mouseover", () => setColor(square));
        square.addEventListener("mouseout", () => removeColor(square));

        innerBlocks.appendChild(square)
      //  innerBlocks.appendChild(listname_input)

        square.addEventListener("click", function () {
            location.href = "notePage.html";
        })

    }
    function setColor(elem) {
        let color = getRandomColor();
        elem.style.background = color;
        elem.style.boxShadow = "0 0 5px ${color}";

    }
    function removeColor(elem) {
        elem.style.background = "#2d2d2d";
        elem.style.boxShadow = "0 0 4px #000";
    }

    let getRandomColor = () => squareColors[Math.floor(Math.random() * squareColors.length)];
})
 */

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function () {
    
    let innerBlocks = $("#innerBlocks")
    for(let i = 0; i < 1;i++){
        innerBlocks.append(`
        <div class = "block" onclick = "openNote ()"> 
        <p class = "listname"> NAME</p>
        </div>
        `)   
    }console.log("hi");
});
function openNote() {
    location.href = "notePage.html";
}

