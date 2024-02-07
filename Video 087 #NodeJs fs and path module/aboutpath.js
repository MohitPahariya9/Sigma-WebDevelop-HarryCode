import path from "path"
// double slashes used as to make as string else will treat as escape sequence
let myPath = "C:\\Users\\iitia\\Downloads\\Sigma Web Development Course\\Sigma-Web-Dev-Course\\Video 87\\harry.txt"
console.log(path.extname(myPath))

console.log(path.dirname(myPath))
console.log(path.basename(myPath))

console.log(path.join("c:/", "programs\\harry.txt"))