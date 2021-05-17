
let users_info = JSON.parse(localStorage.getItem("users_info"));
console.log(users_info);
let grayblock = $(".grayblock");
for (let a = 0; a < 1; a++) {
    grayblock.append(`
<div class = "userInfo_img">
<div class = "img"></img></div>
</div>

<div class = "userInfo_string"> 
<p class = "parray"><span class = "yellow">Name:</span>${users_info[a]['userName']}</p>
<p class = "parray"><span class = "yellow">Login</span>:${users_info[a]['userLogin']}</p>
<p class = "parray"><span class = "yellow">Password</span>:${users_info[a]['userPassword']}</p>
</div>

`)
}

