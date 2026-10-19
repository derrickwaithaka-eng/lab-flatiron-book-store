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
});