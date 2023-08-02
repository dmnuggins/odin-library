let library = [];
const DEFAULT_DATA = [
  {
    title: "Discourses & Selected Writings",
    author: "Epictetus",
    pages: "321",
    status: "read",
  },
  {
    title: "Alice in Wonderland",
    author: "Lewis Caroll",
    pages: "241",
    status: "not read",
  },
  {
    title: "Naruto: Shippuden",
    author: "Masashi Kishimoto",
    pages: "576",
    status: "read",
  },
];

// DOM
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const bookStatus = document.getElementById("status");
const submitBtn = document.getElementById("submit");
const tableBody = document.getElementById("table-body");

// console.log(bookName, "\n", bookAuthor, "\n", bookStatus);

// Listeners
submitBtn.addEventListener("click", () => {
  handleSubmit();
});

// temp data set
library = DEFAULT_DATA;

console.log(library);

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

function removeBookFromLibrary(book) {}

function findBook(book) {}

function updateBookStatus() {
  // update status when Read/Unread button is clicked
}

function renderTable() {
  tableBody.innerHTML = "";

  library.forEach((book) => {
    const htmlBook = `
    <tr>
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

renderTable();
