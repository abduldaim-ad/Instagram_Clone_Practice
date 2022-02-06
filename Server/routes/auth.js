/*const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send("Testing Successful")
})

router.post('/signup',(req,res)=>{
    console.log(req.body)  
})

module.exports = router*/

/*const express = require('express')
const router = express.Router()

router.get('/test',(req,res)=>{
    res.send("Testing")
})

router.post('/signup',(req,res)=>{
    const {name,email,password} = req.body
    if(!name || !email || !password){
        return res.status(422).json({error:"Please fill all the fields"})
    }
    res.json({message:"Successfully Posted"})
})

module.exports = router*/

const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const requireLogin = require('../middleware/requireLogin')


router.post('/signup',(req,res)=>{
    const {name,email,password} = req.body
    if(!name || !email || !password){
        return res.status(422).json({error:"Please fill all the fields"})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"Email already exists"})
        }
        bcrypt.hash(password,12)
        .then(hashedpassword=>{
            const user = new User({
                name,
                email,
                password:hashedpassword
            })
            user.save()
            .then(user=>{
                res.json({message:"Saved Successfully"})
            })
            .catch(err=>{
                console.log(err)
            })
        })

    })
    .catch(err=>{
        console.log(err)
    })
})

/*router.post('/signin',(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        return res.status(422).json({Error:"Please enter email or password"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            return res.status(422).json({Error:"Invalid email or password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(!doMatch){
                return res.status(422).json({Error:"Invalid email or password"})
            }else{
            res.json({message:"Successfully Signed in"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
    
})*/

/*router.post('/signin',(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        return res.status(422).json({Error:"Please fill all the fields"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            return res.status(422).json({Error:"Invalid email or password"})
        }
    })
    bcrypt.compare(password,savedUser.password)
    .then(doMatch=>{
        if(doMatch){
            res.json({message:"Successfully Signed In"})
        }
        else{
            return res.status(422).json({Error:"Invalid email or password"})
        }
    })
    .catch(err=>{
        console.log(err)
    })
})*/


router.post('/signin',(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        return res.status(422).json({Error:"Please fill all the fields"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            return res.status(422).json({Error:"Invalid Email or Password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                //res.json({message:"Sign in Successful"})
                const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                const {_id,name,email} = savedUser
                res.json({token,user:{_id,name,email}})
            }
            else{
                return res.status(422).json({Error:"Invalid Email or Password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})


module.exports = router




































