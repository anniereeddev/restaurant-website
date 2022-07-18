const delishDrinks = document.querySelector.getElementById("delishDrinks");
delishDrinks.addEventListener("click",toggleDrinks)
// TODO:create javascript button to click and show pictures
function toggleDrinks(){
    if(delishDrinks.style.display === "none"){
        delishDrinks.style.display = "block";
        console.log("hello??")
    } else {
        delishDrinks.style.display = "none";
    }
}