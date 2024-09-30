// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Função para recuperar as informações do LocalStorage
    function recuperarInformacoes() {
        const usuario = localStorage.getItem('usuario');
        if (usuario) {
            const usuarioObj = JSON.parse(usuario);
            document.getElementById('resultado').textContent = `Nome: ${usuarioObj.nome}, Email: ${usuarioObj.email}`;
        } else {
            document.getElementById('resultado').textContent = 'Nenhuma informação encontrada no LocalStorage';
        }
    }

    // Chama a função para recuperar as informações
    recuperarInformacoes();
});

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Coleta os valores do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Verificações de usuário, senha e email
    if (!nome || nome.trim() === '') {
        document.getElementById('resultado').textContent = 'Preencha o campo de nome!';
        document.getElementById('resultado').style.color = 'red';
        return;
    }

    if (!email || email.trim() === '') {
        document.getElementById('resultado').textContent = 'Preencha o campo de email!';
        document.getElementById('resultado').style.color = 'red';
        return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        document.getElementById('resultado').textContent = 'Email inválido!';
        document.getElementById('resultado').style.color = 'red';
        return;
    }

    if (!senha || senha.trim() === '') {
        document.getElementById('resultado').textContent = 'Preencha o campo de senha!';
        document.getElementById('resultado').style.color = 'red';
        return;
    }

    if (senha.length < 8) {
        document.getElementById('resultado').textContent = 'Senha deve ter pelo menos 8 caracteres!';
        document.getElementById('resultado').style.color = 'red';
        return;
    }

    // Cria um objeto com as informações do usuário
    const usuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    // Armazena o objeto no LocalStorage
    localStorage.setItem('usuario', JSON.stringify(usuario));

    // Exibe o resultado
    document.getElementById('resultado').textContent = `Cadastro realizado com sucesso! Nome: ${nome}, Email: ${email}`;
});