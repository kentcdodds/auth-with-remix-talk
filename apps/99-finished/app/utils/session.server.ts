import bcrypt from "bcryptjs";
import { createCookieSessionStorage, redirect } from "@remix-run/node";
import { db } from "./db.server";

type LoginForm = {
  username: string;
  password: string;
};

export async function login({ username, password }: LoginForm) {
  const user = await db.user.findFirst({ where: { username } });
  if (!user) return null;

  const isCorrectPassword = await bcrypt.compare(password, user.passwordHash);
  if (!isCorrectPassword) return null;

  return user;
}

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) throw new Error("SESSION_SECRET must be set");

const storage = createCookieSessionStorage({
  cookie: {
    name: "RJ_SESSION",
    secrets: [sessionSecret],
    secure: true,
    httpOnly: true,
    path: "/",
    maxAge: 1000 * 60 * 60 * 24 * 30,
  },
});

export async function createUserSession(userId: string, redirectTo: string) {
  const session = await storage.getSession();
  session.set("userId", userId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}

export async function requireUserId(request: Request) {
  const session = await storage.getSession(request.headers.get("Cookie"));
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") {
    throw redirect("/login");
  }
  return userId;
}
