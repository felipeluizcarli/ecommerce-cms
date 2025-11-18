import type { ColumnDef } from "@tanstack/react-table";
import { DataTableAction } from "@/components/layout/data-table-actions";
import type { OrderDTO } from "../../dtos/order.dto";
import { FormattedNumber, IntlProvider } from "react-intl";
import { DataTableBadge } from "@/components/layout/data-table-badge";

export const brandColumns: ColumnDef<OrderDTO>[] = [
    {
        accessorKey: 'id',
        header: 'Id'
    },
    {
        accessorKey: 'createdAt',
        header: 'Data Pedido',
        cell: ({ row }) => {
            const order = row.original;

            return(
                <span>{new Date(order.createdAt).toLocaleDateString('pt-BR')}</span>
            )
        }
    },
    {
        accessorKey: 'custumer.name',
        header: 'Nome do Cliente'

    },
    {
        accessorKey: 'total',
        header: 'Total',
        cell: ({ row }) => {
            const order = row.original;

            return(
                <span>
                    <IntlProvider locale="pt-BR">
                        <FormattedNumber value={order.total} 
                          style="currency" currency="BRL" 
                        />
                    </IntlProvider>
                </span>
            )
        }
    },
    {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => {
            const order = row.original;

            return(
                <DataTableBadge status={order.status} />
            )
        }
    },
    {
        id: 'actions',
        enableHiding: false,
        cell: ({ row }) => {
            const brand = row.original;

            return(
                <div className="flex justify-end mr-4">
                    <DataTableAction itemId={brand.id!} />
                </div>
            )
        }
    }
];