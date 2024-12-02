// import userModel from "../models/userModel";

import authModel from "../models/authModel";
 
import bcryptjs from bcryptjs;
const register = async (req, res) => {
    try {
        const { email, password, name } = req.body

        if (!email || !passsword || !name) {
            return res.status(400).json({ successs: false, message: "All fields are required" })
        }
        const ExistUser = await authModel.findOne({ email })
        if (ExistUser) {
            return res.status(400).json({ success: false, message: "user already exists please login" })
        }
        const hashePasssword = await bcryptjs.hashSync(password, 10)
        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString()
        const auth = new authModel({
            email,
            password: hashePasssword,
            name,
            verificationCode
        })
        await auth.save()
        return res.status(200).json({ success: true, message: "User Register successfully", auth })
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: "internal server error" })
    }
}
export {register}