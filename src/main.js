import './style.css';

const dd = document.querySelectorAll(".d_down");
const ddbutton1 = dd[0];
const ddmenu1 = dd[1];
const ddbutton2 = dd[2];
const ddmenu2 = dd[3];

// Toggle dropdown menus on button click
ddbutton1.addEventListener('click', ()=> {
  ddmenu1.classList.toggle('invisible');
  ddmenu2.classList.add('invisible');
});

ddbutton2.addEventListener('click', ()=> {
    ddmenu2.classList.toggle('invisible');
  ddmenu1.classList.add('invisible');
});

document.addEventListener('click', (event) => {
  if (!ddmenu1.contains(event.target) && !ddbutton1.contains(event.target)) {
    ddmenu1.classList.add('invisible');
  }
  if (!ddmenu2.contains(event.target) && !ddbutton2.contains(event.target)) {
    ddmenu2.classList.add('invisible');
  }
});

ddmenu1.addEventListener('click', (event) => {
  if (event.target.tagName === 'SPAN') { 
    ddmenu1.classList.add('invisible');
  }
});

ddmenu2.addEventListener('click', (event) => {
  if (event.target.tagName === 'SPAN') { // Check if a menu option is clicked
    ddmenu2.classList.add('invisible');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    ddmenu1.classList.add('invisible');
    ddmenu2.classList.add('invisible');
  }
});