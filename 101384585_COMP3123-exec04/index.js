var express = require('express')

const SERVER_PORT = 8088
var app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//http://localhost:8088
app.get("/", (req,res) =>{
    res.send("<h1>Exercise 4</h1>")
})

//http://localhost:8088/hello
app.get("/hello", (req,res) =>{
    res.send("Hello Express JS")
})

// PATH parameter
//http://localhost:8088/user/Pritesh/Patel
app.post("/user/:firstname/:lastname", (req,res) =>{
    const data = req.params
    let firstname = req.params.fname
    let lastname = req.params.lname
    res.json(data)
})

// Query parameter
//http://localhost:8088/user?firstname=Pritesh&lastname=Patel
app.get("/user", (req,res) =>{
    const data = req.query
    let firstname = req.query.fname; 
    let lastname = req.query.lname;
    if (data.firstname == undefined || data.lastname == undefined) {
        res.send("Required id as a query param")
    }else{
        res.send(data)
    }
})

app.listen(SERVER_PORT, ()=> {
    console.log(`Server running at http://localhost:${SERVER_PORT}`)
})