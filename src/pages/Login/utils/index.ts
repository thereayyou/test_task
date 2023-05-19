import {passwordPattern} from "../const";
import {emailPattern} from "../../../patterns";

export const isValidPassword = (value: string) => !passwordPattern.test(String(value));

export const isValidEmail = (value: string) => !emailPattern.test(String(value).toLowerCase())


