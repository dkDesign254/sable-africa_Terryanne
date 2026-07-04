import { createServerFn } from "@tanstack/react-start";
import { writeFile, readFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";

const DATA_DIR = process.cwd() + "/data";
const SUBSCRIBERS_FILE = DATA_DIR + "/subscribers.json";

interface Subscriber {
  email: string;
  date: string;
}

async function getSubscribers(): Promise<Subscriber[]> {
  try {
    const data = await readFile(SUBSCRIBERS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export const subscribeToNewsletter = createServerFn({ method: "POST" })
  .validator((d: unknown) => d as { email?: string })
  .handler(async ({ data }) => {
    const email = data.email?.trim().toLowerCase();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { error: "Invalid email address" };
    }
    if (!existsSync(DATA_DIR)) {
      await mkdir(DATA_DIR, { recursive: true });
    }
    const subs = await getSubscribers();
    if (subs.some((s) => s.email === email)) {
      return { message: "Already subscribed" };
    }
    subs.push({ email, date: new Date().toISOString() });
    await writeFile(SUBSCRIBERS_FILE, JSON.stringify(subs, null, 2));
    return { message: "Subscribed successfully" };
  });