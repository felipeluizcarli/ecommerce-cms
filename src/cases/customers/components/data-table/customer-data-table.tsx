import { DataTable } from "@/components/ui/data-table";
import { useBrands } from "../../hooks/use-customer";
import { customerColumns } from "./customer-columns";

type CustomerDataTableProps = {
  searchTerm?: string;
}
export function CustomerDataTable({
  searchTerm
}:CustomerDataTableProps) {

    const {data: brands, isLoading} = useBrands();

    return (
        <div>
            { isLoading ? (
                <p>Carregando...</p>
            ) : (
                <DataTable columns={customerColumns} 
                    data={brands!.filter((p) => p.name.toLowerCase().includes(searchTerm?.toLowerCase() ?? ''))}  
                />
            )}
        </div>

    )
}