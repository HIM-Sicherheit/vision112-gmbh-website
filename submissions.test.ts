import { beforeEach, describe, expect, it, vi } from "vitest";

const { createJobApplication, createCustomerFeedback } = vi.hoisted(() => ({
  createJobApplication: vi.fn(),
  createCustomerFeedback: vi.fn(),
}));

vi.mock("./db", () => ({
  createJobApplication,
  createCustomerFeedback,
  getUserByOpenId: vi.fn(),
  upsertUser: vi.fn(),
}));

import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

const context = {
  user: null,
  req: { protocol: "https", headers: {} },
  res: { clearCookie: vi.fn() },
} as unknown as TrpcContext;

describe("public submissions", () => {
  beforeEach(() => vi.clearAllMocks());

  it("accepts a complete job application with privacy consent", async () => {
    const caller = appRouter.createCaller(context);
    await expect(caller.careers.submit({
      fullName: "Anna Beispiel",
      email: "anna@example.de",
      phone: "01701234567",
      city: "Essen",
      position: "security",
      experience: "1–3 Jahre",
      message: "Ich interessiere mich für eine Tätigkeit im Objektschutz.",
      privacyConsent: true,
    })).resolves.toEqual({ success: true });
    expect(createJobApplication).toHaveBeenCalledOnce();
  });

  it("rejects feedback without privacy consent", async () => {
    const caller = appRouter.createCaller(context);
    await expect(caller.feedback.submit({
      name: "Gast",
      rating: 5,
      message: "Sehr zuverlässige Zusammenarbeit.",
      privacyConsent: false as true,
    })).rejects.toThrow();
    expect(createCustomerFeedback).not.toHaveBeenCalled();
  });

  it("stores valid feedback as pending moderation", async () => {
    const caller = appRouter.createCaller(context);
    await expect(caller.feedback.submit({
      name: "Gast",
      email: "",
      rating: 4,
      message: "Professioneller und freundlicher Service.",
      privacyConsent: true,
    })).resolves.toEqual({ success: true, moderation: "pending" });
    expect(createCustomerFeedback).toHaveBeenCalledWith(expect.objectContaining({ status: "pending" }));
  });
});
