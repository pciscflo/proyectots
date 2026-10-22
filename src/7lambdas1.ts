function sumar(a:number, b:number) {
    return a + b;
}
const sumarizar = (a:number, b:number) => {
    return a + b;
}
console.log(sumar(3,4)); //7
console.log(sumarizar(3,4)); //7

const mostrarMensaje = () =>{
    console.log("Mensaje");
}
function mostrarMensajeFuncion(){
    console.log("Mensaje");
}
mostrarMensaje();//Mensaje
mostrarMensajeFuncion(); //Mensaje
