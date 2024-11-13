import { MenuIcon } from "lucide-react"
import NewDocumentButton from "./NewDocumentButton"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
  

function AppSidebar() {

const menuOptions = (
  <>
    <NewDocumentButton/>

    {/* My Documents */}

    {/* Shared with me */}
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