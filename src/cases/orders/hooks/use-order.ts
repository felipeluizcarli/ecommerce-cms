import type { Order } from "../dtos/Order.dto";


export function useOrders() {
    return useQuery<OrderDto[]>({
        queryKey: ['order'],
        queryFn: OrderService.list
    });
}

export function useOrdes(id: string) {
    return useQuery<OrderDto>({
        queryKey: ['brand', id],
        queryFn: () => OrderService.getById(id),
        enabled: !!id //-> or Boolean(id)
    });
}

