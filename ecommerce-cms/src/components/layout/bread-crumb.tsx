import { CategoryDataTable } from "@/cases/categories/components/data-table/category-data-table";
import { BreadCrumb } from "@/components/layout/bread-crumb";

export function CategoryLayout() {
    return(
        <div className="flex flex-col gap-4">

            <BreadCrumb title="Category" />

            <div>
                <CategoryDataTable />
            </div>
        </div>
    )
}