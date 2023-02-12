import { NextFunction, Request, Response } from "express"
import { AppDataSource } from "../config/config.js"
import { Users } from "../entities/users.entitiy.js"
import { ErrorHandling } from "../errors/error.handling.js"
import jwt from "../lib/jwt.js"

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { token } = req.headers
    if (!token) {
      return next(new ErrorHandling("Token is required", 400))
    }
    const user_id = jwt.verify(token as string) as any

    const users = await AppDataSource.getRepository(Users)
      .findOne({
        where: { id: user_id },
      })
      .catch((error) => next(new ErrorHandling(error.message, 400)))

    if (users == null) {
      return next(new ErrorHandling("Your token is incorrect", 400))
    }

    if (users.email != "akromjoncikrahimdijonob@gmail.com") {
      return next(new ErrorHandling("You are not an admin(", 400))
    }
    return next()
  } catch (error) {
    return next(new ErrorHandling("The token is invalid", 500))
  }
}