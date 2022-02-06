//Abdul Daim_Task#1
//1
/*const express=require('express')
const app=express()
const PORT=5000

app.get('/home',(req, res)=>{
    res.send("Hello World")
})

app.listen(PORT,()=>{
    console.log("Server is running on ",PORT)
})*/

//2
/*const express = require('express')
const app = express()
const PORT = 5000

app.get('/',(req, res)=>{
    res.send("Hello World")
})

app.listen(PORT,()=>{
    console.log("The Server is running on",PORT)
})*/

//3
/*const express = require('express')
const app = express()
const PORT = 5000

app.get('/Service',(req,res)=>{
    res.send("Instagram")
})

app.listen(PORT,()=>{
    console.log("The Server is running on",PORT)
})*/

//4
/*const express = require('express')
const app = express()
const PORT = 2000

app.get('/testing',(req, res)=>{
    res.send("Facebook")
})


app.listen(PORT,()=>{
    console.log("The port on which the SERVER is running is",PORT)
})*/

//5
/*const express = require('express')
const app = express()
const PORT = 500

app.get('/contacts',(req,res)=>{
    res.send("Testing")
})

app.listen(PORT,()=>{
    console.log("PORT Number is: ",PORT)
})*/

//6
/*const express = require('express')
const app = express()
const PORT = 1000

app.get('/test',(req,res)=>{
    res.send("The file name is app.js")
})

app.listen(PORT,()=>{
    console.log(PORT,"is the port number")
})*/

//7
/*const express=require('express')
const app=express()
const port=300

app.get('/abc',(req,res)=>{
    res.send("Testing")
})


app.listen(port,()=>{
    console.log("The server is running",port,"is the port number")
})*/

//8
/*const express = require('express')
const app = express()
const PORT = 5000

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.listen(PORT, ()=>{
    console.log("The server is running on local host: ",PORT)
})*/

//9
/*const express = require('express')
const app = express()
const PORT = 5000

app.get('/',(req,res)=>{
    res.send("This is a practice code")
})

app.listen(PORT,()=>{
    console.log("The server is on PORT: ",PORT)
})*/

//10
/*const express = require('express')
const app = express()
const PORT = 5000

app.get('/',(req,res)=>{
    res.send("Welcome")
})

app.listen(PORT,()=>{
    console.log("The server is running on Port #",PORT)
})*/

/*const express = require('express')
const app=express()
const PORT = 500

app.get('/Practice',(req,res)=>{
    res.send("This is the last practice")
})

app.listen(PORT,()=>{
    console.log("What is the PORT Number?",PORT,"is the PORT Number")
})*/

//////////////////////////////////////////////////////////////////////////////////////

//AbdulDaim_Task#2
//Tutorial#2
//1
//Basics of Middleware
/*
const express = require('express')
const app = express()
const port = 327

const testingMiddleware = ()=>{
    console.log("The line is to test middleware execution")
}

app.use(testingMiddleware)

app.get('/*contact',(req,res)=>{
    res.send("I am testing the output")
})

app.listen(port, ()=>{
    console.log("Port # of the server is: ", port)
})*/

//2
//Practice of code to be executed after middleware (app.use(practiceMIDDLEware))
/*const express = require('express')
const app = express()
const PORTnumber = 4321

const practiceMIDDLEware = (req,res,next)=>{
    console.log("I am middle ware.")
    next()
}

app.use(practiceMIDDLEware)

app.get('/Home',(req,res)=>{
    res.send("Home")
    console.log("Home Page")
})

app.get('/ContactUs',(req,res)=>{
    console.log("Contact Us Page")
    res.send("ContactUs")
})

app.listen(PORTnumber, ()=>{
    console.log("The PORT Number for the server is:",PORTnumber)
})*/

//3
//Only Executing Specific Pages After Middleware by passing Middleware as a parameter
/*const EXPRESS = require('express')
const app = EXPRESS()
const NumberOfPort = 1212

const MIDDLEWARE = (req,res,next)=>{
    console.log("Middleware Execution Testing")
    next()
}

app.get('/Home',MIDDLEWARE,(req,res)=>{
    res.send("Welcome to Our Website")
    console.log("Home Page")
})

app.get('/Services',(req,res)=>{
    console.log("Services Page")
    res.send("We are providing the best services")
})

app.listen(NumberOfPort,()=>{
    console.log("Server is running.",NumberOfPort,"is the PORT Number")
})*/

//Tutorial#2
//1
/*module.exports = {
    MONGOURI:"mongodb+srv://adgondal:3hn9KYU6FOEaaz1g@cluster0.rvrnz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
}*/

//2 Mongoose
/*const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PortNo = 10
const {MONGOURI} = require('./keys')

mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected',()=>{
    console.log("Connected to MongoDB Successfully")
})

mongoose.connection.on('error',(err)=>{
    console.log("Error while connecting",err)
})

app.get('/test',(req,res)=>{
    res.send("Testing")
})

app.listen(PortNo,()=>{
    console.log("Port Number: ",PortNo)
})*/

//3 Middleware and Mongoose
/*const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PortNUMBER = 1289
const {MONGOURI} = require('./keys')

const middleware = (req,res,next)=>{
    console.log("Middleware Execution")
    next()
}

mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected',()=>{
    console.log("Connection is Successful")
})

mongoose.connection.on('error',(err)=>{
    console.log("Connection Unsuccessful; Error:",err)
})

app.get('/Home',middleware,(req,res)=>{
    res.send("Welcome to Our Website")
})

app.get('/Contact',(req,res)=>{
    res.send("Contact Number: 0312-1234567")
})

app.listen(PortNUMBER,()=>{
    console.log("Port Number is: ",PortNUMBER)
})*/

//4 Mongoose
/*const TestExpress = require('express')
const app = TestExpress()
const TestMongoose = require('mongoose')
const portNO = 32
const {MONGOURI} = require('./keys')

TestMongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

TestMongoose.connection.on('connected',()=>{
    console.log("Connection Successful")
})

TestMongoose.connection.on('error',(err)=>{
    console.log("Connection Unsuccessful; Error: ",err)
})

app.listen(portNO,()=>{
    console.log("Port Number is: ",portNO)
})*/

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port=5000
const {MONGOURI} = require('./keys')

mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//mongoose.model("User",userSchema)
mongoose.connection.on('connected',()=>{
    console.log("Connection Successful")
})

mongoose.connection.on('error',(err)=>{
    console.log("Connection Unsuccessful; Error:",err)
})

require('./models/user')
require('./models/post')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))

app.listen(port,()=>{
    console.log("Port Number: ",port)
})























