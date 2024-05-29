let input_box = document.querySelector("#input");
let passlength = document.querySelector("#passlength")
const length = passlength.value;
console.log(length)

let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerCase = 'abcdefghijklmnopqurstuvwxyz';
let number = '1234567890';
let specialChar = '!@#$%^&*()-=/{}[]+';
let allChar = specialChar + lowerCase + upperCase + number;

let copyimg = document.querySelector("#copy-img");


const password = ()=>{
    let password = "";
    password +=  upperCase[Math.floor(Math.random() * upperCase.length)]
    password +=  lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password +=  number[Math.floor(Math.random() * number.length)]
    password +=  specialChar[Math.floor(Math.random() * specialChar.length)]

    while(length > password.length) {
        password +=  allChar[Math.floor(Math.random() * allChar.length)]
    } 
  
      input_box.value = password;
      copyimg.setAttribute('src' , './rpg_img/copy.png');

} 

function copy()  {
    input_box.select();
    document.execCommand('copy');
    copyimg.setAttribute('src' , './rpg_img/copied.jpeg');
}