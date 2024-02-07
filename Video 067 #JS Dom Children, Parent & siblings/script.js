console.log("Hello world")

document.body.childNodes //to know all nodes of the DOM


let cont =  document.body.childNodes[1]
cont.firstElementChild // element child other text node which is blank space

cont.firstElementChild.style.color = "red";


//parent node
cont.lastElementChild.parentElement

document.previousElementSibling

document.body.firstElementChild 
document.body.firstElementChild.childNodes 
document.body.firstElementChild.children