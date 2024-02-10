import { BootService } from "../services/index.js";




export async function patchBootCtrl(req, res) {
    try {

        const bootId = req.params.bootId;
        const updatedData = req.body;
        const result = await BootService.updatedBootById(bootId, updatedData);
        res.status(201).json({ updatedBoot: updatedData, result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error, message: error.message || "Error saving data " })
    }
}