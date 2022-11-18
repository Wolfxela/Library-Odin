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

function createBookElement(title,pages)
{
  //create a new div called book with the class of book
  const bookdiv = document.createElement('div');
  bookdiv.classList.add('Book');
  //creater the bookHeader div with the class of bookHeader and bookComponent
  const bookHeader = document.createElement('div');
  bookHeader.classList.add('bookHeader');
  bookHeader.classList.add('bookComponent');
  console.log(bookHeader);
  //create 2 divs, 1 being called bookTitle with the bookTitle class, which will be appended to the bookHeader
  const bookTitle = document.createElement('div');
  bookTitle.classList.add('bookTitle');
  bookHeader.appendChild(bookTitle);
  //and then create another called titleContent, with the class titleContent that will be appended to the previous div, it will take as an input the title from the function
  const titleContent = document.createElement('div');
  titleContent.classList.add('titleContent');
  titleContent.innerText = title;
  bookTitle.appendChild(titleContent);
  //append bookHeader to book for it to become a child of book
  bookdiv.appendChild(bookHeader);


  //create a div with the class of bookBody and bookComponent that's called bookBody
  const bookBody = document.createElement('div');
  bookBody.classList.add('bookBody');
  bookBody.classList.add('bookComponent');
  //append bookBody to book for it to become a sibling of bookHeader and child of book
  bookdiv.appendChild(bookBody);
  //add 2 divs and 1 form, which all 3 will be children of bookBody
  //the first div will be named bookPages with the class bookPages, it will take as an input the pages from the function, must be a number if not default to 1
  const bookPages = document.createElement('div');
  bookPages.classList.add('bookPages');
  bookPages.innerText = pages;
  bookBody.appendChild(bookPages);
  //the second div will be named haveYouReadDiv which will have the class of haveYouReadThisBook
  const haveYouReadDiv = document.createElement('div');
  haveYouReadDiv.classList.add('hasreadButtons')
  bookdiv.appendChild(haveYouReadDiv);
  //the form will have a class of radioForm and 2 divs named formDiv appended to it
  const radioForm = document.createElement('form');
  radioForm.classList.add('radioForm');
  //the first div will be holding out the yes input, and the second will be holding the no input
  const div1 = document.createElement('div');
  //each div will have a input of type radio, name yes/noBtn, id of yes/no, name of Option, and a value of yes/no
  //each div will have a br after the input, then a label for each input with a class of yes/no
  //depending on the value of haveYouReadIt, make either the yes or no radio default

  //then create a new div called bookFooter, with the class bookFooter which will be a child of book
  //it will have a div called authorName with a class of Authorname that will take as input the author from the function
  document.body.appendChild(bookdiv);
}