const body = document.body;
body.style.height='100vh';
body.style.display='flex';
body.style.flexDirection='column';
body.style.justifyContent='center';
body.style.alignItems='center';
const genhexaColor = () => {
let str = "0123456789abcdef";
let hexa = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    hexa += str[index];
  }
  return "#" + hexa;
};

console.log(genhexaColor());

let interval = setInterval(() => {
  body.style.background = 'lightgray';
  wrapper.textContent =showDate();
}, 2000);


const showDate = () => {
    const now = new Date();

    const date = now.getDate();
    
    const month = now.getMonth() + 1;
    
    const year = now.getFullYear();
    
    const hour = now.getHours();
    
    const minute = now.getMinutes();
    const second = now.getSeconds();
    return `${date}/${month}/${year} ${hour}:${minute}`
}

const wrapper = document.querySelector('.wrapper');
wrapper.style.fontSize='60px';

const button = document.querySelector('button');
button.addEventListener('click',()=>{
    body.style.backgroundColor = genhexaColor();
})