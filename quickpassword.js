import bcrypt from "bcrypt";

const saltRounds = 10;

export async function cryptPassword(plainTextPassword) {
    return bcrypt.hashSync(plainTextPassword, saltRounds);
};

export async function comparePassword(plaintextPassword, hashedPassword) {
    return bcrypt.compareSync(plaintextPassword, hashedPassword);
};
