let colors = [];
const textColorGuess = document.querySelector('#rgb-color');
const colorsForChoices = document.querySelector('#colors-for-choices');
const answer = document.querySelector('#answer');
const buttonfunc6 = document.querySelector('#reset-game');
const score = document.querySelector('#score');
let numberScore = 0;
score.innerHTML = `Placar: ${numberScore}`;

function func1() {
  return Math.floor(Math.random() * 256);
}

function func2() {
  const color = `(${func1()}, ${func1()}, ${func1()})`;
  return color;
}
function func3() {
  colors = [];
  const colorGuess = func2();
  const color1 = func2();
  const color2 = func2();
  const color3 = func2();
  const color4 = func2();
  const color5 = func2();
  colors.push(colorGuess, color1, color2, color3, color4, color5);
}

function func4(e) {
  const question = e.target.style.backgroundColor;
  const correct = `rgb${textColorGuess.innerHTML}`;
  if (question === correct) {
    answer.innerHTML = 'Acertou!';
    numberScore += 3;
    score.innerHTML = `Placar: ${numberScore}`;
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
    numberScore -= 1;
    score.innerHTML = `Placar: ${numberScore}`;
  }
}

function func5() {
  textColorGuess.innerHTML = [colors[0]];
  for (let i = colors.length - 1; i >= 0; i -= 1) {
    const colorToChoose = document.createElement('div');
    colorToChoose.classList.add('ball');
    colorToChoose.addEventListener('click', func4);
    const randomArrayPosition = Math.random() * colors.length;
    colorToChoose.style.backgroundColor = `rgb${colors.splice(randomArrayPosition, 1)}`;
    colorsForChoices.appendChild(colorToChoose);
  }
  answer.innerHTML = 'Escolha uma cor';
}

function func6() {
  for (let i = colorsForChoices.children.length - 1; i >= 0; i -= 1) {
    const ball = colorsForChoices.children[i];
    colorsForChoices.removeChild(ball);
  }
  func3();
  func5();
}

func3();
func5();

buttonfunc6.addEventListener('click', func6);
