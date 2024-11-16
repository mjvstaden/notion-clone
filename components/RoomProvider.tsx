'use client'

import {
    ClientSideSuspense,
    RoomProvider as RoomproviderWrapper,
} from "@liveblocks/react/suspense";
import LoadingSpinner from "./LoadingSpinner";
import LiveCursorProvider from "./LiveCursorProvider";
import React from "react";

function RoomProvider({roomId, children}: 
    {
        roomId: string,
        children: React.ReactNode,
    }
) {
  return (
    <RoomproviderWrapper
    id={roomId}
    initialPresence={{
        cursor:null
    }}
    initialStorage={{

    }}
    >
        <ClientSideSuspense
        fallback={<LoadingSpinner/>}>
            <LiveCursorProvider>
                {children}
            </LiveCursorProvider>
        </ClientSideSuspense>
    </RoomproviderWrapper>
  )
}
export default RoomProvider