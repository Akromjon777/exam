import path from "path"
import {DataSource} from "typeorm"

const AppDataSource = new DataSource({
    type:"postgres",
    host: "john.db.elephantsql.com",
    port:5432,
    password:"QnxzvprMjpGzkD6U7IFWjSWbVePglSpP",
    username:"iuwelnfo",
    database:"iuwelnfo",
    entities: [
      path.resolve(__dirname, '..', 'entities', '*.entitiy.{ts,js}'),
    ],
    migrations: [
        path.resolve(__dirname, '..', 'migrations', '**/*.{ts,js}'),
      ],
    logging:true,
    synchronize: false,

})

const SECRET_KEY = String(process.env.SECRET_KEY) || ")"

export {AppDataSource, SECRET_KEY}
