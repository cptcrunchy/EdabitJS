class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getTitle = () => `Title: ${this.title}`;
    getAuthor = () => `Author: ${this.author}`;
}


const PP = new Book("Pride and Prejudice", "Jane Austen")
const H = new Book("Hamlet", "William Shakespeare")
const WP = new Book("War and Peace", "Leo Tolstoy")
