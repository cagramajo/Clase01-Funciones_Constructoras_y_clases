class UserC {
    constructor (name, surname, books, pets) {
        this.name = name;
        this.surname = surname;
        this.books = books? books : [];
        this.pets = pets? pets : [];
    }

    getFullName () {
        return `${this.name} ${this.surname}`;
    }

    addPet (newPet) {
        this.pets.push(newPet);
    }

    getPets () {
        return this.pets.length;
    }

    addBook (book, author) {
        let newBook = {
            title: book,
            author: author,
        }
        this.books.push(newBook);
    }

    getBooks () {
        let bookList = this.books.map(function (book) {
            return book.title;        
        })
        return bookList;
    }
}