import { BootModel } from "../models/index.js";

export async function addReservierungToBoot(bootId, reservierungData) {
    const boot = await BootModel.findById(bootId);
    if (!boot) {
        throw new Error('Boot nicht gefunden');
    }
    boot.reservierungen.push({
        status: reservierungData.status,
        start: reservierungData.start,
        end: reservierungData.end,
    });
    await boot.save();
    return boot;
}

