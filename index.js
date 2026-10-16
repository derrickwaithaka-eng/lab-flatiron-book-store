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
    bookList.innerHTML = ""; // Clear existing content

    // 3. Loop through every book and render elements
    bookStore.books.forEach(book => {
        const bookContainer = document.createElement("li");
        const bookTitle = document.createElement("h3");
        const bookAuthor = document.createElement("p");
        const bookImage = document.createElement("img");

        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        
        // Use setAttribute so JSDOM doesn't prepend http://localhost to the image URL
        bookImage.setAttribute("src", book.image);
        bookImage.alt = book.title;

        // Append children to li, then li to ul
        bookContainer.appendChild(bookTitle);
        bookContainer.appendChild(bookAuthor);
        bookContainer.appendChild(bookImage);

        bookList.appendChild(bookContainer);
    });
});