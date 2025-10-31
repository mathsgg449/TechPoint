// ======= CADASTRO =======
const form = document.getElementById('cadastroForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value;
  const confirmarSenha = document.getElementById('confirmarSenha').value;

  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem. Tente novamente.");
    return;
  }

  const usuario = { nome, email, senha };
  localStorage.setItem('usuario', JSON.stringify(usuario));

  alert("Conta criada com sucesso!");
  window.location.href = "login.html";
});

// ======= MODO ESCURO =======
const modeToggle = document.getElementById('modeToggle');
const modeIcon = document.getElementById('modeIcon');

modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');



  // Salva preferência
  localStorage.setItem('tema', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Carrega o tema salvo ao iniciar
window.addEventListener('DOMContentLoaded', () => {
  const temaSalvo = localStorage.getItem('tema');
  if (temaSalvo === 'dark') {
    document.body.classList.add('dark');
    modeIcon.src = "tema claro.png";
  }
});
