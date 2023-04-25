import { useState } from "react";

export const useForm = ( initialForm = {} ) => {
  
    const [formita, setFormita] = useState( initialForm )

    

    const onInputChange = ({target}) =>{
        const {name, value} = target;
        setFormita({
            ...formita,
            [name]: value
        })

    }
  
    const onResetForm = ()=>{
        setFormita (initialForm)
    }
  
    return {
        ...formita,
        formita,
        onInputChange,
        onResetForm,
    }
}
