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
    currentUser.imgsrc = "https://c.wallhere.com/photos/1d/61/low_poly_triangle-224087.jpg!d";
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    console.log(currentUser)
});
galleryPic2.addEventListener("click", function(){
    currentUser.imgsrc = "https://million-wallpapers.ru/wallpapers/3/37/453828540988442/plan-zdaniya.jpg";
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
});
galleryPic3.addEventListener("click", function(){
    currentUser.imgsrc = "https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700012516.jpg";
   localStorage.setItem("currentUser", JSON.stringify(currentUser));
});
galleryPic4.addEventListener("click", function(){
    currentUser.imgsrc = "https://cdn.wallpapersafari.com/23/82/yEo7d0.jpg"
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
});
galleryPic5.addEventListener("click", function(){
    currentUser.imgsrc = "https://krot.info/uploads/posts/2021-03/1614632827_7-p-abstraktsiya-minimalizm-art-kartinki-10.jpg";
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
});
galleryPic6.addEventListener("click", function(){
    currentUser.imgsrc = "https://buyppcads.com/wp-content/uploads/2017/04/background-1747780.jpg";
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
});
galleryPic7.addEventListener("click", function(){
    currentUser.imgsrc = "https://catherineasquithgallery.com/uploads/posts/2021-02/1614521900_32-p-belaya-fotka-fon-39.jpg";
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
});
galleryPic8.addEventListener("click", function(){
    currentUser.imgsrc = "https://catherineasquithgallery.com/uploads/posts/2021-02/1612509793_37-p-serii-fon-minimalizm-57.jpg";
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
});

