import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { CategoryDataTable } from "./data-table/category-data-table"
import { Outlet } from "react-router-dom"

export function CategoryLayout() {
    return (
        <div className="flex flex-col py-4 gap-4">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />                    
                    <BreadcrumbItem>
                        <BreadcrumbPage>Categorias</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div>
                <CategoryDataTable />
                <Outlet />
            </div>
        </div>
    )
}