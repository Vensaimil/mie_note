
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
console.log(currentUser);

let userNameBlock = document.getElementById("userName");
userNameBlock.innerText = currentUser.name;

let grayblock = $(".grayblock");

    grayblock.append(`
        <div class = "userInfo_img">
        <div class = "img"></img></div>
        </div>
        <div class = "userInfo_string"> 
        <p class = "parray"><span class = "yellow">Name:</span>${currentUser.name}</p>
        <p class = "parray"><span class = "yellow">Login</span>:${currentUser.login}</p>
       
        </div>
    `)


