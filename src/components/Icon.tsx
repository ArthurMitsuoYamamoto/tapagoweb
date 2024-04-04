import { Apple, Bus, Cigarette, GraduationCap, School } from "lucide-react";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

interface IconProps{
    name: string
}

export function Icon ({name} : IconProps){

    const icons = [
        {name: "graduation-cap", icon: <GraduationCap />},
        {name: "bus", icon: <Bus/>},
        {name: "cigarrete", icon: <Cigarette/>},
        {name: "apple", icon: <Apple/>},
        
    ]

    return icons.find((icon)=> name == icon.name)?.icon
    
}