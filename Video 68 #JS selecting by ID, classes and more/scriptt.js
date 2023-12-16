console.log("Hello")

let boxes =  document.getElementsByClassName("box")
console.log(boxes)

boxes[2].style.backgroundColor = "red";

document.getElementById("redbox").style.backgroundColor = "blue";

document.querySelector(".box").style.backgroundColor="yellow"; //only apply to first matching identity

//query selector All return node list so that for loop used to apply on all elements coz of html collection
// document.querySelectorAll(".box").style.backgroundColor+"purple";

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="purple";
})

console.log(document.getElementsByTagName("div"));

e = document.getElementsByTagName("div");
e[4].matches("#red");

// e[3].matches("#redbox")
// false
// e[4].matches("#redbox")
// true

