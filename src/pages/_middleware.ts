import type { NextFetchEvent, NextRequest } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  console.info({ req, ev });

  return new Response("After configured workflow!");
}
