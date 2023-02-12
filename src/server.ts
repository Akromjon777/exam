import express, { Application } from 'express'
import dotenv from 'dotenv/config'
import { ErrorMiddleare } from './middleware/error.middleware'
import model from './controller'
import { AppDataSource } from './config/config'

const app: Application = express()

app.use(express.json())

AppDataSource.initialize()
  .then((): void => console.log('Connected'))
  .catch((error: unknown): void => console.log(error))

app.use(model)

app.use('/*', (req, res, next) => {
  res.status(500).json({
    message: req.url + 'not found url',
  })
})

app.use(ErrorMiddleare)

app.listen(1717, (): void => {
  console.log(1717)
})
