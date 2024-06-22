function fib (n) {
    const fibArray = []
    for (let i=0; i < n; i++) {
        if (i < 2) {
            fibArray.push(i)
        } else {
            const fibArrayCopy = [...fibArray]
            fibArray.push(fibArrayCopy.pop() + fibArrayCopy.pop())
        }
    }

    return fibArray
}

console.log(fib(4))

function fibsRec(n, arr = [ 0, 1 ]) {
    

    if ( arr.length >= n) {
        return arr.slice(0, n)
    } 
        
    arr.push(arr.at(-1) + arr.at(-2))
    return fibsRec(n, arr)
    
}



console.log(fibsRec(8))