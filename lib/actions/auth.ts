import jwt from 'jsonwebtoken'
import PrismaClientManager from '../pgConnect';
import bcrypt from 'bcryptjs'
import { statusCodes } from '@/app/types/statusCodes';

const secretKey = process.env.JWT_SECRET_KEY || ""
const prisma = PrismaClientManager.getInstance().getPrismaClient();

export const checkAuthentication = async (token: string): Promise<boolean> => {

  try {
    jwt.verify(token, secretKey); // Verifies the token using the secret key
    return true; // If token is valid, return true
  } catch {
    return false; // If token verification fails, return false
  }
};

export const login = async (email: string, pass: string): Promise<{ status: number, token: string }> => {

  try {
    const user = await prisma.user.findFirst({
      where: {
        email
      }
    })


    if (!user) {
      return {
        status: statusCodes.NOT_FOUND,
        token: ""
      }
    }

    const validatePass = await bcrypt.compare(pass, user?.hashedPass || "");

    if (!validatePass) {
      return {
        status: statusCodes.UNAUTHORIZED,
        token: ""
      }
    }

    const token = jwt.sign({
      email: user?.email
    }, secretKey);

    return {
      status: statusCodes.OK,
      token
    }
  }
  catch (e) {
    return {
      status: statusCodes.INTERNAL_SERVER_ERROR,
      token: ""
    }
  }

};

export const register = async (name: string, email: string, password: string): Promise<{ status: number, token: string }> => {
  // check if fields are following proper rules

  try {
    const hashedPass = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        name,
        email,
        hashedPass,
        hasAccess: false
      }
    })

    const token = jwt.sign({
      email
    }, secretKey);

    return {
      status: statusCodes.OK,
      token
    }

  }
  catch (e) {
    return {
      status: statusCodes.INTERNAL_SERVER_ERROR,
      token: ""
    }
  }
}
