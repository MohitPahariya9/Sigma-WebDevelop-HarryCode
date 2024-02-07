console.log("Hello")
document.querySelector(".box").innerHTML;
document.querySelector(".box").outerHTML; //inner + self 
document.querySelector(".box").innerText;
document.querySelector(".box").tagName; // only elemnts inside it 
document.querySelector(".box").nodeName; //for all node comment text etc
document.querySelector(".box").hidden = true; 
document.querySelector(".box").innerHTML = "ello";
//if style or not
document.querySelector(".box").hasAttribute("style") // show true or false
document.querySelector(".box").getAttribute("style") // to recieve
document.querySelector(".box").setAttribute("style", "display:inline") 
document.designMode = "on" //to design page


document.querySelector(".box").className;
document.querySelector(".box").classList;
document.querySelector(".box").classList.add("Abhii");
document.querySelector(".box").classList.toggle("Abhii");