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
    const card = document.createElement("div.card");

    const title = document.createElement("h1");
    title.textContent = book.title;
    card.appendChild(title);

    const author = document.createElement("div.author");
    author.textContent = book.author
    card.appendChild(author);

    const pages = document.createElement("div.pages");
    pages.textContent = book.pages;
    card.appendChild(pages);

    const read = document.createElement(book.read ? "button.read" : "button.not-read");
    read.textContent = book.read ? "button.read" : "button.not-read";
    card.appendChild(read);
}

// testing

addBookToLibrary("Designing Data Intensive Applications", "Martin Kleppman", 661, false);