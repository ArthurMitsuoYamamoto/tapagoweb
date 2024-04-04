import { DropDownActions } from "@/components/DropDownActions";
import { Icon } from "@/components/Icon";


interface CategoriaItemProps{
    categoria:{
        id: number;
        nome: string;
        icone: string
    }
}

export function CategoriaItem(props: CategoriaItemProps){
    const {categoria} = props
    return(
    <div key={categoria.id} className="flex justify-between" id="data-row">
        <div className="flex gap-1 items-center">
                <Icon name={categoria.icone} />
                <span>{categoria.icone}</span>
                <span>{categoria.nome}</span>
            </div>
            <DropDownActions />
        </div>
)
}