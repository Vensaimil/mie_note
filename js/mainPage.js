
let regform = document.getElementsByClassName("regform")[0];
let grayblock0 = document.getElementsByClassName("grayblock")[0];
let nameInput = document.getElementById("nameInput");
let passwordInput = document.getElementById("passwordInput");

let users_info = JSON.parse(localStorage.getItem("users_info"));
console.log(users_info);


let logform = () => {
    for (i = 0; i < users_info.length; i++) {
        
        if (nameInput.value.length != 0 && passwordInput.value.length != 0 &&
            nameInput.value === users_info[i].userName &&
            passwordInput.value === users_info[i].userPassword) {
          /*   regform.style.display = "none"; */
         
            let currentUser = {
                name:users_info[i].userName,
                login:users_info[i].userLogin,
               
            }

            localStorage.setItem("currentUser", JSON.stringify(currentUser));

          location.href = 'mainpage2.html'
          
        }else if (
            nameInput.value != users_info[i].userName ||
            passwordInput.value != users_info[i].userPassword){
           
            nameInput.style.border = "0.5vh solid #fff677";
            passwordInput.style.border = "0.5vh solid #fff677";
        }else{
             alert("you're not register yet")
            location.href = 'signup.html'
        }

    }
}


let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", logform);