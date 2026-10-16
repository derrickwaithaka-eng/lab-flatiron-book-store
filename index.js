const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

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
});