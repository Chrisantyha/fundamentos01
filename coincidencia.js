/*generar array con las considencias*/

const array1 = [1,2,3]
const array = [1,2] 
const array3 =[]

for(let i = 0; i<array1.length;i++){
    for(let j = 0; j<array.length;j++){
        if(array1[i]===array[j]){
            array3.push(array1[i])
        }
    }
}

console.log(array3)