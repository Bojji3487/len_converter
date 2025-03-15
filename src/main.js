import './style.css';

const dd = document.querySelectorAll(".d_down");
const fromButton = dd[0];
const fromMenu = dd[1];
const toButton = dd[2];
const toMenu = dd[3];

// Toggle dropdown menus on button click
fromButton.addEventListener('click', ()=> {
  fromMenu.classList.toggle('invisible');
  toMenu.classList.add('invisible');
});

toButton.addEventListener('click', ()=> {
    toMenu.classList.toggle('invisible');
  fromMenu.classList.add('invisible');
});

document.addEventListener('click', (event) => {
  if (!fromMenu.contains(event.target) && !fromButton.contains(event.target)) {
    fromMenu.classList.add('invisible');
  }
  if (!toMenu.contains(event.target) && !toButton.contains(event.target)) {
    toMenu.classList.add('invisible');
  }
});


document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    fromMenu.classList.add('invisible');
    toMenu.classList.add('invisible');
  }
});

// Converter algorithm

const defineUnits = {
  'meter(m)': 1,
  'kilometer(km)': 1000,
  'centimeter(cm)': 0.01,
  'millimeter(mm)': 0.001
};


let fromUnit = 'meter(m)'; // default
let toUnit = 'kilometer(km)'; // default
// Update selected units from dropdowns
fromMenu.querySelectorAll('span').forEach(option => {
  option.addEventListener('click', (event) => {
    if (event.target.tagName === 'SPAN') { // Check if a menu option is clicked
      fromMenu.classList.add('invisible');
    }
    fromUnit = option.textContent.trim();
    fromButton.querySelector('span').textContent = fromUnit;
  });
});

toMenu.querySelectorAll('span').forEach(option => {
  option.addEventListener('click', (event) => {
    if (event.target.tagName === 'SPAN') { // Check if a menu option is clicked
      toMenu.classList.add('invisible');
    }
    toUnit = option.textContent.trim();
    toButton.querySelector('span').textContent = toUnit;
  });
});


function convertFrom(){
  let fromValue=parseFloat(document.querySelector("#input1").value);
 let fromUnit=fromButton.querySelector('span').textContent;
 let toUnit=toButton.querySelector('span').textContent;

  if (isNaN(fromValue)) {
    document.getElementById("input2").value = "";
    return;
}

let valueInMeters = fromValue * defineUnits[fromUnit];
let convertedValue = valueInMeters / defineUnits[toUnit];
document.getElementById("input2").value = convertedValue;
}


function convertTo() {
    let toValue = parseFloat(document.getElementById("input2").value);
    let fromUnit=fromButton.querySelector('span').textContent;
    let toUnit=toButton.querySelector('span').textContent;

    if (isNaN(toValue)) {
        document.getElementById("fromValue").value = "";
        return;
    }
    let valueInMeters = toValue * defineUnits[toUnit];
    let convertedValue = valueInMeters / defineUnits[fromUnit];
    document.getElementById("input1").value = convertedValue;
}

document.getElementById("input1").addEventListener("input", convertFrom);
document.getElementById("input2").addEventListener("input", convertTo);

document.addEventListener('click',()=>{
convertFrom();
convertTo();
});