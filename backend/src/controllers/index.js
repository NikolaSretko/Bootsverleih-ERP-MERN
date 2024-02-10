import { deleteOneBootCtrl } from "./deleteOneBootCtrl.js";
import { getAllBootsCtrl } from "./getAllCtrl.js";
import { getBootByIdCtrl } from "./getBootByIdCtrl.js";
import { patchBootCtrl } from "./patchBootCtrl.js";
import { postNewBootCtrl } from "./postNewBootCtrl.js";
import { postRegisterUserCtrl } from "./postRegisterUserCtrl.js";
import { addReservierungToBootCtrl } from "./addReservierungToBootCtrl.js";





export const bootController = {
    getAllBootsCtrl,
    getBootByIdCtrl,
    postNewBootCtrl,
    patchBootCtrl,
    deleteOneBootCtrl,
    addReservierungToBootCtrl
}

export const userController = {
    postRegisterUserCtrl
}