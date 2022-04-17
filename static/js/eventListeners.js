
import { 
    getById,
    clickListener,
    getStringCifrable,
    printResult
 } from "./functions/selectorsHelpers.js";
 
import {dict} from './functions/dict.js'

const resultHelper = (visible, invisble)=>{
    const [visibleElement] = document.getElementsByClassName(visible)
    visibleElement.classList.remove('hidden')
    visibleElement.classList.add('flex')
    visibleElement.classList.add('flex-column')
    const [invisibleElement] = document.getElementsByClassName(invisble)
    invisibleElement.classList.remove('flex')
    invisibleElement.classList.remove('flex-column')
    invisibleElement.classList.add('hidden')
    getById('text-result').scrollIntoView(
        {behavior: "smooth"}
    )
}

const buttonsListeners = {
    cifrar: (e)=>{
           printResult(getStringCifrable().cifrarConDictPorLetra(dict))
           resultHelper('there-is-text','there-is-not-text')
           
    },
    descifrar: (e)=>{
        printResult(getStringCifrable().descifrarConDict(dict))
        resultHelper('there-is-text','there-is-not-text')
    },
    copiar:async (e)=>{

        await navigator.clipboard.writeText(getById('text-result').textContent)
        getById('pop-up').classList.add('pop-up')
        setTimeout(()=>{getById('pop-up').classList.remove('pop-up')}, 2500)
        resultHelper('there-is-not-text','there-is-text')
    }
}

for (const key in buttonsListeners) {
    if (Object.hasOwnProperty.call(buttonsListeners, key)) {
        const callback = buttonsListeners[key];
        clickListener(key,callback)
        
    }
}

const buttons =Array.from(document.getElementsByClassName('container__buttons_alura'))

let dangerWatcher = false

getById('text-cifrable').addEventListener('input',(e)=>{
    console.log('change')
    if(e.target.value.includes('#') || (e.target.value.length < 0)){
        e.target.classList.add('danger')
        dangerWatcher=true
        buttons.forEach(e=>e.setAttribute('disabled', true))
    }
    else if(dangerWatcher){
        e.target.classList.remove('danger');
        buttons.forEach(e=>e.removeAttribute('disabled'))
        dangerWatcher=false
    }
})
