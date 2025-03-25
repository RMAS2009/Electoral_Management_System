const express = require('express');
const router = express.Router();

const User = require('../models/user');
const {jwtAuthMiddleware,generateToken} = require('./../jwt');



router.post('/signup',async(req,res)=>{
    try{
         const data = req.body;

         if (!/^\d{12}$/.test(data.NID)) {
            return res.status(400).json({ error: 'NID Card Number must be exactly 12 digits' });
        }


         const newUser = new User(data);
         const response = await newUser.save();
         console.log("User Saved Successfully");

         const payload= {
            id:response.id
         }
         console.log(JSON.stringify(payload));
         const token = generateToken(payload);
         console.log("Token id : ",token);

         res.status(200).json({response:response,token: token});
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({err:'Internal server error'});
    }
})


router.post('/login',async(req,res)=>{
    try{

      const {NID,password} = req.body;
      console.log("Nid = ",NID);
      console.log("password = ",password);
      const user = await User.findOne({NID:NID});

      if(!user || !(await user.comparePassword(password)))
      {
        return res.status(401).json({error:'Invalid username and password'});
      }
      const payload= {
        id:user.id
     }
    // console.log(JSON.stringify(payload));
     const token = generateToken(payload);
     console.log(token);
      res.status(200).json(token);

    } catch(err){
      console.log(err);
      res.status(500).json({err:'Internal server error'});
       
    }  
})


router.get('/profile',jwtAuthMiddleware,async(req,res)=>{
    try{

      const userData = req.user;
      console.log("User Data : ",userData);

      const userId = userData.id;

      const user = await User.findOne(userId);

     
     
      res.status(200).json({user});

    } catch(err){
      console.log(err);
      res.status(500).json({err:'Internal server error'});
       
    }  
})

router.put('/profile/password',jwtAuthMiddleware,async(req,res)=>{
    try{
        const userId = req.user;
       
        const {curPassword,newPassword} = req.body;
  
        const user = await User.findById(userId);

        if(!(await user.comparePassword(curPassword)))
            {
              return res.status(401).json({error:'Invalid username and passsword'});
            }
            user.password = newPassword;
            await user.save();
            
          console.log("Password Update Successful")
          res.status(200).json("Successfully Update Password");  
    }
    catch(err)
    {
        console.log("internal server error");
        res.status(500).json({err:"Internal server error"});
    }
})


module.exports = router;