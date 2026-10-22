interface Estudiante{
    nombre: string;
    nota: number;
}

const estudiantes: Estudiante[] = [
    {nombre:"Alfredo", nota:14},
    {nombre:"Beto", nota:11},
    {nombre:"Cecilia", nota:18},
    {nombre:"David", nota:9},
];

const desaprobados = estudiantes.filter((estudiante: Estudiante) =>{
    return estudiante.nota < 13;
});
console.log(desaprobados);
const reprobados = estudiantes.filter(
    estudiante => estudiante.nota < 13
);
console.log(reprobados);

