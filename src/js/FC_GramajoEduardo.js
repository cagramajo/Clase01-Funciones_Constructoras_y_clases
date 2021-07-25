function UserFC (name, surname, books, pets) {
    this.name = name;
    this.surname = surname;
    this.books = books? books : [];
    this.pets = pets? pets : [];
}

UserFC.prototype.getFullName = function () {
    return `${this.name} ${this.surname}`;
}

UserFC.prototype.addPet = function (newPet) {
    this.pets.push(newPet);
}

UserFC.prototype.getPets = function () {
    return this.pets.length;
}

UserFC.prototype.addBook = function(book, author){
    let newBook = {
        title: book,
        author: author,
    }
    this.books.push(newBook);
}

UserFC.prototype.getBooks = function () {
    let bookList = this.books.map(function (book) {
        return book.title;        
    })
    return bookList;
}