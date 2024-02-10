import { Userservice } from "../services/index.js";




export async function postRegisterUserCtrl(req, res) {
    try {
        const result = await Userservice.registerUser(req.body);
        res.json({ success: true, result});
    } catch (error) {
        console.log(error);
        res.status(500).json( { sucess: false, error, messsage: error.message})
    }
};