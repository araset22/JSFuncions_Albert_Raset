//Exercici 7
function fdata(data = new Date()){
    console.log(data)
}

function num(a, b, c = 5){
    return a+b+c
}

function exercici7(a, b, c){
    fdata();
    return num(a, b, c)
}
console.log(exercici7(9, 2, 44));