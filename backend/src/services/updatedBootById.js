import { BootModel } from "../models/index.js";

export async function updatedBootById(bootId, updatedData) {
    const updatedBoot = await BootModel.findByIdAndUpdate(bootId, updatedData, { new: true });
    return updatedBoot;
}