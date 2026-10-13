// 1. Starter data object (this is usually already provided at the top of your file)
const bookStore = {
  name: "Flatiron Bookstore",
  location: "London",
  books: [
    {
      id: 1,
      title: "Eloquent JavaScript: A Modern Introduction to Programming",
      author: "Marijn Haverbeke",
      image: "https://images-na.ssl-images-amazon.com/images/I/51INjpqqyKL._SX376_BO1,204,203,200_.jpg",
    },
    {
      id: 2,
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      image: "https://images-na.ssl-images-amazon.com/images/I/5131OWiQwDL._SX381_BO1,204,203,200_.jpg",
    },
    {
      id: 3,
      title: "You Don't Know JS: Scope & Closures",
      author: "Kyle Simpson",
      image: "https://images-na.ssl-images-amazon.com/images/I/41T-mrmwzVL._SX331_BO1,204,203,200_.jpg",
    }
  ]
};

// ==========================================
// 2. PUT YOUR LAB CODE HERE (Below the object)
// ==========================================

// Step A: Select the header element and update its textContent
const bookStoreTitle = document.querySelector("#header");
bookStoreTitle.textContent = bookStore.name;

// Step B: Select the book list container
const bookList = document.querySelector("#book-list");

// Step C: Loop through the books array and render elements
bookStore.books.forEach((book) => {
  // Create elements for each book
  const bookContainer = document.createElement("li");
  const bookTitle = document.createElement("h3");
  const bookAuthor = document.createElement("p");
  const bookImage = document.createElement("img");

  // Assign textContent and image source
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookImage.src = book.image;

  // Append child elements to the bookContainer (li)
  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);
  bookContainer.appendChild(bookImage);

  // Append the bookContainer to the main bookList (ul)
  bookList.appendChild(bookContainer);
});