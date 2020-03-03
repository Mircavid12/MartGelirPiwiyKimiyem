var myselect = document.querySelectorAll(".mylist li");
var myText = document.querySelector(".contents p")

for (var i = 0; i < myselect.length; i++) {
    myselect[i].addEventListener("click", function () {
        var activeP = document.querySelector(".contents .active")
        var activeLi = document.querySelector(".active");
        if (this.classList.contains('active')) {

        }
        activeLi.classList.remove("active");
        this.classList.add("active");
    })
}
for (var j = 0; j < myText.length; j++) {
    myselect[j].addEventListener("click", function () {
        var activeL = document.querySelector(".contents .active");
        if (this.classList.contains('active')) {

        }
        activeL.classList.remove("active");
        this.classList.add("active");
    })
}