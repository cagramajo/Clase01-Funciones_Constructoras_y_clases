// Prueba getFullName

let usuario10 = new UserC ('Eduardo', 'Gramajo', [], []);
console.log(usuario10.getFullName());


// Prueba addMascota

let usuario20 = new UserC('Rigo', 'Miranda', [], ['Junior','Chiquita','Kimba','Jesica']);

usuario20.addPet('Cabezón');


// Prueba getMascota

console.log(usuario20.getPets());

// Prueba addBook

usuario10.addBook('El amor en tiempos de colera', 'Gabriel Garcia Marquez');
usuario10.addBook('Las venas abiertas de Latinoamerica','Eduardo Galeano')

// Prueba getBooks

console.log(usuario10.getBooks());