// YOUR CODE GOES HERE!!!
/*************************/
function getFirstName(person1){
  return person1.firstName;
}

function getLastName(person1){
  return person1.lastName;
}

function getFullName(person1){
  return `${person1.firstName} ${person1.lastName}`;
}

function setFirstName(person1, newFirstName) {
  person1.newFirstName = 'Michael';
  person1.firstName = newFirstName;
  return person1.newFirstName
}

function setAge(person1, newAge){
  person1.newAge = 42;
  person1.age = newAge;
  return person1.newAge
}

function giveBirthday(person1) {
  if (person1.age === undefined) {
    person1.age = 1;
  } else {
    person1.age += 1;
  }
  return giveBirthday
}


function marry(person1, person2){
  person1.married = true;
  person1.spouseName = person2.firstName + " " + person2.lastName;
  person2.married = true;
  person2.spouseName = person1.firstName + " " + person1.lastName;
  return marry
}

function divorce(person1, person2) {
  person1.married = false;
  person2.married = false;
  delete person1.spouseName;
  delete person2.spouseName;
  return divorce
}


/****************************/
// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}



module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
