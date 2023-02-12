import { NextFunction, Request, Response } from "express"
import { AppDataSource } from "../../config/config"
import { Korzinka } from "../../entities/basket.entitiy"
import { Products } from "../../entities/products.entitiy"
import { Users } from "../../entities/users.entitiy"
import { ErrorHandling } from "../../errors/error.handling"
import jwt from "../../lib/jwt"

const ZAKAS_POST = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const { token } = req.headers as any

    const usersId = jwt.verify(token) as any

    const { productsId,  soni } = req.result as any

    console.log(productsId, usersId)

    const zakas = await AppDataSource.getRepository(Korzinka).findOne({
      where: { products: { id: productsId }, users: { id: usersId } },
    })

    if (!zakas) {
      const products_id = (await AppDataSource.getRepository(Products).findOne({
        where: { id: productsId },
      })) as any

      console.log(products_id)

      const id_prod = products_id?.nechta_sotdi + 1

      const users = await AppDataSource.getRepository(Products)
        .createQueryBuilder()
        .update(Products)
        .set({
          nechta_sotdi: id_prod,
        })
        .where("id = :id", { id: productsId })
        .execute()


      const zakas = await AppDataSource.getRepository(Korzinka)
        .createQueryBuilder()
        .insert()
        .into(Korzinka)
        .values({ products: productsId, users: usersId, zakas_soni: soni })
        .returning(["*"])
        .execute() 
      return res.status(200).json({
        message: "Greatfull successfulled...)",
        status: 201,
      })
    }

    if(zakas) {

        const products_id = await AppDataSource.getRepository(Products).findOne({
            where: {id : productsId},
          }) as any

          console.log(products_id);

          const id_prod = (products_id?.nechta_sotdi + 1)

          console.log(id_prod);

          const users = await AppDataSource.getRepository(Products)
          .createQueryBuilder()
          .update(Products)
          .set({
            nechta_sotdi: id_prod
          })
          .where("id = :id", { id: productsId })
          .execute()

          const zak = zakas.zakas_soni + 1

          const korzinka = await AppDataSource.getRepository(Korzinka)
          .createQueryBuilder()
          .update(Korzinka)
          .set({
            zakas_soni:zak
          })
          .where("id = :id", { id: zakas.id })
          .execute()

          return  res.status(200).json({
            message: "Greatfull successfulled...)",
            status: 201,
          })

    }

  } catch (error) {
    console.log(error)
    next(new ErrorHandling(error as string, 400))
  }
}

const ZAKAS_GET = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { token } = req.headers as any

    const user_id = jwt.verify(token) as string

    
    const zakaslar = await AppDataSource.getRepository(Users).findOne({
        where:{id: user_id},
        relations:{korzinka:{products:true}},
        select:{
            korzinka:{
                zakas_soni:true,
                products:{
                    img:true,
                    chegirma:true,
                    protuctes_brendname:true,
                    protuctes_price:true,
                    newPriceCount:true,
                }
            }
        }
    })
    return res.status(200).json({
        message: "Greatfull successfulled...)",
        status: 201,
        data: zakaslar
      })

  } catch (error) {
    console.log(error)
    next(new ErrorHandling(error as string, 400))
  }
}

export { ZAKAS_GET, ZAKAS_POST }
