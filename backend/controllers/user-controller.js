import { json } from "express";
import user from "../models/user";

export const getAllUsers = async() =>{
    let users;
    try
    {
        users = await user.find(); 
    }catch(error){
        console.log(error);
    }
    if(!users)
    {
       return res.status(404).json({message:"User not found"})
    }
    return res.status(200).json({users});

}