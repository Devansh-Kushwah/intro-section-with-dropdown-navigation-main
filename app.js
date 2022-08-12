const hamburgerBtn = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const crossBtn = document.querySelector(".cross");
const droptitle = document.querySelectorAll(".drop-title");

hamburgerBtn.addEventListener("click", function(){
    sidebar.classList.add("show-sideBar");
    console.log("hey")
})

crossBtn.addEventListener("click", function(){
    sidebar.classList.remove("show-sideBar");
})

droptitle.forEach(function(e){
    e.addEventListener('click', function(){
        e.childNodes.item(3).classList.toggle("dropup-menu");
        e.nextElementSibling.classList.toggle("show-items");
    });
})