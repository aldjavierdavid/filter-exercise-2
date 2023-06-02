/**
 * Eliminar un elemento del array
 * Es muy común usar el método filter para eliminar un elemento de un array https://www.w3schools.com/jsref/jsref_filter.asp
 */

let alumnos = ["Fran", "David", "Jonathan", "Cristopher"];
let alumnosFiltrados = alumnos.filter((a) => a !== "Cristopher");
// El array resultante ya no contiene a Cristopher, pues me he "quedado" con todos aquellos alumnos cuyo nombre NO era Cristopher
console.log(alumnosFiltrados);

/**
 * Ejercicio: Elimina el Libro de este array de objetos. Muestra el array filtrado por consola
 */

let objetos = [
  {
    nombre: "Bicicleta",
    marca: "XYZ",
    color: "Rojo",
    tamaño: "Mediano",
    estado: "Usado",
    edad: 2,
    descripcion: "Bicicleta de montaña en buen estado",
    imagen: "ruta/a/la/imagen-bicicleta.jpg",
    categoria: "Deportes",
    ciudad: "Nueva York"
  },
  {
    nombre: "Televisor",
    marca: "ABC",
    color: "Negro",
    tamaño: "42 pulgadas",
    estado: "Nuevo",
    edad: 4,
    descripcion: "Televisor de pantalla plana en perfecto estado",
    imagen: "ruta/a/la/imagen-televisor.jpg",
    categoria: "Electrónica",
    ciudad: "Londres"
  },
  {
    nombre: "Libro",
    autor: "John Doe",
    género: "Ficción",
    estado: "Nuevo",
    idioma: "Inglés",
    descripcion: "Libro de ciencia ficción emocionante",
    ciudad: "Tokio"
  },
  {
    nombre: "Mesa",
    material: "Madera",
    color: "Café",
    tamaño: "Grande",
    estado: "Usado",
    descripcion: "Mesa de comedor en buen estado",
    ciudad: "París"
  },
  {
    nombre: "Silla",
    material: "Metal",
    color: "Negro",
    tamaño: "Mediano",
    estado: "Usado",
    descripcion: "Silla de escritorio en buen estado",
    ciudad: "Roma"
  },
  {
    nombre: "Teléfono",
    marca: "XYZ",
    color: "Plata",
    estado: "Nuevo",
    descripcion: "Teléfono inteligente en buen estado",
    ciudad: "Sídney"
  },
  {
    nombre: "Ordenador portátil",
    marca: "ABC",
    color: "Gris",
    estado: "Nuevo",
    descripcion: "Ordenador portátil en buen estado",
    ciudad: "Toronto"
  },
  {
    nombre: "Cámara",
    marca: "XYZ",
    color: "Negro",
    estado: "Usado",
    descripcion: "Cámara digital en buen estado",
    ciudad: "Moscú"
  },
  {
    nombre: "Guitarra",
    marca: "ABC",
    color: "Negro",
    estado: "Usado",
    descripcion: "Guitarra acústica en buen estado",
    ciudad: "Sao Paulo"
  },
  {
    nombre: "Mesa de centro",
    material: "Madera",
    color: "Blanco",
    tamaño: "Pequeño",
    estado: "Nuevo",
    descripcion: "Mesa de centro moderna",
    ciudad: "Estambul"
  }
];
let objetosFiltrados = objetos.filter((objetos) => objetos.nombre !== "Libro");

console.log(objetosFiltrados);
