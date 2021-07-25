// Prueba getFullName

let usuario1 = new UserFC('Eduardo', 'Gramajo', [], []);
console.log(usuario1.getFullName());


// Prueba addMascota

let usuario2 = new UserFC('Rigo', 'Miranda', [], ['Junior','Chiquita','Kimba','Jesica']);

usuario2.addPet('Cabezón');


// Prueba getMascota

console.log(usuario2.getPets());

// Prueba addBook

let libro = 'El amor en tiempos de colera'
let autor = 'Gabriel Garcia Marquez'

usuario1.addBook(libro, autor);
usuario1.addBook('Las venas abiertas de Latinoamerica','Eduardo Galeano')

// Prueba getBooks

console.log(usuario1.getBooks());