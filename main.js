let library = [];
const DEFAULT_DATA = [
  {
    title: "Discourses & Selected Writings",
    author: "Epictetus",
    pages: "321",
    status: "read",
    key: "1",
  },
  {
    title: "Alice in Wonderland",
    author: "Lewis Caroll",
    pages: "241",
    status: "not read",
    key: "2",
  },
  {
    title: "Naruto: Shippuden",
    author: "Masashi Kishimoto",
    pages: "576",
    status: "read",
    key: "3",
  },
];

// temp data set
library = DEFAULT_DATA;

const bookCount = {};

// DOM
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const bookStatus = document.getElementById("status");
const submitBtn = document.getElementById("submit");
const tableBody = document.getElementById("table-body");
const table = document.querySelector("table");

// console.log(bookName, "\n", bookAuthor, "\n", bookStatus);
renderTable();
// Listeners
table.addEventListener("click", (e) => {
  const clickedElement = e.target;

  if (clickedElement.classList.contains("status-btn")) {
    const row = clickedElement.closest("tr");
    console.log(row);
  } else if (clickedElement.classList.contains("delete-btn")) {
    const row = clickedElement.closest("tr");
    // handle data deletion in library
    const bookKey = row.id;
    removeBookFromLibrary(findBook(bookKey));
    console.log(row);
    console.log(library);
    row.remove();
  }
});
submitBtn.addEventListener("click", () => {
  handleSubmit();
});

class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}

function handleSubmit() {
  if (
    bookTitle.value.trim() === "" ||
    bookAuthor.value.trim() === "" ||
    bookPages.value === "" ||
    bookStatus.value === ""
  ) {
    console.log("NO BOOK");
  } else {
    const title = bookTitle.value;
    const author = bookAuthor.value;
    const pages = bookPages.value;
    const status = bookStatus.value === "read" ? true : false;
    const newBook = new Book(title, author, pages, status);
    console.log(newBook);
    addBookToLibrary(newBook);
    console.log(library);
  }
}
function addBookToLibrary(book) {
  library.push(book);
  renderTable();
}

function removeBookFromLibrary(book) {
  library.splice(book, 1);
}

function findBook(bookKey) {
  if (library.length === 0 || library === null) {
    return;
  }
  library.forEach((book) => {
    if (book.key === bookKey) {
      return library.indexOf(book);
    }
  });
}

function updateBookStatus() {
  // update status when Read/Unread button is clicked
}

function renderTable() {
  tableBody.innerHTML = "";

  library.forEach((book) => {
    const bookKey = `${book.title}_${book.author}_${book.pages}`;
    bookCount[bookKey] = (bookCount[bookKey] || 0) + 1;

    const htmlBook = `
    <tr id="${book.key}">
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td><button class="status-btn">${
        book.status === "read" ? "Read" : "Not Read"
      }</button></td>
      <td><button class="delete-btn">Delete</button></td>
    </tr>
    `;
    tableBody.insertAdjacentHTML("afterbegin", htmlBook);
  });
}
