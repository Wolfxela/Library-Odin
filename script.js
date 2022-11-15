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
    //make a new div called pages
    //make a new radio form with 2 boxes that can be checked or unchecked
    //make the last div called authorName
    bookContainer.appendChild(newTitleDiv);
}