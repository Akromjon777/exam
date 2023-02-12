import { NextFunction, Request, Response } from "express"
import { number } from "joi"
import { AppDataSource } from "../../config/config"
import { Products } from "../../entities/products.entitiy"
import { ErrorHandling } from "../../errors/error.handling"

const DISCOUNTS_GET = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await AppDataSource.getRepository(Products)
    .createQueryBuilder()
    .orderBy("Products.chegirma",  "DESC")
    .getMany()

    res.status(200).json({
      status: 200,
      message: "Greatfull succssefulled...",
      data: products,
    })
  } catch (error) {
    console.log(error)
    next(new ErrorHandling(error as string, 400))
  }
}

const DISCOUNTS_PUT = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const { chegirma } = req.result as any

    if(chegirma <  0  ||  100 <= chegirma) {
     return  next(new ErrorHandling("Please enter a number greater than 1 and less than 100", 400))
    }

    const products = await AppDataSource.getRepository(Products).find({
      where: { id: id },
    })

    let asd = [] as any
    const productsFilter = products.filter((e) => {
      if (e.protuctes_price) {
        asd.push(e.protuctes_price)
        return e.protuctes_price
      }
    })

    let disContPrice = +((asd[0] * (100 - chegirma)) / 100).toFixed(2)

    const discounts = await AppDataSource.getRepository(Products)
      .createQueryBuilder()
      .update(Products)
      .set({ chegirma: chegirma, newPriceCount: disContPrice })
      .where("id = :id", { id: id })
      .execute()
      .catch((error) => next(new ErrorHandling(error.message as string, 403)))

    res.status(200).json({
      status: 201,
      message: "Greatfull successfulled...)",
      data: `${disContPrice} new price`,
    })
  } catch (error) {
    console.log(error)
    next(new ErrorHandling(error as string, 400))
  }
}

const DISCOUNTS_DELETE = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params

    const chegirma = 0
    const newPriceCount = 0

    const discounts = await AppDataSource.getRepository(Products)
      .createQueryBuilder()
      .update(Products)
      .set({ chegirma: chegirma, newPriceCount })
      .where("id = :id", { id: id })
      .execute()
      .catch((error) => next(new ErrorHandling(error.message as string, 403)))

    res.status(200).json({
      status: 200,
      message: "Greatfull successfulled...)",
    })
  } catch (error) {
    console.log(error)
    next(new ErrorHandling(error as string, 400))
  }
}

export { DISCOUNTS_PUT, DISCOUNTS_DELETE, DISCOUNTS_GET }
