import { PrismaClient } from "@prisma/client";
import e from "express";
import { todo } from "node:test";

const prisma = new PrismaClient()

async function run(){
    const todo = await prisma.toDo.createMany({
         data:[
            {text: "Umyc sie",done: false},
            {text: "Wysrac sie",done: true},
         ]
    })   
}

run().catch((e)=>{
    console.log(e)
    process.exit()
}).finally(async () =>{
    await prisma.$disconnect()
})