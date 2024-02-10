import { BootService } from "../services/index.js";

export async function addReservierungToBootCtrl(req, res) {
    try {
        const bootId = req.params.bootId;
        const reservierungData = req.body;
        const boot = await BootService.addReservierungToBoot(bootId, reservierungData);
        res.status(201).json({ boot });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message || "Fehler beim Hinzufügen der Reservierung" });
    }
}
