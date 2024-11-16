import RoomProvider from "@/components/RoomProvider";
import { auth } from "@clerk/nextjs/server";
import React from "react";

async function DocLayout({ children, params }: {
  children: React.ReactNode,
  params: { id: string }
}) {
  // If `auth.protect()` is asynchronous, ensure it is awaited
  await auth.protect();

  // Use `await` if `params` requires resolving asynchronously (e.g., if fetched from a server or middleware)
  const resolvedParams = await params; // Ensure this is necessary in your context

  return <RoomProvider roomId={resolvedParams.id}>{children}</RoomProvider>;
}

export default DocLayout;
