'use client'

import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem, Button} from "@nextui-org/react";
import { ChevronDown } from "lucide-react";

export function DropDownActions(){
    return(
        <Dropdown >
      <DropdownTrigger>
        <ChevronDown/>
      </DropdownTrigger>
      <DropdownMenu aria-label="Example with disabled actions" disabledKeys={["edit", "delete"]}>
        
        
        <DropdownItem key="edit">Editar</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Apagar
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
    
}