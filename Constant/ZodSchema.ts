"use client";
import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(2).max(256),
  lastName: z.string().min(2).max(256),
  number: z.string(),
  address: z.string(),
  email: z.string().optional(),
  type: z.string(),
});
