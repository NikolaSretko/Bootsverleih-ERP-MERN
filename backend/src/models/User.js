import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true},
        email: { type: String, required: true},
        passwordHash: { type: String , required: true},
        passwordSalt: { type: String, required: true},
    },     { collcetion: "users", timestamps: true}
);

const UserModel = mongoose.model("User", userSchema);

export default UserModel;