import { BootService } from "../services/index.js";

export async function postNewBootCtrl(req, res) {
  try {
    const bootinfo = req.body;

    if (req.file) {
      bootinfo.upload_img = req.file.filename;
    }
    console.log(req);
    const result = await BootService.addNewBoot(bootinfo);
    res.status(201).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error,
      message: error.message || "Error saving data",
    });
  }
}
