
import StringCifrable from "../StringCifrable.mjs";

export const getById = id=>document.getElementById(id)

export const clickListener = (id, callback) =>{
    getById(id).addEventListener('click', callback)
}

export const getStringCifrable = ()=>{
    return new StringCifrable(getById('text-cifrable').value)
}

export const printResult = result =>{
    getById('text-result').textContent = result
    getById("text-cifrable").value=""
}

