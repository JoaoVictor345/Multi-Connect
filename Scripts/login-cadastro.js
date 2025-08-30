  let mostrandoLogin = true;

  function trocarFormulario() {
    const forms = document.querySelector('.forms');
    forms.style.transform = mostrandoLogin ? 'translateX(-50%)' : 'translateX(0)';
    mostrandoLogin = !mostrandoLogin;
  }

  function togglePasswordVisibility(inputId, olhoId) {
    const input = document.getElementById(inputId);
    const olho = document.getElementById(olhoId);
    if (input.type === 'password') {
      input.type = 'text';
      olho.src = '../imgs/olhoaberto.png';
    } else {
      input.type = 'password';
      olho.src = '../imgs/olhofechado.png';
    }
  }

  // Login
  document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameOrEmail = document.getElementById('loginUsername').value;
    const senha = document.getElementById('loginSenhaInput').value;


    if (usernameOrEmail === 'felp' && senha === 'felp') {
   
      console.log('Login bem-sucedido para usuário de teste');
      alert('Login realizado com sucesso!');
       window.location.href = '../Home/home.html';
      return;
    }

   
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u =>
      (u.email === usernameOrEmail || u.username === usernameOrEmail) && u.password === senha
    );

    if (!user) {
      alert('Usuário ou senha incorretos.');
      return;
    }

    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', user.name);
    localStorage.setItem('userUsername', user.username);
    localStorage.setItem('userEmail', user.email);
    localStorage.setItem('userDate', user.data);

    window.location.href = '../Home/home.html';
    
    
    alert('Funcionalidade de login simulada - dados salvos no console');
    console.log('Tentativa de login:', { usernameOrEmail, senha });
  });

  // Cadastro
  document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('signupSenhaInput').value;
    const data = document.getElementById('data').value;

    // Validações básicas
    if (password.length < 6) {
      alert('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    if (!email.includes('@')) {
      alert('Por favor, insira um email válido.');
      return;
    }

    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const jaExiste = users.some(user => user.email === email || user.username === username);
    if (jaExiste) {
      alert("Já existe uma conta com esse email ou nome de usuário.");
      return;
    }

    users.push({ name, username, email, password, data });
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', name);
    localStorage.setItem('userUsername', username);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userDate', data);

    window.location.href = '../Home/home.html';
  
    
    alert('Cadastro realizado com sucesso!');
    console.log('Dados do cadastro:', { name, username, email, password, data });
  });

  // Verificação de login existente
  // Na implementação real, descomente esta função
  
  window.onload = function () {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      window.location.href = '../Home/home.html';
    }
  }
