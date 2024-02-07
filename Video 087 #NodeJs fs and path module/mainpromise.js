import fs from "fs/promises"
//direct await is used as already inside promise module
let a = await fs.readFile("harry.txt")

let b = await fs.appendFile("harry.txt", "\n\n\n\nthis is amazing promise")
console.log(a.toString(), b)