let nameInput0 = document.getElementById("nameInput0");
let loginInput0 = document.getElementById("loginInput0");
let passwordInput0 = document.getElementById("passwordInput0");
let checkpInput0 = document.getElementById("checkpInput0");
let users_info = JSON.parse(localStorage.getItem("users_info"));

let regForm = () => {
    if (nameInput0.value.length < 4 && loginInput0.value.length < 4
        && passwordInput0.value.length < 4 && checkpInput0.value.length < 4) {
        console.log("Ты уверен?Попробуй еще раз");
        nameInput0.style.border = "0.5vh solid #fff677";
        loginInput0.style.border = "0.5vh solid #fff677";
        passwordInput0.style.border = "0.5vh solid #fff677";
        checkpInput0.style.border = "0.5vh solid #fff677";
    }
    else if (passwordInput0.value !== checkpInput0.value) {
        console.log("Пароли не совпадают");
        passwordInput0.style.border = "0.5vh solid #fff677";
        checkpInput0.style.border = "0.5vh solid #fff677";
    }
    else {
        let random = Math.floor(Math.random() * 1000) + 1;
        let user = {
            userId: random,
            userName: nameInput0.value,
            userLogin: loginInput0.value,
            userPassword: passwordInput0.value,
        }
        users_info.push(user)
        localStorage.setItem('users_info', JSON.stringify(users_info));
        console.log(users_info);
        location.href = "mainPage.html"
    }
}
let submitBtn0 = document.getElementById("submitBtn0");
submitBtn0.addEventListener("click", regForm);