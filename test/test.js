import { cryptPassword, comparePassword } from "../quickpassword.js";

let plain_text_input = 'somepassword';

console.log(`Using: ${plain_text_input}`);

let passwordToStore = await cryptPassword(
    plain_text_input
);

console.log(`Store: ${passwordToStore}`);

let passwordValid = await comparePassword(
    plain_text_input,
    passwordToStore
);

console.log(`Test: ${passwordValid}`);
