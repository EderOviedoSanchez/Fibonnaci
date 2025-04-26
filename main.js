let Entrada0 = document.getElementById("Entrada0")
let BtnCalcular = document.getElementById("BtnCalcular")
let Salida = document.getElementById("Salida")
let NumeroEntrada = 0

Entrada0.addEventListener("input", (evento) => {
    NumeroEntrada = evento.target.value
    console.log(NumeroEntrada)
})
function funcionfibo(n){
    let fibonacci = [0,1]
    if(n==2){
        return fibonacci
    } else if(n==1){
        return [0]
    } 
    else{
        for(let p=2;p<n;p++){
            fibonacci[p]=fibonacci[p-1]+fibonacci[p-2]
            console.log(p)
        }
        return fibonacci
    }  
}
BtnCalcular.addEventListener("click", () => {
    let resultado = funcionfibo(NumeroEntrada)
    let hijo = document.createElement("ul")
    hijo.innerHTML = "Fibonacci( "+NumeroEntrada+" ) = [ "+resultado+" ]"
    Salida.appendChild(hijo)
})
