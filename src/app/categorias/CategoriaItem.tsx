
'use client'
import { DropDownActions } from "@/components/DropDownActions";
import { Icon } from "@/components/Icon";
import { toast } from "react-hot-toast/headless";
import { destroy } from "../actions/categorias/destroy";

interface CategoriaItemProps {
    categoria: {
        id: number,
        nome: string,
        icone: string
    }
}

export function CategoriaItem(props: CategoriaItemProps){
    const { categoria } = props
    
    
    function handleDelete(){
        toast.promise(
            destroy(categoria.id),
             {
               loading: 'Saving...',
               success: <b>Settings saved!</b>,
               error: <b>Could not save.</b>,
             }
           );
    }
    return (
        <div key={categoria.id} className="flex justify-between py-2" id="data-row">
            <div className="flex gap-1 items-center">
                <Icon name={categoria.icone} />
                <span>{categoria.nome}</span>
            </div>
           
            <DropDownActions onDelete={()=>handleDelete}/>
        </div>
    )
}