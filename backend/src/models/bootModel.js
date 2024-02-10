import mongoose from "mongoose";

const bootSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    baujahr: {
      type: Number,
      required: true,
    },
    seriennummer: {
      type: String,
    },
    material: {
      type: String,
      required: true,
      enum: ["GFK", "Holz", "Metall", "Pappe", "Kunststoff"],
    },
    bootsart: {
      type: String,
      required: true,
      enum: [
        "Tretboot",
        "Segelboot",
        "Luftkissenboot",
        "Schnellboot",
        "Motorboot",
        "Kreuzfahrtschiffe",
        "Containerschiff",
        "Geisterschiff"

      ],
    },
    upload_img: {
      type: String,
      required: false,
    },
    reservierungen: [{
      status: { type: Boolean, default: false },
      start: { type: Date, required: true },
      end: { type: Date, required: true },
    }],
  },
  { timestamps: true }
);

const BootModel = mongoose.model("BootModel", bootSchema, "boote");

export default BootModel;
