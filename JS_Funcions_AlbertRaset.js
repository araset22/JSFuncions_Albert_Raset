//Exercici 13
var noNull = (a, b) => {
    if (a != null && b == null)
        return a

    else if (a == null && b != null)
        return b

    else if (a != null && b != null)
        return [a, b]
}
console.log(noNull(null, 7))