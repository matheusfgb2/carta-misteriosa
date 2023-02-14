const letterBtn = document.getElementById('criar-carta');
const input = document.getElementById('carta-texto');
const p = document.querySelector('p');

const verifyInput = () => {
  if (input.value === '') {
    p.innerHTML = 'Por favor, digite o conteúdo da carta.';
    return false;
  }
  const inputTextArray = input.value.split('');
  for (let i = 0; i < inputTextArray.length; i += 1) {
    if (inputTextArray[i] !== ' ') {
      return true;
    }
  }
  p.innerHTML = 'Por favor, digite o conteúdo da carta.';
  return false;
};

letterBtn.addEventListener('click', () => {
  if (verifyInput()) {
    while (p.firstChild) {
      p.removeChild(p.firstChild);
    }
    const inputTextArray = input.value.split(' ');
    for (let i = 0; i < inputTextArray.length; i += 1) {
      const span = document.createElement('span');
      span.innerText = inputTextArray[i];
      p.appendChild(span);
    }
  }
});
