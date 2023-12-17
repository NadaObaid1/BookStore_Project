import AuthRouter from "./Auth/Auth.router.js"
import connectDb from "../../DB/Connection.js"
import { sendEmail } from "../Services/Email.js"

const initApp = async(app, express)=>{
    app.use(express.json())
    connectDb()
    app.get("/", (req, res) =>{
        return res.status(200).json({message:"welcome"})
    })
    
    app.use("/auth", AuthRouter)

    app.get("*", (req, res) =>{
        return res.status(500).json({message:"page not found"})
    })
    

}
export default initApp 