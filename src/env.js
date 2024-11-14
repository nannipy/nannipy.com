// @ts-check
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

/**
 * @type {import("@t3-oss/env-nextjs").Env}
 */
export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
  },
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});

// Type assertion
/**
 * @typedef {z.infer<typeof env>} EnvType
 */

/**
 * @type {EnvType}
 */
const _processEnv = process.env;