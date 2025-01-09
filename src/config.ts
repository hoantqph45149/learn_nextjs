import { z } from "zod";

const configSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string(),
  NEXT_PUBLIC_URL: z.string(),
});

const configproject = configSchema.safeParse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
});

if (!configproject.success) {
  console.error(configproject.error.issues);
  throw new Error("Các giá trị khai báo trong file .env không hợp lệ");
}

export const envConfig = configproject.data;
export default envConfig;
