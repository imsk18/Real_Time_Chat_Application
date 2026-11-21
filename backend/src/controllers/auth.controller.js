import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



export const Register = async(req,res)=>{
    const {name,email,password} = req.body;

    try{

    const isUserExist = await userModel.findOne({email});
    if(isUserExist){
        return res.status(400).json({
            message:"user already exist with this email"
        })
    }

      //password hash 

    const hash = await bcrypt.hash(password,10)

    const user = await userModel.create({
        name,
        email,
        password:hash
    })

    const token = jwt.sign(
        {id:user._id, email:user.email},
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
    )

    res.cookie("token", token)



    res.status(201).json({
        message:"user register successfully",
        user:{
            name:user.name,
            email: user.email
        }
    })

    }catch(error){
        console.log("register error", error);
        res.status(500).json({
            success:false,
            message:"server error"
        })
    }

   

    
}

//Login user 
export const Login = async(req,res)=>{

    try{

    const {email , password} = req.body

    const user = await userModel.findOne({email})
    if(!user){
        return res.status(404).json({message:"user not found"})
    }

    const isPasswordCorrect = await bcrypt.compare(password , user.password);
    if(!isPasswordCorrect){
        return res.status(400).json({
            message:"invalid password"
        })
    }

    // console.log(user.id);

    const token = jwt.sign(
        {id:user.id , email:user.email},
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
    )

    res.cookie("token", token);

    res.status(200).json({
        success:true,
        message:"login successfully",
        user
    })

    }catch(error){
        console.log("login error", error);

        res.status(500).json({
            success:false,
            message:"server error"
        })
    }
    

}



export const getMe = async (req, res) => {
    try {
        const { id } = req.user;

        const user = await userModel
            .findById(id)
            .select("-password");

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "User fetched successfully",
            user
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};



