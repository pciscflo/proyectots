class Persona{
    nombre: string;
    edad: number;
    ocupacion: string;
    constructor(nombre: string, edad: number, ocupacion: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.ocupacion = ocupacion;
    }
    mostrarInfo():void {
        console.log(`Nombre: ${this.nombre} Edad: ${this.edad} Ocupa: ${this.ocupacion}`);
    }
}
let lista: Persona[] = [
    new Persona("Pepe", 23, "Ingeniero")
];

let p:Persona = new Persona("Maria", 21 , "Enfermera");
lista.push(p);
console.log(lista);
console.log("----------------------");
lista.forEach((persona: Persona) => {
    persona.mostrarInfo();
})
