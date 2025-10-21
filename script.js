// script.js
// Funções de interatividade para o site Tizzot Advocacia

// Navegação responsiva
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('header nav ul');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('show');
    });
  }
});

// Manipula o envio do formulário de contato
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  // Aqui você pode adicionar integração com um serviço de backend ou API.
  // Como este é um exemplo, apenas mostramos uma mensagem de agradecimento.
  alert('Obrigado por entrar em contato! Em breve nossa equipe responderá.');
  form.reset();
  return false;
}