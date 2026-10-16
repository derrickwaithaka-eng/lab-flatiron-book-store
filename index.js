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

<<<<<<< HEAD
// Write your code here!
// Example bookstore object structure (if not already imported from a data.js file)
const bookStore = {
  name: "Flatiron Bookstore",
  books: [
    {
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      image: "https://via.placeholder.com/150"
    },
    {
      title: "You Don't Know JS",
      author: "Kyle Simpson",
      image: "https://via.placeholder.com/150"
    },
    {
      title: "Programming JavaScript Applications",
      author: "Eric Elliott",
      image: "https://via.placeholder.com/150"
    }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
    // Step 2.1: Select the DOM element with the id of 'header' and save as bookStoreTitle
    const bookStoreTitle = document.getElementById("header");

    // Step 2.2: Change the textContent to match the name property of the bookStore variable
    if (bookStoreTitle) {
        bookStoreTitle.textContent = bookStore.name;
    }

    // Step 3: Select the book list container
    const bookList = document.getElementById("book-list");

    // Step 3.1: Loop through every book element in the books property
    bookStore.books.forEach(book => {
        // Create elements for each book
        const bookContainer = document.createElement("li"); // li element
        const bookTitle = document.createElement("h3");     // h3 element
        const bookAuthor = document.createElement("p");    // p element
        const bookImage = document.createElement("img");    // img element

        // Step 3.2: Change the textContent and attributes to match the book object
        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookImage.src = book.image;
        bookImage.alt = book.title; // Best practice for accessibility

        // Step 3.3: Append book elements to bookContainer, then to bookList
        bookContainer.appendChild(bookTitle);
        bookContainer.appendChild(bookAuthor);
        bookContainer.appendChild(bookImage);

        bookList.appendChild(bookContainer);
    });
=======
// 1. Select the header element and update its textContent to the store name
const bookStoreTitle = document.querySelector("#header");
bookStoreTitle.textContent = bookStore.name;

// 2. Select the book list container
const bookList = document.querySelector("#book-list");

// 3. Loop through every book and render elements
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

  // Append elements together
  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);
  bookContainer.appendChild(bookImage);

  // Append to the main book list on the DOM
  bookList.appendChild(bookContainer);
>>>>>>> 4e9c74d0ed4a6780c97f71caaf4da9d5a0b2049c
});