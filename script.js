const letterBtn = document.getElementById('criar-carta');
const input = document.getElementById('carta-texto');
const p = document.querySelector('p');

letterBtn.addEventListener('click', () => {
  while (p.firstChild) {
    p.removeChild(p.firstChild);
  }
  const inputTextArray = input.value.split(' ');
  for (let i = 0; i < inputTextArray.length; i += 1) {
    const span = document.createElement('span');
    span.innerText = inputTextArray[i];
    p.appendChild(span);
  }
});
