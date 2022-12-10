// Organization

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        console.log(`${this.title} by ${this.author}, ${this.pages}, ${this.read ? "read" : "not read yet"}`)
    }
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}

// DOM Manipulation

const main = document.querySelector("main");

function renderBook(book) {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h1");
    title.textContent = book.title;
    card.appendChild(title);

    const author = document.createElement("div");
    author.textContent = book.author
    author.classList.add("author");
    card.appendChild(author);

    const pages = document.createElement("div");
    pages.textContent = book.pages;
    pages.classList.add("pages");
    card.appendChild(pages);

    const read = document.createElement("button");
    read.textContent = book.read ? "Read" : "Not Read";
    read.classList.add(book.read ? "read" : "not-read");
    card.appendChild(read);

    main.appendChild(card);
}

function renderLibrary() {
    myLibrary.forEach(book => {
        renderBook(book);
    })
}

// testing

addBookToLibrary("Designing Data Intensive Applications", "Martin Kleppman", 661, false);

renderLibrary();