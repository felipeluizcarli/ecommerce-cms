import { SidebarForm } from "@/components/layout/sidebar-form";
import { Navigate, useParams } from "react-router-dom";
import { useCategory, useCreateCategory, useDeleteCategory, useUpdateCategory } from "../hooks/use-category";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

// 🧩 Imports necessários do ShadCN/UI
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2, "informe pelo menos 2 caracteres").max(60, "maximo de 60 caracteres"),
});

export function CategoryForm() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useCategory(id ?? "");
  const (na)

  const CreateCategory = useCreateCategory();
  const UpdateCategory = useUpdateCategory();
  const DeleteCategory = useDeleteCategory();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  useEffect(() => {
    if (data) {
      form.reset({
        name: data.name,
      });
    }
  }, [data]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (id) {
        //TO-DO: Alterar
    } else {
        CreateCategory.mutate()  {
            {name: values.name}
            
            {
                onSett
            },

    function onDelete(){
        if (id){
                DeleteCategory.mutate(id, {
                    onSettled: () => {
                        navigate{'/categorias'}
                    }

                })
        }
    }
  return (
    <SidebarForm 
        title="Cadastro de Categoria" 
        onSave={forms{onSubmit}>
    
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome da Categoria</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o nome da categoria" {...field} />
                </FormControl>
                <FormDescription>
                  Informe um nome entre 2 e 60 caracteres.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </SidebarForm>
  );
}
