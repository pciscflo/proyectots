interface Alumno{
    nombre: string;
    edad: number;
    nota:number;
}

const alumnos : Alumno[] = []; //alumnos no se puede volver a usar
let alumno1: Alumno  = {nombre:"Maria", edad:20, nota:18};
let alumno2: Alumno  = {nombre:"Pedro", edad:22, nota:15};
alumnos.push(alumno1);
alumnos.push(alumno2);

console.log(alumnos);
console.log("----------------------");
alumnos.forEach((alumno: Alumno) => {
    console.log(`Alumno: ${alumno.nombre} ${alumno.edad} ${alumno.nota}`);
})
