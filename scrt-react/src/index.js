import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

// function emailValido(email) {
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return regex.test(email);
// }

// function telefoneValido(telefone) {
//   return telefone.trim().length >= 10;
// }

// function assuntoValido(assunto) {
//   return assunto.trim() !== '' && assunto.trim().length <= 255;
// }

// function mensagemValida(mensagem) {
//   return mensagem.trim() !== '';
// }

// function validarFormulario(evento) {
//   evento.preventDefault();

//   let todosValidos = true;

//   const nome = document.getElementById('name');

//   const nomeErro = document.getElementById('name-error');

//   if (!nome.value.trim()) {
//     nome.style.border = '2px solid red';

//     // nomeErro.style.display = 'block';

//     todosValidos = false;
//   } else {
//     nome.style.border = '';

//     // nomeErro.style.display = 'none';
//   }

//   const email = document.getElementById('email');

//   const emailErro = document.getElementById('email-error');

//   if (!emailValido(email.value)) {
//     email.style.border = '2px solid red';

//     // emailErro.style.display = 'block';

//     todosValidos = false;
//   } else {
//     email.style.border = '';

//     // emailErro.style.display = 'none';
//   }

//   const telefone = document.getElementById('phone');

//   const telefoneErro = document.getElementById('phone-error');

//   if (!telefoneValido(telefone.value)) {
//     telefone.style.border = '2px solid red';

//     // telefoneErro.style.display = 'block';

//     todosValidos = false;
//   } else {
//     telefone.style.border = '';

//     // telefoneErro.style.display = 'none';
//   }

//   const assunto = document.getElementById('subject');

//   const assuntoErro = document.getElementById('subject-error');

//   if (!assuntoValido(assunto.value)) {
//     assunto.style.border = '2px solid red';

//     // assuntoErro.style.display = 'block';

//     todosValidos = false;
//   } else {
//     assunto.style.border = '';

//     // assuntoErro.style.display = 'none';
//   }

//   const mensagem = document.getElementById('message');

//   const mensagemErro = document.getElementById('message-error');

//   if (!mensagemValida(mensagem.value)) {
//     mensagem.style.border = '2px solid red';

//     // mensagemErro.style.display = 'block';

//     todosValidos = false;
//   } else {
//     mensagem.style.border = '';

//     // mensagemErro.style.display = 'none';
//   }

//   if (todosValidos) {
//     $('#modalAgradecimento'.modal('show'));
//     document.getElementById('fruitkha-contact').submit();
//   }
// }

// document.getElementById('fruitkha-contact').addEventListener('submit', validarFormulario);
