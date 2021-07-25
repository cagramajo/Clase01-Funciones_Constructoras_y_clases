function User (name, surname, books, pets) {
    this.name = name;
    this.surname = surname;
    this.books = books? books : [];
    this.pets = pets? pets : [];
}

User.prototype.getFullName = function () {
    return `${this.name} ${this.surname}`;
}

User.prototype.addPet = function (newPet) {
    this.pets.push(newPet);
}

User.prototype.getPets = function () {
    return this.pets.length;
}

User.prototype.addBook = function(book, author){
    let newBook = {
        title: book,
        author: author,
    }
    this.books.push(newBook);
}

User.prototype.getBooks = function () {
    let bookList = this.books.map(function (book) {
        return book.title;        
    })
    //console.log(bookList);
    return bookList;
}