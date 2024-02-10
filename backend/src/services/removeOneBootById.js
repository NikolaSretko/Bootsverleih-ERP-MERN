import { BootModel } from "../models/index.js";

export async function removeOneBootById(bootId) {
    const deletedBoot = await BootModel.findByIdAndDelete(bootId);
    return deletedBoot;
}