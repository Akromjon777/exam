import { NextFunction, Request, Response } from "express"
import { AppDataSource, SECRET_KEY } from "../../config/config"
import { Users } from "../../entities/users.entitiy"
import { ErrorHandling } from "../../errors/error.handling"
import jwt from "../../lib/jwt"
import { img, token } from "../../types/multer"

const USER_TOKEN = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { token } = req?.headers as any
    const user_id = jwt.verify(token) as string | undefined

    console.log(user_id)

    const users = await AppDataSource.getRepository(Users).find({
      where: { id: user_id },
    })

    if (!users.length) {
      return next(new ErrorHandling("Token xato", 400))
    }
    res.status(200).json({
      message: "Greatfull successfulled...)",
      status: 200,
      data: users,
    })
  } catch (error) {
    console.log(error)
    next(new ErrorHandling(error as any, 400))
  }
}

const USER_POST = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { first_name, last_name, email, phone, password } = req.result
    const conplic = await AppDataSource.getRepository(Users).find({
      where: { email: email, password: password },
    })
    if (conplic.length) {
      return next(new ErrorHandling("email va password uzgartirnig", 409))
    }
    const {
      raw: [{ user_id }],
    } = await AppDataSource.getRepository(Users)
      .createQueryBuilder()
      .insert()
      .into(Users)
      .values({
        first_name,
        last_name,
        email,
        phone,
        password,
      })
      .execute()
    res.status(200).json({
      message: "Greatfull successfulled...)",
      status: 201,
      token: jwt.sign(user_id),
    })
  } catch (error) {
    console.log(error)
    next(new ErrorHandling(error as any, 400))
  }
}

const USER_PATCH = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { token } = req?.headers as any
    const user_id = jwt.verify(token) as any
    const user = await AppDataSource.getRepository(Users)
      .findOne({
        where: { id: user_id },
      })
      .catch((error) => next(new ErrorHandling(error.message, 400)))
    const { first_name, last_name, email, phone, gendry, password } = req.result as any
    const { filename } = req.file as img
    const avatar = filename
    const id = user_id
    const users = await AppDataSource.createQueryBuilder()
      .update(Users)
      .set({
        first_name,
        last_name,
        email,
        phone,
        gendry,
        password,
        avatar,
      })
      .where("id = :id", { id: id })
      .execute()

    res.status(200).json({
      message: "Greatfull successfulled...)",
      status: 201,
    })
  } catch (error) {
    console.log(error)
    next(new ErrorHandling(error as any, 400))
  }
}

export { USER_POST, USER_PATCH, USER_TOKEN }
