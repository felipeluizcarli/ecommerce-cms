import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { BrandService } from "../services/customer.service";
import { toast } from "react-toastify";
import type { CustomerDTO } from "../dtos/customer";


export function useBrands() {
    return useQuery<CustomerDTO[]>({
        queryKey: ['brands'],
        queryFn: BrandService.list
    });
}

export function useBrand(id: string) {
    return useQuery<CustomerDTO>({
        queryKey: ['brand', id],
        queryFn: () => BrandService.getById(id),
        enabled: !!id //-> or Boolean(id)
    });
}

export function useCreateBrand(){
    const queryClient = useQueryClient();

    return useMutation<CustomerDTO, Error, Omit<CustomerDTO, 'id'>>({
        mutationFn: (brand: Omit<CustomerDTO, 'id'>) => BrandCustomerDTOcreate(brand),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['brands']});
            toast.success('Registro adicionado com sucessso!')
        }, 
        onError: (error) => {
            toast.error(`Erro ao adicionar: ${error.message}`)
        }
    });
}

export function useUpdateBrand(){
    const queryClient = useQueryClient();

    return useMutation<BrandDTO, Error, {id: string, brand: BrandDTO}>({
        mutationFn: ({id, brand}) => BrandService.update(id, brand),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['brands']});
            toast.success('Registro alterado com sucessso!')
        }, 
        onError: (error) => {
            toast.error(`Erro ao alterar: ${error.message}`)
        }
    });
}

export function useDeleteBrand(){
    const queryClient = useQueryClient();

    return useMutation<void, Error, string>({
        mutationFn: (id: string) => BrandService.delete(id),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['brands']});
            toast.success('Registro exluído com sucessso!')
        }, 
        onError: (error) => {
            toast.error(`Erro ao excluir: ${error.message}`)
        }
    });
}