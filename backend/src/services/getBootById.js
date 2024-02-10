import { BootModel } from "../models/index.js";

export async function getBootById(bootId) {
    const foundboot = await BootModel.findById(bootId);
    if (!foundboot) throw new Error("Couldn find Boot by Id", bootId)
    return foundboot;
}