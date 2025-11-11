import type { CustomerDTO } from "@/cases/customers/dtos/customer";

export interface OrderItem{
    id: string;
    price: number;
    quantity: number;
    value: number;
}   
export interface Order {
    id?: string;
    customer: CustomerDTO;
    status: string;
    total: number;
    items: OrderItem[];
    createdAt: Date;
    updatedAt: Date;
}