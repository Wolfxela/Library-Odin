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

function createBookElement(title,pages,author,hasReadBook)
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
  //make a button called deleteBtn with a class of deleteBtn and innertext X
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add('deleteBtn');
  deleteBtn.innerText = 'X';
  bookHeader.appendChild(deleteBtn);

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
  bookPages.innerText = '-Pages:' + pages;
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
  radioForm.appendChild(div1);
  const div2 = document.createElement('div');
  radioForm.appendChild(div2);
  //each div will have a input of type radio, name yes/noBtn, id of yes/no, name of Option, and a value of yes/no
  const radioBtnYes = document.createElement('input');
  radioBtnYes.setAttribute('type', 'radio');
  radioBtnYes.classList.add('yesBtn');
  radioBtnYes.id = 'yes';
  radioBtnYes.setAttribute('name', 'Option');
  radioBtnYes.setAttribute('value', 'yes');

  const radioBtnNo = document.createElement('input');
  radioBtnNo.setAttribute('type', 'radio');
  radioBtnNo.classList.add('noBtn');
  radioBtnNo.id = 'no';
  radioBtnNo.setAttribute('name', 'Option');
  radioBtnNo.setAttribute('value', 'no');

  //we then append each button to their respective div
  div1.appendChild(radioBtnYes);
  div2.appendChild(radioBtnNo);
  //each div will have a br after the input and append them
  const br1 = document.createElement('br');
  const br2 = document.createElement('br');
  div1.appendChild(br1);
  div2.appendChild(br2);
  //then a label for each input with a class of yes/no and append them after the br
  const labelYes = document.createElement('label');
  labelYes.htmlFor = 'yes';
  labelYes.classList.add('yes');
  labelYes.innerText = "yes";
  div1.appendChild(labelYes);
  const labelNo = document.createElement('label');
  labelNo.htmlFor = 'no';
  labelNo.classList.add('no');
  labelNo.innerText = "no";
  div2.appendChild(labelNo);
  //depending on the value of haveYouReadIt, make either the yes or no radio default
  if(hasReadBook === true)
  {
    radioBtnYes.checked = true;
  }
  else
  {
    radioBtnNo.checked = true;
  }
  //at the end append radioForm to bookbody
  bookBody.appendChild(radioForm);

  //then create a new div called bookFooter, with the class bookFooter which will be a child of book
  const bookFooter = document.createElement('div');
  bookFooter.classList.add('bookFooter');
  bookFooter.classList.add('bookComponent');
  bookdiv.appendChild(bookFooter);
  //it will have a div called authorName with a class of Authorname that will take as input the author from the function
  const authorName = document.createElement('div');
  authorName.classList.add('authorName')
  authorName.innerText = 'By:' + author;
  bookFooter.appendChild(authorName);



  document.body.appendChild(bookdiv);
}