// Nav animation script !!!!!!


/*const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');



openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = 'flex';
}*/
var container = document.getElementById("navcontainerformob");
var containertohide2 = document.getElementsByName("hero")[0];
var hidingcontainer = document.getElementsByClassName("hidingbody")[0];
function ToggleFunction() {
    var containertohide1 = document.getElementsByName("closeMenu")[0];
    var containertohide3 = document.getElementsByName("indexbody")[0];

    if (container.style.display == "none") {
        container.style.display = "block";
        hidingcontainer.style.display="block";



    }else if (container.style.display == "block"){
        container.style.display = "none";
    }
}
function toggleClose(){
    if (container.style.display=="block"){
        container.style.display = "none";
        hidingcontainer.style.display="none";
    }
}
