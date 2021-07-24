const get = document.querySelector.bind(document);
const getAll = document.querySelectorAll.bind(document);

get('#agreement').addEventListener('click', () => {
  const ableDesable = get('#submit-btn');

  // eslint-disable-next-line no-unused-expressions
  ableDesable.disabled === true ? ableDesable.disabled = false : ableDesable.disabled = true;
});
get('#textarea').addEventListener('keyup', () => {
  const decrease = get('textarea').value.length;
  get('spam').innerHTML = 500 - decrease;
});
get('#botão').addEventListener('click', () => {
  const loginValid = get('#login').validity.patternMismatch;
  const passwordValid = get('#senha').validity.patternMismatch;
  const empty = get('#senha').value;
  if (loginValid === false && passwordValid === false && empty !== '') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

// Submit Changes

function conteudo() {
  const getSubject = getAll('input[name="conteudo"]:checked');
  let subject = 'Matérias: ';
  for (let index = 0; index < getSubject.length - 1; index += 1) {
    subject = `${subject} ${getSubject[index].value}, `;
  }
  subject += getSubject[getSubject.length - 1].value;
  return subject;
}

const submitText = () => {
  const name = `<div>Nome: ${get('#input-name').value} ${get('#input-lastname').value}</div>`;
  const email = `<div>Email: ${get('#input-email').value}</div>`;
  const house = `<div>Casa: ${get('#house').options[get('#house').selectedIndex].text}</div>`;
  const family = `<div>Família: ${get('input[name="family"]:checked').value}</div>`;
  const text = `<div>Observações: ${get('#textarea').value}</div>`;
  const score = `<div>Avaliação: ${get('input[name="rate"]:checked').value}</div>`;
  const t = conteudo();
  return `<div class="submitText">${name}${email}${house}${family}${text}${score}${t}</div>`;
};

const houseNick = () => {
  const house = get('#house').options[get('#house').selectedIndex];
  console.log(get('#house').options[get('#house').selectedIndex].value);
  if (house.value === 'gitnoria') {
    return 'Potter';
  } if (house.value === 'corvinode') {
    return 'Lovegood';
  } if (house.value === 'pytherina') {
    return 'Malfoy';
  } if (house.value === 'reactpuff') {
    return 'Diggory';
  }
};

get('#submit-btn').addEventListener('click', (e) => {
  e.preventDefault();
  const nick = `${get('#input-name').value} ${houseNick()}`;
  const f = document.querySelector('#evaluation-form');
  f.innerHTML = `<h2 id='nick'>Bem-vindo ${nick}</h2><div id="row--submit">${submitText()}</div>`;
});

// House Style Changes

const getLogo = get('#trybewarts-forms-logo');

const gitnoria = () => {
  get('main').style = 'background: linear-gradient(to right, #ffe8d5, #b20a2c);';
  getLogo.setAttribute('src', './images/pngegg.png');
};

const pytherina = () => {
  get('main').style = '  background: linear-gradient(to right, #d6f7e1, #93f9b9, #1d976c);';
  getLogo.setAttribute('src', './images/sonserina.png');
};

const reactpuff = () => {
  get('main').style = 'background: linear-gradient(to right, #f8f7cb, #fffc00);';
  getLogo.setAttribute('src', './images/raflepuf.png');
};

const corvinode = () => {
  get('main').style = '  background: linear-gradient(to right, #d2effa, #6dd5fa, #2980b9);';
  getLogo.setAttribute('src', './images/ravenclaw.png');
};

const defaultLogo = () => {
  get('main').style = '  background: #fff;';
  getLogo.setAttribute('src', './images/trybewarts-colored.svg');
};

get('#house').addEventListener('change', (e) => {
  const house = e.target.options[get('#house').selectedIndex];
  if (house.value === 'gitnoria') {
    gitnoria();
  } else if (house.value === 'corvinode') {
    corvinode();
  } else if (house.value === 'pytherina') {
    pytherina();
  } else if (house.value === 'reactpuff') {
    reactpuff();
  } else { defaultLogo(); }
});
