import { BootService } from "../services/index.js";


export async function getBootByIdCtrl(req, res) {
    try {
        const result = await BootService.getBootById(req.params.bootId);
        res.json({ success: true, result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error, message: error.message || `Resource with the ID:${req.params.bootId} not found` })
    }
}; 