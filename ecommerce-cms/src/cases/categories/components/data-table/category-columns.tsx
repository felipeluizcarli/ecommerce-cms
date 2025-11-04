import type { ColumnDef } from "@tanstack/react-table";
import type { CategoryDTO } from "../../dtos/category.dto";
import { DataTable } from "@/components/ui/data-table";
import { DataTableAction } from "@/components/layout/data-table-actions";

export const categoryColumns: ColumnDef<CategoryDTO>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Nome da Categoria",
  },
  {
    id: "name",
    enableHiding: false,
    cell: ({ row }: any) => {
      const category = row.original;

      return (
        <div className="flex justify-end ar-4">
          <DataTableAction itemId={category.id!} />
        </div>
      );
    },
  },
];
