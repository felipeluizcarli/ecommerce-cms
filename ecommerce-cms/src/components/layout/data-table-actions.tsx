import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { EditIcon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

type DataTableActionProps = {
  itemId: string | number;
};

export function DataTableAction({ itemId }: DataTableActionProps) {
  const location = useLocation();
  const navigate = useNavigate();

  function handleNavigateToid() {
    const path = location.pathname;
    navigate(`${path}/${itemId}`);
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNavigateToid}
        >
          <EditIcon />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Editar/remover registro</p>
      </TooltipContent>
    </Tooltip>
  );
}
