import { BootModel } from "../models/index.js";

export async function addNewBoot(newbootinfo) {
    const newBoot = new BootModel(newbootinfo);
    await newBoot.save();
    return newBoot;
};


