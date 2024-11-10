import jwt from 'jsonwebtoken'
import PrismaClientManager from '../pgConnect';
import bcrypt from 'bcrypt'

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

export const login = async (email: string, pass: string): Promise<string | null> => {

  const user = await prisma.user.findFirst({
    where: {
      email
    }
  })

  if (!user) {
    throw new Error("User not found")
  }

  const validatePass = await bcrypt.compare(pass, user?.hashedPass || "");

  if (!validatePass) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign({
    email: user?.email
  }, secretKey);

  return token;
};

export const register = async (name: string, email: string, password: string) => {
  // check if fields are following proper rules

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

  return token;
}
