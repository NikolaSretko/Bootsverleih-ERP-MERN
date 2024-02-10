import { Usermodel } from "../models/index.js";
import { generateRandomSalt, hashPassword } from "../utils/index.js";

export async function registerUser({ name, email, password }) {
    const passwordSalt = generateRandomSalt();
    const passwordHash = hashPassword(password, passwordSalt);
    const user = new Usermodel({
        name,
        email,
        passwordHash,
        passwordSalt,
    })
    await user.save();
    return userToProfileInfo(user);
};

function userToProfileInfo({ name, email }) {
    return { name, email }
}