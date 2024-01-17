const fs = require("fs")
// const fs = require("fs/promises")
 
console.log("starting")
// fs.writeFileSync("harry.txt", "Harry is a good boy")

fs.writeFile("harry2.txt", "Harry is a good boy2", ()=>{ //if multiple used of this function it will lead to code get downwards whicg means callback hell
    console.log("done")
    fs.readFile("harry2.txt", (error, data)=>{
        console.log(error, data.toString()) //if only data is used it will give code as buffer and to string is used for stringify the data of the buffer
    })
})

fs.appendFile("harry.txt", "harryrobo", (e, d)=>{
    console.log(d)
})

console.log("ending")