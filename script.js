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

const styleGroup = 'newspaper, magazine1, magazine2'.split(', ');
const sizeGroup = 'medium, big, reallybig'.split(', ');
const rotationGroup = 'rotateleft, rotateright'.split(', ');
const inclinationGroup = 'skewleft, skewright'.split(', ');

const arrayofClasses = [styleGroup, sizeGroup, rotationGroup, inclinationGroup];

const generateRandomClass = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  const rIContent = array[randomIndex];
  const randomIndex2 = Math.floor(Math.random() * rIContent.length);
  if (array[randomIndex][randomIndex2].length > 1) {
    return array[randomIndex][randomIndex2];
  }
  return array[randomIndex];
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
