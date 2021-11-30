//Grab single element
// const form = document.getElementById('my-form');
// console.log(form);

// console.log(document.querySelector('.container'));
// console.log(document.querySelector('h1'));

//Grab multiple elements
// const nodeItems = document.querySelectorAll('.item');
// const colItems = document.getElementsByClassName('item');
//console.log(document.getElementsByTagName('li'));

//nodeItems.forEach(item => console.log(item));
//colItems.forEach(item => console.log(item));
// for(var i = 0; i < colItems.length; i++){
//     console.log(colItems[i]);
// }

//DOM Manipulation
// const ul = document.querySelector('.items');

//ul.remove();

// const btn = document.querySelector('.btn');
// btn.style.backgroundColor = 'blue';
// btn.style.color = 'white';

// btn.addEventListener('click', e => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.backgroundColor = '#ccc';
//     ul.firstElementChild.textContent = 'HTML';
//     ul.children[1].innerText = 'CSS';
//     ul.lastElementChild.innerHTML = '<h4>JavaScript</h4>';
// })

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
const passwordInput = document.querySelector('#password');
const contactInput = document.querySelector('#contact');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  /*==== email Validation Start =====*/
  let validate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let emailValidation;
  if (emailInput.value.match(validate)) {
    emailValidation = true;
  } else {
    emailValidation = false;
  }
  /*==== email Validation end ====*/

  if (
    nameInput.value === '' ||
    emailInput.value === '' ||
    passwordInput.value === '' ||
    contactInput.value === ''
  ) {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => {
      msg.innerHTML = '';
      msg.classList.remove('error');
    }, 3000);
  } else if (!emailValidation) {
    msg.classList.add('error');
    msg.innerHTML = 'Enter a valid email ID';
    setTimeout(() => {
      msg.innerHTML = '';
      msg.classList.remove('error');
    }, 3000);
  } else {
    const li = document.createElement('li');
    li.appendChild(
      document.createTextNode(` ${nameInput.value} :  ${emailInput.value} `)
    );
    li.appendChild(document.createElement('br'));
    li.appendChild(
      document.createTextNode(`Contact:   ${contactInput.value} `)
    );
    userList.appendChild(li);
    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
    contactInput.value = '';
  }
}
