const frase = "Anita lava la tina   "

const textoformateado = frase.toLowerCase().trim().replaceAll(" ","")
const rextovolteado = textoformateado.split("").reverse().join("")
if(textoformateado === rextovolteado ){
    console.log("palindromo")
}


console.log(textoformateado)
console.log(rextovolteado)