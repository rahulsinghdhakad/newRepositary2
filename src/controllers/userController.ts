import { NextFunction, Request, Response } from "express";

export const  getUsers=(req:Request, res:Response, next:NextFunction)=>{
    const arr=[1,2,3,4]
    res.json({arr})
}