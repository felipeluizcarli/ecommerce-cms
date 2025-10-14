import { CategoryService } from "../services/category.service";
import { useMutation, useQuery } from "@tanstack/react-query";
import { CategoryDTO } from "../dtos/category.dto";

export function useCategory () {
  return useQuery<CategoryDTO[]>({
    queryKey: ["categories"],
    queryFn: CategoryService.list
  });
}

export function useCategoryById (id: string) {
  return useQuery<CategoryDTO>({
    queryKey: ["category", id],
    queryFn: () => CategoryService.getByid(id),
    enabled: !!id //-> or Boolean(id)
  });
}

export function useCreateCategory () {
  return useMutation<CategoryDTO, Error, Omit<CategoryDTO, 'id'>>({
    mutationFn: (category, Omit<CategoryDTO, 'id'>) => CategoryService.createca(CategoryDTO)
  })
}

export function useUpdateCategory () {
  return useMutation<CategoryDTO, Error, {id: string, category: CategoryDTO, 'id'>}>({
    mutationFn: ({id, category}) => CategoryService.update(id, category)
  });
}

export function useUpdateCategory () {
  return useMutation<void, Error, string>({
    mutationFn: (id: string) => CategoryService.delete(id)
  })
}
