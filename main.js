const button = document.querySelector('button');
const h2Text = document.querySelector('h2');
const bg = document.querySelector('div');

button.addEventListener('click', function(){
  let color = '#';
  color += Math.random().toString(16).slice(2, 8).toUpperCase();
  bg.style.backgroundColor = color;
  h2Text.innerText = color
});
