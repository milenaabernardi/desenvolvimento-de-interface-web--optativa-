let arr1 = [1,2,3]
let arr2 = [4,5,6]
console.log(arr1.toString()) //transformou o conteudo
console.log(arr1.join(" - "))
let arr3 = arr1.concat(arr2)
console.log(arr1)
console.log(arr2)
console.log(arr3)
arr3 = arr3.concat(7, 8, 9)
console.log(arr3)