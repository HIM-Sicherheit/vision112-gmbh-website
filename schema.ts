import { boolean, int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export const jobApplications = mysqlTable("jobApplications", {
  id: int("id").autoincrement().primaryKey(),
  fullName: varchar("fullName", { length: 150 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 50 }).notNull(),
  city: varchar("city", { length: 120 }).notNull(),
  position: mysqlEnum("position", ["security", "cleaning", "operations", "other"]).notNull(),
  experience: varchar("experience", { length: 120 }).notNull(),
  message: text("message").notNull(),
  privacyConsent: boolean("privacyConsent").default(false).notNull(),
  status: mysqlEnum("status", ["new", "in_review", "closed"]).default("new").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const customerFeedback = mysqlTable("customerFeedback", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 150 }),
  email: varchar("email", { length: 320 }),
  rating: int("rating").notNull(),
  message: text("message").notNull(),
  privacyConsent: boolean("privacyConsent").default(false).notNull(),
  status: mysqlEnum("status", ["pending", "approved", "rejected"]).default("pending").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type InsertJobApplication = typeof jobApplications.$inferInsert;
export type InsertCustomerFeedback = typeof customerFeedback.$inferInsert;
