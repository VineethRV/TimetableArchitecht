"use server";
import * as auth from "./auth";
import { PrismaClient } from "@prisma/client";
import { Room } from "@/app/types/main";
import { statusCodes } from "@/app/types/statusCodes";

const prisma = new PrismaClient();

function convertTableToString(timetable: string[][]): string | null {
  return timetable.map((row) => row.join(",")).join(";");
}

// function convertStringToTable(timetable:string):string[][]{
//     return timetable.split(";").map(row => row.split(","));
// }

//for creating rooms by editors, and admins
export async function createRoom(
  JWTtoken: string,
  name: string,
  lab: boolean,
  timetable: string[][] | null = null,
  department: string | null = null
): Promise<{ status: number; room: Room | null }> {
  try {
    const { status, user } = await auth.getPosition(JWTtoken);
    //if status is ok
    if (status == statusCodes.OK) {
      //check if role can make stuff
      if (user && user.role != "viewer") {
        const room: Room = {
          name: name,
          organisation: user.organisation,
          department: user.department,
          lab: lab,
          timetable:
            "0,0,0,0,0,0;0,0,0,0,0,0;0,0,0,0,0,0;0,0,0,0,0,0;0,0,0,0,0,0;0,0,0,0,0,0;",
        };
        if (timetable) {
          room.timetable = convertTableToString(timetable);
        }
        if (user.role == "admin" && department) {
          room.department = department;
        }
        //first check if any duplicates there, org dep and name same
        const duplicates = await prisma.room.findFirst({
          where: {
            organisation: room.organisation,
            department: room.department,
            name: name,
          },
        });
        if (duplicates) {
          //bad request
          return {
            status: statusCodes.BAD_REQUEST,
            room: null,
          };
        }
        //if check successfull
        await prisma.room.create({
          data: room,
        });

        //created
        return {
          status: statusCodes.CREATED,
          room: room,
        };
      }
      //else return unauthorised
      return {
        status: statusCodes.UNAUTHORIZED,
        room: null,
      };
    }
    //not ok
    return {
      status: status,
      room: null,
    };
  } catch {
    //internal error
    return {
      status: statusCodes.INTERNAL_SERVER_ERROR,
      room: null,
    };
  }
}

export async function getRooms(
  token: string
): Promise<{ status: number; rooms: Room[] | null }> {
  try {
    //get position of user
    const { status, user } = await auth.getPosition(token);
    if (status == statusCodes.OK && user) {
      //find all the clasrooms in his lab
      let rooms:Room[];
      if (user.role != "admin") {
        rooms = await prisma.room
          .findMany({
            where: {
              organisation: user.organisation,
              department: user.department,
            },
            select: {
              name: true,
              department: true,
              lab: true,
            },
          })
          .then((results) =>
            results.map((room) => ({
              ...room,
              organisation: user.organisation || null,
              timetable: null, // Default value, since it's not queried
            }))
          );
      } else {
        rooms = await prisma.room
          .findMany({
            where: {
              organisation: user.organisation,
            },
            select: {
              name: true,
              department: true,
              lab: true,
            },
          })
          .then((results) =>
            results.map((room) => ({
              ...room,
              organisation: user.organisation || null,
              timetable: null, // Default value, since it's not queried
            }))
          );
      }
      return {
        status: statusCodes.OK,
        rooms: rooms,
      };
    } else {
      return {
        status: status,
        rooms: null,
      };
    }
  } catch {
    //internal error
    return {
      status: statusCodes.INTERNAL_SERVER_ERROR,
      rooms: null,
    };
  }
}

export async function peekRoom(
  token: string,
  name: string,
  department: string|null=null
): Promise<{ status: number; room: Room | null }> {
  try {
    //get position of user
    const { status, user } = await auth.getPosition(token);
    if (status == statusCodes.OK && user) {
      //find all the clasrooms in his lab
      const room = await prisma.room.findFirst({
        where: {
          name: name,
          department: user.role=='admin'?department?department:user.department:user.department,//if user is admin, refer the department passed in peekRoom(if a department isnt passed, the admins department is used), else use users deparment
          organisation: user.organisation,
        },
        select: {
          name: true,
          organisation: true,
          department: true,
          lab: true,
          timetable: true,
        },
      });
      return {
        status: statusCodes.OK,
        room: room,
      };
    } else {
      return {
        status: status,
        room: null,
      };
    }
  } catch {
    //internal error
    return {
      status: statusCodes.INTERNAL_SERVER_ERROR,
      room: null,
    };
  }
}


export async function deleteRooms(
  JWTtoken: string,
  rooms: Room[],
  department: string | null = null
): Promise<{ status: number }> {
  const { status, user } = await auth.getPosition(JWTtoken);
  try {
    if (status == statusCodes.OK && user) {
      if (user.role != "viewer") {
        await prisma.room.deleteMany({
          where: {
            name: {
              in: rooms.map(room=>room.name)
            },
            organisation: user.organisation,
            department: user.role == "admin" ? (department ? department : "no department") : user.department,
          },
        });
        return {
          status: statusCodes.OK,
        };
      }
      // else
      return {
        status: statusCodes.UNAUTHORIZED,
      };
    }
    // else
    return {
      status: status,
    };
  } catch {
    return {
      status: statusCodes.INTERNAL_SERVER_ERROR,
    };
  }
}