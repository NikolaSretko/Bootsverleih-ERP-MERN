import crypto from "crypto";

export function hash(inputString) {
    return crypto.createHash("sha512").update(inputString).digest("hex")
};

export function generateRandomSalt() {
    const BYTES_LENGTH = 64;
    return crypto.randomBytes(BYTES_LENGTH).toString("base64");
};

export function hashPassword(password, salt) {
    if (!password || !salt)
    throw new Error("Password and Salt have to be defined");
return hash(`${password}${salt}`);
};