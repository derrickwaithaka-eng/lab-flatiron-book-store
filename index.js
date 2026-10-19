const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald"
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee"
    },
    {
        title: "1984",
        author: "George Orwell"
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen"
    }
];

const heading = document.getElementById("store-title");
heading.textContent = "Flatbooks";

const bookList = document.getElementById("book-list");

books.forEach(function(book) {
    const bookDiv = document.createElement("div");

    const bookTitle = document.createElement("h2");
    bookTitle.textContent = book.title;

    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = "Author: " + book.author;

    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);

    bookList.appendChild(bookDiv);
});
