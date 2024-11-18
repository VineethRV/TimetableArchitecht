"use server";
import * as auth from "./auth";
import { PrismaClient } from "@prisma/client";
import { Teacher } from "@/app/types/main";
import { statusCodes } from "@/app/types/statusCodes";

const prisma = new PrismaClient();

function convertTableToString(timetable: string[][]): string {
  return timetable.map(row => row.join(",")).join(";");
}


export async function createTeachers(JWTtoken:string,name:string,initials:string|null=null,email:string|null=null,department:string|null=null,alternateDepartments:string|null=null,timetable:string[][]|null=null,labtable:string[][]|null=null):Promise<{status:number,teacher:Teacher|null}>{
    try{
        const {status,user}=await auth.getPosition(JWTtoken)
        if(status==statusCodes.OK && user){
            //if user isnt a viewer
            if(user.role!='viewer')
            {
                    //check if teacher with same name dep and org exist
                const teachers=await prisma.teacher.findFirst({
                    where:{
                        name:name,
                        department:department?department:user.department,
                        organisation:user.organisation
                    }
                })
                //if even a single teacher exists
                if(teachers){
                    return {
                        status:statusCodes.BAD_REQUEST,
                        teacher:null
                    }
                }
                //else
                const teacher:Teacher={
                    name:name,
                    initials:initials,
                    email:email,
                    department:department?department:user.department?user.department:"no department",
                    alternateDepartments:alternateDepartments,
                    timetable:timetable?convertTableToString(timetable):"0,0,0,0,0,0;0,0,0,0,0,0;0,0,0,0,0,0;0,0,0,0,0,0;0,0,0,0,0,0;0,0,0,0,0,0;",
                    labtable:labtable?convertTableToString(labtable):"0,0,0,0,0,0;0,0,0,0,0,0;0,0,0,0,0,0;0,0,0,0,0,0;0,0,0,0,0,0;0,0,0,0,0,0;",
                    organisation:user.organisation
                }
                await prisma.teacher.create({
                    data:teacher
                })
                return{
                    status:statusCodes.CREATED,
                    teacher:teacher
                }
            }
            //if user is a viewer code will reach here
            return{
                status:statusCodes.UNAUTHORIZED,
                teacher:null
            }
        }
        //if status not ok
        return{
            status:status,
            teacher:null
        }
    }
    catch{
        return{
            status:statusCodes.INTERNAL_SERVER_ERROR,
            teacher:null
        }
    }
}

//to display teachers list 
export async function getTeachers(JWTtoken:string):Promise<{status:number,teachers:Teacher[]|null}>{
    try{
       const {status,user}=await auth.getPosition(JWTtoken)

       //if verification of roles is ok
       if(status==statusCodes.OK && user){
            let teachers:Teacher[];

            //if role isnt admin, return teachers from same department
            if(user.role!='admin'){
                teachers=await prisma.teacher.findMany({
                    where:{
                        organisation:user.organisation,
                        department:user.department
                    },
                    select:{
                        name:true,
                        department:true,
                        initials:true,
                        email:true,
                    }
                })
                //convert the returned object into Teacher[] type
                .then((teachers)=>
                    teachers.map((teacher)=>({
                        ...teacher,
                        alternateDepartments:null,
                        organisation: user.organisation,
                        timetable: null, // Default value, since it's not queried
                        labtable: null, // Default value, since it's not queried
                    }))
                );
            }
            //if role is admin, return teachers from all departments
            else{
                teachers=await prisma.teacher.findMany({
                    where:{
                        organisation:user.organisation,
                    },
                    select:{
                        name:true,
                        department:true,
                        initials:true,
                        email:true
                    }
                })
                //convert the returned object into Teacher[] type
                .then((teachers)=>
                    teachers.map((teacher)=>({
                        ...teacher,
                        alternateDepartments:null,
                        organisation: user.organisation,
                        timetable: null, // Default value, since it's not queried
                        labtable: null, // Default value, since it's not queried
                    }))
                );
            }
            return {
                status:statusCodes.OK,
                teachers:teachers
            }

    }
    else {
      return {
        status: status,
        teachers: null
      }
    }
  }
  catch {
    return {
      status: statusCodes.INTERNAL_SERVER_ERROR,
      teachers: null
    }
  }
}

export async function peekTeacher(
    token: string,
    name: string,
    department: string|null=null
  ): Promise<{ status: number; teacher: Teacher | null }> {
    try {
        //get position of user
        const { status, user } = await auth.getPosition(token);
        //if verification of rules is okay, perform the following
        if (status == statusCodes.OK && user) {
            const teacher = await prisma.teacher.findFirst({
                where: {
                    name: name,
                    department: user.role=='admin'?department?department:user.department:user.department,
                    organisation: user.organisation,
                },
                select: {
                    name: true,
                    organisation: true,
                    department: true,
                    alternateDepartments:true,
                    initials:true,
                    email:true,
                    labtable:true,
                    timetable: true,
                },
            });
            return {
                status: statusCodes.OK,
                teacher: teacher,
            };
        }   
        //else 
        return {
            status: status,
            teacher:null
        }
    } 
    catch {
      //internal error
      return {
        status: statusCodes.INTERNAL_SERVER_ERROR,
        teacher: null,
      };
    }
}