import React from "react";

interface InputTextProps {
    style?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

export const InputText: React.FC<InputTextProps> = ({style,...restante}: InputTextProps) => {
    return(
        <input type="text"  
               {...restante}
               className={`${style} border px-3 py-2 rounded-lg text-gray-900`} />
    )
}