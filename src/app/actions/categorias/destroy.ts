'use server'

import { redirect } from "next/navigation"
import { toast } from "react-hot-toast/headless"

export async function destroy(id: number){

    await new Promise(r=>setTimeout(r, 3000))
   
    const options = {
        method: "DELETE"
    }
    
    const resp = await fetch(`${process.env.API_BASE_URL}/categoria/${id}`, options)

    //redirect("/categorias")
    toast("categoria apagada com sucesso")

}