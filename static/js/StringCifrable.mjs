
class StringCifrable extends String{
    constructor(any){
        super(any)
    }

    cifrarPersonalizado(callback){
        let newString = ""
        
        for (let i = 0; i < this.length; i++) {
            newString+=callback(this[i])    
        }
        return newString
    }

    cifrarConDictPorLetra(dict){
        return this.cifrarPersonalizado(char => (char in dict)? dict[char]:char)
    }

    #_reverseDictHelper(dict){
        const reversedDic = {}
        for (const key in dict) {
            if (Object.hasOwnProperty.call(dict, key)) {
                const value = dict[key]
                reversedDic[value] = key
         }
        }   
    return reversedDic
    }

    cifrarConDictPorFrase(dict){
        let newString

        for (const key in dict) {
            if (Object.hasOwnProperty.call(dict, key)) {
                const value = dict[key]
                newString = newString?  newString.replaceAll(key,value): 
                    this.replaceAll(key, value)
            }
        }
        return newString
    }

    descifrarConDict(dict){
        
        return this.cifrarConDictPorFrase(this.#_reverseDictHelper(dict))
    }
}

export default StringCifrable
