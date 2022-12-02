// Birinchi masala

function func(a,b){
let num1 = Math.abs(10-a)
let num2 = Math.abs(10-b)

    if(num2 > num1){
        return a
    }  
    return b
}
console.log(func(8, 9))

// Ikkinchi masala

function findFunc(arr){
    let num1 = arr[0]
    let num2 = arr[2]
     
    if(num1[0] == num2[0] || num1[num1.length-1] == num2[num2.length-1]){
        return true
    }
    return false
}

console.log(findFunc(['salom', 'som']))