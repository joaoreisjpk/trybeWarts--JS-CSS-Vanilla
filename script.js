document.querySelector('#agreement').addEventListener('click', () => {
  document.querySelector('#submit-btn').disabled = false;
});
document.querySelector('#textarea').addEventListener('keyup', () => {
  const decrease = document.querySelector('textarea').value.length;
  document.querySelector('spam').innerHTML = 500 - decrease;
});
document.querySelector('#botão').addEventListener('click', () => {
  const loginValid = document.querySelector('#login').validity.patternMismatch;
  const passwordValid = document.querySelector('#senha').validity.patternMismatch;
  const empty = document.querySelector('#senha').value;
  if (loginValid === false && passwordValid === false && empty !== '') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
const get = document.querySelector.bind(document);
const getAll = document.querySelectorAll.bind(document);
const espaco = ' ';
const espacoV = ', ';
const n = 'Nome: ';
const semail = 'Email: ';
const h = 'Casa: ';
const familia = 'Família: ';
const avaliacao = 'Avaliação: ';
const observacao = 'Observações: ';
function conteudo() {
  const getSubject = getAll('input[name="conteudo"]:checked');
  let subject = 'Matérias: ';
  for (let index = 0; index < getSubject.length - 1; index += 1) {
    subject = subject + getSubject[index].value + espacoV;
  }
  subject += getSubject[getSubject.length - 1].value;
  return subject;
}
document.querySelector('#submit-btn').addEventListener('click', (e) => {
  e.preventDefault();
  const name = n + get('#input-name').value + espaco + get('#input-lastname').value;
  const email = semail + get('#input-email').value;
  const house = h + get('#house').options[get('#house').selectedIndex].text;
  const family = familia + get('input[name="family"]:checked').value;
  const t = conteudo();
  const text = observacao + get('#textarea').value;
  const score = avaliacao + get('input[name="rate"]:checked').value;
  const f = document.querySelector('#evaluation-form');
  f.innerHTML = `<div>${name}<br>${email}<br>${house}<br>${family}<br>${text}<br>${score}</div>`;
  f.innerHTML += `<div>${t}</div>`;
});
