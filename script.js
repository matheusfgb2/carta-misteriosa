const letterBtn = document.getElementById('criar-carta');
const input = document.getElementById('carta-texto');
const p = document.querySelector('p');
const letterResult = document.getElementById('letter-result');

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

const styleGroup = 'newspaper, magazine1, magazine2'.split(', ');
const sizeGroup = 'medium, big, reallybig'.split(', ');
const rotationGroup = 'rotateleft, rotateright'.split(', ');
const inclinationGroup = 'skewleft, skewright'.split(', ');

const generateRandomClass = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const countWords = (number) => {
  const latestpCounter = document.getElementById('carta-contador');
  if (latestpCounter) {
    latestpCounter.remove();
  }
  const pCounter = document.createElement('p');
  pCounter.innerHTML = `Palavras geradas: ${number}`;
  pCounter.id = 'carta-contador';
  letterResult.appendChild(pCounter);
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
      span.classList.add(generateRandomClass(styleGroup));
      span.classList.add(generateRandomClass(sizeGroup));
      span.classList.add(generateRandomClass(rotationGroup));
      span.classList.add(generateRandomClass(inclinationGroup));
      p.appendChild(span);
    }
    countWords(inputTextArray.length);
  }
});

p.addEventListener('click', (event) => {
  if (event.target.id !== 'carta-gerada') {
    const spanClass = event.target.classList;
    spanClass.remove(...spanClass);
    spanClass.add(generateRandomClass(styleGroup));
    spanClass.add(generateRandomClass(sizeGroup));
    spanClass.add(generateRandomClass(rotationGroup));
    spanClass.add(generateRandomClass(inclinationGroup));
  }
});
