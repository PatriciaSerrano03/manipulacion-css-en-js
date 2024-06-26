// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const boxElement = document.getElementById('box');

const ButtonElement = document.getElementById('button');

ButtonElement.addEventListener('click', () => {
  if (boxElement.classList.contains('box--green')) {
    boxElement.classList.remove('box-green');
  } else {
    boxElement.classList.add('box-green');
  }
});

const formElement = document.getElementById('form');

const checkForm = event => {
  event.preventDefault();
};

formElement.addEventListener('submit', checkForm);

formElement.addEventListener('input', event => {
  console.log(event.target.value);
});
