let galleryPicAll = document.getElementById("galleryAll");
let galleryPic1 = document.getElementById("gallery1pic");
let galleryPic2 = document.getElementById("gallery2pic");
let galleryPic3 = document.getElementById("gallery3pic");
let galleryPic4 = document.getElementById("gallery4pic");
let galleryPic5 = document.getElementById("gallery5pic");
let galleryPic6 = document.getElementById("gallery6pic");
let galleryPic7 = document.getElementById("gallery7pic");
let galleryPic8 = document.getElementById("gallery8pic");
let backButton = document.getElementById("backBtn");

backButton.addEventListener("click", function(){
    location.href = 'mainPage2.html'
});

let currentUser = JSON.parse(localStorage.getItem("currentUser"));
console.log(currentUser)
galleryPic1.addEventListener("click", function(){
    currentUser.imgsrc = "https://ic.pics.livejournal.com/phys_exp/20166967/50476/50476_original.jpg";
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    console.log(currentUser)
});
galleryPic2.addEventListener("click", function(){
    currentUser.imgsrc = "https://en.wahooart.com/Art.nsf/O/9GEHSH/$File/Claude-Monet-le-bassin-aux-nympheas-reflets-verts.jpg";
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
});
galleryPic3.addEventListener("click", function(){
    currentUser.imgsrc = "https://3dnews.ru/assets/external/illustrations/2014/07/05/823437/mone_big.jpg";
   localStorage.setItem("currentUser", JSON.stringify(currentUser));
});
galleryPic4.addEventListener("click", function(){
    currentUser.imgsrc = "https://cs6.pikabu.ru/post_img/big/2014/04/07/11/1396897063_1421524292.jpg"
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
});
galleryPic5.addEventListener("click", function(){
    currentUser.imgsrc = "https://i.pinimg.com/originals/5c/2c/5c/5c2c5c63ff154624629fee68781c2735.jpg";
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
});
galleryPic6.addEventListener("click", function(){
    currentUser.imgsrc = "https://us.v-cdn.net/6025126/uploads/editor/r9/grh0cefyxqyz.jpg";
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
});
galleryPic7.addEventListener("click", function(){
    currentUser.imgsrc = "https://3.bp.blogspot.com/-WljvtyfD7pc/UZzCv-eJioI/AAAAAAAAfC0/X3FgQmYZ-rk/s1600/%D0%9A%D0%BB%D0%BE%D0%B4+%D0%9C%D0%BE%D0%BD%D0%B5+-+Cliff+at+Dieppe,+1882.jpg";
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
});
galleryPic8.addEventListener("click", function(){
    currentUser.imgsrc = "https://cdn2.oceansbridge.com/2017/07/25095738/At-Les-Petit-Dalles-1884-Claude-Monet-Oil-Painting.jpg";
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
});

