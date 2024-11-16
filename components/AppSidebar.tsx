"use client";

import { MenuIcon } from "lucide-react"
import NewDocumentButton from "./NewDocumentButton"
import {useCollection} from "react-firebase-hooks/firestore";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useSession, useUser } from '@clerk/nextjs'
import { collectionGroup, doc, DocumentData, query, where } from "firebase/firestore";
import { db } from "@/firebase";
import { useEffect, useState } from "react";
import SidebarOption from "./ui/SidebarOption";

interface RoomDocument extends DocumentData {
  createdAt: string;
  role: "owner" | "editor";
  roomId: string;
  userId: string;
}

function AppSidebar() {
  const { isLoaded, isSignedIn, user } = useUser();
  const { session } = useSession();
  
  const [groupedData, setGroupedData] = useState<{
    owner: RoomDocument[];
    editor: RoomDocument[];
  }>({
    owner: [],
    editor: [],
  });
  
  const [data, loading, error] = useCollection(
    user && 
      query(
        collectionGroup(db, "rooms"), 
        where('userId', '==', user?.emailAddresses[0].emailAddress.toString())
      )
  );



  useEffect(() => {

    if (!data) return;
    const grouped = data.docs.reduce<{
      owner: RoomDocument[];
      editor: RoomDocument[];
    }>(
      (acc, curr) => {
        const roomData = curr.data() as RoomDocument;
        if (roomData.role === 'owner') {
          acc.owner.push({
            id: curr.id,
            ...roomData,
          })
        } else {
          acc.editor.push({
            id: curr.id,
            ...roomData,
          })
        }
        
        return acc;
      }, {
        owner: [],
        editor: [],
      }
    )

    setGroupedData(grouped);
  }, [data])

  const menuOptions = (
    <>
      <NewDocumentButton/>
      <div className="flex py-4 flex-col space-y-4 md:max-w-36">
        {/* My Documents */}
        {groupedData.owner.length === 0 ? (
          <h2 className="text-gray-500 font-semibold text-sm">
            No documents found
          </h2>
        ): (
          <>
          <h2 className="text-gray-500 font-semibold text-sm">
            My Documents
          </h2>
          {groupedData.owner.map((doc) => (
            <SidebarOption key={doc.id} id={doc.id} href={`/doc/${doc.id}`}/>
            ))}
          </>
        )}
      </div>
      {/* Shared with me */}
      <>
          <h2 className="text-gray-500 font-semibold text-sm">
            Shared with me
          </h2>
          {groupedData.editor.map((doc) => (
            <SidebarOption key={doc.id} id={doc.id} href={`/doc/${doc.id}`}/>
          ))}
      </>
    </>
  );

  return (   
    <div >
      {/* <div className="md:hidden"> */}
        <Sheet>
          <SheetTrigger><MenuIcon className="p-2 hover:opacity-30 rounded-lg" size={40}/></SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <div>
                  {menuOptions}
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    // </div>
  )
}
export default AppSidebar