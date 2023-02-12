import login from "./login/routes"
import lower from "./lower/routes"
import products from "./products/routes"
import registrasiya from "./registration/routes"
import subCategory from "./subCategory/routes"
import category from "./category/routes"
import comments from "./comments/routes"
import korzinka from "./basket/routes"
import discounts from "./discounts/routes"
import darajasi from "./level/routes"

export default [login, korzinka, darajasi, discounts, lower, comments, products, registrasiya, subCategory, category]
