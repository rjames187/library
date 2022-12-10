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

// Handlers

const openFormHandler = () => {
    const form = document.querySelector("form");
    const mask = document.getElementById("mask");
    form.classList.toggle("invisible");
    mask.classList.toggle("invisible");
}

const submitFormHandler = (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("has-read").checked;

    addBookToLibrary(title, author, pages, read);
    openFormHandler();
    renderBook(myLibrary[myLibrary.length - 1]);
}

// Event Listeners

const formOpener = document.getElementById("add");
formOpener.addEventListener("click", openFormHandler);

const formCloser = document.getElementById("close");
formCloser.addEventListener("click", openFormHandler);

const submit = document.querySelector('button[type="submit"]');
submit.addEventListener("click", submitFormHandler);

// DOM Manipulation

const main = document.querySelector("main");

function renderBook(book) {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h1");
    title.textContent = book.title;
    card.appendChild(title);

    const author = document.createElement("div");
    author.textContent = `by ${book.author}`
    author.classList.add("author");
    card.appendChild(author);

    const pages = document.createElement("div");
    pages.textContent = `- ${book.pages} pages`;
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
addBookToLibrary("Refactoring UI", "Adam Wathan", 252, true);
addBookToLibrary("Computer Systems: A Programmer's Perspective", "Randal Bryant", 1005, false);
addBookToLibrary("The Algorithm Design Manual", "Steven Skiena", 748, false);
addBookToLibrary("Tao of React", "Alex Kondov", 113, false);
addBookToLibrary("100 Things Every Designer Needs to Know About People", "Susan Weinschenk", 339, true);

renderLibrary();