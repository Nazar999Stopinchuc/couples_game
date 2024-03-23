let gameBox = document.querySelector('.cards-box');
let vinTexe = document.querySelector('.vin-text');
let numbs = ['🦁', '🦁', '🐻', '🐻', '🐨', '🐨', '🐼', '🐼', '🐺', '🐺', '🐮', '🐮'];
let vinArr = [];
let count = 0;

document.querySelector('.start-btn').onclick = gameStart;

function createCard(text) {
  let card = document.createElement('div');
  card.classList.add('cards-box__card');

  let cardFront = document.createElement('div');
  cardFront.classList.add('card-front');

  let cardBack = document.createElement('div');
  cardBack.classList.add('card-back');

  cardFront.textContent = '?';
  cardBack.textContent = text;

  card.appendChild(cardFront);
  card.appendChild(cardBack);

  card.addEventListener('click', () => {
    cardClick(card)
  })

  gameBox.appendChild(card);
}


function cardClick(card) {
  if (card.classList.contains('visible')) {
    return;
  }

  card.classList.add('visible');

  vinArr.push(card);

  if (vinArr.length % 2 !== 0) {
    return;
  }

  let preLastCard = vinArr[vinArr.length - 2];
  let lastCard = vinArr[vinArr.length - 1];

  if (preLastCard.textContent !== lastCard.textContent) {
    vinArr = vinArr.slice(0, vinArr.length - 2);

    setTimeout(() => {
      preLastCard.classList.remove('visible');
      lastCard.classList.remove('visible');
    }, 800);

  }

  setTimeout(() => {
    if (vinArr.length === 12) {
      vinTexe.textContent = 'Вітаємо! Ви перемогли';
    }
  }, 300);
 
}

function generArre(arr) {
  randArr = [];
  randArr = shuffle(arr);

  return randArr;
}

function gameStart() {
  vinArr = [];
  vinTexe.textContent = '';
  let randArr = [];
  randArr = shuffle(numbs);
  gameBox.innerHTML = '';

  for (k of randArr) {
    createCard(k);
  }
}

function shuffle(arr) {
  let newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

gameStart();
