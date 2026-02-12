import {z} from "zod";

// z object is the validation method
export const registerValidator = z.object(
    {
    username: z.string()
    .min(4, "Please enter more than 4 letters."),
    password: z.string()
    .min(6, "Password must be 6 letters long."),
    email: z.email(),
    phone: z.string()
    .regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),
    }
);