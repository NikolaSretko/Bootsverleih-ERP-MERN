import { addNewBoot } from "./addNewBoot.js";
import { getAllBoots } from "./getAllBoots.js";
import { getBootById } from "./getBootById.js";
import { registerUser } from "./registerUser.js";
import { removeOneBootById } from "./removeOneBootById.js";
import { updatedBootById } from "./updatedBootById.js";
import { addReservierungToBoot } from "./addReservierungToBoot.js";

export const BootService = {
    getAllBoots,
    getBootById,
    addNewBoot,
    updatedBootById,
    removeOneBootById,
    addReservierungToBoot
}

export const Userservice = {
    registerUser,
}