let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let email = id('emailaddress'),
  username = id('username'),
  website = id('website'),
  description = id('description'),
  form = id('form');

// Adding the submit event Listener

form.addEventListener('submit', (e) => {
  e.preventDefault();
  engine(email, 0);
  engine(username, 1);
  engine(website, 2);
  engine(description, 3);
});

// engine function which will do all the works

let engine = (id, serial) => {
  if (id.value.trim() === '') {
    id.parentElement.classList.add('error');
    id.style.border = '1px solid red';
  } else {
    id.parentElement.classList.remove('error');
    id.style.border = '1px solid #f0f0f0';
  }
};
