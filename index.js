<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
  // 1. Update the header text using its ID
  const header = document.querySelector("#header");
  if (header) {
    header.textContent = "Flatbooks Technical Books";
  }

  // 2. Target the book list container
  const bookList = document.querySelector("#book-list");

  // 3. Render books if the array is loaded
  if (typeof books !== "undefined" && bookList) {
    // Clear out any placeholder content (like "delete-this")
    bookList.innerHTML = "";

    // Loop through each book object to create elements
    books.forEach(book => {
      const li = document.createElement("li");

      // Title element
      const h3 = document.createElement("h3");
      h3.textContent = book.title;
      li.appendChild(h3);

      // Author element
      const pAuthor = document.createElement("p");
      pAuthor.textContent = book.author;
      li.appendChild(pAuthor);

      // Image element
      const img = document.createElement("img");
      img.src = book.image; 
      img.alt = book.title;
      li.appendChild(img);

      // Append the completed list item to the book list container
      bookList.appendChild(li);
    });
  }
=======
const bookStore = {
  name: "Flatbooks Technical Books",
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
      title: "JavaScript & jQuery: Interactive Front-End Web Development",
      author: "Jon Duckett",
      image: "https://images-na.ssl-images-amazon.com/images/I/41NqSYWXZkL._SX397_BO1,204,203,200_.jpg",
    },
    {
      id: 3,
      title: "Cracking the Coding Interview",
      author: "Gayle Laakmann McDowell",
      image: "https://images-na.ssl-images-amazon.com/images/I/41oWqPR62-L._SX348_BO1,204,203,200_.jpg",
    }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
    // 1. Select Title Element and update name
    const bookStoreTitle = document.querySelector("#header");
    if (bookStoreTitle) {
        bookStoreTitle.textContent = bookStore.name;
    }

    // 2. Select the book list container
    const bookList = document.querySelector("#book-list");
    if (bookList) {
        bookList.innerHTML = "";

        // 3. Loop through every book and render elements
        bookStore.books.forEach(book => {
            const bookContainer = document.createElement("li");
            const bookTitle = document.createElement("h3");
            const bookAuthor = document.createElement("p");
            const bookImage = document.createElement("img");

            bookTitle.textContent = book.title;
            bookAuthor.textContent = book.author;
            
            // Reverting back to direct property assignment which standard JSDOM expects
            bookImage.src = book.image;
            bookImage.alt = book.title;

            // Append elements
            bookContainer.appendChild(bookTitle);
            bookContainer.appendChild(bookAuthor);
            bookContainer.appendChild(bookImage);

            bookList.appendChild(bookContainer);
        });
    }
>>>>>>> 065e4ad023e3fce589043d3df30b853d736da5da
});