function ImparorPar(x){
    if (x%2==0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}
let numero = 7;
console.log("O número " + numero + " é: " + ImparorPar(numero));