import AuthRouter from "./Auth/Auth.router.js"
import ServicesRouter from "./Services/Services.Router.js"
import ProductsRouter from "./Products/Products.Router.js"
import CartRouter from "./Cart/Cart.Router.js"
import CouponRouter from "./Coupon/Coupon.router.js"
import connectDb from "../../DB/Connection.js"
import { sendEmail } from "../Services/Email.js"

const initApp = async(app, express)=>{
    app.use(express.json())
    connectDb()
    app.get("/", (req, res) =>{
        return res.status(200).json({message:"welcome"})
    })
    
    app.use("/auth", AuthRouter)
    app.use("/Services", ServicesRouter)
    app.use("/Products", ProductsRouter)
    app.use("/Cart", CartRouter)
    app.use("/Coupon", CouponRouter)

    app.get("*", (req, res) =>{
        return res.status(500).json({message:"page not found"})
    })
    

}
export default initApp 