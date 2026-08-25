import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { createCustomerFeedback, createJobApplication } from "./db";
import { z } from "zod";

export const jobApplicationSchema = z.object({
  fullName: z.string().trim().min(2).max(150),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().min(6).max(50),
  city: z.string().trim().min(2).max(120),
  position: z.enum(["security", "cleaning", "operations", "other"]),
  experience: z.string().trim().min(1).max(120),
  message: z.string().trim().min(10).max(3000),
  privacyConsent: z.literal(true),
});

export const customerFeedbackSchema = z.object({
  name: z.string().trim().max(150).optional(),
  email: z.union([z.string().trim().email().max(320), z.literal("")]).optional(),
  rating: z.number().int().min(1).max(5),
  message: z.string().trim().min(5).max(1500),
  privacyConsent: z.literal(true),
});

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),
  careers: router({
    submit: publicProcedure.input(jobApplicationSchema).mutation(async ({ input }) => {
      await createJobApplication(input);
      return { success: true } as const;
    }),
  }),
  feedback: router({
    submit: publicProcedure.input(customerFeedbackSchema).mutation(async ({ input }) => {
      await createCustomerFeedback({
        ...input,
        name: input.name || null,
        email: input.email || null,
        status: "pending",
      });
      return { success: true, moderation: "pending" } as const;
    }),
  }),
});

export type AppRouter = typeof appRouter;
