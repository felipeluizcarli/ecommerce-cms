import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"

import { Button } from "@/components/ui/button"
import { useLocation, useNavigate } from "react-router-dom"
import { use } from "react"

type SidebarFormProps = {
  title: string
  children: React.ReactNode
  oneSave?: () => void;

}

export function SidebarForm({
    title,
    children,
}: SidebarFormProps) {
  const navigate = useNavigate();
  const location = useLocation()

  function handleCloseForm(open: boolean) {
    if (!open) {
      const currentPath = location.pathname
      const newPath = currentPath.substring(0, currentPath.lastIndexOf('/'))
      navigate(newPath)
    }
  }

  return (
    <Sheet Open={true} onOpenChange={handleCloseForm}>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>(title)</SheetTitle>
          <SheetDescription>
            Preencha os campos abaixo e clique em salvar.
          </SheetDescription>
        </SheetHeader>

        <SheetFooter>
          <div className="flex flex-row gap-4">
            <Button
              onClick=[oneSave]
            >
              Salvar
            </Button>

            [children]

            <SheetClose asChild>
              <button value="outline">
                Cancelar
              </button>
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
