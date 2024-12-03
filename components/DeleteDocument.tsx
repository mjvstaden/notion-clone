'use client'

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { useState, useTransition } from "react"
import { Button } from "./ui/button";
  
function DeleteDocument() {

    const [isOpen, setIsOpen] = useState(false);
    const [isPending, startTransition] = useTransition()
    const handleDelete = async () => {

    }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <Button asChild variant={"destructive"}>
            <DialogTrigger>Delete</DialogTrigger>
        </Button>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Are you absolutely sure you want to Delete?</DialogTitle>
                <DialogDescription>
                    This will delete te document and all its content, removing all users from the document
                </DialogDescription>
            </DialogHeader>

            <DialogFooter>
                <Button 
                    type="button"
                    variant={"destructive"}
                    onClick={handleDelete}
                    disabled={isPending}
                    >
                        {isPending ? "Deleting..." : "Delete"}
                </Button>

                <DialogClose asChild>
                    <Button type="button" variant="secondary">
                        Close
                    </Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}
export default DeleteDocument