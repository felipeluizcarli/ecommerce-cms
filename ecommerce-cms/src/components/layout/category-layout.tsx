import { CategoryDataTable } from "@/cases/categories/components/data-table/category-data-table";
import { BreadCrumb } from "@/components/layout/bread-crumb";
import { InputGroup, InputGroupInput, InputGroupAddon } from "@/components/ui/input-group";
import { Search, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export function CategoryLayout() {
  const navigate = useNavigate();

  function handleCreate() {
    navigate("/categories/new");
  }

  return (
    <div className="p-4 space-y-4">
      <BreadCrumb title="Categorias" />

      <div className="flex flex-row justify-end gap-4 my-4">
        <InputGroup className="max-w-96">
          <InputGroupInput placeholder="Pesquisar..." />
          <InputGroupAddon>
            <Search className="w-4 h-4" />
          </InputGroupAddon>
        </InputGroup>

        <Button onClick={handleCreate}>
          <Plus className="w-4 h-4 mr-1" />
          Adicionar
        </Button>
      </div>

      <CategoryDataTable />
    </div>
  );
}
