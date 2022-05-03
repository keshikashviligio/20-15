// lecture 19
// const USER_REGISTRATION_MODAL_SELECTOR = '.my-modal';
// const form = document.querySelector('#user-login-form');
// const emailInput = document.querySelector('input[name="email"]');
// const passwordInput = document.querySelector('input[name="password"]');
// const personalNumberInput = document.querySelector('input[name="personal_number"]');
// const mobileNumberInput = document.querySelector('input[name="mobile_number"]');
// const positionInput = document.querySelector('input[name="position"]');
//
// form.addEventListener('submit', e => {
//   e.preventDefault();
//   try {
//     console.log(emailInput.value);
//   } catch (e) {
//     console.log('catch error', e);
//   }
//   const isEmailValid = validateEmail();
//   const isPasswordValid = validatePassword();
//   const isPnValid = validatePersonalNumber();
//   const isMobileValid = validateMobileNumber();
//   const isPositionValid = validatePosition();
//   if(isEmailValid && isPasswordValid && isPnValid && isMobileValid && isPositionValid){
//     closeModal(USER_REGISTRATION_MODAL_SELECTOR);
//     console.log('Call to backend api');
//   }
// });
//
// function validateEmail(){
//   if(!emailInput.value){
//     emailInput.classList.add('has-error');
//     emailInput.parentNode.querySelector('.error-message').innerText = 'Please enter email';
//     return false;
//   }
//   if(!emailInput.value.includes('@') || !emailInput.value.includes('.')){
//     emailInput.classList.add('has-error');
//     emailInput.parentNode.querySelector('.error-message').innerText = 'Invalid email';
//     return false;
//   }
//   emailInput.classList.remove('has-error');
//   emailInput.parentNode.querySelector('.error-message').innerText = '';
//   return true;
// }
//
// function validatePassword(){
//   if(!passwordInput.value){
//     passwordInput.classList.add('has-error');
//     passwordInput.parentNode.querySelector('.error-message').innerText = 'Please enter password';
//     return false;
//   }
//   if(passwordInput.value.length < 8){
//     passwordInput.classList.add('has-error');
//     passwordInput.parentNode.querySelector('.error-message').innerText = 'Password must include 8 char';
//     return false;
//   }
//   passwordInput.classList.remove('has-error');
//   passwordInput.parentNode.querySelector('.error-message').innerText = '';
//   return true;
// }
//
// function validatePersonalNumber(){
//   if(!personalNumberInput.value){
//     personalNumberInput.classList.add('has-error');
//     personalNumberInput.parentNode.querySelector('.error-message').innerText = 'Please enter personal number';
//     return false;
//   }
//   if(isNaN(Number(personalNumberInput.value))){
//     personalNumberInput.classList.add('has-error');
//     personalNumberInput.parentNode.querySelector('.error-message').innerText = 'Please enter correct Personal number';
//     return false;
//   }
//   if(personalNumberInput.value.length !== 11){
//     personalNumberInput.classList.add('has-error');
//     personalNumberInput.parentNode.querySelector('.error-message').innerText = 'Personal number length mismatch';
//     return false;
//   }
//   personalNumberInput.classList.remove('has-error');
//   personalNumberInput.parentNode.querySelector('.error-message').innerText = '';
//   return true;
// }
//
// function validateMobileNumber(){
//   if(!mobileNumberInput.value){
//     mobileNumberInput.classList.add('has-error');
//     mobileNumberInput.parentNode.querySelector('.error-message').innerText = 'Please enter mobile number';
//     return false;
//   }
//   if(mobileNumberInput.value.length !== 9){
//     mobileNumberInput.classList.add('has-error');
//     mobileNumberInput.parentNode.querySelector('.error-message').innerText = 'Mobile number length mismatch';
//     return false;
//   }
//   mobileNumberInput.classList.remove('has-error');
//   mobileNumberInput.parentNode.querySelector('.error-message').innerText = '';
//   return true;
// }
//
// function validatePosition(){
//   if(positionInput.value && positionInput.value.length > 30){
//     positionInput.classList.add('has-error');
//     positionInput.parentNode.querySelector('.error-message').innerText = 'Position length mismatch';
//     return false;
//   }
//   positionInput.classList.remove('has-error');
//   positionInput.parentNode.querySelector('.error-message').innerText = '';
//   return true;
// }
//
// const modalOpenBtn = document.querySelector('#open-modal');
// modalOpenBtn.addEventListener('click', () => {
//   openModal(USER_REGISTRATION_MODAL_SELECTOR);
// })
//
// function openModal(modalSelector){
//   const modalNode = document.querySelector(modalSelector);
//   modalNode.classList.add('visible');
//   const modalCloseBtn = modalNode.querySelector('.modal-close');
//   modalCloseBtn.addEventListener('click', () => {
//     closeModal(modalSelector)
//   })
// }
//
// function closeModal(modalSelector){
//   const modalNode = document.querySelector(modalSelector);
//   modalNode.classList.remove('visible');
// }

// Lecture 20
// http://api.kesho.me/v1/user-test

// Promises
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Data 1');
//     // reject('error from promise');
//   }, 10000);
// });

// const myPromise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Data 2');
//     // reject('error from promise');
//   }, 2000);
// });
//
// Promise.all([myPromise, myPromise1]).then(data => {
//   console.log(data);
// });

// Async functions
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Data 1');
//     // reject('error from promise');
//   }, 5000);
// });

// async function myASyncFunc(){
//   try {
//     const data = await myPromise;
//     // console.log(data.aaaa);
//   } catch (e) {
//     console.log('ASync error', e);
//   }
// }

// myASyncFunc();
// myPromise.then(data => {
//   console.log('data', data);
// }).catch(error => {
//   console.log(error);
// });
// console.log('AAA');

// Fetch / Ajax
// TODO: ამის ქვემოთ არის ინსტრუქცია

const signupForm = document.querySelector('#user-signup-form');
// const username = document.querySelector('#username');
const email = document.querySelector('#email');
const personal_number = document.querySelector('#personal_number');
const mobile_number = document.querySelector('#mobile_number');
const first_name = document.querySelector('#first_name');
const last_name = document.querySelector('#last_name');
const zip = document.querySelector('#zip');
const gender = document.querySelector('#gender');
const status = document.querySelector('#status');
const user_id = document.querySelector('#user_id');
// const position = document.querySelector('#position');

signupForm.addEventListener('submit', e => {
  e.preventDefault();
  const userData = {
    id: user_id.value,
    first_name: first_name.value,
    last_name: last_name.value,
    zip: zip.value,
    mobile: mobile_number.value,
    pn: personal_number.value,
    gender: gender.value,
    email: email.value,
    status: status.value,
  };
  // createUser(userData); TODO: თუ user_id.value არის ცარიელი მაშინ უნდა შევქმნათ
  // updateUser(userData); TODO: თუ user_id.value არის მაშინ უნდა დავაედიტოთ
  console.log('Save user');
});

// TODO: დაასრულეთ შემდეგი ფუნქციები
// დაგჭირდებათ მოდალი სადაც ფორმი უნდა ჩასვათ
function renderUsers(usersArray) {
  // TODO: usersArray არის სერვერიდან დაბრუნებული ობიექტების მასივი
  // TODO: ამ მონაცმების მიხედვით html ში ჩასვით ცხრილი როგორც "ცხრილი.png" შია
  console.log(usersArray);
  userActions(); // ყოველ რენდერზე ახლიდან უნდა მივაბათ ივენთ ლისნერები
}

// TODO: დაასრულე
function userActions(){
  // 1. ცხრილში ღილაკებზე უნდა მიამაგროთ event listener-ები
  // 2. იქნება 2 ღილაკი რედაქტირება და წაშლა როგორც "ცხრილი.png" ში ჩანს
  // 3. id შეინახეთ data-user-id ატრიბუტად ღილაკებზე
  // 4. წაშლა ღილაკზე დაჭერისას უნდა გაიგზავნოს წაშლის მოთხოვნა (deleteUser ფუნქციის მეშვეობით) სერვერზე და გადაეცეს id
  // 5. ეიდტის ღილაკზე უნდა გაიხსნას მოდალი სადაც ფორმი იქნება იმ მონაცემებით შევსებული რომელზეც მოხდა კლიკი
  // ეიდტის ღილაკზე უნდა გამოიძახოთ getUser ფუნქცია და რომ დააბრუნებს ერთი მომხმარებლის დატას (ობიექტს და არა მასივს)
  // ეს დატა უნდა შეივსოს ფორმში
}

async function getUsers(){
  try {
    const response = await fetch('http://api.kesho.me/v1/user-test/index');
    const users = await response.json();
    renderUsers(users);
  } catch (e){
    console.log('Error - ', e);
  }
}
getUsers();
/**
 *
 * შეგიძლიათ await response.json() დააბრუნოთ და საიდანაც გამოიძახებთ ამ ფუნქციას,
 * ისიც async უნდა იყოს და იქაც await უნდა დაუწეროთ გამოძახების წინ რომ დატა დაგიბრუნოთ
 *
 * @param userId
 * @returns {Promise<void>}
 */
async function getUser(userId) {
  try {
    // TODO: დაასრულე
    // `http://api.kesho.me/v1/user-test/view?id=${userId}`
    // const data = await response.json();
  } catch (e) {
    console.log('Error - ', e);
  }
}
async function createUser(userData){
  try {
    const response = await fetch('http://api.kesho.me/v1/user-test/create', {
      method: 'post',
      body: JSON.stringify(userData),
      headers: {'Content-Type': 'application/json'}
    });
    await response.json();
    getUsers(); // TODO: შენახვის ედიტირების და წაშლის შემდეგ ახლიდან წამოიღეთ დატა
  }catch (e){
    console.log('Error - ', e);
  }
}
async function updateUser(userObject) {
  // TODO: დაასრულე
  // method POST http://api.kesho.me/v1/user-test/update?id=userObject.id
}
async function deleteUser(userId) {
  // TODO დაასრულე
  // method DELETE `http://api.kesho.me/v1/user-test/delete?id=${userId}`
}

