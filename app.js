/*****form valiation***** */

class FormValidation {
  formValues = {
    email: '',
    username: '',
    website: '',
    description: '',
  };
  errorValues = {
    emailErr: '',
    usernameErr: '',
    websiteErr: '',
    descriptionErr: '',
  };
  showErrorMsg(index) {
    const form_control = document.getElementsByClassName('form_control')[index];
    form_control.classList.add('error');
  }
  showSuccessMsg(index) {
    const form_control = document.getElementsByClassName('form_control')[index];
    form_control.classList.remove('error');
  }
  getInputs() {
    this.formValues.username = document.getElementById('username').value.trim();
    this.formValues.email = document
      .getElementById('emailaddress')
      .value.trim();
    this.formValues.website = document.getElementById('website').value.trim();
    this.formValues.description = document
      .getElementById('description')
      .value.trim();
  }
  validateUsername() {
    if (this.formValues.username === '') {
      this.errorValues.usernameErr = 'invalid input';
      this.showErrorMsg(1);
    } else {
      this.errorValues.usernameErr = '';
      this.showSuccessMsg(1);
    }
  }
  validateEmail() {
    //abc@gmail.co.in
    const regExp =
      /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/;
    if (this.formValues.email === '') {
      this.errorValues.emailErr = 'invalid input';
      this.showErrorMsg(0);
    } else if (!regExp.test(this.formValues.email)) {
      this.errorValues.emailErr = 'invalid input';
      this.showErrorMsg(0);
    } else {
      this.errorValues.emailErr = '';
      this.showSuccessMsg(0);
    }
  }
  validateWebsite() {
    const urlvalid = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
    if (this.formValues.website === '') {
      this.errorValues.websiteErr = 'invalid input';
      this.showErrorMsg(2);
    } else if (!urlvalid.test(this.formValues.website)) {
      this.errorValues.websiteErr = 'invalid input';
      this.showErrorMsg(2);
    } else {
      this.errorValues.websiteErr = '';
      this.showSuccessMsg(2);
    }
  }
  validateDescription() {
    if (this.formValues.description === '') {
      this.errorValues.descriptionErr = 'invalid input';
      this.showErrorMsg(4);
    } else {
      this.errorValues.descriptionErr = '';
      this.showSuccessMsg(4);
    }
  }

  alertMessage() {
    const { emailErr, usernameErr, websiteErr, descriptionErr } =
      this.errorValues;
    if (
      usernameErr === '' &&
      emailErr === '' &&
      websiteErr === '' &&
      descriptionErr === ''
    ) {
      this.succesful();
      this.removeInputs();
    }
  }

  succesful() {
    var x = document.getElementById('toastbar');
    x.className = 'show';
    setTimeout(function () {
      x.className = x.className.replace('show', '');
    }, 3000);
  }

  removeInputs() {
    document.getElementById('form').reset();
  }
}

const ValidateUserInputs = new FormValidation();

document
  .getElementsByClassName('form')[0]
  .addEventListener('submit', (event) => {
    event.preventDefault();
    ValidateUserInputs.getInputs();
    ValidateUserInputs.validateUsername();
    ValidateUserInputs.validateEmail();
    ValidateUserInputs.validateWebsite();
    ValidateUserInputs.validateDescription();
    ValidateUserInputs.alertMessage();
  });

/************* */

const menu = document.getElementById('menu');
menu.onclick = () => {
  menu.classList.toggle('openmenu');
};
///************ */
const btn = document.getElementById('pop');
const popover = document.getElementById('over');
btn.onclick = () => {
  popover.classList.toggle('active');
};

/********* */
function myFunction() {
  const x = document.getElementById('toastbar');
  x.className = 'show';
  setTimeout(function () {
    x.className = x.className.replace('show', '');
  }, 3000);
}

/**********nav disppear on scroll */

const main_nav = document.getElementById('main-nav');

window.addEventListener('scroll', () => {
  let y = window.scrollY;
  if (y >= 60) {
    main_nav.classList.add('disappear');
    return;
  } else {
    main_nav.classList.remove('disappear');
    // note that this is a class defined in your CSS.
  }
});
