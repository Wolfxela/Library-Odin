let myLibrary = [];
const bookContainer = document.querySelector('.BookContainer');

function BookMaker(title,author,pages,hasbeenread) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasbeenread = hasbeenread;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function createBookElement(title)
{
    const newTitleDiv = document.createElement("div");
    newTitleDiv.innerText = title;
    bookContainer.appendChild(newTitleDiv);
}