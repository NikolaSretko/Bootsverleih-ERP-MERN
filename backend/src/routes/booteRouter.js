import express from "express";
import { bootController } from "../controllers/index.js";
import upload from "../middleware/multerConfig.js";

const booteRouter = express.Router();

booteRouter.get("/", bootController.getAllBootsCtrl);

booteRouter.get("/:bootId", bootController.getBootByIdCtrl);

booteRouter.post(
  "/",
  upload.single("upload_img"),
  bootController.postNewBootCtrl
);

booteRouter.post("/:bootId", bootController.addReservierungToBootCtrl);

booteRouter.patch("/:bootId", bootController.patchBootCtrl);

booteRouter.delete("/:bootId", bootController.deleteOneBootCtrl);

export default booteRouter;
