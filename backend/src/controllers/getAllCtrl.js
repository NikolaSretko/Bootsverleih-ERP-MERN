import { BootService } from "../services/index.js";



export async function getAllBootsCtrl(req, res) {
    try {
        const result = await BootService.getAllBoots();
        res.json({ success: true, result });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error,
            message: error.message || "Resource not found"
        })
    }
};