'use server'
import * as auth from'./auth' 
import { Prisma, PrismaClient } from "@prisma/client";
import { Room } from "@/app/types/main";

const prisma=new PrismaClient();


function convertTableToString(timetable:string[][]):string|null{
    return timetable.map(row => row.join(",")).join(";");
}

function convertStringToTable(timetable:string):string[][]{
    return timetable.split(";").map(row => row.split(","));
}


//for creating rooms by editors, and admins
export async function createRoom(JWTtoken:string,name:string,lab:boolean,timetable:string[][]|null,department:string|null):Promise<{status:number,room:Room|null}> {
    try{
        let {status,user}=await auth.getPosition(JWTtoken)
        //if status is ok
        if(status==200){
            //check if role can make stuff
            if(user && user.role!="viewer"){
                
                let room:Room={
                    name:name,
                    organisation:user.organisation,
                    department:user.department,
                    lab:lab,
                    timetable:"0,0,0,0,0,0;0,0,0,0,0,0;0,0,0,0,0,0;0,0,0,0,0,0;0,0,0,0,0,0;0,0,0,0,0,0;"
                }
                if(timetable){
                    room.timetable=convertTableToString(timetable)
                }
                if(user.role=="editor" && department){
                    room.department=department
                }
                try{
                    //first check if any duplicates there, org dep and name same
                    const duplicates=await prisma.room.findMany({
                        where:{
                            organisation:room.organisation,
                            department:room.department,
                            name:name
                        }
                    })
                    if(duplicates.length>0){
                        //bad request
                        return{
                            status:402,
                            room:null
                        }
                    }
                    //if check successfull
                    await prisma.room.create({
                        data:room
                    })

                    //ok
                    return{
                        status:200,
                        room:room
                    }
                }
                catch{
                    return{
                        //internal error
                        status:500,
                        room:null
                    }
                }

            }
            //else return unauthorised
            return{
                status:401,
                room:null
            }
        }
        //not ok
        return{
            status:status,
            room:null
        }
    }
    catch{
        //internal error
        return {
            status:500,
            room:null
        }

    }
}



export async function getRooms(token:string):Promise<{status:number,rooms:Room[]|null}> {
    try{
        //get position of user
        let {status,user}=await auth.getPosition(token)
        if(status==200 && user){
            //find all the clasrooms in his lab
            let rooms;
            if(user.role!="admin"){
                rooms=await prisma.room.findMany({
                    where:{
                        organisation:user?.organisation,
                        department:user?.department
                    },
                    select:{
                        name:true,
                        department:true,
                        lab:true
                    }
                }).then(results => results.map(room => ({
                    ...room,
                    organisation: user.organisation || null,
                    timetable: null, // Default value, since it's not queried
                  })));
            }
            else{
                rooms=await prisma.room.findMany({
                    where:{
                        organisation:user?.organisation,
                    },
                    select:{
                        name:true,
                        department:true,
                        lab:true
                    }
                }).then(results => results.map(room => ({
                    ...room,
                    organisation: user.organisation || null,
                    timetable: null, // Default value, since it's not queried
                  })));
            }
            return{
                status:200,
                rooms:rooms
            }
        }
        else{
            return {
                status:status,
                rooms:null
            }
        }
    }
    catch{
        //internal error
        return {
            status:500,
            rooms:null
        }
    }
    
}   