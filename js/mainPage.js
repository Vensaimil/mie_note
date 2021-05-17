
let regform = document.getElementsByClassName("regform")[0];
let grayblock0 = document.getElementsByClassName("grayblock")[0];
let nameInput = document.getElementById("nameInput");
let passwordInput = document.getElementById("passwordInput");

let users_info = JSON.parse(localStorage.getItem("users_info"));
console.log(users_info);


let logform = () => {
   
    let grayblock = $(".grayblock");

    for (i = 0; i < users_info.length; i++) {
        
        if (nameInput.value.length != 0 && passwordInput.value.length != 0 &&
            nameInput.value === users_info[i].userName &&
            passwordInput.value === users_info[i].userPassword) {
            regform.style.display = "none";

            for (let a = 0; a < users_info.length; a++) {
                grayblock.append(`
            <div class = "userInfo_img">
            <div class = "img"></img></div>
            </div>
            
            <div class = "userInfo_string"> 
            <p class = "parray"><span class = "yellow">Name:</span>${users_info[a]['userName']}</p>
            <p class = "parray"><span class = "yellow">Login</span>:${users_info[a]['userLogin']}</p>
            <p class = "parray"><span class = "yellow">Password</span>:${users_info[a]['userPassword']}</p>
            </div>
           
            `)}
        }else {
            alert("you're not register yet")
            location.href = 'signup.html'
            nameInput.style.border = "0.5vh solid #fff677";
            passwordInput.style.border = "0.5vh solid #fff677";
        }
    }
}


let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", logform);