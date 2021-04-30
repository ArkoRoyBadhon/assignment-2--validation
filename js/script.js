//define ui elements
let namef = document.querySelector('#name');
let emailf = document.querySelector('#email');
let numberf = document.querySelector('#number');
let postcodef = document.querySelector('#postcode');
let districtf = document.querySelector('#district');

let formf = document.querySelector('#result');


//define add event listener
namef.addEventListener('click', nameevent);
emailf.addEventListener('click', emailinput);
numberf.addEventListener('click', numberinput);
postcodef.addEventListener('click', pp);
districtf.addEventListener('click', dictrictinput);

class UI {
    constructor() {

    }

    static list(value) {
        let x = document.createElement('h4');
        x.innerHTML = `${value}`;
        formf.appendChild(x);
    }
    static clear() {
        formf.innerHTML = '';
    }
}

// define function
function nameevent(e) {
    UI.clear();
    let ex = /[a-zA-Z. ]{3,30}$/;
    let inputname = prompt('Enter Your Name');
    if (inputname.match(ex)) {
        let hel = `Your Entered Name "${inputname}" is Valid`;
        UI.list(hel);
    } else {
        let hel = `Your Entered Name "${inputname}" is invalid`;
        UI.list(hel);
    }
}

function emailinput(e) {
    UI.clear();
    let ex = /^[a-zA-Z0-9.-]{4,}@[a-zA-Z]{2,}[.]{1}[a-zA-Z.]{2,10}$/;
    let inputemail = prompt('Enter Your Email');
    if (inputemail.match(ex)) {
        let hel = `Your Entered Email "${inputemail}" is Valid`;
        UI.list(hel);
    } else {
        let hel = `Your Entered Email "${inputemail}" is invalid`;
        UI.list(hel);
    }
}

function numberinput(e) {
    UI.clear();
    let ex = /[+]?8?8?01[0-9]{9}$/;
    let inputnumber = prompt('Enter Your Phone Number');
    if (inputnumber.match(ex)) {
        let hel = `Your Entered Phone Number "${inputnumber}" is Valid`;
        UI.list(hel);
    } else {
        let hel = `Your Entered Phone Number "${inputnumber}" is invalid`;
        UI.list(hel);
    }
}

function pp(e) {
    UI.clear();
    let ex = /[0-9]{2,10}$/;
    let inputpost = prompt('Enter Your Post Code');
    if (inputpost.match(ex)) {
        let hel = `Your Entered PostCode "${inputpost}" is Valid`;
        UI.list(hel);
    } else {
        let hel = `Your Entered PostCode "${inputpost}" is invalid`;
        UI.list(hel);
    }
}

function dictrictinput(e) {
    UI.clear();
    let ex = /[a-zA-Z ]{3,30}$/;
    let inputdis = prompt('Enter Your District');
    if (inputdis.match(ex)) {
        let hel = `Your Entered District Name "${inputdis}" is Valid`;
        UI.list(hel);
    } else {
        let hel = `Your Entered District Name "${inputdis}" is invalid`;
        UI.list(hel);
    }
}

