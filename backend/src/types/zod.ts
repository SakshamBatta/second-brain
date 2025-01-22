import zod from "zod";

export const userTypes = zod.object({
  username: zod
    .string()
    .min(3, "Username must be atleast 3 characters long")
    .max(10, "Username must be atmost 10 characters long"),
  password: zod
    .string()
    .min(8, "Password must be atleast 8 characters long")
    .max(20, "Password must be atmost 20 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
      "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});

export const contentTypes = zod.object({
  link: zod.string(),
  title: zod.string(),
});

export const tagTypes = zod.object({
  title: zod.string(),
});
