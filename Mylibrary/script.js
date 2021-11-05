/* Selectors */
const addButton = document.querySelector("#addBook");
const closeButton = document.querySelector(".close");
const add = document.querySelector(".add");
const bookForm = document.querySelector(".bookForm");
const wrapper = document.querySelector(".cards-box");
const title = document.querySelector(".title");
const author = document.querySelector(".author");
const totalPages = document.querySelector(".totalPages");
const read = document.querySelector(".read");
const updateBooks = document.querySelector(".totalBooks");
const updateCompletedBooks = document.querySelector(".completedBooks");
const updatePages = document.querySelector(".pages");

//Array to store book objects
let myLibrary = JSON.parse(localStorage.getItem("myLibrary")) || [];

class Book {
  constructor(bookTitle, author, pages, read) {
    this.bookTitle = bookTitle;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info() {
    return `${bookTitle} by ${author}, ${pages} pages, ${read} read yeat`;
  }
}

// Constructor
/*
function Book(bookTitle, author, pages, read) {
    this.bookTitle = bookTitle;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${bookTitle} by ${author}, ${pages} pages, ${read} read yeat`;
    }
}*/

//add book to libraey
function addBookToLibrary() {
  let book = new Book(
    title.value,
    author.value,
    totalPages.value,
    read.checked
  );
  myLibrary.push(book);
  console.log(myLibrary);
  displayBooks(myLibrary, wrapper);
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

//check if input isn't empty or isn't a number
function handleInput() {
  console.log(totalPages);
  if (title.value === "") {
    alert("Title cannot be empty");
  } else if (author.value === "") {
    alert("Author cannot be empty");
  } else if (totalPages.value === "" || !Number(totalPages.value)) {
    alert("Total pages cannot be empty and must be a number");
  } else {
    addBookToLibrary();
  }
}
add.addEventListener("click", handleInput);

//display books saver in the library
function displayBooks(myLibrary = [], wrapper) {
  wrapper.innerHTML = myLibrary
    .map((bookItem, i) => {
      return `
        <div class="add-book book-info d-flex flex-column justify-content-between align-items-center">
        <h1>${bookItem.bookTitle}</h1>
        <h3>${bookItem.author}</h3>
        <h3>Total Pages: ${bookItem.pages}</h3>
        <h3>Read
        <label class="switch">
        <input type="checkbox" data-index=${i} class="read" ${
        bookItem.read ? "checked" : ""
      }>
        <span class="slider round"></span>
        </label>
        </h3>
        <div>
        <button type="button" class="btn btn-info" data-index=${i} >Delete</button>
        </div>
        </div>`;
    })
    .join("");
}

/*modal functions*/
addButton.addEventListener("click", (openModal) => {
  inputModal.style.display = "block";
  showDiv();
});
closeButton.addEventListener("click", (closeModal) => {
  inputModal.style.display = "none";
});

//update read status
function updateToggle(e) {
  if (!e.target.matches("input")) return;
  const element = e.target;
  const ix = element.dataset.index;
  myLibrary[ix].read = !myLibrary[ix].read;
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  displayBooks(myLibrary, wrapper);
}

//delete book from the library and html
function deleteBook(e) {
  if (!e.target.matches("button")) return;
  const deleteBtn = e.target;
  const targetBtn = deleteBtn.dataset.index;
  myLibrary.splice(targetBtn, 1);
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  displayBooks(myLibrary, wrapper);
}
wrapper.addEventListener("click", deleteBook);
wrapper.addEventListener("click", updateToggle);

//call the function to populate the page
displayBooks(myLibrary, wrapper);

/*show info */
let counter = 0;
let readPages = 0;
let toggle = false;
//count info to disiplay
function countInfo() {
  let totalBooks = myLibrary.length;
  myLibrary.forEach((bookObj) => {
    if (bookObj.read === true) {
      counter += 1;
    }
    if (bookObj.pages > 0 && bookObj.read === true) {
      readPages += Number(bookObj.pages);
    }
  });
  return updateValues(counter, readPages, totalBooks);
}
// toggle the header dropdown
function showDiv() {
  let infoDiv = document.querySelector(".information");
  let listOfClasses = infoDiv.classList;
  if (listOfClasses.value.includes("d-none")) {
    listOfClasses.replace("d-none", "d-block");
    countInfo();
  } else {
    listOfClasses.replace("d-block", "d-none");
  }

  counter = 0;
  readPages = 0;
}

//update the value in the dropdown
function updateValues(counter, readPages, totalBooks) {
  updateBooks.innerHTML = `Books: ${totalBooks}`;
  updateCompletedBooks.innerHTML = `Completed books: ${counter}`;
  updatePages.innerHTML = `Total pages: ${readPages}`;
}

const signin = document.querySelector("#signin");
console.log(signin);

signin.addEventListener("click", siginFunction);

function siginFunction() {
  console.log("logged in");
}
